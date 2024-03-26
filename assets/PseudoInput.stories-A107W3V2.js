import{U as l,M as g,e as h}from"./chunk-HLWAVYOI-CvC2M4ez.js";import{J as s,q as j,a6 as c}from"./index-eGAKGCMw.js";import{a as r,j as t,F as I}from"./clsx.m-CcuEzMhP.js";import{r as y}from"./index-CBqU2yxZ.js";import{s as m,H as C,E as i,T as x}from"./Tests-hJTNZTIm.js";import{F as w}from"./FigmaEmbed-BYPE4rKi.js";import{P as T}from"./Properties-Alrk5O4r.js";/* empty css               */import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-BzeUb5Di.js";import{T as v}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as L}from"./argsTypes-DYvC--jN.js";import{useMDXComponents as M}from"./index-DI5IigMn.js";import"./iframe-BBqWh2Uy.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-BYskyYAB.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BgAfLPyt.js";import"./index-BO3pQ7ot.js";const a="PseudoInput",u="https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0",P=()=>{const[e,o]=y.useState(0),n=f=>e===f;return r("div",{className:m.wrapper,children:[t(C,{title:a,description:"PseudoInput - элемент, который позволяет отображать информацию.",isStable:!0,codeLink:`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${a}`,figmaLink:u}),t("div",{className:m.tabs,children:r(s,{children:[t(s.Tab,{label:"Разработчику",active:n(0),onClick:()=>o(0)}),t(s.Tab,{label:"Дизайнеру",active:n(1),onClick:()=>o(1)}),t(s.Tab,{label:"Тестирование",active:n(2),onClick:()=>o(2)})]})}),e==0&&r(I,{children:[t(i,{height:200,description:"PseudoInput по умолчанию. Компонент предназначен только для чтения пропсов и вывода их на экран",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <PseudoInput label="Label">
    PseudoInput
  </PseudoInput>
)
              `}),t(i,{description:"PseudoInput разных размеров. Компонент может быть отображен с увеличенным шрифтом: дефолтное значение - s (14px размер лейбла и 16px размер внутреннего текста) и большой - m (16px и 20px). Нужный параметр необходимо передать в проп size.",code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" size="m">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" size="s">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t(i,{description:`Различные состояния PseudoInput. В компонент можно передать проп labelColor со значениями: ${Object.values(j).join(" | ")} для отображения состояний компонента`,code:`import { PseudoInput } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <PseudoInput label="Label" labelColor="error">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="warning">
    PseudoInput
  </PseudoInput>
  <PseudoInput label="Label" labelColor="success">
    PseudoInput
  </PseudoInput>
  </>
)
              `}),t(T,{argsTypes:L})]}),e==1&&t(w,{url:u}),e==2&&t(v,{variant:"Heading4",color:"primary",children:t(x,{componentName:a})})]})};function d(e){return r(I,{children:[t(g,{title:"Components/PseudoInput/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]}}),`
`,t(h,{name:"Docs",children:t(l,{children:t(P,{})})})]})}function N(e={}){const{wrapper:o}=Object.assign({},M(),e.components);return o?t(o,{...e,children:t(d,{...e})}):d()}const b=()=>t(l,{children:t(P,{})});b.storyName="Docs";b.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const p={title:"Components/PseudoInput/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/Input-%CE%B2?node-id=207%3A40297&t=l4wSBLji2Mz59Nd6-0"},jest:["PseudoInput.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:N};const dt=["docs"];export{dt as __namedExportsOrder,p as default,b as docs};