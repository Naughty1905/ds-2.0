import{U as p,M as T,e as f}from"./chunk-HLWAVYOI-D1fLzzdK.js";import{J as o,ab as c}from"./index-VLfweUxF.js";import{a as r,j as e,F as d}from"./clsx.m-CcuEzMhP.js";import{r as g}from"./index-CBqU2yxZ.js";import{s as n,H as u,E as s,T as b}from"./Tests-CShFLtrb.js";import{F as h}from"./FigmaEmbed-DCpTw2G9.js";import{P as y}from"./Properties-Ci0YEq_Y.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import{T as w}from"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{a as C}from"./argsTypes-CyaKMt9D.js";import{useMDXComponents as P}from"./index-DI5IigMn.js";import"./iframe-DpfJ_wxM.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-EIRT5I3Z-DXochb4c.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-CImMyoKX.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-BdQ446li.js";import"./index-BO3pQ7ot.js";const l=()=>{const[t,i]=g.useState(0);return r("div",{className:n.wrapper,children:[e(u,{title:"TimePicker",description:"TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени.",isStable:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:n.tabs,children:r(o,{children:[e(o.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>i(0)}),e(o.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>i(1)}),e(o.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>i(2)})]})}),Number(t)===0&&r(d,{children:[e(s,{height:250,description:"Основной TimePicker. Позволяет выбирать время.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e(s,{height:250,description:"TimePicker с лейблом.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    label="Время"
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e(s,{height:250,description:"Отключенный TimePicker. Не доступен для взаимодействия.",code:`import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    disabled
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`}),e(y,{argsTypes:C})]}),Number(t)===1&&e(h,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(w,{variant:"Heading4",color:"primary",children:e(b,{componentName:"Select"})})]})};function a(t){return r(d,{children:[e(T,{title:"Components/TimePicker/Info",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]}}),`
`,e(f,{name:"Docs",children:e(p,{children:e(l,{})})})]})}function v(t={}){const{wrapper:i}=Object.assign({},P(),t.components);return i?e(i,{...t,children:e(a,{...t})}):a()}const k=()=>e(p,{children:e(l,{})});k.storyName="Docs";k.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const m={title:"Components/TimePicker/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40298&mode=dev"},jest:["TimePicker.test.tsx"]},component:c,tags:["stories-mdx"],includeStories:["docs"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:v};const ae=["docs"];export{ae as __namedExportsOrder,m as default,k as docs};
