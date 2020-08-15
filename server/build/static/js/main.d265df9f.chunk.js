(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{39:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),s=a(3),o=a(18),i=a(9),u=a.n(i),m=function(e){var t=e.entry,a=e.deleteEntry,l=e.mealName;return Object(n.useEffect)((function(){return u.a.AutoInit()}),[]),r.a.createElement("tr",null,r.a.createElement("td",null,t.food.name),r.a.createElement("td",null,Math.round(t.food.calories*t.servings)),r.a.createElement("td",null,Math.round(t.food.protein*t.servings),"g"),r.a.createElement("td",null,Math.round(t.food.carbs*t.servings),"g"),r.a.createElement("td",null,Math.round(t.food.fat*t.servings),"g"),r.a.createElement("td",null,Math.round(t.servings)),r.a.createElement("td",null,r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){return a(t._id,l.toLowerCase())},className:"material-icons"},"delete")))},d=function(e){var t=e.entries,a=e.deleteEntry,n=e.mealName;return r.a.createElement("div",null,r.a.createElement("table",{className:"highlight centered responsive-table meal-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Calories"),r.a.createElement("th",null,"Protein"),r.a.createElement("th",null,"Carbs"),r.a.createElement("th",null,"Fat"),r.a.createElement("th",null,"Servings"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(m,{key:e._id,entry:e,deleteEntry:a,mealName:n})})))))},E=function(e){var t,a=e.mealName,n=e.mealItems,l=e.deleteEntry;return t=n&&0!==n.length?r.a.createElement(d,{mealName:a,entries:n,deleteEntry:l}):r.a.createElement("div",null,r.a.createElement("em",null,"No items added yet.")),r.a.createElement("div",{className:"z-depth-1 meal-display"},r.a.createElement("h4",null,a),t)},f=a(1),v=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(f.f)();return r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),""!==a&&c.push("/search/".concat(a))}},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Search for a food to add...",onChange:function(e){return l(e.target.value)},value:a})),r.a.createElement("div",{className:"centered"},r.a.createElement("button",{type:"submit",className:"btn waves-effect waves-light"},"Search")))},b=a(37),p=a.n(b),h=(a(55),a(75)),g=a(12),N=a.n(g),y=function(e,t){return N()({method:"post",url:"".concat("/api","/users/login"),data:{username:e,password:t}})},w=function(e,t){return N()({method:"post",url:"".concat("/api","/users/register"),data:{username:e,password:t}})},O=function(e,t){return e.calories+=t.food.calories*t.servings,e.protein+=t.food.protein*t.servings,e.carbs+=t.food.carbs*t.servings,e.fat+=t.food.fat*t.servings,e},j=function(e){var t={calories:0,protein:0,carbs:0,fat:0};return e.forEach((function(e){return e.reduce(O,t)})),t},k=function(e){var t=e.date,a=e.setDate,l=Object(n.useState)({breakfast:[],lunch:[],dinner:[],snacks:[]}),c=Object(s.a)(l,2),i=c[0],m=c[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),b=f[0],g=f[1];Object(n.useEffect)((function(){return u.a.AutoInit()}),[]),Object(n.useEffect)((function(){(function(e){var t=Object(h.a)(e,"yyyy-MM-dd"),a=window.localStorage.getItem("nutritionAppToken");return N()({method:"get",url:"".concat("/api","/days/").concat(t),headers:{Authorization:a}}).then((function(e){return e.data}))})(t).then((function(e){return m(e)})).catch((function(e){return console.error("Failed to fetch data")}))}),[t]);var y=function(e,a){var n=Object(o.a)({},i);n[a]=i[a].filter((function(t){return t._id!==e})),m(n),function(e,t,a){var n=Object(h.a)(t,"yyyy-MM-dd"),r=window.localStorage.getItem("nutritionAppToken");N()({method:"delete",url:"".concat("/api","/entries/").concat(e),headers:{Authorization:r},data:{date:n,mealName:a}})}(e,t,a)},w=j(Object.values(i));return r.a.createElement("div",{className:"container center-align"},r.a.createElement("div",{className:"home-header"},r.a.createElement("div",{className:"date-info"},r.a.createElement("h3",null,Object(h.a)(t,"MMMM do")),r.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light calendar-button",onClick:function(){return g(!b)}},r.a.createElement("i",{className:"material-icons"},"date_range"))),b&&r.a.createElement("div",null,r.a.createElement(p.a,{month:t,selectedDays:t,onDayClick:function(e){a(e)}})),r.a.createElement("div",{className:"food-search"},r.a.createElement(v,null))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",null,r.a.createElement("div",{className:"totals"},r.a.createElement("div",null,"Calories: ",w.calories),r.a.createElement("div",null,"Protein: ",w.protein,"g"),r.a.createElement("div",null,"Carbs: ",w.carbs,"g"),r.a.createElement("div",null,"Fat: ",w.fat,"g")),r.a.createElement(E,{mealName:"Breakfast",mealItems:i.breakfast,deleteEntry:y}),r.a.createElement(E,{mealName:"Lunch",mealItems:i.lunch,deleteEntry:y}),r.a.createElement(E,{mealName:"Dinner",mealItems:i.dinner,deleteEntry:y}),r.a.createElement(E,{mealName:"Snacks",mealItems:i.snacks,deleteEntry:y})))},S=function(e){var t=e.result,a=e.date,l=Object(n.useState)(1),c=Object(s.a)(l,2),i=c[0],m=c[1],d=Object(n.useState)("breakfast"),E=Object(s.a)(d,2),f=E[0],v=E[1];return r.a.createElement("li",null,r.a.createElement("div",{className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_down"),t.name,r.a.createElement("span",{className:"brand-name"}," (",t.brand,")")),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("ul",{className:"nutrition-info"},r.a.createElement("li",null,"Calories: ",Math.round(t.calories*(i||1))),r.a.createElement("li",null,"Protein: ",Math.round(t.protein*(i||1)),"g"),r.a.createElement("li",null,"Carbs: ",Math.round(t.carbs*(i||1)),"g"),r.a.createElement("li",null,"Fat: ",Math.round(t.fat*(i||1)),"g")),r.a.createElement("div",{className:"divider"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t){var a=Object(h.a)(t,"yyyy-MM-dd"),n=window.localStorage.getItem("nutritionAppToken");return N()({method:"post",url:"".concat("/api","/entries"),headers:{Authorization:n},data:{date:a,mealName:e.meal,foodInfo:{name:e.name,api_id:e.api_id,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,servings:e.servings}}})}(Object(o.a)({servings:i,meal:f},t),a).then((function(e){u.a.toast({html:"Food added!"})}))}},r.a.createElement("div",{className:"row search-options"},r.a.createElement("div",{className:"input-field col m2 s4"},r.a.createElement("span",null,"Servings:"),r.a.createElement("input",{type:"number",required:!0,value:i,onChange:function(e){e.target.value>=0&&m(e.target.value)}})),r.a.createElement("div",{className:"input-field col m4 s8"},r.a.createElement("span",null,"Meal:"),r.a.createElement("select",{required:!0,value:f,onChange:function(e){return v(e.target.value)}},r.a.createElement("option",{value:"breakfast",className:"r-option"},"Breakfast"),r.a.createElement("option",{value:"lunch"},"Lunch"),r.a.createElement("option",{value:"dinner"},"Dinner"),r.a.createElement("option",{value:"snacks"},"Snack")))),r.a.createElement("div",{style:{marginLeft:"1rem"}},r.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn"},"Add Food")))))},I=function(e){var t=e.date,a=Object(f.g)().query;Object(n.useEffect)((function(){return u.a.AutoInit()}));var l=Object(n.useState)([]),c=Object(s.a)(l,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(e){var t=window.localStorage.getItem("nutritionAppToken");return N()({method:"get",url:"".concat("/api","/foodsearch/").concat(e),headers:{Authorization:t}}).then((function(e){return e.data}))})(a).then((function(e){i(e)}))}),[a]),r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("h4",null,'Search results for "',a,'"'),r.a.createElement("ul",{className:"collapsible"},o.map((function(e){return r.a.createElement(S,{key:e.api_id,result:e,date:t})}))))},M=a(19),C=a.n(M),A=function(e){var t=e.setUser;Object(n.useEffect)((function(){return u.a.AutoInit()}),[]);var a=Object(n.useState)(""),l=Object(s.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),d=m[0],E=m[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),b=v[0],p=v[1],h=Object(n.useState)(!1),g=Object(s.a)(h,2),N=g[0],O=g[1];return r.a.createElement("div",{className:"container center-align"},r.a.createElement("div",{className:"z-depth-1 login-form"},r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons medium"},"account_circle"),r.a.createElement("h4",null,N?"Register":"Sign In")),b&&r.a.createElement("div",{className:"login-error"},b),r.a.createElement("form",{className:"row",onSubmit:function(e){var a;return C.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),n.prev=1,!N){n.next=8;break}return n.next=5,C.a.awrap(w(c,d));case 5:a=n.sent,n.next=11;break;case 8:return n.next=10,C.a.awrap(y(c,d));case 10:a=n.sent;case 11:window.localStorage.setItem("nutritionAppToken",a.data.token),t(!0),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),n.t0.response?p(n.t0.response.data.message):p("Login service is currently down");case 18:case"end":return n.stop()}}),null,null,[[1,15]])}},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",id:"username",value:c,onChange:function(e){return o(e.target.value)},required:!0,minLength:"6",maxLength:"30"}),r.a.createElement("label",{htmlFor:"username"},"Username:")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",id:"password",value:d,onChange:function(e){return E(e.target.value)},required:!0,minLength:"6",maxLength:"30"}),r.a.createElement("label",{htmlFor:"password"},"Password:")),r.a.createElement("div",{className:"col s12"},r.a.createElement("button",{className:"btn waves-effect waves-light login-button",type:"submit"},N?"Register":"Sign In"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){O(!N),o(""),E(""),p("")},className:"btn waves-effect waves-light register-button"},N?"Sign In":"Register"))))},x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"404"),r.a.createElement("h3",null,"Not Found"))},_=function(e){var t=e.date,a=e.setDate,n=e.user,l=e.setUser;return r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},!1!==n?r.a.createElement(k,{date:t,setDate:a}):r.a.createElement(A,{setUser:l})),r.a.createElement(f.a,{exact:!0,path:"/search/:query"},!1!==n?r.a.createElement(I,{date:t}):r.a.createElement(A,{setUser:l})),r.a.createElement(f.a,null,r.a.createElement(x,null)))},D=a(10),F=function(e){var t=e.user,a=e.setUser;return r.a.createElement("nav",{className:"blue-grey darken-3"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(D.b,{to:"/"},r.a.createElement("div",{className:"brand-logo left"},r.a.createElement("i",{className:"material-icons"},"fitness_center"),"Nutrition Tracker")),t&&r.a.createElement("div",{className:"right logout",onClick:function(){window.localStorage.removeItem("nutritionAppToken"),a(!1)}},"Log Out",r.a.createElement("i",{className:"material-icons"},"exit_to_app"))))},L=function(){var e=Object(n.useState)(new Date),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){window.localStorage.getItem("nutritionAppToken")&&u(!0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,r.a.createElement(F,{user:i,setUser:u}),r.a.createElement(_,{date:a,setDate:l,user:i,setUser:u})))};c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d265df9f.chunk.js.map