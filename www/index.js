(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/leaflet@1.9.4/node_modules/leaflet/dist/leaflet.js
  var require_leaflet = __commonJS({
    "node_modules/.pnpm/leaflet@1.9.4/node_modules/leaflet/dist/leaflet.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).leaflet = {});
      }(exports, function(t) {
        "use strict";
        function l(t2) {
          for (var e2, i2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (e2 in i2 = arguments[n2])
              t2[e2] = i2[e2];
          return t2;
        }
        var R = Object.create || function(t2) {
          return N.prototype = t2, new N();
        };
        function N() {
        }
        function a(t2, e2) {
          var i2, n2 = Array.prototype.slice;
          return t2.bind ? t2.bind.apply(t2, n2.call(arguments, 1)) : (i2 = n2.call(arguments, 2), function() {
            return t2.apply(e2, i2.length ? i2.concat(n2.call(arguments)) : arguments);
          });
        }
        var D = 0;
        function h(t2) {
          return "_leaflet_id" in t2 || (t2._leaflet_id = ++D), t2._leaflet_id;
        }
        function j(t2, e2, i2) {
          var n2, o2, s2 = function() {
            n2 = false, o2 && (r2.apply(i2, o2), o2 = false);
          }, r2 = function() {
            n2 ? o2 = arguments : (t2.apply(i2, arguments), setTimeout(s2, e2), n2 = true);
          };
          return r2;
        }
        function H(t2, e2, i2) {
          var n2 = e2[1], e2 = e2[0], o2 = n2 - e2;
          return t2 === n2 && i2 ? t2 : ((t2 - e2) % o2 + o2) % o2 + e2;
        }
        function u() {
          return false;
        }
        function i(t2, e2) {
          return false === e2 ? t2 : (e2 = Math.pow(10, void 0 === e2 ? 6 : e2), Math.round(t2 * e2) / e2);
        }
        function W(t2) {
          return t2.trim ? t2.trim() : t2.replace(/^\s+|\s+$/g, "");
        }
        function F(t2) {
          return W(t2).split(/\s+/);
        }
        function c(t2, e2) {
          for (var i2 in Object.prototype.hasOwnProperty.call(t2, "options") || (t2.options = t2.options ? R(t2.options) : {}), e2)
            t2.options[i2] = e2[i2];
          return t2.options;
        }
        function U(t2, e2, i2) {
          var n2, o2 = [];
          for (n2 in t2)
            o2.push(encodeURIComponent(i2 ? n2.toUpperCase() : n2) + "=" + encodeURIComponent(t2[n2]));
          return (e2 && -1 !== e2.indexOf("?") ? "&" : "?") + o2.join("&");
        }
        var V = /\{ *([\w_ -]+) *\}/g;
        function q(t2, i2) {
          return t2.replace(V, function(t3, e2) {
            e2 = i2[e2];
            if (void 0 === e2)
              throw new Error("No value provided for variable " + t3);
            return e2 = "function" == typeof e2 ? e2(i2) : e2;
          });
        }
        var d = Array.isArray || function(t2) {
          return "[object Array]" === Object.prototype.toString.call(t2);
        };
        function G(t2, e2) {
          for (var i2 = 0; i2 < t2.length; i2++)
            if (t2[i2] === e2)
              return i2;
          return -1;
        }
        var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function Y(t2) {
          return window["webkit" + t2] || window["moz" + t2] || window["ms" + t2];
        }
        var X = 0;
        function J(t2) {
          var e2 = +/* @__PURE__ */ new Date(), i2 = Math.max(0, 16 - (e2 - X));
          return X = e2 + i2, window.setTimeout(t2, i2);
        }
        var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J, Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function(t2) {
          window.clearTimeout(t2);
        };
        function x(t2, e2, i2) {
          if (!i2 || $ !== J)
            return $.call(window, a(t2, e2));
          t2.call(e2);
        }
        function r(t2) {
          t2 && Q.call(window, t2);
        }
        var tt = { __proto__: null, extend: l, create: R, bind: a, get lastId() {
          return D;
        }, stamp: h, throttle: j, wrapNum: H, falseFn: u, formatNum: i, trim: W, splitWords: F, setOptions: c, getParamString: U, template: q, isArray: d, indexOf: G, emptyImageUrl: K, requestFn: $, cancelFn: Q, requestAnimFrame: x, cancelAnimFrame: r };
        function et() {
        }
        et.extend = function(t2) {
          function e2() {
            c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
          }
          var i2, n2 = e2.__super__ = this.prototype, o2 = R(n2);
          for (i2 in (o2.constructor = e2).prototype = o2, this)
            Object.prototype.hasOwnProperty.call(this, i2) && "prototype" !== i2 && "__super__" !== i2 && (e2[i2] = this[i2]);
          if (t2.statics && l(e2, t2.statics), t2.includes) {
            var s2 = t2.includes;
            if ("undefined" != typeof L && L && L.Mixin) {
              s2 = d(s2) ? s2 : [s2];
              for (var r2 = 0; r2 < s2.length; r2++)
                s2[r2] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
            }
            l.apply(null, [o2].concat(t2.includes));
          }
          return l(o2, t2), delete o2.statics, delete o2.includes, o2.options && (o2.options = n2.options ? R(n2.options) : {}, l(o2.options, t2.options)), o2._initHooks = [], o2.callInitHooks = function() {
            if (!this._initHooksCalled) {
              n2.callInitHooks && n2.callInitHooks.call(this), this._initHooksCalled = true;
              for (var t3 = 0, e3 = o2._initHooks.length; t3 < e3; t3++)
                o2._initHooks[t3].call(this);
            }
          }, e2;
        }, et.include = function(t2) {
          var e2 = this.prototype.options;
          return l(this.prototype, t2), t2.options && (this.prototype.options = e2, this.mergeOptions(t2.options)), this;
        }, et.mergeOptions = function(t2) {
          return l(this.prototype.options, t2), this;
        }, et.addInitHook = function(t2) {
          var e2 = Array.prototype.slice.call(arguments, 1), i2 = "function" == typeof t2 ? t2 : function() {
            this[t2].apply(this, e2);
          };
          return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i2), this;
        };
        var e = { on: function(t2, e2, i2) {
          if ("object" == typeof t2)
            for (var n2 in t2)
              this._on(n2, t2[n2], e2);
          else
            for (var o2 = 0, s2 = (t2 = F(t2)).length; o2 < s2; o2++)
              this._on(t2[o2], e2, i2);
          return this;
        }, off: function(t2, e2, i2) {
          if (arguments.length)
            if ("object" == typeof t2)
              for (var n2 in t2)
                this._off(n2, t2[n2], e2);
            else {
              t2 = F(t2);
              for (var o2 = 1 === arguments.length, s2 = 0, r2 = t2.length; s2 < r2; s2++)
                o2 ? this._off(t2[s2]) : this._off(t2[s2], e2, i2);
            }
          else
            delete this._events;
          return this;
        }, _on: function(t2, e2, i2, n2) {
          "function" != typeof e2 ? console.warn("wrong listener type: " + typeof e2) : false === this._listens(t2, e2, i2) && (e2 = { fn: e2, ctx: i2 = i2 === this ? void 0 : i2 }, n2 && (e2.once = true), this._events = this._events || {}, this._events[t2] = this._events[t2] || [], this._events[t2].push(e2));
        }, _off: function(t2, e2, i2) {
          var n2, o2, s2;
          if (this._events && (n2 = this._events[t2]))
            if (1 === arguments.length) {
              if (this._firingCount)
                for (o2 = 0, s2 = n2.length; o2 < s2; o2++)
                  n2[o2].fn = u;
              delete this._events[t2];
            } else
              "function" != typeof e2 ? console.warn("wrong listener type: " + typeof e2) : false !== (e2 = this._listens(t2, e2, i2)) && (i2 = n2[e2], this._firingCount && (i2.fn = u, this._events[t2] = n2 = n2.slice()), n2.splice(e2, 1));
        }, fire: function(t2, e2, i2) {
          if (this.listens(t2, i2)) {
            var n2 = l({}, e2, { type: t2, target: this, sourceTarget: e2 && e2.sourceTarget || this });
            if (this._events) {
              var o2 = this._events[t2];
              if (o2) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var s2 = 0, r2 = o2.length; s2 < r2; s2++) {
                  var a2 = o2[s2], h2 = a2.fn;
                  a2.once && this.off(t2, h2, a2.ctx), h2.call(a2.ctx || this, n2);
                }
                this._firingCount--;
              }
            }
            i2 && this._propagateEvent(n2);
          }
          return this;
        }, listens: function(t2, e2, i2, n2) {
          "string" != typeof t2 && console.warn('"string" type argument expected');
          var o2 = e2, s2 = ("function" != typeof e2 && (n2 = !!e2, i2 = o2 = void 0), this._events && this._events[t2]);
          if (s2 && s2.length && false !== this._listens(t2, o2, i2))
            return true;
          if (n2) {
            for (var r2 in this._eventParents)
              if (this._eventParents[r2].listens(t2, e2, i2, n2))
                return true;
          }
          return false;
        }, _listens: function(t2, e2, i2) {
          if (this._events) {
            var n2 = this._events[t2] || [];
            if (!e2)
              return !!n2.length;
            i2 === this && (i2 = void 0);
            for (var o2 = 0, s2 = n2.length; o2 < s2; o2++)
              if (n2[o2].fn === e2 && n2[o2].ctx === i2)
                return o2;
          }
          return false;
        }, once: function(t2, e2, i2) {
          if ("object" == typeof t2)
            for (var n2 in t2)
              this._on(n2, t2[n2], e2, true);
          else
            for (var o2 = 0, s2 = (t2 = F(t2)).length; o2 < s2; o2++)
              this._on(t2[o2], e2, i2, true);
          return this;
        }, addEventParent: function(t2) {
          return this._eventParents = this._eventParents || {}, this._eventParents[h(t2)] = t2, this;
        }, removeEventParent: function(t2) {
          return this._eventParents && delete this._eventParents[h(t2)], this;
        }, _propagateEvent: function(t2) {
          for (var e2 in this._eventParents)
            this._eventParents[e2].fire(t2.type, l({ layer: t2.target, propagatedFrom: t2.target }, t2), true);
        } }, it = (e.addEventListener = e.on, e.removeEventListener = e.clearAllEventListeners = e.off, e.addOneTimeEventListener = e.once, e.fireEvent = e.fire, e.hasEventListeners = e.listens, et.extend(e));
        function p(t2, e2, i2) {
          this.x = i2 ? Math.round(t2) : t2, this.y = i2 ? Math.round(e2) : e2;
        }
        var nt = Math.trunc || function(t2) {
          return 0 < t2 ? Math.floor(t2) : Math.ceil(t2);
        };
        function m(t2, e2, i2) {
          return t2 instanceof p ? t2 : d(t2) ? new p(t2[0], t2[1]) : null == t2 ? t2 : "object" == typeof t2 && "x" in t2 && "y" in t2 ? new p(t2.x, t2.y) : new p(t2, e2, i2);
        }
        function f(t2, e2) {
          if (t2)
            for (var i2 = e2 ? [t2, e2] : t2, n2 = 0, o2 = i2.length; n2 < o2; n2++)
              this.extend(i2[n2]);
        }
        function _(t2, e2) {
          return !t2 || t2 instanceof f ? t2 : new f(t2, e2);
        }
        function s(t2, e2) {
          if (t2)
            for (var i2 = e2 ? [t2, e2] : t2, n2 = 0, o2 = i2.length; n2 < o2; n2++)
              this.extend(i2[n2]);
        }
        function g(t2, e2) {
          return t2 instanceof s ? t2 : new s(t2, e2);
        }
        function v(t2, e2, i2) {
          if (isNaN(t2) || isNaN(e2))
            throw new Error("Invalid LatLng object: (" + t2 + ", " + e2 + ")");
          this.lat = +t2, this.lng = +e2, void 0 !== i2 && (this.alt = +i2);
        }
        function w(t2, e2, i2) {
          return t2 instanceof v ? t2 : d(t2) && "object" != typeof t2[0] ? 3 === t2.length ? new v(t2[0], t2[1], t2[2]) : 2 === t2.length ? new v(t2[0], t2[1]) : null : null == t2 ? t2 : "object" == typeof t2 && "lat" in t2 ? new v(t2.lat, "lng" in t2 ? t2.lng : t2.lon, t2.alt) : void 0 === e2 ? null : new v(t2, e2, i2);
        }
        p.prototype = { clone: function() {
          return new p(this.x, this.y);
        }, add: function(t2) {
          return this.clone()._add(m(t2));
        }, _add: function(t2) {
          return this.x += t2.x, this.y += t2.y, this;
        }, subtract: function(t2) {
          return this.clone()._subtract(m(t2));
        }, _subtract: function(t2) {
          return this.x -= t2.x, this.y -= t2.y, this;
        }, divideBy: function(t2) {
          return this.clone()._divideBy(t2);
        }, _divideBy: function(t2) {
          return this.x /= t2, this.y /= t2, this;
        }, multiplyBy: function(t2) {
          return this.clone()._multiplyBy(t2);
        }, _multiplyBy: function(t2) {
          return this.x *= t2, this.y *= t2, this;
        }, scaleBy: function(t2) {
          return new p(this.x * t2.x, this.y * t2.y);
        }, unscaleBy: function(t2) {
          return new p(this.x / t2.x, this.y / t2.y);
        }, round: function() {
          return this.clone()._round();
        }, _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }, floor: function() {
          return this.clone()._floor();
        }, _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }, ceil: function() {
          return this.clone()._ceil();
        }, _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }, trunc: function() {
          return this.clone()._trunc();
        }, _trunc: function() {
          return this.x = nt(this.x), this.y = nt(this.y), this;
        }, distanceTo: function(t2) {
          var e2 = (t2 = m(t2)).x - this.x, t2 = t2.y - this.y;
          return Math.sqrt(e2 * e2 + t2 * t2);
        }, equals: function(t2) {
          return (t2 = m(t2)).x === this.x && t2.y === this.y;
        }, contains: function(t2) {
          return t2 = m(t2), Math.abs(t2.x) <= Math.abs(this.x) && Math.abs(t2.y) <= Math.abs(this.y);
        }, toString: function() {
          return "Point(" + i(this.x) + ", " + i(this.y) + ")";
        } }, f.prototype = { extend: function(t2) {
          var e2, i2;
          if (t2) {
            if (t2 instanceof p || "number" == typeof t2[0] || "x" in t2)
              e2 = i2 = m(t2);
            else if (e2 = (t2 = _(t2)).min, i2 = t2.max, !e2 || !i2)
              return this;
            this.min || this.max ? (this.min.x = Math.min(e2.x, this.min.x), this.max.x = Math.max(i2.x, this.max.x), this.min.y = Math.min(e2.y, this.min.y), this.max.y = Math.max(i2.y, this.max.y)) : (this.min = e2.clone(), this.max = i2.clone());
          }
          return this;
        }, getCenter: function(t2) {
          return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t2);
        }, getBottomLeft: function() {
          return m(this.min.x, this.max.y);
        }, getTopRight: function() {
          return m(this.max.x, this.min.y);
        }, getTopLeft: function() {
          return this.min;
        }, getBottomRight: function() {
          return this.max;
        }, getSize: function() {
          return this.max.subtract(this.min);
        }, contains: function(t2) {
          var e2, i2;
          return (t2 = ("number" == typeof t2[0] || t2 instanceof p ? m : _)(t2)) instanceof f ? (e2 = t2.min, i2 = t2.max) : e2 = i2 = t2, e2.x >= this.min.x && i2.x <= this.max.x && e2.y >= this.min.y && i2.y <= this.max.y;
        }, intersects: function(t2) {
          t2 = _(t2);
          var e2 = this.min, i2 = this.max, n2 = t2.min, t2 = t2.max, o2 = t2.x >= e2.x && n2.x <= i2.x, t2 = t2.y >= e2.y && n2.y <= i2.y;
          return o2 && t2;
        }, overlaps: function(t2) {
          t2 = _(t2);
          var e2 = this.min, i2 = this.max, n2 = t2.min, t2 = t2.max, o2 = t2.x > e2.x && n2.x < i2.x, t2 = t2.y > e2.y && n2.y < i2.y;
          return o2 && t2;
        }, isValid: function() {
          return !(!this.min || !this.max);
        }, pad: function(t2) {
          var e2 = this.min, i2 = this.max, n2 = Math.abs(e2.x - i2.x) * t2, t2 = Math.abs(e2.y - i2.y) * t2;
          return _(m(e2.x - n2, e2.y - t2), m(i2.x + n2, i2.y + t2));
        }, equals: function(t2) {
          return !!t2 && (t2 = _(t2), this.min.equals(t2.getTopLeft()) && this.max.equals(t2.getBottomRight()));
        } }, s.prototype = { extend: function(t2) {
          var e2, i2, n2 = this._southWest, o2 = this._northEast;
          if (t2 instanceof v)
            i2 = e2 = t2;
          else {
            if (!(t2 instanceof s))
              return t2 ? this.extend(w(t2) || g(t2)) : this;
            if (e2 = t2._southWest, i2 = t2._northEast, !e2 || !i2)
              return this;
          }
          return n2 || o2 ? (n2.lat = Math.min(e2.lat, n2.lat), n2.lng = Math.min(e2.lng, n2.lng), o2.lat = Math.max(i2.lat, o2.lat), o2.lng = Math.max(i2.lng, o2.lng)) : (this._southWest = new v(e2.lat, e2.lng), this._northEast = new v(i2.lat, i2.lng)), this;
        }, pad: function(t2) {
          var e2 = this._southWest, i2 = this._northEast, n2 = Math.abs(e2.lat - i2.lat) * t2, t2 = Math.abs(e2.lng - i2.lng) * t2;
          return new s(new v(e2.lat - n2, e2.lng - t2), new v(i2.lat + n2, i2.lng + t2));
        }, getCenter: function() {
          return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        }, getSouthWest: function() {
          return this._southWest;
        }, getNorthEast: function() {
          return this._northEast;
        }, getNorthWest: function() {
          return new v(this.getNorth(), this.getWest());
        }, getSouthEast: function() {
          return new v(this.getSouth(), this.getEast());
        }, getWest: function() {
          return this._southWest.lng;
        }, getSouth: function() {
          return this._southWest.lat;
        }, getEast: function() {
          return this._northEast.lng;
        }, getNorth: function() {
          return this._northEast.lat;
        }, contains: function(t2) {
          t2 = ("number" == typeof t2[0] || t2 instanceof v || "lat" in t2 ? w : g)(t2);
          var e2, i2, n2 = this._southWest, o2 = this._northEast;
          return t2 instanceof s ? (e2 = t2.getSouthWest(), i2 = t2.getNorthEast()) : e2 = i2 = t2, e2.lat >= n2.lat && i2.lat <= o2.lat && e2.lng >= n2.lng && i2.lng <= o2.lng;
        }, intersects: function(t2) {
          t2 = g(t2);
          var e2 = this._southWest, i2 = this._northEast, n2 = t2.getSouthWest(), t2 = t2.getNorthEast(), o2 = t2.lat >= e2.lat && n2.lat <= i2.lat, t2 = t2.lng >= e2.lng && n2.lng <= i2.lng;
          return o2 && t2;
        }, overlaps: function(t2) {
          t2 = g(t2);
          var e2 = this._southWest, i2 = this._northEast, n2 = t2.getSouthWest(), t2 = t2.getNorthEast(), o2 = t2.lat > e2.lat && n2.lat < i2.lat, t2 = t2.lng > e2.lng && n2.lng < i2.lng;
          return o2 && t2;
        }, toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        }, equals: function(t2, e2) {
          return !!t2 && (t2 = g(t2), this._southWest.equals(t2.getSouthWest(), e2) && this._northEast.equals(t2.getNorthEast(), e2));
        }, isValid: function() {
          return !(!this._southWest || !this._northEast);
        } };
        var ot = { latLngToPoint: function(t2, e2) {
          t2 = this.projection.project(t2), e2 = this.scale(e2);
          return this.transformation._transform(t2, e2);
        }, pointToLatLng: function(t2, e2) {
          e2 = this.scale(e2), t2 = this.transformation.untransform(t2, e2);
          return this.projection.unproject(t2);
        }, project: function(t2) {
          return this.projection.project(t2);
        }, unproject: function(t2) {
          return this.projection.unproject(t2);
        }, scale: function(t2) {
          return 256 * Math.pow(2, t2);
        }, zoom: function(t2) {
          return Math.log(t2 / 256) / Math.LN2;
        }, getProjectedBounds: function(t2) {
          var e2;
          return this.infinite ? null : (e2 = this.projection.bounds, t2 = this.scale(t2), new f(this.transformation.transform(e2.min, t2), this.transformation.transform(e2.max, t2)));
        }, infinite: !(v.prototype = { equals: function(t2, e2) {
          return !!t2 && (t2 = w(t2), Math.max(Math.abs(this.lat - t2.lat), Math.abs(this.lng - t2.lng)) <= (void 0 === e2 ? 1e-9 : e2));
        }, toString: function(t2) {
          return "LatLng(" + i(this.lat, t2) + ", " + i(this.lng, t2) + ")";
        }, distanceTo: function(t2) {
          return st.distance(this, w(t2));
        }, wrap: function() {
          return st.wrapLatLng(this);
        }, toBounds: function(t2) {
          var t2 = 180 * t2 / 40075017, e2 = t2 / Math.cos(Math.PI / 180 * this.lat);
          return g([this.lat - t2, this.lng - e2], [this.lat + t2, this.lng + e2]);
        }, clone: function() {
          return new v(this.lat, this.lng, this.alt);
        } }), wrapLatLng: function(t2) {
          var e2 = this.wrapLng ? H(t2.lng, this.wrapLng, true) : t2.lng;
          return new v(this.wrapLat ? H(t2.lat, this.wrapLat, true) : t2.lat, e2, t2.alt);
        }, wrapLatLngBounds: function(t2) {
          var e2 = t2.getCenter(), i2 = this.wrapLatLng(e2), n2 = e2.lat - i2.lat, e2 = e2.lng - i2.lng;
          return 0 == n2 && 0 == e2 ? t2 : (i2 = t2.getSouthWest(), t2 = t2.getNorthEast(), new s(new v(i2.lat - n2, i2.lng - e2), new v(t2.lat - n2, t2.lng - e2)));
        } }, st = l({}, ot, { wrapLng: [-180, 180], R: 6371e3, distance: function(t2, e2) {
          var i2 = Math.PI / 180, n2 = t2.lat * i2, o2 = e2.lat * i2, s2 = Math.sin((e2.lat - t2.lat) * i2 / 2), e2 = Math.sin((e2.lng - t2.lng) * i2 / 2), t2 = s2 * s2 + Math.cos(n2) * Math.cos(o2) * e2 * e2, i2 = 2 * Math.atan2(Math.sqrt(t2), Math.sqrt(1 - t2));
          return this.R * i2;
        } }), rt = 6378137, rt = { R: rt, MAX_LATITUDE: 85.0511287798, project: function(t2) {
          var e2 = Math.PI / 180, i2 = this.MAX_LATITUDE, i2 = Math.max(Math.min(i2, t2.lat), -i2), i2 = Math.sin(i2 * e2);
          return new p(this.R * t2.lng * e2, this.R * Math.log((1 + i2) / (1 - i2)) / 2);
        }, unproject: function(t2) {
          var e2 = 180 / Math.PI;
          return new v((2 * Math.atan(Math.exp(t2.y / this.R)) - Math.PI / 2) * e2, t2.x * e2 / this.R);
        }, bounds: new f([-(rt = rt * Math.PI), -rt], [rt, rt]) };
        function at(t2, e2, i2, n2) {
          d(t2) ? (this._a = t2[0], this._b = t2[1], this._c = t2[2], this._d = t2[3]) : (this._a = t2, this._b = e2, this._c = i2, this._d = n2);
        }
        function ht(t2, e2, i2, n2) {
          return new at(t2, e2, i2, n2);
        }
        at.prototype = { transform: function(t2, e2) {
          return this._transform(t2.clone(), e2);
        }, _transform: function(t2, e2) {
          return t2.x = (e2 = e2 || 1) * (this._a * t2.x + this._b), t2.y = e2 * (this._c * t2.y + this._d), t2;
        }, untransform: function(t2, e2) {
          return new p((t2.x / (e2 = e2 || 1) - this._b) / this._a, (t2.y / e2 - this._d) / this._c);
        } };
        var lt = l({}, st, { code: "EPSG:3857", projection: rt, transformation: ht(lt = 0.5 / (Math.PI * rt.R), 0.5, -lt, 0.5) }), ut = l({}, lt, { code: "EPSG:900913" });
        function ct(t2) {
          return document.createElementNS("http://www.w3.org/2000/svg", t2);
        }
        function dt(t2, e2) {
          for (var i2, n2, o2, s2, r2 = "", a2 = 0, h2 = t2.length; a2 < h2; a2++) {
            for (i2 = 0, n2 = (o2 = t2[a2]).length; i2 < n2; i2++)
              r2 += (i2 ? "L" : "M") + (s2 = o2[i2]).x + " " + s2.y;
            r2 += e2 ? b.svg ? "z" : "x" : "";
          }
          return r2 || "M0 0";
        }
        var _t = document.documentElement.style, pt = "ActiveXObject" in window, mt = pt && !document.addEventListener, n = "msLaunchUri" in navigator && !("documentMode" in document), ft = y("webkit"), gt = y("android"), vt = y("android 2") || y("android 3"), yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), yt = gt && y("Google") && yt < 537 && !("AudioNode" in window), xt = !!window.opera, wt = !n && y("chrome"), bt = y("gecko") && !ft && !xt && !pt, Pt = !wt && y("safari"), Lt = y("phantom"), o = "OTransition" in _t, Tt = 0 === navigator.platform.indexOf("Win"), Mt = pt && "transition" in _t, zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt, _t = "MozPerspective" in _t, Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt, Zt = "undefined" != typeof orientation || y("mobile"), St = Zt && ft, Et = Zt && zt, kt = !window.PointerEvent && window.MSPointerEvent, Ot = !(!window.PointerEvent && !kt), At = "ontouchstart" in window || !!window.TouchEvent, Bt = !window.L_NO_TOUCH && (At || Ot), It = Zt && xt, Rt = Zt && bt, Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Dt = function() {
          var t2 = false;
          try {
            var e2 = Object.defineProperty({}, "passive", { get: function() {
              t2 = true;
            } });
            window.addEventListener("testPassiveEventSupport", u, e2), window.removeEventListener("testPassiveEventSupport", u, e2);
          } catch (t3) {
          }
          return t2;
        }(), jt = !!document.createElement("canvas").getContext, Ht = !(!document.createElementNS || !ct("svg").createSVGRect), Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
        function y(t2) {
          return 0 <= navigator.userAgent.toLowerCase().indexOf(t2);
        }
        var b = { ie: pt, ielt9: mt, edge: n, webkit: ft, android: gt, android23: vt, androidStock: yt, opera: xt, chrome: wt, gecko: bt, safari: Pt, phantom: Lt, opera12: o, win: Tt, ie3d: Mt, webkit3d: zt, gecko3d: _t, any3d: Ct, mobile: Zt, mobileWebkit: St, mobileWebkit3d: Et, msPointer: kt, pointer: Ot, touch: Bt, touchNative: At, mobileOpera: It, mobileGecko: Rt, retina: Nt, passiveEvents: Dt, canvas: jt, svg: Ht, vml: !Ht && function() {
          try {
            var t2 = document.createElement("div"), e2 = (t2.innerHTML = '<v:shape adj="1"/>', t2.firstChild);
            return e2.style.behavior = "url(#default#VML)", e2 && "object" == typeof e2.adj;
          } catch (t3) {
            return false;
          }
        }(), inlineSvg: Wt, mac: 0 === navigator.platform.indexOf("Mac"), linux: 0 === navigator.platform.indexOf("Linux") }, Ft = b.msPointer ? "MSPointerDown" : "pointerdown", Ut = b.msPointer ? "MSPointerMove" : "pointermove", Vt = b.msPointer ? "MSPointerUp" : "pointerup", qt = b.msPointer ? "MSPointerCancel" : "pointercancel", Gt = { touchstart: Ft, touchmove: Ut, touchend: Vt, touchcancel: qt }, Kt = { touchstart: function(t2, e2) {
          e2.MSPOINTER_TYPE_TOUCH && e2.pointerType === e2.MSPOINTER_TYPE_TOUCH && O(e2);
          ee(t2, e2);
        }, touchmove: ee, touchend: ee, touchcancel: ee }, Yt = {}, Xt = false;
        function Jt(t2, e2, i2) {
          return "touchstart" !== e2 || Xt || (document.addEventListener(Ft, $t, true), document.addEventListener(Ut, Qt, true), document.addEventListener(Vt, te, true), document.addEventListener(qt, te, true), Xt = true), Kt[e2] ? (i2 = Kt[e2].bind(this, i2), t2.addEventListener(Gt[e2], i2, false), i2) : (console.warn("wrong event specified:", e2), u);
        }
        function $t(t2) {
          Yt[t2.pointerId] = t2;
        }
        function Qt(t2) {
          Yt[t2.pointerId] && (Yt[t2.pointerId] = t2);
        }
        function te(t2) {
          delete Yt[t2.pointerId];
        }
        function ee(t2, e2) {
          if (e2.pointerType !== (e2.MSPOINTER_TYPE_MOUSE || "mouse")) {
            for (var i2 in e2.touches = [], Yt)
              e2.touches.push(Yt[i2]);
            e2.changedTouches = [e2], t2(e2);
          }
        }
        var ie = 200;
        function ne(t2, i2) {
          t2.addEventListener("dblclick", i2);
          var n2, o2 = 0;
          function e2(t3) {
            var e3;
            1 !== t3.detail ? n2 = t3.detail : "mouse" === t3.pointerType || t3.sourceCapabilities && !t3.sourceCapabilities.firesTouchEvents || ((e3 = Ne(t3)).some(function(t4) {
              return t4 instanceof HTMLLabelElement && t4.attributes.for;
            }) && !e3.some(function(t4) {
              return t4 instanceof HTMLInputElement || t4 instanceof HTMLSelectElement;
            }) || ((e3 = Date.now()) - o2 <= ie ? 2 === ++n2 && i2(function(t4) {
              var e4, i3, n3 = {};
              for (i3 in t4)
                e4 = t4[i3], n3[i3] = e4 && e4.bind ? e4.bind(t4) : e4;
              return (t4 = n3).type = "dblclick", n3.detail = 2, n3.isTrusted = false, n3._simulated = true, n3;
            }(t3)) : n2 = 1, o2 = e3));
          }
          return t2.addEventListener("click", e2), { dblclick: i2, simDblclick: e2 };
        }
        var oe, se, re, ae, he, le, ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
        function _e(t2) {
          return "string" == typeof t2 ? document.getElementById(t2) : t2;
        }
        function pe(t2, e2) {
          var i2 = t2.style[e2] || t2.currentStyle && t2.currentStyle[e2];
          return "auto" === (i2 = i2 && "auto" !== i2 || !document.defaultView ? i2 : (t2 = document.defaultView.getComputedStyle(t2, null)) ? t2[e2] : null) ? null : i2;
        }
        function P(t2, e2, i2) {
          t2 = document.createElement(t2);
          return t2.className = e2 || "", i2 && i2.appendChild(t2), t2;
        }
        function T(t2) {
          var e2 = t2.parentNode;
          e2 && e2.removeChild(t2);
        }
        function me(t2) {
          for (; t2.firstChild; )
            t2.removeChild(t2.firstChild);
        }
        function fe(t2) {
          var e2 = t2.parentNode;
          e2 && e2.lastChild !== t2 && e2.appendChild(t2);
        }
        function ge(t2) {
          var e2 = t2.parentNode;
          e2 && e2.firstChild !== t2 && e2.insertBefore(t2, e2.firstChild);
        }
        function ve(t2, e2) {
          return void 0 !== t2.classList ? t2.classList.contains(e2) : 0 < (t2 = xe(t2)).length && new RegExp("(^|\\s)" + e2 + "(\\s|$)").test(t2);
        }
        function M(t2, e2) {
          var i2;
          if (void 0 !== t2.classList)
            for (var n2 = F(e2), o2 = 0, s2 = n2.length; o2 < s2; o2++)
              t2.classList.add(n2[o2]);
          else
            ve(t2, e2) || ye(t2, ((i2 = xe(t2)) ? i2 + " " : "") + e2);
        }
        function z(t2, e2) {
          void 0 !== t2.classList ? t2.classList.remove(e2) : ye(t2, W((" " + xe(t2) + " ").replace(" " + e2 + " ", " ")));
        }
        function ye(t2, e2) {
          void 0 === t2.className.baseVal ? t2.className = e2 : t2.className.baseVal = e2;
        }
        function xe(t2) {
          return void 0 === (t2 = t2.correspondingElement ? t2.correspondingElement : t2).className.baseVal ? t2.className : t2.className.baseVal;
        }
        function C(t2, e2) {
          if ("opacity" in t2.style)
            t2.style.opacity = e2;
          else if ("filter" in t2.style) {
            var i2 = false, n2 = "DXImageTransform.Microsoft.Alpha";
            try {
              i2 = t2.filters.item(n2);
            } catch (t3) {
              if (1 === e2)
                return;
            }
            e2 = Math.round(100 * e2), i2 ? (i2.Enabled = 100 !== e2, i2.Opacity = e2) : t2.style.filter += " progid:" + n2 + "(opacity=" + e2 + ")";
          }
        }
        function we(t2) {
          for (var e2 = document.documentElement.style, i2 = 0; i2 < t2.length; i2++)
            if (t2[i2] in e2)
              return t2[i2];
          return false;
        }
        function be(t2, e2, i2) {
          e2 = e2 || new p(0, 0);
          t2.style[ue] = (b.ie3d ? "translate(" + e2.x + "px," + e2.y + "px)" : "translate3d(" + e2.x + "px," + e2.y + "px,0)") + (i2 ? " scale(" + i2 + ")" : "");
        }
        function Z(t2, e2) {
          t2._leaflet_pos = e2, b.any3d ? be(t2, e2) : (t2.style.left = e2.x + "px", t2.style.top = e2.y + "px");
        }
        function Pe(t2) {
          return t2._leaflet_pos || new p(0, 0);
        }
        function Le() {
          S(window, "dragstart", O);
        }
        function Te() {
          k(window, "dragstart", O);
        }
        function Me(t2) {
          for (; -1 === t2.tabIndex; )
            t2 = t2.parentNode;
          t2.style && (ze(), le = (he = t2).style.outlineStyle, t2.style.outlineStyle = "none", S(window, "keydown", ze));
        }
        function ze() {
          he && (he.style.outlineStyle = le, le = he = void 0, k(window, "keydown", ze));
        }
        function Ce(t2) {
          for (; !((t2 = t2.parentNode).offsetWidth && t2.offsetHeight || t2 === document.body); )
            ;
          return t2;
        }
        function Ze(t2) {
          var e2 = t2.getBoundingClientRect();
          return { x: e2.width / t2.offsetWidth || 1, y: e2.height / t2.offsetHeight || 1, boundingClientRect: e2 };
        }
        ae = "onselectstart" in document ? (re = function() {
          S(window, "selectstart", O);
        }, function() {
          k(window, "selectstart", O);
        }) : (se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), re = function() {
          var t2;
          se && (t2 = document.documentElement.style, oe = t2[se], t2[se] = "none");
        }, function() {
          se && (document.documentElement.style[se] = oe, oe = void 0);
        });
        pt = { __proto__: null, TRANSFORM: ue, TRANSITION: ce, TRANSITION_END: de, get: _e, getStyle: pe, create: P, remove: T, empty: me, toFront: fe, toBack: ge, hasClass: ve, addClass: M, removeClass: z, setClass: ye, getClass: xe, setOpacity: C, testProp: we, setTransform: be, setPosition: Z, getPosition: Pe, get disableTextSelection() {
          return re;
        }, get enableTextSelection() {
          return ae;
        }, disableImageDrag: Le, enableImageDrag: Te, preventOutline: Me, restoreOutline: ze, getSizedParentNode: Ce, getScale: Ze };
        function S(t2, e2, i2, n2) {
          if (e2 && "object" == typeof e2)
            for (var o2 in e2)
              ke(t2, o2, e2[o2], i2);
          else
            for (var s2 = 0, r2 = (e2 = F(e2)).length; s2 < r2; s2++)
              ke(t2, e2[s2], i2, n2);
          return this;
        }
        var E = "_leaflet_events";
        function k(t2, e2, i2, n2) {
          if (1 === arguments.length)
            Se(t2), delete t2[E];
          else if (e2 && "object" == typeof e2)
            for (var o2 in e2)
              Oe(t2, o2, e2[o2], i2);
          else if (e2 = F(e2), 2 === arguments.length)
            Se(t2, function(t3) {
              return -1 !== G(e2, t3);
            });
          else
            for (var s2 = 0, r2 = e2.length; s2 < r2; s2++)
              Oe(t2, e2[s2], i2, n2);
          return this;
        }
        function Se(t2, e2) {
          for (var i2 in t2[E]) {
            var n2 = i2.split(/\d/)[0];
            e2 && !e2(n2) || Oe(t2, n2, null, null, i2);
          }
        }
        var Ee = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
        function ke(e2, t2, i2, n2) {
          var o2, s2, r2 = t2 + h(i2) + (n2 ? "_" + h(n2) : "");
          e2[E] && e2[E][r2] || (s2 = o2 = function(t3) {
            return i2.call(n2 || e2, t3 || window.event);
          }, !b.touchNative && b.pointer && 0 === t2.indexOf("touch") ? o2 = Jt(e2, t2, o2) : b.touch && "dblclick" === t2 ? o2 = ne(e2, o2) : "addEventListener" in e2 ? "touchstart" === t2 || "touchmove" === t2 || "wheel" === t2 || "mousewheel" === t2 ? e2.addEventListener(Ee[t2] || t2, o2, !!b.passiveEvents && { passive: false }) : "mouseenter" === t2 || "mouseleave" === t2 ? e2.addEventListener(Ee[t2], o2 = function(t3) {
            t3 = t3 || window.event, We(e2, t3) && s2(t3);
          }, false) : e2.addEventListener(t2, s2, false) : e2.attachEvent("on" + t2, o2), e2[E] = e2[E] || {}, e2[E][r2] = o2);
        }
        function Oe(t2, e2, i2, n2, o2) {
          o2 = o2 || e2 + h(i2) + (n2 ? "_" + h(n2) : "");
          var s2, r2, i2 = t2[E] && t2[E][o2];
          i2 && (!b.touchNative && b.pointer && 0 === e2.indexOf("touch") ? (n2 = t2, r2 = i2, Gt[s2 = e2] ? n2.removeEventListener(Gt[s2], r2, false) : console.warn("wrong event specified:", s2)) : b.touch && "dblclick" === e2 ? (n2 = i2, (r2 = t2).removeEventListener("dblclick", n2.dblclick), r2.removeEventListener("click", n2.simDblclick)) : "removeEventListener" in t2 ? t2.removeEventListener(Ee[e2] || e2, i2, false) : t2.detachEvent("on" + e2, i2), t2[E][o2] = null);
        }
        function Ae(t2) {
          return t2.stopPropagation ? t2.stopPropagation() : t2.originalEvent ? t2.originalEvent._stopped = true : t2.cancelBubble = true, this;
        }
        function Be(t2) {
          return ke(t2, "wheel", Ae), this;
        }
        function Ie(t2) {
          return S(t2, "mousedown touchstart dblclick contextmenu", Ae), t2._leaflet_disable_click = true, this;
        }
        function O(t2) {
          return t2.preventDefault ? t2.preventDefault() : t2.returnValue = false, this;
        }
        function Re(t2) {
          return O(t2), Ae(t2), this;
        }
        function Ne(t2) {
          if (t2.composedPath)
            return t2.composedPath();
          for (var e2 = [], i2 = t2.target; i2; )
            e2.push(i2), i2 = i2.parentNode;
          return e2;
        }
        function De(t2, e2) {
          var i2, n2;
          return e2 ? (n2 = (i2 = Ze(e2)).boundingClientRect, new p((t2.clientX - n2.left) / i2.x - e2.clientLeft, (t2.clientY - n2.top) / i2.y - e2.clientTop)) : new p(t2.clientX, t2.clientY);
        }
        var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
        function He(t2) {
          return b.edge ? t2.wheelDeltaY / 2 : t2.deltaY && 0 === t2.deltaMode ? -t2.deltaY / je : t2.deltaY && 1 === t2.deltaMode ? 20 * -t2.deltaY : t2.deltaY && 2 === t2.deltaMode ? 60 * -t2.deltaY : t2.deltaX || t2.deltaZ ? 0 : t2.wheelDelta ? (t2.wheelDeltaY || t2.wheelDelta) / 2 : t2.detail && Math.abs(t2.detail) < 32765 ? 20 * -t2.detail : t2.detail ? t2.detail / -32765 * 60 : 0;
        }
        function We(t2, e2) {
          var i2 = e2.relatedTarget;
          if (!i2)
            return true;
          try {
            for (; i2 && i2 !== t2; )
              i2 = i2.parentNode;
          } catch (t3) {
            return false;
          }
          return i2 !== t2;
        }
        var mt = { __proto__: null, on: S, off: k, stopPropagation: Ae, disableScrollPropagation: Be, disableClickPropagation: Ie, preventDefault: O, stop: Re, getPropagationPath: Ne, getMousePosition: De, getWheelDelta: He, isExternalTarget: We, addListener: S, removeListener: k }, Fe = it.extend({ run: function(t2, e2, i2, n2) {
          this.stop(), this._el = t2, this._inProgress = true, this._duration = i2 || 0.25, this._easeOutPower = 1 / Math.max(n2 || 0.5, 0.2), this._startPos = Pe(t2), this._offset = e2.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        }, stop: function() {
          this._inProgress && (this._step(true), this._complete());
        }, _animate: function() {
          this._animId = x(this._animate, this), this._step();
        }, _step: function(t2) {
          var e2 = +/* @__PURE__ */ new Date() - this._startTime, i2 = 1e3 * this._duration;
          e2 < i2 ? this._runFrame(this._easeOut(e2 / i2), t2) : (this._runFrame(1), this._complete());
        }, _runFrame: function(t2, e2) {
          t2 = this._startPos.add(this._offset.multiplyBy(t2));
          e2 && t2._round(), Z(this._el, t2), this.fire("step");
        }, _complete: function() {
          r(this._animId), this._inProgress = false, this.fire("end");
        }, _easeOut: function(t2) {
          return 1 - Math.pow(1 - t2, this._easeOutPower);
        } }), A = it.extend({ options: { crs: lt, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(t2, e2) {
          e2 = c(this, e2), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(t2), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e2.maxBounds && this.setMaxBounds(e2.maxBounds), void 0 !== e2.zoom && (this._zoom = this._limitZoom(e2.zoom)), e2.center && void 0 !== e2.zoom && this.setView(w(e2.center), e2.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        }, setView: function(t2, e2, i2) {
          if ((e2 = void 0 === e2 ? this._zoom : this._limitZoom(e2), t2 = this._limitCenter(w(t2), e2, this.options.maxBounds), i2 = i2 || {}, this._stop(), this._loaded && !i2.reset && true !== i2) && (void 0 !== i2.animate && (i2.zoom = l({ animate: i2.animate }, i2.zoom), i2.pan = l({ animate: i2.animate, duration: i2.duration }, i2.pan)), this._zoom !== e2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(t2, e2, i2.zoom) : this._tryAnimatedPan(t2, i2.pan)))
            return clearTimeout(this._sizeTimer), this;
          return this._resetView(t2, e2, i2.pan && i2.pan.noMoveStart), this;
        }, setZoom: function(t2, e2) {
          return this._loaded ? this.setView(this.getCenter(), t2, { zoom: e2 }) : (this._zoom = t2, this);
        }, zoomIn: function(t2, e2) {
          return t2 = t2 || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t2, e2);
        }, zoomOut: function(t2, e2) {
          return t2 = t2 || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t2, e2);
        }, setZoomAround: function(t2, e2, i2) {
          var n2 = this.getZoomScale(e2), o2 = this.getSize().divideBy(2), t2 = (t2 instanceof p ? t2 : this.latLngToContainerPoint(t2)).subtract(o2).multiplyBy(1 - 1 / n2), n2 = this.containerPointToLatLng(o2.add(t2));
          return this.setView(n2, e2, { zoom: i2 });
        }, _getBoundsCenterZoom: function(t2, e2) {
          e2 = e2 || {}, t2 = t2.getBounds ? t2.getBounds() : g(t2);
          var i2 = m(e2.paddingTopLeft || e2.padding || [0, 0]), n2 = m(e2.paddingBottomRight || e2.padding || [0, 0]), o2 = this.getBoundsZoom(t2, false, i2.add(n2));
          return (o2 = "number" == typeof e2.maxZoom ? Math.min(e2.maxZoom, o2) : o2) === 1 / 0 ? { center: t2.getCenter(), zoom: o2 } : (e2 = n2.subtract(i2).divideBy(2), n2 = this.project(t2.getSouthWest(), o2), i2 = this.project(t2.getNorthEast(), o2), { center: this.unproject(n2.add(i2).divideBy(2).add(e2), o2), zoom: o2 });
        }, fitBounds: function(t2, e2) {
          if ((t2 = g(t2)).isValid())
            return t2 = this._getBoundsCenterZoom(t2, e2), this.setView(t2.center, t2.zoom, e2);
          throw new Error("Bounds are not valid.");
        }, fitWorld: function(t2) {
          return this.fitBounds([[-90, -180], [90, 180]], t2);
        }, panTo: function(t2, e2) {
          return this.setView(t2, this._zoom, { pan: e2 });
        }, panBy: function(t2, e2) {
          var i2;
          return e2 = e2 || {}, (t2 = m(t2).round()).x || t2.y ? (true === e2.animate || this.getSize().contains(t2) ? (this._panAnim || (this._panAnim = new Fe(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e2.noMoveStart || this.fire("movestart"), false !== e2.animate ? (M(this._mapPane, "leaflet-pan-anim"), i2 = this._getMapPanePos().subtract(t2).round(), this._panAnim.run(this._mapPane, i2, e2.duration || 0.25, e2.easeLinearity)) : (this._rawPanBy(t2), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t2)), this.getZoom()), this) : this.fire("moveend");
        }, flyTo: function(n2, o2, t2) {
          if (false === (t2 = t2 || {}).animate || !b.any3d)
            return this.setView(n2, o2, t2);
          this._stop();
          var s2 = this.project(this.getCenter()), r2 = this.project(n2), e2 = this.getSize(), a2 = this._zoom, h2 = (n2 = w(n2), o2 = void 0 === o2 ? a2 : o2, Math.max(e2.x, e2.y)), i2 = h2 * this.getZoomScale(a2, o2), l2 = r2.distanceTo(s2) || 1, u2 = 1.42, c2 = u2 * u2;
          function d2(t3) {
            t3 = (i2 * i2 - h2 * h2 + (t3 ? -1 : 1) * c2 * c2 * l2 * l2) / (2 * (t3 ? i2 : h2) * c2 * l2), t3 = Math.sqrt(t3 * t3 + 1) - t3;
            return t3 < 1e-9 ? -18 : Math.log(t3);
          }
          function _2(t3) {
            return (Math.exp(t3) - Math.exp(-t3)) / 2;
          }
          function p2(t3) {
            return (Math.exp(t3) + Math.exp(-t3)) / 2;
          }
          var m2 = d2(0);
          function f2(t3) {
            return h2 * (p2(m2) * (_2(t3 = m2 + u2 * t3) / p2(t3)) - _2(m2)) / c2;
          }
          var g2 = Date.now(), v2 = (d2(1) - m2) / u2, y2 = t2.duration ? 1e3 * t2.duration : 1e3 * v2 * 0.8;
          return this._moveStart(true, t2.noMoveStart), (function t3() {
            var e3 = (Date.now() - g2) / y2, i3 = (1 - Math.pow(1 - e3, 1.5)) * v2;
            e3 <= 1 ? (this._flyToFrame = x(t3, this), this._move(this.unproject(s2.add(r2.subtract(s2).multiplyBy(f2(i3) / l2)), a2), this.getScaleZoom(h2 / (e3 = i3, h2 * (p2(m2) / p2(m2 + u2 * e3))), a2), { flyTo: true })) : this._move(n2, o2)._moveEnd(true);
          }).call(this), this;
        }, flyToBounds: function(t2, e2) {
          t2 = this._getBoundsCenterZoom(t2, e2);
          return this.flyTo(t2.center, t2.zoom, e2);
        }, setMaxBounds: function(t2) {
          return t2 = g(t2), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t2.isValid() ? (this.options.maxBounds = t2, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        }, setMinZoom: function(t2) {
          var e2 = this.options.minZoom;
          return this.options.minZoom = t2, this._loaded && e2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t2) : this;
        }, setMaxZoom: function(t2) {
          var e2 = this.options.maxZoom;
          return this.options.maxZoom = t2, this._loaded && e2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t2) : this;
        }, panInsideBounds: function(t2, e2) {
          this._enforcingBounds = true;
          var i2 = this.getCenter(), t2 = this._limitCenter(i2, this._zoom, g(t2));
          return i2.equals(t2) || this.panTo(t2, e2), this._enforcingBounds = false, this;
        }, panInside: function(t2, e2) {
          var i2 = m((e2 = e2 || {}).paddingTopLeft || e2.padding || [0, 0]), n2 = m(e2.paddingBottomRight || e2.padding || [0, 0]), o2 = this.project(this.getCenter()), t2 = this.project(t2), s2 = this.getPixelBounds(), i2 = _([s2.min.add(i2), s2.max.subtract(n2)]), s2 = i2.getSize();
          return i2.contains(t2) || (this._enforcingBounds = true, n2 = t2.subtract(i2.getCenter()), i2 = i2.extend(t2).getSize().subtract(s2), o2.x += n2.x < 0 ? -i2.x : i2.x, o2.y += n2.y < 0 ? -i2.y : i2.y, this.panTo(this.unproject(o2), e2), this._enforcingBounds = false), this;
        }, invalidateSize: function(t2) {
          if (!this._loaded)
            return this;
          t2 = l({ animate: false, pan: true }, true === t2 ? { animate: true } : t2);
          var e2 = this.getSize(), i2 = (this._sizeChanged = true, this._lastCenter = null, this.getSize()), n2 = e2.divideBy(2).round(), o2 = i2.divideBy(2).round(), n2 = n2.subtract(o2);
          return n2.x || n2.y ? (t2.animate && t2.pan ? this.panBy(n2) : (t2.pan && this._rawPanBy(n2), this.fire("move"), t2.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: e2, newSize: i2 })) : this;
        }, stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        }, locate: function(t2) {
          var e2, i2;
          return t2 = this._locateOptions = l({ timeout: 1e4, watch: false }, t2), "geolocation" in navigator ? (e2 = a(this._handleGeolocationResponse, this), i2 = a(this._handleGeolocationError, this), t2.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e2, i2, t2) : navigator.geolocation.getCurrentPosition(e2, i2, t2)) : this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        }, stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
        }, _handleGeolocationError: function(t2) {
          var e2;
          this._container._leaflet_id && (e2 = t2.code, t2 = t2.message || (1 === e2 ? "permission denied" : 2 === e2 ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e2, message: "Geolocation error: " + t2 + "." }));
        }, _handleGeolocationResponse: function(t2) {
          if (this._container._leaflet_id) {
            var e2, i2, n2 = new v(t2.coords.latitude, t2.coords.longitude), o2 = n2.toBounds(2 * t2.coords.accuracy), s2 = this._locateOptions, r2 = (s2.setView && (e2 = this.getBoundsZoom(o2), this.setView(n2, s2.maxZoom ? Math.min(e2, s2.maxZoom) : e2)), { latlng: n2, bounds: o2, timestamp: t2.timestamp });
            for (i2 in t2.coords)
              "number" == typeof t2.coords[i2] && (r2[i2] = t2.coords[i2]);
            this.fire("locationfound", r2);
          }
        }, addHandler: function(t2, e2) {
          return e2 && (e2 = this[t2] = new e2(this), this._handlers.push(e2), this.options[t2] && e2.enable()), this;
        }, remove: function() {
          if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch (t3) {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          for (var t2 in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers)
            this._layers[t2].remove();
          for (t2 in this._panes)
            T(this._panes[t2]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        }, createPane: function(t2, e2) {
          e2 = P("div", "leaflet-pane" + (t2 ? " leaflet-" + t2.replace("Pane", "") + "-pane" : ""), e2 || this._mapPane);
          return t2 && (this._panes[t2] = e2), e2;
        }, getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        }, getZoom: function() {
          return this._zoom;
        }, getBounds: function() {
          var t2 = this.getPixelBounds();
          return new s(this.unproject(t2.getBottomLeft()), this.unproject(t2.getTopRight()));
        }, getMinZoom: function() {
          return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
        }, getMaxZoom: function() {
          return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        }, getBoundsZoom: function(t2, e2, i2) {
          t2 = g(t2), i2 = m(i2 || [0, 0]);
          var n2 = this.getZoom() || 0, o2 = this.getMinZoom(), s2 = this.getMaxZoom(), r2 = t2.getNorthWest(), t2 = t2.getSouthEast(), i2 = this.getSize().subtract(i2), t2 = _(this.project(t2, n2), this.project(r2, n2)).getSize(), r2 = b.any3d ? this.options.zoomSnap : 1, a2 = i2.x / t2.x, i2 = i2.y / t2.y, t2 = e2 ? Math.max(a2, i2) : Math.min(a2, i2), n2 = this.getScaleZoom(t2, n2);
          return r2 && (n2 = Math.round(n2 / (r2 / 100)) * (r2 / 100), n2 = e2 ? Math.ceil(n2 / r2) * r2 : Math.floor(n2 / r2) * r2), Math.max(o2, Math.min(s2, n2));
        }, getSize: function() {
          return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
        }, getPixelBounds: function(t2, e2) {
          t2 = this._getTopLeftPoint(t2, e2);
          return new f(t2, t2.add(this.getSize()));
        }, getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        }, getPixelWorldBounds: function(t2) {
          return this.options.crs.getProjectedBounds(void 0 === t2 ? this.getZoom() : t2);
        }, getPane: function(t2) {
          return "string" == typeof t2 ? this._panes[t2] : t2;
        }, getPanes: function() {
          return this._panes;
        }, getContainer: function() {
          return this._container;
        }, getZoomScale: function(t2, e2) {
          var i2 = this.options.crs;
          return e2 = void 0 === e2 ? this._zoom : e2, i2.scale(t2) / i2.scale(e2);
        }, getScaleZoom: function(t2, e2) {
          var i2 = this.options.crs, t2 = (e2 = void 0 === e2 ? this._zoom : e2, i2.zoom(t2 * i2.scale(e2)));
          return isNaN(t2) ? 1 / 0 : t2;
        }, project: function(t2, e2) {
          return e2 = void 0 === e2 ? this._zoom : e2, this.options.crs.latLngToPoint(w(t2), e2);
        }, unproject: function(t2, e2) {
          return e2 = void 0 === e2 ? this._zoom : e2, this.options.crs.pointToLatLng(m(t2), e2);
        }, layerPointToLatLng: function(t2) {
          t2 = m(t2).add(this.getPixelOrigin());
          return this.unproject(t2);
        }, latLngToLayerPoint: function(t2) {
          return this.project(w(t2))._round()._subtract(this.getPixelOrigin());
        }, wrapLatLng: function(t2) {
          return this.options.crs.wrapLatLng(w(t2));
        }, wrapLatLngBounds: function(t2) {
          return this.options.crs.wrapLatLngBounds(g(t2));
        }, distance: function(t2, e2) {
          return this.options.crs.distance(w(t2), w(e2));
        }, containerPointToLayerPoint: function(t2) {
          return m(t2).subtract(this._getMapPanePos());
        }, layerPointToContainerPoint: function(t2) {
          return m(t2).add(this._getMapPanePos());
        }, containerPointToLatLng: function(t2) {
          t2 = this.containerPointToLayerPoint(m(t2));
          return this.layerPointToLatLng(t2);
        }, latLngToContainerPoint: function(t2) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t2)));
        }, mouseEventToContainerPoint: function(t2) {
          return De(t2, this._container);
        }, mouseEventToLayerPoint: function(t2) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t2));
        }, mouseEventToLatLng: function(t2) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t2));
        }, _initContainer: function(t2) {
          t2 = this._container = _e(t2);
          if (!t2)
            throw new Error("Map container not found.");
          if (t2._leaflet_id)
            throw new Error("Map container is already initialized.");
          S(t2, "scroll", this._onScroll, this), this._containerId = h(t2);
        }, _initLayout: function() {
          var t2 = this._container, e2 = (this._fadeAnimated = this.options.fadeAnimation && b.any3d, M(t2, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), pe(t2, "position"));
          "absolute" !== e2 && "relative" !== e2 && "fixed" !== e2 && "sticky" !== e2 && (t2.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        }, _initPanes: function() {
          var t2 = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t2.markerPane, "leaflet-zoom-hide"), M(t2.shadowPane, "leaflet-zoom-hide"));
        }, _resetView: function(t2, e2, i2) {
          Z(this._mapPane, new p(0, 0));
          var n2 = !this._loaded, o2 = (this._loaded = true, e2 = this._limitZoom(e2), this.fire("viewprereset"), this._zoom !== e2);
          this._moveStart(o2, i2)._move(t2, e2)._moveEnd(o2), this.fire("viewreset"), n2 && this.fire("load");
        }, _moveStart: function(t2, e2) {
          return t2 && this.fire("zoomstart"), e2 || this.fire("movestart"), this;
        }, _move: function(t2, e2, i2, n2) {
          void 0 === e2 && (e2 = this._zoom);
          var o2 = this._zoom !== e2;
          return this._zoom = e2, this._lastCenter = t2, this._pixelOrigin = this._getNewPixelOrigin(t2), n2 ? i2 && i2.pinch && this.fire("zoom", i2) : ((o2 || i2 && i2.pinch) && this.fire("zoom", i2), this.fire("move", i2)), this;
        }, _moveEnd: function(t2) {
          return t2 && this.fire("zoomend"), this.fire("moveend");
        }, _stop: function() {
          return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        }, _rawPanBy: function(t2) {
          Z(this._mapPane, this._getMapPanePos().subtract(t2));
        }, _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        }, _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        }, _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        }, _initEvents: function(t2) {
          this._targets = {};
          var e2 = t2 ? k : S;
          e2((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e2(window, "resize", this._onResize, this), b.any3d && this.options.transform3DLimit && (t2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        }, _onResize: function() {
          r(this._resizeRequest), this._resizeRequest = x(function() {
            this.invalidateSize({ debounceMoveend: true });
          }, this);
        }, _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        }, _onMoveEnd: function() {
          var t2 = this._getMapPanePos();
          Math.max(Math.abs(t2.x), Math.abs(t2.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        }, _findEventTargets: function(t2, e2) {
          for (var i2, n2 = [], o2 = "mouseout" === e2 || "mouseover" === e2, s2 = t2.target || t2.srcElement, r2 = false; s2; ) {
            if ((i2 = this._targets[h(s2)]) && ("click" === e2 || "preclick" === e2) && this._draggableMoved(i2)) {
              r2 = true;
              break;
            }
            if (i2 && i2.listens(e2, true)) {
              if (o2 && !We(s2, t2))
                break;
              if (n2.push(i2), o2)
                break;
            }
            if (s2 === this._container)
              break;
            s2 = s2.parentNode;
          }
          return n2 = n2.length || r2 || o2 || !this.listens(e2, true) ? n2 : [this];
        }, _isClickDisabled: function(t2) {
          for (; t2 && t2 !== this._container; ) {
            if (t2._leaflet_disable_click)
              return true;
            t2 = t2.parentNode;
          }
        }, _handleDOMEvent: function(t2) {
          var e2, i2 = t2.target || t2.srcElement;
          !this._loaded || i2._leaflet_disable_events || "click" === t2.type && this._isClickDisabled(i2) || ("mousedown" === (e2 = t2.type) && Me(i2), this._fireDOMEvent(t2, e2));
        }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t2, e2, i2) {
          "click" === t2.type && ((a2 = l({}, t2)).type = "preclick", this._fireDOMEvent(a2, a2.type, i2));
          var n2 = this._findEventTargets(t2, e2);
          if (i2) {
            for (var o2 = [], s2 = 0; s2 < i2.length; s2++)
              i2[s2].listens(e2, true) && o2.push(i2[s2]);
            n2 = o2.concat(n2);
          }
          if (n2.length) {
            "contextmenu" === e2 && O(t2);
            var r2, a2 = n2[0], h2 = { originalEvent: t2 };
            for ("keypress" !== t2.type && "keydown" !== t2.type && "keyup" !== t2.type && (r2 = a2.getLatLng && (!a2._radius || a2._radius <= 10), h2.containerPoint = r2 ? this.latLngToContainerPoint(a2.getLatLng()) : this.mouseEventToContainerPoint(t2), h2.layerPoint = this.containerPointToLayerPoint(h2.containerPoint), h2.latlng = r2 ? a2.getLatLng() : this.layerPointToLatLng(h2.layerPoint)), s2 = 0; s2 < n2.length; s2++)
              if (n2[s2].fire(e2, h2, true), h2.originalEvent._stopped || false === n2[s2].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e2))
                return;
          }
        }, _draggableMoved: function(t2) {
          return (t2 = t2.dragging && t2.dragging.enabled() ? t2 : this).dragging && t2.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        }, _clearHandlers: function() {
          for (var t2 = 0, e2 = this._handlers.length; t2 < e2; t2++)
            this._handlers[t2].disable();
        }, whenReady: function(t2, e2) {
          return this._loaded ? t2.call(e2 || this, { target: this }) : this.on("load", t2, e2), this;
        }, _getMapPanePos: function() {
          return Pe(this._mapPane) || new p(0, 0);
        }, _moved: function() {
          var t2 = this._getMapPanePos();
          return t2 && !t2.equals([0, 0]);
        }, _getTopLeftPoint: function(t2, e2) {
          return (t2 && void 0 !== e2 ? this._getNewPixelOrigin(t2, e2) : this.getPixelOrigin()).subtract(this._getMapPanePos());
        }, _getNewPixelOrigin: function(t2, e2) {
          var i2 = this.getSize()._divideBy(2);
          return this.project(t2, e2)._subtract(i2)._add(this._getMapPanePos())._round();
        }, _latLngToNewLayerPoint: function(t2, e2, i2) {
          i2 = this._getNewPixelOrigin(i2, e2);
          return this.project(t2, e2)._subtract(i2);
        }, _latLngBoundsToNewLayerBounds: function(t2, e2, i2) {
          i2 = this._getNewPixelOrigin(i2, e2);
          return _([this.project(t2.getSouthWest(), e2)._subtract(i2), this.project(t2.getNorthWest(), e2)._subtract(i2), this.project(t2.getSouthEast(), e2)._subtract(i2), this.project(t2.getNorthEast(), e2)._subtract(i2)]);
        }, _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        }, _getCenterOffset: function(t2) {
          return this.latLngToLayerPoint(t2).subtract(this._getCenterLayerPoint());
        }, _limitCenter: function(t2, e2, i2) {
          var n2, o2;
          return !i2 || (n2 = this.project(t2, e2), o2 = this.getSize().divideBy(2), o2 = new f(n2.subtract(o2), n2.add(o2)), o2 = this._getBoundsOffset(o2, i2, e2), Math.abs(o2.x) <= 1 && Math.abs(o2.y) <= 1) ? t2 : this.unproject(n2.add(o2), e2);
        }, _limitOffset: function(t2, e2) {
          var i2;
          return e2 ? (i2 = new f((i2 = this.getPixelBounds()).min.add(t2), i2.max.add(t2)), t2.add(this._getBoundsOffset(i2, e2))) : t2;
        }, _getBoundsOffset: function(t2, e2, i2) {
          e2 = _(this.project(e2.getNorthEast(), i2), this.project(e2.getSouthWest(), i2)), i2 = e2.min.subtract(t2.min), e2 = e2.max.subtract(t2.max);
          return new p(this._rebound(i2.x, -e2.x), this._rebound(i2.y, -e2.y));
        }, _rebound: function(t2, e2) {
          return 0 < t2 + e2 ? Math.round(t2 - e2) / 2 : Math.max(0, Math.ceil(t2)) - Math.max(0, Math.floor(e2));
        }, _limitZoom: function(t2) {
          var e2 = this.getMinZoom(), i2 = this.getMaxZoom(), n2 = b.any3d ? this.options.zoomSnap : 1;
          return n2 && (t2 = Math.round(t2 / n2) * n2), Math.max(e2, Math.min(i2, t2));
        }, _onPanTransitionStep: function() {
          this.fire("move");
        }, _onPanTransitionEnd: function() {
          z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        }, _tryAnimatedPan: function(t2, e2) {
          t2 = this._getCenterOffset(t2)._trunc();
          return !(true !== (e2 && e2.animate) && !this.getSize().contains(t2)) && (this.panBy(t2, e2), true);
        }, _createAnimProxy: function() {
          var t2 = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t2), this.on("zoomanim", function(t3) {
            var e2 = ue, i2 = this._proxy.style[e2];
            be(this._proxy, this.project(t3.center, t3.zoom), this.getZoomScale(t3.zoom, 1)), i2 === this._proxy.style[e2] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        }, _destroyAnimProxy: function() {
          T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        }, _animMoveEnd: function() {
          var t2 = this.getCenter(), e2 = this.getZoom();
          be(this._proxy, this.project(t2, e2), this.getZoomScale(e2, 1));
        }, _catchTransitionEnd: function(t2) {
          this._animatingZoom && 0 <= t2.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
        }, _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        }, _tryAnimatedZoom: function(t2, e2, i2) {
          if (!this._animatingZoom) {
            if (i2 = i2 || {}, !this._zoomAnimated || false === i2.animate || this._nothingToAnimate() || Math.abs(e2 - this._zoom) > this.options.zoomAnimationThreshold)
              return false;
            var n2 = this.getZoomScale(e2), n2 = this._getCenterOffset(t2)._divideBy(1 - 1 / n2);
            if (true !== i2.animate && !this.getSize().contains(n2))
              return false;
            x(function() {
              this._moveStart(true, i2.noMoveStart || false)._animateZoom(t2, e2, true);
            }, this);
          }
          return true;
        }, _animateZoom: function(t2, e2, i2, n2) {
          this._mapPane && (i2 && (this._animatingZoom = true, this._animateToCenter = t2, this._animateToZoom = e2, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t2, zoom: e2, noUpdate: n2 }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(a(this._onZoomTransitionEnd, this), 250));
        }, _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
        } });
        function Ue(t2) {
          return new B(t2);
        }
        var B = et.extend({ options: { position: "topright" }, initialize: function(t2) {
          c(this, t2);
        }, getPosition: function() {
          return this.options.position;
        }, setPosition: function(t2) {
          var e2 = this._map;
          return e2 && e2.removeControl(this), this.options.position = t2, e2 && e2.addControl(this), this;
        }, getContainer: function() {
          return this._container;
        }, addTo: function(t2) {
          this.remove(), this._map = t2;
          var e2 = this._container = this.onAdd(t2), i2 = this.getPosition(), t2 = t2._controlCorners[i2];
          return M(e2, "leaflet-control"), -1 !== i2.indexOf("bottom") ? t2.insertBefore(e2, t2.firstChild) : t2.appendChild(e2), this._map.on("unload", this.remove, this), this;
        }, remove: function() {
          return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
        }, _refocusOnMap: function(t2) {
          this._map && t2 && 0 < t2.screenX && 0 < t2.screenY && this._map.getContainer().focus();
        } }), Ve = (A.include({ addControl: function(t2) {
          return t2.addTo(this), this;
        }, removeControl: function(t2) {
          return t2.remove(), this;
        }, _initControlPos: function() {
          var i2 = this._controlCorners = {}, n2 = "leaflet-", o2 = this._controlContainer = P("div", n2 + "control-container", this._container);
          function t2(t3, e2) {
            i2[t3 + e2] = P("div", n2 + t3 + " " + n2 + e2, o2);
          }
          t2("top", "left"), t2("top", "right"), t2("bottom", "left"), t2("bottom", "right");
        }, _clearControlPos: function() {
          for (var t2 in this._controlCorners)
            T(this._controlCorners[t2]);
          T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        } }), B.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(t2, e2, i2, n2) {
          return i2 < n2 ? -1 : n2 < i2 ? 1 : 0;
        } }, initialize: function(t2, e2, i2) {
          for (var n2 in c(this, i2), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false, t2)
            this._addLayer(t2[n2], n2);
          for (n2 in e2)
            this._addLayer(e2[n2], n2, true);
        }, onAdd: function(t2) {
          this._initLayout(), this._update(), (this._map = t2).on("zoomend", this._checkDisabledLayers, this);
          for (var e2 = 0; e2 < this._layers.length; e2++)
            this._layers[e2].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        }, addTo: function(t2) {
          return B.prototype.addTo.call(this, t2), this._expandIfNotCollapsed();
        }, onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t2 = 0; t2 < this._layers.length; t2++)
            this._layers[t2].layer.off("add remove", this._onLayerChange, this);
        }, addBaseLayer: function(t2, e2) {
          return this._addLayer(t2, e2), this._map ? this._update() : this;
        }, addOverlay: function(t2, e2) {
          return this._addLayer(t2, e2, true), this._map ? this._update() : this;
        }, removeLayer: function(t2) {
          t2.off("add remove", this._onLayerChange, this);
          t2 = this._getLayer(h(t2));
          return t2 && this._layers.splice(this._layers.indexOf(t2), 1), this._map ? this._update() : this;
        }, expand: function() {
          M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t2 = this._map.getSize().y - (this._container.offsetTop + 50);
          return t2 < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t2 + "px") : z(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        }, collapse: function() {
          return z(this._container, "leaflet-control-layers-expanded"), this;
        }, _initLayout: function() {
          var t2 = "leaflet-control-layers", e2 = this._container = P("div", t2), i2 = this.options.collapsed, n2 = (e2.setAttribute("aria-haspopup", true), Ie(e2), Be(e2), this._section = P("section", t2 + "-list")), o2 = (i2 && (this._map.on("click", this.collapse, this), S(e2, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this)), this._layersLink = P("a", t2 + "-toggle", e2));
          o2.href = "#", o2.title = "Layers", o2.setAttribute("role", "button"), S(o2, { keydown: function(t3) {
            13 === t3.keyCode && this._expandSafely();
          }, click: function(t3) {
            O(t3), this._expandSafely();
          } }, this), i2 || this.expand(), this._baseLayersList = P("div", t2 + "-base", n2), this._separator = P("div", t2 + "-separator", n2), this._overlaysList = P("div", t2 + "-overlays", n2), e2.appendChild(n2);
        }, _getLayer: function(t2) {
          for (var e2 = 0; e2 < this._layers.length; e2++)
            if (this._layers[e2] && h(this._layers[e2].layer) === t2)
              return this._layers[e2];
        }, _addLayer: function(t2, e2, i2) {
          this._map && t2.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t2, name: e2, overlay: i2 }), this.options.sortLayers && this._layers.sort(a(function(t3, e3) {
            return this.options.sortFunction(t3.layer, e3.layer, t3.name, e3.name);
          }, this)), this.options.autoZIndex && t2.setZIndex && (this._lastZIndex++, t2.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        }, _update: function() {
          if (this._container) {
            me(this._baseLayersList), me(this._overlaysList), this._layerControlInputs = [];
            for (var t2, e2, i2, n2 = 0, o2 = 0; o2 < this._layers.length; o2++)
              i2 = this._layers[o2], this._addItem(i2), e2 = e2 || i2.overlay, t2 = t2 || !i2.overlay, n2 += i2.overlay ? 0 : 1;
            this.options.hideSingleBase && (this._baseLayersList.style.display = (t2 = t2 && 1 < n2) ? "" : "none"), this._separator.style.display = e2 && t2 ? "" : "none";
          }
          return this;
        }, _onLayerChange: function(t2) {
          this._handlingClick || this._update();
          var e2 = this._getLayer(h(t2.target)), t2 = e2.overlay ? "add" === t2.type ? "overlayadd" : "overlayremove" : "add" === t2.type ? "baselayerchange" : null;
          t2 && this._map.fire(t2, e2);
        }, _createRadioElement: function(t2, e2) {
          t2 = '<input type="radio" class="leaflet-control-layers-selector" name="' + t2 + '"' + (e2 ? ' checked="checked"' : "") + "/>", e2 = document.createElement("div");
          return e2.innerHTML = t2, e2.firstChild;
        }, _addItem: function(t2) {
          var e2, i2 = document.createElement("label"), n2 = this._map.hasLayer(t2.layer), n2 = (t2.overlay ? ((e2 = document.createElement("input")).type = "checkbox", e2.className = "leaflet-control-layers-selector", e2.defaultChecked = n2) : e2 = this._createRadioElement("leaflet-base-layers_" + h(this), n2), this._layerControlInputs.push(e2), e2.layerId = h(t2.layer), S(e2, "click", this._onInputClick, this), document.createElement("span")), o2 = (n2.innerHTML = " " + t2.name, document.createElement("span"));
          return i2.appendChild(o2), o2.appendChild(e2), o2.appendChild(n2), (t2.overlay ? this._overlaysList : this._baseLayersList).appendChild(i2), this._checkDisabledLayers(), i2;
        }, _onInputClick: function() {
          if (!this._preventClick) {
            var t2, e2, i2 = this._layerControlInputs, n2 = [], o2 = [];
            this._handlingClick = true;
            for (var s2 = i2.length - 1; 0 <= s2; s2--)
              t2 = i2[s2], e2 = this._getLayer(t2.layerId).layer, t2.checked ? n2.push(e2) : t2.checked || o2.push(e2);
            for (s2 = 0; s2 < o2.length; s2++)
              this._map.hasLayer(o2[s2]) && this._map.removeLayer(o2[s2]);
            for (s2 = 0; s2 < n2.length; s2++)
              this._map.hasLayer(n2[s2]) || this._map.addLayer(n2[s2]);
            this._handlingClick = false, this._refocusOnMap();
          }
        }, _checkDisabledLayers: function() {
          for (var t2, e2, i2 = this._layerControlInputs, n2 = this._map.getZoom(), o2 = i2.length - 1; 0 <= o2; o2--)
            t2 = i2[o2], e2 = this._getLayer(t2.layerId).layer, t2.disabled = void 0 !== e2.options.minZoom && n2 < e2.options.minZoom || void 0 !== e2.options.maxZoom && n2 > e2.options.maxZoom;
        }, _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        }, _expandSafely: function() {
          var t2 = this._section, e2 = (this._preventClick = true, S(t2, "click", O), this.expand(), this);
          setTimeout(function() {
            k(t2, "click", O), e2._preventClick = false;
          });
        } })), qe = B.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(t2) {
          var e2 = "leaflet-control-zoom", i2 = P("div", e2 + " leaflet-bar"), n2 = this.options;
          return this._zoomInButton = this._createButton(n2.zoomInText, n2.zoomInTitle, e2 + "-in", i2, this._zoomIn), this._zoomOutButton = this._createButton(n2.zoomOutText, n2.zoomOutTitle, e2 + "-out", i2, this._zoomOut), this._updateDisabled(), t2.on("zoomend zoomlevelschange", this._updateDisabled, this), i2;
        }, onRemove: function(t2) {
          t2.off("zoomend zoomlevelschange", this._updateDisabled, this);
        }, disable: function() {
          return this._disabled = true, this._updateDisabled(), this;
        }, enable: function() {
          return this._disabled = false, this._updateDisabled(), this;
        }, _zoomIn: function(t2) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
        }, _zoomOut: function(t2) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
        }, _createButton: function(t2, e2, i2, n2, o2) {
          i2 = P("a", i2, n2);
          return i2.innerHTML = t2, i2.href = "#", i2.title = e2, i2.setAttribute("role", "button"), i2.setAttribute("aria-label", e2), Ie(i2), S(i2, "click", Re), S(i2, "click", o2, this), S(i2, "click", this._refocusOnMap, this), i2;
        }, _updateDisabled: function() {
          var t2 = this._map, e2 = "leaflet-disabled";
          z(this._zoomInButton, e2), z(this._zoomOutButton, e2), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t2._zoom !== t2.getMinZoom() || (M(this._zoomOutButton, e2), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t2._zoom !== t2.getMaxZoom() || (M(this._zoomInButton, e2), this._zoomInButton.setAttribute("aria-disabled", "true"));
        } }), Ge = (A.mergeOptions({ zoomControl: true }), A.addInitHook(function() {
          this.options.zoomControl && (this.zoomControl = new qe(), this.addControl(this.zoomControl));
        }), B.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(t2) {
          var e2 = "leaflet-control-scale", i2 = P("div", e2), n2 = this.options;
          return this._addScales(n2, e2 + "-line", i2), t2.on(n2.updateWhenIdle ? "moveend" : "move", this._update, this), t2.whenReady(this._update, this), i2;
        }, onRemove: function(t2) {
          t2.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        }, _addScales: function(t2, e2, i2) {
          t2.metric && (this._mScale = P("div", e2, i2)), t2.imperial && (this._iScale = P("div", e2, i2));
        }, _update: function() {
          var t2 = this._map, e2 = t2.getSize().y / 2, t2 = t2.distance(t2.containerPointToLatLng([0, e2]), t2.containerPointToLatLng([this.options.maxWidth, e2]));
          this._updateScales(t2);
        }, _updateScales: function(t2) {
          this.options.metric && t2 && this._updateMetric(t2), this.options.imperial && t2 && this._updateImperial(t2);
        }, _updateMetric: function(t2) {
          var e2 = this._getRoundNum(t2);
          this._updateScale(this._mScale, e2 < 1e3 ? e2 + " m" : e2 / 1e3 + " km", e2 / t2);
        }, _updateImperial: function(t2) {
          var e2, i2, t2 = 3.2808399 * t2;
          5280 < t2 ? (i2 = this._getRoundNum(e2 = t2 / 5280), this._updateScale(this._iScale, i2 + " mi", i2 / e2)) : (i2 = this._getRoundNum(t2), this._updateScale(this._iScale, i2 + " ft", i2 / t2));
        }, _updateScale: function(t2, e2, i2) {
          t2.style.width = Math.round(this.options.maxWidth * i2) + "px", t2.innerHTML = e2;
        }, _getRoundNum: function(t2) {
          var e2 = Math.pow(10, (Math.floor(t2) + "").length - 1), t2 = t2 / e2;
          return e2 * (t2 = 10 <= t2 ? 10 : 5 <= t2 ? 5 : 3 <= t2 ? 3 : 2 <= t2 ? 2 : 1);
        } })), Ke = B.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>" }, initialize: function(t2) {
          c(this, t2), this._attributions = {};
        }, onAdd: function(t2) {
          for (var e2 in (t2.attributionControl = this)._container = P("div", "leaflet-control-attribution"), Ie(this._container), t2._layers)
            t2._layers[e2].getAttribution && this.addAttribution(t2._layers[e2].getAttribution());
          return this._update(), t2.on("layeradd", this._addAttribution, this), this._container;
        }, onRemove: function(t2) {
          t2.off("layeradd", this._addAttribution, this);
        }, _addAttribution: function(t2) {
          t2.layer.getAttribution && (this.addAttribution(t2.layer.getAttribution()), t2.layer.once("remove", function() {
            this.removeAttribution(t2.layer.getAttribution());
          }, this));
        }, setPrefix: function(t2) {
          return this.options.prefix = t2, this._update(), this;
        }, addAttribution: function(t2) {
          return t2 && (this._attributions[t2] || (this._attributions[t2] = 0), this._attributions[t2]++, this._update()), this;
        }, removeAttribution: function(t2) {
          return t2 && this._attributions[t2] && (this._attributions[t2]--, this._update()), this;
        }, _update: function() {
          if (this._map) {
            var t2, e2 = [];
            for (t2 in this._attributions)
              this._attributions[t2] && e2.push(t2);
            var i2 = [];
            this.options.prefix && i2.push(this.options.prefix), e2.length && i2.push(e2.join(", ")), this._container.innerHTML = i2.join(' <span aria-hidden="true">|</span> ');
          }
        } }), n = (A.mergeOptions({ attributionControl: true }), A.addInitHook(function() {
          this.options.attributionControl && new Ke().addTo(this);
        }), B.Layers = Ve, B.Zoom = qe, B.Scale = Ge, B.Attribution = Ke, Ue.layers = function(t2, e2, i2) {
          return new Ve(t2, e2, i2);
        }, Ue.zoom = function(t2) {
          return new qe(t2);
        }, Ue.scale = function(t2) {
          return new Ge(t2);
        }, Ue.attribution = function(t2) {
          return new Ke(t2);
        }, et.extend({ initialize: function(t2) {
          this._map = t2;
        }, enable: function() {
          return this._enabled || (this._enabled = true, this.addHooks()), this;
        }, disable: function() {
          return this._enabled && (this._enabled = false, this.removeHooks()), this;
        }, enabled: function() {
          return !!this._enabled;
        } })), ft = (n.addTo = function(t2, e2) {
          return t2.addHandler(e2, this), this;
        }, { Events: e }), Ye = b.touch ? "touchstart mousedown" : "mousedown", Xe = it.extend({ options: { clickTolerance: 3 }, initialize: function(t2, e2, i2, n2) {
          c(this, n2), this._element = t2, this._dragStartTarget = e2 || t2, this._preventOutline = i2;
        }, enable: function() {
          this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this), this._enabled = true);
        }, disable: function() {
          this._enabled && (Xe._dragging === this && this.finishDrag(true), k(this._dragStartTarget, Ye, this._onDown, this), this._enabled = false, this._moved = false);
        }, _onDown: function(t2) {
          var e2, i2;
          this._enabled && (this._moved = false, ve(this._element, "leaflet-zoom-anim") || (t2.touches && 1 !== t2.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t2.shiftKey || 1 !== t2.which && 1 !== t2.button && !t2.touches || ((Xe._dragging = this)._preventOutline && Me(this._element), Le(), re(), this._moving || (this.fire("down"), i2 = t2.touches ? t2.touches[0] : t2, e2 = Ce(this._element), this._startPoint = new p(i2.clientX, i2.clientY), this._startPos = Pe(this._element), this._parentScale = Ze(e2), i2 = "mousedown" === t2.type, S(document, i2 ? "mousemove" : "touchmove", this._onMove, this), S(document, i2 ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
        }, _onMove: function(t2) {
          var e2;
          this._enabled && (t2.touches && 1 < t2.touches.length ? this._moved = true : !(e2 = new p((e2 = t2.touches && 1 === t2.touches.length ? t2.touches[0] : t2).clientX, e2.clientY)._subtract(this._startPoint)).x && !e2.y || Math.abs(e2.x) + Math.abs(e2.y) < this.options.clickTolerance || (e2.x /= this._parentScale.x, e2.y /= this._parentScale.y, O(t2), this._moved || (this.fire("dragstart"), this._moved = true, M(document.body, "leaflet-dragging"), this._lastTarget = t2.target || t2.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e2), this._moving = true, this._lastEvent = t2, this._updatePosition()));
        }, _updatePosition: function() {
          var t2 = { originalEvent: this._lastEvent };
          this.fire("predrag", t2), Z(this._element, this._newPos), this.fire("drag", t2);
        }, _onUp: function() {
          this._enabled && this.finishDrag();
        }, finishDrag: function(t2) {
          z(document.body, "leaflet-dragging"), this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), k(document, "mousemove touchmove", this._onMove, this), k(document, "mouseup touchend touchcancel", this._onUp, this), Te(), ae();
          var e2 = this._moved && this._moving;
          this._moving = false, Xe._dragging = false, e2 && this.fire("dragend", { noInertia: t2, distance: this._newPos.distanceTo(this._startPos) });
        } });
        function Je(t2, e2, i2) {
          for (var n2, o2, s2, r2, a2, h2, l2, u2 = [1, 4, 2, 8], c2 = 0, d2 = t2.length; c2 < d2; c2++)
            t2[c2]._code = si(t2[c2], e2);
          for (s2 = 0; s2 < 4; s2++) {
            for (h2 = u2[s2], n2 = [], c2 = 0, o2 = (d2 = t2.length) - 1; c2 < d2; o2 = c2++)
              r2 = t2[c2], a2 = t2[o2], r2._code & h2 ? a2._code & h2 || ((l2 = oi(a2, r2, h2, e2, i2))._code = si(l2, e2), n2.push(l2)) : (a2._code & h2 && ((l2 = oi(a2, r2, h2, e2, i2))._code = si(l2, e2), n2.push(l2)), n2.push(r2));
            t2 = n2;
          }
          return t2;
        }
        function $e(t2, e2) {
          var i2, n2, o2, s2, r2, a2, h2;
          if (!t2 || 0 === t2.length)
            throw new Error("latlngs not passed");
          I(t2) || (console.warn("latlngs are not flat! Only the first ring will be used"), t2 = t2[0]);
          for (var l2 = w([0, 0]), u2 = g(t2), c2 = (u2.getNorthWest().distanceTo(u2.getSouthWest()) * u2.getNorthEast().distanceTo(u2.getNorthWest()) < 1700 && (l2 = Qe(t2)), t2.length), d2 = [], _2 = 0; _2 < c2; _2++) {
            var p2 = w(t2[_2]);
            d2.push(e2.project(w([p2.lat - l2.lat, p2.lng - l2.lng])));
          }
          for (_2 = r2 = a2 = h2 = 0, i2 = c2 - 1; _2 < c2; i2 = _2++)
            n2 = d2[_2], o2 = d2[i2], s2 = n2.y * o2.x - o2.y * n2.x, a2 += (n2.x + o2.x) * s2, h2 += (n2.y + o2.y) * s2, r2 += 3 * s2;
          u2 = 0 === r2 ? d2[0] : [a2 / r2, h2 / r2], u2 = e2.unproject(m(u2));
          return w([u2.lat + l2.lat, u2.lng + l2.lng]);
        }
        function Qe(t2) {
          for (var e2 = 0, i2 = 0, n2 = 0, o2 = 0; o2 < t2.length; o2++) {
            var s2 = w(t2[o2]);
            e2 += s2.lat, i2 += s2.lng, n2++;
          }
          return w([e2 / n2, i2 / n2]);
        }
        var ti, gt = { __proto__: null, clipPolygon: Je, polygonCenter: $e, centroid: Qe };
        function ei(t2, e2) {
          if (e2 && t2.length) {
            var i2 = t2 = function(t3, e3) {
              for (var i3 = [t3[0]], n3 = 1, o3 = 0, s3 = t3.length; n3 < s3; n3++)
                (function(t4, e4) {
                  var i4 = e4.x - t4.x, e4 = e4.y - t4.y;
                  return i4 * i4 + e4 * e4;
                })(t3[n3], t3[o3]) > e3 && (i3.push(t3[n3]), o3 = n3);
              o3 < s3 - 1 && i3.push(t3[s3 - 1]);
              return i3;
            }(t2, e2 = e2 * e2), n2 = i2.length, o2 = new (typeof Uint8Array != "undefined" ? Uint8Array : Array)(n2);
            o2[0] = o2[n2 - 1] = 1, function t3(e3, i3, n3, o3, s3) {
              var r3, a2, h2, l2 = 0;
              for (a2 = o3 + 1; a2 <= s3 - 1; a2++)
                h2 = ri(e3[a2], e3[o3], e3[s3], true), l2 < h2 && (r3 = a2, l2 = h2);
              n3 < l2 && (i3[r3] = 1, t3(e3, i3, n3, o3, r3), t3(e3, i3, n3, r3, s3));
            }(i2, o2, e2, 0, n2 - 1);
            var s2, r2 = [];
            for (s2 = 0; s2 < n2; s2++)
              o2[s2] && r2.push(i2[s2]);
            return r2;
          }
          return t2.slice();
        }
        function ii(t2, e2, i2) {
          return Math.sqrt(ri(t2, e2, i2, true));
        }
        function ni(t2, e2, i2, n2, o2) {
          var s2, r2, a2, h2 = n2 ? ti : si(t2, i2), l2 = si(e2, i2);
          for (ti = l2; ; ) {
            if (!(h2 | l2))
              return [t2, e2];
            if (h2 & l2)
              return false;
            a2 = si(r2 = oi(t2, e2, s2 = h2 || l2, i2, o2), i2), s2 === h2 ? (t2 = r2, h2 = a2) : (e2 = r2, l2 = a2);
          }
        }
        function oi(t2, e2, i2, n2, o2) {
          var s2, r2, a2 = e2.x - t2.x, e2 = e2.y - t2.y, h2 = n2.min, n2 = n2.max;
          return 8 & i2 ? (s2 = t2.x + a2 * (n2.y - t2.y) / e2, r2 = n2.y) : 4 & i2 ? (s2 = t2.x + a2 * (h2.y - t2.y) / e2, r2 = h2.y) : 2 & i2 ? (s2 = n2.x, r2 = t2.y + e2 * (n2.x - t2.x) / a2) : 1 & i2 && (s2 = h2.x, r2 = t2.y + e2 * (h2.x - t2.x) / a2), new p(s2, r2, o2);
        }
        function si(t2, e2) {
          var i2 = 0;
          return t2.x < e2.min.x ? i2 |= 1 : t2.x > e2.max.x && (i2 |= 2), t2.y < e2.min.y ? i2 |= 4 : t2.y > e2.max.y && (i2 |= 8), i2;
        }
        function ri(t2, e2, i2, n2) {
          var o2 = e2.x, e2 = e2.y, s2 = i2.x - o2, r2 = i2.y - e2, a2 = s2 * s2 + r2 * r2;
          return 0 < a2 && (1 < (a2 = ((t2.x - o2) * s2 + (t2.y - e2) * r2) / a2) ? (o2 = i2.x, e2 = i2.y) : 0 < a2 && (o2 += s2 * a2, e2 += r2 * a2)), s2 = t2.x - o2, r2 = t2.y - e2, n2 ? s2 * s2 + r2 * r2 : new p(o2, e2);
        }
        function I(t2) {
          return !d(t2[0]) || "object" != typeof t2[0][0] && void 0 !== t2[0][0];
        }
        function ai(t2) {
          return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), I(t2);
        }
        function hi(t2, e2) {
          var i2, n2, o2, s2, r2, a2;
          if (!t2 || 0 === t2.length)
            throw new Error("latlngs not passed");
          I(t2) || (console.warn("latlngs are not flat! Only the first ring will be used"), t2 = t2[0]);
          for (var h2 = w([0, 0]), l2 = g(t2), u2 = (l2.getNorthWest().distanceTo(l2.getSouthWest()) * l2.getNorthEast().distanceTo(l2.getNorthWest()) < 1700 && (h2 = Qe(t2)), t2.length), c2 = [], d2 = 0; d2 < u2; d2++) {
            var _2 = w(t2[d2]);
            c2.push(e2.project(w([_2.lat - h2.lat, _2.lng - h2.lng])));
          }
          for (i2 = d2 = 0; d2 < u2 - 1; d2++)
            i2 += c2[d2].distanceTo(c2[d2 + 1]) / 2;
          if (0 === i2)
            a2 = c2[0];
          else
            for (n2 = d2 = 0; d2 < u2 - 1; d2++)
              if (o2 = c2[d2], s2 = c2[d2 + 1], i2 < (n2 += r2 = o2.distanceTo(s2))) {
                a2 = [s2.x - (r2 = (n2 - i2) / r2) * (s2.x - o2.x), s2.y - r2 * (s2.y - o2.y)];
                break;
              }
          l2 = e2.unproject(m(a2));
          return w([l2.lat + h2.lat, l2.lng + h2.lng]);
        }
        var vt = { __proto__: null, simplify: ei, pointToSegmentDistance: ii, closestPointOnSegment: function(t2, e2, i2) {
          return ri(t2, e2, i2);
        }, clipSegment: ni, _getEdgeIntersection: oi, _getBitCode: si, _sqClosestPointOnSegment: ri, isFlat: I, _flat: ai, polylineCenter: hi }, yt = { project: function(t2) {
          return new p(t2.lng, t2.lat);
        }, unproject: function(t2) {
          return new v(t2.y, t2.x);
        }, bounds: new f([-180, -90], [180, 90]) }, xt = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new f([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(t2) {
          var e2 = Math.PI / 180, i2 = this.R, n2 = t2.lat * e2, o2 = this.R_MINOR / i2, o2 = Math.sqrt(1 - o2 * o2), s2 = o2 * Math.sin(n2), s2 = Math.tan(Math.PI / 4 - n2 / 2) / Math.pow((1 - s2) / (1 + s2), o2 / 2), n2 = -i2 * Math.log(Math.max(s2, 1e-10));
          return new p(t2.lng * e2 * i2, n2);
        }, unproject: function(t2) {
          for (var e2, i2 = 180 / Math.PI, n2 = this.R, o2 = this.R_MINOR / n2, s2 = Math.sqrt(1 - o2 * o2), r2 = Math.exp(-t2.y / n2), a2 = Math.PI / 2 - 2 * Math.atan(r2), h2 = 0, l2 = 0.1; h2 < 15 && 1e-7 < Math.abs(l2); h2++)
            e2 = s2 * Math.sin(a2), e2 = Math.pow((1 - e2) / (1 + e2), s2 / 2), a2 += l2 = Math.PI / 2 - 2 * Math.atan(r2 * e2) - a2;
          return new v(a2 * i2, t2.x * i2 / n2);
        } }, wt = { __proto__: null, LonLat: yt, Mercator: xt, SphericalMercator: rt }, Pt = l({}, st, { code: "EPSG:3395", projection: xt, transformation: ht(bt = 0.5 / (Math.PI * xt.R), 0.5, -bt, 0.5) }), li = l({}, st, { code: "EPSG:4326", projection: yt, transformation: ht(1 / 180, 1, -1 / 180, 0.5) }), Lt = l({}, ot, { projection: yt, transformation: ht(1, 0, -1, 0), scale: function(t2) {
          return Math.pow(2, t2);
        }, zoom: function(t2) {
          return Math.log(t2) / Math.LN2;
        }, distance: function(t2, e2) {
          var i2 = e2.lng - t2.lng, e2 = e2.lat - t2.lat;
          return Math.sqrt(i2 * i2 + e2 * e2);
        }, infinite: true }), o = (ot.Earth = st, ot.EPSG3395 = Pt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, ot.EPSG4326 = li, ot.Simple = Lt, it.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(t2) {
          return t2.addLayer(this), this;
        }, remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        }, removeFrom: function(t2) {
          return t2 && t2.removeLayer(this), this;
        }, getPane: function(t2) {
          return this._map.getPane(t2 ? this.options[t2] || t2 : this.options.pane);
        }, addInteractiveTarget: function(t2) {
          return this._map._targets[h(t2)] = this;
        }, removeInteractiveTarget: function(t2) {
          return delete this._map._targets[h(t2)], this;
        }, getAttribution: function() {
          return this.options.attribution;
        }, _layerAdd: function(t2) {
          var e2, i2 = t2.target;
          i2.hasLayer(this) && (this._map = i2, this._zoomAnimated = i2._zoomAnimated, this.getEvents && (e2 = this.getEvents(), i2.on(e2, this), this.once("remove", function() {
            i2.off(e2, this);
          }, this)), this.onAdd(i2), this.fire("add"), i2.fire("layeradd", { layer: this }));
        } })), ui = (A.include({ addLayer: function(t2) {
          var e2;
          if (t2._layerAdd)
            return e2 = h(t2), this._layers[e2] || ((this._layers[e2] = t2)._mapToAdd = this, t2.beforeAdd && t2.beforeAdd(this), this.whenReady(t2._layerAdd, t2)), this;
          throw new Error("The provided object is not a Layer.");
        }, removeLayer: function(t2) {
          var e2 = h(t2);
          return this._layers[e2] && (this._loaded && t2.onRemove(this), delete this._layers[e2], this._loaded && (this.fire("layerremove", { layer: t2 }), t2.fire("remove")), t2._map = t2._mapToAdd = null), this;
        }, hasLayer: function(t2) {
          return h(t2) in this._layers;
        }, eachLayer: function(t2, e2) {
          for (var i2 in this._layers)
            t2.call(e2, this._layers[i2]);
          return this;
        }, _addLayers: function(t2) {
          for (var e2 = 0, i2 = (t2 = t2 ? d(t2) ? t2 : [t2] : []).length; e2 < i2; e2++)
            this.addLayer(t2[e2]);
        }, _addZoomLimit: function(t2) {
          isNaN(t2.options.maxZoom) && isNaN(t2.options.minZoom) || (this._zoomBoundLayers[h(t2)] = t2, this._updateZoomLevels());
        }, _removeZoomLimit: function(t2) {
          t2 = h(t2);
          this._zoomBoundLayers[t2] && (delete this._zoomBoundLayers[t2], this._updateZoomLevels());
        }, _updateZoomLevels: function() {
          var t2, e2 = 1 / 0, i2 = -1 / 0, n2 = this._getZoomSpan();
          for (t2 in this._zoomBoundLayers)
            var o2 = this._zoomBoundLayers[t2].options, e2 = void 0 === o2.minZoom ? e2 : Math.min(e2, o2.minZoom), i2 = void 0 === o2.maxZoom ? i2 : Math.max(i2, o2.maxZoom);
          this._layersMaxZoom = i2 === -1 / 0 ? void 0 : i2, this._layersMinZoom = e2 === 1 / 0 ? void 0 : e2, n2 !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        } }), o.extend({ initialize: function(t2, e2) {
          var i2, n2;
          if (c(this, e2), this._layers = {}, t2)
            for (i2 = 0, n2 = t2.length; i2 < n2; i2++)
              this.addLayer(t2[i2]);
        }, addLayer: function(t2) {
          var e2 = this.getLayerId(t2);
          return this._layers[e2] = t2, this._map && this._map.addLayer(t2), this;
        }, removeLayer: function(t2) {
          t2 = t2 in this._layers ? t2 : this.getLayerId(t2);
          return this._map && this._layers[t2] && this._map.removeLayer(this._layers[t2]), delete this._layers[t2], this;
        }, hasLayer: function(t2) {
          return ("number" == typeof t2 ? t2 : this.getLayerId(t2)) in this._layers;
        }, clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        }, invoke: function(t2) {
          var e2, i2, n2 = Array.prototype.slice.call(arguments, 1);
          for (e2 in this._layers)
            (i2 = this._layers[e2])[t2] && i2[t2].apply(i2, n2);
          return this;
        }, onAdd: function(t2) {
          this.eachLayer(t2.addLayer, t2);
        }, onRemove: function(t2) {
          this.eachLayer(t2.removeLayer, t2);
        }, eachLayer: function(t2, e2) {
          for (var i2 in this._layers)
            t2.call(e2, this._layers[i2]);
          return this;
        }, getLayer: function(t2) {
          return this._layers[t2];
        }, getLayers: function() {
          var t2 = [];
          return this.eachLayer(t2.push, t2), t2;
        }, setZIndex: function(t2) {
          return this.invoke("setZIndex", t2);
        }, getLayerId: h })), ci = ui.extend({ addLayer: function(t2) {
          return this.hasLayer(t2) ? this : (t2.addEventParent(this), ui.prototype.addLayer.call(this, t2), this.fire("layeradd", { layer: t2 }));
        }, removeLayer: function(t2) {
          return this.hasLayer(t2) ? ((t2 = t2 in this._layers ? this._layers[t2] : t2).removeEventParent(this), ui.prototype.removeLayer.call(this, t2), this.fire("layerremove", { layer: t2 })) : this;
        }, setStyle: function(t2) {
          return this.invoke("setStyle", t2);
        }, bringToFront: function() {
          return this.invoke("bringToFront");
        }, bringToBack: function() {
          return this.invoke("bringToBack");
        }, getBounds: function() {
          var t2, e2 = new s();
          for (t2 in this._layers) {
            var i2 = this._layers[t2];
            e2.extend(i2.getBounds ? i2.getBounds() : i2.getLatLng());
          }
          return e2;
        } }), di = et.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(t2) {
          c(this, t2);
        }, createIcon: function(t2) {
          return this._createIcon("icon", t2);
        }, createShadow: function(t2) {
          return this._createIcon("shadow", t2);
        }, _createIcon: function(t2, e2) {
          var i2 = this._getIconUrl(t2);
          if (i2)
            return i2 = this._createImg(i2, e2 && "IMG" === e2.tagName ? e2 : null), this._setIconStyles(i2, t2), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), i2;
          if ("icon" === t2)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }, _setIconStyles: function(t2, e2) {
          var i2 = this.options, n2 = i2[e2 + "Size"], n2 = m(n2 = "number" == typeof n2 ? [n2, n2] : n2), o2 = m("shadow" === e2 && i2.shadowAnchor || i2.iconAnchor || n2 && n2.divideBy(2, true));
          t2.className = "leaflet-marker-" + e2 + " " + (i2.className || ""), o2 && (t2.style.marginLeft = -o2.x + "px", t2.style.marginTop = -o2.y + "px"), n2 && (t2.style.width = n2.x + "px", t2.style.height = n2.y + "px");
        }, _createImg: function(t2, e2) {
          return (e2 = e2 || document.createElement("img")).src = t2, e2;
        }, _getIconUrl: function(t2) {
          return b.retina && this.options[t2 + "RetinaUrl"] || this.options[t2 + "Url"];
        } });
        var _i = di.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(t2) {
          return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()), (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t2);
        }, _stripUrl: function(t2) {
          function e2(t3, e3, i2) {
            return (e3 = e3.exec(t3)) && e3[i2];
          }
          return (t2 = e2(t2, /^url\((['"])?(.+)\1\)$/, 2)) && e2(t2, /^(.*)marker-icon\.png$/, 1);
        }, _detectIconPath: function() {
          var t2 = P("div", "leaflet-default-icon-path", document.body), e2 = pe(t2, "background-image") || pe(t2, "backgroundImage");
          return document.body.removeChild(t2), (e2 = this._stripUrl(e2)) ? e2 : (t2 = document.querySelector('link[href$="leaflet.css"]')) ? t2.href.substring(0, t2.href.length - "leaflet.css".length - 1) : "";
        } }), pi = n.extend({ initialize: function(t2) {
          this._marker = t2;
        }, addHooks: function() {
          var t2 = this._marker._icon;
          this._draggable || (this._draggable = new Xe(t2, t2, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), M(t2, "leaflet-marker-draggable");
        }, removeHooks: function() {
          this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
        }, moved: function() {
          return this._draggable && this._draggable._moved;
        }, _adjustPan: function(t2) {
          var e2 = this._marker, i2 = e2._map, n2 = this._marker.options.autoPanSpeed, o2 = this._marker.options.autoPanPadding, s2 = Pe(e2._icon), r2 = i2.getPixelBounds(), a2 = i2.getPixelOrigin(), a2 = _(r2.min._subtract(a2).add(o2), r2.max._subtract(a2).subtract(o2));
          a2.contains(s2) || (o2 = m((Math.max(a2.max.x, s2.x) - a2.max.x) / (r2.max.x - a2.max.x) - (Math.min(a2.min.x, s2.x) - a2.min.x) / (r2.min.x - a2.min.x), (Math.max(a2.max.y, s2.y) - a2.max.y) / (r2.max.y - a2.max.y) - (Math.min(a2.min.y, s2.y) - a2.min.y) / (r2.min.y - a2.min.y)).multiplyBy(n2), i2.panBy(o2, { animate: false }), this._draggable._newPos._add(o2), this._draggable._startPos._add(o2), Z(e2._icon, this._draggable._newPos), this._onDrag(t2), this._panRequest = x(this._adjustPan.bind(this, t2)));
        }, _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        }, _onPreDrag: function(t2) {
          this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t2)));
        }, _onDrag: function(t2) {
          var e2 = this._marker, i2 = e2._shadow, n2 = Pe(e2._icon), o2 = e2._map.layerPointToLatLng(n2);
          i2 && Z(i2, n2), e2._latlng = o2, t2.latlng = o2, t2.oldLatLng = this._oldLatLng, e2.fire("move", t2).fire("drag", t2);
        }, _onDragEnd: function(t2) {
          r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t2);
        } }), mi = o.extend({ options: { icon: new _i(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(t2, e2) {
          c(this, e2), this._latlng = w(t2);
        }, onAdd: function(t2) {
          this._zoomAnimated = this._zoomAnimated && t2.options.markerZoomAnimation, this._zoomAnimated && t2.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        }, onRemove: function(t2) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t2.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        }, getEvents: function() {
          return { zoom: this.update, viewreset: this.update };
        }, getLatLng: function() {
          return this._latlng;
        }, setLatLng: function(t2) {
          var e2 = this._latlng;
          return this._latlng = w(t2), this.update(), this.fire("move", { oldLatLng: e2, latlng: this._latlng });
        }, setZIndexOffset: function(t2) {
          return this.options.zIndexOffset = t2, this.update();
        }, getIcon: function() {
          return this.options.icon;
        }, setIcon: function(t2) {
          return this.options.icon = t2, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        }, getElement: function() {
          return this._icon;
        }, update: function() {
          var t2;
          return this._icon && this._map && (t2 = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t2)), this;
        }, _initIcon: function() {
          var t2 = this.options, e2 = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i2 = t2.icon.createIcon(this._icon), n2 = false, i2 = (i2 !== this._icon && (this._icon && this._removeIcon(), n2 = true, t2.title && (i2.title = t2.title), "IMG" === i2.tagName && (i2.alt = t2.alt || "")), M(i2, e2), t2.keyboard && (i2.tabIndex = "0", i2.setAttribute("role", "button")), this._icon = i2, t2.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && S(i2, "focus", this._panOnFocus, this), t2.icon.createShadow(this._shadow)), o2 = false;
          i2 !== this._shadow && (this._removeShadow(), o2 = true), i2 && (M(i2, e2), i2.alt = ""), this._shadow = i2, t2.opacity < 1 && this._updateOpacity(), n2 && this.getPane().appendChild(this._icon), this._initInteraction(), i2 && o2 && this.getPane(t2.shadowPane).appendChild(this._shadow);
        }, _removeIcon: function() {
          this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this), T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        }, _removeShadow: function() {
          this._shadow && T(this._shadow), this._shadow = null;
        }, _setPos: function(t2) {
          this._icon && Z(this._icon, t2), this._shadow && Z(this._shadow, t2), this._zIndex = t2.y + this.options.zIndexOffset, this._resetZIndex();
        }, _updateZIndex: function(t2) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t2);
        }, _animateZoom: function(t2) {
          t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center).round();
          this._setPos(t2);
        }, _initInteraction: function() {
          var t2;
          this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pi && (t2 = this.options.draggable, this.dragging && (t2 = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pi(this), t2 && this.dragging.enable()));
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._map && this._updateOpacity(), this;
        }, _updateOpacity: function() {
          var t2 = this.options.opacity;
          this._icon && C(this._icon, t2), this._shadow && C(this._shadow, t2);
        }, _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        }, _resetZIndex: function() {
          this._updateZIndex(0);
        }, _panOnFocus: function() {
          var t2, e2, i2 = this._map;
          i2 && (t2 = (e2 = this.options.icon.options).iconSize ? m(e2.iconSize) : m(0, 0), e2 = e2.iconAnchor ? m(e2.iconAnchor) : m(0, 0), i2.panInside(this._latlng, { paddingTopLeft: e2, paddingBottomRight: t2.subtract(e2) }));
        }, _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        }, _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        } });
        var fi = o.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(t2) {
          this._renderer = t2.getRenderer(this);
        }, onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        }, onRemove: function() {
          this._renderer._removePath(this);
        }, redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        }, setStyle: function(t2) {
          return c(this, t2), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t2 && Object.prototype.hasOwnProperty.call(t2, "weight") && this._updateBounds()), this;
        }, bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        }, bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        }, getElement: function() {
          return this._path;
        }, _reset: function() {
          this._project(), this._update();
        }, _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        } }), gi = fi.extend({ options: { fill: true, radius: 10 }, initialize: function(t2, e2) {
          c(this, e2), this._latlng = w(t2), this._radius = this.options.radius;
        }, setLatLng: function(t2) {
          var e2 = this._latlng;
          return this._latlng = w(t2), this.redraw(), this.fire("move", { oldLatLng: e2, latlng: this._latlng });
        }, getLatLng: function() {
          return this._latlng;
        }, setRadius: function(t2) {
          return this.options.radius = this._radius = t2, this.redraw();
        }, getRadius: function() {
          return this._radius;
        }, setStyle: function(t2) {
          var e2 = t2 && t2.radius || this._radius;
          return fi.prototype.setStyle.call(this, t2), this.setRadius(e2), this;
        }, _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        }, _updateBounds: function() {
          var t2 = this._radius, e2 = this._radiusY || t2, i2 = this._clickTolerance(), t2 = [t2 + i2, e2 + i2];
          this._pxBounds = new f(this._point.subtract(t2), this._point.add(t2));
        }, _update: function() {
          this._map && this._updatePath();
        }, _updatePath: function() {
          this._renderer._updateCircle(this);
        }, _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        }, _containsPoint: function(t2) {
          return t2.distanceTo(this._point) <= this._radius + this._clickTolerance();
        } });
        var vi = gi.extend({ initialize: function(t2, e2, i2) {
          if (c(this, e2 = "number" == typeof e2 ? l({}, i2, { radius: e2 }) : e2), this._latlng = w(t2), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        }, setRadius: function(t2) {
          return this._mRadius = t2, this.redraw();
        }, getRadius: function() {
          return this._mRadius;
        }, getBounds: function() {
          var t2 = [this._radius, this._radiusY || this._radius];
          return new s(this._map.layerPointToLatLng(this._point.subtract(t2)), this._map.layerPointToLatLng(this._point.add(t2)));
        }, setStyle: fi.prototype.setStyle, _project: function() {
          var t2, e2, i2, n2, o2, s2 = this._latlng.lng, r2 = this._latlng.lat, a2 = this._map, h2 = a2.options.crs;
          h2.distance === st.distance ? (n2 = Math.PI / 180, o2 = this._mRadius / st.R / n2, t2 = a2.project([r2 + o2, s2]), e2 = a2.project([r2 - o2, s2]), e2 = t2.add(e2).divideBy(2), i2 = a2.unproject(e2).lat, n2 = Math.acos((Math.cos(o2 * n2) - Math.sin(r2 * n2) * Math.sin(i2 * n2)) / (Math.cos(r2 * n2) * Math.cos(i2 * n2))) / n2, !isNaN(n2) && 0 !== n2 || (n2 = o2 / Math.cos(Math.PI / 180 * r2)), this._point = e2.subtract(a2.getPixelOrigin()), this._radius = isNaN(n2) ? 0 : e2.x - a2.project([i2, s2 - n2]).x, this._radiusY = e2.y - t2.y) : (o2 = h2.unproject(h2.project(this._latlng).subtract([this._mRadius, 0])), this._point = a2.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a2.latLngToLayerPoint(o2).x), this._updateBounds();
        } });
        var yi = fi.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(t2, e2) {
          c(this, e2), this._setLatLngs(t2);
        }, getLatLngs: function() {
          return this._latlngs;
        }, setLatLngs: function(t2) {
          return this._setLatLngs(t2), this.redraw();
        }, isEmpty: function() {
          return !this._latlngs.length;
        }, closestLayerPoint: function(t2) {
          for (var e2 = 1 / 0, i2 = null, n2 = ri, o2 = 0, s2 = this._parts.length; o2 < s2; o2++)
            for (var r2 = this._parts[o2], a2 = 1, h2 = r2.length; a2 < h2; a2++) {
              var l2, u2, c2 = n2(t2, l2 = r2[a2 - 1], u2 = r2[a2], true);
              c2 < e2 && (e2 = c2, i2 = n2(t2, l2, u2));
            }
          return i2 && (i2.distance = Math.sqrt(e2)), i2;
        }, getCenter: function() {
          if (this._map)
            return hi(this._defaultShape(), this._map.options.crs);
          throw new Error("Must add layer to map before using getCenter()");
        }, getBounds: function() {
          return this._bounds;
        }, addLatLng: function(t2, e2) {
          return e2 = e2 || this._defaultShape(), t2 = w(t2), e2.push(t2), this._bounds.extend(t2), this.redraw();
        }, _setLatLngs: function(t2) {
          this._bounds = new s(), this._latlngs = this._convertLatLngs(t2);
        }, _defaultShape: function() {
          return I(this._latlngs) ? this._latlngs : this._latlngs[0];
        }, _convertLatLngs: function(t2) {
          for (var e2 = [], i2 = I(t2), n2 = 0, o2 = t2.length; n2 < o2; n2++)
            i2 ? (e2[n2] = w(t2[n2]), this._bounds.extend(e2[n2])) : e2[n2] = this._convertLatLngs(t2[n2]);
          return e2;
        }, _project: function() {
          var t2 = new f();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t2), this._bounds.isValid() && t2.isValid() && (this._rawPxBounds = t2, this._updateBounds());
        }, _updateBounds: function() {
          var t2 = this._clickTolerance(), t2 = new p(t2, t2);
          this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t2), this._rawPxBounds.max.add(t2)]));
        }, _projectLatlngs: function(t2, e2, i2) {
          var n2, o2, s2 = t2[0] instanceof v, r2 = t2.length;
          if (s2) {
            for (o2 = [], n2 = 0; n2 < r2; n2++)
              o2[n2] = this._map.latLngToLayerPoint(t2[n2]), i2.extend(o2[n2]);
            e2.push(o2);
          } else
            for (n2 = 0; n2 < r2; n2++)
              this._projectLatlngs(t2[n2], e2, i2);
        }, _clipPoints: function() {
          var t2 = this._renderer._bounds;
          if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2))
            if (this.options.noClip)
              this._parts = this._rings;
            else
              for (var e2, i2, n2, o2, s2 = this._parts, r2 = 0, a2 = 0, h2 = this._rings.length; r2 < h2; r2++)
                for (e2 = 0, i2 = (o2 = this._rings[r2]).length; e2 < i2 - 1; e2++)
                  (n2 = ni(o2[e2], o2[e2 + 1], t2, e2, true)) && (s2[a2] = s2[a2] || [], s2[a2].push(n2[0]), n2[1] === o2[e2 + 1] && e2 !== i2 - 2 || (s2[a2].push(n2[1]), a2++));
        }, _simplifyPoints: function() {
          for (var t2 = this._parts, e2 = this.options.smoothFactor, i2 = 0, n2 = t2.length; i2 < n2; i2++)
            t2[i2] = ei(t2[i2], e2);
        }, _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        }, _updatePath: function() {
          this._renderer._updatePoly(this);
        }, _containsPoint: function(t2, e2) {
          var i2, n2, o2, s2, r2, a2, h2 = this._clickTolerance();
          if (this._pxBounds && this._pxBounds.contains(t2)) {
            for (i2 = 0, s2 = this._parts.length; i2 < s2; i2++)
              for (n2 = 0, o2 = (r2 = (a2 = this._parts[i2]).length) - 1; n2 < r2; o2 = n2++)
                if ((e2 || 0 !== n2) && ii(t2, a2[o2], a2[n2]) <= h2)
                  return true;
          }
          return false;
        } });
        yi._flat = ai;
        var xi = yi.extend({ options: { fill: true }, isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        }, getCenter: function() {
          if (this._map)
            return $e(this._defaultShape(), this._map.options.crs);
          throw new Error("Must add layer to map before using getCenter()");
        }, _convertLatLngs: function(t2) {
          var t2 = yi.prototype._convertLatLngs.call(this, t2), e2 = t2.length;
          return 2 <= e2 && t2[0] instanceof v && t2[0].equals(t2[e2 - 1]) && t2.pop(), t2;
        }, _setLatLngs: function(t2) {
          yi.prototype._setLatLngs.call(this, t2), I(this._latlngs) && (this._latlngs = [this._latlngs]);
        }, _defaultShape: function() {
          return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
        }, _clipPoints: function() {
          var t2 = this._renderer._bounds, e2 = this.options.weight, e2 = new p(e2, e2), t2 = new f(t2.min.subtract(e2), t2.max.add(e2));
          if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2))
            if (this.options.noClip)
              this._parts = this._rings;
            else
              for (var i2, n2 = 0, o2 = this._rings.length; n2 < o2; n2++)
                (i2 = Je(this._rings[n2], t2, true)).length && this._parts.push(i2);
        }, _updatePath: function() {
          this._renderer._updatePoly(this, true);
        }, _containsPoint: function(t2) {
          var e2, i2, n2, o2, s2, r2, a2, h2, l2 = false;
          if (!this._pxBounds || !this._pxBounds.contains(t2))
            return false;
          for (o2 = 0, a2 = this._parts.length; o2 < a2; o2++)
            for (s2 = 0, r2 = (h2 = (e2 = this._parts[o2]).length) - 1; s2 < h2; r2 = s2++)
              i2 = e2[s2], n2 = e2[r2], i2.y > t2.y != n2.y > t2.y && t2.x < (n2.x - i2.x) * (t2.y - i2.y) / (n2.y - i2.y) + i2.x && (l2 = !l2);
          return l2 || yi.prototype._containsPoint.call(this, t2, true);
        } });
        var wi = ci.extend({ initialize: function(t2, e2) {
          c(this, e2), this._layers = {}, t2 && this.addData(t2);
        }, addData: function(t2) {
          var e2, i2, n2, o2 = d(t2) ? t2 : t2.features;
          if (o2) {
            for (e2 = 0, i2 = o2.length; e2 < i2; e2++)
              ((n2 = o2[e2]).geometries || n2.geometry || n2.features || n2.coordinates) && this.addData(n2);
            return this;
          }
          var s2, r2 = this.options;
          return (!r2.filter || r2.filter(t2)) && (s2 = bi(t2, r2)) ? (s2.feature = Zi(t2), s2.defaultOptions = s2.options, this.resetStyle(s2), r2.onEachFeature && r2.onEachFeature(t2, s2), this.addLayer(s2)) : this;
        }, resetStyle: function(t2) {
          return void 0 === t2 ? this.eachLayer(this.resetStyle, this) : (t2.options = l({}, t2.defaultOptions), this._setLayerStyle(t2, this.options.style), this);
        }, setStyle: function(e2) {
          return this.eachLayer(function(t2) {
            this._setLayerStyle(t2, e2);
          }, this);
        }, _setLayerStyle: function(t2, e2) {
          t2.setStyle && ("function" == typeof e2 && (e2 = e2(t2.feature)), t2.setStyle(e2));
        } });
        function bi(t2, e2) {
          var i2, n2, o2, s2, r2 = "Feature" === t2.type ? t2.geometry : t2, a2 = r2 ? r2.coordinates : null, h2 = [], l2 = e2 && e2.pointToLayer, u2 = e2 && e2.coordsToLatLng || Li;
          if (!a2 && !r2)
            return null;
          switch (r2.type) {
            case "Point":
              return Pi(l2, t2, i2 = u2(a2), e2);
            case "MultiPoint":
              for (o2 = 0, s2 = a2.length; o2 < s2; o2++)
                i2 = u2(a2[o2]), h2.push(Pi(l2, t2, i2, e2));
              return new ci(h2);
            case "LineString":
            case "MultiLineString":
              return n2 = Ti(a2, "LineString" === r2.type ? 0 : 1, u2), new yi(n2, e2);
            case "Polygon":
            case "MultiPolygon":
              return n2 = Ti(a2, "Polygon" === r2.type ? 1 : 2, u2), new xi(n2, e2);
            case "GeometryCollection":
              for (o2 = 0, s2 = r2.geometries.length; o2 < s2; o2++) {
                var c2 = bi({ geometry: r2.geometries[o2], type: "Feature", properties: t2.properties }, e2);
                c2 && h2.push(c2);
              }
              return new ci(h2);
            case "FeatureCollection":
              for (o2 = 0, s2 = r2.features.length; o2 < s2; o2++) {
                var d2 = bi(r2.features[o2], e2);
                d2 && h2.push(d2);
              }
              return new ci(h2);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function Pi(t2, e2, i2, n2) {
          return t2 ? t2(e2, i2) : new mi(i2, n2 && n2.markersInheritOptions && n2);
        }
        function Li(t2) {
          return new v(t2[1], t2[0], t2[2]);
        }
        function Ti(t2, e2, i2) {
          for (var n2, o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++)
            n2 = e2 ? Ti(t2[s2], e2 - 1, i2) : (i2 || Li)(t2[s2]), o2.push(n2);
          return o2;
        }
        function Mi(t2, e2) {
          return void 0 !== (t2 = w(t2)).alt ? [i(t2.lng, e2), i(t2.lat, e2), i(t2.alt, e2)] : [i(t2.lng, e2), i(t2.lat, e2)];
        }
        function zi(t2, e2, i2, n2) {
          for (var o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++)
            o2.push(e2 ? zi(t2[s2], I(t2[s2]) ? 0 : e2 - 1, i2, n2) : Mi(t2[s2], n2));
          return !e2 && i2 && 0 < o2.length && o2.push(o2[0].slice()), o2;
        }
        function Ci(t2, e2) {
          return t2.feature ? l({}, t2.feature, { geometry: e2 }) : Zi(e2);
        }
        function Zi(t2) {
          return "Feature" === t2.type || "FeatureCollection" === t2.type ? t2 : { type: "Feature", properties: {}, geometry: t2 };
        }
        Tt = { toGeoJSON: function(t2) {
          return Ci(this, { type: "Point", coordinates: Mi(this.getLatLng(), t2) });
        } };
        function Si(t2, e2) {
          return new wi(t2, e2);
        }
        mi.include(Tt), vi.include(Tt), gi.include(Tt), yi.include({ toGeoJSON: function(t2) {
          var e2 = !I(this._latlngs);
          return Ci(this, { type: (e2 ? "Multi" : "") + "LineString", coordinates: zi(this._latlngs, e2 ? 1 : 0, false, t2) });
        } }), xi.include({ toGeoJSON: function(t2) {
          var e2 = !I(this._latlngs), i2 = e2 && !I(this._latlngs[0]), t2 = zi(this._latlngs, i2 ? 2 : e2 ? 1 : 0, true, t2);
          return Ci(this, { type: (i2 ? "Multi" : "") + "Polygon", coordinates: t2 = e2 ? t2 : [t2] });
        } }), ui.include({ toMultiPoint: function(e2) {
          var i2 = [];
          return this.eachLayer(function(t2) {
            i2.push(t2.toGeoJSON(e2).geometry.coordinates);
          }), Ci(this, { type: "MultiPoint", coordinates: i2 });
        }, toGeoJSON: function(e2) {
          var i2, n2, t2 = this.feature && this.feature.geometry && this.feature.geometry.type;
          return "MultiPoint" === t2 ? this.toMultiPoint(e2) : (i2 = "GeometryCollection" === t2, n2 = [], this.eachLayer(function(t3) {
            t3.toGeoJSON && (t3 = t3.toGeoJSON(e2), i2 ? n2.push(t3.geometry) : "FeatureCollection" === (t3 = Zi(t3)).type ? n2.push.apply(n2, t3.features) : n2.push(t3));
          }), i2 ? Ci(this, { geometries: n2, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n2 });
        } });
        var Mt = Si, Ei = o.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(t2, e2, i2) {
          this._url = t2, this._bounds = g(e2), c(this, i2);
        }, onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        }, onRemove: function() {
          T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._image && this._updateOpacity(), this;
        }, setStyle: function(t2) {
          return t2.opacity && this.setOpacity(t2.opacity), this;
        }, bringToFront: function() {
          return this._map && fe(this._image), this;
        }, bringToBack: function() {
          return this._map && ge(this._image), this;
        }, setUrl: function(t2) {
          return this._url = t2, this._image && (this._image.src = t2), this;
        }, setBounds: function(t2) {
          return this._bounds = g(t2), this._map && this._reset(), this;
        }, getEvents: function() {
          var t2 = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, setZIndex: function(t2) {
          return this.options.zIndex = t2, this._updateZIndex(), this;
        }, getBounds: function() {
          return this._bounds;
        }, getElement: function() {
          return this._image;
        }, _initImage: function() {
          var t2 = "IMG" === this._url.tagName, e2 = this._image = t2 ? this._url : P("img");
          M(e2, "leaflet-image-layer"), this._zoomAnimated && M(e2, "leaflet-zoom-animated"), this.options.className && M(e2, this.options.className), e2.onselectstart = u, e2.onmousemove = u, e2.onload = a(this.fire, this, "load"), e2.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t2 ? this._url = e2.src : (e2.src = this._url, e2.alt = this.options.alt);
        }, _animateZoom: function(t2) {
          var e2 = this._map.getZoomScale(t2.zoom), t2 = this._map._latLngBoundsToNewLayerBounds(this._bounds, t2.zoom, t2.center).min;
          be(this._image, t2, e2);
        }, _reset: function() {
          var t2 = this._image, e2 = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), i2 = e2.getSize();
          Z(t2, e2.min), t2.style.width = i2.x + "px", t2.style.height = i2.y + "px";
        }, _updateOpacity: function() {
          C(this._image, this.options.opacity);
        }, _updateZIndex: function() {
          this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
        }, _overlayOnError: function() {
          this.fire("error");
          var t2 = this.options.errorOverlayUrl;
          t2 && this._url !== t2 && (this._url = t2, this._image.src = t2);
        }, getCenter: function() {
          return this._bounds.getCenter();
        } }), ki = Ei.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
          var t2 = "VIDEO" === this._url.tagName, e2 = this._image = t2 ? this._url : P("video");
          if (M(e2, "leaflet-image-layer"), this._zoomAnimated && M(e2, "leaflet-zoom-animated"), this.options.className && M(e2, this.options.className), e2.onselectstart = u, e2.onmousemove = u, e2.onloadeddata = a(this.fire, this, "load"), t2) {
            for (var i2 = e2.getElementsByTagName("source"), n2 = [], o2 = 0; o2 < i2.length; o2++)
              n2.push(i2[o2].src);
            this._url = 0 < i2.length ? n2 : [e2.src];
          } else {
            d(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e2.style, "objectFit") && (e2.style.objectFit = "fill"), e2.autoplay = !!this.options.autoplay, e2.loop = !!this.options.loop, e2.muted = !!this.options.muted, e2.playsInline = !!this.options.playsInline;
            for (var s2 = 0; s2 < this._url.length; s2++) {
              var r2 = P("source");
              r2.src = this._url[s2], e2.appendChild(r2);
            }
          }
        } });
        var Oi = Ei.extend({ _initImage: function() {
          var t2 = this._image = this._url;
          M(t2, "leaflet-image-layer"), this._zoomAnimated && M(t2, "leaflet-zoom-animated"), this.options.className && M(t2, this.options.className), t2.onselectstart = u, t2.onmousemove = u;
        } });
        var Ai = o.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(t2, e2) {
          t2 && (t2 instanceof v || d(t2)) ? (this._latlng = w(t2), c(this, e2)) : (c(this, t2), this._source = e2), this.options.content && (this._content = this.options.content);
        }, openOn: function(t2) {
          return (t2 = arguments.length ? t2 : this._source._map).hasLayer(this) || t2.addLayer(this), this;
        }, close: function() {
          return this._map && this._map.removeLayer(this), this;
        }, toggle: function(t2) {
          return this._map ? this.close() : (arguments.length ? this._source = t2 : t2 = this._source, this._prepareOpen(), this.openOn(t2._map)), this;
        }, onAdd: function(t2) {
          this._zoomAnimated = t2._zoomAnimated, this._container || this._initLayout(), t2._fadeAnimated && C(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t2._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        }, onRemove: function(t2) {
          t2._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        }, getLatLng: function() {
          return this._latlng;
        }, setLatLng: function(t2) {
          return this._latlng = w(t2), this._map && (this._updatePosition(), this._adjustPan()), this;
        }, getContent: function() {
          return this._content;
        }, setContent: function(t2) {
          return this._content = t2, this.update(), this;
        }, getElement: function() {
          return this._container;
        }, update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        }, getEvents: function() {
          var t2 = { zoom: this._updatePosition, viewreset: this._updatePosition };
          return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        }, bringToFront: function() {
          return this._map && fe(this._container), this;
        }, bringToBack: function() {
          return this._map && ge(this._container), this;
        }, _prepareOpen: function(t2) {
          if (!(i2 = this._source)._map)
            return false;
          if (i2 instanceof ci) {
            var e2, i2 = null, n2 = this._source._layers;
            for (e2 in n2)
              if (n2[e2]._map) {
                i2 = n2[e2];
                break;
              }
            if (!i2)
              return false;
            this._source = i2;
          }
          if (!t2)
            if (i2.getCenter)
              t2 = i2.getCenter();
            else if (i2.getLatLng)
              t2 = i2.getLatLng();
            else {
              if (!i2.getBounds)
                throw new Error("Unable to get source layer LatLng.");
              t2 = i2.getBounds().getCenter();
            }
          return this.setLatLng(t2), this._map && this.update(), true;
        }, _updateContent: function() {
          if (this._content) {
            var t2 = this._contentNode, e2 = "function" == typeof this._content ? this._content(this._source || this) : this._content;
            if ("string" == typeof e2)
              t2.innerHTML = e2;
            else {
              for (; t2.hasChildNodes(); )
                t2.removeChild(t2.firstChild);
              t2.appendChild(e2);
            }
            this.fire("contentupdate");
          }
        }, _updatePosition: function() {
          var t2, e2, i2;
          this._map && (e2 = this._map.latLngToLayerPoint(this._latlng), t2 = m(this.options.offset), i2 = this._getAnchor(), this._zoomAnimated ? Z(this._container, e2.add(i2)) : t2 = t2.add(e2).add(i2), e2 = this._containerBottom = -t2.y, i2 = this._containerLeft = -Math.round(this._containerWidth / 2) + t2.x, this._container.style.bottom = e2 + "px", this._container.style.left = i2 + "px");
        }, _getAnchor: function() {
          return [0, 0];
        } }), Bi = (A.include({ _initOverlay: function(t2, e2, i2, n2) {
          var o2 = e2;
          return o2 instanceof t2 || (o2 = new t2(n2).setContent(e2)), i2 && o2.setLatLng(i2), o2;
        } }), o.include({ _initOverlay: function(t2, e2, i2, n2) {
          var o2 = i2;
          return o2 instanceof t2 ? (c(o2, n2), o2._source = this) : (o2 = e2 && !n2 ? e2 : new t2(n2, this)).setContent(i2), o2;
        } }), Ai.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(t2) {
          return !(t2 = arguments.length ? t2 : this._source._map).hasLayer(this) && t2._popup && t2._popup.options.autoClose && t2.removeLayer(t2._popup), t2._popup = this, Ai.prototype.openOn.call(this, t2);
        }, onAdd: function(t2) {
          Ai.prototype.onAdd.call(this, t2), t2.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof fi || this._source.on("preclick", Ae));
        }, onRemove: function(t2) {
          Ai.prototype.onRemove.call(this, t2), t2.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof fi || this._source.off("preclick", Ae));
        }, getEvents: function() {
          var t2 = Ai.prototype.getEvents.call(this);
          return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t2.preclick = this.close), this.options.keepInView && (t2.moveend = this._adjustPan), t2;
        }, _initLayout: function() {
          var t2 = "leaflet-popup", e2 = this._container = P("div", t2 + " " + (this.options.className || "") + " leaflet-zoom-animated"), i2 = this._wrapper = P("div", t2 + "-content-wrapper", e2);
          this._contentNode = P("div", t2 + "-content", i2), Ie(e2), Be(this._contentNode), S(e2, "contextmenu", Ae), this._tipContainer = P("div", t2 + "-tip-container", e2), this._tip = P("div", t2 + "-tip", this._tipContainer), this.options.closeButton && ((i2 = this._closeButton = P("a", t2 + "-close-button", e2)).setAttribute("role", "button"), i2.setAttribute("aria-label", "Close popup"), i2.href = "#close", i2.innerHTML = '<span aria-hidden="true">&#215;</span>', S(i2, "click", function(t3) {
            O(t3), this.close();
          }, this));
        }, _updateLayout: function() {
          var t2 = this._contentNode, e2 = t2.style, i2 = (e2.width = "", e2.whiteSpace = "nowrap", t2.offsetWidth), i2 = Math.min(i2, this.options.maxWidth), i2 = (i2 = Math.max(i2, this.options.minWidth), e2.width = i2 + 1 + "px", e2.whiteSpace = "", e2.height = "", t2.offsetHeight), n2 = this.options.maxHeight, o2 = "leaflet-popup-scrolled";
          (n2 && n2 < i2 ? (e2.height = n2 + "px", M) : z)(t2, o2), this._containerWidth = this._container.offsetWidth;
        }, _animateZoom: function(t2) {
          var t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center), e2 = this._getAnchor();
          Z(this._container, t2.add(e2));
        }, _adjustPan: function() {
          var t2, e2, i2, n2, o2, s2, r2, a2;
          this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = false : (t2 = this._map, e2 = parseInt(pe(this._container, "marginBottom"), 10) || 0, e2 = this._container.offsetHeight + e2, a2 = this._containerWidth, (i2 = new p(this._containerLeft, -e2 - this._containerBottom))._add(Pe(this._container)), i2 = t2.layerPointToContainerPoint(i2), o2 = m(this.options.autoPanPadding), n2 = m(this.options.autoPanPaddingTopLeft || o2), o2 = m(this.options.autoPanPaddingBottomRight || o2), s2 = t2.getSize(), r2 = 0, i2.x + a2 + o2.x > s2.x && (r2 = i2.x + a2 - s2.x + o2.x), i2.x - r2 - n2.x < (a2 = 0) && (r2 = i2.x - n2.x), i2.y + e2 + o2.y > s2.y && (a2 = i2.y + e2 - s2.y + o2.y), i2.y - a2 - n2.y < 0 && (a2 = i2.y - n2.y), (r2 || a2) && (this.options.keepInView && (this._autopanning = true), t2.fire("autopanstart").panBy([r2, a2]))));
        }, _getAnchor: function() {
          return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        } })), Ii = (A.mergeOptions({ closePopupOnClick: true }), A.include({ openPopup: function(t2, e2, i2) {
          return this._initOverlay(Bi, t2, e2, i2).openOn(this), this;
        }, closePopup: function(t2) {
          return (t2 = arguments.length ? t2 : this._popup) && t2.close(), this;
        } }), o.include({ bindPopup: function(t2, e2) {
          return this._popup = this._initOverlay(Bi, this._popup, t2, e2), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
        }, unbindPopup: function() {
          return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
        }, openPopup: function(t2) {
          return this._popup && (this instanceof ci || (this._popup._source = this), this._popup._prepareOpen(t2 || this._latlng) && this._popup.openOn(this._map)), this;
        }, closePopup: function() {
          return this._popup && this._popup.close(), this;
        }, togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        }, isPopupOpen: function() {
          return !!this._popup && this._popup.isOpen();
        }, setPopupContent: function(t2) {
          return this._popup && this._popup.setContent(t2), this;
        }, getPopup: function() {
          return this._popup;
        }, _openPopup: function(t2) {
          var e2;
          this._popup && this._map && (Re(t2), e2 = t2.layer || t2.target, this._popup._source !== e2 || e2 instanceof fi ? (this._popup._source = e2, this.openPopup(t2.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t2.latlng));
        }, _movePopup: function(t2) {
          this._popup.setLatLng(t2.latlng);
        }, _onKeyPress: function(t2) {
          13 === t2.originalEvent.keyCode && this._openPopup(t2);
        } }), Ai.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(t2) {
          Ai.prototype.onAdd.call(this, t2), this.setOpacity(this.options.opacity), t2.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
        }, onRemove: function(t2) {
          Ai.prototype.onRemove.call(this, t2), t2.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
        }, getEvents: function() {
          var t2 = Ai.prototype.getEvents.call(this);
          return this.options.permanent || (t2.preclick = this.close), t2;
        }, _initLayout: function() {
          var t2 = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = P("div", t2), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
        }, _updateLayout: function() {
        }, _adjustPan: function() {
        }, _setPosition: function(t2) {
          var e2, i2 = this._map, n2 = this._container, o2 = i2.latLngToContainerPoint(i2.getCenter()), i2 = i2.layerPointToContainerPoint(t2), s2 = this.options.direction, r2 = n2.offsetWidth, a2 = n2.offsetHeight, h2 = m(this.options.offset), l2 = this._getAnchor(), i2 = "top" === s2 ? (e2 = r2 / 2, a2) : "bottom" === s2 ? (e2 = r2 / 2, 0) : (e2 = "center" === s2 ? r2 / 2 : "right" === s2 ? 0 : "left" === s2 ? r2 : i2.x < o2.x ? (s2 = "right", 0) : (s2 = "left", r2 + 2 * (h2.x + l2.x)), a2 / 2);
          t2 = t2.subtract(m(e2, i2, true)).add(h2).add(l2), z(n2, "leaflet-tooltip-right"), z(n2, "leaflet-tooltip-left"), z(n2, "leaflet-tooltip-top"), z(n2, "leaflet-tooltip-bottom"), M(n2, "leaflet-tooltip-" + s2), Z(n2, t2);
        }, _updatePosition: function() {
          var t2 = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t2);
        }, setOpacity: function(t2) {
          this.options.opacity = t2, this._container && C(this._container, t2);
        }, _animateZoom: function(t2) {
          t2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center);
          this._setPosition(t2);
        }, _getAnchor: function() {
          return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        } })), Ri = (A.include({ openTooltip: function(t2, e2, i2) {
          return this._initOverlay(Ii, t2, e2, i2).openOn(this), this;
        }, closeTooltip: function(t2) {
          return t2.close(), this;
        } }), o.include({ bindTooltip: function(t2, e2) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t2, e2), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        }, unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
        }, _initTooltipInteractions: function(t2) {
          var e2, i2;
          !t2 && this._tooltipHandlersAdded || (e2 = t2 ? "off" : "on", i2 = { remove: this.closeTooltip, move: this._moveTooltip }, this._tooltip.options.permanent ? i2.add = this._openTooltip : (i2.mouseover = this._openTooltip, i2.mouseout = this.closeTooltip, i2.click = this._openTooltip, this._map ? this._addFocusListeners() : i2.add = this._addFocusListeners), this._tooltip.options.sticky && (i2.mousemove = this._moveTooltip), this[e2](i2), this._tooltipHandlersAdded = !t2);
        }, openTooltip: function(t2) {
          return this._tooltip && (this instanceof ci || (this._tooltip._source = this), this._tooltip._prepareOpen(t2) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        }, closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        }, toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        }, isTooltipOpen: function() {
          return this._tooltip.isOpen();
        }, setTooltipContent: function(t2) {
          return this._tooltip && this._tooltip.setContent(t2), this;
        }, getTooltip: function() {
          return this._tooltip;
        }, _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        }, _addFocusListenersOnLayer: function(t2) {
          var e2 = "function" == typeof t2.getElement && t2.getElement();
          e2 && (S(e2, "focus", function() {
            this._tooltip._source = t2, this.openTooltip();
          }, this), S(e2, "blur", this.closeTooltip, this));
        }, _setAriaDescribedByOnLayer: function(t2) {
          t2 = "function" == typeof t2.getElement && t2.getElement();
          t2 && t2.setAttribute("aria-describedby", this._tooltip._container.id);
        }, _openTooltip: function(t2) {
          var e2;
          this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = true, (e2 = this)._map.once("moveend", function() {
            e2._openOnceFlag = false, e2._openTooltip(t2);
          })) : (this._tooltip._source = t2.layer || t2.target, this.openTooltip(this._tooltip.options.sticky ? t2.latlng : void 0)));
        }, _moveTooltip: function(t2) {
          var e2 = t2.latlng;
          this._tooltip.options.sticky && t2.originalEvent && (t2 = this._map.mouseEventToContainerPoint(t2.originalEvent), t2 = this._map.containerPointToLayerPoint(t2), e2 = this._map.layerPointToLatLng(t2)), this._tooltip.setLatLng(e2);
        } }), di.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(t2) {
          var t2 = t2 && "DIV" === t2.tagName ? t2 : document.createElement("div"), e2 = this.options;
          return e2.html instanceof Element ? (me(t2), t2.appendChild(e2.html)) : t2.innerHTML = false !== e2.html ? e2.html : "", e2.bgPos && (e2 = m(e2.bgPos), t2.style.backgroundPosition = -e2.x + "px " + -e2.y + "px"), this._setIconStyles(t2, "icon"), t2;
        }, createShadow: function() {
          return null;
        } }));
        di.Default = _i;
        var Ni = o.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: b.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(t2) {
          c(this, t2);
        }, onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        }, beforeAdd: function(t2) {
          t2._addZoomLimit(this);
        }, onRemove: function(t2) {
          this._removeAllTiles(), T(this._container), t2._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        }, bringToFront: function() {
          return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
        }, bringToBack: function() {
          return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
        }, getContainer: function() {
          return this._container;
        }, setOpacity: function(t2) {
          return this.options.opacity = t2, this._updateOpacity(), this;
        }, setZIndex: function(t2) {
          return this.options.zIndex = t2, this._updateZIndex(), this;
        }, isLoading: function() {
          return this._loading;
        }, redraw: function() {
          var t2;
          return this._map && (this._removeAllTiles(), (t2 = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t2, this._updateLevels()), this._update()), this;
        }, getEvents: function() {
          var t2 = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), t2.move = this._onMove), this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
        }, createTile: function() {
          return document.createElement("div");
        }, getTileSize: function() {
          var t2 = this.options.tileSize;
          return t2 instanceof p ? t2 : new p(t2, t2);
        }, _updateZIndex: function() {
          this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
        }, _setAutoZIndex: function(t2) {
          for (var e2, i2 = this.getPane().children, n2 = -t2(-1 / 0, 1 / 0), o2 = 0, s2 = i2.length; o2 < s2; o2++)
            e2 = i2[o2].style.zIndex, i2[o2] !== this._container && e2 && (n2 = t2(n2, +e2));
          isFinite(n2) && (this.options.zIndex = n2 + t2(-1, 1), this._updateZIndex());
        }, _updateOpacity: function() {
          if (this._map && !b.ielt9) {
            C(this._container, this.options.opacity);
            var t2, e2 = +/* @__PURE__ */ new Date(), i2 = false, n2 = false;
            for (t2 in this._tiles) {
              var o2, s2 = this._tiles[t2];
              s2.current && s2.loaded && (o2 = Math.min(1, (e2 - s2.loaded) / 200), C(s2.el, o2), o2 < 1 ? i2 = true : (s2.active ? n2 = true : this._onOpaqueTile(s2), s2.active = true));
            }
            n2 && !this._noPrune && this._pruneTiles(), i2 && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
          }
        }, _onOpaqueTile: u, _initContainer: function() {
          this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        }, _updateLevels: function() {
          var t2 = this._tileZoom, e2 = this.options.maxZoom;
          if (void 0 !== t2) {
            for (var i2 in this._levels)
              i2 = Number(i2), this._levels[i2].el.children.length || i2 === t2 ? (this._levels[i2].el.style.zIndex = e2 - Math.abs(t2 - i2), this._onUpdateLevel(i2)) : (T(this._levels[i2].el), this._removeTilesAtZoom(i2), this._onRemoveLevel(i2), delete this._levels[i2]);
            var n2 = this._levels[t2], o2 = this._map;
            return n2 || ((n2 = this._levels[t2] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n2.el.style.zIndex = e2, n2.origin = o2.project(o2.unproject(o2.getPixelOrigin()), t2).round(), n2.zoom = t2, this._setZoomTransform(n2, o2.getCenter(), o2.getZoom()), u(n2.el.offsetWidth), this._onCreateLevel(n2)), this._level = n2;
          }
        }, _onUpdateLevel: u, _onRemoveLevel: u, _onCreateLevel: u, _pruneTiles: function() {
          if (this._map) {
            var t2, e2, i2, n2 = this._map.getZoom();
            if (n2 > this.options.maxZoom || n2 < this.options.minZoom)
              this._removeAllTiles();
            else {
              for (t2 in this._tiles)
                (i2 = this._tiles[t2]).retain = i2.current;
              for (t2 in this._tiles)
                (i2 = this._tiles[t2]).current && !i2.active && (e2 = i2.coords, this._retainParent(e2.x, e2.y, e2.z, e2.z - 5) || this._retainChildren(e2.x, e2.y, e2.z, e2.z + 2));
              for (t2 in this._tiles)
                this._tiles[t2].retain || this._removeTile(t2);
            }
          }
        }, _removeTilesAtZoom: function(t2) {
          for (var e2 in this._tiles)
            this._tiles[e2].coords.z === t2 && this._removeTile(e2);
        }, _removeAllTiles: function() {
          for (var t2 in this._tiles)
            this._removeTile(t2);
        }, _invalidateAll: function() {
          for (var t2 in this._levels)
            T(this._levels[t2].el), this._onRemoveLevel(Number(t2)), delete this._levels[t2];
          this._removeAllTiles(), this._tileZoom = void 0;
        }, _retainParent: function(t2, e2, i2, n2) {
          var t2 = Math.floor(t2 / 2), e2 = Math.floor(e2 / 2), i2 = i2 - 1, o2 = new p(+t2, +e2), o2 = (o2.z = i2, this._tileCoordsToKey(o2)), o2 = this._tiles[o2];
          return o2 && o2.active ? o2.retain = true : (o2 && o2.loaded && (o2.retain = true), n2 < i2 && this._retainParent(t2, e2, i2, n2));
        }, _retainChildren: function(t2, e2, i2, n2) {
          for (var o2 = 2 * t2; o2 < 2 * t2 + 2; o2++)
            for (var s2 = 2 * e2; s2 < 2 * e2 + 2; s2++) {
              var r2 = new p(o2, s2), r2 = (r2.z = i2 + 1, this._tileCoordsToKey(r2)), r2 = this._tiles[r2];
              r2 && r2.active ? r2.retain = true : (r2 && r2.loaded && (r2.retain = true), i2 + 1 < n2 && this._retainChildren(o2, s2, i2 + 1, n2));
            }
        }, _resetView: function(t2) {
          t2 = t2 && (t2.pinch || t2.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), t2, t2);
        }, _animateZoom: function(t2) {
          this._setView(t2.center, t2.zoom, true, t2.noUpdate);
        }, _clampZoom: function(t2) {
          var e2 = this.options;
          return void 0 !== e2.minNativeZoom && t2 < e2.minNativeZoom ? e2.minNativeZoom : void 0 !== e2.maxNativeZoom && e2.maxNativeZoom < t2 ? e2.maxNativeZoom : t2;
        }, _setView: function(t2, e2, i2, n2) {
          var o2 = Math.round(e2), o2 = void 0 !== this.options.maxZoom && o2 > this.options.maxZoom || void 0 !== this.options.minZoom && o2 < this.options.minZoom ? void 0 : this._clampZoom(o2), s2 = this.options.updateWhenZooming && o2 !== this._tileZoom;
          n2 && !s2 || (this._tileZoom = o2, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o2 && this._update(t2), i2 || this._pruneTiles(), this._noPrune = !!i2), this._setZoomTransforms(t2, e2);
        }, _setZoomTransforms: function(t2, e2) {
          for (var i2 in this._levels)
            this._setZoomTransform(this._levels[i2], t2, e2);
        }, _setZoomTransform: function(t2, e2, i2) {
          var n2 = this._map.getZoomScale(i2, t2.zoom), e2 = t2.origin.multiplyBy(n2).subtract(this._map._getNewPixelOrigin(e2, i2)).round();
          b.any3d ? be(t2.el, e2, n2) : Z(t2.el, e2);
        }, _resetGrid: function() {
          var t2 = this._map, e2 = t2.options.crs, i2 = this._tileSize = this.getTileSize(), n2 = this._tileZoom, o2 = this._map.getPixelWorldBounds(this._tileZoom);
          o2 && (this._globalTileRange = this._pxBoundsToTileRange(o2)), this._wrapX = e2.wrapLng && !this.options.noWrap && [Math.floor(t2.project([0, e2.wrapLng[0]], n2).x / i2.x), Math.ceil(t2.project([0, e2.wrapLng[1]], n2).x / i2.y)], this._wrapY = e2.wrapLat && !this.options.noWrap && [Math.floor(t2.project([e2.wrapLat[0], 0], n2).y / i2.x), Math.ceil(t2.project([e2.wrapLat[1], 0], n2).y / i2.y)];
        }, _onMoveEnd: function() {
          this._map && !this._map._animatingZoom && this._update();
        }, _getTiledPixelBounds: function(t2) {
          var e2 = this._map, i2 = e2._animatingZoom ? Math.max(e2._animateToZoom, e2.getZoom()) : e2.getZoom(), i2 = e2.getZoomScale(i2, this._tileZoom), t2 = e2.project(t2, this._tileZoom).floor(), e2 = e2.getSize().divideBy(2 * i2);
          return new f(t2.subtract(e2), t2.add(e2));
        }, _update: function(t2) {
          var e2 = this._map;
          if (e2) {
            var i2 = this._clampZoom(e2.getZoom());
            if (void 0 === t2 && (t2 = e2.getCenter()), void 0 !== this._tileZoom) {
              var n2, e2 = this._getTiledPixelBounds(t2), o2 = this._pxBoundsToTileRange(e2), s2 = o2.getCenter(), r2 = [], e2 = this.options.keepBuffer, a2 = new f(o2.getBottomLeft().subtract([e2, -e2]), o2.getTopRight().add([e2, -e2]));
              if (!(isFinite(o2.min.x) && isFinite(o2.min.y) && isFinite(o2.max.x) && isFinite(o2.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (n2 in this._tiles) {
                var h2 = this._tiles[n2].coords;
                h2.z === this._tileZoom && a2.contains(new p(h2.x, h2.y)) || (this._tiles[n2].current = false);
              }
              if (1 < Math.abs(i2 - this._tileZoom))
                this._setView(t2, i2);
              else {
                for (var l2 = o2.min.y; l2 <= o2.max.y; l2++)
                  for (var u2 = o2.min.x; u2 <= o2.max.x; u2++) {
                    var c2, d2 = new p(u2, l2);
                    d2.z = this._tileZoom, this._isValidTile(d2) && ((c2 = this._tiles[this._tileCoordsToKey(d2)]) ? c2.current = true : r2.push(d2));
                  }
                if (r2.sort(function(t3, e3) {
                  return t3.distanceTo(s2) - e3.distanceTo(s2);
                }), 0 !== r2.length) {
                  this._loading || (this._loading = true, this.fire("loading"));
                  for (var _2 = document.createDocumentFragment(), u2 = 0; u2 < r2.length; u2++)
                    this._addTile(r2[u2], _2);
                  this._level.el.appendChild(_2);
                }
              }
            }
          }
        }, _isValidTile: function(t2) {
          var e2 = this._map.options.crs;
          if (!e2.infinite) {
            var i2 = this._globalTileRange;
            if (!e2.wrapLng && (t2.x < i2.min.x || t2.x > i2.max.x) || !e2.wrapLat && (t2.y < i2.min.y || t2.y > i2.max.y))
              return false;
          }
          return !this.options.bounds || (e2 = this._tileCoordsToBounds(t2), g(this.options.bounds).overlaps(e2));
        }, _keyToBounds: function(t2) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t2));
        }, _tileCoordsToNwSe: function(t2) {
          var e2 = this._map, i2 = this.getTileSize(), n2 = t2.scaleBy(i2), i2 = n2.add(i2);
          return [e2.unproject(n2, t2.z), e2.unproject(i2, t2.z)];
        }, _tileCoordsToBounds: function(t2) {
          t2 = this._tileCoordsToNwSe(t2), t2 = new s(t2[0], t2[1]);
          return t2 = this.options.noWrap ? t2 : this._map.wrapLatLngBounds(t2);
        }, _tileCoordsToKey: function(t2) {
          return t2.x + ":" + t2.y + ":" + t2.z;
        }, _keyToTileCoords: function(t2) {
          var t2 = t2.split(":"), e2 = new p(+t2[0], +t2[1]);
          return e2.z = +t2[2], e2;
        }, _removeTile: function(t2) {
          var e2 = this._tiles[t2];
          e2 && (T(e2.el), delete this._tiles[t2], this.fire("tileunload", { tile: e2.el, coords: this._keyToTileCoords(t2) }));
        }, _initTile: function(t2) {
          M(t2, "leaflet-tile");
          var e2 = this.getTileSize();
          t2.style.width = e2.x + "px", t2.style.height = e2.y + "px", t2.onselectstart = u, t2.onmousemove = u, b.ielt9 && this.options.opacity < 1 && C(t2, this.options.opacity);
        }, _addTile: function(t2, e2) {
          var i2 = this._getTilePos(t2), n2 = this._tileCoordsToKey(t2), o2 = this.createTile(this._wrapCoords(t2), a(this._tileReady, this, t2));
          this._initTile(o2), this.createTile.length < 2 && x(a(this._tileReady, this, t2, null, o2)), Z(o2, i2), this._tiles[n2] = { el: o2, coords: t2, current: true }, e2.appendChild(o2), this.fire("tileloadstart", { tile: o2, coords: t2 });
        }, _tileReady: function(t2, e2, i2) {
          e2 && this.fire("tileerror", { error: e2, tile: i2, coords: t2 });
          var n2 = this._tileCoordsToKey(t2);
          (i2 = this._tiles[n2]) && (i2.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (C(i2.el, 0), r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i2.active = true, this._pruneTiles()), e2 || (M(i2.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i2.el, coords: t2 })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
        }, _getTilePos: function(t2) {
          return t2.scaleBy(this.getTileSize()).subtract(this._level.origin);
        }, _wrapCoords: function(t2) {
          var e2 = new p(this._wrapX ? H(t2.x, this._wrapX) : t2.x, this._wrapY ? H(t2.y, this._wrapY) : t2.y);
          return e2.z = t2.z, e2;
        }, _pxBoundsToTileRange: function(t2) {
          var e2 = this.getTileSize();
          return new f(t2.min.unscaleBy(e2).floor(), t2.max.unscaleBy(e2).ceil().subtract([1, 1]));
        }, _noTilesToLoad: function() {
          for (var t2 in this._tiles)
            if (!this._tiles[t2].loaded)
              return false;
          return true;
        } });
        var Di = Ni.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(t2, e2) {
          this._url = t2, (e2 = c(this, e2)).detectRetina && b.retina && 0 < e2.maxZoom ? (e2.tileSize = Math.floor(e2.tileSize / 2), e2.zoomReverse ? (e2.zoomOffset--, e2.minZoom = Math.min(e2.maxZoom, e2.minZoom + 1)) : (e2.zoomOffset++, e2.maxZoom = Math.max(e2.minZoom, e2.maxZoom - 1)), e2.minZoom = Math.max(0, e2.minZoom)) : e2.zoomReverse ? e2.minZoom = Math.min(e2.maxZoom, e2.minZoom) : e2.maxZoom = Math.max(e2.minZoom, e2.maxZoom), "string" == typeof e2.subdomains && (e2.subdomains = e2.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        }, setUrl: function(t2, e2) {
          return this._url === t2 && void 0 === e2 && (e2 = true), this._url = t2, e2 || this.redraw(), this;
        }, createTile: function(t2, e2) {
          var i2 = document.createElement("img");
          return S(i2, "load", a(this._tileOnLoad, this, e2, i2)), S(i2, "error", a(this._tileOnError, this, e2, i2)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (i2.referrerPolicy = this.options.referrerPolicy), i2.alt = "", i2.src = this.getTileUrl(t2), i2;
        }, getTileUrl: function(t2) {
          var e2 = { r: b.retina ? "@2x" : "", s: this._getSubdomain(t2), x: t2.x, y: t2.y, z: this._getZoomForUrl() };
          return this._map && !this._map.options.crs.infinite && (t2 = this._globalTileRange.max.y - t2.y, this.options.tms && (e2.y = t2), e2["-y"] = t2), q(this._url, l(e2, this.options));
        }, _tileOnLoad: function(t2, e2) {
          b.ielt9 ? setTimeout(a(t2, this, null, e2), 0) : t2(null, e2);
        }, _tileOnError: function(t2, e2, i2) {
          var n2 = this.options.errorTileUrl;
          n2 && e2.getAttribute("src") !== n2 && (e2.src = n2), t2(i2, e2);
        }, _onTileRemove: function(t2) {
          t2.tile.onload = null;
        }, _getZoomForUrl: function() {
          var t2 = this._tileZoom, e2 = this.options.maxZoom;
          return (t2 = this.options.zoomReverse ? e2 - t2 : t2) + this.options.zoomOffset;
        }, _getSubdomain: function(t2) {
          t2 = Math.abs(t2.x + t2.y) % this.options.subdomains.length;
          return this.options.subdomains[t2];
        }, _abortLoading: function() {
          var t2, e2, i2;
          for (t2 in this._tiles)
            this._tiles[t2].coords.z !== this._tileZoom && ((i2 = this._tiles[t2].el).onload = u, i2.onerror = u, i2.complete || (i2.src = K, e2 = this._tiles[t2].coords, T(i2), delete this._tiles[t2], this.fire("tileabort", { tile: i2, coords: e2 })));
        }, _removeTile: function(t2) {
          var e2 = this._tiles[t2];
          if (e2)
            return e2.el.setAttribute("src", K), Ni.prototype._removeTile.call(this, t2);
        }, _tileReady: function(t2, e2, i2) {
          if (this._map && (!i2 || i2.getAttribute("src") !== K))
            return Ni.prototype._tileReady.call(this, t2, e2, i2);
        } });
        function ji(t2, e2) {
          return new Di(t2, e2);
        }
        var Hi = Di.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(t2, e2) {
          this._url = t2;
          var i2, n2 = l({}, this.defaultWmsParams);
          for (i2 in e2)
            i2 in this.options || (n2[i2] = e2[i2]);
          var t2 = (e2 = c(this, e2)).detectRetina && b.retina ? 2 : 1, o2 = this.getTileSize();
          n2.width = o2.x * t2, n2.height = o2.y * t2, this.wmsParams = n2;
        }, onAdd: function(t2) {
          this._crs = this.options.crs || t2.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e2 = 1.3 <= this._wmsVersion ? "crs" : "srs";
          this.wmsParams[e2] = this._crs.code, Di.prototype.onAdd.call(this, t2);
        }, getTileUrl: function(t2) {
          var e2 = this._tileCoordsToNwSe(t2), i2 = this._crs, i2 = _(i2.project(e2[0]), i2.project(e2[1])), e2 = i2.min, i2 = i2.max, e2 = (1.3 <= this._wmsVersion && this._crs === li ? [e2.y, e2.x, i2.y, i2.x] : [e2.x, e2.y, i2.x, i2.y]).join(","), i2 = Di.prototype.getTileUrl.call(this, t2);
          return i2 + U(this.wmsParams, i2, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e2;
        }, setParams: function(t2, e2) {
          return l(this.wmsParams, t2), e2 || this.redraw(), this;
        } });
        Di.WMS = Hi, ji.wms = function(t2, e2) {
          return new Hi(t2, e2);
        };
        var Wi = o.extend({ options: { padding: 0.1 }, initialize: function(t2) {
          c(this, t2), h(this), this._layers = this._layers || {};
        }, onAdd: function() {
          this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        }, onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        }, getEvents: function() {
          var t2 = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
          return this._zoomAnimated && (t2.zoomanim = this._onAnimZoom), t2;
        }, _onAnimZoom: function(t2) {
          this._updateTransform(t2.center, t2.zoom);
        }, _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        }, _updateTransform: function(t2, e2) {
          var i2 = this._map.getZoomScale(e2, this._zoom), n2 = this._map.getSize().multiplyBy(0.5 + this.options.padding), o2 = this._map.project(this._center, e2), n2 = n2.multiplyBy(-i2).add(o2).subtract(this._map._getNewPixelOrigin(t2, e2));
          b.any3d ? be(this._container, n2, i2) : Z(this._container, n2);
        }, _reset: function() {
          for (var t2 in this._update(), this._updateTransform(this._center, this._zoom), this._layers)
            this._layers[t2]._reset();
        }, _onZoomEnd: function() {
          for (var t2 in this._layers)
            this._layers[t2]._project();
        }, _updatePaths: function() {
          for (var t2 in this._layers)
            this._layers[t2]._update();
        }, _update: function() {
          var t2 = this.options.padding, e2 = this._map.getSize(), i2 = this._map.containerPointToLayerPoint(e2.multiplyBy(-t2)).round();
          this._bounds = new f(i2, i2.add(e2.multiplyBy(1 + 2 * t2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        } }), Fi = Wi.extend({ options: { tolerance: 0 }, getEvents: function() {
          var t2 = Wi.prototype.getEvents.call(this);
          return t2.viewprereset = this._onViewPreReset, t2;
        }, _onViewPreReset: function() {
          this._postponeUpdatePaths = true;
        }, onAdd: function() {
          Wi.prototype.onAdd.call(this), this._draw();
        }, _initContainer: function() {
          var t2 = this._container = document.createElement("canvas");
          S(t2, "mousemove", this._onMouseMove, this), S(t2, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t2, "mouseout", this._handleMouseOut, this), t2._leaflet_disable_events = true, this._ctx = t2.getContext("2d");
        }, _destroyContainer: function() {
          r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), delete this._container;
        }, _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            for (var t2 in this._redrawBounds = null, this._layers)
              this._layers[t2]._update();
            this._redraw();
          }
        }, _update: function() {
          var t2, e2, i2, n2;
          this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), t2 = this._bounds, e2 = this._container, i2 = t2.getSize(), n2 = b.retina ? 2 : 1, Z(e2, t2.min), e2.width = n2 * i2.x, e2.height = n2 * i2.y, e2.style.width = i2.x + "px", e2.style.height = i2.y + "px", b.retina && this._ctx.scale(2, 2), this._ctx.translate(-t2.min.x, -t2.min.y), this.fire("update"));
        }, _reset: function() {
          Wi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
        }, _initPath: function(t2) {
          this._updateDashArray(t2);
          t2 = (this._layers[h(t2)] = t2)._order = { layer: t2, prev: this._drawLast, next: null };
          this._drawLast && (this._drawLast.next = t2), this._drawLast = t2, this._drawFirst = this._drawFirst || this._drawLast;
        }, _addPath: function(t2) {
          this._requestRedraw(t2);
        }, _removePath: function(t2) {
          var e2 = t2._order, i2 = e2.next, e2 = e2.prev;
          i2 ? i2.prev = e2 : this._drawLast = e2, e2 ? e2.next = i2 : this._drawFirst = i2, delete t2._order, delete this._layers[h(t2)], this._requestRedraw(t2);
        }, _updatePath: function(t2) {
          this._extendRedrawBounds(t2), t2._project(), t2._update(), this._requestRedraw(t2);
        }, _updateStyle: function(t2) {
          this._updateDashArray(t2), this._requestRedraw(t2);
        }, _updateDashArray: function(t2) {
          if ("string" == typeof t2.options.dashArray) {
            for (var e2, i2 = t2.options.dashArray.split(/[, ]+/), n2 = [], o2 = 0; o2 < i2.length; o2++) {
              if (e2 = Number(i2[o2]), isNaN(e2))
                return;
              n2.push(e2);
            }
            t2.options._dashArray = n2;
          } else
            t2.options._dashArray = t2.options.dashArray;
        }, _requestRedraw: function(t2) {
          this._map && (this._extendRedrawBounds(t2), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
        }, _extendRedrawBounds: function(t2) {
          var e2;
          t2._pxBounds && (e2 = (t2.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new f(), this._redrawBounds.extend(t2._pxBounds.min.subtract([e2, e2])), this._redrawBounds.extend(t2._pxBounds.max.add([e2, e2])));
        }, _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        }, _clear: function() {
          var t2, e2 = this._redrawBounds;
          e2 ? (t2 = e2.getSize(), this._ctx.clearRect(e2.min.x, e2.min.y, t2.x, t2.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
        }, _draw: function() {
          var t2, e2, i2 = this._redrawBounds;
          this._ctx.save(), i2 && (e2 = i2.getSize(), this._ctx.beginPath(), this._ctx.rect(i2.min.x, i2.min.y, e2.x, e2.y), this._ctx.clip()), this._drawing = true;
          for (var n2 = this._drawFirst; n2; n2 = n2.next)
            t2 = n2.layer, (!i2 || t2._pxBounds && t2._pxBounds.intersects(i2)) && t2._updatePath();
          this._drawing = false, this._ctx.restore();
        }, _updatePoly: function(t2, e2) {
          if (this._drawing) {
            var i2, n2, o2, s2, r2 = t2._parts, a2 = r2.length, h2 = this._ctx;
            if (a2) {
              for (h2.beginPath(), i2 = 0; i2 < a2; i2++) {
                for (n2 = 0, o2 = r2[i2].length; n2 < o2; n2++)
                  s2 = r2[i2][n2], h2[n2 ? "lineTo" : "moveTo"](s2.x, s2.y);
                e2 && h2.closePath();
              }
              this._fillStroke(h2, t2);
            }
          }
        }, _updateCircle: function(t2) {
          var e2, i2, n2, o2;
          this._drawing && !t2._empty() && (e2 = t2._point, i2 = this._ctx, n2 = Math.max(Math.round(t2._radius), 1), 1 != (o2 = (Math.max(Math.round(t2._radiusY), 1) || n2) / n2) && (i2.save(), i2.scale(1, o2)), i2.beginPath(), i2.arc(e2.x, e2.y / o2, n2, 0, 2 * Math.PI, false), 1 != o2 && i2.restore(), this._fillStroke(i2, t2));
        }, _fillStroke: function(t2, e2) {
          var i2 = e2.options;
          i2.fill && (t2.globalAlpha = i2.fillOpacity, t2.fillStyle = i2.fillColor || i2.color, t2.fill(i2.fillRule || "evenodd")), i2.stroke && 0 !== i2.weight && (t2.setLineDash && t2.setLineDash(e2.options && e2.options._dashArray || []), t2.globalAlpha = i2.opacity, t2.lineWidth = i2.weight, t2.strokeStyle = i2.color, t2.lineCap = i2.lineCap, t2.lineJoin = i2.lineJoin, t2.stroke());
        }, _onClick: function(t2) {
          for (var e2, i2, n2 = this._map.mouseEventToLayerPoint(t2), o2 = this._drawFirst; o2; o2 = o2.next)
            (e2 = o2.layer).options.interactive && e2._containsPoint(n2) && (("click" === t2.type || "preclick" === t2.type) && this._map._draggableMoved(e2) || (i2 = e2));
          this._fireEvent(!!i2 && [i2], t2);
        }, _onMouseMove: function(t2) {
          var e2;
          !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e2 = this._map.mouseEventToLayerPoint(t2), this._handleMouseHover(t2, e2));
        }, _handleMouseOut: function(t2) {
          var e2 = this._hoveredLayer;
          e2 && (z(this._container, "leaflet-interactive"), this._fireEvent([e2], t2, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
        }, _handleMouseHover: function(t2, e2) {
          if (!this._mouseHoverThrottled) {
            for (var i2, n2, o2 = this._drawFirst; o2; o2 = o2.next)
              (i2 = o2.layer).options.interactive && i2._containsPoint(e2) && (n2 = i2);
            n2 !== this._hoveredLayer && (this._handleMouseOut(t2), n2 && (M(this._container, "leaflet-interactive"), this._fireEvent([n2], t2, "mouseover"), this._hoveredLayer = n2)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t2), this._mouseHoverThrottled = true, setTimeout(a(function() {
              this._mouseHoverThrottled = false;
            }, this), 32);
          }
        }, _fireEvent: function(t2, e2, i2) {
          this._map._fireDOMEvent(e2, i2 || e2.type, t2);
        }, _bringToFront: function(t2) {
          var e2, i2, n2 = t2._order;
          n2 && (e2 = n2.next, i2 = n2.prev, e2 && ((e2.prev = i2) ? i2.next = e2 : e2 && (this._drawFirst = e2), n2.prev = this._drawLast, (this._drawLast.next = n2).next = null, this._drawLast = n2, this._requestRedraw(t2)));
        }, _bringToBack: function(t2) {
          var e2, i2, n2 = t2._order;
          n2 && (e2 = n2.next, (i2 = n2.prev) && ((i2.next = e2) ? e2.prev = i2 : i2 && (this._drawLast = i2), n2.prev = null, n2.next = this._drawFirst, this._drawFirst.prev = n2, this._drawFirst = n2, this._requestRedraw(t2)));
        } });
        function Ui(t2) {
          return b.canvas ? new Fi(t2) : null;
        }
        var Vi = function() {
          try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t2) {
              return document.createElement("<lvml:" + t2 + ' class="lvml">');
            };
          } catch (t2) {
          }
          return function(t2) {
            return document.createElement("<" + t2 + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }(), zt = { _initContainer: function() {
          this._container = P("div", "leaflet-vml-container");
        }, _update: function() {
          this._map._animatingZoom || (Wi.prototype._update.call(this), this.fire("update"));
        }, _initPath: function(t2) {
          var e2 = t2._container = Vi("shape");
          M(e2, "leaflet-vml-shape " + (this.options.className || "")), e2.coordsize = "1 1", t2._path = Vi("path"), e2.appendChild(t2._path), this._updateStyle(t2), this._layers[h(t2)] = t2;
        }, _addPath: function(t2) {
          var e2 = t2._container;
          this._container.appendChild(e2), t2.options.interactive && t2.addInteractiveTarget(e2);
        }, _removePath: function(t2) {
          var e2 = t2._container;
          T(e2), t2.removeInteractiveTarget(e2), delete this._layers[h(t2)];
        }, _updateStyle: function(t2) {
          var e2 = t2._stroke, i2 = t2._fill, n2 = t2.options, o2 = t2._container;
          o2.stroked = !!n2.stroke, o2.filled = !!n2.fill, n2.stroke ? (e2 = e2 || (t2._stroke = Vi("stroke")), o2.appendChild(e2), e2.weight = n2.weight + "px", e2.color = n2.color, e2.opacity = n2.opacity, n2.dashArray ? e2.dashStyle = d(n2.dashArray) ? n2.dashArray.join(" ") : n2.dashArray.replace(/( *, *)/g, " ") : e2.dashStyle = "", e2.endcap = n2.lineCap.replace("butt", "flat"), e2.joinstyle = n2.lineJoin) : e2 && (o2.removeChild(e2), t2._stroke = null), n2.fill ? (i2 = i2 || (t2._fill = Vi("fill")), o2.appendChild(i2), i2.color = n2.fillColor || n2.color, i2.opacity = n2.fillOpacity) : i2 && (o2.removeChild(i2), t2._fill = null);
        }, _updateCircle: function(t2) {
          var e2 = t2._point.round(), i2 = Math.round(t2._radius), n2 = Math.round(t2._radiusY || i2);
          this._setPath(t2, t2._empty() ? "M0 0" : "AL " + e2.x + "," + e2.y + " " + i2 + "," + n2 + " 0,23592600");
        }, _setPath: function(t2, e2) {
          t2._path.v = e2;
        }, _bringToFront: function(t2) {
          fe(t2._container);
        }, _bringToBack: function(t2) {
          ge(t2._container);
        } }, qi = b.vml ? Vi : ct, Gi = Wi.extend({ _initContainer: function() {
          this._container = qi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = qi("g"), this._container.appendChild(this._rootGroup);
        }, _destroyContainer: function() {
          T(this._container), k(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        }, _update: function() {
          var t2, e2, i2;
          this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), e2 = (t2 = this._bounds).getSize(), i2 = this._container, this._svgSize && this._svgSize.equals(e2) || (this._svgSize = e2, i2.setAttribute("width", e2.x), i2.setAttribute("height", e2.y)), Z(i2, t2.min), i2.setAttribute("viewBox", [t2.min.x, t2.min.y, e2.x, e2.y].join(" ")), this.fire("update"));
        }, _initPath: function(t2) {
          var e2 = t2._path = qi("path");
          t2.options.className && M(e2, t2.options.className), t2.options.interactive && M(e2, "leaflet-interactive"), this._updateStyle(t2), this._layers[h(t2)] = t2;
        }, _addPath: function(t2) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t2._path), t2.addInteractiveTarget(t2._path);
        }, _removePath: function(t2) {
          T(t2._path), t2.removeInteractiveTarget(t2._path), delete this._layers[h(t2)];
        }, _updatePath: function(t2) {
          t2._project(), t2._update();
        }, _updateStyle: function(t2) {
          var e2 = t2._path, t2 = t2.options;
          e2 && (t2.stroke ? (e2.setAttribute("stroke", t2.color), e2.setAttribute("stroke-opacity", t2.opacity), e2.setAttribute("stroke-width", t2.weight), e2.setAttribute("stroke-linecap", t2.lineCap), e2.setAttribute("stroke-linejoin", t2.lineJoin), t2.dashArray ? e2.setAttribute("stroke-dasharray", t2.dashArray) : e2.removeAttribute("stroke-dasharray"), t2.dashOffset ? e2.setAttribute("stroke-dashoffset", t2.dashOffset) : e2.removeAttribute("stroke-dashoffset")) : e2.setAttribute("stroke", "none"), t2.fill ? (e2.setAttribute("fill", t2.fillColor || t2.color), e2.setAttribute("fill-opacity", t2.fillOpacity), e2.setAttribute("fill-rule", t2.fillRule || "evenodd")) : e2.setAttribute("fill", "none"));
        }, _updatePoly: function(t2, e2) {
          this._setPath(t2, dt(t2._parts, e2));
        }, _updateCircle: function(t2) {
          var e2 = t2._point, i2 = Math.max(Math.round(t2._radius), 1), n2 = "a" + i2 + "," + (Math.max(Math.round(t2._radiusY), 1) || i2) + " 0 1,0 ", e2 = t2._empty() ? "M0 0" : "M" + (e2.x - i2) + "," + e2.y + n2 + 2 * i2 + ",0 " + n2 + 2 * -i2 + ",0 ";
          this._setPath(t2, e2);
        }, _setPath: function(t2, e2) {
          t2._path.setAttribute("d", e2);
        }, _bringToFront: function(t2) {
          fe(t2._path);
        }, _bringToBack: function(t2) {
          ge(t2._path);
        } });
        function Ki(t2) {
          return b.svg || b.vml ? new Gi(t2) : null;
        }
        b.vml && Gi.include(zt), A.include({ getRenderer: function(t2) {
          t2 = (t2 = t2.options.renderer || this._getPaneRenderer(t2.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
          return this.hasLayer(t2) || this.addLayer(t2), t2;
        }, _getPaneRenderer: function(t2) {
          var e2;
          return "overlayPane" !== t2 && void 0 !== t2 && (void 0 === (e2 = this._paneRenderers[t2]) && (e2 = this._createRenderer({ pane: t2 }), this._paneRenderers[t2] = e2), e2);
        }, _createRenderer: function(t2) {
          return this.options.preferCanvas && Ui(t2) || Ki(t2);
        } });
        var Yi = xi.extend({ initialize: function(t2, e2) {
          xi.prototype.initialize.call(this, this._boundsToLatLngs(t2), e2);
        }, setBounds: function(t2) {
          return this.setLatLngs(this._boundsToLatLngs(t2));
        }, _boundsToLatLngs: function(t2) {
          return [(t2 = g(t2)).getSouthWest(), t2.getNorthWest(), t2.getNorthEast(), t2.getSouthEast()];
        } });
        Gi.create = qi, Gi.pointsToPath = dt, wi.geometryToLayer = bi, wi.coordsToLatLng = Li, wi.coordsToLatLngs = Ti, wi.latLngToCoords = Mi, wi.latLngsToCoords = zi, wi.getFeature = Ci, wi.asFeature = Zi, A.mergeOptions({ boxZoom: true });
        var _t = n.extend({ initialize: function(t2) {
          this._map = t2, this._container = t2._container, this._pane = t2._panes.overlayPane, this._resetStateTimeout = 0, t2.on("unload", this._destroy, this);
        }, addHooks: function() {
          S(this._container, "mousedown", this._onMouseDown, this);
        }, removeHooks: function() {
          k(this._container, "mousedown", this._onMouseDown, this);
        }, moved: function() {
          return this._moved;
        }, _destroy: function() {
          T(this._pane), delete this._pane;
        }, _resetState: function() {
          this._resetStateTimeout = 0, this._moved = false;
        }, _clearDeferredResetState: function() {
          0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        }, _onMouseDown: function(t2) {
          if (!t2.shiftKey || 1 !== t2.which && 1 !== t2.button)
            return false;
          this._clearDeferredResetState(), this._resetState(), re(), Le(), this._startPoint = this._map.mouseEventToContainerPoint(t2), S(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
        }, _onMouseMove: function(t2) {
          this._moved || (this._moved = true, this._box = P("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t2);
          var t2 = new f(this._point, this._startPoint), e2 = t2.getSize();
          Z(this._box, t2.min), this._box.style.width = e2.x + "px", this._box.style.height = e2.y + "px";
        }, _finish: function() {
          this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), k(document, { contextmenu: Re, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
        }, _onMouseUp: function(t2) {
          1 !== t2.which && 1 !== t2.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t2 = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t2).fire("boxzoomend", { boxZoomBounds: t2 })));
        }, _onKeyDown: function(t2) {
          27 === t2.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
        } }), Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({ doubleClickZoom: true }), n.extend({ addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        }, removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        }, _onDoubleClick: function(t2) {
          var e2 = this._map, i2 = e2.getZoom(), n2 = e2.options.zoomDelta, i2 = t2.originalEvent.shiftKey ? i2 - n2 : i2 + n2;
          "center" === e2.options.doubleClickZoom ? e2.setZoom(i2) : e2.setZoomAround(t2.containerPoint, i2);
        } })), Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 }), n.extend({ addHooks: function() {
          var t2;
          this._draggable || (t2 = this._map, this._draggable = new Xe(t2._mapPane, t2._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t2.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t2.on("zoomend", this._onZoomEnd, this), t2.whenReady(this._onZoomEnd, this))), M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        }, removeHooks: function() {
          z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        }, moved: function() {
          return this._draggable && this._draggable._moved;
        }, moving: function() {
          return this._draggable && this._draggable._moving;
        }, _onDragStart: function() {
          var t2, e2 = this._map;
          e2._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t2 = g(this._map.options.maxBounds), this._offsetLimit = _(this._map.latLngToContainerPoint(t2.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t2.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e2.fire("movestart").fire("dragstart"), e2.options.inertia && (this._positions = [], this._times = []);
        }, _onDrag: function(t2) {
          var e2, i2;
          this._map.options.inertia && (e2 = this._lastTime = +/* @__PURE__ */ new Date(), i2 = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i2), this._times.push(e2), this._prunePositions(e2)), this._map.fire("move", t2).fire("drag", t2);
        }, _prunePositions: function(t2) {
          for (; 1 < this._positions.length && 50 < t2 - this._times[0]; )
            this._positions.shift(), this._times.shift();
        }, _onZoomEnd: function() {
          var t2 = this._map.getSize().divideBy(2), e2 = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e2.subtract(t2).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        }, _viscousLimit: function(t2, e2) {
          return t2 - (t2 - e2) * this._viscosity;
        }, _onPreDragLimit: function() {
          var t2, e2;
          this._viscosity && this._offsetLimit && (t2 = this._draggable._newPos.subtract(this._draggable._startPos), e2 = this._offsetLimit, t2.x < e2.min.x && (t2.x = this._viscousLimit(t2.x, e2.min.x)), t2.y < e2.min.y && (t2.y = this._viscousLimit(t2.y, e2.min.y)), t2.x > e2.max.x && (t2.x = this._viscousLimit(t2.x, e2.max.x)), t2.y > e2.max.y && (t2.y = this._viscousLimit(t2.y, e2.max.y)), this._draggable._newPos = this._draggable._startPos.add(t2));
        }, _onPreDragWrap: function() {
          var t2 = this._worldWidth, e2 = Math.round(t2 / 2), i2 = this._initialWorldOffset, n2 = this._draggable._newPos.x, o2 = (n2 - e2 + i2) % t2 + e2 - i2, n2 = (n2 + e2 + i2) % t2 - e2 - i2, t2 = Math.abs(o2 + i2) < Math.abs(n2 + i2) ? o2 : n2;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t2;
        }, _onDragEnd: function(t2) {
          var e2, i2, n2, o2, s2 = this._map, r2 = s2.options, a2 = !r2.inertia || t2.noInertia || this._times.length < 2;
          s2.fire("dragend", t2), !a2 && (this._prunePositions(+/* @__PURE__ */ new Date()), t2 = this._lastPos.subtract(this._positions[0]), a2 = (this._lastTime - this._times[0]) / 1e3, e2 = r2.easeLinearity, a2 = (t2 = t2.multiplyBy(e2 / a2)).distanceTo([0, 0]), i2 = Math.min(r2.inertiaMaxSpeed, a2), t2 = t2.multiplyBy(i2 / a2), n2 = i2 / (r2.inertiaDeceleration * e2), (o2 = t2.multiplyBy(-n2 / 2).round()).x || o2.y) ? (o2 = s2._limitOffset(o2, s2.options.maxBounds), x(function() {
            s2.panBy(o2, { duration: n2, easeLinearity: e2, noMoveStart: true, animate: true });
          })) : s2.fire("moveend");
        } })), St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({ keyboard: true, keyboardPanDelta: 80 }), n.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(t2) {
          this._map = t2, this._setPanDelta(t2.options.keyboardPanDelta), this._setZoomDelta(t2.options.zoomDelta);
        }, addHooks: function() {
          var t2 = this._map._container;
          t2.tabIndex <= 0 && (t2.tabIndex = "0"), S(t2, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
        }, removeHooks: function() {
          this._removeHooks(), k(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
        }, _onMouseDown: function() {
          var t2, e2, i2;
          this._focused || (i2 = document.body, t2 = document.documentElement, e2 = i2.scrollTop || t2.scrollTop, i2 = i2.scrollLeft || t2.scrollLeft, this._map._container.focus(), window.scrollTo(i2, e2));
        }, _onFocus: function() {
          this._focused = true, this._map.fire("focus");
        }, _onBlur: function() {
          this._focused = false, this._map.fire("blur");
        }, _setPanDelta: function(t2) {
          for (var e2 = this._panKeys = {}, i2 = this.keyCodes, n2 = 0, o2 = i2.left.length; n2 < o2; n2++)
            e2[i2.left[n2]] = [-1 * t2, 0];
          for (n2 = 0, o2 = i2.right.length; n2 < o2; n2++)
            e2[i2.right[n2]] = [t2, 0];
          for (n2 = 0, o2 = i2.down.length; n2 < o2; n2++)
            e2[i2.down[n2]] = [0, t2];
          for (n2 = 0, o2 = i2.up.length; n2 < o2; n2++)
            e2[i2.up[n2]] = [0, -1 * t2];
        }, _setZoomDelta: function(t2) {
          for (var e2 = this._zoomKeys = {}, i2 = this.keyCodes, n2 = 0, o2 = i2.zoomIn.length; n2 < o2; n2++)
            e2[i2.zoomIn[n2]] = t2;
          for (n2 = 0, o2 = i2.zoomOut.length; n2 < o2; n2++)
            e2[i2.zoomOut[n2]] = -t2;
        }, _addHooks: function() {
          S(document, "keydown", this._onKeyDown, this);
        }, _removeHooks: function() {
          k(document, "keydown", this._onKeyDown, this);
        }, _onKeyDown: function(t2) {
          if (!(t2.altKey || t2.ctrlKey || t2.metaKey)) {
            var e2, i2, n2 = t2.keyCode, o2 = this._map;
            if (n2 in this._panKeys)
              o2._panAnim && o2._panAnim._inProgress || (i2 = this._panKeys[n2], t2.shiftKey && (i2 = m(i2).multiplyBy(3)), o2.options.maxBounds && (i2 = o2._limitOffset(m(i2), o2.options.maxBounds)), o2.options.worldCopyJump ? (e2 = o2.wrapLatLng(o2.unproject(o2.project(o2.getCenter()).add(i2))), o2.panTo(e2)) : o2.panBy(i2));
            else if (n2 in this._zoomKeys)
              o2.setZoom(o2.getZoom() + (t2.shiftKey ? 3 : 1) * this._zoomKeys[n2]);
            else {
              if (27 !== n2 || !o2._popup || !o2._popup.options.closeOnEscapeKey)
                return;
              o2.closePopup();
            }
            Re(t2);
          }
        } })), Et = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 }), n.extend({ addHooks: function() {
          S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        }, removeHooks: function() {
          k(this._map._container, "wheel", this._onWheelScroll, this);
        }, _onWheelScroll: function(t2) {
          var e2 = He(t2), i2 = this._map.options.wheelDebounceTime, e2 = (this._delta += e2, this._lastMousePos = this._map.mouseEventToContainerPoint(t2), this._startTime || (this._startTime = +/* @__PURE__ */ new Date()), Math.max(i2 - (+/* @__PURE__ */ new Date() - this._startTime), 0));
          clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), e2), Re(t2);
        }, _performZoom: function() {
          var t2 = this._map, e2 = t2.getZoom(), i2 = this._map.options.zoomSnap || 0, n2 = (t2._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)), n2 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n2)))) / Math.LN2, i2 = i2 ? Math.ceil(n2 / i2) * i2 : n2, n2 = t2._limitZoom(e2 + (0 < this._delta ? i2 : -i2)) - e2;
          this._delta = 0, this._startTime = null, n2 && ("center" === t2.options.scrollWheelZoom ? t2.setZoom(e2 + n2) : t2.setZoomAround(this._lastMousePos, e2 + n2));
        } })), kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et), A.mergeOptions({ tapHold: b.touchNative && b.safari && b.mobile, tapTolerance: 15 }), n.extend({ addHooks: function() {
          S(this._map._container, "touchstart", this._onDown, this);
        }, removeHooks: function() {
          k(this._map._container, "touchstart", this._onDown, this);
        }, _onDown: function(t2) {
          var e2;
          clearTimeout(this._holdTimeout), 1 === t2.touches.length && (e2 = t2.touches[0], this._startPos = this._newPos = new p(e2.clientX, e2.clientY), this._holdTimeout = setTimeout(a(function() {
            this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e2));
          }, this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this));
        }, _cancelClickPrevent: function t2() {
          k(document, "touchend", O), k(document, "touchend touchcancel", t2);
        }, _cancel: function() {
          clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
        }, _onMove: function(t2) {
          t2 = t2.touches[0];
          this._newPos = new p(t2.clientX, t2.clientY);
        }, _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        }, _simulateEvent: function(t2, e2) {
          t2 = new MouseEvent(t2, { bubbles: true, cancelable: true, view: window, screenX: e2.screenX, screenY: e2.screenY, clientX: e2.clientX, clientY: e2.clientY });
          t2._simulated = true, e2.target.dispatchEvent(t2);
        } })), Ot = (A.addInitHook("addHandler", "tapHold", kt), A.mergeOptions({ touchZoom: b.touch, bounceAtZoomLimits: true }), n.extend({ addHooks: function() {
          M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
        }, removeHooks: function() {
          z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
        }, _onTouchStart: function(t2) {
          var e2, i2, n2 = this._map;
          !t2.touches || 2 !== t2.touches.length || n2._animatingZoom || this._zooming || (e2 = n2.mouseEventToContainerPoint(t2.touches[0]), i2 = n2.mouseEventToContainerPoint(t2.touches[1]), this._centerPoint = n2.getSize()._divideBy(2), this._startLatLng = n2.containerPointToLatLng(this._centerPoint), "center" !== n2.options.touchZoom && (this._pinchStartLatLng = n2.containerPointToLatLng(e2.add(i2)._divideBy(2))), this._startDist = e2.distanceTo(i2), this._startZoom = n2.getZoom(), this._moved = false, this._zooming = true, n2._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), O(t2));
        }, _onTouchMove: function(t2) {
          if (t2.touches && 2 === t2.touches.length && this._zooming) {
            var e2 = this._map, i2 = e2.mouseEventToContainerPoint(t2.touches[0]), n2 = e2.mouseEventToContainerPoint(t2.touches[1]), o2 = i2.distanceTo(n2) / this._startDist;
            if (this._zoom = e2.getScaleZoom(o2, this._startZoom), !e2.options.bounceAtZoomLimits && (this._zoom < e2.getMinZoom() && o2 < 1 || this._zoom > e2.getMaxZoom() && 1 < o2) && (this._zoom = e2._limitZoom(this._zoom)), "center" === e2.options.touchZoom) {
              if (this._center = this._startLatLng, 1 == o2)
                return;
            } else {
              i2 = i2._add(n2)._divideBy(2)._subtract(this._centerPoint);
              if (1 == o2 && 0 === i2.x && 0 === i2.y)
                return;
              this._center = e2.unproject(e2.project(this._pinchStartLatLng, this._zoom).subtract(i2), this._zoom);
            }
            this._moved || (e2._moveStart(true, false), this._moved = true), r(this._animRequest);
            n2 = a(e2._move, e2, this._center, this._zoom, { pinch: true, round: false }, void 0);
            this._animRequest = x(n2, this, true), O(t2);
          }
        }, _onTouchEnd: function() {
          this._moved && this._zooming ? (this._zooming = false, r(this._animRequest), k(document, "touchmove", this._onTouchMove, this), k(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = false;
        } })), Xi = (A.addInitHook("addHandler", "touchZoom", Ot), A.BoxZoom = _t, A.DoubleClickZoom = Ct, A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = Et, A.TapHold = kt, A.TouchZoom = Ot, t.Bounds = f, t.Browser = b, t.CRS = ot, t.Canvas = Fi, t.Circle = vi, t.CircleMarker = gi, t.Class = et, t.Control = B, t.DivIcon = Ri, t.DivOverlay = Ai, t.DomEvent = mt, t.DomUtil = pt, t.Draggable = Xe, t.Evented = it, t.FeatureGroup = ci, t.GeoJSON = wi, t.GridLayer = Ni, t.Handler = n, t.Icon = di, t.ImageOverlay = Ei, t.LatLng = v, t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ui, t.LineUtil = vt, t.Map = A, t.Marker = mi, t.Mixin = ft, t.Path = fi, t.Point = p, t.PolyUtil = gt, t.Polygon = xi, t.Polyline = yi, t.Popup = Bi, t.PosAnimation = Fe, t.Projection = wt, t.Rectangle = Yi, t.Renderer = Wi, t.SVG = Gi, t.SVGOverlay = Oi, t.TileLayer = Di, t.Tooltip = Ii, t.Transformation = at, t.Util = tt, t.VideoOverlay = ki, t.bind = a, t.bounds = _, t.canvas = Ui, t.circle = function(t2, e2, i2) {
          return new vi(t2, e2, i2);
        }, t.circleMarker = function(t2, e2) {
          return new gi(t2, e2);
        }, t.control = Ue, t.divIcon = function(t2) {
          return new Ri(t2);
        }, t.extend = l, t.featureGroup = function(t2, e2) {
          return new ci(t2, e2);
        }, t.geoJSON = Si, t.geoJson = Mt, t.gridLayer = function(t2) {
          return new Ni(t2);
        }, t.icon = function(t2) {
          return new di(t2);
        }, t.imageOverlay = function(t2, e2, i2) {
          return new Ei(t2, e2, i2);
        }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function(t2, e2) {
          return new ui(t2, e2);
        }, t.map = function(t2, e2) {
          return new A(t2, e2);
        }, t.marker = function(t2, e2) {
          return new mi(t2, e2);
        }, t.point = m, t.polygon = function(t2, e2) {
          return new xi(t2, e2);
        }, t.polyline = function(t2, e2) {
          return new yi(t2, e2);
        }, t.popup = function(t2, e2) {
          return new Bi(t2, e2);
        }, t.rectangle = function(t2, e2) {
          return new Yi(t2, e2);
        }, t.setOptions = c, t.stamp = h, t.svg = Ki, t.svgOverlay = function(t2, e2, i2) {
          return new Oi(t2, e2, i2);
        }, t.tileLayer = ji, t.tooltip = function(t2, e2) {
          return new Ii(t2, e2);
        }, t.transformation = ht, t.version = "1.9.4", t.videoOverlay = function(t2, e2, i2) {
          return new ki(t2, e2, i2);
        }, window.L);
        t.noConflict = function() {
          return window.L = Xi, this;
        }, window.L = t;
      });
    }
  });

  // source/places.json
  var places_default = {
    "221b Baker Street": {
      lat: 51.5233879,
      lng: -0.1582367,
      description: "The famed home of Sherlock Holmes and John Watson",
      nodes: []
    },
    "Curzon Street": {
      lat: 51.5065156,
      lng: -0.1492949,
      reference: "THE ADVENTURE OF SHOSCOMBE OLD PLACE",
      ways: [
        4253368,
        647062688,
        236034973,
        35583681
      ],
      nodes: [
        [
          [
            51.50637,
            -0.150404
          ],
          [
            51.506048,
            -0.151548
          ],
          [
            51.506235,
            -0.15115
          ],
          [
            51.506312,
            -0.150874
          ],
          [
            51.506074,
            -0.15148
          ],
          [
            51.50637,
            -0.150404
          ],
          [
            51.506048,
            -0.151548
          ],
          [
            51.506235,
            -0.15115
          ],
          [
            51.506312,
            -0.150874
          ],
          [
            51.506074,
            -0.15148
          ]
        ],
        [
          [
            51.506419,
            -0.149958
          ],
          [
            51.50637,
            -0.150404
          ],
          [
            51.506652,
            -0.148256
          ],
          [
            51.506516,
            -0.149295
          ],
          [
            51.506705,
            -0.147834
          ],
          [
            51.506771,
            -0.147407
          ],
          [
            51.506815,
            -0.147076
          ],
          [
            51.506699,
            -0.147887
          ],
          [
            51.506757,
            -0.147502
          ],
          [
            51.506419,
            -0.149958
          ],
          [
            51.50637,
            -0.150404
          ],
          [
            51.506652,
            -0.148256
          ],
          [
            51.506516,
            -0.149295
          ],
          [
            51.506705,
            -0.147834
          ],
          [
            51.506771,
            -0.147407
          ],
          [
            51.506815,
            -0.147076
          ],
          [
            51.506699,
            -0.147887
          ],
          [
            51.506757,
            -0.147502
          ]
        ],
        [
          [
            51.506852,
            -0.146817
          ],
          [
            51.506821,
            -0.146846
          ],
          [
            51.506815,
            -0.147076
          ],
          [
            51.506803,
            -0.146975
          ],
          [
            51.506852,
            -0.146817
          ],
          [
            51.506821,
            -0.146846
          ],
          [
            51.506815,
            -0.147076
          ],
          [
            51.506803,
            -0.146975
          ]
        ],
        [
          [
            51.506984,
            -0.146237
          ],
          [
            51.508147,
            -0.14485
          ],
          [
            51.506903,
            -0.146507
          ],
          [
            51.507759,
            -0.145072
          ],
          [
            51.508081,
            -0.144867
          ],
          [
            51.507973,
            -0.144929
          ],
          [
            51.50752,
            -0.145279
          ],
          [
            51.506852,
            -0.146817
          ],
          [
            51.507249,
            -0.1457
          ],
          [
            51.507634,
            -0.145164
          ],
          [
            51.507567,
            -0.145224
          ],
          [
            51.506929,
            -0.146391
          ],
          [
            51.507096,
            -0.145932
          ],
          [
            51.506856,
            -0.146786
          ],
          [
            51.506984,
            -0.146237
          ],
          [
            51.508147,
            -0.14485
          ],
          [
            51.506903,
            -0.146507
          ],
          [
            51.507759,
            -0.145072
          ],
          [
            51.508081,
            -0.144867
          ],
          [
            51.507973,
            -0.144929
          ],
          [
            51.50752,
            -0.145279
          ],
          [
            51.506852,
            -0.146817
          ],
          [
            51.507249,
            -0.1457
          ],
          [
            51.507634,
            -0.145164
          ],
          [
            51.507567,
            -0.145224
          ],
          [
            51.506929,
            -0.146391
          ],
          [
            51.507096,
            -0.145932
          ],
          [
            51.506856,
            -0.146786
          ]
        ]
      ]
    },
    Camford: {
      ellipse: [
        [
          51.978772,
          -0.569593
        ],
        [
          75e3,
          2e4
        ],
        151.86,
        {
          fill: true,
          fillColor: "brown",
          fillOpacity: 0.1,
          color: "brown"
        }
      ],
      description: "This fictional university town was the home to Professor Presbury in <b>The Adventure of the Creeping Man<b>",
      nodes: []
    },
    Ross: {
      lat: "51.9140804",
      lng: "-2.5838357",
      reference: '"It was nearly four o\'clock when we at last, after passing through the beautiful Stroud Valley, and over the broad gleaming Severn, found ourselves at the pretty little country-town of Ross." - The Boscombe Valley Mystery',
      description: "Despite the name being changed to Ross-on-Wye in 1931 this is pretty little country town really exists!",
      nodes: []
    },
    Dartmoor: {
      elements: [
        1928125
      ],
      nodes: []
    },
    "Oxford Street": {
      lat: 51.51393,
      lng: -0.15381,
      ways: [
        2199751,
        6808986,
        25469620,
        33096423,
        33096424,
        38895571,
        38895572,
        41517346,
        42709093,
        42709094,
        46180198,
        47007863,
        47007864,
        93773949,
        194259717,
        204726687,
        204726887,
        209690397,
        209691454,
        209691456,
        209692629,
        232920161,
        233067163,
        233067166,
        233068399,
        233070703,
        233070704,
        233070705,
        233070706,
        468680743,
        499705520,
        501287734,
        728793122,
        728793125,
        728793128,
        733855113,
        746024419,
        955518102,
        972210875,
        977088264,
        977088265,
        977088266,
        977590194,
        977590195,
        1015989832,
        1106516556
      ],
      mentions: [
        {
          story: "Charles Augustus Milverton",
          quote: "In Oxford Street we picked up a hansom and drove to an address in Hampstead",
          description: ""
        },
        {
          story: "Charles Augustus Milverton",
          quote: 'We were in the middle of our lunch when he suddenly sprang to his feet. "By Jove, Watson; I\'ve got it!" he cried. "Take your hat! Come with me!" He hurried at his top speed down Baker Street and along Oxford Street, until we had almost reached Regent Circus.',
          description: ""
        },
        {
          story: "The Priory School",
          quote: "It would be as well, perhaps, for you to cross it. The Capital and Counties Bank, Oxford Street branch, are my agents."
        },
        {
          story: "The Empty House",
          quote: "In the evening I strolled across the Park, and found myself about six o'clock at the Oxford Street end of Park Lane."
        },
        {
          story: "The Resident Patient",
          quote: "We had crossed Oxford Street and were half way down Harley Street before I could get a word from my companion."
        },
        {
          story: "The Greek Interpreter",
          quote: "We had come out upon Oxford Street and I had ventured some remark as to this being a roundabout way to Kensington, when my words were arrested by the extraordinary conduct of my companion."
        },
        {
          story: "The Final Problem",
          quote: "I went out about mid-day to transact some business in Oxford Street."
        },
        {
          story: "The Hound of the Baskervilles",
          quote: "Dr. Mortimer and Baskerville were still visible about two hundred yards ahead of us in the direction of Oxford Street."
        },
        {
          story: "The Hound of the Baskervilles",
          quote: "Then, still keeping a hundred yards behind, we followed into Oxford Street and so down Regent Street."
        },
        {
          story: "The Hound of the Baskervilles",
          quote: "If you seriously desire to deceive me you must change your tobacconist; for when I see the stub of a cigarette marked Bradley, Oxford Street, I know that my friend Watson is in the neighbourhood."
        }
      ],
      nodes: [
        [
          [
            51.513489,
            -0.158024
          ],
          [
            51.513515,
            -0.157743
          ],
          [
            51.513535,
            -0.15756
          ],
          [
            51.513489,
            -0.158024
          ],
          [
            51.513515,
            -0.157743
          ],
          [
            51.513535,
            -0.15756
          ]
        ],
        [
          [
            51.513289,
            -0.15831
          ],
          [
            51.513489,
            -0.158024
          ],
          [
            51.513382,
            -0.158218
          ],
          [
            51.513336,
            -0.158267
          ],
          [
            51.513444,
            -0.158096
          ],
          [
            51.513419,
            -0.158161
          ],
          [
            51.513289,
            -0.15831
          ],
          [
            51.513489,
            -0.158024
          ],
          [
            51.513382,
            -0.158218
          ],
          [
            51.513336,
            -0.158267
          ],
          [
            51.513444,
            -0.158096
          ],
          [
            51.513419,
            -0.158161
          ]
        ],
        [
          [
            51.515305,
            -0.141966
          ],
          [
            51.515323,
            -0.141822
          ],
          [
            51.515305,
            -0.141966
          ],
          [
            51.515323,
            -0.141822
          ]
        ],
        [
          [
            51.516246,
            -0.132866
          ],
          [
            51.516264,
            -0.132642
          ],
          [
            51.516404,
            -0.130931
          ],
          [
            51.516418,
            -0.130584
          ],
          [
            51.516255,
            -0.132747
          ],
          [
            51.516262,
            -0.132671
          ],
          [
            51.516415,
            -0.130766
          ],
          [
            51.516291,
            -0.132307
          ],
          [
            51.516353,
            -0.131712
          ],
          [
            51.516317,
            -0.132026
          ],
          [
            51.516415,
            -0.130369
          ],
          [
            51.516416,
            -0.130698
          ],
          [
            51.516391,
            -0.131303
          ],
          [
            51.516246,
            -0.132866
          ],
          [
            51.516264,
            -0.132642
          ],
          [
            51.516404,
            -0.130931
          ],
          [
            51.516418,
            -0.130584
          ],
          [
            51.516255,
            -0.132747
          ],
          [
            51.516262,
            -0.132671
          ],
          [
            51.516415,
            -0.130766
          ],
          [
            51.516291,
            -0.132307
          ],
          [
            51.516353,
            -0.131712
          ],
          [
            51.516317,
            -0.132026
          ],
          [
            51.516415,
            -0.130369
          ],
          [
            51.516416,
            -0.130698
          ],
          [
            51.516391,
            -0.131303
          ]
        ],
        [
          [
            51.516246,
            -0.132866
          ],
          [
            51.516131,
            -0.134048
          ],
          [
            51.516165,
            -0.133724
          ],
          [
            51.516209,
            -0.133283
          ],
          [
            51.516226,
            -0.133082
          ],
          [
            51.516231,
            -0.133021
          ],
          [
            51.516144,
            -0.133924
          ],
          [
            51.516246,
            -0.132866
          ],
          [
            51.516131,
            -0.134048
          ],
          [
            51.516165,
            -0.133724
          ],
          [
            51.516209,
            -0.133283
          ],
          [
            51.516226,
            -0.133082
          ],
          [
            51.516231,
            -0.133021
          ],
          [
            51.516144,
            -0.133924
          ]
        ],
        [
          [
            51.514641,
            -0.146914
          ],
          [
            51.514494,
            -0.148241
          ],
          [
            51.514406,
            -0.149023
          ],
          [
            51.514468,
            -0.148476
          ],
          [
            51.51453,
            -0.147975
          ],
          [
            51.514426,
            -0.148842
          ],
          [
            51.514519,
            -0.14806
          ],
          [
            51.51454,
            -0.147898
          ],
          [
            51.514622,
            -0.147078
          ],
          [
            51.514628,
            -0.147031
          ],
          [
            51.514417,
            -0.148911
          ],
          [
            51.514394,
            -0.14911
          ],
          [
            51.514641,
            -0.146914
          ],
          [
            51.514494,
            -0.148241
          ],
          [
            51.514406,
            -0.149023
          ],
          [
            51.514468,
            -0.148476
          ],
          [
            51.51453,
            -0.147975
          ],
          [
            51.514426,
            -0.148842
          ],
          [
            51.514519,
            -0.14806
          ],
          [
            51.51454,
            -0.147898
          ],
          [
            51.514622,
            -0.147078
          ],
          [
            51.514628,
            -0.147031
          ],
          [
            51.514417,
            -0.148911
          ],
          [
            51.514394,
            -0.14911
          ]
        ],
        [
          [
            51.514161,
            -0.15136
          ],
          [
            51.514216,
            -0.150735
          ],
          [
            51.514171,
            -0.151249
          ],
          [
            51.514179,
            -0.151161
          ],
          [
            51.514161,
            -0.15136
          ],
          [
            51.514216,
            -0.150735
          ],
          [
            51.514171,
            -0.151249
          ],
          [
            51.514179,
            -0.151161
          ]
        ],
        [
          [
            51.513378,
            -0.158724
          ],
          [
            51.513489,
            -0.158024
          ],
          [
            51.5135,
            -0.158268
          ],
          [
            51.513465,
            -0.158576
          ],
          [
            51.513514,
            -0.158122
          ],
          [
            51.513487,
            -0.158378
          ],
          [
            51.513444,
            -0.158649
          ],
          [
            51.513489,
            -0.158353
          ],
          [
            51.513481,
            -0.158425
          ],
          [
            51.513378,
            -0.158724
          ],
          [
            51.513489,
            -0.158024
          ],
          [
            51.5135,
            -0.158268
          ],
          [
            51.513465,
            -0.158576
          ],
          [
            51.513514,
            -0.158122
          ],
          [
            51.513487,
            -0.158378
          ],
          [
            51.513444,
            -0.158649
          ],
          [
            51.513489,
            -0.158353
          ],
          [
            51.513481,
            -0.158425
          ]
        ],
        [
          [
            51.51372,
            -0.155948
          ],
          [
            51.513883,
            -0.153811
          ],
          [
            51.513807,
            -0.154719
          ],
          [
            51.513868,
            -0.15402
          ],
          [
            51.513862,
            -0.154098
          ],
          [
            51.513738,
            -0.155787
          ],
          [
            51.513746,
            -0.155705
          ],
          [
            51.513801,
            -0.15479
          ],
          [
            51.513813,
            -0.154645
          ],
          [
            51.51372,
            -0.155948
          ],
          [
            51.513883,
            -0.153811
          ],
          [
            51.513807,
            -0.154719
          ],
          [
            51.513868,
            -0.15402
          ],
          [
            51.513862,
            -0.154098
          ],
          [
            51.513738,
            -0.155787
          ],
          [
            51.513746,
            -0.155705
          ],
          [
            51.513801,
            -0.15479
          ],
          [
            51.513813,
            -0.154645
          ]
        ],
        [
          [
            51.513883,
            -0.153811
          ],
          [
            51.513903,
            -0.153576
          ],
          [
            51.51391,
            -0.153494
          ],
          [
            51.51401,
            -0.152678
          ],
          [
            51.513949,
            -0.153177
          ],
          [
            51.513945,
            -0.15321
          ],
          [
            51.513883,
            -0.153811
          ],
          [
            51.513903,
            -0.153576
          ],
          [
            51.51391,
            -0.153494
          ],
          [
            51.51401,
            -0.152678
          ],
          [
            51.513949,
            -0.153177
          ],
          [
            51.513945,
            -0.15321
          ]
        ],
        [
          [
            51.514641,
            -0.146914
          ],
          [
            51.514727,
            -0.146257
          ],
          [
            51.514703,
            -0.146455
          ],
          [
            51.514678,
            -0.146627
          ],
          [
            51.514666,
            -0.146718
          ],
          [
            51.514801,
            -0.145686
          ],
          [
            51.514783,
            -0.145825
          ],
          [
            51.514815,
            -0.145582
          ],
          [
            51.514832,
            -0.145448
          ],
          [
            51.514899,
            -0.144937
          ],
          [
            51.514938,
            -0.144652
          ],
          [
            51.514746,
            -0.146109
          ],
          [
            51.514708,
            -0.146401
          ],
          [
            51.514641,
            -0.146914
          ],
          [
            51.514727,
            -0.146257
          ],
          [
            51.514703,
            -0.146455
          ],
          [
            51.514678,
            -0.146627
          ],
          [
            51.514666,
            -0.146718
          ],
          [
            51.514801,
            -0.145686
          ],
          [
            51.514783,
            -0.145825
          ],
          [
            51.514815,
            -0.145582
          ],
          [
            51.514832,
            -0.145448
          ],
          [
            51.514899,
            -0.144937
          ],
          [
            51.514938,
            -0.144652
          ],
          [
            51.514746,
            -0.146109
          ],
          [
            51.514708,
            -0.146401
          ]
        ],
        [
          [
            51.51498,
            -0.144316
          ],
          [
            51.514997,
            -0.144192
          ],
          [
            51.515004,
            -0.144136
          ],
          [
            51.515036,
            -0.143877
          ],
          [
            51.51498,
            -0.144316
          ],
          [
            51.514997,
            -0.144192
          ],
          [
            51.515004,
            -0.144136
          ],
          [
            51.515036,
            -0.143877
          ]
        ],
        [
          [
            51.515305,
            -0.141966
          ],
          [
            51.515294,
            -0.142071
          ],
          [
            51.515305,
            -0.141966
          ],
          [
            51.515294,
            -0.142071
          ]
        ],
        [
          [
            51.516131,
            -0.134048
          ],
          [
            51.516087,
            -0.134487
          ],
          [
            51.516075,
            -0.134588
          ],
          [
            51.516097,
            -0.134396
          ],
          [
            51.516131,
            -0.134048
          ],
          [
            51.516087,
            -0.134487
          ],
          [
            51.516075,
            -0.134588
          ],
          [
            51.516097,
            -0.134396
          ]
        ],
        [
          [
            51.515828,
            -0.136756
          ],
          [
            51.515731,
            -0.137651
          ],
          [
            51.51553,
            -0.13963
          ],
          [
            51.515636,
            -0.138575
          ],
          [
            51.515558,
            -0.139287
          ],
          [
            51.515496,
            -0.13995
          ],
          [
            51.515682,
            -0.138115
          ],
          [
            51.515816,
            -0.136859
          ],
          [
            51.51582,
            -0.136826
          ],
          [
            51.515828,
            -0.136756
          ],
          [
            51.515731,
            -0.137651
          ],
          [
            51.51553,
            -0.13963
          ],
          [
            51.515636,
            -0.138575
          ],
          [
            51.515558,
            -0.139287
          ],
          [
            51.515496,
            -0.13995
          ],
          [
            51.515682,
            -0.138115
          ],
          [
            51.515816,
            -0.136859
          ],
          [
            51.51582,
            -0.136826
          ]
        ],
        [
          [
            51.514257,
            -0.150248
          ],
          [
            51.514299,
            -0.149882
          ],
          [
            51.514381,
            -0.149201
          ],
          [
            51.514364,
            -0.149325
          ],
          [
            51.514269,
            -0.150141
          ],
          [
            51.514272,
            -0.150114
          ],
          [
            51.514345,
            -0.14948
          ],
          [
            51.514309,
            -0.149796
          ],
          [
            51.514354,
            -0.14941
          ],
          [
            51.514257,
            -0.150248
          ],
          [
            51.514299,
            -0.149882
          ],
          [
            51.514381,
            -0.149201
          ],
          [
            51.514364,
            -0.149325
          ],
          [
            51.514269,
            -0.150141
          ],
          [
            51.514272,
            -0.150114
          ],
          [
            51.514345,
            -0.14948
          ],
          [
            51.514309,
            -0.149796
          ],
          [
            51.514354,
            -0.14941
          ]
        ],
        [
          [
            51.514257,
            -0.150248
          ],
          [
            51.514216,
            -0.150735
          ],
          [
            51.514251,
            -0.150322
          ],
          [
            51.514249,
            -0.150362
          ],
          [
            51.514254,
            -0.15029
          ],
          [
            51.514257,
            -0.150248
          ],
          [
            51.514216,
            -0.150735
          ],
          [
            51.514251,
            -0.150322
          ],
          [
            51.514249,
            -0.150362
          ],
          [
            51.514254,
            -0.15029
          ]
        ],
        [
          [
            51.515412,
            -0.140661
          ],
          [
            51.515261,
            -0.141803
          ],
          [
            51.515394,
            -0.140807
          ],
          [
            51.51527,
            -0.141733
          ],
          [
            51.515329,
            -0.141291
          ],
          [
            51.515412,
            -0.140661
          ],
          [
            51.515261,
            -0.141803
          ],
          [
            51.515394,
            -0.140807
          ],
          [
            51.51527,
            -0.141733
          ],
          [
            51.515329,
            -0.141291
          ]
        ],
        [
          [
            51.515614,
            -0.139364
          ],
          [
            51.515509,
            -0.14043
          ],
          [
            51.515559,
            -0.139868
          ],
          [
            51.515669,
            -0.13876
          ],
          [
            51.515614,
            -0.139364
          ],
          [
            51.515509,
            -0.14043
          ],
          [
            51.515559,
            -0.139868
          ],
          [
            51.515669,
            -0.13876
          ]
        ],
        [
          [
            51.515456,
            -0.140686
          ],
          [
            51.515509,
            -0.14043
          ],
          [
            51.515456,
            -0.140686
          ],
          [
            51.515509,
            -0.14043
          ]
        ],
        [
          [
            51.515229,
            -0.142053
          ],
          [
            51.515243,
            -0.141946
          ],
          [
            51.515229,
            -0.142053
          ],
          [
            51.515243,
            -0.141946
          ]
        ],
        [
          [
            51.514161,
            -0.15136
          ],
          [
            51.514024,
            -0.152557
          ],
          [
            51.51415,
            -0.151454
          ],
          [
            51.514144,
            -0.151512
          ],
          [
            51.51401,
            -0.152678
          ],
          [
            51.514036,
            -0.152453
          ],
          [
            51.514088,
            -0.151997
          ],
          [
            51.514134,
            -0.151599
          ],
          [
            51.514042,
            -0.152403
          ],
          [
            51.514095,
            -0.151927
          ],
          [
            51.514161,
            -0.15136
          ],
          [
            51.514024,
            -0.152557
          ],
          [
            51.51415,
            -0.151454
          ],
          [
            51.514144,
            -0.151512
          ],
          [
            51.51401,
            -0.152678
          ],
          [
            51.514036,
            -0.152453
          ],
          [
            51.514088,
            -0.151997
          ],
          [
            51.514134,
            -0.151599
          ],
          [
            51.514042,
            -0.152403
          ],
          [
            51.514095,
            -0.151927
          ]
        ],
        [
          [
            51.515243,
            -0.142516
          ],
          [
            51.515269,
            -0.1423
          ],
          [
            51.515206,
            -0.142567
          ],
          [
            51.515243,
            -0.142516
          ],
          [
            51.515269,
            -0.1423
          ],
          [
            51.515206,
            -0.142567
          ]
        ],
        [
          [
            51.515229,
            -0.142053
          ],
          [
            51.515212,
            -0.142207
          ],
          [
            51.515229,
            -0.142053
          ],
          [
            51.515212,
            -0.142207
          ]
        ],
        [
          [
            51.515134,
            -0.143173
          ],
          [
            51.515076,
            -0.143583
          ],
          [
            51.515036,
            -0.143877
          ],
          [
            51.515134,
            -0.143173
          ],
          [
            51.515076,
            -0.143583
          ],
          [
            51.515036,
            -0.143877
          ]
        ],
        [
          [
            51.51518,
            -0.14249
          ],
          [
            51.515212,
            -0.142207
          ],
          [
            51.515206,
            -0.142567
          ],
          [
            51.51518,
            -0.14249
          ],
          [
            51.515212,
            -0.142207
          ],
          [
            51.515206,
            -0.142567
          ]
        ],
        [
          [
            51.515294,
            -0.142071
          ],
          [
            51.515276,
            -0.142226
          ],
          [
            51.515294,
            -0.142071
          ],
          [
            51.515276,
            -0.142226
          ]
        ],
        [
          [
            51.515456,
            -0.140686
          ],
          [
            51.515438,
            -0.140826
          ],
          [
            51.515323,
            -0.141822
          ],
          [
            51.515353,
            -0.141432
          ],
          [
            51.515456,
            -0.140686
          ],
          [
            51.515438,
            -0.140826
          ],
          [
            51.515323,
            -0.141822
          ],
          [
            51.515353,
            -0.141432
          ]
        ],
        [
          [
            51.515261,
            -0.141803
          ],
          [
            51.515243,
            -0.141946
          ],
          [
            51.515261,
            -0.141803
          ],
          [
            51.515243,
            -0.141946
          ]
        ],
        [
          [
            51.51498,
            -0.144316
          ],
          [
            51.514969,
            -0.144404
          ],
          [
            51.514964,
            -0.144439
          ],
          [
            51.514938,
            -0.144652
          ],
          [
            51.51498,
            -0.144316
          ],
          [
            51.514969,
            -0.144404
          ],
          [
            51.514964,
            -0.144439
          ],
          [
            51.514938,
            -0.144652
          ]
        ],
        [
          [
            51.513576,
            -0.157161
          ],
          [
            51.513535,
            -0.15756
          ],
          [
            51.513543,
            -0.157485
          ],
          [
            51.513615,
            -0.156827
          ],
          [
            51.513652,
            -0.156546
          ],
          [
            51.513585,
            -0.157082
          ],
          [
            51.513567,
            -0.157246
          ],
          [
            51.513576,
            -0.157161
          ],
          [
            51.513535,
            -0.15756
          ],
          [
            51.513543,
            -0.157485
          ],
          [
            51.513615,
            -0.156827
          ],
          [
            51.513652,
            -0.156546
          ],
          [
            51.513585,
            -0.157082
          ],
          [
            51.513567,
            -0.157246
          ]
        ],
        [
          [
            51.51372,
            -0.155948
          ],
          [
            51.513697,
            -0.156164
          ],
          [
            51.513687,
            -0.156247
          ],
          [
            51.513652,
            -0.156546
          ],
          [
            51.51372,
            -0.155948
          ],
          [
            51.513697,
            -0.156164
          ],
          [
            51.513687,
            -0.156247
          ],
          [
            51.513652,
            -0.156546
          ]
        ],
        [
          [
            51.516067,
            -0.134647
          ],
          [
            51.516036,
            -0.134691
          ],
          [
            51.516024,
            -0.134809
          ],
          [
            51.515956,
            -0.135428
          ],
          [
            51.515943,
            -0.135606
          ],
          [
            51.515939,
            -0.135647
          ],
          [
            51.515933,
            -0.135715
          ],
          [
            51.516067,
            -0.134647
          ],
          [
            51.516036,
            -0.134691
          ],
          [
            51.516024,
            -0.134809
          ],
          [
            51.515956,
            -0.135428
          ],
          [
            51.515943,
            -0.135606
          ],
          [
            51.515939,
            -0.135647
          ],
          [
            51.515933,
            -0.135715
          ]
        ],
        [
          [
            51.515817,
            -0.137315
          ],
          [
            51.515862,
            -0.136879
          ],
          [
            51.515781,
            -0.137656
          ],
          [
            51.515851,
            -0.13698
          ],
          [
            51.515865,
            -0.136845
          ],
          [
            51.51587,
            -0.136787
          ],
          [
            51.515817,
            -0.137315
          ],
          [
            51.515862,
            -0.136879
          ],
          [
            51.515781,
            -0.137656
          ],
          [
            51.515851,
            -0.13698
          ],
          [
            51.515865,
            -0.136845
          ],
          [
            51.51587,
            -0.136787
          ]
        ],
        [
          [
            51.515932,
            -0.13616
          ],
          [
            51.515943,
            -0.136062
          ],
          [
            51.515954,
            -0.135954
          ],
          [
            51.515888,
            -0.136594
          ],
          [
            51.51587,
            -0.136787
          ],
          [
            51.515962,
            -0.135887
          ],
          [
            51.515932,
            -0.13616
          ],
          [
            51.515943,
            -0.136062
          ],
          [
            51.515954,
            -0.135954
          ],
          [
            51.515888,
            -0.136594
          ],
          [
            51.51587,
            -0.136787
          ],
          [
            51.515962,
            -0.135887
          ]
        ],
        [
          [
            51.515412,
            -0.140661
          ],
          [
            51.515462,
            -0.14029
          ],
          [
            51.515496,
            -0.13995
          ],
          [
            51.515428,
            -0.140544
          ],
          [
            51.515412,
            -0.140661
          ],
          [
            51.515462,
            -0.14029
          ],
          [
            51.515496,
            -0.13995
          ],
          [
            51.515428,
            -0.140544
          ]
        ],
        [
          [
            51.515919,
            -0.135861
          ],
          [
            51.515842,
            -0.136628
          ],
          [
            51.515846,
            -0.136589
          ],
          [
            51.5159,
            -0.136046
          ],
          [
            51.515911,
            -0.135938
          ],
          [
            51.51585,
            -0.136546
          ],
          [
            51.515919,
            -0.135861
          ],
          [
            51.515842,
            -0.136628
          ],
          [
            51.515846,
            -0.136589
          ],
          [
            51.5159,
            -0.136046
          ],
          [
            51.515911,
            -0.135938
          ],
          [
            51.51585,
            -0.136546
          ]
        ],
        [
          [
            51.515709,
            -0.138327
          ],
          [
            51.515669,
            -0.13876
          ],
          [
            51.515781,
            -0.137656
          ],
          [
            51.515709,
            -0.138327
          ],
          [
            51.515669,
            -0.13876
          ],
          [
            51.515781,
            -0.137656
          ]
        ],
        [
          [
            51.516067,
            -0.134647
          ],
          [
            51.516075,
            -0.134588
          ],
          [
            51.516067,
            -0.134647
          ],
          [
            51.516075,
            -0.134588
          ]
        ],
        [
          [
            51.516067,
            -0.134647
          ],
          [
            51.516036,
            -0.135128
          ],
          [
            51.516057,
            -0.134941
          ],
          [
            51.51608,
            -0.134712
          ],
          [
            51.515982,
            -0.135665
          ],
          [
            51.516069,
            -0.134827
          ],
          [
            51.515962,
            -0.135887
          ],
          [
            51.516067,
            -0.134647
          ],
          [
            51.516036,
            -0.135128
          ],
          [
            51.516057,
            -0.134941
          ],
          [
            51.51608,
            -0.134712
          ],
          [
            51.515982,
            -0.135665
          ],
          [
            51.516069,
            -0.134827
          ],
          [
            51.515962,
            -0.135887
          ]
        ],
        [
          [
            51.515919,
            -0.135861
          ],
          [
            51.515933,
            -0.135715
          ],
          [
            51.515919,
            -0.135861
          ],
          [
            51.515933,
            -0.135715
          ]
        ],
        [
          [
            51.515828,
            -0.136756
          ],
          [
            51.515842,
            -0.136628
          ],
          [
            51.515828,
            -0.136756
          ],
          [
            51.515842,
            -0.136628
          ]
        ],
        [
          [
            51.515191,
            -0.142698
          ],
          [
            51.515206,
            -0.142567
          ],
          [
            51.515191,
            -0.142698
          ],
          [
            51.515206,
            -0.142567
          ]
        ],
        [
          [
            51.515269,
            -0.1423
          ],
          [
            51.515276,
            -0.142226
          ],
          [
            51.515269,
            -0.1423
          ],
          [
            51.515276,
            -0.142226
          ]
        ],
        [
          [
            51.514381,
            -0.149201
          ],
          [
            51.514394,
            -0.14911
          ],
          [
            51.514381,
            -0.149201
          ],
          [
            51.514394,
            -0.14911
          ]
        ],
        [
          [
            51.515191,
            -0.142698
          ],
          [
            51.515134,
            -0.143173
          ],
          [
            51.515191,
            -0.142698
          ],
          [
            51.515134,
            -0.143173
          ]
        ]
      ]
    }
  };

  // source/index.js
  var import_leaflet2 = __toESM(require_leaflet());

  // source/l.ellipse.min.js
  L.SVG.include({ _updateEllipse: function(a) {
    var c = (a._point, a._radiusX), d = a._radiusY, e = a._tiltDeg, f = a._endPointParams, g = "M" + f.x0 + "," + f.y0 + "A" + c + "," + d + "," + e + "," + f.largeArc + "," + f.sweep + "," + f.x1 + "," + f.y1 + " z";
    this._setPath(a, g);
  } }), L.Canvas.include({ _updateEllipse: function(a) {
    if (!a._empty()) {
      var b = a._point, c = this._ctx, d = a._radiusX, e = (a._radiusY || d) / d;
      this._drawnLayers[a._leaflet_id] = a, c.save(), c.translate(b.x, b.y), 0 !== a._tilt && c.rotate(a._tilt), 1 !== e && c.scale(1, e), c.beginPath(), c.arc(0, 0, d, 0, 2 * Math.PI), c.restore(), this._fillStroke(c, a);
    }
  } }), L.Ellipse = L.Path.extend({ options: { fill: true, startAngle: 0, endAngle: 359.9 }, initialize: function(a, b, c, d) {
    L.setOptions(this, d), this._latlng = L.latLng(a), c ? this._tiltDeg = c : this._tiltDeg = 0, b && (this._mRadiusX = b[0], this._mRadiusY = b[1]);
  }, setRadius: function(a) {
    return this._mRadiusX = a[0], this._mRadiusY = a[1], this.redraw();
  }, getRadius: function() {
    return new L.point(this._mRadiusX, this._mRadiusY);
  }, setTilt: function(a) {
    return this._tiltDeg = a, this.redraw();
  }, getBounds: function() {
    var a = this._getLngRadius(), b = this._getLatRadius(), c = this._latlng;
    return new L.LatLngBounds([c.lat - b, c.lng - a], [c.lat + b, c.lng + a]);
  }, setLatLng: function(a) {
    return this._latlng = L.latLng(a), this.redraw(), this.fire("move", { latlng: this._latlng });
  }, getLatLng: function() {
    return this._latlng;
  }, setStyle: L.Path.prototype.setStyle, _project: function() {
    var a = this._getLngRadius(), b = this._getLatRadius(), c = this._latlng, d = this._map.latLngToLayerPoint([c.lat, c.lng - a]), e = this._map.latLngToLayerPoint([c.lat - b, c.lng]);
    this._point = this._map.latLngToLayerPoint(c), this._radiusX = Math.max(this._point.x - d.x, 1), this._radiusY = Math.max(e.y - this._point.y, 1), this._tilt = Math.PI * this._tiltDeg / 180, this._endPointParams = this._centerPointToEndPoint(), this._updateBounds();
  }, _updateBounds: function() {
    var a = Math.sin(this._tilt), b = Math.cos(this._tilt), c = a * a, d = b * b, e = this._radiusX * this._radiusX, f = this._radiusY * this._radiusY, g = Math.sqrt(e * d + f * c), h = Math.sqrt(e * c + f * d), i = this._clickTolerance(), j = [g + i, h + i];
    this._pxBounds = new L.Bounds(this._point.subtract(j), this._point.add(j));
  }, _update: function() {
    this._map && this._updatePath();
  }, _updatePath: function() {
    this._renderer._updateEllipse(this);
  }, _getLatRadius: function() {
    return this._mRadiusY / 40075017 * 360;
  }, _getLngRadius: function() {
    return this._mRadiusX / 40075017 * 360 / Math.cos(Math.PI / 180 * this._latlng.lat);
  }, _centerPointToEndPoint: function() {
    var a = this._point, b = this._radiusX, c = this._radiusY, d = (this.options.startAngle + this.options.endAngle) * (Math.PI / 180), e = this.options.startAngle * (Math.PI / 180), f = this.options.endAngle, g = this._tiltDeg * (Math.PI / 180), h = a.x + Math.cos(g) * b * Math.cos(e) + Math.sin(-g) * c * Math.sin(e), i = a.y + Math.sin(g) * b * Math.cos(e) + Math.cos(g) * c * Math.sin(e), j = a.x + Math.cos(g) * b * Math.cos(d) + Math.sin(-g) * c * Math.sin(d), k = a.y + Math.sin(g) * b * Math.cos(d) + Math.cos(g) * c * Math.sin(d), l = f > 180 ? 1 : 0, m = f > 0 ? 1 : 0;
    return { x0: h, y0: i, tilt: g, largeArc: l, sweep: m, x1: j, y1: k };
  }, _empty: function() {
    return this._radiusX && this._radiusY && !this._renderer._bounds.intersects(this._pxBounds);
  }, _containsPoint: function(a) {
    var b = Math.sin(this._tilt), c = Math.cos(this._tilt), d = a.x - this._point.x, e = a.y - this._point.y, f = c * d + b * e, g = b * d - c * e;
    return f * f / (this._radiusX * this._radiusX) + g * g / (this._radiusY * this._radiusY) <= 1;
  } }), L.ellipse = function(a, b, c, d) {
    return new L.Ellipse(a, b, c, d);
  };

  // source/index.js
  L.Icon.Default.prototype.options.iconUrl = "assets/sherlock-icon.svg";
  L.Icon.Default.prototype.options.shadowUrl = "assets/marker-shadow.png";
  description_template = function(name, description, reference) {
    if (reference) {
      return "<h1 class='place_name'>".concat(name, "</h1>\n    <p class='description'>").concat(description, "</p>\n    <p class='reference'>").concat(reference, "</p>");
    } else {
      return "<h1>".concat(name, "</h1>\n    <p class='description'>").concat(description, "</p>");
    }
  };
  function load_map() {
    var map = L.map("map").setView([51.5233879, -0.1582367], 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    for (place_name in places_default) {
      let place = places_default[place_name];
      if ("lat" in place && "lng" in place) {
        popup = L.marker([place["lat"], place["lng"]]).addTo(map).bindPopup(description_template(place_name, place.description, place.reference));
        console.log("Added popup for ".concat(place_name));
        if (place_name == "221b Baker Street")
          popup.openPopup();
      }
      if ("nodes" in place) {
        for (path in place.nodes) {
          L.polyline(place.nodes[path], { color: "brown" }).addTo(map);
          console.log("Added way for ".concat(place_name));
        }
      }
      if ("ellipse" in place) {
        console.log(...place.ellipse);
        L.ellipse(...place.ellipse).addTo(map).bindPopup(description_template(place_name, place.description, place.reference));
        console.log("Added ellipse for ".concat(place_name));
      }
    }
  }
  window.addEventListener("load", function() {
    document.getElementById("theme_toggle").addEventListener("click", function() {
      document.documentElement.classList.toggle("dark-theme");
    });
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode)
      document.documentElement.classList.add("dark-theme");
    console.log("Page loaded!");
    load_map();
  });
})();
/*! Bundled license information:

leaflet/dist/leaflet.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)
*/
//# sourceMappingURL=index.js.map
