(this["webpackJsonpreact-table-app"]=this["webpackJsonpreact-table-app"]||[]).push([[0],{44:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(34),s=a.n(n),i=(a(44),a(75)),l=a(14),j=a(48),d=a(30),u=a(26),b=Object(j.a)({apiKey:"AIzaSyBhiHbrO2qUvGDmGN3iX5u-SlpRK_EPlzU",authDomain:"table-app-e64c3.firebaseapp.com",databaseURL:"https://table-app-e64c3-default-rtdb.europe-west1.firebasedatabase.app",projectId:"table-app-e64c3",storageBucket:"table-app-e64c3.appspot.com",messagingSenderId:"102169979497",appId:"1:102169979497:web:c8dc8170bd6ce50f4850f8",measurementId:"G-6RC7ZQ1177"}),o=Object(d.b)(b),h=Object(u.b)(b),O=a(5),p=Object(c.createContext)();function x(){return Object(c.useContext)(p)}function m(e){var t=e.children,a=Object(c.useState)(),r=Object(l.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(!0),j=Object(l.a)(i,2),u=j[0],b=j[1];Object(c.useEffect)((function(){return o.onAuthStateChanged((function(e){s(e),b(!1)}))}),[]);var h={currentUser:n,signup:function(e,t){return Object(d.a)(o,e,t)},login:function(e,t){return Object(d.d)(o,e,t)},logout:function(){Object(d.e)(o)},resetPassword:function(e){return Object(d.c)(o,e)},updatedEmail:function(e){return Object(d.f)(n,e)},updatedPassword:function(e){return Object(d.g)(n,e)}};return Object(O.jsx)(p.Provider,{value:h,children:!u&&t})}var f=a(20),v=a(16),g=a(0),w=a.n(g),y=a(3),N=a(78),C=a(76),S=a(77),k=a(74);function E(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=x().login,r=Object(c.useState)(""),n=Object(l.a)(r,2),s=n[0],i=n[1],j=Object(c.useState)(!1),d=Object(l.a)(j,2),u=d[0],b=d[1],o=Object(v.g)();function h(){return(h=Object(y.a)(w.a.mark((function c(r){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,i(""),b(!0),c.next=6,a(e.current.value,t.current.value);case 6:b(!1),o.push("/dashboard"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),i("Failed to log in");case 13:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(O.jsx)(C.a,{variant:"danger",children:s}),Object(O.jsxs)(S.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(O.jsxs)(S.a.Group,{id:"email",children:[Object(O.jsx)(S.a.Label,{children:"Email"}),Object(O.jsx)(S.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(S.a.Group,{id:"password",children:[Object(O.jsx)(S.a.Label,{children:"Password"}),Object(O.jsx)(S.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsx)(k.a,{disabled:u,className:"w-100 mt-3",type:"submit",children:"Log In"})]}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(f.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(O.jsx)(f.b,{to:"/signup",children:"Sign Up"})]})]})}function q(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=x().signup,n=Object(c.useState)(""),s=Object(l.a)(n,2),i=s[0],j=s[1],d=Object(c.useState)(!1),u=Object(l.a)(d,2),b=u[0],o=u[1],h=Object(v.g)();function p(){return(p=Object(y.a)(w.a.mark((function c(n){return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",j("Passwords do not match"));case 3:return c.prev=3,j(""),o(!0),c.next=8,r(e.current.value,t.current.value);case 8:o(!1),h.push("/"),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(3),j("Failed to create an account");case 15:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(O.jsx)(C.a,{variant:"danger",children:i}),Object(O.jsxs)(S.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(O.jsxs)(S.a.Group,{id:"email",children:[Object(O.jsx)(S.a.Label,{children:"Email"}),Object(O.jsx)(S.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(S.a.Group,{id:"password",children:[Object(O.jsx)(S.a.Label,{children:"Password"}),Object(O.jsx)(S.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsxs)(S.a.Group,{id:"password-confirm",children:[Object(O.jsx)(S.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(S.a.Control,{type:"password",ref:a,required:!0})]}),Object(O.jsx)(k.a,{disabled:b,className:"w-100 mt-3",type:"submit",children:"Sign Up"})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(O.jsx)(f.b,{to:"/",children:"Log In"})]})]})}var P=a(32),L=a(53);var D=function(e){var t=e.contact,a=e.handleEditClick,c=e.handleDeleteClick;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.fullName}),Object(O.jsx)("td",{children:t.address}),Object(O.jsx)("td",{children:t.phoneNumber}),Object(O.jsx)("td",{children:t.email}),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{type:"button",onClick:function(e){return a(e,t)},children:"Edit"}),Object(O.jsx)("button",{type:"button",onClick:function(){return c(t.id)},children:"Delete"})]})]})},F=function(e){var t=e.addFormData,a=e.handleEditFormChange,c=e.handleCancelClick;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"fullName",required:"required",placeholder:"Enter a name...",value:t.fullName,onChange:a})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"address",required:"required",placeholder:"Enter an address...",value:t.address,onChange:a})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"phoneNumber",required:"required",placeholder:"Enter a phone number...",value:t.phoneNumber,onChange:a})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"email",name:"email",required:"required",placeholder:"Enter an email...",value:t.email,onChange:a})}),Object(O.jsxs)("td",{children:[Object(O.jsx)("button",{type:"submit",children:"Save"}),Object(O.jsx)("button",{type:"button",onClick:c,children:"Cancel"})]})]})},R=function(){var e=x(),t=e.currentUser,a=e.logout,r=Object(c.useState)(""),n=Object(l.a)(r,2),s=n[0],i=n[1],j=Object(v.g)(),d=Object(u.e)(h,"Lists/".concat(t.uid)),b=Object(c.useState)([]),o=Object(l.a)(b,2),p=o[0],m=o[1],g=Object(c.useState)(null),C=Object(l.a)(g,2),S=C[0],E=C[1],q=Object(c.useState)({fullName:"",address:"",phoneNumber:"",email:""}),R=Object(l.a)(q,2),U=R[0],G=R[1];function A(){return(A=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,a();case 4:j.push("/"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out"),console.log(s);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}Object(c.useEffect)((function(){Object(u.c)(d,(function(e){var t=e.val();try{i("");var a=Object.values(t);m(a)}catch(c){i("Database is empty"),console.log(s)}}))}),[]);var I=function(e){e.preventDefault();var t=e.target.getAttribute("name"),a=e.target.value,c=Object(P.a)({},U);c[t]=a,G(c)},B=function(e){e.preventDefault();var t=e.target.getAttribute("name"),a=e.target.value,c=Object(P.a)({},U);c[t]=a,G(c)},z=function(e,t){e.preventDefault(),E(t.id);var a={fullName:t.fullName,address:t.address,phoneNumber:t.phoneNumber,email:t.email};G(a)},J=function(){E(null)},K=function(e){Object(u.a)(d).then((function(t){if(t.exists())for(var a=t.val(),c=0,r=Object.entries(a);c<r.length;c++){var n=Object(l.a)(r[c],2),s=n[0];if(n[1].id===e){var i={};return i[s]=null,E(null),Object(u.g)(d,i)}}else console.log("No data available")})).catch((function(e){console.log(e)}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{children:Object(O.jsxs)(N.a.Body,{className:"text-center mt-2",children:[Object(O.jsxs)("h6",{children:["Email: ",t.email]}),Object(O.jsx)(f.b,{to:"/update-email",children:"Update Email/Password"}),Object(O.jsx)("div",{children:Object(O.jsx)(k.a,{variant:"link",onClick:function(){return A.apply(this,arguments)},children:"Log Out"})})]})}),Object(O.jsx)("div",{style:{width:"800px",marginTop:6},children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:S,fullName:U.fullName,address:U.address,phoneNumber:U.phoneNumber,email:U.email};Object(u.a)(d).then((function(e){if(e.exists())for(var a=e.val(),c=0,r=Object.entries(a);c<r.length;c++){var n=Object(l.a)(r[c],2),s=n[0];if(n[1].id===S){var i={};return i[s]=t,Object(u.g)(d,i)}}else console.log("No data available")})).catch((function(e){console.log(e)})),E(null)},children:Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Address"}),Object(O.jsx)("th",{children:"Phone Number"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Actions"})]})}),Object(O.jsx)("tbody",{children:p.map((function(e){return Object(O.jsx)(c.Fragment,{children:e.id===S?Object(O.jsx)(F,{addFormData:U,handleEditFormChange:B,handleCancelClick:J}):Object(O.jsx)(D,{contact:e,handleEditClick:z,handleDeleteClick:K})},e.id)}))})]})})}),Object(O.jsxs)("div",{style:{width:"800px",marginTop:6},children:[Object(O.jsx)("h3",{children:"Add a Contact"}),Object(O.jsxs)("form",{className:"form-container",children:[Object(O.jsx)("input",{type:"text",name:"fullName",required:"required",placeholder:"Enter a name...",onChange:I}),Object(O.jsx)("input",{type:"text",name:"address",required:"required",placeholder:"Enter an address...",onChange:I}),Object(O.jsx)("input",{type:"text",name:"phoneNumber",required:"required",placeholder:"Enter a phone number...",onChange:I}),Object(O.jsx)("input",{type:"email",name:"email",required:"required",placeholder:"Enter an email...",onChange:I}),Object(O.jsx)("button",{type:"reset",onClick:function(e){e.preventDefault();var t={id:Object(L.a)(),fullName:U.fullName,address:U.address,phoneNumber:U.phoneNumber,email:U.email},a=Object(u.d)(d);Object(u.f)(a,t),Object(u.c)(d,(function(e){if(e.exists()){var t=e.val(),a=Object.values(t);m(a)}else m([]),console.log("No data available")}))},children:"Add"})]})]})]})},U=a(54),G=["component"];function A(e){var t=e.component,a=Object(U.a)(e,G),c=x().currentUser;return Object(O.jsx)(v.b,Object(P.a)(Object(P.a)({},a),{},{render:function(e){return c?Object(O.jsx)(t,Object(P.a)({},e)):Object(O.jsx)(v.a,{to:"/"})}}))}function I(){var e=Object(c.useRef)(),t=x().resetPassword,a=Object(c.useState)(""),r=Object(l.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),d=j[0],u=j[1],b=Object(c.useState)(""),o=Object(l.a)(b,2),h=o[0],p=o[1];function m(){return(m=Object(y.a)(w.a.mark((function a(c){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,p(""),s(""),u(!0),a.next=7,t(e.current.value);case 7:p("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to reset password");case 13:u(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(O.jsx)(C.a,{variant:"danger",children:n}),h&&Object(O.jsx)(C.a,{variant:"info",children:h}),Object(O.jsxs)(S.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(O.jsxs)(S.a.Group,{id:"email",children:[Object(O.jsx)(S.a.Label,{children:"Email"}),Object(O.jsx)(S.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsx)(k.a,{disabled:d,className:"w-100 mt-3",type:"submit",children:"Reset Password"})]}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(f.b,{to:"/",children:"Login"})})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(O.jsx)(f.b,{to:"/signup",children:"Sign Up"})]})]})}function B(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=x(),n=r.currentUser,s=r.updatedEmail,i=r.updatedPassword,j=Object(c.useState)(""),d=Object(l.a)(j,2),u=d[0],b=d[1],o=Object(c.useState)(!1),h=Object(l.a)(o,2),p=h[0],m=h[1],g=Object(v.g)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N.a,{children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Update Email/Password"}),u&&Object(O.jsx)(C.a,{variant:"danger",children:u}),Object(O.jsxs)(S.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return b("Passwords do not match");var r=[];m(!0),b(""),e.current.value!==n.email&&r.push(s(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){g.push("/dashboard")})).catch((function(){b("Failed to update")})).finally(),m(!1)},children:[Object(O.jsxs)(S.a.Group,{id:"email",children:[Object(O.jsx)(S.a.Label,{children:"Email"}),Object(O.jsx)(S.a.Control,{type:"email",ref:e,required:!0,defaultValue:n.email})]}),Object(O.jsxs)(S.a.Group,{id:"password",children:[Object(O.jsx)(S.a.Label,{children:"Password"}),Object(O.jsx)(S.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(O.jsxs)(S.a.Group,{id:"password-confirm",children:[Object(O.jsx)(S.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(S.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(O.jsx)(k.a,{disabled:p,className:"w-100 mt-3",type:"submit",children:"Update"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsx)(f.b,{to:"/dashboard",children:"Cancel"})})]})}var z=function(){return Object(O.jsx)(m,{children:Object(O.jsx)(i.a,{style:{width:"auto"},children:Object(O.jsx)("div",{style:{width:"400px"},children:Object(O.jsx)(f.a,{children:Object(O.jsx)(m,{children:Object(O.jsxs)(v.d,{children:[Object(O.jsx)(A,{path:"/dashboard",component:R}),Object(O.jsx)(v.b,{path:"/signup",component:q}),Object(O.jsx)(v.b,{exact:!0,path:"/",component:E}),Object(O.jsx)(v.b,{path:"/forgot-password",component:I}),Object(O.jsx)(v.b,{path:"/update-email",component:B})]})})})})})})};a(71);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.32e0b0e1.chunk.js.map