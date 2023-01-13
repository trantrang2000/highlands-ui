"use strict";(self.webpackChunkhighlands_ui=self.webpackChunkhighlands_ui||[]).push([[3483],{93209:function(e,n,t){var i=t(72791),a=t(64554),l=t(10703),r=t(80184),o=function(e){var n=e.children;return(0,r.jsx)(a.Z,{component:l.Z,sx:function(e){return{maxWidth:e.breakpoints.values.md,width:"100%",mx:"auto",px:3,py:3,my:5}},elevation:3,children:n})};n.Z=(0,i.memo)(o)},48095:function(e,n,t){var i=t(72791),a=t(64554),l=t(10703),r=t(36151),o=t(15897),s=t(91523),c=t(80184),u=function(e){var n=e.linkBack,t=e.isSubmitting,i=(0,o.$)().t;return(0,c.jsx)(a.Z,{component:l.Z,elevation:3,sx:{px:2,position:"sticky",top:0,zIndex:9},children:(0,c.jsxs)(a.Z,{sx:function(e){return{maxWidth:e.breakpoints.values.md,width:"100%",mx:"auto",py:1.25,display:"flex",justifyContent:"space-between"}},children:[(0,c.jsx)(r.Z,{variant:"contained",color:"secondary",component:s.rU,to:n,children:i("button.Back",{ns:"admin"})}),(0,c.jsx)(r.Z,{variant:"contained",color:"primary",type:"submit",disabled:t,children:i("button.Save changes",{ns:"admin"})})]})})};n.Z=(0,i.memo)(u)},81544:function(e,n,t){var i=t(1413),a=t(45987),l=t(72791),r=t(68096),o=t(20890),s=t(99321),c=t(23786),u=t(47071),d=t(55705),h=t(763),m=t(15897),p=t(80184),f=["fullWidth","label","id","name","displayEmpty","variant","options","ns"],x=function(e){var n=e.fullWidth,t=e.label,l=e.id,x=e.name,v=e.displayEmpty,b=void 0===v||v,Z=e.variant,g=void 0===Z?"filled":Z,S=e.options,j=e.ns,C=void 0===j?"admin":j,y=(0,a.Z)(e,f),E=(0,m.$)().t,W=(0,d.u6)(),k=W.errors,T=W.touched,U=W.values,R=W.handleChange,_=(0,h.get)(k,x)&&(0,h.get)(T,x),D=(0,h.get)(k,x);return(0,p.jsxs)(r.Z,{sx:{minWidth:120},fullWidth:n,children:[t&&(0,p.jsx)(o.Z,{sx:{mb:1,fontWeight:"fontWeightMedium"},children:(0,p.jsx)("label",{htmlFor:"label-".concat(l||x),children:E("label.".concat(t),{ns:C})})}),(0,p.jsxs)(d.gN,(0,i.Z)((0,i.Z)({},y),{},{label:"",hiddenLabel:!0,displayEmpty:b,labelId:"label-".concat(l||x),component:s.Z,onChange:R,id:l||x,name:x,variant:g,error:!!_,value:(0,h.get)(U,x),inputProps:{name:x},children:[(0,p.jsx)(c.Z,{value:"",children:(0,p.jsx)("em",{children:E("common.None",{ns:C})})}),S.map((function(e){return(0,p.jsx)(c.Z,{value:e.value,children:e.label},e.value)}))]})),D&&(0,p.jsx)(u.Z,{error:!0,children:D})]})};n.Z=(0,l.memo)(x)},15504:function(e,n,t){var i=t(1413),a=t(45987),l=t(72791),r=t(20890),o=t(48550),s=t(55705),c=t(763),u=t(15897),d=t(80184),h=["label","id","name","variant","ns","placeholder"],m=function(e){var n=e.label,t=e.id,l=e.name,m=e.variant,p=void 0===m?"filled":m,f=e.ns,x=void 0===f?"admin":f,v=e.placeholder,b=(0,a.Z)(e,h),Z=(0,u.$)().t,g=(0,s.u6)(),S=g.errors,j=g.touched,C=g.values,y=g.handleBlur,E=g.handleChange,W=(0,c.get)(S,l)&&(0,c.get)(j,l),k=(0,c.get)(S,l);return(0,d.jsxs)(d.Fragment,{children:[n&&(0,d.jsx)(r.Z,{sx:{mb:1,fontWeight:"fontWeightMedium"},children:(0,d.jsx)("label",{htmlFor:t||l,children:Z("label.".concat(n),{ns:x})})}),(0,d.jsx)(s.gN,(0,i.Z)((0,i.Z)({},b),{},{component:o.Z,onChange:E,onBlur:y,id:t||l,name:l,variant:p,error:!!W,helperText:W&&Z(k,{ns:x}),value:(0,c.get)(C,l),autoComplete:"off",hiddenLabel:!0,label:"",placeholder:v?Z("placeholder.".concat(v),{ns:x}):""}))]})};n.Z=(0,l.memo)(m)},8056:function(e,n,t){var i;t.d(n,{F:function(){return i}}),function(e){e.CREATE_SUCCESS="Created success",e.DELETE_SUCCESS="Deleted success",e.UPDATE_SUCCESS="Updated success",e.ERROR="Something error",e.ADD_PRODUCT_SUCCESS="Add product success",e.OVER_PRODUCT_IN_CART="Over product"}(i||(i={}))},23483:function(e,n,t){t.r(n);var i=t(29439),a=t(72791),l=t(64554),r=t(8785),o=t(55705),s=t(79271),c=t(93209),u=t(48095),d=t(81544),h=t(15504),m=t(27735),p=t(8056),f=t(38355),x=t(12583),v=t(82179),b=t(38463),Z=t(80184);n.default=function(){var e=(0,s.k6)(),n=(0,s.UO)().categoryId,t=(0,b.TL)(),g=(0,b.CG)((function(e){return e.category})).categoryDetail,S=(0,a.useState)(!0),j=(0,i.Z)(S,2),C=j[0],y=j[1],E=(0,a.useMemo)((function(){return n&&g?(0,f.lW)(g):f.xW}),[g,n]);return(0,a.useEffect)((function(){n?t((0,f.In)(Number(n))).finally((function(){return y(!1)})):y(!1)}),[t,n]),C?(0,Z.jsx)(m.Z,{}):(0,Z.jsx)(o.J9,{initialValues:E,validationSchema:f.jP,onSubmit:function(i,a){var l=a.setSubmitting;t(n?(0,f.B2)({data:i,categoryId:Number(n)}):(0,f.sl)(i)).then(r.SI).then((function(){t((0,v.WP)({message:n?p.F.UPDATE_SUCCESS:p.F.CREATE_SUCCESS})),e.push(f.km.LIST)})).catch((function(){return(0,x.y)({dispatch:t})})).finally((function(){return l(!1)}))},children:function(e){var n=e.isSubmitting;return(0,Z.jsxs)(o.l0,{children:[(0,Z.jsx)(u.Z,{linkBack:f.km.LIST,isSubmitting:n}),(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(l.Z,{sx:{mb:3},children:(0,Z.jsx)(h.Z,{name:"title",label:"Title",placeholder:"example",fullWidth:!0})}),(0,Z.jsx)(l.Z,{sx:{mb:3},children:(0,Z.jsx)(d.Z,{name:"type",label:"Type",options:f.tC,fullWidth:!0})}),(0,Z.jsx)(h.Z,{name:"description",label:"Description",placeholder:"example",multiline:!0,fullWidth:!0,rows:5})]})]})}})}},12583:function(e,n,t){t.d(n,{y:function(){return l}});var i=t(8056),a=t(82179),l=function(e){(0,e.dispatch)((0,a.WP)({message:i.F.ERROR}))}}}]);
//# sourceMappingURL=3483.bf132226.chunk.js.map