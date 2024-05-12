import{N as n}from"./UsersList-HhVEsUp3.js";import{a as i}from"./chunk-MZXVCX43-fTyKz7tv.js";import"./vue.esm-bundler-n0I0yAQQ.js";import"./ActionToggle-zDmAoS2J.js";import"./Icon-Ou3r_BPx.js";import"./Text-GPAezfYK.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-syfZFuyu.js";import"./index-LecAAOWJ.js";import"./index-APieC4ix.js";import"./plugin-vue_export-helper--E4ECpVB.js";import"./constants-qxKQHgGp.js";import"./style-vlcBzdj4.js";import"./index-qGKqiPQK.js";import"./index--hMdiM4I.js";import"./get-UmNIKtpA.js";import"./_baseGet-s9jfY1e3.js";import"./index-KZNKmCSO.js";import"./use-form-common-props-PVTz91X1.js";import"./_baseSet-UMouSmrt.js";import"./_baseAssignValue-t1jS-cce.js";import"./_isIndex-oHkLUF1y.js";import"./use-form-item-zLZL6zko.js";import"./index-fxRCy6s1.js";import"./icon-vJoYfTtu.js";import"./index-ZggoHSuR.js";import"./index-hyb5vpE9.js";import"./error-zcWxX9t3.js";import"./dropdown-l6khWKPA.js";import"./Badge-TEzH96hG.js";import"./UserInfo-tm1-PBoj.js";import"./Avatar-9WaWaZZz.js";import"./useI18n-bvZy21or.js";import"./index-W0bHMUxF.js";import"./v4-cyCr5FZV.js";const H={title:"Modules/UsersList",component:n,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},m={onReinvite:i("reinvite"),onDelete:i("delete")},p=(t,{argTypes:a})=>({setup:()=>({args:t}),props:Object.keys(a),components:{N8nUsersList:n},template:'<n8n-users-list v-bind="args" :actions="actions" @reinvite="onReinvite" @delete="onDelete" />',methods:m}),e=p.bind({});e.args={actions:[{label:"Resend Invite",value:"reinvite",guard:t=>!t.firstName},{label:"Delete User",value:"delete"}],users:[{id:"1",firstName:"Sunny",lastName:"Side",fullName:"Sunny Side",email:"sunny@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!0,signInType:"email",disabled:!1},{id:"2",firstName:"Kobi",lastName:"Dog",fullName:"Kobi Dog",email:"kobi@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!1,signInType:"ldap",disabled:!0},{id:"3",email:"invited@n8n.io",isDefaultUser:!1,isPendingUser:!0,isOwner:!1}],currentUserId:"1"};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUsersList
  },
  template: '<n8n-users-list v-bind="args" :actions="actions" @reinvite="onReinvite" @delete="onDelete" />',
  methods
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const J=["UsersList"];export{e as UsersList,J as __namedExportsOrder,H as default};
