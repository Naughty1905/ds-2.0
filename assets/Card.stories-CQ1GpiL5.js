import{a as o,j as e,c as x,F as B}from"./clsx.m-CcuEzMhP.js";import{B as C,L as z,a3 as L,V as H,a7 as q,R as E,Q as _}from"./index-VLfweUxF.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import{T as w}from"./index-fbTu1Hcf.js";import{I as g}from"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{r as D}from"./index-CBqU2yxZ.js";import{s as M}from"./styles.module-DeLvTIFi.js";import{a as y}from"./chunk-WFFRPTHA-B5TewAtn.js";import{a as V,D as F,C as P}from"./text-BgaXRpz8.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./types-CpBSVUgC.js";import"./get-DbIoSxMH.js";import"./index-BO3pQ7ot.js";import"./preview-errors-Dg5lG0lC.js";import"./index-DrFu-skq.js";const S={"card-vertical":"_card-vertical_1yhvu_1","card-horizontal":"_card-horizontal_1yhvu_6"},r={"image-wrapper":"_image-wrapper_tzkhv_1","image-vertical":"_image-vertical_tzkhv_10","image-horizontal":"_image-horizontal_tzkhv_14","image-content":"_image-content_tzkhv_18","icon-wrapper":"_icon-wrapper_tzkhv_25","badges-wrapper":"_badges-wrapper_tzkhv_34","info-block":"_info-block_tzkhv_44","info-block-vertical":"_info-block-vertical_tzkhv_50","info-block-horizontal":"_info-block-horizontal_tzkhv_54","title-wrapper":"_title-wrapper_tzkhv_58","title-typography-helper":"_title-typography-helper_tzkhv_63","description-typography-helper":"_description-typography-helper_tzkhv_70","badge-helper":"_badge-helper_tzkhv_79"},m=({primaryButton:a,secondaryButton:t})=>o("div",{style:{display:"flex",gap:"8px"},children:[a!==null&&e("div",{"data-testid":"CARD_BUTTON_PRIMARY",children:e(C,{startIcon:a.startIcon||e(g,{name:"IconArticleOutlined24",containerSize:24,htmlColor:"var(--assigned-colors-button-main-text)"}),onClick:a.onClick,children:a.label})}),t!==null&&e("div",{"data-testid":"CARD_BUTTON_SECONDARY",children:e(C,{variant:"primary",fill:"clear",startIcon:t.startIcon,onClick:t.onClick,children:t.label})})]});try{m.displayName="BtnGroup",m.__docgenInfo={description:"",displayName:"BtnGroup",props:{primaryButton:{defaultValue:null,description:"",name:"primaryButton",required:!0,type:{name:"IButton | null"}},secondaryButton:{defaultValue:null,description:"",name:"secondaryButton",required:!0,type:{name:"IButton | null"}}}}}catch{}const j=[{label:"C++",value:"C++"},{label:"C#",value:"C#"},{disabled:!0,label:"Swift",value:"Swift"},{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Kotlin",value:"Kotlin"}],G="Кириллица важна Следует отметить, что перспективное планирование предполагает независимые способы реализации переосмысления внешнеэкономических политик. С другой стороны, семантический разбор внешних противодействий предопределяет высокую востребованность экономической целесообразности принимаемых решений. Являясь всего лишь частью общей картины, представители современных социальных резервов формируют глобальную экономическую сеть и при этом — объявлены нарушающими общечеловеческие нормы этики и морали. Таким образом, синтетическое тестирование предоставляет широкие возможности для укрепления моральных ценностей.",K={label:"Принять",onClick:y("onClick, Принять")},U={label:"Отменить",onClick:y("onClick, Отменить")},$="https://assets.euromoneydigital.com/dims4/default/38fddd1/2147483647/strip/true/crop/3576x2000+0+0/resize/840x470!/quality/90/?url=http%3A%2F%2Feuromoney-brightspot.s3.amazonaws.com%2Ff5%2Fb4%2F9835b4a04b02a0ac15aebbe9c774%2Fnlmk-alamy-23march22.jpg",J=["HTML","CSS","JavaScript","TypeScript","React","Angular","SQL","Jira"],d={label:"Programming languages",options:j,onSelectionChange:y("onSelectionChange")},u=({orientation:a,imageURL:t,badges:n})=>o("div",{className:x(r["image-wrapper"],r[`image-${a}`]),children:[t.length?e("img",{"data-testid":"CARD_IMAGE",className:r["image-content"],src:t,alt:"Card Icon"}):e("div",{"data-testid":"IMAGE_BLANK",className:r["icon-wrapper"],children:e(g,{name:"IconFactory32",htmlColor:"var(--dark-primary-navyblue-200)"})}),n.length!==0&&e("div",{"data-testid":"BADGES_WRAPPER",className:r["badges-wrapper"],children:n.map((p,s)=>e(z,{children:p},s))})]});try{u.displayName="ImageHelper",u.__docgenInfo={description:"",displayName:"ImageHelper",props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!0,type:{name:"string"}},badges:{defaultValue:null,description:"",name:"badges",required:!0,type:{name:"string[]"}}}}}catch{}const h=({title:a,href:t="",checkAction:n=null,checked:p=!1})=>{const[s,A]=D.useState(p),R=O=>{A(!s),n!==null&&n(O)},v=()=>e(w,{variant:"Heading3",className:r["title-typography-helper"],children:a});return t.length?e("div",{"data-testid":"TITLE_LINK",children:e(L,{href:t,size:"h3",rightIcon:e(g,{name:"IconArrowRightOutlined24"}),children:a})}):n!==null?o("div",{className:r["title-wrapper"],"data-testid":"TITLE_CHECKBOX",children:[e("div",{style:{display:"flex",alignItems:"center"},children:e(H,{checked:s,onChange:R})}),e(v,{})]}):e("div",{className:r["title-wrapper"],"data-testid":"TITLE_SIMPLE",children:e(v,{})})};try{h.displayName="TitleHelper",h.__docgenInfo={description:"",displayName:"TitleHelper",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},checkAction:{defaultValue:{value:"null"},description:"",name:"checkAction",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const c=({orientation:a=E.vertical})=>o(B,{children:[e(u,{orientation:a,imageURL:$,badges:J}),o("div",{className:x(r["info-block"],r[`info-block-${a}`]),children:[e(h,{title:"Пример заголовка"}),e(w,{variant:"Body1-Medium",className:r["description-typography-helper"],children:G}),e(z,{className:r["badge-helper"],children:"12"}),e(q,{label:d.label,onSelectionChange:d.onSelectionChange,options:d.options}),e(m,{primaryButton:K,secondaryButton:U})]})]});try{c.displayName="ContentExample",c.__docgenInfo={description:"",displayName:"ContentExample",props:{orientation:{defaultValue:{value:"orientationMapping.vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const Q=a=>e("div",{className:M.wrapper,style:{background:"var(--background-default)",width:"fit-content"},children:a()}),Ce={title:"Components/Card/Stories",component:_,decorators:[Q],argTypes:V},l=a=>e(_,{...a,className:S["card-vertical"],children:e(c,{})});l.storyName=F;const i=a=>e("div",{style:{display:"flex",gap:"20px"},children:Object.values(E).map((t,n)=>e(_,{...a,orientation:t,className:S[`card-${t}`],children:e(c,{orientation:t})},n))});i.storyName=P;i.args={};var f,b,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(argTypes: ICard): ReactNode => {
  return <Card {...argTypes} className={stylesCard['card-vertical']}>
      <ContentExample />
    </Card>;
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var I,N,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(argTypes: ICard): ReactNode => {
  return <div style={{
    display: 'flex',
    gap: '20px'
  }}>
      {Object.values(orientationMapping).map((orientation: orientationMapping, index: number) => <Card key={index} {...argTypes} orientation={orientation} className={stylesCard[\`card-\${orientation}\`]}>
          <ContentExample orientation={orientation} />
        </Card>)}
    </div>;
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const fe=["CardDefault","CardOrientation"];export{l as CardDefault,i as CardOrientation,fe as __namedExportsOrder,Ce as default};
