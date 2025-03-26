import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{K as c}from"./index-DyOA60Ui.js";import"./utils-mftCjzGE.js";import"./index-rouSbcV4.js";import"./index-1iaONuYK.js";import"./index-CFODuMGH.js";import"./index-DfMBgcrl.js";import"./index-ERCqe6-m.js";const j={component:c,title:"Components/Keypad/Form",parameters:{backgrounds:{default:"dark"}}},n={args:{hasRecipient:!0},render:()=>{const[a,d]=i.useState(!0),[o,p]=i.useState(null),[s,l]=i.useState(null);return e.jsxs("div",{className:"p-24 space-y-32 text-white text-sm",children:[e.jsx(c,{hasRecipient:a,onInputChange:t=>{l(t)},onRequestSubmit:t=>{p(t)},buttonProps:{size:"bigAF"}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>d(t=>!t),className:"mr-8"}),"Recipient selected"]}),s&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",s.formatted," (",s.raw,")"]}),o!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",o.toFixed(2)]})]})]})}};var r,m,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
                <KeypadForm hasRecipient={hasRecipient} onInputChange={(value: {
        formatted: string;
        raw: number;
      }) => {
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,j as default};
