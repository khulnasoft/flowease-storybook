import{h as y,e as c,o,a as r,b as u,n as a,u as t,k as g,x as i,q as l,y as f,p,B as h}from"./vue.esm-bundler-n0I0yAQQ.js";import{N as b}from"./Icon-Ou3r_BPx.js";import{_ as v}from"./_plugin-vue_export-helper-x3n3nnut.js";const d=y({__name:"Alert",props:{title:{},type:{default:"info"},description:{},center:{type:Boolean},showIcon:{type:Boolean,default:!0},effect:{default:"light"},background:{type:Boolean,default:!0}},setup(_){const n=_,m=c(()=>{switch(n.type){case"success":return"check-circle";case"warning":return"exclamation-triangle";case"error":return"times-circle";default:return"info-circle"}}),s=h(),k=c(()=>{const e=["n8n-alert",s.alert];return n.type&&e.push(s[n.type]),n.effect&&e.push(s[n.effect]),n.center&&e.push(s.center),n.background&&e.push(s.background),e});return(e,H)=>(o(),r("div",{class:a(k.value),role:"alert"},[u("div",{class:a(t(s).content)},[e.showIcon||e.$slots.icon?(o(),r("span",{key:0,class:a(t(s).icon)},[e.showIcon?(o(),g(t(b),{key:0,icon:m.value},null,8,["icon"])):e.$slots.icon?i(e.$slots,"icon",{key:1}):l("",!0)],2)):l("",!0),u("div",{class:a(t(s).text)},[e.$slots.title||e.title?(o(),r("div",{key:0,class:a(t(s).title)},[i(e.$slots,"title",{},()=>[f(p(e.title),1)])],2)):l("",!0),e.$slots.default||e.description?(o(),r("div",{key:1,class:a({[t(s).description]:!0,[t(s).hasTitle]:e.$slots.title||e.title})},[i(e.$slots,"default",{},()=>[f(p(e.description),1)])],2)):l("",!0)],2)],2),e.$slots.aside?(o(),r("div",{key:0,class:a(t(s).aside)},[i(e.$slots,"aside")],2)):l("",!0)],2))}}),w="_alert_kpfss_115",N="_center_kpfss_124",$="_success_kpfss_127",B="_light_kpfss_127",q="_background_kpfss_130",V="_dark_kpfss_137",I="_info_kpfss_147",A="_warning_kpfss_167",C="_error_kpfss_187",T="_content_kpfss_208",M="_icon_kpfss_213",S="_text_kpfss_221",z="_title_kpfss_227",D="_description_kpfss_233",E="_hasTitle_kpfss_236",F="_aside_kpfss_240",j={alert:w,center:N,success:$,light:B,background:q,"el-alert__description":"_el-alert__description_kpfss_134",dark:V,info:I,warning:A,error:C,content:T,icon:M,text:S,title:z,description:D,hasTitle:E,aside:F},G={$style:j},O=v(d,[["__cssModules",G]]);d.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"description",required:!1,type:{name:"string"}},{name:"center",required:!1,type:{name:"boolean"}},{name:"showIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"effect",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'light'"}},{name:"background",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"aside"}],sourceFiles:["/home/runner/work/flowease-storybook/flowease-storybook/packages/design-system/src/components/N8nAlert/Alert.vue"]};export{O as N};
