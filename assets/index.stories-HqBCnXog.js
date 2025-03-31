import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{K as d}from"./index-BEDi6hMJ.js";import"./utils-BaF2GUMg.js";import"./index-D6hMUx1j.js";import"./index-7qtYEIqm.js";import"./index-DuZwpYqb.js";import"./index-D8dwpnX4.js";import"./index-BH5XxVFd.js";import"./index-q3bty41n.js";const j={component:d,title:"Components/Keypad/Form",parameters:{backgrounds:{default:"dark"}}},n={args:{hasRecipient:!0},render:()=>{const[o,p]=r.useState(!0),[s,l]=r.useState(null),[i,c]=r.useState(null);return e.jsxs("div",{style:{padding:"var(--spacing-24)",marginTop:"8rem",color:"white",fontSize:"14px",fontFamily:"var(--font-brand-nunito"},children:[e.jsx(d,{hasRecipient:o,onInputChange:t=>{c(t)},onRequestSubmit:t=>{l(t)},buttonProps:{size:"bigAF"}}),e.jsxs("div",{style:{marginTop:"3rem"},children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:o,onChange:()=>p(t=>!t),style:{marginRight:"2rem"}}),"Recipient selected"]}),i&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",i.formatted," (",i.raw,")"]}),s!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",s.toFixed(2)]})]})]})}};var a,m,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    return <div style={{
      padding: "var(--spacing-24)",
      marginTop: "8rem",
      color: "white",
      fontSize: "14px",
      fontFamily: "var(--font-brand-nunito"
    }}>
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Default"];export{n as Default,F as __namedExportsOrder,j as default};
