(this["webpackJsonpeng-react-new"]=this["webpackJsonpeng-react-new"]||[]).push([[0],{32:function(e,a,c){},33:function(e,a,c){"use strict";c.r(a);var t=c(0),l=c(1),n=c(17),s=c.n(n),r=c(7),i=c(2),m=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("section",{id:"header",className:"height-100vh d-flex align-items-center justify-content-center",children:Object(t.jsx)("div",{className:"container-fluid ",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-10 mx-auto",children:Object(t.jsxs)("div",{className:"row ",children:[Object(t.jsxs)("div",{className:"col-md-6 pt-5 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column ",children:[Object(t.jsxs)("h1",{children:[e.name,Object(t.jsx)("strong",{className:"brand-name",children:"  Umer Technical"})]}),Object(t.jsx)("h2",{className:"my-3",children:"Weare the team of talented developers to build websites"}),Object(t.jsx)("div",{children:Object(t.jsx)(r.b,{to:e.visit,className:"btnmargin btn-get-started",children:e.btn})})]}),Object(t.jsx)("div",{className:"col-md-6 order-1 order-lg-2 header_img",children:Object(t.jsx)("img",{src:e.imgsrc,width:"400px",height:"400px",className:"animated",alt:"hello"})})]})})})})})})},o=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(m,{imgsrc:"/eng-react-new/image/about.jpg",name:"Welcome to About page",visit:"/contact",btn:"Contact us"})})},j=c(10),d=c(15),b=c(19),h=function(){var e=Object(l.useState)({fullname:"",lastname:"",phone:"",email:"",homeaddress:"",msg:"",gender:"male",lan1:!1,lan2:!1,lan3:!1,lan4:!1,country:"Pakistan",filename:""}),a=Object(b.a)(e,2),c=a[0],n=a[1];console.log(c.filename),console.log(c.gender),console.log(c.country),console.log(c.lan1),console.log(c.lan2),console.log(c.lan3),console.log(c.lan4);var s=function(e){var a=e.target.name,c="checkbox"===e.target.type?e.target.checked:e.target.value;n((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},a,c))}))};return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"my-5",children:Object(t.jsx)("h1",{className:"text-center",children:"Contact Us"})}),Object(t.jsx)("div",{className:"container ",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-6 col-10 mx-auto",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("my name is ".concat(c.fullname," ").concat(c.lastname," my gender is ").concat(c.gender," \n      contact#").concat(c.phone," email is ").concat(c.email," I live at ").concat(c.homeaddress," Country").concat(c.country,"\n      want to say ").concat(c.msg)),n({fullname:"",lastname:"",gender:"male",phone:"",email:"",homeaddress:"",msg:""})},children:[Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"First Name"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"fullname",value:c.fullname,onChange:s,placeholder:"Enter your Fname",required:!0})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Last Name"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"lastname",value:c.lastname,onChange:s,placeholder:"Enter your Lname",required:!0})]}),Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Select Gender"}),Object(t.jsxs)("div",{className:"d-inline-flex col-10",children:[Object(t.jsxs)("div",{className:"form-check",children:[Object(t.jsx)("input",{className:"form-check-input ms-4 mr-2",type:"radio",name:"gender",value:"male",checked:"male"===c.gender,onChange:s,id:"flexRadioDefault1"}),Object(t.jsx)("label",{className:"form-check-label ms-1",for:"flexRadioDefault1",children:"Male"})]}),Object(t.jsxs)("div",{className:"form-check",children:[Object(t.jsx)("input",{className:"form-check-input ms-4 ",type:"radio",name:"gender",value:"female",checked:"female"===c.gender,onChange:s,id:"flexRadioDefault2"}),Object(t.jsx)("label",{className:"form-check-label ms-1 mb-3",for:"flexRadioDefault2",children:"Female"})]})]}),Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Checked your skill:"}),Object(t.jsxs)("div",{className:"checkboxes d-inline-flex",children:[Object(t.jsxs)("div",{className:"form-check ms-4",children:[Object(t.jsx)("input",{className:"form-check-input",type:"checkbox",name:"lan1",checked:c.lan1,onChange:s,id:"flexCheckDefault"}),Object(t.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"React.js"})]}),Object(t.jsxs)("div",{className:"form-check ms-4",children:[Object(t.jsx)("input",{className:"form-check-input",type:"checkbox",name:"lan2",checked:c.lan2,onChange:s,id:"flexCheckDefault"}),Object(t.jsx)("label",{className:"form-check-label",for:"flexCheckChecked",children:"React-native"})]}),Object(t.jsxs)("div",{className:"form-check ms-4",children:[Object(t.jsx)("input",{className:"form-check-input",type:"checkbox",name:"lan3",checked:c.lan3,onChange:s,id:"flexCheckDefault"}),Object(t.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Node.js"})]}),Object(t.jsxs)("div",{className:"form-check ms-4",children:[Object(t.jsx)("input",{className:"form-check-input",type:"checkbox",name:"lan4",checked:c.lan4,onChange:s,id:"flexCheckDefault"}),Object(t.jsx)("label",{className:"form-check-label",for:"flexCheckChecked",children:"PHP"})]})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"mt-2 form-label",children:"Phone"}),Object(t.jsx)("input",{type:"tel",className:"form-control",id:"exampleFormControlInput1",name:"phone",value:c.phone,onChange:s,placeholder:"Enter your mobile number",required:!0})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Email address"}),Object(t.jsx)("input",{type:"email",className:"form-control",id:"exampleFormControlInput1",name:"email",value:c.email,onChange:s,placeholder:"name@example.com",required:!0})]}),Object(t.jsxs)("div",{className:"form-floating col-3 mb-2",children:[Object(t.jsxs)("select",{className:"form-select ",id:"floatingSelect","aria-label":"Floating label select example",name:"country",value:c.country,onChange:s,children:[Object(t.jsx)("option",{value:"Pakistan",children:"Pakistan"}),Object(t.jsx)("option",{value:"Bangladesh",children:"Bangladesh"}),Object(t.jsx)("option",{value:"India",children:"India"}),Object(t.jsx)("option",{value:"China",children:"China"}),Object(t.jsx)("option",{value:"America",children:"America"}),Object(t.jsx)("option",{value:"Turkey",children:"Turkey"})]}),Object(t.jsx)("label",{for:"floatingSelect",children:"Select Country"})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlInput1",className:"form-label",children:"Home address"}),Object(t.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",name:"homeaddress",value:c.homeaddress,onChange:s,placeholder:"Provide Home Address",required:!0})]}),Object(t.jsxs)("div",{className:" mb-2",children:[Object(t.jsx)("label",{for:"exampleFormControlTextarea1",className:"form-label",children:"Upload Cv"}),Object(t.jsx)("input",{type:"file",id:"myFile",name:"filename",onChange:s,value:c.filename,className:"btn"})]}),Object(t.jsxs)("div",{className:"mb-3",children:[Object(t.jsx)("label",{for:"exampleFormControlTextarea1",className:"form-label",children:"Write to us"}),Object(t.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"msg",value:c.msg,onChange:s,required:!0})]}),Object(t.jsx)("div",{className:"col-12",children:Object(t.jsx)("button",{className:"btn btn-outline-primary mr=3 btnmargin",type:"submit",children:"Submit form"})})]})})})})]})},x=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(m,{imgsrc:"/eng-react-new/image/homes1.png",name:"Grow your business",visit:"/service",btn:"Get started"})})},u=[{imgsrc:"/eng-react-new/image/img1.png",title:"Tractore"},{imgsrc:"/eng-react-new/image/img2.png",title:"Movies"},{imgsrc:"/eng-react-new/image/img3.png",title:"Cars"},{imgsrc:"/eng-react-new/image/img4.jpg",title:"Bubbles"},{imgsrc:"/eng-react-new/image/img5.jpg",title:"Flash Car"},{imgsrc:"/eng-react-new/image/img6.png",title:"Ic"},{imgsrc:"/eng-react-new/image/img7.jpg",title:"Cat"},{imgsrc:"/eng-react-new/image/img8.jpg",title:"squareballs"},{imgsrc:"/eng-react-new/image/img9.jpg",title:"Classic Cars"}],g=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:" col-md-4",children:Object(t.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(t.jsx)("img",{src:e.imgsrc,className:"card-img-top",alt:"no to show",height:"200px"}),Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:e.tiltle}),Object(t.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(t.jsx)("a",{href:"https://vulms.vu.edu.pk/",target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:"Watch Now"})]})]})})})},O=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"my-5",children:Object(t.jsx)("h1",{className:"text-center",children:"Our Services"})}),Object(t.jsx)("div",{className:"container-fluid mb-5",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-10 mx-auto",children:Object(t.jsx)("div",{className:"row gy-4",children:u.map((function(e,a){return Object(t.jsx)(g,{imgsrc:e.imgsrc,tiltle:e.title},a)}))})})})})]})},p=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"container-fluid nav_bg",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-10 mx-auto",children:Object(t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:Object(t.jsxs)("div",{className:"container-fluid",children:[Object(t.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Umer Tech"}),Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(t.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(r.b,{activeClassName:"nav_btn",exact:!0,className:"nav-link ",to:"/",children:"Home"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(r.b,{activeClassName:"nav_btn",exact:!0,className:"nav-link",to:"/service",children:"Services"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(r.b,{activeClassName:"nav_btn",exact:!0,className:"nav-link",to:"/about",children:"About"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(r.b,{activeClassName:"nav_btn",exact:!0,className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})})})}),Object(t.jsxs)(i.d,{children:[Object(t.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(t.jsx)(i.b,{exact:!0,path:"/service",component:O}),Object(t.jsx)(i.b,{exact:!0,path:"/about",component:o}),Object(t.jsx)(i.b,{exact:!0,path:"/contact",component:h}),Object(t.jsx)(i.a,{to:"/"})]})]})},f=(c(30),c(31),function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"bg-light w-100 text-center ",children:Object(t.jsx)("footer",{children:Object(t.jsx)("p",{children:"\xa9 2020 UmerTechnical.All Right Reserved | Terms and Condition"})})})})}),v=(c(32),function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(p,{}),Object(t.jsx)(f,{})]})});s.a.render(Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(r.a,{children:Object(t.jsx)(v,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c9317e6b.chunk.js.map