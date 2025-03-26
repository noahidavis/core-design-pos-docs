import{E as v}from"./index-DIlFh9qP.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import"./index-Dx3dj8E1.js";import"./utils-mftCjzGE.js";const S={component:v,title:"Components/Inputs/EmailInput",parameters:{backgrounds:{default:"dark"}}},e={args:{placeholder:"Enter your email"}},a={args:{placeholder:"Enter your email",defaultValue:"invalid-email",error:"Invalid email address"}},r={args:{placeholder:"Enter your email",validate:f=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)?void 0:"Invalid email address"}},s={args:{...e.args,defaultValue:"email@example.com"}};var o,t,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your email"
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your email",
    defaultValue: "invalid-email",
    error: "Invalid email address"
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your email",
    validate: (value: string) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? undefined : "Invalid email address"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,E;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: "email@example.com"
  }
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const W=["Default","WithError","WithValidation","Complete"];export{s as Complete,e as Default,a as WithError,r as WithValidation,W as __namedExportsOrder,S as default};
