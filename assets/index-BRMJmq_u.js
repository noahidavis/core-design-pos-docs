import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{K as i}from"./index-CQvbv9qx.js";import{c as d}from"./utils-mftCjzGE.js";const p=["1","2","3","4","5","6","7","8","9","Clear","0","←"],n=({onKeypadKeyPress:a,className:t,...r})=>s.jsx("div",{className:d("grid grid-cols-3 grid-rows-4 gap-[2dvw] text-[2dvh]",t),...r,children:p.map(e=>s.jsx(i,{label:e,onClick:()=>a(e)},e))});try{n.displayName="KeypadPad",n.__docgenInfo={description:`A visual keypad component with 0–9 digits, a decimal point, and a backspace key.

Emits key presses via the \`onKeypadKeyPress\` prop and is typically used with
\`KeypadDisplay\` for transaction amount input in POS systems.

This component does not manage internal state — it is fully controlled by the parent. It only emits keys pressed`,displayName:"KeypadPad",props:{onKeypadKeyPress:{defaultValue:null,description:'Callback fired when a keypad key is pressed.\n\nThe pressed key is passed as a string, e.g., `"1"`, `"."`, or `"←"`.',name:"onKeypadKeyPress",required:!0,type:{name:"- (key: string) => void"}}}}}catch{}export{n as K};
