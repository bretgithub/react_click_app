(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:0,name:"Arya Stark",image:"assets/images/arya_stark.jpeg",isClicked:!1},{id:1,name:"Brienne of Tarth",image:"assets/images/brienne_of_tarth.jpg",isClicked:!1},{id:2,name:"Bronn",image:"/assets/images/bronn.jpg",isClicked:!1},{id:3,name:"Cersei Lannister",image:"assets/images/cersei_lannister.jpg",isClicked:!1},{id:4,name:"Daenerys Targaryen",image:"assets/images/daenerys_targaryen.jpg",isClicked:!1},{id:5,name:"Jamie Lannister",image:"assets/images/jamie_lannister.jpg",isClicked:!1},{id:6,name:"Jon Snow",image:"assets/images/jon_snow.jpeg",isClicked:!1},{id:7,name:"Margaery Tyrell",image:"assets/images/margaery_tyrell.jpg",isClicked:!1},{id:8,name:"Petyr Baelish",image:"assets/images/petyr_baelish.jpg",isClicked:!1},{id:9,name:"Samwell Tarly",image:"assets/images/samwell_tarly.jpg",isClicked:!1},{id:10,name:"Sansa Stark",image:"assets/images/sansa_stark.jpeg",isClicked:!1},{id:11,name:"Tyrion Lannister",image:"assets/images/tyrion_lannister.jpg",isClicked:!1}]},function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),s=t.n(r),c=(t(16),t(6)),o=t(1),l=t(2),m=t(4),u=t(3),g=t(5),h=(t(17),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"React Click Game")),i.a.createElement("li",null,"Score: ",this.score," | Top Score: ",this.topscore))))}}]),a}(i.a.Component)),d=(t(18),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Welcome to Westeros React Click Game"),i.a.createElement("h3",null,"Click on a character once and only once to defeat the Night King, if you click twice then Winter takes the 7 Kingdoms!")))}}]),a}(i.a.Component)),p=(t(19),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("img",{className:"click-image",src:this.props.image,alt:this.props.name,name:this.props.name,onClick:function(){return e.props.onClick(e.props.name)}})}}]),a}(i.a.Component)),k=t(9),j=(t(20),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,maxScore:12,message:"Click on a character to begin!",messageClass:"",characters:k},t.handleGame=function(e){var a=!1,n=t.state.characters.map(function(t){return t.name===e?!1===t.isClicked?(console.log("click"),Object(c.a)({},t,{isClicked:!0})):(a=!0,Object(c.a)({},t,{isClicked:!1})):t});a&&t.setState({characters:t.handleCharacters(n)})},t.handleCharacters=function(){return t.state.characters.map(function(e){return i.a.createElement(p,{image:e.image,name:e.name,key:e.id,onClick:t.handleGame})})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{score:this.state.score,topscore:this.state.topScore}),i.a.createElement(d,null),i.a.createElement("div",{className:"content"},this.handleCharacters()))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.6e0fb4a9.chunk.js.map