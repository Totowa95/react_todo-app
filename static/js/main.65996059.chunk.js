(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),o=n.n(c),r=(n(14),n(15),n(16),n(1)),i=n(8),m=n(3),u=function(e){var t=e.getTodo,n=Object(a.useState)(""),c=Object(m.a)(n,2),o=c[0],r=c[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(+new Date,o),r("")}},l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:function(e){var t=e.target;return r(t.value.trimLeft())}}))},s=n(5),d=n.n(s),p=function(e){var t=e.todo,n=e.complete,a=e.onDelete;return l.a.createElement("li",{className:d()({completed:t.completed})},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){n(t.id)}}),l.a.createElement("label",null,t.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){a(t.id)}})),l.a.createElement("input",{type:"text",className:"edit"}))},f=function(e){var t=e.todos,n=e.changeCompleted,a=e.deleteTodo,c=function(e){n(e)};return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(p,{todo:e,key:e.id,complete:c,onDelete:a})})))},E=function(e){var t=e.todosLeft,n=e.showTodos,a=e.clearCompleted,c=e.completedTodos;return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"".concat(t," items left")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected",onClick:function(e){e.preventDefault(),n("all")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",onClick:function(e){e.preventDefault(),n(!1)}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",onClick:function(e){e.preventDefault(),n(!0)}},"Completed"))),l.a.createElement("button",{type:"button",className:d()({"clear-completed":!0,"clear-visibility":!c}),onClick:function(){return a()}},"Clear completed"))};var b=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("all"),s=Object(m.a)(o,2),d=s[0],p=s[1];Object(a.useEffect)((function(){null!==localStorage.getItem("list")&&c(JSON.parse(localStorage.getItem("list")))}),[]),Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(n))}),[n]);var b=Object(a.useMemo)((function(){return n.filter((function(e){return"all"===d?e:e.completed===d}))}),[d,n]);return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos App"),l.a.createElement(u,{getTodo:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];c([].concat(Object(i.a)(n),[{id:e,title:t,completed:a}]))}})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n.every((function(e){return e.completed})),onClick:function(){n.length&&n.every((function(e){return e.completed}))?c(n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})}))):c(n.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))},readOnly:!0}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(f,{todos:b,changeCompleted:function(e){c(n.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},deleteTodo:function(e){c(n.filter((function(t){return t.id!==e})))}})),!n.length||l.a.createElement(E,{todosLeft:n.length,showTodos:p,clearCompleted:function(){c(n.filter((function(e){return!1===e.completed})))},completedTodos:n.some((function(e){return e.completed}))}))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.65996059.chunk.js.map