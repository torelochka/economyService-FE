(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ae89b06"],{"325e":function(i,e,n){"use strict";n.r(e);var t=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",[n("Container",{attrs:{width:300}},[i.isLoading?n("div",[n("div",{staticClass:"loader"},[n("PulseLoader",{attrs:{loading:!0,color:"#81007f"}}),n("p",[i._v(" Saving "),n("br"),i._v(" discipline... ")])],1)]):n("form",{staticClass:"discipline-wrapper"},[n("h1",{staticClass:"add-group-title"},[i._v("add new discipline:")]),n("p",[i._v("type a name of the dicipline you teach:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:i.discipline,expression:"discipline"}],staticClass:"input",attrs:{id:"discipline",name:"discipline",placeholder:"discipline name"},domProps:{value:i.discipline},on:{input:function(e){e.target.composing||(i.discipline=e.target.value)}}}),n("Button",{attrs:{type:"submit","is-disabled":0===i.discipline.trim().length,"on-click":i.submit}},[i._v("submit")])],1)]),n("Navigation",{attrs:{"active-tab-init":"Subject"}})],1)},a=[],s=n("1da1"),l=n("5530"),r=(n("96cf"),n("2f62")),o=n("db78"),c=n("5912"),d=n("28c3"),p=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:i.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-pulse v-pulse1",style:[i.spinnerStyle,i.spinnerDelay1]}),n("div",{staticClass:"v-pulse v-pulse2",style:[i.spinnerStyle,i.spinnerDelay2]}),n("div",{staticClass:"v-pulse v-pulse3",style:[i.spinnerStyle,i.spinnerDelay3]})])},u=[],m={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},v=m,f=(n("671b"),n("2877")),g=Object(f["a"])(v,p,u,!1,null,null,null),b=g.exports,h={name:"AddDiscipline",components:{Container:o["a"],Navigation:c["a"],Button:d["a"],PulseLoader:b},data:function(){return{discipline:"",isLoading:!1}},methods:Object(l["a"])(Object(l["a"])({},Object(r["b"])(["sendDiscipline"])),{},{submit:function(){var i=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.isLoading=!0,e.next=3,i.sendDiscipline({discipline:i.discipline,flag:i.isLoading});case 3:i.isLoading=!1,i.discipline="";case 5:case"end":return e.stop()}}),e)})))()}})},y=h,w=(n("7515"),Object(f["a"])(y,t,a,!1,null,"44d57ff4",null));e["default"]=w.exports},"671b":function(i,e,n){"use strict";n("73af")},"73af":function(i,e,n){},7515:function(i,e,n){"use strict";n("ea2a")},ea2a:function(i,e,n){}}]);
//# sourceMappingURL=chunk-9ae89b06.e75a616d.js.map