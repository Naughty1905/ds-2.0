import{a as c,j as t}from"./clsx.m-CcuEzMhP.js";import{r as f}from"./index-CBqU2yxZ.js";import{S as e}from"./index-BO3pQ7ot.js";const o=({min:a,max:s,step:g=1,value:n,onChange:u,disabled:l=!1})=>{const[i,p]=f.useState(n??a);f.useEffect(()=>{n!==void 0&&p(n)},[n]);const v=r=>{r.preventDefault();const m=+r.target.value;u?u(m):p(m)},d=(r=>(r-a)/(s-a)*100)(i);return c(e.Wrapper,{children:[t(e.InputWrapper,{children:t(e.Input,{value:i,min:a,max:s,step:g,onChange:v,disabled:l})}),c(e.ControlWrapper,{children:[t(e.Rail,{maxPosition:d,minPosition:0,disabled:l}),t(e.Control,{position:d,value:i,disabled:l})]})]})},x=o;try{o.displayName="InputSlider",o.__docgenInfo={description:"",displayName:"InputSlider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{x as I};