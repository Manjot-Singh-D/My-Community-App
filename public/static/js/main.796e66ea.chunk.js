(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},181:function(e,t,n){},200:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(34),r=n.n(s),o=(n(172),n(173),n.p+"static/media/community_about.f27c6700.png"),l=function(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("p",{className:"about__top",children:"About"}),Object(c.jsxs)("div",{className:"about__content",children:[Object(c.jsx)("div",{className:"about__content__1",children:"Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(c.jsx)("div",{className:"about__content__2",children:"Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(c.jsx)("div",{className:"about__content__3",children:"Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."})]}),Object(c.jsx)("div",{className:"about__image",children:Object(c.jsx)("img",{src:o,width:"85%",alt:"community_about"})})]})},d=n(35),j=n.p+"static/media/community.95abd20b.png",m=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{className:"home__left",children:[Object(c.jsx)("p",{children:"Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(c.jsx)("div",{className:"home__left__ButtonContent",children:Object(c.jsx)(d.b,{to:"/loginRegister",children:Object(c.jsx)("div",{className:"button",children:"Get Started"})})})]}),Object(c.jsx)("div",{className:"home__right",children:Object(c.jsx)("img",{src:j,height:"300px",alt:"community_image"})})]})},b=n(131),h=n.n(b),u=n(113),x=n(154),p=n(10),g=n(218),O=function(e){return Object(c.jsx)(g.a,{clearable:!0,multiple:!0,fluid:!0,search:!0,selection:!0,options:e.options,onChange:e.onChange,placeholder:"Select Technology"})},v=n(82),f=n(37),_=n(27),y=n(222),w=n(219),N=n(223),k=n(220);n(181);var C=function(e){var t=Object(a.useState)({name:"",email:"",review:"",rating:0}),n=Object(p.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)({technology_Name:"",technology_link:"",about:""}),o=Object(p.a)(r,2),l=o[0],d=o[1],j=Object(a.useState)({name:"",bio:"",Website:"",Github:"",Twitter:"",Instagram:"",Facebook:"",phoneNumber:"",mobileNumber:"",Address:""}),m=Object(p.a)(j,2),b=m[0],h=m[1],u=Object(a.useState)(!1),x=Object(p.a)(u,2),g=x[0],O=x[1],C=function(e,t){if(e.preventDefault(),"reviews"===t){var n=e.target,c=n.name,a=n.value;s((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(f.a)({},c,a))}))}else if("profile"===t){var i=e.target,r=i.name,o=i.value;h((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(f.a)({},r,o))}))}else if("groups"===t){var l=e.target,j=l.name,m=l.value;d((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(f.a)({},j,m))}))}},S=function(e,t){var n=t.rating,c={};c.name=i.name,c.email=i.email,c.review=i.review,c.rating=n,s(c)};return Object(c.jsxs)(w.a,{closeIcon:!0,dimmer:"blurring",style:{height:"max-content",left:"auto",right:"auto"},open:g,trigger:e.trigger,onClose:function(){return O(!1)},onOpen:function(){return O(!0)},children:[Object(c.jsx)(N.a,{icon:"add",content:"reviews"===e.type?"Add your review":"editProfile"===e.type?"Edit Profile":"Add your community"}),Object(c.jsx)(w.a.Content,{scrolling:!0,children:"reviews"===e.type?Object(c.jsxs)("div",{className:"addingReview",children:["Name",Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){C(e,"reviews")},value:i.name}),"Email",Object(c.jsx)("input",{type:"text",name:"email",placeholder:"Email",onChange:function(e){C(e,"reviews")},value:i.email}),"Review",Object(c.jsx)("textarea",{type:"text",name:"review",placeholder:"Type your review here",onChange:function(e){C(e,"reviews")},value:i.review}),Object(c.jsxs)("div",{className:"addingReview__rating",children:[Object(c.jsx)("p",{children:"Ratings"}),Object(c.jsx)(y.a,{maxRating:5,defaultRating:0,icon:"heart",size:"large",name:"ratings",onRate:S})]})]}):"editProfile"===e.type?Object(c.jsxs)("div",{className:"addingReview",children:["Name",Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){C(e,"profile")},value:b.Name}),"Bio",Object(c.jsx)("input",{type:"text",name:"bio",placeholder:"Enter your bio",onChange:function(e){C(e,"profile")},value:b.bio}),"Website Link",Object(c.jsx)("input",{type:"text",name:"Website",placeholder:"Enter website link",onChange:function(e){C(e,"profile")},value:b.website}),"Github Link",Object(c.jsx)("input",{type:"text",name:"Github",placeholder:"Enter github link",onChange:function(e){C(e,"profile")},value:b.github}),"Twitter Link",Object(c.jsx)("input",{type:"text",name:"Twitter",placeholder:"Enter twitter link",onChange:function(e){C(e,"profile")},value:b.twitter}),"Instagram Link",Object(c.jsx)("input",{type:"text",name:"Instagram",placeholder:"Enter instagram link",onChange:function(e){C(e,"profile")},value:b.instagram}),"Facebook Link",Object(c.jsx)("input",{type:"text",name:"Facebook",placeholder:"Enter facebook link",onChange:function(e){C(e,"profile")},value:b.facebook}),"Phone Number",Object(c.jsx)("input",{type:"text",name:"phoneNumber",placeholder:"Enter phone number",onChange:function(e){C(e,"profile")},value:b.phone}),"Mobile Number",Object(c.jsx)("input",{type:"text",name:"mobileNumber",placeholder:"Enter mobile number",onChange:function(e){C(e,"profile")},value:b.mobile}),"Address",Object(c.jsx)("input",{type:"text",name:"Address",placeholder:"Enter your address",onChange:function(e){C(e,"profile")},value:b.address})]}):Object(c.jsxs)("div",{className:"addingReview",children:["Technology Name",Object(c.jsx)("input",{type:"text",name:"technology_Name",placeholder:"Enter technology name",onChange:function(e){C(e,"groups")},value:l.technology_Name}),"Technology Link",Object(c.jsx)("input",{type:"text",name:"technology_link",placeholder:"Enter the link",onChange:function(e){C(e,"groups")},value:l.technology_link}),"Type",Object(c.jsxs)("select",{onChange:function(e){C(e,"groups")},name:"about",value:l.about,children:[Object(c.jsx)("option",{children:"None"}),console.log(e.options)&&e.options.map((function(e){return console.log(e),Object(c.jsx)("option",{children:e.value})}))]})]})}),Object(c.jsxs)(w.a.Actions,{children:[Object(c.jsxs)(k.a,{color:"red",onClick:function(){return O(!1)},children:[Object(c.jsx)(v.a,{name:"remove"})," Decline"]}),Object(c.jsxs)(k.a,{color:"green",onClick:function(){"reviews"===e.type?e.revertingFCN(i):"editProfile"===e.type?e.revertingFCN(b):e.revertingFCN(l),O(!1)},children:[Object(c.jsx)(v.a,{name:"checkmark"})," Submit"]})]})]})};var S=function(e){var t=i.a.useState(!1),n=Object(p.a)(t,2),a=n[0],s=n[1];return Object(c.jsxs)(w.a,{centered:!1,style:{height:"max-content",left:"auto",right:"auto"},open:a,size:"tiny",onClose:function(){return s(!1)},onOpen:function(){return s(!0)},trigger:e.trigger,children:[Object(c.jsx)(w.a.Header,{children:e.details.technology_Name}),Object(c.jsxs)(w.a.Content,{style:{paddingLeft:"70px",paddingRight:"100px"},children:[Object(c.jsxs)("span",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[Object(c.jsx)("span",{style:{fontWeight:"900",fontSize:"1.1rem"},children:"Topic"}),Object(c.jsx)(w.a.Description,{style:{wordWrap:"break-word"},children:e.details.about})]}),Object(c.jsxs)("span",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[Object(c.jsx)("span",{style:{fontWeight:"900",fontSize:"1.1rem"},children:"Link "}),Object(c.jsx)(w.a.Description,{style:{wordWrap:"break-word"},children:e.details.technology_link})]})]}),Object(c.jsx)(w.a.Actions,{children:Object(c.jsx)(k.a,{onClick:function(){return s(!1)},children:"OK"})})]})},L=n(17),R=n.n(L),z=function(){var e=Object(a.useState)(!0),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({loggedIn:!0,details:{}}),r=Object(p.a)(s,2),o=r[0],l=(r[1],Object(a.useState)([])),d=Object(p.a)(l,2),j=d[0],m=d[1],b=function(e){return Object(c.jsx)("div",{className:"community__contents__boxes",children:e})},g=[{key:"Web Development",text:"Web Development",value:"Web Development"},{key:"Android Development",text:"Android Development",value:"Android Development"},{key:"AR-VR",text:"AR-VR",value:"AR-VR"},{key:"App Development",text:"App Development",value:"App Development"},{key:"Blockchain Development",text:"Blockchain Development",value:"Blockchain Development"},{key:"Machine Learning",text:"Machine Learning",value:"Machine Learning"}],f=window.innerWidth>900?10:window.innerWidth<500?6:8,_=function(e){if(0===j.length)return!0;for(var t=0;t<j.length;t++)if(j[t]===e)return!0;return!1},y=Object(a.useState)([]),w=Object(p.a)(y,2),N=w[0],k=w[1];Object(a.useEffect)((function(){R.a.get("".concat("https://mycommunity-app.herokuapp.com/api","/general/19012001/groups")).then((function(e){console.log(e),k(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);var L=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.a.patch("".concat("https://mycommunity-app.herokuapp.com/api","/users/600f25170e55ad39a8559dc0/makeNewGroup"),t).then((function(e){e.data.validity&&R.a.post("".concat("https://mycommunity-app.herokuapp.com/api","/general/addingGroup"),t).then((function(e){e.data.validity||R.a.patch("".concat("https://mycommunity-app.herokuapp.com/api","/general/addingGroup"),t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)})),k([].concat(Object(u.a)(N),[t]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"community",children:[Object(c.jsx)("p",{className:"community__top",children:"community"}),o.loggedIn?Object(c.jsx)(C,{trigger:Object(c.jsxs)("div",{className:"reviews__addNewReview",children:[Object(c.jsx)(v.a,{name:"add",size:"large",color:"red"}),Object(c.jsx)("p",{children:"Add your community link"})]}),type:"community",revertingFCN:L,options:g}):"",Object(c.jsx)("div",{className:"community__searchbar",children:Object(c.jsx)(O,{onChange:function(e,t){var n=t.value;m(n)},values:j,options:g})}),Object(c.jsx)("div",{className:"community__contents",children:N.map((function(e,t){return(t<f&&_(e.about)||!n&&_(e.about))&&Object(c.jsx)(S,{trigger:b(e.technology_Name),details:e})}))}),N.length>f?Object(c.jsx)("div",{className:"community__showMore",children:Object(c.jsxs)("div",{className:"community__text",onClick:function(){return i(!n)},children:[n?Object(c.jsx)("p",{children:"Show more"}):Object(c.jsx)("p",{children:"Show Less"}),n?Object(c.jsx)(v.a,{name:"angle down",color:"black",size:"large"}):Object(c.jsx)(v.a,{name:"angle up",color:"black",size:"large"})]})}):""]})},I=(n(200),function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),i=n[0],s=n[1];return Object(c.jsx)("div",{className:"reviewBar",onDoubleClick:function(){return s(!i)},style:{background:i?"#ff000030":""},children:Object(c.jsxs)("div",{className:"reviewsBar__content",children:[Object(c.jsxs)("div",{className:"reviewsBar__content__name",children:[Object(c.jsx)("p",{style:{color:i?"#fff":""},children:e.data.name}),Object(c.jsxs)("div",{className:"reviewsBar__content__name__reviews",children:[Object(c.jsx)(y.a,{maxRating:5,defaultRating:e.data.rating,disabled:!0,icon:"heart",size:"large"}),Object(c.jsx)("div",{style:{color:i?"#ffffff":"",cursor:"pointer"}})]})]}),Object(c.jsx)("p",{className:"reviewsBar__content__review",children:Object(c.jsx)("p",{style:{color:i?"#ffffff":""},children:e.data.review})})]})})}),D=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({loggedIn:!0,details:{}}),r=Object(p.a)(s,2),o=r[0],l=(r[1],Object(a.useState)([])),d=Object(p.a)(l,2),j=d[0],m=d[1],b=window.innerWidth>900?10:window.innerWidth<500?6:8;Object(a.useEffect)((function(){R.a.get("".concat("https://mycommunity-app.herokuapp.com/api","/general/19012001/reviews")).then((function(e){m(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(c.jsxs)("div",{className:"reviews",children:[Object(c.jsx)("p",{className:"reviews__top",children:"reviews"}),o.loggedIn?Object(c.jsx)(C,{trigger:Object(c.jsxs)("div",{className:"reviews__addNewReview",children:[Object(c.jsx)(v.a,{name:"add",size:"large",color:"red"}),Object(c.jsx)("p",{children:"Add your review"})]}),type:"reviews",revertingFCN:function(e){R.a.patch("".concat("https://mycommunity-app.herokuapp.com/api","/users/600f25170e55ad39a8559dc0/addReview"),e).then((function(t){t.data.validity&&R.a.post("".concat("https://mycommunity-app.herokuapp.com/api","/general/addingReview"),e).then((function(t){t.data.validity||R.a.patch("".concat("https://mycommunity-app.herokuapp.com/api","/general/addingReview"),e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))})).catch((function(e){return console.log(e)})),m([].concat(Object(u.a)(j),[e]))}}):"",Object(c.jsx)("div",{className:"reviews__content",children:j.map((function(e,t){return(t<b||!n)&&Object(c.jsx)(I,{data:e},e.key)}))}),j.length>b?Object(c.jsx)("div",{className:"reviews__showMore",children:Object(c.jsxs)("div",{className:"reviews__text",onClick:function(){return i(!n)},children:[n?Object(c.jsx)("p",{children:"Show more"}):Object(c.jsx)("p",{children:"Show Less"}),n?Object(c.jsx)(v.a,{name:"angle down",color:"black",size:"large"}):Object(c.jsx)(v.a,{name:"angle up",color:"black",size:"large"})]})}):""]})},A=function(){var e=Object(a.useState)(!0),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsxs)("div",{className:"contact__content__contact",style:{display:window.innerWidth<=900&&n?"none":""},children:[Object(c.jsx)("div",{className:"contact__content__contact__heading",children:"Contact Us"}),Object(c.jsxs)("div",{className:"contact__content__contact__details",children:[Object(c.jsxs)("div",{className:"contact__content__contact__details__box",children:[Object(c.jsx)(v.a,{name:" address book outline",size:"large"}),Object(c.jsx)("div",{className:"contact__content__contact__details__box__name",children:Object(c.jsx)("p",{children:"Tilak Nagar ND-18"})})]}),Object(c.jsxs)("div",{className:"contact__content__contact__details__box",children:[Object(c.jsx)(v.a,{name:"mail",size:"large"}),Object(c.jsx)("div",{className:"contact__content__contact__details__box__name",children:Object(c.jsx)("p",{children:"manjotsinghdhanjal@gmail.com"})})]}),Object(c.jsxs)("div",{className:"contact__content__contact__details__box",children:[Object(c.jsx)(v.a,{name:"phone",size:"large"}),Object(c.jsx)("div",{className:"contact__content__contact__details__box__name",children:Object(c.jsx)("p",{children:"9999999999"})})]}),Object(c.jsxs)("div",{className:"contact__content__contact__details__box",children:[Object(c.jsx)(v.a,{name:"text telephone",size:"large"}),Object(c.jsx)("div",{className:"contact__content__contact__details__box__name",children:Object(c.jsx)("p",{children:"011-44444444"})})]})]}),Object(c.jsxs)("div",{className:"contact__content__contact__socialMedia",children:[Object(c.jsx)(v.a,{name:"facebook",color:"blue",size:"large"}),Object(c.jsx)(v.a,{name:"whatsapp",color:"green",size:"large"}),Object(c.jsx)(v.a,{name:"linkedin",color:"blue",size:"large"}),Object(c.jsx)(v.a,{name:"instagram",color:"pink",size:"large"}),Object(c.jsx)(v.a,{name:"twitter",color:"blue",size:"large"})]})]}),Object(c.jsxs)("div",{className:"contact__content",children:[Object(c.jsx)("div",{className:"contact__content__heading",children:Object(c.jsx)("p",{children:"Get in Touch"})}),Object(c.jsx)("div",{className:"contact__content__description",children:Object(c.jsx)("p",{children:"Feel free to drop us a line below!"})}),Object(c.jsx)("div",{className:"contact__content__content",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(c.jsx)("input",{type:"text",name:"name",placeholder:"name"}),Object(c.jsx)("input",{type:"text",name:"email",placeholder:"email"}),Object(c.jsx)("textarea",{type:"text",name:"message",placeholder:"message",multiple:!0}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(c.jsx)("div",{style:{marginTop:"10px",display:window.innerWidth<=900?"":"none"},children:n?Object(c.jsx)(v.a,{name:"angle down",size:"large",onClick:function(){return i(!1)}}):Object(c.jsx)(v.a,{name:"angle up",size:"large",onClick:function(){return i(!0)}})})]})]})},B=n(33),P=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),r=Object(p.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)({isLoggedIn:!0,userDetails:{}}),m=Object(p.a)(j,2),b=m[0],h=m[1];return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)(B.Link,{to:"homePage",smooth:!0,duration:1e3,children:Object(c.jsx)("div",{className:"navbar__heading",children:Object(c.jsx)("p",{children:" Find Community"})})}),Object(c.jsxs)("div",{className:"navbar__right",children:[Object(c.jsx)(B.Link,{to:"aboutPage",smooth:!0,duration:1e3,children:Object(c.jsx)("div",{className:"navbar__right__p",children:"About"})}),Object(c.jsx)(B.Link,{to:"communityPage",smooth:!0,duration:1e3,children:Object(c.jsx)("div",{className:"navbar__right__p",children:"Community"})}),Object(c.jsx)(B.Link,{to:"reviewPage",smooth:!0,duration:1e3,children:Object(c.jsx)("div",{className:"navbar__right__p",children:"Reviews"})}),Object(c.jsx)(B.Link,{to:"contactPage",smooth:!0,duration:1e3,children:Object(c.jsx)("div",{className:"navbar__right__p",children:"Contact"})}),b.isLoggedIn?Object(c.jsxs)("div",{className:"navbar__right__p",children:[Object(c.jsxs)("p",{style:{fontSize:"1.2rem",fontWeight:"900",marginBottom:"0%"},onClick:function(){return l(!o)},children:["Manjot",o?Object(c.jsx)(v.a,{name:"angle up",size:"small",color:"red"}):Object(c.jsx)(v.a,{name:"angle down",size:"small",color:"red"})]}),Object(c.jsx)("div",{className:"",style:{width:"100px",height:"100px",background:"white",position:"absolute",borderRadius:"20%",border:"1px solid #aa0000",marginTop:"10px",display:o?"":"none",zIndex:"10000"},children:Object(c.jsxs)("ul",{style:{listStyle:"none",paddingLeft:"0px",margin:"0px",padding:"5px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",zIndex:"10000"},children:[Object(c.jsx)(d.b,{to:"/userProfile",children:Object(c.jsx)("li",{style:{paddingTop:"10px",paddingBottom:"10px"},children:"Profile"})}),Object(c.jsx)("li",{style:{paddingTop:"10px",paddingBottom:"10px"},onClick:function(){h({isLoggedIn:!1,userDetails:{}}),l(!o)},children:"Logout"})]})})]}):""]}),Object(c.jsxs)("div",{className:"navbar__right__smallScreen",children:[Object(c.jsxs)("div",{className:"navbar__right__smallScreen__icons",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[b.isLoggedIn?Object(c.jsxs)("div",{className:"navbar__right__p",children:[Object(c.jsxs)("p",{style:{fontSize:"1.2rem",fontWeight:"900",marginBottom:"0%"},onClick:function(){return l(!o)},children:[b.userDetails.name,o?Object(c.jsx)(v.a,{name:"angle up",size:"small",color:"red"}):Object(c.jsx)(v.a,{name:"angle down",size:"small",color:"red"})]}),Object(c.jsx)("div",{className:"",style:{width:"100px",height:"100px",background:"white",position:"absolute",borderRadius:"20%",border:"1px solid #aa0000",marginTop:"10px",display:o?"":"none"},children:Object(c.jsxs)("ul",{style:{listStyle:"none",paddingLeft:"0px",margin:"0px",padding:"5px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(c.jsx)(d.b,{to:"/userProfile",children:Object(c.jsx)("li",{style:{paddingTop:"10px",paddingBottom:"10px"},children:"Profile"})}),Object(c.jsx)("li",{style:{paddingTop:"10px",paddingBottom:"10px"},onClick:function(){h({isLoggedIn:!1,userDetails:{}}),l(!o)},children:"Logout"})]})})]}):"",Object(c.jsx)("div",{style:{display:n?"none":"",cursor:"pointer"},onClick:function(){return i(!0)},children:Object(c.jsx)(v.a,{name:"bars",size:"big",color:"red"})}),Object(c.jsx)("div",{style:{display:n?"":"none",cursor:"pointer"},onClick:function(){return i(!1)},children:Object(c.jsx)(v.a,{name:"x",size:"big",color:"red"})})]}),Object(c.jsx)("div",{className:"navbar__right__smallScreen__content",style:{display:n?"block":"none"},children:Object(c.jsxs)("ul",{style:{listStyle:"none"},children:[Object(c.jsx)(B.Link,{to:"aboutPage",children:Object(c.jsx)("li",{style:{borderRadius:"30px 30px 0px 0px"},children:"About"})}),Object(c.jsx)(B.Link,{to:"communityPage",children:Object(c.jsx)("li",{children:"Community"})}),Object(c.jsx)(B.Link,{to:"reviewPage",children:Object(c.jsx)("li",{children:"Reviews"})}),Object(c.jsx)(B.Link,{to:"contactPage",children:Object(c.jsx)("li",{style:{borderRadius:"0px 0px 30px 30px"},children:"Contact"})})]})})]})]})},T=(n(208),function(){return Object(a.useEffect)((function(){document.title="Find Community"}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(P,{}),Object(c.jsx)("div",{id:"homePage",children:Object(c.jsx)(m,{})}),Object(c.jsx)("div",{id:"aboutPage",children:Object(c.jsx)(l,{})}),Object(c.jsx)("div",{id:"communityPage",children:Object(c.jsx)(z,{})}),Object(c.jsx)("div",{id:"reviewPage",children:Object(c.jsx)(D,{})}),Object(c.jsx)("div",{id:"contactPage",children:Object(c.jsx)(A,{})})]})}),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},E=n(12),F=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({email:"",password:""}),r=Object(p.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)({name:"",email:"",password:""}),m=Object(p.a)(j,2),b=m[0],h=m[1],u=Object(a.useState)(!1),x=Object(p.a)(u,2),g=x[0],O=x[1],v=function(e,t){e.preventDefault(),"register"===t?R.a.post("".concat("https://mycommunity-app.herokuapp.com/api","/users/register"),b).then((function(e){O(e.data.validity),h({name:"",email:"",password:""})})).catch((function(e){return console.log(e)})):"login"===t&&R.a.post("".concat("https://mycommunity-app.herokuapp.com/api","/users/login"),o).then((function(e){O(e.data.validity),l({email:"",password:""})})).catch((function(e){return console.log(e)}))},y=function(e,t){if("login"===t){var n=e.target,c=n.name,a=n.value;l((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(f.a)({},c,a))}))}else if("register"===t){var i=e.target,s=i.name,r=i.value;h((function(e){return Object(_.a)(Object(_.a)({},e),{},Object(f.a)({},s,r))}))}};if(!g)return Object(c.jsxs)("div",{className:"loginRegister",children:[Object(c.jsx)(d.b,{to:"/",children:Object(c.jsx)("div",{className:"ml-5 mb-3 loginRegisterBackToHome",style:{cursor:"pointer",fontFamily:"monospace",fontSize:"1.9rem",fontWeight:"900",color:"white",wordSpacing:"-10px"},children:"BACK TO HOME"})}),Object(c.jsxs)("div",{className:"loginRegister__block",children:[Object(c.jsxs)("div",{className:"loginRegister__block__buttons",children:[Object(c.jsx)("p",{onClick:function(){return i(!0)},style:{background:n?"":"#00000025"},children:"Login"}),Object(c.jsx)("p",{onClick:function(){return i(!1)},style:{background:n?"#00000025":""},children:"Sign up"})]}),Object(c.jsx)("div",{className:"loginRegister__block__content",children:n?Object(c.jsxs)("div",{className:"loginRegister__block__content__login",children:[Object(c.jsx)("p",{className:"loginRegister__block__content__login__text",children:"Login"}),Object(c.jsxs)("form",{onSubmit:function(e){return v(e,"login")},children:[Object(c.jsx)("input",{type:"text",name:"email",placeholder:"email",onChange:function(e){return y(e,"login")},value:o.email}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return y(e,"login")},value:o.password}),Object(c.jsx)("button",{type:"submit",children:"Login"})]})]}):Object(c.jsxs)("div",{className:"loginRegister__block__content__register",children:[Object(c.jsx)("p",{className:"loginRegister__block__content__register__text",children:"Sign up"}),Object(c.jsxs)("form",{onSubmit:function(e){return v(e,"register")},children:[Object(c.jsx)("input",{type:"text",name:"name",placeholder:"name",onChange:function(e){return y(e,"register")},value:b.name}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"email",onChange:function(e){return y(e,"register")},value:b.email}),Object(c.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return y(e,"register")},value:b.password}),Object(c.jsx)("button",{type:"submit",children:"Sign up"})]})]})})]})]});window.location.href="/"},M=function(){var e=Object(a.useState)({}),t=Object(p.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){R.a.get("".concat("https://mycommunity-app.herokuapp.com/api","/users/600f25170e55ad39a8559dc0")).then((function(e){console.log(e),i(e.data.message)})).catch((function(e){return console.log(e)}))}),[]);return console.log("profile : ",n),Object(c.jsxs)("div",{className:"container mt-4",children:[Object(c.jsx)("div",{className:"mr-0 ml-auto d-flex justify-content-end pb-3",children:Object(c.jsx)(C,{trigger:Object(c.jsx)(v.a,{style:{cursor:"pointer"},name:"edit",inverted:!0,size:"big"}),type:"editProfile",revertingFCN:function(e){R.a.patch("".concat("https://mycommunity-app.herokuapp.com/api","/users/updateDetails/600c7c8cd12cf60d1cfe7ad7"),e).then((function(t){console.log("res : ",t),t.data.validity&&(e.email=n.email,e.groupsCreated=n.groupsCreated,e.reviewsMade=n.reviewsMade,e.myJoinedGroups=n.myJoinedGroups,console.log("profileDetails : ",e),i(e))}))}})}),Object(c.jsx)("div",{className:"main-body",children:Object(c.jsxs)("div",{className:"row gutters-sm",children:[Object(c.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-center text-center",children:Object(c.jsxs)("div",{className:"mt-3",children:[Object(c.jsx)("h4",{children:n.name}),Object(c.jsx)("p",{className:"text-secondary mb-1",children:n.bio}),Object(c.jsx)("p",{className:"text-muted font-size-sm",children:n.Address})]})})})}),Object(c.jsx)("div",{className:"card mt-3",children:Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap",children:[Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-globe mr-2 icon-inline",children:[Object(c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(c.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),Object(c.jsx)("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"Website"]}),Object(c.jsx)("span",{className:"text-secondary",children:n.Website})]}),Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap",children:[Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-github mr-2 icon-inline",children:Object(c.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),"Github"]}),Object(c.jsx)("span",{className:"text-secondary",children:n.Github})]}),Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap",children:[Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-twitter mr-2 icon-inline text-info",children:Object(c.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})}),"Twitter"]}),Object(c.jsx)("span",{className:"text-secondary",children:n.Twitter})]}),Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap",children:[Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-instagram mr-2 icon-inline text-danger",children:[Object(c.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),Object(c.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(c.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),"Instagram"]}),Object(c.jsx)("span",{className:"text-secondary",children:n.Instagram})]}),Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap",children:[Object(c.jsxs)("h6",{className:"mb-0",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-facebook mr-2 icon-inline text-primary",children:Object(c.jsx)("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})}),"Facebook"]}),Object(c.jsx)("span",{className:"text-secondary",children:n.Facebook})]})]})})]}),Object(c.jsxs)("div",{className:"col-md-8",children:[Object(c.jsx)("div",{className:"card mb-3",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)("h6",{className:"mb-0",children:"Full Name"})}),Object(c.jsx)("div",{className:"col-sm-9 text-secondary",children:n.name})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)("h6",{className:"mb-0",children:"Email"})}),Object(c.jsx)("div",{className:"col-sm-9 text-secondary",children:n.email})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)("h6",{className:"mb-0",children:"Phone"})}),Object(c.jsx)("div",{className:"col-sm-9 text-secondary",children:n.phoneNumber})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)("h6",{className:"mb-0",children:"Mobile"})}),Object(c.jsx)("div",{className:"col-sm-9 text-secondary",children:n.mobileNumber})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-sm-3",children:Object(c.jsx)("h6",{className:"mb-0",children:"Address"})}),Object(c.jsx)("div",{className:"col-sm-9 text-secondary",children:n.Address})]})]})}),Object(c.jsx)("div",{className:"card mb-3",children:Object(c.jsx)("div",{className:"card h-100",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h6",{className:"d-flex align-items-center mb-3",style:{fontWeight:"900"},children:"Groups Created"}),n.groupsCreated&&n.groupsCreated.map((function(e){return Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row",marginTop:"20px"},children:[Object(c.jsx)("p",{style:{width:"40%",wordBreak:"break-all",marginBottom:"0px",display:"flex",justifyContent:"flex-start",alignItems:"center",marginRight:"5px"},children:e.technology_Name}),Object(c.jsx)("small",{color:"blue",style:{width:"100%",wordBreak:"break-all"},children:e.technology_link})]})}))]})})}),Object(c.jsx)("div",{className:"card mb-3",children:Object(c.jsx)("div",{className:"card h-100",children:Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h6",{className:"d-flex align-items-center mb-3",style:{fontWeight:"900"},children:"Reviews"}),n.reviewsMade&&n.reviewsMade.map((function(e){return Object(c.jsx)("small",{color:"blue",style:{width:"100%",wordBreak:"break-all",marginTop:"20px"},children:e.review})}))]})})})]})]})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsxs)(E.c,{children:[Object(c.jsx)(E.a,{exact:!0,path:"/",children:Object(c.jsx)(T,{})}),Object(c.jsx)(E.a,{exact:!0,path:"/loginRegister",children:Object(c.jsx)(F,{})}),Object(c.jsx)(E.a,{exact:!0,path:"/userProfile",children:Object(c.jsx)(M,{})})]})})}),document.getElementById("root")),W()}},[[209,1,2]]]);
//# sourceMappingURL=main.796e66ea.chunk.js.map