(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[57],{439:function(e,n,t){"use strict";var r=t(441),u=t.n(r),o=t(9),i=t(442).a(),a=t(56),d=t(254),c=t(253),s=u.a.create({baseURL:o.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var n=localStorage.getItem(a.b);return n&&(e.headers.Authorization="Bearer ".concat(n)),n||e.headers["public-request"]||(i.push(l),window.location.reload()),e}),(function(e){d.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var n={message:""};return 403===e.response.status&&(n.message="Authentication Fail",n.description="Please login again",localStorage.removeItem(a.b),i.push(l),window.location.reload()),404===e.response.status&&(n.message="Not Found"),500===e.response.status&&(n.message="Internal Server Error"),508===e.response.status&&(n.message="Time Out"),c.b.error(e.response.data.message),Promise.reject(e)}));n.a=s},440:function(e,n,t){"use strict";t.d(n,"r",(function(){return r})),t.d(n,"U",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"E",(function(){return i})),t.d(n,"s",(function(){return a})),t.d(n,"V",(function(){return d})),t.d(n,"d",(function(){return c})),t.d(n,"F",(function(){return s})),t.d(n,"R",(function(){return l})),t.d(n,"t",(function(){return f})),t.d(n,"W",(function(){return p})),t.d(n,"e",(function(){return b})),t.d(n,"G",(function(){return m})),t.d(n,"B",(function(){return g})),t.d(n,"db",(function(){return h})),t.d(n,"m",(function(){return j})),t.d(n,"O",(function(){return y})),t.d(n,"C",(function(){return O})),t.d(n,"eb",(function(){return v})),t.d(n,"n",(function(){return x})),t.d(n,"P",(function(){return w})),t.d(n,"b",(function(){return C})),t.d(n,"Q",(function(){return S})),t.d(n,"gb",(function(){return q})),t.d(n,"hb",(function(){return F})),t.d(n,"kb",(function(){return P})),t.d(n,"z",(function(){return k})),t.d(n,"k",(function(){return z})),t.d(n,"M",(function(){return T})),t.d(n,"a",(function(){return I})),t.d(n,"fb",(function(){return E})),t.d(n,"x",(function(){return R})),t.d(n,"ab",(function(){return A})),t.d(n,"i",(function(){return B})),t.d(n,"K",(function(){return J})),t.d(n,"v",(function(){return N})),t.d(n,"Y",(function(){return U})),t.d(n,"g",(function(){return D})),t.d(n,"I",(function(){return L})),t.d(n,"y",(function(){return V})),t.d(n,"bb",(function(){return X})),t.d(n,"j",(function(){return G})),t.d(n,"L",(function(){return H})),t.d(n,"A",(function(){return K})),t.d(n,"cb",(function(){return M})),t.d(n,"l",(function(){return Q})),t.d(n,"N",(function(){return W})),t.d(n,"ib",(function(){return Y})),t.d(n,"jb",(function(){return Z})),t.d(n,"p",(function(){return _})),t.d(n,"o",(function(){return $})),t.d(n,"q",(function(){return ee})),t.d(n,"D",(function(){return ne})),t.d(n,"T",(function(){return te})),t.d(n,"S",(function(){return re})),t.d(n,"X",(function(){return ue})),t.d(n,"u",(function(){return oe})),t.d(n,"f",(function(){return ie})),t.d(n,"H",(function(){return ae})),t.d(n,"Z",(function(){return de})),t.d(n,"w",(function(){return ce})),t.d(n,"h",(function(){return se})),t.d(n,"J",(function(){return le}));var r="/category/delete/",u="/category/all",o="/category/addcategory",i="category/edit/",a="/charity/delete/",d="/charity/all",c="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",p="/feed/all",b="/feed/addfeed",m="feed/edit/",g="/sponsor/delete/",h="/sponsor/all",j="/sponsor/addsponsor",y="sponsor/edit/",O="/tournament/delete/",v="/tournament/all",x="/tournament/addtournament",w="tournament/edit/",C="/tournament/activate/",S="/tournament/end/",q="/tournament/find/",F="/user/leaderboard/",P="/tournament/winners/",k="/round/delete/",z="/round/addround",T="round/edit/",I="/round/activate/",E="/round/find/",R="/prizeConfig/delete/",A="/prizeConfig/find/",B="/prizeConfig/addprize",J="/prizeConfig/edit/",N="/game/delete/",U="/game/find/",D="/game/addgame",L="/game/edit/",V="/question/delete/",X="/question/find/",G="/question/addquestion",H="/question/edit/",K="/customrule/delete/",M="/customrule/find/",Q="/customrule/addcustomrule",W="/customrule/edit/",Y="/round/end/",Z="/round/questions/",_="/type/all",$="/transactions/addtransaction",ee="/user/amount",ne="/admin/donate/",te="/activity/all",re="/activity/find/",ue="/rule/all",oe="/rule/delete/",ie="/rule/addrule",ae="rule/edit/",de="/level/all",ce="/level/delete/",se="/level/addlevel",le="level/edit/"},528:function(e,n,t){"use strict";t.r(n);var r=t(1),u=t(16),o=t(58),i=t(0),a=t(547),d=t(253),c=t(546),s=t(417),l=t(85),f=t(33),p=t(439),b=t(440),m=a.a.Title,g=(a.a.Paragraph,a.a.Text,{labelCol:{span:3},wrapperCol:{span:12}}),h={wrapperCol:{offset:8,span:16}};n.default=function(e){var n=Object(f.g)(),t=Object(i.useState)(!1),j=Object(o.a)(t,2),y=j[0],O=j[1],v=Object(i.useState)("https://h7u5d3a4.stackpathcdn.com/assets/hospitals/1448/saylani-welfare-65_450X450.jpg"),x=Object(o.a)(v,2);x[0],x[1];return Object(r.jsxs)(c.a,Object(u.a)(Object(u.a)({},g),{},{name:"EditRule",initialValues:{description:e.location.dataProps.ruledetails.description},onFinish:function(t){console.log("Success:",t),O(!0),p.a.put(b.N+e.location.dataProps.ruledetails.id,t).then((function(e){console.log(e.message),"Custom Rule was updated successfully."==e.message?(n.goBack(),d.b.success("Successfully Done :) ")):d.b.error("Failed")})).catch((function(e){d.b.error("Unable to load  ! Please check your internet or Server ")})).finally((function(){O(!1)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(r.jsx)("br",{}),Object(r.jsx)(a.a,{children:Object(r.jsx)(m,{children:"Edit Rule "})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(c.a.Item,{label:"Text",name:"description",children:Object(r.jsx)(s.a,{})}),Object(r.jsx)(c.a.Item,Object(u.a)(Object(u.a)({},h),{},{children:Object(r.jsx)(l.a,{type:"primary",htmlType:"submit",loading:y,children:"Submit"})}))]}))}}}]);
//# sourceMappingURL=57.45296e9d.chunk.js.map