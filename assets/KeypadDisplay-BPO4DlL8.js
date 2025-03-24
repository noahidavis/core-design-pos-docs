import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./utils-CTirK_BG.js";const p=e=>e.padStart(3,"0"),u=e=>{const t=p(e),a=t.slice(-2);return`${t.slice(0,-2).padStart(2,"0")}.${a}`},y=e=>e.replace(/^0+/,"")!=="",m=({rawValue:e,className:t})=>{const s=u(e||"000"),o=y(e);return n.jsxs("div",{className:r("font-brand font-semibold w-full px-64 py-32 min-h-120 rounded-16 flex justify-center items-center bg-core-dark-surface-default-background border border-core-dark-border-default-primary text-7xl tabular-nums",t),children:[n.jsx("sup",{className:r("mr-1 align-super text-[36px]",o?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),children:"$"}),s.split("").map((d,i)=>{const c=d===".",l=o;return n.jsx("span",{className:r(c?"mx-1":"",l?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),children:d},i)})]})};m.__docgenInfo={description:`Props for the \`KeypadDisplay\` component.

Renders a currency-formatted display (e.g. \`$00.00\`) typically used
above a numeric keypad in a point-of-sale flow.

The display auto-formats a raw string of digits from right to left,
enforcing a fixed 2-decimal currency layout. By default, it renders
as \`$00.00\` with greyed-out text, and transitions to active styles
(white text) when any non-zero digit is entered.

The dollar sign is superscripted and styled independently, and the
component is fully controlled via the \`rawValue\` prop.`,methods:[],displayName:"KeypadDisplay",props:{rawValue:{required:!0,tsType:{name:"string"},description:'A string of digits representing the raw keypad input.\n\nExample: `"1"` → `$00.01`, `"123"` → `$1.23`\n@type - string'}}};export{m as K};
