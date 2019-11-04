(this.webpackJsonpgravity=this.webpackJsonpgravity||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/gravity_logo.f38521b7.svg"},34:function(e,t,a){e.exports=a(53)},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=a(10),s=a(7),o=a(29),u=a(2),m=a(33),d=Object(s.combineReducers)({trails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRAILS":return t.trails;default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAKE_BOOKING":return[].concat(Object(m.a)(e),[t.booking]);default:return e}}}),h=(a(43),a(12)),E=a.n(h),p=a(16),f=a(17),b=a(18),O=a(20),g=a(19),N=a(21),v=a(11),S=function(){var e=Object(p.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:throw Error(a.statusText);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return e.map((function(e){return{id:e.id,name:e.name,stars:e.stars,summary:e.summary,descent:e.descent,difficulty:e.difficulty,conditionDate:e.conditionDate,conditionStatus:e.conditionStatus,latitude:e.latitude,longitude:e.longitude}}))},y=function(e){return{type:"GET_TRAILS",trails:e}},C=function(e){return{type:"MAKE_BOOKING",booking:e}},L=(a(45),a(30)),k=a.n(L),j=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{className:"Header-img",src:k.a,alt:"Gravity logo"})),r.a.createElement("h2",{className:"Header-h2"},"SHUTTLE SERVICE"))},A=(a(47),function(e){return r.a.createElement("section",{className:"Location"},r.a.createElement("h3",null,"CHOOSE A LOCATION"),r.a.createElement(u.b,{to:"/trails",onClick:function(){return e.getLatLon(39.7392,104.9903)}},r.a.createElement("button",{className:"Location-btn"},"DENVER")),r.a.createElement(u.b,{to:"/trails",onClick:function(){return e.getLatLon(40.015,105.2705)}},r.a.createElement("button",{className:"Location-btn"},"BOULDER")))}),R=(a(48),function(){return r.a.createElement("section",{className:"Modal"},r.a.createElement("h3",null,"YOUR SHUTTLE IS BOOKED"),r.a.createElement("h3",null,"A CONFIRMATION EMAIL HAS BEEN SENT"),r.a.createElement("h3",null,"GET READY TO DROP IN!"),r.a.createElement(u.b,{to:"/trails",className:"link"},r.a.createElement("h5",null,"BACK TO TRAILS")))}),I=a(32),x=(a(49),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(O.a)(this,Object(g.a)(t).call(this))).handleChange=function(t){e.setState(Object(I.a)({},t.target.name,t.target.value)),""!==e.state.name&&""!==e.state.email&&""!==e.state.riders&&""!==e.state.bikes&&""!==e.state.date&&""!==e.state.starttime&&""!==e.state.endtime&&e.setState({formReady:!0})},e.handleSubmit=function(t){var a=e.props.makeBooking;t.preventDefault(),a(e.state),e.setRedirect()},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(v.a,{to:"/confirmation"})},e.state={name:"",email:"",riders:"",bikes:"",date:"",starttime:"",endtime:"",formReady:!1,redirect:!1},e}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"ShuttleForm"},r.a.createElement("h3",null,"BOOK YOUR SHUTTLE"),r.a.createElement("input",{className:"ShuttleForm-input",name:"name",type:"text",placeholder:"Enter Name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"email",type:"text",placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"riders",type:"number",placeholder:"Enter Number Of Riders",value:this.state.riders,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"bikes",type:"number",placeholder:"Enter Number Of Bikes",value:this.state.bikes,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"date",type:"text",placeholder:"Enter Date (mm/dd)",value:this.state.date,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"starttime",type:"text",placeholder:"Enter Start Time (00:00 am/pm)",value:this.state.starttime,onChange:this.handleChange}),r.a.createElement("input",{className:"ShuttleForm-input",name:"endtime",type:"text",placeholder:"Enter End Time (00:00 am/pm)",value:this.state.endtime,onChange:this.handleChange}),r.a.createElement("p",{className:this.state.formReady?"ShuttleForm-p-hidden":"ShuttleForm-p"},"PLEASE FILL OUT ALL INPUTS"),this.renderRedirect(),r.a.createElement("button",{disabled:!this.state.formReady,type:"button",className:"ShuttleForm-btn",onClick:this.handleSubmit},"SUBMIT BOOKING"),r.a.createElement(u.b,{to:"/trails",className:"link"},r.a.createElement("h5",null,"BACK TO TRAILS")))}}]),t}(n.Component)),B=Object(l.b)(null,(function(e){return Object(s.bindActionCreators)({makeBooking:C},e)}))(x),D=(a(50),function(e){var t=e.name,a=e.stars,n=e.descent;return r.a.createElement("section",{className:"Trail",id:"trail"},r.a.createElement("p",{className:"Trail-p stars"},a," ","Stars"),r.a.createElement("p",{className:"Trail-p name"},t),r.a.createElement("p",{className:"Trail-p descent"},n," ","ft Descent"),r.a.createElement(u.b,{to:"/shuttle"},r.a.createElement("button",{className:"Trail-btn"},"BOOK")))}),w=(a(51),Object(l.b)((function(e){return{trails:e.trails}}))((function(e){var t=e.trails.map((function(e){return r.a.createElement(D,{key:e.id,id:e.id,name:e.name,stars:e.stars,difficulty:e.difficulty,descent:e.descent,conditionDate:e.conditionDate,conditionStatus:e.conditionStatus})}));return r.a.createElement("div",{className:"TrailsContainer"},r.a.createElement("h3",null,"PICK YOUR TRAIL"),t,r.a.createElement(u.b,{to:"/",className:"link"},r.a.createElement("h5",null,"BACK TO LOCATIONS")))}))),F=(a(52),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getLatLon=function(){var e=Object(p.a)(E.a.mark((function e(t,n){var r,c,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.getTrails,e.next=3,S("https://www.mtbproject.com/data/get-trails?lat=".concat(t,"&lon=-").concat(n,"&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a"));case 3:c=e.sent,i=T(c.trails),r(i);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(N.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v.b,{path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(A,{getLatLon:e.getLatLon})}}),r.a.createElement(v.b,{exact:!0,path:"/trails",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(v.b,{exact:!0,path:"/shuttle",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(v.b,{exact:!0,path:"/confirmation",render:function(){return r.a.createElement(R,null)}}))}}]),t}(n.Component)),K=Object(l.b)(null,(function(e){return Object(s.bindActionCreators)({getTrails:y},e)}))(F),U=Object(s.createStore)(d,Object(o.composeWithDevTools)()),H=r.a.createElement(l.a,{store:U},r.a.createElement(u.a,null,r.a.createElement(K,null)));i.a.render(H,document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.46ed9702.chunk.js.map