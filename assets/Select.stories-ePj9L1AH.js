import{N as r,a as l}from"./Option-C6esXb-N.js";import{N as i}from"./Icon-Ou3r_BPx.js";import{a as m}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./index--U1-PwNl.js";import"./constants-qxKQHgGp.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-KZNKmCSO.js";import"./index-Cm4Tzdrc.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";import"./icon-vJoYfTtu.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./index-hyb5vpE9.js";import"./index-jPag7Cdl.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index--hMdiM4I.js";import"./index-qGKqiPQK.js";import"./isEqual-rSnqz3TO.js";import"./_baseIsEqual-mjNvBLgC.js";import"./_isIndex-oHkLUF1y.js";import"./debounce-1n8IgpOA.js";import"./index-0KGNbjaN.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Text-GPAezfYK.js";import"./v4-cyCr5FZV.js";const me={title:"Atoms/Select",component:r,argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"select"},options:["large","medium","small","mini"]},loading:{control:{type:"boolean"}},filterable:{control:{type:"boolean"}},defaultFirstOption:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},c={onUpdateModelValue:m("update:modelValue"),onChange:m("change")},k=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:'<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',data(){return{val:""}},methods:c}),s=k.bind({}),t=k.bind({});t.args={filterable:!0,defaultFirstOption:!0};const f=["large","medium","small","mini"].map(e=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" size="${e}"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),M=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:`<div class="multi-container">${f}</div>`,methods:c,data(){return{val:""}}}),o=M.bind({});o.args={type:"text",label:"text input:",placeholder:"placeholder..."};const U=["xlarge","large","medium","small","mini"].map(e=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" size="${e}"><n8n-icon icon="search" slot="prefix" /><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),W=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:`<div class="multi-container">${U}</div>`,methods:c,data(){return{val:""}}}),a=W.bind({});a.args={type:"text",label:"text input:",placeholder:"placeholder..."};const C=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:'<div style="width:100px;"><n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1" label="opt1 11 1111" /><n8n-option value="2" label="opt2 test very long ipsum"/></n8n-select></div>',data(){return{val:""}},methods:c}),p=C.bind({});p.args={type:"text",label:"text input:",placeholder:"placeholder..."};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,b,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,N,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: \`<div class="multi-container">\${selects}</div>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,S,T;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: \`<div class="multi-container">\${selectsWithIcon}</div>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,x,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<div style="width:100px;"><n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1" label="opt1 11 1111" /><n8n-option value="2" label="opt2 test very long ipsum"/></n8n-select></div>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const de=["Input","Filterable","Sizes","WithIcon","LimitedWidth"];export{t as Filterable,s as Input,p as LimitedWidth,o as Sizes,a as WithIcon,de as __namedExportsOrder,me as default};
