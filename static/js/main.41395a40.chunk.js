(this["webpackJsonpstreaming-demo"]=this["webpackJsonpstreaming-demo"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var i=a(1),o=a(2),s=a(4),m=a(3),u=(a(14),function(e){return r.a.createElement("div",{className:"custom pa2 tc bg-light-green dib br3 ma1 grow bw2 shadow-5"},r.a.createElement("img",{alt:"movie",src:e.url}),r.a.createElement("div",{className:"words"},r.a.createElement("h6",null," ",e.name," ")))}),h=function(e){var t=e.StreamingDetails,a=t.map((function(e,a){return r.a.createElement(u,{key:t[a].title,name:t[a].title,url:t[a].images["Poster Art"].url})}));return r.a.createElement("div",null,a)},g=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"search",placeholder:"search by title",onChange:t}))},E=(a(15),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("nav",{className:"zone sticky"},r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",{className:"push"}," DEMO Streaming "),r.a.createElement("li",null,r.a.createElement("a",{href:"www.google.com"},"Contact")),r.a.createElement("li",null," ",r.a.createElement("a",{href:"www.google.com"}," Start your free trial ")," ")),r.a.createElement("ul",{className:"current-nav"},r.a.createElement("div",{className:"screen"}," Popular titles "))))}),f=(a(16),function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{id:"links"},r.a.createElement("a",{href:"/home/"}," Home")," |",r.a.createElement("a",{href:"/terms/"}," Terms and Conditions")," |",r.a.createElement("a",{href:"/privacy/"}," Privacy Policy")," |",r.a.createElement("a",{href:"/collection/"}," Collection Statement")," |",r.a.createElement("a",{href:"/help/"}," Help")," |",r.a.createElement("a",{href:"/manage/"}," Manage Account")))}),d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"33rem"}},e.children)},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Something has gone wrong... "):this.props.children}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(t.target.value)},e.state={StreamingDetails:[],searchfield:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then((function(e){return e.json()})).then((function(t){return e.setState({StreamingDetails:t.entries})}))}},{key:"render",value:function(){var e=this,t=0,a=this.state.StreamingDetails.filter((function(a){return a.releaseYear>2010&&"movie"===a.programType&&t<=21&&a.title.toLowerCase().includes(e.state.searchfield.toLowerCase())&&t++,a.releaseYear>2010&&"movie"===a.programType&&t<=21&&a.title.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return a.sort((function(e,t){return e.title>t.title?1:-1})),0===this.state.StreamingDetails.length?r.a.createElement("h1",null," Loading "):r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement(E,null)),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement("div",{className:"tc"},r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(h,{StreamingDetails:a})))),r.a.createElement("section",null,r.a.createElement(f,null)))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={StreamingDetails:[],searchfield:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json").then((function(e){return e.json()})).then((function(t){return e.setState({StreamingDetails:t.entries})}))}},{key:"render",value:function(){var e=this,t=0,a=this.state.StreamingDetails.filter((function(a){return a.releaseYear>2010&&"series"===a.programType&&t<=21&&a.title.toLowerCase().includes(e.state.searchfield.toLowerCase())&&t++,a.releaseYear>2010&&"series"===a.programType&&t<=21&&a.title.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.StreamingDetails.length?r.a.createElement("h1",null," Loading "):r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement(E,null)),r.a.createElement(d,null,r.a.createElement("div",{className:"tc"},r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(h,{StreamingDetails:a}))),r.a.createElement("section",null,r.a.createElement(f,null)))}}]),a}(n.Component),b=(a(17),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).changeToMovies=function(t){e.setState({navPage:"movie"})},e.changeToShows=function(t){e.setState({navPage:"series"})},e.state={navPage:"titleScreen"},e}return Object(o.a)(a,[{key:"render",value:function(){return"movie"===this.state.navPage?r.a.createElement(p,null):"series"===this.state.navPage?r.a.createElement(S,null):r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement(E,null)),r.a.createElement(d,null,r.a.createElement("section",{className:"buttonSection"},r.a.createElement("button",{onClick:this.changeToMovies,className:"ma4 eachButton"},"MOVIES"),r.a.createElement("button",{onClick:this.changeToShows,className:"ma4"},"SERIES"))),r.a.createElement("section",null,r.a.createElement(f,null)))}}]),a}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.41395a40.chunk.js.map