(this.webpackJsonpgetcoin=this.webpackJsonpgetcoin||[]).push([[0],{10:function(e,n,t){},17:function(e,n,t){e.exports=t.p+"static/media/arrow_down.e2d416dd.svg"},20:function(e,n,t){e.exports=t.p+"static/media/arrow_up.e6b6fef0.svg"},34:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);t(10);var a=t(0),r=t.n(a),o=t(19),c=t.n(o),i=t(7),l=t(1);var u=function(e){var n=e.login,t=e.password,a=e.credentialsError,o=e.changeLogin,c=e.changePassword,i=e.showCredentialsError,l=e.submitForm;return r.a.createElement("form",{onSubmit:function(e){i(!1),l(n,t)}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:n,placeholder:"login",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:t,placeholder:"password",onChange:function(e){c(e.target.value)}})),a&&r.a.createElement("div",null," Login or Password is incorrect"),r.a.createElement("input",{type:"submit",disabled:!n||!t,value:"submit"}))},s=function(e){return{type:"CHANGE_FIRST_NAME",payload:e}},m=function(e){return{type:"CHANGE_SECOND_NAME",payload:e}};var d=Object(i.b)((function(e){return{firstName:e.login.firstName,secondName:e.login.secondName}}),(function(e){return{changeName:Object(l.b)(s,e),changeSurname:Object(l.b)(m,e)}}))((function(e){var n=e.firstName,t=e.secondName,a=e.changeName,o=e.changeSurname;return r.a.createElement(u,{firstName:n,secondName:t,changeName:a,changeSurname:o})})),g=t(5),p=t(3),h=t(4);function f(){var e=Object(g.a)(["\nwidth: 12%;\ntext-align:right;\nfont-size: 25px;\nfont-weight: 300;\n"]);return f=function(){return e},e}function b(){var e=Object(g.a)(["\nwidth: 64%;\nfont-size: 50px;\nfont-weight: 300;\ntext-align:left;\n"]);return b=function(){return e},e}function E(){var e=Object(g.a)(["\ndisplay: flex;\nwidth: 93%;\nmargin: 0 auto;\nalign-items: baseline;\npadding: 60px 0 35px 0  ;\n\n"]);return E=function(){return e},e}var v=h.a.nav(E()),O=h.a.h1(b()),y=h.a.h2(f());var j=function(e){var n=e.token,t=e.logged,a=e.logOut;return r.a.createElement(v,null,r.a.createElement(O,null,r.a.createElement(p.b,{to:"/"}," GetCoin ")),r.a.createElement(y,null,t?r.a.createElement(p.b,{to:"/cabinet"}," My cabinet "):r.a.createElement(p.b,{to:"/register"}," Registration ")),r.a.createElement(y,null,t?r.a.createElement(p.b,{to:"/",onClick:function(){a(n)}}," Logout "):r.a.createElement(p.b,{to:"/login"}," Login ")),r.a.createElement(y,null,r.a.createElement(p.b,{to:"/cart"}," Cart ")))},C=function(){return function(e,n){fetch("http://localhost:8000/logout",{method:"POST",body:JSON.stringify({token:n().token}),headers:{"Access-Control-Allow-Origin":"http://localhost:3000","Content-Type":"application/json"}}).then((function(){e({type:"LOG_OUT",payload:null})}))}},w=function(){return{type:"TOGGLE_ADVANCED_SEARCH"}},N=function(e){return{type:"HANDLE_SEARCH",payload:e}},x=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return function(n,a){fetch("http://localhost:8000/searchCoins?text=".concat(e,"&type=").concat(t[0],"&country=").concat(a.adSearch.country,"&composition=").concat(a.adSearch.composition,"&priceFrom=").concat(a.adSearch.priceFrom,"&priceTo=").concat(a.adSearch.priceTo,"&yearFrom=").concat(a.adSearch.yearFrom,"&yearTo=").concat(a.adSearch.yearTo),{method:"GET",headers:{"Access-Control-Allow-Origin":"http://localhost:8000","Content-Type":"application/json"}}).then((function(e){return e.json})).then((function(e){n(N(e))}))}},S=function(){return function(e,n){fetch("http://localhost:8000/advanced").then((function(e){return e.json()})).then((function(n){e({type:"GET_ADVANCED_SEARCH_INFO",payload:n})}))}};var A=Object(i.b)((function(e){return{token:e.login.token,logged:e.login.logged}}),(function(e){return{logOut:Object(l.b)(C,e)}}))((function(e){var n=e.token,t=e.logged,a=e.logOut;return r.a.createElement(j,{token:n,logOut:a,logged:t})})),T=t(18),_=t(17),F=t.n(_);function k(){var e=Object(g.a)(["\n  position: absolute;\n  display: block;\n  top: 12px;\n  right: 10px;\n"]);return k=function(){return e},e}function G(){var e=Object(g.a)(["\n  min-width: 200px;\n  width: 100%;\n  outline: none;\n  text-align: left;\n  border: 1px solid black;\n  padding: 5px;\n  font-size: 20px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n"]);return G=function(){return e},e}function P(){var e=Object(g.a)(["\n  position: relative;\n  min-width: 200px;\n  width: 80%;\n"]);return P=function(){return e},e}function R(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 37%;\n  min-width: 200px;\n  margin-top: 20px;\n"]);return R=function(){return e},e}var H=h.a.div(R()),I=h.a.div(P()),L=h.a.select(G()),M=h.a.img(k());var D=function(e){var n,t=e.select,a=e.changeSelect,o=e.labelText,c=e.options;if(void 0!==c){var i=Object.getOwnPropertyNames(c[0])[0];n=c.map((function(e){return console.log(e[i]),r.a.createElement("option",{value:e[i]},e[i])}))}else n=[];return r.a.createElement(H,null,r.a.createElement("label",{style:{fontWeight:"bold"},htmlFor:""},o),r.a.createElement(I,null,r.a.createElement(L,{type:"select",id:"selector",value:t,onChange:function(e){a(e.target.value)}},n),r.a.createElement(M,{src:F.a,alt:"Arrow"})))};function Y(){var e=Object(g.a)(["\n  min-width: 100px;\n  width: 30%;\n  outline: none;\n  border: 1px solid black;\n  text-align: left;\n  padding: 5px;\n  font-size: 20px;\n"]);return Y=function(){return e},e}function q(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  min-width: 250px;\n  width: 60%;\n"]);return q=function(){return e},e}function z(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 50%;\n  min-width: 250px;\n  margin-top: 20px;\n"]);return z=function(){return e},e}var U=h.a.div(z()),W=h.a.div(q()),J=h.a.input(Y());var Q=function(e){var n=e.from,t=e.to,a=e.changeFrom,o=e.changeTo,c=e.labelText;return r.a.createElement(U,null,r.a.createElement("label",{style:{fontWeight:"bold"},htmlFor:""},c),r.a.createElement(W,null,r.a.createElement("label",{style:{width:"15%"},htmlFor:""},"from"),r.a.createElement(J,{type:"number",value:n,onChange:function(e){a(e.target.value)}}),r.a.createElement("label",{style:{padding:"0 5px"},htmlFor:""},"to"),r.a.createElement(J,{type:"number",value:t,onChange:function(e){o(e.target.value)}})))};function B(){var e=Object(g.a)(["\nwidth: 100%;\ndisplay: flex;\nalign-content: flex-start;\nflex-direction: column;\nflex-wrap: wrap;\nheight: 230px;\n"]);return B=function(){return e},e}var V=h.a.section(B());var K=function(e){var n=e.country,t=e.composition,a=e.quality,o=e.priceFrom,c=e.priceTo,i=e.yearFrom,l=e.yearTo,u=e.changeCountry,s=e.changeComposition,m=e.changeQuality,d=e.changePriceFrom,g=e.changePriceTo,p=e.changeYearFrom,h=e.changeYearTo,f=e.countries,b=e.compositions,E=e.qualities;return r.a.createElement(V,null,r.a.createElement(D,{select:n,changeSelect:u,options:f,labelText:"Issuing country"}),r.a.createElement(D,{select:t,changeSelect:s,options:b,labelText:"Metal"}),r.a.createElement(D,{select:a,changeSelect:m,options:E,labelText:"Quality"}),r.a.createElement(Q,{from:o,to:c,changeFrom:d,changeTo:g,labelText:"Price"}),r.a.createElement(Q,{from:i,to:l,changeFrom:p,changeTo:h,labelText:"Year of issue"}))},X=function(e){return{type:"CHANGE_COUNTRY",payload:e}},Z=function(e){return{type:"CHANGE_COMPOSITION",payload:e}},$=function(e){return{type:"CHANGE_QUALITY",payload:e}},ee=function(e){return{type:"CHANGE_PRICE_FROM",payload:e}},ne=function(e){return{type:"CHANGE_PRICE_TO",payload:e}},te=function(e){return{type:"CHANGE_YEAR_FROM",payload:e}},ae=function(e){return{type:"CHANGE_YEAR_TO",payload:e}};var re=Object(i.b)((function(e){return{country:e.adSearch.country,composition:e.adSearch.composition,quality:e.adSearch.quality,priceFrom:e.adSearch.priceFrom,priceTo:e.adSearch.priceTo,yearFrom:e.adSearch.yearFrom,yearTo:e.adSearch.yearTo,adSearchInfo:e.homepage.adSearchInfo}}),(function(e){return{countryChange:Object(l.b)(X,e),compositionChange:Object(l.b)(Z,e),qualityChange:Object(l.b)($,e),priceFromChange:Object(l.b)(ee,e),priceToChange:Object(l.b)(ne,e),yearFromChange:Object(l.b)(te,e),yearToChange:Object(l.b)(ae,e)}}))((function(e){var n=e.country,t=e.composition,a=e.quality,o=e.priceFrom,c=e.priceTo,i=e.yearFrom,l=e.yearTo,u=e.countryChange,s=e.compositionChange,m=e.qualityChange,d=e.priceFromChange,g=e.priceToChange,p=e.yearFromChange,h=e.yearToChange,f=e.adSearchInfo;return r.a.createElement(K,{country:n,composition:t,quality:a,priceFrom:o,priceTo:c,yearFrom:i,yearTo:l,changeCountry:u,changeComposition:s,changeQuality:m,changePriceFrom:d,changePriceTo:g,changeYearFrom:p,changeYearTo:h,countries:f.countriesList,compositions:f.compositionsList,qualities:f.qualitiesList})})),oe=t(20),ce=t.n(oe);function ie(){var e=Object(g.a)(["\n  vertical-align: middle;\n  margin-left:4px\n"]);return ie=function(){return e},e}function le(){var e=Object(g.a)(["\nfont-weight: 300;\ncursor: pointer;\nfont-size: 14px;\ntext-decoration-line: underline;\nmin-width:60px;\n"]);return le=function(){return e},e}function ue(){var e=Object(g.a)(["\n  min-width: 250px;\n  width:30%;\n  padding: 0 5px;\n  outline: none;\n  border: 1px solid black;\n  text-align: left;\n  font-size: 25px;\n"]);return ue=function(){return e},e}function se(){var e=Object(g.a)(["\n  width: 100px;\n  outline: none;\n  border: none;\n  padding: 9px;\n  margin-left: 20px;\n  background: #833ae0;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 14px;\n"]);return se=function(){return e},e}function me(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width:100%;\n  min-width: 250px;\n  align-items: center;\n"]);return me=function(){return e},e}function de(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: left;\n"]);return de=function(){return e},e}function ge(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  min-width: 630px;\n  margin-left: 3.5%; \n  align-items: baseline;\n"]);return ge=function(){return e},e}var pe=h.a.form(ge()),he=h.a.div(de()),fe=h.a.div(me()),be=h.a.input(se()),Ee=h.a.input(ue()),ve=h.a.div(le()),Oe=h.a.img(ie());var ye=function(e){var n=Object(a.useState)(""),t=Object(T.a)(n,2),o=t[0],c=t[1],i=e.advancedSearch,l=e.toggleAdvanced,u=e.getAdvancedInfo,s=e.submitSearch;return r.a.createElement(pe,null,r.a.createElement(he,null,r.a.createElement("label",{style:{fontSize:"14px"},htmlFor:"searchInput"}," Input field "),r.a.createElement(fe,null,r.a.createElement(Ee,{type:"text",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement(p.b,{to:"/coins"},r.a.createElement(be,{type:"submit",value:"Search",onClick:function(){s(o)}}))),r.a.createElement(ve,{onClick:function(){!1===i&&u(),l()}},"Advanced filter",r.a.createElement(Oe,{src:i?ce.a:F.a,alt:"arrow"}))),i&&r.a.createElement(re,null))};var je=Object(i.b)((function(e){return{advancedSearch:e.homepage.advancedSearch}}),(function(e){return{submitSearch:Object(l.b)(x,e),toggleAdvanced:Object(l.b)(w,e),getAdvancedInfo:Object(l.b)(S,e)}}))((function(e){var n=e.advancedSearch,t=e.submitSearch,a=e.toggleAdvanced,o=e.getAdvancedInfo;return r.a.createElement(ye,{submitSearch:t,toggleAdvanced:a,getAdvancedInfo:o,advancedSearch:n})}));function Ce(){var e=Object(g.a)(["\n  width: 214px;\n"]);return Ce=function(){return e},e}function we(){var e=Object(g.a)(["\n  font-weight: 300;\n  font-size: 14px;\n  margin: 10px 0;\n"]);return we=function(){return e},e}function Ne(){var e=Object(g.a)(["\n  font-size: 28px;\n"]);return Ne=function(){return e},e}function xe(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  min-width: 230px;\n"]);return xe=function(){return e},e}var Se=h.a.section(xe()),Ae=h.a.h3(Ne()),Te=h.a.p(we()),_e=h.a.img(Ce());var Fe=function(e){var n=e.listName;return r.a.createElement(Se,null,r.a.createElement(p.b,{to:"/coins",onClick:function(){}},r.a.createElement(Ae,null," ",n+" coins"," "),r.a.createElement(Te,null," Show all > "),r.a.createElement(_e,{src:"http://localhost:8000/image?type=".concat(n),alt:"Coin"})))};var ke=Object(i.b)((function(e){return{advancedSearch:e.homepage.advancedSearch}}),(function(e){return{submitSearch:Object(l.b)(x,e)}}))((function(e){var n=e.listName;return e.submitSearch,e.toggleAdvanced,e.getAdvancedInfo,r.a.createElement(Fe,{listName:n})}));function Ge(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 80%;\n  min-width: 630px;\n  margin-left: 3.5%;\n  margin-top: 50px;\n"]);return Ge=function(){return e},e}var Pe=h.a.section(Ge());var Re=function(e){return r.a.createElement(Pe,null,r.a.createElement(ke,{listName:"Bullion"}),r.a.createElement(ke,{listName:"Exclusive"}),r.a.createElement(ke,{listName:"Commemorative"}))};var He=function(e){e.token,e.logged,e.logOut;var n=e.advancedSearch;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(je,null),!n&&r.a.createElement(Re,null))};var Ie=Object(i.b)((function(e){return{token:e.login.token,logged:e.login.logged,advancedSearch:e.homepage.advancedSearch}}),(function(e){return{logOut:Object(l.b)(C,e)}}))((function(e){var n=e.token,t=e.logged,a=e.logOut,o=e.advancedSearch;return r.a.createElement(He,{token:n,logOut:a,logged:t,advancedSearch:o})})),Le=function(e){return{type:"CHANGE_LOGIN",payload:e}},Me=function(e){return{type:"CHANGE_PASSWORD",payload:e}},De=function(e){return{type:"CHANGE_REPEAT_PASSWORD",payload:e}},Ye=function(){return function(e,n){fetch("http://localhost:8000/register",{method:"POST",body:JSON.stringify({login:n().registration.login,password:n().registration.password}),headers:{"Access-Control-Allow-Origin":"http://localhost:3000","Content-Type":"application/json"}}).then((function(e){return e.json})).then((function(t){fetch("http://localhost:8000/token",{method:"POST",body:JSON.stringify({login:n().registration.login,password:n().registration.password}),headers:{"Access-Control-Allow-Origin":"http://localhost:3000","Content-Type":"application/json"}}).then((function(e){return e.json})).then((function(n){e({type:"SUBMIT_FORM",payload:n}),e(Me("")),e(De(""))}))}))}};var qe=function(e){var n=Object(a.useState)(!1),t=Object(T.a)(n,2),o=(t[0],t[1]),c=Object(a.useState)(!1),i=Object(T.a)(c,2),l=(i[0],i[1]),u=e.login,s=e.password,m=e.repeatPassword,d=e.changeLogin,g=e.changePassword,p=e.changeRepeatPassword,h=e.submitForm;return r.a.createElement("form",{onSubmit:function(e){l(!1),o(!1),""===u||""===s?o(!0):s!==m?l(!0):(h(u,s),l(!1),o(!1))}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:u,placeholder:"login",onChange:function(e){d(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:s,minLength:6,placeholder:"password",onChange:function(e){g(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:m,minLength:6,placeholder:"password",onChange:function(e){p(e.target.value)}})),r.a.createElement("input",{type:"submit",disabled:!u||!s||!m,value:"submit"}))};var ze=Object(i.b)((function(e){return{login:e.registration.login,password:e.registration.password,repeatPassword:e.registration.repeatPassword}}),(function(e){return{changeLogin:Object(l.b)(Le,e),changePassword:Object(l.b)(Me,e),changeRepeatPassword:Object(l.b)(De,e),submitForm:Object(l.b)(Ye,e)}}))((function(e){var n=e.login,t=e.password,a=e.repeatPassword,o=e.changeLogin,c=e.changePassword,i=e.changeRepeatPassword,l=e.submitForm;return r.a.createElement(qe,{login:n,password:t,repeatPassword:a,changeLogin:o,changePassword:c,changeRepeatPassword:i,submitForm:l})}));var Ue=function(e){var n=e.login,t=e.password,a=e.credentialsError,o=e.changeLogin,c=e.changePassword,i=e.showCredentialsError,l=e.submitForm;return r.a.createElement("form",{onSubmit:function(e){i(!1),l(n,t)}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:n,placeholder:"login",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",value:t,placeholder:"password",onChange:function(e){c(e.target.value)}})),a&&r.a.createElement("div",null," Login or Password is incorrect"),r.a.createElement("input",{type:"submit",disabled:!n||!t,value:"submit"}))};var We=Object(i.b)((function(e){return{firstName:e.login.firstName,secondName:e.login.secondName}}),(function(e){return{changeName:Object(l.b)(s,e),changeSurname:Object(l.b)(m,e)}}))((function(e){var n=e.firstName,t=e.secondName,a=e.changeName,o=e.changeSurname;return r.a.createElement(Ue,{firstName:n,secondName:t,changeName:a,changeSurname:o})}));var Je=function(e){var n=e.token,t=e.logged,a=e.logOut;return e.downloadCredits,r.a.createElement("div",null,r.a.createElement("nav",{className:"menu"},r.a.createElement(p.b,{className:"menu-points",to:"/"}," GetCoin "),t?r.a.createElement(p.b,{className:"menu-points",to:"/cabinet"}," My cabinet "):r.a.createElement(p.b,{className:"menu-points",to:"/register"}," Registration "),t?r.a.createElement(p.b,{className:"menu-points",to:"/",onClick:function(){a(n)}}," Logout "):r.a.createElement(p.b,{className:"menu-points",to:"/login"}," Login "),r.a.createElement(p.b,{className:"menu-points",to:"/cart"}," Cart ")))};var Qe=Object(i.b)((function(e){return{token:e.login.token,logged:e.login.logged}}),(function(e){return{logOut:Object(l.b)(C,e)}}))((function(e){var n=e.token,t=e.logged,a=e.logOut;return r.a.createElement(Je,{token:n,logOut:a,logged:t})}));var Be=function(e){var n=e.token,t=e.logged,a=e.logOut;return e.downloadCredits,r.a.createElement("div",null,r.a.createElement("nav",{className:"menu"},r.a.createElement(p.b,{className:"menu-points",to:"/"}," GetCoin "),t?r.a.createElement(p.b,{className:"menu-points",to:"/cabinet"}," My cabinet "):r.a.createElement(p.b,{className:"menu-points",to:"/register"}," Registration "),t?r.a.createElement(p.b,{className:"menu-points",to:"/",onClick:function(){a(n)}}," Logout "):r.a.createElement(p.b,{className:"menu-points",to:"/login"}," Login "),r.a.createElement(p.b,{className:"menu-points",to:"/cart"}," Cart ")))};var Ve=Object(i.b)((function(e){return{token:e.login.token,logged:e.login.logged}}),(function(e){return{logOut:Object(l.b)(C,e)}}))((function(e){var n=e.token,t=e.logged,a=e.logOut;return r.a.createElement(Be,{token:n,logOut:a,logged:t})}));var Ke=function(e){var n=e.token,t=e.logged,a=e.logOut;return e.downloadCredits,r.a.createElement("div",null,r.a.createElement("nav",{className:"menu"},r.a.createElement(p.b,{className:"menu-points",to:"/"}," GetCoin "),t?r.a.createElement(p.b,{className:"menu-points",to:"/cabinet"}," My cabinet "):r.a.createElement(p.b,{className:"menu-points",to:"/register"}," Registration "),t?r.a.createElement(p.b,{className:"menu-points",to:"/",onClick:function(){a(n)}}," Logout "):r.a.createElement(p.b,{className:"menu-points",to:"/login"}," Login "),r.a.createElement(p.b,{className:"menu-points",to:"/cart"}," Cart ")))};var Xe=Object(i.b)((function(e){return{token:e.login.token,logged:e.login.logged}}),(function(e){return{logOut:Object(l.b)(C,e)}}))((function(e){var n=e.token,t=e.logged,a=e.logOut;return r.a.createElement(Ke,{token:n,logOut:a,logged:t})})),Ze=t(8);var $e=function(e){return r.a.createElement("main",null,r.a.createElement(Ze.a,{path:"/",exact:!0},r.a.createElement(Ie,null)),r.a.createElement(Ze.a,{path:"/register",exact:!0},r.a.createElement(ze,null)),r.a.createElement(Ze.a,{path:"/login",exact:!0},r.a.createElement(d,null)),r.a.createElement(Ze.a,{path:"/cabinet",exact:!0},r.a.createElement(We,null)),r.a.createElement(Ze.a,{path:"/coins",exact:!0},r.a.createElement(Qe,null)),r.a.createElement(Ze.a,{path:"/coins/:id",exact:!0},r.a.createElement(Ve,null)),r.a.createElement(Ze.a,{path:"/cart",exact:!0},r.a.createElement(Xe,null)))},en=t(32),nn=t(2),tn={firstName:"",secondName:"",logged:!1},an={login:"",password:"",repeatPassword:"",token:""},rn={token:"",coins:null,advancedSearch:!1,adSearchInfo:""},on={country:"",composition:"",quality:"",priceFrom:"",priceTo:"",yearFrom:"",yearTo:""},cn=Object(l.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_FIRST_NAME":return Object(nn.a)(Object(nn.a)({},e),{},{firstName:n.payload});case"CHANGE_SECOND_NAME":return Object(nn.a)(Object(nn.a)({},e),{},{secondName:n.payload});case"CHANGE_LOGGED":return Object(nn.a)(Object(nn.a)({},e),{},{logged:n.payload});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_LOGIN":return Object(nn.a)(Object(nn.a)({},e),{},{login:n.payload});case"CHANGE_PASSWORD":return Object(nn.a)(Object(nn.a)({},e),{},{password:n.payload});case"CHANGE_REPEAT_PASSWORD":return Object(nn.a)(Object(nn.a)({},e),{},{repeatPassword:n.payload});case"SUBMIT_FORM":return Object(nn.a)(Object(nn.a)({},e),{},{token:n.payload.token});default:return e}},homepage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOG_OUT":return Object(nn.a)(Object(nn.a)({},e),{},{token:n.payload});case"HANDLE_SEARCH":return Object(nn.a)(Object(nn.a)({},e),{},{coins:n.payload});case"TOGGLE_ADVANCED_SEARCH":return Object(nn.a)(Object(nn.a)({},e),{},{advancedSearch:!e.advancedSearch});case"GET_ADVANCED_SEARCH_INFO":return Object(nn.a)(Object(nn.a)({},e),{},{adSearchInfo:n.payload});default:return e}},adSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_COUNTRY":return Object(nn.a)(Object(nn.a)({},e),{},{country:n.payload});case"CHANGE_COMPOSITION":return Object(nn.a)(Object(nn.a)({},e),{},{composition:n.payload});case"CHANGE_QUALITY":return Object(nn.a)(Object(nn.a)({},e),{},{quality:n.payload});case"CHANGE_PRICE_FROM":return Object(nn.a)(Object(nn.a)({},e),{},{priceFrom:n.payload});case"CHANGE_PRICE_TO":return Object(nn.a)(Object(nn.a)({},e),{},{priceTo:n.payload});case"CHANGE_YEAR_FROM":return Object(nn.a)(Object(nn.a)({},e),{},{yearFrom:n.payload});case"CHANGE_YEAR_TO":return Object(nn.a)(Object(nn.a)({},e),{},{yearTo:n.payload});default:return e}}}),ln=t(33),un=t.n(ln),sn=Object(l.d)(cn,Object(l.a)(en.a,un.a));c.a.render(r.a.createElement(p.a,null," ",r.a.createElement(i.a,{store:sn}," ",r.a.createElement($e,null)," ")," "),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8effe1f3.chunk.js.map