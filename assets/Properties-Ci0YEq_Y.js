import{j as e,a as l}from"./clsx.m-CcuEzMhP.js";import{r as c}from"./index-CBqU2yxZ.js";import{B as d}from"./index-VLfweUxF.js";import"./generateUUID-BkPc_NdJ.js";import"./index-SiU_55iz.js";import"./index-Dz0_KCIo.js";import"./index-fbTu1Hcf.js";import{I as p}from"./index-CpJBQeN-.js";import"./index-hvdSV1r-.js";import"./index-BQVY97ak.js";import"./index-B5tj7Glx.js";import"./index-14g2znra.js";import"./32-BmhDzcbC.js";import{s as n}from"./Tests-CShFLtrb.js";const m="_table_1g39l_1",_="_th_1g39l_6",y="_tbody_1g39l_12",g="_td_1g39l_17",a={table:m,th:_,tbody:y,td:g},o=({args:t={}})=>e("table",{className:a.table,children:e("tbody",{className:a.tbody,children:Object.entries(t).map(([r,s])=>l("tr",{children:[e("td",{className:a.td,children:e("b",{children:r})}),e("td",{className:a.td,dangerouslySetInnerHTML:{__html:s.description}}),e("td",{className:a.td,children:s.table&&s.table.defaultValue.summary||"-"})]},r))})});try{o.displayName="ArgumentsTable",o.__docgenInfo={description:"",displayName:"ArgumentsTable",props:{args:{defaultValue:{value:"{}"},description:"",name:"args",required:!1,type:{name:"TArgsType"}}}}}catch{}const i=({argsTypes:t={}})=>{const[r,s]=c.useState(!1);return l("div",{className:n.properties,children:[e(d,{variant:"secondary",startIcon:e(p,{containerSize:24,name:r?"IconChevronArrowUpFilled24":"IconChevronArrowDownFilled24"}),onClick:()=>s(!r),children:"Свойства компонента"}),r&&e("div",{className:n.arguments,children:e(o,{args:t})})]})};try{i.displayName="Properties",i.__docgenInfo={description:"",displayName:"Properties",props:{argsTypes:{defaultValue:{value:"{}"},description:"",name:"argsTypes",required:!1,type:{name:"TArgsType"}}}}}catch{}export{i as P};
