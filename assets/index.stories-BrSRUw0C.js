import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DmM0KDA7.js";import{c as A}from"./utils-mftCjzGE.js";import"./index-DfMBgcrl.js";import{K as j}from"./index-DyOA60Ui.js";import"./index-1iaONuYK.js";import"./index-rouSbcV4.js";import"./index-ERCqe6-m.js";import"./index-CFODuMGH.js";const p=({formProps:t,className:s,...o})=>e.jsx("div",{className:A("w-full h-[100svh] flex flex-col justify-center items-center bg-linear-to-b from-core-dark-surface-brand-primary via-45% to-core-dark-surface-default-background to-90%",s),...o,children:e.jsx(j,{...t,hasRecipient:(t==null?void 0:t.hasRecipient)??!1})});p.__docgenInfo={description:"Full screen component with `KeypadForm`. Spreads wrapping div props",methods:[],displayName:"KeypadScreen",props:{formProps:{required:!0,tsType:{name:"Partial",elements:[{name:"KeypadFormProps"}],raw:"Partial<KeypadFormProps>"},description:""}}};const C={component:p,title:"Screens/Keypad",parameters:{backgrounds:{default:"dark"},layout:"fullscreen"}},r={args:{formProps:{hasRecipient:!1}}},a={args:{formProps:{hasRecipient:!0}}},i={args:{formProps:{hasRecipient:!1}},render:t=>{const[s,o]=m.useState(!0),[u,S]=m.useState(null),[c,y]=m.useState(null);return e.jsxs("div",{className:"h-svh space-y-32 text-white text-sm",children:[e.jsx(p,{formProps:{hasRecipient:s,onInputChange:n=>y(n),onRequestSubmit:n=>S(n),buttonProps:{size:"bigAF"}}}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>o(n=>!n),className:"mr-8"}),"Recipient selected"]}),c&&e.jsxs("div",{children:[e.jsx("b",{children:"Live amount:"})," ",c.formatted," (",c.raw,")"]}),u!==null&&e.jsxs("div",{children:[e.jsx("b",{children:"Submitted amount:"})," $",u.toFixed(2)]})]})]})}};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,R,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(R=i.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};const q=["No_Recipient","Has_Recipient","Dynamic_State"];export{i as Dynamic_State,a as Has_Recipient,r as No_Recipient,q as __namedExportsOrder,C as default};
