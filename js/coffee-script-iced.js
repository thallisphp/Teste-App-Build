/**
 * CoffeeScript Compiler v1.4.0a
 * http://coffeescript.org
 *
 * Copyright 2011, Jeremy Ashkenas
 * Released under the MIT License
 */
(function(e){var t=function(){function e(t){return e[t]}return e["./iced"]=new function(){var e=this;(function(){var t,n=[].slice;e.generator=t=function(e,t,i){var r,s,o,a,c,u;return t.transform=function(e){return e.icedTransform()},t["const"]=r={k:"__iced_k",k_noop:"__iced_k_noop",param:"__iced_p_",ns:"iced",Deferrals:"Deferrals",deferrals:"__iced_deferrals",fulfill:"_fulfill",b_while:"_break",t_while:"_while",c_while:"_continue",n_while:"_next",n_arg:"__iced_next_arg",defer_method:"defer",slot:"__slot",assign_fn:"assign_fn",autocb:"autocb",retslot:"ret",trace:"__iced_trace",passed_deferral:"__iced_passed_deferral",findDeferral:"findDeferral",lineno:"lineno",parent:"parent",filename:"filename",funcname:"funcname",catchExceptions:"catchExceptions",runtime_modes:["node","inline","window","none"],trampoline:"trampoline"},e.makeDeferReturn=function(t,i,s,o,a){var c,u,l,h;l={};for(c in o)h=o[c],l[c]=h;return l[r.lineno]=null!=i?i[r.lineno]:void 0,u=function(){var r,o,c;return r=arguments.length>=1?n.call(arguments,0):[],null!=i&&null!=(c=i.assign_fn)&&c.apply(null,r),t?(o=t,a||(t=null),o._fulfill(s,l)):e._warn("overused deferral at "+e._trace_to_string(l))},u[r.trace]=l,u},e.__c=0,e.tickCounter=function(t){return e.__c++,0===e.__c%t?(e.__c=0,!0):!1},e.__active_trace=null,e._trace_to_string=function(e){var t;return t=e[r.funcname]||"<anonymous>",""+t+" ("+e[r.filename]+":"+(e[r.lineno]+1)+")"},e._warn=function(e){return"undefined"!=typeof console&&null!==console?console.log("ICED warning: "+e):void 0},i.trampoline=function(t){return e.tickCounter(500)?"undefined"!=typeof process&&null!==process?process.nextTick(t):setTimeout(t):t()},i.Deferrals=s=function(){function t(e,t){this.trace=t,this.continuation=e,this.count=1,this.ret=null}return t.prototype._call=function(t){var n;return this.continuation?(e.__active_trace=t,n=this.continuation,this.continuation=null,n(this.ret)):e._warn("Entered dead await at "+e._trace_to_string(t))},t.prototype._fulfill=function(e,t){var n=this;return--this.count>0?void 0:i.trampoline(function(){return n._call(t)})},t.prototype.defer=function(t){var n;return this.count++,n=this,e.makeDeferReturn(n,t,null,this.trace)},t}(),i.findDeferral=c=function(e){var t,n,i;for(n=0,i=e.length;i>n;n++)if(t=e[n],null!=t?t[r.trace]:void 0)return t;return null},i.Rendezvous=o=function(){function t(){this.completed=[],this.waiters=[],this.defer_id=0,this[r.deferrals]=this}var n;return n=function(){function e(e,t,n){this.rv=e,this.id=t,this.multi=n}return e.prototype.defer=function(e){return this.rv._deferWithId(this.id,e,this.multi)},e}(),t.prototype.wait=function(e){var t;return this.completed.length?(t=this.completed.shift(),e(t)):this.waiters.push(e)},t.prototype.defer=function(e){var t;return t=this.defer_id++,this.deferWithId(t,e)},t.prototype.id=function(e,t){var i;return null==t&&(t=!1),i={},i[r.deferrals]=new n(this,e,t),i},t.prototype._fulfill=function(e){var t;return this.waiters.length?(t=this.waiters.shift(),t(e)):this.completed.push(e)},t.prototype._deferWithId=function(t,n,i){return this.count++,e.makeDeferReturn(this,n,t,{},i)},t}(),i.stackWalk=u=function(t){var n,i,s,o;for(i=[],s=t?t[r.trace]:e.__active_trace;s;)n="   at "+e._trace_to_string(s),i.push(n),s=null!=s?null!=(o=s[r.parent])?o[r.trace]:void 0:void 0;return i},i.exceptionHandler=a=function(e,t){var n;return t||(t=console.log),t(e.stack),n=u(),n.length?(t("Iced 'stack' trace (w/ real line numbers):"),t(n.join("\n"))):void 0},i.catchExceptions=function(e){return"undefined"!=typeof process&&null!==process?process.on("uncaughtException",function(t){return a(t,e),process.exit(1)}):void 0}},e.runtime={},t(this,e,e.runtime)}).call(this)},e["./iced"]}();"function"==typeof define&&define.amd?define(function(){return t.runtime}):e.iced=t.runtime})(this);