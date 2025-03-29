import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as b}from"./index-0C6URisw.js";import"./index-DmM0KDA7.js";import"./utils-mftCjzGE.js";import"./index-wgTLUS1o.js";import"./AlertCircleIcon-DpxqB1H-.js";import"./index-CqtvBq84.js";const C={title:"Components/Global UI/Toast",component:b,parameters:{backgrounds:{default:"dark"}},decorators:[S=>o.jsx("div",{className:"flex flex-col min-h-[20dvh] items-center",children:o.jsx(S,{})})]},a={args:{variant:"neutral",visible:!0,message:{heading:"This is a toast"}}},s={args:{...a.args,message:{heading:"This is a toast",details:"These are details . . ."}}},e={args:{...a.args,variant:"loading",message:{heading:"This is another toast"}}},r={args:{...a.args,variant:"error",message:{heading:"This is another other toast"}}},t={args:{...a.args,variant:"positive",message:{heading:"This is another other toast's brother from a different mother"}}};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "neutral",
    visible: true,
    message: {
      heading: "This is a toast"
    }
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,g,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    message: {
      heading: "This is a toast",
      details: "These are details . . ."
    }
  }
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,p,l;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "loading",
    message: {
      heading: "This is another toast"
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,T,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "error",
    message: {
      heading: "This is another other toast"
    }
  }
}`,...(v=(T=r.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,x,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    variant: "positive",
    message: {
      heading: "This is another other toast's brother from a different mother"
    }
  }
}`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const G=["Neutral","With_Details","Loading","Error","Success"];export{r as Error,e as Loading,a as Neutral,t as Success,s as With_Details,G as __namedExportsOrder,C as default};
