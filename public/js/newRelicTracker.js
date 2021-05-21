window.NREUM || (NREUM = {});
NREUM.init = { privacy: { cookies_enabled: true } };
window.NREUM || (NREUM = {}),
  (__nr_require = (function (t, e, n) {
    function r(n) {
      if (!e[n]) {
        var o = (e[n] = { exports: {} });
        t[n][0].call(
          o.exports,
          function (e) {
            var o = t[n][1][e];
            return r(o || e);
          },
          o,
          o.exports,
        );
      }
      return e[n].exports;
    }
    if ('function' == typeof __nr_require) return __nr_require;
    for (var o = 0; o < n.length; o++) r(n[o]);
    return r;
  })(
    {
      1: [
        function (t, e, n) {
          function r(t) {
            try {
              c.console && console.log(t);
            } catch (e) {}
          }
          var o,
            i = t('ee'),
            a = t(28),
            c = {};
          try {
            (o = localStorage.getItem('__nr_flags').split(',')),
              console &&
                'function' == typeof console.log &&
                ((c.console = !0),
                o.indexOf('dev') !== -1 && (c.dev = !0),
                o.indexOf('nr_dev') !== -1 && (c.nrDev = !0));
          } catch (s) {}
          c.nrDev &&
            i.on('internal-error', function (t) {
              r(t.stack);
            }),
            c.dev &&
              i.on('fn-err', function (t, e, n) {
                r(n.stack);
              }),
            c.dev &&
              (r('NR AGENT IN DEVELOPMENT MODE'),
              r(
                'flags: ' +
                  a(c, function (t, e) {
                    return t;
                  }).join(', '),
              ));
        },
        {},
      ],
      2: [
        function (t, e, n) {
          function r(t, e, n, r, c) {
            try {
              l ? (l -= 1) : o(c || new UncaughtException(t, e, n), !0);
            } catch (u) {
              try {
                i('ierr', [u, s.now(), !0]);
              } catch (d) {}
            }
            return 'function' == typeof f && f.apply(this, a(arguments));
          }
          function UncaughtException(t, e, n) {
            (this.message = t || 'Uncaught error with no additional information'),
              (this.sourceURL = e),
              (this.line = n);
          }
          function o(t, e) {
            var n = e ? null : s.now();
            i('err', [t, n]);
          }
          var i = t('handle'),
            a = t(29),
            c = t('ee'),
            s = t('loader'),
            u = t('gos'),
            f = window.onerror,
            d = !1,
            p = 'nr@seenError',
            l = 0;
          (s.features.err = !0), t(1), (window.onerror = r);
          try {
            throw new Error();
          } catch (h) {
            'stack' in h &&
              (t(13),
              t(12),
              'addEventListener' in window && t(6),
              s.xhrWrappable && t(14),
              (d = !0));
          }
          c.on('fn-start', function (t, e, n) {
            d && (l += 1);
          }),
            c.on('fn-err', function (t, e, n) {
              d &&
                !n[p] &&
                (u(n, p, function () {
                  return !0;
                }),
                (this.thrown = !0),
                o(n));
            }),
            c.on('fn-end', function () {
              d && !this.thrown && l > 0 && (l -= 1);
            }),
            c.on('internal-error', function (t) {
              i('ierr', [t, s.now(), !0]);
            });
        },
        {},
      ],
      3: [
        function (t, e, n) {
          t('loader').features.ins = !0;
        },
        {},
      ],
      4: [
        function (t, e, n) {
          function r() {
            L++, (T = g.hash), (this[f] = y.now());
          }
          function o() {
            L--, g.hash !== T && i(0, !0);
            var t = y.now();
            (this[h] = ~~this[h] + t - this[f]), (this[d] = t);
          }
          function i(t, e) {
            E.emit('newURL', ['' + g, e]);
          }
          function a(t, e) {
            t.on(e, function () {
              this[e] = y.now();
            });
          }
          var c = '-start',
            s = '-end',
            u = '-body',
            f = 'fn' + c,
            d = 'fn' + s,
            p = 'cb' + c,
            l = 'cb' + s,
            h = 'jsTime',
            m = 'fetch',
            v = 'addEventListener',
            w = window,
            g = w.location,
            y = t('loader');
          if (w[v] && y.xhrWrappable) {
            var x = t(10),
              b = t(11),
              E = t(8),
              R = t(6),
              O = t(13),
              N = t(7),
              P = t(14),
              M = t(9),
              S = t('ee'),
              C = S.get('tracer');
            t(16), (y.features.spa = !0);
            var T,
              L = 0;
            S.on(f, r),
              b.on(p, r),
              M.on(p, r),
              S.on(d, o),
              b.on(l, o),
              M.on(l, o),
              S.buffer([f, d, 'xhr-done', 'xhr-resolved']),
              R.buffer([f]),
              O.buffer(['setTimeout' + s, 'clearTimeout' + c, f]),
              P.buffer([f, 'new-xhr', 'send-xhr' + c]),
              N.buffer([m + c, m + '-done', m + u + c, m + u + s]),
              E.buffer(['newURL']),
              x.buffer([f]),
              b.buffer(['propagate', p, l, 'executor-err', 'resolve' + c]),
              C.buffer([f, 'no-' + f]),
              M.buffer(['new-jsonp', 'cb-start', 'jsonp-error', 'jsonp-end']),
              a(P, 'send-xhr' + c),
              a(S, 'xhr-resolved'),
              a(S, 'xhr-done'),
              a(N, m + c),
              a(N, m + '-done'),
              a(M, 'new-jsonp'),
              a(M, 'jsonp-end'),
              a(M, 'cb-start'),
              E.on('pushState-end', i),
              E.on('replaceState-end', i),
              w[v]('hashchange', i, !0),
              w[v]('load', i, !0),
              w[v](
                'popstate',
                function () {
                  i(0, L > 1);
                },
                !0,
              );
          }
        },
        {},
      ],
      5: [
        function (t, e, n) {
          function r(t) {}
          if (
            window.performance &&
            window.performance.timing &&
            window.performance.getEntriesByType
          ) {
            var o = t('ee'),
              i = t('handle'),
              a = t(13),
              c = t(12),
              s = 'learResourceTimings',
              u = 'addEventListener',
              f = 'resourcetimingbufferfull',
              d = 'bstResource',
              p = 'resource',
              l = '-start',
              h = '-end',
              m = 'fn' + l,
              v = 'fn' + h,
              w = 'bstTimer',
              g = 'pushState',
              y = t('loader');
            (y.features.stn = !0), t(8), 'addEventListener' in window && t(6);
            var x = NREUM.o.EV;
            o.on(m, function (t, e) {
              var n = t[0];
              n instanceof x && (this.bstStart = y.now());
            }),
              o.on(v, function (t, e) {
                var n = t[0];
                n instanceof x && i('bst', [n, e, this.bstStart, y.now()]);
              }),
              a.on(m, function (t, e, n) {
                (this.bstStart = y.now()), (this.bstType = n);
              }),
              a.on(v, function (t, e) {
                i(w, [e, this.bstStart, y.now(), this.bstType]);
              }),
              c.on(m, function () {
                this.bstStart = y.now();
              }),
              c.on(v, function (t, e) {
                i(w, [e, this.bstStart, y.now(), 'requestAnimationFrame']);
              }),
              o.on(g + l, function (t) {
                (this.time = y.now()), (this.startPath = location.pathname + location.hash);
              }),
              o.on(g + h, function (t) {
                i('bstHist', [location.pathname + location.hash, this.startPath, this.time]);
              }),
              u in window.performance &&
                (window.performance['c' + s]
                  ? window.performance[u](
                      f,
                      function (t) {
                        i(d, [window.performance.getEntriesByType(p)]),
                          window.performance['c' + s]();
                      },
                      !1,
                    )
                  : window.performance[u](
                      'webkit' + f,
                      function (t) {
                        i(d, [window.performance.getEntriesByType(p)]),
                          window.performance['webkitC' + s]();
                      },
                      !1,
                    )),
              document[u]('scroll', r, { passive: !0 }),
              document[u]('keypress', r, !1),
              document[u]('click', r, !1);
          }
        },
        {},
      ],
      6: [
        function (t, e, n) {
          function r(t) {
            for (var e = t; e && !e.hasOwnProperty(f); ) e = Object.getPrototypeOf(e);
            e && o(e);
          }
          function o(t) {
            c.inPlace(t, [f, d], '-', i);
          }
          function i(t, e) {
            return t[1];
          }
          var a = t('ee').get('events'),
            c = t('wrap-function')(a, !0),
            s = t('gos'),
            u = XMLHttpRequest,
            f = 'addEventListener',
            d = 'removeEventListener';
          (e.exports = a),
            'getPrototypeOf' in Object
              ? (r(document), r(window), r(u.prototype))
              : u.prototype.hasOwnProperty(f) && (o(window), o(u.prototype)),
            a.on(f + '-start', function (t, e) {
              var n = t[1],
                r = s(n, 'nr@wrapped', function () {
                  function t() {
                    if ('function' == typeof n.handleEvent)
                      return n.handleEvent.apply(n, arguments);
                  }
                  var e = { object: t, function: n }[typeof n];
                  return e ? c(e, 'fn-', null, e.name || 'anonymous') : n;
                });
              this.wrapped = t[1] = r;
            }),
            a.on(d + '-start', function (t) {
              t[1] = this.wrapped || t[1];
            });
        },
        {},
      ],
      7: [
        function (t, e, n) {
          function r(t, e, n) {
            var r = t[e];
            'function' == typeof r &&
              (t[e] = function () {
                var t = i(arguments),
                  e = {};
                o.emit(n + 'before-start', [t], e);
                var a;
                e[m] && e[m].dt && (a = e[m].dt);
                var c = r.apply(this, t);
                return (
                  o.emit(n + 'start', [t, a], c),
                  c.then(
                    function (t) {
                      return o.emit(n + 'end', [null, t], c), t;
                    },
                    function (t) {
                      throw (o.emit(n + 'end', [t], c), t);
                    },
                  )
                );
              });
          }
          var o = t('ee').get('fetch'),
            i = t(29),
            a = t(28);
          e.exports = o;
          var c = window,
            s = 'fetch-',
            u = s + 'body-',
            f = ['arrayBuffer', 'blob', 'json', 'text', 'formData'],
            d = c.Request,
            p = c.Response,
            l = c.fetch,
            h = 'prototype',
            m = 'nr@context';
          d &&
            p &&
            l &&
            (a(f, function (t, e) {
              r(d[h], e, u), r(p[h], e, u);
            }),
            r(c, 'fetch', s),
            o.on(s + 'end', function (t, e) {
              var n = this;
              if (e) {
                var r = e.headers.get('content-length');
                null !== r && (n.rxSize = r), o.emit(s + 'done', [null, e], n);
              } else o.emit(s + 'done', [t], n);
            }));
        },
        {},
      ],
      8: [
        function (t, e, n) {
          var r = t('ee').get('history'),
            o = t('wrap-function')(r);
          e.exports = r;
          var i =
              window.history && window.history.constructor && window.history.constructor.prototype,
            a = window.history;
          i && i.pushState && i.replaceState && (a = i),
            o.inPlace(a, ['pushState', 'replaceState'], '-');
        },
        {},
      ],
      9: [
        function (t, e, n) {
          function r(t) {
            function e() {
              s.emit('jsonp-end', [], p),
                t.removeEventListener('load', e, !1),
                t.removeEventListener('error', n, !1);
            }
            function n() {
              s.emit('jsonp-error', [], p),
                s.emit('jsonp-end', [], p),
                t.removeEventListener('load', e, !1),
                t.removeEventListener('error', n, !1);
            }
            var r = t && 'string' == typeof t.nodeName && 'script' === t.nodeName.toLowerCase();
            if (r) {
              var o = 'function' == typeof t.addEventListener;
              if (o) {
                var a = i(t.src);
                if (a) {
                  var f = c(a),
                    d = 'function' == typeof f.parent[f.key];
                  if (d) {
                    var p = {};
                    u.inPlace(f.parent, [f.key], 'cb-', p),
                      t.addEventListener('load', e, !1),
                      t.addEventListener('error', n, !1),
                      s.emit('new-jsonp', [t.src], p);
                  }
                }
              }
            }
          }
          function o() {
            return 'addEventListener' in window;
          }
          function i(t) {
            var e = t.match(f);
            return e ? e[1] : null;
          }
          function a(t, e) {
            var n = t.match(p),
              r = n[1],
              o = n[3];
            return o ? a(o, e[r]) : e[r];
          }
          function c(t) {
            var e = t.match(d);
            return e && e.length >= 3
              ? { key: e[2], parent: a(e[1], window) }
              : { key: t, parent: window };
          }
          var s = t('ee').get('jsonp'),
            u = t('wrap-function')(s);
          if (((e.exports = s), o())) {
            var f = /[?&](?:callback|cb)=([^&#]+)/,
              d = /(.*)\.([^.]+)/,
              p = /^(\w+)(\.|$)(.*)$/,
              l = ['appendChild', 'insertBefore', 'replaceChild'];
            Node && Node.prototype && Node.prototype.appendChild
              ? u.inPlace(Node.prototype, l, 'dom-')
              : (u.inPlace(HTMLElement.prototype, l, 'dom-'),
                u.inPlace(HTMLHeadElement.prototype, l, 'dom-'),
                u.inPlace(HTMLBodyElement.prototype, l, 'dom-')),
              s.on('dom-start', function (t) {
                r(t[0]);
              });
          }
        },
        {},
      ],
      10: [
        function (t, e, n) {
          var r = t('ee').get('mutation'),
            o = t('wrap-function')(r),
            i = NREUM.o.MO;
          (e.exports = r),
            i &&
              ((window.MutationObserver = function (t) {
                return this instanceof i ? new i(o(t, 'fn-')) : i.apply(this, arguments);
              }),
              (MutationObserver.prototype = i.prototype));
        },
        {},
      ],
      11: [
        function (t, e, n) {
          function r(t) {
            var e = i.context(),
              n = c(t, 'executor-', e, null, !1),
              r = new u(n);
            return (
              (i.context(r).getCtx = function () {
                return e;
              }),
              r
            );
          }
          var o = t('wrap-function'),
            i = t('ee').get('promise'),
            a = t('ee').getOrSetContext,
            c = o(i),
            s = t(28),
            u = NREUM.o.PR;
          (e.exports = i),
            u &&
              ((window.Promise = r),
              ['all', 'race'].forEach(function (t) {
                var e = u[t];
                u[t] = function (n) {
                  function r(t) {
                    return function () {
                      i.emit('propagate', [null, !o], a, !1, !1), (o = o || !t);
                    };
                  }
                  var o = !1;
                  s(n, function (e, n) {
                    Promise.resolve(n).then(r('all' === t), r(!1));
                  });
                  var a = e.apply(u, arguments),
                    c = u.resolve(a);
                  return c;
                };
              }),
              ['resolve', 'reject'].forEach(function (t) {
                var e = u[t];
                u[t] = function (t) {
                  var n = e.apply(u, arguments);
                  return t !== n && i.emit('propagate', [t, !0], n, !1, !1), n;
                };
              }),
              (u.prototype['catch'] = function (t) {
                return this.then(null, t);
              }),
              (u.prototype = Object.create(u.prototype, { constructor: { value: r } })),
              s(Object.getOwnPropertyNames(u), function (t, e) {
                try {
                  r[e] = u[e];
                } catch (n) {}
              }),
              o.wrapInPlace(u.prototype, 'then', function (t) {
                return function () {
                  var e = this,
                    n = o.argsToArray.apply(this, arguments),
                    r = a(e);
                  (r.promise = e),
                    (n[0] = c(n[0], 'cb-', r, null, !1)),
                    (n[1] = c(n[1], 'cb-', r, null, !1));
                  var s = t.apply(this, n);
                  return (r.nextPromise = s), i.emit('propagate', [e, !0], s, !1, !1), s;
                };
              }),
              i.on('executor-start', function (t) {
                (t[0] = c(t[0], 'resolve-', this, null, !1)),
                  (t[1] = c(t[1], 'resolve-', this, null, !1));
              }),
              i.on('executor-err', function (t, e, n) {
                t[1](n);
              }),
              i.on('cb-end', function (t, e, n) {
                i.emit('propagate', [n, !0], this.nextPromise, !1, !1);
              }),
              i.on('propagate', function (t, e, n) {
                (this.getCtx && !e) ||
                  (this.getCtx = function () {
                    if (t instanceof Promise) var e = i.context(t);
                    return e && e.getCtx ? e.getCtx() : this;
                  });
              }),
              (r.toString = function () {
                return '' + u;
              }));
        },
        {},
      ],
      12: [
        function (t, e, n) {
          var r = t('ee').get('raf'),
            o = t('wrap-function')(r),
            i = 'equestAnimationFrame';
          (e.exports = r),
            o.inPlace(window, ['r' + i, 'mozR' + i, 'webkitR' + i, 'msR' + i], 'raf-'),
            r.on('raf-start', function (t) {
              t[0] = o(t[0], 'fn-');
            });
        },
        {},
      ],
      13: [
        function (t, e, n) {
          function r(t, e, n) {
            t[0] = a(t[0], 'fn-', null, n);
          }
          function o(t, e, n) {
            (this.method = n),
              (this.timerDuration = isNaN(t[1]) ? 0 : +t[1]),
              (t[0] = a(t[0], 'fn-', this, n));
          }
          var i = t('ee').get('timer'),
            a = t('wrap-function')(i),
            c = 'setTimeout',
            s = 'setInterval',
            u = 'clearTimeout',
            f = '-start',
            d = '-';
          (e.exports = i),
            a.inPlace(window, [c, 'setImmediate'], c + d),
            a.inPlace(window, [s], s + d),
            a.inPlace(window, [u, 'clearImmediate'], u + d),
            i.on(s + f, r),
            i.on(c + f, o);
        },
        {},
      ],
      14: [
        function (t, e, n) {
          function r(t, e) {
            d.inPlace(e, ['onreadystatechange'], 'fn-', c);
          }
          function o() {
            var t = this,
              e = f.context(t);
            t.readyState > 3 && !e.resolved && ((e.resolved = !0), f.emit('xhr-resolved', [], t)),
              d.inPlace(t, g, 'fn-', c);
          }
          function i(t) {
            y.push(t), h && (b ? b.then(a) : v ? v(a) : ((E = -E), (R.data = E)));
          }
          function a() {
            for (var t = 0; t < y.length; t++) r([], y[t]);
            y.length && (y = []);
          }
          function c(t, e) {
            return e;
          }
          function s(t, e) {
            for (var n in t) e[n] = t[n];
            return e;
          }
          t(6);
          var u = t('ee'),
            f = u.get('xhr'),
            d = t('wrap-function')(f),
            p = NREUM.o,
            l = p.XHR,
            h = p.MO,
            m = p.PR,
            v = p.SI,
            w = 'readystatechange',
            g = [
              'onload',
              'onerror',
              'onabort',
              'onloadstart',
              'onloadend',
              'onprogress',
              'ontimeout',
            ],
            y = [];
          e.exports = f;
          var x = (window.XMLHttpRequest = function (t) {
            var e = new l(t);
            try {
              f.emit('new-xhr', [e], e), e.addEventListener(w, o, !1);
            } catch (n) {
              try {
                f.emit('internal-error', [n]);
              } catch (r) {}
            }
            return e;
          });
          if (
            (s(l, x),
            (x.prototype = l.prototype),
            d.inPlace(x.prototype, ['open', 'send'], '-xhr-', c),
            f.on('send-xhr-start', function (t, e) {
              r(t, e), i(e);
            }),
            f.on('open-xhr-start', r),
            h)
          ) {
            var b = m && m.resolve();
            if (!v && !m) {
              var E = 1,
                R = document.createTextNode(E);
              new h(a).observe(R, { characterData: !0 });
            }
          } else
            u.on('fn-end', function (t) {
              (t[0] && t[0].type === w) || a();
            });
        },
        {},
      ],
      15: [
        function (t, e, n) {
          function r(t) {
            if (!c(t)) return null;
            var e = window.NREUM;
            if (!e.loader_config) return null;
            var n = (e.loader_config.accountID || '').toString() || null,
              r = (e.loader_config.agentID || '').toString() || null,
              u = (e.loader_config.trustKey || '').toString() || null;
            if (!n || !r) return null;
            var h = l.generateSpanId(),
              m = l.generateTraceId(),
              v = Date.now(),
              w = { spanId: h, traceId: m, timestamp: v };
            return (
              (t.sameOrigin || (s(t) && p())) &&
                ((w.traceContextParentHeader = o(h, m)),
                (w.traceContextStateHeader = i(h, v, n, r, u))),
              ((t.sameOrigin && !f()) || (!t.sameOrigin && s(t) && d())) &&
                (w.newrelicHeader = a(h, m, v, n, r, u)),
              w
            );
          }
          function o(t, e) {
            return '00-' + e + '-' + t + '-01';
          }
          function i(t, e, n, r, o) {
            var i = 0,
              a = '',
              c = 1,
              s = '',
              u = '';
            return (
              o +
              '@nr=' +
              i +
              '-' +
              c +
              '-' +
              n +
              '-' +
              r +
              '-' +
              t +
              '-' +
              a +
              '-' +
              s +
              '-' +
              u +
              '-' +
              e
            );
          }
          function a(t, e, n, r, o, i) {
            var a = 'btoa' in window && 'function' == typeof window.btoa;
            if (!a) return null;
            var c = { v: [0, 1], d: { ty: 'Browser', ac: r, ap: o, id: t, tr: e, ti: n } };
            return i && r !== i && (c.d.tk = i), btoa(JSON.stringify(c));
          }
          function c(t) {
            return u() && s(t);
          }
          function s(t) {
            var e = !1,
              n = {};
            if (
              ('init' in NREUM &&
                'distributed_tracing' in NREUM.init &&
                (n = NREUM.init.distributed_tracing),
              t.sameOrigin)
            )
              e = !0;
            else if (n.allowed_origins instanceof Array)
              for (var r = 0; r < n.allowed_origins.length; r++) {
                var o = h(n.allowed_origins[r]);
                if (t.hostname === o.hostname && t.protocol === o.protocol && t.port === o.port) {
                  e = !0;
                  break;
                }
              }
            return e;
          }
          function u() {
            return (
              'init' in NREUM &&
              'distributed_tracing' in NREUM.init &&
              !!NREUM.init.distributed_tracing.enabled
            );
          }
          function f() {
            return (
              'init' in NREUM &&
              'distributed_tracing' in NREUM.init &&
              !!NREUM.init.distributed_tracing.exclude_newrelic_header
            );
          }
          function d() {
            return (
              'init' in NREUM &&
              'distributed_tracing' in NREUM.init &&
              NREUM.init.distributed_tracing.cors_use_newrelic_header !== !1
            );
          }
          function p() {
            return (
              'init' in NREUM &&
              'distributed_tracing' in NREUM.init &&
              !!NREUM.init.distributed_tracing.cors_use_tracecontext_headers
            );
          }
          var l = t(25),
            h = t(17);
          e.exports = { generateTracePayload: r, shouldGenerateTrace: c };
        },
        {},
      ],
      16: [
        function (t, e, n) {
          function r(t) {
            var e = this.params,
              n = this.metrics;
            if (!this.ended) {
              this.ended = !0;
              for (var r = 0; r < p; r++) t.removeEventListener(d[r], this.listener, !1);
              e.aborted ||
                ((n.duration = a.now() - this.startTime),
                this.loadCaptureCalled || 4 !== t.readyState
                  ? null == e.status && (e.status = 0)
                  : i(this, t),
                (n.cbTime = this.cbTime),
                f.emit('xhr-done', [t], t),
                c('xhr', [e, n, this.startTime]));
            }
          }
          function o(t, e) {
            var n = s(e),
              r = t.params;
            (r.host = n.hostname + ':' + n.port),
              (r.pathname = n.pathname),
              (t.parsedOrigin = s(e)),
              (t.sameOrigin = t.parsedOrigin.sameOrigin);
          }
          function i(t, e) {
            t.params.status = e.status;
            var n = v(e, t.lastSize);
            if ((n && (t.metrics.rxSize = n), t.sameOrigin)) {
              var r = e.getResponseHeader('X-NewRelic-App-Data');
              r && (t.params.cat = r.split(', ').pop());
            }
            t.loadCaptureCalled = !0;
          }
          var a = t('loader');
          if (a.xhrWrappable) {
            var c = t('handle'),
              s = t(17),
              u = t(15).generateTracePayload,
              f = t('ee'),
              d = ['load', 'error', 'abort', 'timeout'],
              p = d.length,
              l = t('id'),
              h = t(21),
              m = t(20),
              v = t(18),
              w = window.XMLHttpRequest;
            (a.features.xhr = !0),
              t(14),
              t(7),
              f.on('new-xhr', function (t) {
                var e = this;
                (e.totalCbs = 0),
                  (e.called = 0),
                  (e.cbTime = 0),
                  (e.end = r),
                  (e.ended = !1),
                  (e.xhrGuids = {}),
                  (e.lastSize = null),
                  (e.loadCaptureCalled = !1),
                  t.addEventListener(
                    'load',
                    function (n) {
                      i(e, t);
                    },
                    !1,
                  ),
                  (h && (h > 34 || h < 10)) ||
                    window.opera ||
                    t.addEventListener(
                      'progress',
                      function (t) {
                        e.lastSize = t.loaded;
                      },
                      !1,
                    );
              }),
              f.on('open-xhr-start', function (t) {
                (this.params = { method: t[0] }), o(this, t[1]), (this.metrics = {});
              }),
              f.on('open-xhr-end', function (t, e) {
                'loader_config' in NREUM &&
                  'xpid' in NREUM.loader_config &&
                  this.sameOrigin &&
                  e.setRequestHeader('X-NewRelic-ID', NREUM.loader_config.xpid);
                var n = u(this.parsedOrigin);
                if (n) {
                  var r = !1;
                  n.newrelicHeader && (e.setRequestHeader('newrelic', n.newrelicHeader), (r = !0)),
                    n.traceContextParentHeader &&
                      (e.setRequestHeader('traceparent', n.traceContextParentHeader),
                      n.traceContextStateHeader &&
                        e.setRequestHeader('tracestate', n.traceContextStateHeader),
                      (r = !0)),
                    r && (this.dt = n);
                }
              }),
              f.on('send-xhr-start', function (t, e) {
                var n = this.metrics,
                  r = t[0],
                  o = this;
                if (n && r) {
                  var i = m(r);
                  i && (n.txSize = i);
                }
                (this.startTime = a.now()),
                  (this.listener = function (t) {
                    try {
                      'abort' !== t.type || o.loadCaptureCalled || (o.params.aborted = !0),
                        ('load' !== t.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || 'function' != typeof e.onload))) &&
                          o.end(e);
                    } catch (n) {
                      try {
                        f.emit('internal-error', [n]);
                      } catch (r) {}
                    }
                  });
                for (var c = 0; c < p; c++) e.addEventListener(d[c], this.listener, !1);
              }),
              f.on('xhr-cb-time', function (t, e, n) {
                (this.cbTime += t),
                  e ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && 'function' == typeof n.onload) ||
                    this.end(n);
              }),
              f.on('xhr-load-added', function (t, e) {
                var n = '' + l(t) + !!e;
                this.xhrGuids &&
                  !this.xhrGuids[n] &&
                  ((this.xhrGuids[n] = !0), (this.totalCbs += 1));
              }),
              f.on('xhr-load-removed', function (t, e) {
                var n = '' + l(t) + !!e;
                this.xhrGuids &&
                  this.xhrGuids[n] &&
                  (delete this.xhrGuids[n], (this.totalCbs -= 1));
              }),
              f.on('addEventListener-end', function (t, e) {
                e instanceof w && 'load' === t[0] && f.emit('xhr-load-added', [t[1], t[2]], e);
              }),
              f.on('removeEventListener-end', function (t, e) {
                e instanceof w && 'load' === t[0] && f.emit('xhr-load-removed', [t[1], t[2]], e);
              }),
              f.on('fn-start', function (t, e, n) {
                e instanceof w &&
                  ('onload' === n && (this.onload = !0),
                  ('load' === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now()));
              }),
              f.on('fn-end', function (t, e) {
                this.xhrCbStart &&
                  f.emit('xhr-cb-time', [a.now() - this.xhrCbStart, this.onload, e], e);
              }),
              f.on('fetch-before-start', function (t) {
                function e(t, e) {
                  var n = !1;
                  return (
                    e.newrelicHeader && (t.set('newrelic', e.newrelicHeader), (n = !0)),
                    e.traceContextParentHeader &&
                      (t.set('traceparent', e.traceContextParentHeader),
                      e.traceContextStateHeader && t.set('tracestate', e.traceContextStateHeader),
                      (n = !0)),
                    n
                  );
                }
                var n,
                  r = t[1] || {};
                'string' == typeof t[0]
                  ? (n = t[0])
                  : t[0] && t[0].url
                  ? (n = t[0].url)
                  : window.URL && t[0] && t[0] instanceof URL && (n = t[0].href),
                  n &&
                    ((this.parsedOrigin = s(n)), (this.sameOrigin = this.parsedOrigin.sameOrigin));
                var o = u(this.parsedOrigin);
                if (o && (o.newrelicHeader || o.traceContextParentHeader))
                  if ('string' == typeof t[0] || (window.URL && t[0] && t[0] instanceof URL)) {
                    var i = {};
                    for (var a in r) i[a] = r[a];
                    (i.headers = new Headers(r.headers || {})),
                      e(i.headers, o) && (this.dt = o),
                      t.length > 1 ? (t[1] = i) : t.push(i);
                  } else t[0] && t[0].headers && e(t[0].headers, o) && (this.dt = o);
              });
          }
        },
        {},
      ],
      17: [
        function (t, e, n) {
          var r = {};
          e.exports = function (t) {
            if (t in r) return r[t];
            var e = document.createElement('a'),
              n = window.location,
              o = {};
            (e.href = t), (o.port = e.port);
            var i = e.href.split('://');
            !o.port && i[1] && (o.port = i[1].split('/')[0].split('@').pop().split(':')[1]),
              (o.port && '0' !== o.port) || (o.port = 'https' === i[0] ? '443' : '80'),
              (o.hostname = e.hostname || n.hostname),
              (o.pathname = e.pathname),
              (o.protocol = i[0]),
              '/' !== o.pathname.charAt(0) && (o.pathname = '/' + o.pathname);
            var a = !e.protocol || ':' === e.protocol || e.protocol === n.protocol,
              c = e.hostname === document.domain && e.port === n.port;
            return (o.sameOrigin = a && (!e.hostname || c)), '/' === o.pathname && (r[t] = o), o;
          };
        },
        {},
      ],
      18: [
        function (t, e, n) {
          function r(t, e) {
            var n = t.responseType;
            return 'json' === n && null !== e
              ? e
              : 'arraybuffer' === n || 'blob' === n || 'json' === n
              ? o(t.response)
              : 'text' === n || '' === n || void 0 === n
              ? o(t.responseText)
              : void 0;
          }
          var o = t(20);
          e.exports = r;
        },
        {},
      ],
      19: [
        function (t, e, n) {
          function r() {}
          function o(t, e, n) {
            return function () {
              return i(t, [u.now()].concat(c(arguments)), e ? null : this, n), e ? void 0 : this;
            };
          }
          var i = t('handle'),
            a = t(28),
            c = t(29),
            s = t('ee').get('tracer'),
            u = t('loader'),
            f = NREUM;
          'undefined' == typeof window.newrelic && (newrelic = f);
          var d = [
              'setPageViewName',
              'setCustomAttribute',
              'setErrorHandler',
              'finished',
              'addToTrace',
              'inlineHit',
              'addRelease',
            ],
            p = 'api-',
            l = p + 'ixn-';
          a(d, function (t, e) {
            f[e] = o(p + e, !0, 'api');
          }),
            (f.addPageAction = o(p + 'addPageAction', !0)),
            (f.setCurrentRouteName = o(p + 'routeName', !0)),
            (e.exports = newrelic),
            (f.interaction = function () {
              return new r().get();
            });
          var h = (r.prototype = {
            createTracer: function (t, e) {
              var n = {},
                r = this,
                o = 'function' == typeof e;
              return (
                i(l + 'tracer', [u.now(), t, n], r),
                function () {
                  if ((s.emit((o ? '' : 'no-') + 'fn-start', [u.now(), r, o], n), o))
                    try {
                      return e.apply(this, arguments);
                    } catch (t) {
                      throw (s.emit('fn-err', [arguments, this, t], n), t);
                    } finally {
                      s.emit('fn-end', [u.now()], n);
                    }
                }
              );
            },
          });
          a(
            'actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get'.split(','),
            function (t, e) {
              h[e] = o(l + e);
            },
          ),
            (newrelic.noticeError = function (t, e) {
              'string' == typeof t && (t = new Error(t)), i('err', [t, u.now(), !1, e]);
            });
        },
        {},
      ],
      20: [
        function (t, e, n) {
          e.exports = function (t) {
            if ('string' == typeof t && t.length) return t.length;
            if ('object' == typeof t) {
              if ('undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength)
                return t.byteLength;
              if ('undefined' != typeof Blob && t instanceof Blob && t.size) return t.size;
              if (!('undefined' != typeof FormData && t instanceof FormData))
                try {
                  return JSON.stringify(t).length;
                } catch (e) {
                  return;
                }
            }
          };
        },
        {},
      ],
      21: [
        function (t, e, n) {
          var r = 0,
            o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
          o && (r = +o[1]), (e.exports = r);
        },
        {},
      ],
      22: [
        function (t, e, n) {
          function r() {
            return c.exists && performance.now
              ? Math.round(performance.now())
              : (i = Math.max(new Date().getTime(), i)) - a;
          }
          function o() {
            return i;
          }
          var i = new Date().getTime(),
            a = i,
            c = t(30);
          (e.exports = r), (e.exports.offset = a), (e.exports.getLastTimestamp = o);
        },
        {},
      ],
      23: [
        function (t, e, n) {
          function r(t) {
            return !(!t || !t.protocol || 'file:' === t.protocol);
          }
          e.exports = r;
        },
        {},
      ],
      24: [
        function (t, e, n) {
          function r(t, e) {
            var n = t.getEntries();
            n.forEach(function (t) {
              'first-paint' === t.name
                ? d('timing', ['fp', Math.floor(t.startTime)])
                : 'first-contentful-paint' === t.name &&
                  d('timing', ['fcp', Math.floor(t.startTime)]);
            });
          }
          function o(t, e) {
            var n = t.getEntries();
            n.length > 0 && d('lcp', [n[n.length - 1]]);
          }
          function i(t) {
            t.getEntries().forEach(function (t) {
              t.hadRecentInput || d('cls', [t]);
            });
          }
          function a(t) {
            if (t instanceof h && !v) {
              var e = Math.round(t.timeStamp),
                n = { type: t.type };
              e <= p.now()
                ? (n.fid = p.now() - e)
                : e > p.offset && e <= Date.now()
                ? ((e -= p.offset), (n.fid = p.now() - e))
                : (e = p.now()),
                (v = !0),
                d('timing', ['fi', e, n]);
            }
          }
          function c(t) {
            d('pageHide', [p.now(), t]);
          }
          if (
            !(
              'init' in NREUM &&
              'page_view_timing' in NREUM.init &&
              'enabled' in NREUM.init.page_view_timing &&
              NREUM.init.page_view_timing.enabled === !1
            )
          ) {
            var s,
              u,
              f,
              d = t('handle'),
              p = t('loader'),
              l = t(27),
              h = NREUM.o.EV;
            if (
              'PerformanceObserver' in window &&
              'function' == typeof window.PerformanceObserver
            ) {
              s = new PerformanceObserver(r);
              try {
                s.observe({ entryTypes: ['paint'] });
              } catch (m) {}
              u = new PerformanceObserver(o);
              try {
                u.observe({ entryTypes: ['largest-contentful-paint'] });
              } catch (m) {}
              f = new PerformanceObserver(i);
              try {
                f.observe({ type: 'layout-shift', buffered: !0 });
              } catch (m) {}
            }
            if ('addEventListener' in document) {
              var v = !1,
                w = ['click', 'keydown', 'mousedown', 'pointerdown', 'touchstart'];
              w.forEach(function (t) {
                document.addEventListener(t, a, !1);
              });
            }
            l(c);
          }
        },
        {},
      ],
      25: [
        function (t, e, n) {
          function r() {
            function t() {
              return e ? 15 & e[n++] : (16 * Math.random()) | 0;
            }
            var e = null,
              n = 0,
              r = window.crypto || window.msCrypto;
            r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31)));
            for (
              var o, i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', a = '', c = 0;
              c < i.length;
              c++
            )
              (o = i[c]),
                'x' === o
                  ? (a += t().toString(16))
                  : 'y' === o
                  ? ((o = (3 & t()) | 8), (a += o.toString(16)))
                  : (a += o);
            return a;
          }
          function o() {
            return a(16);
          }
          function i() {
            return a(32);
          }
          function a(t) {
            function e() {
              return n ? 15 & n[r++] : (16 * Math.random()) | 0;
            }
            var n = null,
              r = 0,
              o = window.crypto || window.msCrypto;
            o && o.getRandomValues && Uint8Array && (n = o.getRandomValues(new Uint8Array(31)));
            for (var i = [], a = 0; a < t; a++) i.push(e().toString(16));
            return i.join('');
          }
          e.exports = { generateUuid: r, generateSpanId: o, generateTraceId: i };
        },
        {},
      ],
      26: [
        function (t, e, n) {
          function r(t, e) {
            if (!o) return !1;
            if (t !== o) return !1;
            if (!e) return !0;
            if (!i) return !1;
            for (var n = i.split('.'), r = e.split('.'), a = 0; a < r.length; a++)
              if (r[a] !== n[a]) return !1;
            return !0;
          }
          var o = null,
            i = null,
            a = /Version\/(\S+)\s+Safari/;
          if (navigator.userAgent) {
            var c = navigator.userAgent,
              s = c.match(a);
            s &&
              c.indexOf('Chrome') === -1 &&
              c.indexOf('Chromium') === -1 &&
              ((o = 'Safari'), (i = s[1]));
          }
          e.exports = { agent: o, version: i, match: r };
        },
        {},
      ],
      27: [
        function (t, e, n) {
          function r(t) {
            function e() {
              t(a && document[a] ? document[a] : document[o] ? 'hidden' : 'visible');
            }
            'addEventListener' in document && i && document.addEventListener(i, e, !1);
          }
          e.exports = r;
          var o, i, a;
          'undefined' != typeof document.hidden
            ? ((o = 'hidden'), (i = 'visibilitychange'), (a = 'visibilityState'))
            : 'undefined' != typeof document.msHidden
            ? ((o = 'msHidden'), (i = 'msvisibilitychange'))
            : 'undefined' != typeof document.webkitHidden &&
              ((o = 'webkitHidden'), (i = 'webkitvisibilitychange'), (a = 'webkitVisibilityState'));
        },
        {},
      ],
      28: [
        function (t, e, n) {
          function r(t, e) {
            var n = [],
              r = '',
              i = 0;
            for (r in t) o.call(t, r) && ((n[i] = e(r, t[r])), (i += 1));
            return n;
          }
          var o = Object.prototype.hasOwnProperty;
          e.exports = r;
        },
        {},
      ],
      29: [
        function (t, e, n) {
          function r(t, e, n) {
            e || (e = 0), 'undefined' == typeof n && (n = t ? t.length : 0);
            for (var r = -1, o = n - e || 0, i = Array(o < 0 ? 0 : o); ++r < o; ) i[r] = t[e + r];
            return i;
          }
          e.exports = r;
        },
        {},
      ],
      30: [
        function (t, e, n) {
          e.exports = {
            exists:
              'undefined' != typeof window.performance &&
              window.performance.timing &&
              'undefined' != typeof window.performance.timing.navigationStart,
          };
        },
        {},
      ],
      ee: [
        function (t, e, n) {
          function r() {}
          function o(t) {
            function e(t) {
              return t && t instanceof r ? t : t ? u(t, s, a) : a();
            }
            function n(n, r, o, i, a) {
              if ((a !== !1 && (a = !0), !l.aborted || i)) {
                t && a && t(n, r, o);
                for (var c = e(o), s = m(n), u = s.length, f = 0; f < u; f++) s[f].apply(c, r);
                var p = d[y[n]];
                return p && p.push([x, n, r, c]), c;
              }
            }
            function i(t, e) {
              g[t] = m(t).concat(e);
            }
            function h(t, e) {
              var n = g[t];
              if (n) for (var r = 0; r < n.length; r++) n[r] === e && n.splice(r, 1);
            }
            function m(t) {
              return g[t] || [];
            }
            function v(t) {
              return (p[t] = p[t] || o(n));
            }
            function w(t, e) {
              f(t, function (t, n) {
                (e = e || 'feature'), (y[n] = e), e in d || (d[e] = []);
              });
            }
            var g = {},
              y = {},
              x = {
                on: i,
                addEventListener: i,
                removeEventListener: h,
                emit: n,
                get: v,
                listeners: m,
                context: e,
                buffer: w,
                abort: c,
                aborted: !1,
              };
            return x;
          }
          function i(t) {
            return u(t, s, a);
          }
          function a() {
            return new r();
          }
          function c() {
            (d.api || d.feature) && ((l.aborted = !0), (d = l.backlog = {}));
          }
          var s = 'nr@context',
            u = t('gos'),
            f = t(28),
            d = {},
            p = {},
            l = (e.exports = o());
          (e.exports.getOrSetContext = i), (l.backlog = d);
        },
        {},
      ],
      gos: [
        function (t, e, n) {
          function r(t, e, n) {
            if (o.call(t, e)) return t[e];
            var r = n();
            if (Object.defineProperty && Object.keys)
              try {
                return Object.defineProperty(t, e, { value: r, writable: !0, enumerable: !1 }), r;
              } catch (i) {}
            return (t[e] = r), r;
          }
          var o = Object.prototype.hasOwnProperty;
          e.exports = r;
        },
        {},
      ],
      handle: [
        function (t, e, n) {
          function r(t, e, n, r) {
            o.buffer([t], r), o.emit(t, e, n);
          }
          var o = t('ee').get('handle');
          (e.exports = r), (r.ee = o);
        },
        {},
      ],
      id: [
        function (t, e, n) {
          function r(t) {
            var e = typeof t;
            return !t || ('object' !== e && 'function' !== e)
              ? -1
              : t === window
              ? 0
              : a(t, i, function () {
                  return o++;
                });
          }
          var o = 1,
            i = 'nr@id',
            a = t('gos');
          e.exports = r;
        },
        {},
      ],
      loader: [
        function (t, e, n) {
          function r() {
            if (!E++) {
              var t = (b.info = NREUM.info),
                e = l.getElementsByTagName('script')[0];
              if ((setTimeout(u.abort, 3e4), !(t && t.licenseKey && t.applicationID && e)))
                return u.abort();
              s(y, function (e, n) {
                t[e] || (t[e] = n);
              });
              var n = a();
              c('mark', ['onload', n + b.offset], null, 'api'), c('timing', ['load', n]);
              var r = l.createElement('script');
              (r.src = 'https://' + t.agent), e.parentNode.insertBefore(r, e);
            }
          }
          function o() {
            'complete' === l.readyState && i();
          }
          function i() {
            c('mark', ['domContent', a() + b.offset], null, 'api');
          }
          var a = t(22),
            c = t('handle'),
            s = t(28),
            u = t('ee'),
            f = t(26),
            d = t(23),
            p = window,
            l = p.document,
            h = 'addEventListener',
            m = 'attachEvent',
            v = p.XMLHttpRequest,
            w = v && v.prototype;
          if (d(p.location)) {
            NREUM.o = {
              ST: setTimeout,
              SI: p.setImmediate,
              CT: clearTimeout,
              XHR: v,
              REQ: p.Request,
              EV: p.Event,
              PR: p.Promise,
              MO: p.MutationObserver,
            };
            var g = '' + location,
              y = {
                beacon: 'bam.nr-data.net',
                errorBeacon: 'bam.nr-data.net',
                agent: 'js-agent.newrelic.com/nr-spa-1208.min.js',
              },
              x = v && w && w[h] && !/CriOS/.test(navigator.userAgent),
              b = (e.exports = {
                offset: a.getLastTimestamp(),
                now: a,
                origin: g,
                features: {},
                xhrWrappable: x,
                userAgent: f,
              });
            t(19),
              t(24),
              l[h]
                ? (l[h]('DOMContentLoaded', i, !1), p[h]('load', r, !1))
                : (l[m]('onreadystatechange', o), p[m]('onload', r)),
              c('mark', ['firstbyte', a.getLastTimestamp()], null, 'api');
            var E = 0;
          }
        },
        {},
      ],
      'wrap-function': [
        function (t, e, n) {
          function r(t, e) {
            function n(e, n, r, s, u) {
              function nrWrapper() {
                var i, a, f, p;
                try {
                  (a = this), (i = d(arguments)), (f = 'function' == typeof r ? r(i, a) : r || {});
                } catch (l) {
                  o([l, '', [i, a, s], f], t);
                }
                c(n + 'start', [i, a, s], f, u);
                try {
                  return (p = e.apply(a, i));
                } catch (h) {
                  throw (c(n + 'err', [i, a, h], f, u), h);
                } finally {
                  c(n + 'end', [i, a, p], f, u);
                }
              }
              return a(e) ? e : (n || (n = ''), (nrWrapper[p] = e), i(e, nrWrapper, t), nrWrapper);
            }
            function r(t, e, r, o, i) {
              r || (r = '');
              var c,
                s,
                u,
                f = '-' === r.charAt(0);
              for (u = 0; u < e.length; u++)
                (s = e[u]), (c = t[s]), a(c) || (t[s] = n(c, f ? s + r : r, o, s, i));
            }
            function c(n, r, i, a) {
              if (!h || e) {
                var c = h;
                h = !0;
                try {
                  t.emit(n, r, i, e, a);
                } catch (s) {
                  o([s, n, r, i], t);
                }
                h = c;
              }
            }
            return t || (t = f), (n.inPlace = r), (n.flag = p), n;
          }
          function o(t, e) {
            e || (e = f);
            try {
              e.emit('internal-error', t);
            } catch (n) {}
          }
          function i(t, e, n) {
            if (Object.defineProperty && Object.keys)
              try {
                var r = Object.keys(t);
                return (
                  r.forEach(function (n) {
                    Object.defineProperty(e, n, {
                      get: function () {
                        return t[n];
                      },
                      set: function (e) {
                        return (t[n] = e), e;
                      },
                    });
                  }),
                  e
                );
              } catch (i) {
                o([i], n);
              }
            for (var a in t) l.call(t, a) && (e[a] = t[a]);
            return e;
          }
          function a(t) {
            return !(t && t instanceof Function && t.apply && !t[p]);
          }
          function c(t, e) {
            var n = e(t);
            return (n[p] = t), i(t, n, f), n;
          }
          function s(t, e, n) {
            var r = t[e];
            t[e] = c(r, n);
          }
          function u() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; ++n) e[n] = arguments[n];
            return e;
          }
          var f = t('ee'),
            d = t(29),
            p = 'nr@original',
            l = Object.prototype.hasOwnProperty,
            h = !1;
          (e.exports = r),
            (e.exports.wrapFunction = c),
            (e.exports.wrapInPlace = s),
            (e.exports.argsToArray = u);
        },
        {},
      ],
    },
    {},
    ['loader', 2, 16, 5, 3, 4],
  ));
NREUM.loader_config = {
  accountID: '2555003',
  trustKey: '2555003',
  agentID: '1345120839',
  licenseKey: 'NRJS-059439d724bf393c270',
  applicationID: '1345120839',
};
NREUM.info = {
  beacon: 'bam.nr-data.net',
  errorBeacon: 'bam.nr-data.net',
  licenseKey: 'NRJS-059439d724bf393c270',
  applicationID: '1345120839',
  sa: 1,
};
