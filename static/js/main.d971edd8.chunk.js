(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:0,name:"Arya Stark",image:"assets/images/arya_stark.jpeg",isClicked:!1},{id:1,name:"Brienne of Tarth",image:"assets/images/brienne_of_tarth.jpg",isClicked:!1},{id:2,name:"Bronn",image:"assets/images/bronn.jpg",isClicked:!1},{id:3,name:"Cersei Lannister",image:"assets/images/cersei_lannister.jpg",isClicked:!1},{id:4,name:"Daenerys Targaryen",image:"assets/images/daenerys_targaryen.jpg",isClicked:!1},{id:5,name:"Jamie Lannister",image:"assets/images/jamie_lannister.jpg",isClicked:!1},{id:6,name:"Jon Snow",image:"assets/images/jon_snow.jpeg",isClicked:!1},{id:7,name:"Margaery Tyrell",image:"assets/images/margaery_tyrell.jpg",isClicked:!1},{id:8,name:"Petyr Baelish",image:"assets/images/petyr_baelish.jpg",isClicked:!1},{id:9,name:"Samwell Tarly",image:"assets/images/samwell_tarly.jpg",isClicked:!1},{id:10,name:"Sansa Stark",image:"assets/images/sansa_stark.jpeg",isClicked:!1},{id:11,name:"Tyrion Lannister",image:"assets/images/tyrion_lannister.jpg",isClicked:!1}]},function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(8),c=t.n(r),i=(t(16),t(6)),o=t(1),l=t(2),m=t(4),u=t(3),h=t(5),g=(t(17),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/bretgithub/react_click_app"},"React Click Game")),n.a.createElement("li",{className:"mobile-contact"},n.a.createElement("a",{href:"mailto:bret.allan@gmail.com?subject=I love your work on React!&body=Hi Bret, I'd love to speak with you about.."},"Contact Me")),n.a.createElement("li",{className:this.props.messageClass},this.props.message),n.a.createElement("li",null,"Score: ",this.props.score," | Top Score: ",this.props.topScore))))}}]),a}(n.a.Component)),d=(t(18),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"Welcome to Westeros React Click Game"),n.a.createElement("h3",null,"Click on a character once and only once to defeat the Night King, if you click twice then Winter takes the 7 Kingdoms!")))}}]),a}(n.a.Component)),p=(t(19),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("img",{className:"click-image",src:this.props.image,alt:this.props.name,name:this.props.name,onClick:function(){return e.props.onClick(e.props.name)}})}}]),a}(n.a.Component)),f=t(9),k=(t(20),function(e){function a(){var e,t;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,maxScore:12,message:"Click on a character to begin!",messageClass:"",characters:f},t.shuffle=function(e){for(var a,t,s=e.length;0!==s;)t=Math.floor(Math.random()*s),a=e[s-=1],e[s]=e[t],e[t]=a;return e},t.handleGame=function(e){var a=!1,s=t.state.characters.map(function(s){return s.name===e?!1===s.isClicked?(t.handleCorrect(),console.log("click"),Object(i.a)({},s,{isClicked:!0})):(a=!0,Object(i.a)({},s,{isClicked:!1})):s});a?t.setState({characters:t.shuffle(t.handleIncorrect()),messageClass:"incorrect"}):t.setState({characters:t.shuffle(t.handleWin(s))})},t.handleCorrect=function(){t.state.score+1>t.state.topScore&&t.setState({topScore:t.state.topScore+1}),t.state.score===t.state.maxScore?t.setState({score:t.state.score+1,message:"You've won, you saved the 7 Kingdoms",messageClass:"correct"}):t.setState({score:t.state.score+1,message:"You've guessed correctly",messageClass:"correct"})},t.handleWin=function(e){return t.state.score+1===t.state.maxScore?(t.setState({score:0,topScore:0}),e.map(function(e){return Object(i.a)({},e,{isClicked:!1})})):e},t.handleIncorrect=function(){return t.setState({score:0,message:"You guessed incorrectly, Winter is here"}),t.state.characters.map(function(e){return!0===e.isClicked?Object(i.a)({},e,{isClicked:!1}):e})},t.handleCharacters=function(){return t.state.characters.map(function(e){return n.a.createElement(p,{image:e.image,name:e.name,key:e.id,onClick:t.handleGame})})},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,{score:this.state.score,topScore:this.state.topScore,message:this.state.message,messageClass:this.state.messageClass}),n.a.createElement(d,null),n.a.createElement("div",{className:"content"},this.handleCharacters()))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.d971edd8.chunk.js.map