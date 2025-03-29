import{P as E}from"./index-Dklil5-E.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import"./index-Dii7L_rz.js";import"./utils-mftCjzGE.js";const v={component:E,title:"Components/Inputs/PasswordInput",parameters:{backgrounds:{default:"dark"}}},r={args:{placeholder:"Enter your password"}},e={args:{placeholder:"Enter your password",defaultValue:"123",error:"Password must be at least 6 characters"}},a={args:{placeholder:"Enter your password",validate:w=>w.length>=6?void 0:"Password must be at least 6 characters"}},s={args:{placeholder:"Enter your password",defaultValue:"securepassword"}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your password"
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,c,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your password",
    defaultValue: "123",
    error: "Password must be at least 6 characters"
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your password",
    validate: (value: string) => value.length >= 6 ? undefined : "Password must be at least 6 characters"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,h,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your password",
    defaultValue: "securepassword"
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const S=["Default","WithError","WithValidation","Complete"];export{s as Complete,r as Default,e as WithError,a as WithValidation,S as __namedExportsOrder,v as default};
