import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{c as f}from"./utils-mftCjzGE.js";const S=e=>e.padStart(3,"0"),R=e=>{const n=S(e),u=n.slice(-2);return`${n.slice(0,-2).padStart(2,"0")}.${u}`},k=e=>e.replace(/^0+/,"")!=="",z=({rawValue:e,className:n})=>{const m=R(e||"000"),y=k(e),d=i.useRef(null),c=i.useRef(null),[r,h]=i.useState(60);return i.useEffect(()=>{const t=()=>{if(!d.current||!c.current)return;const s=d.current,l=c.current,a=window.getComputedStyle(s),w=parseFloat(a.paddingLeft)||0,v=parseFloat(a.paddingRight)||0,b=w+v,x=s.offsetWidth-b,g=l.scrollWidth;g>x?h(p=>Math.max(p*.9,16)):g<x*.9&&r<60&&h(p=>Math.min(p*1.1,60))};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e,r]),o.jsxs("div",{ref:d,className:f("font-brand font-semibold w-full px-6 py-[1.5dvh] rounded-16 flex justify-center items-center bg-core-dark-surface-default-background border border-core-dark-border-default-primary tabular-nums",n),style:{overflow:"hidden"},children:[o.jsx("sup",{className:f("mr-1 align-super",y?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),style:{fontSize:`${Math.max(r*.6,12)}px`},children:"$"}),o.jsx("div",{ref:c,style:{fontSize:`${r}px`,whiteSpace:"nowrap"},className:"flex items-center",children:m.split("").map((t,s)=>{const l=t===".",a=y;return o.jsx("span",{className:f(l?"mx-1":"",a?"text-core-dark-content-default-primary":"text-core-dark-content-disabled-secondary"),children:t},s)})})]})};z.__docgenInfo={description:`Renders a currency-formatted display (e.g. \`$00.00\`) typically used
above a numeric keypad in a point-of-sale flow.

The display auto-formats a raw string of digits from right to left,
enforcing a fixed 2-decimal currency layout. By default, it renders
as \`$00.00\` with greyed-out text, and transitions to active styles
(white text) when any non-zero digit is entered.

The dollar sign is superscripted and styled independently, and the
component is fully controlled via the \`rawValue\` prop.

The text size dynamically scales up or down to fit within its container, preventing overflow.`,methods:[],displayName:"KeypadDisplay",props:{rawValue:{required:!0,tsType:{name:"string"},description:'A string of digits representing the raw keypad input.\n\nExample: `"1"` → `$00.01`, `"123"` → `$1.23`\n@type - string'}}};export{z as K};
