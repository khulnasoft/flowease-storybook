import{N as p}from"./Pagination-Wqk0hJkY.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./index-fxRCy6s1.js";import"./index-APieC4ix.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./style-vlcBzdj4.js";import"./icon-vJoYfTtu.js";import"./index--hMdiM4I.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index--U1-PwNl.js";import"./index-KZNKmCSO.js";import"./index-Cm4Tzdrc.js";import"./use-form-common-props-PVTz91X1.js";import"./typescript-WBLZcIum.js";import"./event-vOXeFsAk.js";import"./use-form-item-zLZL6zko.js";import"./error-zcWxX9t3.js";import"./index-hyb5vpE9.js";import"./index-jPag7Cdl.js";import"./index-qGKqiPQK.js";import"./isEqual-rSnqz3TO.js";import"./_baseIsEqual-mjNvBLgC.js";import"./_isIndex-oHkLUF1y.js";import"./debounce-1n8IgpOA.js";import"./index-0KGNbjaN.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const G={title:"Atoms/Pagination",component:p},g=(n,{argTypes:i})=>({setup:()=>({onUpdateCurrentPage:t=>{n.currentPage=t},onUpdatePageSize:t=>{n.pageSize=t},args:n}),props:Object.keys(i),components:{N8nPagination:p},template:`
        <n8n-pagination
            v-bind="args"
            v-model:current-page="args.currentPage"
            v-model:page-size="args.pageSize"
        />`}),e=g.bind({});e.args={currentPage:1,pagerCount:5,pageSize:10,total:100};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => {
    const onUpdateCurrentPage = (currentPage: number) => {
      args.currentPage = currentPage;
    };
    const onUpdatePageSize = (pageSize: number) => {
      args.pageSize = pageSize;
    };
    return {
      onUpdateCurrentPage,
      onUpdatePageSize,
      args
    };
  },
  props: Object.keys(argTypes),
  components: {
    N8nPagination
  },
  template: \`
        <n8n-pagination
            v-bind="args"
            v-model:current-page="args.currentPage"
            v-model:page-size="args.pageSize"
        />\`
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const H=["Pagination"];export{e as Pagination,H as __namedExportsOrder,G as default};
