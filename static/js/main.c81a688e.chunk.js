(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),o=n(5),l=n(8),r=n(7),i=n(1),d=n(6),u=n.n(d),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={selectedGood:"Jam"},t.handleClickOnButton=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){return t.setState({selectedGood:e})}},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[e?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClickOnButton()})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:h.map((function(n){var c=n===e;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":c}),children:[Object(b.jsx)("td",{children:c?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t.handleClickOnButton(),children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:t.handleClickOnButton(n),children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:n})]},n)}))})})]})}}]),n}(i.Component);a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c81a688e.chunk.js.map