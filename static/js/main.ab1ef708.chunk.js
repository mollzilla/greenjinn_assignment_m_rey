(this.webpackJsonpgreenginn_assignment_m_rey=this.webpackJsonpgreenginn_assignment_m_rey||[]).push([[0],{17:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(13),s=n.n(i),o=(n(17),n(12)),l=n.n(o),u=n(14),j=n(5),p=n(56);function b(e){var t=e.description,n=e.value,r=Object(c.useState)(n),i=Object(j.a)(r,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){o("timestamp"===t?new Date(1e3*n).toLocaleString():"$ ".concat(parseFloat(n).toFixed(2)))}),[t,n]),Object(a.jsxs)("div",{className:"gj-number-label",children:[Object(a.jsx)("div",{className:"description",children:Object(a.jsx)("h4",{children:t})}),Object(a.jsx)("div",{className:"value",children:s})]})}var h=n(24);function d(e){var t=e.pair,n=Object(c.useState)([]),r=Object(j.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)([]),d=Object(j.a)(o,2),O=d[0],f=d[1];function v(){return(v=Object(u.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.bitstamp.net/api/v2/ticker/".concat(t.symbol));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,s(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){t.symbol?function(){v.apply(this,arguments)}():f([])}),[t]),Object(c.useEffect)((function(){!function(){var e=[];for(var t in i)e.push({description:t,value:i[t]});f(e)}()}),[i]),Object(a.jsx)("div",{children:Object(a.jsxs)(p.a,{elevation:3,className:"trading-pairs-paper",children:[Object(a.jsx)("h2",{children:t.description?t.description:"Please select a pair"}),Object(a.jsx)("div",{className:"pairs-list",children:O.length>1&&O.map((function(e,t){return Object(c.createElement)(b,Object(h.a)(Object(h.a)({},e),{},{key:t}))}))})]})})}var O=n(57);function f(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],h=s[1],d=Object(c.useState)(!0),f=Object(j.a)(d,2),v=f[0],m=f[1];function x(){return(x=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([fetch("https://cors-anywhere.herokuapp.com/bitstamp.net/api/v2/ticker/btcusd"),fetch("https://cors-anywhere.herokuapp.com/api.coinbase.com/v2/exchange-rates?currency=BTC"),fetch("https://cors-anywhere.herokuapp.com/api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD")]).then((function(e){var t=Object(j.a)(e,3),n=t[0],a=t[1],c=t[2];return Promise.all([n.json(),a.json(),c.json()])})).then((function(e){var t=Object(j.a)(e,3),n=t[0],a=t[1],c=t[2];console.log("bitstamp",n,"coinbase",a,"bitfinex",c),h([{name:"bitstamp",value:parseFloat(n.bid)},{name:"coinbase",value:parseFloat(a.data.rates.USD)},{name:"bitfinex",value:c[0][1]}]),m(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){return function(){if(3===o.length){console.log(o.map((function(e){return e.value})));var e=o.reduce((function(e,t){return e+t.value}),0)/o.length;r(e.toFixed(2))}}()}),[o]),Object(c.useEffect)((function(){return function(){return x.apply(this,arguments)}()}),[]),Object(a.jsx)("div",{className:"container-item",children:Object(a.jsxs)(p.a,{elevation:3,className:"average-container",children:[Object(a.jsx)("h2",{children:v?"Loading...":"Average Ticker Values"}),Object(a.jsxs)(p.a,{elevation:3,className:"trading-pairs-paper",children:[Object(a.jsx)("h3",{children:v?Object(a.jsx)(O.a,{}):"Single Ticker Values"}),Object(a.jsx)("div",{className:"single-values",children:o.length&&o.map((function(e){return Object(a.jsx)(b,{description:e.name,value:e.value},e.name)}))})]}),Object(a.jsxs)("div",{className:"average",children:[Object(a.jsx)("h3",{children:"Average Value"}),Object(a.jsxs)("h4",{children:["$ ",n]})]})]})})}var v=n(60);function m(e){var t=e.pairData,n=e.handlePairChange,c=e.clearPairSelection,r=e.pair;return Object(a.jsx)("div",{children:Object(a.jsxs)(p.a,{elevation:3,className:"trading-pairs-paper cosito-de-arriba",children:[Object(a.jsxs)("div",{className:"button-container header",children:[Object(a.jsx)("h4",{children:"Choose Pair"}),Object(a.jsx)(v.a,{onClick:function(){return c()},variant:"contained",color:"primary",className:"clear-pair-selection",children:"Clear pair selection"})]}),Object(a.jsx)("div",{className:"button-container",children:t.map((function(e,t){return Object(a.jsx)(v.a,{onClick:function(){var t,a;t=e.url_symbol,a=e.description,n(t,a)},variant:"contained",color:"primary",className:"".concat(e.url_symbol===r.symbol?"selected pair-button":"pair-button"),children:e.description},t)}))})]})})}function x(){var e=Object(c.useState)({symbol:"",description:""}),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],b=s[1];function h(){return(h=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,b(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),Object(a.jsx)("div",{className:"container-item",children:Object(a.jsxs)(p.a,{elevation:3,className:"trading-pairs-container",children:[Object(a.jsx)(m,{pair:n,pairData:o,handlePairChange:function(e,t){r({symbol:e,description:t})},clearPairSelection:function(){r({})}}),Object(a.jsx)(d,{pair:n})]})})}var g=n(58),y=n(59);function N(){return Object(a.jsx)("div",{children:Object(a.jsxs)(g.a,{className:"app-container",maxWidth:"xl",children:[Object(a.jsx)("h1",{children:"WELCOME TO MY GREENGINN ASSIGNMENT"}),"This will be the main container of the single page App.",Object(a.jsxs)(y.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",children:[Object(a.jsx)(f,{}),Object(a.jsx)(x,{})]})]})})}var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(N,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.ab1ef708.chunk.js.map