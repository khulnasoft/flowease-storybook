import{N as r}from"./Popover-ix6gNF3d.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./index-KZNKmCSO.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./dropdown-l6khWKPA.js";import"./icon-vJoYfTtu.js";import"./index-fxRCy6s1.js";import"./style-vlcBzdj4.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const f={title:"Atoms/Popover",component:r,argTypes:{effect:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},disabled:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},a=(p,{argTypes:s})=>({setup:()=>({args:p}),props:Object.keys(s),components:{N8nPopover:r},template:`<n8n-popover v-bind="args">
            <div style="margin:50px; display: inline-block;">
                <span>yo</span>
            </div>
            <template #content>
                Popover
            </template>
        </n8n-popover>`}),o=a.bind({});o.args={content:"..."};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nPopover
  },
  template: \`<n8n-popover v-bind="args">
            <div style="margin:50px; display: inline-block;">
                <span>yo</span>
            </div>
            <template #content>
                Popover
            </template>
        </n8n-popover>\`
})`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const P=["Popover"];export{o as Popover,P as __namedExportsOrder,f as default};
