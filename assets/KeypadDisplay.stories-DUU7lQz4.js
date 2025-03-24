import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./utils-CTirK_BG.js";const j=e=>e.padStart(3,"0"),N=e=>{const a=j(e),l=a.slice(-2);return`${a.slice(0,-2).padStart(2,"0")}.${l}`},A=e=>e.replace(/^0+/,"")!=="",D=({rawValue:e,className:a})=>{const d=N(e||"000"),i=A(e);return o.jsxs("div",{className:c("font-brand font-semibold w-full px-64 py-24 min-h-120 rounded-16 flex justify-center items-center bg-core-dark-surface-default-background text-[72px] tabular-nums",a),children:[o.jsx("sup",{className:c("mr-1 align-super text-[36px]",i?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),children:"$"}),d.split("").map((p,v)=>{const S=p===".",$=i;return o.jsx("span",{className:c(S?"mx-1":"",$?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),children:p},v)})]})};D.__docgenInfo={description:`Props for the \`KeypadDisplay\` component.

Renders a currency-formatted display (e.g. \`$00.00\`) typically used
above a numeric keypad in a point-of-sale flow.

The display auto-formats a raw string of digits from right to left,
enforcing a fixed 2-decimal currency layout. By default, it renders
as \`$00.00\` with greyed-out text, and transitions to active styles
(white text) when any non-zero digit is entered.

The dollar sign is superscripted and styled independently, and the
component is fully controlled via the \`rawValue\` prop.`,methods:[],displayName:"KeypadDisplay",props:{rawValue:{required:!0,tsType:{name:"string"},description:'A string of digits representing the raw keypad input.\n\nExample: `"1"` → `$00.01`, `"123"` → `$1.23`\n@type - string'}}};const R={component:D,title:"Components/Keypad/Display",parameters:{backgrounds:{default:"dark"}}},r={args:{rawValue:""}},t={args:{rawValue:"1245"}},s={args:{rawValue:"1"}},n={args:{rawValue:"100"}};var u,m,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    rawValue: ""
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,g,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    rawValue: "1245"
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,h,V;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    rawValue: "1"
  }
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var k,_,b;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    rawValue: "100"
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const E=["Default","Active_Value","Single_Cent","Full_Dollar"];export{t as Active_Value,r as Default,n as Full_Dollar,s as Single_Cent,E as __namedExportsOrder,R as default};
