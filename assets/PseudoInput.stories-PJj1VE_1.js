import{j as e,a as E}from"./jsx-runtime-2xDJh5tt.js";import{ab as r,n as c}from"./index-BXHiB0mH.js";import"./index-CBqU2yxZ.js";import{a as N}from"./argsTypes-O65UKabv.js";import"./clsx.m-CH7BE6MN.js";import"./generateUUID-C4dJbmAm.js";import"./32-CjiFhZy5.js";import"./index-nWYpQihe.js";import"./index-DdUHXjGd.js";import"./index-tm22VGJr.js";import"./index-CjrtVycB.js";import"./index-DGfD3wI4.js";import"./index-D60oXbFF.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./index-BLysk004.js";import"./index-CMH8wQUv.js";import"./index-DHsx0XSp.js";import"./index-D-OkhesI.js";import"./get-DbIoSxMH.js";const f="_wrapper_11q3l_1",z="_row_11q3l_8",_={wrapper:f,row:z},o="Label",s="PseudoInput",J=p=>e("div",{className:_.wrapper,children:p()}),$={title:"Components/PseudoInput/Stories",component:r,argTypes:N,decorators:[J]},t=p=>e(r,{...p,label:o,children:s});t.storyName="PseudoInput по умолчанию";const a=()=>E("div",{className:_.row,children:[e(r,{label:o,size:"m",children:s}),e(r,{label:o,size:"s",children:s})]});a.storyName="PseudoInput разных размеров";const u=()=>e(r,{label:o,labelColor:c.error,children:s});u.storyName="PseudoInput в состоянии error";const n=()=>e(r,{label:o,labelColor:c.warning,children:s});n.storyName="PseudoInput в состоянии warning";const l=()=>e(r,{label:o,labelColor:c.success,children:s});l.storyName="PseudoInput в состоянии success";var m,d,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: IPseudoInputProps): JSX.Element => <PseudoInput {...argTypes} label={labelText}>
    {value}
  </PseudoInput>`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var I,P,b;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(): JSX.Element => <div className={styles.row}>
    <PseudoInput label={labelText} size="m">
      {value}
    </PseudoInput>
    <PseudoInput label={labelText} size="s">
      {value}
    </PseudoInput>
  </div>`,...(b=(P=a.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var S,g,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`(): JSX.Element => <PseudoInput label={labelText} labelColor={customInputColors.error}>
    {value}
  </PseudoInput>`,...(w=(g=u.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(): JSX.Element => <PseudoInput label={labelText} labelColor={customInputColors.warning}>
    {value}
  </PseudoInput>`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,T,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): JSX.Element => <PseudoInput label={labelText} labelColor={customInputColors.success}>
    {value}
  </PseudoInput>`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const ee=["PseudoInputDefault","PseudoInputSizeL","PseudoInputError","PseudoInputWarning","PseudoInputSuccess"];export{t as PseudoInputDefault,u as PseudoInputError,a as PseudoInputSizeL,l as PseudoInputSuccess,n as PseudoInputWarning,ee as __namedExportsOrder,$ as default};
