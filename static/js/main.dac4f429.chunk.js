(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),o=n.n(c),r=(n(25),n(11)),l=n(20),i=(n(26),n(8)),d=n(0);function j(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}j.defaultProps={title:"Your Title Here",searchBar:!0};var b=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},h=function(e){return Object(d.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h3",{className:"my-3",children:"\u231aTodos List-By Praveen\xa9"}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return console.log(t.sno),Object(d.jsx)(b,{todo:t,onDelete:e.onDelete},t.sno)}))]})},u=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),s=Object(r.a)(n,2),c=s[0],o=s[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),j=i[0],b=i[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&j?(t(c,j),o(""),b("")):alert("Title or Description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:j,onChange:function(e){return b(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"This is an about component"}),Object(d.jsx)("p",{children:"They list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important."}),Object(d.jsx)("p",{children:"1. Increases productivity\u231a"}),Object(d.jsx)("p",{children:"2. Improves memory\ud83d\udcdd"}),Object(d.jsx)("p",{children:"3. Reduces stress\ud83d\udcaa"}),Object(d.jsx)("p",{children:"4. Allows for more personal time\u23f2\ufe0f"}),Object(d.jsx)("p",{children:"5. Reduces anxiety and improves mental health\u2764\ufe0f\u200d\ud83e\ude79"}),Object(d.jsx)("p",{children:"6. Provides a sense of accomplishment\ud83d\udd25"}),Object(d.jsx)("p",{children:"7. Set deadlines for each goal\ud83e\udd67"})]})},O=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),b(o.filter((function(t){return t!==e}))),console.log("deleted",o),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};b([].concat(Object(l.a)(o),[n])),console.log(n)},s=Object(a.useState)(e),c=Object(r.a)(s,2),o=c[0],b=c[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j,{title:"My Todos List\ud83c\udfaf-Praveen Kumar\ud83e\uddd1\u200d\ud83d\udcbb",searchBar:!0}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addTodo:n}),Object(d.jsx)(h,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(u,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.dac4f429.chunk.js.map