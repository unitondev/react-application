(this["webpackJsonpreact-application"]=this["webpackJsonpreact-application"]||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){},45:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),o=t(15),a=t.n(o),i=(t(39),t.p+"static/media/logo.6ce24c58.svg"),l=(t(40),t(22)),u=t(23),s=t(13),d=t(27),h=t(26),C=t(65),j=t(64),b=Object(C.a)(j.a)({margin:"10px"}),k=t(2);var m=function(e){var n=e.handleIncrementClick,t=e.handleDecrementClick,c=e.handleResetClick,r=e.counterValue;return Object(k.jsxs)("div",{children:[Object(k.jsx)(b,{variant:"contained",className:"button incrementButton",onClick:n,children:"increment"}),Object(k.jsx)(b,{variant:"contained",className:"button decrementButton",onClick:t,children:"decrement"}),Object(k.jsx)(b,{variant:"contained",className:"button resetButton",onClick:c,children:"reset"}),Object(k.jsx)("span",{className:"CounterValue",children:r})]})},p=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=n.call(this,e)).state={counterValue:0},c.props=e,c.handleIncrementClick=c.handleIncrementClick.bind(Object(s.a)(c)),c.handleDecrementClick=c.handleDecrementClick.bind(Object(s.a)(c)),c.handleResetClick=c.handleResetClick.bind(Object(s.a)(c)),c}return Object(u.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps in CounterContainer"),e.countersCount>this.props.countersCount&&this.handleEvenValue(),e.countersCount<this.props.countersCount&&this.handleOddValue()}},{key:"incrementValue",value:function(){this.setState((function(e){return{counterValue:++e.counterValue}}))}},{key:"decrementValue",value:function(){this.setState((function(e){return{counterValue:--e.counterValue}}))}},{key:"handleIncrementClick",value:function(e){this.incrementValue()}},{key:"handleDecrementClick",value:function(e){this.decrementValue()}},{key:"handleResetClick",value:function(e){this.setState((function(e){return{counterValue:0}}))}},{key:"handleEvenValue",value:function(){this.state.counterValue%2===0&&this.incrementValue()}},{key:"handleOddValue",value:function(){this.state.counterValue%2===1&&this.decrementValue()}},{key:"shouldComponentUpdate",value:function(e,n){return console.log("shouldComponentUpdate in CounterContainer"),n.counterValue===this.state.counterValue?(console.log("shouldComponentUpdate in CounterContainer returns false"),!1):(console.log("shouldComponentUpdate in CounterContainer returns true"),!0)}},{key:"render",value:function(){return console.log("render in CounterContainer"),Object(k.jsx)(m,{handleIncrementClick:this.handleIncrementClick,handleDecrementClick:this.handleDecrementClick,handleResetClick:this.handleResetClick,counterValue:this.state.counterValue})}}]),t}(r.a.Component);t(45);var v=function(e){for(var n=e.handleAddCounterClick,t=e.handleRemoveCounterClick,c=e.handleRestartCountersClick,r=e.countersCount,o=[],a=0;a<r;a++)o.push(Object(k.jsx)("li",{children:Object(k.jsx)(p,{countersCount:r})},a.toString()));return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(b,{variant:"contained",color:"primary",onClick:n,children:"Add Counter"}),Object(k.jsx)(b,{variant:"contained",color:"primary",onClick:t,children:"Remove Counter"}),Object(k.jsx)(b,{variant:"contained",color:"primary",onClick:c,children:"Restart Counters"}),Object(k.jsx)("ul",{children:o})]})})},O=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=n.call(this,e)).state={countersCount:1},c.handleAddCounterClick=c.handleAddCounterClick.bind(Object(s.a)(c)),c.handleRemoveCounterClick=c.handleRemoveCounterClick.bind(Object(s.a)(c)),c.handleRestartCountersClick=c.handleRestartCountersClick.bind(Object(s.a)(c)),c}return Object(u.a)(t,[{key:"handleAddCounterClick",value:function(e){this.setState((function(e){return{countersCount:++e.countersCount}}))}},{key:"handleRemoveCounterClick",value:function(e){this.state.countersCount>1&&this.setState((function(e){return{countersCount:--e.countersCount}}))}},{key:"handleRestartCountersClick",value:function(e){this.setState((function(e){return{countersCount:1}}))}},{key:"render",value:function(){return console.log("render in CounterWrapperContainer"),Object(k.jsx)(v,{handleAddCounterClick:this.handleAddCounterClick,handleRemoveCounterClick:this.handleRemoveCounterClick,handleRestartCountersClick:this.handleRestartCountersClick,countersCount:this.state.countersCount})}}]),t}(r.a.Component),f=t(4),x=t(21);var V=function(){return Object(k.jsxs)(f.c,{children:[Object(k.jsx)(f.a,{exact:!0,path:"/",children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("header",{className:"App-header",children:[Object(k.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(k.jsx)(x.b,{to:"/counters",children:"Counters"})]})})}),Object(k.jsxs)(f.a,{path:"/counters",children:[Object(k.jsx)(O,{}),Object(k.jsx)("div",{children:Object(k.jsx)(x.b,{to:"/",children:"Home"})})]}),Object(k.jsx)(f.a,{path:"/",children:Object(k.jsx)("h1",{children:"404 Not Found"})})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(k.jsx)(x.a,{children:Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(V,{})})}),document.getElementById("root")),R()}},[[48,1,2]]]);
//# sourceMappingURL=main.97b7cc95.chunk.js.map