import{N as s}from"./NodeCreatorNode-ZyfxSLYl.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./useI18n-bvZy21or.js";import"./index-W0bHMUxF.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Tooltip-rhnnRv1s.js";import"./Button-myDuU5v7.js";import"./Spinner-inH2kUsv.js";import"./index-KZNKmCSO.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./index-jPag7Cdl.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./use-form-common-props-PVTz91X1.js";const G={title:"Modules/Node Creator Node",component:s},m=(o,{argTypes:n})=>({setup:()=>({args:o}),props:Object.keys(n),components:{N8nNodeCreatorNode:s},template:`
        <n8n-node-creator-node v-bind="args">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
        </n8n-node-creator-node>
    `}),e=m.bind({});e.args={title:"Node with title",tooltipHtml:"<b>Bold</b> tooltip",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vehicula ipsum, eu facilisis lacus. Aliquam commodo vel elit eget mollis. Quisque ac elit non purus iaculis placerat. Quisque fringilla ultrices nisi sed porta."};const d=(o,{argTypes:n})=>({setup:()=>({args:o}),props:Object.keys(n),components:{N8nNodeCreatorNode:s},data(){return{isPanelActive:!1}},template:`
        <n8n-node-creator-node v-bind="args" :isPanelActive="isPanelActive" @click.capture="isPanelActive = true">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
            <template #panel>
                <p style="width: 100%; height: 300px; background: white">Lorem ipsum dolor sit amet</p>
                <button @click="isPanelActive = false">Close</button>
            </template>
        </n8n-node-creator-node>
    `}),t=d.bind({});t.args={title:"Node with panel",isTrigger:!0};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNodeCreatorNode
  },
  template: \`
        <n8n-node-creator-node v-bind="args">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
        </n8n-node-creator-node>
    \`
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNodeCreatorNode
  },
  data() {
    return {
      isPanelActive: false
    };
  },
  template: \`
        <n8n-node-creator-node v-bind="args" :isPanelActive="isPanelActive" @click.capture="isPanelActive = true">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
            <template #panel>
                <p style="width: 100%; height: 300px; background: white">Lorem ipsum dolor sit amet</p>
                <button @click="isPanelActive = false">Close</button>
            </template>
        </n8n-node-creator-node>
    \`
})`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const V=["WithTitle","WithPanel"];export{t as WithPanel,e as WithTitle,V as __namedExportsOrder,G as default};
