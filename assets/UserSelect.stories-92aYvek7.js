import{N as s}from"./UserSelect-SSsvg2JE.js";import{a as o}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./UserInfo-tm1-PBoj.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Avatar-9WaWaZZz.js";import"./Badge-TEzH96hG.js";import"./useI18n-bvZy21or.js";import"./index-W0bHMUxF.js";import"./Option-C6esXb-N.js";import"./index--U1-PwNl.js";import"./constants-qxKQHgGp.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-KZNKmCSO.js";import"./index-Cm4Tzdrc.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";import"./icon-vJoYfTtu.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./index-hyb5vpE9.js";import"./index-jPag7Cdl.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index--hMdiM4I.js";import"./index-qGKqiPQK.js";import"./isEqual-rSnqz3TO.js";import"./_baseIsEqual-mjNvBLgC.js";import"./_isIndex-oHkLUF1y.js";import"./debounce-1n8IgpOA.js";import"./index-0KGNbjaN.js";import"./v4-cyCr5FZV.js";const R={title:"Modules/UserSelect",component:s,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},p={onChange:o("change"),onBlur:o("blur"),onFocus:o("focus")},a=(i,{argTypes:m})=>({setup:()=>({args:i}),props:Object.keys(m),components:{N8nUserSelect:s},template:'<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',methods:p,data(){return{val:""}}}),r=a.bind({});r.args={users:[{id:"1",firstName:"Sunny",lastName:"Side",email:"sunny@n8n.io"},{id:"2",firstName:"Kobi",lastName:"Dog",email:"kobi@n8n.io"},{id:"3",email:"invited@n8n.io"}],placeholder:"Select user to transfer to",currentUserId:"1"};var e,t,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUserSelect
  },
  template: '<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const V=["UserSelect"];export{r as UserSelect,V as __namedExportsOrder,R as default};
