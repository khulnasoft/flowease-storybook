import{N as S,E as j}from"./MenuItem-CeFAVOIb.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./Tooltip-rhnnRv1s.js";import"./Button-myDuU5v7.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Spinner-inH2kUsv.js";import"./index-KZNKmCSO.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./index-APieC4ix.js";import"./style-vlcBzdj4.js";import"./index-fxRCy6s1.js";import"./index-ZggoHSuR.js";import"./icon-vJoYfTtu.js";import"./index-qGKqiPQK.js";import"./error-zcWxX9t3.js";import"./typescript-WBLZcIum.js";const U={title:"Atoms/MenuItem",component:S},e=(x,{argTypes:E})=>({setup:()=>({args:x}),props:Object.keys(E),components:{ElMenu:j,N8nMenuItem:S},template:`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    `}),n=e.bind({});n.args={item:{id:"workflows",icon:"heart",label:"Workflows"}};const t=e.bind({});t.args={item:{id:"workflows",icon:"heart",label:"Workflows",secondaryIcon:{name:"lock",size:"small"}}};const r=e.bind({});r.args={item:{id:"workflows",icon:"heart",label:"Workflows",secondaryIcon:{name:"lock",size:"small",tooltip:{content:"Locked secret",bindTo:"secondaryIcon"}}}};const s=e.bind({});s.args={item:{id:"compact",icon:"ice-cream",label:"Click here"},compact:!0};const o=e.bind({});o.args={item:{id:"website",icon:"globe",label:"Website",link:{href:"https://www.n8n.io",target:"_blank"}}};const a=e.bind({});a.args={item:{id:"help",icon:"question",label:"Help",children:[{icon:"info",label:"About n8n",id:"about"},{icon:"book",label:"Documentation",id:"docs"},{id:"quickstart",icon:"video",label:"Quickstart",link:{href:"https://www.youtube.com/watch?v=RpjQTGKm-ok",target:"_blank"}}]}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,w,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var h,v,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,T,f;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const V=["defaultMenuItem","withSecondaryIcon","withSecondaryIconTooltip","compact","link","withChildren"];export{V as __namedExportsOrder,s as compact,U as default,n as defaultMenuItem,o as link,a as withChildren,t as withSecondaryIcon,r as withSecondaryIconTooltip};
