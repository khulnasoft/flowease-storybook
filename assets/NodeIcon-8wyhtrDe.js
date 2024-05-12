import{h as I,e as l,o,a as s,b as N,k as r,v as m,y as k,p as i,n as a,u as c,G as t,F as $,s as v,q as z,m as w,C as T}from"./vue.esm-bundler-n0I0yAQQ.js";import{F as y}from"./Icon-Ou3r_BPx.js";import{N as q}from"./Tooltip-rhnnRv1s.js";import{_ as P}from"./_plugin-vue_export-helper-x3n3nnut.js";const _=["src"],B=["src"],u=I({__name:"NodeIcon",props:{type:{},src:{},name:{},nodeTypeName:{},size:{},disabled:{type:Boolean},circle:{type:Boolean},color:{},showTooltip:{type:Boolean},tooltipPosition:{default:"top"},badge:{}},setup(f){const n=f,g=l(()=>n.size?{color:n.color||"",width:`${n.size}px`,height:`${n.size}px`,"font-size":`${n.size}px`,"line-height":`${n.size}px`}:{color:n.color||""}),d=l(()=>{switch(n.size){case 40:return 18;case 24:return 10;case 18:default:return 8}}),p=l(()=>n.size?{"max-width":`${n.size}px`}:{}),b=l(()=>{const e=d.value;return{padding:`${Math.floor(e/4)}px`,right:`-${Math.floor(e/2)}px`,bottom:`-${Math.floor(e/2)}px`}});return(e,G)=>{const h=T("n8n-node-icon");return o(),s("div",w({class:"n8n-node-icon"},e.$attrs),[N("div",{class:a({[e.$style.nodeIconWrapper]:!0,[e.$style.circle]:e.circle,[e.$style.disabled]:e.disabled}),style:t(g.value)},[e.showTooltip?(o(),r(c(q),{key:0,placement:e.tooltipPosition,disabled:!e.showTooltip},{content:m(()=>[k(i(e.nodeTypeName),1)]),default:m(()=>[e.type!=="unknown"?(o(),s("div",{key:0,class:a(e.$style.icon)},[e.type==="file"?(o(),s("img",{key:0,src:e.src,class:a(e.$style.nodeIconImage)},null,10,_)):(o(),r(c(y),{key:1,icon:e.name,class:a(e.$style.iconFa),style:t(p.value)},null,8,["icon","class","style"]))],2)):(o(),s("div",{key:1,class:a(e.$style.nodeIconPlaceholder)},i(e.nodeTypeName?e.nodeTypeName.charAt(0):"?"),3))]),_:1},8,["placement","disabled"])):(o(),s($,{key:1},[e.type!=="unknown"?(o(),s("div",{key:0,class:a(e.$style.icon)},[e.type==="file"?(o(),s("img",{key:0,src:e.src,class:a(e.$style.nodeIconImage)},null,10,B)):(o(),r(c(y),{key:1,icon:e.name,style:t(p.value)},null,8,["icon","style"])),e.badge?(o(),s("div",{key:2,class:a(e.$style.badge),style:t(b.value)},[v(h,{type:e.badge.type,src:e.badge.src,size:d.value},null,8,["type","src","size"])],6)):z("",!0)],2)):(o(),s("div",{key:1,class:a(e.$style.nodeIconPlaceholder)},i(e.nodeTypeName?e.nodeTypeName.charAt(0):"?"),3))],64))],6)],16)}}}),C="_nodeIconWrapper_1x66i_1",F="_icon_1x66i_13",S="_nodeIconPlaceholder_1x66i_30",M="_nodeIconImage_1x66i_34",V="_badge_1x66i_40",D="_circle_1x66i_46",W="_disabled_1x66i_50",A={nodeIconWrapper:C,icon:F,nodeIconPlaceholder:S,nodeIconImage:M,badge:V,circle:D,disabled:W},E={$style:A},L=P(u,[["__cssModules",E]]);u.__docgenInfo={exportName:"default",displayName:"NodeIcon",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"union",elements:[{name:'"file"'},{name:'"icon"'},{name:'"unknown"'}]}},{name:"src",required:!1,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"}},{name:"nodeTypeName",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"number"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"circle",required:!1,type:{name:"boolean"}},{name:"color",required:!1,type:{name:"string"}},{name:"showTooltip",required:!1,type:{name:"boolean"}},{name:"tooltipPosition",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'top'"}},{name:"badge",required:!1,type:{name:"{ src: string; type: string }"}}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nNodeIcon/NodeIcon.vue"]};export{L as N};
