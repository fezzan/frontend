(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[28],{439:function(e,t,n){"use strict";var r=n(441),i=n.n(r),c=n(9),o=n(442).a(),u=n(56),a=n(254),d=n(253),s=i.a.create({baseURL:c.a,timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}}),l="/auth/login";s.interceptors.request.use((function(e){var t=localStorage.getItem(u.b);return t&&(e.headers.Authorization="Bearer ".concat(t)),t||e.headers["public-request"]||(o.push(l),window.location.reload()),e}),(function(e){a.a.error({message:"Error"}),Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 403===e.response.status&&(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(u.b),o.push(l),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),d.b.error(e.response.data.message),Promise.reject(e)}));t.a=s},440:function(e,t,n){"use strict";n.d(t,"r",(function(){return r})),n.d(t,"U",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"E",(function(){return o})),n.d(t,"s",(function(){return u})),n.d(t,"V",(function(){return a})),n.d(t,"d",(function(){return d})),n.d(t,"F",(function(){return s})),n.d(t,"R",(function(){return l})),n.d(t,"t",(function(){return f})),n.d(t,"W",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"G",(function(){return j})),n.d(t,"B",(function(){return h})),n.d(t,"db",(function(){return m})),n.d(t,"m",(function(){return y})),n.d(t,"O",(function(){return g})),n.d(t,"C",(function(){return O})),n.d(t,"eb",(function(){return v})),n.d(t,"n",(function(){return x})),n.d(t,"P",(function(){return w})),n.d(t,"b",(function(){return C})),n.d(t,"Q",(function(){return S})),n.d(t,"gb",(function(){return z})),n.d(t,"hb",(function(){return E})),n.d(t,"kb",(function(){return F})),n.d(t,"z",(function(){return k})),n.d(t,"k",(function(){return I})),n.d(t,"M",(function(){return P})),n.d(t,"a",(function(){return q})),n.d(t,"fb",(function(){return A})),n.d(t,"x",(function(){return N})),n.d(t,"ab",(function(){return D})),n.d(t,"i",(function(){return T})),n.d(t,"K",(function(){return H})),n.d(t,"v",(function(){return R})),n.d(t,"Y",(function(){return B})),n.d(t,"g",(function(){return J})),n.d(t,"I",(function(){return M})),n.d(t,"y",(function(){return U})),n.d(t,"bb",(function(){return V})),n.d(t,"j",(function(){return W})),n.d(t,"L",(function(){return G})),n.d(t,"A",(function(){return L})),n.d(t,"cb",(function(){return K})),n.d(t,"l",(function(){return Q})),n.d(t,"N",(function(){return X})),n.d(t,"ib",(function(){return Y})),n.d(t,"jb",(function(){return Z})),n.d(t,"p",(function(){return $})),n.d(t,"o",(function(){return _})),n.d(t,"q",(function(){return ee})),n.d(t,"D",(function(){return te})),n.d(t,"T",(function(){return ne})),n.d(t,"S",(function(){return re})),n.d(t,"X",(function(){return ie})),n.d(t,"u",(function(){return ce})),n.d(t,"f",(function(){return oe})),n.d(t,"H",(function(){return ue})),n.d(t,"Z",(function(){return ae})),n.d(t,"w",(function(){return de})),n.d(t,"h",(function(){return se})),n.d(t,"J",(function(){return le}));var r="/category/delete/",i="/category/all",c="/category/addcategory",o="category/edit/",u="/charity/delete/",a="/charity/all",d="/charity/addcharity",s="charity/edit/",l="charity/find/",f="/feed/delete/",p="/feed/all",b="/feed/addfeed",j="feed/edit/",h="/sponsor/delete/",m="/sponsor/all",y="/sponsor/addsponsor",g="sponsor/edit/",O="/tournament/delete/",v="/tournament/all",x="/tournament/addtournament",w="tournament/edit/",C="/tournament/activate/",S="/tournament/end/",z="/tournament/find/",E="/user/leaderboard/",F="/tournament/winners/",k="/round/delete/",I="/round/addround",P="round/edit/",q="/round/activate/",A="/round/find/",N="/prizeConfig/delete/",D="/prizeConfig/find/",T="/prizeConfig/addprize",H="/prizeConfig/edit/",R="/game/delete/",B="/game/find/",J="/game/addgame",M="/game/edit/",U="/question/delete/",V="/question/find/",W="/question/addquestion",G="/question/edit/",L="/customrule/delete/",K="/customrule/find/",Q="/customrule/addcustomrule",X="/customrule/edit/",Y="/round/end/",Z="/round/questions/",$="/type/all",_="/transactions/addtransaction",ee="/user/amount",te="/admin/donate/",ne="/activity/all",re="/activity/find/",ie="/rule/all",ce="/rule/delete/",oe="/rule/addrule",ue="rule/edit/",ae="/level/all",de="/level/delete/",se="/level/addlevel",le="level/edit/"},446:function(e,t,n){"use strict";var r=n(3),i=n(2),c=n(0),o=n(5),u=n.n(o),a=n(48),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){return c.createElement(a.a,null,(function(t){var n,o=t.getPrefixCls,a=t.direction,s=e.prefixCls,l=e.type,f=void 0===l?"horizontal":l,p=e.orientation,b=void 0===p?"center":p,j=e.className,h=e.children,m=e.dashed,y=e.plain,g=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=o("divider",s),v=b.length>0?"-".concat(b):b,x=!!h,w=u()(O,"".concat(O,"-").concat(f),(n={},Object(i.a)(n,"".concat(O,"-with-text"),x),Object(i.a)(n,"".concat(O,"-with-text").concat(v),x),Object(i.a)(n,"".concat(O,"-dashed"),!!m),Object(i.a)(n,"".concat(O,"-plain"),!!y),Object(i.a)(n,"".concat(O,"-rtl"),"rtl"===a),n),j);return c.createElement("div",Object(r.a)({className:w},g,{role:"separator"}),h&&c.createElement("span",{className:"".concat(O,"-inner-text")},h))}))}},447:function(e,t,n){"use strict";var r=n(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=n(10),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:i}))};o.displayName="PlusCircleOutlined";t.a=r.forwardRef(o)},511:function(e,t,n){"use strict";n.r(t);var r=n(58),i=n(1),c=n(0),o=n(446),u=n(253),a=n(548),d=n(176),s=n(85),l=n(543),f=n(425),p=n(447),b=n(38),j=n(439),h=n(440),m=n(9);t.default=function(){var e=[{title:"Avatar",dataIndex:"picture",key:"picture",render:function(e){return Object(i.jsx)("img",{style:{objectFit:"cover",width:50,height:50,borderRadius:100},src:"".concat(m.e+e)})}},{title:"Feed ID",dataIndex:"id",key:"id"},{title:"Title",dataIndex:"name",key:"name",render:function(e){return Object(i.jsx)("a",{href:"/#",children:e})}},{title:"Feed Description ",dataIndex:"description",key:"description",render:function(e){return Object(i.jsx)("a",{href:"/#",children:e})}},{title:"Action",key:"action",render:function(e,t){return Object(i.jsxs)("span",{children:[Object(i.jsx)(b.b,{to:{pathname:"feed/edit/"+t.id,dataProps:{feeddetails:t}},children:"Edit"}),Object(i.jsx)(o.a,{type:"vertical"}),Object(i.jsx)(b.b,{onClick:function(){C(t.id)},children:"Delete"})]})}}],t=Object(c.useState)([]),n=Object(r.a)(t,2),y=n[0],g=n[1],O=Object(c.useState)(!1),v=Object(r.a)(O,2),x=v[0],w=v[1],C=function(e){w(!0),j.a.delete(h.t+e,{}).then((function(e){"Feed was deleted successfully!"==e.message?u.b.success("Successfully Deleted :) "):u.b.error("Failed to delete "),S(),w(!1)})).catch((function(e){w(!1),u.b.error("Unable to load  ! Please check your internet or Server ")}))},S=function(){w(!0),j.a.get(h.W,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){w(!1),console.log(e),g(e)}))};return Object(c.useEffect)((function(){S()}),[]),x?Object(i.jsx)("div",{style:{minHeight:500,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(a.a,{active:!0,paragraph:{rows:10}})}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("span",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(i.jsx)(f.a,{style:{fontSize:80,color:"#1a3353"},children:" "})," ",Object(i.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(i.jsx)("h1",{style:{fontFamily:"fantasy",fontSize:60},children:" NEW FEED "})]}),Object(i.jsx)("br",{}),Object(i.jsx)(d.a,{title:"Add Feed",children:Object(i.jsx)(b.b,{to:"feed/add",children:Object(i.jsx)(s.a,{type:"primary",icon:Object(i.jsx)(p.a,{style:{fontSize:"18px"}}),children:"Add Feed"})})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(l.a,{columns:e,dataSource:y})]})}}}]);
//# sourceMappingURL=28.42c9b392.chunk.js.map