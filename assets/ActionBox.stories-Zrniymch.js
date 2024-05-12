import{N as s}from"./ActionBox-i5To8807.js";import{a as c}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Button-myDuU5v7.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Spinner-inH2kUsv.js";import"./Heading-fuiXi-hY.js";import"./Callout-J0mi2clr.js";import"./v4-cyCr5FZV.js";const f={title:"Atoms/ActionBox",component:s,argTypes:{calloutTheme:{control:{type:"select"},options:["info","success","warning","danger","custom"]}},parameters:{backgrounds:{default:"--color-background-light"}}},a={onClick:c("click")},p=(i,{argTypes:r})=>({setup:()=>({args:i}),props:Object.keys(r),components:{N8nActionBox:s},template:'<n8n-action-box v-bind="args" @click="onClick" />',methods:a}),o=p.bind({});o.args={emoji:"😿",heading:"Headline you need to know",description:"Long description that you should know something is the way it is because of how it is. ",buttonText:"Do something"};var t,n,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionBox
  },
  template: '<n8n-action-box v-bind="args" @click="onClick" />',
  methods
})`,...(e=(n=o.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const B=["ActionBox"];export{o as ActionBox,B as __namedExportsOrder,f as default};
