import{N as i}from"./Tooltip-rhnnRv1s.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Button-myDuU5v7.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Spinner-inH2kUsv.js";import"./index-KZNKmCSO.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";const B={title:"Atoms/Tooltip",component:i,argTypes:{effect:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},disabled:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},l=(c,{argTypes:m})=>({setup:()=>({args:c}),props:Object.keys(m),components:{N8nTooltip:i},template:'<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'}),t=l.bind({});t.args={content:"..."};const o=l.bind({});o.args={content:"Hello world!",buttons:[{attrs:{label:"Button 1","data-test-id":"tooltip-button"},listeners:{onClick:()=>alert("Clicked 1")}},{attrs:{label:"Button 2","data-test-id":"tooltip-button"},listeners:{onClick:()=>alert("Clicked 2")}}]};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTooltip
  },
  template: '<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,p,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTooltip
  },
  template: '<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'
})`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const C=["Tooltip","TooltipWithButtons"];export{t as Tooltip,o as TooltipWithButtons,C as __namedExportsOrder,B as default};
