(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,o){},17:function(t,n,o){"use strict";o.r(n);var e=o(4),c=o.n(e),r=o(5),a=o(6),s=o(7),i=o(9),u=o(8),d=o(3),l=o.n(d),f=o(1),h=o.n(f),b=(o(15),o(0)),j=function(t){var n=t.goods;return Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(t){Object(i.a)(o,t);var n=Object(u.a)(o);function o(){var t;Object(a.a)(this,o);for(var e=arguments.length,c=new Array(e),r=0;r<e;r++)c[r]=arguments[r];return(t=n.call.apply(n,[this].concat(c))).state={goods:[]},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=Object(r.a)(l.a.mark((function t(){var n=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p().then((function(t){n.setState({goods:t})}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Dynamic list of Goods"}),Object(b.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){p().then((function(n){t.setState({goods:n})}))},children:"Load all goods"}),Object(b.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){p().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(n){t.setState({goods:n})}))},children:"Load 5 first goods"}),Object(b.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){p().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(n){t.setState({goods:n})}))},children:"Load red goods"}),Object(b.jsx)(j,{goods:this.state.goods})]})}}]),o}(h.a.Component);c.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7efe66b2.chunk.js.map