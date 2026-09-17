import {C as Be, V as f, Q as U, aq as $e, O as Te, E as qe, y as Je, ar as Q, as as k, H as Ye, at as Qe, K as l, au as xe, X as ee, av as de, aw as Ke, ax as et, j as We, ay as tt, A as it, az as ot} from "./BufferGeometryUtils-CZ6UOjC4.js";
const oe = new $e
  , T = new f
  , te = new f
  , _ = new U
  , Ze = {
    X: new f(1,0,0),
    Y: new f(0,1,0),
    Z: new f(0,0,1)
}
  , Ie = {
    type: "change"
}
  , He = {
    type: "mouseDown",
    mode: null
}
  , Ce = {
    type: "mouseUp",
    mode: null
}
  , je = {
    type: "objectChange"
};
class nt extends Be {
    constructor(a, t=null) {
        super(void 0, t);
        const r = new ht(this);
        this._root = r;
        const o = new pt;
        this._gizmo = o,
        r.add(o);
        const h = new dt;
        this._plane = h,
        r.add(h);
        const i = this;
        function p(v, q) {
            let F = q;
            Object.defineProperty(i, v, {
                get: function() {
                    return F !== void 0 ? F : q
                },
                set: function(O) {
                    F !== O && (F = O,
                    h[v] = O,
                    o[v] = O,
                    i.dispatchEvent({
                        type: v + "-changed",
                        value: O
                    }),
                    i.dispatchEvent(Ie))
                }
            }),
            i[v] = q,
            h[v] = q,
            o[v] = q
        }
        p("camera", a),
        p("object", void 0),
        p("enabled", !0),
        p("axis", null),
        p("mode", "translate"),
        p("translationSnap", null),
        p("rotationSnap", null),
        p("scaleSnap", null),
        p("space", "world"),
        p("size", 1),
        p("dragging", !1),
        p("showX", !0),
        p("showY", !0),
        p("showZ", !0),
        p("minX", -1 / 0),
        p("maxX", 1 / 0),
        p("minY", -1 / 0),
        p("maxY", 1 / 0),
        p("minZ", -1 / 0),
        p("maxZ", 1 / 0);
        const b = new f
          , j = new f
          , R = new U
          , A = new U
          , J = new f
          , s = new U
          , ae = new f
          , g = new f
          , W = new f
          , L = 0
          , Z = new f;
        p("worldPosition", b),
        p("worldPositionStart", j),
        p("worldQuaternion", R),
        p("worldQuaternionStart", A),
        p("cameraPosition", J),
        p("cameraQuaternion", s),
        p("pointStart", ae),
        p("pointEnd", g),
        p("rotationAxis", W),
        p("rotationAngle", L),
        p("eye", Z),
        this._offset = new f,
        this._startNorm = new f,
        this._endNorm = new f,
        this._cameraScale = new f,
        this._parentPosition = new f,
        this._parentQuaternion = new U,
        this._parentQuaternionInv = new U,
        this._parentScale = new f,
        this._worldScaleStart = new f,
        this._worldQuaternionInv = new U,
        this._worldScale = new f,
        this._positionStart = new f,
        this._quaternionStart = new U,
        this._scaleStart = new f,
        this._getPointer = at.bind(this),
        this._onPointerDown = rt.bind(this),
        this._onPointerHover = st.bind(this),
        this._onPointerMove = lt.bind(this),
        this._onPointerUp = ct.bind(this),
        t !== null && this.connect(t)
    }
    connect(a) {
        super.connect(a),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointermove", this._onPointerHover),
        this.domElement.addEventListener("pointerup", this._onPointerUp),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener("pointermove", this._onPointerHover),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.style.touchAction = "auto"
    }
    getHelper() {
        return this._root
    }
    pointerHover(a) {
        if (this.object === void 0 || this.dragging === !0)
            return;
        a !== null && oe.setFromCamera(a, this.camera);
        const t = Ae(this._gizmo.picker[this.mode], oe);
        t ? this.axis = t.object.name : this.axis = null
    }
    pointerDown(a) {
        if (!(this.object === void 0 || this.dragging === !0 || a != null && a.button !== 0) && this.axis !== null) {
            a !== null && oe.setFromCamera(a, this.camera);
            const t = Ae(this._plane, oe, !0);
            t && (this.object.updateMatrixWorld(),
            this.object.parent.updateMatrixWorld(),
            this._positionStart.copy(this.object.position),
            this._quaternionStart.copy(this.object.quaternion),
            this._scaleStart.copy(this.object.scale),
            this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart),
            this.pointStart.copy(t.point).sub(this.worldPositionStart)),
            this.dragging = !0,
            He.mode = this.mode,
            this.dispatchEvent(He)
        }
    }
    pointerMove(a) {
        const t = this.axis
          , r = this.mode
          , o = this.object;
        let h = this.space;
        if (r === "scale" ? h = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (h = "world"),
        o === void 0 || t === null || this.dragging === !1 || a !== null && a.button !== -1)
            return;
        a !== null && oe.setFromCamera(a, this.camera);
        const i = Ae(this._plane, oe, !0);
        if (i) {
            if (this.pointEnd.copy(i.point).sub(this.worldPositionStart),
            r === "translate")
                this._offset.copy(this.pointEnd).sub(this.pointStart),
                h === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv),
                t.indexOf("X") === -1 && (this._offset.x = 0),
                t.indexOf("Y") === -1 && (this._offset.y = 0),
                t.indexOf("Z") === -1 && (this._offset.z = 0),
                h === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),
                o.position.copy(this._offset).add(this._positionStart),
                this.translationSnap && (h === "local" && (o.position.applyQuaternion(_.copy(this._quaternionStart).invert()),
                t.search("X") !== -1 && (o.position.x = Math.round(o.position.x / this.translationSnap) * this.translationSnap),
                t.search("Y") !== -1 && (o.position.y = Math.round(o.position.y / this.translationSnap) * this.translationSnap),
                t.search("Z") !== -1 && (o.position.z = Math.round(o.position.z / this.translationSnap) * this.translationSnap),
                o.position.applyQuaternion(this._quaternionStart)),
                h === "world" && (o.parent && o.position.add(T.setFromMatrixPosition(o.parent.matrixWorld)),
                t.search("X") !== -1 && (o.position.x = Math.round(o.position.x / this.translationSnap) * this.translationSnap),
                t.search("Y") !== -1 && (o.position.y = Math.round(o.position.y / this.translationSnap) * this.translationSnap),
                t.search("Z") !== -1 && (o.position.z = Math.round(o.position.z / this.translationSnap) * this.translationSnap),
                o.parent && o.position.sub(T.setFromMatrixPosition(o.parent.matrixWorld)))),
                o.position.x = Math.max(this.minX, Math.min(this.maxX, o.position.x)),
                o.position.y = Math.max(this.minY, Math.min(this.maxY, o.position.y)),
                o.position.z = Math.max(this.minZ, Math.min(this.maxZ, o.position.z));
            else if (r === "scale") {
                if (t.search("XYZ") !== -1) {
                    let p = this.pointEnd.length() / this.pointStart.length();
                    this.pointEnd.dot(this.pointStart) < 0 && (p *= -1),
                    te.set(p, p, p)
                } else
                    T.copy(this.pointStart),
                    te.copy(this.pointEnd),
                    T.applyQuaternion(this._worldQuaternionInv),
                    te.applyQuaternion(this._worldQuaternionInv),
                    te.divide(T),
                    t.search("X") === -1 && (te.x = 1),
                    t.search("Y") === -1 && (te.y = 1),
                    t.search("Z") === -1 && (te.z = 1);
                o.scale.copy(this._scaleStart).multiply(te),
                this.scaleSnap && (t.search("X") !== -1 && (o.scale.x = Math.round(o.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap),
                t.search("Y") !== -1 && (o.scale.y = Math.round(o.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap),
                t.search("Z") !== -1 && (o.scale.z = Math.round(o.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap))
            } else if (r === "rotate") {
                this._offset.copy(this.pointEnd).sub(this.pointStart);
                const p = 20 / this.worldPosition.distanceTo(T.setFromMatrixPosition(this.camera.matrixWorld));
                let b = !1;
                t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),
                this.rotationAngle = this._offset.dot(T.copy(this.rotationAxis).cross(this.eye)) * p) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(Ze[t]),
                T.copy(Ze[t]),
                h === "local" && T.applyQuaternion(this.worldQuaternion),
                T.cross(this.eye),
                T.length() === 0 ? b = !0 : this.rotationAngle = this._offset.dot(T.normalize()) * p),
                (t === "E" || b) && (this.rotationAxis.copy(this.eye),
                this.rotationAngle = this.pointEnd.angleTo(this.pointStart),
                this._startNorm.copy(this.pointStart).normalize(),
                this._endNorm.copy(this.pointEnd).normalize(),
                this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1),
                this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap),
                h === "local" && t !== "E" && t !== "XYZE" ? (o.quaternion.copy(this._quaternionStart),
                o.quaternion.multiply(_.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv),
                o.quaternion.copy(_.setFromAxisAngle(this.rotationAxis, this.rotationAngle)),
                o.quaternion.multiply(this._quaternionStart).normalize())
            }
            this.dispatchEvent(Ie),
            this.dispatchEvent(je)
        }
    }
    pointerUp(a) {
        a !== null && a.button !== 0 || (this.dragging && this.axis !== null && (Ce.mode = this.mode,
        this.dispatchEvent(Ce)),
        this.dragging = !1,
        this.axis = null)
    }
    dispose() {
        this.disconnect(),
        this._root.dispose()
    }
    attach(a) {
        return this.object = a,
        this._root.visible = !0,
        this
    }
    detach() {
        return this.object = void 0,
        this.axis = null,
        this._root.visible = !1,
        this
    }
    reset() {
        this.enabled && this.dragging && (this.object.position.copy(this._positionStart),
        this.object.quaternion.copy(this._quaternionStart),
        this.object.scale.copy(this._scaleStart),
        this.dispatchEvent(Ie),
        this.dispatchEvent(je),
        this.pointStart.copy(this.pointEnd))
    }
    getRaycaster() {
        return oe
    }
    getMode() {
        return this.mode
    }
    setMode(a) {
        this.mode = a
    }
    setTranslationSnap(a) {
        this.translationSnap = a
    }
    setRotationSnap(a) {
        this.rotationSnap = a
    }
    setScaleSnap(a) {
        this.scaleSnap = a
    }
    setSize(a) {
        this.size = a
    }
    setSpace(a) {
        this.space = a
    }
    setColors(a, t, r, o) {
        const h = this._gizmo.materialLib;
        h.xAxis.color.set(a),
        h.yAxis.color.set(t),
        h.zAxis.color.set(r),
        h.active.color.set(o),
        h.xAxisTransparent.color.set(a),
        h.yAxisTransparent.color.set(t),
        h.zAxisTransparent.color.set(r),
        h.activeTransparent.color.set(o),
        h.xAxis._color && h.xAxis._color.set(a),
        h.yAxis._color && h.yAxis._color.set(t),
        h.zAxis._color && h.zAxis._color.set(r),
        h.active._color && h.active._color.set(o),
        h.xAxisTransparent._color && h.xAxisTransparent._color.set(a),
        h.yAxisTransparent._color && h.yAxisTransparent._color.set(t),
        h.zAxisTransparent._color && h.zAxisTransparent._color.set(r),
        h.activeTransparent._color && h.activeTransparent._color.set(o)
    }
}
function at(u) {
    if (this.domElement.ownerDocument.pointerLockElement)
        return {
            x: 0,
            y: 0,
            button: u.button
        };
    {
        const a = this.domElement.getBoundingClientRect();
        return {
            x: (u.clientX - a.left) / a.width * 2 - 1,
            y: -(u.clientY - a.top) / a.height * 2 + 1,
            button: u.button
        }
    }
}
function st(u) {
    if (this.enabled)
        switch (u.pointerType) {
        case "mouse":
        case "pen":
            this.pointerHover(this._getPointer(u));
            break
        }
}
function rt(u) {
    this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(u.pointerId),
    this.domElement.addEventListener("pointermove", this._onPointerMove),
    this.pointerHover(this._getPointer(u)),
    this.pointerDown(this._getPointer(u)))
}
function lt(u) {
    this.enabled && this.pointerMove(this._getPointer(u))
}
function ct(u) {
    this.enabled && (this.domElement.releasePointerCapture(u.pointerId),
    this.domElement.removeEventListener("pointermove", this._onPointerMove),
    this.pointerUp(this._getPointer(u)))
}
function Ae(u, a, t) {
    const r = a.intersectObject(u, !0);
    for (let o = 0; o < r.length; o++)
        if (r[o].object.visible || t)
            return r[o];
    return !1
}
const be = new et
  , w = new f(0,1,0)
  , Le = new f(0,0,0)
  , Oe = new We
  , ve = new U
  , Se = new U
  , N = new f
  , Re = new We
  , fe = new f(1,0,0)
  , ne = new f(0,1,0)
  , ye = new f(0,0,1)
  , Me = new f
  , ue = new f
  , me = new f;
class ht extends Te {
    constructor(a) {
        super(),
        this.isTransformControlsRoot = !0,
        this.controls = a,
        this.visible = !1
    }
    updateMatrixWorld(a) {
        const t = this.controls;
        t.object !== void 0 && (t.object.updateMatrixWorld(),
        t.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : t.object.parent.matrixWorld.decompose(t._parentPosition, t._parentQuaternion, t._parentScale),
        t.object.matrixWorld.decompose(t.worldPosition, t.worldQuaternion, t._worldScale),
        t._parentQuaternionInv.copy(t._parentQuaternion).invert(),
        t._worldQuaternionInv.copy(t.worldQuaternion).invert()),
        t.camera.updateMatrixWorld(),
        t.camera.matrixWorld.decompose(t.cameraPosition, t.cameraQuaternion, t._cameraScale),
        t.camera.isOrthographicCamera ? t.camera.getWorldDirection(t.eye).negate() : t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),
        super.updateMatrixWorld(a)
    }
    dispose() {
        this.traverse(function(a) {
            a.geometry && a.geometry.dispose(),
            a.material && a.material.dispose()
        })
    }
}
class pt extends Te {
    constructor() {
        super(),
        this.isTransformControlsGizmo = !0,
        this.type = "TransformControlsGizmo";
        const a = new qe({
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            toneMapped: !1,
            transparent: !0
        })
          , t = new Je({
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            toneMapped: !1,
            transparent: !0
        })
          , r = a.clone();
        r.opacity = .15;
        const o = t.clone();
        o.opacity = .5;
        const h = a.clone();
        h.color.setHex(16711680);
        const i = a.clone();
        i.color.setHex(65280);
        const p = a.clone();
        p.color.setHex(255);
        const b = a.clone();
        b.color.setHex(16711680),
        b.opacity = .5;
        const j = a.clone();
        j.color.setHex(65280),
        j.opacity = .5;
        const R = a.clone();
        R.color.setHex(255),
        R.opacity = .5;
        const A = a.clone();
        A.opacity = .25;
        const J = a.clone();
        J.color.setHex(16776960),
        J.opacity = .25;
        const s = a.clone();
        s.color.setHex(16776960);
        const ae = a.clone();
        ae.color.setHex(7895160),
        this.materialLib = {
            xAxis: h,
            yAxis: i,
            zAxis: p,
            active: s,
            xAxisTransparent: b,
            yAxisTransparent: j,
            zAxisTransparent: R,
            activeTransparent: J
        };
        const g = new Q(0,.04,.1,12);
        g.translate(0, .05, 0);
        const W = new k(.08,.08,.08);
        W.translate(0, .04, 0);
        const L = new Ye;
        L.setAttribute("position", new Qe([0, 0, 0, 1, 0, 0],3));
        const Z = new Q(.0075,.0075,.5,3);
        Z.translate(0, .25, 0);
        function v(I, le) {
            const S = new de(I,.0075,3,64,le * Math.PI * 2);
            return S.rotateY(Math.PI / 2),
            S.rotateX(Math.PI / 2),
            S
        }
        function q() {
            const I = new Ye;
            return I.setAttribute("position", new Qe([0, 0, 0, 1, 1, 1],3)),
            I
        }
        const F = {
            X: [[new l(g,h), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new l(g,h), [-.5, 0, 0], [0, 0, Math.PI / 2]], [new l(Z,h), [0, 0, 0], [0, 0, -Math.PI / 2]]],
            Y: [[new l(g,i), [0, .5, 0]], [new l(g,i), [0, -.5, 0], [Math.PI, 0, 0]], [new l(Z,i)]],
            Z: [[new l(g,p), [0, 0, .5], [Math.PI / 2, 0, 0]], [new l(g,p), [0, 0, -.5], [-Math.PI / 2, 0, 0]], [new l(Z,p), null, [Math.PI / 2, 0, 0]]],
            XYZ: [[new l(new xe(.1,0),A), [0, 0, 0]]],
            XY: [[new l(new k(.15,.15,.01),R), [.15, .15, 0]]],
            YZ: [[new l(new k(.15,.15,.01),b), [0, .15, .15], [0, Math.PI / 2, 0]]],
            XZ: [[new l(new k(.15,.15,.01),j), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
        }
          , O = {
            X: [[new l(new Q(.2,0,.6,4),r), [.3, 0, 0], [0, 0, -Math.PI / 2]], [new l(new Q(.2,0,.6,4),r), [-.3, 0, 0], [0, 0, Math.PI / 2]]],
            Y: [[new l(new Q(.2,0,.6,4),r), [0, .3, 0]], [new l(new Q(.2,0,.6,4),r), [0, -.3, 0], [0, 0, Math.PI]]],
            Z: [[new l(new Q(.2,0,.6,4),r), [0, 0, .3], [Math.PI / 2, 0, 0]], [new l(new Q(.2,0,.6,4),r), [0, 0, -.3], [-Math.PI / 2, 0, 0]]],
            XYZ: [[new l(new xe(.2,0),r)]],
            XY: [[new l(new k(.2,.2,.01),r), [.15, .15, 0]]],
            YZ: [[new l(new k(.2,.2,.01),r), [0, .15, .15], [0, Math.PI / 2, 0]]],
            XZ: [[new l(new k(.2,.2,.01),r), [.15, 0, .15], [-Math.PI / 2, 0, 0]]]
        }
          , we = {
            START: [[new l(new xe(.01,2),o), null, null, null, "helper"]],
            END: [[new l(new xe(.01,2),o), null, null, null, "helper"]],
            DELTA: [[new ee(q(),o), null, null, null, "helper"]],
            X: [[new ee(L,o), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
            Y: [[new ee(L,o), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
            Z: [[new ee(L,o), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
        }
          , se = {
            XYZE: [[new l(v(.5, 1),ae), null, [0, Math.PI / 2, 0]]],
            X: [[new l(v(.5, .5),h)]],
            Y: [[new l(v(.5, .5),i), null, [0, 0, -Math.PI / 2]]],
            Z: [[new l(v(.5, .5),p), null, [0, Math.PI / 2, 0]]],
            E: [[new l(v(.75, 1),J), null, [0, Math.PI / 2, 0]]]
        }
          , re = {
            AXIS: [[new ee(L,o), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]]
        }
          , ce = {
            XYZE: [[new l(new Ke(.25,10,8),r)]],
            X: [[new l(new de(.5,.1,4,24),r), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
            Y: [[new l(new de(.5,.1,4,24),r), [0, 0, 0], [Math.PI / 2, 0, 0]]],
            Z: [[new l(new de(.5,.1,4,24),r), [0, 0, 0], [0, 0, -Math.PI / 2]]],
            E: [[new l(new de(.75,.1,2,24),r)]]
        }
          , he = {
            X: [[new l(W,h), [.5, 0, 0], [0, 0, -Math.PI / 2]], [new l(Z,h), [0, 0, 0], [0, 0, -Math.PI / 2]], [new l(W,h), [-.5, 0, 0], [0, 0, Math.PI / 2]]],
            Y: [[new l(W,i), [0, .5, 0]], [new l(Z,i)], [new l(W,i), [0, -.5, 0], [0, 0, Math.PI]]],
            Z: [[new l(W,p), [0, 0, .5], [Math.PI / 2, 0, 0]], [new l(Z,p), [0, 0, 0], [Math.PI / 2, 0, 0]], [new l(W,p), [0, 0, -.5], [-Math.PI / 2, 0, 0]]],
            XY: [[new l(new k(.15,.15,.01),R), [.15, .15, 0]]],
            YZ: [[new l(new k(.15,.15,.01),b), [0, .15, .15], [0, Math.PI / 2, 0]]],
            XZ: [[new l(new k(.15,.15,.01),j), [.15, 0, .15], [-Math.PI / 2, 0, 0]]],
            XYZ: [[new l(new k(.1,.1,.1),A)]]
        }
          , M = {
            X: [[new l(new Q(.2,0,.6,4),r), [.3, 0, 0], [0, 0, -Math.PI / 2]], [new l(new Q(.2,0,.6,4),r), [-.3, 0, 0], [0, 0, Math.PI / 2]]],
            Y: [[new l(new Q(.2,0,.6,4),r), [0, .3, 0]], [new l(new Q(.2,0,.6,4),r), [0, -.3, 0], [0, 0, Math.PI]]],
            Z: [[new l(new Q(.2,0,.6,4),r), [0, 0, .3], [Math.PI / 2, 0, 0]], [new l(new Q(.2,0,.6,4),r), [0, 0, -.3], [-Math.PI / 2, 0, 0]]],
            XY: [[new l(new k(.2,.2,.01),r), [.15, .15, 0]]],
            YZ: [[new l(new k(.2,.2,.01),r), [0, .15, .15], [0, Math.PI / 2, 0]]],
            XZ: [[new l(new k(.2,.2,.01),r), [.15, 0, .15], [-Math.PI / 2, 0, 0]]],
            XYZ: [[new l(new k(.2,.2,.2),r), [0, 0, 0]]]
        }
          , G = {
            X: [[new ee(L,o), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
            Y: [[new ee(L,o), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
            Z: [[new ee(L,o), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
        };
        function X(I) {
            const le = new Te;
            for (const S in I)
                for (let D = I[S].length; D--; ) {
                    const P = I[S][D][0].clone()
                      , B = I[S][D][1]
                      , z = I[S][D][2]
                      , H = I[S][D][3]
                      , ge = I[S][D][4];
                    P.name = S,
                    P.tag = ge,
                    B && P.position.set(B[0], B[1], B[2]),
                    z && P.rotation.set(z[0], z[1], z[2]),
                    H && P.scale.set(H[0], H[1], H[2]),
                    P.updateMatrix();
                    const pe = P.geometry.clone();
                    pe.applyMatrix4(P.matrix),
                    P.geometry = pe,
                    P.renderOrder = 1 / 0,
                    P.position.set(0, 0, 0),
                    P.rotation.set(0, 0, 0),
                    P.scale.set(1, 1, 1),
                    le.add(P)
                }
            return le
        }
        this.gizmo = {},
        this.picker = {},
        this.helper = {},
        this.add(this.gizmo.translate = X(F)),
        this.add(this.gizmo.rotate = X(se)),
        this.add(this.gizmo.scale = X(he)),
        this.add(this.picker.translate = X(O)),
        this.add(this.picker.rotate = X(ce)),
        this.add(this.picker.scale = X(M)),
        this.add(this.helper.translate = X(we)),
        this.add(this.helper.rotate = X(re)),
        this.add(this.helper.scale = X(G)),
        this.picker.translate.visible = !1,
        this.picker.rotate.visible = !1,
        this.picker.scale.visible = !1
    }
    updateMatrixWorld(a) {
        const r = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : Se;
        this.gizmo.translate.visible = this.mode === "translate",
        this.gizmo.rotate.visible = this.mode === "rotate",
        this.gizmo.scale.visible = this.mode === "scale",
        this.helper.translate.visible = this.mode === "translate",
        this.helper.rotate.visible = this.mode === "rotate",
        this.helper.scale.visible = this.mode === "scale";
        let o = [];
        o = o.concat(this.picker[this.mode].children),
        o = o.concat(this.gizmo[this.mode].children),
        o = o.concat(this.helper[this.mode].children);
        for (let h = 0; h < o.length; h++) {
            const i = o[h];
            i.visible = !0,
            i.rotation.set(0, 0, 0),
            i.position.copy(this.worldPosition);
            let p;
            if (this.camera.isOrthographicCamera ? p = (this.camera.top - this.camera.bottom) / this.camera.zoom : p = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7),
            i.scale.set(1, 1, 1).multiplyScalar(p * this.size / 4),
            i.tag === "helper") {
                i.visible = !1,
                i.name === "AXIS" ? (i.visible = !!this.axis,
                this.axis === "X" && (_.setFromEuler(be.set(0, 0, 0)),
                i.quaternion.copy(r).multiply(_),
                Math.abs(w.copy(fe).applyQuaternion(r).dot(this.eye)) > .9 && (i.visible = !1)),
                this.axis === "Y" && (_.setFromEuler(be.set(0, 0, Math.PI / 2)),
                i.quaternion.copy(r).multiply(_),
                Math.abs(w.copy(ne).applyQuaternion(r).dot(this.eye)) > .9 && (i.visible = !1)),
                this.axis === "Z" && (_.setFromEuler(be.set(0, Math.PI / 2, 0)),
                i.quaternion.copy(r).multiply(_),
                Math.abs(w.copy(ye).applyQuaternion(r).dot(this.eye)) > .9 && (i.visible = !1)),
                this.axis === "XYZE" && (_.setFromEuler(be.set(0, Math.PI / 2, 0)),
                w.copy(this.rotationAxis),
                i.quaternion.setFromRotationMatrix(Oe.lookAt(Le, w, ne)),
                i.quaternion.multiply(_),
                i.visible = this.dragging),
                this.axis === "E" && (i.visible = !1)) : i.name === "START" ? (i.position.copy(this.worldPositionStart),
                i.visible = this.dragging) : i.name === "END" ? (i.position.copy(this.worldPosition),
                i.visible = this.dragging) : i.name === "DELTA" ? (i.position.copy(this.worldPositionStart),
                i.quaternion.copy(this.worldQuaternionStart),
                T.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),
                T.applyQuaternion(this.worldQuaternionStart.clone().invert()),
                i.scale.copy(T),
                i.visible = this.dragging) : (i.quaternion.copy(r),
                this.dragging ? i.position.copy(this.worldPositionStart) : i.position.copy(this.worldPosition),
                this.axis && (i.visible = this.axis.search(i.name) !== -1));
                continue
            }
            i.quaternion.copy(r),
            this.mode === "translate" || this.mode === "scale" ? (i.name === "X" && Math.abs(w.copy(fe).applyQuaternion(r).dot(this.eye)) > .99 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1),
            i.name === "Y" && Math.abs(w.copy(ne).applyQuaternion(r).dot(this.eye)) > .99 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1),
            i.name === "Z" && Math.abs(w.copy(ye).applyQuaternion(r).dot(this.eye)) > .99 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1),
            i.name === "XY" && Math.abs(w.copy(ye).applyQuaternion(r).dot(this.eye)) < .2 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1),
            i.name === "YZ" && Math.abs(w.copy(fe).applyQuaternion(r).dot(this.eye)) < .2 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1),
            i.name === "XZ" && Math.abs(w.copy(ne).applyQuaternion(r).dot(this.eye)) < .2 && (i.scale.set(1e-10, 1e-10, 1e-10),
            i.visible = !1)) : this.mode === "rotate" && (ve.copy(r),
            w.copy(this.eye).applyQuaternion(_.copy(r).invert()),
            i.name.search("E") !== -1 && i.quaternion.setFromRotationMatrix(Oe.lookAt(this.eye, Le, ne)),
            i.name === "X" && (_.setFromAxisAngle(fe, Math.atan2(-w.y, w.z)),
            _.multiplyQuaternions(ve, _),
            i.quaternion.copy(_)),
            i.name === "Y" && (_.setFromAxisAngle(ne, Math.atan2(w.x, w.z)),
            _.multiplyQuaternions(ve, _),
            i.quaternion.copy(_)),
            i.name === "Z" && (_.setFromAxisAngle(ye, Math.atan2(w.y, w.x)),
            _.multiplyQuaternions(ve, _),
            i.quaternion.copy(_))),
            i.visible = i.visible && (i.name.indexOf("X") === -1 || this.showX),
            i.visible = i.visible && (i.name.indexOf("Y") === -1 || this.showY),
            i.visible = i.visible && (i.name.indexOf("Z") === -1 || this.showZ),
            i.visible = i.visible && (i.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ),
            i.material._color = i.material._color || i.material.color.clone(),
            i.material._opacity = i.material._opacity || i.material.opacity,
            i.material.color.copy(i.material._color),
            i.material.opacity = i.material._opacity,
            this.enabled && this.axis && (i.name === this.axis ? (i.material.color.copy(this.materialLib.active.color),
            i.material.opacity = 1) : this.axis.split("").some(function(b) {
                return i.name === b
            }) && (i.material.color.copy(this.materialLib.active.color),
            i.material.opacity = 1))
        }
        super.updateMatrixWorld(a)
    }
}
class dt extends l {
    constructor() {
        super(new tt(1e5,1e5,2,2), new qe({
            visible: !1,
            wireframe: !0,
            side: it,
            transparent: !0,
            opacity: .1,
            toneMapped: !1
        })),
        this.isTransformControlsPlane = !0,
        this.type = "TransformControlsPlane"
    }
    updateMatrixWorld(a) {
        let t = this.space;
        switch (this.position.copy(this.worldPosition),
        this.mode === "scale" && (t = "local"),
        Me.copy(fe).applyQuaternion(t === "local" ? this.worldQuaternion : Se),
        ue.copy(ne).applyQuaternion(t === "local" ? this.worldQuaternion : Se),
        me.copy(ye).applyQuaternion(t === "local" ? this.worldQuaternion : Se),
        w.copy(ue),
        this.mode) {
        case "translate":
        case "scale":
            switch (this.axis) {
            case "X":
                w.copy(this.eye).cross(Me),
                N.copy(Me).cross(w);
                break;
            case "Y":
                w.copy(this.eye).cross(ue),
                N.copy(ue).cross(w);
                break;
            case "Z":
                w.copy(this.eye).cross(me),
                N.copy(me).cross(w);
                break;
            case "XY":
                N.copy(me);
                break;
            case "YZ":
                N.copy(Me);
                break;
            case "XZ":
                w.copy(me),
                N.copy(ue);
                break;
            case "XYZ":
            case "E":
                N.set(0, 0, 0);
                break
            }
            break;
        case "rotate":
        default:
            N.set(0, 0, 0)
        }
        N.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (Re.lookAt(T.set(0, 0, 0), N, w),
        this.quaternion.setFromRotationMatrix(Re)),
        super.updateMatrixWorld(a)
    }
}
async function mt(u) {
    const {THREE: a, $: t, scene: r, camera: o, renderer: h, controls: i, world: p, modelRoot: b, objects: j, shells: R, meshes: A, animated: J, state: s, metrics: ae, config: g, facts: W, ticks: L} = u
      , Z = await fetch("/data/interaction-spec.json").then(e => e.json())
      , v = new Map(Z.objects.map(e => [e.id, e]))
      , q = e => new a.Vector3(...e)
      , F = e => new a.Vector3(e[0],e[2],-e[1])
      , O = e => {
        for (let n = e; n; n = n.parent) {
            if (v.has(n.userData.original_name))
                return n.userData.original_name;
            if (v.has(n.userData.entity_id))
                return n.userData.entity_id;
            if (n.userData.package === "environment")
                return "landscape"
        }
        return ""
    }
    ;
    function we(e) {
        for (let n = e; n; n = n.parent)
            if (n.userData.animation_kind || n.userData.original_name?.startsWith("solar_bar_"))
                return !0;
        return !1
    }
    r.updateMatrixWorld(!0);
    const se = new Map
      , re = new Map
      , ce = [];
    for (const e of A) {
        if (!e.isMesh || we(e))
            continue;
        const n = O(e);
        if (n === "forest" && !Array.isArray(e.material)) {
            const x = e.geometry.uuid + "|" + e.material.uuid;
            re.has(x) || re.set(x, []),
            re.get(x).push(e),
            ce.push(e);
            continue
        }
        if (Array.isArray(e.material))
            continue;
        const y = e.userData.shell_side ?? ""
          , d = n + "|" + e.material.name + "|" + y;
        se.has(d) || se.set(d, {
            items: [],
            id: n,
            side: y,
            material: e.material
        }),
        se.get(d).items.push(e),
        ce.push(e)
    }
    for (const e of se.values()) {
        const n = e.items.map(x => {
            let m = x.geometry.index ? x.geometry.toNonIndexed() : x.geometry.clone();
            m.applyMatrix4(x.matrixWorld);
            for (const E of Object.keys(m.attributes))
                ["position", "normal", ...e.material.normalMap ? ["uv"] : []].includes(E) || m.deleteAttribute(E);
            return m.attributes.normal || m.computeVertexNormals(),
            m
        }
        )
          , c = ot(n, !1);
        if (n.forEach(x => x.dispose()),
        !c)
            continue;
        const y = e.material.clone()
          , d = new a.Mesh(c,y);
        d.name = "batch_" + e.id,
        d.userData.entity_id = e.id,
        d.userData.shell_side = e.side || void 0,
        d.castShadow = !0,
        d.receiveShadow = !0,
        (e.id === "cordilleras" || e.id === "forest" || e.id === "landscape" ? p : b).add(d),
        e.side && R.push(d),
        A.push(d)
    }
    for (const e of re.values()) {
        const n = e[0]
          , c = new a.InstancedMesh(n.geometry,n.material,e.length);
        e.forEach( (y, d) => c.setMatrixAt(d, y.matrixWorld)),
        c.instanceMatrix.needsUpdate = !0,
        c.computeBoundingSphere(),
        c.userData.entity_id = "forest",
        c.userData.fullCount = e.length,
        c.castShadow = !0,
        c.receiveShadow = !0,
        c.name = "instanced_forest",
        p.add(c),
        A.push(c)
    }
    for (const e of ce) {
        e.removeFromParent();
        const n = R.indexOf(e);
        n >= 0 && R.splice(n, 1);
        const c = A.indexOf(e);
        c >= 0 && A.splice(c, 1)
    }
    const he = new Map;
    for (const e of A)
        e.isMesh && (we(e) && (e.material = Array.isArray(e.material) ? e.material.map(c => c.clone()) : e.material.clone()),
        (Array.isArray(e.material) ? e.material : [e.material]).forEach(c => {
            he.has(c) || he.set(c, {
                color: c.color.clone(),
                emissive: c.emissive?.clone()
            })
        }
        ));
    for (const e of Z.objects) {
        const n = new Option(e.name,e.id);
        t("#zone").add(n)
    }
    for (const [e,n] of g.levels.entries())
        t("#level").add(new Option(e === 0 ? "Земля" : `${e} — ${n} м`,String(n)));
    for (const [e,n] of [["Paper", "paper"], ["Plastic", "plastic"], ["University", "university"], ["Pond", "pond_garden"], ["Tree Room", "tree_room"], ["Helipad", "helipad"]]) {
        const c = v.get(n)?.target ?? [0, 0, 12];
        g.cameras[e] = {
            eye: [c[0] + 5, c[1] - 17, c[2] + 6],
            target: c
        },
        t("#camera").add(new Option(v.get(n)?.name ?? e,e))
    }
    let M = null
      , G = null
      , X = 0
      , I = null;
    const le = u.setMode;
    function S() {
        const e = new URLSearchParams({
            mode: s.mode,
            zone: s.selected,
            process: s.process,
            speed: String(s.speed),
            reduced: s.reducedMotion ? "1" : "0",
            flights: s.flights ? "1" : "0"
        });
        history.replaceState(null, "", "#" + e.toString())
    }
    function D(e, n) {
        const c = q(n);
        s.reducedMotion ? (u.lookAt(e, n),
        M = null) : M = {
            from: o.position.clone(),
            to: q(e),
            a: i.target.clone(),
            b: c,
            t: 0
        }
    }
    function P() {
        for (const [e,n] of he)
            e.color.copy(n.color),
            e.emissive && n.emissive && e.emissive.copy(n.emissive);
        if (s.mode === "interior" || s.mode === "process")
            for (const e of A) {
                const n = O(e);
                if (!(s.mode === "interior" ? n === s.selected : B[s.process]?.includes(n)) && n !== "lemon_shell" && !["forest", "cordilleras", "landscape"].includes(n))
                    for (const y of Array.isArray(e.material) ? e.material : [e.material])
                        y.color.multiplyScalar(.48)
            }
    }
    const B = {
        paper: ["paper_intake", "paper", "paper_output", "paper_car"],
        plastic: ["plastic_intake", "plastic"],
        air: ["air", "air_inlet", "air_outlet", "air_filter_1", "air_filter_2", "air_filter_3"],
        elevator: ["elevator", "elevator_cab"],
        transport: ["paper_car", "service_car", "helicopter_1", "helicopter_2", "helipad"]
    };
    function z(e) {
        if (le(e),
        e === "interior" && !s.selected && H("university", !1),
        e === "process") {
            const n = B[s.process][0];
            H(n, !1)
        }
        P(),
        S()
    }
    u.setMode = z,
    document.querySelectorAll("[data-mode]").forEach(e => e.addEventListener("click", () => {
        z(e.dataset.mode),
        e.dataset.mode === "cutaway" && D([8, -77, 28], [0, 0, 13]),
        e.dataset.mode === "exterior" && D(g.cameras.Exterior.eye, g.cameras.Exterior.target)
    }
    ));
    function H(e, n=!1) {
        const c = v.get(e);
        c && (s.selected = e,
        t("#zone").value = e,
        t("#card").hidden = !1,
        t("#card-title").textContent = c.name,
        t("#card-type").textContent = c.type,
        t("#card-description").textContent = c.description,
        t("#card-fact").textContent = c.fact ? "По рассказу Димы · " + c.fact : "Проектное решение",
        t("#elevator-panel").hidden = !["elevator", "elevator_cab"].includes(e),
        n && ge(),
        P(),
        S())
    }
    function ge() {
        const e = v.get(s.selected);
        if (!e)
            return;
        z("interior");
        const n = e.target ?? [0, 0, 13];
        D([n[0] + 4, n[1] - 17, n[2] + 5], n)
    }
    t("#zone").addEventListener("change", e => {
        e.target.value && (H(e.target.value),
        s.mode === "exterior" && z("cutaway"))
    }
    ),
    t("#focus").onclick = ge,
    t("#close-card").onclick = () => {
        t("#card").hidden = !0,
        s.selected = "",
        t("#zone").value = "",
        P(),
        S()
    }
    ,
    t("#camera").onchange = e => {
        const n = g.cameras[e.target.value];
        n && (z(["Exterior", "Arrival", "Mountain View"].includes(e.target.value) ? "exterior" : "cutaway"),
        D(n.eye, n.target))
    }
    ,
    t("#process").onchange = e => {
        s.process = e.target.value,
        z("process"),
        s.time = 0,
        H(B[s.process][0]),
        s.process === "transport" ? D([28, -67, 34], [0, -5, 12]) : D([6, -73, 24], [0, 0, 12])
    }
    ;
    const pe = new a.Raycaster
      , Xe = new a.Vector2
      , Pe = new a.Raycaster
      , _e = o.position.clone();
    u.postTicks.push( () => {
        const e = o.position.clone().sub(_e)
          , n = e.length();
        if (n > .001 && n < 20 && !M) {
            Pe.set(_e, e.normalize()),
            Pe.far = n + .3,
            r.updateMatrixWorld(!0);
            const c = Pe.intersectObjects(A.filter(y => y.visible && !y.isInstancedMesh && (Array.isArray(y.material) ? y.material[0] : y.material).opacity > .6), !1)[0];
            c && c.distance < n + .3 && o.position.copy(_e).addScaledVector(e, Math.max(0, c.distance - .3))
        }
        _e.copy(o.position)
    }
    ),
    h.domElement.addEventListener("pointerdown", e => I = [e.clientX, e.clientY]),
    h.domElement.addEventListener("pointerup", e => {
        if (!I || Math.hypot(e.clientX - I[0], e.clientY - I[1]) > 5 || V.dragging)
            return;
        const n = h.domElement.getBoundingClientRect();
        Xe.set((e.clientX - n.left) / n.width * 2 - 1, -(e.clientY - n.top) / n.height * 2 + 1),
        pe.setFromCamera(Xe, o);
        const c = pe.intersectObjects(A, !1).find(y => y.object.visible && O(y.object));
        c && H(O(c.object))
    }
    );
    const V = new nt(o,h.domElement)
      , Fe = V.getHelper();
    r.add(Fe),
    V.addEventListener("dragging-changed", e => {
        i.enabled = !e.value
    }
    ),
    t("#move").onclick = () => {
        V.attach(b),
        V.setMode("translate")
    }
    ,
    t("#rotate").onclick = () => {
        V.attach(b),
        V.setMode("rotate")
    }
    ,
    t("#reset-transform").onclick = () => {
        b.position.set(0, 0, 0),
        b.quaternion.identity(),
        b.scale.setScalar(1),
        V.detach()
    }
    ;
    const Ee = e => `00:${String(Math.floor(e)).padStart(2, "0")}`;
    function K(e) {
        s.playing = e && !s.reducedMotion,
        G = null,
        t("#play").textContent = s.playing ? "❚❚ Пауза" : "▶ Запустить",
        t("#play").setAttribute("aria-label", s.playing ? "Пауза" : "Запустить анимацию")
    }
    t("#play").onclick = () => K(!s.playing),
    t("#restart").onclick = () => {
        s.time = 0,
        G = null,
        ie()
    }
    ,
    t("#timeline").max = g.animation.duration,
    t("#timeline").oninput = e => {
        s.time = Number(e.target.value),
        K(!1),
        ie()
    }
    ,
    t("#speed").onchange = e => {
        s.speed = Number(e.target.value),
        S()
    }
    ,
    t("#reduced").checked = s.reducedMotion,
    t("#reduced").onchange = e => {
        s.reducedMotion = e.target.checked,
        i.enableDamping = !s.reducedMotion,
        s.reducedMotion && (K(!1),
        M = null),
        S()
    }
    ,
    t("#flights").onchange = e => {
        s.flights = e.target.checked,
        S(),
        ie()
    }
    ,
    t("#level").onchange = e => {
        K(!1),
        G = Number(e.target.value),
        X = j.get("elevator_cab").position.y,
        s.reducedMotion && (X = G)
    }
    ;
    function Ge(e, n) {
        const c = Math.min(e.length - 2, Math.floor(n * (e.length - 1)))
          , y = n * (e.length - 1) - c
          , [d,x,m,E] = [e[Math.max(0, c - 1)], e[c], e[c + 1], e[Math.min(e.length - 1, c + 2)]].map(q);
        return x.clone().multiplyScalar(2).addScaledVector(m.clone().sub(d), y).addScaledVector(d.clone().multiplyScalar(2).addScaledVector(x, -5).addScaledVector(m, 4).sub(E), y * y).addScaledVector(d.clone().negate().addScaledVector(x, 3).addScaledVector(m, -3).add(E), y * y * y).multiplyScalar(.5)
    }
    function ie() {
        const e = s.time
          , n = g.animation.duration
          , c = e / n;
        for (const d of J) {
            const x = d.userData.animation_kind;
            if (x === "route") {
                const m = d.userData.route;
                let E = (c * 2 + d.userData.phase) % 1
                  , Y = !0;
                m === "paper_intake" && (Y = e < 9,
                E = (e / 9 + d.userData.phase * .7) % 1),
                m === "paper_output" && (Y = e >= 12 && e < 19,
                E = ((e - 12) / 7 + d.userData.phase * .5) % 1),
                m === "plastic_intake" && (Y = e < 10),
                m === "air" && (Y = e >= 8),
                d.visible = Y,
                d.scale.setScalar(1),
                E = (E % 1 + 1) % 1;
                const $ = Ge(g.routes[m], E);
                $.y -= .25,
                $.z += .32,
                d.position.copy(F($.toArray()))
            } else if (x === "elevator") {
                const m = [...g.levels, ...g.levels.slice(0, -1).reverse()]
                  , E = c * (m.length - 1)
                  , Y = Math.min(m.length - 2, Math.floor(E))
                  , $ = a.MathUtils.clamp((E - Y - .3) / .7, 0, 1)
                  , Ne = $ * $ * (3 - 2 * $);
                d.position.y = G === null ? m[Y] + (m[Y + 1] - m[Y]) * Ne : X;
                const Ue = g.levels.reduce( (ke, De) => Math.abs(De - d.position.y) < Math.abs(ke - d.position.y) ? De : ke, 0);
                t("#floor-now").textContent = `Кабина: ${d.position.y.toFixed(1)} м · ближайшая остановка ${g.levels.indexOf(Ue)}`
            } else if (x === "helicopter") {
                const m = d.userData.base
                  , E = d.userData.original_name.endsWith("1") ? -1 : 1
                  , Y = c
                  , $ = Math.sin(Math.PI * Y) ** 2;
                d.position.copy(F(s.flights ? [m[0] + E * Math.sin(Y * Math.PI) * 4, m[1] + Math.sin(Y * Math.PI) * 5, m[2] + $ * 6] : m))
            } else if (x === "rotor")
                d.rotation.y = s.flights ? c * Math.PI * 96 : 0;
            else if (x === "car") {
                const m = d.userData.base
                  , E = Math.max(0, (e - 18) / 6);
                d.position.copy(F([m[0] + (e >= 18 ? E * 12 : 0), m[1], m[2]]))
            }
        }
        for (const [d,x] of j)
            d.startsWith("solar_bar_") && (x.scale.y = .35 + .65 * Math.sin(Math.PI * c) ** 2),
            d.startsWith("new_reusable_cup") && (x.visible = e === 0 || e >= 12);
        t("#timeline").value = String(e),
        t("#time").textContent = `${Ee(e)} / ${Ee(n)}`;
        const y = e < 9 ? "Подача сырья" : e < 12 ? "Обработка и нагрев" : e < 19 ? "Новая бумага и изделия" : "Загрузка и доставка";
        document.body.dataset.phase = y,
        s.mode === "process" ? t(".intro .eyebrow").textContent = `${y.toUpperCase()} · ${Ee(e)}` : t(".intro .eyebrow").textContent = "01 / ЖИВОЙ ЛИМОН"
    }
    L.push(e => {
        if (s.playing && !s.reducedMotion && (s.time = (s.time + e * s.speed) % g.animation.duration),
        G !== null && (X = s.reducedMotion ? G : a.MathUtils.damp(X, G, 2.4, e)),
        M) {
            M.t = Math.min(1, M.t + e / 1.1);
            const n = M.t * M.t * (3 - 2 * M.t);
            o.position.lerpVectors(M.from, M.to, n),
            i.target.lerpVectors(M.a, M.b, n),
            M.t === 1 && (M = null)
        }
        ie();
        for (const n of A)
            n.isInstancedMesh && (n.count = o.position.distanceTo(i.target) > 135 ? Math.ceil(n.userData.fullCount * .55) : n.userData.fullCount);
        document.body.dataset.viewerState = JSON.stringify({
            mode: s.mode,
            selected: s.selected,
            process: s.process,
            playing: s.playing,
            time: +s.time.toFixed(3),
            reducedMotion: s.reducedMotion,
            cabHeight: +(j.get("elevator_cab")?.position.y ?? 0).toFixed(3),
            transform: b.position.toArray(),
            rotation: b.rotation.toArray().slice(0, 3),
            ready: !0,
            ...ae
        })
    }
    ),
    document.addEventListener("keydown", e => {
        ["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName) || (e.code === "Space" && (e.preventDefault(),
        K(!s.playing)),
        e.key === "Escape" && V.detach(),
        ["1", "2", "3", "4", "5"].includes(e.key) && z(["exterior", "cutaway", "xray", "interior", "process"][Number(e.key) - 1]),
        e.key.toLowerCase() === "r" && (s.time = 0,
        ie()),
        e.key === "ArrowRight" && (e.preventDefault(),
        s.time = Math.min(g.animation.duration, s.time + 1),
        K(!1)),
        e.key === "ArrowLeft" && (e.preventDefault(),
        s.time = Math.max(0, s.time - 1),
        K(!1)))
    }
    ),
    t(".brand").onclick = e => {
        e.preventDefault(),
        z("exterior"),
        D(g.cameras.Exterior.eye, g.cameras.Exterior.target)
    }
    ;
    const C = new URLSearchParams(location.hash.slice(1));
    C.has("speed") && [.5, 1, 2].includes(Number(C.get("speed"))) && (s.speed = Number(C.get("speed")),
    t("#speed").value = String(s.speed)),
    C.has("reduced") && (s.reducedMotion = C.get("reduced") === "1"),
    t("#reduced").checked = s.reducedMotion,
    C.has("flights") && (s.flights = C.get("flights") === "1"),
    t("#flights").checked = s.flights,
    v.has(C.get("zone")) && H(C.get("zone")),
    B[C.get("process")] && (s.process = C.get("process")),
    t("#process").value = s.process,
    z(["exterior", "cutaway", "xray", "interior", "process"].includes(C.get("mode")) ? C.get("mode") : "exterior");
    const Ve = {
        name: "set_recycle_view",
        title: "Осмотреть Recycle Community",
        description: "Выбрать режим обзора и зону в локальной 3D-диораме.",
        inputSchema: {
            type: "object",
            properties: {
                mode: {
                    type: "string",
                    enum: ["exterior", "cutaway", "xray", "interior", "process"]
                },
                zone: {
                    type: "string"
                }
            },
            required: ["mode"],
            additionalProperties: !1
        },
        annotations: {
            readOnlyHint: !1,
            untrustedContentHint: !1
        },
        execute(e) {
            if (!e || !["exterior", "cutaway", "xray", "interior", "process"].includes(e.mode) || e.zone && !v.has(e.zone))
                throw Error("Неверный режим или зона");
            return z(e.mode),
            e.zone && H(e.zone),
            {
                mode: s.mode,
                zone: s.selected
            }
        }
    }
      , ze = new AbortController;
    if (document.modelContext?.registerTool)
        try {
            await document.modelContext.registerTool(Ve, {
                signal: ze.signal
            })
        } catch (e) {
            console.warn("WebMCP registration unavailable", e)
        }
    addEventListener("pagehide", () => ze.abort(), {
        once: !0
    }),
    u.select = H,
    u.play = K,
    u.updateAnimations = ie,
    u.meta = Z,
    u.gizmo = V,
    u.getState = () => JSON.parse(document.body.dataset.viewerState ?? "{}"),
    ie()
}
export {mt as connect};
