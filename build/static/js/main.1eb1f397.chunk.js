(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=a(2),s=a(17),m=l.a.createContext({employees:[],displayedEmployees:[],sortOrder:"desending"}),i=function(){console.log(m);var e=Object(n.useContext)(m),t=e.employees,a=e.handleSort;return l.a.createElement("div",{className:"employee-list-container"},l.a.createElement("table",{className:"employee-table"},l.a.createElement("thead",{className:"employee-table-heading"},l.a.createElement("tr",null,l.a.createElement("td",null,"image"),l.a.createElement("td",{onClick:function(){return a()}},"name ","descending"===t.sortOrder?"\u25b4":"\u25be"),l.a.createElement("td",null,"email"),l.a.createElement("td",null,"phone number"))),l.a.createElement("tbody",null,t.displayedEmployees.map((function(e){return l.a.createElement("tr",{className:"employee-table-row",key:e.login.uuid},l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone))})))))},u=function(){var e=Object(n.useContext)(m).handleSearch;return l.a.createElement("div",{className:"search-container"},l.a.createElement("label",{className:"search-label"},"Search"),l.a.createElement("input",{className:"search-input",placeholder:"Name",onChange:function(t){return e(t)}}))},d=a(13),p=a(14),y=a(18),E=a(15),f=a(19),b=function(e){function t(){return Object(d.a)(this,t),Object(y.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"nav-bar"},l.a.createElement("h1",null,"Employee Directory"))}}]),t}(n.Component),h=a(16),O=a.n(h),g=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},v=(a(42),function(){var e=Object(n.useState)({employees:[],displayedEmployees:[],sortOrder:"descending"}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){g().then((function(e){r(Object(o.a)({},a,{employees:e.data.results,displayedEmployees:e.data.results}))}))}),[]),l.a.createElement(n.Fragment,null,l.a.createElement(b,null),l.a.createElement(m.Provider,{value:{employees:a,handleSearch:function(e){var t=e.target.value;console.log(t),console.log(a.employees);var n=a.employees.filter((function(e){if(-1!=="".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase()).indexOf(t.toLowerCase()))return e}));r(Object(o.a)({},a,{displayedEmployees:n}))},handleSort:function(){console.log(a.displayedEmployees),"descending"===a.sortOrder?a.displayedEmployees.sort((function(e,t){return r(Object(o.a)({},a,{sortOrder:"ascending"})),console.log(e.name.first),e.name.first.localeCompare(t.name.first)})):a.displayedEmployees.sort((function(e,t){return r(Object(o.a)({},a,{sortOrder:"descending"})),t.name.first.localeCompare(e.name.first)}))}}},l.a.createElement(u,null),l.a.createElement("div",{className:"main-container"},l.a.createElement(i,null))))});c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1eb1f397.chunk.js.map