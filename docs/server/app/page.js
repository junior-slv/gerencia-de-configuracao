(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3878:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>u});var s=r(3137),a=r(4647),i=r(4183),n=r.n(i),l=r(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=s.AppPageRouteModule,u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4165)),"C:\\Users\\Junior\\Documents\\Projetos\\gerencia-de-configuracao\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9958)),"C:\\Users\\Junior\\Documents\\Projetos\\gerencia-de-configuracao\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\Junior\\Documents\\Projetos\\gerencia-de-configuracao\\app\\page.tsx"],d="/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},8386:(e,t,r)=>{Promise.resolve().then(r.bind(r,548))},548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(80),a=r(9885),i=r(3258);let n=i.Z.create({baseURL:"https://economia.awesomeapi.com.br/"}),l=[{key:"BRL",label:"Real"},{key:"USD",label:"D\xf3lar"},{key:"EUR",label:"Euro"},{key:"BTC",label:"Bitcoin"}],o=()=>{let[e,t]=(0,a.useState)("BRL"),[r,i]=(0,a.useState)("USD"),[o,c]=(0,a.useState)(null),[u,p]=(0,a.useState)(0),[d,x]=(0,a.useState)(!0),m=(0,a.useCallback)(e=>{let t=parseInt(e.currentTarget.value);p(t)},[]);(0,a.useEffect)(()=>{x(!0),(async(e,t)=>{let r=await n.get(`/last/${e}-${t}`);return Object.values(r.data)[0]})(e,r).then(e=>{c(e)}).catch(e=>{console.error("Error"+e)}).finally(()=>{x(!1)})},[e,r]);let h=(0,a.useMemo)(()=>{let e=parseFloat(o?.high||"0");return(e*u).toFixed(2)},[o,u]);return s.jsx("div",{className:"h-screen bg-gray-500 text-white flex items-center justify-center",children:(0,s.jsxs)("div",{className:"p-5 shadow-lg rounded-lg flex flex-col",children:[(0,s.jsxs)("div",{className:"",children:[s.jsx("p",{className:"text-lg",children:"Currency converter"}),s.jsx("i",{className:"bx bx-dollar"})]}),(0,s.jsxs)("div",{className:"main-screen-bottom flex flex-col",children:[(0,s.jsxs)("div",{className:"main-screen-bottom-left",children:[s.jsx("select",{className:"text-black bg-white",value:e,onChange:e=>{t(e.target.value)},children:l.filter(e=>r!==e.key).map(e=>(0,s.jsxs)("option",{value:e.key,children:[e.key," - ",e.label]},e.key))}),s.jsx("input",{onChange:m,className:"text-black",type:"number",placeholder:"1"})]}),s.jsx("div",{className:"",children:s.jsx("p",{children:s.jsx("i",{className:"bx bx-right-arrow-alt"})})}),(0,s.jsxs)("div",{className:"main-screen-bottom-right",children:[s.jsx("label",{htmlFor:"cars"}),s.jsx("select",{className:"text-black bg-white",value:r,onChange:e=>{i(e.target.value)},children:l.filter(t=>e!==t.key).map(e=>(0,s.jsxs)("option",{value:e.key,children:[e.key," - ",e.label]},e.key))}),s.jsx("input",{type:"number",readOnly:!0,className:"text-black",value:h})]})]})]})})};function c(){return s.jsx("main",{className:"flex items-center justify-center",children:s.jsx(o,{})})}},4165:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var s=r(7536);let a=(0,s.createProxy)(String.raw`C:\Users\Junior\Documents\Projetos\gerencia-de-configuracao\app\page.tsx`),{__esModule:i,$$typeof:n}=a,l=a.default,o=l},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6885);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[148,738,669],()=>r(3878));module.exports=s})();