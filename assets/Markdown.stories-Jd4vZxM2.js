import{N as a}from"./Markdown-JkTGOW0P.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Loading-ok9G2k9-.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./index-fxRCy6s1.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const f={title:"Atoms/Markdown",component:a,argTypes:{content:{control:{type:"text"}},loading:{control:{type:"boolean"}},loadingBlocks:{control:{type:"select"},options:[1,2,3,4,5]},loadingRows:{control:{type:"select"},options:[1,2,3,4,5]}}},i=(s,{argTypes:r})=>({setup:()=>({args:s}),props:Object.keys(r),components:{N8nMarkdown:a},template:'<n8n-markdown v-bind="args"></n8n-markdown>'}),n=i.bind({});n.args={content:`I wanted a system to monitor website content changes and notify me. So I made it using n8n.

Especially my competitor blogs. I wanted to know how often they are posting new articles. (I used their sitemap.xml file) (The below workflow may vary)

In the Below example, I used HackerNews for example.

Explanation:

- First HTTP Request node crawls the webpage and grabs the website source code
- Then wait for x minutes
- Again, HTTP Node crawls the webpage
- If Node compares both results are equal if anything is changed. It’ll go to the false branch and notify me in telegram.

**Workflow:**

![](fileId:1)

**Sample Response:**

![](https://community.n8n.io/uploads/default/original/2X/d/d21ba41d7ac9ff5cd8148fedb07d0f1ff53b2529.png)
`,loading:!1,images:[{id:1,url:"https://community.n8n.io/uploads/default/optimized/2X/b/b737a95de4dfe0825d50ca098171e9f33a459e74_2_690x288.png"}]};var e,o,t;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMarkdown
  },
  template: '<n8n-markdown v-bind="args"></n8n-markdown>'
})`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const u=["Markdown"];export{n as Markdown,u as __namedExportsOrder,f as default};
