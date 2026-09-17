const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/interactions-CB83b4ow.js", "assets/BufferGeometryUtils-CZ6UOjC4.js"]))) => i.map(i => d[i]);
import {C as rt, V as S, M as V, T as Y, Q as ne, S as Se, a as O, R as ct, P as bt, b as ze, L as lt, c as ae, F as qe, d as G, e as B, f as z, g as Z, h as ht, i as dt, D as Ae, j as ie, I as pt, k as ft, O as Ue, l as ut, m as mt, B as le, n as gt, o as Be, N as xt, p as _t, q as Tt, r as _e, s as We, t as Te, u as wt, v as kt, w as At, x as he, y as Et, z as Qe, A as Rt, E as te, G as yt, H as jt, J as St, K as Mt, U as Me, W as Ot, X as Lt, Y as Ft, Z as vt, _ as X, $ as Ye, a0 as Dt, a1 as Pt, a2 as Ht, a3 as Ct, a4 as Nt, a5 as Ve, a6 as Gt, a7 as Oe, a8 as Le, a9 as Fe, aa as ve, ab as De, ac as Kt, ad as It, ae as zt, af as qt, ag as Ut, ah as Bt, ai as Wt, aj as Qt, ak as Yt, al as Vt, am as Xt, an as Jt, ao as Zt, ap as $t} from "./BufferGeometryUtils-CZ6UOjC4.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        s(a);
    new MutationObserver(a => {
        for (const n of a)
            if (n.type === "childList")
                for (const i of n.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(a) {
        const n = {};
        return a.integrity && (n.integrity = a.integrity),
        a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? n.credentials = "include" : a.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function s(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const n = t(a);
        fetch(a.href, n)
    }
}
)();
const ea = "modulepreload"
  , ta = function(c) {
    return "/" + c
}
  , Pe = {}
  , aa = function(e, t, s) {
    let a = Promise.resolve();
    if (t && t.length > 0) {
        let o = function(b) {
            return Promise.all(b.map(h => Promise.resolve(h).then(l => ({
                status: "fulfilled",
                value: l
            }), l => ({
                status: "rejected",
                reason: l
            }))))
        };
        document.getElementsByTagName("link");
        const i = document.querySelector("meta[property=csp-nonce]")
          , r = i?.nonce || i?.getAttribute("nonce");
        a = o(t.map(b => {
            if (b = ta(b),
            b in Pe)
                return;
            Pe[b] = !0;
            const h = b.endsWith(".css")
              , l = h ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${b}"]${l}`))
                return;
            const d = document.createElement("link");
            if (d.rel = h ? "stylesheet" : ea,
            h || (d.as = "script"),
            d.crossOrigin = "",
            d.href = b,
            r && d.setAttribute("nonce", r),
            document.head.appendChild(d),
            h)
                return new Promise( (p, x) => {
                    d.addEventListener("load", p),
                    d.addEventListener("error", () => x(new Error(`Unable to preload CSS for ${b}`)))
                }
                )
        }
        ))
    }
    function n(i) {
        const r = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (r.payload = i,
        window.dispatchEvent(r),
        !r.defaultPrevented)
            throw i
    }
    return a.then(i => {
        for (const r of i || [])
            r.status === "rejected" && n(r.reason);
        return e().catch(n)
    }
    )
}
  , He = {
    type: "change"
}
  , Ee = {
    type: "start"
}
  , Xe = {
    type: "end"
}
  , se = new ct
  , Ce = new bt
  , sa = Math.cos(70 * ze.DEG2RAD)
  , y = new S
  , M = 2 * Math.PI
  , A = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , de = 1e-6;
class na extends rt {
    constructor(e, t=null) {
        super(e, t),
        this.state = A.NONE,
        this.target = new S,
        this.cursor = new S,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.keyRotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: V.ROTATE,
            MIDDLE: V.DOLLY,
            RIGHT: V.PAN
        },
        this.touches = {
            ONE: Y.ROTATE,
            TWO: Y.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this._lastPosition = new S,
        this._lastQuaternion = new ne,
        this._lastTargetPosition = new S,
        this._quat = new ne().setFromUnitVectors(e.up, new S(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new Se,
        this._sphericalDelta = new Se,
        this._scale = 1,
        this._panOffset = new S,
        this._rotateStart = new O,
        this._rotateEnd = new O,
        this._rotateDelta = new O,
        this._panStart = new O,
        this._panEnd = new O,
        this._panDelta = new O,
        this._dollyStart = new O,
        this._dollyEnd = new O,
        this._dollyDelta = new O,
        this._dollyDirection = new S,
        this._mouse = new O,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = oa.bind(this),
        this._onPointerDown = ia.bind(this),
        this._onPointerUp = ra.bind(this),
        this._onContextMenu = fa.bind(this),
        this._onMouseWheel = la.bind(this),
        this._onKeyDown = ha.bind(this),
        this._onTouchStart = da.bind(this),
        this._onTouchMove = pa.bind(this),
        this._onMouseDown = ca.bind(this),
        this._onMouseMove = ba.bind(this),
        this._interceptControlDown = ua.bind(this),
        this._interceptControlUp = ma.bind(this),
        this.domElement !== null && this.connect(this.domElement),
        this.update()
    }
    connect(e) {
        super.connect(e),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointercancel", this._onPointerUp),
        this.domElement.addEventListener("contextmenu", this._onContextMenu),
        this.domElement.addEventListener("wheel", this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.removeEventListener("pointercancel", this._onPointerUp),
        this.domElement.removeEventListener("wheel", this._onMouseWheel),
        this.domElement.removeEventListener("contextmenu", this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
            capture: !0
        }),
        this.domElement.style.touchAction = "auto"
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(e) {
        e.addEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = e
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(He),
        this.update(),
        this.state = A.NONE
    }
    update(e=null) {
        const t = this.object.position;
        y.copy(t).sub(this.target),
        y.applyQuaternion(this._quat),
        this._spherical.setFromVector3(y),
        this.autoRotate && this.state === A.NONE && this._rotateLeft(this._getAutoRotationAngle(e)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let s = this.minAzimuthAngle
          , a = this.maxAzimuthAngle;
        isFinite(s) && isFinite(a) && (s < -Math.PI ? s += M : s > Math.PI && (s -= M),
        a < -Math.PI ? a += M : a > Math.PI && (a -= M),
        s <= a ? this._spherical.theta = Math.max(s, Math.min(a, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + a) / 2 ? Math.max(s, this._spherical.theta) : Math.min(a, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let n = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            const i = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            n = i != this._spherical.radius
        }
        if (y.setFromSpherical(this._spherical),
        y.applyQuaternion(this._quatInverse),
        t.copy(this.target).add(y),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let i = null;
            if (this.object.isPerspectiveCamera) {
                const r = y.length();
                i = this._clampDistance(r * this._scale);
                const o = r - i;
                this.object.position.addScaledVector(this._dollyDirection, o),
                this.object.updateMatrixWorld(),
                n = !!o
            } else if (this.object.isOrthographicCamera) {
                const r = new S(this._mouse.x,this._mouse.y,0);
                r.unproject(this.object);
                const o = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                n = o !== this.object.zoom;
                const b = new S(this._mouse.x,this._mouse.y,0);
                b.unproject(this.object),
                this.object.position.sub(b).add(r),
                this.object.updateMatrixWorld(),
                i = y.length()
            } else
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                this.zoomToCursor = !1;
            i !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(i).add(this.object.position) : (se.origin.copy(this.object.position),
            se.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(se.direction)) < sa ? this.object.lookAt(this.target) : (Ce.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            se.intersectPlane(Ce, this.target))))
        } else if (this.object.isOrthographicCamera) {
            const i = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            i !== this.object.zoom && (this.object.updateProjectionMatrix(),
            n = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        n || this._lastPosition.distanceToSquared(this.object.position) > de || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > de || this._lastTargetPosition.distanceToSquared(this.target) > de ? (this.dispatchEvent(He),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(e) {
        return e !== null ? M / 60 * this.autoRotateSpeed * e : M / 60 / 60 * this.autoRotateSpeed
    }
    _getZoomScale(e) {
        const t = Math.abs(e * .01);
        return Math.pow(.95, this.zoomSpeed * t)
    }
    _rotateLeft(e) {
        this._sphericalDelta.theta -= e
    }
    _rotateUp(e) {
        this._sphericalDelta.phi -= e
    }
    _panLeft(e, t) {
        y.setFromMatrixColumn(t, 0),
        y.multiplyScalar(-e),
        this._panOffset.add(y)
    }
    _panUp(e, t) {
        this.screenSpacePanning === !0 ? y.setFromMatrixColumn(t, 1) : (y.setFromMatrixColumn(t, 0),
        y.crossVectors(this.object.up, y)),
        y.multiplyScalar(e),
        this._panOffset.add(y)
    }
    _pan(e, t) {
        const s = this.domElement;
        if (this.object.isPerspectiveCamera) {
            const a = this.object.position;
            y.copy(a).sub(this.target);
            let n = y.length();
            n *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * e * n / s.clientHeight, this.object.matrix),
            this._panUp(2 * t * n / s.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix),
            this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            this.enablePan = !1)
    }
    _dollyOut(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _dollyIn(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _updateZoomParameters(e, t) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        const s = this.domElement.getBoundingClientRect()
          , a = e - s.left
          , n = t - s.top
          , i = s.width
          , r = s.height;
        this._mouse.x = a / i * 2 - 1,
        this._mouse.y = -(n / r) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(e) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, e))
    }
    _handleMouseDownRotate(e) {
        this._rotateStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownDolly(e) {
        this._updateZoomParameters(e.clientX, e.clientX),
        this._dollyStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownPan(e) {
        this._panStart.set(e.clientX, e.clientY)
    }
    _handleMouseMoveRotate(e) {
        this._rotateEnd.set(e.clientX, e.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const t = this.domElement;
        this._rotateLeft(M * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(M * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(e) {
        this._dollyEnd.set(e.clientX, e.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(e) {
        this._panEnd.set(e.clientX, e.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(e) {
        this._updateZoomParameters(e.clientX, e.clientY),
        e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
        this.update()
    }
    _handleKeyDown(e) {
        let t = !1;
        switch (e.code) {
        case this.keys.UP:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.BOTTOM:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.LEFT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
            t = !0;
            break;
        case this.keys.RIGHT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            t = !0;
            break
        }
        t && (e.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(e) {
        if (this._pointers.length === 1)
            this._rotateStart.set(e.pageX, e.pageY);
        else {
            const t = this._getSecondPointerPosition(e)
              , s = .5 * (e.pageX + t.x)
              , a = .5 * (e.pageY + t.y);
            this._rotateStart.set(s, a)
        }
    }
    _handleTouchStartPan(e) {
        if (this._pointers.length === 1)
            this._panStart.set(e.pageX, e.pageY);
        else {
            const t = this._getSecondPointerPosition(e)
              , s = .5 * (e.pageX + t.x)
              , a = .5 * (e.pageY + t.y);
            this._panStart.set(s, a)
        }
    }
    _handleTouchStartDolly(e) {
        const t = this._getSecondPointerPosition(e)
          , s = e.pageX - t.x
          , a = e.pageY - t.y
          , n = Math.sqrt(s * s + a * a);
        this._dollyStart.set(0, n)
    }
    _handleTouchStartDollyPan(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enablePan && this._handleTouchStartPan(e)
    }
    _handleTouchStartDollyRotate(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enableRotate && this._handleTouchStartRotate(e)
    }
    _handleTouchMoveRotate(e) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(e.pageX, e.pageY);
        else {
            const s = this._getSecondPointerPosition(e)
              , a = .5 * (e.pageX + s.x)
              , n = .5 * (e.pageY + s.y);
            this._rotateEnd.set(a, n)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const t = this.domElement;
        this._rotateLeft(M * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(M * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(e) {
        if (this._pointers.length === 1)
            this._panEnd.set(e.pageX, e.pageY);
        else {
            const t = this._getSecondPointerPosition(e)
              , s = .5 * (e.pageX + t.x)
              , a = .5 * (e.pageY + t.y);
            this._panEnd.set(s, a)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(e) {
        const t = this._getSecondPointerPosition(e)
          , s = e.pageX - t.x
          , a = e.pageY - t.y
          , n = Math.sqrt(s * s + a * a);
        this._dollyEnd.set(0, n),
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        const i = (e.pageX + t.x) * .5
          , r = (e.pageY + t.y) * .5;
        this._updateZoomParameters(i, r)
    }
    _handleTouchMoveDollyPan(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enablePan && this._handleTouchMovePan(e)
    }
    _handleTouchMoveDollyRotate(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enableRotate && this._handleTouchMoveRotate(e)
    }
    _addPointer(e) {
        this._pointers.push(e.pointerId)
    }
    _removePointer(e) {
        delete this._pointerPositions[e.pointerId];
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId) {
                this._pointers.splice(t, 1);
                return
            }
    }
    _isTrackingPointer(e) {
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId)
                return !0;
        return !1
    }
    _trackPointer(e) {
        let t = this._pointerPositions[e.pointerId];
        t === void 0 && (t = new O,
        this._pointerPositions[e.pointerId] = t),
        t.set(e.pageX, e.pageY)
    }
    _getSecondPointerPosition(e) {
        const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[t]
    }
    _customWheelEvent(e) {
        const t = e.deltaMode
          , s = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaY: e.deltaY
        };
        switch (t) {
        case 1:
            s.deltaY *= 16;
            break;
        case 2:
            s.deltaY *= 100;
            break
        }
        return e.ctrlKey && !this._controlActive && (s.deltaY *= 10),
        s
    }
}
function ia(c) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(c.pointerId),
    this.domElement.addEventListener("pointermove", this._onPointerMove),
    this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(c) && (this._addPointer(c),
    c.pointerType === "touch" ? this._onTouchStart(c) : this._onMouseDown(c)))
}
function oa(c) {
    this.enabled !== !1 && (c.pointerType === "touch" ? this._onTouchMove(c) : this._onMouseMove(c))
}
function ra(c) {
    switch (this._removePointer(c),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(c.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(Xe),
        this.state = A.NONE;
        break;
    case 1:
        const e = this._pointers[0]
          , t = this._pointerPositions[e];
        this._onTouchStart({
            pointerId: e,
            pageX: t.x,
            pageY: t.y
        });
        break
    }
}
function ca(c) {
    let e;
    switch (c.button) {
    case 0:
        e = this.mouseButtons.LEFT;
        break;
    case 1:
        e = this.mouseButtons.MIDDLE;
        break;
    case 2:
        e = this.mouseButtons.RIGHT;
        break;
    default:
        e = -1
    }
    switch (e) {
    case V.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(c),
        this.state = A.DOLLY;
        break;
    case V.ROTATE:
        if (c.ctrlKey || c.metaKey || c.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(c),
            this.state = A.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(c),
            this.state = A.ROTATE
        }
        break;
    case V.PAN:
        if (c.ctrlKey || c.metaKey || c.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(c),
            this.state = A.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(c),
            this.state = A.PAN
        }
        break;
    default:
        this.state = A.NONE
    }
    this.state !== A.NONE && this.dispatchEvent(Ee)
}
function ba(c) {
    switch (this.state) {
    case A.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(c);
        break;
    case A.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(c);
        break;
    case A.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(c);
        break
    }
}
function la(c) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== A.NONE || (c.preventDefault(),
    this.dispatchEvent(Ee),
    this._handleMouseWheel(this._customWheelEvent(c)),
    this.dispatchEvent(Xe))
}
function ha(c) {
    this.enabled !== !1 && this._handleKeyDown(c)
}
function da(c) {
    switch (this._trackPointer(c),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case Y.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(c),
            this.state = A.TOUCH_ROTATE;
            break;
        case Y.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(c),
            this.state = A.TOUCH_PAN;
            break;
        default:
            this.state = A.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case Y.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(c),
            this.state = A.TOUCH_DOLLY_PAN;
            break;
        case Y.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(c),
            this.state = A.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = A.NONE
        }
        break;
    default:
        this.state = A.NONE
    }
    this.state !== A.NONE && this.dispatchEvent(Ee)
}
function pa(c) {
    switch (this._trackPointer(c),
    this.state) {
    case A.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(c),
        this.update();
        break;
    case A.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(c),
        this.update();
        break;
    case A.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(c),
        this.update();
        break;
    case A.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(c),
        this.update();
        break;
    default:
        this.state = A.NONE
    }
}
function fa(c) {
    this.enabled !== !1 && c.preventDefault()
}
function ua(c) {
    c.key === "Control" && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function ma(c) {
    c.key === "Control" && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
class ga extends lt {
    constructor(e) {
        super(e),
        this.dracoLoader = null,
        this.ktx2Loader = null,
        this.meshoptDecoder = null,
        this.pluginCallbacks = [],
        this.register(function(t) {
            return new ka(t)
        }),
        this.register(function(t) {
            return new Aa(t)
        }),
        this.register(function(t) {
            return new Fa(t)
        }),
        this.register(function(t) {
            return new va(t)
        }),
        this.register(function(t) {
            return new Da(t)
        }),
        this.register(function(t) {
            return new Ra(t)
        }),
        this.register(function(t) {
            return new ya(t)
        }),
        this.register(function(t) {
            return new ja(t)
        }),
        this.register(function(t) {
            return new Sa(t)
        }),
        this.register(function(t) {
            return new wa(t)
        }),
        this.register(function(t) {
            return new Ma(t)
        }),
        this.register(function(t) {
            return new Ea(t)
        }),
        this.register(function(t) {
            return new La(t)
        }),
        this.register(function(t) {
            return new Oa(t)
        }),
        this.register(function(t) {
            return new _a(t)
        }),
        this.register(function(t) {
            return new Pa(t)
        }),
        this.register(function(t) {
            return new Ha(t)
        })
    }
    load(e, t, s, a) {
        const n = this;
        let i;
        if (this.resourcePath !== "")
            i = this.resourcePath;
        else if (this.path !== "") {
            const b = ae.extractUrlBase(e);
            i = ae.resolveURL(b, this.path)
        } else
            i = ae.extractUrlBase(e);
        this.manager.itemStart(e);
        const r = function(b) {
            a ? a(b) : console.error(b),
            n.manager.itemError(e),
            n.manager.itemEnd(e)
        }
          , o = new qe(this.manager);
        o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(e, function(b) {
            try {
                n.parse(b, i, function(h) {
                    t(h),
                    n.manager.itemEnd(e)
                }, r)
            } catch (h) {
                r(h)
            }
        }, s, r)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e,
        this
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e,
        this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e,
        this
    }
    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
        this
    }
    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
    }
    parse(e, t, s, a) {
        let n;
        const i = {}
          , r = {}
          , o = new TextDecoder;
        if (typeof e == "string")
            n = JSON.parse(e);
        else if (e instanceof ArrayBuffer)
            if (o.decode(new Uint8Array(e,0,4)) === Je) {
                try {
                    i[w.KHR_BINARY_GLTF] = new Ca(e)
                } catch (l) {
                    a && a(l);
                    return
                }
                n = JSON.parse(i[w.KHR_BINARY_GLTF].content)
            } else
                n = JSON.parse(o.decode(e));
        else
            n = e;
        if (n.asset === void 0 || n.asset.version[0] < 2) {
            a && a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const b = new Xa(n,{
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        b.fileLoader.setRequestHeader(this.requestHeader);
        for (let h = 0; h < this.pluginCallbacks.length; h++) {
            const l = this.pluginCallbacks[h](b);
            l.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
            r[l.name] = l,
            i[l.name] = !0
        }
        if (n.extensionsUsed)
            for (let h = 0; h < n.extensionsUsed.length; ++h) {
                const l = n.extensionsUsed[h]
                  , d = n.extensionsRequired || [];
                switch (l) {
                case w.KHR_MATERIALS_UNLIT:
                    i[l] = new Ta;
                    break;
                case w.KHR_DRACO_MESH_COMPRESSION:
                    i[l] = new Na(n,this.dracoLoader);
                    break;
                case w.KHR_TEXTURE_TRANSFORM:
                    i[l] = new Ga;
                    break;
                case w.KHR_MESH_QUANTIZATION:
                    i[l] = new Ka;
                    break;
                default:
                    d.indexOf(l) >= 0 && r[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".')
                }
            }
        b.setExtensions(i),
        b.setPlugins(r),
        b.parse(s, a)
    }
    parseAsync(e, t) {
        const s = this;
        return new Promise(function(a, n) {
            s.parse(e, t, a, n)
        }
        )
    }
}
function xa() {
    let c = {};
    return {
        get: function(e) {
            return c[e]
        },
        add: function(e, t) {
            c[e] = t
        },
        remove: function(e) {
            delete c[e]
        },
        removeAll: function() {
            c = {}
        }
    }
}
const w = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class _a {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_LIGHTS_PUNCTUAL,
        this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const e = this.parser
          , t = this.parser.json.nodes || [];
        for (let s = 0, a = t.length; s < a; s++) {
            const n = t[s];
            n.extensions && n.extensions[this.name] && n.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, n.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser
          , s = "light:" + e;
        let a = t.cache.get(s);
        if (a)
            return a;
        const n = t.json
          , o = ((n.extensions && n.extensions[this.name] || {}).lights || [])[e];
        let b;
        const h = new B(16777215);
        o.color !== void 0 && h.setRGB(o.color[0], o.color[1], o.color[2], z);
        const l = o.range !== void 0 ? o.range : 0;
        switch (o.type) {
        case "directional":
            b = new Ae(h),
            b.target.position.set(0, 0, -1),
            b.add(b.target);
            break;
        case "point":
            b = new dt(h),
            b.distance = l;
            break;
        case "spot":
            b = new ht(h),
            b.distance = l,
            o.spot = o.spot || {},
            o.spot.innerConeAngle = o.spot.innerConeAngle !== void 0 ? o.spot.innerConeAngle : 0,
            o.spot.outerConeAngle = o.spot.outerConeAngle !== void 0 ? o.spot.outerConeAngle : Math.PI / 4,
            b.angle = o.spot.outerConeAngle,
            b.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle,
            b.target.position.set(0, 0, -1),
            b.add(b.target);
            break;
        default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type)
        }
        return b.position.set(0, 0, 0),
        C(b, o),
        o.intensity !== void 0 && (b.intensity = o.intensity),
        b.name = t.createUniqueName(o.name || "light_" + e),
        a = Promise.resolve(b),
        t.cache.add(s, a),
        a
    }
    getDependency(e, t) {
        if (e === "light")
            return this._loadLight(t)
    }
    createNodeAttachment(e) {
        const t = this
          , s = this.parser
          , n = s.json.nodes[e]
          , r = (n.extensions && n.extensions[this.name] || {}).light;
        return r === void 0 ? null : this._loadLight(r).then(function(o) {
            return s._getNodeRef(t.cache, r, o)
        })
    }
}
class Ta {
    constructor() {
        this.name = w.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return te
    }
    extendParams(e, t, s) {
        const a = [];
        e.color = new B(1,1,1),
        e.opacity = 1;
        const n = t.pbrMetallicRoughness;
        if (n) {
            if (Array.isArray(n.baseColorFactor)) {
                const i = n.baseColorFactor;
                e.color.setRGB(i[0], i[1], i[2], z),
                e.opacity = i[3]
            }
            n.baseColorTexture !== void 0 && a.push(s.assignTexture(e, "map", n.baseColorTexture, Z))
        }
        return Promise.all(a)
    }
}
class wa {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_EMISSIVE_STRENGTH
    }
    extendMaterialParams(e, t) {
        const a = this.parser.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = a.extensions[this.name].emissiveStrength;
        return n !== void 0 && (t.emissiveIntensity = n),
        Promise.resolve()
    }
}
class ka {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor),
        i.clearcoatTexture !== void 0 && n.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)),
        i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor),
        i.clearcoatRoughnessTexture !== void 0 && n.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)),
        i.clearcoatNormalTexture !== void 0 && (n.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)),
        i.clearcoatNormalTexture.scale !== void 0)) {
            const r = i.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new O(r,r)
        }
        return Promise.all(n)
    }
}
class Aa {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_DISPERSION
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const a = this.parser.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = a.extensions[this.name];
        return t.dispersion = n.dispersion !== void 0 ? n.dispersion : 0,
        Promise.resolve()
    }
}
class Ea {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_IRIDESCENCE
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor),
        i.iridescenceTexture !== void 0 && n.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)),
        i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor),
        t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
        i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum),
        i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum),
        i.iridescenceThicknessTexture !== void 0 && n.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)),
        Promise.all(n)
    }
}
class Ra {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_SHEEN
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = [];
        t.sheenColor = new B(0,0,0),
        t.sheenRoughness = 0,
        t.sheen = 1;
        const i = a.extensions[this.name];
        if (i.sheenColorFactor !== void 0) {
            const r = i.sheenColorFactor;
            t.sheenColor.setRGB(r[0], r[1], r[2], z)
        }
        return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor),
        i.sheenColorTexture !== void 0 && n.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, Z)),
        i.sheenRoughnessTexture !== void 0 && n.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)),
        Promise.all(n)
    }
}
class ya {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor),
        i.transmissionTexture !== void 0 && n.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)),
        Promise.all(n)
    }
}
class ja {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0,
        i.thicknessTexture !== void 0 && n.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)),
        t.attenuationDistance = i.attenuationDistance || 1 / 0;
        const r = i.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new B().setRGB(r[0], r[1], r[2], z),
        Promise.all(n)
    }
}
class Sa {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const a = this.parser.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = a.extensions[this.name];
        return t.ior = n.ior !== void 0 ? n.ior : 1.5,
        Promise.resolve()
    }
}
class Ma {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1,
        i.specularTexture !== void 0 && n.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
        const r = i.specularColorFactor || [1, 1, 1];
        return t.specularColor = new B().setRGB(r[0], r[1], r[2], z),
        i.specularColorTexture !== void 0 && n.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, Z)),
        Promise.all(n)
    }
}
class Oa {
    constructor(e) {
        this.parser = e,
        this.name = w.EXT_MATERIALS_BUMP
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1,
        i.bumpTexture !== void 0 && n.push(s.assignTexture(t, "bumpMap", i.bumpTexture)),
        Promise.all(n)
    }
}
class La {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_MATERIALS_ANISOTROPY
    }
    getMaterialType(e) {
        const s = this.parser.json.materials[e];
        return !s.extensions || !s.extensions[this.name] ? null : G
    }
    extendMaterialParams(e, t) {
        const s = this.parser
          , a = s.json.materials[e];
        if (!a.extensions || !a.extensions[this.name])
            return Promise.resolve();
        const n = []
          , i = a.extensions[this.name];
        return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength),
        i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation),
        i.anisotropyTexture !== void 0 && n.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)),
        Promise.all(n)
    }
}
class Fa {
    constructor(e) {
        this.parser = e,
        this.name = w.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser
          , s = t.json
          , a = s.textures[e];
        if (!a.extensions || !a.extensions[this.name])
            return null;
        const n = a.extensions[this.name]
          , i = t.options.ktx2Loader;
        if (!i) {
            if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, n.source, i)
    }
}
class va {
    constructor(e) {
        this.parser = e,
        this.name = w.EXT_TEXTURE_WEBP
    }
    loadTexture(e) {
        const t = this.name
          , s = this.parser
          , a = s.json
          , n = a.textures[e];
        if (!n.extensions || !n.extensions[t])
            return null;
        const i = n.extensions[t]
          , r = a.images[i.source];
        let o = s.textureLoader;
        if (r.uri) {
            const b = s.options.manager.getHandler(r.uri);
            b !== null && (o = b)
        }
        return s.loadTextureImage(e, i.source, o)
    }
}
class Da {
    constructor(e) {
        this.parser = e,
        this.name = w.EXT_TEXTURE_AVIF
    }
    loadTexture(e) {
        const t = this.name
          , s = this.parser
          , a = s.json
          , n = a.textures[e];
        if (!n.extensions || !n.extensions[t])
            return null;
        const i = n.extensions[t]
          , r = a.images[i.source];
        let o = s.textureLoader;
        if (r.uri) {
            const b = s.options.manager.getHandler(r.uri);
            b !== null && (o = b)
        }
        return s.loadTextureImage(e, i.source, o)
    }
}
class Pa {
    constructor(e) {
        this.name = w.EXT_MESHOPT_COMPRESSION,
        this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json
          , s = t.bufferViews[e];
        if (s.extensions && s.extensions[this.name]) {
            const a = s.extensions[this.name]
              , n = this.parser.getDependency("buffer", a.buffer)
              , i = this.parser.options.meshoptDecoder;
            if (!i || !i.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                    throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return n.then(function(r) {
                const o = a.byteOffset || 0
                  , b = a.byteLength || 0
                  , h = a.count
                  , l = a.byteStride
                  , d = new Uint8Array(r,o,b);
                return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(h, l, d, a.mode, a.filter).then(function(p) {
                    return p.buffer
                }) : i.ready.then(function() {
                    const p = new ArrayBuffer(h * l);
                    return i.decodeGltfBuffer(new Uint8Array(p), h, l, d, a.mode, a.filter),
                    p
                })
            })
        } else
            return null
    }
}
class Ha {
    constructor(e) {
        this.name = w.EXT_MESH_GPU_INSTANCING,
        this.parser = e
    }
    createNodeMesh(e) {
        const t = this.parser.json
          , s = t.nodes[e];
        if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
            return null;
        const a = t.meshes[s.mesh];
        for (const b of a.primitives)
            if (b.mode !== D.TRIANGLES && b.mode !== D.TRIANGLE_STRIP && b.mode !== D.TRIANGLE_FAN && b.mode !== void 0)
                return null;
        const i = s.extensions[this.name].attributes
          , r = []
          , o = {};
        for (const b in i)
            r.push(this.parser.getDependency("accessor", i[b]).then(h => (o[b] = h,
            o[b])));
        return r.length < 1 ? null : (r.push(this.parser.createNodeMesh(e)),
        Promise.all(r).then(b => {
            const h = b.pop()
              , l = h.isGroup ? h.children : [h]
              , d = b[0].count
              , p = [];
            for (const x of l) {
                const k = new ie
                  , _ = new S
                  , f = new ne
                  , u = new S(1,1,1)
                  , g = new pt(x.geometry,x.material,d);
                for (let m = 0; m < d; m++)
                    o.TRANSLATION && _.fromBufferAttribute(o.TRANSLATION, m),
                    o.ROTATION && f.fromBufferAttribute(o.ROTATION, m),
                    o.SCALE && u.fromBufferAttribute(o.SCALE, m),
                    g.setMatrixAt(m, k.compose(_, f, u));
                for (const m in o)
                    if (m === "_COLOR_0") {
                        const T = o[m];
                        g.instanceColor = new ft(T.array,T.itemSize,T.normalized)
                    } else
                        m !== "TRANSLATION" && m !== "ROTATION" && m !== "SCALE" && x.geometry.setAttribute(m, o[m]);
                Ue.prototype.copy.call(g, x),
                this.parser.assignFinalMaterial(g),
                p.push(g)
            }
            return h.isGroup ? (h.clear(),
            h.add(...p),
            h) : p[0]
        }
        ))
    }
}
const Je = "glTF"
  , ee = 12
  , Ne = {
    JSON: 1313821514,
    BIN: 5130562
};
class Ca {
    constructor(e) {
        this.name = w.KHR_BINARY_GLTF,
        this.content = null,
        this.body = null;
        const t = new DataView(e,0,ee)
          , s = new TextDecoder;
        if (this.header = {
            magic: s.decode(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        },
        this.header.magic !== Je)
            throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const a = this.header.length - ee
          , n = new DataView(e,ee);
        let i = 0;
        for (; i < a; ) {
            const r = n.getUint32(i, !0);
            i += 4;
            const o = n.getUint32(i, !0);
            if (i += 4,
            o === Ne.JSON) {
                const b = new Uint8Array(e,ee + i,r);
                this.content = s.decode(b)
            } else if (o === Ne.BIN) {
                const b = ee + i;
                this.body = e.slice(b, b + r)
            }
            i += r
        }
        if (this.content === null)
            throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class Na {
    constructor(e, t) {
        if (!t)
            throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = w.KHR_DRACO_MESH_COMPRESSION,
        this.json = e,
        this.dracoLoader = t,
        this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const s = this.json
          , a = this.dracoLoader
          , n = e.extensions[this.name].bufferView
          , i = e.extensions[this.name].attributes
          , r = {}
          , o = {}
          , b = {};
        for (const h in i) {
            const l = we[h] || h.toLowerCase();
            r[l] = i[h]
        }
        for (const h in e.attributes) {
            const l = we[h] || h.toLowerCase();
            if (i[h] !== void 0) {
                const d = s.accessors[e.attributes[h]]
                  , p = J[d.componentType];
                b[l] = p.name,
                o[l] = d.normalized === !0
            }
        }
        return t.getDependency("bufferView", n).then(function(h) {
            return new Promise(function(l, d) {
                a.decodeDracoFile(h, function(p) {
                    for (const x in p.attributes) {
                        const k = p.attributes[x]
                          , _ = o[x];
                        _ !== void 0 && (k.normalized = _)
                    }
                    l(p)
                }, r, b, z, d)
            }
            )
        })
    }
}
class Ga {
    constructor() {
        this.name = w.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        e.needsUpdate = !0),
        e
    }
}
class Ka {
    constructor() {
        this.name = w.KHR_MESH_QUANTIZATION
    }
}
class Ze extends It {
    constructor(e, t, s, a) {
        super(e, t, s, a)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , n = e * a * 3 + a;
        for (let i = 0; i !== a; i++)
            t[i] = s[n + i];
        return t
    }
    interpolate_(e, t, s, a) {
        const n = this.resultBuffer
          , i = this.sampleValues
          , r = this.valueSize
          , o = r * 2
          , b = r * 3
          , h = a - t
          , l = (s - t) / h
          , d = l * l
          , p = d * l
          , x = e * b
          , k = x - b
          , _ = -2 * p + 3 * d
          , f = p - d
          , u = 1 - _
          , g = f - d + l;
        for (let m = 0; m !== r; m++) {
            const T = i[k + m + r]
              , E = i[k + m + o] * h
              , R = i[x + m + r]
              , L = i[x + m] * h;
            n[m] = u * T + g * E + _ * R + f * L
        }
        return n
    }
}
const Ia = new ne;
class za extends Ze {
    interpolate_(e, t, s, a) {
        const n = super.interpolate_(e, t, s, a);
        return Ia.fromArray(n).normalize().toArray(n),
        n
    }
}
const D = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
}
  , J = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}
  , Ge = {
    9728: We,
    9729: _e,
    9984: Tt,
    9985: _t,
    9986: xt,
    9987: Be
}
  , Ke = {
    33071: kt,
    33648: wt,
    10497: Te
}
  , pe = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}
  , we = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}
  , U = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}
  , qa = {
    CUBICSPLINE: void 0,
    LINEAR: Ve,
    STEP: Nt
}
  , fe = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
function Ua(c) {
    return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new Qe({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Kt
    })),
    c.DefaultMaterial
}
function Q(c, e, t) {
    for (const s in t.extensions)
        c[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {},
        e.userData.gltfExtensions[s] = t.extensions[s])
}
function C(c, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}
function Ba(c, e, t) {
    let s = !1
      , a = !1
      , n = !1;
    for (let b = 0, h = e.length; b < h; b++) {
        const l = e[b];
        if (l.POSITION !== void 0 && (s = !0),
        l.NORMAL !== void 0 && (a = !0),
        l.COLOR_0 !== void 0 && (n = !0),
        s && a && n)
            break
    }
    if (!s && !a && !n)
        return Promise.resolve(c);
    const i = []
      , r = []
      , o = [];
    for (let b = 0, h = e.length; b < h; b++) {
        const l = e[b];
        if (s) {
            const d = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : c.attributes.position;
            i.push(d)
        }
        if (a) {
            const d = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : c.attributes.normal;
            r.push(d)
        }
        if (n) {
            const d = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : c.attributes.color;
            o.push(d)
        }
    }
    return Promise.all([Promise.all(i), Promise.all(r), Promise.all(o)]).then(function(b) {
        const h = b[0]
          , l = b[1]
          , d = b[2];
        return s && (c.morphAttributes.position = h),
        a && (c.morphAttributes.normal = l),
        n && (c.morphAttributes.color = d),
        c.morphTargetsRelative = !0,
        c
    })
}
function Wa(c, e) {
    if (c.updateMorphTargets(),
    e.weights !== void 0)
        for (let t = 0, s = e.weights.length; t < s; t++)
            c.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        const t = e.extras.targetNames;
        if (c.morphTargetInfluences.length === t.length) {
            c.morphTargetDictionary = {};
            for (let s = 0, a = t.length; s < a; s++)
                c.morphTargetDictionary[t[s]] = s
        } else
            console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}
function Qa(c) {
    let e;
    const t = c.extensions && c.extensions[w.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ue(t.attributes) : e = c.indices + ":" + ue(c.attributes) + ":" + c.mode,
    c.targets !== void 0)
        for (let s = 0, a = c.targets.length; s < a; s++)
            e += ":" + ue(c.targets[s]);
    return e
}
function ue(c) {
    let e = "";
    const t = Object.keys(c).sort();
    for (let s = 0, a = t.length; s < a; s++)
        e += t[s] + ":" + c[t[s]] + ";";
    return e
}
function ke(c) {
    switch (c) {
    case Int8Array:
        return 1 / 127;
    case Uint8Array:
        return 1 / 255;
    case Int16Array:
        return 1 / 32767;
    case Uint16Array:
        return 1 / 65535;
    default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}
function Ya(c) {
    return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png"
}
const Va = new ie;
class Xa {
    constructor(e={}, t={}) {
        this.json = e,
        this.extensions = {},
        this.plugins = {},
        this.options = t,
        this.cache = new xa,
        this.associations = new Map,
        this.primitiveCache = {},
        this.nodeCache = {},
        this.meshCache = {
            refs: {},
            uses: {}
        },
        this.cameraCache = {
            refs: {},
            uses: {}
        },
        this.lightCache = {
            refs: {},
            uses: {}
        },
        this.sourceCache = {},
        this.textureCache = {},
        this.nodeNamesUsed = {};
        let s = !1
          , a = -1
          , n = !1
          , i = -1;
        if (typeof navigator < "u") {
            const r = navigator.userAgent;
            s = /^((?!chrome|android).)*safari/i.test(r) === !0;
            const o = r.match(/Version\/(\d+)/);
            a = s && o ? parseInt(o[1], 10) : -1,
            n = r.indexOf("Firefox") > -1,
            i = n ? r.match(/Firefox\/([0-9]+)\./)[1] : -1
        }
        typeof createImageBitmap > "u" || s && a < 17 || n && i < 98 ? this.textureLoader = new ut(this.options.manager) : this.textureLoader = new mt(this.options.manager),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        this.fileLoader = new qe(this.options.manager),
        this.fileLoader.setResponseType("arraybuffer"),
        this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const s = this
          , a = this.json
          , n = this.extensions;
        this.cache.removeAll(),
        this.nodeCache = {},
        this._invokeAll(function(i) {
            return i._markDefs && i._markDefs()
        }),
        Promise.all(this._invokeAll(function(i) {
            return i.beforeRoot && i.beforeRoot()
        })).then(function() {
            return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
        }).then(function(i) {
            const r = {
                scene: i[0][a.scene || 0],
                scenes: i[0],
                animations: i[1],
                cameras: i[2],
                asset: a.asset,
                parser: s,
                userData: {}
            };
            return Q(n, r, a),
            C(r, a),
            Promise.all(s._invokeAll(function(o) {
                return o.afterRoot && o.afterRoot(r)
            })).then(function() {
                for (const o of r.scenes)
                    o.updateMatrixWorld();
                e(r)
            })
        }).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes || []
          , t = this.json.skins || []
          , s = this.json.meshes || [];
        for (let a = 0, n = t.length; a < n; a++) {
            const i = t[a].joints;
            for (let r = 0, o = i.length; r < o; r++)
                e[i[r]].isBone = !0
        }
        for (let a = 0, n = e.length; a < n; a++) {
            const i = e[a];
            i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh),
            i.skin !== void 0 && (s[i.mesh].isSkinnedMesh = !0)),
            i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera)
        }
    }
    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0),
        e.refs[t]++)
    }
    _getNodeRef(e, t, s) {
        if (e.refs[t] <= 1)
            return s;
        const a = s.clone()
          , n = (i, r) => {
            const o = this.associations.get(i);
            o != null && this.associations.set(r, o);
            for (const [b,h] of i.children.entries())
                n(h, r.children[b])
        }
        ;
        return n(s, a),
        a.name += "_instance_" + e.uses[t]++,
        a
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let s = 0; s < t.length; s++) {
            const a = e(t[s]);
            if (a)
                return a
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const s = [];
        for (let a = 0; a < t.length; a++) {
            const n = e(t[a]);
            n && s.push(n)
        }
        return s
    }
    getDependency(e, t) {
        const s = e + ":" + t;
        let a = this.cache.get(s);
        if (!a) {
            switch (e) {
            case "scene":
                a = this.loadScene(t);
                break;
            case "node":
                a = this._invokeOne(function(n) {
                    return n.loadNode && n.loadNode(t)
                });
                break;
            case "mesh":
                a = this._invokeOne(function(n) {
                    return n.loadMesh && n.loadMesh(t)
                });
                break;
            case "accessor":
                a = this.loadAccessor(t);
                break;
            case "bufferView":
                a = this._invokeOne(function(n) {
                    return n.loadBufferView && n.loadBufferView(t)
                });
                break;
            case "buffer":
                a = this.loadBuffer(t);
                break;
            case "material":
                a = this._invokeOne(function(n) {
                    return n.loadMaterial && n.loadMaterial(t)
                });
                break;
            case "texture":
                a = this._invokeOne(function(n) {
                    return n.loadTexture && n.loadTexture(t)
                });
                break;
            case "skin":
                a = this.loadSkin(t);
                break;
            case "animation":
                a = this._invokeOne(function(n) {
                    return n.loadAnimation && n.loadAnimation(t)
                });
                break;
            case "camera":
                a = this.loadCamera(t);
                break;
            default:
                if (a = this._invokeOne(function(n) {
                    return n != this && n.getDependency && n.getDependency(e, t)
                }),
                !a)
                    throw new Error("Unknown type: " + e);
                break
            }
            this.cache.add(s, a)
        }
        return a
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const s = this
              , a = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(a.map(function(n, i) {
                return s.getDependency(e, i)
            })),
            this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e]
          , s = this.fileLoader;
        if (t.type && t.type !== "arraybuffer")
            throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0)
            return Promise.resolve(this.extensions[w.KHR_BINARY_GLTF].body);
        const a = this.options;
        return new Promise(function(n, i) {
            s.load(ae.resolveURL(t.uri, a.path), n, void 0, function() {
                i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        }
        )
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(s) {
            const a = t.byteLength || 0
              , n = t.byteOffset || 0;
            return s.slice(n, n + a)
        })
    }
    loadAccessor(e) {
        const t = this
          , s = this.json
          , a = this.json.accessors[e];
        if (a.bufferView === void 0 && a.sparse === void 0) {
            const i = pe[a.type]
              , r = J[a.componentType]
              , o = a.normalized === !0
              , b = new r(a.count * i);
            return Promise.resolve(new le(b,i,o))
        }
        const n = [];
        return a.bufferView !== void 0 ? n.push(this.getDependency("bufferView", a.bufferView)) : n.push(null),
        a.sparse !== void 0 && (n.push(this.getDependency("bufferView", a.sparse.indices.bufferView)),
        n.push(this.getDependency("bufferView", a.sparse.values.bufferView))),
        Promise.all(n).then(function(i) {
            const r = i[0]
              , o = pe[a.type]
              , b = J[a.componentType]
              , h = b.BYTES_PER_ELEMENT
              , l = h * o
              , d = a.byteOffset || 0
              , p = a.bufferView !== void 0 ? s.bufferViews[a.bufferView].byteStride : void 0
              , x = a.normalized === !0;
            let k, _;
            if (p && p !== l) {
                const f = Math.floor(d / p)
                  , u = "InterleavedBuffer:" + a.bufferView + ":" + a.componentType + ":" + f + ":" + a.count;
                let g = t.cache.get(u);
                g || (k = new b(r,f * p,a.count * p / h),
                g = new gt(k,p / h),
                t.cache.add(u, g)),
                _ = new Gt(g,o,d % p / h,x)
            } else
                r === null ? k = new b(a.count * o) : k = new b(r,d,a.count * o),
                _ = new le(k,o,x);
            if (a.sparse !== void 0) {
                const f = pe.SCALAR
                  , u = J[a.sparse.indices.componentType]
                  , g = a.sparse.indices.byteOffset || 0
                  , m = a.sparse.values.byteOffset || 0
                  , T = new u(i[1],g,a.sparse.count * f)
                  , E = new b(i[2],m,a.sparse.count * o);
                r !== null && (_ = new le(_.array.slice(),_.itemSize,_.normalized)),
                _.normalized = !1;
                for (let R = 0, L = T.length; R < L; R++) {
                    const P = T[R];
                    if (_.setX(P, E[R * o]),
                    o >= 2 && _.setY(P, E[R * o + 1]),
                    o >= 3 && _.setZ(P, E[R * o + 2]),
                    o >= 4 && _.setW(P, E[R * o + 3]),
                    o >= 5)
                        throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
                _.normalized = x
            }
            return _
        })
    }
    loadTexture(e) {
        const t = this.json
          , s = this.options
          , n = t.textures[e].source
          , i = t.images[n];
        let r = this.textureLoader;
        if (i.uri) {
            const o = s.manager.getHandler(i.uri);
            o !== null && (r = o)
        }
        return this.loadTextureImage(e, n, r)
    }
    loadTextureImage(e, t, s) {
        const a = this
          , n = this.json
          , i = n.textures[e]
          , r = n.images[t]
          , o = (r.uri || r.bufferView) + ":" + i.sampler;
        if (this.textureCache[o])
            return this.textureCache[o];
        const b = this.loadImageSource(t, s).then(function(h) {
            h.flipY = !1,
            h.name = i.name || r.name || "",
            h.name === "" && typeof r.uri == "string" && r.uri.startsWith("data:image/") === !1 && (h.name = r.uri);
            const d = (n.samplers || {})[i.sampler] || {};
            return h.magFilter = Ge[d.magFilter] || _e,
            h.minFilter = Ge[d.minFilter] || Be,
            h.wrapS = Ke[d.wrapS] || Te,
            h.wrapT = Ke[d.wrapT] || Te,
            h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== We && h.minFilter !== _e,
            a.associations.set(h, {
                textures: e
            }),
            h
        }).catch(function() {
            return null
        });
        return this.textureCache[o] = b,
        b
    }
    loadImageSource(e, t) {
        const s = this
          , a = this.json
          , n = this.options;
        if (this.sourceCache[e] !== void 0)
            return this.sourceCache[e].then(l => l.clone());
        const i = a.images[e]
          , r = self.URL || self.webkitURL;
        let o = i.uri || ""
          , b = !1;
        if (i.bufferView !== void 0)
            o = s.getDependency("bufferView", i.bufferView).then(function(l) {
                b = !0;
                const d = new Blob([l],{
                    type: i.mimeType
                });
                return o = r.createObjectURL(d),
                o
            });
        else if (i.uri === void 0)
            throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const h = Promise.resolve(o).then(function(l) {
            return new Promise(function(d, p) {
                let x = d;
                t.isImageBitmapLoader === !0 && (x = function(k) {
                    const _ = new Oe(k);
                    _.needsUpdate = !0,
                    d(_)
                }
                ),
                t.load(ae.resolveURL(l, n.path), x, void 0, p)
            }
            )
        }).then(function(l) {
            return b === !0 && r.revokeObjectURL(o),
            C(l, i),
            l.userData.mimeType = i.mimeType || Ya(i.uri),
            l
        }).catch(function(l) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", o),
            l
        });
        return this.sourceCache[e] = h,
        h
    }
    assignTexture(e, t, s, a) {
        const n = this;
        return this.getDependency("texture", s.index).then(function(i) {
            if (!i)
                return null;
            if (s.texCoord !== void 0 && s.texCoord > 0 && (i = i.clone(),
            i.channel = s.texCoord),
            n.extensions[w.KHR_TEXTURE_TRANSFORM]) {
                const r = s.extensions !== void 0 ? s.extensions[w.KHR_TEXTURE_TRANSFORM] : void 0;
                if (r) {
                    const o = n.associations.get(i);
                    i = n.extensions[w.KHR_TEXTURE_TRANSFORM].extendTexture(i, r),
                    n.associations.set(i, o)
                }
            }
            return a !== void 0 && (i.colorSpace = a),
            e[t] = i,
            i
        })
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let s = e.material;
        const a = t.attributes.tangent === void 0
          , n = t.attributes.color !== void 0
          , i = t.attributes.normal === void 0;
        if (e.isPoints) {
            const r = "PointsMaterial:" + s.uuid;
            let o = this.cache.get(r);
            o || (o = new At,
            he.prototype.copy.call(o, s),
            o.color.copy(s.color),
            o.map = s.map,
            o.sizeAttenuation = !1,
            this.cache.add(r, o)),
            s = o
        } else if (e.isLine) {
            const r = "LineBasicMaterial:" + s.uuid;
            let o = this.cache.get(r);
            o || (o = new Et,
            he.prototype.copy.call(o, s),
            o.color.copy(s.color),
            o.map = s.map,
            this.cache.add(r, o)),
            s = o
        }
        if (a || n || i) {
            let r = "ClonedMaterial:" + s.uuid + ":";
            a && (r += "derivative-tangents:"),
            n && (r += "vertex-colors:"),
            i && (r += "flat-shading:");
            let o = this.cache.get(r);
            o || (o = s.clone(),
            n && (o.vertexColors = !0),
            i && (o.flatShading = !0),
            a && (o.normalScale && (o.normalScale.y *= -1),
            o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)),
            this.cache.add(r, o),
            this.associations.set(o, this.associations.get(s))),
            s = o
        }
        e.material = s
    }
    getMaterialType() {
        return Qe
    }
    loadMaterial(e) {
        const t = this
          , s = this.json
          , a = this.extensions
          , n = s.materials[e];
        let i;
        const r = {}
          , o = n.extensions || {}
          , b = [];
        if (o[w.KHR_MATERIALS_UNLIT]) {
            const l = a[w.KHR_MATERIALS_UNLIT];
            i = l.getMaterialType(),
            b.push(l.extendParams(r, n, t))
        } else {
            const l = n.pbrMetallicRoughness || {};
            if (r.color = new B(1,1,1),
            r.opacity = 1,
            Array.isArray(l.baseColorFactor)) {
                const d = l.baseColorFactor;
                r.color.setRGB(d[0], d[1], d[2], z),
                r.opacity = d[3]
            }
            l.baseColorTexture !== void 0 && b.push(t.assignTexture(r, "map", l.baseColorTexture, Z)),
            r.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1,
            r.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1,
            l.metallicRoughnessTexture !== void 0 && (b.push(t.assignTexture(r, "metalnessMap", l.metallicRoughnessTexture)),
            b.push(t.assignTexture(r, "roughnessMap", l.metallicRoughnessTexture))),
            i = this._invokeOne(function(d) {
                return d.getMaterialType && d.getMaterialType(e)
            }),
            b.push(Promise.all(this._invokeAll(function(d) {
                return d.extendMaterialParams && d.extendMaterialParams(e, r)
            })))
        }
        n.doubleSided === !0 && (r.side = Rt);
        const h = n.alphaMode || fe.OPAQUE;
        if (h === fe.BLEND ? (r.transparent = !0,
        r.depthWrite = !1) : (r.transparent = !1,
        h === fe.MASK && (r.alphaTest = n.alphaCutoff !== void 0 ? n.alphaCutoff : .5)),
        n.normalTexture !== void 0 && i !== te && (b.push(t.assignTexture(r, "normalMap", n.normalTexture)),
        r.normalScale = new O(1,1),
        n.normalTexture.scale !== void 0)) {
            const l = n.normalTexture.scale;
            r.normalScale.set(l, l)
        }
        if (n.occlusionTexture !== void 0 && i !== te && (b.push(t.assignTexture(r, "aoMap", n.occlusionTexture)),
        n.occlusionTexture.strength !== void 0 && (r.aoMapIntensity = n.occlusionTexture.strength)),
        n.emissiveFactor !== void 0 && i !== te) {
            const l = n.emissiveFactor;
            r.emissive = new B().setRGB(l[0], l[1], l[2], z)
        }
        return n.emissiveTexture !== void 0 && i !== te && b.push(t.assignTexture(r, "emissiveMap", n.emissiveTexture, Z)),
        Promise.all(b).then(function() {
            const l = new i(r);
            return n.name && (l.name = n.name),
            C(l, n),
            t.associations.set(l, {
                materials: e
            }),
            n.extensions && Q(a, l, n),
            l
        })
    }
    createUniqueName(e) {
        const t = yt.sanitizeNodeName(e || "");
        return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0,
        t)
    }
    loadGeometries(e) {
        const t = this
          , s = this.extensions
          , a = this.primitiveCache;
        function n(r) {
            return s[w.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r, t).then(function(o) {
                return Ie(o, r, t)
            })
        }
        const i = [];
        for (let r = 0, o = e.length; r < o; r++) {
            const b = e[r]
              , h = Qa(b)
              , l = a[h];
            if (l)
                i.push(l.promise);
            else {
                let d;
                b.extensions && b.extensions[w.KHR_DRACO_MESH_COMPRESSION] ? d = n(b) : d = Ie(new jt, b, t),
                a[h] = {
                    primitive: b,
                    promise: d
                },
                i.push(d)
            }
        }
        return Promise.all(i)
    }
    loadMesh(e) {
        const t = this
          , s = this.json
          , a = this.extensions
          , n = s.meshes[e]
          , i = n.primitives
          , r = [];
        for (let o = 0, b = i.length; o < b; o++) {
            const h = i[o].material === void 0 ? Ua(this.cache) : this.getDependency("material", i[o].material);
            r.push(h)
        }
        return r.push(t.loadGeometries(i)),
        Promise.all(r).then(function(o) {
            const b = o.slice(0, o.length - 1)
              , h = o[o.length - 1]
              , l = [];
            for (let p = 0, x = h.length; p < x; p++) {
                const k = h[p]
                  , _ = i[p];
                let f;
                const u = b[p];
                if (_.mode === D.TRIANGLES || _.mode === D.TRIANGLE_STRIP || _.mode === D.TRIANGLE_FAN || _.mode === void 0)
                    f = n.isSkinnedMesh === !0 ? new St(k,u) : new Mt(k,u),
                    f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
                    _.mode === D.TRIANGLE_STRIP ? f.geometry = Me(f.geometry, Ut) : _.mode === D.TRIANGLE_FAN && (f.geometry = Me(f.geometry, Bt));
                else if (_.mode === D.LINES)
                    f = new Ot(k,u);
                else if (_.mode === D.LINE_STRIP)
                    f = new Lt(k,u);
                else if (_.mode === D.LINE_LOOP)
                    f = new Ft(k,u);
                else if (_.mode === D.POINTS)
                    f = new vt(k,u);
                else
                    throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + _.mode);
                Object.keys(f.geometry.morphAttributes).length > 0 && Wa(f, n),
                f.name = t.createUniqueName(n.name || "mesh_" + e),
                C(f, n),
                _.extensions && Q(a, f, _),
                t.assignFinalMaterial(f),
                l.push(f)
            }
            for (let p = 0, x = l.length; p < x; p++)
                t.associations.set(l[p], {
                    meshes: e,
                    primitives: p
                });
            if (l.length === 1)
                return n.extensions && Q(a, l[0], n),
                l[0];
            const d = new X;
            n.extensions && Q(a, d, n),
            t.associations.set(d, {
                meshes: e
            });
            for (let p = 0, x = l.length; p < x; p++)
                d.add(l[p]);
            return d
        })
    }
    loadCamera(e) {
        let t;
        const s = this.json.cameras[e]
          , a = s[s.type];
        if (!a) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return s.type === "perspective" ? t = new Ye(ze.radToDeg(a.yfov),a.aspectRatio || 1,a.znear || 1,a.zfar || 2e6) : s.type === "orthographic" && (t = new Dt(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),
        s.name && (t.name = this.createUniqueName(s.name)),
        C(t, s),
        Promise.resolve(t)
    }
    loadSkin(e) {
        const t = this.json.skins[e]
          , s = [];
        for (let a = 0, n = t.joints.length; a < n; a++)
            s.push(this._loadNodeShallow(t.joints[a]));
        return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null),
        Promise.all(s).then(function(a) {
            const n = a.pop()
              , i = a
              , r = []
              , o = [];
            for (let b = 0, h = i.length; b < h; b++) {
                const l = i[b];
                if (l) {
                    r.push(l);
                    const d = new ie;
                    n !== null && d.fromArray(n.array, b * 16),
                    o.push(d)
                } else
                    console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[b])
            }
            return new Pt(r,o)
        })
    }
    loadAnimation(e) {
        const t = this.json
          , s = this
          , a = t.animations[e]
          , n = a.name ? a.name : "animation_" + e
          , i = []
          , r = []
          , o = []
          , b = []
          , h = [];
        for (let l = 0, d = a.channels.length; l < d; l++) {
            const p = a.channels[l]
              , x = a.samplers[p.sampler]
              , k = p.target
              , _ = k.node
              , f = a.parameters !== void 0 ? a.parameters[x.input] : x.input
              , u = a.parameters !== void 0 ? a.parameters[x.output] : x.output;
            k.node !== void 0 && (i.push(this.getDependency("node", _)),
            r.push(this.getDependency("accessor", f)),
            o.push(this.getDependency("accessor", u)),
            b.push(x),
            h.push(k))
        }
        return Promise.all([Promise.all(i), Promise.all(r), Promise.all(o), Promise.all(b), Promise.all(h)]).then(function(l) {
            const d = l[0]
              , p = l[1]
              , x = l[2]
              , k = l[3]
              , _ = l[4]
              , f = [];
            for (let g = 0, m = d.length; g < m; g++) {
                const T = d[g]
                  , E = p[g]
                  , R = x[g]
                  , L = k[g]
                  , P = _[g];
                if (T === void 0)
                    continue;
                T.updateMatrix && T.updateMatrix();
                const F = s._createAnimationTracks(T, E, R, L, P);
                if (F)
                    for (let I = 0; I < F.length; I++)
                        f.push(F[I])
            }
            const u = new Ht(n,void 0,f);
            return C(u, a),
            u
        })
    }
    createNodeMesh(e) {
        const t = this.json
          , s = this
          , a = t.nodes[e];
        return a.mesh === void 0 ? null : s.getDependency("mesh", a.mesh).then(function(n) {
            const i = s._getNodeRef(s.meshCache, a.mesh, n);
            return a.weights !== void 0 && i.traverse(function(r) {
                if (r.isMesh)
                    for (let o = 0, b = a.weights.length; o < b; o++)
                        r.morphTargetInfluences[o] = a.weights[o]
            }),
            i
        })
    }
    loadNode(e) {
        const t = this.json
          , s = this
          , a = t.nodes[e]
          , n = s._loadNodeShallow(e)
          , i = []
          , r = a.children || [];
        for (let b = 0, h = r.length; b < h; b++)
            i.push(s.getDependency("node", r[b]));
        const o = a.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", a.skin);
        return Promise.all([n, Promise.all(i), o]).then(function(b) {
            const h = b[0]
              , l = b[1]
              , d = b[2];
            d !== null && h.traverse(function(p) {
                p.isSkinnedMesh && p.bind(d, Va)
            });
            for (let p = 0, x = l.length; p < x; p++)
                h.add(l[p]);
            return h
        })
    }
    _loadNodeShallow(e) {
        const t = this.json
          , s = this.extensions
          , a = this;
        if (this.nodeCache[e] !== void 0)
            return this.nodeCache[e];
        const n = t.nodes[e]
          , i = n.name ? a.createUniqueName(n.name) : ""
          , r = []
          , o = a._invokeOne(function(b) {
            return b.createNodeMesh && b.createNodeMesh(e)
        });
        return o && r.push(o),
        n.camera !== void 0 && r.push(a.getDependency("camera", n.camera).then(function(b) {
            return a._getNodeRef(a.cameraCache, n.camera, b)
        })),
        a._invokeAll(function(b) {
            return b.createNodeAttachment && b.createNodeAttachment(e)
        }).forEach(function(b) {
            r.push(b)
        }),
        this.nodeCache[e] = Promise.all(r).then(function(b) {
            let h;
            if (n.isBone === !0 ? h = new Ct : b.length > 1 ? h = new X : b.length === 1 ? h = b[0] : h = new Ue,
            h !== b[0])
                for (let l = 0, d = b.length; l < d; l++)
                    h.add(b[l]);
            if (n.name && (h.userData.name = n.name,
            h.name = i),
            C(h, n),
            n.extensions && Q(s, h, n),
            n.matrix !== void 0) {
                const l = new ie;
                l.fromArray(n.matrix),
                h.applyMatrix4(l)
            } else
                n.translation !== void 0 && h.position.fromArray(n.translation),
                n.rotation !== void 0 && h.quaternion.fromArray(n.rotation),
                n.scale !== void 0 && h.scale.fromArray(n.scale);
            if (!a.associations.has(h))
                a.associations.set(h, {});
            else if (n.mesh !== void 0 && a.meshCache.refs[n.mesh] > 1) {
                const l = a.associations.get(h);
                a.associations.set(h, {
                    ...l
                })
            }
            return a.associations.get(h).nodes = e,
            h
        }),
        this.nodeCache[e]
    }
    loadScene(e) {
        const t = this.extensions
          , s = this.json.scenes[e]
          , a = this
          , n = new X;
        s.name && (n.name = a.createUniqueName(s.name)),
        C(n, s),
        s.extensions && Q(t, n, s);
        const i = s.nodes || []
          , r = [];
        for (let o = 0, b = i.length; o < b; o++)
            r.push(a.getDependency("node", i[o]));
        return Promise.all(r).then(function(o) {
            for (let h = 0, l = o.length; h < l; h++)
                n.add(o[h]);
            const b = h => {
                const l = new Map;
                for (const [d,p] of a.associations)
                    (d instanceof he || d instanceof Oe) && l.set(d, p);
                return h.traverse(d => {
                    const p = a.associations.get(d);
                    p != null && l.set(d, p)
                }
                ),
                l
            }
            ;
            return a.associations = b(n),
            n
        })
    }
    _createAnimationTracks(e, t, s, a, n) {
        const i = []
          , r = e.name ? e.name : e.uuid
          , o = [];
        U[n.path] === U.weights ? e.traverse(function(d) {
            d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid)
        }) : o.push(r);
        let b;
        switch (U[n.path]) {
        case U.weights:
            b = Fe;
            break;
        case U.rotation:
            b = ve;
            break;
        case U.translation:
        case U.scale:
            b = Le;
            break;
        default:
            switch (s.itemSize) {
            case 1:
                b = Fe;
                break;
            case 2:
            case 3:
            default:
                b = Le;
                break
            }
            break
        }
        const h = a.interpolation !== void 0 ? qa[a.interpolation] : Ve
          , l = this._getArrayFromAccessor(s);
        for (let d = 0, p = o.length; d < p; d++) {
            const x = new b(o[d] + "." + U[n.path],t.array,l,h);
            a.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(x),
            i.push(x)
        }
        return i
    }
    _getArrayFromAccessor(e) {
        let t = e.array;
        if (e.normalized) {
            const s = ke(t.constructor)
              , a = new Float32Array(t.length);
            for (let n = 0, i = t.length; n < i; n++)
                a[n] = t[n] * s;
            t = a
        }
        return t
    }
    _createCubicSplineTrackInterpolant(e) {
        e.createInterpolant = function(s) {
            const a = this instanceof ve ? za : Ze;
            return new a(this.times,this.values,this.getValueSize() / 3,s)
        }
        ,
        e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
    }
}
function Ja(c, e, t) {
    const s = e.attributes
      , a = new zt;
    if (s.POSITION !== void 0) {
        const r = t.json.accessors[s.POSITION]
          , o = r.min
          , b = r.max;
        if (o !== void 0 && b !== void 0) {
            if (a.set(new S(o[0],o[1],o[2]), new S(b[0],b[1],b[2])),
            r.normalized) {
                const h = ke(J[r.componentType]);
                a.min.multiplyScalar(h),
                a.max.multiplyScalar(h)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else
        return;
    const n = e.targets;
    if (n !== void 0) {
        const r = new S
          , o = new S;
        for (let b = 0, h = n.length; b < h; b++) {
            const l = n[b];
            if (l.POSITION !== void 0) {
                const d = t.json.accessors[l.POSITION]
                  , p = d.min
                  , x = d.max;
                if (p !== void 0 && x !== void 0) {
                    if (o.setX(Math.max(Math.abs(p[0]), Math.abs(x[0]))),
                    o.setY(Math.max(Math.abs(p[1]), Math.abs(x[1]))),
                    o.setZ(Math.max(Math.abs(p[2]), Math.abs(x[2]))),
                    d.normalized) {
                        const k = ke(J[d.componentType]);
                        o.multiplyScalar(k)
                    }
                    r.max(o)
                } else
                    console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        a.expandByVector(r)
    }
    c.boundingBox = a;
    const i = new qt;
    a.getCenter(i.center),
    i.radius = a.min.distanceTo(a.max) / 2,
    c.boundingSphere = i
}
function Ie(c, e, t) {
    const s = e.attributes
      , a = [];
    function n(i, r) {
        return t.getDependency("accessor", i).then(function(o) {
            c.setAttribute(r, o)
        })
    }
    for (const i in s) {
        const r = we[i] || i.toLowerCase();
        r in c.attributes || a.push(n(s[i], r))
    }
    if (e.indices !== void 0 && !c.index) {
        const i = t.getDependency("accessor", e.indices).then(function(r) {
            c.setIndex(r)
        });
        a.push(i)
    }
    return De.workingColorSpace !== z && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${De.workingColorSpace}" not supported.`),
    C(c, e),
    Ja(c, e, t),
    Promise.all(a).then(function() {
        return e.targets !== void 0 ? Ba(c, e.targets, t) : c
    })
}
var Za = (function() {
    var c = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb"
      , e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb"
      , t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11])
      , s = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
    if (typeof WebAssembly != "object")
        return {
            supported: !1
        };
    var a = WebAssembly.validate(t) ? r(e) : r(c), n, i = WebAssembly.instantiate(a, {}).then(function(f) {
        n = f.instance,
        n.exports.__wasm_call_ctors()
    });
    function r(f) {
        for (var u = new Uint8Array(f.length), g = 0; g < f.length; ++g) {
            var m = f.charCodeAt(g);
            u[g] = m > 96 ? m - 97 : m > 64 ? m - 39 : m + 4
        }
        for (var T = 0, g = 0; g < f.length; ++g)
            u[T++] = u[g] < 60 ? s[u[g]] : (u[g] - 60) * 64 + u[++g];
        return u.buffer.slice(0, T)
    }
    function o(f, u, g, m, T, E, R) {
        var L = f.exports.sbrk
          , P = m + 3 & -4
          , F = L(P * T)
          , I = L(E.length)
          , je = new Uint8Array(f.exports.memory.buffer);
        je.set(E, I);
        var be = u(F, m, T, I, E.length);
        if (be == 0 && R && R(F, P, T),
        g.set(je.subarray(F, F + m * T)),
        L(F - L(0)),
        be != 0)
            throw new Error("Malformed buffer data: " + be)
    }
    var b = {
        NONE: "",
        OCTAHEDRAL: "meshopt_decodeFilterOct",
        QUATERNION: "meshopt_decodeFilterQuat",
        EXPONENTIAL: "meshopt_decodeFilterExp"
    }
      , h = {
        ATTRIBUTES: "meshopt_decodeVertexBuffer",
        TRIANGLES: "meshopt_decodeIndexBuffer",
        INDICES: "meshopt_decodeIndexSequence"
    }
      , l = []
      , d = 0;
    function p(f) {
        var u = {
            object: new Worker(f),
            pending: 0,
            requests: {}
        };
        return u.object.onmessage = function(g) {
            var m = g.data;
            u.pending -= m.count,
            u.requests[m.id][m.action](m.value),
            delete u.requests[m.id]
        }
        ,
        u
    }
    function x(f) {
        for (var u = "self.ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(a) + "]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = " + _.name + ";" + o.toString() + _.toString(), g = new Blob([u],{
            type: "text/javascript"
        }), m = URL.createObjectURL(g), T = l.length; T < f; ++T)
            l[T] = p(m);
        for (var T = f; T < l.length; ++T)
            l[T].object.postMessage({});
        l.length = f,
        URL.revokeObjectURL(m)
    }
    function k(f, u, g, m, T) {
        for (var E = l[0], R = 1; R < l.length; ++R)
            l[R].pending < E.pending && (E = l[R]);
        return new Promise(function(L, P) {
            var F = new Uint8Array(g)
              , I = ++d;
            E.pending += f,
            E.requests[I] = {
                resolve: L,
                reject: P
            },
            E.object.postMessage({
                id: I,
                count: f,
                size: u,
                source: F,
                mode: m,
                filter: T
            }, [F.buffer])
        }
        )
    }
    function _(f) {
        var u = f.data;
        if (!u.id)
            return self.close();
        self.ready.then(function(g) {
            try {
                var m = new Uint8Array(u.count * u.size);
                o(g, g.exports[u.mode], m, u.count, u.size, u.source, g.exports[u.filter]),
                self.postMessage({
                    id: u.id,
                    count: u.count,
                    action: "resolve",
                    value: m
                }, [m.buffer])
            } catch (T) {
                self.postMessage({
                    id: u.id,
                    count: u.count,
                    action: "reject",
                    value: T
                })
            }
        })
    }
    return {
        ready: i,
        supported: !0,
        useWorkers: function(f) {
            x(f)
        },
        decodeVertexBuffer: function(f, u, g, m, T) {
            o(n, n.exports.meshopt_decodeVertexBuffer, f, u, g, m, n.exports[b[T]])
        },
        decodeIndexBuffer: function(f, u, g, m) {
            o(n, n.exports.meshopt_decodeIndexBuffer, f, u, g, m)
        },
        decodeIndexSequence: function(f, u, g, m) {
            o(n, n.exports.meshopt_decodeIndexSequence, f, u, g, m)
        },
        decodeGltfBuffer: function(f, u, g, m, T, E) {
            o(n, n.exports[h[T]], f, u, g, m, n.exports[b[E]])
        },
        decodeGltfBufferAsync: function(f, u, g, m, T) {
            return l.length > 0 ? k(f, u, g, h[m], b[T]) : i.then(function() {
                var E = new Uint8Array(f * u);
                return o(n, n.exports[h[m]], E, f, u, g, n.exports[b[T]]),
                E
            })
        }
    }
}
)();
const H = c => document.querySelector(c)
  , $ = H("#canvas-host")
  , q = new Wt;
q.background = new B("#23483e");
q.fog = new Qt("#23483e",100,290);
const W = new Ye(40,1,.15,650);
W.up.set(0, 0, 1);
W.position.set(42, -77, 35);
let j;
try {
    j = new Yt({
        antialias: !0,
        powerPreference: "high-performance"
    })
} catch (c) {
    throw H("#loading").className = "error",
    H("#loading").textContent = "Для просмотра нужен WebGL 2. Включите аппаратное ускорение браузера или откройте модель в Blender.",
    c
}
j.setPixelRatio(Math.min(devicePixelRatio, 1.6));
j.outputColorSpace = Z;
j.toneMapping = Vt;
j.toneMappingExposure = 1.3;
j.shadowMap.enabled = !0;
j.shadowMap.type = Xt;
$.append(j.domElement);
const N = new na(W,j.domElement);
N.target.set(0, 0, 12);
N.enableDamping = !0;
N.dampingFactor = .08;
N.minDistance = 6;
N.maxDistance = 190;
N.maxPolarAngle = Math.PI * .49;
q.add(new Jt("#eaf5df","#274536",3));
const K = new Ae("#fff3ca",3.2);
K.position.set(-15, -35, 65);
K.castShadow = !0;
K.shadow.mapSize.set(2048, 2048);
K.shadow.camera.left = -65;
K.shadow.camera.right = 65;
K.shadow.camera.top = 65;
K.shadow.camera.bottom = -65;
K.shadow.camera.far = 200;
K.shadow.normalBias = .07;
q.add(K);
const $e = new Ae("#c7e8e5",1.1);
$e.position.set(35, 25, 25);
q.add($e);
const oe = new X;
q.add(oe);
const re = new X;
re.name = "RC_Root";
oe.add(re);
const et = new Map
  , Re = []
  , tt = []
  , at = []
  , $a = new ga().setMeshoptDecoder(Za)
  , ce = {
    mode: "exterior",
    selected: "",
    process: "paper",
    playing: !1,
    time: 0,
    speed: 1,
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    flights: !0,
    ready: !1
}
  , v = {
    loadMs: 0,
    frames: 0,
    fps: 0,
    drawCalls: 0,
    triangles: 0,
    quality: "full",
    gpuMemory: "not exposed by WebGL"
}
  , es = performance.now()
  , ts = await fetch("/data/scene-spec.json").then(c => {
    if (!c.ok)
        throw Error("Scene configuration unavailable");
    return c.json()
}
)
  , as = await fetch("/data/facts.json").then(c => c.json());
function st() {
    const c = $.clientWidth
      , e = $.clientHeight;
    j.setSize(c, e),
    W.aspect = c / e,
    W.updateProjectionMatrix()
}
new ResizeObserver(st).observe($);
st();
function ye(c) {
    if (!["exterior", "cutaway", "xray", "interior", "process"].includes(c))
        throw Error("Unknown view mode");
    ce.mode = c;
    for (const e of Re) {
        const t = e.userData.shell_side
          , s = t === "front" || t === "top";
        if (e.visible = !(s && ["cutaway", "interior", "process"].includes(c)),
        e.isMesh) {
            const a = Array.isArray(e.material) ? e.material : [e.material];
            for (const n of a)
                n.transparent = c === "xray",
                n.opacity = c === "xray" ? .16 : 1,
                n.depthWrite = c !== "xray",
                n.needsUpdate = !0
        }
    }
    document.querySelectorAll("[data-mode]").forEach(e => e.setAttribute("aria-pressed", e.dataset.mode === c)),
    H(".intro").classList.toggle("compact", c !== "exterior"),
    H("#process-panel").hidden = c !== "process"
}
document.querySelectorAll("[data-mode]").forEach(c => c.addEventListener("click", () => ye(c.dataset.mode)));
function ss(c, e) {
    W.position.fromArray(c),
    N.target.fromArray(e),
    N.update()
}
try {
    for (const c of ["complex", "interiors", "environment"]) {
        const e = await $a.loadAsync("/models/" + c + ".glb")
          , t = new X;
        t.userData.package = c,
        t.rotation.x = Math.PI / 2,
        (c === "environment" ? oe : re).add(t),
        t.add(e.scene),
        e.scene.traverse(s => {
            const a = s.userData.original_name;
            a && et.set(a, s),
            s.userData.shell_side && Re.push(s),
            s.userData.animation_kind && at.push(s),
            s.isMesh && (s.castShadow = !0,
            s.receiveShadow = !0,
            s.userData.baseMaterials = (Array.isArray(s.material) ? s.material : [s.material]).map(n => n.clone()),
            s.userData.shell_side && (s.material = Array.isArray(s.material) ? s.material.map(n => n.clone()) : s.material.clone()),
            tt.push(s))
        }
        ),
        c === "complex" && (H("#loading").hidden = !0)
    }
    ce.ready = !0,
    v.loadMs = Math.round(performance.now() - es),
    ye("exterior")
} catch (c) {
    H("#loading").hidden = !1,
    H("#loading").className = "error",
    H("#loading").textContent = "Не удалось загрузить модель. Обновите страницу; подробности сохранены в консоли.",
    console.error(c)
}
const ns = new $t;
let me = performance.now()
  , ge = 0
  , xe = 0;
const nt = []
  , it = [];
function ot() {
    requestAnimationFrame(ot);
    const c = Math.min(ns.getDelta(), .1);
    for (const e of nt)
        e(c);
    N.update();
    for (const e of it)
        e(c);
    j.render(q, W),
    ge++,
    performance.now() - me > 1e3 && (v.fps = Math.round(ge * 1e3 / (performance.now() - me)),
    v.drawCalls = j.info.render.calls,
    v.triangles = j.info.render.triangles,
    v.textures = j.info.memory.textures,
    v.geometries = j.info.memory.geometries,
    xe = v.fps < 24 ? xe + 1 : 0,
    xe >= 2 && v.quality === "full" && (v.quality = "adaptive-light",
    j.setPixelRatio(Math.min(devicePixelRatio, 1)),
    j.shadowMap.enabled = !1,
    j.setSize($.clientWidth, $.clientHeight),
    q.traverse(e => {
        e.isMesh && (Array.isArray(e.material) ? e.material : [e.material]).forEach(s => s.needsUpdate = !0)
    }
    )),
    H("#metrics").textContent = `${v.fps} FPS · ${Math.round(v.triangles / 1e3)}k △`,
    ge = 0,
    me = performance.now())
}
ot();
window.recycle = {
    THREE: Zt,
    $: H,
    scene: q,
    camera: W,
    renderer: j,
    controls: N,
    world: oe,
    modelRoot: re,
    objects: et,
    shells: Re,
    meshes: tt,
    animated: at,
    state: ce,
    metrics: v,
    config: ts,
    facts: as,
    setMode: ye,
    lookAt: ss,
    ticks: nt,
    postTicks: it
};
if (ce.ready) {
    const {connect: c} = await aa(async () => {
        const {connect: e} = await import("./interactions-CB83b4ow.js");
        return {
            connect: e
        }
    }
    , __vite__mapDeps([0, 1]));
    await c(window.recycle)
}
