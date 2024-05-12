import{N as e}from"./FormInput-ZCW-tEyI.js";import{a as t}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Input-HlZKb6H5.js";import"./uid-abV8vSIz.js";import"./index-Cm4Tzdrc.js";import"./constants-qxKQHgGp.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";import"./icon-vJoYfTtu.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Option-C6esXb-N.js";import"./index--U1-PwNl.js";import"./index-KZNKmCSO.js";import"./index-hyb5vpE9.js";import"./index-jPag7Cdl.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index--hMdiM4I.js";import"./index-qGKqiPQK.js";import"./isEqual-rSnqz3TO.js";import"./_baseIsEqual-mjNvBLgC.js";import"./_isIndex-oHkLUF1y.js";import"./debounce-1n8IgpOA.js";import"./index-0KGNbjaN.js";import"./InputLabel-1asJLeWN.js";import"./Text-GPAezfYK.js";import"./Icon-Ou3r_BPx.js";import"./Tooltip-rhnnRv1s.js";import"./Button-myDuU5v7.js";import"./Spinner-inH2kUsv.js";import"./Checkbox-SO13JOnK.js";import"./_basePickBy-vHdMX3d5.js";import"./_baseSet-UMouSmrt.js";import"./_baseAssignValue-t1jS-cce.js";import"./hasIn-7-458-F2.js";import"./index-W0bHMUxF.js";import"./v4-cyCr5FZV.js";const to={title:"Modules/FormInput",component:e,argTypes:{}},i={onUpdateModelValue:t("update:modelValue"),onFocus:t("focus"),onChange:t("change")},s=(n,{argTypes:a})=>({setup:()=>({args:n}),props:Object.keys(a),components:{N8nFormInput:e},template:`
        <n8n-form-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />
    `,methods:i,data(){return{val:""}}}),o=s.bind({});o.args={label:"Label",placeholder:"placeholder"};var r,p,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nFormInput
  },
  template: \`
        <n8n-form-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />
    \`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ro=["FormInput"];export{o as FormInput,ro as __namedExportsOrder,to as default};
