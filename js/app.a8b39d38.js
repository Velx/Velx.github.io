(function(t){function e(e){for(var o,r,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],o=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},i=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("8a23"),s=a.n(o);s.a},"3adf":function(t,e,a){"use strict";var o=a("8150"),s=a.n(o);s.a},"53fa":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",color:"cyan",dark:""}},[a("v-toolbar-title",[a("router-link",{staticClass:"toolbar-title",attrs:{to:"/"}},[t._v("DisCounter")])],1),a("v-spacer"),a("v-toolbar-items",{style:t.$vuetify.breakpoint.mdAndUp?"padding-right: 16px;":""},[t._l(t.links,(function(e){return a("v-btn",{key:e.title,attrs:{to:e.url,text:"","active-class":"no-active"}},[a("v-icon",{attrs:{left:t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(e.icon))]),a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(e.title))])],1)})),t.isUserLoggedIn?a("v-btn",{attrs:{text:"","active-class":"no-active"},on:{click:function(e){return e.stopPropagation(),t.openSettings(e)}}},[a("v-icon",{attrs:{left:t.$vuetify.breakpoint.mdAndUp}},[t._v(t._s(t.mdiAccountCog))]),a("span",{staticClass:"hidden-sm-and-down"},[t._v(" Profile ")])],1):t._e()],2)],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.close}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Settings")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("Save")])],1)],1),a("v-list",{staticClass:"ml-2",attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("User Controls")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Change Email")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-form",{ref:"emailForm",attrs:{"lazy-validation":""},model:{value:t.emailValid,callback:function(e){t.emailValid=e},expression:"emailValid"}},[a("v-text-field",{attrs:{label:"Email",name:"Email",hint:"Please use your real email, we will send activation email on it","prepend-icon":t.mdiEmail,type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Change Password")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-form",{ref:"pasForm",attrs:{"lazy-validation":""},model:{value:t.pasValid,callback:function(e){t.pasValid=e},expression:"pasValid"}},[a("v-text-field",{attrs:{label:"Password",name:"password",hint:"Password should contain at least 6 characters","prepend-icon":t.mdiLock,rules:t.passwordRules,type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{mousedown:function(e){t.show=!t.show},mouseup:function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm password",name:"password2","prepend-icon":t.mdiLock,rules:t.ConfPasswordRules,type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{mousedown:function(e){t.show=!t.show},mouseup:function(e){t.show=!t.show}},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-list",{staticClass:"ml-2",attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("General")]),a("v-list-item",[a("v-list-item-action",[a("v-checkbox",{model:{value:t.browserNotifications,callback:function(e){t.browserNotifications=e},expression:"browserNotifications"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Browser notifications")]),a("v-list-item-subtitle",[t._v("Notify me about new sales for selected products in browser")])],1)],1),a("v-list-item",[a("v-list-item-action",[a("v-checkbox",{model:{value:t.emailNotifications,callback:function(e){t.emailNotifications=e},expression:"emailNotifications"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Email notifications")]),a("v-list-item-subtitle",[t._v("Notify me about new sales for selected products with email")])],1)],1)],1),a("v-divider"),a("v-btn",{staticClass:"ml-3 mt-3 mb-5",attrs:{color:"red",text:""},on:{click:t.onLogout}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.mdiLogout))]),t._v(" Logout ")],1),a("v-divider")],1)],1),a("v-content",[a("router-view")],1)],1)},i=[],r=a("94ed"),n={data:function(){return{show:!1,drawer:!1,pasValid:!1,emailValid:!1,password:"",password2:"",email:"",mdiLock:r["g"],mdiEmail:r["f"],mdiLogout:r["i"],browserNotifications:!1,emailNotifications:!1,settingsDialog:!1,mdiAccountCog:r["b"],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be equal or more than 6 characters"}],emailRules:[function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}]}},computed:{isUserLoggedIn:function(){return!0},links:function(){return this.isUserLoggedIn?[{title:"Add product",icon:r["k"],url:"/add"}]:[{title:"Register",icon:r["c"],url:"/registration"},{title:"Login",icon:r["h"],url:"/login"}]},ConfPasswordRules:function(){var t=this;return[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}]}},methods:{onLogout:function(){console.log("HI")},openSettings:function(){this.settingsDialog=!0},save:function(){var t=!0;""!==this.password&&""!==this.password2?this.$refs.pasForm.validate()?console.log("New password validated"):t=!1:this.$refs.pasForm.resetValidation(),""!==this.email?this.$refs.emailForm.validate()?console.log("New password validated"):t=!1:this.$refs.emailForm.resetValidation(),t?(this.settingsDialog=!1,this.$refs.emailForm.resetValidation(),this.$refs.pasForm.resetValidation(),this.password=this.password2=this.email=""):console.log("Error")},close:function(){this.settingsDialog=!1,this.$refs.emailForm.resetValidation(),this.$refs.pasForm.resetValidation(),this.password=this.password2=this.email=""}}},l=n,c=(a("034f"),a("2877")),d=a("6544"),u=a.n(d),m=a("7496"),p=a("40dc"),v=a("8336"),f=a("b0af"),h=a("ac7c"),g=a("62ad"),b=a("a75b"),w=a("169a"),_=a("ce7e"),x=a("4bd4"),k=a("132d"),C=a("8860"),V=a("da13"),y=a("1800"),P=a("5d23"),L=a("0fd9"),S=a("2fa4"),A=a("e0c7"),I=a("8654"),O=a("71d9"),R=a("2a7f"),E=Object(c["a"])(l,s,i,!1,null,null,null),$=E.exports;u()(E,{VApp:m["a"],VAppBar:p["a"],VBtn:v["a"],VCard:f["a"],VCheckbox:h["a"],VCol:g["a"],VContent:b["a"],VDialog:w["a"],VDivider:_["a"],VForm:x["a"],VIcon:k["a"],VList:C["a"],VListItem:V["a"],VListItemAction:y["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VRow:L["a"],VSpacer:S["a"],VSubheader:A["a"],VTextField:I["a"],VToolbar:O["a"],VToolbarItems:R["a"],VToolbarTitle:R["b"]});var D=a("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var j=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("USER PROFILE")])},T=[],F={name:"Profile"},N=F,q=Object(c["a"])(N,U,T,!1,null,"76b93b2a",null),H=q.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-btn",{attrs:{color:"red",fab:"",fixed:"",bottom:"",right:""},on:{click:function(e){t.test=!t.test}}},[t._v("ADD PROD")]),a("v-btn",{attrs:{color:"green",fab:"",fixed:"",bottom:"",left:""},on:{click:function(e){t.isUserLoggedIn=!t.isUserLoggedIn}}},[t._v("Auth")]),t.notOnSale.length+t.onSale.length===0?a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6","offset-sm":"2","offset-md":"3"}},[a("v-card",[t.isUserLoggedIn?a("v-card-text",{staticClass:"text-center",class:[t.$vuetify.breakpoint.mdAndUp?"headline":"subtitle-2"]},[t._v(" You doesn't add any products yet. "),a("router-link",{staticClass:"noLine",attrs:{to:"/add",tag:"a"}},[t._v("Add it now.")])],1):a("v-card-text",{staticClass:"text-center",class:[t.$vuetify.breakpoint.mdAndUp?"headline":"subtitle-2"]},[t._v(" You are not logged in. Please "),a("router-link",{staticClass:"noLine",attrs:{to:"/login",tag:"a"}},[t._v("log in")]),t._v(" or "),a("router-link",{staticClass:"noLine",attrs:{to:"/registration",tag:"a"}},[t._v("create a new account")])],1)],1)],1)],1):a("v-row",{attrs:{wrap:"",align:"start",justify:"center"}},[0!==t.onSale.length?a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"font-weight-light headline text-uppercase"},[t._v("Products on sale")])]):t._e(),t._l(t.onSale,(function(e){return a("v-col",{key:e.api_id,attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mr-2 ml-2",attrs:{height:"500px"}},[a("v-img",{staticClass:"ma-3",attrs:{height:"250px",src:e.image},on:{click:function(a){return a.stopPropagation(),t.openImage(e.image)}}}),a("v-card-title",{staticClass:"text-wrap"},[t._v(" "+t._s(t.$vuetify.breakpoint.mdAndUp?e.name.slice(0,75)+"...":e.name.slice(0,65)+"...")+" ")]),a("v-card-text",{staticClass:"text-left font-weight-medium",class:[t.$vuetify.breakpoint.mdAndUp?"headline":"subtitle-2 mt-2"]},[t._v(" Price:"),a("span",{staticClass:"green--text"},[t._v(t._s(e.current_price?e.current_price:e.price)+" ")]),e.current_price?a("span",{staticClass:"red--text",class:[t.$vuetify.breakpoint.mdAndUp?"subtitle-1":"overline"],staticStyle:{"text-decoration":"line-through"}},[t._v(t._s(e.price)+" ")]):t._e()]),a("v-card-actions",{staticClass:"mt-2"},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"red"}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.mdiDelete))]),t._v(" Remove ")],1),a("v-btn",{attrs:{text:"",color:"green",href:e.ali_url,target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.mdiCart))]),t._v(" Buy ")],1)],1)],1)],1)})),0!==t.notOnSale.length?a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"font-weight-light headline text-uppercase"},[t._v("Products without sale price")])]):t._e(),t._l(t.notOnSale,(function(e){return a("v-col",{key:e.api_id,attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mr-2 ml-2",attrs:{height:"500px"}},[a("v-img",{staticClass:"ma-3",attrs:{height:"250px",src:e.image},on:{click:function(a){return a.stopPropagation(),t.openImage(e.image)}}}),a("v-card-title",{staticClass:"text-wrap"},[t._v(" "+t._s(t.$vuetify.breakpoint.mdAndUp?e.name.slice(0,75)+"...":e.name.slice(0,65)+"...")+" ")]),a("v-card-text",{staticClass:"text-left font-weight-medium",class:[t.$vuetify.breakpoint.mdAndUp?"headline":"subtitle-2 mt-2"]},[t._v(" Price:"),a("span",{staticClass:"green--text"},[t._v(t._s(e.current_price?e.current_price:e.price)+" ")]),e.current_price?a("span",{staticClass:"red--text",class:[t.$vuetify.breakpoint.mdAndUp?"subtitle-1":"overline"],staticStyle:{"text-decoration":"line-through"}},[t._v(t._s(e.current_price)+" ")]):t._e()]),a("v-card-actions",{staticClass:"mt-2"},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"red"}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.mdiDelete))]),t._v(" Remove ")],1),a("v-btn",{attrs:{text:"",color:"green",href:e.ali_url,target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.mdiCart))]),t._v(" Buy ")],1)],1)],1)],1)})),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-img",{staticClass:"zoom-out",attrs:{src:t.openedSrc,"max-height":"100%",contain:""},on:{click:function(e){t.dialog=!1}}})],1)],1)],2)],1)},z=[],G=(a("4de4"),{name:"List",data:function(){return{isUserLoggedIn:!1,test:!1,dialog:!1,mdiCart:r["d"],mdiDelete:r["e"],openedSrc:"",products:[{api_id:"4000918899813",name:"DOOGEE S95 Pro 8 Гб 256 ГБ модульный прочный мобильный телефон IP68/IP69K 6,3-дюймовый дисплей 5150 мАч Helio P90 Восьмиядерный 48 МП камера Android 9",price:"30345.77",current_price:null,image:"https://ae01.alicdn.com/kf/H94d5587dc2724f0e86bfe4a5cd759987R/DOOGEE-S95-Pro-8-256-IP68-IP69K.jpg",ali_url:"https://aliexpress.ru/item/4000918899813.html"},{api_id:"4000918899814",name:"DOOGEE S95 Pro 8 Гб 256 ГБ модульный прочный мобильный телефон IP68/IP69K 6,3-дюймовый дисплей 5150 мАч Helio P90 Восьмиядерный 48 МП камера Android 9",price:"30345.77",current_price:"30345.77",image:"https://ae01.alicdn.com/kf/H94d5587dc2724f0e86bfe4a5cd759987R/DOOGEE-S95-Pro-8-256-IP68-IP69K.jpg",ali_url:"https://aliexpress.ru/item/4000918899813.html"},{api_id:"4000918899815",name:"DOOGEE S95 Pro 8 Гб 256 ГБ модульный прочный мобильный телефон IP68/IP69K 6,3-дюймовый дисплей 5150 мАч Helio P90 Восьмиядерный 48 МП камера Android 9",price:"30345.77",current_price:null,image:"https://ae01.alicdn.com/kf/H94d5587dc2724f0e86bfe4a5cd759987R/DOOGEE-S95-Pro-8-256-IP68-IP69K.jpg",ali_url:"https://aliexpress.ru/item/4000918899813.html"},{api_id:"4000918899816",name:"Самостоятельная щетка для грумера для кошек, принадлежности для ухода за домашними животными, расческа для удаления волос для кошек, собак, обрезка волос, массажное устройство для кошек С Кошачьей Мятой",price:"272.71",current_price:"0.77",image:"https://ae01.alicdn.com/kf/H1ac0fed0fcab4b47b03ea555413ae1f3N/-.jpg",ali_url:"https://aliexpress.ru/item/4000417010920.html"}]}},methods:{openImage:function(t){this.dialog=!0,this.openedSrc=t}},computed:{onSale:function(){return this.test?this.products.filter((function(t){return null!==t.current_price})):[]},notOnSale:function(){return this.test?this.products.filter((function(t){return null===t.current_price})):[]}}}),K=G,M=(a("3adf"),a("99d9")),Z=a("a523"),J=a("adda"),Y=Object(c["a"])(K,B,z,!1,null,null,null),W=Y.exports;u()(Y,{VBtn:v["a"],VCard:f["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VCol:g["a"],VContainer:Z["a"],VDialog:w["a"],VIcon:k["a"],VImg:J["a"],VRow:L["a"],VSpacer:S["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2",md:"8","offset-md":"2"}},[a("v-form",{attrs:{onSubmit:"return false;"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Aliexpress product url",hint:"Enter here Aliexpress product url that you want to track",type:"url",rules:t.ali_rules,"validate-on-blur":"",success:t.valid,dense:"",outlined:"",solo:"",rounded:"","append-outer-icon":t.mdiSend},on:{"click:append-outer":t.sendURL},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)],1),a("v-row",{attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"12",sm:"12","offset-sm":"2",md:"8","offset-md":"2"}},[a("v-card",{attrs:{raised:""}},[a("v-btn",{attrs:{fab:"",top:"",absolute:"",right:"",dark:"",color:"red",small:t.$vuetify.breakpoint.mdAndDown}},[a("v-icon",[t._v(t._s(t.mdiDelete))])],1),a("v-row",[a("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[a("v-img",{staticClass:"ma-3",attrs:{src:t.product.image,contain:""}})],1),a("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[a("v-row",{attrs:{wrap:"","no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-card-text",{staticClass:"text-left",class:[t.$vuetify.breakpoint.mdAndUp?"headline":"subtitle-2"]},[t._v(" "+t._s(t.$vuetify.breakpoint.mdAndUp?t.product.name:t.product.name.split(" ").slice(0,8).join(" ")+"...")+" ")])],1),a("v-divider"),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-card-text",{staticClass:"text-left ",class:[t.$vuetify.breakpoint.mdAndUp?"headline mt-10":"subtitle-2 mt-1"]},[t._v(" Price:"),a("span",{staticClass:"green--text"},[t._v(t._s(t.product.current_price?t.product.current_price:t.product.price)+" ")])])],1)],1)],1)],1)],1)],1)],1)],1)},X=[],tt={name:"Add",data:function(){return{valid:!1,url:"",mdiSend:r["l"],mdiDelete:r["e"],mdiMinus:r["j"],ali_rules:[function(t){return t.length>0||"URL is required"},function(t){var e=/aliexpress\.(com|ru|ua)\/item\/\d+.html/;return e.test(t)||"Wrong url."}],product:{api_id:"4000918899813",name:"DOOGEE S95 Pro 8 Гб 256 ГБ модульный прочный мобильный телефон IP68/IP69K 6,3-дюймовый дисплей 5150 мАч Helio P90 Восьмиядерный 48 МП камера Android 9",price:"30345.77",current_price:null,image:"https://ae01.alicdn.com/kf/H94d5587dc2724f0e86bfe4a5cd759987R/DOOGEE-S95-Pro-8-256-IP68-IP69K.jpg",ali_url:"https://aliexpress.ru/item/4000918899813.html"}}},methods:{sendURL:function(){console.log("Sended")}}},et=tt,at=(a("be96"),Object(c["a"])(et,Q,X,!1,null,null,null)),ot=at.exports;u()(at,{VBtn:v["a"],VCard:f["a"],VCardText:M["b"],VCol:g["a"],VContainer:Z["a"],VDivider:_["a"],VForm:x["a"],VIcon:k["a"],VImg:J["a"],VRow:L["a"],VTextField:I["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{wrap:""}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4","offset-sm":"2","offset-md":"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Login",name:"login",hint:"Login should contain at least 4 characters","prepend-icon":t.icons.mdiAccount,type:"text",rules:t.nameRules},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),a("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":t.icons.mdiLock,rules:t.passwordRules,type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{mousedown:function(e){t.show=!t.show},mouseup:function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("p",{staticClass:"text-right overline"},[a("router-link",{staticClass:"noLine",attrs:{to:"/"}},[t._v("Forgot password?")])],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:t.onSubmit}},[t._v(" Login ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"8",md:"4","offset-sm":"2","offset-md":"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-card-text",{staticClass:"text-center"},[t._v(" New to DisCounter? "),a("router-link",{staticClass:"noLine",attrs:{to:"/registration",tag:"a"}},[t._v("Create an account.")])],1)],1)],1)],1)],1)},it=[],rt={name:"Login",data:function(){return{link:"/registration",show:!1,login:"",email:"",password:"",password2:"",valid:!0,icons:{mdiLock:r["g"],mdiAccount:r["a"]},nameRules:[function(t){return!!t||"Login is required"},function(t){return t.length>=4||"Login must be equal or more than 4 characters"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be equal or more than 6 characters"}]}},methods:{onSubmit:function(){this.$refs.form.validate()&&console.log("Validated")}}},nt=rt,lt=(a("d0c9"),Object(c["a"])(nt,st,it,!1,null,null,null)),ct=lt.exports;u()(lt,{VBtn:v["a"],VCard:f["a"],VCardActions:M["a"],VCardText:M["b"],VCol:g["a"],VContainer:Z["a"],VForm:x["a"],VRow:L["a"],VSpacer:S["a"],VTextField:I["a"],VToolbar:O["a"],VToolbarTitle:R["b"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Registration")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Login",name:"login",hint:"Login should contain at least 4 characters","prepend-icon":t.icons.mdiAccount,type:"text",rules:t.nameRules},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}}),a("v-text-field",{attrs:{label:"Email",name:"Email",hint:"Please use your real email, we will send activation email on it","prepend-icon":t.icons.mdiEmail,type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",name:"password",hint:"Password should contain at least 6 characters","prepend-icon":t.icons.mdiLock,rules:t.passwordRules,type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{mousedown:function(e){t.show=!t.show},mouseup:function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm password",name:"password2","prepend-icon":t.icons.mdiLock,rules:t.ConfPasswordRules,type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off"},on:{mousedown:function(e){t.show=!t.show},mouseup:function(e){t.show=!t.show}},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:t.onSubmit}},[t._v(" Register ")])],1)],1)],1)],1)],1)},ut=[],mt={name:"Registration",data:function(){return{show:!1,login:"",email:"",password:"",password2:"",valid:!0,icons:{mdiLock:r["g"],mdiAccount:r["a"],mdiEmail:r["f"]},nameRules:[function(t){return!!t||"Login is required"},function(t){return t.length>=4||"Login must be equal or more than 4 characters"}],emailRules:[function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Password must be equal or more than 6 characters"}]}},computed:{ConfPasswordRules:function(){var t=this;return[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}]}},methods:{onSubmit:function(){this.$refs.form.validate()&&console.log("Validated")}}},pt=mt,vt=Object(c["a"])(pt,dt,ut,!1,null,null,null),ft=vt.exports;u()(vt,{VBtn:v["a"],VCard:f["a"],VCardActions:M["a"],VCardText:M["b"],VCol:g["a"],VContainer:Z["a"],VForm:x["a"],VRow:L["a"],VSpacer:S["a"],VTextField:I["a"],VToolbar:O["a"],VToolbarTitle:R["b"]}),o["a"].use(j["a"]);var ht=[{path:"/",name:"Home",component:W},{path:"/add",mame:"Add",component:ot},{path:"/login",mame:"Login",component:ct},{path:"/registration",mame:"Registration",component:ft},{path:"/user",mame:"Profile",component:H}],gt=new j["a"]({mode:"history",base:"/",routes:ht}),bt=gt,wt=a("2f62");o["a"].use(wt["a"]);var _t=new wt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),xt=a("f309");a("5363");o["a"].use(xt["a"]);var kt=new xt["a"]({icons:{iconfont:"mdiSvg"}});a("d5e8");o["a"].config.productionTip=!1,new o["a"]({router:bt,store:_t,vuetify:kt,render:function(t){return t($)}}).$mount("#app")},8150:function(t,e,a){},"8a23":function(t,e,a){},be96:function(t,e,a){"use strict";var o=a("53fa"),s=a.n(o);s.a},bff2:function(t,e,a){},d0c9:function(t,e,a){"use strict";var o=a("bff2"),s=a.n(o);s.a}});
//# sourceMappingURL=app.a8b39d38.js.map