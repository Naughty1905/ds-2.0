import{j as o}from"./clsx.m-CcuEzMhP.js";import{M as e}from"./index-VLfweUxF.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import"./index-fbTu1Hcf.js";import"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import{e as n}from"./32-BmhDzcbC.js";import"./index-CBqU2yxZ.js";import{a as p}from"./argsTypes-BON6Pgpf.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";const c="_wrapper_hzl1h_1",m="_table_hzl1h_8",l={wrapper:c,table:m},u=t=>o("div",{style:{minHeight:80},children:t()}),D={title:"Components/Button/Stories",component:e,decorators:[u],argTypes:p},r=t=>o("div",{className:l.wrapper,children:t.iconButton?o(e,{...t,iconButton:o(n,{})}):o(e,{...t,startIcon:t.startIcon&&o(n,{}),endIcon:t.endIcon&&o(n,{}),children:"Button"})});r.storyName="Кнопка по умолчанию";var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(argTypes: IButtonProps): JSX.Element => {
  return <div className={styles.wrapper}>
      {argTypes.iconButton ? <Button {...argTypes} iconButton={<IconArticleOutlined24 />} /> : <Button {...argTypes} startIcon={argTypes.startIcon && <IconArticleOutlined24 />} endIcon={argTypes.endIcon && <IconArticleOutlined24 />}>
          Button
        </Button>}
    </div>;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const E=["ButtonDefault"];export{r as ButtonDefault,E as __namedExportsOrder,D as default};
