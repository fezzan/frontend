(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[32],{439:function(e,t,n){"use strict";var r=n(441),o=n.n(r),c=n(9),i=n(442).a(),u=n(56),a=n(254),d=n(253),s=o.a.create({baseURL:c.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var t=localStorage.getItem(u.b);return t&&(e.headers.Authorization="Bearer ".concat(t)),t||e.headers["public-request"]||(i.push(l),window.location.reload()),e}),(function(e){a.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 403===e.response.status&&(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(u.b),i.push(l),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),d.b.error(e.response.data.message),Promise.reject(e)}));t.a=s},440:function(e,t,n){"use strict";n.d(t,"r",(function(){return r})),n.d(t,"U",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"E",(function(){return i})),n.d(t,"s",(function(){return u})),n.d(t,"V",(function(){return a})),n.d(t,"d",(function(){return d})),n.d(t,"F",(function(){return s})),n.d(t,"R",(function(){return l})),n.d(t,"t",(function(){return f})),n.d(t,"W",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"G",(function(){return j})),n.d(t,"B",(function(){return m})),n.d(t,"db",(function(){return h})),n.d(t,"m",(function(){return y})),n.d(t,"O",(function(){return g})),n.d(t,"C",(function(){return O})),n.d(t,"eb",(function(){return v})),n.d(t,"n",(function(){return x})),n.d(t,"P",(function(){return S})),n.d(t,"b",(function(){return w})),n.d(t,"Q",(function(){return z})),n.d(t,"gb",(function(){return C})),n.d(t,"hb",(function(){return P})),n.d(t,"kb",(function(){return k})),n.d(t,"z",(function(){return E})),n.d(t,"k",(function(){return I})),n.d(t,"M",(function(){return q})),n.d(t,"a",(function(){return N})),n.d(t,"fb",(function(){return A})),n.d(t,"x",(function(){return F})),n.d(t,"ab",(function(){return D})),n.d(t,"i",(function(){return R})),n.d(t,"K",(function(){return B})),n.d(t,"v",(function(){return H})),n.d(t,"Y",(function(){return J})),n.d(t,"g",(function(){return M})),n.d(t,"I",(function(){return T})),n.d(t,"y",(function(){return U})),n.d(t,"bb",(function(){return V})),n.d(t,"j",(function(){return L})),n.d(t,"L",(function(){return G})),n.d(t,"A",(function(){return K})),n.d(t,"cb",(function(){return Q})),n.d(t,"l",(function(){return W})),n.d(t,"N",(function(){return X})),n.d(t,"ib",(function(){return Y})),n.d(t,"jb",(function(){return Z})),n.d(t,"p",(function(){return $})),n.d(t,"o",(function(){return _})),n.d(t,"q",(function(){return ee})),n.d(t,"D",(function(){return te})),n.d(t,"T",(function(){return ne})),n.d(t,"S",(function(){return re})),n.d(t,"X",(function(){return oe})),n.d(t,"u",(function(){return ce})),n.d(t,"f",(function(){return ie})),n.d(t,"H",(function(){return ue})),n.d(t,"Z",(function(){return ae})),n.d(t,"w",(function(){return de})),n.d(t,"h",(function(){return se})),n.d(t,"J",(function(){return le}));var r="/category/delete/",o="/category/all",c="/category/addcategory",i="category/edit/",u="/charity/delete/",a="/charity/all",d="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",p="/feed/all",b="/feed/addfeed",j="feed/edit/",m="/sponsor/delete/",h="/sponsor/all",y="/sponsor/addsponsor",g="sponsor/edit/",O="/tournament/delete/",v="/tournament/all",x="/tournament/addtournament",S="tournament/edit/",w="/tournament/activate/",z="/tournament/end/",C="/tournament/find/",P="/user/leaderboard/",k="/tournament/winners/",E="/round/delete/",I="/round/addround",q="round/edit/",N="/round/activate/",A="/round/find/",F="/prizeConfig/delete/",D="/prizeConfig/find/",R="/prizeConfig/addprize",B="/prizeConfig/edit/",H="/game/delete/",J="/game/find/",M="/game/addgame",T="/game/edit/",U="/question/delete/",V="/question/find/",L="/question/addquestion",G="/question/edit/",K="/customrule/delete/",Q="/customrule/find/",W="/customrule/addcustomrule",X="/customrule/edit/",Y="/round/end/",Z="/round/questions/",$="/type/all",_="/transactions/addtransaction",ee="/user/amount",te="/admin/donate/",ne="/activity/all",re="/activity/find/",oe="/rule/all",ce="/rule/delete/",ie="/rule/addrule",ue="rule/edit/",ae="/level/all",de="/level/delete/",se="/level/addlevel",le="level/edit/"},446:function(e,t,n){"use strict";var r=n(3),o=n(2),c=n(0),i=n(5),u=n.n(i),a=n(48),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){return c.createElement(a.a,null,(function(t){var n,i=t.getPrefixCls,a=t.direction,s=e.prefixCls,l=e.type,f=void 0===l?"horizontal":l,p=e.orientation,b=void 0===p?"center":p,j=e.className,m=e.children,h=e.dashed,y=e.plain,g=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=i("divider",s),v=b.length>0?"-".concat(b):b,x=!!m,S=u()(O,"".concat(O,"-").concat(f),(n={},Object(o.a)(n,"".concat(O,"-with-text"),x),Object(o.a)(n,"".concat(O,"-with-text").concat(v),x),Object(o.a)(n,"".concat(O,"-dashed"),!!h),Object(o.a)(n,"".concat(O,"-plain"),!!y),Object(o.a)(n,"".concat(O,"-rtl"),"rtl"===a),n),j);return c.createElement("div",Object(r.a)({className:S},g,{role:"separator"}),m&&c.createElement("span",{className:"".concat(O,"-inner-text")},m))}))}},447:function(e,t,n){"use strict";var r=n(0),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=n(10),i=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:o}))};i.displayName="PlusCircleOutlined";t.a=r.forwardRef(i)},508:function(e,t,n){"use strict";n.r(t);var r=n(58),o=n(1),c=n(0),i=n(446),u=n(253),a=n(548),d=n(176),s=n(85),l=n(543),f=n(424),p=n(447),b=n(38),j=n(439),m=n(440),h=n(9);t.default=function(){var e=[{title:"Avatar",dataIndex:"picture",key:"picture",render:function(e){return Object(o.jsx)("img",{style:{objectFit:"cover",width:50,height:50,borderRadius:100},src:"".concat(h.e+e)})}},{title:"Sponsor ID",dataIndex:"id",key:"id"},{title:"Sponsor Name",dataIndex:"name",key:"name",render:function(e){return Object(o.jsx)("a",{href:"/#",children:e})}},{title:"Action",key:"action",render:function(e,t){return Object(o.jsxs)("span",{children:[Object(o.jsx)(b.b,{to:{pathname:"sponsor/edit/"+t.id,dataProps:{sponsordetails:t}},children:"Edit"}),Object(o.jsx)(i.a,{type:"vertical"}),Object(o.jsx)(b.b,{onClick:function(){w(t.id)},children:"Delete"})]})}}],t=Object(c.useState)([]),n=Object(r.a)(t,2),y=n[0],g=n[1],O=Object(c.useState)(!1),v=Object(r.a)(O,2),x=v[0],S=v[1],w=function(e){S(!0),j.a.delete(m.B+e,{}).then((function(e){console.log(e),"sponsor was deleted successfully!"==e.message?u.b.success("Successfully Deleted :) "):u.b.error("Failed to delete "),z(),S(!1)})).catch((function(e){S(!1),u.b.error("Unable to load  ! Please check your internet or Server ")}))},z=function(){S(!0),j.a.get(m.db).then((function(e){S(!1),console.log(e),g(e)}))};return Object(c.useEffect)((function(){z()}),[]),x?Object(o.jsx)("div",{style:{minHeight:500,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)(a.a,{active:!0,paragraph:{rows:10}})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(o.jsx)(f.a,{style:{fontSize:85,color:"#1a3353"},children:" "})," ",Object(o.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(o.jsx)("h1",{style:{fontFamily:"fantasy",fontSize:60},children:" SPONSORS "})]}),Object(o.jsx)("br",{}),Object(o.jsx)(d.a,{title:"Add Sponsor",children:Object(o.jsx)(b.b,{to:"sponsor/add",children:Object(o.jsx)(s.a,{type:"primary",icon:Object(o.jsx)(p.a,{style:{fontSize:"18px"}}),children:"Add Sponsor"})})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(l.a,{columns:e,dataSource:y})]})}}}]);
//# sourceMappingURL=32.82f40cf2.chunk.js.map