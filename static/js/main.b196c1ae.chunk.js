(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),i=n.n(a),s=(n(13),n(5)),l=n(3),c=n(4),u=n(7),g=n(6),h=(n(14),function(t){var e=t.goodsList;return r.a.createElement(r.a.Fragment,null,e.map((function(t){return r.a.createElement("li",{key:t},t)})))}),f=function(t){var e=t.filterByLength;return r.a.createElement("select",{defaultValue:"1",onChange:e},Array(10).fill("").map((function(t,e){return r.a.createElement("option",{value:e+1},e+1)})))},L=function(t){Object(u.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).goodMinLength=1,t.state={hideList:!0,goodsList:Object(s.a)(t.props.goodsList)},t.showList=function(){t.setState({hideList:!1})},t.reverseList=function(){t.setState((function(t){return{goodsList:t.goodsList.reverse()}}))},t.alphabetically=function(){t.setState((function(t){return{goodsList:t.goodsList.sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goodsList:t.goodsList.sort((function(t,e){return t.length-e.length}))}}))},t.resetList=function(){t.setState({goodsList:t.props.goodsList.filter((function(e){return e.length>=t.goodMinLength}))})},t.filterByLength=function(e){t.goodMinLength=+e.target.value,t.resetList()},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goodsList,n=t.hideList;return r.a.createElement("div",null,n&&r.a.createElement("button",{type:"button",onClick:this.showList},"Start"),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement(h,{goodsList:e})),r.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.alphabetically},"Alphabetically"),r.a.createElement("button",{type:"button",onClick:this.resetList},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),r.a.createElement(f,{filterByLength:this.filterByLength})))}}]),n}(r.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(){return r.a.createElement(L,{goodsList:d})};i.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b196c1ae.chunk.js.map