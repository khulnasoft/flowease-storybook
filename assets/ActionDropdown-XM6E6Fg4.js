import{h as z,z as D,r as N,e as $,o as n,a as c,s as d,v as r,u as s,n as a,F as V,A as B,x as q,k as u,B as M,C as E,q as p,p as x,b as f,m as F}from"./vue.esm-bundler-n0I0yAQQ.js";import{N as P}from"./Icon-Ou3r_BPx.js";import{N as T}from"./N8nKeyboardShortcut-bZ9gzwqj.js";import{E as K,a as L,b as O}from"./index-syfZFuyu.js";import{_ as j}from"./_plugin-vue_export-helper-x3n3nnut.js";const G=["data-test-id"],_=z({__name:"ActionDropdown",props:{items:{},placement:{default:"bottom"},activatorIcon:{default:"ellipsis-h"},activatorSize:{default:"medium"},iconSize:{default:"medium"},trigger:{default:"click"},hideArrow:{type:Boolean,default:!1}},emits:["select","visibleChange"],setup(w,{expose:v,emit:h}){const y=w,C=D()["data-test-id"],o=M(),g=e=>({[o.itemContainer]:!0,[o.disabled]:!!e.disabled,[o.hasCustomStyling]:e.customClass!==void 0,...e.customClass!==void 0?{[e.customClass]:!0}:{}}),m=h,l=N(),k=$(()=>`${o.shadow}${y.hideArrow?` ${o.hideArrow}`:""}`),b=e=>m("select",e),A=e=>m("visibleChange",e),S=e=>{var i;(i=l.value)!=null&&i.handleClose&&e.relatedTarget===null&&l.value.handleClose()};return v({open:()=>{var e;return(e=l.value)==null?void 0:e.handleOpen()},close:()=>{var e;return(e=l.value)==null?void 0:e.handleClose()}}),(e,i)=>{const I=E("n8n-icon-button");return n(),c("div",{class:a(["action-dropdown-container",s(o).actionDropdownContainer])},[d(s(L),{ref_key:"elementDropdown",ref:l,placement:e.placement,trigger:e.trigger,"popper-class":k.value,onCommand:b,onVisibleChange:A},{dropdown:r(()=>[d(s(K),{class:a(s(o).userActionsMenu)},{default:r(()=>[(n(!0),c(V,null,B(e.items,t=>(n(),u(s(O),{key:t.id,command:t.id,disabled:t.disabled,divided:t.divided,class:a(s(o).elementItem)},{default:r(()=>[f("div",{class:a(g(t)),"data-test-id":`${s(C)}-item-${t.id}`},[t.icon?(n(),c("span",{key:0,class:a(s(o).icon)},[d(s(P),{icon:t.icon,size:e.iconSize},null,8,["icon","size"])],2)):p("",!0),f("span",{class:a(s(o).label)},x(t.label),3),t.shortcut?(n(),u(s(T),F({key:1},t.shortcut,{class:s(o).shortcut}),null,16,["class"])):p("",!0)],10,G)]),_:2},1032,["command","disabled","divided","class"]))),128))]),_:1},8,["class"])]),default:r(()=>[e.$slots.activator?q(e.$slots,"activator",{key:0}):(n(),u(I,{key:1,type:"tertiary",text:"",class:a(s(o).activator),size:e.activatorSize,icon:e.activatorIcon,onBlur:S},null,8,["class","size","icon"]))]),_:3},8,["placement","trigger","popper-class"])],2)}}}),H="_userActionsMenu_lwsuk_1",J="_elementItem_lwsuk_5",Q="_hideArrow_lwsuk_9",R="_shadow_lwsuk_13",U="_activator_lwsuk_17",W="_itemContainer_lwsuk_21",X="_disabled_lwsuk_30",Y="_shortcut_lwsuk_30",Z="_icon_lwsuk_34",ee="_hasCustomStyling_lwsuk_46",se={userActionsMenu:H,elementItem:J,hideArrow:Q,shadow:R,activator:U,itemContainer:W,disabled:X,shortcut:Y,icon:Z,hasCustomStyling:ee},oe={$style:se},ue=j(_,[["__cssModules",oe]]);_.__docgenInfo={exportName:"default",displayName:"ActionDropdown",description:"",tags:{},expose:[{name:"open"},{name:"close"}],props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"ActionDropdownItem"}]}},{name:"placement",required:!1,type:{name:"Placement"},defaultValue:{func:!1,value:"'bottom'"}},{name:"activatorIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'ellipsis-h'"}},{name:"activatorSize",required:!1,type:{name:"IconSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"iconSize",required:!1,type:{name:"IconSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"trigger",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'click'"}},{name:"hideArrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"select"},{name:"visibleChange"}],slots:[{name:"activator"}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nActionDropdown/ActionDropdown.vue"]};export{ue as N};
