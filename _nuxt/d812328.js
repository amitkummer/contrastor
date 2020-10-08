(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(r,n,t){"use strict";t.r(n);var e=t(97);function o(r,n){var t=f(r),e=f(n);if(r.rgba.a>=1)return n.rgba.a<1&&(e=c(e,n.rgba.a,t)),{contrast:v(t,e),variance:0};var o,l,d,k,m=(o=t,l=r.rgba.a,c(o,l,{r:0,g:0,b:0})),x=function(r,n){return c(r,n,{r:255,g:255,b:255})}(t,r.rgba.a);if(n.rgba.a<1){var V=c(e,n.rgba.a,m),h=c(e,n.rgba.a,x);d=v(V,m),k=v(h,x)}else d=v(e,m),k=v(e,x);var w=(d+k)/2;return{contrast:w,variance:Math.abs(w-d)}}function c(r,n,t){return{r:r.r*n+t.r*(1-n),g:r.g*n+t.g*(1-n),b:r.b*n+t.b*(1-n)}}function l(r){return.2126*d(r.r)+.7152*d(r.g)+.0722*d(r.b)}function d(r){return(r/=255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}function v(r,n){var t=l(r),e=l(n);return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}function f(r){var n=r.rgba;n.a;return Object(e.a)(n,["a"])}var k={components:{},data:function(){return{backgroundPickerValue:null,foregroundPickerValue:null,expandInfo:!1}},methods:{contrast:function(r,n){if(r&&n)return o(n,r).contrast},variance:function(r,n){if(r&&n)return o(n,r).variance}}},m=t(76),x=t(113),V=t.n(x),h=t(284),w=t(298),_=t(296),C=t(331),P=t(333),I=t(297),M=t(283),j=t(332),component=Object(m.a)(k,(function(){var r=this,n=r.$createElement,t=r._self._c||n;return t("div",[t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-card",{staticClass:"px-5 mx-5 mt-5"},[t("v-card-title",[r._v("Background Color")]),r._v(" "),t("v-color-picker",{attrs:{"align-self":"center"},model:{value:r.backgroundPickerValue,callback:function(n){r.backgroundPickerValue=n},expression:"backgroundPickerValue"}})],1),r._v(" "),t("v-card",{staticClass:"px-5 mx-5 mt-5"},[t("v-card-title",[r._v("Foreground Color")]),r._v(" "),t("v-color-picker",{model:{value:r.foregroundPickerValue,callback:function(n){r.foregroundPickerValue=n},expression:"foregroundPickerValue"}})],1)],1),r._v(" "),t("v-card",{staticClass:"ml-auto mr-auto mt-7",attrs:{width:"240px"}},[t("v-card-title",[r._v("\n      Contrast Ratio:\n      "+r._s(Number(r.contrast(r.foregroundPickerValue,r.backgroundPickerValue)).toFixed(3))+"\n    ")])],1),r._v(" "),t("v-col",[t("v-card",{staticClass:"ml-auto mr-auto",attrs:{width:"240px"}},[t("v-card-title",[r._v("\n        Variance:\n        "+r._s(Number(r.variance(r.foregroundPickerValue,r.backgroundPickerValue)).toFixed(3))+"\n        "),t("v-btn",{staticClass:"ml-auto mr-2",attrs:{icon:"",color:"purple"},on:{click:function(n){r.expandInfo=!r.expandInfo}}},[t("v-icon",[r._v("mdi-information")])],1)],1)],1),r._v(" "),t("v-expand-transition",[t("v-card",{directives:[{name:"show",rawName:"v-show",value:r.expandInfo,expression:"expandInfo"}],staticClass:"mx-auto mt-3",attrs:{width:"400"}},[t("v-card-text",[r._v("\n          When the background is semi-transperent, the contrast ratio is\n          calculated twice, once with the background overlayed on black and\n          once on white, and the final ratio is the average.\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;V()(component,{VBtn:h.a,VCard:w.a,VCardText:_.a,VCardTitle:_.b,VCol:C.a,VColorPicker:P.a,VExpandTransition:I.a,VIcon:M.a,VRow:j.a})}}]);