import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{K as c}from"./KeypadForm-GZ7lj25X.js";import"./utils-CTirK_BG.js";import"./KeypadInput-CsiYF_1i.js";import"./KeypadDisplay-Bzj_4vOM.js";import"./KeypadPad-BQ4R73J0.js";import"./KeypadKey-BNGj0nQk.js";import"./RectangularButton-Cv5Tmrxk.js";const f={component:c,title:"Components/Keypad/Form",parameters:{backgrounds:{default:"dark"}}},n={args:{hasRecipient:!0},render:()=>{const[a,d]=i.useState(!0),[o,p]=i.useState(null),[s,l]=i.useState(null);return e.jsxs("div",{className:"p-24 space-y-32 text-white text-sm",children:[e.jsx(c,{hasRecipient:a,onInputChange:t=>{l(t)},onRequestSubmit:t=>{p(t)},buttonProps:{size:"bigAF"}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>d(t=>!t),className:"mr-8"}),"Recipient selected"]}),s&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",s.formatted," (",s.raw,")"]}),o!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",o.toFixed(2)]})]})]})}};var r,u,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,f as default};
