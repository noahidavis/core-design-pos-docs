import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{K as R}from"./index-C3KSki4r.js";import"./utils-mftCjzGE.js";import"./index-c__MdSPo.js";import"./index-D8uL_6ku.js";import"./index-C_y0cQ71.js";import"./index-CeWxteyt.js";import"./index-Cy4GoX19.js";import"./index-BtEeeMUy.js";import"./index-Cb2Qf4PO.js";const K={component:R,title:"Screens/Keypad",parameters:{backgrounds:{default:"dark"},layout:"fullscreen"}},n={args:{formProps:{hasRecipient:!1}}},s={args:{formProps:{hasRecipient:!0}}},r={args:{formProps:{hasRecipient:!1}},render:A=>{const[o,f]=i.useState(!0),[m,S]=i.useState(null),[a,g]=i.useState(null);return e.jsxs("div",{className:"h-svh space-y-32 text-white text-sm",children:[e.jsx(R,{formProps:{hasRecipient:o,onInputChange:t=>g(t),onRequestSubmit:t=>S(t),buttonProps:{size:"bigAF"}}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>f(t=>!t),className:"mr-8"}),"Recipient selected"]}),a&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",a.formatted," (",a.raw,")"]}),m!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",m.toFixed(2)]})]})]})}};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: false
    }
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: true
    }
  }
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: false
    }
  },
  render: args => {
    const [hasRecipient, setHasRecipient] = useState(true);
    const [submittedAmount, setSubmittedAmount] = useState<number | null>(null);
    const [liveAmount, setLiveAmount] = useState<{
      formatted: string;
      raw: number;
    } | null>(null);
    return <div className="h-svh space-y-32 text-white text-sm">
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
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const E=["No_Recipient","Has_Recipient","Dynamic_State"];export{r as Dynamic_State,s as Has_Recipient,n as No_Recipient,E as __namedExportsOrder,K as default};
