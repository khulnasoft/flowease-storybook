import{N as n}from"./ActionToggle-zDmAoS2J.js";import{a as s}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-syfZFuyu.js";import"./index-LecAAOWJ.js";import"./index-APieC4ix.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./style-vlcBzdj4.js";import"./index-qGKqiPQK.js";import"./index--hMdiM4I.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index-KZNKmCSO.js";import"./use-form-common-props-PVTz91X1.js";import"./_baseSet-UMouSmrt.js";import"./_baseAssignValue-t1jS-cce.js";import"./_isIndex-oHkLUF1y.js";import"./use-form-item-zLZL6zko.js";import"./index-fxRCy6s1.js";import"./icon-vJoYfTtu.js";import"./index-ZggoHSuR.js";import"./index-hyb5vpE9.js";import"./error-zcWxX9t3.js";import"./dropdown-l6khWKPA.js";import"./v4-cyCr5FZV.js";const I={title:"Atoms/ActionToggle",component:n,argTypes:{placement:{type:"select",options:["top","top-end","top-start","bottom","bottom-end","bottom-start"]},size:{type:"select",options:["mini","small","medium"]}},parameters:{backgrounds:{default:"--color-background-light"}}},m={onAction:s("action")},a=(r,{argTypes:p})=>({setup:()=>({args:r}),props:Object.keys(p),components:{N8nActionToggle:n},template:`<div style="height:300px; width:300px; display:flex; align-items:center; justify-content:center">
            <n8n-action-toggle v-bind="args" @action="onAction" />
        </div>`,methods:m}),t=a.bind({});t.args={actions:[{label:"Go",value:"go"},{label:"Stop",value:"stop"}]};var o,e,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionToggle
  },
  template: \`<div style="height:300px; width:300px; display:flex; align-items:center; justify-content:center">
            <n8n-action-toggle v-bind="args" @action="onAction" />
        </div>\`,
  methods
})`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const J=["ActionToggle"];export{t as ActionToggle,J as __namedExportsOrder,I as default};
