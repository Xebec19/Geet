(this.webpackJsonpgeet=this.webpackJsonpgeet||[]).push([[0],{45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(4),c=a.n(s),i=a(36),l=a.n(i),r=(a(45),a(19)),d=a(20),o=a(15),b=a(22),u=a(21),h=a(37),j=a(14),m=(a(46),function(){return Object(n.jsxs)("div",{className:"blocks",children:[Object(n.jsx)("div",{className:"block orange"}),Object(n.jsx)("div",{className:"block blue"})]})}),O=(a(30),a(39).a.initializeApp({apiKey:"AIzaSyAcgNc8IyMoDirOygHic2VE-qlNIJx4GGM",authDomain:"geet-de67a.firebaseapp.com",projectId:"geet-de67a",storageBucket:"geet-de67a.appspot.com",messagingSenderId:"837485372919",databaseURL:"https://geet-de67a-default-rtdb.firebaseio.com/",appId:"1:837485372919:web:4ad1f560d8072fe928faf2"})),g=O.auth(),p=O.database().ref(),f=(a(34),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={data:[],loading:!0},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.child("messages").on("value",(function(t){if(null!=t.val()){var a=[];t.forEach((function(e){a.push(e.val())})),e.setState({data:a}),e.setState({loading:!1})}}))}},{key:"render",value:function(){return this.state.loading?Object(n.jsx)(m,{}):Object(n.jsx)("div",{children:Object(n.jsx)("div",{style:{overFlow:"auto",wordBreak:"breakAll"},children:Object(n.jsx)("pre",{style:{margin:"0",padding:"0"},children:this.state.data.map((function(e,t){return Object(n.jsxs)("span",{className:"",children:[e.email," :",Object(n.jsx)("br",{})," ",e.content,Object(n.jsx)("br",{})]},t)}))})})})}}]),a}(c.a.Component)),v=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={message:"",data:[],email:"",uid:"",loading:!0,authenticated:!0},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.handleSignout=n.handleSignout.bind(Object(o.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.onAuthStateChanged((function(t){if(t){var a=t.uid;e.setState({uid:a}),console.log("Logged in"),e.setState({email:t.email})}else console.log("Logged out"),e.setState({authenticated:!1})}))}},{key:"handleSignout",value:function(){var e=this;g.signOut().then((function(){console.log("Success"),e.setState({authenticated:!1})})).catch((function(e){console.log("error")}))}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){p.child("messages").push({content:this.state.message,email:this.state.email},(function(e){e&&console.log(e)})),this.setState({message:""})}},{key:"render",value:function(){var e=this;return this.state.authenticated?Object(n.jsx)("div",{children:Object(n.jsx)("article",{className:"vh-100 dt w-100",children:Object(n.jsxs)("div",{className:"dtc v-mid tc ph3 ph4-l",children:[Object(n.jsx)(j.b,{className:"f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black",to:"/",onClick:function(){return e.handleSignout()},children:"Sign out"}),Object(n.jsx)(f,{}),Object(n.jsx)("div",{className:"pa4-l",children:Object(n.jsx)("form",{className:"bg-light-red mw7 center pa4 br2-ns ba b--black-10",children:Object(n.jsxs)("fieldset",{className:"cf bn ma0 pa0",children:[Object(n.jsx)("legend",{className:"pa0 f5 f4-ns mb3 black-80",children:"Write your message"}),Object(n.jsxs)("div",{className:"cf",children:[Object(n.jsx)("input",{type:"text",name:"message",value:this.state.message,onChange:function(t){return e.handleChange(t)}}),Object(n.jsx)("button",{className:"f6 link dim br3 ba bw1 ph3 pv2 mb2 dib black",onClick:function(){return e.handleSubmit()},children:"Submit"})]})]})})})]})})}):Object(n.jsx)("div",{children:Object(n.jsx)(m,{})})}}]),a}(c.a.Component),x=a(17),k=(a(27),function(e){var t=Object(s.useState)(""),a=Object(x.a)(t,2),c=a[0],i=a[1],l=Object(s.useState)(""),r=Object(x.a)(l,2),d=r[0],o=r[1],b=Object(s.useState)(null),u=Object(x.a)(b,2),h=u[0],m=u[1];function O(e){if(""===c||""===d||!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c))return m("Invalid credentials"),0;g.createUserWithEmailAndPassword(c,d).then((function(e){var t=e.user;console.log(t),console.log(e.user.email),m(null)})).catch((function(e){m(e.message),console.log(e.message)}))}return Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:"pa4 black-80",children:Object(n.jsxs)("form",{className:"measure center",children:[Object(n.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(n.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign Up"}),Object(n.jsxs)("div",{className:"mt3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(n.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return o(e.target.value)},required:!0})]})]}),Object(n.jsxs)("div",{class:"lh-copy mt3",children:[Object(n.jsx)(j.b,{class:"f6 link dim black db",onClick:function(){return O()},to:"/chat",children:"Submit"}),h&&Object(n.jsx)("p",{style:{color:"red"},children:"Invalid"}),Object(n.jsx)(j.b,{to:"/",class:"f6 link dim black db",children:"Already have an account?"})]})]})})})}),N=function(e){var t=Object(s.useState)(""),a=Object(x.a)(t,2),c=a[0],i=a[1],l=Object(s.useState)(""),r=Object(x.a)(l,2),d=r[0],o=r[1],b=Object(s.useState)(null),u=Object(x.a)(b,2),h=u[0],m=u[1];function O(e){if(""===c||""===d||!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(c))return m("Invalid credentials"),0;g.signInWithEmailAndPassword(c,d).then((function(e){var t=e.user;console.log(t),console.log(e.user.email),m(null)})).catch((function(e){m(e.message),console.log(e.message)}))}return Object(n.jsx)("div",{children:Object(n.jsx)("main",{className:"pa4 black-80",children:Object(n.jsxs)("form",{className:"measure center",children:[Object(n.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(n.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign In"}),Object(n.jsxs)("div",{className:"mt3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(n.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(n.jsxs)("div",{className:"mv3",children:[Object(n.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return o(e.target.value)},required:!0})]})]}),Object(n.jsxs)("div",{className:"lh-copy mt3",children:[Object(n.jsx)(j.b,{className:"f6 link dim black db",onClick:function(){return O()},to:"/chat",children:"Submit"}),h&&Object(n.jsx)("p",{style:{color:"red"},children:"Invalid"}),Object(n.jsx)(j.b,{to:"/signup",className:"f6 link dim black db",children:"Need an account?"})]})]})})})},w=a(8),S=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={user:{}},e.handleRoute=e.handleRoute.bind(Object(o.a)(e)),e}return Object(d.a)(a,[{key:"handleRoute",value:function(){console.log("Successfully entered signup func ")}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(w.c,{children:[Object(n.jsx)(w.a,{path:"/signup",children:Object(n.jsx)(k,{})}),Object(n.jsx)(w.a,{exact:!0,path:"/",children:Object(n.jsx)(N,{})}),Object(n.jsx)(w.a,{path:"/chat",children:Object(n.jsx)(v,{})})]})})})}}]),a}(s.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),y()}},[[52,1,2]]]);
//# sourceMappingURL=main.ccfb08dd.chunk.js.map