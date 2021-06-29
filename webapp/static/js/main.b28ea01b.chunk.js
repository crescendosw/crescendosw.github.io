(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var i,a=n(8),s=n.n(a),r=n(10),l=n.n(r),o=(n(18),n(19),n(1)),u=n(2),c=n(3),d=n(5),m=n(4),p=n(11),b=n.n(p),h=n(12),j=n(13),v=n(6);var g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).initialTempo=void 0,i.songLength=void 0,i.instrument=void 0,i.nodes={},i.ac=new j.a,i.state={playing:!1,initialTempo:0,songLength:0},i._play=i._play.bind(Object(c.a)(i)),i}return Object(u.a)(n,[{key:"_handleEvent",value:function(e){var t=100;if("Note on"===e.name){var n;switch(e.channel){case 1:t=e.velocity*(function(){var e=document.getElementById("soprano-slider").value;return Number(e)}()/10);break;case 2:t=e.velocity*(function(){var e=document.getElementById("alto-slider").value;return Number(e)}()/10);break;case 3:t=e.velocity*(function(){var e=document.getElementById("tenor-slider").value;return Number(e)}()/10);break;case 4:t=e.velocity*(function(){var e=document.getElementById("bass-slider").value;return Number(e)}()/10)}var i=null===(n=this.instrument)||void 0===n?void 0:n.play(e.noteName,this.ac.currentTime,{gain:t});this.nodes[e.channel]&&this.nodes[e.channel].stop(),this.nodes[e.channel]=i}else"Note off"===e.name&&this.nodes[e.channel]&&(this.nodes[e.channel].stop(),delete this.nodes[e.channel])}},{key:"_play",value:function(){if(this.state.playing)return i.pause(),void this.setState({playing:!1});this.setState({playing:!0});var e=window.navigator.userAgent.includes("Mobile")?"acoustic_grand_piano-mp3.js":"acoustic_grand_piano-ogg.js",t=this._instrumentLoaded.bind(this);b.a.instrument(this.ac,e).then(t)}},{key:"_instrumentLoaded",value:function(e){var t=this;this.instrument=e;var n=this._handleEvent.bind(this);fetch("447_and_can_it_be.mid").then((function(e){return e.arrayBuffer()})).then((function(e){return function(e){(i=new h.a.Player(n)).loadArrayBuffer(e),t.setState({initialTempo:i.getTempo()}),t.setState({songLength:i.getSongTime()}),i.play()}(e)}))}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{id:"slider-form",children:[Object(v.jsx)("label",{children:"Soprano:"}),Object(v.jsx)("input",{type:"range",id:"soprano-slider",className:"sliders",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Alto:"}),Object(v.jsx)("input",{type:"range",id:"alto-slider",className:"sliders",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Tenor:"}),Object(v.jsx)("input",{type:"range",id:"tenor-slider",className:"sliders",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Bass:"}),Object(v.jsx)("input",{type:"range",id:"bass-slider",className:"sliders",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:"Tempo:"}),Object(v.jsx)("input",{type:"range",id:"tempo-slider",defaultValue:.5,min:0,max:1,step:.01}),Object(v.jsx)("br",{})]}),Object(v.jsx)("output",{children:"Tempo: "}),Object(v.jsx)("output",{id:"tempo-output",children:this.state.initialTempo}),Object(v.jsx)("output",{children:"Time: "}),Object(v.jsx)("output",{id:"time-output",children:"0"}),Object(v.jsxs)("div",{id:"bottom-div",children:[Object(v.jsx)("input",{type:"range",id:"time-slider",defaultValue:0,min:0,max:this.state.songLength,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{id:"play-button",onClick:this._play,children:this.state.playing?"pause":"play"})]})]})}},{key:"componentDidMount",value:function(){var e,t=this,n=document.getElementById("tempo-slider"),a=document.getElementById("tempo-output"),s=document.getElementById("time-slider"),r=document.getElementById("time-output");n.addEventListener("input",(function(){Number(n.value)<.5?e=t.state.initialTempo*(1.5*Number(n.value)+.25):.5===Number(n.value)?e=t.state.initialTempo:Number(n.value)>.5&&(e=t.state.initialTempo*(6*Number(n.value)-2)),a.innerHTML=Math.round(e).toString()})),n.addEventListener("mouseup",(function(){i.setTempo(e)})),s.addEventListener("input",(function(){r.innerHTML=s.value.toString()})),s.addEventListener("mouseup",(function(){i.skipToPercent(Number(s.value)/i.getSongTime())}))}}]),n}(s.a.Component);var f=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(g,{})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(f,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.b28ea01b.chunk.js.map