import{j as r,c as a,a as h}from"./clsx.m-CcuEzMhP.js";const b="_checkbox_1rr4z_17",v="_error_1rr4z_31",x="_checkmark_1rr4z_45",y="_text_1rr4z_95",g="_disabled_1rr4z_137",e={"label-wrapper":"_label-wrapper_1rr4z_1","input-wrapper":"_input-wrapper_1rr4z_9",checkbox:b,"hover-circle":"_hover-circle_1rr4z_28",error:v,checkmark:x,"checkmark-multiple":"_checkmark-multiple_1rr4z_55",text:y,"hover-circle-checked":"_hover-circle-checked_1rr4z_114",default:"_default_1rr4z_126",disabled:g},n=({fill:l})=>r("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.701 0.971H2.701C1.601 0.971 0.701 1.871 0.701 2.971V16.971C0.701 18.071 1.601 18.971 2.701 18.971H16.701C17.801 18.971 18.701 18.071 18.701 16.971V2.971C18.701 1.871 17.801 0.971 16.701 0.971ZM7.701 14.971L2.701 10.163L4.101 8.817L7.701 12.278L15.301 4.971L16.701 6.317L7.701 14.971Z",fill:l||"currentColor"})});try{n.displayName="CustomCheckboxIcon",n.__docgenInfo={description:"",displayName:"CustomCheckboxIcon",props:{}}}catch{}const s=({fill:l})=>r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM7 13H17V11H7V13Z",fill:l||"currentColor"})});try{s.displayName="CustomCheckboxMultipleIcon",s.__docgenInfo={description:"",displayName:"CustomCheckboxMultipleIcon",props:{}}}catch{}const i=({id:l,label:c,checked:t,disabled:d=!1,color:_="default",multiple:p=!1,onChange:o,value:u,className:f})=>{const m=e[_],k=p?s:n,C=p?e["checkmark-multiple"]:e.checkmark;return r("div",{className:a(e["label-wrapper"],f),children:h("label",{htmlFor:l,children:[h("div",{className:e["input-wrapper"],children:[r("input",{type:"checkbox",id:l,checked:o?t:void 0,defaultChecked:o?void 0:t,disabled:d,className:a(e.checkbox,m),onChange:o,value:u,"aria-label":c?void 0:"checkbox"}),r("span",{className:a(C,m),children:r(k,{})}),r("span",{className:a(e["hover-circle"],(u||t)&&e["hover-circle-checked"])})]}),c&&r("span",{className:a(e.text,d&&e.disabled),children:c})]})})},N=i;try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{N as C};