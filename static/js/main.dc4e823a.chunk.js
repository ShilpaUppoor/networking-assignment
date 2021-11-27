(this["webpackJsonpnetworking-assignment"]=this["webpackJsonpnetworking-assignment"]||[]).push([[0],{156:function(e,t,n){},158:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(20),c=n.n(s),r=n(144),o=n(54),l=n(63),u=n(133),d=n(134),j=n(119),p=n(36),h=n(76),b=n.n(h),f=n(115),O=n(39),m=n(72),v=n(116),y=n(117),x=function(){function e(){Object(v.a)(this,e),this.items=void 0,this.items=[]}return Object(y.a)(e,[{key:"enqueue",value:function(e){this.items.push(e)}},{key:"dequeue",value:function(){return this.isEmpty()?"Underflow":this.items.shift()}},{key:"front",value:function(){return this.isEmpty()?"No elements in Queue":this.items[0]}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"printQueue",value:function(){for(var e="",t=0;t<this.items.length;t++)e+=this.items[t]+" ";return e}}]),e}(),g=function(){function e(t){Object(v.a)(this,e),this.noOfVertices=void 0,this.AdjList=void 0,this.noOfVertices=t,this.AdjList=new Map}return Object(y.a)(e,[{key:"addVertex",value:function(e){this.AdjList.set(e,[])}},{key:"addEdge",value:function(e,t){this.AdjList.get(e).push(t),this.AdjList.get(t).push(e)}},{key:"printGraph",value:function(){var e,t=this.AdjList.keys(),n=Object(m.a)(t);try{for(n.s();!(e=n.n()).done;){var a,i=e.value,s=this.AdjList.get(i),c="",r=Object(m.a)(s);try{for(r.s();!(a=r.n()).done;){c+=a.value+" "}}catch(o){r.e(o)}finally{r.f()}console.log(i+" -> "+c)}}catch(o){n.e(o)}finally{n.f()}}},{key:"bfs",value:function(e,t){for(var n,a=[],i=[],s={},c=new x,r="",o=0;o<this.noOfVertices;o++)s[o]=!1,i[o]=Number.MAX_VALUE,a[o]=-1;for(s[e]=!0,c.enqueue(e),i[e]=0;!c.isEmpty();){var l=c.dequeue(),u=this.AdjList.get(l);for(var d in u){var j=u[d];if(!s[j]&&(s[j]=!0,i[j]=i[l]+1,a[j]=l,a[e]=-1,c.enqueue(j),j===t)){var p=[],h=t;for(p.push(h);-1!=a[h];)p.push(a[h]),h=a[h];n=i[t];for(var b=p.length-1;b>=0;b--)console.log(p[b]),r=""===r?p[b]:r+" -> "+p[b];return{shortestDistance:n,path:r}}}}}},{key:"dfs",value:function(e){this.DFSUtil(e,{})}},{key:"DFSUtil",value:function(e,t){t[e]=!0,console.log("vert",e);var n=this.AdjList.get(e);for(var a in n){var i=n[a];t[i]||(this.DFSUtil(i,t),console.log("get_elem",i))}}}]),e}(),w="SET_PERSON_NAME",E="SET_FRIEND",N="SET_FRIEND_LIST",S="SET_ALL_PEOPLE",T="SET_SHORTEST_DISTANCE",k="SET_PATH",C=function(e,t,n){return{type:N,payload:{person:e,friend:t,relationship:Object(O.isEmpty)(n)?"Friend":n}}},L=function(e){return{type:S,payload:e}},F={personName:"",friend:"",allPeople:[""],distance:0,path:"",friendList:[{person:"",friend:"",relationship:""}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(p.a)(Object(p.a)({},e),{},{personName:t.payload});case E:return Object(p.a)(Object(p.a)({},e),{},{friend:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{friendList:[].concat(Object(j.a)(e.friendList),[t.payload])});case S:return Object(p.a)(Object(p.a)({},e),{},{allPeople:[].concat(Object(j.a)(e.allPeople),[t.payload])});case T:return Object(p.a)(Object(p.a)({},e),{},{distance:t.payload});case k:return Object(p.a)(Object(p.a)({},e),{},{path:t.payload});default:return e}},I=Object(l.combineReducers)({connection:A}),_=Object(l.applyMiddleware)(d.a),P=Object(l.createStore)(I,Object(u.composeWithDevTools)(_)),D=(n(156),n(157),n(41)),q=n(236),V=n(234),M=n(57),R=n(238),U=n(239),W=(n(158),n(8)),B=q.a.Title,H=function(){var e=V.a.useForm(),t=Object(D.a)(e,1)[0],n=Object(a.useState)(!1),i=Object(D.a)(n,2),s=i[0],c=i[1],r=Object(o.b)(),l=Object(o.c)((function(e){return e.connection})).friendList;return Object(W.jsxs)("div",{className:"add-people",children:[Object(W.jsxs)(B,{className:"add-person-title",level:3,children:["It is said that all people on average are six or fewer social connections away from each other. Want to know how you are connected to a friend?",Object(W.jsx)(M.a,{type:"ghost",className:"count-me-in-button",onClick:function(){return c(!0)},children:"Count Me In!"})]}),Object(W.jsx)(R.a,{title:null,visible:s,footer:null,width:"25%",maskClosable:!1,className:"custom-add-modal",onCancel:function(){return c(!s)},centered:!0,wrapClassName:"add-person-popup-container",children:Object(W.jsxs)(V.a,{form:t,onFinish:function(e){var n=e.name,a=e.friend,i=e.relationship;Object(O.isEmpty)(n)||Object(O.isEmpty)(a)||r(function(e,t,n){return function(){var a=Object(f.a)(b.a.mark((function a(i){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i(C(e,t,n)),i(L(e)),i(L(t));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,a,i)),c(!1),t.resetFields()},initialValues:{name:"",friend:"",relationship:""},children:[Object(W.jsx)(V.a.Item,{labelCol:{span:24},wrapperCol:{span:24},label:"Enter your name",name:"name",children:Object(W.jsx)(U.a,{className:"custom-input"})}),Object(W.jsx)(V.a.Item,{labelCol:{span:24},wrapperCol:{span:24},label:"Enter another person's name",name:"friend",children:Object(W.jsx)(U.a,{className:"custom-input"})}),Object(W.jsx)(V.a.Item,{labelCol:{span:24},wrapperCol:{span:24},label:"What is your relationship ?",name:"relationship",children:Object(W.jsx)(U.a,{className:"custom-input"})}),Object(W.jsx)(M.a,{htmlType:"submit",className:"add-person-button",type:"primary",children:"Add"})]})}),1!==l.length&&Object(W.jsx)(B,{level:3,className:"list-of-people-title",children:"List of people added:"}),l.map((function(e){var t=e.person,n=e.relationship,a=e.friend;return!Object(O.isEmpty)(t)&&!Object(O.isEmpty)(a)&&Object(W.jsx)("ul",{className:"list-of-people-title",children:Object(W.jsxs)("li",{children:[t," is the ",n," of ",a,"."]})})}))]})},J=n(237),Q=n(240),z=(n(229),q.a.Text),G=q.a.Title,X=J.a.Option,K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.connection})),n=t.personName,s=t.allPeople,c=t.distance,r=t.path,l=Object(O.uniq)(s),u=Object(a.useState)(!1),d=Object(D.a)(u,2),j=d[0],p=d[1];return 1!==l.length?Object(W.jsxs)("div",{className:"check-connection",children:[Object(W.jsx)(G,{level:3,children:"Show Connections"}),Object(W.jsx)(z,{children:"Check how you are related by selecting two names in the list"}),Object(W.jsxs)(V.a,{onFinish:function(n){var a;console.log("finish"),p(!0),e((a=t,function(){var e=Object(f.a)(b.a.mark((function e(t){var n,i,s,c,r,o,l,u,d,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=a.allPeople,i=a.friendList,s=a.personName,c=a.friend,r=Object(O.uniq)(n),(o=r.indexOf(""))>-1&&r.splice(o,1),l=new g(r.length),u=0;u<r.length;u++)l.addVertex(r[u]);for(d=1;d<i.length;d++)l.addEdge(i[d].person,i[d].friend);void 0!==(j=l.bfs(s,c))&&(t((h=null===j||void 0===j?void 0:j.shortestDistance,{type:T,payload:h})),t((p=null===j||void 0===j?void 0:j.path,{type:k,payload:p})));case 9:case"end":return e.stop()}var p,h}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(W.jsxs)(Q.b,{direction:"horizontal",children:[Object(W.jsx)(V.a.Item,{wrapperCol:{span:24},name:"personOne",children:Object(W.jsx)(J.a,{placeholder:"Select",onChange:function(t){e(function(e){return{type:w,payload:e}}(t))},children:l.map((function(e){return!Object(O.isEmpty)(e)&&Object(W.jsx)(X,{value:e,children:e},e)}))})}),Object(W.jsx)(V.a.Item,{wrapperCol:{span:24},name:"personTwo",children:Object(W.jsx)(J.a,{placeholder:"Select",onChange:function(t){e(function(e){return{type:E,payload:e}}(t))},children:l.map((function(e){return!Object(O.isEmpty)(e)&&e!==n&&Object(W.jsx)(X,{value:e,children:e},e)}))})})]}),Object(W.jsx)(M.a,{htmlType:"submit",type:"ghost",className:"see-connection-button",children:"See Connection"})]}),j&&Object(W.jsx)(W.Fragment,{children:0===c?Object(W.jsx)(G,{level:4,children:"There are no mutual connection between the two users!"}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(G,{level:4,children:["The degree of seperation is ",c]}),Object(W.jsx)(G,{level:4,children:"The two users are connected as follows:"}),Object(W.jsx)(z,{children:r})]})})]}):Object(W.jsx)(i.a.Fragment,{})},Y=(n(230),n(235)),Z=(n(231),n.p+"static/media/logo.6ce24c58.svg"),$=q.a.Title,ee=function(){return Object(W.jsxs)("div",{className:"header-bar",children:[Object(W.jsx)(Y.a,{className:"logo",src:Z,preview:!1,width:"8vw"}),Object(W.jsx)($,{level:1,className:"header-title",children:"Social Connections"})]})},te=function(){return Object(W.jsxs)("div",{className:"app",children:[Object(W.jsx)(ee,{}),Object(W.jsxs)("div",{className:"app-content",children:[Object(W.jsx)(H,{}),Object(W.jsx)(K,{})]})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(W.jsx)(r.a,{children:Object(W.jsx)(o.a,{store:P,children:Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(te,{})})})}),document.getElementById("root")),ne()}},[[232,1,2]]]);
//# sourceMappingURL=main.dc4e823a.chunk.js.map