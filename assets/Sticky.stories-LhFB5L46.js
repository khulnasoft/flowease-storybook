import{a as o}from"./chunk-MZXVCX43-fTyKz7tv.js";import{S as i}from"./Sticky-TH7d9jDF.js";import"./v4-cyCr5FZV.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Input-HlZKb6H5.js";import"./uid-abV8vSIz.js";import"./index-Cm4Tzdrc.js";import"./constants-qxKQHgGp.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";import"./icon-vJoYfTtu.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Markdown-JkTGOW0P.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Loading-ok9G2k9-.js";import"./ResizeWrapper-9uHQnl_D.js";import"./Text-GPAezfYK.js";import"./useI18n-bvZy21or.js";import"./index-W0bHMUxF.js";const W={title:"Atoms/Sticky",component:i,argTypes:{content:{control:{control:"text"}},height:{control:{control:"number"}},minHeight:{control:{control:"number"}},minWidth:{control:{control:"number"}},readOnly:{control:{control:"Boolean"}},width:{control:{control:"number"}}}},p={onInput:o("update:modelValue"),onResize:o("resize"),onResizeEnd:o("resizeend"),onResizeStart:o("resizestart")},c=(s,{argTypes:m})=>({setup:()=>({args:s}),props:Object.keys(m),components:{N8nSticky:i},template:'<n8n-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-sticky>',methods:p}),t=c.bind({});t.args={height:160,width:150,content:`## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)`,defaultText:`## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)`,minHeight:80,minWidth:150,readOnly:!1};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSticky
  },
  template: '<n8n-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-sticky>',
  methods
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const A=["Sticky"];export{t as Sticky,A as __namedExportsOrder,W as default};
