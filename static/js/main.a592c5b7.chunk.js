(this.webpackJsonpgravity=this.webpackJsonpgravity||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/gravity_logo.f38521b7.svg"},34:function(e,t,a){e.exports=a(53)},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=a(10),s=a(7),o=a(29),u=a(2),m=a(33),h=Object(s.combineReducers)({trails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRAILS":return t.trails;default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAKE_BOOKING":return[].concat(Object(m.a)(e),[t.booking]);default:return e}}}),d=(a(43),a(12)),E=a.n(d),p=a(16),f=a(17),b=a(18),O=a(20),N=a(19),g=a(21),T=a(11),v=function(){var e=Object(p.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:throw Error(a.statusText);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return e.map((function(e){return{id:e.id,name:e.name,stars:e.stars,summary:e.summary,descent:e.descent,difficulty:e.difficulty,conditionDate:e.conditionDate,conditionStatus:e.conditionStatus,latitude:e.latitude,longitude:e.longitude}}))},C=function(e){return{type:"GET_TRAILS",trails:e}},y=function(e){return{type:"MAKE_BOOKING",booking:e}},L=(a(45),a(30)),A=a.n(L),k=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{className:"Header-img",src:A.a,alt:"Gravity logo"})),r.a.createElement("h2",{className:"Header-h2"},"SHUTTLE SERVICE"))},R=(a(47),function(e){return r.a.createElement("section",{className:"Location"},r.a.createElement("h3",null,"CHOOSE A LOCATION"),r.a.createElement(u.b,{to:"/trails/denver"},r.a.createElement("button",{onClick:function(){return e.getLatLon(39.7392,104.9903)},className:"Location-btn"},"DENVER")),r.a.createElement(u.b,{to:"/trails/boulder"},r.a.createElement("button",{onClick:function(){return e.getLatLon(40.015,105.2705)},className:"Location-btn"},"BOULDER")))}),I=(a(48),function(){return r.a.createElement("section",{className:"Modal"},r.a.createElement("h3",null,"YOUR SHUTTLE IS BOOKED"),r.a.createElement("h3",null,"A CONFIRMATION EMAIL HAS BEEN SENT"),r.a.createElement("h3",null,"GET READY TO DROP IN!"),r.a.createElement(u.b,{to:"/",className:"link"},r.a.createElement("h5",null,"BACK TO LOCATIONS")))}),j=a(32),x=(a(49),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(O.a)(this,Object(N.a)(t).call(this))).handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value)),""!==e.state.name&&""!==e.state.email&&""!==e.state.riders&&""!==e.state.bikes&&""!==e.state.date&&""!==e.state.starttime&&""!==e.state.endtime&&e.setState({formReady:!0})},e.handleSubmit=function(t){var a=e.props.makeBooking;t.preventDefault(),a(e.state),e.setRedirect()},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(T.a,{to:"/confirmation"})},e.state={name:"",email:"",riders:"",bikes:"",date:"",starttime:"",endtime:"",formReady:!1,redirect:!1},e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"ShuttleForm"},r.a.createElement("h2",null,this.props.match.location.pathname.split("/")[2].toUpperCase()),r.a.createElement("h3",null,"BOOK YOUR SHUTTLE"),r.a.createElement("input",{className:"ShuttleForm-input",name:"name",type:"text",placeholder:"Enter Name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"email",type:"text",placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"riders",type:"number",placeholder:"Enter Number Of Riders",value:this.state.riders,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"bikes",type:"number",placeholder:"Enter Number Of Bikes",value:this.state.bikes,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"date",type:"text",placeholder:"Enter Date (mm/dd)",value:this.state.date,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"starttime",type:"text",placeholder:"Enter Start Time (00:00 am/pm)",value:this.state.starttime,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"endtime",type:"text",placeholder:"Enter End Time (00:00 am/pm)",value:this.state.endtime,onChange:this.handleChange}),r.a.createElement("p",{className:this.state.formReady?"error-p-hidden":"error-p"},"PLEASE FILL OUT ALL INPUTS"),this.renderRedirect(),r.a.createElement("button",{disabled:!this.state.formReady,type:"button",className:"ShuttleForm-btn",onClick:this.handleSubmit},"SUBMIT BOOKING"),r.a.createElement(u.b,{to:"/",className:"link"},r.a.createElement("h5",null,"BACK TO LOCATIONS")))}}]),t}(n.Component)),B=Object(l.b)(null,(function(e){return Object(s.bindActionCreators)({makeBooking:y},e)}))(x),D=(a(50),function(e){var t=e.name,a=e.stars,n=e.descent;return r.a.createElement("section",{className:"Trail",id:"trail"},r.a.createElement("p",{className:"Trail-p stars"},a," Stars"),r.a.createElement("p",{className:"Trail-p name"},t),r.a.createElement("p",{className:"Trail-p descent"},n," ft Descent"),r.a.createElement(u.b,{to:"/shuttle/".concat(t)},r.a.createElement("button",{className:"Trail-btn",id:t},"BOOK")))}),U=(a(51),Object(l.b)((function(e){return{trails:e.trails}}))((function(e){var t=e.trails,a=e.match,n=e.error,c=t.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id,name:e.name,stars:e.stars,difficulty:e.difficulty,descent:e.descent,conditionDate:e.conditionDate,conditionStatus:e.conditionStatus})}));return r.a.createElement("div",{className:"TrailsContainer"},r.a.createElement("h2",null,a.location.pathname.split("/")[2].toUpperCase()),r.a.createElement("h3",null,"PICK YOUR TRAIL"),c,r.a.createElement("h3",{className:"error-p"},n),r.a.createElement(u.b,{to:"/",className:"link"},r.a.createElement("h5",null,"BACK TO LOCATIONS")))}))),w=(a(52),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(O.a)(this,Object(N.a)(t).call(this))).getLatLon=function(){var t=Object(p.a)(E.a.mark((function t(a,n){var r,c,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.getTrails,t.prev=1,t.next=4,v("https://www.mtbproject.com/data/get-trails?lat=".concat(a,"&lon=-").concat(n,"&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a"));case 4:c=t.sent,i=S(c.trails),r(i),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({error:"THE TRAIL DATA MUST BE OUT RIDING, PLEASE TRY AGAIN LATER."});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}(),e.state={error:""},e}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(T.b,{path:"/",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(T.b,{exact:!0,path:"/",render:function(){return r.a.createElement(R,{getLatLon:e.getLatLon})}}),r.a.createElement(T.b,{exact:!0,path:"/trails/:location",render:function(t){return r.a.createElement(U,{match:t,error:e.state.error})}}),r.a.createElement(T.b,{exact:!0,path:"/shuttle/:trail",render:function(e){return r.a.createElement(B,{match:e})}}),r.a.createElement(T.b,{exact:!0,path:"/confirmation",render:function(){return r.a.createElement(I,null)}}))}}]),t}(n.Component)),K=Object(l.b)(null,(function(e){return Object(s.bindActionCreators)({getTrails:C},e)}))(w),F=Object(s.createStore)(h,Object(o.composeWithDevTools)()),G=r.a.createElement(l.a,{store:F},r.a.createElement(u.a,null,r.a.createElement(K,null)));i.a.render(G,document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a592c5b7.chunk.js.map