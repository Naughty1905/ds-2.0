import{U as p,M as x,e as k}from"./chunk-HLWAVYOI-VSo3NTqb.js";import{J as l,a7 as m}from"./index-DWTGGx_t.js";import{a as c,j as e,F as d}from"./jsx-runtime-2xDJh5tt.js";import{r as w}from"./index-CBqU2yxZ.js";import{s as i,H as N,E as o,T as M}from"./Tests-CMn2Ae2s.js";import{F as D}from"./FigmaEmbed-BZvBpmnf.js";import{P as T}from"./Properties-CxpA6DoR.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import{T as j}from"./index-BR2u5piM.js";import"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import{a as A}from"./argsTypes-Df-egiFA.js";import{useMDXComponents as q}from"./index-DI5IigMn.js";import"./iframe-D-x5ZCeL.js";import"../sb-preview/runtime.js";import"./react-16-TlkZjCkL.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bw8VTzHM.js";import"./get-DbIoSxMH.js";import"./index-C7bqoVJc.js";import"./index-DXbSeult.js";import"./uniq-BmPCj0d7.js";import"./index-DrFu-skq.js";import"./clsx.m-CH7BE6MN.js";import"./types-CpBSVUgC.js";import"./.jest-test-results-wp1zFx1N.js";import"./index-Y8Vz1tB_.js";const S=()=>{const[t,r]=w.useState(0),s=`const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`,f=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Одиночный выбор"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`,b=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Множественный выбор"
        multiple
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`,g=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Выбор с поиском"
        isSearchable
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,h=`import { Select } from '@nlmk/ds-2.0';

${s}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`,y=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Размер xs"
        size="xs"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,C=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Скролл"
        scrollingItems={2}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`,v=`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${s}

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Цвет success"
        color="success"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;return c("div",{className:i.wrapper,children:[e(N,{title:"Select",description:"Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции.",isBeta:!0,codeLink:"https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select",figmaLink:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),e("div",{className:i.tabs,children:c(l,{children:[e(l.Tab,{label:"Разработчику",active:Number(t)===0,onClick:()=>r(0)}),e(l.Tab,{label:"Дизайнеру",active:Number(t)===1,onClick:()=>r(1)}),e(l.Tab,{label:"Тестирование",active:Number(t)===2,onClick:()=>r(2)})]})}),Number(t)===0&&c(d,{children:[e(o,{description:"Компонент Select с одиночным выбором",code:f}),e(o,{description:"Компонент Select с возможностью множественного выбора",code:b}),e(o,{description:"Компонент Select с возможностью поиска нужного элемента",code:g}),e(o,{description:"Select в состоянии disabled",code:h}),e(o,{description:"Экстра компактный Select",code:y}),e(o,{description:"Select с установленным скроллом",code:C}),e(o,{description:"Select с цветом success",code:v}),e(o,{height:200,description:"Пустой Select",code:`
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={[]}
        label="Пустой select"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`}),e(T,{argsTypes:A})]}),Number(t)===1&&e(D,{url:"https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"}),Number(t)===2&&e(j,{variant:"Heading4",color:"primary",children:e(M,{componentName:"Select"})})]})};function n(t){return c(d,{children:[e(x,{title:"Components/Select/Info",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]}}),`
`,e(k,{name:"Docs",children:e(p,{children:e(S,{})})})]})}function E(t={}){const{wrapper:r}=Object.assign({},q(),t.components);return r?e(r,{...t,children:e(n,{...t})}):n()}const u=()=>e(p,{children:e(S,{})});u.storyName="Docs";u.parameters={storySource:{source:"<Unstyled><Stories /></Unstyled>"}};const a={title:"Components/Select/Info",parameters:{design:{type:"figma",url:"https://www.figma.com/file/3dTe0kYNFqQO3VnjJ10jyv/DS2.0-Input?type=design&node-id=207-40299&mode=dev"},jest:["Select.test.tsx"]},component:m,tags:["stories-mdx"],includeStories:["docs"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:E};const ue=["docs"];export{ue as __namedExportsOrder,a as default,u as docs};
