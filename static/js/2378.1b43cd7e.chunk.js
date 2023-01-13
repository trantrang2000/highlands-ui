"use strict";(self.webpackChunkhighlands_ui=self.webpackChunkhighlands_ui||[]).push([[2378],{93209:function(n,t,e){var i=e(72791),o=e(64554),r=e(10703),u=e(80184),a=function(n){var t=n.children;return(0,u.jsx)(o.Z,{component:r.Z,sx:function(n){return{maxWidth:n.breakpoints.values.md,width:"100%",mx:"auto",px:3,py:3,my:5}},elevation:3,children:t})};t.Z=(0,i.memo)(a)},48095:function(n,t,e){var i=e(72791),o=e(64554),r=e(10703),u=e(36151),a=e(15897),c=e(91523),s=e(80184),l=function(n){var t=n.linkBack,e=n.isSubmitting,i=(0,a.$)().t;return(0,s.jsx)(o.Z,{component:r.Z,elevation:3,sx:{px:2,position:"sticky",top:0,zIndex:9},children:(0,s.jsxs)(o.Z,{sx:function(n){return{maxWidth:n.breakpoints.values.md,width:"100%",mx:"auto",py:1.25,display:"flex",justifyContent:"space-between"}},children:[(0,s.jsx)(u.Z,{variant:"contained",color:"secondary",component:c.rU,to:t,children:i("button.Back",{ns:"admin"})}),(0,s.jsx)(u.Z,{variant:"contained",color:"primary",type:"submit",disabled:e,children:i("button.Save changes",{ns:"admin"})})]})})};t.Z=(0,i.memo)(l)},28263:function(n,t,e){var i=e(29439),o=e(72791),r=e(85983),u=e(55705),a=e(763),c=e(80184),s=function(n){var t=n.name,e=n.initValue,s=(0,u.u6)(),l=s.setFieldTouched,d=s.setFieldValue,f=s.initialValues,h=(0,o.useRef)(null),m=(0,o.useState)(t?(0,a.get)(f,t):e),p=(0,i.Z)(m,2),S=p[0],C=p[1],E=function(n){if(t)try{d(t,n.target.getContent())}catch(e){console.warn(e)}};return(0,o.useEffect)((function(){t&&C(e||(0,a.get)(f,t))}),[f,t]),(0,c.jsx)(r.M,{apiKey:{NODE_ENV:"production",PUBLIC_URL:"/highlands-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST:"http://localhost:8080/api",REACT_APP_PATH_UPLOAD:"http://localhost:8080/uploads/"}.REACT_TINYMCE_KEY,initialValue:S,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",setup:function(n){h.current=n,n.on("blur",(function(e){return function(n,e){e.setContent(e.getContent()),t&&l(t)}(0,n)})),n.on("change",E)}}})};t.Z=(0,o.memo)(s)},8056:function(n,t,e){var i;e.d(t,{F:function(){return i}}),function(n){n.CREATE_SUCCESS="Created success",n.DELETE_SUCCESS="Deleted success",n.UPDATE_SUCCESS="Updated success",n.ERROR="Something error",n.ADD_PRODUCT_SUCCESS="Add product success",n.OVER_PRODUCT_IN_CART="Over product"}(i||(i={}))},42378:function(n,t,e){e.r(t);var i=e(29439),o=e(72791),r=e(20890),u=e(8785),a=e(55705),c=e(15897),s=e(79271),l=e(93209),d=e(48095),f=e(27735),h=e(28263),m=e(40022),p=e(12583),S=e(38463),C=e(80184);t.default=function(){var n=(0,c.$)().t,t=(0,s.k6)(),e=(0,S.TL)(),E=(0,S.CG)((function(n){return n.setting})).setting,v=(0,o.useState)(!0),b=(0,i.Z)(v,2),g=b[0],_=b[1];return(0,o.useEffect)((function(){e((0,m.CS)()).finally((function(){return _(!1)}))}),[e]),g?(0,C.jsx)(f.Z,{}):(0,C.jsx)(a.J9,{initialValues:E?{returnPolicy:E.returnPolicy}:{returnPolicy:""},onSubmit:function(n,i){var o=i.setSubmitting;e((0,m.ZQ)(n)).then(u.SI).then((function(){return t.push(m.Vb.DETAIL)})).catch((function(){return(0,p.y)({dispatch:e})})).finally((function(){return o(!1)}))},children:function(t){var e=t.isSubmitting;return(0,C.jsxs)(a.l0,{children:[(0,C.jsx)(d.Z,{linkBack:m.Vb.DETAIL,isSubmitting:e}),(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(r.Z,{sx:{fontWeight:600,mb:2},children:n("label.Return Pocily content",{ns:"admin"})}),(0,C.jsx)(h.Z,{name:"returnPolicy"})]})]})}})}},12583:function(n,t,e){e.d(t,{y:function(){return r}});var i=e(8056),o=e(82179),r=function(n){(0,n.dispatch)((0,o.WP)({message:i.F.ERROR}))}}}]);
//# sourceMappingURL=2378.1b43cd7e.chunk.js.map