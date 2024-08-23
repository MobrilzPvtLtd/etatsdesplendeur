import{c as I,g as A}from"./blueimp-md5-133dffcb-v4.1.3.js";import{r as k}from"./flatpickr-d03fdfa2-v4.1.3.js";var y={exports:{}};(function(C,M){(function(b,l){C.exports=l(k)})(I,v=>(()=>{var b={311:a=>{a.exports=v}},l={};function s(a){var i=l[a];if(i!==void 0)return i.exports;var o=l[a]={exports:{}};return b[a](o,o.exports,s),o.exports}s.n=a=>{var i=a&&a.__esModule?()=>a.default:()=>a;return s.d(i,{a:i}),i},s.d=(a,i)=>{for(var o in i)s.o(i,o)&&!s.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:i[o]})},s.o=(a,i)=>Object.prototype.hasOwnProperty.call(a,i);var f={};return(()=>{s.d(f,{default:()=>P});var a=s(311),i=s.n(a),o=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"],x=["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var w=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},D=function(t){return t instanceof Array?t:[t]},c=function(t){return t&&t.length?t:null},g=function(t){return d({},t)},$=o.concat(x),E=["locale","showMonths"];const h={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return t===null||t instanceof Date||typeof t=="string"||t instanceof String||t instanceof Array||typeof t=="number"}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return o}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var n=g(this.config);this.events.forEach(function(r){var u=i().defaultConfig[r]||[],j=function(){for(var m=arguments.length,_=new Array(m),p=0;p<m;p++)_[p]=arguments[p];t.$emit.apply(t,[w(r)].concat(_))};n[r]=D(n[r]||[]).concat(u,j)}),n.defaultDate=this.value||n.defaultDate,this.fp=new(i())(this.getElem(),n),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var n=this,r=t.target;this.$nextTick(function(){n.$emit("input",c(r.value))})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",c(t.target.value))},onClose:function(t,n){this.$emit("input",c(n))},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var n=this,r=g(t);$.forEach(function(u){delete r[u]}),this.fp.set(r),E.forEach(function(u){typeof r[u]<"u"&&n.fp.set(u,r[u])})}},value:function(t){t!==c(this.$el.value)&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};var O=function(t,n){var r="flat-pickr";typeof n=="string"&&(r=n),t.component(r,h)};h.install=O;const P=h})(),f=f.default,f})())})(y);var B=y.exports;const L=A(B);export{L as f};
