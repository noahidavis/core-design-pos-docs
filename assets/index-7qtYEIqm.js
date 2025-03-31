import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DmM0KDA7.js";import{c as y}from"./utils-BaF2GUMg.js";const R="_keypadDisplay_1855i_3",z="_dollarSign_1855i_18",$="_activeText_1855i_26",D="_inactiveText_1855i_30",W="_textWrapper_1855i_34",j="_decimal_1855i_40",t={keypadDisplay:R,dollarSign:z,activeText:$,inactiveText:D,textWrapper:W,decimal:j},N=e=>e.padStart(3,"0"),k=e=>{const a=N(e),f=a.slice(-2);return`${a.slice(0,-2).padStart(2,"0")}.${f}`},E=e=>e.replace(/^0+/,"")!=="",v=({rawValue:e,className:a})=>{const m=k(e||"000"),x=E(e),d=c.useRef(null),l=c.useRef(null),[i,g]=c.useState(60);return c.useEffect(()=>{const n=()=>{if(!d.current||!l.current)return;const s=d.current,p=l.current,r=window.getComputedStyle(s),w=parseFloat(r.paddingLeft)||0,S=parseFloat(r.paddingRight)||0,T=w+S,h=s.offsetWidth-T,_=p.scrollWidth;_>h?g(u=>Math.max(u*.9,16)):_<h*.9&&i<60&&g(u=>Math.min(u*1.1,60))};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[e,i]),o.jsxs("div",{ref:d,className:y(t.keypadDisplay,a),children:[o.jsx("sup",{className:y(t.dollarSign,x?t.activeText:t.inactiveText),style:{fontSize:`${Math.max(i*.5,12)}px`},children:"$"}),o.jsx("div",{ref:l,style:{fontSize:`${i}px`,whiteSpace:"nowrap"},className:t.textWrapper,children:m.split("").map((n,s)=>{const p=n===".",r=x;return o.jsx("span",{className:y(p?t.decimal:"",r?t.activeText:t.inactiveText),children:n},s)})})]})};try{v.displayName="KeypadDisplay",v.__docgenInfo={description:`Renders a currency-formatted display (e.g. \`$00.00\`) typically used
above a numeric keypad in a point-of-sale flow.

The display auto-formats a raw string of digits from right to left,
enforcing a fixed 2-decimal currency layout. By default, it renders
as \`$00.00\` with greyed-out text, and transitions to active styles
(white text) when any non-zero digit is entered.

The dollar sign is superscripted and styled independently, and the
component is fully controlled via the \`rawValue\` prop.

The text size dynamically scales up or down to fit within its container, preventing overflow.`,displayName:"KeypadDisplay",props:{rawValue:{defaultValue:null,description:'A string of digits representing the raw keypad input.\n\nExample: `"1"` → `$00.01`, `"123"` → `$1.23`',name:"rawValue",required:!0,type:{name:"- string"}}}}}catch{}export{v as K};
