import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DmM0KDA7.js";import{c as A}from"./utils-mftCjzGE.js";import"./index-CQvbv9qx.js";import{K as _}from"./index-BEm4yTBR.js";import"./index-CeWxteyt.js";import"./index-BDruVakc.js";import"./index-CcsVPQhZ.js";import"./index-Cb2Qf4PO.js";import"./index-BRMJmq_u.js";const o=({formProps:t,className:s,...c})=>e.jsx("div",{className:A("w-full h-[100svh] flex flex-col justify-center items-center bg-linear-to-b from-core-dark-surface-brand-primary via-45% to-core-dark-surface-default-background to-90%",s),...c,children:e.jsx(_,{...t,hasRecipient:(t==null?void 0:t.hasRecipient)??!1})});try{o.displayName="KeypadScreen",o.__docgenInfo={description:"Full screen component with `KeypadForm`. Spreads wrapping div props",displayName:"KeypadScreen",props:{formProps:{defaultValue:null,description:"",name:"formProps",required:!0,type:{name:"Partial<KeypadFormProps>"}}}}}catch{}const q={component:o,title:"Screens/Keypad",parameters:{backgrounds:{default:"dark"},layout:"fullscreen"}},r={args:{formProps:{hasRecipient:!1}}},a={args:{formProps:{hasRecipient:!0}}},i={args:{formProps:{hasRecipient:!1}},render:t=>{const[s,c]=p.useState(!0),[u,R]=p.useState(null),[m,S]=p.useState(null);return e.jsxs("div",{className:"h-svh space-y-32 text-white text-sm",children:[e.jsx(o,{formProps:{hasRecipient:s,onInputChange:n=>S(n),onRequestSubmit:n=>R(n),buttonProps:{size:"bigAF"}}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>c(n=>!n),className:"mr-8"}),"Recipient selected"]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",m.formatted," (",m.raw,")"]}),u!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",u.toFixed(2)]})]})]})}};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: false
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var b,v,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formProps: {
      hasRecipient: true
    }
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const E=["No_Recipient","Has_Recipient","Dynamic_State"];export{i as Dynamic_State,a as Has_Recipient,r as No_Recipient,E as __namedExportsOrder,q as default};
