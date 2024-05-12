import{N as p}from"./Input-HlZKb6H5.js";import{N as U}from"./Icon-Ou3r_BPx.js";import{a as d}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./uid-abV8vSIz.js";import"./index-Cm4Tzdrc.js";import"./constants-qxKQHgGp.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";import"./icon-vJoYfTtu.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Text-GPAezfYK.js";import"./v4-cyCr5FZV.js";const X={title:"Atoms/Input",component:p,argTypes:{type:{control:"select",options:["text","textarea","number","password","email"]},placeholder:{control:"text"},disabled:{control:{type:"boolean"}},size:{control:"select",options:["xlarge","large","medium","small","mini"]}},parameters:{backgrounds:{default:"--color-background-light"}}},r={onUpdateModelValue:d("update:modelValue"),onFocus:d("focus"),onChange:d("change")},T=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />',data(){return{val:""}},methods:r}),o=T.bind({});o.args={placeholder:"placeholder..."};const I=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nInput:p},template:'<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',methods:r,data(){return{val:""}}}),a=I.bind({});a.args={type:"text",placeholder:"placeholder..."};const t=I.bind({});t.args={type:"textarea",placeholder:"placeholder..."};const k=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nIcon:U,N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="prefix" /></n8n-input>',data(){return{val:""}},methods:r}),s=k.bind({});s.args={placeholder:"placeholder..."};const z=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nIcon:U,N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="suffix" /></n8n-input>',data(){return{val:""}},methods:r}),l=z.bind({});l.args={placeholder:"placeholder..."};var u,c,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,g,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,V,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(f=(V=t.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIcon,
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="prefix" /></n8n-input>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var M,C,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIcon,
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="suffix" /></n8n-input>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Y=["Input","Text","TextArea","WithPrefixIcon","WithSuffixIcon"];export{o as Input,a as Text,t as TextArea,s as WithPrefixIcon,l as WithSuffixIcon,Y as __namedExportsOrder,X as default};
