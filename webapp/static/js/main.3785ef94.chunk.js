(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n.n(i),s=n(10),r=n.n(s),l=(n(18),n(19),n(2)),u=n(3),o=n(1),d=n(5),m=n(4),c=n(11),p=n.n(c),h=n(12),b=n(13),g=n(6),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var i;Object(l.a)(this,n),(i=t.call(this,e)).initialTempo=void 0,i.initialTime=void 0,i.songLength=void 0,i.instrument=void 0,i.interval=void 0,i.nodes={},i.ac=new b.a,i.midiPlayer=void 0,i.state={playing:!1,initialTempo:"LOADING",initialTime:"0:00",songLength:0,instrumentIsLoaded:!1,experiencingUserInputOnTimeSlider:!1},i._handleEvent=i._handleEvent.bind(Object(o.a)(i)),i._instrumentLoaded=i._instrumentLoaded.bind(Object(o.a)(i)),i._play=i._play.bind(Object(o.a)(i)),i._getTempoValue=i._getTempoValue.bind(Object(o.a)(i)),i._setNewTime=i._setNewTime.bind(Object(o.a)(i)),i._setNewTempo=i._setNewTempo.bind(Object(o.a)(i)),i._displayTempo=i._displayTempo.bind(Object(o.a)(i)),i._getButtonText=i._getButtonText.bind(Object(o.a)(i)),i._displayTime=i._displayTime.bind(Object(o.a)(i)),i._getTimeValue=i._getTimeValue.bind(Object(o.a)(i)),i.midiPlayer=new h.a.Player(i._handleEvent);var a=window.navigator.userAgent.includes("Mobile")?"acoustic_grand_piano-mp3.js":"acoustic_grand_piano-ogg.js";return p.a.instrument(i.ac,a).then(i._instrumentLoaded),i}return Object(u.a)(n,[{key:"_getTimeValue",value:function(e){var t,n=0;return e<10?t="0"+Math.trunc(e):e<60?(n=0,t=Math.trunc(e).toString()):e%60===0?(n=Number(Math.trunc(e/60)),t="00"):(n=Number(Math.trunc(e/60)),t=(e%60).toString()),n+":"+t}},{key:"_getTempoValue",value:function(){var e=Number(this.state.initialTempo),t=document.getElementById("tempo-slider");return Number(t.value)<.5?e=Number(this.state.initialTempo)*(1.5*Number(t.value)+.25):Number(t.value)>.5&&(e=Number(this.state.initialTempo)*(6*Number(t.value)-2)),e}},{key:"_setNewTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!1});var e=document.getElementById("time-slider");this.midiPlayer.isPlaying()?(this.midiPlayer.skipToPercent(Number(e.value)),this.midiPlayer.play()):this.midiPlayer.skipToPercent(Number(e.value))}},{key:"_displayTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!0});var e=document.getElementById("time-slider"),t=document.getElementById("time-output"),n=Number(e.value)/100*this.state.songLength;t.innerHTML=this._getTimeValue(n)}},{key:"_setNewTempo",value:function(){this.midiPlayer.setTempo(this._getTempoValue())}},{key:"_displayTempo",value:function(){document.getElementById("tempo-output").innerHTML=Math.round(this._getTempoValue()).toString()}},{key:"_getButtonText",value:function(){return this.state.instrumentIsLoaded?this.midiPlayer.isPlaying()?"pause":"play":"loading"}},{key:"_getCurrentPercent",value:function(){return Math.abs(100-this.midiPlayer.getSongPercentRemaining())}},{key:"_getTimeOutput",value:function(){var e=this._getCurrentPercent()/100*this.state.songLength;return this.state.instrumentIsLoaded?this._getTimeValue(e):"LOADING"}},{key:"_handleEvent",value:function(e){var t=100;if("Note on"===e.name){switch(e.channel){case 1:t=e.velocity*(n._getSopranoValue()/10);break;case 2:t=e.velocity*(n._getAltoValue()/10);break;case 3:t=e.velocity*(n._getTenorValue()/10);break;case 4:t=e.velocity*(n._getBassValue()/10)}var i=this.instrument.play(e.noteName,this.ac.currentTime,{gain:t});this.nodes[e.channel]&&this.nodes[e.channel].stop(),this.nodes[e.channel]=i}else"Note off"===e.name&&this.nodes[e.channel]&&(this.nodes[e.channel].stop(),delete this.nodes[e.channel])}},{key:"_play",value:function(){if(this.state.instrumentIsLoaded)return this.state.playing?(this.midiPlayer.pause(),void this.setState({playing:!1})):(this.setState({playing:!0}),void this.midiPlayer.play())}},{key:"_instrumentLoaded",value:function(e){var t=this;this.setState({instrumentIsLoaded:!0}),this.instrument=e;fetch("447_and_can_it_be.mid").then((function(e){return e.arrayBuffer()})).then((function(e){return function(e){t.midiPlayer.loadArrayBuffer(e),t.setState({initialTempo:t.midiPlayer.getTempo().toString()}),t.setState({songLength:t.midiPlayer.getSongTime()}),t.setState({initialTime:"0:00"})}(e)}))}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{id:"slider-form",children:[Object(g.jsx)("label",{children:"Soprano:"}),Object(g.jsx)("input",{type:"range",id:"soprano-slider",defaultValue:1,min:0,max:2,step:.01}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Alto:"}),Object(g.jsx)("input",{type:"range",id:"alto-slider",defaultValue:1,min:0,max:2,step:.01}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Tenor:"}),Object(g.jsx)("input",{type:"range",id:"tenor-slider",defaultValue:1,min:0,max:2,step:.01}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Bass:"}),Object(g.jsx)("input",{type:"range",id:"bass-slider",defaultValue:1,min:0,max:2,step:.01}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{children:"Tempo:"}),Object(g.jsx)("input",{type:"range",id:"tempo-slider",defaultValue:.5,min:0,max:1,step:.01,onInput:this._displayTempo,onMouseUp:this._setNewTempo}),Object(g.jsx)("br",{})]}),Object(g.jsx)("label",{children:"Tempo: "}),Object(g.jsx)("output",{id:"tempo-output",children:this.state.initialTempo}),Object(g.jsxs)("div",{id:"bottom-div",children:[Object(g.jsxs)("div",{id:"time-slider-and-output-div",children:[Object(g.jsx)("output",{id:"time-output",children:this.state.initialTime}),Object(g.jsx)("input",{type:"range",id:"time-slider",onInput:this._displayTime,onMouseUp:this._setNewTime,defaultValue:0,min:0,max:100,step:.01}),Object(g.jsx)("br",{})]}),Object(g.jsx)("button",{id:"play-button",onClick:this._play,children:this._getButtonText()})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("time-slider"),n=document.getElementById("time-output");this.interval=window.setInterval((function(){e.state.instrumentIsLoaded&&e.midiPlayer.isPlaying()&&(e.state.experiencingUserInputOnTimeSlider||(t.value=e._getCurrentPercent().toString(),n.innerHTML=e._getTimeOutput()))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}],[{key:"_getSopranoValue",value:function(){var e=document.getElementById("soprano-slider").value;return Number(e)}},{key:"_getAltoValue",value:function(){var e=document.getElementById("alto-slider").value;return Number(e)}},{key:"_getTenorValue",value:function(){var e=document.getElementById("tenor-slider").value;return Number(e)}},{key:"_getBassValue",value:function(){var e=document.getElementById("bass-slider").value;return Number(e)}}]),n}(a.a.Component);var v=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("header",{className:"App-header",children:Object(g.jsx)(y,{})})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),j()}},[[49,1,2]]]);
//# sourceMappingURL=main.3785ef94.chunk.js.map