import{a as n,F as h,j as r}from"./jsx-runtime-2xDJh5tt.js";import{r as b}from"./index-CBqU2yxZ.js";import{I as l}from"./index-D3aZeTS2.js";import{c as f}from"./clsx.m-CH7BE6MN.js";const g="_image_7lbld_1",a={"image-wrapper":"_image-wrapper_7lbld_1","ratio-1x1":"_ratio-1x1_7lbld_6","ratio-4x3":"_ratio-4x3_7lbld_9","ratio-3x4":"_ratio-3x4_7lbld_12","ratio-16x9":"_ratio-16x9_7lbld_15","radius-none":"_radius-none_7lbld_18","radius-4px":"_radius-4px_7lbld_21","radius-8px":"_radius-8px_7lbld_24",image:g,"hover-overlay":"_hover-overlay_7lbld_32","hover-icon":"_hover-icon_7lbld_41","no-content":"_no-content_7lbld_50","empty-icon":"_empty-icon_7lbld_56"};var s=(e=>(e["ratio-1x1"]="ratio-1x1",e["ratio-4x3"]="ratio-4x3",e["ratio-3x4"]="ratio-3x4",e["ratio-16x9"]="ratio-16x9",e))(s||{}),d=(e=>(e["radius-none"]="radius-none",e["radius-4px"]="radius-4px",e["radius-8px"]="radius-8px",e))(d||{});const o=({src:e,aspectRatio:u=s["ratio-1x1"],radius:c=d["radius-none"],className:_,zoom:m=!0,...i})=>{const[p,t]=b.useState(!1),x=m&&e&&p,v=()=>{t(!0)},y=()=>{t(!1)};return n("div",{className:f(a["image-wrapper"],a[u],a[c],{[a["no-content"]]:!e},_),onMouseEnter:v,onMouseLeave:y,"data-testid":"IMAGE_PICTURE",children:[x&&n(h,{children:[r("div",{className:a["hover-icon"],children:r(l,{name:"IconZoomInOutlined24",containerSize:32})}),r("div",{className:a["hover-overlay"]})]}),e&&r("img",{src:e,className:a.image,alt:i.alt,...i}),!e&&r("div",{className:a["empty-icon"],children:r(l,{name:"IconFactory32",htmlColor:"var(--ac-image-picture-no-content-icon)"})})]})},q=o;try{o.displayName="ImagePicture",o.__docgenInfo={description:"",displayName:"ImagePicture",props:{aspectRatio:{defaultValue:{value:"ImagePictureRatios['ratio-1x1']"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"ratio-1x1"'},{value:'"ratio-4x3"'},{value:'"ratio-3x4"'},{value:'"ratio-16x9"'}]}},radius:{defaultValue:{value:"ImagePictureRadius['radius-none']"},description:"",name:"radius",required:!1,type:{name:"enum",value:[{value:'"radius-none"'},{value:'"radius-4px"'},{value:'"radius-8px"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},zoom:{defaultValue:{value:"true"},description:"",name:"zoom",required:!1,type:{name:"boolean"}}}}}catch{}export{s as I,d as a,q as b};
