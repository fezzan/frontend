(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[47],{439:function(e,t,n){"use strict";var r=n(441),u=n.n(r),i=n(9),o=n(442).a(),a=n(56),d=n(254),c=n(253),s=u.a.create({baseURL:i.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var t=localStorage.getItem(a.b);return t&&(e.headers.Authorization="Bearer ".concat(t)),t||e.headers["public-request"]||(o.push(l),window.location.reload()),e}),(function(e){d.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 403===e.response.status&&(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(a.b),o.push(l),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),c.b.error(e.response.data.message),Promise.reject(e)}));t.a=s},440:function(e,t,n){"use strict";n.d(t,"r",(function(){return r})),n.d(t,"U",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"E",(function(){return o})),n.d(t,"s",(function(){return a})),n.d(t,"V",(function(){return d})),n.d(t,"d",(function(){return c})),n.d(t,"F",(function(){return s})),n.d(t,"R",(function(){return l})),n.d(t,"t",(function(){return f})),n.d(t,"W",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"G",(function(){return m})),n.d(t,"B",(function(){return j})),n.d(t,"db",(function(){return g})),n.d(t,"m",(function(){return h})),n.d(t,"O",(function(){return O})),n.d(t,"C",(function(){return y})),n.d(t,"eb",(function(){return x})),n.d(t,"n",(function(){return v})),n.d(t,"P",(function(){return w})),n.d(t,"b",(function(){return F})),n.d(t,"Q",(function(){return P})),n.d(t,"gb",(function(){return S})),n.d(t,"hb",(function(){return I})),n.d(t,"kb",(function(){return q})),n.d(t,"z",(function(){return C})),n.d(t,"k",(function(){return z})),n.d(t,"M",(function(){return k})),n.d(t,"a",(function(){return D})),n.d(t,"fb",(function(){return E})),n.d(t,"x",(function(){return T})),n.d(t,"ab",(function(){return U})),n.d(t,"i",(function(){return A})),n.d(t,"K",(function(){return N})),n.d(t,"v",(function(){return R})),n.d(t,"Y",(function(){return B})),n.d(t,"g",(function(){return J})),n.d(t,"I",(function(){return L})),n.d(t,"y",(function(){return G})),n.d(t,"bb",(function(){return V})),n.d(t,"j",(function(){return H})),n.d(t,"L",(function(){return K})),n.d(t,"A",(function(){return M})),n.d(t,"cb",(function(){return Q})),n.d(t,"l",(function(){return W})),n.d(t,"N",(function(){return X})),n.d(t,"ib",(function(){return Y})),n.d(t,"jb",(function(){return Z})),n.d(t,"p",(function(){return $})),n.d(t,"o",(function(){return _})),n.d(t,"q",(function(){return ee})),n.d(t,"D",(function(){return te})),n.d(t,"T",(function(){return ne})),n.d(t,"S",(function(){return re})),n.d(t,"X",(function(){return ue})),n.d(t,"u",(function(){return ie})),n.d(t,"f",(function(){return oe})),n.d(t,"H",(function(){return ae})),n.d(t,"Z",(function(){return de})),n.d(t,"w",(function(){return ce})),n.d(t,"h",(function(){return se})),n.d(t,"J",(function(){return le}));var r="/category/delete/",u="/category/all",i="/category/addcategory",o="category/edit/",a="/charity/delete/",d="/charity/all",c="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",p="/feed/all",b="/feed/addfeed",m="feed/edit/",j="/sponsor/delete/",g="/sponsor/all",h="/sponsor/addsponsor",O="sponsor/edit/",y="/tournament/delete/",x="/tournament/all",v="/tournament/addtournament",w="tournament/edit/",F="/tournament/activate/",P="/tournament/end/",S="/tournament/find/",I="/user/leaderboard/",q="/tournament/winners/",C="/round/delete/",z="/round/addround",k="round/edit/",D="/round/activate/",E="/round/find/",T="/prizeConfig/delete/",U="/prizeConfig/find/",A="/prizeConfig/addprize",N="/prizeConfig/edit/",R="/game/delete/",B="/game/find/",J="/game/addgame",L="/game/edit/",G="/question/delete/",V="/question/find/",H="/question/addquestion",K="/question/edit/",M="/customrule/delete/",Q="/customrule/find/",W="/customrule/addcustomrule",X="/customrule/edit/",Y="/round/end/",Z="/round/questions/",$="/type/all",_="/transactions/addtransaction",ee="/user/amount",te="/admin/donate/",ne="/activity/all",re="/activity/find/",ue="/rule/all",ie="/rule/delete/",oe="/rule/addrule",ae="rule/edit/",de="/level/all",ce="/level/delete/",se="/level/addlevel",le="level/edit/"},509:function(e,t,n){"use strict";n.r(t);var r=n(16),u=n(1),i=n(58),o=n(0),a=n(547),d=n(253),c=n(546),s=n(417),l=n(544),f=n(85),p=n(33),b=n(439),m=n(440),j=n(9),g=a.a.Title,h=(a.a.Paragraph,a.a.Text,{labelCol:{span:3},wrapperCol:{span:12}}),O={wrapperCol:{offset:8,span:16}};t.default=function(e){var t=Object(p.g)(),n=Object(o.useState)(""),y=Object(i.a)(n,2),x=y[0],v=y[1],w=Object(o.useState)(!1),F=Object(i.a)(w,2),P=F[0],S=F[1],I=Object(o.useState)(j.e+e.location.dataProps.feeddetails.picture),q=Object(i.a)(I,2),C=q[0],z=q[1];return Object(u.jsxs)(c.a,Object(r.a)(Object(r.a)({},h),{},{name:"EditFeed",initialValues:{name:e.location.dataProps.feeddetails.name,description:e.location.dataProps.feeddetails.description},onFinish:function(n){console.log("Success:",n),S(!0);var r=new FormData;r.append("name",n.name),r.append("description",n.description),r.append("picture",x),console.log(x),b.a.put(m.G+e.location.dataProps.feeddetails.id,r).then((function(e){"Feed was updated successfully."==e.message?(t.goBack(),d.b.success("Successfully Done :) ")):d.b.error("Failed")})).catch((function(e){d.b.error("Unable to load  ! Please check your internet or Server ")})).finally((function(){S(!1)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(u.jsx)("br",{}),Object(u.jsx)(a.a,{children:Object(u.jsx)(g,{children:"Edit Feed "})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(c.a.Item,{label:"Name",name:"name",children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(c.a.Item,{label:"Description",name:"description",children:Object(u.jsx)(s.a,{})}),Object(u.jsx)(c.a.Item,{label:" Edit Picture",children:Object(u.jsx)(c.a.Item,{name:"picture",valuePropName:"picture",noStyle:!0,children:Object(u.jsxs)(l.a.Dragger,{accept:"image/*",beforeUpload:function(e){v(e);var t=new FileReader;return t.onload=function(e){z(e.target.result)},t.readAsDataURL(e),!1},name:"picture",children:[Object(u.jsx)("img",{style:{height:200,width:200},src:C}),Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{})," ",Object(u.jsx)("p",{className:"ant-upload-text",children:"Upload new Image"})]})})}),Object(u.jsx)(c.a.Item,Object(r.a)(Object(r.a)({},O),{},{children:Object(u.jsx)(f.a,{type:"primary",htmlType:"submit",loading:P,children:"Submit"})}))]}))}}}]);
//# sourceMappingURL=47.f3359e16.chunk.js.map