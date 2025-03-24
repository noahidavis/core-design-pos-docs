import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DmM0KDA7.js";import{c as q}from"./utils-CTirK_BG.js";import{K as F}from"./KeypadInput-BWtDbpf4.js";import{R as C}from"./RectangularButton-Cv5Tmrxk.js";import"./KeypadDisplay-BNX--pDf.js";import"./KeypadPad-DFOiy_hm.js";import"./KeypadKey-BFoQuWGt.js";const f=({className:m,onInputChange:i,onRequestSubmit:r,hasRecipient:n,minAmount:a=.01,getLabel:o,buttonProps:t,...x})=>{const[l,y]=s.useState(0),[c,A]=s.useState("$0.00"),p=l>=a,w=!p||!n,R=s.useMemo(()=>l<a?"Enter an amount":n?o?o(c):`Request ${c}?`:"Awaiting recipient",[l,n,c,o,a]),S=u=>{y(u.raw),A(u.formatted),i==null||i(u)},j=u=>{var b;r&&p&&n&&r(l),(b=t==null?void 0:t.onClick)==null||b.call(t,u)};return e.jsxs("div",{className:q("w-full max-w-[650px] flex flex-col items-center gap-32",m),...x,children:[e.jsx(F,{onChange:S}),e.jsx("div",{className:"flex w-full",children:e.jsx(C,{id:"request-submit-button",className:"w-full",disabled:w,variant:n&&p?"secondary":"primary",size:"bigAF",label:R,onClick:j,...t})})]})};f.__docgenInfo={description:"Full-width (max 650px) form component for payment requests. Combines`KeypadInput` and `RectangularButton`. \nHandles input formatting, recipient state, and dynamic styling of button internally.",methods:[],displayName:"KeypadForm",props:{onInputChange:{required:!1,tsType:{name:'KeypadInputProps["onChange"]',raw:'KeypadInputProps["onChange"]'},description:"Callback when the amount changes"},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(amount: number) => void",signature:{arguments:[{type:{name:"number"},name:"amount"}],return:{name:"void"}}},description:"Called when the request button is clicked (after recipient & valid amount)"},hasRecipient:{required:!0,tsType:{name:"boolean"},description:"Whether a recipient has been selected and is ready to receive a request"},minAmount:{required:!1,tsType:{name:"number"},description:`Minimum raw dollar value to enable submission
(e.g. 0.01, 1.00, etc.)`,defaultValue:{value:"0.01",computed:!1}},getLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(amountFormatted: string) => string",signature:{arguments:[{type:{name:"string"},name:"amountFormatted"}],return:{name:"string"}}},description:"Optional override for formatting the request label (e.g. localization)"},buttonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"RectangularButtonProps"}],raw:"Partial<RectangularButtonProps>"},description:"Optional button props to override variant, size, etc"}},composes:["Omit"]};const H={component:f,title:"Components/Keypad/Form",parameters:{backgrounds:{default:"dark"}}},d={args:{hasRecipient:!0},render:()=>{const[m,i]=s.useState(!0),[r,n]=s.useState(null),[a,o]=s.useState(null);return e.jsxs("div",{className:"p-24 space-y-32 text-white text-sm",children:[e.jsx(f,{hasRecipient:m,onInputChange:t=>{o(t)},onRequestSubmit:t=>{n(t)},buttonProps:{size:"bigAF"}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:m,onChange:()=>i(t=>!t),className:"mr-8"}),"Recipient selected"]}),a&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",a.formatted," (",a.raw,")"]}),r!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",r.toFixed(2)]})]})]})}};var h,v,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hasRecipient: true
  },
  render: () => {
    const [hasRecipient, setHasRecipient] = useState(true);
    const [submittedAmount, setSubmittedAmount] = useState<number | null>(null);
    const [liveAmount, setLiveAmount] = useState<{
      formatted: string;
      raw: number;
    } | null>(null);
    return <div className="p-24 space-y-32 text-white text-sm">
                <KeypadForm hasRecipient={hasRecipient} onInputChange={value => {
        setLiveAmount(value);
      }} onRequestSubmit={amount => {
        setSubmittedAmount(amount);
      }} buttonProps={{
        size: "bigAF"
      }} />

                <div className="space-y-12">
                    <label>
                        <input type="checkbox" checked={hasRecipient} onChange={() => setHasRecipient(prev => !prev)} className="mr-8" />
                        Recipient selected
                    </label>

                    {liveAmount && <div>
                            <b>Live amount:</b> {liveAmount.formatted} ({liveAmount.raw})
                        </div>}

                    {submittedAmount !== null && <div>
                            <b>Submitted amount:</b> \${submittedAmount.toFixed(2)}
                        </div>}
                </div>
            </div>;
  }
}`,...(g=(v=d.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const I=["Default"];export{d as Default,I as __namedExportsOrder,H as default};
