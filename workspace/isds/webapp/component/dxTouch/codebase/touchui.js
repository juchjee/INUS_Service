/*
Copyright Dinamenta, UAB http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
You also allowed using current version of the library in non-GPL projects for free
(see license terms for details or contact us at sales@dhtmlx.com)

Home page: http://www.dhtmlx.com/touch
Docs & samples: http://docs.dhtmlx.com/touch/
*/
window.dhx || (dhx = {});
dhx.version = "3.0";
dhx.codebase = "./";
dhx.name = "Core";
dhx.copy = function(a) {
    var b = dhx.copy.Ug;
    b.prototype = a;
    return new b
};
dhx.copy.Ug = function() {};
dhx.extend = function(a, b, c) {
    a.dc && (a = a.dc[0]);
    for (var d in b)
        if (!a[d] || c) a[d] = b[d];
    b.defaults && dhx.extend(a.defaults, b.defaults);
    b.$init && b.$init.call(a);
    return a
};
dhx.fullCopy = function(a) {
    var b = a.length ? [] : {};
    arguments.length > 1 && (b = arguments[0], a = arguments[1]);
    for (var c in a) a[c] && typeof a[c] == "object" && !dhx.isDate(a[c]) ? (b[c] = a[c].length ? [] : {}, dhx.fullCopy(b[c], a[c])) : b[c] = a[c];
    return b
};
dhx.single = function(a) {
    var b = null,
        c = function(c) {
            b || (b = new a({}));
            b.mf && b.mf.apply(b, arguments);
            return b
        };
    return c
};
dhx.protoUI = function() {
    var a = arguments,
        b = a[0].name,
        c = function(d) {
            if (a) {
                for (var e = [a[0]], f = 1; f < a.length; f++) e[f] = a[f], e[f].dc && (e[f] = e[f].call(dhx)), e[f].prototype && e[f].prototype.name && (dhx.ui[e[f].prototype.name] = e[f]);
                dhx.ui[b] = dhx.proto.apply(dhx, e);
                if (c.ub)
                    for (f = 0; f < c.ub.length; f++) dhx.Type(dhx.ui[b], c.ub[f]);
                c = a = null
            }
            return this != dhx ? new dhx.ui[b](d) : dhx.ui[b]
        };
    c.dc = arguments;
    return dhx.ui[b] = c
};
dhx.proto = function() {
    for (var a = arguments, b = a[0], c = !! b.$init, d = [], e = a.length - 1; e > 0; e--) {
        if (typeof a[e] == "function") a[e] = a[e].prototype;
        a[e].$init && d.push(a[e].$init);
        if (a[e].defaults) {
            var f = a[e].defaults;
            if (!b.defaults) b.defaults = {};
            for (var g in f) dhx.isUndefined(b.defaults[g]) && (b.defaults[g] = f[g])
        }
        if (a[e].type && b.type)
            for (g in a[e].type) b.type[g] || (b.type[g] = a[e].type[g]);
        for (var h in a[e]) b[h] || (b[h] = a[e][h])
    }
    c && d.push(b.$init);
    b.$init = function() {
        for (var a = 0; a < d.length; a++) d[a].apply(this, arguments)
    };
    var i = function(a) {
        this.$ready = [];
        this.$init(a);
        this.cb && this.cb(a, this.defaults);
        for (var b = 0; b < this.$ready.length; b++) this.$ready[b].call(this)
    };
    i.prototype = b;
    b = a = null;
    return i
};
dhx.bind = function(a, b) {
    return function() {
        return a.apply(b, arguments)
    }
};
dhx.require = function(a) {
    dhx.Ye[a] || (dhx.exec(dhx.ajax().sync().get(dhx.codebase + a).responseText), dhx.Ye[a] = !0)
};
dhx.Ye = {};
dhx.exec = function(a) {
    window.execScript ? window.execScript(a) : window.eval(a)
};
dhx.wrap = function(a, b) {
    return !a ? b : function() {
        var c = a.apply(this, arguments);
        b.apply(this, arguments);
        return c
    }
};
dhx.isUndefined = function(a) {
    return typeof a == "undefined"
};
dhx.delay = function(a, b, c, d) {
    return window.setTimeout(function() {
        var d = a.apply(b, c || []);
        a = b = c = null;
        return d
    }, d || 1)
};
dhx.uid = function() {
    if (!this.Ed) this.Ed = (new Date).valueOf();
    this.Ed++;
    return this.Ed
};
dhx.toNode = function(a) {
    return typeof a == "string" ? document.getElementById(a) : a
};
dhx.toArray = function(a) {
    return dhx.extend(a || [], dhx.PowerArray, !0)
};
dhx.toFunctor = function(a) {
    return typeof a == "string" ? eval(a) : a
};
dhx.isArray = function(a) {
    return Object.prototype.toString.call(a) === "[object Array]"
};
dhx.isDate = function(a) {
    return a instanceof Date
};
dhx.s = {};
dhx.event = function(a, b, c, d) {
    var a = dhx.toNode(a),
        e = dhx.uid();
    d && (c = dhx.bind(c, d));
    dhx.s[e] = [a, b, c];
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    return e
};
dhx.eventRemove = function(a) {
    if (a) {
        var b = dhx.s[a];
        b[0].removeEventListener ? b[0].removeEventListener(b[1], b[2], !1) : b[0].detachEvent && b[0].detachEvent("on" + b[1], b[2]);
        delete this.s[a]
    }
};
dhx.error = function() {
    if (dhx.debug !== !1) debugger
};
dhx.EventSystem = {
    $init: function() {
        this.s = {};
        this.Ua = {};
        this.ya = {}
    },
    blockEvent: function() {
        this.s.Xd = !0
    },
    unblockEvent: function() {
        this.s.Xd = !1
    },
    mapEvent: function(a) {
        dhx.extend(this.ya, a, !0)
    },
    on_setter: function(a) {
        if (a)
            for (var b in a) typeof a[b] == "function" && this.attachEvent(b, a[b])
    },
    callEvent: function(a, b) {
        if (this.s.Xd) return !0;
        var a = a.toLowerCase(),
            c = this.s[a.toLowerCase()],
            d = !0;
        if (c)
            for (var e = 0; e < c.length; e++)
                if (c[e].apply(this, b || []) === !1) d = !1;
        this.ya[a] && !this.ya[a].callEvent(a, b) && (d = !1);
        return d
    },
    attachEvent: function(a, b, c) {
        var a = a.toLowerCase(),
            c = c || dhx.uid(),
            b = dhx.toFunctor(b),
            d = this.s[a] || dhx.toArray();
        d.push(b);
        this.s[a] = d;
        this.Ua[c] = {
            f: b,
            t: a
        };
        return c
    },
    detachEvent: function(a) {
        if (this.Ua[a]) {
            var b = this.Ua[a].t,
                c = this.Ua[a].f,
                d = this.s[b];
            d.remove(c);
            delete this.Ua[a]
        }
    },
    hasEvent: function(a) {
        a = a.toLowerCase();
        return this.s[a] ? !0 : !1
    }
};
dhx.extend(dhx, dhx.EventSystem);
dhx.PowerArray = {
    removeAt: function(a, b) {
        a >= 0 && this.splice(a, b || 1)
    },
    remove: function(a) {
        this.removeAt(this.find(a))
    },
    insertAt: function(a, b) {
        if (!b && b !== 0) this.push(a);
        else {
            var c = this.splice(b, this.length - b);
            this[b] = a;
            this.push.apply(this, c)
        }
    },
    find: function(a) {
        for (var b = 0; b < this.length; b++)
            if (a == this[b]) return b;
        return -1
    },
    each: function(a, b) {
        for (var c = 0; c < this.length; c++) a.call(b || this, this[c])
    },
    map: function(a, b) {
        for (var c = 0; c < this.length; c++) this[c] = a.call(b || this, this[c]);
        return this
    }
};
dhx.env = {};
(function() {
    if (navigator.userAgent.indexOf("Mobile") != -1) dhx.env.mobile = !0;
    if (dhx.env.mobile || navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1) dhx.env.touch = !0;
    navigator.userAgent.indexOf("Opera") != -1 ? dhx.env.isOpera = !0 : (dhx.env.isIE = !! document.all, dhx.env.isFF = !document.all, dhx.env.isWebKit = navigator.userAgent.indexOf("KHTML") != -1, dhx.env.isSafari = dhx.env.isWebKit && navigator.userAgent.indexOf("Mac") != -1);
    if (navigator.userAgent.toLowerCase().indexOf("android") != -1) dhx.env.isAndroid = !0;
    dhx.env.transform = !1;
    dhx.env.transition = !1;
    for (var a = {
        names: ["transform", "transition"],
        transform: ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"],
        transition: ["transition", "WebkitTransition", "MozTransition", "OTransition", "msTransition"]
    }, b = document.createElement("DIV"), c = 0; c < a.names.length; c++)
        for (var d = a[a.names[c]], e = 0; e < d.length; e++)
            if (typeof b.style[d[e]] != "undefined") {
                dhx.env[a.names[c]] = d[e];
                break
            }
    b.style[dhx.env.transform] = "translate3d(0,0,0)";
    dhx.env.translate = b.style[dhx.env.transform] ? "translate3d" : "translate";
    var f = "",
        g = !1;
    dhx.env.isOpera && (f = "-o-", g = "O");
    dhx.env.isFF && (f = "-Moz-");
    dhx.env.isWebKit && (f = "-webkit-");
    dhx.env.isIE && (f = "-ms-");
    dhx.env.transformCSSPrefix = f;
    dhx.env.transformPrefix = g || dhx.env.transformCSSPrefix.replace(/-/gi, "");
    dhx.env.transitionEnd = dhx.env.transformCSSPrefix == "-Moz-" ? "transitionend" : dhx.env.transformPrefix + "TransitionEnd"
})();
dhx.env.svg = function() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
}();
dhx.html = {
    index: function(a) {
        for (var b = 0; a = a.previousSibling;) b++;
        return b
    },
    addStyle: function(a) {
        var b = document.createElement("style");
        b.setAttribute("type", "text/css");
        b.setAttribute("media", "screen");
        b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    create: function(a, b, c) {
        var b = b || {}, d = document.createElement(a),
            e;
        for (e in b) d.setAttribute(e, b[e]);
        if (b.style) d.style.cssText = b.style;
        if (b["class"]) d.className = b["class"];
        if (c) d.innerHTML = c;
        return d
    },
    getValue: function(a) {
        a = dhx.toNode(a);
        return !a ? "" : dhx.isUndefined(a.value) ? a.innerHTML : a.value
    },
    remove: function(a) {
        if (a instanceof Array)
            for (var b = 0; b < a.length; b++) this.remove(a[b]);
        else a && a.parentNode && a.parentNode.removeChild(a)
    },
    insertBefore: function(a, b, c) {
        a && (b && b.parentNode ? b.parentNode.insertBefore(a, b) : c.appendChild(a))
    },
    locate: function(a, b) {
        if (a.tagName) var c = a;
        else a = a || event, c = a.target || a.srcElement;
        for (; c;) {
            if (c.getAttribute) {
                var d = c.getAttribute(b);
                if (d) return d
            }
            c =
                c.parentNode
        }
        return null
    },
    offset: function(a) {
        if (a.getBoundingClientRect) {
            var b = a.getBoundingClientRect(),
                c = document.body,
                d = document.documentElement,
                e = window.pageYOffset || d.scrollTop || c.scrollTop,
                f = window.pageXOffset || d.scrollLeft || c.scrollLeft,
                g = d.clientTop || c.clientTop || 0,
                h = d.clientLeft || c.clientLeft || 0,
                i = b.top + e - g,
                j = b.left + f - h;
            return {
                y: Math.round(i),
                x: Math.round(j)
            }
        } else {
            for (j = i = 0; a;) i += parseInt(a.offsetTop, 10), j += parseInt(a.offsetLeft, 10), a = a.offsetParent;
            return {
                y: i,
                x: j
            }
        }
    },
    pos: function(a) {
        a = a ||
            event;
        if (a.pageX || a.pageY) return {
            x: a.pageX,
            y: a.pageY
        };
        var b = dhx.env.isIE && document.compatMode != "BackCompat" ? document.documentElement : document.body;
        return {
            x: a.clientX + b.scrollLeft - b.clientLeft,
            y: a.clientY + b.scrollTop - b.clientTop
        }
    },
    preventEvent: function(a) {
        a && a.preventDefault && a.preventDefault();
        return dhx.html.stopEvent(a)
    },
    stopEvent: function(a) {
        (a || event).cancelBubble = !0;
        return !1
    },
    addCss: function(a, b) {
        a.className += " " + b
    },
    removeCss: function(a, b) {
        a.className = a.className.replace(RegExp(" " + b, "g"), "")
    }
};
dhx.ready = function(a) {
    this.gi ? a.call() : this.Ac.push(a)
};
dhx.Ac = [];
(function() {
    var a = document.getElementsByTagName("SCRIPT");
    if (a.length) a = (a[a.length - 1].getAttribute("src") || "").split("/"), a.splice(a.length - 1, 1), dhx.codebase = a.slice(0, a.length).join("/") + "/";
    dhx.event(window, "load", function() {
        dhx.callEvent("onReady", []);
        dhx.delay(function() {
            dhx.gi = !0;
            for (var a = 0; a < dhx.Ac.length; a++) dhx.Ac[a].call();
            dhx.Ac = []
        })
    })
})();
dhx.locale = dhx.locale || {};
dhx.ready(function() {
    dhx.event(document.body, "click", function(a) {
        dhx.callEvent("onClick", [a || event])
    })
});
(function() {
    var a = dhx.Touch = {
        config: {
            longTouchDelay: 1E3,
            scrollDelay: 150,
            gravity: 500,
            deltaStep: 30,
            speed: "0ms",
            finish: 1500,
            ellastic: !0
        },
        limit: function(b) {
            a.Re = b !== !1
        },
        disable: function() {
            a.Ra = !0
        },
        enable: function() {
            a.Ra = !1
        },
        $init: function() {
            a.$init = function() {};
            dhx.env.touch ? (dhx.event(document.body, "touchstart", a.Of), dhx.event(document.body, "touchmove", a.Od), dhx.event(document.body, "touchend", a.Nf)) : (a.kc = a.gh, dhx.event(document.body, "mousedown", a.Of), dhx.event(document.body, "mousemove", a.Od), dhx.event(document.body,
                "mouseup", a.Nf), document.body.style.overflowX = document.body.style.overflowY = "hidden");
            dhx.event(document.body, "dragstart", function(a) {
                return dhx.html.preventEvent(a)
            });
            dhx.event(document.body, "touchstart", function(b) {
                if (!a.Ra && !a.Re && dhx.env.isSafari) {
                    if (b.srcElement.tagName) {
                        var c = b.srcElement.tagName.toLowerCase();
                        if (c == "input" || c == "textarea" || c == "select" || c == "label") return !0
                    }
                    a.te = !0;
                    return dhx.html.preventEvent(b)
                }
            });
            a.Zb(!0);
            a.C = [null, null]
        },
        Zb: function(b) {
            a.F = a.I = a.Ka = null;
            a.R = a.N = a.D = this.Ve =
                null;
            a.Y = {
                Nc: 0,
                Oc: 0,
                Jb: 0
            };
            if (a.bc) dhx.html.removeCss(a.bc, "dhx_touch"), a.bc = null;
            window.clearTimeout(a.Ue);
            a.Wf = !0;
            a.Sb = !0;
            a.Tb = !0;
            !a.Qd && !b && a.gb()
        },
        Nf: function(b) {
            if (a.F) {
                if (a.R) {
                    var c = a.lc(a.N),
                        d = c.e,
                        e = c.f,
                        f = a.config.finish,
                        g = a.Ce(b, !0);
                    if (g.Jb) {
                        var h = d + a.config.gravity * g.Nc / g.Jb,
                            i = e + a.config.gravity * g.Oc / g.Jb,
                            j = a.C[0] ? a.ac(h, !1, !1, a.D.dx, a.D.px) : d,
                            k = a.C[1] ? a.ac(i, !1, !1, a.D.dy, a.D.py) : e,
                            l = Math.max(Math.abs(j - d), Math.abs(k - e));
                        l < 150 && (f = f * l / 150);
                        if (j != d || k != e) f = Math.round(f * Math.max((j - d) / (h - d), (k - e) / (i - e)));
                        var m = {
                            e: j,
                            f: k
                        }, n = dhx.ui.get(a.N);
                        n && n.$changeScroll && n.$changeScroll(m);
                        f = Math.max(100, f);
                        d != m.e || e != m.f ? (a.pa(a.N, m.e, m.f, f + "ms"), a.Gb && a.Gb.Ui(m.e, m.f, f + "ms"), a.Bf(m.e, m.f, f + "ms")) : a.gb()
                    } else a.gb()
                } else if (!this.Ve)
                    if (a.Tb && !a.Sb) a.lb("onSwipeX");
                    else if (a.Sb && !a.Tb) a.lb("onSwipeY");
                else if (dhx.env.isSafari && a.te) {
                    a.te = !1;
                    var o = a.F.target;
                    dhx.delay(function() {
                        var a = document.createEvent("MouseEvents");
                        a.initEvent("click", !0, !0);
                        o.dispatchEvent(a)
                    })
                }
                a.lb("onTouchEnd");
                a.Zb()
            }
        },
        Od: function(b) {
            if (a.F) {
                var c =
                    a.Ce(b);
                a.lb("onTouchMove");
                if (a.R) a.Cf(c);
                else if (a.Sb = a.Ud(c.dj, "x", a.Sb), a.Tb = a.Ud(c.mb, "y", a.Tb), a.R) {
                    var d = a.gd("onBeforeScroll");
                    if (d) {
                        var e = {};
                        d.callEvent("onBeforeScroll", [e]);
                        if (e.update) a.config.speed = e.speed, a.config.scale = e.scale
                    }
                    a.ph(c)
                }
                return dhx.html.preventEvent(b)
            }
        },
        Cf: function() {
            if (a.N) {
                var b = a.lc(a.N),
                    c = b.e,
                    d = b.f,
                    e = a.Ka || a.F;
                if (a.C[0]) b.e = a.ac(b.e - e.x + a.I.x, a.config.ellastic, b.e, a.D.dx, a.D.px);
                if (a.C[1]) b.f = a.ac(b.f - e.y + a.I.y, a.config.ellastic, b.f, a.D.dy, a.D.py);
                a.pa(a.N, b.e, b.f,
                    "0ms");
                a.Gb && a.Gb.Ui(b.e, b.f, "0ms");
                a.Bf(b.e, b.f, "0ms")
            }
        },
        Bf: function(b, c, d) {
            var e = a.D.px / a.D.dx * -b,
                f = a.D.py / a.D.dy * -c;
            a.C[0] && a.pa(a.C[0], e, 0, d);
            a.C[1] && a.pa(a.C[1], 0, f, d)
        },
        pa: function(b, c, d, e) {
            a.Qd = !0;
            if (b) {
                var f = a.config.translate || dhx.env.translate;
                b.style[dhx.env.transformPrefix + "Transform"] = f + "(" + Math.round(c) + "px, " + Math.round(d) + "px" + (f == "translate3d" ? ", 0" : "") + ")";
                b.style[dhx.env.transformPrefix + "TransitionDuration"] = e
            }
        },
        lc: function(b) {
            var c = window.getComputedStyle(b)[dhx.env.transformPrefix +
                "Transform"],
                d;
            if (c == "none") d = {
                e: 0,
                f: 0
            };
            else if (window.WebKitCSSMatrix) d = new WebKitCSSMatrix(c);
            else {
                var e = c.replace(/(matrix\()(.*)(\))/gi, "$2"),
                    e = e.replace(/\s/gi, ""),
                    e = e.split(",");
                d = {};
                for (var f = "a,b,c,d,e,f".split(","), g = 0; g < f.length; g++) d[f[g]] = parseInt(e[g], 10)
            }
            a.Gb && a.Gb.qj(d);
            return d
        },
        ac: function(a, c, d, e, f) {
            if (a === d) return a;
            var g = Math.abs(a - d),
                h = g / (a - d);
            if (a > 0) return c ? d + h * Math.sqrt(g) : 0;
            var i = e - f;
            return i + a < 0 ? c ? d - Math.sqrt(-(a - d)) : -i : a
        },
        oh: function(b) {
            if (!b.scroll_enabled) {
                b.scroll_enabled = !0;
                b.parentNode.style.position = "relative";
                var c = dhx.env.transformCSSPrefix;
                b.style.cssText += c + "transition: " + c + "transform; " + c + "user-select:none; " + c + "transform-style:flat;";
                b.addEventListener(dhx.env.transitionEnd, a.gb, !1)
            }
        },
        ph: function() {
            a.R.indexOf("x") != -1 && (a.C[0] = a.ge("x", a.D.dx, a.D.px, "width"));
            a.R.indexOf("y") != -1 && (a.C[1] = a.ge("y", a.D.dy, a.D.py, "height"));
            a.oh(a.N);
            window.setTimeout(a.Cf, 1)
        },
        ge: function(b, c, d, e) {
            if (c - d < 2) {
                var f = a.lc(a.N),
                    g = b == "y" ? f.e : 0,
                    h = b == "y" ? 0 : f.f;
                a.pa(a.N, g, h, "0ms");
                a.R = a.R.replace(b, "");
                return ""
            }
            var i = dhx.html.create("DIV", {
                "class": "dhx_scroll_" + b
            }, "");
            i.style[e] = Math.max(d * d / c - 7, 10) + "px";
            a.N.parentNode.appendChild(i);
            return i
        },
        Ud: function(b, c, d) {
            if (b > a.config.deltaStep) {
                if (a.Wf && (a.Dh(c), a.Te(c), (a.R || "").indexOf(c) == -1)) a.R = "";
                return !1
            }
            return d
        },
        gb: function() {
            var b, c, d;
            if (d = dhx.ui.get(a.N || this)) d.scrollState && (c = d.scrollState(), b = {
                e: c.x,
                f: c.y
            }), dhx.callEvent("onAfterScroll", [b]), d.callEvent && d.callEvent("onAfterScroll", [b]);
            if (!a.R) dhx.html.remove(a.C), a.C = [null, null];
            a.Qd = !1
        },
        Dh: function() {
            window.clearTimeout(a.Ue);
            a.Wf = !1
        },
        Kf: function(b) {
            if (a.C[0] || a.C[1]) a.Oi(b, a.C[0] ? "x" : "y");
            else return !0
        },
        Of: function(b) {
            var c = b.target || event.srcElement;
            if (!(a.Ra || c.tagName && c.tagName.toLowerCase() == "textarea"))
                if (a.F = a.kc(b), a.Re && !a.Le()) a.Kf(b), a.F = null;
                else {
                    a.lb("onTouchStart");
                    if (a.Kf(b)) a.Ue = window.setTimeout(a.Eh, a.config.longTouchDelay);
                    var d = dhx.ui.get(b);
                    if (d && d.touchable && (!c.className || c.className.indexOf("dhx_view") !== 0)) a.bc = d.getNode(b), dhx.html.addCss(a.bc,
                        "dhx_touch")
                }
        },
        Eh: function() {
            if (a.F) a.lb("onLongTouch"), dhx.callEvent("onClick", [a.F]), a.Ve = !0
        },
        Oi: function(b, c) {
            a.Te(c);
            var d = a.C[0] || a.C[1];
            if (d) {
                var e = a.gd("onBeforeScroll");
                e && e.callEvent("onBeforeScroll", [a.F, a.I])
            }
            if (d && (!a.N || d.parentNode != a.N.parentNode)) a.Zb(), a.gb(), a.F = a.kc(b);
            a.Od(b)
        },
        Ce: function(b) {
            a.Ka = a.I;
            a.I = a.kc(b);
            a.Y.dj = Math.abs(a.F.x - a.I.x);
            a.Y.mb = Math.abs(a.F.y - a.I.y);
            if (a.Ka) a.I.time - a.Ka.time < a.config.scrollDelay ? (a.Y.Nc = a.Y.Nc / 1.3 + a.I.x - a.Ka.x, a.Y.Oc = a.Y.Oc / 1.3 + a.I.y - a.Ka.y) :
                a.Y.Oc = a.Y.Nc = 0, a.Y.Jb = a.Y.Jb / 1.3 + (a.I.time - a.Ka.time);
            return a.Y
        },
        ih: function(b) {
            a.D = {
                dx: b.offsetWidth,
                dy: b.offsetHeight,
                px: b.parentNode.offsetWidth,
                py: b.parentNode.offsetHeight
            }
        },
        Le: function(b) {
            var c = a.F.target;
            if (!dhx.env.touch && !dhx.env.transition && !dhx.env.transform) return null;
            for (; c && c.tagName != "BODY";) {
                if (c.getAttribute) {
                    var d = c.getAttribute("touch_scroll");
                    if (d && (!b || d.indexOf(b) != -1)) return [c, d]
                }
                c = c.parentNode
            }
            return null
        },
        Te: function(b) {
            var c = this.Le(b);
            if (c) a.R = c[1], a.N = c[0], a.ih(c[0]);
            return c
        },
        lb: function(b) {
            dhx.callEvent(b, [a.F, a.I]);
            var c = a.gd(b);
            c && c.callEvent(b, [a.F, a.I])
        },
        gd: function(b) {
            var c = dhx.ui.get(a.F);
            if (!c) return null;
            for (; c;) {
                if (c.hasEvent && c.hasEvent(b)) return c;
                c = c.getParent()
            }
            return null
        },
        kc: function(b) {
            if (!b.touches[0]) {
                var c = a.I;
                c.time = new Date;
                return c
            }
            return {
                target: b.target,
                x: b.touches[0].pageX,
                y: b.touches[0].pageY,
                time: new Date
            }
        },
        gh: function(a) {
            return {
                target: a.target,
                x: a.pageX,
                y: a.pageY,
                time: new Date
            }
        }
    };
    dhx.TouchEvents = {
        $init: function() {
            this.attachEvent("onSwipeX",
                this.Qi);
            this.attachEvent("onBeforeSelect", this.unSwipe);
            this.attachEvent("onAfterDelete", this.unSwipe)
        },
        Qi: function(a) {
            var c = this.locate(a);
            c && c != this.Ma && (this.unSwipe(), this.swipe(c))
        },
        swipe: function(a) {
            this.Ma = a;
            this.item(this.Ma).$template = "Swipe";
            this.refresh(this.Ma)
        },
        unSwipe: function() {
            if (this.Ma) {
                var a = this.item(this.Ma);
                if (a) a.$template = "", this.refresh(this.Ma);
                this.Ma = null
            }
        }
    };
    dhx.ready(function() {
        (dhx.env.touch || dhx.env.$touch) && a.$init()
    })
})();
dhx.DragControl = {
    fa: dhx.toArray(["dummy"]),
    addDrop: function(a, b, c) {
        a = dhx.toNode(a);
        a.dhx_drop = this.we(b);
        if (c) a.dhx_master = !0
    },
    we: function(a) {
        var a = a || dhx.DragControl,
            b = this.fa.find(a);
        if (b < 0) b = this.fa.length, this.fa.push(a);
        return b
    },
    addDrag: function(a, b) {
        a = dhx.toNode(a);
        a.dhx_drag = this.we(b);
        dhx.event(a, "mousedown", this.bi, a)
    },
    bi: function(a) {
        dhx.DragControl.ja && (dhx.DragControl.td(), dhx.DragControl.destroyDrag());
        dhx.DragControl.ja = this;
        dhx.DragControl.If = {
            x: a.pageX,
            y: a.pageY
        };
        dhx.DragControl.uf =
            a;
        dhx.DragControl.sb = dhx.event(document.body, "mousemove", dhx.DragControl.Mi);
        dhx.DragControl.tb = dhx.event(document.body, "mouseup", dhx.DragControl.td);
        a.cancelBubble = !0;
        return !1
    },
    td: function() {
        dhx.DragControl.sb = dhx.eventRemove(dhx.DragControl.sb);
        dhx.DragControl.tb = dhx.eventRemove(dhx.DragControl.tb)
    },
    Mi: function(a) {
        var b = {
            x: a.pageX,
            y: a.pageY
        };
        if (!(Math.abs(b.x - dhx.DragControl.If.x) < 5 && Math.abs(b.y - dhx.DragControl.If.y) < 5) && (dhx.DragControl.td(), dhx.DragControl.createDrag(dhx.DragControl.uf))) dhx.DragControl.sendSignal("start"),
        dhx.DragControl.sb = dhx.event(document.body, "mousemove", dhx.DragControl.$e), dhx.DragControl.tb = dhx.event(document.body, "mouseup", dhx.DragControl.Ni), dhx.DragControl.$e(a)
    },
    Ni: function(a) {
        dhx.DragControl.sb = dhx.eventRemove(dhx.DragControl.sb);
        dhx.DragControl.tb = dhx.eventRemove(dhx.DragControl.tb);
        dhx.DragControl.uf = null;
        dhx.DragControl.O && (dhx.DragControl.onDrop(dhx.DragControl.ja, dhx.DragControl.O, this.rc, a), dhx.DragControl.onDragOut(dhx.DragControl.ja, dhx.DragControl.O, null, a));
        dhx.DragControl.destroyDrag();
        dhx.DragControl.sendSignal("stop")
    },
    $e: function(a) {
        var b = dhx.html.pos(a);
        dhx.DragControl.la.style.top = b.y + dhx.DragControl.top + "px";
        dhx.DragControl.la.style.left = b.x + dhx.DragControl.left + "px";
        dhx.DragControl.Ef ? dhx.DragControl.Ef = !1 : dhx.DragControl.pg(a.srcElement || a.target, a);
        a.cancelBubble = !0;
        return !1
    },
    pg: function(a, b) {
        for (; a && a.tagName != "BODY";) {
            if (a.dhx_drop) {
                if (this.O && (this.O != a || a.dhx_master)) this.onDragOut(this.ja, this.O, a, b);
                if (!this.O || this.O != a || a.dhx_master)
                    if (this.O = null, this.rc = this.onDragIn(dhx.DragControl.ja,
                        a, b)) this.O = a;
                return
            }
            a = a.parentNode
        }
        if (this.O) this.O = this.rc = this.onDragOut(this.ja, this.O, null, b)
    },
    sendSignal: function(a) {
        dhx.DragControl.active = a == "start"
    },
    getMaster: function(a) {
        return this.fa[a.dhx_drag || a.dhx_drop]
    },
    getContext: function() {
        return this.ec
    },
    getNode: function() {
        return this.la
    },
    createDrag: function(a) {
        var b = dhx.DragControl.ja;
        dhx.DragControl.ec = {};
        var c = this.fa[b.dhx_drag],
            d;
        if (c.onDragCreate) {
            d = c.onDragCreate(b, a);
            if (!d) return !1;
            d.style.position = "absolute";
            d.style.zIndex = dhx.ui.zIndex()
        } else {
            var e =
                dhx.DragControl.onDrag(b, a);
            if (!e) return !1;
            d = document.createElement("DIV");
            d.innerHTML = e;
            d.className = "dhx_drag_zone";
            document.body.appendChild(d)
        }
        d.onmousemove = dhx.DragControl.Li;
        if (!dhx.DragControl.ec.from) dhx.DragControl.ec = {
            source: b,
            from: b
        };
        dhx.DragControl.la = d;
        return !0
    },
    Li: function() {
        dhx.DragControl.Ef = !0
    },
    destroyDrag: function() {
        var a = dhx.DragControl.ja,
            b = this.fa[a.dhx_drag];
        if (b && b.onDragDestroy) b.onDragDestroy(a, dhx.DragControl.la);
        else dhx.html.remove(dhx.DragControl.la);
        dhx.DragControl.rc =
            dhx.DragControl.ja = dhx.DragControl.O = dhx.DragControl.la = null
    },
    top: 5,
    left: 5,
    onDragIn: function(a, b, c) {
        var d = this.fa[b.dhx_drop];
        if (d.onDragIn && d != this) return d.onDragIn(a, b, c);
        b.className += " dhx_drop_zone";
        return b
    },
    onDragOut: function(a, b, c, d) {
        var e = this.fa[b.dhx_drop];
        if (e.onDragOut && e != this) return e.onDragOut(a, b, c, d);
        b.className = b.className.replace("dhx_drop_zone", "");
        return null
    },
    onDrop: function(a, b, c, d) {
        var e = this.fa[b.dhx_drop];
        dhx.DragControl.ec.from = dhx.DragControl.getMaster(a);
        if (e.onDrop &&
            e != this) return e.onDrop(a, b, c, d);
        b.appendChild(a)
    },
    onDrag: function(a, b) {
        var c = this.fa[a.dhx_drag];
        return c.onDrag && c != this ? c.onDrag(a, b) : "<div style='" + a.style.cssText + "'>" + a.innerHTML + "</div>"
    }
};
dhx.DataMove = {
    $init: function() {},
    copy: function(a, b, c, d) {
        var e = this.item(a);
        if (e) return c && (e = c.externalData(e)), c = c || this, c.add(c.externalData(e, d), b)
    },
    move: function(a, b, c, d) {
        if (dhx.isArray(a))
            for (var e = 0; e < a.length; e++) {
                var f = (c || this).indexById(this.move(a[e], b, c, d ? d[e] : null));
                a[e + 1] && (b = f + (this.indexById(a[e + 1]) < f ? 0 : 1))
            } else {
                var g = a;
                if (!(b < 0)) {
                    var h = this.item(a);
                    if (h) {
                        if (!c || c == this) this.data.move(this.indexById(a), b);
                        else {
                            if (!d || c.item(d)) d = dhx.uid();
                            g = c.add(c.externalData(h, d), b);
                            this.remove(a)
                        }
                        return g
                    }
                }
            }
    },
    moveUp: function(a, b) {
        return this.move(a, this.indexById(a) - (b || 1))
    },
    moveDown: function(a, b) {
        return this.moveUp(a, (b || 1) * -1)
    },
    moveTop: function(a) {
        return this.move(a, 0)
    },
    moveBottom: function(a) {
        return this.move(a, this.data.dataCount() - 1)
    },
    externalData: function(a, b) {
        var c = dhx.extend({}, a);
        c.id = b || dhx.uid();
        c.$selected = c.$template = null;
        return c
    }
};
dhx.Movable = {
    move_setter: function(a) {
        if (a) this.vc = dhx.copy(this.vc), this.vc.master = this, dhx.DragControl.addDrag(this.B, this.vc)
    },
    vc: {
        onDragCreate: function(a, b) {
            var c = dhx.html.offset(a),
                d = dhx.html.pos(b);
            dhx.DragControl.top = c.y - d.y;
            dhx.DragControl.left = c.x - d.x;
            return dhx.toNode(this.master.h)
        },
        onDragDestroy: function() {
            dhx.DragControl.top = dhx.DragControl.left = 5
        }
    }
};
dhx.Scrollable = {
    $init: function(a) {
        if (a && !a.scroll && this.Vh) return this.i = this.i || this.k;
        (this.i || this.k).appendChild(dhx.html.create("DIV", {
            "class": "dhx_scroll_cont"
        }, ""));
        this.i = (this.i || this.k).firstChild
    },
    scroll_setter: function(a) {
        if (!a) return !1;
        dhx.Touch ? (a = a == "x" ? "x" : a == "xy" ? "xy" : "y", this.i.setAttribute("touch_scroll", a), this.attachEvent && this.attachEvent("onAfterRender", dhx.bind(this.hi, this)), this.Xi = !0) : this.i.parentNode.style.overflowY = a ? "scroll" : "";
        return a
    },
    scrollState: function() {
        var a =
            this.i.offsetWidth - this.$view.offsetWidth,
            b = this.i.offsetHeight - this.$view.offsetHeight;
        if (dhx.Touch) {
            var c = dhx.Touch.lc(this.i);
            return {
                x: -c.e,
                y: -c.f,
                xMax: a,
                yMax: b
            }
        } else return {
            x: this.i.parentNode.scrollLeft,
            y: this.i.parentNode.scrollTop,
            xMax: a,
            yMax: b
        }
    },
    scrollTo: function(a, b) {
        dhx.Touch ? (b = Math.max(0, Math.min(b, this.i.offsetHeight - this.r)), a = Math.max(0, Math.min(a, this.i.offsetWidth - this.n)), dhx.Touch.pa(this.i, -a, -b, this.g.scrollSpeed || "100ms")) : (this.i.parentNode.scrollLeft = a, this.i.parentNode.scrollTop =
            b)
    },
    hi: function() {
        if (this.g.scroll.indexOf("x") != -1 && !this.kh) this.i.style.width = this.n + "px", this.i.style.width = this.i.scrollWidth + "px";
        dhx.Touch && this.Xi && (dhx.Touch.Zb(), dhx.Touch.gb(), dhx.Touch.pa(this.i, 0, 0, 0))
    }
};
dhx.MouseEvents = {
    $init: function() {
        this.on_click && dhx.event(this.k, "click", this.Lh, this);
        this.on_context && dhx.event(this.k, "contextmenu", this.Mh, this);
        this.on_dblclick && dhx.event(this.k, "dblclick", this.Nh, this);
        this.on_mouse_move && (dhx.event(this.k, "mousemove", this.df, this), dhx.event(this.k, dhx.env.isIE ? "mouseleave" : "mouseout", this.df, this))
    },
    Lh: function(a) {
        return this.Ab(a, this.on_click, "ItemClick")
    },
    Nh: function(a) {
        return this.Ab(a, this.on_dblclick, "ItemDblClick")
    },
    Mh: function(a) {
        if (this.Ab(a, this.on_context,
            "BeforeContextMenu")) return this.Ab(a, {}, "AfterContextMenu"), dhx.html.preventEvent(a)
    },
    df: function(a) {
        dhx.env.isIE && (a = document.createEventObject(event));
        this.Ze && window.clearTimeout(this.Ze);
        this.callEvent("onMouseMoving", [a]);
        this.Ze = window.setTimeout(dhx.bind(function() {
            a.type == "mousemove" ? this.Rh(a) : this.Sh(a)
        }, this), 500)
    },
    Rh: function(a) {
        this.Ab(a, this.on_mouse_move, "MouseMove") || this.callEvent("onMouseOut", [a || event])
    },
    Sh: function(a) {
        this.callEvent("onMouseOut", [a || event])
    },
    Ab: function(a, b, c) {
        for (var a =
            a || event, d = a.target || a.srcElement, e = "", f = null, g = !1; d && d.parentNode;) {
            if (!g && d.getAttribute && (f = d.getAttribute(this.J))) {
                if (this.callEvent && !this.callEvent("on" + c, [f, a, d])) return;
                g = !0
            }
            if (e = d.className)
                if (e = e.split(" "), e = e[0] || e[1], b[e]) {
                    var h = b[e].call(this, a, f || dhx.html.locate(a, this.J), d);
                    if (typeof h != "undefined" && h !== !0) return
                }
            d = d.parentNode
        }
        return g
    }
};
(function() {
    var a = {};
    dhx.Template = function(b) {
        if (typeof b == "function") return b;
        if (a[b]) return a[b];
        b = (b || "").toString();
        if (b.indexOf("->") != -1) switch (b = b.split("->"), b[0]) {
            case "html":
                b = dhx.html.getValue(b[1]);
                break;
            case "http":
                b = (new dhx.ajax).sync().get(b[1], {
                    uid: dhx.uid()
                }).responseText
        }
        b = (b || "").toString();
        b = b.replace(/(\r\n|\n)/g, "\\n");
        b = b.replace(/(\")/g, '\\"');
        b = b.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"');
        b = b.replace(/\{common\.([^}\(]*)\}/g, "\"+(common.$1||'')+\"");
        b = b.replace(/\{common\.([^\}\(]*)\(\)\}/g, '"+(common.$1?common.$1(obj,common):"")+"');
        b = b.replace(/\{obj\.([^}]*)\}/g, "\"+(obj.$1||'')+\"");
        b = b.replace(/#([$a-z0-9_\[\]]+)#/gi, "\"+(obj.$1||'')+\"");
        b = b.replace(/\{obj\}/g, '"+obj+"');
        b = b.replace(/\{-obj/g, "{obj");
        b = b.replace(/\{-common/g, "{common");
        b = 'return "' + b + '";';
        try {
            Function("obj", "common", b)
        } catch (c) {
            dhx.error("Invalid template:" + b)
        }
        return a[b] = Function("obj", "common", b)
    };
    dhx.Template.empty = function() {
        return ""
    };
    dhx.Template.bind = function(a) {
        return dhx.bind(dhx.Template(a),
            this)
    };
    dhx.Type = function(a, c) {
        if (a.dc) {
            if (!a.ub) a.ub = [];
            a.ub.push(c)
        } else {
            if (typeof a == "function") a = a.prototype;
            if (!a.types || !c.name) a.types = {
                "default": a.type
            }, a.type.name = "default";
            var d = c.name,
                e = a.type;
            d && (e = a.types[d] = dhx.copy(c.baseType ? a.types[c.baseType] : a.type));
            for (var f in c) e[f] = f.indexOf("template") === 0 ? dhx.Template(c[f]) : c[f];
            return d
        }
    }
})();
dhx.Settings = {
    $init: function() {
        this.g = this.config = {}
    },
    define: function(a, b) {
        return typeof a == "object" ? this.hf(a) : this.ie(a, b)
    },
    ie: function(a, b) {
        var c = this[a + "_setter"];
        return this.g[a] = c ? c.call(this, b, a) : b
    },
    hf: function(a) {
        if (a)
            for (var b in a) this.ie(b, a[b])
    },
    cb: function(a, b) {
        var c = {};
        b && (c = dhx.extend(c, b));
        typeof a == "object" && !a.tagName && dhx.extend(c, a, !0);
        this.hf(c)
    },
    K: function(a, b) {
        for (var c in b) switch (typeof a[c]) {
            case "object":
                a[c] = this.K(a[c] || {}, b[c]);
                break;
            case "undefined":
                a[c] = b[c]
        }
        return a
    }
};
dhx.math = {};
dhx.math.Nd = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F".split(",");
dhx.math.toHex = function(a, b) {
    for (var a = parseInt(a, 10), c = ""; a > 0;) c = this.Nd[a % 16] + c, a = Math.floor(a / 16);
    for (; c.length < b;) c = "0" + c;
    return c
};
dhx.math.toFixed = function(a) {
    return a < 10 ? "0" + a : a
};
dhx.Number = {
    format: function(a, b) {
        var b = b || dhx.i18n,
            a = parseFloat(a),
            c = a.toFixed(b.decimalSize).toString(),
            c = c.split("."),
            d = "";
        if (b.groupSize) {
            var e = b.groupSize,
                f = c[0].length;
            do {
                f -= e;
                var g = f > 0 ? c[0].substr(f, e) : c[0].substr(0, e + f),
                    d = g + (d ? b.groupDelimiter + d : "")
            } while (f > 0)
        } else d = c[0];
        return b.decimalSize ? d + b.decimalDelimeter + c[1] : d
    },
    numToStr: function(a) {
        return function(b) {
            return dhx.Number.format(b, a)
        }
    }
};
dhx.Date = {
    Locale: {
        month_full: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
        month_short: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
        day_full: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
        day_short: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
    },
    weekStart: function(a) {
        var b = a.getDay();
        this.config.start_on_monday && (b === 0 ? b = 6 : b--);
        return this.date_part(this.add(a, -1 * b, "day"))
    },
    monthStart: function(a) {
        a.setDate(1);
        return this.date_part(a)
    },
    yearStart: function(a) {
        a.setMonth(0);
        return this.month_start(a)
    },
    dayStart: function(a) {
        return this.date_part(a)
    },
    dateToStr: function(a, b) {
        a = a.replace(/%[a-zA-Z]/g, function(a) {
            switch (a) {
                case "%d":
                    return '"+dhx.math.toFixed(date.getDate())+"';
                case "%m":
                    return '"+dhx.math.toFixed((date.getMonth()+1))+"';
                case "%j":
                    return '"+date.getDate()+"';
                case "%n":
                    return '"+(date.getMonth()+1)+"';
                case "%y":
                    return '"+dhx.math.toFixed(date.getFullYear()%100)+"';
                case "%Y":
                    return '"+date.getFullYear()+"';
                case "%D":
                    return '"+dhx.Date.Locale.day_short[date.getDay()]+"';
                case "%l":
                    return '"+dhx.Date.Locale.day_full[date.getDay()]+"';
                case "%M":
                    return '"+dhx.Date.Locale.month_short[date.getMonth()]+"';
                case "%F":
                    return '"+dhx.Date.Locale.month_full[date.getMonth()]+"';
                case "%h":
                    return '"+dhx.math.toFixed((date.getHours()+11)%12+1)+"';
                case "%g":
                    return '"+((date.getHours()+11)%12+1)+"';
                case "%G":
                    return '"+date.getHours()+"';
                case "%H":
                    return '"+dhx.math.toFixed(date.getHours())+"';
                case "%i":
                    return '"+dhx.math.toFixed(date.getMinutes())+"';
                case "%a":
                    return '"+(date.getHours()>11?"pm":"am")+"';
                case "%A":
                    return '"+(date.getHours()>11?"PM":"AM")+"';
                case "%s":
                    return '"+dhx.math.toFixed(date.getSeconds())+"';
                case "%W":
                    return '"+dhx.math.toFixed(dhx.Date.getISOWeek(date))+"';
                default:
                    return a
            }
        });
        b === !0 && (a = a.replace(/date\.get/g, "date.getUTC"));
        return new Function("date", 'return "' + a + '";')
    },
    strToDate: function(a, b) {
        var c = "var temp=date.split(/[^0-9a-zA-Z]+/g);",
            d = a.match(/%[a-zA-Z]/g),
            e, f, g;
        if (!dhx.Date.Locale.month_short_hash) {
            g = dhx.Date.Locale.month_short;
            f = dhx.Date.Locale.month_short_hash = {};
            for (e = 0; e < g.length; e++) f[g[e]] = e;
            g = dhx.Date.Locale.month_full;
            f = dhx.Date.Locale.month_full_hash = {};
            for (e = 0; e < g.length; e++) f[g[e]] = e
        }
        for (e = 0; e < d.length; e++) switch (d[e]) {
            case "%j":
            case "%d":
                c += "set[2]=temp[" + e + "]||1;";
                break;
            case "%n":
            case "%m":
                c += "set[1]=(temp[" + e + "]||1)-1;";
                break;
            case "%y":
                c += "set[0]=temp[" + e + "]*1+(temp[" + e + "]>50?1900:2000);";
                break;
            case "%g":
            case "%G":
            case "%h":
            case "%H":
                c += "set[3]=temp[" + e + "]||0;";
                break;
            case "%i":
                c += "set[4]=temp[" + e + "]||0;";
                break;
            case "%Y":
                c += "set[0]=temp[" + e + "]||0;";
                break;
            case "%a":
            case "%A":
                c += "set[3]=set[3]%12+((temp[" + e + "]||'').toLowerCase()=='am'?0:12);";
                break;
            case "%s":
                c += "set[5]=temp[" + e + "]||0;";
                break;
            case "%M":
                c += "set[1]=dhx.Date.Locale.month_short_hash[temp[" + e + "]]||0;";
                break;
            case "%F":
                c += "set[1]=dhx.Date.Locale.month_full_hash[temp[" + e + "]]||0;"
        }
        var h = "set[0],set[1],set[2],set[3],set[4],set[5]";
        b && (h = " Date.UTC(" + h + ")");
        return new Function("date", "var set=[0,0,1,0,0,0]; " + c + " return new Date(" + h + ");")
    },
    getISOWeek: function(a) {
        if (!a) return !1;
        var b = a.getDay();
        b === 0 && (b = 7);
        var c = new Date(a.valueOf());
        c.setDate(a.getDate() + (4 - b));
        var d = c.getFullYear(),
            e = Math.floor((c.getTime() - (new Date(d, 0, 1)).getTime()) / 864E5),
            f = 1 + Math.floor(e / 7);
        return f
    },
    getUTCISOWeek: function(a) {
        return this.getISOWeek(a)
    },
    add: function(a, b, c) {
        var d = new Date(a.valueOf());
        switch (c) {
            case "day":
                d.setDate(d.getDate() + b);
                break;
            case "week":
                d.setDate(d.getDate() + 7 * b);
                break;
            case "month":
                d.setMonth(d.getMonth() + b);
                break;
            case "year":
                d.setYear(d.getFullYear() + b);
                break;
            case "hour":
                d.setHours(d.getHours() +
                    b);
                break;
            case "minute":
                d.setMinutes(d.getMinutes() + b);
                break;
            default:
                dhx.Date.add[c](d, b, c)
        }
        return d
    },
    datePart: function(a) {
        var b = this.copy(a);
        b.setHours(0);
        b.setMinutes(0);
        b.setSeconds(0);
        b.setMilliseconds(0);
        return b
    },
    timePart: function(a) {
        var b = this.copy(a);
        return (b.valueOf() / 1E3 - b.getTimezoneOffset() * 60) % 86400
    },
    copy: function(a) {
        return new Date(a.valueOf())
    }
};
dhx.i18n = {
    dateMethods: ["fullDateFormat", "timeFormat", "dateFormat", "longDateFormat"],
    dateFormat: "%d.%m.%Y",
    timeFormat: "%H:%i",
    longDateFormat: "%l, %d %F %Y",
    fullDateFormat: "%d-%m-%Y %H:%i",
    groupDelimiter: ".",
    groupSize: 3,
    decimalDelimeter: ",",
    decimalSize: 2,
    numberFormat: dhx.Number.format,
    setLocale: function() {
        for (var a = dhx.i18n.dateMethods, b = 0; b < a.length; b++) {
            var c = a[b],
                d = dhx.i18n[c + "UTC"];
            dhx.i18n[c + "Str"] = dhx.Date.dateToStr(dhx.i18n[c], d);
            dhx.i18n[c + "Date"] = dhx.Date.strToDate(dhx.i18n[c], d)
        }
    }
};
dhx.i18n.setLocale("en");
dhx.format = function(a) {
    a = a || {};
    this.$init(a)
};
dhx.format.prototype = {
    $init: function(a) {
        this.g = {};
        this.g.groupDelimiter = a.groupDelimiter || " ";
        this.g.groupNumber = a.groupNumber || 3;
        this.g.decimalPoint = a.decimalPoint || ",";
        this.g.fractNumber = a.fractNumber || 5;
        this.g.dateFormat = a.dateFormat || "%Y/%m/%d";
        this.g.stringTemplate = a.stringTemplate || "{value}";
        this.pj = dhx.Date.str_to_date(this.g.dateFormat);
        this.Ag = dhx.Date.date_to_str(this.g.dateFormat)
    },
    define: function(a, b) {
        this.g[a] = b
    },
    format: function(a, b) {
        b = b || this.formatAutoDefine(a);
        return this["format__" +
            b] ? this["format__" + b](a) : a
    },
    formatAutoDefine: function(a) {
        return typeof a == "number" || a instanceof Number ? "number" : a instanceof Date ? "date" : typeof a == "string" || a instanceof String ? isNaN(parseFloat(a)) ? "string" : "number" : !1
    },
    format__number: function(a) {
        var b = "";
        typeof a == "number" || a instanceof Number || (a = parseFloat(a));
        var c = a.toFixed(this.g.fractNumber).toString(),
            c = c.split("."),
            d = this.add_delimiter_to_int(c[0]),
            e = this.str_reverse(this.add_delimiter_to_int(this.str_reverse(c[1])));
        return b = d + this.g.decimalPoint +
            e
    },
    add_delimiter_to_int: function(a) {
        for (var b = 0, c = "", d = a.length - 1; d >= 0; d--) c = a[d] + c, b++, b == this.g.groupNumber && (c = this.g.groupDelimiter + c, b = 0);
        return c
    },
    str_reverse: function(a) {
        for (var b = "", c = a.length - 1; c >= 0; c--) b += a[c];
        return b
    },
    format__date: function(a) {
        var b = this.Ag(a);
        return b
    },
    attachFormat: function(a, b) {
        this["format__" + a] = b
    },
    format__string: function(a) {
        var b = this.g.stringTemplate.replace("{value}", a);
        return b
    },
    format__bold: function(a) {
        return typeof a == "string" || a instanceof String ? a.bold() : a
    }
};
dhx.i18n.setLocale();
dhx.Destruction = {
    $init: function() {
        dhx.destructors.push(this)
    },
    destructor: function() {
        this.destructor = function() {};
        if (this.j)
            for (var a = 0; a < this.j.length; a++) this.j[a].destructor();
        if (this.pc) {
            var b = dhx.ui.get(this.pc);
            b && b.destructor()
        }
        delete dhx.ui.views[this.g.id];
        this.xa = this.u = null;
        if (this.k) this.k.innerHTML = "", this.k.u = null;
        this.k = this.i = null;
        this.h && this.h.parentNode && this.h.parentNode.removeChild(this.h);
        this.data = null;
        this.s = this.Ua = {}
    }
};
dhx.destructors = [];
dhx.event(window, "unload", function() {
    for (var a = 0; a < dhx.destructors.length; a++) dhx.destructors[a].destructor();
    dhx.destructors = [];
    for (var b in dhx.s) {
        var c = dhx.s[b];
        c[0].removeEventListener ? c[0].removeEventListener(c[1], c[2], !1) : c[0].detachEvent && c[0].detachEvent("on" + c[1], c[2]);
        delete dhx.s[b]
    }
});
dhx.ajax = function(a, b, c) {
    if (arguments.length !== 0) {
        var d = new dhx.ajax;
        if (c) d.master = c;
        return d.get(a, null, b)
    }
    return !this.getXHR ? new dhx.ajax : this
};
dhx.ajax.count = 0;
dhx.ajax.prototype = {
    getXHR: function() {
        return dhx.env.isIE ? new ActiveXObject("Microsoft.xmlHTTP") : new XMLHttpRequest
    },
    hb: function(a, b, c) {
        var d = this.getXHR();
        dhx.isArray(c) || (c = [c]);
        if (typeof b == "object") {
            var e = [],
                f;
            for (f in b) {
                var g = b[f];
                if (g === null || g === dhx.undefined) g = "";
                e.push(f + "=" + encodeURIComponent(g))
            }
            b = e.join("&")
        }
        b && !this.post && (a = a + (a.indexOf("?") != -1 ? "&" : "?") + b, b = null);
        d.open(this.post ? "POST" : "GET", a, !this.Si);
        if (this.wb)
            if (typeof this.wb == "object")
                for (var h in this.wb) d.setRequestHeader(h,
                    this.wb[h]);
            else d.setRequestHeader.apply(d, this.wb.split(":"));
            else this.post && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var i = this;
        d.onreadystatechange = function() {
            if (!d.readyState || d.readyState == 4) {
                dhx.ajax.count++;
                if (c && i)
                    for (var a = 0; a < c.length; a++)
                        if (c[a]) {
                            var b = c[a].success || c[a];
                            if (d.status >= 400 || !d.status && !d.responseText) b = c[a].error;
                            b && b.call(i.master || i, d.responseText, d.responseXML, d)
                        }
                c = i = i.master = null
            }
        };
        d.send(b || null);
        return d
    },
    get: function(a, b, c) {
        this.post = !1;
        return this.hb(a, b, c)
    },
    post: function(a, b, c) {
        this.post = !0;
        return this.hb(a, b, c)
    },
    sync: function() {
        this.Si = !0;
        return this
    },
    header: function(a) {
        this.wb = a;
        return this
    }
};
dhx.send = function(a, b, c) {
    var d = dhx.html.create("FORM", {
        action: a,
        method: c || "POST"
    }, ""),
        e;
    for (e in b) {
        var f = dhx.html.create("INPUT", {
            type: "hidden",
            name: e,
            value: b[e]
        }, "");
        d.appendChild(f)
    }
    d.style.display = "none";
    document.body.appendChild(d);
    d.submit();
    document.body.removeChild(d)
};
dhx.AtomDataLoader = {
    $init: function(a) {
        this.data = {};
        if (a) this.g.datatype = a.datatype || "json", this.$ready.push(this.Bh)
    },
    Bh: function() {
        this.lf = !0;
        this.g.url && this.url_setter(this.g.url);
        this.g.data && this.data_setter(this.g.data)
    },
    url_setter: function(a) {
        if (!this.lf) return a;
        this.load(a, this.g.datatype);
        return a
    },
    data_setter: function(a) {
        if (!this.lf) return a;
        this.parse(a, this.g.datatype);
        return !0
    },
    load: function(a, b, c) {
        if (a.$proxy) a.load(this, typeof b == "string" ? b : "json");
        else {
            this.callEvent("onXLS", []);
            typeof b == "string" ? (this.data.driver = dhx.DataDriver[b], b = c) : this.data.driver = dhx.DataDriver.json;
            var d = [{
                success: this.yc,
                error: this.Oh
            }];
            b && (dhx.isArray(b) ? d.push.apply(d, b) : d.push(b));
            return dhx.ajax(a, d, this)
        }
    },
    parse: function(a, b) {
        this.callEvent("onXLS", []);
        this.data.driver = dhx.DataDriver[b || "json"];
        this.yc(a, null)
    },
    yc: function(a, b) {
        var c = this.data.driver,
            d = c.getRecords(c.toObject(a, b))[0];
        this.data = c ? c.getDetails(d) : a;
        this.callEvent("onXLE", [])
    },
    Oh: function() {
        this.callEvent("onXLE", []);
        this.callEvent("onLoadingError",
            arguments)
    },
    be: function(a) {
        if (!this.g.dataFeed || this.Je || !a) return !0;
        var b = this.g.dataFeed;
        if (typeof b == "function") return b.call(this, a.id || a, a);
        b = b + (b.indexOf("?") == -1 ? "?" : "&") + "action=get&id=" + encodeURIComponent(a.id || a);
        this.callEvent("onXLS", []);
        dhx.ajax(b, function(a) {
            this.Je = !0;
            this.setValues(dhx.DataDriver.json.toObject(a)[0]);
            this.Je = !1;
            this.callEvent("onXLE", [])
        }, this);
        return !1
    }
};
dhx.DataDriver = {};
dhx.DataDriver.json = {
    toObject: function(a) {
        a || (a = "[]");
        if (typeof a == "string") eval("dhx.temp=" + a), a = dhx.temp;
        if (a.data) {
            var b = a.data;
            b.pos = a.pos;
            b.total_count = a.total_count;
            a = b
        }
        return a
    },
    getRecords: function(a) {
        return a && !dhx.isArray(a) ? [a] : a
    },
    getDetails: function(a) {
        return a
    },
    getInfo: function(a) {
        return {
            jb: a.total_count || 0,
            Ga: a.pos || 0
        }
    }
};
dhx.DataDriver.html = {
    toObject: function(a) {
        if (typeof a == "string") {
            var b = null;
            a.indexOf("<") == -1 && (b = dhx.toNode(a));
            if (!b) b = document.createElement("DIV"), b.innerHTML = a;
            return b.getElementsByTagName(this.tag)
        }
        return a
    },
    getRecords: function(a) {
        return a.tagName ? a.childNodes : a
    },
    getDetails: function(a) {
        return dhx.DataDriver.xml.tagToObject(a)
    },
    getInfo: function() {
        return {
            jb: 0,
            Ga: 0
        }
    },
    tag: "LI"
};
dhx.DataDriver.jsarray = {
    toObject: function(a) {
        return typeof a == "string" ? (eval("dhx.temp=" + a), dhx.temp) : a
    },
    getRecords: function(a) {
        return a
    },
    getDetails: function(a) {
        for (var b = {}, c = 0; c < a.length; c++) b["data" + c] = a[c];
        return b
    },
    getInfo: function() {
        return {
            jb: 0,
            Ga: 0
        }
    }
};
dhx.DataDriver.csv = {
    toObject: function(a) {
        return a
    },
    getRecords: function(a) {
        return a.split(this.row)
    },
    getDetails: function(a) {
        for (var a = this.stringToArray(a), b = {}, c = 0; c < a.length; c++) b["data" + c] = a[c];
        return b
    },
    getInfo: function() {
        return {
            jb: 0,
            Ga: 0
        }
    },
    stringToArray: function(a) {
        for (var a = a.split(this.cell), b = 0; b < a.length; b++) a[b] = a[b].replace(/^[ \t\n\r]*(\"|)/g, "").replace(/(\"|)[ \t\n\r]*$/g, "");
        return a
    },
    row: "\n",
    cell: ","
};
dhx.DataDriver.xml = {
    toObject: function(a, b) {
        return b && (b = this.checkResponse(a, b)) ? b : typeof a == "string" ? this.fromString(a) : a
    },
    getRecords: function(a) {
        return this.xpath(a, this.records)
    },
    records: "/*/item",
    getDetails: function(a) {
        return this.tagToObject(a, {})
    },
    getInfo: function(a) {
        return {
            jb: a.documentElement.getAttribute("total_count") || 0,
            Ga: a.documentElement.getAttribute("pos") || 0
        }
    },
    xpath: function(a, b) {
        if (window.XPathResult) {
            var c = a;
            if (a.nodeName.indexOf("document") == -1) a = a.ownerDocument;
            for (var d = [], e =
                    a.evaluate(b, c, null, XPathResult.ANY_TYPE, null), f = e.iterateNext(); f;) d.push(f), f = e.iterateNext();
            return d
        } else {
            var g = !0;
            try {
                typeof a.selectNodes == "undefined" && (g = !1)
            } catch (h) {}
            if (g) return a.selectNodes(b);
            else {
                var i = b.split("/").pop();
                return a.getElementsByTagName(i)
            }
        }
    },
    tagToObject: function(a, b) {
        var b = b || {}, c = !1,
            d = a.attributes;
        if (d && d.length) {
            for (var e = 0; e < d.length; e++) b[d[e].name] = d[e].value;
            c = !0
        }
        for (var f = a.childNodes, g = {}, e = 0; e < f.length; e++)
            if (f[e].nodeType == 1) {
                var h = f[e].tagName;
                typeof b[h] != "undefined" ?
                    (dhx.isArray(b[h]) || (b[h] = [b[h]]), b[h].push(this.tagToObject(f[e], {}))) : b[f[e].tagName] = this.tagToObject(f[e], {});
                c = !0
            }
        if (!c) return this.nodeValue(a);
        b.value = b.value || this.nodeValue(a);
        return b
    },
    nodeValue: function(a) {
        return a.firstChild ? a.firstChild.data : ""
    },
    fromString: function(a) {
        if (window.DOMParser) return (new DOMParser).parseFromString(a, "text/xml");
        if (window.ActiveXObject) {
            var b = new ActiveXObject("Microsoft.xmlDOM");
            b.loadXML(a);
            return b
        }
        dhx.error("Load from xml string is not supported")
    },
    checkResponse: function(a,
        b) {
        if (b && b.firstChild && b.firstChild.tagName != "parsererror") return b;
        var c = this.fromString(a.replace(/^[\s]+/, ""));
        if (c) return c;
        dhx.error("xml can't be parsed", a)
    }
};
dhx.DataLoader = dhx.proto({
    $init: function(a) {
        a = a || "";
        this.ob = dhx.toArray();
        this.data = a.datastore || new dhx.DataStore;
        this.wd = this.data.attachEvent("onStoreLoad", dhx.bind(this.ng, this));
        this.data.attachEvent("onClearAll", dhx.bind(this.lg, this));
        this.data.feed = this.Rg
    },
    Rg: function(a, b, c) {
        if (this.tc) return this.tc = [a, b, c];
        else this.tc = !0;
        var d = this.data.url;
        this.load(d + (d.indexOf("?") == -1 ? "?" : "&") + (this.dataCount() ? "continue=true&" : "") + "start=" + a + "&count=" + b, [
            function() {
                var c = this.tc;
                this.tc = !1;
                typeof c ==
                    "object" && (c[0] != a || c[1] != b) && this.data.feed.apply(this, c)
            },
            c
        ])
    },
    load: function(a, b) {
        var c = dhx.AtomDataLoader.load.apply(this, arguments);
        this.ob.push(c);
        if (!this.data.url) this.data.url = a
    },
    loadNext: function(a, b, c, d, e) {
        this.g.datathrottle && !e ? (this.Lf && window.clearTimeout(this.Lf), this.Lf = dhx.delay(function() {
            this.loadNext(a, b, c, d, !0)
        }, this, 0, this.g.datathrottle)) : (!b && b !== 0 && (b = this.dataCount()), this.data.url = this.data.url || d, this.callEvent("onDataRequest", [b, a, c, d]) && this.data.url && this.data.feed.call(this,
            b, a, c))
    },
    yc: function(a, b, c) {
        this.ob.remove(c);
        this.data.ai(this.data.driver.toObject(a, b));
        this.callEvent("onXLE", []);
        if (this.wd) this.data.detachEvent(this.wd), this.wd = null
    },
    scheme_setter: function(a) {
        this.data.scheme(a)
    },
    dataFeed_setter: function(a) {
        this.data.attachEvent("onBeforeFilter", dhx.bind(function(a, c) {
            if (this.g.dataFeed) {
                var d = {};
                if (a || c) {
                    if (typeof a == "function") {
                        if (!c) return;
                        a(c, d)
                    } else d = {
                        text: c
                    };
                    this.clearAll();
                    var e = this.g.dataFeed,
                        f = [];
                    if (typeof e == "function") return e.call(this, c, d);
                    for (var g in d) f.push("dhx_filter[" + g + "]=" + encodeURIComponent(d[g]));
                    this.load(e + (e.indexOf("?") < 0 ? "?" : "&") + f.join("&"), this.g.datatype);
                    return !1
                }
            }
        }, this));
        return a
    },
    ng: function() {
        if (this.g.ready) {
            var a = dhx.toFunctor(this.g.ready);
            a && a.call && a.apply(this, arguments)
        }
    },
    lg: function() {
        for (var a = 0; a < this.ob.length; a++) this.ob[a].abort();
        this.ob = dhx.toArray()
    }
}, dhx.AtomDataLoader).prototype;
dhx.DataStore = function() {
    this.name = "DataStore";
    dhx.extend(this, dhx.EventSystem);
    this.setDriver("xml");
    this.pull = {};
    this.order = dhx.toArray()
};
dhx.DataStore.prototype = {
    setDriver: function(a) {
        this.driver = dhx.DataDriver[a]
    },
    ai: function(a) {
        this.callEvent("onParse", [this.driver, a]);
        this.A && this.filter();
        var b = this.driver.getInfo(a),
            c = this.driver.getRecords(a),
            d = (b.Ga || 0) * 1,
            e = !0;
        if (d === 0 && this.order[0]) e = !1, d = this.order.length;
        for (var f = 0, g = 0; g < c.length; g++) {
            var h = this.driver.getDetails(c[g]),
                i = this.id(h);
            this.pull[i] ? e && this.order[f + d] && f++ : (this.order[f + d] = i, f++);
            this.pull[i] = h;
            this.extraParser && this.extraParser(h);
            this.Fb && (this.Gc ? this.Gc(h) :
                this.fb && this.fb(h))
        }
        if (!this.order[b.jb - 1]) this.order[b.jb - 1] = dhx.undefined;
        this.callEvent("onStoreLoad", [this.driver, a]);
        if (e && d !== 0) this.Ld = this.idByIndex(d);
        this.refresh()
    },
    id: function(a) {
        return a.id || (a.id = dhx.uid())
    },
    changeId: function(a, b) {
        this.pull[a] && (this.pull[b] = this.pull[a]);
        this.pull[b].id = b;
        this.order[this.order.find(a)] = b;
        this.A && (this.A[this.A.find(a)] = b);
        this.callEvent("onIdChange", [a, b]);
        this.Bd && this.Bd(a, b);
        delete this.pull[a]
    },
    item: function(a) {
        return this.pull[a]
    },
    update: function(a,
        b) {
        this.fb && this.fb(b);
        if (this.callEvent("onBeforeUpdate", [a, b]) === !1) return !1;
        this.pull[a] = b;
        this.refresh(a)
    },
    refresh: function(a) {
        this.Ff || (a ? this.callEvent("onStoreUpdated", [a, this.pull[a], "update"]) : this.callEvent("onStoreUpdated", [null, null, null]))
    },
    silent: function(a, b) {
        this.Ff = !0;
        a.call(b || this);
        this.Ff = !1
    },
    getRange: function(a, b) {
        a = a ? this.indexById(a) : this.startOffset || 0;
        b ? b = this.indexById(b) : (b = Math.min(this.endOffset || Infinity, this.dataCount() - 1), b < 0 && (b = 0));
        if (a > b) var c = b,
        b = a, a = c;
        return this.getIndexRange(a,
            b)
    },
    getIndexRange: function(a, b) {
        for (var b = Math.min(b || Infinity, this.dataCount() - 1), c = dhx.toArray(), d = a || 0; d <= b; d++) c.push(this.item(this.order[d]));
        return c
    },
    dataCount: function() {
        return this.order.length
    },
    exists: function(a) {
        return !!this.pull[a]
    },
    move: function(a, b) {
        if (a < 0 || b < 0) dhx.error("DataStore::move", "Incorrect indexes");
        else {
            var c = this.idByIndex(a),
                d = this.item(c);
            this.order.removeAt(a);
            this.order.insertAt(c, Math.min(this.order.length, b));
            this.callEvent("onStoreUpdated", [c, d, "move"])
        }
    },
    scheme: function(a) {
        this.Fb = {};
        this.Gc = a.$init;
        this.fb = a.$update;
        this.vf = a.$serialize;
        for (var b in a) b.substr(0, 1) != "$" && (this.Fb[b] = a[b])
    },
    sync: function(a, b, c) {
        typeof b != "function" && (c = b, b = null);
        if (a.name != "DataStore") a = a.data;
        var d = dhx.bind(function() {
            this.order = dhx.toArray([].concat(a.order));
            this.A = null;
            this.pull = a.pull;
            b && this.silent(b);
            this.gf && this.gf();
            c ? c = !1 : this.refresh()
        }, this);
        a.attachEvent("onStoreUpdated", d);
        d()
    },
    add: function(a, b) {
        if (this.Fb) {
            var a = a || {}, c;
            for (c in this.Fb) a[c] = a[c] || this.Fb[c];
            this.Gc ? this.Gc(a) :
                this.fb && this.fb(a)
        }
        var d = this.id(a),
            e = this.dataCount();
        if (dhx.isUndefined(b) || b < 0) b = e;
        b > e && (b = Math.min(this.order.length, b));
        if (this.callEvent("onBeforeAdd", [d, a, b]) === !1) return !1;
        if (this.exists(d)) return dhx.error("Not unique ID");
        this.pull[d] = a;
        this.order.insertAt(d, b);
        if (this.A) {
            var f = this.A.length;
            !b && this.order.length && (f = 0);
            this.A.insertAt(d, f)
        }
        this.callEvent("onafterAdd", [d, b]);
        this.callEvent("onStoreUpdated", [d, a, "add"]);
        return d
    },
    remove: function(a) {
        if (dhx.isArray(a))
            for (var b = 0; b < a.length; b++) this.remove(a[b]);
        else {
            if (this.callEvent("onBeforeDelete", [a]) === !1) return !1;
            if (!this.exists(a)) return dhx.error("Not existing ID", a);
            var c = this.item(a);
            this.order.remove(a);
            this.A && this.A.remove(a);
            delete this.pull[a];
            this.callEvent("onafterdelete", [a]);
            this.callEvent("onStoreUpdated", [a, c, "delete"])
        }
    },
    clearAll: function() {
        this.pull = {};
        this.order = dhx.toArray();
        this.A = null;
        this.callEvent("onClearAll", []);
        this.refresh()
    },
    idByIndex: function(a) {
        return this.order[a]
    },
    indexById: function(a) {
        var b = this.order.find(a);
        return b
    },
    next: function(a, b) {
        return this.order[this.indexById(a) + (b || 1)]
    },
    first: function() {
        return this.order[0]
    },
    last: function() {
        return this.order[this.order.length - 1]
    },
    previous: function(a, b) {
        return this.order[this.indexById(a) - (b || 1)]
    },
    sort: function(a, b, c) {
        var d = a;
        typeof a == "function" ? d = {
            as: a,
            dir: b
        } : typeof a == "string" && (d = {
            by: a,
            dir: b,
            as: c
        });
        var e = [d.by, d.dir, d.as];
        if (this.callEvent("onbeforesort", e)) {
            if (this.order.length) {
                var f = dhx.sort.create(d),
                    g = this.getRange(this.first(), this.last());
                g.sort(f);
                this.order =
                    g.map(function(a) {
                        return this.id(a)
                    }, this)
            }
            this.refresh();
            this.callEvent("onaftersort", e)
        }
    },
    filter: function(a, b, c) {
        if (this.callEvent("onBeforeFilter", [a, b])) {
            if (this.A && !c) this.order = this.A, delete this.A;
            if (this.order.length) {
                if (a) {
                    var d = a,
                        b = b || "";
                    typeof a == "string" && (a = dhx.Template(a), b = b.toString().toLowerCase(), d = function(b, c) {
                        return a(b).toLowerCase().indexOf(c) != -1
                    });
                    for (var e = dhx.toArray(), f = 0; f < this.order.length; f++) {
                        var g = this.order[f];
                        d(this.item(g), b) && e.push(g)
                    }
                    if (!c || !this.A) this.A = this.order;
                    this.order = e
                }
                this.refresh();
                this.callEvent("onAfterFilter", [])
            }
        }
    },
    each: function(a, b) {
        for (var c = 0; c < this.order.length; c++) a.call(b || this, this.item(this.order[c]))
    },
    Xe: function(a, b) {
        return function() {
            return a[b].apply(a, arguments)
        }
    },
    provideApi: function(a, b) {
        b && this.mapEvent({
            onbeforesort: a,
            onaftersort: a,
            onbeforeadd: a,
            onafteradd: a,
            onbeforedelete: a,
            onafterdelete: a,
            onbeforeupdate: a
        });
        for (var c = "sort,add,remove,exists,idByIndex,indexById,item,update,refresh,dataCount,filter,next,previous,clearAll,first,last,serialize,sync".split(","),
                d = 0; d < c.length; d++) a[c[d]] = this.Xe(this, c[d])
    },
    serialize: function() {
        for (var a = this.order, b = [], c = 0; c < a.length; c++) {
            var d = this.pull[a[c]];
            if (this.vf && (d = this.vf(d), d === !1)) continue;
            b.push(d)
        }
        return b
    }
};
dhx.sort = {
    create: function(a) {
        return dhx.sort.dir(a.dir, dhx.sort.by(a.by, a.as))
    },
    as: {
        "int": function(a, b) {
            a *= 1;
            b *= 1;
            return a > b ? 1 : a < b ? -1 : 0
        },
        string_strict: function(a, b) {
            a = a.toString();
            b = b.toString();
            return a > b ? 1 : a < b ? -1 : 0
        },
        string: function(a, b) {
            a = a.toString().toLowerCase();
            b = b.toString().toLowerCase();
            return a > b ? 1 : a < b ? -1 : 0
        }
    },
    by: function(a, b) {
        if (!a) return b;
        typeof b != "function" && (b = dhx.sort.as[b || "string"]);
        a = dhx.Template(a);
        return function(c, d) {
            return b(a(c), a(d))
        }
    },
    dir: function(a, b) {
        return a == "asc" || !a ?
            b : function(a, d) {
                return b(a, d) * -1
        }
    }
};
dhx.BaseBind = {
    bind: function(a, b, c) {
        typeof a == "string" && (a = dhx.ui.get(a));
        a.ld && a.ld();
        this.ld && this.ld();
        a.getBindData || dhx.extend(a, dhx.BindSource);
        if (!this.fg) {
            var d = this.render;
            if (this.filter) {
                var e = this.g.id;
                this.data.gf = function() {
                    a.pb[e] = !1
                }
            }
            this.render = function() {
                if (!this.Ke) {
                    this.Ke = !0;
                    var a = this.callEvent("onBindRequest");
                    this.Ke = !1;
                    return d.apply(this, a === !1 ? arguments : [])
                }
            };
            if (this.getValue || this.getValues) this.save = function() {
                if (!this.validate || this.validate()) a.Bi(this.getValue ? this.getValue :
                    this.getValues(), this.g.id)
            };
            this.fg = !0
        }
        a.addBind(this.g.id, b, c);
        var f = this.g.id;
        this.attachEvent(this.touchable ? "onAfterRender" : "onBindRequest", function() {
            return a.getBindData(f)
        });
        !this.g.dataFeed && this.loadNext && this.data.attachEvent("onStoreLoad", function() {
            a.pb[f] = !1
        });
        this.isVisible(this.g.id) && this.refresh()
    }
};
dhx.BindSource = {
    $init: function() {
        this.Vb = {};
        this.pb = {};
        this.kd = {};
        this.gg(this)
    },
    saveBatch: function(a) {
        this.je = !0;
        a.call(this);
        this.je = !1;
        this.Nb()
    },
    Bi: function(a, b) {
        b && (this.kd[b] = !0);
        if (this.setValue) this.setValue(a);
        else if (this.setValues) this.setValues(a);
        else {
            var c = this.getCursor();
            c && (a = dhx.extend(this.item(c), a, !0), this.update(c, a))
        }
        this.callEvent("onBindUpdate", [a, b]);
        this.save && this.save();
        b && (this.kd[b] = !1)
    },
    getBindData: function(a, b) {
        if (this.pb[a]) return !1;
        var c = dhx.ui.get(a);
        c.isVisible(c.g.id) &&
            (this.pb[a] = !0, this.Qc(c, this.Vb[a][0], this.Vb[a][1]), b && c.filter && c.refresh())
    },
    addBind: function(a, b, c) {
        this.Vb[a] = [b, c]
    },
    gg: function(a) {
        a.filter ? dhx.extend(this, dhx.CollectionBind) : a.setValue ? dhx.extend(this, dhx.ValueBind) : dhx.extend(this, dhx.RecordBind)
    },
    Nb: function() {
        if (!this.je)
            for (var a in this.Vb) this.kd[a] || (this.pb[a] = !1, this.getBindData(a, !0))
    },
    Wd: function(a, b, c) {
        a.setValue ? a.setValue(c ? c[b] : c) : a.filter ? a.data.silent(function() {
            this.filter(b, c)
        }) : !c && a.clear ? a.clear() : a.be(c) && a.setValues(dhx.copy(c));
        a.callEvent("onBindApply", [c, b, this])
    }
};
dhx.DataValue = dhx.proto({
    name: "DataValue",
    isVisible: function() {
        return !0
    },
    $init: function(a) {
        var b = (this.data = a) && a.id ? a.id : dhx.uid();
        this.g = {
            id: b
        };
        dhx.ui.views[b] = this
    },
    setValue: function(a) {
        this.data = a;
        this.callEvent("onChange", [a])
    },
    getValue: function() {
        return this.data
    },
    refresh: function() {
        this.callEvent("onBindRequest")
    }
}, dhx.EventSystem, dhx.BaseBind);
dhx.DataRecord = dhx.proto({
    name: "DataRecord",
    isVisible: function() {
        return !0
    },
    $init: function(a) {
        this.data = a || {};
        var b = a && a.id ? a.id : dhx.uid();
        this.g = {
            id: b
        };
        dhx.ui.views[b] = this
    },
    getValues: function() {
        return this.data
    },
    setValues: function(a) {
        this.data = a;
        this.callEvent("onChange", [a])
    },
    refresh: function() {
        this.callEvent("onBindRequest")
    }
}, dhx.EventSystem, dhx.BaseBind, dhx.AtomDataLoader, dhx.Settings);
dhx.DataCollection = dhx.proto({
    name: "DataCollection",
    isVisible: function() {
        return !this.data.order.length && !this.data.A && !this.g.dataFeed ? !1 : !0
    },
    $init: function(a) {
        this.data.provideApi(this, !0);
        var b = a && a.id ? a.id : dhx.uid();
        this.g.id = b;
        dhx.ui.views[b] = this;
        this.data.attachEvent("onStoreLoad", dhx.bind(function() {
            this.callEvent("onBindRequest", [])
        }, this))
    },
    refresh: function() {
        this.callEvent("onBindRequest", [])
    }
}, dhx.EventSystem, dhx.DataLoader, dhx.BaseBind, dhx.Settings);
dhx.ValueBind = {
    $init: function() {
        this.attachEvent("onChange", this.Nb)
    },
    Qc: function(a, b, c) {
        var d = this.getValue() || "";
        c && (d = c(d));
        if (a.setValue) a.setValue(d);
        else if (a.filter) a.data.silent(function() {
            this.filter(b, d)
        });
        else {
            var e = {};
            e[b] = d;
            a.be(d) && a.setValues(e)
        }
        a.callEvent("onBindApply", [d, b, this])
    }
};
dhx.RecordBind = {
    $init: function() {
        this.attachEvent("onChange", this.Nb)
    },
    Qc: function(a, b) {
        var c = this.getValues() || null;
        this.Wd(a, b, c)
    }
};
dhx.CollectionBind = {
    $init: function() {
        this.ta = null;
        this.attachEvent("onSelectChange", function() {
            var a = this.getSelected();
            this.setCursor(a ? a.id || a : null)
        });
        this.attachEvent("onAfterCursorChange", this.Nb);
        this.data.attachEvent("onStoreUpdated", dhx.bind(function(a) {
            a && a == this.getCursor() && this.Nb()
        }, this));
        this.data.attachEvent("onClearAll", dhx.bind(function() {
            this.ta = null
        }, this));
        this.data.attachEvent("onIdChange", dhx.bind(function(a, b) {
            if (this.ta == a) this.ta = b
        }, this))
    },
    setCursor: function(a) {
        if (!(a == this.ta ||
            a !== null && !this.item(a))) this.callEvent("onBeforeCursorChange", [this.ta]), this.ta = a, this.callEvent("onAfterCursorChange", [a])
    },
    getCursor: function() {
        return this.ta
    },
    Qc: function(a, b) {
        var c = this.item(this.getCursor()) || null;
        this.Wd(a, b, c)
    }
};
dhx.AtomRender = {
    ra: function(a) {
        return this.g.template(a, this)
    },
    render: function() {
        if (this.isVisible(this.g.id)) {
            if (!this.callEvent || this.callEvent("onBeforeRender", [this.data])) {
                if (this.data) this.i.innerHTML = this.ra(this.data);
                this.callEvent && this.callEvent("onAfterRender", [])
            }
            return !0
        }
        return !1
    },
    template_setter: dhx.Template
};
dhx.SingleRender = dhx.proto({
    ra: function(a) {
        var b = this.type;
        return (b.templateStart ? b.templateStart(a, b) : "") + b.template(a, b) + (b.templateEnd ? b.templateEnd(a, b) : "")
    },
    customize: function(a) {
        dhx.Type(this, a)
    }
}, dhx.AtomRender);
dhx.ActiveContent = {
    $init: function(a) {
        if (a.activeContent) {
            this.$ready.push(this.nh);
            this.Qb = {};
            this.Rb = {};
            this.nb = {};
            this.Pc = {};
            for (var b in a.activeContent)
                if (this[b] = this.eg(b), a.activeContent[b].earlyInit) {
                    var c = dhx.G;
                    dhx.G = null;
                    this[b].call(this, {}, this, a.activeContent);
                    dhx.G = c
                }
        }
    },
    nh: function() {
        if (this.filter) {
            for (var a in this.g.activeContent) this.type[a] = this[a], this[a] = this.Ch(a);
            this.type.masterUI = this
        }
    },
    Ch: function(a) {
        return function(b) {
            for (var c = this.Pc[a], d = c.g.id, e = this.aa(b).getElementsByTagName("DIV"),
                    f = 0; f < e.length; f++)
                if (e[f].getAttribute("view_id") == d) {
                    c.h = c.i = e[f];
                    break
                }
            return c
        }
    },
    fh: function(a, b, c) {
        return function(d) {
            if (d)
                for (var e = d.target || d.srcElement; e;) {
                    if (e.getAttribute && e.getAttribute("view_id")) {
                        a.i = a.h = a.$view = e;
                        if (c.locate) {
                            var f = c.locate(e.parentNode),
                                g = c.nb[b][f];
                            a.g.value = g;
                            a.g.$masterId = f
                        }
                        return e
                    }
                    e = e.parentNode
                }
            return a.h
        }
    },
    Hi: function(a, b) {
        return function(c) {
            var d = b.data;
            if (b.filter) {
                var e = b.locate(this.h.parentNode),
                    d = b.item(e);
                b.Rb[a][e] = this.h.outerHTML || (new XMLSerializer).serializeToString(this.h);
                b.nb[a][e] = c
            }
            d[a] = c
        }
    },
    eg: function(a) {
        return function(b, c, d) {
            var e = c.Qb ? c : c.masterUI;
            if (!e.Qb[a]) {
                var f = document.createElement("DIV"),
                    d = d || e.g.activeContent,
                    g = dhx.ui(d[a], f);
                g.getNode = e.fh(g, a, e);
                g.attachEvent("onChange", e.Hi(a, e));
                e.Pc[a] = g;
                e.Qb[a] = f.innerHTML;
                e.Rb[a] = {};
                e.nb[a] = {}
            }
            e.filter && b[a] != e.nb[a] && !dhx.isUndefined(b[a]) && (g = e.Pc[a], g.blockEvent(), g.setValue(b[a]), g.unblockEvent(), e.nb[a][b.id] = b[a], e.Rb[a][b.id] = g.h.outerHTML || (new XMLSerializer).serializeToString(g.h));
            return e.Rb[a][b.id] ||
                e.Qb[a]
        }
    }
};
dhx.IdSpace = {
    $init: function() {
        var a = dhx.Ta;
        this.Fa = {};
        dhx.Ta = this;
        this.Pf = {};
        this.getTopParent = dhx.bind(function() {
            return this
        }, this);
        this.$ready.push(function() {
            dhx.Ta = a;
            for (var b in this.Fa) this.Fa[b].mapEvent && !this.Fa[b].ya.onitemclick && this.Fa[b].mapEvent({
                onbeforetabclick: this,
                onaftertabclick: this,
                onitemclick: this
            }), this.Fa[b].getTopParent = this.getTopParent
        })
    },
    $$: function(a) {
        return this.Fa[a]
    },
    innerId: function(a) {
        return this.Pf[a]
    }
};
(function() {
    var a = [],
        b = dhx.ui;
    if (!dhx.ui) b = dhx.ui = function(c, d, e) {
        dhx.Rf = !0;
        var f = c,
            f = dhx.toNode(c.container || d || document.body);
        f == document.body && dhx.ui.ue();
        var g = c.g || f && f.j && !e ? c : b.Ca(c);
        f.appendChild ? (f.appendChild(g.h), !g.setPosition && f == document.body && a.push(g), c.skipResize || g.adjust()) : f.Aa ? (g.getParent && g.getParent() && g.getParent().yd(g), f.Aa(g, e)) : dhx.error("not existing parent:" + c.container);
        dhx.Rf = !1;
        return g
    };
    dhx.ui.scrollSize = dhx.env.touch ? 0 : 18;
    dhx.ui.Sf = function(a) {
        return a + (this.af[a] =
            (this.af[a] || 0) + 1)
    };
    dhx.ui.af = {};
    dhx.ui.ue = function() {
        dhx.html.addStyle("html, body{ height:100%; }");
        dhx.ui.ue = function() {}
    };
    dhx.ui.resize = function() {
        if (!dhx.ui.ve)
            for (var b = 0; b < a.length; b++) a[b].adjust()
    };
    dhx.event(window, "resize", dhx.ui.resize);
    b.Zc = {};
    b.delay = function(a) {
        dhx.ui.Zc[a.id] = a
    };
    dhx.ui.zIndex = function() {
        return dhx.ui.ej++
    };
    dhx.ui.ej = 1;
    b.Ca = function() {
        var a = dhx.html.create("DIV", {
            "class": "dhx_skin_settings"
        });
        document.body.appendChild(a);
        dhx.html.remove(a);
        b.Ca = b.aj;
        return b.Ca.apply(this,
            arguments)
    };
    b.aj = function(a) {
        if (a.view) {
            var d = a.view;
            return new b[d](a)
        } else return a.rows || a.cols ? new b.layout(a) : a.cells ? new b.multiview(a) : a.template || a.content ? new b.template(a) : new b.view(a)
    };
    b.views = {};
    b.get = function(a) {
        if (!a) return null;
        if (b.views[a]) return b.views[a];
        if (b.Zc[a]) return dhx.ui(b.Zc[a]);
        var d = a;
        if (typeof a == "object") {
            if (a.g) return a;
            d = a.target || a.srcElement || a
        }
        return b.views[dhx.html.locate({
            target: dhx.toNode(d)
        }, "view_id")]
    };
    if (dhx.isUndefined(window.$$)) $$ = b.get;
    dhx.protoUI({
        name: "baseview",
        $init: function(a) {
            if (!a.id) a.id = dhx.ui.Sf(this.name);
            this.G = dhx.G;
            dhx.G = null;
            this.$view = this.k = this.h = dhx.html.create("DIV", {
                "class": "dhx_view"
            })
        },
        defaults: {
            width: -1,
            height: -1,
            gravity: 1
        },
        getNode: function() {
            return this.h
        },
        getParent: function() {
            return this.G || null
        },
        isVisible: function(a) {
            if (this.g.hidden) {
                if (a) {
                    if (!this.Va) this.Va = [], this.jd = {};
                    this.jd[a] || (this.jd[a] = !0, this.Va.push(a))
                }
                return !1
            }
            var b = this.getParent();
            return b ? b.isVisible(a, this.g.id) : !0
        },
        container_setter: function() {
            return !0
        },
        css_setter: function(a) {
            this.h.className +=
                " " + a;
            return a
        },
        id_setter: function(a) {
            if (dhx.Ta && dhx.Ta != this) {
                var b = a;
                dhx.Ta.Fa[a] = this;
                a = dhx.ui.Sf(this.name);
                dhx.Ta.Pf[a] = b
            }
            dhx.ui.views[a] = this;
            this.h.setAttribute("view_id", a);
            return a
        },
        $setSize: function(a, b) {
            if (this.P && this.P[0] == a && this.P[1] == b) return !1;
            this.P = [a, b];
            this.n = a;
            this.n = a - (this.g.scroll && !dhx.Touch ? dhx.ui.scrollSize : 0);
            this.r = b;
            this.$width = this.n;
            this.$height = this.r;
            this.h.style.width = a + "px";
            this.h.style.height = b + "px";
            return !0
        },
        $getSize: function() {
            var a = this.g.width,
                b = this.g.height,
                e, f;
            e = f = this.g.gravity;
            a == -1 ? a = 0 : (e = 0, a += this.g.scroll && !dhx.Touch ? dhx.ui.scrollSize : 0);
            b == -1 ? b = 0 : f = 0;
            return [e, a, f, b]
        },
        show: function(a) {
            if (this.getParent()) {
                var b = this.getParent();
                !a && this.g.animate && b.g.animate && (a = dhx.extend(b.g.animate ? dhx.extend({}, b.g.animate) : {}, this.g.animate, !0));
                var e = arguments.length < 2;
                if (e ? b.ib : b.Wa)(e ? b.ib : b.Wa).call(b, this, a)
            }
        },
        hidden_setter: function(a) {
            a && this.hide();
            return this.g.hidden
        },
        hide: function() {
            this.show(null, !0)
        },
        adjust: function() {
            var a = this.h;
            if (!this.G) a =
                a.parentNode;
            if (!this.h.parentNode) return !1;
            var b = this.h.parentNode.offsetWidth,
                e = this.h.parentNode.offsetHeight,
                f = this.$getSize(),
                b = f[0] ? Math.max(b, f[1]) : f[1],
                e = f[2] ? Math.max(e, f[3]) : f[3];
            this.$setSize(b, e)
        },
        resize: function(a) {
            if (!dhx.Tc) {
                var b = this.$getSize(),
                    e = b[1],
                    f = b[3],
                    g = this.zh || this.P;
                if (arguments.length == 2) {
                    var h = !1;
                    if (e > 0 && g[0] != e || a) this.g.width = e, h = !0;
                    if (f > 0 && g[1] != f || a) this.g.height = f, h = !0;
                    if (!h) return !1
                }
                var i = this.getParent();
                if (i) i.resizeChildren && i.resizeChildren();
                else return this.$setSize(e ||
                    g[0], f || g[1], !0), !1;
                return !0
            }
        }
    }, dhx.Settings, dhx.Destruction, dhx.BaseBind);
    dhx.protoUI({
        name: "view",
        $init: function(a) {
            this.k.style.borderWidth = "1px";
            this.setValue && dhx.za && (dhx.za.elements[a.name || a.id] = this)
        },
        $getSize: function() {
            var a = this.g.m,
                b = dhx.ui.baseview.prototype.$getSize.call(this);
            if (!a) return b;
            var e = (a.left ? 0 : 1) + (a.right ? 0 : 1),
                f = (a.top ? 0 : 1) + (a.bottom ? 0 : 1);
            b[1] && e && (b[1] += e);
            b[3] && f && (b[3] += f);
            return b
        },
        $setSize: function(a, b) {
            var e = this.g.m;
            this.zh = [a, b];
            e ? (a -= (e.left ? 0 : 1) + (e.right ? 0 : 1),
                b -= (e.top ? 0 : 1) + (e.bottom ? 0 : 1)) : this.k.style.borderWidth = "0px";
            return dhx.ui.baseview.prototype.$setSize.call(this, a, b)
        }
    }, dhx.ui.baseview)
})();
dhx.ui.view.call(dhx);
dhx.protoUI({
    name: "baselayout",
    $init: function() {
        this.$ready.push(this.U);
        this.i = this.k
    },
    rows_setter: function(a) {
        this.p = 1;
        this.he = "";
        this.X = a
    },
    cols_setter: function(a) {
        this.p = 0;
        this.he = "left";
        this.X = a
    },
    yd: function(a) {
        dhx.PowerArray.removeAt.call(this.j, dhx.PowerArray.find.call(this.j, a));
        this.resizeChildren(!0)
    },
    Aa: function(a, b) {
        if (dhx.isUndefined(b)) {
            for (var c = 0; c < this.j.length; c++) this.j[c].destructor();
            this.X = a;
            this.U()
        } else {
            if (typeof b == "number") {
                if (b < 0 || b > this.j.length) b = this.j.length;
                var d = (this.j[b] || {}).h;
                dhx.PowerArray.insertAt.call(this.j, a, b);
                dhx.html.insertBefore(a.h, d, this.i)
            } else {
                var e = dhx.ui.get(b),
                    b = dhx.PowerArray.find.call(this.j, e);
                e.h.parentNode.insertBefore(a.h, e.h);
                e.destructor();
                this.j[b] = a
            }
            a.h.style.cssFloat = a.h.style.styleFloat = this.he;
            this.j[b].G = this
        }
        this.resizeChildren(!0)
    },
    reconstruct: function() {
        for (var a = 0; a < this.j.length; a++) dhx.html.remove(this.j[a].h);
        this.U();
        this.$setSize(this.P[0], this.P[1])
    },
    Wa: function(a, b, c) {
        if (!a.g.hidden) a.g.hidden = !0, dhx.html.remove(a.h), this.oc++, !c && !dhx.Rf && this.resizeChildren(!0)
    },
    resizeChildren: function() {
        if (this.xb) {
            var a = this.getParent();
            a && a.resizeChildren && a.resizeChildren();
            var b = this.$getSize(),
                c = this.xb[0],
                d = this.xb[1];
            this.La(c, d)
        }
    },
    index: function(a) {
        if (a.g) a = a.g.id;
        for (var b = 0; b < this.j.length; b++)
            if (this.j[b].g.id == a) return b;
        return -1
    },
    ib: function(a, b, c) {
        if (a.g.hidden) a.g.hidden = !1, dhx.html.insertBefore(a.h, (this.j[this.index(a) + 1] || {}).h, this.i || this.h), this.oc--, c || this.resizeChildren(!0)
    },
    showBatch: function(a) {
        if (this.g.visibleBatch !=
            a) {
            this.g.visibleBatch = a;
            for (var b = [], c = 0; c < this.j.length; c++) this.j[c].g.batch || b.push(this.j[c]), this.j[c].g.batch == a ? b.push(this.j[c]) : this.Wa(this.j[c], null, !0);
            for (c = 0; c < b.length; c++) this.ib(b[c], null, !0);
            this.resizeChildren()
        }
    },
    U: function(a) {
        a = this.X || a;
        this.X = null;
        this.j = [];
        this.h.style.verticalAlign = "top";
        for (var b = 0; b < a.length; b++) {
            dhx.G = this;
            this.j[b] = dhx.ui.Ca(a[b], this);
            if (!this.p) this.j[b].h.style.cssFloat = this.j[b].h.style.styleFloat = "left";
            if (this.g.visibleBatch && this.g.visibleBatch !=
                this.j[b].g.batch && this.j[b].g.batch) this.j[b].g.hidden = !0;
            this.j[b].g.hidden || (this.i || this.k).appendChild(this.j[b].h)
        }
    },
    $getSize: function() {
        var a = 0,
            b = 0,
            c = 0,
            d = 0;
        this.qa = [];
        for (var e = 0; e < this.j.length; e++)
            if (!this.j[e].g.hidden) {
                var f = this.qa[e] = this.j[e].$getSize();
                this.p ? (a = Math.max(a, f[1]), c = Math.max(c, f[0]), b += f[3], d += f[2]) : (b = Math.max(b, f[3]), d = Math.max(d, f[2]), a += f[1], c += f[0])
            }
        this.uc = [c, a, d, b];
        if (this.g.height > -1) b = this.g.height, d = 0;
        if (this.g.width > -1) a = this.g.width, c = 0;
        this.p ? (a && (c = 0), d &&
            (b = 0)) : (b && (d = 0), c && (a = 0));
        return [c, a, d, b]
    },
    $setSize: function(a, b) {
        this.xb = [a, b];
        dhx.ui.baseview.prototype.$setSize.call(this, a, b);
        this.La(a, b)
    },
    La: function(a, b) {
        dhx.Tc = (dhx.Tc || 0) + 1;
        for (var c = a - this.uc[1], d = b - this.uc[3], e = this.uc[0], f = this.uc[2], g = this.j.length - 1, h = 0; h < this.j.length; h++)
            if (!this.j[h].g.hidden) {
                if (this.p) {
                    var i = a,
                        j;
                    this.qa[h][2] ? (j = Math.round(this.qa[h][2] * d / f), d -= j, f -= this.qa[h][2]) : (j = this.qa[h][3], h == g && d > 0 && (j += d))
                } else j = b, this.qa[h][0] ? (i = Math.round(this.qa[h][0] * c / e), c -= i,
                    e -= this.qa[h][0]) : (i = this.qa[h][1], h == g && c > 0 && (i += c));
                this.j[h].$setSize(i, j)
            }
        dhx.Tc -= 1
    },
    ij: function(a, b) {
        var c = this.index(a);
        return c == -1 ? null : this.j[c + b]
    },
    first: function() {
        return this.j[0]
    }
}, dhx.ui.baseview);
dhx.protoUI({
    name: "layout",
    $init: function() {
        this.oc = 0
    },
    U: function() {
        this.h.className += " dhx_layout_" + (this.g.type || "");
        if (this.g.margin) this.ma = this.g.margin;
        if (this.g.padding) this.L = this.g.padding;
        var a = this.X;
        if (!this.g.m) this.g.m = {
            top: !0,
            left: !0,
            right: !0,
            bottom: !0
        };
        this.Vd(a);
        dhx.ui.baselayout.prototype.U.call(this, a);
        this.Rd(a)
    },
    $getSize: function() {
        var a = dhx.ui.baselayout.prototype.$getSize.call(this),
            b = this.ma * (this.j.length - this.oc - 1);
        this.p ? a[3] && (a[3] += b) : a[1] && (a[1] += b);
        if (this.L && (a[1] &&
            (a[1] += this.L * 2), a[3] && (a[3] += this.L * 2), this.ma > -1)) {
            var c = this.g.m;
            if (c) {
                var d = (c.left ? 0 : 1) + (c.right ? 0 : 1),
                    e = (c.top ? 0 : 1) + (c.bottom ? 0 : 1);
                a[1] && d && (a[1] += d);
                a[3] && e && (a[3] += e)
            }
        }
        return a
    },
    $setSize: function(a, b) {
        this.xb = [a, b];
        var c;
        c = this.L && this.ma > 0 ? dhx.ui.view.prototype.$setSize.call(this, a, b) : dhx.ui.baseview.prototype.$setSize.call(this, a, b);
        this.La(this.n, this.r)
    },
    La: function(a, b) {
        var c = this.ma * (this.j.length - this.oc - 1);
        this.p ? (b -= c + this.L * 2, a -= this.L * 2) : (a -= c + this.L * 2, b -= this.L * 2);
        return dhx.ui.baselayout.prototype.La.call(this,
            a, b)
    },
    resizeChildren: function(a) {
        if (a && this.type != "clean") {
            for (var b = [], c = 0; c < this.j.length; c++) {
                var d = this.j[c];
                b[c] = d.g;
                var e = d.xb ? "0px" : "1px";
                d.h.style.borderTopWidth = d.h.style.borderBottomWidth = d.h.style.borderLeftWidth = d.h.style.borderRightWidth = e
            }
            this.Vd(b);
            this.Rd(this.j)
        }
        dhx.ui.baselayout.prototype.resizeChildren.call(this)
    },
    Vd: function(a) {
        if (this.L && this.ma)
            for (var b = 0; b < a.length; b++) a[b].m = {
                top: !1,
                left: !1,
                right: !1,
                bottom: !1
            };
        else {
            for (b = 0; b < a.length; b++) a[b].m = dhx.copy(this.g.m);
            var c = !1;
            this.g.type == "clean" && (c = !0);
            if (this.p) {
                for (b = 1; b < a.length - 1; b++) a[b].m.top = a[b].m.bottom = c;
                if (a.length > 1) {
                    if (this.g.type != "head") a[0].m.bottom = c;
                    a[a.length - 1].m.top = c
                }
            } else {
                for (b = 1; b < a.length - 1; b++) a[b].m.left = a[b].m.right = c;
                if (a.length > 1) {
                    if (this.g.type != "head") a[0].m.right = c;
                    a[a.length - 1].m.left = c
                }
            }
        }
    },
    Rd: function(a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = this.j[c];
            if (d.g.hidden && this.j[c + 1]) this.j[c + 1].g.m = d.g.m, c == b && b++;
            var e = d.g.m;
            if (e.top) d.h.style.borderTopWidth = "0px";
            if (e.left) d.h.style.borderLeftWidth =
                "0px";
            if (e.right) d.h.style.borderRightWidth = "0px";
            if (e.bottom) d.h.style.borderBottomWidth = "0px"
        }
        var f = this.p ? "marginLeft" : "marginTop",
            g = this.p ? "marginTop" : "marginLeft";
        if (this.L)
            for (c = 0; c < a.length; c++) this.j[c].h.style[f] = this.L + "px";
        this.j[b].h.style[g] = (this.L || 0) + "px";
        for (var h = b + 1; h < a.length; h++) this.j[h].h.style[g] = this.ma + "px"
    },
    type_setter: function(a) {
        this.ma = this.Fh[a];
        if ((this.L = this.$h[a]) && this.ma > 0) this.k.style.borderWidth = "1px";
        return a
    },
    Fh: {
        space: 10,
        wide: 4,
        clean: 0,
        head: 4,
        line: -1
    },
    $h: {
        space: 10,
        wide: 0,
        clean: 0,
        head: 0,
        line: 0
    },
    ma: -1,
    L: 0
}, dhx.ui.baselayout);
dhx.ui.layout.call(dhx);
dhx.protoUI({
    name: "template",
    $init: function() {
        this.attachEvent("onXLE", this.render)
    },
    setValues: function(a) {
        this.data = a;
        this.render()
    },
    defaults: {
        template: dhx.Template.empty,
        loading: !0
    },
    kf: function() {
        if (!this.xc) this.render(), this.xc = !0
    },
    src_setter: function(a) {
        this.xc = !0;
        this.callEvent("onXLS", []);
        dhx.ajax(a, dhx.bind(function(a) {
            this.g.template = dhx.Template(a);
            this.xc = !1;
            this.kf();
            this.callEvent("onXLE", [])
        }, this));
        return a
    },
    content_setter: function(a) {
        if (a) this.xc = !0, this.i.appendChild(dhx.toNode(a))
    },
    refresh: function() {
        this.render()
    },
    waitMessage_setter: function(a) {
        dhx.extend(this, dhx.OverlayBox);
        return a
    },
    $setSize: function(a, b) {
        dhx.ui.view.prototype.$setSize.call(this, a, b) && this.kf()
    },
    Vh: !0
}, dhx.Scrollable, dhx.AtomDataLoader, dhx.AtomRender, dhx.EventSystem, dhx.ui.view);
dhx.protoUI({
    name: "iframe",
    defaults: {
        loading: !0
    },
    $init: function() {
        this.i = this.k;
        this.k.innerHTML = "<iframe style='width:100%; height:100%' frameborder='0' src='about:blank'></iframe>"
    },
    load: function(a) {
        this.src_setter(a)
    },
    src_setter: function(a) {
        this.k.childNodes[0].src = a;
        this.callEvent("onXLS", []);
        dhx.delay(this.Gi, this);
        return a
    },
    Gi: function() {
        try {
            dhx.event(this.getWindow(), "load", dhx.bind(function() {
                this.callEvent("onXLE", [])
            }, this))
        } catch (a) {
            this.callEvent("onXLE", [])
        }
    },
    getWindow: function() {
        return this.k.childNodes[0].contentWindow
    },
    waitMessage_setter: function(a) {
        dhx.extend(this, dhx.OverlayBox);
        return a
    }
}, dhx.ui.view, dhx.EventSystem);
dhx.OverlayBox = {
    $init: function() {
        if (dhx.isUndefined(this.Ja) && this.attachEvent) this.attachEvent("onXLS", this.showOverlay), this.attachEvent("onXLE", this.hideOverlay), this.Ja = null
    },
    showOverlay: function(a) {
        if (!this.Ja) this.Ja = dhx.html.create("DIV", {
            "class": "dhx_loading_overlay"
        }, a || ""), dhx.html.insertBefore(this.Ja, this.h.firstChild, this.h)
    },
    hideOverlay: function() {
        if (this.Ja) dhx.html.remove(this.Ja), this.Ja = null
    }
};
dhx.protoUI({
    name: "scrollview",
    defaults: {
        scroll: "x",
        scrollSpeed: "0ms"
    },
    $init: function() {
        this.h.className += " dhx_scrollview"
    },
    content_setter: function(a) {
        this.l = dhx.ui.Ca(a);
        this.l.G = this;
        this.i.appendChild(this.l.h)
    },
    body_setter: function(a) {
        return this.content_setter(a)
    },
    $getSize: function() {
        this.Pa = this.l.$getSize();
        if (this.g.scroll == "x" && this.Pa[3] > 0) this.g.height = this.Pa[3];
        else if (this.g.scroll == "y" && this.Pa[1] > 0) this.g.width = this.Pa[1];
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    $setSize: function(a,
        b) {
        if (dhx.ui.view.prototype.$setSize.call(this, a, b)) this.l.$setSize(Math.max(this.Pa[1], this.n), Math.max(this.Pa[3], this.r)), this.i.style.width = this.l.n + "px", this.i.style.height = this.l.r + "px"
    },
    Aa: function(a) {
        this.l.destructor();
        this.l = a;
        this.l.G = this;
        this.H.appendChild(this.l.h);
        this.resize()
    }
}, dhx.Scrollable, dhx.ui.view);
dhx.protoUI({
    name: "calendar",
    defaults: {
        date: null,
        startOnMonday: !0,
        navigation: !0,
        weekHeader: !1,
        weekNumber: !1,
        timeSelect: !1,
        skipEmptyWeeks: !0,
        cellHeight: 36,
        minuteStep: 15,
        hourStart: 6,
        hourEnd: 24,
        hourFormat: "%H",
        calendarHeader: "%F %Y",
        calendarDay: "%d",
        calendarWeekHeader: "W#",
        calendarWeek: "%W",
        width: 300,
        height: 300,
        selectedCss: "dhx_cal_selected_day"
    },
    skin: {
        monthHeaderHeight: 40,
        weekHeaderHeight: 22,
        timeSelectHeight: 38
    },
    hourFormat_setter: dhx.Date.dateToStr,
    calendarHeader_setter: dhx.Date.dateToStr,
    calendarDay_setter: dhx.Date.dateToStr,
    calendarHeader_setter: dhx.Date.dateToStr,
    calendarWeekHeader_setter: dhx.Date.dateToStr,
    calendarWeek_setter: dhx.Date.dateToStr,
    date_setter: function(a) {
        typeof a == "string" && (a = dhx.i18n.fullDateFormatDate(a));
        this.ca = this.ca || a;
        return a
    },
    $init: function() {
        this.Oa = {};
        this.Md = [];
        var a = "%Y-%m-%d";
        this.ae = dhx.Date.dateToStr(a);
        this.kg = dhx.Date.strToDate(a)
    },
    $getSize: function() {
        var a = this.g;
        if (a.cellHeight > 0) a.height = this.hh();
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    cellHeight_setter: function(a) {
        return a ==
            "auto" ? 0 : a
    },
    $setSize: function(a, b) {
        dhx.ui.view.prototype.$setSize.call(this, a, b) && this.render()
    },
    xe: function() {
        var a = this.g;
        if (!this.ca) this.ca = new Date;
        var b = new Date(this.ca);
        b.setDate(1);
        var c = b.getDay();
        this.Ih = new Date(b);
        this.Xf = a.startOnMonday ? 1 : 0;
        this.wc = (c - this.Xf + 7) % 7;
        this.qd = 32 - (new Date(b.getFullYear(), b.getMonth(), 32)).getDate();
        var d = 42 - this.wc - this.qd;
        this.hj = new Date(b.setDate(this.qd));
        this.V = a.skipEmptyWeeks ? 6 - Math.floor(d / 7) : 6;
        this.rd = this.V * 7 - this.wc - this.qd;
        this.gj = new Date(b.setDate(b.getDate() +
            d));
        this.Fe = this.skin.monthHeaderHeight + (a.weekHeader ? this.skin.weekHeaderHeight : 0) + (a.timeSelect ? this.skin.timeSelectHeight : 0)
    },
    hh: function() {
        this.xe();
        return this.Fe + this.V * this.g.cellHeight
    },
    Wg: function() {
        this.xe();
        var a = this.g;
        this.rb = [];
        this.sa = [];
        var b = this.n;
        b += 1;
        for (var c = this.r, d = a.weekNumber ? 8 : 7, e = 0; e < d; e++) this.sa[e] = Math.ceil(b / (d - e)), b -= this.sa[e];
        if (a.cellHeight <= 0)
            for (var f = 0; f < this.V; f++) this.rb[f] = Math.ceil((c - this.Fe) / (this.V - f)), c -= this.rb[f];
        else
            for (f = 0; f < this.V; f++) this.rb[f] =
                a.cellHeight
    },
    selectDate: function(a, b) {
        this.define("date", a);
        var c = this.g;
        b && this.showCalendar(c.date);
        var d = c.selectedCss;
        if (this.Oa[this.o]) dhx.html.removeCss(this.Oa[this.o], d), this.o = null;
        var e = this.ae(c.date);
        if (this.Oa[e]) dhx.html.addCss(this.Oa[e], d), this.o = e;
        c.timeSelect && this.zi(a)
    },
    zi: function(a) {
        var b = this.g,
            c = this.Md,
            a = a || b.date;
        if (c.length) c[0].value = Math.min(b.hourEnd, Math.max(a.getHours(), b.hourStart)), c[1].value = Math.floor(a.getMinutes() / b.minuteStep) * b.minuteStep
    },
    getSelectedDate: function() {
        var a =
            this.g;
        return a.date ? new Date(a.date) : null
    },
    getVisibleDate: function() {
        return new Date(this.ca)
    },
    setValue: function(a) {
        this.selectDate(a, !0)
    },
    getValue: function() {
        return this.getSelectedDate()
    },
    showCalendar: function(a) {
        typeof a == "string" && (a = dhx.i18m.fullDateFormatDate(a));
        if (!a || !(a.getFullYear() == this.ca.getFullYear() && a.getMonth() == this.ca.getMonth())) this.ca = a || this.ca, this.render(), this.resize()
    },
    refresh: function() {
        this.render()
    },
    render: function() {
        var a = this.g;
        if (this.isVisible(a.id)) {
            this.callEvent("onBeforeRender", []);
            this.Wg();
            var b = "<div class='dhx_mini_calendar'><div class='dhx_cal_month'>" + a.calendarHeader(this.ca);
            a.navigation && (b += this.Kh());
            b += "</div>";
            a.weekHeader && (b += "<div class='dhx_cal_header' style='height:" + this.skin.weekHeaderHeight + "px'>" + this.cj() + "</div>");
            b += "<div class='dhx_cal_body'>" + this.ig() + "</div>";
            a.timeSelect && (b += "<div class='dhx_cal_time_select'>" + this.Vi() + "</div>");
            b += "</div></div>";
            this.k.innerHTML = b;
            if (a.timeSelect) {
                for (var c = this.k.getElementsByTagName("select"), d = this.Md,
                        e = 0; e < c.length; e++) d[e] = c[e];
                d[0].onchange = function() {
                    a.date.setHours(this.value)
                };
                d[1].onchange = function() {
                    a.date.setMinutes(this.value)
                }
            }
            this.Oa = {};
            for (var f = this.k.getElementsByTagName("table"), g = f[f.length - 1].getElementsByTagName("div"), e = 0; e < g.length; e++) this.Oa[g[e].getAttribute("date")] = g[e];
            a.date && this.selectDate(a.date, !1);
            this.callEvent("onAfterRender", [])
        }
    },
    cj: function() {
        var a = this.g,
            b = "",
            c = a.startOnMonday ? 1 : 0,
            d = 0,
            e = 0;
        if (a.weekNumber) {
            var e = 1,
                f = a.calendarWeekHeader();
            b += "<div class='dhx_cal_week_header' style='width: " +
                (this.sa[0] - 2) + "px;' >" + f + "</div>";
            d += this.sa[0]
        }
        for (var g = 0; g < 7; g++) {
            var h = (c + g) % 7,
                i = dhx.Date.Locale.day_short[h],
                j = "dhx_cal_day_name",
                k = this.sa[g + e] - 2;
            g == 6 && (j += " dhx_cal_day_name_last");
            h === 0 && (j += " dhx_sunday");
            h == 6 && (j += " dhx_saturday");
            b += "<div class='" + j + "' style='width: " + k + "px;' >" + i + "</div>";
            d += this.sa[g + e]
        }
        return b
    },
    ig: function() {
        var a = this.g,
            b = 0,
            c = dhx.Date.add(this.Ih, -this.wc, "day"),
            c = dhx.Date.datePart(c),
            d = 0,
            e = "";
        if (a.weekNumber) {
            var d = 1,
                f = dhx.Date.add(c, (this.Xf + 1) % 2, "day");
            e += '<table class="dhx_week_numbers" cellspacing="0" cellpadding="0" style="float: left;"><tbody>';
            for (var g = 0; g < this.V; g++) {
                var h = this.rb[g] - 2,
                    i = this.sa[0] - 2,
                    j = a.calendarWeek(f),
                    k = "dhx_cal_week_num";
                if (!a.skipEmptyWeeks && (g == this.V - 1 && this.rd >= 7 || g == this.V - 2 && this.rd == 14)) k = "dhx_next_month", j = "";
                g == this.V - 1 && (k += " dhx_cal_day_num_bborder", h += 1);
                e += "<tr><td>";
                e += "<div class='" + k + "' style='width:" + i + "px; height:" + h + "px; line-height:" + h + "px;' >" + j + "</div>";
                e += "</td></tr>";
                f = dhx.Date.add(f, 7, "day")
            }
            e += "</tbody></table>"
        }
        var l = dhx.Date.datePart(new Date);
        e += '<table cellspacing="0" cellpadding="0"><tbody>';
        for (var m = this.V * 7 - 1, g = 0; g < this.V; g++) {
            e += "<tr>";
            for (var n = 0; n < 7; n++) {
                var o = a.calendarDay(c),
                    p = this.ae(c),
                    k = "dhx_cal_day_num";
                b < this.wc && (k = "dhx_prev_month", p = o = "");
                b > m - this.rd && (k = "dhx_next_month", p = o = "");
                h = this.rb[g] - 2;
                i = this.sa[n + d] - 2;
                n == 6 && (k += " dhx_cal_day_num_rborder", i += 1);
                g == this.V - 1 && (k += " dhx_cal_day_num_bborder", h += 1);
                e += "<td>";
                l.valueOf() == c.valueOf() && (k += " dhx_cal_current_day");
                e += "<div class='" + k + "' style='width:" + i + "px; height:" + h + "px; line-height:" + h + "px;' date='" + p + "'>" + o + "</div>";
                e += "</td>";
                c = dhx.Date.add(c, 1, "day");
                b++
            }
            e += "</tr>"
        }
        e += "</tbody></table>";
        return e
    },
    Vi: function() {
        for (var a = this.g, b = "<select class='dhx_hour_select' onclick=''>", c = a.hourStart, d = a.hourEnd, e = dhx.Date.datePart(new Date), f = c; f < d; f++) e.setHours(f), b += "<option value='" + f + "'>" + a.hourFormat(e) + "</option>";
        b += "</select>";
        b += "<select class='dhx_minute_select' onclick=''>";
        for (var g = 0; g < 60; g += a.minuteStep) b += "<option value='" + g + "'>" + dhx.math.toFixed(g) + "</option>";
        b += "</select>";
        return b
    },
    Kh: function() {
        var a =
            "<div class='dhx_cal_arrow dhx_cal_",
            b = "_button'><div></div></div>";
        return a + "prev" + b + a + "next" + b
    },
    on_click: {
        dhx_cal_arrow: function(a, b, c) {
            var d = c.className.match(/prev/i) ? -1 : 1,
                e = new Date(this.ca),
                f = new Date(e);
            f.setDate(1);
            f = dhx.Date.add(f, d, "month");
            this.callEvent("onBeforeMonthChange", [e, f]) && (this.showCalendar(f), this.selectDate(this.g.date, !1), this.callEvent("onAfterMonthChange", [f, e]))
        },
        dhx_cal_day_num: function(a, b, c) {
            var d = c.getAttribute("date"),
                e = this.kg(d);
            if (this.g.timeSelect) {
                var f = this.Md;
                e.setMinutes(f[0].value * 60 + f[1].value * 1)
            }
            this.selectDate(e);
            this.callEvent("onDateSelect", [e]);
            this.callEvent("onChange", [e])
        }
    }
}, dhx.MouseEvents, dhx.Settings, dhx.EventSystem, dhx.Movable, dhx.ui.view);
dhx.html.addMeta = function(a, b) {
    document.getElementsByTagName("head").item(0).appendChild(dhx.html.create("meta", {
        name: a,
        content: b
    }))
};
(function() {
    var a = function() {
        var a = !! (window.orientation % 180);
        if (dhx.ui.orientation !== a) dhx.ui.orientation = a, dhx.callEvent("onRotate", [a])
    };
    dhx.ui.orientation = !! ((dhx.isUndefined(window.orientation) ? 90 : window.orientation) % 180);
    dhx.event(window, "onorientationchange" in window ? "orientationchange" : "resize", a);
    dhx.ui.fullScreen = function() {
        if (dhx.env.touch) {
            dhx.html.addMeta("apple-mobile-web-app-capable", "yes");
            dhx.html.addMeta("viewport", "initial-scale=1, maximum-scale=1, user-scalable=no");
            var b = document.body.offsetHeight ||
                document.body.scrollHeight,
                c = navigator.userAgent.indexOf("iPhone") != -1,
                d = navigator.userAgent.indexOf("iPad") != -1,
                e = c && (b == 356 || b == 208 || b == 306 || b == 158),
                f = function() {
                    var a = 0,
                        b = 0;
                    if (c) dhx.ui.orientation ? (a = 480, b = e ? 268 : 300) : (a = 320, b = e ? 416 : 460);
                    else if (dhx.env.isAndroid) {
                        document.body.style.width = document.body.style.height = "1px";
                        document.body.style.overflow = "hidden";
                        var d = window.outerWidth / window.innerWidth,
                            a = window.outerWidth / d,
                            b = window.outerHeight / d
                    } else a = window.innerWidth, b = window.innerHeight; if (b) document.body.style.height =
                        b + "px", document.body.style.width = a + "px";
                    dhx.ui.ve = !1;
                    dhx.ui.resize();
                    dhx.delay(function() {
                        window.scrollTo(0, 1)
                    })
                }, g = function() {
                    dhx.ui.ve = !0;
                    dhx.env.isSafari ? f() : dhx.delay(f, null, [], 500)
                };
            dhx.attachEvent("onClick", function(a) {
                a.target.tagName == "INPUT" || a.target.tagName == "TEXTAREA" || a.target.tagName == "SELECT" || (e && window.innerHeight < 416 || !e && window.innerHeight < window.outerHeight) && window.scrollTo(0, 1)
            });
            dhx.attachEvent("onRotate", g);
            a();
            dhx.delay(g)
        }
    }
})();
dhx.CanvasMgr = function(a) {
    var b = dhx.CanvasMgr.prototype.Yd;
    !b[a] && document.getCSSCanvasContext && (b[a] = !0, dhx.CanvasMgr.prototype[a](b))
};
dhx.CanvasMgr.prototype = {
    buttonGrd: ["#fefefe", "#e0e0e0", "#e5e5e5", "#e0e0e0", 32],
    Yd: [],
    Pb: function(a, b, c, d, e) {
        var f = document.getCSSCanvasContext("2d", d, 18, c),
            g = f.createLinearGradient(0, 0, 0, c);
        g.addColorStop(0, a);
        g.addColorStop(1, b);
        f.fillStyle = g;
        f.strokeStyle = "#93B0BA";
        f.lineWidth = 2;
        e ? (f.moveTo(0, 0.5), f.lineTo(17.5, c / 2 + 0.5), f.lineTo(0, c - 0.5), f.lineTo(0, 0.5)) : (f.moveTo(18, 0.5), f.lineTo(0.5, c / 2 + 0.5), f.lineTo(18, c - 0.5), f.lineTo(18, 0.5));
        f.stroke();
        f.fill()
    },
    dhxArrowLeftT: function() {
        this.Pb(this.buttonGrd[2],
            this.buttonGrd[3], this.buttonGrd[4], "dhxArrowLeftT")
    },
    dhxArrowRightT: function() {
        this.Pb(this.buttonGrd[2], this.buttonGrd[3], this.buttonGrd[4], "dhxArrowRightT", !0)
    },
    dhxArrowLeft: function() {
        this.Pb(this.buttonGrd[0], this.buttonGrd[1], this.buttonGrd[4], "dhxArrowLeft");
        dhx.CanvasMgr("dhxArrowLeftT")
    },
    dhxArrowRight: function() {
        this.Pb(this.buttonGrd[0], this.buttonGrd[1], this.buttonGrd[4], "dhxArrowRight", !0);
        dhx.CanvasMgr("dhxArrowRightT")
    }
};
dhx.attachEvent("onClick", function(a) {
    var b = dhx.ui.get(a);
    if (b && b.touchable) {
        b.getNode(a);
        var c = a.target || a.srcElement,
            d = "",
            e = null,
            f = !1;
        if (!(c.className && c.className.indexOf("dhx_view") === 0)) {
            for (; c && c.parentNode;) {
                if (c.getAttribute) {
                    if (c.getAttribute("view_id")) break;
                    if (d = c.className)
                        if (d = d.split(" "), d = d[0] || d[1], b.on_click[d]) {
                            var g = b.on_click[d].call(b, a, b.g.id, c);
                            if (g === !1) return
                        }
                }
                c = c.parentNode
            }
            if (b.g.click) {
                var h = dhx.toFunctor(b.g.click);
                h && h.call && h.call(b, b.g.id, a)
            }
            if (b.g.multiview) {
                var i =
                    dhx.ui.get(b.g.multiview);
                i && i.show && i.show()
            }
            if (b.g.popup) {
                var j = dhx.ui.get(b.g.popup);
                j.g.master = b.g.id;
                j.show(b.getInput() || b.getNode(), j.l.g.align || "bottom", !0)
            }
            b.callEvent("onItemClick", [b.g.id, a])
        }
    }
});
dhx.skin = {};
dhx.skin.offset = {
    button: 10,
    roundbutton: 10,
    defaultbutton: 10,
    formbutton: 10,
    prevbutton: 28,
    nextbutton: 28,
    bigbutton: 28,
    bigroundbutton: 28,
    slider: 10
};
dhx.protoUI({
    name: "button",
    touchable: !0,
    defaults: {
        template: "<input type='button' style='width:100%;' value='#label#'>",
        height: 42,
        label: "label"
    },
    $init: function(a) {
        var b = (a.type || "") + this.name;
        this.h.className += " dhx_el_" + b;
        this.data = this.g;
        this.i = this.h;
        this.z = dhx.skin.offset[b] || 0;
        a.type == "prev" && dhx.CanvasMgr("dhxArrowLeft");
        a.type == "next" && dhx.CanvasMgr("dhxArrowRight")
    },
    type_setter: function(a) {
        if (this.Qf[a]) this.g.template = dhx.Template(this.Qf[a])
    },
    Qf: {
        prev: "<div><div class='dhx_el_arrow'></div><input type='button' value='#label#' /></div>",
        next: "<div><input type='button' value='#label#' /><div class='dhx_el_arrow'></div></div>"
    },
    $setSize: function(a, b) {
        dhx.ui.view.prototype.$setSize.call(this, a, b) && this.render()
    },
    M: function(a) {
        this.g.label = a;
        (this.getInput() || {}).value = a
    },
    getValue: function() {
        return this.i.childNodes.length > 0 ? this.jc() : this.g.value
    },
    setValue: function(a) {
        var b = this.g.value;
        this.g.value = a;
        if (this.i.childNodes.length > 0) this.wg = a, this.M(a), this.callEvent("onChange", [a, b])
    },
    focus: function() {
        this.getInput().focus()
    },
    jc: function() {
        return this.g.label ||
            ""
    },
    getInput: function() {
        return this.i.getElementsByTagName("input")[0]
    },
    ha: function() {
        return this.getInput()
    },
    ba: function() {
        this.g.inputWidth ? this.ha().style.width = this.g.inputWidth - this.z + "px" : this.ha().style.width = this.n - this.z + "px"
    },
    render: function() {
        if (dhx.AtomRender.render.call(this)) {
            this.ba();
            if (this.g.align) switch (this.g.align) {
                case "right":
                    this.i.firstChild.style.cssFloat = "right";
                    break;
                case "center":
                    this.i.firstChild.style.display = "inline-block";
                    this.i.firstChild.parentNode.style.textAlign =
                        "center";
                    break;
                case "middle":
                    this.i.firstChild.style.marginTop = Math.round((this.r - 40) / 2) + "px";
                    break;
                case "bottom":
                    this.i.firstChild.style.marginTop = this.r - 40 + "px";
                    break;
                case "left":
                    this.i.firstChild.style.cssFloat = "left"
            }
            this.Na && this.Na(this.data);
            this.wg != this.g.value && this.setValue(this.g.value)
        }
    },
    refresh: function() {
        this.render()
    },
    on_click: {
        mc: function(a, b) {
            var c = dhx.html.locate(a, "button_id");
            if (c && this.callEvent("onBeforeTabClick", [b, c])) {
                this.g.selected = c;
                this.refresh();
                if (this.g.multiview) {
                    var d =
                        dhx.ui.get(c);
                    d && d.show && d.show()
                }
                this.callEvent("onAfterTabClick", [b, c])
            }
        },
        dhx_all_segments: function(a, b) {
            this.on_click.mc.call(this, a, b)
        },
        dhx_all_tabs: function(a, b) {
            this.on_click.mc.call(this, a, b)
        },
        dhx_inp_counter_next: function() {
            this.next(this.g.step, this.g.min, this.g.max)
        },
        dhx_inp_counter_prev: function() {
            this.prev(this.g.step, this.g.min, this.g.max)
        },
        dhx_inp_toggle_left_off: function() {
            var a = this.g.options;
            this.setValue(a[0].value)
        },
        dhx_inp_toggle_right_off: function() {
            var a = this.g.options;
            this.setValue(a[1].value)
        },
        dhx_inp_combo: function(a, b, c) {
            c.focus()
        },
        dhx_inp_checkbox_border: function() {
            this.toggle()
        },
        dhx_inp_checkbox_label: function() {
            this.toggle()
        },
        dhx_inp_radio_border: function(a) {
            var b = dhx.html.locate(a, "radio_id");
            this.setValue(b)
        },
        dhx_inp_radio_label: function(a, b, c) {
            c = c.parentNode.getElementsByTagName("input")[0];
            return this.on_click.dhx_inp_radio_border.call(this, c, b, c)
        }
    },
    qb: function(a) {
        for (var b = 0; b < a.length; b++)
            if (typeof a[b] == "string") a[b] = {
                value: a[b],
                label: a[b]
            };
            else if (a[b].value) {
            if (!a[b].label) a[b].label =
                a[b].value
        } else a[b].value = a[b].label
    },
    popup_setter: function(a) {
        return this.pc = a
    }
}, dhx.ui.view, dhx.AtomRender, dhx.Settings, dhx.EventSystem);
dhx.protoUI({
    name: "imagebutton",
    defaults: {
        template: "<span><img src='#src#'/>&nbsp;#label#</span>",
        label: ""
    },
    ba: function() {}
}, dhx.ui.button);
dhx.protoUI({
    name: "label",
    defaults: {
        template: "<div>#label#</div>"
    },
    focus: function() {
        return !1
    },
    ha: function() {
        return this.i.firstChild
    },
    M: function(a) {
        this.g.label = a;
        this.i.firstChild.innerHTML = a
    },
    ba: function() {}
}, dhx.ui.button);
dhx.protoUI({
    name: "icon",
    defaults: {
        template: "<div class='dhx_el_icon_#icon#'></div>",
        width: 42
    },
    ba: function() {}
}, dhx.ui.button);
dhx.protoUI({
    name: "segmented",
    defaults: {
        template: function(a, b) {
            var c = a.options,
                d = "",
                e;
            b.qb(c);
            if (!a.selected) a.selected = c[0].value;
            for (var f = 0; f < c.length; f++) e = c[f].width || a.inputWidth ? "width: " + ((c[f].width || Math.round(a.inputWidth / c.length)) - b.g.z) + "px;" : "", d += "<div style='" + e + "' class='" + (a.selected == c[f].value ? "selected " : "") + "segment_" + (f == c.length - 1 ? "N" : f > 0 ? 1 : 0) + "' button_id='" + c[f].value + "'>" + c[f].label + "</div>";
            return "<div class='dhx_all_segments'>" + d + "</div>"
        },
        z: 28,
        zc: 0
    },
    M: function(a) {
        if (this.i &&
            this.i.firstChild)
            for (var b = this.i.firstChild.childNodes, c = 0; c < b.length; c++)
                if (dhx.html.locate(b[c], "button_id") == a) return this.on_click.mc.call(this, b[c], this.g.options[c]), !0
    },
    getValue: function() {
        return this.g.selected
    },
    ba: function() {}
}, dhx.ui.button);
dhx.protoUI({
    name: "tabbar",
    defaults: {
        height: 49,
        template: function(a, b) {
            var c = a.options;
            b.qb(c);
            for (var d = "", e, f = 0; f < c.length; f++) {
                var g = "",
                    h = c[f].src;
                c[f].value == a.selected && (g = "selected", h = c[f].srcSelected || c[f].src);
                c[f].css && (g += " " + c[f].css);
                e = a.optionWidth || c[f].width || a.inputWidth ? "width: " + (a.optionWidth || c[f].width || Math.ceil(a.inputWidth / c.length) - b.g.z) + "px;" : "";
                d += "<div class='" + g + "' button_id='" + c[f].value + "' style='" + e + "'>";
                d += h ? "<img src='" + h + "'/><span>" + c[f].label + "</span>" : "<div style='height:26px'></div><span>" +
                    c[f].label + "</span>";
                d += "</div>"
            }
            return "<div class='dhx_all_tabs'>" + d + "</div>"
        },
        z: 4
    }
}, dhx.ui.segmented);
dhx.protoUI({
    name: "text",
    ag: !0,
    Cd: function(a, b, c) {
        c.labelPosition == "left" ? a += b : a = b + a;
        return "<div class='dhx_el_box'>" + a + "</div>"
    },
    Dc: function(a, b, c, d) {
        var e = a.inputAlign || "left",
            f = a.labelAlign || "left",
            g = dhx.uid(),
            h = "<label style='width: " + this.g.labelWidth + "px; text-align: " + f + ";' onclick='' for='" + g + "' class='dhx_inp_label'>" + (a.label || "") + "</label>",
            i = this.g.inputWidth - this.g.labelWidth - 18;
        a.iconCss && (i -= a.iconWidth);
        i < 0 && (i = 0);
        h += d ? "<div class='dhx_inp_" + b + "' onclick='' style='width: " + i + "px; text-align: " +
            e + ";' >" + (a.text || a.value || "") + "</div>" : "<input id='" + g + "' type='" + (a.type || this.name) + "' value='" + (a.text || a.value || "") + "' " + (c || a.readonly ? "readonly='true' " : "") + (a.maxlength ? "maxlength='" + a.maxlength + "' " : "") + (a.placeholder ? "placeholder='" + a.placeholder + "' " : "") + " class='dhx_inp_" + b + "' style='width: " + i + "px; text-align: " + e + ";' />";
        a.iconCss && (h += "<div class='" + a.iconCss + "' style='width:" + a.iconWidth + "px'></div>");
        h += "</div>";
        return "<div class='dhx_el_box'>" + h + "</div>"
    },
    Ec: function(a, b) {
        if (!a.label) return "";
        var c = a.labelAlign || "left";
        return "<div class='dhx_inp_" + b + "_label' style='width: " + a.labelWidth + "px; text-align: " + c + ";'>" + a.label + "</div>"
    },
    defaults: {
        template: function(a, b) {
            return b.Dc(a, "text")
        },
        labelWidth: 80,
        z: 28,
        zc: 0
    },
    type_setter: function(a) {
        return a
    },
    ba: function() {
        var a = this.g;
        a.inputWidth ? (this.getInput().style.width = a.inputWidth - a.labelWidth - a.z - (a.iconCss ? a.iconWidth : 0) + "px", this.i.firstChild.style.width = a.inputWidth - a.z + "px") : this.ha().style.width = this.n - a.labelWidth - a.z - a.zc - (a.iconCss ?
            a.iconWidth : 0) + "px"
    },
    focus: function() {
        var a = this.i.getElementsByTagName("input")[0];
        a && a.focus()
    },
    M: function(a) {
        this.getInput().value = a
    },
    jc: function() {
        return this.getInput().value
    }
}, dhx.ui.button);
dhx.protoUI({
    name: "toggle",
    defaults: {
        template: function(a, b) {
            var c = a.options;
            b.qb(c);
            var d = b.g.inputWidth / 2 || "auto",
                e = [c[0].width || d, c[1].width || d],
                f = b.Ec(a, "toggle"),
                g = "<input type='button' style='width: " + e[0] + "px;' value='" + a.options[0].label + "' />";
            g += "<input type='button' style='width: " + e[1] + "px;' value='" + a.options[1].label + "'  />";
            return b.Cd(f, g, a)
        },
        label: "",
        labelWidth: 0,
        z: 20
    },
    ba: function() {},
    Na: function(a) {
        this.setValue(a.value)
    },
    hc: function() {
        return this.i.getElementsByTagName("input")
    },
    M: function(a) {
        var b = this.hc(),
            c = this.g.options;
        a == c[1].value ? (b[0].className = "dhx_inp_toggle_left_off", b[1].className = "dhx_inp_toggle_right_on") : (b[0].className = "dhx_inp_toggle_left_on", b[1].className = "dhx_inp_toggle_right_off")
    },
    jc: function() {
        var a = this.hc(),
            b = this.g.options;
        return a[0].className == "dhx_inp_toggle_left_on" ? b[0].value : b[1].value
    }
}, dhx.ui.text);
dhx.protoUI({
    name: "input",
    defaults: {
        attributes: ["maxlength", "disabled", "placeholder"],
        template: function(a, b) {
            var c = '<input class="dhx_input_box"',
                d = b.g.attributes;
            if (d)
                for (var e = 0; e < d.length; e++) a[d[e]] && (c += " " + d[e] + "='" + a[d[e]] + "'");
            b.g.inputAlign && (c += " style='text-align:" + b.g.inputAlign + ";'");
            c += " type='" + (a.type || "text") + "'";
            c += "/>";
            return c
        },
        z: 28,
        labelWidth: 0
    }
}, dhx.ui.text);
dhx.protoUI({
        name: "select",
        defaults: {
            template: function(a, b) {
                var c = a.options;
                b.qb(c);
                var d = "<select";
                a.disabled && (d += " disabled='true'");
                d += ">";
                for (var e = 0; e < c.length; e++) d += "<option" + (c[e].selected ? " selected='true'" : "") + (c[e].value ? " value='" + c[e].value + "'" : "") + ">" + c[e].label + "</option>";
                d += "</select>";
                return d
            },
            labelWidth: 0,
            zc: 0,
            z: 10
        },
        $: function() {
            dhx.event(this.getInput(), "change", function() {
                this.setValue(this.getValue())
            }, this);
            this.$ = function() {}
        },
        Na: function() {
            this.$()
        },
        getInput: function() {
            return this.i.firstChild
        }
    },
    dhx.ui.text);
dhx.protoUI({
    name: "textarea",
    defaults: {
        template: function(a) {
            return "<textarea class='dhx_inp_textarea' placeholder='" + (a.label || "") + "' style='' " + (a.readonly ? "readonly='true' " : "") + ">" + (a.value || "") + "</textarea>"
        },
        z: 16
    },
    ba: function() {
        this.g.inputWidth ? this.ha().style.width = this.g.inputWidth - this.g.z + "px" : this.ha().style.width = this.n - this.g.zc - this.g.z + "px";
        this.g.inputHeight ? this.ha().style.height = this.g.inputHeight + "px" : this.ha().style.height = this.r - 12 + "px"
    },
    getInput: function() {
        return this.i.firstChild
    },
    M: function(a) {
        this.getInput().value =
            a
    },
    jc: function() {
        return this.getInput().value
    }
}, dhx.ui.text);
dhx.protoUI({
    name: "counter",
    defaults: {
        template: function(a, b) {
            var c = a.value || 0,
                d = b.Ec(a, "counter"),
                e = "<input type='button' class='dhx_inp_counter_prev' value='\u2014' />";
            e += "<div class='dhx_inp_counter_value' >" + c + "</div>";
            e += "<input type='button' class='dhx_inp_counter_next' value='+'/>";
            return b.Cd(d, e, a)
        },
        min: 1,
        step: 1,
        labelWidth: 0,
        label: "",
        z: 125
    },
    ha: function() {
        return this.getInput().parentNode
    },
    getLabel: function() {
        return this.getInput().previousSibling || this.getInput().parentNode.lastChild
    },
    ba: function() {
        if (this.g.label && !this.g.labelWidth) {
            var a = this.getLabel();
            if (a) a.style.width = (this.g.inputWidth || this.n) - this.g.z - (this.g.counterWidth || 20) + "px"
        }
        if (this.g.counterWidth) this.getInput().nextSibling.style.width = this.g.counterWidth + "px"
    },
    M: function(a) {
        this.getInput().nextSibling.innerHTML = a
    },
    getValue: function() {
        return (this.g.value || 0) * 1
    },
    next: function(a, b, c) {
        a = a || 1;
        this.Jf(a, b, c)
    },
    prev: function(a, b, c) {
        a = -1 * (a || 1);
        this.Jf(a, b, c)
    },
    Jf: function(a, b, c) {
        var b = typeof b == "undefined" ? -Infinity : b,
            c = typeof c == "undefined" ? Infinity :
                c,
            d = this.getValue() + a;
        d >= b && d <= c && this.setValue(d)
    }
}, dhx.ui.text);
dhx.protoUI({
    name: "checkbox",
    defaults: {
        template: function(a, b) {
            var c = a.value ? "dhx_inp_checkbox_on" : "dhx_inp_checkbox_on dhx_hidden",
                d = "<div class='dhx_inp_checkbox_border'><input type='button' class='" + c + "' value='&#x2713;' /></div>",
                e = b.Ec(a, "checkbox");
            return b.Cd(e, d, a)
        }
    },
    M: function(a) {
        var b = this.getInput();
        b.className = !a || a == "0" ? "dhx_inp_checkbox_on dhx_hidden" : "dhx_inp_checkbox_on"
    },
    toggle: function() {
        this.setValue(!this.getValue())
    },
    getLabel: function() {
        var a = this.getInput().parentNode;
        return a.nextSibling ||
            a.previousSibling
    },
    getValue: function() {
        var a = this.g.value;
        return !a || a == "0" ? 0 : 1
    },
    ha: function() {
        return this.getInput().parentNode.parentNode
    }
}, dhx.ui.counter);
dhx.protoUI({
    name: "radio",
    defaults: {
        template: function(a, b) {
            b.qb(a.options);
            for (var c = [], d = 0; d < a.options.length; d++) {
                a.options[d].newline && c.push("<div style='clear:both;'></div>");
                var e = "<div radio_id='" + a.options[d].value + "' class='dhx_inp_radio_border'><input type='button' class='" + (a.options[d].value == a.value ? "dhx_inp_radio_on" : "dhx_inp_radio_on dhx_hidden") + "' value='' /></div>";
                a.label = a.options[d].label;
                var f = b.Ec(a, "radio");
                a.labelPosition == "left" ? c.push(f + e) : c.push(e + f)
            }
            return "<div class='dhx_all_radio'><div class='dhx_radio'>" +
                c.join("</div><div class='dhx_radio'>") + "</div></div>"
        }
    },
    $getSize: function() {
        var a = dhx.ui.button.prototype.$getSize.call(this);
        if (this.g.options) {
            for (var b = 1, c = 0; c < this.g.options.length; c++) this.g.options[c].newline && b++;
            a[3] = Math.max(a[3], this.defaults.height * b)
        }
        return a
    },
    hc: function() {
        return this.i.getElementsByTagName("input")
    },
    ba: function() {},
    M: function(a) {
        for (var b = this.hc(), c = 0; c < b.length; c++) b[c].className = b[c].parentNode.getAttribute("radio_id") == a ? "dhx_inp_radio_on" : "dhx_inp_radio_on dhx_hidden"
    },
    getValue: function() {
        return this.g.value
    }
}, dhx.ui.text);
dhx.protoUI({
    name: "richselect",
    defaults: {
        template: function(a, b) {
            return b.Dc(a, "list", !0, !0)
        },
        icon: !0,
        iconWidth: 15,
        iconCss: "dhx_list_icon"
    },
    $: function(a) {
        a.popup || this.Xc("list", a);
        this.zf();
        this.$ = function() {}
    },
    options_setter: function(a) {
        for (var b = this.g.data = [], c = 0; c < a.length; c++) {
            var d = a[c].id || a[c].value || a[c].label || a[c],
                e = a[c].label || a[c].value || a[c];
            b.push({
                id: d,
                value: e
            })
        }
        return a
    },
    Na: function(a) {
        this.$(a);
        if (!dhx.isUndefined(a.value)) {
            this.setValue(a.value, {}, a);
            var b = dhx.ui.get(a.popup.toString()),
                c = b.l;
            c.attachEvent("onXLE", dhx.bind(function() {
                this.setValue(this.g.value, {}, a)
            }, this))
        }
    },
    Xc: function(a, b) {
        var c = dhx.extend({}, b);
        delete c.align;
        delete c.height;
        delete c.width;
        delete c.template;
        c.view = a;
        c.id = (b.id || b.name) + "_" + a;
        c.width = c.popupWidth || 290;
        var d = dhx.uid(),
            e = {
                id: d,
                view: "popup",
                body: c
            };
        dhx.ui(e).hide();
        this.pc = b.popup = d
    },
    zf: function() {
        var a = dhx.ui.get(this.g.popup);
        a.l.attachEvent("onItemClick", function(a) {
            var c = dhx.ui.get(this.getParent().g.master);
            this.getParent().hide();
            c.setValue(a)
        })
    },
    getInput: function() {
        return this.i.firstChild.childNodes[1]
    },
    getList: function() {
        var a = dhx.ui.get(this.g.popup);
        return a ? a.l : null
    },
    M: function(a) {
        var b = dhx.ui.get(this.g.popup).l,
            c = b.type ? b.type.template(b.item(a) || a, b.type) : a;
        this.g.value = a;
        this.g.text = c;
        this.name == "combo" ? this.getInput().value = c.replace(/<[^>]*>/g, "") : this.getInput().innerHTML = c
    },
    getValue: function() {
        return this.g.value
    }
}, dhx.ui.text);
dhx.protoUI({
    name: "combo",
    defaults: {
        template: function(a, b) {
            return b.Dc(a, "combo")
        },
        filter: function(a, b) {
            return a.value.toString().toLowerCase().indexOf(b.toLowerCase()) === 0 ? !0 : !1
        }
    },
    $: function(a) {
        a.popup || this.Xc("list", a);
        this.zf();
        dhx.event(this.i, "keydown", function(b) {
            var b = b || event,
                c = b.target || b.srcElement,
                d = dhx.ui.get(a.popup);
            window.clearTimeout(d.key_timer);
            var e = this;
            d.key_timer = window.setTimeout(function() {
                d.l.filter(function(a) {
                    return e.g.filter.apply(e, [a, c.value])
                });
                var a = dhx.ui.get(d.g.master);
                a.g.value = d.l.dataCount() == 1 && d.l.type.template(d.l.item(d.l.first())) == c.value ? d.l.first() : ""
            }, 200);
            d.show(c, d.l.g.align || "bottom", !0)
        }, this);
        this.$ = function() {}
    },
    Na: function(a) {
        this.$(a);
        dhx.isUndefined(a.value) || this.setValue(a.value)
    }
}, dhx.ui.richselect);
dhx.protoUI({
    name: "datepicker",
    defaults: {
        template: function(a, b) {
            return b.Dc(a, "list", !0, !0)
        },
        stringResult: !1,
        icon: !0,
        iconWidth: 14,
        iconCss: "dhx_calendar_icon"
    },
    $: function(a) {
        a.popup || this.Xc("calendar", a);
        var b = dhx.ui.get(a.popup);
        b.l.attachEvent("onDateSelect", function(a) {
            var b = dhx.ui.get(this.getParent().g.master);
            this.getParent().hide();
            b.setValue(a)
        });
        b.attachEvent("onShow", dhx.bind(this.pf, b));
        this.getList().attachEvent("onAfterMonthChange", dhx.bind(this.pf, b));
        this.$ = function() {}
    },
    pf: function() {
        var a =
            dhx.ui.get(this.g.master);
        a.getList().resize();
        this.blockEvent();
        this.show(a.getNode(), this.l.g.align || "bottom", !0);
        this.unblockEvent()
    },
    Na: function(a) {
        this.$(a);
        dhx.isUndefined(a.value) || this.setValue(a.value)
    },
    M: function(a) {
        var b = dhx.ui.get(this.g.popup.toString()),
            c = b.l;
        typeof a == "string" && a && (a = (this.g.externalDateFormat || this.g.dateFormat || dhx.i18n.dateFormatDate)(a));
        c.selectDate(a, !0);
        this.g.value = a ? c.config.date : "";
        this.g.text = this.getInput().innerHTML = a ? (this.g.dateFormatStr || dhx.i18n.dateFormatStr)(this.g.value) :
            ""
    },
    dateFormat_setter: function(a) {
        this.g.dateFormatStr = dhx.Date.dateToStr(a);
        return dhx.Date.strToDate(a)
    },
    externalDateFormat_setter: function(a) {
        this.g.externalDateFormatStr = dhx.Date.dateToStr(a);
        return dhx.Date.strToDate(a)
    },
    getValue: function() {
        return this.g.stringResult && typeof this.g.value != "string" ? this.g.value ? (this.g.externalDateFormatStr || this.g.dateFormatStr || dhx.i18n.dateFormatStr)(this.g.value) : "" : this.g.value || null
    }
}, dhx.ui.richselect);
dhx.RenderStack = {
    $init: function() {
        this.la = document.createElement("DIV");
        this.data.attachEvent("onIdChange", dhx.bind(this.Bd, this));
        this.attachEvent("onItemClick", this.mg);
        if (!this.types) this.types = {
            "default": this.type
        }, this.type.name = "default";
        this.type = dhx.copy(this.types[this.type.name])
    },
    customize: function(a) {
        dhx.Type(this, a)
    },
    type_setter: function(a) {
        this.types[a] ? (this.type = dhx.copy(this.types[a]), this.type.css && (this.k.className += " " + this.type.css)) : this.customize(a);
        return a
    },
    template_setter: function(a) {
        this.type.template =
            dhx.Template(a)
    },
    ra: function(a) {
        this.callEvent("onItemRender", [a]);
        return this.type.templateStart(a, this.type) + (a.$template ? this.type["template" + a.$template] : this.type.template)(a, this.type) + this.type.templateEnd(a, this.type)
    },
    Lc: function(a) {
        this.la.innerHTML = this.ra(a);
        return this.la.firstChild
    },
    Bd: function(a, b) {
        var c = this.aa(a);
        c && (c.setAttribute(this.J, b), this.u[b] = this.u[a], delete this.u[a])
    },
    mg: function() {
        if (this.g.click) {
            var a = dhx.toFunctor(this.g.click);
            a && a.call && a.apply(this, arguments)
        }
    },
    aa: function(a) {
        if (this.u) return this.u[a];
        this.u = {};
        for (var b = this.i.childNodes, c = 0; c < b.length; c++) {
            var d = b[c].getAttribute(this.J);
            d && (this.u[d] = b[c])
        }
        return this.aa(a)
    },
    locate: function(a) {
        return dhx.html.locate(a, this.J)
    },
    showItem: function(a) {
        var b = this.aa(a);
        if (b && this.scrollTo) {
            var c = Math.max(0, b.offsetLeft - this.i.offsetLeft),
                d = Math.max(0, b.offsetTop - this.i.offsetTop);
            this.scrollTo(c, d);
            this.xf && this.xf(a)
        }
    },
    render: function(a, b, c) {
        if (this.isVisible(this.g.id))
            if (a) {
                var d = this.aa(a);
                switch (c) {
                    case "update":
                        if (!d) break;
                        var e = this.u[a] = this.Lc(b);
                        dhx.html.insertBefore(e, d);
                        dhx.html.remove(d);
                        break;
                    case "delete":
                        if (!d) break;
                        dhx.html.remove(d);
                        delete this.u[a];
                        break;
                    case "add":
                        e = this.u[a] = this.Lc(b);
                        dhx.html.insertBefore(e, this.aa(this.data.next(a)), this.i);
                        break;
                    case "move":
                        this.render(a, b, "delete");
                        this.render(a, b, "add");
                        break;
                    default:
                        dhx.error("Unknown render command: " + c)
                }
            } else if (this.callEvent("onBeforeRender", [this.data]) && ((this.lj || this.i).innerHTML = this.data.getRange().map(this.ra, this).join(""), this.u = null,
            this.callEvent("onAfterRender", []), e = this.i.offsetHeight, this.data.Ld)) {
            var f = this.g.scrollSpeed;
            this.g.scrollSpeed = "0ms";
            this.showItem(this.data.Ld);
            this.g.scrollSpeed = f;
            this.data.Ld = null
        }
    }
};
dhx.protoUI({
    name: "proto",
    $init: function() {
        this.data.provideApi(this, !0);
        this.i = this.k;
        this.data.attachEvent("onStoreUpdated", dhx.bind(function() {
            this.render.apply(this, arguments)
        }, this))
    },
    $setSize: function() {
        dhx.ui.view.prototype.$setSize.apply(this, arguments) && this.render()
    }
}, dhx.RenderStack, dhx.DataLoader, dhx.ui.view, dhx.EventSystem, dhx.Settings);
dhx.Values = {
    $init: function() {
        this.elements = {}
    },
    focus: function(a) {
        a ? this.elements[a].focus() : this.first().focus()
    },
    setValues: function(a) {
        if (this.isVisible(this.g.id)) {
            this.Tf = dhx.copy(a);
            for (var b in this.elements) this.elements[b] && !dhx.isUndefined(a[b]) && this.elements[b].setValue(a[b]);
            this.callEvent("onChange", [])
        } else this.Kb = a
    },
    getValues: function() {
        if (this.Kb) return this.Kb;
        var a = this.Tf ? dhx.copy(this.Tf) : {}, b;
        for (b in this.elements) a[b] = this.elements[b].getValue();
        return a
    },
    clear: function() {
        var a = {}, b;
        for (b in this.elements) this.elements[b].ag && (a[b] = this.elements[b].g.defaultValue || "");
        this.setValues(a)
    },
    yc: function(a, b) {
        var c = this.data.driver,
            d = c.getRecords(c.toObject(a, b))[0];
        this.setValues(c ? c.getDetails(d) : a);
        this.callEvent("onXLE", [])
    },
    We: function(a, b) {
        a && (this.$b(a, b), dhx.html.addCss(this.elements[a].i.firstChild, "invalid"))
    },
    $b: function(a) {
        a && this.elements[a].i && this.elements[a].i.firstChild && dhx.html.removeCss(this.elements[a].i.firstChild, "invalid")
    }
};
dhx.ValidateData = {
    $init: function() {
        this.s && this.attachEvent("onChange", this.clearValidation)
    },
    clearValidation: function() {
        if (this.elements)
            for (var a in this.elements) this.$b(a)
    },
    validate: function(a) {
        var b = !0,
            c = this.g.rules;
        if (c) {
            !a && this.getValues && (a = this.getValues());
            c.$obj && (b = b && this.Pd(objrule, a, a, ""));
            var d = c.$all;
            if (d)
                for (var e in a) b = b && this.Pd(d, a[e], a, e);
            for (e in c) e.indexOf("$") !== 0 && (b = b && this.Pd(c[e], a[e], a, e))
        }
        return b
    },
    Pd: function(a, b, c, d) {
        if (a.call(this, b, c, d)) return this.callEvent("onValidationSuccess", [d, c]) && this.$b && this.$b(d, c), !0;
        else this.callEvent("onValidationError", [d, c]) && this.We && this.We(d, c);
        return !1
    }
};
dhx.rules = {
    isNumber: function(a) {
        return parseFloat(a) == a
    },
    isNotEmpty: function(a) {
        return a == "0" || a
    }
};
dhx.protoUI({
    name: "toolbar",
    defaults: {
        type: "MainBar"
    },
    li: !0,
    Yc: 44,
    $init: function(a) {
        this.k.style.borderWidth = "1px";
        this.jf(a);
        this.$ready.push(this.Sd)
    },
    Sd: function() {
        for (var a in this.elements) {
            var b = this.elements[a];
            b.mapEvent && b.mapEvent({
                onbeforetabclick: dhx.za,
                onaftertabclick: dhx.za,
                onitemclick: dhx.za
            })
        }
        dhx.za = null
    },
    Aa: function(a, b) {
        dhx.za = this;
        dhx.ui.layout.prototype.Aa.call(this, a, b);
        this.Sd()
    },
    jf: function(a) {
        this.k.className += " dhx_toolbar";
        if (a.elements) this.X = a.elements, this.p = !1;
        dhx.za =
            this
    },
    $getSize: function() {
        var a = dhx.ui.baselayout.prototype.$getSize.call(this);
        if (a[3] > 0 && (!this.p || !this.g.scroll)) this.g.height = a[3];
        if (a[1] > 0 && (this.p || !this.g.scroll)) this.g.width = a[1];
        a = dhx.ui.view.prototype.$getSize.call(this);
        if (a[3] <= 0 && this.Yc > 0) a[3] = this.Yc, a[2] = 0;
        return a
    },
    $setSize: function(a, b) {
        dhx.ui.view.prototype.$setSize.apply(this, arguments);
        dhx.ui.baselayout.prototype.$setSize.call(this, this.n, this.r)
    },
    render: function() {
        if (this.isVisible(this.g.id) && this.Kb) this.setValues(this.Kb),
        this.Kb = null
    },
    refresh: function() {
        this.render()
    },
    type_setter: function(a) {
        this.k.className += " dhx_" + a.toLowerCase()
    }
}, dhx.Scrollable, dhx.AtomDataLoader, dhx.Values, dhx.ui.baselayout, dhx.ValidateData, dhx.EventSystem);
dhx.keyPressTimeout = 200;
dhx.KeyEvents = {
    $init: function() {
        dhx.event(this.k, "keyup", this.Ph, this)
    },
    Ph: function(a) {
        var a = a || event,
            b = a.which || a.keyCode;
        this.callEvent(this.ga ? "onEditKeyPress" : "onKeyPress", [b, a.ctrlKey, a.shiftKey, a]);
        dhx.Me && window.clearTimeout(dhx.Me);
        dhx.Me = window.setTimeout(dhx.bind(this.Qh, this), dhx.keyPressTimeout)
    },
    Qh: function() {
        this.callEvent("onTimedKeyPress", [])
    }
};
dhx.EditAbility = {
    $init: function() {
        this.vb = this.ga = null;
        this.attachEvent("onEditKeyPress", function(a, b, c) {
            a == 13 && !c ? this.stopEdit() : a == 27 && this.stopEdit(!0)
        });
        this.attachEvent("onBeforeRender", function() {
            this.stopEdit()
        });
        this.data.attachEvent("onClearAll", dhx.bind(function() {
            this.vb = this.ga = null
        }, this))
    },
    isEdit: function() {
        return this.ga
    },
    edit: function(a) {
        if (this.stopEdit(!1, a) && this.callEvent("onBeforeEditStart", [a])) {
            var b = this.data.item(a);
            if (!b.$template) b.$template = "Edit", this.data.refresh(a),
            this.ga = a, this.wi(a), this.vb(!0, b), this.callEvent("onAfterEditStart", [a])
        }
    },
    stopEdit: function(a, b) {
        if (!this.ga) return !0;
        if (this.ga == b) return !1;
        if (!this.callEvent("onBeforeEditStop", [this.ga])) return !1;
        var c = this.data.item(this.ga);
        c.$template = null;
        a || this.vb(!1, c);
        var d = this.ga;
        this.vb = this.ga = null;
        this.data.refresh(d);
        this.callEvent("onAfterEditStop", [d]);
        return !0
    },
    wi: function(a) {
        var b = this.aa(a),
            c = "",
            d = "",
            e = [];
        if (b) {
            for (var f = b.getElementsByTagName("*"), g = "", h = 0; h < f.length; h++)
                if (f[h].nodeType ==
                    1 && (g = f[h].getAttribute("bind"))) c += "els[" + e.length + "].value=" + g + ";", d += g + "=els[" + e.length + "].value;", e.push(f[h]), f[h].className += " dhx_allow_selection", f[h].onselectstart = this.hg;
            f = null
        }
        c = Function("obj", "els", c);
        d = Function("obj", "els", d);
        this.vb = function(a, b) {
            a ? (c(b, e), e.length && e[0].select && e[0].select()) : d(b, e)
        }
    },
    hg: function(a) {
        return (a || event).cancelBubble = !0
    }
};
dhx.SelectionModel = {
    $init: function() {
        this.o = dhx.toArray();
        this.data.attachEvent("onStoreUpdated", dhx.bind(this.zg, this));
        this.data.attachEvent("onStoreLoad", dhx.bind(this.yg, this));
        this.data.attachEvent("onAfterFilter", dhx.bind(this.xg, this));
        this.data.attachEvent("onIdChange", dhx.bind(this.lh, this))
    },
    lh: function(a, b) {
        for (var c = this.o.length - 1; c >= 0; c--) this.o[c] == a && (this.o[c] = b)
    },
    xg: function() {
        for (var a = this.o.length - 1; a >= 0; a--) {
            if (this.data.indexById(this.o[a]) < 0) var b = this.o[a];
            var c = this.item(b);
            c && delete c.$selected;
            this.o.splice(a, 1);
            this.callEvent("onSelectChange", [b])
        }
    },
    zg: function(a, b, c) {
        if (c == "delete") this.o.remove(a);
        else if (!this.data.dataCount() && !this.data.A) this.o = dhx.toArray()
    },
    yg: function() {
        this.g.select && this.data.each(function(a) {
            a.$selected && this.select(a.id)
        }, this)
    },
    Hc: function(a, b, c) {
        if (!c && !this.callEvent("onBeforeSelect", [a, b])) return !1;
        this.data.item(a).$selected = b;
        c ? c.push(a) : (b ? this.o.push(a) : this.o.remove(a), this.xd(a));
        return !0
    },
    select: function(a, b, c) {
        if (!a) return this.selectAll();
        if (dhx.isArray(a))
            for (var d = 0; d < a.length; d++) this.select(a[d], b, c);
        else if (this.data.exists(a)) {
            if (c && this.o.length) return this.selectAll(this.o[this.o.length - 1], a);
            if (!b && (this.o.length != 1 || this.o[0] != a)) this.Df = !0, this.unselectAll(), this.Df = !1;
            this.isSelected(a) ? b && this.unselect(a) : this.Hc(a, !0) && this.callEvent("onAfterSelect", [a])
        } else dhx.error("Incorrect id in select command: " + a)
    },
    unselect: function(a) {
        if (!a) return this.unselectAll();
        this.isSelected(a) && this.Hc(a, !1)
    },
    selectAll: function(a, b) {
        var c,
            d = [];
        c = a || b ? this.data.getRange(a || null, b || null) : this.data.getRange();
        c.each(function(a) {
            var b = this.data.item(a.id);
            b.$selected || (this.o.push(a.id), this.Hc(a.id, !0, d));
            return a.id
        }, this);
        this.xd(d)
    },
    unselectAll: function() {
        var a = [];
        this.o.each(function(b) {
            this.Hc(b, !1, a)
        }, this);
        this.o = dhx.toArray();
        this.xd(a)
    },
    isSelected: function(a) {
        return this.o.find(a) != -1
    },
    getSelected: function(a) {
        switch (this.o.length) {
            case 0:
                return a ? [] : "";
            case 1:
                return a ? [this.o[0]] : this.o[0];
            default:
                return [].concat(this.o)
        }
    },
    uh: function(a) {
        return a.length >
            100 || a.length > this.data.dataCount / 2
    },
    xd: function(a) {
        typeof a != "object" && (a = [a]);
        if (a.length) {
            if (this.uh(a)) this.data.refresh();
            else
                for (var b = 0; b < a.length; b++) this.render(a[b], this.data.item(a[b]), "update");
            this.Df || this.callEvent("onSelectChange", [a])
        }
    }
};
dhx.VirtualRenderStack = {
    $init: function() {
        this.u = {};
        this.i.style.overflowY = "scroll";
        dhx.event(this.i, "scroll", dhx.bind(this.of, this));
        dhx.event(window, "resize", dhx.bind(function() {
            this.render()
        }, this));
        this.Mb = [];
        this.attachEvent("onItemRender", function(a) {
            a.$template == "loading" && this.Mb.push(this.data.id(a))
        })
    },
    aa: function(a) {
        return this.u[a]
    },
    show: function(a) {
        var b = this.Ae(),
            c = this.data.indexById(a),
            d = Math.floor(c / b.bd) * b.mb;
        this.i.scrollTop = d
    },
    render: function(a, b, c) {
        if (a) {
            var d = this.aa(a);
            switch (c) {
                case "update":
                    if (!d) break;
                    var e = this.u[a] = this.Lc(b);
                    dhx.html.insertBefore(e, d);
                    dhx.html.remove(d);
                    break;
                default:
                    this.mi()
            }
        } else if (this.callEvent("onBeforeRender", [this.data])) this.u = {}, this.of(null, !0), this.Vf = !1, this.callEvent("onAfterRender", [])
    },
    mi: function() {
        if (!this.Vf) this.Vf = !0, window.setTimeout(dhx.bind(function() {
            this.render()
        }, this), 1)
    },
    Wc: function(a) {
        var b = document.createElement("DIV");
        b.style.cssText = "height:" + a + "px; width:100%; overflow:hidden;";
        return b
    },
    of: function(a, b) {
        this.Mb = [];
        var c = this.Ae();
        if (!this.i.firstChild ||
            b) this.i.innerHTML = "", this.i.appendChild(this.Wc(c.Hh)), this.xa = [this.i.firstChild];
        for (var d = c.Ga; d <= c.hd;) {
            for (; this.xa[d] && this.xa[d].Tg && d <= c.hd;) d++;
            if (d > c.hd) break;
            for (var e = d; !this.xa[e];) e--;
            var f = this.xa[e],
                g = d * c.bd + (this.data.min || 0);
            if (g > (this.data.max || Infinity)) break;
            var h = Math.min(g + c.bd - 1, this.data.max || Infinity),
                i = this.Wc(c.mb),
                j = this.data.getIndexRange(g, h);
            if (!j.length) break;
            i.innerHTML = j.map(this.ra, this).join("");
            for (var k = 0; k < j.length; k++) this.u[this.data.idByIndex(g + k)] = i.childNodes[k];
            var l = parseInt(f.style.height, 10),
                m = (d - e) * c.mb,
                n = l - m - c.mb;
            dhx.html.insertBefore(i, m ? f.nextSibling : f, this.i);
            this.xa[d] = i;
            i.Tg = !0;
            if (m <= 0 && n > 0) f.style.height = n + "px", this.xa[d + 1] = f;
            else if (m < 0 ? dhx.html.remove(f) : f.style.height = m + "px", n > 0) {
                var o = this.xa[d + 1] = this.Wc(n);
                dhx.html.insertBefore(o, i.nextSibling, this.i)
            }
            d++
        }
        if (this.Mb.length) {
            var p = this.indexById(this.Mb[0]),
                q = this.indexById(this.Mb.pop()) + 1;
            if (q > p) {
                if (!this.callEvent("onDataRequest", [p, q - p])) return !1;
                this.data.feed.call(this, p, q - p)
            }
        }
    },
    Ae: function() {
        var a =
            this.i.scrollTop,
            b = Math.max(this.i.scrollWidth, this.i.offsetWidth) - 18,
            c = this.i.offsetHeight,
            d = this.type,
            e = this.cd(),
            f = Math.floor(b / e.x) || 1,
            g = Math.floor(a / e.y),
            h = Math.ceil((c + a) / e.y) - 1,
            i = this.data.max ? this.data.max - this.data.min : this.data.dataCount(),
            j = Math.ceil(i / f) * e.y;
        return {
            Ga: g,
            hd: h,
            kb: a,
            Hh: j,
            mb: e.y,
            bd: f
        }
    }
};
dhx.protoUI({
    name: "dataview",
    $init: function() {
        this.k.className += " dhx_dataview";
        this.data.provideApi(this, !0)
    },
    da: function() {
        this.g.height != "auto" && dhx.extend(this, dhx.VirtualRenderStack)
    },
    defaults: {
        edit: !1,
        select: "multiselect",
        type: "default",
        scroll: !0
    },
    J: "dhx_f_id",
    on_click: {
        dhx_dataview_item: function(a, b) {
            this.stopEdit(!1, b) && this.g.select && (this.g.select == "multiselect" ? this.select(b, a.ctrlKey, a.shiftKey) : this.select(b))
        }
    },
    on_dblclick: {
        dhx_dataview_item: function(a, b) {
            this.g.edit && this.edit(b)
        }
    },
    on_mouse_move: {},
    dragMarker: function(a) {
        var b = this.aa(a.target);
        if (this.type.drag_marker) {
            if (this.$c) this.$c.style.backgroundImage = "", this.$c.style.backgroundRepeat = "";
            if (b) b.style.backgroundImage = "url(" + (dhx.image_path || "") + this.type.drag_marker + ")", b.style.backgroundRepeat = "no-repeat", this.$c = b
        }
        if (b && this.g.autoScroll) {
            var c = b.offsetTop,
                d = b.offsetHeight,
                e = this.i.scrollTop,
                f = this.i.offsetHeight;
            c - d > 0 && c - d * 0.75 < e ? e = Math.max(c - d, 0) : c + d / 0.75 > e + f && (e += d);
            this.i.scrollTop = e
        }
        return !0
    },
    type: {
        css: "default",
        template: "<div style='padding:10px; white-space:nowrap; overflow:hidden;'>#value#</div>",
        templateEdit: dhx.Template("<div style='padding:10px; white-space:nowrap; overflow:hidden;'><textarea style='width:100%; height:100%;' bind='#text#'></textarea></div>"),
        templateLoading: dhx.Template("<div style='padding:10px; white-space:nowrap; overflow:hidden;'>Loading...</div>"),
        width: 139,
        height: 22,
        margin: "0",
        padding: 10,
        border: 1,
        widthSize: function(a, b) {
            return b.width + (b.width > -1 ? "px" : "")
        },
        heightSize: function(a,
            b) {
            return b.height + (b.height > -1 ? "px" : "")
        },
        templateStart: dhx.Template("<div dhx_f_id='#id#' class='dhx_dataview_item dhx_dataview_{common.css}_item{obj.$selected?_selected:}' style='width:{common.widthSize()}; height:{common.heightSize()}; padding:{common.padding}px; margin:{common.margin}px; float:left; overflow:hidden;'>"),
        templateEnd: dhx.Template("</div>")
    },
    xCount_setter: function(a) {
        var b = this.cd();
        this.i.style.width = b.x * a + (this.g.height != "auto" ? 18 : 0) + "px";
        return a
    },
    yCount_setter: function(a) {
        var b =
            this.cd();
        this.i.style.height = b.y * a + "px";
        return a
    },
    cd: function() {
        var a = this.type,
            b = (a.border || 0) + (a.padding || 0) * 2 + (a.margin || 0) * 2;
        return {
            x: a.width + b,
            y: a.height + b
        }
    }
}, dhx.MouseEvents, dhx.KeyEvents, dhx.SelectionModel, dhx.EditAbility, dhx.Scrollable, dhx.ui.proto);
dhx.Type(dhx.ui.dataview, {
    name: "FreeSize",
    css: "FreeSize",
    width: "auto",
    height: "auto"
});
dhx.animate = function(a, b) {
    if (dhx.isArray(a))
        for (var c = 0; c < a.length; c++) {
            if (b.type == "slide") {
                if (b.subtype == "out" && c === 0) continue;
                if (b.subtype == "in" && c == 1) continue
            }
            if (b.type == "flip") {
                var d = dhx.copy(b);
                if (c === 0) d.type = "flipback";
                if (c == 1) d.callback = null;
                dhx.animate(a[c], d)
            } else dhx.animate(a[c], b)
        } else {
            var e = dhx.toNode(a);
            e.nc ? dhx.animate.end(e, b) : dhx.animate.start(e, b)
        }
};
dhx.animate.end = function(a, b) {
    a.style[dhx.env.transformPrefix + "TransitionDuration"] = "1ms";
    a.nc = null;
    dhx.Uf && window.clearTimeout(dhx.Uf);
    dhx.Uf = dhx.delay(dhx.animate, dhx, [a, b], 10)
};
dhx.animate.isSupported = function() {
    return dhx.env.transform && dhx.env.transition && !dhx.env.isOpera
};
dhx.animate.formLine = function(a, b, c) {
    var d = c.direction;
    b.parentNode.style.position = "relative";
    b.style.position = "absolute";
    a.style.position = "absolute";
    d == "top" || d == "bottom" ? (a.style.left = "0px", a.style.top = (d == "top" ? 1 : -1) * b.offsetHeight + "px") : (a.style.top = "0px", a.style.left = (d == "left" ? 1 : -1) * b.offsetWidth + "px");
    b.parentNode.appendChild(a);
    if (c.type == "slide" && c.subtype == "out") a.style.left = 0, a.style.top = 0, b.parentNode.removeChild(b), a.parentNode.appendChild(b);
    return [a, b]
};
dhx.animate.breakLine = function(a) {
    dhx.html.remove(a[1]);
    dhx.animate.clear(a[0]);
    dhx.animate.clear(a[1]);
    a[0].style.position = ""
};
dhx.animate.clear = function(a) {
    a.style[dhx.env.transformPrefix + "Transform"] = "";
    a.style[dhx.env.transformPrefix + "Transition"] = "";
    a.style.top = a.style.left = ""
};
dhx.animate.defaults = {
    type: "slide",
    delay: "0",
    duration: "500",
    timing: "ease-in-out",
    x: 0,
    y: 0
};
dhx.animate.start = function(a, b) {
    typeof b == "string" && (b = {
        type: b
    });
    var b = dhx.Settings.K(b, dhx.animate.defaults),
        c = dhx.env.transformPrefix,
        d = a.nc = b;
    switch (d.type == "slide" && d.direction) {
        case "right":
            d.x = a.offsetWidth;
            break;
        case "left":
            d.x = -a.offsetWidth;
            break;
        case "top":
            d.y = -a.offsetHeight;
            break;
        default:
            d.y = a.offsetHeight
    }
    if (d.type == "flip" || d.type == "flipback") {
        var e = [0, 0],
            f = "scaleX";
        d.subtype == "vertical" ? (e[0] = 20, f = "scaleY") : e[1] = 20;
        if (d.direction == "right" || d.direction == "bottom") e[0] *= -1, e[1] *= -1
    }
    var g =
        d.duration + "ms " + d.timing + " " + d.delay + "ms",
        h = c + "TransformStyle: preserve-3d;",
        i = "",
        j = "";
    switch (d.type) {
        case "fade":
            i = "opacity " + g;
            h = "opacity: 0;";
            break;
        case "show":
            i = "opacity " + g;
            h = "opacity: 1;";
            break;
        case "flip":
            g = d.duration / 2 + "ms " + d.timing + " " + d.delay + "ms";
            j = "skew(" + e[0] + "deg, " + e[1] + "deg) " + f + "(0.00001)";
            i = "all " + g;
            break;
        case "flipback":
            d.delay += d.duration / 2;
            g = d.duration / 2 + "ms " + d.timing + " " + d.delay + "ms";
            a.style[c + "Transform"] = "skew(" + -1 * e[0] + "deg, " + -1 * e[1] + "deg) " + f + "(0.00001)";
            a.style.left =
                "0";
            j = "skew(0deg, 0deg) " + f + "(1)";
            i = "all " + g;
            break;
        case "slide":
            var k = d.x + "px",
                l = d.y + "px",
                j = dhx.env.translate + "(" + k + ", " + l + (dhx.env.translate == "translate3d" ? ", 0" : "") + ")",
                i = dhx.env.transformCSSPrefix + "transform " + g
    }
    dhx.delay(function() {
        a.style[c + "Transition"] = i;
        dhx.delay(function() {
            h && (a.style.cssText += h);
            j && (a.style[c + "Transform"] = j);
            var b = !1,
                e = dhx.event(a, dhx.env.transitionEnd, function(c) {
                    a.nc = null;
                    d.callback && d.callback.call(d.master || window, a, d, c);
                    b = !0;
                    dhx.eventRemove(e)
                });
            window.setTimeout(function() {
                if (!b) a.nc =
                    null, d.callback && d.callback.call(d.master || window, a, d), b = !0, dhx.eventRemove(e)
            }, (d.duration * 1 + d.delay * 1) * 1.3)
        })
    })
};
dhx.protoUI({
    name: "accordionitem",
    $init: function(a) {
        this.h.innerHTML = "<div dhx_ai_id='" + a.id + "'  class='dhx_accordionitem_header'><div class='dhx_accordionitem_button' ></div><div class='dhx_accordionitem_label' ></div></div><div class='dhx_accordionitem_body'></div>";
        this.k = this.h;
        this.B = this.k.childNodes[0];
        if (!a.header) this.B.style.display = "none";
        this.Ee = this.k.childNodes[0].childNodes[1];
        this.De = this.k.childNodes[0].childNodes[0];
        this.H = this.k.childNodes[1];
        this.h.className += " dhx_accordionitem";
        this.S = this.l = null;
        this.j = !0;
        this.g.m = a.m || {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        };
        this.$ready.push(this.jg)
    },
    jg: function() {
        var a = this.g.m;
        a && (this.Wb(a.top, "borderTopWidth"), this.Wb(a.left, "borderLeftWidth"), this.Wb(a.right, "borderRightWidth"), this.Wb(a.bottom, "borderBottomWidth"));
        this.Zh = this.g.width;
        this.Yh = this.g.height
    },
    Wb: function(a, b) {
        a && (this.B.style[b] = "0px", this.l.j || (this.l.h.style[b] = "0px"))
    },
    yd: function() {
        this.l = {
            destructor: function() {}
        }
    },
    Aa: function(a) {
        this.l.destructor();
        this.l = a;
        this.l.G =
            this;
        this.H.appendChild(this.l.h);
        this.resize()
    },
    J: "dhx_ai_id",
    body_setter: function(a) {
        typeof a != "object" && (a = {
            template: a
        });
        a.m = dhx.copy(this.g.m);
        this.l = dhx.ui.Ca(a);
        this.l.G = this;
        this.H.appendChild(this.l.h);
        this.pc = this.l;
        return a
    },
    header_setter: function(a) {
        a && (a = dhx.Template(a));
        return a
    },
    headerAlt_setter: function(a) {
        a && (a = dhx.Template(a));
        return a
    },
    $getSize: function() {
        var a = this.l.$getSize(),
            b = 0;
        this.getParent().p ? this.g.collapsed ? (a[3] = this.gc(), a[2] = 0) : b = this.g.headerHeight : this.g.collapsed ?
            (a[1] = this.gc(), a[0] = 0) : b = this.g.headerHeight;
        this.g.width = a[1] || this.Zh;
        this.g.height = a[3] ? a[3] + b : this.Yh;
        if (a[0] || a[2]) this.g.gravity = Math.max(a[0], a[2]);
        return dhx.ui.baseview.prototype.$getSize.call(this)
    },
    on_click: {
        dhx_accordionitem_header: function(a) {
            this.Mf(a)
        },
        dhx_accordionitem_header_v: function(a) {
            this.Mf(a)
        }
    },
    Mf: function(a) {
        this.define("collapsed", !this.g.collapsed);
        dhx.callEvent("onClick", [this.g.id]);
        return dhx.html.preventEvent(a)
    },
    collapsed_setter: function(a) {
        if (this.g.header !== !1) {
            var b =
                this.getParent();
            if (a)
                if (!b || b.og(this)) this.ug();
                else return !1;
                else this.Qg();
                (this.g.collapsed = a) || this.getParent().$f(this);
            this.refresh();
            this.resize();
            b.callEvent("onAfter" + (a ? "Collapse" : "Expand"), [this.g.id]);
            return a
        }
    },
    collapse: function() {
        this.define("collapsed", !0)
    },
    hide: function() {
        this.collapse()
    },
    expand: function() {
        this.define("collapsed", !1)
    },
    show: function() {
        this.expand()
    },
    Qg: function() {
        this.H.style.display = "";
        dhx.html.removeCss(this.De, "collapsed");
        this.P = null
    },
    ug: function() {
        var a = this.getParent().p;
        if (this.g.headerAlt) this.Ee.innerHTML = this.g.headerAlt();
        this.H.style.display = "none";
        dhx.html.addCss(this.De, "collapsed");
        this.P = null
    },
    refresh: function() {
        var a = this.g[this.g.collapsed ? "headerAlt" : "header"] || this.g.header;
        if (a) this.Ee.innerHTML = a()
    },
    gc: function() {
        return this.g.collapsed ? this.g.headerAltHeight : this.g.headerHeight
    },
    $setSize: function(a, b) {
        if (dhx.ui.baseview.prototype.$setSize.call(this, a, b)) {
            var a = this.n,
                b = this.r,
                c = this.gc() - (this.g.m.top ? 0 : 1);
            if (this.g.header) {
                this.B.style.height = c +
                    "px";
                this.B.style.lineHeight = c + "px";
                this.B.style.width = "auto";
                this.B.style[dhx.env.transform] = "";
                if (this.g.m.left) this.B.style.borderLeftWidth = "0px";
                if (this.g.m.right) this.B.style.borderRightWidth = "0px";
                if (this.getParent().p || !this.g.collapsed) b -= this.gc();
                else if (this.g.collapsed) {
                    this.B.style.width = b - 2 + "px";
                    this.B.style.borderLeftWidth = this.B.style.borderRightWidth = "1px";
                    var d = Math.floor(-b / 2 + a / 2) - (a - this.g.headerAltHeight) / 2;
                    this.B.style[dhx.env.transform] = "rotate(-90deg) translate(" + d + "px, " +
                        d + "px)"
                }
            }
            this.g.collapsed || this.l.$setSize(a, b)
        }
    },
    defaults: {
        header: "",
        headerAlt: !1,
        body: "",
        headerHeight: 42,
        headerAltHeight: 42,
        collapsed: !0
    }
}, dhx.MouseEvents, dhx.EventSystem, dhx.ui.baseview);
dhx.protoUI({
    name: "accordion",
    $init: function() {},
    U: function() {
        for (var a = 0; a < this.X.length; a++) this.X[a].view = "accordionitem";
        dhx.ui.layout.prototype.U.call(this);
        for (a = 0; a < this.j.length; a++) this.j[a].refresh()
    },
    $f: function(a) {
        if (this.g.multi === !1)
            for (var b = 0; b < this.j.length; b++) a != this.j[b] && !this.j[b].g.collapsed && this.j[b].collapse()
    },
    og: function(a) {
        if (this.g.multi === !0) return !0;
        for (var b = 0; b < this.j.length; b++)
            if (a != this.j[b] && !this.j[b].g.collapsed) return !0;
        return !1
    },
    mj: function() {
        this.$getSize();
        this.P && this.$setSize.apply(this, this.P)
    },
    defaults: {
        multi: !1
    }
}, dhx.ui.layout, dhx.EventSystem);
dhx.TreeStore = {
    $init: function() {
        this.branch = {
            0: []
        }
    },
    clearAll: function() {
        this.branch = {
            0: []
        };
        dhx.DataStore.prototype.clearAll.call(this)
    },
    prevSibling: function(a) {
        var b = this.branch[this.item(a).$parent],
            c = dhx.PowerArray.find.call(b, a) - 1;
        return c >= 0 ? b[c] : null
    },
    nextSibling: function(a) {
        var b = this.branch[this.item(a).$parent],
            c = dhx.PowerArray.find.call(b, a) + 1;
        return c < b.length ? b[c] : null
    },
    parent: function(a) {
        return this.item(a).$parent
    },
    firstChild: function(a) {
        var b = this.branch[a];
        return b && b.length ? b[0] : null
    },
    hasChild: function(a, b) {
        var c = this.branch[a];
        if (c && c.length)
            for (var d = 0; d < c.length; d++) {
                if (c[d] == b) return !0;
                if (this.hasChild(c[d], b)) return !0
            }
        return !1
    },
    branchIndex: function(a, b) {
        var c = this.branch[a];
        return dhx.PowerArray.find.call(c, b)
    },
    extraParser: function(a, b, c) {
        a.$parent = b || 0;
        a.$level = c || 1;
        this.branch[a.$parent] || (this.branch[a.$parent] = []);
        this.branch[a.$parent].push(a.id);
        if (!a.item) return a.$count = 0;
        dhx.isArray(a.item) ? a.$count = a.item.length : (a.item = [a.item], a.$count = 1);
        for (var d = 0; d < a.item.length; d++) {
            var e =
                a.item[d];
            this.pull[this.id(e)] = e;
            this.extraParser(e, a.id, a.$level + 1)
        }
        delete a.item
    },
    provideApi: function(a, b) {
        for (var c = "prevSibling,nextSibling,parent,firstChild,hasChild,branchIndex".split(","), d = 0; d < c.length; d++) a[c[d]] = this.Xe(this, c[d]);
        dhx.DataStore.prototype.provideApi.call(this, a, b)
    },
    getTopRange: function() {
        return dhx.toArray([].concat(this.branch[0])).map(function(a) {
            return this.item(a)
        }, this)
    },
    eachChild: function(a, b) {
        if (this.branch[a]) return dhx.PowerArray.each.call(this.branch[a], b)
    },
    add: function(a,
        b, c) {
        this.branch[c || 0] = this.order = dhx.toArray(this.branch[c || 0]);
        (c = this.item(c || 0)) && c.$count++;
        a.$count = 0;
        a.$level = c ? c.$level + 1 : 1;
        a.$parent = c ? c.id : 0;
        return dhx.DataStore.prototype.add.call(this, a, b)
    },
    remove: function(a) {
        var b = this.item(a),
            c = b.$parent || 0;
        this.branch[c] = this.order = dhx.toArray(this.branch[c]);
        c && this.item(c).$count--;
        return dhx.DataStore.prototype.remove.call(this, a)
    },
    serialize: function(a) {
        for (var b = this.branch[a || 0], c = [], d = 0; d < b.length; d++) {
            var e = this.pull[b[d]];
            if (e.$count) e = dhx.copy(e),
            e.item = this.serialize(b[d]);
            c.push(e)
        }
        return c
    },
    jh: function(a, b, c, d, e) {
        if (c === !0) {
            var f = {}, g = dhx.copy(a),
                h = g.pop(),
                i = {}, j;
            for (j in b) {
                var k = b[j],
                    l = k[h];
                if (typeof i[l] === "undefined") {
                    j = dhx.uid();
                    var m = {
                        id: j,
                        text: l,
                        $count: 0,
                        $level: e,
                        $parent: d
                    };
                    i[l] = j;
                    f[j] = [];
                    this.pull[j] = m;
                    this.branch[d].push(j);
                    this.branch[j] = []
                } else j = i[l];
                f[j].push(k);
                g.length === 0 && this.branch[j].push(k.id)
            }
            for (var n in f) this.pull[n].$count = f[n].length, g.length > 0 && this.groupBy(g, f[n], !0, n, e + 1)
        } else {
            var o = arguments,
                g = [];
            this.branch = {
                0: []
            };
            for (n = o.length - 1; n >= 0; n--) g.push(o[n]);
            this.jh(g, this.pull, !0, "0", 0);
            this.refresh()
        }
    }
};
dhx.CarouselPanel = {
    Bb: function() {
        var a, b, c, d;
        a = this.g.panel;
        dhx.html.remove(this.ka);
        b = "z-index:" + dhx.ui.zIndex() + ";";
        if (a.align == "bottom" || a.align == "top") b += "height:" + a.size + "px; left:0px;", c = 0, a.align == "bottom" && (c = this.r - this.g.panel.size), b += "top:" + c + "px";
        else if (a.align == "right" || a.align == "left") b += "width:" + a.size + "px;top:0px;", d = 0, a.align == "right" && (d = this.n - this.g.panel.size), b += "left:" + d + "px";
        this.ka = dhx.html.create("DIV", {
            "class": "dhx_carousel_panel",
            style: b
        }, "");
        this.h.appendChild(this.ka);
        this.Cc()
    },
    Cc: function() {
        var a, b;
        b = this.g.panel;
        this.ka ? this.sg() : this.Bb();
        var c = this.j ? this.j.length : this.data.order.length;
        if (c > 1) {
            for (var d = 0; d < c; d++) a = dhx.html.create("DIV", {
                "class": "dhx_item dhx_carousel_" + (d == this.q ? "active" : "inactive"),
                style: b.align == "left" || b.align == "right" ? "float:none;" : ""
            }, ""), this.ka.appendChild(a);
            var e = c * this.g.panel.itemSize;
            if (b.align == "bottom" || b.align == "top") {
                if (this.n) this.ka.style.left = (this.n - e) / 2 + this.h.scrollLeft + "px";
                this.ka.style.width = e + "px"
            } else this.ka.style.top =
                (this.r - e) / 2 + this.h.scrollTop + "px"
        }
    },
    sg: function() {
        if (this.ka)
            for (var a = this.ka.childNodes, b = a.length - 1; b >= 0; b--) dhx.html.remove(a[b])
    }
};
dhx.protoUI({
    name: "list",
    $init: function() {
        this.data.provideApi(this, !0)
    },
    defaults: {
        select: !1,
        scroll: !0
    },
    J: "dhx_l_id",
    on_click: {
        dhx_list_item: function(a, b) {
            if (this.g.select) this.ab = !0, this.g.select == "multiselect" ? this.select(b, a.ctrlKey, a.shiftKey) : this.select(b), this.ab = !1
        }
    },
    $getSize: function() {
        if (this.type.width != "auto") this.g.width = this.type.width + (this.type.padding + this.type.margin) * 2;
        if (this.g.yCount) this.g.height = (this.type.height + (this.type.padding + this.type.margin) * 2 + 1) * (this.g.yCount == "auto" ?
            this.dataCount() : this.g.yCount) - 1;
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    $setSize: function() {
        dhx.ui.view.prototype.$setSize.apply(this, arguments)
    },
    type: {
        css: "",
        widthSize: function(a, b) {
            return b.width + (b.width > -1 ? "px" : "")
        },
        heightSize: function(a, b) {
            return b.height + (b.height > -1 ? "px" : "")
        },
        template: dhx.Template("#value#"),
        width: "auto",
        height: 22,
        margin: 0,
        padding: 10,
        border: 1,
        templateStart: dhx.Template("<div dhx_l_id='#id#' class='dhx_list_item dhx_list_{common.css}_item{obj.$selected?_selected:}' style='width:{common.widthSize()}; height:{common.heightSize()}; padding:{common.padding}px; margin:{common.margin}px; overflow:hidden;'>"),
        templateEnd: dhx.Template("</div>")
    }
}, dhx.MouseEvents, dhx.SelectionModel, dhx.Scrollable, dhx.ui.proto);
dhx.protoUI({
    name: "grouplist",
    defaults: {
        animate: {}
    },
    $init: function() {
        dhx.extend(this.data, dhx.TreeStore, !0);
        this.data.provideApi(this, !0);
        this.data.attachEvent("onClearAll", dhx.bind(this.cf, this));
        this.h.className += " dhx_grouplist";
        this.cf()
    },
    cf: function() {
        this.T = [];
        this.Q = []
    },
    on_click: {
        dhx_list_item: function(a, b) {
            if (this.Ya) return !1;
            for (var c = 0; c < this.Q.length; c++)
                if (this.Q[c] == b) {
                    for (var d = c; d < this.Q.length; d++) this.data.item(this.Q[d]).$template = "";
                    c ? (this.T = this.data.branch[this.Q[c - 1]], this.Q.splice(c)) :
                        (this.T = this.data.branch[0], this.Q = []);
                    this.md = !1;
                    return this.render()
                }
            var e = this.item(b);
            if (e.$count) return this.md = !0, this.Q.push(b), e.$template = "Back", this.T = this.data.branch[e.id], this.render();
            else if (this.g.select) this.ab = !0, this.g.select == "multiselect" ? this.select(b, a.ctrlKey, a.shiftKey) : this.select(b), this.ab = !1
        }
    },
    getOpenState: function() {
        return {
            parents: this.Q,
            branch: this.T
        }
    },
    render: function(a, b, c, d) {
        if (this.Ya) return dhx.delay(this.render, this, arguments, 100);
        for (var e = 0; e < this.T.length; e++) this.data.item(this.T[e]).$template =
            "";
        if (!this.T.length) this.T = this.data.branch[0];
        this.data.order = dhx.toArray([].concat(this.Q).concat(this.T));
        if (this.callEvent("onBeforeRender", [this.data])) {
            if (this.ab || !this.i.innerHTML || !dhx.animate.isSupported() || !this.g.animate) dhx.RenderStack.render.apply(this, arguments);
            else {
                var f = this.i.cloneNode(!1);
                f.innerHTML = this.data.getRange().map(this.ra, this).join("");
                var g = dhx.extend({}, this.g.animate);
                g.direction = this.md ? "left" : "right";
                var h = dhx.animate.formLine(f, this.i, g);
                g.master = this;
                g.callback =
                    function() {
                        this.i = f;
                        dhx.animate.breakLine(h);
                        this.u = g.master = g.callback = null;
                        this.Ya = !1;
                        this.callEvent("onAfterRender", [])
                };
                this.Ya = !0;
                dhx.animate(h, g)
            }
            this.kj = this.Q.length
        }
    },
    templateBack_setter: function(a) {
        this.type.templateBack = dhx.Template(a)
    },
    templateItem_setter: function(a) {
        this.type.templateItem = dhx.Template(a)
    },
    templateGroup_setter: function(a) {
        this.type.templateGroup = dhx.Template(a)
    },
    type: {
        template: function(a, b) {
            return a.$count ? b.templateGroup(a, b) : b.templateItem(a, b)
        },
        css: "group",
        templateStart: dhx.Template("<div dhx_l_id='#id#' class='dhx_list_item dhx_list{obj.$count?_group:_item}{obj.$template?_back:}{obj.$selected?_selected:}' style='width:{common.width}px; height:{common.height}px; padding:{common.padding}px; margin:{common.margin}px; overflow:hidden;'>"),
        templateBack: dhx.Template("&lt; #value#"),
        templateItem: dhx.Template("#value#"),
        templateGroup: dhx.Template("#value#"),
        templateEnd: function(a) {
            var b = "";
            a.$count && (b += "<div class='dhx_arrow_icon'></div>");
            b += "</div>";
            return b
        }
    },
    showItem: function(a, b) {
        var c, d, e, f;
        if (a && (c = this.item(a), d = c.$parent, c.$count)) d = c.id;
        var g = dhx.copy(this.T || []);
        this.T = this.data.branch[d || 0];
        for (this.Q = []; d;) this.item(d).$template = "Back", this.Q.unshift(d), d = this.item(d).$parent;
        b ? (e = g.length ? this.item(g[0]).$level : this.data.order[0] ?
            this.item(this.data.order[0]).$level : 1, g = dhx.copy(this.T || []), f = g.length ? this.item(g[0]).$level : a ? this.item(a).$level : 1, this.md = e < f) : this.ab = !0;
        this.render();
        this.ab = !1;
        dhx.RenderStack.showItem.call(this, a)
    }
}, dhx.ui.list);
dhx.Type(dhx.ui.grouplist, {});
dhx.protoUI({
    name: "pagelist",
    defaults: {
        scroll: "x",
        panel: !1,
        scrollOffset: 0
    },
    kh: !0,
    $init: function(a) {
        this.h.className += " dhx_pagelist";
        a.scroll = a.scroll == "y" ? "y" : "x";
        this.type.layout = a.scroll;
        this.attachEvent("onAfterRender", this.Ci);
        this.$ready.push(this.da);
        this.q = 0
    },
    da: function() {
        if (this.g.scroll == "x") this.i.style.height = "100%";
        this.type.layout = this.g.scroll
    },
    Ci: function() {
        if (this.g.scroll == "x") this.i.style.width = (this.type.width + (this.type.padding + this.type.margin) * 2 + this.type.border) * this.dataCount() +
            "px";
        this.g.panel && this.Bb()
    },
    panel_setter: function(a) {
        a && (this.h.className += " hidden_scroll", a === !0 && (a = {}), this.K(a, {
            size: 16,
            itemSize: 16,
            align: "bottom"
        }));
        return a
    },
    xf: function(a) {
        var b = this.indexById(a);
        if (typeof b != "undefined" && this.g.panel) this.q = b, this.Cc()
    },
    getActive: function() {
        return this.q && this.data.order[this.q] ? this.data.order[this.q] : this.first()
    },
    $changeScroll: function(a) {
        var b = (this.g.scroll == "y" ? this.type.height : this.type.width) + (this.type.padding + this.type.margin) * 2 + this.type.border,
            c = this.g.scroll == "y" ? this.i.scrollHeight - this.r : this.i.scrollWidth - this.n,
            d;
        this.g.scroll == "y" ? (d = Math.round(a.f / b), a.f = d * b, a.f = this.de(a.f, c)) : (d = Math.round(a.e / b), a.e = d * b, a.e = this.de(a.e, c));
        this.q = -d;
        this.g.panel && this.Cc();
        return !0
    },
    de: function(a, b) {
        var c = this.g.scrollOffset;
        if (c && Math.abs(a) > c) {
            var d = dhx.Touch.F[dhx.Touch.R] > dhx.Touch.I[dhx.Touch.R];
            b - Math.abs(a) > c && (a += d ? c : 1 - c)
        }
        Math.abs(a) > b && (a = -b);
        return a
    },
    $getSize: function() {
        if (this.g.scroll == "y") {
            if (this.type.width != "auto") this.g.width =
                this.type.width + (this.type.padding + this.type.margin) * 2 + this.type.border;
            if (this.g.yCount) this.g.height = (this.type.height + (this.type.padding + this.type.margin) * 2 + this.type.border) * (this.g.yCount == "auto" ? this.dataCount() : this.g.yCount)
        } else if (this.type.height != "auto") this.g.height = this.type.height + (this.type.padding + this.type.margin) * 2 + this.type.border;
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    $setSize: function(a, b) {
        if (dhx.ui.view.prototype.$setSize.apply(this, arguments)) {
            if (this.type.fullScreen) this.type.width =
                this.n, this.type.height = this.r, this.type.padding = 0, this.render();
            this.g.panel && this.Bb()
        }
    },
    type: {
        templateStart: function(a, b) {
            var c = "dhx_list_item dhx_list_" + b.css + "_item" + (a.$selected ? "_selected" : ""),
                d = "width:" + b.width + "px; height:" + b.height + "px; padding:" + b.padding + "px; margin:" + b.margin + "px; overflow:hidden;" + (b.layout && b.layout == "x" ? "float:left;" : "");
            return "<div dhx_l_id='" + a.id + "' class='" + c + "' style='" + d + "'>"
        }
    }
}, dhx.ui.list, dhx.CarouselPanel);
dhx.protoUI({
    name: "unitlist",
    defaults: {
        sort: {}
    },
    J: "dhx_item_id",
    uniteBy_setter: dhx.Template,
    sort_setter: function(a) {
        typeof a != "object" && (a = {});
        this.K(a, {
            dir: "asc",
            as: "string"
        });
        return a
    },
    render: function(a, b, c) {
        var d = this.g;
        if (this.isVisible(d.id)) {
            if (!d.uniteBy) return !1;
            if (a) {
                var e = this.aa(a);
                if (e && c == "update" && this.g.uniteBy.call(this, b) == this.item(a).$unitValue) {
                    var f = this.u[a] = this.Lc(b);
                    dhx.html.insertBefore(f, e);
                    dhx.html.remove(e);
                    return
                }
            }
            if (this.callEvent("onBeforeRender", [this.data])) {
                this.data.blockEvent();
                this.data.sort({
                    by: d.sort.by || this.type.template,
                    dir: d.sort.dir,
                    as: d.sort.as
                });
                this.data.unblockEvent();
                this.units = null;
                this.Fi();
                if (this.units) this.i.innerHTML = this.bh().map(this.ra, this).join(""), this.u = null;
                this.callEvent("onAfterRender", [])
            }
        }
    },
    getUnits: function() {
        var a = [];
        if (this.units)
            for (var b in this.units) a.push(b);
        return a
    },
    getUnitItems: function(a) {
        return this.units ? this.units[a] : null
    },
    ra: function(a) {
        this.callEvent("onItemRender", [a]);
        return a.$unit ? this.type.templateStartHeader(a, this.type) +
            this.type.templateHeader.call(this, a.$unit) + this.type.templateEnd(a, this.type) : this.type.templateStart(a, this.type) + (a.$template ? this.type["template" + a.$template] : this.type.template)(a, this.type) + this.type.templateEnd(a, this.type)
    },
    bh: function() {
        var a, b, c, d;
        a = [];
        for (c in this.units) {
            a.push({
                $unit: c
            });
            d = this.units[c];
            for (b = 0; b < d.length; b++) a.push(this.item(d[b]))
        }
        return a
    },
    Fi: function() {
        var a = this;
        this.units = {};
        this.data.each(function(b) {
            var c = a.g.uniteBy.call(this, b);
            b.$unitValue = c;
            a.units[c] || (a.units[c] = []);
            a.units[c].push(b.id)
        })
    },
    type: {
        headerHeight: 24,
        templateHeader: function(a) {
            return a
        },
        templateStart: function(a, b) {
            if (a.$unit) return b.templateStartHeader.apply(this, arguments);
            var c = "dhx_list_item dhx_list_" + b.css + "_item" + (a.$selected ? "_selected" : ""),
                d = "width:" + b.width + "px; height:" + b.height + "px; padding:" + b.padding + "px; margin:" + b.margin + "px; overflow:hidden;" + (b.layout && b.layout == "x" ? "float:left;" : "");
            return "<div dhx_item_id='" + a.id + "' class='" + c + "' style='" + d + "'>"
        },
        templateStartHeader: function(a,
            b) {
            var c = "dhx_unit_header dhx_unit_" + b.css + "_header" + (a.$selected ? "_selected" : ""),
                d = "width:" + b.width + "px; height:" + b.headerHeight + "px; overflow:hidden;";
            return "<div dhx_unit_id='" + a.$unit + "' class='" + c + "' style='" + d + "'>"
        }
    }
}, dhx.ui.list);
dhx.protoUI({
    name: "multiview",
    defaults: {
        animate: {}
    },
    $init: function() {
        this.q = 0;
        this.p = 1;
        this.h.style.position = "relative";
        this.h.className += " dhx_multiview";
        this.ea = []
    },
    cg: function(a, b) {
        var c = dhx.ui.get(a);
        if (!c.Cb) c.Fc = [], c.Cb = {};
        c.Cb[b] || (c.Cb[b] = !0, c.Fc.push(b))
    },
    Ad: function(a) {
        var b = dhx.ui.get(a);
        this.ea[this.ea.length - 2] != a ? (this.ea.length == 10 && this.ea.splice(0, 1), this.ea.push(a)) : this.ea.splice(this.ea.length - 1, 1);
        if (b.Cb) {
            for (var c = 0; c < b.Fc.length; c++) dhx.ui.get(b.Fc[c]).render();
            b.Fc = [];
            b.Cb = {}
        }
    },
    Wa: function() {},
    U: function(a) {
        for (var a = a || this.X, b = 0; b < a.length; b++) a[b].m = this.g.m || {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        };
        dhx.ui.baselayout.prototype.U.call(this, a);
        for (b = 1; b < this.j.length; b++) dhx.html.remove(this.j[b].h);
        for (b = 0; b < a.length; b++) {
            var c = this.j[b];
            if (!c.j || c.li) {
                var d = c.g.m;
                if (d.top) c.h.style.borderTopWidth = "0px";
                if (d.left) c.h.style.borderLeftWidth = "0px";
                if (d.right) c.h.style.borderRightWidth = "0px";
                if (d.bottom) c.h.style.borderBottomWidth = "0px"
            }
        }
        this.Ad(this.getActive())
    },
    cells_setter: function(a) {
        this.X =
            a
    },
    Xg: function(a, b) {
        return a < b ? "right" : "left"
    },
    ib: function(a, b) {
        if (this.Ya) return dhx.delay(this.ib, this, [a], 100);
        for (var c = -1, d = 0; d < this.j.length; d++)
            if (this.j[d] == a) {
                c = d;
                break
            }
        if (!(c < 0 || c == this.q)) {
            var e = this.j[this.q] ? this.j[this.q].config.id : null,
                f = this.j[c] ? this.j[c].config.id : null;
            if ((b || typeof b == "undefined") && dhx.animate.isSupported() && this.g.animate) {
                var g = dhx.extend({}, this.g.animate);
                g.direction = this.Xg(c, this.q);
                var g = dhx.Settings.K(b || {}, g),
                    h = dhx.animate.formLine(this.j[c].h, this.j[this.q].h,
                        g);
                this.j[c].$getSize();
                this.j[c].$setSize(this.n, this.r);
                g.callback = function() {
                    dhx.animate.breakLine(h);
                    this.Ya = !1;
                    g.master = g.callback = null
                };
                g.master = this;
                this.q = c;
                this.Ad(this.getActive());
                dhx.animate(h, g);
                this.Ya = !0
            } else dhx.html.remove(this.j[this.q].h), this.q = c, this.j[this.q].$getSize(), this.j[this.q].$setSize(this.n, this.r), this.Ad(this.getActive()), this.h.appendChild(this.j[d].h);
            this.callEvent("onViewChange", [e, f])
        }
    },
    $getSize: function() {
        var a = this.j[this.q].$getSize();
        if (this.g.height > -1) a[3] =
            this.g.height, a[2] = 0;
        if (this.g.width > -1) a[1] = this.g.width, a[0] = 0;
        a[0] && (a[1] = 0);
        a[2] && (a[3] = 0);
        return a
    },
    $setSize: function(a, b) {
        dhx.ui.baseview.prototype.$setSize.call(this, a, b);
        this.j[this.q].$setSize(a, b)
    },
    isVisible: function(a, b) {
        return b && b != this.getActive() ? (a && this.cg(b, a), !1) : dhx.ui.view.prototype.isVisible.call(this, a, this.g.id)
    },
    getActive: function() {
        return this.j.length ? this.j[this.q].g.id : null
    },
    back: function(a) {
        a = a || 1;
        if (this.callEvent("onBeforeBack", [this.getActive(), a]) && this.ea.length >
            a) {
            var b = this.ea[this.ea.length - a - 1];
            dhx.ui.get(b).show();
            return b
        }
        return null
    }
}, dhx.ui.baselayout, dhx.EventSystem);
dhx.Modality = {
    modal_setter: function(a) {
        if (a) {
            if (!this.$a) {
                this.$a = dhx.html.create("div", {
                    "class": "dhx_modal"
                });
                var b = this.g.zIndex || dhx.ui.zIndex();
                this.$a.style.zIndex = b - 1;
                this.h.style.zIndex = b;
                document.body.appendChild(this.$a)
            }
        } else this.$a && dhx.html.remove(this.$a), this.$a = null;
        return a
    }
};
dhx.protoUI({
    name: "window",
    $init: function(a) {
        this.h.innerHTML = "<div class='dhx_win_content'><div class='dhx_win_head'></div><div class='dhx_win_body'></div></div>";
        this.k = this.h.firstChild;
        this.B = this.k.childNodes[0];
        this.i = this.H = this.k.childNodes[1];
        this.h.className += " dhx_window";
        this.S = this.l = null;
        this.g.m = {
            top: !1,
            left: !1,
            right: !1,
            bottom: !1
        };
        if (!a.id) a.id = dhx.uid()
    },
    zIndex_setter: function(a) {
        return this.h.style.zIndex = a
    },
    yd: function() {
        this.nf();
        this.l = {
            destructor: function() {}
        }
    },
    Aa: function(a) {
        this.l.destructor();
        this.l = a;
        this.l.G = this;
        this.H.appendChild(this.l.h);
        var b = this.l.h.style;
        b.borderTopWidth = b.borderBottomWidth = b.borderLeftWidth = b.borderRightWidth = "1px";
        this.l.g.m = dhx.copy(this.g.m);
        this.resize(!0)
    },
    destructor: function() {
        this.close()
    },
    show: function(a, b, c) {
        this.g.hidden = !1;
        this.h.style.display = "none";
        this.h.style.zIndex = this.g.zIndex || dhx.ui.zIndex();
        this.g.modal && this.modal_setter(!0);
        var d, e, f;
        if (a) {
            typeof a == "object" && !a.tagName ? (d = {
                x: a.clientX - this.P[0] / 2,
                y: a.clientY
            }, e = this.P[0], f = 1) : (a = dhx.toNode(a),
                d = dhx.html.offset(a));
            var g = document.body.offsetWidth,
                h = document.body.offsetHeight;
            e = e || a.offsetWidth;
            f = f || a.offsetHeight;
            var i = this.P,
                j = 6,
                k = 6,
                l = 6,
                c = "top",
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            g - d.x - e < i[0] && b == "right" && (b = "bottom");
            b == "right" ? (p = d.x + j + e, k = -f, c = "left", m = Math.round(d.y + f / 2), n = p - l) : b == "left" ? (p = d.x - j - i[0] - 1, k = -f, c = "right", m = Math.round(d.y + f / 2), n = p + i[0] + 1) : (p = d.x < 0 ? 0 : g - d.x > i[0] ? d.x : g - j - i[0], n = Math.round(d.x + e / 2), n > p + i[0] && (n = p + i[0] / 2));
            !i[1] || h - f - d.y - k > i[1] ? (o = f + d.y + k, m || (c = "top", m = o - l)) : (o = d.y - k - i[1], o < 0 ?
                (o = 0, c == "top" && (c = !1)) : m || (c = "bottom", o--, m = o + i[1] + 1));
            this.setPosition(p, o);
            c && this.Af && this.Af(c, n, m)
        }
        this.Ji = new Date;
        this.h.style.display = "block";
        this.nf();
        this.callEvent("onShow", [])
    },
    nf: function() {
        if (this.Va) {
            var a = this.g.hidden;
            this.g.hidden = !1;
            for (var b = 0; b < this.Va.length; b++) {
                var c = dhx.ui.get(this.Va[b]);
                c && c.render()
            }
            this.Va = [];
            this.jd = {};
            this.g.hidden = a
        }
    },
    hidden_setter: function(a) {
        a ? this.hide() : this.show();
        return !!a
    },
    hide: function() {
        !this.g.hidden && !(new Date - this.Ji < 100) && (this.g.modal &&
            this.modal_setter(!1), this.g.position == "top" ? dhx.animate(this.h, {
                type: "slide",
                x: 0,
                y: 0,
                duration: 300,
                callback: this.Ge,
                master: this
            }) : this.Ge())
    },
    Ge: function() {
        this.h.style.display = "none";
        this.g.hidden = !0;
        this.callEvent("onHide", [])
    },
    close: function() {
        this.define("modal", !1);
        this.l.destructor();
        this.S && this.S.destructor();
        dhx.Destruction.destructor.call(this)
    },
    body_setter: function(a) {
        typeof a != "object" && (a = {
            template: a
        });
        this.l = dhx.ui.Ca(a);
        this.l.G = this;
        this.H.appendChild(this.l.h);
        return a
    },
    head_setter: function(a) {
        if (a === !1) return a;
        typeof a != "object" && (a = {
            template: a,
            css: "dhx_alert_head"
        });
        this.S = dhx.ui.Ca(a);
        this.S.G = this;
        this.B.appendChild(this.S.h);
        return a
    },
    getBody: function() {
        return this.l
    },
    getHead: function() {
        return this.S
    },
    adjust: function() {
        return this.resize()
    },
    resizeChildren: function() {
        this.resize()
    },
    resize: function() {
        var a = this.$getSize();
        this.$setSize(a[1] || this.g.width, a[3] || this.g.height);
        this.Ei(this.g.left, this.g.top)
    },
    Ei: function(a, b) {
        if (this.g.position) {
            var c = Math.round((document.body.offsetWidth - this.g.width) /
                2),
                d = Math.round((document.body.offsetHeight - this.g.height) / 2);
            this.g.position == "top" && (d = dhx.animate.isSupported() ? -1 * this.g.height : 10);
            this.setPosition(c, d);
            this.g.position == "top" && dhx.animate(this.h, {
                type: "slide",
                x: 0,
                y: this.g.height,
                duration: 300,
                callback: this.Wi,
                master: this
            })
        } else this.setPosition(a, b)
    },
    Wi: function(a) {
        dhx.animate.clear(a);
        this.g.top = 2;
        this.setPosition(this.g.left, this.g.top)
    },
    setPosition: function(a, b) {
        this.h.style.top = b + "px";
        this.h.style.left = a + "px";
        this.g.left = a;
        this.g.top = b
    },
    $getSize: function() {
        var a = this.l.$getSize();
        if (this.S) {
            var b = this.S.$getSize();
            if (b[3]) this.g.headHeight = b[3]
        }
        if (a[3]) a[3] += this.g.head !== !1 ? this.g.headHeight : 0, this.g.height = a[3];
        if (a[1]) this.g.width = a[1];
        if (a[0] || a[2]) this.g.gravity = Math.max(a[0], a[2]);
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    $setSize: function(a, b) {
        if (dhx.ui.view.prototype.$setSize.call(this, a, b)) a = this.n, b = this.r, this.g.head === !1 ? (this.B.style.display = "none", this.l.$setSize(a, b)) : (this.S.$setSize(a, this.g.headHeight),
            this.l.$setSize(a, b - this.g.headHeight))
    },
    defaults: {
        headHeight: 43,
        width: 300,
        height: 200,
        top: 300,
        left: 100,
        body: "",
        head: ""
    }
}, dhx.ui.view, dhx.Movable, dhx.Modality, dhx.EventSystem);
dhx.protoUI({
    name: "popup",
    $init: function() {
        this.g.head = !1;
        dhx.event(this.k, "click", dhx.bind(this.tg, this));
        dhx.attachEvent("onClick", dhx.bind(this.Wa, this));
        this.attachEvent("onHide", this.He)
    },
    tg: function() {
        this.Ki = new Date
    },
    Wa: function() {
        new Date - (this.Ki || 0) > 250 && this.hide()
    },
    $getSize: function() {
        var a = this.l.$getSize();
        if (a[3]) this.g.height = a[3] + this.g.padding * 2;
        if (a[1]) this.g.width = a[1] + this.g.padding * 2;
        if (a[0] || a[2]) this.g.gravity = Math.max(a[0], a[2]);
        return dhx.ui.view.prototype.$getSize.call(this)
    },
    close: function() {
        dhx.html.remove(this.eb);
        dhx.ui.window.prototype.close.call(this)
    },
    $setSize: function(a, b) {
        if (dhx.ui.view.prototype.$setSize.call(this, a, b)) a = this.n - this.g.padding * 2, b = this.r - this.g.padding * 2, this.k.style.padding = this.g.padding + "px", this.B.style.display = "none", this.l.$setSize(a, b)
    },
    body_setter: function(a) {
        a = dhx.ui.window.prototype.body_setter.call(this, a);
        this.l.g.m = {
            top: !1,
            left: !1,
            right: !1,
            bottom: !1
        };
        return a
    },
    defaults: {
        padding: 8
    },
    head_setter: null,
    Af: function(a, b, c) {
        this.He();
        document.body.appendChild(this.eb =
            dhx.html.create("DIV", {
                "class": "dhx_point_" + a
            }, ""));
        this.eb.style.zIndex = dhx.ui.zIndex();
        this.eb.style.top = c + "px";
        this.eb.style.left = b + "px"
    },
    He: function() {
        this.eb = dhx.html.remove(this.eb)
    }
}, dhx.ui.window);
dhx.protoUI({
    name: "alert",
    defaults: {
        position: "center",
        head: {
            template: "Info",
            css: "dhx_alert_head"
        },
        width: 250,
        height: 170,
        modal: !0,
        callback: null,
        body: {
            type: "clean",
            rows: [{
                template: "<div class='dhx_alert_text'>#text#</div>",
                data: {
                    text: "You have forgot to define the text :) "
                }
            }, {
                view: "button",
                height: 60,
                id: "dhx_alert_ok",
                type: "big",
                label: "Ok",
                click: function() {
                    this.getParent().getParent().Sc(!0)
                }
            }]
        }
    },
    $init: function() {
        (!this.h.parentNode || !this.h.parentNode.tagName) && document.body.appendChild(this.h);
        this.$ready.push(this.resize)
    },
    mf: function(a) {
        typeof a == "string" && (a = {
            title: this.defaults.head.template,
            message: a
        });
        dhx.extend(a, this.defaults);
        delete a.head;
        delete a.body;
        this.cb(a, {});
        this.resize();
        this.show()
    },
    title_setter: function(a) {
        this.S.define("template", a);
        this.S.render()
    },
    message_setter: function(a) {
        var b = this.l.j[0];
        b.data = {
            text: a
        };
        b.render()
    },
    labelOk_setter: function(a) {
        var b = this.l.j[1];
        b.config.label = a;
        b.render()
    },
    labelCancel_setter: function(a) {
        var b = this.l.j[2];
        b.config.label = a;
        b.render()
    },
    Sc: function(a) {
        this.hide();
        this.g.callback && dhx.toFunctor(this.g.callback).call(this, a, this.g.details)
    }
}, dhx.ui.window);
dhx.alert = dhx.single(dhx.ui.alert);
dhx.protoUI({
        name: "confirm",
        defaults: {
            height: 210,
            head: {
                template: "Info",
                css: "dhx_alert_head"
            },
            body: {
                type: "clean",
                rows: [{
                    id: "dhx_confirm_message",
                    template: "<div class='dhx_alert_text'>#text#</div>",
                    data: {
                        text: "You have forgot to define the text :) "
                    }
                }, {
                    height: 53,
                    view: "button",
                    type: "big",
                    id: "dhx_confirm_ok",
                    label: "Ok",
                    click: function() {
                        this.getParent().getParent().Sc(!0)
                    }
                }, {
                    height: 55,
                    view: "button",
                    type: "biground",
                    id: "dhx_confirm_cancel",
                    label: "Cancel",
                    click: function() {
                        this.getParent().getParent().Sc(!1)
                    }
                }]
            }
        }
    },
    dhx.ui.alert);
dhx.confirm = dhx.single(dhx.ui.confirm);
dhx.protoUI({
    name: "form",
    defaults: {
        scroll: !0
    },
    Yc: -1,
    jf: function(a) {
        this.k.className += " dhx_form";
        if (a.elements) this.X = a.elements, this.p = !0;
        dhx.za = this
    },
    type_setter: function() {}
}, dhx.ui.toolbar);
dhx.protoUI({
    name: "googlemap",
    $init: function(a) {
        if (!a.id) a.id = dhx.uid();
        this.h.innerHTML = "<div class='dhx_map_content' style='width:100%;height:100%'></div>";
        this.k = this.h.firstChild;
        this.map = null;
        this.$ready.push(this.render)
    },
    render: function() {
        var a = this.g,
            b = {
                zoom: a.zoom,
                center: a.center,
                mapTypeId: a.mapType
            };
        this.map = new google.maps.Map(this.k, b)
    },
    center_setter: function(a) {
        typeof a != "object" && (a = {});
        this.K(a, {
            x: 48.724,
            y: 8.215
        });
        a = new google.maps.LatLng(a.x, a.y);
        this.map && this.map.setCenter(a);
        return a
    },
    mapType_setter: function(a) {
        a = google.maps.MapTypeId[a];
        this.map && this.map.setMapTypeId(a);
        return a
    },
    zoom_setter: function(a) {
        this.map && this.map.setZoom(a);
        return a
    },
    defaults: {
        zoom: 5,
        center: {},
        mapType: "ROADMAP"
    },
    $setSize: function() {
        dhx.ui.view.prototype.$setSize.apply(this, arguments);
        google.maps.event.trigger(this.map, "resize")
    }
}, dhx.ui.view);
dhx.protoUI({
    name: "video",
    $init: function(a) {
        if (!a.id) a.id = dhx.uid();
        this.$ready.push(this.qh)
    },
    qh: function() {
        var a = this.g;
        this.k = dhx.html.create("video", {
            "class": "dhx_view_video",
            style: "width:100%;height:100%;",
            src: a.src,
            autobuffer: "autobuffer"
        }, "");
        if (a.poster) this.k.poster = a.poster;
        this.k.addEventListener && this.k.addEventListener("click", function(a) {
            return function() {
                a.play()
            }
        }(this.k), !1);
        if (a.controls) this.k.controls = !0;
        if (a.autoplay) this.k.autoplay = !0;
        this.h.appendChild(this.k)
    },
    getVideo: function() {
        return this.k
    },
    defaults: {
        src: "",
        controls: !0,
        autoplay: !0
    }
}, dhx.ui.view);
dhx.protoUI({
    name: "grid",
    $init: function() {
        this.k.innerHTML = "<div class='dhx_grid_header' style='width:100%;height:" + this.g.headerHeight + "px;'></div><div class='dhx_grid_body'></div>";
        this.k.className += " dhx_grid";
        this.H = this.i = this.k.childNodes[1];
        dhx.extend(this, dhx.Scrollable);
        this.data.provideApi(this, !0);
        this.data.attachEvent("onStoreUpdated", dhx.bind(function() {
            this.render()
        }, this));
        this.attachEvent("onBeforeRender", this.ni);
        this.$ready.push(this.render);
        this.attachEvent("onAfterScroll", this.xi);
        this.Jd = null
    },
    xi: function(a) {
        if (this.g.scroll && this.g.scroll.indexOf("x") != -1 && dhx.Touch) {
            var b = this.H.previousSibling.firstChild;
            dhx.Touch.pa(b, -a.e, 0, "0ms")
        }
    },
    header_setter: function(a) {
        this.H.previousSibling.style.display = a ? "" : "none";
        return a
    },
    defaults: {
        select: !0,
        type: "default",
        sorting: !0,
        header: !0,
        scroll: !0,
        headerHeight: 42
    },
    J: "dhx_f_id",
    on_click: {
        dhx_grid_row: function(a, b) {
            this.g.select && (this.g.select == "multiselect" ? this.select(b, a.ctrlKey, a.shiftKey) : this.select(b))
        },
        dhx_grid_header: function(a,
            b) {
            if (this.g.sorting && (b = dhx.html.locate(a, "column_id"), b !== null)) {
                this.Jd = b;
                var c = this.g.fields[b].sort;
                this.sort(c);
                c.dir = c.dir == "desc" ? "asc" : "desc"
            }
        }
    },
    fields_setter: function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            if (typeof a[c].id == "undefined") a[c].id = "f" + c;
            var d = a[c].id;
            this.K(a[c], {
                width: 100,
                label: d,
                template: "#" + a[c].id + "#",
                css: this.type.css,
                sort: {
                    by: "#" + d + "#",
                    dir: "asc",
                    as: "string"
                },
                align: "left"
            });
            a[c].template = dhx.Template(a[c].template);
            b[d] = a[c]
        }
        return this.type.fields = b
    },
    ni: function() {
        if (this.g.header) {
            var a =
                this.g.fields,
                b = this.H.previousSibling,
                c = "<table style='width:0px;height:100%' cellspacing='0' cellpadding='0'><tr>",
                d;
            for (d in a) c += this.ji(a[d].label, a[d].width, d);
            c += "</tr></table>";
            b.innerHTML = c
        }
    },
    ji: function(a, b, c) {
        var d = "<td class='dhx_grid_header_td' ";
        dhx.isUndefined(c) || (d += "column_id='" + c + "'");
        d += "><div style='width:" + b + "px;'>" + (a === "" ? "&nbsp;" : a);
        if (c && c == this.Jd) {
            var e = this.g.fields[this.Jd].sort.dir;
            d += "<div class='dhx_sort_" + e + "' style='left:" + (b - this.type.sortImgWidth) + "px'></div>"
        }
        d +=
            "</div></td>";
        return d
    },
    $setSize: function(a, b) {
        if (dhx.ui.view.prototype.$setSize.apply(this, arguments)) this.H.style.height = this.r - (this.g.header ? this.g.headerHeight : 0) + "px", this.H.style.width = this.n + "px", this.H.previousSibling.style.width = this.n + "px"
    },
    type: {
        template: function(a, b) {
            var c = "",
                d;
            for (d in b.fields) {
                var e = b.fields[d];
                c += "<td style='' class='dhx_td' ><div align='" + e.align + "' style='width:" + e.width + "px;height:" + b.height + "px;line-height:" + b.height + "px' class='dhx_cell " + e.css + "'>" + e.template(a,
                    b) + "</div></td>"
            }
            return c
        },
        align: "left",
        height: 42,
        css: "",
        sortImgWidth: 20,
        type: "text",
        templateStart: function(a, b) {
            return "<table dhx_f_id='" + a.id + "' class='dhx_grid_row" + (a.$selected ? "_selected" : "") + " " + b.templateCss(a, b) + "' cellpadding='0' cellspacing='0'><tr>"
        },
        templateCss: dhx.Template(""),
        templateEnd: dhx.Template("</tr></table>")
    }
}, dhx.SelectionModel, dhx.MouseEvents, dhx.RenderStack, dhx.DataLoader, dhx.ui.view, dhx.EventSystem, dhx.Settings);
dhx.Type(dhx.ui.grid, {
    name: "dummy"
});
dhx.protoUI({
    name: "carousel",
    defaults: {
        scrollSpeed: "100ms"
    },
    $init: function() {
        this.h.className += " dhx_carousel";
        this.h.appendChild(dhx.html.create("DIV", {
            "class": "dhx_scroll_carousel"
        }, ""));
        this.k = this.h.firstChild;
        this.i = null;
        this.q = 0;
        this.$ready.push(this.da)
    },
    da: function() {
        this.k.setAttribute("touch_scroll", this.p ? "y" : "x")
    },
    $changeScroll: function(a) {
        var b = this.p ? this.r : this.n,
            c, d;
        this.p ? (c = Math.round(a.f / b), a.f = c * b) : (c = Math.round(a.e / b), a.e = c * b);
        this.q = -c;
        this.g.panel && this.Cc();
        this.callEvent("onShow", [this.j[this.q].g.id]);
        return !0
    },
    ib: function(a) {
        var b, c, d, e, f;
        c = -1;
        for (b = 0; b < this.j.length; b++)
            if (this.j[b] == a) {
                c = b;
                break
            }
        if (!(c < 0 || c == this.q)) this.q = c, d = this.p ? this.r : this.n, e = -(this.p ? 0 : c * d), f = -(this.p ? c * d : 0), this.scrollTo(e, f), this.Bb()
    },
    scrollTo: function(a, b) {
        dhx.Touch ? dhx.Touch.pa(this.k, a, b, this.g.scrollSpeed || "100ms") : (this.k.parentNode.scrollLeft = -a, this.k.parentNode.scrollTop = -b)
    },
    panel_setter: function(a) {
        this.K(a, {
            size: 16,
            itemSize: 16,
            align: "bottom"
        });
        return a
    },
    $getSize: function() {
        return dhx.ui.layout.prototype.$getSize.call(this)
    },
    $setSize: function(a, b) {
        var c = this.j.length,
            d = this.p ? c : 1,
            e = this.p ? 1 : c;
        dhx.ui.view.prototype.$setSize.call(this, a, b);
        this.k.style.height = b * d + "px";
        this.k.style.width = a * e + "px";
        this.La(a * e, b * d);
        this.Bb()
    },
    getActive: function() {
        return this.j[this.q].g.id
    }
}, dhx.CarouselPanel, dhx.ui.baselayout, dhx.EventSystem);
dhx.notice = function(a) {
    typeof a != "object" && (a = {
        message: a
    });
    a = dhx.Settings.K(a, {
        message: "Sample notice message.",
        css: "",
        width: 240,
        delay: 3500,
        top: 9,
        right: 9
    });
    dhx.notice.kb && (a.top += dhx.notice.kb);
    var b = dhx.html.create("div", {
        "class": "dhx_notice " + a.css
    }, "<span class='dhx_notice_content'>" + a.message + "</span>");
    b.style.cssText = "width:" + a.width + "px;top:" + a.top + "px; right:" + a.right + "px";
    document.body.appendChild(b);
    dhx.notice.kb = a.top + b.offsetHeight;
    dhx.delay(dhx.notice.rg, b, [dhx.notice.kb], a.delay)
};
dhx.notice.rg = function(a) {
    if (dhx.notice.kb == a) dhx.notice.kb = 0;
    dhx.html.remove(this)
};
dhx.dp = function(a) {
    if (typeof a == "object" && a.g) a = a.g.id;
    if (dhx.dp.vd[a]) return dhx.dp.vd[a];
    if (typeof a == "string" || typeof a == "number") a = {
        master: dhx.ui.get(a)
    };
    var b = new dhx.DataProcessor(a);
    return dhx.dp.vd[b.g.master.g.id] = b
};
dhx.dp.vd = {};
dhx.DataProcessor = dhx.proto({
    defaults: {
        autoupdate: !0,
        mode: "post"
    },
    $init: function() {
        this.ia = [];
        this.fj = [];
        this.ta = null;
        this.Xa = !1;
        this.name = "DataProcessor";
        this.$ready.push(this.da)
    },
    master_setter: function(a) {
        var b = a;
        if (a.name != "DataStore") b = a.data;
        this.g.store = b;
        return a
    },
    da: function() {
        this.g.store.attachEvent("onStoreUpdated", dhx.bind(this.ef, this));
        this.g.url && this.g.url.$proxy && this.attachEvent("onBeforeDataSend", dhx.bind(this.g.url.wh, this.g.url))
    },
    ignore: function(a, b) {
        var c = this.Xa;
        this.Xa = !0;
        a.call(b || this);
        this.Xa = c
    },
    off: function() {
        this.Xa = !0
    },
    on: function() {
        this.Xa = !1
    },
    vg: function(a) {
        var b = {}, c;
        for (c in a) c.indexOf("$") !== 0 && (b[c] = a[c]);
        return b
    },
    save: function(a, b) {
        b = b || "update";
        this.ef(a, this.g.store.item(a), b)
    },
    ef: function(a, b, c) {
        if (this.Xa === !0 || !c) return !0;
        var d = {
            id: a,
            data: this.vg(b)
        };
        switch (c) {
            case "update":
                d.operation = "update";
                break;
            case "add":
                d.operation = "insert";
                break;
            case "delete":
                d.operation = "delete";
                break;
            default:
                return !0
        }
        if (d.operation != "delete" && !this.validate(d.data)) return !1;
        this.qg(d) && this.ia.push(d);
        this.g.autoupdate && this.send();
        return !0
    },
    qg: function(a) {
        for (var b = 0; b < this.ia.length; b++) {
            var c = this.ia[b];
            if (c.id == a.id) {
                if (a.operation == "delete") c.operation == "insert" ? this.ia.splice(b, 1) : c.operation = "delete";
                c.data = a.data;
                return !1
            }
        }
        return !0
    },
    send: function() {
        this.Ai()
    },
    Ai: function() {
        if (this.g.url) {
            for (var a = this.ia, b = [], c = 0; c < a.length; c++) {
                var d = a[c].id,
                    e = a[c].operation;
                if (this.g.store.exists(d)) a[c].data = dhx.fullCopy(this.g.store.item(d));
                this.callEvent("onBefore" + e, [d, a[c].data]) && b.push(a[c])
            }
            if (b.length || this.g.url.$proxy) this.callEvent("onBeforeDataSend", [b]) && (this.g.url.$proxy ? this.g.url.hb(b, this.g.mode, this) : this.hb(this.g.url, this.Mc(b), this.g.mode))
        }
    },
    Mc: function(a) {
        var b = {};
        if (this.g.single) this.Ob(a[0].data, b, "", a[0].operation);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d];
                c.push(e.id);
                this.Ob(e.data, b, e.id + "_", e.operation)
            }
            b.ids = c.join(",")
        }
        return b
    },
    Ob: function(a, b, c, d) {
        for (var e in a) e.indexOf("$") !== 0 && (b[c + e] = a[e]);
        b[c + "!nativeeditor_status"] =
            d
    },
    hb: function(a, b, c) {
        if (typeof a == "function") return a(b);
        a += a.indexOf("?") == -1 ? "?" : "&";
        a += "editing=true";
        dhx.ajax()[c](a, b, dhx.bind(this.ud, this))
    },
    ud: function(a, b, c) {
        this.callEvent("onBeforeSync", [f, a, b, c]);
        for (var d = dhx.DataDriver.xml, b = d.toObject(a, d), e = d.xpath(b, "//action"), f = [], g = 0; g < e.length; g++) {
            var h = d.tagToObject(e[g]);
            f.push(h);
            for (var i = -1, j = 0; j < this.ia.length;) {
                this.ia[j].id == h.sid && (i = j);
                break
            }
            if (!(h.type == "error" || h.type == "invalid") || this.callEvent("onDBError", [h, this.ia[i]])) i >= 0 &&
                this.ia.splice(i, 1), h.tid != h.sid && this.g.store.changeId(h.sid, h.tid), this.callEvent("onAfter" + h.type, [h])
        }
        this.callEvent("onAfterSync", [f, a, b, c])
    },
    escape: function(a) {
        return this.g.escape ? this.g.escape(a) : encodeURIComponent(a)
    }
}, dhx.Settings, dhx.EventSystem, dhx.ValidateData);
dhx.jsonp = function(a, b, c, d) {
    var e = "dhx_jsonp_" + dhx.uid(),
        f = document.createElement("script");
    f.id = e;
    f.type = "text/javascript";
    var g = document.getElementsByTagName("head")[0];
    b || (b = {});
    b.jsonp = "dhx.jsonp." + e;
    dhx.jsonp[e] = function() {
        c.apply(d || window, arguments);
        f.parentNode.removeChild(f);
        c = g = d = f = null;
        delete dhx.jsonp[e]
    };
    var h = [],
        i;
    for (i in b) h.push(i + "=" + encodeURIComponent(b[i]));
    a += (a.indexOf("?") == -1 ? "?" : "&") + h.join("&");
    f.src = a;
    g.appendChild(f)
};
dhx.Canvas = {
    $init: function() {
        this.Yb = []
    },
    ci: function(a) {
        this.W = dhx.html.create("canvas", {
            width: a.offsetWidth || this.n,
            height: a.offsetHeight || this.r
        });
        a.appendChild(this.W);
        this.W.getContext || dhx.error("Canvas is not supported in the current browser");
        return this.W
    },
    getCanvas: function(a) {
        return (this.W || this.ci(this.k)).getContext(a || "2d")
    },
    oi: function() {
        this.W && (this.W.setAttribute("width", this.W.parentNode.offsetWidth), this.W.setAttribute("height", this.W.parentNode.offsetHeight))
    },
    renderText: function(a,
        b, c, d, e) {
        if (c) {
            e && (e = Math.max(e, 0));
            b && (b = Math.max(b, 0));
            var f = dhx.html.create("DIV", {
                "class": "dhx_canvas_text" + (d ? " " + d : ""),
                style: "left:" + a + "px; top:" + b + "px;"
            }, c);
            this.k.appendChild(f);
            this.Yb.push(f);
            if (e) f.style.width = e + "px";
            return f
        }
    },
    renderTextAt: function(a, b, c, d, e, f, g) {
        var h = this.renderText.call(this, c, d, e, f, g);
        if (h) {
            if (a) h.style.top = a == "middle" ? parseInt(d - h.offsetHeight / 2, 10) + "px" : d - h.offsetHeight + "px";
            if (b) h.style.left = b == "left" ? c - h.offsetWidth + "px" : parseInt(c - h.offsetWidth / 2, 10) + "px"
        }
        return h
    },
    clearCanvas: function() {
        for (var a = 0; a < this.Yb.length; a++) this.k.removeChild(this.Yb[a]);
        this.Yb = [];
        if (this.k.u) this.k.u.parentNode.removeChild(this.k.u), this.k.u = null;
        this.getCanvas().clearRect(0, 0, this.W.offsetWidth, this.W.offsetHeight)
    }
};
dhx.Group = {
    $init: function() {
        this.attachEvent("onBeforeRender", function(a) {
            this.g.sort && (a.blockEvent(), a.sort(this.g.sort), a.unblockEvent())
        });
        this.attachEvent("onBeforeSort", function() {
            this.g.sort = null
        });
        this.data.attachEvent("onStoreLoad", dhx.bind(function() {
            this.g.group && this.group(this.g.group, !1)
        }, this));
        this.data.attachEvent("onClearAll", dhx.bind(function() {
            this.ungroup(!1)
        }, this));
        dhx.extend(this.data, dhx.GroupStore)
    },
    group: function(a, b) {
        this.data.ungroup(!1);
        this.data.group(a);
        b !== !1 && this.render()
    },
    ungroup: function(a) {
        this.data.ungroup();
        a !== !1 && this.render()
    },
    group_setter: function(a) {
        return a
    },
    sort_setter: function(a) {
        typeof a != "object" && (a = {
            by: a
        });
        this.K(a, {
            as: "string",
            dir: "asc"
        });
        return a
    }
};
dhx.GroupStore = {
    sum: function(a, b) {
        var a = dhx.Template(a),
            b = b || this,
            c = 0;
        b.each(function(b) {
            c += a(b) * 1
        });
        return c
    },
    min: function(a, b) {
        var a = dhx.Template(a),
            b = b || this,
            c = Infinity;
        b.each(function(b) {
            a(b) * 1 < c && (c = a(b) * 1)
        });
        return c * 1
    },
    max: function(a, b) {
        var a = dhx.Template(a),
            b = b || this,
            c = -Infinity;
        b.each(function(b) {
            a(b) * 1 > c && (c = a(b) * 1)
        });
        return c
    },
    Td: function(a, b) {
        a = dhx.Template(a);
        return a(b[0])
    },
    ungroup: function() {
        if (this.sd) this.order = this.sd, this.pull = this.bf, this.bf = this.sd = null;
        this.callEvent("onStoreUpdated", [])
    },
    group: function(a) {
        var b = dhx.Template(a.by);
        a.map[b] || (a.map[b] = [b, this.Td]);
        var c = {}, d = [];
        this.each(function(a) {
            var e = b(a);
            c[e] || (d.push({
                id: e
            }), c[e] = dhx.toArray());
            c[e].push(a)
        });
        for (var e in a.map) {
            var f = a.map[e][1] || this.Td;
            typeof f != "function" && (f = this[f]);
            for (var g = 0; g < d.length; g++) d[g][e] = f.call(this, a.map[e][0], c[d[g].id])
        }
        this.sd = this.order;
        this.bf = this.pull;
        this.order = dhx.toArray();
        this.pull = {};
        for (g = 0; g < d.length; g++) {
            var h = this.id(d[g]);
            this.pull[h] = d[g];
            this.order.push(h)
        }
        this.callEvent("onStoreUpdated", [])
    }
};
dhx.color = {
    Nd: "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F".split(","),
    toHex: function(a, b) {
        for (var a = parseInt(a, 10), c = ""; a > 0;) c = this.Nd[a % 16] + c, a = Math.floor(a / 16);
        for (; c.length < b;) c = "0" + c;
        return c
    },
    hexToDec: function(a) {
        return parseInt(a, 16)
    },
    toRgb: function(a) {
        var b, c, d, e;
        typeof a != "string" ? (b = a[0], c = a[1], d = a[2]) : a.indexOf("rgb") != -1 ? (e = a.substr(a.indexOf("(") + 1, a.lastIndexOf(")") - a.indexOf("(") - 1).split(","), b = e[0], c = e[1], d = e[2]) : (a.substr(0, 1) == "#" && (a = a.substr(1)), b = this.hexToDec(a.substr(0, 2)), c = this.hexToDec(a.substr(2, 2)),
            d = this.hexToDec(a.substr(4, 2)));
        b = parseInt(b, 10) || 0;
        c = parseInt(c, 10) || 0;
        d = parseInt(d, 10) || 0;
        if (b < 0 || b > 255) b = 0;
        if (c < 0 || c > 255) c = 0;
        if (d < 0 || d > 255) d = 0;
        return [b, c, d]
    },
    hsvToRgb: function(a, b, c) {
        var d, e, f, g, h, i, j, k;
        d = Math.floor(a / 60) % 6;
        e = a / 60 - d;
        f = c * (1 - b);
        g = c * (1 - e * b);
        h = c * (1 - (1 - e) * b);
        k = j = i = 0;
        switch (d) {
            case 0:
                i = c;
                j = h;
                k = f;
                break;
            case 1:
                i = g;
                j = c;
                k = f;
                break;
            case 2:
                i = f;
                j = c;
                k = h;
                break;
            case 3:
                i = f;
                j = g;
                k = c;
                break;
            case 4:
                i = h;
                j = f;
                k = c;
                break;
            case 5:
                i = c, j = f, k = g
        }
        i = Math.floor(i * 255);
        j = Math.floor(j * 255);
        k = Math.floor(k * 255);
        return [i,
            j, k]
    },
    rgbToHsv: function(a, b, c) {
        var d, e, f, g, h, i, j, k;
        d = a / 255;
        e = b / 255;
        f = c / 255;
        g = Math.min(d, e, f);
        h = Math.max(d, e, f);
        j = 0;
        i = h == 0 ? 0 : 1 - g / h;
        k = h;
        h == g ? j = 0 : h == d && e >= f ? j = 60 * (e - f) / (h - g) + 0 : h == d && e < f ? j = 60 * (e - f) / (h - g) + 360 : h == e ? j = 60 * (f - d) / (h - g) + 120 : h == f && (j = 60 * (d - e) / (h - g) + 240);
        return [j, i, k]
    }
};
dhx.HtmlMap = dhx.proto({
    $init: function(a) {
        this.J = "map_" + dhx.uid();
        this.yh = a;
        this.ya = []
    },
    addRect: function(a, b, c) {
        this.fe(a, "RECT", b, c)
    },
    addPoly: function(a, b) {
        this.fe(a, "POLY", b)
    },
    fe: function(a, b, c, d) {
        var e = "";
        arguments.length == 4 && (e = "userdata='" + d + "'");
        this.ya.push("<area " + this.yh + "='" + a + "' shape='" + b + "' coords='" + c.join() + "' " + e + "></area>")
    },
    addSector: function(a, b, c, d, e, f, g) {
        var h = [];
        h.push(d);
        h.push(Math.floor(e * g));
        for (var i = b; i < c; i += Math.PI / 18) h.push(Math.floor(d + f * Math.cos(i))), h.push(Math.floor((e +
            f * Math.sin(i)) * g));
        h.push(Math.floor(d + f * Math.cos(c)));
        h.push(Math.floor((e + f * Math.sin(c)) * g));
        h.push(d);
        h.push(Math.floor(e * g));
        return this.addPoly(a, h)
    },
    render: function(a) {
        var b = dhx.html.create("DIV");
        b.style.cssText = "position:absolute; width:100%; height:100%; top:0px; left:0px;";
        a.appendChild(b);
        var c = dhx.env.isIE ? "" : "src='data:image/gif;base64,R0lGODlhEgASAIAAAP///////yH5BAUUAAEALAAAAAASABIAAAIPjI+py+0Po5y02ouz3pwXADs='";
        b.innerHTML = "<map id='" + this.J + "' name='" + this.J + "'>" + this.ya.join("\n") +
            "</map><img " + c + " class='dhx_map_img' usemap='#" + this.J + "'>";
        a.u = b;
        this.ya = []
    }
});
dhx.ui.tooltip = function(a) {
    typeof a == "string" && (a = {
        template: a
    });
    dhx.extend(this, dhx.Settings);
    dhx.extend(this, dhx.SingleRender);
    this.cb(a, {
        type: "default",
        dy: 0,
        dx: 20
    });
    this.i = this.k = document.createElement("DIV");
    this.k.className = "dhx_tooltip";
    dhx.html.insertBefore(this.k, document.body.firstChild)
};
dhx.ui.tooltip.prototype = {
    isVisible: function() {
        return !0
    },
    show: function(a, b) {
        if (!this.Ra) {
            if (this.data != a) this.data = dhx.extend({}, a), this.render(a);
            this.k.style.top = b.y + this.g.dy + "px";
            this.k.style.left = b.x + this.g.dx + "px";
            this.k.style.display = "block"
        }
    },
    hide: function() {
        this.data = null;
        this.k.style.display = "none"
    },
    disable: function() {
        this.Ra = !0
    },
    enable: function() {
        this.Ra = !1
    },
    type: {
        template: dhx.Template("{obj.id}"),
        templateStart: dhx.Template.empty,
        templateEnd: dhx.Template.empty
    }
};
dhx.protoUI({
        name: "chart",
        $init: function(a) {
            this.v = [this.g];
            this.pd = [];
            this.k.className += " dhx_chart";
            this.$ready.push(this.da);
            a.preset && this.definePreset(a);
            this.attachEvent("onLocateData", this.Ri);
            this.data.provideApi(this, !0)
        },
        da: function() {
            this.data.attachEvent("onStoreUpdated", dhx.bind(function() {
                this.render()
            }, this))
        },
        defaults: {
            color: "RAINBOW",
            alpha: "1",
            label: !1,
            value: "{obj.value}",
            padding: {},
            type: "pie",
            lineColor: "#ffffff",
            cant: 0.5,
            barWidth: 30,
            labelWidth: 100,
            line: {
                width: 2,
                color: "#1293f8"
            },
            item: {
                radius: 3,
                borderColor: "#636363",
                borderWidth: 1,
                color: "#ffffff",
                alpha: 1,
                type: "r",
                shadow: !1
            },
            shadow: !0,
            gradient: !1,
            border: !0,
            labelOffset: 20,
            origin: "auto"
        },
        J: "dhx_area_id",
        on_click: {},
        on_dblclick: {},
        on_mouse_move: {},
        $setSize: function(a, b) {
            dhx.ui.view.prototype.$setSize.call(this, a, b) && (this.oi(), this.render())
        },
        type_setter: function(a) {
            if (typeof this.g.offset == "undefined") this.g.offset = !(a == "area" || a == "stackedArea");
            a == "radar" && !this.g.yAxis && this.define("yAxis", {});
            a == "scatter" && (this.g.yAxis || this.define("yAxis", {}), this.g.xAxis || this.define("xAxis", {}));
            return a
        },
        render: function() {
            var a;
            if (this.isVisible(this.g.id) && this.callEvent("onBeforeRender", [this.data])) {
                if (this.yb)
                    for (a = 0; a < this.pd.length; a++) this.yb.removeChild(this.pd[a]);
                this.pd = [];
                this.clearCanvas();
                this.g.legend && this.Hg(this.getCanvas(), this.data.getRange(), this.n, this.r);
                var b = this.Vg(this.n, this.r),
                    c = new dhx.HtmlMap(this.J),
                    d = this.g;
                for (a = 0; a < this.v.length; a++) this.g = this.v[a], this["$render_" + this.g.type](this.getCanvas(), this.data.getRange(),
                    b.start, b.end, a, c);
                c.render(this.k);
                this.g = d
            }
        },
        series_setter: function(a) {
            if (typeof a == "object") {
                this.cb(!a.length ? a : a[0], {});
                for (var b = 1; b < a.length; b++) this.addSeries(a[b])
            }
            return a
        },
        tooltip_setter: function(a) {
            var b = a.template;
            dhx.extend(a, {
                template: dhx.bind(function(a) {
                    return dhx.Template(this.v[this.Da].tooltip[0])(a)
                }, this)
            }, !0);
            var c = new dhx.ui.tooltip(a);
            this.attachEvent("onMouseMove", function(a, b) {
                this.v[this.Da] && c == this.v[this.Da].tooltip[1] && c.show(this.item(a), dhx.html.pos(b))
            });
            this.attachEvent("onMouseOut",
                function() {
                    this.v[this.Da] && c == this.v[this.Da].tooltip[1] && c.hide()
                });
            this.attachEvent("onMouseMoving", function() {
                this.v[this.Da] && c == this.v[this.Da].tooltip[1] && c.hide()
            });
            return [b, c]
        },
        value_setter: dhx.Template,
        xValue_setter: dhx.Template,
        yValue_setter: function(a) {
            this.define("value", a)
        },
        alpha_setter: dhx.Template,
        label_setter: dhx.Template,
        lineColor_setter: dhx.Template,
        pieInnerText_setter: dhx.Template,
        gradient_setter: function(a) {
            typeof a != "function" && a && a === !0 && (a = "light");
            return a
        },
        colormap: {
            RAINBOW: function(a) {
                var b =
                    Math.floor(this.indexById(a.id) / this.dataCount() * 1536);
                b == 1536 && (b -= 1);
                return this.ei[Math.floor(b / 256)](b % 256)
            }
        },
        color_setter: function(a) {
            return this.colormap[a] || dhx.Template(a)
        },
        fill_setter: function(a) {
            return !a || a == 0 ? !1 : dhx.Template(a)
        },
        definePreset: function(a) {
            this.define("preset", a.preset);
            delete a.preset
        },
        preset_setter: function(a) {
            var b, c, d;
            this.defaults = dhx.extend({}, this.defaults);
            d = this.presets[a];
            if (typeof d == "object") {
                for (b in d)
                    if (typeof d[b] == "object")
                        if (!this.defaults[b] || typeof this.defaults[b] !=
                            "object") this.defaults[b] = dhx.extend({}, d[b]);
                        else
                            for (c in this.defaults[b] = dhx.extend({}, this.defaults[b]), d[b]) this.defaults[b][c] = d[b][c];
                        else this.defaults[b] = d[b];
                return a
            }
            return !1
        },
        legend_setter: function(a) {
            if (!a) {
                if (this.legendObj) this.legendObj.innerHTML = "", this.legendObj = null;
                return !1
            }
            typeof a != "object" && (a = {
                template: a
            });
            this.K(a, {
                width: 150,
                height: 18,
                layout: "y",
                align: "left",
                valign: "bottom",
                template: "",
                marker: {
                    type: "square",
                    width: 15,
                    height: 15,
                    radius: 3
                },
                margin: 4,
                padding: 3
            });
            a.template = dhx.Template(a.template);
            return a
        },
        item_setter: function(a) {
            typeof a != "object" && (a = {
                color: a,
                borderColor: a
            });
            this.K(a, dhx.extend({}, this.defaults.item));
            a.alpha = dhx.Template(a.alpha);
            a.borderColor = dhx.Template(a.borderColor);
            a.color = dhx.Template(a.color);
            a.radius = dhx.Template(a.radius);
            return a
        },
        line_setter: function(a) {
            typeof a != "object" && (a = {
                color: a
            });
            dhx.extend(this.defaults.line, a, !0);
            a = dhx.extend({}, this.defaults.line);
            a.color = dhx.Template(a.color);
            return a
        },
        padding_setter: function(a) {
            typeof a != "object" && (a = {
                left: a,
                right: a,
                top: a,
                bottom: a
            });
            this.K(a, {
                left: 50,
                right: 20,
                top: 35,
                bottom: 40
            });
            return a
        },
        xAxis_setter: function(a) {
            if (!a) return !1;
            typeof a != "object" && (a = {
                template: a
            });
            this.K(a, {
                title: "",
                color: "#000000",
                lineColor: "#cfcfcf",
                template: "{obj}",
                lines: !0
            });
            var b = ["lineColor", "template", "lines"];
            this.ce(b, a);
            this.g.configXAxis = dhx.extend({}, a);
            return a
        },
        yAxis_setter: function(a) {
            this.K(a, {
                title: "",
                color: "#000000",
                lineColor: "#cfcfcf",
                template: "{obj}",
                lines: !0,
                bg: "#ffffff"
            });
            var b = ["lineColor", "template", "lines", "bg"];
            this.ce(b,
                a);
            this.g.configYAxis = dhx.extend({}, a);
            return a
        },
        ce: function(a, b) {
            for (var c = 0; c < a.length; c++) b[a[c]] = dhx.Template(b[a[c]])
        },
        ad: function(a, b, c, d, e, f, g) {
            var h = this.se(a, b, c, d, e, f);
            this.re(a, b, c, d, g, h);
            return h
        },
        re: function(a, b, c, d, e, f) {
            if (this.g.xAxis) {
                for (var g = c.x - 0.5, h = parseInt(f ? f : d.y, 10) + 0.5, i = d.x, j, k = !0, l = 0; l < b.length; l++) {
                    this.g.offset === !0 ? j = g + e / 2 + l * e : (j = l == b.length - 1 ? i : g + l * e, k = !! l);
                    j = parseInt(j, 10) - 0.5;
                    var m = this.g.origin != "auto" && this.g.type == "bar" && parseFloat(this.g.value(b[l])) < this.g.origin;
                    this.Og(j, h, b[l], k, m);
                    (l || this.g.offset === !0) && this.g.xAxis.lines.call(this, b[l]) && this.Pg(a, j, d.y, c.y, b[l])
                }
                this.w(a, g, h, i, h, this.g.xAxis.color, 1);
                this.renderTextAt(!0, !1, g, d.y + this.g.padding.bottom - 3, this.g.xAxis.title, "dhx_axis_title_x", d.x - c.x);
                this.g.xAxis.lines.call(this, {}) && this.g.offset && this.w(a, i + 0.5, d.y, i + 0.5, c.y + 0.5, this.g.xAxis.lineColor.call({}), 1)
            }
        },
        se: function(a, b, c, d, e, f) {
            var g, h = {};
            if (this.g.yAxis) {
                var i = c.x - 0.5,
                    j = d.y + 0.5,
                    k = c.y - 0.5,
                    l = d.y;
                this.g.yAxis.step && (g = parseFloat(this.g.yAxis.step));
                if (typeof this.g.configYAxis.step == "undefined" || typeof this.g.configYAxis.start == "undefined" || typeof this.g.configYAxis.end == "undefined") h = this.Rc(e, f), e = h.start, f = h.end, g = h.step, this.g.yAxis.end = f, this.g.yAxis.start = e;
                this.yf(c, d);
                if (g !== 0) {
                    if (f == e) return j;
                    for (var m = (j - k) * g / (f - e), n = 0, o = e; o <= f; o += g) {
                        h.fixNum && (o = parseFloat((new Number(o)).toFixed(h.fixNum)));
                        var p = Math.floor(j - n * m) + 0.5;
                        !(o == e && this.g.origin == "auto") && this.g.yAxis.lines(o) && this.w(a, i, p, d.x, p, this.g.yAxis.lineColor(o), 1);
                        o == this.g.origin &&
                            (l = p);
                        var q = o;
                        if (g < 1) var s = Math.min(this.Za(g), e <= 0 ? 0 : this.Za(e)),
                        r = Math.pow(10, -s), o = q = Math.round(o * r) / r;
                        this.renderText(0, p - 5, this.g.yAxis.template(q.toString()), "dhx_axis_item_y", c.x - 5);
                        n++
                    }
                    this.w(a, i, j, i, k, this.g.yAxis.color, 1);
                    return this.jj = l
                }
            }
        },
        yf: function(a, b) {
            var c = "dhx_axis_title_y" + (dhx.rh && dhx.rh != 9 ? " dhx_ie_filter" : ""),
                d = this.renderTextAt("middle", !1, 0, parseInt((b.y - a.y) / 2 + a.y, 10), this.g.yAxis.title, c);
            if (d) d.style.left = (dhx.env.transform ? (d.offsetHeight - d.offsetWidth) / 2 + 3 : 0) + "px"
        },
        Rc: function(a,
            b) {
            if (this.g.origin != "auto" && this.g.origin < a) a = this.g.origin;
            var c, d, e;
            c = (b - a) / 8 || 1;
            var f = Math.floor(this.Za(c)),
                g = Math.pow(10, f),
                h = c / g,
                h = h > 5 ? 10 : 5;
            c = parseInt(h, 10) * g;
            if (c > Math.abs(a)) d = a < 0 ? -c : 0;
            else {
                var i = Math.abs(a),
                    j = Math.floor(this.Za(i)),
                    k = i / Math.pow(10, j);
                d = Math.ceil(k * 10) / 10 * Math.pow(10, j) - c;
                for (i > 1 && c > 0.1 && (d = Math.ceil(d)); a < 0 ? d <= a : d >= a;) d -= c;
                a < 0 && (d = -d - 2 * c)
            }
            for (e = d; e < b;) e += c, e = parseFloat((new Number(e)).toFixed(Math.abs(f)));
            return {
                start: d,
                end: e,
                step: c,
                fixNum: Math.abs(f)
            }
        },
        Sa: function(a, b) {
            var c,
                d, e = arguments.length && a == "h" ? this.g.configXAxis : this.g.configYAxis;
            if (e && typeof e.end != "undefined" && typeof e.start != "undefined" && e.step) c = parseFloat(e.end), d = parseFloat(e.start);
            else if (c = this.data.max(this.v[0][b || "value"]), d = this.data.min(this.v[0][b || "value"]), this.v.length > 1)
                for (var f = 1; f < this.v.length; f++) {
                    var g = this.data.max(this.v[f][b || "value"]),
                        h = this.data.min(this.v[f][b || "value"]);
                    g > c && (c = g);
                    h < d && (d = h)
                }
            return {
                max: c,
                min: d
            }
        },
        Za: function(a) {
            var b = "log";
            return Math.floor(Math[b](a) / Math.LN10)
        },
        Og: function(a, b, c, d, e) {
            if (this.g.xAxis) {
                var f = this.renderTextAt(e, d, a, b - (e ? 2 : 0), this.g.xAxis.template(c));
                f && (f.className += " dhx_axis_item_x")
            }
        },
        Pg: function(a, b, c, d, e) {
            this.g.xAxis && this.g.xAxis.lines && this.w(a, b, c, b, d, this.g.xAxis.lineColor.call(this, e), 1)
        },
        w: function(a, b, c, d, e, f, g) {
            a.strokeStyle = f;
            a.lineWidth = g;
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(d, e);
            a.stroke();
            a.lineWidth = 1
        },
        Ia: function(a, b) {
            var c, d, e = 1;
            if (b != a) {
                d = b - a;
                if (Math.abs(c) < 1)
                    for (; Math.abs(c) < 1;) e *= 10, d = c * e;
                c = d
            } else c = a;
            return [c, e]
        },
        ei: [
            function(a) {
                return "#FF" + dhx.color.toHex(a / 2, 2) + "00"
            },
            function(a) {
                return "#FF" + dhx.color.toHex(a / 2 + 128, 2) + "00"
            },
            function(a) {
                return "#" + dhx.color.toHex(255 - a, 2) + "FF00"
            },
            function(a) {
                return "#00FF" + dhx.color.toHex(a, 2)
            },
            function(a) {
                return "#00" + dhx.color.toHex(255 - a, 2) + "FF"
            },
            function(a) {
                return "#" + dhx.color.toHex(a, 2) + "00FF"
            }
        ],
        addSeries: function(a) {
            var b = dhx.extend({}, this.g);
            this.g = dhx.extend({}, b);
            this.cb(a, {});
            this.v.push(this.g);
            this.g = b
        },
        Ri: function(a, b) {
            this.Da = b.getAttribute("userdata")
        },
        Hg: function(a,
            b) {
            var c, d, e, f, g, h, i, j = 0,
                k = 0;
            d = this.g.legend;
            i = this.g.legend.layout != "x" ? "width:" + d.width + "px" : "";
            this.yb && this.yb.parentNode.removeChild(this.yb);
            this.yb = e = dhx.html.create("DIV", {
                "class": "dhx_chart_legend",
                style: "left:" + j + "px; top:" + k + "px;" + i
            }, "");
            this.k.appendChild(e);
            g = [];
            if (d.values)
                for (c = 0; c < d.values.length; c++) g.push(this.ne(e, d.values[c].text));
            else
                for (c = 0; c < b.length; c++) g.push(this.ne(e, d.template(b[c]))); if (e.offsetWidth === 0) e.style.width = "auto";
            h = e.offsetWidth;
            f = e.offsetHeight;
            this.g.legend.width =
                h;
            this.g.legend.height = f;
            h < this.k.offsetWidth && (d.layout == "x" && d.align == "center" && (j = (this.k.offsetWidth - h) / 2), d.align == "right" && (j = this.k.offsetWidth - h), d.margin && d.align != "center" && (j += (d.align == "left" ? 1 : -1) * d.margin));
            f < this.k.offsetHeight && (d.valign == "middle" && d.align != "center" && d.layout != "x" ? k = (this.k.offsetHeight - f) / 2 : d.valign == "bottom" && (k = this.k.offsetHeight - f), d.margin && d.valign != "middle" && (k += (d.valign == "top" ? 1 : -1) * d.margin));
            e.style.left = j + "px";
            e.style.top = k + "px";
            a.save();
            for (c = 0; c < g.length; c++) {
                var l =
                    g[c],
                    m = d.values ? d.values[c].color : this.g.color.call(this, b[c]);
                this.Ig(a, l.offsetLeft + j, l.offsetTop + k, m, l.offsetHeight)
            }
            a.restore();
            g = null
        },
        ne: function(a, b) {
            var c = "";
            this.g.legend.layout == "x" && (c = "float:left;");
            var d = dhx.html.create("DIV", {
                style: c + "padding-left:" + (10 + this.g.legend.marker.width) + "px",
                "class": "dhx_chart_legend_item"
            }, b);
            a.appendChild(d);
            return d
        },
        Ig: function(a, b, c, d, e) {
            var f = this.g.legend.marker;
            a.strokeStyle = a.fillStyle = d;
            a.beginPath();
            if (f.type == "round" || !f.radius) {
                a.lineWidth = f.height;
                a.lineCap = f.type;
                b += a.lineWidth / 2 + 5;
                c += e / 2;
                a.moveTo(b, c);
                var g = b + f.width - f.height + 1;
                a.lineTo(g, c)
            } else {
                a.lineWidth = 1;
                var h, i;
                b += 5;
                c += e / 2 - f.height / 2;
                h = b + f.width / 2;
                i = c + f.height / 2;
                a.arc(b + f.radius, c + f.radius, f.radius, Math.PI, 3 * Math.PI / 2, !1);
                a.lineTo(b + f.width - f.radius, c);
                a.arc(b + f.width - f.radius, c + f.radius, f.radius, -Math.PI / 2, 0, !1);
                a.lineTo(b + f.width, c + f.height - f.radius);
                a.arc(b + f.width - f.radius, c + f.height - f.radius, f.radius, 0, Math.PI / 2, !1);
                a.lineTo(b + f.radius, c + f.height);
                a.arc(b + f.radius, c + f.height -
                    f.radius, f.radius, Math.PI / 2, Math.PI, !1);
                a.lineTo(b, c + f.radius)
            }
            a.stroke();
            a.fill()
        },
        Vg: function(a, b) {
            var c, d, e, f;
            c = this.g.padding.left;
            d = this.g.padding.top;
            e = a - this.g.padding.right;
            f = b - this.g.padding.bottom;
            if (this.g.legend) {
                var g = this.g.legend,
                    h = this.g.legend.width,
                    i = this.g.legend.height;
                g.layout == "x" ? g.valign == "center" ? g.align == "right" ? e -= h : g.align == "left" && (c += h) : g.valign == "bottom" ? f -= i : d += i : g.align == "right" ? e -= h : g.align == "left" && (c += h)
            }
            return {
                start: {
                    x: c,
                    y: d
                },
                end: {
                    x: e,
                    y: f
                }
            }
        },
        fd: function(a) {
            var b,
                c, d, e, f;
            if (this.g.yAxis && typeof this.g.yAxis.end != "undefined" && typeof this.g.yAxis.start != "undefined" && this.g.yAxis.step) d = parseFloat(this.g.yAxis.end), e = parseFloat(this.g.yAxis.start);
            else {
                for (b = 0; b < a.length; b++) {
                    a[b].$sum = 0;
                    a[b].$min = Infinity;
                    for (c = 0; c < this.v.length; c++)
                        if (f = parseFloat(this.v[c].value(a[b]) || 0), !isNaN(f) && (a[b].$sum += f, f < a[b].$min)) a[b].$min = f
                }
                d = -Infinity;
                e = Infinity;
                for (b = 0; b < a.length; b++) {
                    if (a[b].$sum > d) d = a[b].$sum;
                    if (a[b].$min < e) e = a[b].$min
                }
                e > 0 && (e = 0)
            }
            return {
                max: d,
                min: e
            }
        },
        Ic: function(a,
            b, c, d, e, f, g, h) {
            var i, j, k, l, m;
            f == "light" ? (i = h == "x" ? a.createLinearGradient(b, c, d, c) : a.createLinearGradient(b, c, b, e), i.addColorStop(0, "#FFFFFF"), i.addColorStop(0.9, g), i.addColorStop(1, g), j = 2) : f == "falling" || f == "rising" ? (i = h == "x" ? a.createLinearGradient(b, c, d, c) : a.createLinearGradient(b, c, b, e), k = dhx.color.toRgb(g), l = dhx.color.rgbToHsv(k[0], k[1], k[2]), l[1] *= 0.5, m = "rgb(" + dhx.color.hsvToRgb(l[0], l[1], l[2]) + ")", f == "falling" ? (i.addColorStop(0, m), i.addColorStop(0.7, g), i.addColorStop(1, g)) : f == "rising" && (i.addColorStop(0,
                g), i.addColorStop(0.3, g), i.addColorStop(1, m)), j = 0) : (a.globalAlpha = 0.37, j = 0, i = h == "x" ? a.createLinearGradient(b, e, b, c) : a.createLinearGradient(b, c, d, c), i.addColorStop(0, "#9d9d9d"), i.addColorStop(0.3, "#e8e8e8"), i.addColorStop(0.45, "#ffffff"), i.addColorStop(0.55, "#ffffff"), i.addColorStop(0.7, "#e8e8e8"), i.addColorStop(1, "#9d9d9d"));
            return {
                gradient: i,
                offset: j
            }
        },
        Ha: function(a, b, c, d) {
            a *= -1;
            b += Math.cos(a) * d;
            c -= Math.sin(a) * d;
            return {
                x: b,
                y: c
            }
        }
    }, dhx.Group, dhx.DataLoader, dhx.MouseEvents, dhx.Canvas, dhx.EventSystem,
    dhx.ui.view);
dhx.extend(dhx.ui.chart, {
    $render_pie: function(a, b, c, d, e, f) {
        this.zd(a, b, c, d, 1, f)
    },
    zd: function(a, b, c, d, e, f) {
        if (b.length) {
            var g = this.dd(c, d),
                h = this.g.radius ? this.g.radius : g.radius,
                i = this.data.max(this.g.value),
                j = this.dh(b),
                k = this.ze(j),
                l = this.ye(j, k),
                m = this.g.x ? this.g.x : g.x,
                n = this.g.y ? this.g.y : g.y;
            e == 1 && this.g.shadow && this.Zf(a, m, n, h);
            n /= e;
            var o = -Math.PI / 2,
                p = [];
            a.scale(1, e);
            if (this.g.gradient) {
                var q = e != 1 ? m + h / 3 : m,
                    s = e != 1 ? n + h / 3 : n;
                this.Ii(a, m, n, h, q, s)
            }
            for (var r = 0; r < b.length; r++)
                if (j[r]) {
                    a.strokeStyle = this.g.lineColor.call(this,
                        b[r]);
                    a.beginPath();
                    a.moveTo(m, n);
                    p.push(o);
                    alpha1 = -Math.PI / 2 + l[r] - 1.0E-4;
                    a.arc(m, n, h, o, alpha1, !1);
                    a.lineTo(m, n);
                    var z = this.g.color.call(this, b[r]);
                    a.fillStyle = z;
                    a.fill();
                    this.g.pieInnerText && this.pe(m, n, 5 * h / 6, o, alpha1, e, this.g.pieInnerText(b[r], k), !0);
                    this.g.label && this.pe(m, n, h + this.g.labelOffset, o, alpha1, e, this.g.label(b[r]));
                    if (e != 1) this.ee(a, m, n, o, alpha1, h, !0), a.fillStyle = "#000000", a.globalAlpha = 0.2, this.ee(a, m, n, o, alpha1, h, !1), a.globalAlpha = 1, a.fillStyle = z;
                    f.addSector(b[r].id, o, alpha1, m, n, h,
                        e);
                    o = alpha1
                }
            a.globalAlpha = 0.8;
            for (var w, r = 0; r < p.length; r++) w = this.Ha(p[r], m, n, h), this.w(a, m, n, w.x, w.y, this.g.lineColor.call(this, b[r]), 2);
            if (e == 1) a.lineWidth = 2, a.strokeStyle = "#ffffff", a.beginPath(), a.arc(m, n, h + 1, 0, 2 * Math.PI, !1), a.stroke();
            a.globalAlpha = 1;
            a.scale(1, 1 / e)
        }
    },
    dh: function(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(parseFloat(this.g.value(a[c]) || 0));
        return b
    },
    ze: function(a) {
        for (var b = 0, c = 0; c < a.length; c++) b += a[c];
        return b
    },
    ye: function(a, b) {
        for (var c, d = [], e = 0, b = b || this.ze(a), f = 0; f < a.length; f++) c =
            a[f], d[f] = Math.PI * 2 * (b ? (c + e) / b : 1 / a.length), e += c;
        return d
    },
    dd: function(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y,
            e = a.x + c / 2,
            f = a.y + d / 2,
            g = Math.min(c / 2, d / 2);
        return {
            x: e,
            y: f,
            radius: g
        }
    },
    ee: function(a, b, c, d, e, f, g) {
        a.lineWidth = 1;
        if (d <= 0 && e >= 0 || d >= 0 && e <= Math.PI || Math.abs(d - Math.PI) > 0.003 && d <= Math.PI && e >= Math.PI) {
            d <= 0 && e >= 0 && (d = 0, g = !1, this.qe(a, b, c, f, d, e));
            if (d <= Math.PI && e >= Math.PI) e = Math.PI, g = !1, this.qe(a, b, c, f, d, e);
            var h = (this.g.pieHeight || Math.floor(f / 4)) / this.g.cant;
            a.beginPath();
            a.arc(b, c, f, d, e, !1);
            a.lineTo(b + f * Math.cos(e),
                c + f * Math.sin(e) + h);
            a.arc(b, c + h, f, e, d, !0);
            a.lineTo(b + f * Math.cos(d), c + f * Math.sin(d));
            a.fill();
            g && a.stroke()
        }
    },
    qe: function(a, b, c, d, e, f) {
        a.beginPath();
        a.arc(b, c, d, e, f, !1);
        a.stroke()
    },
    Zf: function(a, b, c, d) {
        a.globalAlpha = 0.5;
        for (var e = "#c4c4c4,#c6c6c6,#cacaca,#dcdcdc,#dddddd,#e0e0e0,#eeeeee,#f5f5f5,#f8f8f8".split(","), f = e.length - 1; f > -1; f--) a.beginPath(), a.fillStyle = e[f], a.arc(b + 1, c + 1, d + f, 0, Math.PI * 2, !0), a.fill();
        a.globalAlpha = 1
    },
    Yg: function(a) {
        a.addColorStop(0, "#ffffff");
        a.addColorStop(0.7, "#7a7a7a");
        a.addColorStop(1,
            "#000000");
        return a
    },
    Ii: function(a, b, c, d, e, f) {
        a.globalAlpha = 1;
        a.beginPath();
        var g;
        typeof this.g.gradient != "function" ? (g = a.createRadialGradient(e, f, d / 4, b, c, d), g = this.Yg(g)) : g = this.g.gradient(g);
        a.fillStyle = g;
        a.arc(b, c, d, 0, Math.PI * 2, !0);
        a.fill();
        a.globalAlpha = 0.7
    },
    pe: function(a, b, c, d, e, f, g, h) {
        var i = this.renderText(0, 0, g, 0, 1);
        if (i) {
            var j = i.scrollWidth;
            i.style.width = j + "px";
            j > a && (j = a);
            var k = e - d < 0.2 ? 4 : 8;
            h && (k = j / 1.8);
            var l = d + (e - d) / 2;
            c -= (k - 8) / 2;
            var m = -k,
                n = -8,
                o = "right";
            if (l >= Math.PI / 2 && l < Math.PI || l <= 3 * Math.PI /
                2 && l >= Math.PI) m = -j - m + 1, o = "left";
            var p = 0;
            !h && f < 1 && l > 0 && l < Math.PI && (p = (this.g.pieHeight || Math.floor(c / 4)) / f);
            var q = (b + Math.floor((c + p) * Math.sin(l))) * f + n,
                s = a + Math.floor((c + k / 2) * Math.cos(l)) + m,
                r = e < Math.PI / 2 + 0.01,
                z = d < Math.PI / 2;
            if (z && r) s = Math.max(s, a + 3), e - d < 0.2 && (s = a);
            else if (!z && !r) s = Math.min(s, a - j);
            else if (!h && (l >= Math.PI / 2 && l < Math.PI || l <= 3 * Math.PI / 2 && l >= Math.PI)) s += j / 3;
            i.style.top = q + "px";
            i.style.left = s + "px";
            i.style.width = j + "px";
            i.style.textAlign = o;
            i.style.whiteSpace = "nowrap"
        }
    },
    $render_pie3D: function(a,
        b, c, d, e, f) {
        this.zd(a, b, c, d, this.g.cant, f)
    },
    $render_donut: function(a, b, c, d, e, f) {
        if (b.length) {
            this.zd(a, b, c, d, 1, f);
            var g = this.g,
                h = this.dd(c, d),
                i = g.radius ? g.radius : h.radius,
                j = g.innerRadius && g.innerRadius < i ? g.innerRadius : i / 3,
                k = g.x ? g.x : h.x,
                l = g.y ? g.y : h.y;
            a.fillStyle = "#ffffff";
            a.beginPath();
            a.arc(k, l, j, 0, Math.PI * 2, !0);
            a.fill()
        }
    }
});
dhx.extend(dhx.ui.chart, {
    $render_bar: function(a, b, c, d, e, f) {
        var g, h, i, j, k = d.y - c.y,
            l = !! this.g.yAxis,
            m = !! this.g.xAxis,
            n = this.Sa();
        g = n.max;
        h = n.min;
        var o = Math.floor((d.x - c.x) / b.length);
        !e && (this.g.origin == "auto" || l) && this.ad(a, b, c, d, h, g, o);
        l && (g = parseFloat(this.g.yAxis.end), h = parseFloat(this.g.yAxis.start));
        var p = this.Ia(h, g);
        j = p[0];
        i = p[1];
        var q = j ? k / j : j;
        if (!l && !(this.g.origin != "auto" && m)) var s = 10,
        q = j ? (k - s) / j : s;
        !e && this.g.origin != "auto" && !l && this.g.origin > h && this.re(a, b, c, d, o, d.y - q * (this.g.origin - h));
        var r =
            parseInt(this.g.barWidth, 10);
        this.v && r * this.v.length + 4 > o && (r = parseInt(o / this.v.length - 4, 10));
        var z = Math.floor((o - r * this.v.length) / 2),
            w = typeof this.g.radius != "undefined" ? parseInt(this.g.radius, 10) : Math.round(r / 5),
            y = !1,
            t = this.g.gradient;
        t && typeof t != "function" ? (y = t, t = !1) : t && (t = a.createLinearGradient(0, d.y, 0, c.y), this.g.gradient(t));
        m || this.w(a, c.x, d.y + 0.5, d.x, d.y + 0.5, "#000000", 1);
        for (var x = 0; x < b.length; x++) {
            var v = parseFloat(this.g.value(b[x] || 0));
            v > g && (v = g);
            v -= h;
            v *= i;
            var u = c.x + z + x * o + (r + 1) * e,
                A = d.y;
            if (v <
                0 || this.g.yAxis && v === 0 && !(this.g.origin != "auto" && this.g.origin > h)) this.renderTextAt(!0, !0, u + Math.floor(r / 2), A, this.g.label(b[x]));
            else {
                !l && !(this.g.origin != "auto" && m) && (v += s / q);
                var B = t || this.g.color.call(this, b[x]);
                a.globalAlpha = this.g.alpha.call(this, b[x]);
                var C = this.Bg(a, c, u, A, r, h, w, q, v, B, t, y);
                y && this.Dg(a, u, A, r, h, w, q, v, B, y);
                this.g.border && this.Cg(a, u, A, r, h, w, q, v, B);
                a.globalAlpha = 1;
                C[0] != u ? this.renderTextAt(!1, !0, u + Math.floor(r / 2), C[1], this.g.label(b[x])) : this.renderTextAt(!0, !0, u + Math.floor(r /
                    2), C[3], this.g.label(b[x]));
                f.addRect(b[x].id, [u, C[3], C[2], C[1]], e)
            }
        }
    },
    Vc: function(a, b, c, d, e, f, g) {
        var h = this.g.xAxis,
            i = c;
        h && this.g.origin != "auto" && this.g.origin > g && (c -= Math.round((this.g.origin - g) * e), i = c, d -= this.g.origin - g, d < 0 ? (d *= -1, a.translate(b + f, c), a.rotate(Math.PI), b = 0, c = -1) : c += 0.5);
        return {
            value: d,
            x0: parseInt(b, 10),
            y0: parseInt(c, 10),
            start: i
        }
    },
    Bg: function(a, b, c, d, e, f, g, h, i, j, k, l) {
        a.save();
        a.fillStyle = j;
        var m = this.Vc(a, c, d, i, h, e, f),
            n = this.Fd(a, m.x0, m.y0, e, g, h, m.value, this.g.border ? 1 : 0);
        k && !l &&
            a.lineTo(m.x0 + (this.g.border ? 1 : 0), b.y);
        a.fill();
        a.restore();
        var o = m.x0,
            p = m.x0 != c ? c + n[0] : n[0],
            q = m.x0 != c ? m.start - n[1] : d,
            s = m.x0 != c ? m.start : n[1];
        return [o, q, p, s]
    },
    Jc: function(a, b) {
        var c, d;
        d = dhx.color.toRgb(b);
        c = dhx.color.rgbToHsv(d[0], d[1], d[2]);
        c[2] /= 2;
        b = "rgb(" + dhx.color.hsvToRgb(c[0], c[1], c[2]) + ")";
        a.strokeStyle = b;
        if (a.globalAlpha == 1) a.globalAlpha = 0.9
    },
    Cg: function(a, b, c, d, e, f, g, h, i) {
        var j;
        a.save();
        j = this.Vc(a, b, c, h, g, d, e);
        this.Jc(a, i);
        this.Fd(a, j.x0, j.y0, d, f, g, j.value, a.lineWidth / 2, 1);
        a.stroke();
        a.restore()
    },
    Dg: function(a, b, c, d, e, f, g, h, i, j) {
        a.save();
        var k = this.Vc(a, b, c, h, g, d, e),
            l = this.Ic(a, k.x0, k.y0, k.x0 + d, k.y0 - g * k.value + 2, j, i, "y"),
            m = this.g.border ? 1 : 0;
        a.fillStyle = l.gradient;
        this.Fd(a, k.x0 + l.offset, k.y0, d - l.offset * 2, f, g, k.value, l.offset + m);
        a.fill();
        a.restore()
    },
    Fd: function(a, b, c, d, e, f, g, h, i) {
        a.beginPath();
        var j = 0;
        if (e > f * g) {
            var k = (e - f * g) / e;
            k <= 1 && k >= -1 && (j = -Math.acos(k) + Math.PI / 2)
        }
        a.moveTo(b + h, c);
        var l = c - Math.floor(f * g) + e + (e ? 0 : h);
        e < f * g && a.lineTo(b + h, l);
        var m = b + e;
        e && e > 0 && a.arc(m, l, e - h, -Math.PI + j, -Math.PI /
            2, !1);
        var n = b + d - e - (e ? 0 : h),
            o = l - e + (e ? h : 0);
        a.lineTo(n, o);
        e && e > 0 && a.arc(n, l, e - h, -Math.PI / 2, 0 - j, !1);
        var p = b + d - h;
        a.lineTo(p, c);
        i || a.lineTo(b + h, c);
        return [p, o]
    }
});
dhx.extend(dhx.ui.chart, {
    $render_line: function(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p;
        j = this.Xb(a, b, c, d, e);
        h = this.g;
        if (b.length) {
            o = this.wa(b[0], c, d, j);
            l = m = h.offset ? c.x + j.cellWidth * 0.5 : c.x;
            for (i = 1; i <= b.length; i++) {
                n = i == b.length - 1 && !h.offset ? d.x : Math.floor(j.cellWidth * i) - 0.5 + l;
                if (b.length != i) {
                    p = this.wa(b[i], c, d, j);
                    if (!p) continue;
                    this.w(a, m, o, n, p, h.line.color.call(this, b[i - 1]), h.line.width);
                    if (h.line && h.line.shadow) a.globalAlpha = 0.3, this.w(a, m + 2, o + h.line.width + 8, n + 2, p + h.line.width + 8, "#eeeeee", h.line.width +
                        3), a.globalAlpha = 1
                }
                this.fc(a, m, o, b[i - 1], !! h.offset);
                k = parseInt(h.item.radius.call(this, b[i - 1]), 10) || 2;
                g = h.eventRadius || k + 1;
                f.addRect(b[i - 1].id, [m - g, o - g, m + g, o + g], e);
                o = p;
                m = n
            }
        }
    },
    fc: function(a, b, c, d, e) {
        var f = this.g.item,
            g = parseInt(f.radius.call(this, d), 10) || 0;
        if (g) {
            a.save();
            if (f.shadow) {
                a.lineWidth = 1;
                a.strokeStyle = "#bdbdbd";
                a.fillStyle = "#bdbdbd";
                for (var h = [0.1, 0.2, 0.3], i = h.length - 1; i >= 0; i--) a.globalAlpha = h[i], a.strokeStyle = "#d0d0d0", a.beginPath(), this.Kd(a, b, c + 2 * g / 3, g + i + 1, f.type), a.stroke();
                a.beginPath();
                a.globalAlpha = 0.3;
                a.fillStyle = "#bdbdbd";
                this.Kd(a, b, c + 2 * g / 3, g + 1, f.type);
                a.fill()
            }
            a.restore();
            a.lineWidth = f.borderWidth;
            a.fillStyle = f.color.call(this, d);
            a.strokeStyle = f.borderColor.call(this, d);
            a.globalAlpha = f.alpha.call(this, d);
            a.beginPath();
            this.Kd(a, b, c, g + 1, f.type);
            a.fill();
            a.stroke();
            a.globalAlpha = 1
        }
        e && this.renderTextAt(!1, !0, b, c - g - this.g.labelOffset, this.g.label.call(this, d))
    },
    Kd: function(a, b, c, d, e) {
        if (e && (e == "square" || e == "s")) d *= Math.sqrt(2) / 2, a.moveTo(b - d - a.lineWidth / 2, c - d), a.lineTo(b + d, c - d),
        a.lineTo(b + d, c + d), a.lineTo(b - d, c + d), a.lineTo(b - d, c - d);
        else if (e && (e == "diamond" || e == "d")) {
            var f = a.lineWidth > 1 ? a.lineWidth * Math.sqrt(2) / 4 : 0;
            a.moveTo(b, c - d);
            a.lineTo(b + d, c);
            a.lineTo(b, c + d);
            a.lineTo(b - d, c);
            a.lineTo(b + f, c - d - f)
        } else a.arc(b, c, d, 0, Math.PI * 2, !0)
    },
    wa: function(a, b, c, d) {
        var e = d.minValue,
            f = d.maxValue,
            g = d.unit,
            h = d.valueFactor,
            i = this.g.value(a),
            j = (parseFloat(i || 0) - e) * h;
        this.g.yAxis || (j += d.startValue / g);
        var k = c.y - Math.floor(g * j);
        if (j < 0) k = c.y;
        if (i > f) k = b.y;
        if (i < e) k = c.y;
        return k
    },
    Xb: function(a, b, c,
        d, e) {
        var f = {}, g;
        f.totalHeight = d.y - c.y;
        f.cellWidth = Math.round((d.x - c.x) / (!this.g.offset ? b.length - 1 : b.length));
        var h = !! this.g.yAxis,
            i = this.g.type.indexOf("stacked") != -1 ? this.fd(b) : this.Sa();
        f.maxValue = i.max;
        f.minValue = i.min;
        e || this.ad(a, b, c, d, f.minValue, f.maxValue, f.cellWidth);
        if (h) f.maxValue = parseFloat(this.g.yAxis.end), f.minValue = parseFloat(this.g.yAxis.start);
        var j = this.Ia(f.minValue, f.maxValue);
        g = j[0];
        f.valueFactor = j[1];
        f.unit = g ? f.totalHeight / g : 10;
        f.startValue = 0;
        if (!h && (f.startValue = 10, f.unit !=
            f.totalHeight)) f.unit = g ? (f.totalHeight - f.startValue) / g : 10;
        return f
    }
});
dhx.extend(dhx.ui.chart, {
    $render_barH: function(a, b, c, d, e, f) {
        var g, h, i, j, k = d.x - c.x,
            l = !! this.g.yAxis,
            m = !! this.g.xAxis,
            n = this.Sa("h");
        g = n.max;
        h = n.min;
        var o = Math.floor((d.y - c.y) / b.length);
        e || this.le(a, b, c, d, h, g, o);
        l && (g = parseFloat(this.g.xAxis.end), h = parseFloat(this.g.xAxis.start));
        var p = this.Ia(h, g);
        j = p[0];
        i = p[1];
        var q = j ? k / j : 10;
        if (!l) var s = 10,
        q = j ? (k - s) / j : 10;
        var r = parseInt(this.g.barWidth, 10);
        r * this.v.length + 4 > o && (r = o / this.v.length - 4);
        var z = Math.floor((o - r * this.v.length) / 2),
            w = typeof this.g.radius != "undefined" ?
                parseInt(this.g.radius, 10) : Math.round(r / 5),
            y = !1,
            t = this.g.gradient;
        t && typeof t != "function" ? (y = t, t = !1) : t && (t = a.createLinearGradient(c.x, c.y, d.x, c.y), this.g.gradient(t));
        var x = 0;
        l || this.w(a, c.x - 0.5, c.y, c.x - 0.5, d.y, "#000000", 1);
        for (var v = 0; v < b.length; v++) {
            var u = parseFloat(this.g.value(b[v] || 0));
            u > g && (u = g);
            u -= h;
            u *= i;
            var A = c.x,
                B = c.y + z + v * o + (r + 1) * e;
            if (u < 0 && this.g.origin == "auto" || this.g.xAxis && u === 0 && !(this.g.origin != "auto" && this.g.origin > h)) this.renderTextAt("middle", "right", A + 10, B + r / 2 + z, this.g.label(b[v]));
            else {
                u < 0 && this.g.origin != "auto" && this.g.origin > h && (u = 0);
                l || (u += s / q);
                var C = t || this.g.color.call(this, b[v]);
                this.g.border && this.ke(a, A, B, r, h, w, q, u, C);
                a.globalAlpha = this.g.alpha.call(this, b[v]);
                var D = this.Eg(a, d, A, B, r, h, w, q, u, C, t, y);
                y != !1 && this.Fg(a, A, B, r, h, w, q, u, C, y);
                a.globalAlpha = 1;
                D[3] == B ? (this.renderTextAt("middle", "left", D[0] - 5, D[3] + Math.floor(r / 2), this.g.label(b[v])), f.addRect(b[v].id, [D[0], D[3], D[2], D[3] + r], e)) : (this.renderTextAt("middle", !1, D[2] + 5, D[1] + Math.floor(r / 2), this.g.label(b[v])), f.addRect(b[v].id, [D[0], B, D[2], D[3]], e))
            }
        }
    },
    Hb: function(a, b, c, d, e, f, g, h, i) {
        var j = 0;
        if (e > f * g) var k = (e - f * g) / e,
        j = -Math.asin(k) + Math.PI / 2;
        a.moveTo(b, c + h);
        var l = b + f * g - e - (e ? 0 : h);
        e < f * g && a.lineTo(l, c + h);
        var m = c + e;
        e && e > 0 && a.arc(l, m, e - h, -Math.PI / 2 + j, 0, !1);
        var n = c + d - e - (e ? 0 : h),
            o = l + e - (e ? h : 0);
        a.lineTo(o, n);
        var p = l;
        e && e > 0 && a.arc(p, n, e - h, 0, Math.PI / 2 - j, !1);
        var q = c + d - h;
        a.lineTo(b, q);
        i || a.lineTo(b, c + h);
        return [o, q]
    },
    le: function(a, b, c, d, e, f, g) {
        var h = this.me(a, b, c, d, e, f);
        this.Gg(a, b, c, d, g, h)
    },
    Gg: function(a, b, c, d, e, f) {
        if (this.g.yAxis) {
            var g,
                h = parseInt(f ? f : c.x, 10) - 0.5,
                i = d.y + 0.5,
                j = c.y;
            this.w(a, h, i, h, j, this.g.yAxis.color, 1);
            for (var k = 0; k < b.length; k++) {
                var l = this.g.origin != "auto" && this.g.type == "barH" && parseFloat(this.g.value(b[k])) < this.g.origin;
                g = j + e / 2 + k * e;
                this.renderTextAt("middle", l ? !1 : "left", l ? h + 5 : h - 5, g, this.g.yAxis.template(b[k]), "dhx_axis_item_y", l ? 0 : h - 10);
                this.g.yAxis.lines.call(this, b[k]) && this.w(a, c.x, g, d.x, g, this.g.yAxis.lineColor.call(this, b[k]), 1)
            }
            this.w(a, c.x + 0.5, j + 0.5, d.x, j + 0.5, this.g.yAxis.lineColor.call(this, {}), 1);
            this.yf(c,
                d)
        }
    },
    me: function(a, b, c, d, e, f) {
        var g, h = {}, i = this.g.xAxis;
        if (i) {
            var j = d.y + 0.5,
                k = c.x - 0.5,
                l = d.x - 0.5,
                m = c.x;
            this.w(a, k, j, l, j, i.color, 1);
            i.step && (g = parseFloat(i.step));
            if (typeof this.g.configXAxis.step == "undefined" || typeof this.g.configXAxis.start == "undefined" || typeof this.g.configXAxis.end == "undefined") h = this.Rc(e, f), e = h.start, f = h.end, g = h.step, this.g.xAxis.end = f, this.g.xAxis.start = e, this.g.xAxis.step = g;
            if (g !== 0) {
                for (var n = (l - k) * g / (f - e), o = 0, p = e; p <= f; p += g) {
                    h.fixNum && (p = parseFloat((new Number(p)).toFixed(h.fixNum)));
                    var q = Math.floor(k + o * n) + 0.5;
                    !(p == e && this.g.origin == "auto") && i.lines.call(this, p) && this.w(a, q, j, q, c.y, this.g.xAxis.lineColor.call(this, p), 1);
                    p == this.g.origin && (m = q + 1);
                    this.renderTextAt(!1, !0, q, j + 2, i.template(p.toString()), "dhx_axis_item_x");
                    o++
                }
                this.renderTextAt(!0, !1, k, d.y + this.g.padding.bottom - 3, this.g.xAxis.title, "dhx_axis_title_x", d.x - c.x);
                i.lines || this.w(a, k, c.y - 0.5, l, c.y - 0.5, this.g.xAxis.color, 0.2);
                return m
            }
        }
    },
    Uc: function(a, b, c, d, e, f, g) {
        var h = this.g.yAxis,
            i = b;
        h && this.g.origin != "auto" && this.g.origin >
            g && (b += (this.g.origin - g) * e, i = b, d -= this.g.origin - g, d < 0 && (d *= -1, a.translate(b, c + f), a.rotate(Math.PI), b = 0.5, c = 0), b += 0.5);
        return {
            value: d,
            x0: b,
            y0: c,
            start: i
        }
    },
    Eg: function(a, b, c, d, e, f, g, h, i, j, k, l) {
        a.save();
        var m = this.Uc(a, c, d, i, h, e, f);
        a.fillStyle = j;
        a.beginPath();
        var n = this.Hb(a, m.x0, m.y0, e, g, h, m.value, this.g.border ? 1 : 0);
        k && !l && a.lineTo(b.x, m.y0 + (this.g.border ? 1 : 0));
        a.fill();
        a.restore();
        var o = m.y0,
            p = m.y0 != d ? d : n[1],
            q = m.y0 != d ? m.start - n[0] : m.start,
            s = m.y0 != d ? m.start : n[0];
        return [q, o, s, p]
    },
    ke: function(a, b, c, d,
        e, f, g, h, i) {
        a.save();
        var j = this.Uc(a, b, c, h, g, d, e);
        a.beginPath();
        this.Jc(a, i);
        a.globalAlpha = 0.9;
        this.Hb(a, j.x0, j.y0, d, f, g, j.value, a.lineWidth / 2, 1);
        a.stroke();
        a.restore()
    },
    Fg: function(a, b, c, d, e, f, g, h, i, j) {
        a.save();
        var k = this.Uc(a, b, c, h, g, d, e),
            l = this.Ic(a, k.x0, k.y0 + d, k.x0 + g * k.value, k.y0, j, i, "x");
        a.fillStyle = l.gradient;
        a.beginPath();
        var m = this.Hb(a, k.x0, k.y0 + l.offset, d - l.offset * 2, f, g, k.value, l.offset);
        a.fill();
        a.globalAlpha = 1;
        a.restore()
    }
});
dhx.extend(dhx.ui.chart, {
    $render_stackedBar: function(a, b, c, d, e, f) {
        var g, h, i, j, k = d.y - c.y,
            l = !! this.g.yAxis,
            m = !! this.g.xAxis,
            n = this.fd(b);
        g = n.max;
        h = n.min;
        var o = Math.floor((d.x - c.x) / b.length);
        e || this.ad(a, b, c, d, h, g, o);
        l && (g = parseFloat(this.g.yAxis.end), h = parseFloat(this.g.yAxis.start));
        var p = this.Ia(h, g);
        j = p[0];
        i = p[1];
        var q = j ? k / j : 10,
            s = parseInt(this.g.barWidth, 10);
        if (s + (this.g.barOffset || 4) > o) s = o - (this.g.barOffset || 4);
        var r = Math.floor((o - s) / 2),
            z = this.g.gradient ? this.g.gradient : !1;
        m || this.w(a, c.x, d.y + 0.5,
            d.x, d.y + 0.5, "#000000", 1);
        for (var w = 0; w < b.length; w++) {
            var y = parseFloat(this.g.value(b[w] || 0));
            if (y) {
                e || (y -= h);
                y *= i;
                var t = c.x + r + w * o,
                    x = d.y;
                e ? x = b[w].$startY : b[w].$startY = x;
                if (!(x < c.y + 1))
                    if (y < 0 || this.g.yAxis && y === 0) this.renderTextAt(!0, !0, t + Math.floor(s / 2), x, this.g.label(b[w]));
                    else {
                        var v = this.g.color.call(this, b[w]);
                        a.globalAlpha = this.g.alpha.call(this, b[w]);
                        a.fillStyle = this.g.color.call(this, b[w]);
                        a.beginPath();
                        var u = this.Gd(a, t - (this.g.border ? 0.5 : 0), x, s + (this.g.border ? 0.5 : 0), q, y, 0, c.y);
                        a.fill();
                        if (z) {
                            a.save();
                            var A = this.Ic(a, t, x, t + s, u[1], z, v, "y");
                            a.fillStyle = A.gradient;
                            a.beginPath();
                            u = this.Gd(a, t + A.offset, x, s - A.offset * 2, q, y, this.g.border ? 1 : 0, c.y);
                            a.fill();
                            a.restore()
                        }
                        this.g.border && (a.save(), this.Jc(a, v), a.beginPath(), this.Gd(a, t - 0.5, x, s + 1, q, y, 0, c.y, 1), a.stroke(), a.restore());
                        a.globalAlpha = 1;
                        this.renderTextAt(!1, !0, t + Math.floor(s / 2), u[1] + (x - u[1]) / 2 - 7, this.g.label(b[w]));
                        f.addRect(b[w].id, [t, u[1], u[0], b[w].$startY || x], e);
                        b[w].$startY = this.g.border ? u[1] + 1 : u[1]
                    }
            } else if (!b[w].$startY) b[w].$startY = d.y
        }
    },
    Gd: function(a,
        b, c, d, e, f, g, h, i) {
        a.moveTo(b, c);
        var j = c - e * f + g;
        j < h && (j = h);
        a.lineTo(b, j);
        var k = b + d,
            l = j;
        a.lineTo(k, l);
        var m = b + d;
        a.lineTo(m, c);
        i || a.lineTo(b, c);
        return [m, l - 2 * g]
    }
});
dhx.extend(dhx.ui.chart, {
    $render_stackedBarH: function(a, b, c, d, e, f) {
        var g, h, i, j, k = d.x - c.x,
            l = !! this.g.yAxis,
            m = this.fd(b);
        g = m.max;
        h = m.min;
        var n = Math.floor((d.y - c.y) / b.length);
        e || this.le(a, b, c, d, h, g, n);
        l && (g = parseFloat(this.g.xAxis.end), h = parseFloat(this.g.xAxis.start));
        var o = this.Ia(h, g);
        j = o[0];
        i = o[1];
        var p = j ? k / j : 10;
        if (!l) var q = 10,
        p = j ? (k - q) / j : 10;
        var s = parseInt(this.g.barWidth, 10);
        s + 4 > n && (s = n - 4);
        var r = Math.floor((n - s) / 2),
            z = 0,
            w = !1,
            y = this.g.gradient;
        y && (w = !0);
        l || this.w(a, c.x - 0.5, c.y, c.x - 0.5, d.y, "#000000",
            1);
        for (var t = 0; t < b.length; t++) {
            if (!e) b[t].$startX = c.x;
            var x = parseFloat(this.g.value(b[t] || 0));
            x > g && (x = g);
            x -= h;
            x *= i;
            var v = c.x,
                u = c.y + r + t * n;
            e ? v = b[t].$startX : b[t].$startX = v;
            if (x < 0 || this.g.yAxis && x === 0) this.renderTextAt("middle", !0, v + 10, u + s / 2, this.g.label(b[t]));
            else {
                l || (x += q / p);
                var A = this.g.color.call(this, b[t]);
                a.globalAlpha = this.g.alpha.call(this, b[t]);
                a.fillStyle = this.g.color.call(this, b[t]);
                a.beginPath();
                var B = this.Hb(a, v, u, s, z, p, x, this.g.border ? 1 : 0);
                y && !w && a.lineTo(c.x + k, u + (this.g.border ? 1 : 0));
                a.fill();
                if (w != !1) {
                    var C = this.Ic(a, v, u + s, v, u, w, A, "x");
                    a.fillStyle = C.gradient;
                    a.beginPath();
                    B = this.Hb(a, v, u, s, z, p, x, 0);
                    a.fill()
                }
                this.g.border && this.ke(a, v, u, s, h, z, p, x, A);
                a.globalAlpha = 1;
                this.renderTextAt("middle", !0, b[t].$startX + (B[0] - b[t].$startX) / 2 - 1, u + (B[1] - u) / 2, this.g.label(b[t]));
                f.addRect(b[t].id, [b[t].$startX, u, B[0], B[1]], e);
                b[t].$startX = B[0]
            }
        }
    }
});
dhx.extend(dhx.ui.chart, {
    $render_spline: function(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p, q, s, r, z, w;
        l = this.Xb(a, b, c, d, e);
        h = this.g;
        j = [];
        if (b.length) {
            p = h.offset ? c.x + l.cellWidth * 0.5 : c.x;
            for (i = 0; i < b.length; i++) o = i == b.length - 1 && !h.offset ? d.x : !i ? p : Math.floor(l.cellWidth * i) - 0.5 + p, r = this.wa(b[i], c, d, l), j.push({
                x: o,
                y: r
            });
            n = this.ah(j);
            for (i = 0; i < j.length; i++) {
                q = j[i].x;
                z = j[i].y;
                if (i < j.length - 1) {
                    s = j[i + 1].x;
                    w = j[i + 1].y;
                    for (k = q; k < s; k++) this.w(a, k, this.ed(k, q, i, n.a, n.b, n.c, n.d), k + 1, this.ed(k + 1, q, i, n.a, n.b, n.c, n.d), h.line.color(b[i]),
                        h.line.width);
                    this.w(a, s - 1, this.ed(k, q, i, n.a, n.b, n.c, n.d), s, w, h.line.color(b[i]), h.line.width)
                }
                this.fc(a, q, z, b[i], h.label(b[i]));
                m = parseInt(h.item.radius.call(this, b[i - 1]), 10) || 2;
                g = h.eventRadius || m + 1;
                f.addRect(b[i].id, [q - g, z - g, q + g, z + g], e)
            }
        }
    },
    ah: function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        b = [];
        m = [];
        k = a.length;
        for (c = 0; c < k - 1; c++) b[c] = a[c + 1].x - a[c].x, m[c] = (a[c + 1].y - a[c].y) / b[c];
        d = [];
        e = [];
        d[0] = 0;
        d[1] = 2 * (b[0] + b[1]);
        e[0] = 0;
        e[1] = 6 * (m[1] - m[0]);
        for (c = 2; c < k - 1; c++) d[c] = 2 * (b[c - 1] + b[c]) - b[c - 1] * b[c - 1] / d[c - 1], e[c] = 6 * (m[c] -
            m[c - 1]) - b[c - 1] * e[c - 1] / d[c - 1];
        f = [];
        f[k - 1] = f[0] = 0;
        for (c = k - 2; c >= 1; c--) f[c] = (e[c] - b[c] * f[c + 1]) / d[c];
        g = [];
        h = [];
        i = [];
        j = [];
        for (c = 0; c < k - 1; c++) g[c] = a[c].y, h[c] = -b[c] * f[c + 1] / 6 - b[c] * f[c] / 3 + (a[c + 1].y - a[c].y) / b[c], i[c] = f[c] / 2, j[c] = (f[c + 1] - f[c]) / (6 * b[c]);
        return {
            a: g,
            b: h,
            c: i,
            d: j
        }
    },
    ed: function(a, b, c, d, e, f, g) {
        return d[c] + (a - b) * (e[c] + (a - b) * (f[c] + (a - b) * g[c]))
    }
});
dhx.extend(dhx.ui.chart, {
    $render_area: function(a, b, c, d, e, f) {
        var g = this.Xb(a, b, c, d, e),
            h = this.g.eventRadius || Math.floor(g.cellWidth / 2);
        if (b.length) {
            a.globalAlpha = this.g.alpha.call(this, b[0]);
            a.fillStyle = this.g.color.call(this, b[0]);
            var i = this.wa(b[0], c, d, g),
                j = this.g.offset ? c.x + g.cellWidth * 0.5 : c.x;
            a.beginPath();
            a.moveTo(j, d.y);
            a.lineTo(j, i);
            f.addRect(b[0].id, [j - h, i - h, j + h, i + h], e);
            this.g.yAxis || this.renderTextAt(!1, !this.g.offset ? !1 : !0, j, i - this.g.labelOffset, this.g.label(b[0]));
            for (var k = 1; k < b.length; k++) {
                var l =
                    k == b.length - 1 ? d.x : Math.floor(g.cellWidth * k) - 0.5 + j,
                    m = this.wa(b[k], c, d, g);
                a.lineTo(l, m);
                f.addRect(b[k].id, [l - h, m - h, l + h, m + h], e);
                this.g.yAxis || this.renderTextAt(!1, !this.g.offset && k == b.length - 1 ? "left" : "center", l, m - this.g.labelOffset, this.g.label(b[k]))
            }
            a.lineTo(l, d.y);
            a.lineTo(j, d.y);
            a.fill();
            if (this.g.border) {
                a.globalAlpha = this.g.alpha.call(this, b[0]);
                a.beginPath();
                a.lineWidth = this.g.borderWidth || 1;
                this.g.borderColor ? a.strokeStyle = this.g.borderColor.call(this, b[0]) : this.Jc(a, a.fillStyle);
                a.moveTo(j,
                    i);
                for (k = 1; k < b.length; k++) l = k == b.length - 1 ? d.x : Math.floor(g.cellWidth * k) - 0.5 + j, m = this.wa(b[k], c, d, g), a.lineTo(l, m);
                a.stroke();
                a.lineWidth = 1
            }
        }
    },
    $render_stackedArea: function(a, b, c, d, e, f) {
        var g = this.Xb(a, b, c, d, e),
            h = this.g.eventRadius || Math.floor(g.cellWidth / 2),
            i = [],
            j;
        if (b.length) {
            a.globalAlpha = this.g.alpha.call(this, b[0]);
            a.fillStyle = this.g.color.call(this, b[0]);
            var k = e ? b[0].$startY : d.y,
                l = this.g.offset ? c.x + g.cellWidth * 0.5 : c.x,
                m = this.wa(b[0], c, d, g) - (e ? d.y - k : 0);
            i[0] = m;
            a.beginPath();
            a.moveTo(l, k);
            a.lineTo(l,
                m);
            f.addRect(b[0].id, [l - h, m - h, l + h, m + h], e);
            this.g.yAxis || this.renderTextAt(!1, !0, l, m - this.g.labelOffset, this.g.label(b[0]));
            for (var n = 1; n < b.length; n++) {
                j = n == b.length - 1 ? d.x : Math.floor(g.cellWidth * n) - 0.5 + l;
                var o = this.wa(b[n], c, d, g) - (e ? d.y - b[n].$startY : 0);
                i[n] = o;
                a.lineTo(j, o);
                f.addRect(b[n].id, [j - h, o - h, j + h, o + h], e);
                this.g.yAxis || this.renderTextAt(!1, !0, j, o - this.g.labelOffset, this.g.label(b[n]))
            }
            a.lineTo(j, k);
            if (e)
                for (n = b.length - 1; n >= 0; n--) {
                    j = n == b.length - 1 ? d.x : Math.floor(g.cellWidth * n) - 0.5 + l;
                    var p = b[n].$startY;
                    a.lineTo(j, p)
                } else a.lineTo(l + Math.floor(g.cellWidth * (length - 1)) - 0.5, k);
            a.lineTo(l, k);
            a.fill();
            for (n = 0; n < b.length; n++) b[n].$startY = i[n]
        }
    }
});
dhx.extend(dhx.ui.chart, {
    $render_radar: function(a, b, c, d, e, f) {
        this.ki(a, b, c, d, e, f)
    },
    ki: function(a, b, c, d, e, f) {
        if (b.length) {
            for (var g = this.dd(c, d), h = this.g.radius ? this.g.radius : g.radius, i = this.g.x ? this.g.x : g.x, j = this.g.y ? this.g.y : g.y, k = [], l = 0; l < b.length; l++) k.push(1);
            var m = this.ye(k, b.length);
            e || this.Jg(a, m, i, j, h, b);
            this.Kg(a, m, i, j, h, b, e, f)
        }
    },
    Kg: function(a, b, c, d, e, f, g, h) {
        var i, j, k, l, m, n, o, p, q, s, r, z, w, y, t, x, v, u, A, B;
        l = this.g;
        n = l.yAxis.start;
        o = l.yAxis.end;
        B = this.Ia(n, o);
        A = (w = B[0]) ? e / w : e / 2;
        u = B[1];
        i = j = y = -Math.PI / 2;
        s = [];
        for (m = 0; m < f.length; m++) v ? x = v : (t = l.value(f[m]), x = v || (parseFloat(t || 0) - n) * u), r = Math.floor(A * x), t = l.value(m != f.length - 1 ? f[m + 1] : f[0]), v = (parseFloat(t || 0) - n) * u, z = Math.floor(A * v), i = j, j = m != f.length - 1 ? y + b[m] - 1.0E-4 : y, p = q || this.Ha(i, c, d, r), q = this.Ha(j, c, d, z), k = l.eventRadius || parseInt(l.item.radius.call(this, f[m]), 10) + l.item.borderWidth, h.addRect(f[m].id, [p.x - k, p.y - k, p.x + k, p.y + k], g), s.push(p);
        l.fill && this.Sg(a, s, f);
        l.disableLines || this.Pi(a, s, f);
        l.disableItems || this.Lg(a, s, f);
        s = null
    },
    Lg: function(a,
        b, c) {
        for (var d = 0; d < b.length; d++) this.fc(a, b[d].x, b[d].y, c[d])
    },
    Sg: function(a, b, c) {
        var d, e;
        a.globalAlpha = this.g.alpha.call(this, {});
        a.beginPath();
        for (var f = 0; f < b.length; f++) a.fillStyle = this.g.fill.call(this, c[f]), d = b[f], e = b[f + 1] || b[0], f || a.moveTo(d.x, d.y), a.lineTo(e.x, e.y);
        a.fill();
        a.globalAlpha = 1
    },
    Pi: function(a, b, c) {
        for (var d, e, f = 0; f < b.length; f++) d = b[f], e = b[f + 1] || b[0], this.w(a, d.x, d.y, e.x, e.y, this.g.line.color.call(this, c[f]), this.g.line.width)
    },
    Jg: function(a, b, c, d, e, f) {
        var g = this.g.yAxis,
            h = this.g.xAxis,
            i = g.start,
            j = g.end,
            k = g.step,
            l = {}, m = this.g.configYAxis;
        if (typeof m.step == "undefined" || typeof m.start == "undefined" || typeof m.end == "undefined") {
            var n = this.Sa(),
                l = this.Rc(n.min, n.max),
                i = l.start,
                j = l.end,
                k = l.step;
            g.end = j;
            g.start = i
        }
        var o = [],
            p, q, s, r = 0,
            z = e * k / (j - i),
            w, y;
        k < 1 && (w = Math.min(this.Za(k), i <= 0 ? 0 : this.Za(i)), y = Math.pow(10, -w));
        var t = [];
        for (p = j; p >= i; p -= k) {
            l.fixNum && (p = parseFloat((new Number(p)).toFixed(l.fixNum)));
            o.push(Math.floor(r * z) + 0.5);
            y && (p = Math.round(p * y) / y);
            var x = d - e + o[o.length - 1];
            this.renderTextAt("middle",
                "left", c, x, g.template(p.toString()), "dhx_axis_item_y dhx_radar");
            if (b.length < 2) {
                this.oe(a, "arc", c, d, e - o[o.length - 1], -Math.PI / 2, 3 * Math.PI / 2, p);
                return
            }
            var v = -Math.PI / 2,
                u = v,
                A;
            for (q = 0; q < b.length; q++) p == j && t.push(u), A = v + b[q] - 1.0E-4, this.oe(a, m.lineShape || "line", c, d, e - o[o.length - 1], u, A, p, q, f[p]), u = A;
            r++
        }
        for (p = 0; p < t.length; p++) s = this.Ha(t[p], c, d, e), this.w(a, c, d, s.x, s.y, h ? h.lineColor.call(this, f[p]) : "#cfcfcf", h && h.lineWidth ? h.lineWidth.call(this, f[p]) : 1), this.Mg(a, c, d, e, t[p], h ? h.template.call(this, f[p]) :
            "&nbsp;")
    },
    oe: function(a, b, c, d, e, f, g, h, i) {
        var j, k;
        if (e < 0) return !1;
        j = this.Ha(f, c, d, e);
        k = this.Ha(g, c, d, e);
        var l = this.g.yAxis;
        if (l.bg) a.beginPath(), a.moveTo(c, d), b == "arc" ? a.arc(c, d, e, f, g, !1) : (a.lineTo(j.x, j.y), a.lineTo(k.x, k.y)), a.fillStyle = l.bg(h, i), a.moveTo(c, d), a.fill(), a.closePath();
        if (l.lines(h, i)) a.lineWidth = 1, a.beginPath(), b == "arc" ? a.arc(c, d, e, f, g, !1) : (a.moveTo(j.x, j.y), a.lineTo(k.x, k.y)), a.strokeStyle = l.lineColor(h, i), a.stroke()
    },
    Mg: function(a, b, c, d, e, f) {
        var g = this.renderText(0, 0, f, "dhx_axis_radar_title"),
            h = g.offsetWidth,
            i = g.offsetHeight,
            j = 0.001,
            k = this.Ha(e, b, c, d + 5),
            l = 0,
            m = 0;
        if (e < 0 || e > Math.PI) m = -i;
        e > Math.PI / 2 && (l = -h);
        if (Math.abs(e + Math.PI / 2) < j || Math.abs(e - Math.PI / 2) < j) l = -h / 2;
        else if (Math.abs(e) < j || Math.abs(e - Math.PI) < j) m = -i / 2;
        g.style.top = k.y + m + "px";
        g.style.left = k.x + l + "px";
        g.style.width = h + "px";
        g.style.whiteSpace = "nowrap"
    }
});
dhx.extend(dhx.ui.chart, {
    $render_scatter: function(a, b, c, d, e, f) {
        if (!this.g.xValue) return null;
        var g = this.Sa(),
            h = this.Sa("h", "xValue");
        e || (this.se(a, b, c, d, g.min, g.max), this.me(a, b, c, d, h.min, h.max));
        for (var g = {
            min: this.g.yAxis.start,
            max: this.g.yAxis.end
        }, h = {
                min: this.g.xAxis.start,
                max: this.g.xAxis.end
            }, i = this.$g(a, b, c, d, h, g), j = 0; j < b.length; j++) this.Ng(a, f, c, d, i, h, g, b[j], e)
    },
    $g: function(a, b, c, d, e, f) {
        var g = {};
        g.totalHeight = d.y - c.y;
        g.totalWidth = d.x - c.x;
        this.Zd(g, e.min, e.max, g.totalWidth, "X");
        this.Zd(g, f.min,
            f.max, g.totalHeight, "Y");
        return g
    },
    Ng: function(a, b, c, d, e, f, g, h, i) {
        var j = this.$d(e, d, c, f, h, "X"),
            k = this.$d(e, c, d, g, h, "Y");
        this.fc(a, j, k, h, 1);
        var l = this.g,
            m = l.eventRadius || Math.floor(l.item.radius + 1);
        b.addRect(h.id, [j - m, k - m, j + m, k + m], i)
    },
    $d: function(a, b, c, d, e, f) {
        var g = this.g[f == "X" ? "xValue" : "value"].call(this, e),
            h = a["valueFactor" + f],
            i = (parseFloat(g || 0) - d.min) * h,
            j = a["unit" + f],
            k = c[f.toLowerCase()] - (f == "X" ? -1 : 1) * Math.floor(j * i);
        i < 0 && (k = c[f.toLowerCase()]);
        g > d.max && (k = b[f.toLowerCase()]);
        g < d.min && (k = c[f.toLowerCase()]);
        return k
    },
    Zd: function(a, b, c, d, e) {
        var f = this.Ia(b, c),
            e = e || "";
        a["relValue" + e] = f[0];
        a["valueFactor" + e] = f[1];
        a["unit" + e] = a["relValue" + e] ? d / a["relValue" + e] : 10
    }
});
dhx.extend(dhx.ui.chart, {
    presets: {
        simple: {
            item: {
                borderColor: "#ffffff",
                color: "#2b7100",
                shadow: !1,
                borderWidth: 2
            },
            line: {
                color: "#8ecf03",
                width: 2
            }
        },
        plot: {
            color: "#1293f8",
            item: {
                borderColor: "#636363",
                borderWidth: 1,
                color: "#ffffff",
                type: "r",
                shadow: !1
            },
            line: {
                color: "#1293f8",
                width: 2
            }
        },
        diamond: {
            color: "#b64040",
            item: {
                borderColor: "#b64040",
                color: "#b64040",
                type: "d",
                radius: 3,
                shadow: !0
            },
            line: {
                color: "#ff9000",
                width: 2
            }
        },
        point: {
            color: "#fe5916",
            disableLines: !0,
            fill: !1,
            disableItems: !1,
            item: {
                color: "#feb916",
                borderColor: "#fe5916",
                radius: 2,
                borderWidth: 1,
                type: "r"
            },
            alpha: 1
        },
        line: {
            line: {
                color: "#3399ff",
                width: 2
            },
            item: {
                color: "#ffffff",
                borderColor: "#3399ff",
                radius: 2,
                borderWidth: 2,
                type: "d"
            },
            fill: !1,
            disableItems: !1,
            disableLines: !1,
            alpha: 1
        },
        area: {
            fill: "#3399ff",
            line: {
                color: "#3399ff",
                width: 1
            },
            disableItems: !0,
            alpha: 0.2,
            disableLines: !1
        },
        round: {
            item: {
                radius: 3,
                borderColor: "#3f83ff",
                borderWidth: 1,
                color: "#3f83ff",
                type: "r",
                shadow: !1,
                alpha: 0.6
            }
        },
        square: {
            item: {
                radius: 3,
                borderColor: "#447900",
                borderWidth: 2,
                color: "#69ba00",
                type: "s",
                shadow: !1,
                alpha: 1
            }
        },
        column: {
            color: "RAINBOW",
            gradient: !1,
            barWidth: 45,
            radius: 0,
            alpha: 1,
            border: !0
        },
        stick: {
            barWidth: 5,
            gradient: !1,
            color: "#67b5c9",
            radius: 2,
            alpha: 1,
            border: !1
        },
        alpha: {
            color: "#b9a8f9",
            barWidth: 70,
            gradient: "falling",
            radius: 0,
            alpha: 0.5,
            border: !0
        }
    }
});
dhx.protoUI({
    name: "slider",
    defaults: {
        min: 0,
        max: 100,
        step: 1,
        labelWidth: 80,
        template: function(a, b) {
            var c = "<div class='dhx_slider_label' style='width:" + (a.labelWidth - 20) + "px'>" + a.label + "</div>";
            c += "<div class='dhx_el_slider'   onclick=''>";
            c += "<div class='dhx_slider_title'></div>";
            c += "<div class='dhx_slider_bar'></div>";
            c += "<div class='dhx_slider_bar_empty'></div>";
            if (a.options && !b.g.stepless)
                for (var d = 0; d < a.options.length; d++) c += "<div class='dhx_slider_line'></div>";
            c += "<div class='dhx_slider_handle'><div class='dhx_slider_inside_handle'></div></div>";
            c += "</div>";
            return c
        }
    },
    ba: function() {
        var a = (this.g.inputWidth || this.n - this.z) - this.g.labelWidth,
            b = this.i.childNodes[1];
        b.style.width = a + "px";
        this.Ub = a - this.z;
        b.childNodes[1].style.width = this.Ub + "px";
        if (!this.g.options) {
            var c = [];
            this.g.stepless = !0;
            for (var d = this.g.min; d <= this.g.max; d += this.g.step) c.push({
                value: d,
                label: ""
            });
            this.define("options", c)
        }
        var e = this.g.options;
        this.Id = (this.Ub - 20) / (e.length > 1 ? e.length - 1 : 1);
        this.Qe = {};
        this.Ne = {};
        for (d = 0; d < e.length; d++) {
            if (!this.g.stepless) b.childNodes[d + 3].style.left =
                14 + this.Id * d + "px";
            this.Qe[e[d].value] = 1 + this.Id * d;
            this.Ne[e[d].value] = e[d].label
        }
        typeof this.g.value != "undefined" ? this.M(this.g.value) : this.M(e[0].value)
    },
    M: function(a) {
        var b = this.Qe[a] || 0;
        this.Bc(b);
        this.Gf = b
    },
    getValue: function() {
        return this.g.value
    },
    Bc: function(a, b) {
        var c = this.Pe(a);
        if (c !== null) {
            this.od = c;
            var d = this.i.childNodes[1];
            d.childNodes[0].innerHTML = this.Ne[c];
            d.lastChild.style.left = a + "px";
            if (b)
                if (new Date - this.Hd < 50) return null;
                else this.Hd = new Date;
            d.childNodes[2].style.left = a + 4 + "px";
            d.childNodes[2].style.width = this.Ub - a + 3 + "px";
            if (!b) d.innerHTML = d.innerHTML
        }
    },
    Pe: function(a) {
        if (a < 0 || a > this.Ub) return null;
        var b = Math.round(a / this.Id),
            b = Math.min(b, this.g.options.length - 1);
        return this.g.options[b].value
    },
    $init: function() {
        this.attachEvent("onTouchStart", this.Uh);
        this.attachEvent("onTouchMove", this.Th);
        this.attachEvent("onTouchEnd", this.ff);
        this.attachEvent("onItemClick", function(a, b) {
            if (!this.Oe || new Date - this.Oe > 250) {
                var c = dhx.html.pos(b),
                    d = dhx.html.offset(this.i.childNodes[1]),
                    e =
                        c.x - d.x - 10;
                if (e > 0) this.Kc = !0, this.Bc(e), this.ff()
            }
        })
    },
    Uh: function(a) {
        this.Kc = a.target.className == "dhx_slider_handle" || a.target.className == "dhx_slider_inside_handle";
        this.Hd = new Date
    },
    Th: function(a, b) {
        if (this.Kc) {
            var c;
            c = this.Gf - (a.x - b.x);
            this.Bc(c, !0);
            this.Pe(c);
            this.callEvent("onSlideStep", [this.od])
        }
    },
    ff: function(a, b) {
        if (this.Kc) {
            this.Kc = null;
            this.Oe = new Date;
            if (a && b) {
                var c = this.Gf - (a.x - b.x);
                this.Bc(c)
            }
            this.setValue(this.od);
            if (this.g.slide) {
                var d = dhx.toFunctor(this.g.slide);
                d && d.call && d.call(this,
                    this.g.id, this.od)
            }
        }
        this.Hd = null
    },
    setSliderTitle: function(a) {
        this.i.childNodes[1].childNodes[0].innerHTML = a
    }
}, dhx.ui.button);
dhx.protoUI({
    name: "resizearea",
    defaults: {
        dir: "x"
    },
    $init: function(a) {
        var b = a.dir || "x",
            c = dhx.toNode(a.container),
            d = b == "x" ? "width" : "height";
        this.qc = b == "x" ? "left" : "top";
        this.h = dhx.html.create("DIV", {
            "class": "dhx_resize_area dhx_dir_" + b
        });
        this.ua = dhx.html.create("DIV", {
            "class": "dhx_resize_handle_" + b
        });
        this.bb = dhx.html.create("DIV", {
            "class": "dhx_resize_origin_" + b
        });
        a[d] && (this.bb.style[d] = a[d] + (a.border ? 1 : 0) + "px", this.ua.style[d] = a[d] + "px");
        this.Jh = dhx.event(c, "mousemove", this.Wh, this);
        this.$i = dhx.event(document.body,
            "mouseup", this.Xh, this);
        this.ua.style[this.qc] = this.bb.style[this.qc] = a.start + "px";
        this.bb.style[this.qc] = a.start + "px";
        c.appendChild(this.h);
        c.appendChild(this.ua);
        c.appendChild(this.bb)
    },
    Xh: function() {
        this.callEvent("onResizeEnd", [this.sc]);
        dhx.eventRemove(this.Jh);
        dhx.eventRemove(this.$i);
        dhx.html.remove(this.h);
        dhx.html.remove(this.ua);
        dhx.html.remove(this.bb);
        this.g.initEvent = this.h = this.ua = this.bb = null
    },
    Wh: function(a) {
        var b = a.pageX,
            c = a.pageY;
        this.sc = (this.g.dir == "x" ? b : c) + this.g.start - this.g.eventPos;
        this.ua.style[this.qc] = this.sc + "px";
        this.callEvent("onResize", [this.sc])
    }
}, dhx.EventSystem, dhx.Settings);
dhx.protoUI({
    name: "resizer",
    $init: function() {
        this.$ready.push(this.Di)
    },
    Di: function() {
        if (this.getParent()) {
            var a = this.Zg();
            this.Dd = !1;
            dhx.event(this.h, "mousedown", this.qi, this);
            dhx.event(document.body, "mouseup", this.sf, this);
            this.pi = a;
            this.Ba = a == "x" ? "width" : "height";
            this.g[this.Ba] < 1 && this.define(this.Ba, 5);
            this.h.className += " dhx_resizer_" + a;
            this.h.innerHTML = "<div class='dhx_resizer_content'></div>"
        }
    },
    qi: function(a) {
        a = a || event;
        this.Dd = !0;
        this.tf = {
            x: a.pageX,
            y: a.pageY
        };
        this.na = [];
        if (!this.ic()[0]) return this.sf();
        this.vi(a)
    },
    sf: function() {
        this.tf = this.Dd = !1
    },
    vi: function(a) {
        var b, c, d, e, f, g, a = a || event;
        c = this.pi;
        b = this.ic()[0];
        this.getParent().h.style.position = "relative";
        e = dhx.html.offset(this.h);
        f = dhx.html.offset(this.getParent().h);
        g = e[c] - f[c];
        d = dhx.html.offset(b.$view)[c] - dhx.html.offset(this.getParent().$view)[c];
        this.oa = [c, b, g, d];
        this.Eb = new dhx.ui.resizearea({
            container: this.getParent().h,
            dir: c,
            eventPos: this.tf[c],
            start: g,
            height: this.$height,
            width: this.$width,
            border: 1
        });
        this.Eb.attachEvent("onResizeEnd",
            dhx.bind(this.ri, this));
        this.Eb.attachEvent("onResize", dhx.bind(this.ti, this))
    },
    Zg: function() {
        return this.getParent().p ? "y" : "x"
    },
    ti: function() {
        var a, b, c, d, e, f, g, h, i, j;
        if (this.oa) {
            a = this.ic();
            e = this.oa[0];
            d = this.Eb.sc - this.oa[2];
            i = this.qf(a, e, d);
            j = a[0]["$" + this.Ba] + a[1]["$" + this.Ba];
            g = e == "y" ? ["minHeight", "maxHeight"] : ["minWidth", "maxWidth"];
            for (f = 0; f < 2; f++) b = a[f].g, c = f ? -d : d, c > 0 && b[g[1]] && b[g[1]] <= i[f] || c < 0 && b[g[0]] && b[g[0]] >= i[f] ? (this.na[f] = c > 0 ? b[g[1]] : b[g[0]], h = this.rf(a, e), this.Eb.ua.style[e == "y" ?
                "top" : "left"] = this.oa[3] + h[0] + "px") : i[f] < 2 ? this.Eb.ua.style[e == "y" ? "top" : "left"] = this.oa[3] + f * j + 1 + "px" : this.na[f] = null
        }
    },
    ic: function() {
        var a, b;
        a = this.getParent().j;
        for (b = 0; b < a.length; b++)
            if (a[b] == this) return [a[b - 1], a[b + 1]]
    },
    ri: function(a) {
        var b, c, d, e, f;
        this.nj = null;
        if (this.oa) {
            c = this.oa[0];
            d = a - this.oa[2];
            b = this.ic();
            if (b[0] && b[1]) {
                f = this.si(b, c, d);
                for (e = 0; e < 2; e++) this.fi(b[e], f[e])
            }
            this.oa = !1
        }
        this.Dd = !1;
        this.na = null
    },
    fi: function(a, b) {
        a.define(this.Ba, b);
        a.resize()
    },
    rf: function(a) {
        var b, c, d;
        d = a[0]["$" +
            this.Ba
        ] + a[1]["$" + this.Ba];
        this.na[0] ? (b = this.na[0], c = d - b) : this.na[1] && (c = this.na[1], b = d - c);
        return [b, c]
    },
    qf: function(a, b, c) {
        for (var d = [], e = 0; e < 2; e++) d[e] = a[e]["$" + this.Ba] + (e ? -1 : 1) * c;
        return d
    },
    si: function(a, b, c) {
        var d, e, f;
        if (this.na[0] || this.na[1]) e = this.rf(a, b);
        else {
            e = this.qf(a, b, c);
            for (d = 0; d < 2; d++) e[d] < 0 && (f = e[0] + e[1], e[d] = 1, e[1 - d] = f - 1)
        }
        return e
    }
}, dhx.MouseEvents, dhx.ui.view);
window.dhx || (dhx = {});
if (!dhx.storage) dhx.storage = {};
dhx.storage.local = {
    put: function(a, b) {
        a && window.JSON && window.localStorage && window.localStorage.setItem(a, window.JSON.stringify(b))
    },
    get: function(a) {
        if (a && window.JSON && window.localStorage) {
            var b = window.localStorage.getItem(a);
            return !b ? null : dhx.DataDriver.json.toObject(b)
        } else return null
    },
    remove: function(a) {
        a && window.JSON && window.localStorage && window.localStorage.remove(a)
    }
};
dhx.storage.session = {
    put: function(a, b) {
        a && window.JSON && window.sessionStorage && window.sessionStorage.setItem(a, window.JSON.stringify(b))
    },
    get: function(a) {
        if (a && window.JSON && window.sessionStorage) {
            var b = window.sessionStorage.getItem(a);
            return !b ? null : dhx.DataDriver.json.toObject(b)
        } else return null
    },
    remove: function(a) {
        a && window.JSON && window.sessionStorage && window.sessionStorage.remove(a)
    }
};
dhx.storage.cookie = {
    put: function(a, b, c, d) {
        if (a && window.JSON) document.cookie = a + "=" + window.JSON.stringify(b) + (d && d instanceof Date ? ";expires=" + d.toUTCString() : "") + (c ? ";domain=" + c : "")
    },
    Be: function(a) {
        for (var b = document.cookie.split(";"), c = "", d = "", e = "", f = !1, g = 0; g < b.length; g++) {
            c = b[g].split("=");
            d = c[0].replace(/^\s+|\s+$/g, "");
            if (d == a) return f = !0, c.length > 1 && (e = unescape(c[1].replace(/^\s+|\s+$/g, ""))), e;
            c = null;
            d = ""
        }
        return null
    },
    get: function(a) {
        if (a && window.JSON) {
            var b = this.Be(a);
            return !b ? null : dhx.DataDriver.json.toObject(b)
        } else return null
    },
    remove: function(a, b) {
        if (a && this.Be(a)) document.cookie = a + "=" + (b ? ";domain=" + b : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
    }
};
dhx.proxy = dhx.proto({
    $init: function(a) {
        typeof a === "string" && (a = {
            url: a,
            storage: dhx.storage.local
        });
        this.g = a;
        this.name = "DataProxy";
        this.$proxy = !0;
        this.$progress = !1;
        this.$ready.push(this.da);
        this.Qa = []
    },
    da: function() {
        this.Db();
        return !0
    },
    load: function(a, b) {
        var c = a;
        c && (a = c);
        if (this.Db()) this.Qa.push({
            dest: a,
            driver: b
        });
        else {
            var d = this;
            dhx.ajax(this.g.url, {
                error: function(c, f, g) {
                    d.restore(a, b, c, f, g)
                },
                success: function(c, f, g) {
                    d.callEvent("onProxySuccess", [c, f, g]);
                    d.Lb({
                        "load;data": c,
                        "load;driver": b
                    });
                    a.parse(c,
                        b)
                }
            })
        }
    },
    restore: function(a, b, c, d, e) {
        var c = c || "",
            d = d || null,
            e = e || null,
            f = this.va("load;data");
        this.callEvent("onProxyError", [c, d, e, f]);
        f !== null && a.parse(f, b)
    },
    Lb: function(a) {
        var b = this.g.storage.get(this.g.url);
        b === null && (b = {});
        for (var c in a) {
            for (var d = c, e = a[c], f = d.split(";"), g = b, h = 0; h < f.length - 1; h++) typeof g[f[h]] === "undefined" && (g[f[h]] = {}), g = g[f[h]];
            g[f[f.length - 1]] = e
        }
        this.g.storage.put(this.g.url, b)
    },
    va: function(a) {
        var b = this.g.storage.get(this.g.url);
        if (b === null) return null;
        if (typeof a === "undefined") return b;
        for (var c = a.split(";"), d = 0; d < c.length - 1; d++)
            if (typeof b[c[d]]) b = b[c[d]];
            else return null;
        return b[c[c.length - 1]]
    },
    hb: function(a, b, c) {
        var d = c.Mc(a),
            e = this.g.url;
        if (typeof e == "function") return e(d);
        e += e.indexOf("?") == -1 ? "?" : "&";
        e += "editing=true";
        var f = this;
        dhx.ajax()[b](e, d, {
            success: function(a, b, d) {
                c.ud(a, b, d);
                f.Db()
            },
            error: function(d, e, i) {
                f.xh(a, c, b);
                c.ud(d, e, i);
                c.ia = []
            }
        });
        this.di(a)
    },
    xh: function(a, b, c) {
        var d = this.va("dp");
        d || (d = {
            post: [],
            get: []
        });
        if (!d.post) d.post = [];
        if (!d.get) d.get = [];
        d[c] = this.vh(d[c],
            a);
        this.Lb({
            dp: d
        });
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            b.callEvent("onAddToProxy", [f.id, f])
        }
    },
    vh: function(a, b) {
        for (var c = {}, d = -1, e = 0; e < a.length; e++)
            if (typeof a[e] == "object") {
                c = a[e];
                d = e;
                break
            }
        for (var f = c.ids || "", e = 0; e < b.length; e++) {
            var g = b[e],
                g = this.Mc([g]),
                h = g.ids;
            if (f.indexOf(g.ids) == -1) f += (f === "" ? "" : ",") + h;
            else {
                var i = c[h + "_!nativeeditor_status"],
                    j = g[h + "_!nativeeditor_status"],
                    j = this.Zi(i, j);
                g[h + "_!nativeeditor_status"] = j
            }
            for (var k in g) c[k] = g[k];
            if (g[h + "_!nativeeditor_status"] == "unset") {
                f = f.split(",");
                for (k = 0; k < f.length;) f[k] == h ? f.splice(k, 1) : k++;
                f = f.join(",");
                c = this.ii(c, h)
            }
        }
        c.ids = f;
        this.th(c) ? d >= 0 && a.splice(d, 1) : d >= 0 ? a[d] = c : a.push(c);
        return a
    },
    Zi: function(a, b) {
        switch (a) {
            case "insert":
                if (b == "update") return "insert";
                if (b == "insert") return "insert";
                if (b == "delete") return "unset";
            case "update":
                break;
            case "delete":
                if (b == "update") return "update";
                if (b == "insert") return "update";
                if (b == "delete") return "delete"
        }
        return b
    },
    ii: function(a, b) {
        var c = 0,
            d;
        for (d in a) d.indexOf(b + "_") === 0 ? delete a[d] : c++;
        return a
    },
    th: function(a) {
        for (var b in a)
            if (b !==
                "ids") return !1;
        return !0
    },
    di: function(a) {
        var b = this.va("load;data"),
            c = this.va("load;driver");
        if (c === "json" && b !== null) {
            try {
                b = "dhx.temp = " + b, eval(b), b = dhx.temp
            } catch (d) {}
            for (var e = !dhx.isUndefined(b.data) ? b.data : b, f = 0; f < a.length; f++) {
                var g = this.mh(a[f].id, e),
                    h = a[f],
                    i;
                for (i in h.data) i.substr(0, 1) == "$" && delete h.data[i];
                if (a[f].operation == "insert" && g !== null) a[f].operation = "update";
                switch (a[f].operation) {
                    case "delete":
                        g !== null && e.splice(g, 1);
                        break;
                    case "insert":
                        e.push(a[f].data);
                        break;
                    default:
                        if (g !==
                            null) e[g] = a[f].data
                }
            }
            b = window.JSON.stringify(b);
            this.Lb({
                "load;data": b
            })
        }
    },
    mh: function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (b[c].id == a) return c;
        return null
    },
    wh: function(a) {
        var b = this.va("dp");
        if (b) {
            for (var c = {}, d = 0; d < a.length; d++) c[a[d].id] = !0;
            for (d = 0; d < b.length; d++) typeof c[b[d].id] === "undefined" && (a.push(b[d]), c[b[d].id] = !0)
        }
    },
    get: function(a, b) {
        this.wf(a, b, "get")
    },
    post: function(a, b) {
        this.wf(a, b, "post")
    },
    wf: function(a, b, c) {
        b && typeof b == "function" && (b = {
            success: b,
            error: b
        });
        var d = this;
        dhx.ajax()[c](this.g.url,
            a, {
                error: function(e, f, g) {
                    var h = d.va();
                    h === null && (h = {});
                    typeof h[c] == "undefined" && (h[c] = []);
                    h[c].push(a);
                    d.Lb(h);
                    b && b.error(e, f, g)
                },
                success: function(a, c, g) {
                    b && b.success(a, c, g);
                    d.Db()
                }
            })
    },
    Db: function() {
        if (this.$progress) return !0;
        var a = this.va(),
            b = (a = a && a.dp ? a.dp : {}) && a.get ? a.get : [],
            c = this,
            d = b.length > 0 ? "get" : "post",
            a = typeof a[d] !== "undefined" ? a[d] : [];
        if (typeof a[0] !== "undefined") {
            this.$progress = !0;
            var e = a = a[0];
            this[d](a, {
                success: function(a, b, e) {
                    var i = c.va().dp[d];
                    i.splice(0, 1);
                    var j = {
                        dp: {}
                    };
                    j.dp[d] =
                        i;
                    c.Lb(j);
                    c.callEvent("onRequestEnd", [a, b, e]);
                    c.$progress = !1;
                    i.length === 0 ? c.Se(!0) : c.Db()
                },
                error: function() {
                    c.$progress = !1;
                    c.Se(!1)
                }
            });
            return !0
        }
        return !1
    },
    Se: function(a) {
        for (var b = 0; b < this.Qa.length; b++) a ? this.load(this.Qa[b].dest, this.Qa[b].driver) : this.restore(this.Qa[b].dest, this.Qa[b].driver)
    },
    Mc: function(a) {
        var b = {};
        if (this.g.single) this.Ob(a[0].data, b, "", a[0].operation);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d];
                c.push(e.id);
                this.Ob(e.data, b, e.id + "_", e.operation)
            }
            b.ids = c.join(",")
        }
        return b
    },
    Ob: function(a, b, c, d) {
        for (var e in a) e.indexOf("$") !== 0 && (b[c + e] = a[e]);
        b[c + "!nativeeditor_status"] = d
    }
}, dhx.EventSystem);
dhx.history = {
    Ea: !1,
    s: [],
    Z: {},
    zb: {},
    oj: function(a, b) {
        if (!window.history || !window.history.state || !window.history.state.active) return !1;
        var c = dhx.history.Hf(window.history.state.active);
        return c[0] === a && c[1] === b ? !0 : !1
    },
    Hf: function(a) {
        return !a || !a.split("___") ? [] : a.split("___")
    },
    nd: function(a, b) {
        return a + "___" + b
    },
    yi: function() {
        var a = [],
            b;
        for (b in dhx.ui.views) dhx.ui.views[b].name == "multiview" && a.push(b);
        return a
    },
    Gh: function() {
        for (var a in dhx.ui.views) this.sh(dhx.ui.views[a]) && this.bj(dhx.ui.views[a])
    },
    bj: function(a) {
        this.s.push({
            view: a.config.id,
            event: a.attachEvent("onBeforeTabClick", function(a, c) {
                dhx.history.Ib = {
                    tabbar: a,
                    id: c
                };
                window.setTimeout(function() {
                    delete dhx.history.Ib
                }, 100);
                return !0
            })
        })
    },
    sh: function(a) {
        return a.name == "tabbar" || a.on_click && a.on_click.mc ? !0 : !1
    },
    Ti: function(a, b) {
        if (dhx.history.zb)
            for (var c in dhx.history.zb)
                if (dhx.history.zb[c] == a) {
                    var d = c;
                    if (d && $$(d)) {
                        var e = $$(d).g.multiview;
                        $$(d).g.multiview = !1;
                        for (c in $$(d).config.options) b == $$(d).config.options[c].value && $$(d).M(b);
                        $$(d).g.multiview = e
                    }
                }
    },
    Ah: function(a) {
        if (a && a.active) {
            var b = dhx.history.Hf(a.active);
            $$(b[0]).cc = !0;
            $$(b[0]).show();
            delete $$(b[0]).cc;
            $$(b[1]).cc = !0;
            $$(b[1]).show();
            delete $$(b[1]).cc
        }
    },
    dg: function() {
        return !this.Ea ? (this.Ea = dhx.event(window, "popstate", function(a) {
            if (dhx.history.active()) dhx.history.Ah(a.state);
            else return !0
        }), !0) : !1
    },
    eh: function(a) {
        var b = [];
        if (!a || a.length === 0) b = this.yi();
        else
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        return b
    },
    start: function() {
        this.Ea || this.Yi(arguments);
        dhx.history.Yf = !0
    },
    stop: function() {
        dhx.history.Yf = !1
    },
    active: function() {
        return !!dhx.history.Yf
    },
    Yi: function(a) {
        if (!window.history) return !1;
        this.Ea || this.Gh();
        this.dg();
        for (var b = this.eh(a), c = 0; c < b.length; c++)
            if ((typeof b[c] == "string" || typeof b[c] == "number") && $$(b[c])) this.s.push({
                view: b[c],
                event: $$(b[c]).attachEvent("onViewChange", function(a, b) {
                    if (dhx.history.Ib) {
                        var f = typeof dhx.history.Ib.tabbar == "string" ? dhx.history.Ib.tabbar : dhx.history.Ib.tabbar.value;
                        dhx.history.zb[f] = c
                    }
                    dhx.history.Ti(c, b);
                    if (!$$(b).cc && !dhx.history.skip &&
                        dhx.history.active()) {
                        if (!dhx.history.Ie && !dhx.history.Z[a]) {
                            var g = dhx.history.Ie = !0;
                            window.history.pushState(!dhx.history.Z[a] ? {
                                active: dhx.history.nd(this.config.id, a)
                            } : {}, window.title + " " + this.config.id + "-" + a)
                        }!dhx.history.Z[b] && !dhx.history.Z[b] ? window.history.pushState(!dhx.history.Z[b] ? {
                            active: dhx.history.nd(this.config.id, b)
                        } : {}, window.title + " " + this.config.id + "-" + b) : !g && !dhx.history.Z[a] && window.history.pushState(!dhx.history.Z[a] ? {
                                active: dhx.history.nd(this.config.id, a)
                            } : {}, window.title + " " +
                            this.config.id + "-" + a)
                    }
                    delete dhx.history.skip
                })
            }), this.s.push({
                view: b[c],
                event: $$(b[c]).attachEvent("onBeforeBack", function(a, b) {
                    return dhx.history.active() ? (dhx.history.skip = !0, window.history.go(-b), !1) : !0
                })
            });
        return !0
    },
    ignore: function() {
        if (arguments && arguments.length)
            for (var a = 0; a < arguments.length; a++) this.Z[arguments[a]] = !0
    },
    unignore: function(a) {
        a && this.Z[a] && delete this.Z[a]
    },
    reset: function() {
        if (!window.history) return !1;
        if (dhx.history.Ea) dhx.eventRemove(dhx.history.Ea), dhx.history.Ea = !1;
        dhx.history.Ie = !1;
        for (var a = 0; a < dhx.history.s.length; a++) $$(dhx.history.s[a].view).detachEvent(dhx.history.s[a].event);
        dhx.history.s = [];
        dhx.history.Z = {};
        dhx.history.zb = {};
        return !0
    }
};
dhx.env.$touch = !0;
