import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{K as c}from"./index-D8uL_6ku.js";import"./utils-mftCjzGE.js";import"./index-C_y0cQ71.js";import"./index-CeWxteyt.js";import"./index-Cy4GoX19.js";import"./index-c__MdSPo.js";import"./index-BtEeeMUy.js";import"./index-Cb2Qf4PO.js";const y={component:c,title:"Components/Keypad/Form",parameters:{backgrounds:{default:"dark"}}},n={args:{hasRecipient:!0},render:()=>{const[a,d]=i.useState(!0),[o,p]=i.useState(null),[s,l]=i.useState(null);return e.jsxs("div",{className:"p-24 space-y-32 text-white text-sm",children:[e.jsx(c,{hasRecipient:a,onInputChange:t=>{l(t)},onRequestSubmit:t=>{p(t)},buttonProps:{size:"bigAF"}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>d(t=>!t),className:"mr-8"}),"Recipient selected"]}),s&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",s.formatted," (",s.raw,")"]}),o!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",o.toFixed(2)]})]})]})}};var r,m,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Default"];export{n as Default,F as __namedExportsOrder,y as default};
