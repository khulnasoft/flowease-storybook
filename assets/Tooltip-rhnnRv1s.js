import{h as d,o as t,k as s,v as o,x as a,b as m,a as l,F as y,A as N,n as b,G as g,q as _,m as r,C as p}from"./vue.esm-bundler-n0I0yAQQ.js";import{N as v}from"./Button-myDuU5v7.js";import{E as u}from"./index-KZNKmCSO.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";const i=d({name:"N8nTooltip",components:{ElTooltip:u,N8nButton:v},inheritAttrs:!1,props:{...u.props,content:{type:String,default:""},justifyButtons:{type:String,default:"flex-end",validator:e=>["flex-start","flex-end","start","end","left","right","center","space-between","space-around","space-evenly"].includes(e)},buttons:{type:Array,default:()=>[]}}}),$="_buttons_1xwjb_1",k={buttons:$},T=["innerHTML"];function h(e,w,j,E,V,M){const c=p("N8nButton"),f=p("ElTooltip");return t(),s(f,r({...e.$props,...e.$attrs},{"popper-class":e.$props.popperClass??"n8n-tooltip"}),{content:o(()=>[a(e.$slots,"content",{},()=>[m("div",{innerHTML:e.content},null,8,T)]),e.buttons.length?(t(),l("div",{key:0,class:b(e.$style.buttons),style:g({justifyContent:e.justifyButtons})},[(t(!0),l(y,null,N(e.buttons,n=>(t(),s(c,r({key:n.attrs.label},{...n.attrs,...n.listeners}),null,16))),128))],6)):_("",!0)]),default:o(()=>[a(e.$slots,"default")]),_:3},16,["popper-class"])}const C={$style:k},L=B(i,[["render",h],["__cssModules",C]]);i.__docgenInfo={displayName:"N8nTooltip",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"justifyButtons",type:{name:"string"},defaultValue:{func:!1,value:"'flex-end'"},values:["flex-start","flex-end","start","end","left","right","center","space-between","space-around","space-evenly"]},{name:"buttons",type:{name:"IN8nButton[]"},defaultValue:{func:!0,value:"() => []"}}],slots:[{name:"default"},{name:"content"}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nTooltip/Tooltip.vue"]};export{L as N};
