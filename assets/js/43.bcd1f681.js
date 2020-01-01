(window.webpackJsonp=window.webpackJsonp||[]).push([[43,55],{186:function(e,t,n){"use strict";n.r(t);var r={name:"TextInput",components:{ValidationProvider:n(51).b},props:{value:{type:String,default:""},rules:{type:[String,Object],default:""},name:{type:String,default:""},vid:{type:String,default:void 0},type:{type:String,default:"text"}},data:function(){return{currentValue:""}},watch:{currentValue:function(e){this.$emit("input",e)}}},a=n(17),u=Object(a.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationProvider",{attrs:{tag:"div",rules:e.rules,name:e.name,vid:e.vid},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return["checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{change:function(t){var n=e.currentValue,r=t.target,a=!!r.checked;if(Array.isArray(n)){var u=e._i(n,null);r.checked?u<0&&(e.currentValue=n.concat([null])):u>-1&&(e.currentValue=n.slice(0,u).concat(n.slice(u+1)))}else e.currentValue=a}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"radio"},domProps:{checked:e._q(e.currentValue,null)},on:{change:function(t){e.currentValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:e.type},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(r[0]))])]}}])})},[],!1,null,null,null);t.default=u.exports},202:function(e,t,n){"use strict";n.r(t);var r={components:{TextInput:n(186).default},data:function(){return{fname:"",lname:"",email:"",password:"",passwordConfirmation:"",country:""}},methods:{onSubmit:function(){alert("Form submitted!")}}},a=n(17),u=Object(a.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit;return[n("form",{on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)}}},[n("TextInput",{attrs:{name:"First Name",rules:"required"},model:{value:e.fname,callback:function(t){e.fname=t},expression:"fname"}}),e._v(" "),n("TextInput",{attrs:{name:"Last Name",rules:"required"},model:{value:e.lname,callback:function(t){e.lname=t},expression:"lname"}}),e._v(" "),n("TextInput",{attrs:{name:"E-mail",rules:"required|email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("TextInput",{attrs:{type:"password",name:"Password",rules:"required|min:6|confirmed:confirmation"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("TextInput",{attrs:{type:"password",name:"Confirmation",vid:"confirmation",rules:"required"},model:{value:e.passwordConfirmation,callback:function(t){e.passwordConfirmation=t},expression:"passwordConfirmation"}}),e._v(" "),n("TextInput",{attrs:{name:"Country",rules:"required"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e._v(" "),n("button",[e._v("Submit")])],1)]}}])})},[],!1,null,null,null);t.default=u.exports}}]);