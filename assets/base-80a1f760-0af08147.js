var r=Object.defineProperty;var n=(o,t)=>r(o,"name",{value:t,configurable:!0});import{bO as p}from"./iframe-085936ab.js";var a=function(){function o(t,i,e){e===void 0&&(e={}),this.status="idle",this.options=e,this.sandboxSetup=i,this.iframeSelector=t}return n(o,"SandpackClient"),o.prototype.updateOptions=function(t){p(this.options,t)||(this.options=t,this.updateSandbox())},o.prototype.updateSandbox=function(t,i){throw t===void 0&&(t=this.sandboxSetup),Error("Method not implemented")},o.prototype.destroy=function(){throw Error("Method not implemented")},o.prototype.dispatch=function(t){throw Error("Method not implemented")},o.prototype.listen=function(t){throw Error("Method not implemented")},o}();export{a as S};