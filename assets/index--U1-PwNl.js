import{ab as Dl,d as ze,e as m,ac as De,w as q,u as oe,S as cl,h as be,$ as We,ad as pl,V as Wl,J as P,M as he,N as fl,o as b,a as V,x as ie,b as k,p as X,n as S,D as J,r as z,f as vl,G as te,a4 as gl,_,ae as me,af as sl,W as yl,i as Il,U as Ml,C as U,ag as Al,s as ne,v as E,T as Sl,F as Pe,k as D,A as ul,q as W,R as A,ah as Bl,E as Cl,H as ql}from"./vue.esm-bundler-n0I0yAQQ.js";import{b as ge,j as $l,i as Kl,l as Fl}from"./constants-qxKQHgGp.js";import{b as Ol,E as Hl,a as Nl,f as Rl}from"./index-KZNKmCSO.js";import{i as jl,E as Ql}from"./index-Cm4Tzdrc.js";import{E as Gl}from"./index-hyb5vpE9.js";import{E as Ul,t as Jl}from"./index-jPag7Cdl.js";import{E as Xl}from"./index-APieC4ix.js";import{a as Yl,e as Zl}from"./index-fxRCy6s1.js";import{g as B}from"./get-UmNIKtpA.js";import{_ as Ae,u as ae,w as xl,g as Vl}from"./plugin-vue_export-helper--E4ECpVB.js";import{u as ml}from"./index--hMdiM4I.js";import{u as _l}from"./index-qGKqiPQK.js";import{u as en}from"./use-form-item-zLZL6zko.js";import{d as ln,c as nn,u as on}from"./use-form-common-props-PVTz91X1.js";import{d as tn}from"./error-zcWxX9t3.js";import{U as Y,C as Pl}from"./event-vOXeFsAk.js";import{g as an}from"./style-vlcBzdj4.js";import{i as wl}from"./isEqual-rSnqz3TO.js";import{d as Tl}from"./debounce-1n8IgpOA.js";import{C as rn}from"./index-0KGNbjaN.js";import{i as El}from"./icon-vJoYfTtu.js";const sn=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),xn=e=>Dl(e),un=(e,l)=>{if(!ge)return!1;const i={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(l)],d=an(e,i);return["scroll","auto","overlay"].some(p=>d.includes(p))},_n=(e,l)=>{if(!ge)return;let i=e;for(;i;){if([window,document,document.documentElement].includes(i))return window;if(un(i,l))return i;i=i.parentNode}return i};let ke;const eo=e=>{var l;if(!ge)return 0;if(ke!==void 0)return ke;const i=document.createElement("div");i.className=`${e}-scrollbar__wrap`,i.style.visibility="hidden",i.style.width="100px",i.style.position="absolute",i.style.top="-9999px",document.body.appendChild(i);const d=i.offsetWidth;i.style.overflow="scroll";const p=document.createElement("div");p.style.width="100%",i.appendChild(p);const s=p.offsetWidth;return(l=i.parentNode)==null||l.removeChild(i),ke=d-s,ke};function dn(e,l){if(!ge)return;if(!l){e.scrollTop=0;return}const i=[];let d=l.offsetParent;for(;d!==null&&e!==d&&e.contains(d);)i.push(d),d=d.offsetParent;const p=l.offsetTop+i.reduce((c,C)=>c+C.offsetTop,0),s=p+l.offsetHeight,r=e.scrollTop,h=r+e.clientHeight;p<r?e.scrollTop=p:s>h&&(e.scrollTop=s-e.clientHeight)}const cn=e=>ln[e||"default"],pn=e=>["",...nn].includes(e),fn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),kl=Symbol("ElSelectGroup"),Be=Symbol("ElSelect");function vn(e,l){const i=ze(Be),d=ze(kl,{disabled:!1}),p=m(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),s=m(()=>i.props.multiple?g(i.props.modelValue,e.value):w(e.value,i.props.modelValue)),r=m(()=>{if(i.props.multiple){const t=i.props.modelValue||[];return!s.value&&t.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),h=m(()=>e.label||(p.value?"":e.value)),c=m(()=>e.value||e.label||""),C=m(()=>e.disabled||l.groupDisabled||r.value),v=cl(),g=(t=[],f)=>{if(p.value){const O=i.props.valueKey;return t&&t.some(K=>De(B(K,O))===B(f,O))}else return t&&t.includes(f)},w=(t,f)=>{if(p.value){const{valueKey:O}=i.props;return B(t,O)===B(f,O)}else return t===f},T=()=>{!e.disabled&&!d.disabled&&(i.hoverIndex=i.optionsArray.indexOf(v.proxy))};q(()=>h.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),q(()=>e.value,(t,f)=>{const{remote:O,valueKey:K}=i.props;if(Object.is(t,f)||(i.onOptionDestroy(f,v.proxy),i.onOptionCreate(v.proxy)),!e.created&&!O){if(K&&typeof t=="object"&&typeof f=="object"&&t[K]===f[K])return;i.setSelected()}}),q(()=>d.disabled,()=>{l.groupDisabled=d.disabled},{immediate:!0});const{queryChange:$}=De(i);return q($,t=>{const{query:f}=oe(t),O=new RegExp(sn(f),"i");l.visible=O.test(h.value)||e.created,l.visible||i.filteredOptionsCount--},{immediate:!0}),{select:i,currentLabel:h,currentValue:c,itemSelected:s,isDisabled:C,hoverItem:T}}const mn=be({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=We({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:d,itemSelected:p,isDisabled:s,select:r,hoverItem:h}=vn(e,i),{visible:c,hover:C}=pl(i),v=cl().proxy;r.onOptionCreate(v),Wl(()=>{const w=v.value,{selected:T}=r,t=(r.props.multiple?T:[T]).some(f=>f.value===v.value);P(()=>{r.cachedOptions.get(w)===v&&!t&&r.cachedOptions.delete(w)}),r.onOptionDestroy(w,v)});function g(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(v)}return{ns:l,currentLabel:d,itemSelected:p,isDisabled:s,select:r,hoverItem:h,visible:c,hover:C,selectOptionClick:g,states:i}}});function hn(e,l,i,d,p,s){return he((b(),V("li",{class:S([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=J((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[ie(e.$slots,"default",{},()=>[k("span",null,X(e.currentLabel),1)])],34)),[[fl,e.visible]])}var hl=Ae(mn,[["render",hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const bn=be({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ze(Be),l=ae("select"),i=m(()=>e.props.popperClass),d=m(()=>e.props.multiple),p=m(()=>e.props.fitInputWidth),s=z("");function r(){var h;s.value=`${(h=e.selectWrapper)==null?void 0:h.offsetWidth}px`}return vl(()=>{r(),$l(e.selectWrapper,r)}),{ns:l,minWidth:s,popperClass:i,isMultiple:d,isFitInputWidth:p}}});function gn(e,l,i,d,p,s){return b(),V("div",{class:S([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:te({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ie(e.$slots,"default")],6)}var yn=Ae(bn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function Sn(e){const{t:l}=ml();return We({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}let dl=!1;const Cn=(e,l,i)=>{const{t:d}=ml(),p=ae("select");_l({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},m(()=>e.suffixTransition===!1));const s=z(null),r=z(null),h=z(null),c=z(null),C=z(null),v=z(null),g=z(null),w=z(-1),T=gl({query:""}),$=gl(""),t=z([]);let f=0;const{form:O,formItem:K}=en(),ye=m(()=>!e.filterable||e.multiple||!l.visible),R=m(()=>e.disabled||(O==null?void 0:O.disabled)),qe=m(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!R.value&&l.inputHovering&&n}),Se=m(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ke=m(()=>p.is("reverse",Se.value&&l.visible&&e.suffixTransition)),Ce=m(()=>e.remote?300:0),re=m(()=>e.loading?e.loadingText||d("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||d("el.select.noMatch"):l.options.size===0?e.noDataText||d("el.select.noData"):null),M=m(()=>{const n=Array.from(l.options.values()),o=[];return t.value.forEach(a=>{const u=n.findIndex(L=>L.currentLabel===a);u>-1&&o.push(n[u])}),o.length?o:n}),Fe=m(()=>Array.from(l.cachedOptions.values())),He=m(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),Z=on(),Ne=m(()=>["small"].includes(Z.value)?"small":"default"),Re=m({get(){return l.visible&&re.value!==!1},set(n){l.visible=n}});q([()=>R.value,()=>Z.value,()=>O==null?void 0:O.size],()=>{P(()=>{F()})}),q(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),q(()=>e.modelValue,(n,o)=>{e.multiple&&(F(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",j(l.query))),se(),e.filterable&&!e.multiple&&(l.inputLength=20),!wl(n,o)&&e.validateEvent&&(K==null||K.validate("change").catch(a=>tn()))},{flush:"post",deep:!0}),q(()=>l.visible,n=>{var o,a,u,L,I;n?((a=(o=c.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(L=(u=h.value)==null?void 0:u.focus)==null||L.call(u),e.multiple?(I=r.value)==null||I.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),j(l.query),!e.multiple&&!e.remote&&(T.value.query="",me(T),me($)))):(e.filterable&&(_(e.filterMethod)&&e.filterMethod(""),_(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,je(),P(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),q(()=>l.options.entries(),()=>{var n,o,a;if(!ge)return;(o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&F();const u=((a=v.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(u).includes(document.activeElement)||se(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&we()},{flush:"post"}),q(()=>l.hoverIndex,n=>{Kl(n)&&n>-1?w.value=M.value[n]||{}:w.value={},M.value.forEach(o=>{o.hover=w.value===o})});const F=()=>{P(()=>{var n,o;if(!s.value)return;const a=s.value.$el.querySelector("input");f=f||(a.clientHeight>0?a.clientHeight+2:0);const u=C.value,L=cn(Z.value||(O==null?void 0:O.size)),I=Z.value||L===f||f<=0?L:f;!(a.offsetParent===null)&&(a.style.height=`${(l.selected.length===0?I:Math.max(u?u.clientHeight+(u.clientHeight>I?6:0):0,I))-2}px`),l.tagInMultiLine=Number.parseFloat(a.style.height)>=I,l.visible&&re.value!==!1&&((o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n))})},j=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(_(e.filterMethod)||_(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,P(()=>{var o,a;l.visible&&((a=(o=c.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&P(()=>{const o=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Oe(),F()}),e.remote&&_(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):_(e.filterMethod)?(e.filterMethod(n),me($)):(l.filteredOptionsCount=l.optionsCount,T.value.query=n,me(T),me($)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await P(),we())}},Oe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},we=()=>{const n=M.value.filter(u=>u.visible&&!u.disabled&&!u.states.groupDisabled),o=n.find(u=>u.created),a=n[0];l.hoverIndex=Le(M.value,o||a)},se=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Te(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Te(a))}),l.selected=o,P(()=>{F()})},Te=n=>{let o;const a=sl(n).toLowerCase()==="object",u=sl(n).toLowerCase()==="null",L=sl(n).toLowerCase()==="undefined";for(let G=l.cachedOptions.size-1;G>=0;G--){const y=Fe.value[G];if(a?B(y.value,e.valueKey)===B(n,e.valueKey):y.value===n){o={value:n,currentLabel:y.currentLabel,isDisabled:y.isDisabled};break}}if(o)return o;const I=a?n.label:!u&&!L?n:"",N={value:n,currentLabel:I};return e.multiple&&(N.hitState=!1),N},je=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(a=>B(a,n)===B(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>fe(o)===fe(l.selected))},300)},Qe=()=>{var n,o;Ge(),(o=(n=c.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&F()},Ge=()=>{var n;l.inputWidth=(n=s.value)==null?void 0:n.$el.offsetWidth},Ue=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,j(l.query))},Je=Tl(()=>{Ue()},Ce.value),Xe=Tl(n=>{j(n.target.value)},Ce.value),x=n=>{wl(e.modelValue,n)||i.emit(Pl,n)},ee=n=>{if(n.code!==Ol.delete){if(n.target.value.length<=0&&!ce()){const o=e.modelValue.slice();o.pop(),i.emit(Y,o),x(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},Ye=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!R.value){const u=e.modelValue.slice();u.splice(a,1),i.emit(Y,u),x(u),i.emit("remove-tag",o.value)}n.stopPropagation()},Ee=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Il(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(Y,o),x(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},ue=n=>{var o;if(e.multiple){const a=(e.modelValue||[]).slice(),u=Le(a,n.value);u>-1?a.splice(u,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(n.value),i.emit(Y,a),x(a),n.created&&(l.query="",j(""),l.inputLength=20),e.filterable&&((o=r.value)==null||o.focus())}else i.emit(Y,n.value),x(n.value),l.visible=!1;de(),!l.visible&&P(()=>{le(n)})},Le=(n=[],o)=>{if(!yl(o))return n.indexOf(o);const a=e.valueKey;let u=-1;return n.some((L,I)=>De(B(L,a))===B(o,a)?(u=I,!0):!1),u},de=()=>{const n=r.value||s.value;n&&(n==null||n.focus())},le=n=>{var o,a,u,L,I;const N=Array.isArray(n)?n[0]:n;let G=null;if(N!=null&&N.value){const y=M.value.filter(H=>H.value===N.value);y.length>0&&(G=y[0].$el)}if(c.value&&G){const y=(L=(u=(a=(o=c.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:u.querySelector)==null?void 0:L.call(u,`.${p.be("dropdown","wrap")}`);y&&dn(y,G)}(I=g.value)==null||I.handleScroll()},Ze=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},xe=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},_e=n=>{n.code!==Ol.backspace&&ce(!1),l.inputLength=r.value.value.length*15+20,F()},ce=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},el=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,P(()=>j(o));else{const a=o[o.length-1]||"";l.isOnComposition=!jl(a)}},ll=()=>{P(()=>le(l.selected))},nl=n=>{dl?dl=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},Q=()=>{var n,o,a;l.visible=!1,(n=s.value)==null||n.blur(),(a=(o=h.value)==null?void 0:o.blur)==null||a.call(o)},Ie=n=>{setTimeout(()=>{var o;if((o=c.value)!=null&&o.isFocusInsideContent()){dl=!0;return}l.visible&&pe(),i.emit("blur",n)})},ol=n=>{Ee(n)},pe=()=>{l.visible=!1},tl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Me=n=>{var o;n&&!l.mouseEnter||R.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!c.value||!c.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=r.value||s.value)==null||o.focus()))},$e=()=>{l.visible?M.value[l.hoverIndex]&&ue(M.value[l.hoverIndex]):Me()},fe=n=>yl(n.value)?B(n.value,e.valueKey):n.value,il=m(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),ve=m(()=>l.selected.slice(0,e.maxCollapseTags)),al=m(()=>l.selected.slice(e.maxCollapseTags)),Ve=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!il.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ve(n),P(()=>le(w.value))}};return{optionList:t,optionsArray:M,selectSize:Z,handleResize:Qe,debouncedOnInputChange:Je,debouncedQueryChange:Xe,deletePrevTag:ee,deleteTag:Ye,deleteSelected:Ee,handleOptionSelect:ue,scrollToOption:le,readonly:ye,resetInputHeight:F,showClose:qe,iconComponent:Se,iconReverse:Ke,showNewOption:He,collapseTagSize:Ne,setSelected:se,managePlaceholder:Oe,selectDisabled:R,emptyText:re,toggleLastOptionHitState:ce,resetInputState:_e,handleComposition:el,onOptionCreate:Ze,onOptionDestroy:xe,handleMenuEnter:ll,handleFocus:nl,blur:Q,handleBlur:Ie,handleClearClick:ol,handleClose:pe,handleKeydownEscape:tl,toggleMenu:Me,selectOption:$e,getValueKey:fe,navigateOptions:Ve,dropMenuVisible:Re,queryChange:T,groupQueryChange:$,showTagList:ve,collapseTagList:al,reference:s,input:r,iOSInput:h,tooltipRef:c,tags:C,selectWrapper:v,scrollbar:g,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var On=be({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:i}){let d=[];function p(s,r){if(s.length!==r.length)return!1;for(const[h]of s.entries())if(s[h]!=r[h])return!1;return!0}return()=>{var s,r;const h=(s=l.default)==null?void 0:s.call(l),c=[];function C(v){Array.isArray(v)&&v.forEach(g=>{var w,T,$,t;const f=(w=(g==null?void 0:g.type)||{})==null?void 0:w.name;f==="ElOptionGroup"?C(!Il(g.children)&&!Array.isArray(g.children)&&_((T=g.children)==null?void 0:T.default)?($=g.children)==null?void 0:$.default():g.children):f==="ElOption"?c.push((t=g.props)==null?void 0:t.label):Array.isArray(g.children)&&C(g.children)})}return h.length&&C((r=h[0])==null?void 0:r.children),p(c,d)||(d=c,i("update-options",c)),h}}});const Ll="ElSelect",wn=be({name:Ll,componentName:Ll,components:{ElInput:Ql,ElSelectMenu:yn,ElOption:hl,ElOptions:On,ElTag:Ul,ElScrollbar:Gl,ElTooltip:Hl,ElIcon:Xl},directives:{ClickOutside:rn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:pn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:Nl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:El,default:Yl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:El,default:Zl},tagType:{...Jl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Rl,default:"bottom-start"}},emits:[Y,Pl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ae("select"),d=ae("input"),{t:p}=ml(),s=Sn(e),{optionList:r,optionsArray:h,selectSize:c,readonly:C,handleResize:v,collapseTagSize:g,debouncedOnInputChange:w,debouncedQueryChange:T,deletePrevTag:$,deleteTag:t,deleteSelected:f,handleOptionSelect:O,scrollToOption:K,setSelected:ye,resetInputHeight:R,managePlaceholder:qe,showClose:Se,selectDisabled:Ke,iconComponent:Ce,iconReverse:re,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:He,resetInputState:Z,handleComposition:Ne,onOptionCreate:Re,onOptionDestroy:F,handleMenuEnter:j,handleFocus:Oe,blur:we,handleBlur:se,handleClearClick:Te,handleClose:je,handleKeydownEscape:Qe,toggleMenu:Ge,selectOption:Ue,getValueKey:Je,navigateOptions:Xe,dropMenuVisible:x,reference:ee,input:Ye,iOSInput:Ee,tooltipRef:ue,tags:Le,selectWrapper:de,scrollbar:le,queryChange:Ze,groupQueryChange:xe,handleMouseEnter:_e,handleMouseLeave:ce,showTagList:el,collapseTagList:ll}=Cn(e,s,l),{focus:nl}=fn(ee),{inputWidth:Q,selected:Ie,inputLength:ol,filteredOptionsCount:pe,visible:tl,selectedLabel:Me,hoverIndex:$e,query:fe,inputHovering:il,currentPlaceholder:ve,menuVisibleOnFocus:al,isOnComposition:Ve,options:rl,cachedOptions:bl,optionsCount:n,prefixWidth:o,tagInMultiLine:a}=pl(s),u=m(()=>{const y=[i.b()],H=oe(c);return H&&y.push(i.m(H)),e.disabled&&y.push(i.m("disabled")),y}),L=m(()=>({maxWidth:`${oe(Q)-32}px`,width:"100%"})),I=m(()=>({maxWidth:`${oe(Q)>123?oe(Q)-123:oe(Q)-75}px`}));Ml(Be,We({props:e,options:rl,optionsArray:h,cachedOptions:bl,optionsCount:n,filteredOptionsCount:pe,hoverIndex:$e,handleOptionSelect:O,onOptionCreate:Re,onOptionDestroy:F,selectWrapper:de,selected:Ie,setSelected:ye,queryChange:Ze,groupQueryChange:xe})),vl(()=>{s.cachedPlaceHolder=ve.value=e.placeholder||(()=>p("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ve.value=""),$l(de,v),e.remote&&e.multiple&&R(),P(()=>{const y=ee.value&&ee.value.$el;if(y&&(Q.value=y.getBoundingClientRect().width,l.slots.prefix)){const H=y.querySelector(`.${d.e("prefix")}`);o.value=Math.max(H.getBoundingClientRect().width+5,30)}}),ye()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Y,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Y,"");const N=m(()=>{var y,H;return(H=(y=ue.value)==null?void 0:y.popperRef)==null?void 0:H.contentRef});return{isIOS:Fl,onOptionsRendered:y=>{r.value=y},tagInMultiLine:a,prefixWidth:o,selectSize:c,readonly:C,handleResize:v,collapseTagSize:g,debouncedOnInputChange:w,debouncedQueryChange:T,deletePrevTag:$,deleteTag:t,deleteSelected:f,handleOptionSelect:O,scrollToOption:K,inputWidth:Q,selected:Ie,inputLength:ol,filteredOptionsCount:pe,visible:tl,selectedLabel:Me,hoverIndex:$e,query:fe,inputHovering:il,currentPlaceholder:ve,menuVisibleOnFocus:al,isOnComposition:Ve,options:rl,resetInputHeight:R,managePlaceholder:qe,showClose:Se,selectDisabled:Ke,iconComponent:Ce,iconReverse:re,showNewOption:M,emptyText:Fe,toggleLastOptionHitState:He,resetInputState:Z,handleComposition:Ne,handleMenuEnter:j,handleFocus:Oe,blur:we,handleBlur:se,handleClearClick:Te,handleClose:je,handleKeydownEscape:Qe,toggleMenu:Ge,selectOption:Ue,getValueKey:Je,navigateOptions:Xe,dropMenuVisible:x,focus:nl,reference:ee,input:Ye,iOSInput:Ee,tooltipRef:ue,popperPaneRef:N,tags:Le,selectWrapper:de,scrollbar:le,wrapperKls:u,selectTagsStyle:L,nsSelect:i,tagTextStyle:I,handleMouseEnter:_e,handleMouseLeave:ce,showTagList:el,collapseTagList:ll}}}),Tn=["disabled","autocomplete"],En=["disabled"],Ln={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function In(e,l,i,d,p,s){const r=U("el-tag"),h=U("el-tooltip"),c=U("el-icon"),C=U("el-input"),v=U("el-option"),g=U("el-options"),w=U("el-scrollbar"),T=U("el-select-menu"),$=Al("click-outside");return he((b(),V("div",{ref:"selectWrapper",class:S(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[22]||(l[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[23]||(l[23]=J((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[ne(h,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:E(()=>[k("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=t=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=t=>e.inputHovering=!1)},[e.multiple?(b(),V("div",{key:0,ref:"tags",class:S([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:te(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(b(),D(Sl,{key:0,onAfterLeave:e.resetInputHeight},{default:E(()=>[k("span",{class:S([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),V(Pe,null,ul(e.showTagList,t=>(b(),D(r,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:E(()=>[k("span",{class:S(e.nsSelect.e("tags-text")),style:te(e.tagTextStyle)},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(b(),D(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:E(()=>[e.collapseTagsTooltip?(b(),D(h,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:E(()=>[k("span",{class:S(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-e.maxCollapseTags),3)]),content:E(()=>[k("div",{class:S(e.nsSelect.e("collapse-tags"))},[(b(!0),V(Pe,null,ul(e.collapseTagList,t=>(b(),V("div",{key:e.getValueKey(t),class:S(e.nsSelect.e("collapse-tag"))},[ne(r,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:f=>e.deleteTag(f,t)},{default:E(()=>[k("span",{class:S(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(b(),V("span",{key:1,class:S(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):W("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):W("v-if",!0),e.collapseTags?W("v-if",!0):(b(),D(Sl,{key:1,onAfterLeave:e.resetInputHeight},{default:E(()=>[k("span",{class:S([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),V(Pe,null,ul(e.selected,t=>(b(),D(r,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:f=>e.deleteTag(f,t)},{default:E(()=>[k("span",{class:S(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?he((b(),V("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:S([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:te({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=A(J(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=A(J(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=A((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=A(J((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=A((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=A(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Tn)),[[Bl,e.query]]):W("v-if",!0)],6)):W("v-if",!0),W(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(b(),V("input",{key:1,ref:"iOSInput",class:S([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,En)):W("v-if",!0),ne(C,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:S([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=A(J(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=A(J(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),A(J(e.selectOption,["stop","prevent"]),["enter"]),A(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=A(t=>e.visible=!1,["tab"]))]},ql({suffix:E(()=>[e.iconComponent&&!e.showClose?(b(),D(c,{key:0,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:E(()=>[(b(),D(Cl(e.iconComponent)))]),_:1},8,["class"])):W("v-if",!0),e.showClose&&e.clearIcon?(b(),D(c,{key:1,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:E(()=>[(b(),D(Cl(e.clearIcon)))]),_:1},8,["class","onClick"])):W("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:E(()=>[k("div",Ln,[ie(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:E(()=>[ne(T,null,{default:E(()=>[he(ne(w,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:S([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:E(()=>[e.showNewOption?(b(),D(v,{key:0,value:e.query,created:!0},null,8,["value"])):W("v-if",!0),ne(g,{onUpdateOptions:e.onOptionsRendered},{default:E(()=>[ie(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[fl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(b(),V(Pe,{key:0},[e.$slots.empty?ie(e.$slots,"empty",{key:0}):(b(),V("p",{key:1,class:S(e.nsSelect.be("dropdown","empty"))},X(e.emptyText),3))],64)):W("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[$,e.handleClose,e.popperPaneRef]])}var Mn=Ae(wn,[["render",In],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const $n=be({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=z(!0),d=cl(),p=z([]);Ml(kl,We({...pl(e)}));const s=ze(Be);vl(()=>{p.value=r(d.subTree)});const r=c=>{const C=[];return Array.isArray(c.children)&&c.children.forEach(v=>{var g;v.type&&v.type.name==="ElOption"&&v.component&&v.component.proxy?C.push(v.component.proxy):(g=v.children)!=null&&g.length&&C.push(...r(v))}),C},{groupQueryChange:h}=De(s);return q(h,()=>{i.value=p.value.some(c=>c.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function Vn(e,l,i,d,p,s){return he((b(),V("ul",{class:S(e.ns.be("group","wrap"))},[k("li",{class:S(e.ns.be("group","title"))},X(e.label),3),k("li",null,[k("ul",{class:S(e.ns.b("group"))},[ie(e.$slots,"default")],2)])],2)),[[fl,e.visible]])}var zl=Ae($n,[["render",Vn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const lo=xl(Mn,{Option:hl,OptionGroup:zl}),no=Vl(hl),oo=Vl(zl);export{lo as E,no as a,_n as b,xn as c,Be as d,sn as e,oo as f,eo as g,pn as i,dn as s};
