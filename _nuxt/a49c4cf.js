(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{343:function(t,r,e){"use strict";e.r(r);e(35),e(153);var n=e(97);function c(t,r){var e=h(t),n=h(r);if(t.rgba.a>=1)return r.rgba.a<1&&(n=o(n,r.rgba.a,e)),{contrast:v(e,n),variance:0};var c,l,d,x,m=(c=e,l=t.rgba.a,o(c,l,{r:0,g:0,b:0})),f=function(t,r){return o(t,r,{r:255,g:255,b:255})}(e,t.rgba.a);if(r.rgba.a<1){var A=o(n,r.rgba.a,m),k=o(n,r.rgba.a,f);d=v(A,m),x=v(k,f)}else d=v(n,m),x=v(n,f);var V=(d+x)/2;return{contrast:V,variance:Math.abs(V-d)}}function o(t,r,e){return{r:t.r*r+e.r*(1-r),g:t.g*r+e.g*(1-r),b:t.b*r+e.b*(1-r)}}function l(t){return.2126*d(t.r)+.7152*d(t.g)+.0722*d(t.b)}function d(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function v(t,r){var e=l(t),n=l(r);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}function h(t){var r=t.rgba;r.a;return Object(n.a)(r,["a"])}var x={components:{},data:function(){return{isWhyExpanded:!1,backgroundPickerValue:{rgba:{r:255,g:0,b:255,a:1},hsla:{h:300,s:1,l:.5,a:1},hsva:{h:300,s:1,v:1,a:1}},foregroundPickerValue:{rgba:{r:255,g:0,b:255,a:1},hsla:{h:300,s:1,l:.5,a:1},hsva:{h:300,s:1,v:1,a:1}}}},computed:{contrast:function(){return c(this.backgroundPickerValue,this.foregroundPickerValue)},contrastValue:function(){return Number(this.contrast.contrast).toFixed(1)},contrastVariance:function(){return Number(this.contrast.variance).toFixed(1)},smallTextAAType:function(){return this.contrastValue>=4.5?"success":"error"},largeTextAAType:function(){return this.contrastValue>=3?"success":"error"},smallTextAAAType:function(){return this.contrastValue>=7?"success":"error"},largeTextAAAType:function(){return this.contrastValue>=4.5?"success":"error"},guiAAType:function(){return this.contrastValue>=3?"success":"error"},whyExpandedIcon:function(){return this.isWhyExpanded?"mdi-chevron-up":"mdi-chevron-down"}}},m=e(76),f=e(113),A=e.n(f),k=e(346),V=e(287),_=e(301),y=e(299),T=e(342),w=e(345),C=e(340),P=e(300),E=e(286),W=e(341),component=Object(m.a)(x,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"px-5 mx-5 mt-5"},[e("v-card-title",[t._v("Background Color")]),t._v(" "),e("v-color-picker",{attrs:{"align-self":"center"},model:{value:t.backgroundPickerValue,callback:function(r){t.backgroundPickerValue=r},expression:"backgroundPickerValue"}})],1),t._v(" "),e("v-card",{staticClass:"px-5 mx-5 mt-5"},[e("v-card-title",[t._v("Foreground Color")]),t._v(" "),e("v-color-picker",{model:{value:t.foregroundPickerValue,callback:function(r){t.foregroundPickerValue=r},expression:"foregroundPickerValue"}})],1)],1),t._v(" "),e("v-container",{staticClass:"mt-n5"},[e("v-card",{staticClass:"ml-auto mr-auto mb-7 mt-7 pt-3 pb-3",attrs:{width:"400px"}},[e("p",{staticClass:"text-center text-h5 font-weight-medium"},[t._v("\n        "+t._s(t.contrastValue)+"\n        ±\n        "+t._s(t.contrastVariance)+"\n      ")]),t._v(" "),e("v-alert",{staticClass:"mx-8",attrs:{outlined:"",type:t.smallTextAAType}},[t._v("AA Small Text")]),t._v(" "),e("v-alert",{staticClass:"mx-8",attrs:{outlined:"",type:t.largeTextAAType}},[t._v("AA Large Text")]),t._v(" "),e("v-alert",{staticClass:"mx-8",attrs:{outlined:"",type:t.smallTextAAAType}},[t._v("AAA Small Text")]),t._v(" "),e("v-alert",{staticClass:"mx-8",attrs:{outlined:"",type:t.largeTextAAAType}},[t._v("AAA Large Text")]),t._v(" "),e("v-alert",{staticClass:"mx-8",attrs:{outlined:"",type:t.guiAAType}},[t._v("AA GUI")]),t._v(" "),e("v-btn",{staticClass:"ml-3",attrs:{text:""},on:{click:function(r){t.isWhyExpanded=!t.isWhyExpanded}}},[e("v-icon",[t._v(" "+t._s(t.whyExpandedIcon)+" ")]),t._v("\n        Why the ±?\n      ")],1),t._v(" "),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isWhyExpanded,expression:"isWhyExpanded"}]},[e("v-divider",{staticClass:"mt-3"}),t._v(" "),e("p",{staticClass:"mx-8 mt-4 mb-2"},[t._v("\n            When the background color is transparent the contrast ratio is the\n            average of ratios when the background color is displayed on black\n            and white backgrounds. The ± is the difference of the black and\n            white ratios from the average.\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;A()(component,{VAlert:k.a,VBtn:V.a,VCard:_.a,VCardTitle:y.b,VColorPicker:T.a,VContainer:w.a,VDivider:C.a,VExpandTransition:P.a,VIcon:E.a,VRow:W.a})}}]);