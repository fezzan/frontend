(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[43],{439:function(e,n,t){"use strict";var r=t(441),u=t.n(r),o=t(9),i=t(442).a(),a=t(56),d=t(254),c=t(253),s=u.a.create({baseURL:o.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var n=localStorage.getItem(a.b);return n&&(e.headers.Authorization="Bearer ".concat(n)),n||e.headers["public-request"]||(i.push(l),window.location.reload()),e}),(function(e){d.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var n={message:""};return 403===e.response.status&&(n.message="Authentication Fail",n.description="Please login again",localStorage.removeItem(a.b),i.push(l),window.location.reload()),404===e.response.status&&(n.message="Not Found"),500===e.response.status&&(n.message="Internal Server Error"),508===e.response.status&&(n.message="Time Out"),c.b.error(e.response.data.message),Promise.reject(e)}));n.a=s},440:function(e,n,t){"use strict";t.d(n,"r",(function(){return r})),t.d(n,"U",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"E",(function(){return i})),t.d(n,"s",(function(){return a})),t.d(n,"V",(function(){return d})),t.d(n,"d",(function(){return c})),t.d(n,"F",(function(){return s})),t.d(n,"R",(function(){return l})),t.d(n,"t",(function(){return f})),t.d(n,"W",(function(){return b})),t.d(n,"e",(function(){return m})),t.d(n,"G",(function(){return p})),t.d(n,"B",(function(){return g})),t.d(n,"db",(function(){return j})),t.d(n,"m",(function(){return h})),t.d(n,"O",(function(){return y})),t.d(n,"C",(function(){return O})),t.d(n,"eb",(function(){return v})),t.d(n,"n",(function(){return C})),t.d(n,"P",(function(){return x})),t.d(n,"b",(function(){return q})),t.d(n,"Q",(function(){return w})),t.d(n,"gb",(function(){return F})),t.d(n,"hb",(function(){return S})),t.d(n,"kb",(function(){return k})),t.d(n,"z",(function(){return z})),t.d(n,"k",(function(){return A})),t.d(n,"M",(function(){return P})),t.d(n,"a",(function(){return I})),t.d(n,"fb",(function(){return T})),t.d(n,"x",(function(){return N})),t.d(n,"ab",(function(){return B})),t.d(n,"i",(function(){return E})),t.d(n,"K",(function(){return J})),t.d(n,"v",(function(){return U})),t.d(n,"Y",(function(){return D})),t.d(n,"g",(function(){return L})),t.d(n,"I",(function(){return R})),t.d(n,"y",(function(){return V})),t.d(n,"bb",(function(){return G})),t.d(n,"j",(function(){return H})),t.d(n,"L",(function(){return K})),t.d(n,"A",(function(){return M})),t.d(n,"cb",(function(){return Q})),t.d(n,"l",(function(){return W})),t.d(n,"N",(function(){return X})),t.d(n,"ib",(function(){return Y})),t.d(n,"jb",(function(){return Z})),t.d(n,"p",(function(){return $})),t.d(n,"o",(function(){return _})),t.d(n,"q",(function(){return ee})),t.d(n,"D",(function(){return ne})),t.d(n,"T",(function(){return te})),t.d(n,"S",(function(){return re})),t.d(n,"X",(function(){return ue})),t.d(n,"u",(function(){return oe})),t.d(n,"f",(function(){return ie})),t.d(n,"H",(function(){return ae})),t.d(n,"Z",(function(){return de})),t.d(n,"w",(function(){return ce})),t.d(n,"h",(function(){return se})),t.d(n,"J",(function(){return le}));var r="/category/delete/",u="/category/all",o="/category/addcategory",i="category/edit/",a="/charity/delete/",d="/charity/all",c="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",b="/feed/all",m="/feed/addfeed",p="feed/edit/",g="/sponsor/delete/",j="/sponsor/all",h="/sponsor/addsponsor",y="sponsor/edit/",O="/tournament/delete/",v="/tournament/all",C="/tournament/addtournament",x="tournament/edit/",q="/tournament/activate/",w="/tournament/end/",F="/tournament/find/",S="/user/leaderboard/",k="/tournament/winners/",z="/round/delete/",A="/round/addround",P="round/edit/",I="/round/activate/",T="/round/find/",N="/prizeConfig/delete/",B="/prizeConfig/find/",E="/prizeConfig/addprize",J="/prizeConfig/edit/",U="/game/delete/",D="/game/find/",L="/game/addgame",R="/game/edit/",V="/question/delete/",G="/question/find/",H="/question/addquestion",K="/question/edit/",M="/customrule/delete/",Q="/customrule/find/",W="/customrule/addcustomrule",X="/customrule/edit/",Y="/round/end/",Z="/round/questions/",$="/type/all",_="/transactions/addtransaction",ee="/user/amount",ne="/admin/donate/",te="/activity/all",re="/activity/find/",ue="/rule/all",oe="/rule/delete/",ie="/rule/addrule",ae="rule/edit/",de="/level/all",ce="/level/delete/",se="/level/addlevel",le="level/edit/"},513:function(e,n,t){"use strict";t.r(n),t.d(n,"AddCategory",(function(){return x}));var r=t(65),u=t(66),o=t(82),i=t(81),a=t(1),d=t(16),c=t(58),s=t(0),l=t(547),f=t(253),b=t(546),m=t(417),p=t(85),g=t(33),j=t(439),h=t(440),y=l.a.Title,O=(l.a.Paragraph,l.a.Text,{labelCol:{span:3},wrapperCol:{span:12}}),v={wrapperCol:{offset:8,span:16}},C=function(){var e=Object(g.g)(),n=Object(s.useState)(!1),t=Object(c.a)(n,2),r=t[0],u=t[1];return Object(a.jsxs)(b.a,Object(d.a)(Object(d.a)({},O),{},{name:"AddCategory",initialValues:{remember:!0},onFinish:function(n){u(!0),j.a.post(h.c,n).then((function(n){n.id?(e.goBack(),f.b.success("Successfully Done :) ")):f.b.error("Failed")})).catch((function(e){f.b.error("Unable to load  ! Please check your internet or Server ")})).finally((function(){u(!1)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{children:Object(a.jsx)(y,{children:"Add Category"})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a.Item,{label:" Name",name:"name",rules:[{required:!0,message:"Please input a Category Name !"}],children:Object(a.jsx)(m.a,{})}),Object(a.jsx)(b.a.Item,Object(d.a)(Object(d.a)({},v),{},{children:Object(a.jsx)(p.a,{type:"primary",htmlType:"submit",loading:r,children:"Submit"})}))]}))},x=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(a.jsx)(C,{})}}]),t}(s.Component);n.default=x}}]);
//# sourceMappingURL=43.9567c86a.chunk.js.map