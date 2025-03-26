import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{K as i}from"./index-DfMBgcrl.js";import{c as r}from"./utils-mftCjzGE.js";const o=["1","2","3","4","5","6","7","8","9","Clear","0","←"],p=({onKeypadKeyPress:a,className:n,...t})=>s.jsx("div",{className:r("grid grid-cols-3 grid-rows-4 gap-[2dvw] text-[2dvh]",n),...t,children:o.map(e=>s.jsx(i,{label:e,onClick:()=>a(e)},e))});p.__docgenInfo={description:`A visual keypad component with 0–9 digits, a decimal point, and a backspace key.

Emits key presses via the \`onKeypadKeyPress\` prop and is typically used with
\`KeypadDisplay\` for transaction amount input in POS systems.

This component does not manage internal state — it is fully controlled by the parent. It only emits keys pressed`,methods:[],displayName:"KeypadPad",props:{onKeypadKeyPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:'Callback fired when a keypad key is pressed.\n\nThe pressed key is passed as a string, e.g., `"1"`, `"."`, or `"←"`.\n@type - (key: string) => void'}}};export{p as K};
