(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(64),c=a.n(s),l=(a(81),a(82),a(3)),o=a.n(l),i=a(10),m=a(5),u=a(6),d=a(8),p=a(7),h=a(9),f=a(148),E=a(149),v=a(150),g=(a(85),a(146)),w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=Object(i.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{g.a.signOut(),a.props.auth.setAuthStatus(!1),a.props.auth.setUser(null)}catch(n){console.log(n.message)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"})),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"/",className:"navbar-item"},"Home"),r.a.createElement("a",{href:"/products",className:"navbar-item"},"Blogs"),r.a.createElement("a",{href:"/admin",className:"navbar-item"},"Create")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},this.props.auth.isAuthenticated&&this.props.auth.user&&r.a.createElement("p",null,"Hello ",this.props.auth.user.username),r.a.createElement("div",{className:"buttons"},!this.props.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("a",{href:"/register",className:"button is-primary"},r.a.createElement("strong",null,"Register")),r.a.createElement("a",{href:"/login",className:"button is-light"},"Log in")),this.props.auth.isAuthenticated&&r.a.createElement("a",{href:"/",onClick:this.handleLogOut,className:"button is-light"},"Log out"))))))}}]),t}(n.Component);function b(){return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body",style:{backgroundColor:"#699ab2"}},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"energy.jpg",alt:"conserve energy"}))))}function N(){return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"columns features"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-image has-text-centered"},r.a.createElement("i",{className:"fa fa-paw"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Meet New People"),r.a.createElement("p",null,"Interact with new people by sharing your ideas."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more")))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-image has-text-centered"},r.a.createElement("i",{className:"fa fa-empire"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Share Ideas"),r.a.createElement("p",null,"Jot down and share your ideas with others."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more")))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-image has-text-centered"},r.a.createElement("i",{className:"fa fa-apple"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Be Part Of a Community"),r.a.createElement("p",null,"Meet up and learn new things."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))))}function y(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"box cta"},r.a.createElement("p",{className:"has-text-centered"},r.a.createElement("span",{className:"tag is-primary"},"New")," Log in and chat with others.")),r.a.createElement(N,null))}var O=a(72),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isEditMode:!1,updatedproductname:a.props.name},a.handleProductEdit=function(e){e.preventDefault(),a.setState({isEditMode:!0})},a.handleEditSave=function(e){e.preventDefault(),a.setState({isEditMode:!1}),a.props.handleUpdateProduct(a.props.id,a.state.updatedproductname)},a.onAddProductNameChange=function(e){return a.setState({updatedproductname:e.target.value})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tile is-child box notification is-success",style:{backgroundColor:"powderblue",height:300,width:500}},this.props.isAdmin&&r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"/",onClick:this.handleProductEdit,className:"product-edit-icon"},r.a.createElement(O.a,{icon:"edit"})),r.a.createElement("button",{onClick:function(t){return e.props.handleDeleteProduct(e.props.id,t)},className:"delete"})),this.state.isEditMode?r.a.createElement("div",null,r.a.createElement("p",null,"Edit product name"),r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.updatedproductname,onChange:this.onAddProductNameChange}),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id),r.a.createElement("button",{type:"submit",className:"button is-info is-small",onClick:this.handleEditSave},"save")):r.a.createElement("div",null,r.a.createElement("p",{className:"product-title"},this.props.name),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id)))}}]),t}(n.Component),k=a(25),C=a.n(k),S=a(26),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={newproduct:null,products:[]},a.fetchProducts=Object(i.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(S.api.invokeUrl,"/products"));case 3:t=e.sent,n=t.data,a.setState({products:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("An error has occurred: ".concat(e.t0));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.componentDidMount=function(){a.fetchProducts()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CHAT"),r.a.createElement("p",{className:"subtitle is-5"},"Interact with other fellow users."),r.a.createElement("br",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-4 is-parent  is-vertical"},this.state.products&&this.state.products.length>0?this.state.products.map(function(e){return r.a.createElement(j,{name:e.productname,id:e.id,key:e.id})}):r.a.createElement("div",{className:"tile notification is-warning"},"No chats"))))))))}}]),t}(n.Component),P=a(13),A=a(37),I=a(147),L=a(26),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={newproduct:{productname:"",id:""},products:[]},a.handleAddProduct=function(){var e=Object(i.a)(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r={id:t,productname:a.state.newproduct.productname},e.next=5,C.a.post("".concat(L.api.invokeUrl,"/products/").concat(t),r);case 5:a.setState({products:[].concat(Object(A.a)(a.state.products),[a.state.newproduct])}),a.setState({newproduct:{productname:"",id:""}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("An error has occurred: ".concat(e.t0));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,a){return e.apply(this,arguments)}}(),a.handleUpdateProduct=function(){var e=Object(i.a)(o.a.mark(function e(t,n){var r,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={id:t,productname:n},e.next=4,C.a.patch("".concat(L.api.invokeUrl,"/products/").concat(t),r);case 4:s=Object(A.a)(a.state.products).find(function(e){return e.id===t}),c=Object(A.a)(a.state.products).filter(function(e){return e.id!==t}),s.productname=n,c.push(s),a.setState({products:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error updating product: ".concat(e.t0));case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}(),a.handleDeleteProduct=function(){var e=Object(i.a)(o.a.mark(function e(t,n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,C.a.delete("".concat(L.api.invokeUrl,"/products/").concat(t));case 4:r=Object(A.a)(a.state.products).filter(function(e){return e.id!==t}),a.setState({products:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Unable to delete product: ".concat(e.t0));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t,a){return e.apply(this,arguments)}}(),a.fetchProducts=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(L.api.invokeUrl,"/products"));case 3:t=e.sent,a.setState({products:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("An error has occured: ".concat(e.t0));case 10:case"end":return e.stop()}},e,null,[[0,7]])})),a.onAddProductNameChange=function(e){return a.setState({newproduct:Object(P.a)({},a.state.newproduct,{productname:e.target.value})})},a.onAddProductIdChange=function(e){return a.setState({newproduct:Object(P.a)({},a.state.newproduct,{id:e.target.value})})},a.componentDidMount=function(){a.fetchProducts()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"section"},this.props.auth.isAuthenticated?r.a.createElement(I.a,{to:"/admin"}):r.a.createElement(I.a,{to:"/"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CREATE CHAT"),r.a.createElement("p",{className:"subtitle is-5"},"Add and remove messages using the form below:"),r.a.createElement("br",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-third"},r.a.createElement("form",{onSubmit:function(t){return e.handleAddProduct(e.state.newproduct.id,t)}},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.newproduct.productname,onChange:this.onAddProductNameChange})),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter id",value:this.state.newproduct.id,onChange:this.onAddProductIdChange})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary is-medium"},"Add a Message"))))),r.a.createElement("div",{className:"column is-two-thirds"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-4 is-parent  is-vertical"},this.state.products.map(function(t,a){return r.a.createElement(j,{isAdmin:!0,handleUpdateProduct:e.handleUpdateProduct,handleDeleteProduct:e.handleDeleteProduct,name:t.productname,id:t.id,key:t.id})}))))))))}}]),t}(n.Component),U=a(17);var D=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?r.a.createElement("div",{className:"error container mt-2 invalid"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.blankfield?"All fields are required":"")):e.searchvalidationerror?r.a.createElement("div",{className:"error container mt-2 invalid"},r.a.createElement("div",{className:"row justify-content-center"},"Enter a valid location")):e.apierrors?r.a.createElement("div",{className:"error container mt-2 invalid"},r.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?r.a.createElement("div",{className:"error container mt-2 invalid"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):r.a.createElement("div",null)};var H=function(e,t){for(var a=document.getElementsByClassName("is-danger"),n=0;n<a.length;n++)a[n].classList.contains("error")||a[n].classList.remove("is-danger");return t.hasOwnProperty("username")&&""===t.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("firstname")&&""===t.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("lastname")&&""===t.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("email")&&""===t.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("verificationcode")&&""===t.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&""===t.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("oldpassword")&&""===t.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("newpassword")&&""===t.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("confirmpassword")&&""===t.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&t.hasOwnProperty("confirmpassword")&&t.password!==t.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):t.hasOwnProperty("newpassword")&&t.hasOwnProperty("confirmpassword")&&t.newpassword!==t.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0},F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.handleSubmit=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=H(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,g.a.signIn(a.state.username,a.state.password);case 7:r=e.sent,console.log(r),a.props.auth.setAuthStatus(!0),a.props.auth.setUser(r),a.props.history.push("/"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),s=null,s=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(P.a)({},a.state.errors,{cognito:s})});case 19:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Log in"),r.a.createElement(D,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username or email",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,r,s,c,l,i,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=H(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),r=a.state,s=r.username,c=r.email,l=r.password,e.prev=5,e.next=8,g.a.signUp({username:s,password:l,attributes:{email:c}});case 8:i=e.sent,a.props.history.push("/welcome"),console.log(i),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(5),m=null,m=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(P.a)({},a.state.errors,{cognito:m})});case 18:case"end":return e.stop()}},e,null,[[5,13]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement(D,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"userNameHelp",placeholder:"Enter username",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Register"))))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.forgotPasswordHandler=function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=H(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,g.a.forgotPassword(a.state.email);case 7:a.props.history.push("/forgotpasswordverification"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Forgot your password?"),r.a.createElement("p",null,"Please enter the email address associated with your account and we'll email you a password reset link."),r.a.createElement(D,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.forgotPasswordHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{type:"email",className:"input",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Submit"))))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={verificationcode:"",email:"",newpassword:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.passwordVerificationHandler=function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=H(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,g.a.forgotPasswordSubmit(a.state.email,a.state.verificationcode,a.state.newpassword);case 7:a.props.history.push("/changepasswordconfirmation"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Set new password"),r.a.createElement("p",null,"Please enter the verification code sent to your email address below, your email address and a new password."),r.a.createElement(D,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.passwordVerificationHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{type:"text",className:"input",id:"verificationcode","aria-describedby":"verificationCodeHelp",placeholder:"Enter verification code",value:this.state.verificationcode,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{type:"password",className:"input",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Submit"))))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={oldpassword:"",newpassword:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=H(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,g.a.currentAuthenticatedUser();case 7:return r=e.sent,console.log(r),e.next=11,g.a.changePassword(r,a.state.oldpassword,a.state.newpassword);case 11:a.props.history.push("/changepasswordconfirmation"),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(4),s=null,s=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(P.a)({},a.state.errors,{cognito:s})}),console.log(s);case 20:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement(D,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"oldpassword",placeholder:"Old password",value:this.state.oldpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Change password"))))))}}]),t}(n.Component),W=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement("p",null,"Your password has been successfully updated!")))}}]),t}(n.Component);function G(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"You have successfully registered a new account."),r.a.createElement("p",null,"We've sent you a email. Please click on the confirmation link to verify your account.")))}function J(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"Matt 2021. The source code is licensed USFCA. The website content is licensed CC BY NC SA 4.0.")))}var Y=a(36),z=a(73);Y.b.add(z.a);var V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthenticated:!1,isAuthenticating:!0,user:null},a.setAuthStatus=function(e){a.setState({isAuthenticated:e})},a.setUser=function(e){a.setState({user:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.currentSession();case 3:return t=e.sent,this.setAuthStatus(!0),console.log(t),e.next=8,g.a.currentAuthenticatedUser();case 8:a=e.sent,this.setUser(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),"No current user"!==e.t0&&console.log(e.t0);case 15:this.setState({isAuthenticating:!1});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,user:this.state.user,setAuthStatus:this.setAuthStatus,setUser:this.setUser};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(w,{auth:e}),r.a.createElement(E.a,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(y,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/products",render:function(t){return r.a.createElement(x,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/admin",render:function(t){return r.a.createElement(B,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(F,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(M,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/forgotpassword",render:function(t){return r.a.createElement(_,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/forgotpasswordverification",render:function(t){return r.a.createElement(R,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/changepassword",render:function(t){return r.a.createElement(T,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/changepasswordconfirmation",render:function(t){return r.a.createElement(W,Object.assign({},t,{auth:e}))}}),r.a.createElement(v.a,{exact:!0,path:"/welcome",render:function(t){return r.a.createElement(G,Object.assign({},t,{auth:e}))}})),r.a.createElement(J,null))))}}]),t}(n.Component),q=a(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.configure({Auth:{mandatorySignIn:!0,region:q.cognito.REGION,userPoolId:q.cognito.USER_POOL_ID,userPoolWebClientId:q.cognito.APP_CLIENT_ID}}),c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e){e.exports={api:{invokeUrl:"https://bpig1tt794.execute-api.us-east-1.amazonaws.com/prod"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_H8kZthGFz",APP_CLIENT_ID:"14c9cmvc1nk7ebgtl9f7kc0e3k"}}},76:function(e,t,a){e.exports=a(140)},82:function(e,t,a){},85:function(e,t,a){},89:function(e,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.7d3f39cb.chunk.js.map