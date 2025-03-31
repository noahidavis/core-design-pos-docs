import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DmM0KDA7.js";import{K as f}from"./index-AkIfAW-O.js";import"./utils-BaF2GUMg.js";import"./index-BEDi6hMJ.js";import"./index-D6hMUx1j.js";import"./index-7qtYEIqm.js";import"./index-DuZwpYqb.js";import"./index-D8dwpnX4.js";import"./index-BH5XxVFd.js";import"./index-q3bty41n.js";const K={component:f,title:"Screens/Keypad",parameters:{backgrounds:{default:"dark"},layout:"fullscreen"}},t={args:{formProps:{hasRecipient:!1}}},r={args:{formProps:{hasRecipient:!0}}},s={args:{formProps:{hasRecipient:!1}},render:A=>{const[a,R]=o.useState(!0),[m,S]=o.useState(null),[i,x]=o.useState(null);return e.jsxs("div",{style:{height:"100svh",marginTop:"8rem",color:"white",fontSize:"14px",fontFamily:"var(--font-brand-nunito)"},children:[e.jsx(f,{formProps:{hasRecipient:a,onInputChange:n=>x(n),onRequestSubmit:n=>S(n),buttonProps:{size:"bigAF"}}}),e.jsxs("div",{style:{marginTop:"3rem"},children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:a,onChange:()=>R(n=>!n),style:{marginRight:"2rem"}}),"Recipient selected"]}),i&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",i.formatted," (",i.raw,")"]}),m!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",m.toFixed(2)]})]})]})}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: false
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: true
    }
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,v,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    return <div style={{
      height: "100svh",
      marginTop: "8rem",
      color: "white",
      fontSize: "14px",
      fontFamily: "var(--font-brand-nunito)"
    }}>
                <KeypadScreen formProps={{
        hasRecipient,
        onInputChange: value => setLiveAmount(value),
        onRequestSubmit: amount => setSubmittedAmount(amount),
        buttonProps: {
          size: "bigAF"
        }
      }} />

                <div style={{
        marginTop: "3rem"
      }}>
                    <label>
                        <input type="checkbox" checked={hasRecipient} onChange={() => setHasRecipient(prev => !prev)} style={{
            marginRight: "2rem"
          }} />
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
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const T=["No_Recipient","Has_Recipient","Dynamic_State"];export{s as Dynamic_State,r as Has_Recipient,t as No_Recipient,T as __namedExportsOrder,K as default};
