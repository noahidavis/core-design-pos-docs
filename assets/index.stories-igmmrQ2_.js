import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as N}from"./index-CQjbugem.js";import"./index-DmM0KDA7.js";import"./utils-BaF2GUMg.js";import"./index-q3bty41n.js";import"./AlertCircleIcon-DpxqB1H-.js";import"./index-BSdB4E8w.js";const L={title:"Components/Global UI/Toast",component:N,parameters:{backgrounds:{default:"dark"}},decorators:[b=>o.jsx("div",{style:{display:"flex",flexDirection:"column",minHeight:"20dvh",alignItems:"center"},children:o.jsx(b,{})})]},a={args:{variant:"neutral",visible:!0,message:{heading:"This is a toast"}}},e={args:{...a.args,message:{heading:"This is a toast",details:"These are details . . ."}}},s={args:{...a.args,variant:"loading",message:{heading:"This is another toast"}}},r={args:{...a.args,variant:"error",message:{heading:"This is another other toast"}}},t={args:{...a.args,variant:"positive",message:{heading:"This is another other toast's brother from a different mother"}}};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    visible: true,
    message: {
      heading: "This is a toast"
    }
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,c,d;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    message: {
      heading: "This is a toast",
      details: "These are details . . ."
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,p,l;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "loading",
    message: {
      heading: "This is another toast"
    }
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,T,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "error",
    message: {
      heading: "This is another other toast"
    }
  }
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,x,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "positive",
    message: {
      heading: "This is another other toast's brother from a different mother"
    }
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const W=["Neutral","With_Details","Loading","Error","Success"];export{r as Error,s as Loading,a as Neutral,t as Success,e as With_Details,W as __namedExportsOrder,L as default};
