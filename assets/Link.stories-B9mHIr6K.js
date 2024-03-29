import{j as r}from"./jsx-runtime-2xDJh5tt.js";import{a3 as o,u as b,r as S}from"./index-DWTGGx_t.js";import"./generateUUID-DZpKhNdB.js";import"./index-C-x6zlLc.js";import"./index-CgSHB1U0.js";import"./index-BR2u5piM.js";import{I as p}from"./index-D3aZeTS2.js";import"./index-pmCx02Kh.js";import"./index-j1olA-rT.js";import"./index-Dp7-Jy-a.js";import"./index-ByRza-M8.js";import"./32-BI8cdrFX.js";import"./index-CBqU2yxZ.js";import{s as z}from"./styles.module-DeLvTIFi.js";import{a as D}from"./argsTypes-B5JlHr61.js";import"./clsx.m-CH7BE6MN.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-Y8Vz1tB_.js";const O="Link по умолчанию",_="Link с разными параметрами target",j="Link с разными размерами",M="Не активный Link",v="Link с иконками",R=e=>r("div",{className:z.wrapper,children:e()}),se={title:"Components/Link/Stories",component:o,decorators:[R],argTypes:D},s=e=>r(o,{...e,children:e.children});s.storyName=O;s.args={children:"W3Schools",href:"https://www.w3schools.com/"};const n=e=>r(o,{...e,children:e.children});n.storyName=M;n.args={children:"W3Schools",href:"https://www.w3schools.com/",disabled:!0};const a=e=>r("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:Object.values(b).map(c=>r(o,{target:c,...e,children:c}))});a.storyName=_;a.args={href:"https://www.lipsum.com/"};const t=e=>r(o,{...e,children:e.children});t.storyName=v;t.args={children:v,href:"https://www.lipsum.com/",size:S.h1,disabled:!1,leftIcon:r(p,{name:"IconBunkerOutlined16"}),rightIcon:r(p,{name:"IconBunkerOutlined16"})};const i=e=>r("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:Object.values(S).map(c=>r(o,{size:c,...e,children:c}))});i.storyName=j;i.args={href:"https://www.lipsum.com/",disabled:!1};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,k,y;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {Object.values(targetMapping).map((target: targetMapping) => <Link target={target} {...argTypes}>
          {target}
        </Link>)}
    </div>;
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,f,w;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <Link {...argTypes} children={argTypes.children} />;
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var N,T,x;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(argTypes: ILink): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      {Object.values(sizeMapping).map((size: sizeMapping) => <Link size={size} {...argTypes}>
          {size}
        </Link>)}
    </div>;
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const ne=["DefaultLink","DisabledLink","LinkTargets","IconLink","LinkSizes"];export{s as DefaultLink,n as DisabledLink,t as IconLink,i as LinkSizes,a as LinkTargets,ne as __namedExportsOrder,se as default};
