(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[54],{439:function(e,n,t){"use strict";var r=t(441),u=t.n(r),o=t(9),i=t(442).a(),a=t(56),d=t(254),c=t(253),s=u.a.create({baseURL:o.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var n=localStorage.getItem(a.b);return n&&(e.headers.Authorization="Bearer ".concat(n)),n||e.headers["public-request"]||(i.push(l),window.location.reload()),e}),(function(e){d.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var n={message:""};return 403===e.response.status&&(n.message="Authentication Fail",n.description="Please login again",localStorage.removeItem(a.b),i.push(l),window.location.reload()),404===e.response.status&&(n.message="Not Found"),500===e.response.status&&(n.message="Internal Server Error"),508===e.response.status&&(n.message="Time Out"),c.b.error(e.response.data.message),Promise.reject(e)}));n.a=s},440:function(e,n,t){"use strict";t.d(n,"r",(function(){return r})),t.d(n,"U",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"E",(function(){return i})),t.d(n,"s",(function(){return a})),t.d(n,"V",(function(){return d})),t.d(n,"d",(function(){return c})),t.d(n,"F",(function(){return s})),t.d(n,"R",(function(){return l})),t.d(n,"t",(function(){return f})),t.d(n,"W",(function(){return p})),t.d(n,"e",(function(){return m})),t.d(n,"G",(function(){return b})),t.d(n,"B",(function(){return g})),t.d(n,"db",(function(){return h})),t.d(n,"m",(function(){return j})),t.d(n,"O",(function(){return y})),t.d(n,"C",(function(){return O})),t.d(n,"eb",(function(){return v})),t.d(n,"n",(function(){return x})),t.d(n,"P",(function(){return q})),t.d(n,"b",(function(){return w})),t.d(n,"Q",(function(){return S})),t.d(n,"gb",(function(){return C})),t.d(n,"hb",(function(){return F})),t.d(n,"kb",(function(){return P})),t.d(n,"z",(function(){return z})),t.d(n,"k",(function(){return T})),t.d(n,"M",(function(){return k})),t.d(n,"a",(function(){return I})),t.d(n,"fb",(function(){return E})),t.d(n,"x",(function(){return A})),t.d(n,"ab",(function(){return Q})),t.d(n,"i",(function(){return J})),t.d(n,"K",(function(){return L})),t.d(n,"v",(function(){return U})),t.d(n,"Y",(function(){return B})),t.d(n,"g",(function(){return D})),t.d(n,"I",(function(){return N})),t.d(n,"y",(function(){return R})),t.d(n,"bb",(function(){return V})),t.d(n,"j",(function(){return X})),t.d(n,"L",(function(){return G})),t.d(n,"A",(function(){return H})),t.d(n,"cb",(function(){return K})),t.d(n,"l",(function(){return M})),t.d(n,"N",(function(){return W})),t.d(n,"ib",(function(){return Y})),t.d(n,"jb",(function(){return Z})),t.d(n,"p",(function(){return _})),t.d(n,"o",(function(){return $})),t.d(n,"q",(function(){return ee})),t.d(n,"D",(function(){return ne})),t.d(n,"T",(function(){return te})),t.d(n,"S",(function(){return re})),t.d(n,"X",(function(){return ue})),t.d(n,"u",(function(){return oe})),t.d(n,"f",(function(){return ie})),t.d(n,"H",(function(){return ae})),t.d(n,"Z",(function(){return de})),t.d(n,"w",(function(){return ce})),t.d(n,"h",(function(){return se})),t.d(n,"J",(function(){return le}));var r="/category/delete/",u="/category/all",o="/category/addcategory",i="category/edit/",a="/charity/delete/",d="/charity/all",c="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",p="/feed/all",m="/feed/addfeed",b="feed/edit/",g="/sponsor/delete/",h="/sponsor/all",j="/sponsor/addsponsor",y="sponsor/edit/",O="/tournament/delete/",v="/tournament/all",x="/tournament/addtournament",q="tournament/edit/",w="/tournament/activate/",S="/tournament/end/",C="/tournament/find/",F="/user/leaderboard/",P="/tournament/winners/",z="/round/delete/",T="/round/addround",k="round/edit/",I="/round/activate/",E="/round/find/",A="/prizeConfig/delete/",Q="/prizeConfig/find/",J="/prizeConfig/addprize",L="/prizeConfig/edit/",U="/game/delete/",B="/game/find/",D="/game/addgame",N="/game/edit/",R="/question/delete/",V="/question/find/",X="/question/addquestion",G="/question/edit/",H="/customrule/delete/",K="/customrule/find/",M="/customrule/addcustomrule",W="/customrule/edit/",Y="/round/end/",Z="/round/questions/",_="/type/all",$="/transactions/addtransaction",ee="/user/amount",ne="/admin/donate/",te="/activity/all",re="/activity/find/",ue="/rule/all",oe="/rule/delete/",ie="/rule/addrule",ae="rule/edit/",de="/level/all",ce="/level/delete/",se="/level/addlevel",le="level/edit/"},525:function(e,n,t){"use strict";t.r(n);var r=t(1),u=t(16),o=t(58),i=t(0),a=t(547),d=t(253),c=t(546),s=t(417),l=t(85),f=t(33),p=t(439),m=t(440),b=a.a.Title,g=(a.a.Paragraph,a.a.Text,{labelCol:{span:3},wrapperCol:{span:12}}),h={wrapperCol:{offset:8,span:16}};n.default=function(e){var n=Object(f.g)(),t=Object(i.useState)(!1),j=Object(o.a)(t,2),y=j[0],O=j[1],v=Object(i.useState)("https://h7u5d3a4.stackpathcdn.com/assets/hospitals/1448/saylani-welfare-65_450X450.jpg"),x=Object(o.a)(v,2);x[0],x[1];return Object(r.jsxs)(c.a,Object(u.a)(Object(u.a)({},g),{},{name:"EditQuestion",initialValues:{text:e.location.dataProps.questiondetails.text},onFinish:function(t){console.log("Success:",t),O(!0),p.a.put(m.L+e.location.dataProps.questiondetails.id,t).then((function(t){console.log(t.message),"Question was updated successfully."==t.message?(n.push("/app/questions/gameid/"+e.match.params.id),d.b.success("Successfully Done :) ")):d.b.error("Failed")})).catch((function(e){d.b.error("Unable to load  ! Please check your internet or Server ")})).finally((function(){O(!1)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(r.jsx)("br",{}),Object(r.jsx)(a.a,{children:Object(r.jsx)(b,{children:"Edit Question "})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(c.a.Item,{label:"Text",name:"text",children:Object(r.jsx)(s.a,{})}),Object(r.jsx)(c.a.Item,Object(u.a)(Object(u.a)({},h),{},{children:Object(r.jsx)(l.a,{type:"primary",htmlType:"submit",loading:y,children:"Submit"})}))]}))}}}]);
//# sourceMappingURL=54.b5ff52d9.chunk.js.map