!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}({4:function(e,t,n){"use strict";n(5)},5:function(e,t){!function(t){!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=b.className,n=w._config.classPrefix||"";if(x&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?b.className.baseVal=t:b.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&i(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),s=w[r[0]];if(2==r.length&&(s=s[r[1]]),void 0!==s)return w;t="function"==typeof t?t():t,1==r.length?w[r[0]]=t:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),w._trigger(e,t)}return w}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,n,r,o){var i,a,u,l,f="modernizr",c=s("div"),d=function(){var e=t.body;return e||((e=s(x?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(u=s("div")).id=o?o[r]:f+(r+1),c.appendChild(u);return(i=s("style")).type="text/css",i.id="s"+f,(d.fake?d:c).appendChild(i),d.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),a=n(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=l,b.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+l(t[o])+":"+r+")");return a("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,i){function a(){f&&(delete k.style,delete k.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var l=c(e,o);if(!r(l,"undefined"))return l}for(var f,p,h,m,v,g=["modernizr","tspan","samp"];!k.style&&g.length;)f=!0,k.modElem=s(g.shift()),k.style=k.modElem.style;for(h=e.length,p=0;h>p;p++)if(m=e[p],v=k.style[m],u(m,"-")&&(m=d(m)),k.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"!=t||m;try{k.style[m]=o}catch(e){}if(k.style[m]!=v)return a(),"pfx"!=t||m}return a(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?p(a,t,o,i):function(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:r(o=t[e[i]],"function")?h(o,n||t):o;return!1}(a=(e+" "+N.join(s+" ")+s).split(" "),t,n)}function v(e,t,r){return m(e,n,n,t,r)}var g=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=y,w=new w;var S,C=[],b=t.documentElement,x="svg"===b.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),y._l={},y.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},y._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},w._q.push(function(){y.addTest=i}),w.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var _=y.testStyles=a;w.addTest("checked",function(){return _("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=s("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),w.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),w.addTest("dataset",function(){var e=s("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),w.addTest("details",function(){var e,t=s("details");return"open"in t&&(_("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e)}),w.addTest("fetch","fetch"in e);var T="Moz O ms Webkit",P=y._config.usePrefixes?T.split(" "):[];y._cssomPrefixes=P;var z={elem:s("modernizr")};w._q.push(function(){delete z.elem});var k={style:z.elem.style};w._q.unshift(function(){delete k.style});var N=y._config.usePrefixes?T.toLowerCase().split(" "):[];y._domPrefixes=N,y.testAllProps=m,y.testAllProps=v;var j="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;w.addTest("supports",j||A),w.addTest("csstransforms3d",function(){var e,t=!!v("perspective","1px",!0),n=w._config.usePrefixes;t&&(!n||"webkitPerspective"in b.style)&&(w.supports?e="@supports (perspective: 1px)":(e="@media (transform-3d)",n&&(e+=",(-webkit-transform-3d)")),_("#modernizr{width:0;height:0}"+(e+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(e){t=7===e.offsetWidth&&18===e.offsetHeight}));return t}),function(){var e,t,n,o,i,s;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],(t=g[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?w[s[0]]=o:(!w[s[0]]||w[s[0]]instanceof Boolean||(w[s[0]]=new Boolean(w[s[0]])),w[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}(),o(C),delete y.addTest,delete y.addAsyncTest;for(var E=0;E<w._q.length;E++)w._q[E]();e.Modernizr=w}(t,document),e.exports=t.Modernizr}(window)}}));