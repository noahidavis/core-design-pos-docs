import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DmM0KDA7.js";import{c as h}from"./utils-CTirK_BG.js";import{K as v}from"./KeypadForm-DUqYELQR.js";import"./KeypadInput-BWtDbpf4.js";import"./KeypadDisplay-BNX--pDf.js";import"./KeypadPad-DFOiy_hm.js";import"./KeypadKey-BFoQuWGt.js";import"./RectangularButton-Cv5Tmrxk.js";const m=({formProps:t,className:s,...r})=>e.jsx("div",{className:h("w-full h-full pt-48 pb-32 flex flex-col items-center bg-linear-to-b from-core-dark-surface-brand-primary via-45% to-core-dark-surface-default-background to-90%",s),...r,children:e.jsx(v,{...t,hasRecipient:(t==null?void 0:t.hasRecipient)??!1})});m.__docgenInfo={description:"Full screen component with `KeypadForm`. Spreads wrapping div props",methods:[],displayName:"KeypadScreen",props:{formProps:{required:!0,tsType:{name:"Partial",elements:[{name:"KeypadFormProps"}],raw:"Partial<KeypadFormProps>"},description:""}}};const w={component:m,title:"Screens/Keypad",parameters:{backgrounds:{default:"dark"}}},a={args:{formProps:{hasRecipient:!1}},render:t=>{const[s,r]=o.useState(!1),[c,d]=o.useState(null),[i,b]=o.useState(null);return e.jsxs("div",{className:"p-24 space-y-32 text-white text-sm",children:[e.jsx(m,{formProps:{hasRecipient:s,onInputChange:n=>b(n),onRequestSubmit:n=>d(n),buttonProps:{size:"bigAF"}}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>r(n=>!n),className:"mr-8"}),"Recipient selected"]}),i&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",i.formatted," (",i.raw,")"]}),c!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",c.toFixed(2)]})]})]})}};var u,p,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: false
    }
  },
  render: args => {
    const [hasRecipient, setHasRecipient] = useState(false);
    const [submittedAmount, setSubmittedAmount] = useState<number | null>(null);
    const [liveAmount, setLiveAmount] = useState<{
      formatted: string;
      raw: number;
    } | null>(null);
    return <div className="p-24 space-y-32 text-white text-sm">
                <KeypadScreen formProps={{
        hasRecipient,
        onInputChange: value => setLiveAmount(value),
        onRequestSubmit: amount => setSubmittedAmount(amount),
        buttonProps: {
          size: "bigAF"
        }
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
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,w as default};
