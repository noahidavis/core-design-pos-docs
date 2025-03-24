import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{K as y}from"./KeypadKey-D5dyj6w-.js";import{c}from"./utils-CTirK_BG.js";const m=["1","2","3","4","5","6","7","8","9",".","0","←"],o=({onKeypadKeyPress:i,className:p,...d})=>a.jsx("div",{className:c("grid grid-cols-3 grid-rows-4 gap-16",p),...d,children:m.map(s=>a.jsx(y,{label:s,onClick:()=>i(s)},s))});o.__docgenInfo={description:`A visual keypad component with 0–9 digits, a decimal point, and a backspace key.

Emits key presses via the \`onKeypadKeyPress\` prop and is typically used with
\`KeypadDisplay\` for currency input in POS systems.

This component does not manage internal state — it is fully controlled by the parent. It only emits keys pressed`,methods:[],displayName:"KeypadPad",props:{onKeypadKeyPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:'Callback fired when a keypad key is pressed.\n\nThe pressed key is passed as a string, e.g., `"1"`, `"."`, or `"←"`.\n@type - (key: string) => void'}}};const K={component:o,title:"Components/Keypad/Pad",parameters:{backgrounds:{default:"dark"}}},e={args:{onKeypadKeyPress:()=>{}}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onKeypadKeyPress: () => {}
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,K as default};
