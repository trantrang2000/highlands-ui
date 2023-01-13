"use strict";(self.webpackChunkhighlands_ui=self.webpackChunkhighlands_ui||[]).push([[8208],{81544:function(e,n,t){var i=t(1413),s=t(45987),a=t(72791),l=t(68096),r=t(20890),o=t(99321),c=t(23786),d=t(47071),u=t(55705),h=t(763),m=t(15897),x=t(80184),Z=["fullWidth","label","id","name","displayEmpty","variant","options","ns"],j=function(e){var n=e.fullWidth,t=e.label,a=e.id,j=e.name,p=e.displayEmpty,g=void 0===p||p,f=e.variant,b=void 0===f?"filled":f,v=e.options,y=e.ns,P=void 0===y?"admin":y,S=(0,s.Z)(e,Z),C=(0,m.$)().t,E=(0,u.u6)(),I=E.errors,T=E.touched,w=E.values,D=E.handleChange,W=(0,h.get)(I,j)&&(0,h.get)(T,j),k=(0,h.get)(I,j);return(0,x.jsxs)(l.Z,{sx:{minWidth:120},fullWidth:n,children:[t&&(0,x.jsx)(r.Z,{sx:{mb:1,fontWeight:"fontWeightMedium"},children:(0,x.jsx)("label",{htmlFor:"label-".concat(a||j),children:C("label.".concat(t),{ns:P})})}),(0,x.jsxs)(u.gN,(0,i.Z)((0,i.Z)({},S),{},{label:"",hiddenLabel:!0,displayEmpty:g,labelId:"label-".concat(a||j),component:o.Z,onChange:D,id:a||j,name:j,variant:b,error:!!W,value:(0,h.get)(w,j),inputProps:{name:j},children:[(0,x.jsx)(c.Z,{value:"",children:(0,x.jsx)("em",{children:C("common.None",{ns:P})})}),v.map((function(e){return(0,x.jsx)(c.Z,{value:e.value,children:e.label},e.value)}))]})),k&&(0,x.jsx)(d.Z,{error:!0,children:k})]})};n.Z=(0,a.memo)(j)},48208:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var i=t(29439),s=t(72791),a=t(68593),l=t(64554),r=t(20890),o=t(36151),c=t(60902),d=t(15897),u=t(91523),h=t(27735),m=t(87198),x=t(38355),Z=t(38463),j=t(1413),p=t(23573),g=t(10703),f=t(39281),b=t(79836),v=t(22041),y=t(35855),P=t(53994),S=t(53382),C=t(13400),E=t(67492),I=t(8785),T=t(79271),w=t(20139),D=t(47610),W=t(8056),k=t(42185),A=t(12583),R=t(82179),M=t(80184),$=function(e){var n=e.categories,t=e.total,a=e.queries,l=e.setQueries,r=(0,d.$)().t,o=(0,T.k6)(),u=(0,Z.TL)(),h=(0,s.useState)(!1),$=(0,i.Z)(h,2),F=$[0],q=$[1],L=(0,s.useState)(null),O=(0,i.Z)(L,2),Q=O[0],z=O[1],N=(0,s.useState)(null),U=(0,i.Z)(N,2),_=U[0],V=U[1];return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(g.Z,{elevation:3,children:[(0,M.jsx)(f.Z,{children:(0,M.jsxs)(b.Z,{children:[(0,M.jsx)(v.Z,{children:(0,M.jsxs)(y.Z,{children:[(0,M.jsx)(P.Z,{}),(0,M.jsx)(P.Z,{children:r("label.ID",{ns:"admin"})}),(0,M.jsx)(P.Z,{children:r("label.Title",{ns:"admin"})}),(0,M.jsx)(P.Z,{children:r("label.Type",{ns:"admin"})}),(0,M.jsx)(P.Z,{children:r("label.Created at",{ns:"admin"})})]})}),(0,M.jsx)(S.Z,{children:n.map((function(e){return(0,M.jsxs)(y.Z,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,M.jsx)(P.Z,{width:80,children:(0,M.jsx)(C.Z,{onClick:function(n){return function(e,n){V(e.currentTarget),z(n)}(n,e)},children:(0,M.jsx)(p.Z,{})})}),(0,M.jsx)(P.Z,{component:"th",scope:"row",children:e.id}),(0,M.jsx)(P.Z,{children:e.title}),(0,M.jsx)(P.Z,{children:e.type===x.o5.PRODUCT?"Product":"Article"}),(0,M.jsx)(P.Z,{children:(0,k.p)(e.createdAt)})]},e.id)}))})]})}),(0,M.jsx)(E.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:t,rowsPerPage:(null===a||void 0===a?void 0:a.perPage)||5,page:a.page-1,onPageChange:function(e,n){l((function(e){return(0,j.Z)((0,j.Z)({},e),{},{page:n+1})}))},onRowsPerPageChange:function(e){l((function(n){return(0,j.Z)((0,j.Z)({},n),{},{page:1,perPage:parseInt(e.target.value,10)})}))},labelRowsPerPage:r("label.Rows per page",{ns:"admin"})})]}),(0,M.jsx)(w.Z,{open:F,onClose:function(){return q(!1)},onSubmit:function(){Q&&u((0,x.uu)(Q.id)).then(I.SI).then((function(){u((0,R.WP)({message:W.F.DELETE_SUCCESS})),l((function(e){return(0,j.Z)((0,j.Z)({},e),{},{page:1})}))})).catch((function(){return(0,A.y)({dispatch:u})})).finally((function(){return q(!1)}))},title:r("common.Do you want delete record?",{ns:"admin"})}),(0,M.jsx)(D.Z,{anchorEl:_,handleCloseMenu:function(){V(null)},handleOpenDeleteDialog:function(){q(!0)},handleRedirectEditPage:function(){Q&&o.push((0,c.MY)(x.km.EDIT)({mode:m.$y.EDIT,categoryId:Q.id}))}})]})},F=(0,s.memo)($),q=t(61889),L=t(55705),O=t(763),Q=t(81544),z=t(15504),N=function(e){var n=e.isSubmitting,t=e.setIsSubmitting,i=e.queries,s=e.setQueries,a=(0,d.$)().t;return(0,M.jsxs)(l.Z,{sx:{p:3,mb:4},component:g.Z,elevation:3,children:[(0,M.jsx)(r.Z,{variant:"h5",children:a("button.Search",{ns:"admin"})}),(0,M.jsx)(l.Z,{sx:{mt:3},children:(0,M.jsx)(L.J9,{validationSchema:x.sx,initialValues:i,onSubmit:function(e){s(e),Object.values((0,O.omit)(e,["page","perPage"])).some((function(e){return!!e}))&&t(!0)},children:(0,M.jsxs)(L.l0,{children:[(0,M.jsxs)(q.ZP,{container:!0,spacing:2,children:[(0,M.jsx)(q.ZP,{item:!0,xs:12,sm:4,children:(0,M.jsx)(z.Z,{name:"id",label:"ID",placeholder:"example",fullWidth:!0})}),(0,M.jsx)(q.ZP,{item:!0,xs:12,sm:4,children:(0,M.jsx)(z.Z,{name:"title",label:"Title",placeholder:"example",fullWidth:!0})}),(0,M.jsx)(q.ZP,{item:!0,xs:12,sm:4,children:(0,M.jsx)(Q.Z,{name:"type",label:"Type",options:x.tC,fullWidth:!0})})]}),(0,M.jsx)(l.Z,{sx:{textAlign:"right",mt:2},children:(0,M.jsx)(o.Z,{variant:"contained",color:"secondary",size:"large",type:"submit",disabled:n,children:a("button.Search",{ns:"admin"})})})]})})})]})},U=(0,s.memo)(N),_=function(){var e=(0,d.$)().t,n=(0,Z.TL)(),t=(0,Z.CG)((function(e){return e.category})).categories,j=(0,s.useState)(!0),p=(0,i.Z)(j,2),g=p[0],f=p[1],b=(0,s.useState)(!1),v=(0,i.Z)(b,2),y=v[0],P=v[1],S=(0,s.useState)(x.AF),C=(0,i.Z)(S,2),E=C[0],I=C[1];return(0,s.useEffect)((function(){n((0,x.AT)(E)).finally((function(){f(!1),P(!1)}))}),[n,E]),g?(0,M.jsx)(h.Z,{}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(l.Z,{sx:{display:"flex",py:3,alignItems:"center",justifyContent:"space-between"},children:[(0,M.jsxs)(r.Z,{variant:"h5",children:[e("common.Manage",{ns:"admin"}),"\xa0",e("sidebar.Categories",{ns:"admin"})]}),(0,M.jsx)(o.Z,{variant:"contained",startIcon:(0,M.jsx)(a.Z,{}),component:u.rU,size:"large",to:(0,c.MY)(x.km.EDIT)({mode:m.$y.CREATE}),children:e("button.Add new",{ns:"admin"})})]}),(0,M.jsx)(U,{isSubmitting:y,setIsSubmitting:P,queries:E,setQueries:I}),t&&t.list.length?(0,M.jsx)(F,{categories:t.list,total:t.totalItems,queries:E,setQueries:I}):(0,M.jsx)(r.Z,{children:e("common.No data",{ns:"admin"})})]})}},68593:function(e,n,t){var i=t(74223),s=t(80184);n.Z=(0,i.Z)((0,s.jsx)("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddRounded")}}]);
//# sourceMappingURL=8208.6a07901c.chunk.js.map