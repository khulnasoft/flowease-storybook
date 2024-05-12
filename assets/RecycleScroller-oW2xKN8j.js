import{h as N,r as a,e as c,w as $,I as F,f as A,J as w,o as p,a as y,b as S,G as R,F as M,A as V,x as k}from"./vue.esm-bundler-n0I0yAQQ.js";const G={class:"post-list-container"},J=N({__name:"RecycleScroller",props:{itemSize:{},items:{},itemKey:{},offset:{default:2}},setup(x){const e=x,o=a(null),_=a(null),b=a(null),g=a({}),u=a(0),h=a(0),C=a(0),l=a({}),m=c(()=>e.items.reduce((t,n,s)=>{const r=n[e.itemKey],i=e.items[s-1],v=i?t[i[e.itemKey]]:0,E=i?l.value[i[e.itemKey]]:0;return t[r]=v+E,t},{})),I=c(()=>{const n=e.items.findIndex(s=>m.value[s[e.itemKey]]>=u.value)-1-e.offset;return n<0?0:n}),H=c(()=>{const t=e.items.findIndex(s=>{const r=m.value[s[e.itemKey]],i=l.value[s[e.itemKey]];return r+i>=u.value+h.value}),n=t+e.offset;return t===-1?e.items.length-1:n}),f=c(()=>e.items.slice(I.value,H.value+1));$(()=>f.value,(t,n)=>{const s=t.filter(r=>!n.find(i=>i[e.itemKey]===r[e.itemKey]));s.length>0&&d(s)});const P=c(()=>{const t=e.items[e.items.length-1],n=t?m.value[t[e.itemKey]]:0,s=t?l.value[t[e.itemKey]]:e.itemSize;return n+s}),T=c(()=>({height:`${P.value}px`})),L=c(()=>({transform:`translateY(${m.value[e.items[I.value][e.itemKey]]}px)`}));F(()=>{q()}),A(()=>{o.value&&(o.value.addEventListener("scroll",B),d(f.value)),window.addEventListener("resize",K),K()});function q(){e.items.forEach(t=>{l.value={...l.value,[t[e.itemKey]]:e.itemSize}})}function d(t){for(const n of t)z(n)}function z(t){w(()=>{const n=t[e.itemKey],s=g.value[n],r=l.value[n],i=s?s.offsetHeight:e.itemSize,v=i-r;l.value={...l.value,[t[e.itemKey]]:i},o.value&&u.value&&(o.value.scrollTop=o.value.scrollTop+v,u.value=o.value.scrollTop)})}function K(){o.value&&(h.value=o.value.offsetHeight,w(()=>{d(f.value)})),C.value=window.innerHeight}function B(){o.value&&(u.value=o.value.scrollTop)}return(t,n)=>(p(),y("div",{ref_key:"wrapperRef",ref:o,class:"recycle-scroller-wrapper"},[S("div",{ref_key:"scrollerRef",ref:_,class:"recycle-scroller",style:R(T.value)},[S("div",{ref_key:"itemsRef",ref:b,class:"recycle-scroller-items-wrapper",style:R(L.value)},[(p(!0),y(M,null,V(f.value,s=>(p(),y("div",{key:s[t.itemKey],ref_for:!0,ref:r=>g.value[s[t.itemKey]]=r,class:"recycle-scroller-item"},[k(t.$slots,"default",{item:s,updateItemSize:z})]))),128))],4)],4),S("div",G,[k(t.$slots,"postListContent")])],512))}});J.__docgenInfo={exportName:"default",displayName:"RecycleScroller",description:"",tags:{},props:[{name:"itemSize",required:!0,type:{name:"number"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}]}]}},{name:"itemKey",required:!0,type:{name:"string"}},{name:"offset",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"update-item-size",title:"binding"}]},{name:"postListContent"}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nRecycleScroller/RecycleScroller.vue"]};export{J as _};
