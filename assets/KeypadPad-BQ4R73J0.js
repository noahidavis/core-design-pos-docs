import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{K as i}from"./KeypadKey-BNGj0nQk.js";import{c as r}from"./utils-CTirK_BG.js";const o=["1","2","3","4","5","6","7","8","9",".","0","←"],p=({onKeypadKeyPress:n,className:a,...t})=>s.jsx("div",{className:r("grid grid-cols-3 grid-rows-4 gap-24 text-3xl",a),...t,children:o.map(e=>s.jsx(i,{label:e,onClick:()=>n(e)},e))});p.__docgenInfo={description:`A visual keypad component with 0–9 digits, a decimal point, and a backspace key.

Emits key presses via the \`onKeypadKeyPress\` prop and is typically used with
\`KeypadDisplay\` for transaction amount input in POS systems.

This component does not manage internal state — it is fully controlled by the parent. It only emits keys pressed`,methods:[],displayName:"KeypadPad",props:{onKeypadKeyPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:'Callback fired when a keypad key is pressed.\n\nThe pressed key is passed as a string, e.g., `"1"`, `"."`, or `"←"`.\n@type - (key: string) => void'}}};export{p as K};
