(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[122],{1048:function(e,t,r){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,r){return t(r),r(e,t)}var t=/[a-z_]/,r=/[A-Z]/,n=/[0-9]/,i=/[0-9A-Fa-f]/,u=/[0-7]/,a=/[a-z_A-Z0-9\']/,f=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/,o=/[(),;[\]`{}]/,l=/[ \t\v\f]/;function s(){return function(h,p){if(h.eatWhile(l))return null;var m=h.next();if(o.test(m)){if("{"==m&&h.eat("-")){var v="comment";return h.eat("#")&&(v="meta"),e(h,p,function e(t,r){return 0==r?s():function(n,i){for(var u=r;!n.eol();){var a=n.next();if("{"==a&&n.eat("-"))++u;else if("-"==a&&n.eat("}")&&0==--u)return i(s()),t}return i(e(t,u)),t}}(v,1))}return null}if("'"==m)return h.eat("\\"),h.next(),h.eat("'")?"string":"error";if('"'==m)return e(h,p,c);if(r.test(m))return h.eatWhile(a),h.eat(".")?"qualifier":"variable-2";if(t.test(m)){var x=1===h.pos;return h.eatWhile(a),x?"type":"variable"}if(n.test(m)){if("0"==m){if(h.eat(/[xX]/))return h.eatWhile(i),"integer";if(h.eat(/[oO]/))return h.eatWhile(u),"number"}return h.eatWhile(n),v="number",h.eat(".")&&(v="number",h.eatWhile(n)),h.eat(/[eE]/)&&(v="number",h.eat(/[-+]/),h.eatWhile(n)),v}return f.test(m)?"-"==m&&h.eat(/-/)&&(h.eatWhile(/-/),!h.eat(f))?(h.skipToEnd(),"comment"):(h.eatWhile(f),"builtin"):"error"}}function c(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(s()),"string";if("\\"==r){if(e.eol()||e.eat(l))return t(h),"string";e.eat("&")||e.next()}}return t(s()),"error"}function h(t,r){return t.eat("\\")?e(t,r,c):(t.next(),r(s()),"error")}var p=function(){for(var e={},t=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"],r=t.length;r--;)e[t[r]]="keyword";return e}();return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return p.hasOwnProperty(n)?p[n]:r}}})),e.defineMIME("text/x-elm","elm")}(r(102))}}]);