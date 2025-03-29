import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CePRvBtH.js";import{M as r}from"./index-BFZ71xYR.js";import"./index-DmM0KDA7.js";import"./iframe-fLAXCkTl.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const g=()=>{const i={path:"path",svg:"svg",...s()};return e.jsx(i.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(i.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Welcome"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-page-heading",children:e.jsx(n.h1,{id:"neopay-coredesign-merchant-pos-ui-library-corepos",children:"NeoPay CoreDesign: Merchant POS UI Library (CorePOS)"})}),e.jsxs("div",{children:[e.jsx(n.p,{children:"React UI library for merchant pos. Also exposes the primitive tokens used in components. Strongly typed."}),e.jsxs(n.p,{children:["Components are styled using a combination of ",e.jsx(n.code,{children:"tailwind-variants"})," and ",e.jsx(n.code,{children:"clsx"})," for quick, extendable styling. Most, if not all, components have their base component props spread along with a ",e.jsx(n.code,{children:"className"})," prop for extending/overriding Tailwind styling--some, not all, components have their ref forwarded (e.g. ",e.jsx(n.code,{children:"<EmailInput />"})," and ",e.jsx(n.code,{children:"<PasswordInput />"}),")."]}),e.jsxs(n.p,{children:["Repo can be accessed ",e.jsx(n.a,{href:"https://github.com/NeoManaLabs/core-design-pos",rel:"nofollow",children:"here"}),"."]}),e.jsx(n.h2,{id:"dependencies",children:"Dependencies"}),e.jsxs(n.p,{children:["This package was designed to be React framework-agnostic (Next.js / Electron / plain React). It only bundles essential styling utilities, such as ",e.jsx(n.code,{children:"clsx"}),", ",e.jsx(n.code,{children:"tailwind-merge"}),", and ",e.jsx(n.code,{children:"@emotion/is-prop-valid"}),", as well as ",e.jsx(n.code,{children:"tailwind-variants"})," for flexible styling. Additionally, ",e.jsx(n.code,{children:"motion"})," / ",e.jsx(n.code,{children:"framer-motion"})," is used for light global UI animations."]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"You must provide / install"})," the following peer dependencies:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`"motion": "^12.6.2",
"react": "^18.0.0 || ^19.0.0",
"react-dom": "^18.0.0 || ^19.0.0",
"tailwind-variants": "^1.0.0",
"tailwindcss": "^4.0.15"
`})}),e.jsx(n.h2,{id:"installation",children:"Installation"}),e.jsxs(n.p,{children:["This package is private. In order to install it you will need the access token (ask @Noah). Once you have the token, follow the instructions in the ",e.jsx(n.strong,{children:"Github NPM Registries"})," link and create a ",e.jsx(n.code,{children:".npmrc"})," file in the consuming project's root or authenticate via the npm CLI:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// This library was built with yarn@4.7.0

yarn add @neomanalabs/core-design-pos

npm install @neomanalabs/core-design-pos

`})}),e.jsx(n.h2,{id:"usage",children:"Usage"}),e.jsx(n.h3,{id:"import-global-styles",children:"Import Global Styles"}),e.jsx(n.p,{children:"Import the bundled globals.css file in your app’s entry point to ensure core styling and fonts are applied:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// In your app entry point

import "@neomanalabs/core-design-pos/dist/globals.css"
`})}),e.jsx(n.h3,{id:"wrap-with-globaluiprovider",children:"Wrap with GlobalUIProvider"}),e.jsx(n.p,{children:"Wrap your root app component in the GlobalUIProvider. This handles global overlays like Toast and HelpModal and provides a hook for controlling them:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { GlobalUIProvider } from "@neomanalabs/core-design-pos";

const App = () => {
    return (
        <GlobalUIProvider>
            { /* Rest of your app */ }
        </GlobalUIProvider>
    )
}
`})}),e.jsx(n.h2,{id:"extending-and-overriding",children:"Extending and Overriding"}),e.jsx(n.p,{children:"Most components support one of or some combination of the following:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," for overriding default tailwind styles"]}),`
`,e.jsx(n.li,{children:"props spreading"}),`
`,e.jsxs(n.li,{children:["Ref forwarding (where applicable, like ",e.jsx(n.code,{children:"<EmailInput />"}),")"]}),`
`]}),e.jsx(n.p,{children:"If something seems off, hit up @Noah"}),e.jsx(n.h2,{id:"resources",children:"Resources"}),e.jsx(n.h4,{id:"github-npm-registries",children:"GitHub NPM Registries"}),e.jsx(n.p,{children:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry"}),e.jsx(n.h4,{id:"tailwind-4",children:"Tailwind 4"}),e.jsx(n.p,{children:"https://tailwindcss.com/"}),e.jsx(n.h4,{id:"storybook-official-docs",children:"Storybook Official Docs"}),e.jsx(n.p,{children:"https://storybook.js.org/docs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n.p,{children:"--"}),e.jsx("sub",{children:"Built with 💜 by @Noah for NeoMana Labs"})]})]}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-page-heading {
    margin-bottom: 32px;
  }

  `})]})}function m(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{g as RightArrow,m as default};
