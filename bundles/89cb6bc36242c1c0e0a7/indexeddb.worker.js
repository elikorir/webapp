(()=>{"use strict";var e,r,t={"./src/workers/indexeddb.worker.ts":(e,r,t)=>{var o=t("./node_modules/matrix-js-sdk/src/indexeddb-worker.ts");const s=self,n=new o.h(s.postMessage);s.onmessage=n.onMessage}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e].call(n.exports,n,n.exports,s),n.exports}s.m=t,s.x=()=>{var e=s.O(void 0,[5813,7739],(()=>s("./src/workers/indexeddb.worker.ts")));return e=s.O(e)},e=[],s.O=(r,t,o,n)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,o,n]=e[l],a=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((e=>s.O[e](t[c])))?t.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(l--,1);var p=o();void 0!==p&&(r=p)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,o,n]},s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>"bundles/"+s.h()+"/"+e+".js",s.miniCssF=e=>{},s.h=()=>"89cb6bc36242c1c0e0a7",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../../"})(),(()=>{var e={3444:1};s.f.i=(r,t)=>{e[r]||importScripts(s.p+s.u(r))};var r=self.webpackChunkelement_web=self.webpackChunkelement_web||[],t=r.push.bind(r);r.push=r=>{var[o,n,i]=r;for(var a in n)s.o(n,a)&&(s.m[a]=n[a]);for(i&&i(s);o.length;)e[o.pop()]=1;t(r)}})(),r=s.x,s.x=()=>Promise.all([s.e(5813),s.e(7739)]).then(r);s.x()})();
//# sourceMappingURL=indexeddb.worker.js.map