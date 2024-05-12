import{h as f,o as t,a as l,n as o,p as m,q as s,s as u,v as i,x as d,y as T,u as n,b as c,k as p}from"./vue.esm-bundler-n0I0yAQQ.js";import{N as h}from"./Button-myDuU5v7.js";import{N}from"./Heading-fuiXi-hY.js";import{N as y}from"./Text-GPAezfYK.js";import{N as b}from"./Callout-J0mi2clr.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";const B=["innerHTML"],_=["innerHTML"],g=f({name:"N8nActionBox",__name:"ActionBox",props:{emoji:{},heading:{},buttonText:{},buttonType:{},description:{},calloutText:{},calloutTheme:{default:"info"},calloutIcon:{}},setup(x){return(e,a)=>(t(),l("div",{class:o(["n8n-action-box",e.$style.container]),"data-test-id":"action-box"},[e.emoji?(t(),l("div",{key:0,class:o(e.$style.emoji)},m(e.emoji),3)):s("",!0),e.heading||e.$slots.heading?(t(),l("div",{key:1,class:o(e.$style.heading)},[u(n(N),{size:"xlarge",align:"center"},{default:i(()=>[d(e.$slots,"heading",{},()=>[T(m(e.heading),1)])]),_:3})],2)):s("",!0),c("div",{class:o(e.$style.description),onClick:a[0]||(a[0]=r=>e.$emit("descriptionClick",r))},[u(n(y),{color:"text-base"},{default:i(()=>[d(e.$slots,"description",{},()=>[c("span",{innerHTML:e.description},null,8,B)])]),_:3})],2),e.buttonText?(t(),p(n(h),{key:2,label:e.buttonText,type:e.buttonType,size:"large",onClick:a[1]||(a[1]=r=>e.$emit("click:button",r))},null,8,["label","type"])):s("",!0),e.calloutText?(t(),p(n(b),{key:3,theme:e.calloutTheme,icon:e.calloutIcon,class:o(e.$style.callout)},{default:i(()=>[u(n(y),{color:"text-base"},{default:i(()=>[c("span",{size:"small",innerHTML:e.calloutText},null,8,_)]),_:1})]),_:1},8,["theme","icon","class"])):s("",!0)],2))}}),$="_container_1o3wi_1",C="_emoji_1o3wi_16",q="_heading_1o3wi_20",w="_description_1o3wi_25",j="_callout_1o3wi_31",v={container:$,emoji:C,heading:q,description:w,callout:j},A={$style:v},S=k(g,[["__cssModules",A]]);g.__docgenInfo={name:"N8nActionBox",exportName:"default",displayName:"ActionBox",description:"",tags:{},props:[{name:"emoji",required:!0,type:{name:"string"}},{name:"heading",required:!0,type:{name:"string"}},{name:"buttonText",required:!0,type:{name:"string"}},{name:"buttonType",required:!0,type:{name:"ButtonType"}},{name:"description",required:!0,type:{name:"string"}},{name:"calloutText",required:!0,type:{name:"string"}},{name:"calloutTheme",required:!0,type:{name:"CalloutTheme"},defaultValue:{func:!1,value:"'info'"}},{name:"calloutIcon",required:!0,type:{name:"string"}}],events:[{name:"descriptionClick"},{name:"click:button"}],slots:[{name:"heading"},{name:"description"}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nActionBox/ActionBox.vue"]};export{S as N};
