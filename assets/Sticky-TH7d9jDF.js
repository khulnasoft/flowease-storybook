import{h as B,r as h,e as i,w as T,o as k,a as g,s as r,v as w,M as v,N as z,b as m,u,n as d,D as s,R as D,q as I,G as K}from"./vue.esm-bundler-n0I0yAQQ.js";import{N as O}from"./Input-HlZKb6H5.js";import{N as E}from"./Markdown-JkTGOW0P.js";import{R as F}from"./ResizeWrapper-9uHQnl_D.js";import{N as L}from"./Text-GPAezfYK.js";import{u as U}from"./useI18n-bvZy21or.js";import{_ as G}from"./_plugin-vue_export-helper-x3n3nnut.js";const P=["innerHTML"],b=B({__name:"Sticky",props:{modelValue:{},height:{default:180},width:{default:240},minHeight:{default:80},minWidth:{default:150},scale:{default:1},gridSize:{default:20},id:{default:"0"},defaultText:{},editMode:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},backgroundColor:{default:1}},emits:["edit","update:modelValue","markdown-click","resize","resizestart","resizeend"],setup(q,{emit:V}){const t=q,l=V,{t:_}=U(),n=h(!1),o=h(void 0),f=i(()=>t.height<t.minHeight?t.minHeight:t.height),c=i(()=>t.width<t.minWidth?t.minWidth:t.width),M=i(()=>({height:`${f.value}px`,width:`${c.value}px`})),p=i(()=>f.value>100&&c.value>155);T(()=>t.editMode,(e,a)=>{setTimeout(()=>{e&&!a&&o.value&&(t.defaultText===t.modelValue&&o.value.select(),o.value.focus())},100)});const S=()=>{t.readOnly||l("edit",!0)},y=()=>{n.value||l("edit",!1)},N=e=>{l("update:modelValue",e)},C=(e,a)=>{l("markdown-click",e,a)},R=e=>{l("resize",e)},$=()=>{n.value=!0,l("resizestart")},H=e=>{n.value=!1,l("resizeend",e)},W=e=>{!e.ctrlKey&&!e.metaKey&&e.stopPropagation()};return(e,a)=>(k(),g("div",{class:d({"n8n-sticky":!0,[e.$style.sticky]:!0,[e.$style.clickable]:!n.value,[e.$style[`color-${e.backgroundColor}`]]:!0}),style:K(M.value),onKeydown:a[4]||(a[4]=s(()=>{},["prevent"]))},[r(F,{"is-resizing-enabled":!e.readOnly,height:e.height,width:e.width,"min-height":e.minHeight,"min-width":e.minWidth,scale:e.scale,"grid-size":e.gridSize,onResizeend:H,onResize:R,onResizestart:$},{default:w(()=>[v(m("div",{class:d(e.$style.wrapper),onDblclick:s(S,["stop"])},[r(u(E),{theme:"sticky",content:e.modelValue,"with-multi-breaks":!0,onMarkdownClick:C},null,8,["content"])],34),[[z,!e.editMode]]),v(m("div",{class:d({"full-height":!p.value,"sticky-textarea":!0}),onClick:a[0]||(a[0]=s(()=>{},["stop"])),onMousedown:a[1]||(a[1]=s(()=>{},["stop"])),onMouseup:a[2]||(a[2]=s(()=>{},["stop"])),onKeydown:[D(y,["esc"]),a[3]||(a[3]=s(()=>{},["stop"]))]},[r(u(O),{ref_key:"input",ref:o,"model-value":e.modelValue,type:"textarea",rows:5,onBlur:y,"onUpdate:modelValue":N,onWheel:W},null,8,["model-value"])],34),[[z,e.editMode]]),e.editMode&&p.value?(k(),g("div",{key:0,class:d(e.$style.footer)},[r(u(L),{size:"xsmall",align:"right"},{default:w(()=>[m("span",{innerHTML:u(_)("sticky.markdownHint")},null,8,P)]),_:1})],2)):I("",!0)]),_:1},8,["is-resizing-enabled","height","width","min-height","min-width","scale","grid-size"])],38))}}),j="_sticky_1iqd8_1",A="_wrapper_1iqd8_7",J="_clickable_1iqd8_12",Q="_footer_1iqd8_33",X={sticky:j,wrapper:A,clickable:J,footer:Q,"color-2":"_color-2_1iqd8_39","color-3":"_color-3_1iqd8_44","color-4":"_color-4_1iqd8_49","color-5":"_color-5_1iqd8_54","color-6":"_color-6_1iqd8_59","color-7":"_color-7_1iqd8_64"},Y={$style:X},ne=G(b,[["__cssModules",Y]]);b.__docgenInfo={exportName:"default",displayName:"Sticky",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"height",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"180"}},{name:"width",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"240"}},{name:"minHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"80"}},{name:"minWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"150"}},{name:"scale",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"gridSize",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'0'"}},{name:"defaultText",required:!1,type:{name:"string"}},{name:"editMode",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"backgroundColor",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"1"}}],events:[{name:"edit",type:{names:["boolean"]}},{name:"update:modelValue",type:{names:["string"]}},{name:"markdown-click",type:{names:["string"]}},{name:"resize",type:{names:["ResizeData"]}},{name:"resizestart"},{name:"resizeend",type:{names:["unknown"]}}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nSticky/Sticky.vue"]};export{ne as S};
