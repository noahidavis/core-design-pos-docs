import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{K as p}from"./index-D8dwpnX4.js";import{c as r}from"./utils-BaF2GUMg.js";const i="_keypadPad_1ycl0_3",o={keypadPad:i},y=["1","2","3","4","5","6","7","8","9","Clear","0","←"],n=({onKeypadKeyPress:a,className:t,...d})=>s.jsx("div",{className:r(o.keypadPad,t),...d,children:y.map(e=>s.jsx(p,{label:e,onClick:()=>a(e)},e))});try{n.displayName="KeypadPad",n.__docgenInfo={description:`A visual keypad component with 0–9 digits, a decimal point, and a backspace key.

Emits key presses via the \`onKeypadKeyPress\` prop and is typically used with
\`KeypadDisplay\` for transaction amount input in POS systems.

This component does not manage internal state — it is fully controlled by the parent. It only emits keys pressed`,displayName:"KeypadPad",props:{onKeypadKeyPress:{defaultValue:null,description:'Callback fired when a keypad key is pressed.\n\nThe pressed key is passed as a string, e.g., `"1"`, `"."`, or `"←"`.',name:"onKeypadKeyPress",required:!0,type:{name:"- (key: string) => void"}}}}}catch{}export{n as K};
