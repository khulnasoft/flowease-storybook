import{N as t}from"./CircleLoader-BJ_7wQNI.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const l={title:"Atoms/CircleLoader",component:t,argTypes:{radius:{control:{type:"number"}},progress:{control:{type:"number"}},strokeWidth:{control:{type:"number"}}}},p=(n,{argTypes:a})=>({setup:()=>({args:n}),props:Object.keys(a),components:{N8nCircleLoader:t},template:`
        <div>
            <n8n-circle-loader v-bind="args" />
        </div>
    `}),e=p.bind({});e.args={radius:20,progress:42,strokeWidth:10};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nCircleLoader
  },
  template: \`
        <div>
            <n8n-circle-loader v-bind="args" />
        </div>
    \`
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["defaultCircleLoader"];export{m as __namedExportsOrder,l as default,e as defaultCircleLoader};
