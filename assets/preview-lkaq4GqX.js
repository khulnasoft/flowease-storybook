function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-15_a_HmF.js","./iframe-ndssx1mh.js","./index-QMPuPEJv.js","./_baseIsEqual-mjNvBLgC.js","./_baseGet-s9jfY1e3.js","./_isIndex-oHkLUF1y.js","./_baseSet-UMouSmrt.js","./_baseAssignValue-t1jS-cce.js","./_commonjsHelpers-4gQjN7DL.js","./index-ogXoivrg.js","./_baseForOwn-VNv0ZOum.js","./get-UmNIKtpA.js","./hasIn-7-458-F2.js","./_basePickBy-vHdMX3d5.js","./index-3llc3FZd.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-ndssx1mh.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-15_a_HmF.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
