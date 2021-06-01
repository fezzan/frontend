(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[21],{439:function(e,t,s){"use strict";var a=s(441),n=s.n(a),r=s(9),i=s(442).a(),c=s(56),o=s(254),l=s(253),u=n.a.create({baseURL:r.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),d="/auth/login";u.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.Authorization="Bearer ".concat(t)),t||e.headers["public-request"]||(i.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),u.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 403===e.response.status&&(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),i.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),l.b.error(e.response.data.message),Promise.reject(e)}));t.a=u},444:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"c",(function(){return r})),s.d(t,"b",(function(){return i})),s.d(t,"d",(function(){return c}));var a=s(56),n=function(e){return{type:a.a,token:e}},r=function(e){return{type:a.d,message:e}},i=function(){return{type:a.c}},c=function(){return{type:a.e}}},445:function(e,t,s){"use strict";var a=s(439),n={login:function(e){return Object(a.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(a.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=n},454:function(e,t,s){"use strict";var a=s(255);t.a=a.a},455:function(e,t,s){"use strict";var a=s(256);t.a=a.a},460:function(e,t,s){"use strict";var a=s(1),n=s(58),r=s(0),i=s(30),c=s(498),o=s(557),l=s(546),u=s(550),d=s(417),m=s(85),j=s(444),h=s(33),b=s(453),g=s(445),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},f={showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d,authenticated:j.a};t.a=Object(i.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),f)((function(e){var t=e.showLoading,s=e.token,i=e.loading,f=e.redirect,x=e.message,O=e.showMessage,v=e.hideAuthMessage,w=e.authenticated,y=e.allowRedirect,k=l.a.useForm(),N=Object(n.a)(k,1)[0],P=Object(h.g)();return Object(r.useEffect)((function(){null!==s&&y&&P.push(f),O&&setTimeout((function(){v()}),3e3)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(a.jsx)(u.a,{type:"error",showIcon:!0,message:x})}),Object(a.jsxs)(l.a,{form:N,layout:"vertical",name:"register-form",onFinish:function(){N.validateFields().then((function(e){t();g.a.signUp(e).then((function(e){w("fakeToken")})).then((function(e){Object(j.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(a.jsx)(l.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(a.jsx)(d.a,{prefix:Object(a.jsx)(c.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(a.jsx)(d.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(a.jsx)(d.a.Password,{prefix:Object(a.jsx)(o.a,{className:"text-primary"})})}),Object(a.jsx)(l.a.Item,{children:Object(a.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign Up"})})]})]})}))},539:function(e,t,s){"use strict";s.r(t);var a=s(16),n=s(1),r=(s(0),s(460)),i=s(455),c=s(454),o=s(30),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.d)((function(e){return e.theme.currentTheme}));return Object(n.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(n.jsxs)(i.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(n.jsx)(c.a,{xs:20,sm:20,md:24,lg:16,children:Object(n.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(n.jsx)(i.a,{justify:"center",children:Object(n.jsxs)(c.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsxs)("p",{children:["Already have an account? ",Object(n.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)(r.a,Object(a.a)({},e))})]})})})}),Object(n.jsx)(c.a,{xs:0,sm:0,md:0,lg:8,children:Object(n.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(n.jsx)("div",{className:"text-right",children:Object(n.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(n.jsx)(i.a,{justify:"center",children:Object(n.jsxs)(c.a,{xs:0,sm:0,md:0,lg:20,children:[Object(n.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(n.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(n.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(n.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(n.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=21.35cc242c.chunk.js.map