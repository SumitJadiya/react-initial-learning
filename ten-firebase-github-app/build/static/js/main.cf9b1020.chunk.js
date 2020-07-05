(this["webpackJsonpten-firebase-github-app"]=this["webpackJsonpten-firebase-github-app"]||[]).push([[0],{44:function(e,a,t){e.exports=t(86)},49:function(e,a,t){},50:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(49),t(9)),s=(t(50),t(51),t(15)),i=t(8),m=t(16),u=(t(52),t(18)),p=t.n(u),E=(t(55),t(19)),d=t.n(E),b=t(20),f=t(21),g=t.n(f),h=t(93),v=t(94),w=t(95),x=t(96),y=t(97),O=t(112),j=t(98),S=t(89),N=t(90),k=function(e){var a=e.user;return r.a.createElement(S.a,{className:"text-center mt-3 mb-4"},r.a.createElement("img",{src:a.avatar_url,alt:a.login,className:"img-thumbnail"}),r.a.createElement(N.a,null,r.a.createElement("div",{class:"text-primary"},a.name),r.a.createElement("div",{class:"text-primary"},a.location),r.a.createElement("div",{class:"text-primary"},a.bio),r.a.createElement("div",{class:"text-info"},"Available for hire: ",a.hireable?"YES":"NOPE"),r.a.createElement("div",{class:"text-info"},"Followers ",a.followers)))},C=Object(n.createContext)(),I=t(91),U=t(92),P=function(e){var a=e.url,t=Object(n.useState)([]),l=Object(o.a)(t,2),c=l[0],s=l[1],i=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(a);case 2:t=e.sent,n=t.data,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[a]),r.a.createElement(I.a,null,c.map((function(e){return r.a.createElement(U.a,{key:e.id},r.a.createElement("div",{class:"text-primary"},e.name),r.a.createElement("div",{class:"text-secondary"},e.language),r.a.createElement("div",{class:"text-info"},e.description),r.a.createElement("div",{class:"text-info"},e.private),r.a.createElement("div",{class:"text-info"},e.updated_at))})))},D=function(){var e,a=Object(n.useContext)(C),t=Object(n.useState)(""),l=Object(o.a)(t,2),c=l[0],s=l[1],u=Object(n.useState)(null),p=Object(o.a)(u,2),E=p[0],f=p[1],S=function(){var e=Object(b.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://api.github.com/users/".concat(c));case 3:a=e.sent,t=a.data,f(t),console.log({data:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(m.b)("Not able to locate user",{type:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(h.a,null,r.a.createElement(v.a,{className:"mt-3"},r.a.createElement(w.a,{md:"5"},r.a.createElement(x.a,null,r.a.createElement(y.a,{type:"text",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Please provide the username"}),r.a.createElement(O.a,{addonType:"append"},r.a.createElement(j.a,{color:"info",onClick:S},"Fetch User"))),E?r.a.createElement(k,{user:E}):null),r.a.createElement(w.a,{md:"7"},E?r.a.createElement(P,{url:E.repos_url}):null))):r.a.createElement(i.a,{to:"/signin"})},A=t(99),F=t(100),J=t(101),G=t(102),W=t(103),B=function(){var e,a=Object(n.useContext)(C),t=Object(n.useState)(""),l=Object(o.a)(t,2),c=l[0],s=l[1],u=Object(n.useState)(""),E=Object(o.a)(u,2),d=E[0],b=E[1];return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(i.a,{to:"/"}):r.a.createElement(h.a,{className:"text-center"},r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(S.a,null,r.a.createElement(A.a,{onSubmit:function(e){e.preventDefault(),p.a.auth().signInWithEmailAndPassword(c,d).then((function(e){console.log("login success"+e),a.setUser({email:e.user.email,uid:e.user.uid,password:d}),Object(m.b)("Login Successful",{type:"success"})})).catch((function(e){console.log(e),Object(m.b)(e.message,{type:"error"})}))}},r.a.createElement(F.a,{className:""},"SignIn here"),r.a.createElement(N.a,null,r.a.createElement(J.a,{row:!0},r.a.createElement(G.a,{for:"email",sm:3},"Email"),r.a.createElement(w.a,{sm:9},r.a.createElement(y.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(J.a,{row:!0},r.a.createElement(G.a,{for:"password",sm:3},"Password"),r.a.createElement(w.a,{sm:9},r.a.createElement(y.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return b(e.target.value)}})))),r.a.createElement(W.a,null,r.a.createElement(j.a,{type:"submit",block:!0,color:"primary"},"Sign In")))))))},H=function(){var e,a=Object(n.useContext)(C),t=Object(n.useState)(""),l=Object(o.a)(t,2),c=l[0],s=l[1],u=Object(n.useState)(""),E=Object(o.a)(u,2),d=E[0],b=E[1];return(null===(e=a.user)||void 0===e?void 0:e.uid)?r.a.createElement(i.a,{to:"/"}):r.a.createElement(h.a,{className:"text-center"},r.a.createElement(v.a,null,r.a.createElement(w.a,{lg:6,className:"offset-lg-3 mt-5"},r.a.createElement(S.a,null,r.a.createElement(A.a,{onSubmit:function(e){e.preventDefault(),p.a.auth().createUserWithEmailAndPassword(c,d).then((function(e){console.log(e),a.setUser({email:e.user.email,uid:e.user.uid,password:d})})).catch((function(e){console.log(e),Object(m.b)(e.message,{type:"error"})}))}},r.a.createElement(F.a,{className:""},"SignUp here"),r.a.createElement(N.a,null,r.a.createElement(J.a,{row:!0},r.a.createElement(G.a,{for:"email",sm:3},"Email"),r.a.createElement(w.a,{sm:9},r.a.createElement(y.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:c,onChange:function(e){return s(e.target.value)}}))),r.a.createElement(J.a,{row:!0},r.a.createElement(G.a,{for:"password",sm:3},"Password"),r.a.createElement(w.a,{sm:9},r.a.createElement(y.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return b(e.target.value)}})))),r.a.createElement(W.a,null,r.a.createElement(j.a,{type:"submit",block:!0,color:"primary"},"Sign Up")))))))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PageNotFound Page"))},T=function(){return r.a.createElement(h.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p3"},"STJ Github search app with firebase")},_=t(104),z=t(105),K=t(106),M=t(107),R=t(111),Y=t(108),Q=t(109),$=t(110),q=function(){var e,a=Object(n.useContext)(C),t=Object(n.useState)(!1),l=Object(o.a)(t,2),c=l[0],i=l[1];return r.a.createElement(_.a,{color:"info",light:!0,expand:"md"},r.a.createElement(z.a,null," ",r.a.createElement(s.b,{to:"/",className:"text-white"}," STJ Git fire App")," "),r.a.createElement(K.a,{className:"text-white"},(null===(e=a.user)||void 0===e?void 0:e.email)?a.user.email:""),r.a.createElement(M.a,{onClick:function(){return i(!c)}}),r.a.createElement(R.a,{isOpen:c,navbar:!0},r.a.createElement(Y.a,{className:"ml-auto",navbar:!0},a.user?r.a.createElement(Q.a,null,r.a.createElement($.a,{onClick:function(){a.setUser(null)},className:"text-white"}," Logout ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,r.a.createElement($.a,{tag:s.b,to:"/signin",className:"text-white"}," SignIn ")),r.a.createElement(Q.a,null,r.a.createElement($.a,{tag:s.b,to:"/signup",className:"text-white"}," SignUp "))))))};p.a.initializeApp({apiKey:"AIzaSyCHJG-p9evhcYK61a8hDIoUdQc6h0D9OIs",authDomain:"mygitapp-2b2db.firebaseapp.com",databaseURL:"https://mygitapp-2b2db.firebaseio.com",projectId:"mygitapp-2b2db",storageBucket:"mygitapp-2b2db.appspot.com",messagingSenderId:"372542575613",appId:"1:372542575613:web:56a4e515cdfb2b4a54ff94",measurementId:"G-MFH9D6H0RD"});var V=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(s.a,null,r.a.createElement(m.a,null),r.a.createElement(C.Provider,{value:{user:t,setUser:l}},r.a.createElement(q,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:D}),r.a.createElement(i.b,{exact:!0,path:"/signin",component:B}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:H}),r.a.createElement(i.b,{exact:!0,path:"*",component:L})),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.cf9b1020.chunk.js.map