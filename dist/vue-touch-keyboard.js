/**
 * vue-touch-keyboard v0.2.1
 * https://github.com/icebob/vue-touch-keyboard
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTouchKeyboard=e():t.VueTouchKeyboard=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);t.exports={component:r,layouts:n(72),install:function(t){t.component("VueTouchKeyboard",r)}}},function(t,e,n){n(2);var r=n(3)(n(4),n(83),null,null);t.exports=r.exports},function(t,e){},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},c=typeof t["default"];"object"!==c&&"function"!==c||(o=t,i=t["default"]);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),u.computed=s}return{esModule:o,exports:i,options:u}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=r(o),c=n(72),u=r(c),s=n(73),a=r(s),f=n(82),l=r(f);e["default"]={props:{input:HTMLInputElement,layout:[String,Object],accept:Function,cancel:Function,change:Function,next:Function,options:{type:Object,"default":function(){return{}}}},data:function(){return{currentKeySet:"default",inputScrollLeft:0}},computed:{keySet:function p(){var t=this.getLayout();if(t){var p=t[this.currentKeySet];if(p){var e=[],n=t._meta||{};return p.forEach(function(t){var r=[];t.split(" ").forEach(function(t){if((0,l["default"])(t))r.push(t);else if((0,a["default"])(t))if(t.length>2&&"{"==t[0]&&"}"==t[t.length-1]){var e=t.substring(1,t.length-1);n[e]?r.push(n[e]):console.warn("Missing named key from meta: "+e)}else""==t?r.push({placeholder:!0}):r.push({key:t,text:t})}),e.push(r)}),e}}}},watch:{layout:function(){console.log("Layout changed"),this.currentKeySet="default"}},methods:{getLayout:function(){return(0,a["default"])(this.layout)?u["default"][this.layout]:this.layout},changeKeySet:function(t){var e=this.getLayout();null!=e[t]&&(this.currentKeySet=t)},toggleKeySet:function(t){this.currentKeySet=this.currentKeySet==t?"default":t},getCaptionOfKey:function(t){return t.text||t.key||""},getClassesOfKey:function(t){if(t.placeholder)return"placeholder";var e="key "+(t.func||"")+" "+(t.classes||"");return t.keySet&&this.currentKeySet==t.keySet&&(e+=" activated"),e},getKeyStyle:function(t){if(t.width)return{flex:t.width}},supportsSelection:function(){return/text|password|search|tel|url/.test(this.input.type)},getCaret:function(){if(this.supportsSelection()){var t={start:this.input.selectionStart||0,end:this.input.selectionEnd||0};return t.end<t.start&&(t.end=t.start),t}var e=this.input.value;return{start:e.length,end:e.length}},backspace:function(t,e){return e=e.substring(0,t.start-1)+e.substring(t.start),t.start-=1,t.end=t.start,e},insertChar:function(t,e,n){return e=e.substr(0,t.start)+n.toString()+e.substr(t.start),t.start+=n.length,t.end=t.start,e},mousedown:function(){this.input&&(this.inputScrollLeft=this.input.scrollLeft)},clickKey:function(t){if(this.input){var e=this.getCaret(),n=this.input.value,r=null;if("object"==("undefined"==typeof t?"undefined":(0,i["default"])(t)))if(t.keySet)this.toggleKeySet(t.keySet);else if(t.func)switch(t.func){case"backspace":n=this.backspace(e,n);break;case"accept":return void(this.accept&&this.accept(n));case"cancel":return void(this.cancel&&this.cancel());case"next":return void(this.next&&this.next())}else r=t.key;else r=t;if(r){if(this.input.maxLength<=0||n.length<this.input.maxLength)if(this.options.useKbEvents){var o=document.createEvent("Event");o.initEvent("keypress",!0,!0),o.which=o.keyCode=r.charCodeAt(),this.input.dispatchEvent(o)&&(n=this.insertChar(e,n,r))}else n=this.insertChar(e,n,r);"shifted"==this.currentKeySet&&this.changeKeySet("default")}this.input.value=n,this.setFocusToInput(e),this.change&&this.change(n,r),this.input.maxLength>0&&n.length>=this.input.maxLength&&this.next&&this.next()}},setFocusToInput:function(t){this.input.focus(),t&&this.supportsSelection()&&(this.input.selectionStart=t.start,this.input.selectionEnd=t.end)}},mounted:function(){this.input&&this.setFocusToInput()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(6),i=r(o),c=n(57),u=r(c),s="function"==typeof u["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof u["default"]&&t.constructor===u["default"]&&t!==u["default"].prototype?"symbol":typeof t};e["default"]="function"==typeof u["default"]&&"symbol"===s(i["default"])?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof u["default"]&&t.constructor===u["default"]&&t!==u["default"].prototype?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e,n){t.exports={"default":n(7),__esModule:!0}},function(t,e,n){n(8),n(52),t.exports=n(56).f("iterator")},function(t,e,n){"use strict";var r=n(9)(!0);n(12)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(10),o=n(11);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),s=r(n),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):(i-55296<<10)+(c-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(13),o=n(14),i=n(29),c=n(19),u=n(30),s=n(31),a=n(32),f=n(48),l=n(50),p=n(49)("iterator"),h=!([].keys&&"next"in[].keys()),y="@@iterator",d="keys",v="values",b=function(){return this};t.exports=function(t,e,n,x,g,S,m){a(n,e,x);var O,k,w,j=function(t){if(!h&&t in P)return P[t];switch(t){case d:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",E=g==v,L=!1,P=t.prototype,T=P[p]||P[y]||g&&P[g],C=!h&&T||j(g),M=g?E?j("entries"):C:void 0,F="Array"==e?P.entries||T:T;if(F&&(w=l(F.call(new t)),w!==Object.prototype&&w.next&&(f(w,_,!0),r||u(w,p)||c(w,p,b))),E&&T&&T.name!==v&&(L=!0,C=function(){return T.call(this)}),r&&!m||!h&&!L&&P[p]||c(P,p,C),s[e]=C,s[_]=b,g)if(O={values:E?C:j(v),keys:S?C:j(d),entries:M},m)for(k in O)k in P||i(P,k,O[k]);else o(o.P+o.F*(h||L),e,O);return O}},function(t,e){t.exports=!0},function(t,e,n){var r=n(15),o=n(16),i=n(17),c=n(19),u="prototype",s=function(t,e,n){var a,f,l,p=t&s.F,h=t&s.G,y=t&s.S,d=t&s.P,v=t&s.B,b=t&s.W,x=h?o:o[e]||(o[e]={}),g=x[u],S=h?r:y?r[e]:(r[e]||{})[u];h&&(n=e);for(a in n)f=!p&&S&&void 0!==S[a],f&&a in x||(l=f?S[a]:n[a],x[a]=h&&"function"!=typeof S[a]?n[a]:v&&f?i(l,r):b&&S[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((x.virtual||(x.virtual={}))[a]=l,t&s.R&&g&&!g[a]&&c(g,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(20),o=n(28);t.exports=n(24)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(21),o=n(23),i=n(27),c=Object.defineProperty;e.f=n(24)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(24)&&!n(25)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(22),o=n(15).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(22);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(19)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(33),o=n(28),i=n(48),c={};n(19)(c,n(49)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(21),o=n(34),i=n(46),c=n(43)("IE_PROTO"),u=function(){},s="prototype",a=function(){var t,e=n(26)("iframe"),r=i.length,o="<",c=">";for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),a=t.F;r--;)delete a[s][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[s]=r(t),n=new u,u[s]=null,n[c]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(20),o=n(21),i=n(35);t.exports=n(24)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,s=0;u>s;)r.f(t,n=c[s++],e[n]);return t}},function(t,e,n){var r=n(36),o=n(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(30),o=n(37),i=n(40)(!1),c=n(43)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,a=[];for(n in u)n!=c&&r(u,n)&&a.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(38),o=n(11);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37),o=n(41),i=n(42);t.exports=function(t){return function(e,n,c){var u,s=r(e),a=o(s.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if(u=s[f++],u!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(44)("keys"),o=n(45);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(15),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(15).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(20).f,o=n(30),i=n(49)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(44)("wks"),o=n(45),i=n(15).Symbol,c="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};u.store=r},function(t,e,n){var r=n(30),o=n(51),i=n(43)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(53);for(var r=n(15),o=n(19),i=n(31),c=n(49)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}},function(t,e,n){"use strict";var r=n(54),o=n(55),i=n(31),c=n(37);t.exports=n(12)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(49)},function(t,e,n){t.exports={"default":n(58),__esModule:!0}},function(t,e,n){n(59),n(69),n(70),n(71),t.exports=n(16).Symbol},function(t,e,n){"use strict";var r=n(15),o=n(30),i=n(24),c=n(14),u=n(29),s=n(60).KEY,a=n(25),f=n(44),l=n(48),p=n(45),h=n(49),y=n(56),d=n(61),v=n(62),b=n(65),x=n(21),g=n(22),S=n(37),m=n(27),O=n(28),k=n(33),w=n(66),j=n(68),_=n(20),E=n(35),L=j.f,P=_.f,T=w.f,C=r.Symbol,M=r.JSON,F=M&&M.stringify,K="prototype",A=h("_hidden"),N=h("toPrimitive"),I={}.propertyIsEnumerable,R=f("symbol-registry"),V=f("symbols"),D=f("op-symbols"),G=Object[K],W="function"==typeof C,z=r.QObject,H=!z||!z[K]||!z[K].findChild,B=i&&a(function(){return 7!=k(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=L(G,e);r&&delete G[e],P(t,e,n),r&&t!==G&&P(G,e,r)}:P,J=function(t){var e=V[t]=k(C[K]);return e._k=t,e},U=W&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},Y=function(t,e,n){return t===G&&Y(D,e,n),x(t),e=m(e,!0),x(n),o(V,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=k(n,{enumerable:O(0,!1)})):(o(t,A)||P(t,A,O(1,{})),t[A][e]=!0),B(t,e,n)):P(t,e,n)},Q=function(t,e){x(t);for(var n,r=v(e=S(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?k(t):Q(k(t),e)},X=function(t){var e=I.call(this,t=m(t,!0));return!(this===G&&o(V,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(V,t)||o(this,A)&&this[A][t])||e)},Z=function(t,e){if(t=S(t),e=m(e,!0),t!==G||!o(V,e)||o(D,e)){var n=L(t,e);return!n||!o(V,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=T(S(t)),r=[],i=0;n.length>i;)o(V,e=n[i++])||e==A||e==s||r.push(e);return r},tt=function(t){for(var e,n=t===G,r=T(n?D:S(t)),i=[],c=0;r.length>c;)!o(V,e=r[c++])||n&&!o(G,e)||i.push(V[e]);return i};W||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(D,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),B(this,t,O(1,n))};return i&&H&&B(G,t,{configurable:!0,set:e}),J(t)},u(C[K],"toString",function(){return this._k}),j.f=Z,_.f=Y,n(67).f=w.f=$,n(64).f=X,n(63).f=tt,i&&!n(13)&&u(G,"propertyIsEnumerable",X,!0),y.f=function(t){return J(h(t))}),c(c.G+c.W+c.F*!W,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=E(h.store),ot=0;rt.length>ot;)d(rt[ot++]);c(c.S+c.F*!W,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=C(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),c(c.S+c.F*!W,"Object",{create:q,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),M&&c(c.S+c.F*(!W||a(function(){var t=C();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!U(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,F.apply(M,r)}}),C[K][N]||n(19)(C[K],N,C[K].valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(45)("meta"),o=n(22),i=n(30),c=n(20).f,u=0,s=Object.isExtensible||function(){return!0},a=!n(25)(function(){return s(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return a&&y.NEED&&s(t)&&!i(t,r)&&f(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(15),o=n(16),i=n(13),c=n(56),u=n(20).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:c.f(t)})}},function(t,e,n){var r=n(35),o=n(63),i=n(64);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var c,u=n(t),s=i.f,a=0;u.length>a;)s.call(t,c=u[a++])&&e.push(c);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(39);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(37),o=n(67).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?u(t):o(r(t))}},function(t,e,n){var r=n(36),o=n(46).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(64),o=n(28),i=n(37),c=n(27),u=n(30),s=n(23),a=Object.getOwnPropertyDescriptor;e.f=n(24)?a:function(t,e){if(t=i(t),e=c(e,!0),s)try{return a(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(61)("asyncIterator")},function(t,e,n){n(61)("observable")},function(t,e){"use strict";t.exports={normal:{_meta:{tab:{key:"\t",text:"Tab",width:60,classes:"control"},shiftl:{keySet:"shifted",text:"Shift",width:100,classes:"control"},shiftr:{keySet:"shifted",text:"Shift",width:100,classes:"control"},caps:{keySet:"capsed",text:"Caps lock",width:80,classes:"control"},space:{key:" ",text:"Space",width:180},enter:{key:"\r\n",text:"Enter",width:80,classes:"control"},backspace:{func:"backspace",classes:"control backspace",width:65},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"control featured"}},"default":["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{caps} a s d f g h j k l ; ' {enter}","{shiftl} z x c v b n m , . / {shiftr}","{next} {space} {accept}"],shifted:["~ ! @ # $ % ^ & * ( ) _ + {backspace}","{tab} Q W E R T Y U I O P { } |",'{caps} A S D F G H J K L : " {enter}',"{shiftl} Z X C V B N M < > ? {shiftr}","{next} {space} {accept}"],capsed:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Q W E R T Y U I O P [ ] \\","{caps} A S D F G H J K L ; ' {enter}","{shiftl} Z X C V B N M , . / {shiftr}","{next} {space} {accept}"]},compact:{_meta:{"default":{keySet:"default",text:"abc",classes:"control"},alpha:{keySet:"default",text:"Abc",classes:"control"},shift:{keySet:"shifted",text:"ABC",classes:"control"},numbers:{keySet:"numbers",text:"123",classes:"control"},space:{key:" ",text:"Space",width:200},backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"featured"},zero:{key:"0",width:130}},"default":["q w e r t y u i o p"," a s d f g h j k l ","{shift} z x c v b n m {backspace}","{numbers} , {space} . {next} {accept}"],shifted:["Q W E R T Y U I O P"," A S D F G H J K L ","{default} Z X C V B N M ","{numbers} _ {space} {backspace} {next} {accept}"],numbers:["1 2 3","4 5 6","7 8 9","  {alpha} . {zero} {backspace} {next} {accept}"]},numeric:{_meta:{backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"control featured"},zero:{key:"0",width:130}},"default":["1 2 3","4 5 6","7 8 9","_ - . {zero} {backspace} {next} {accept}"]}}},function(t,e,n){function r(t){return"string"==typeof t||!i(t)&&c(t)&&o(t)==u}var o=n(74),i=n(80),c=n(81),u="[object String]";t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?s:u:a&&a in Object(t)?i(t):c(t)}var o=n(75),i=n(78),c=n(79),u="[object Null]",s="[object Undefined]",a=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){var r=n(76),o=r.Symbol;t.exports=o},function(t,e,n){var r=n(77),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=c.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(o){}var i=u.call(t);return r&&(e?t[s]=n:delete t[s]),i}var o=n(75),i=Object.prototype,c=i.hasOwnProperty,u=i.toString,s=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-touch-keyboard"},[n("div",{staticClass:"keyboard"},t._l(t.keySet,function(e,r){return n("div",{key:"lindex",staticClass:"line"},t._l(e,function(e,r){return n("span",{key:"index","class":t.getClassesOfKey(e),style:t.getKeyStyle(e),domProps:{textContent:t._s(t.getCaptionOfKey(e))},on:{click:function(n){t.clickKey(e)},mousedown:t.mousedown}})}))}))])},staticRenderFns:[]}}])});