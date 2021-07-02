(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{61:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n.n(i),r=n(27),s=n.n(r),o=n(17),l=n(9),u=n(8),c=n(2),d=n(3),m=n(1),h=n(5),p=n(4),b=n(22),j=n.n(b),g=n(28),y=n(25),v=(n(61),n(6)),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var i;Object(c.a)(this,n),(i=t.call(this,e)).initialTempo=void 0,i.initialTime=void 0,i.songLength=void 0,i.instrument=void 0,i.interval=void 0,i.nodes={},i.audioContext=void 0,i.midiPlayer=void 0,i.state={playing:!1,initialTempo:"LOADING",initialTime:"0:00",songLength:0,instrumentIsLoaded:!1,experiencingUserInputOnTimeSlider:!1},i._handleEvent=i._handleEvent.bind(Object(m.a)(i)),i._instrumentLoaded=i._instrumentLoaded.bind(Object(m.a)(i)),i._play=i._play.bind(Object(m.a)(i)),i._loadMidiFile=i._loadMidiFile.bind(Object(m.a)(i)),i._getTempoValue=i._getTempoValue.bind(Object(m.a)(i)),i._setNewTime=i._setNewTime.bind(Object(m.a)(i)),i._setNewTempo=i._setNewTempo.bind(Object(m.a)(i)),i._displayTempo=i._displayTempo.bind(Object(m.a)(i)),i._getButtonText=i._getButtonText.bind(Object(m.a)(i)),i._displayTime=i._displayTime.bind(Object(m.a)(i)),n._getTimeValue=n._getTimeValue.bind(Object(m.a)(i)),i.midiPlayer=new g.a.Player(i._handleEvent),i.audioContext=new y.a;var a=window.navigator.userAgent.includes("Mobile")?"acoustic_grand_piano-mp3.js":"acoustic_grand_piano-ogg.js";return j.a.instrument(i.audioContext,a).then(i._instrumentLoaded),i}return Object(d.a)(n,[{key:"_getTempoValue",value:function(){var e=Number(this.state.initialTempo),t=document.getElementById("tempo-slider");return Number(t.value)<.5?e=Number(this.state.initialTempo)*(1.5*Number(t.value)+.25):Number(t.value)>.5&&(e=Number(this.state.initialTempo)*(6*Number(t.value)-2)),e}},{key:"_setNewTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!1});var e=document.getElementById("time-slider");this.midiPlayer.isPlaying()?(this.midiPlayer.skipToPercent(Number(e.value)),this.midiPlayer.play()):this.midiPlayer.skipToPercent(Number(e.value))}},{key:"_displayTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!0});var e=document.getElementById("time-slider"),t=document.getElementById("time-output"),i=Number(e.value)/100*this.state.songLength;t.innerHTML=n._getTimeValue(i)}},{key:"_setNewTempo",value:function(){this.midiPlayer.setTempo(this._getTempoValue())}},{key:"_displayTempo",value:function(){document.getElementById("tempo-output").innerHTML=Math.round(this._getTempoValue()).toString()}},{key:"_getButtonText",value:function(){return this.state.instrumentIsLoaded?this.midiPlayer.isPlaying()?"pause":"play":"loading"}},{key:"_getCurrentPercent",value:function(){return Math.abs(100-this.midiPlayer.getSongPercentRemaining())}},{key:"_getTimeOutput",value:function(){var e=this._getCurrentPercent()/100*this.state.songLength;return this.state.instrumentIsLoaded?n._getTimeValue(e):"LOADING"}},{key:"_handleEvent",value:function(e){var t=100;if("Note on"===e.name){switch(e.channel){case 1:t=e.velocity*(n._getSopranoValue()/10);break;case 2:t=e.velocity*(n._getAltoValue()/10);break;case 3:t=e.velocity*(n._getTenorValue()/10);break;case 4:t=e.velocity*(n._getBassValue()/10)}var i=this.instrument.play(e.noteName,this.audioContext.currentTime,{gain:t});this.nodes[e.channel]&&this.nodes[e.channel].stop(),this.nodes[e.channel]=i}else"Note off"===e.name&&this.nodes[e.channel]&&(this.nodes[e.channel].stop(),delete this.nodes[e.channel])}},{key:"_loadMidiFile",value:function(){if(!this.audioContext){this.audioContext=new y.a;var e=window.navigator.userAgent.includes("Mobile")?"acoustic_grand_piano-mp3.js":"acoustic_grand_piano-ogg.js";j.a.instrument(this.audioContext,e).then(this._instrumentLoaded)}}},{key:"_play",value:function(){if(this.state.instrumentIsLoaded)return this.state.playing?(this.midiPlayer.pause(),void this.setState({playing:!1})):(this.setState({playing:!0}),void this.midiPlayer.play())}},{key:"_instrumentLoaded",value:function(e){var t=this;this.instrument=e;console.log(this.props.midiFileDirectory),fetch("447_and_can_it_be.mid").then((function(e){return e.arrayBuffer()})).then((function(e){return function(e){t.midiPlayer.loadArrayBuffer(e),t.setState({initialTempo:t.midiPlayer.getTempo().toString()}),t.setState({songLength:t.midiPlayer.getSongTime()}),t.setState({initialTime:"0:00"})}(e)})),this.setState({instrumentIsLoaded:!0})}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{id:"slider-form",children:[Object(v.jsx)("label",{id:"soprano-label",children:"Soprano:"}),Object(v.jsx)("input",{type:"range",id:"soprano-slider",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{id:"alto-label",children:"Alto:"}),Object(v.jsx)("input",{type:"range",id:"alto-slider",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{id:"tenor-label",children:"Tenor:"}),Object(v.jsx)("input",{type:"range",id:"tenor-slider",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{id:"bass-label",children:"Bass:"}),Object(v.jsx)("input",{type:"range",id:"bass-slider",defaultValue:1,min:0,max:2,step:.01}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{id:"tempo-label",children:"Tempo:"}),Object(v.jsx)("input",{type:"range",id:" tempo-slider",defaultValue:.5,min:0,max:1,step:.01,onInput:this._displayTempo,onPointerUp:this._setNewTempo}),Object(v.jsx)("br",{})]}),Object(v.jsx)("label",{children:"Tempo: "}),Object(v.jsx)("output",{id:"tempo-output",children:this.state.initialTempo}),Object(v.jsxs)("div",{id:"bottom-div",children:[Object(v.jsxs)("div",{id:"time-slider-and-output-div",children:[Object(v.jsx)("output",{id:"time-output",children:this.state.initialTime}),Object(v.jsx)("input",{type:"range",id:"time-slider",onInput:this._displayTime,onMouseUp:this._setNewTime,onTouchEnd:this._setNewTime,defaultValue:0,min:0,max:100,step:.01}),Object(v.jsx)("br",{})]}),Object(v.jsx)("button",{id:"play-button",onClick:this._play,children:this._getButtonText()})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("time-slider"),n=document.getElementById("time-output");this.interval=window.setInterval((function(){e.state.instrumentIsLoaded&&e.midiPlayer.isPlaying()&&(e.state.experiencingUserInputOnTimeSlider||(t.value=e._getCurrentPercent().toString(),n.innerHTML=e._getTimeOutput()))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}],[{key:"_getSopranoValue",value:function(){var e=document.getElementById("soprano-slider").value;return Number(e)}},{key:"_getAltoValue",value:function(){var e=document.getElementById("alto-slider").value;return Number(e)}},{key:"_getTenorValue",value:function(){var e=document.getElementById("tenor-slider").value;return Number(e)}},{key:"_getBassValue",value:function(){var e=document.getElementById("bass-slider").value;return Number(e)}},{key:"_getTimeValue",value:function(e){var t,n=0;return e<10?t="0"+Math.trunc(e):e<60?(n=0,t=Math.trunc(e).toString()):e%60===0?(n=Number(Math.trunc(e/60)),t="00"):(n=Number(Math.trunc(e/60)),t=(e%60).toString()),n+":"+t}}]),n}(a.a.Component);n(63),n(71);s.a.render(Object(v.jsx)(o.a,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Homepage "}),Object(v.jsx)("p",{children:"This will be the home page for our app"}),Object(v.jsx)("p",{children:"Here will be several things the user can click on; Hymnals, Settings, Favorites, This Week, Etc."}),Object(v.jsx)(o.b,{to:"/Hymnals",children:"Go To Hymnals"})]})}}),Object(v.jsx)(l.a,{exact:!0,path:"/Hymnals",component:function(){var e,t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s="https://crescendosw.github.io/hymnal/manifest.json";return Object(i.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(){throw"Error: HTTP-status 404, bad request, could not fetch: "+s}))}),[]),e=a.filter((function(e){return"Cantus Christi 2020"===e})).map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/Hymns?hymnal=".concat(e),children:e})},e)})),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Hymnals"}),Object(v.jsx)("ul",{children:e})]})}}),Object(v.jsx)(l.a,{exact:!0,path:"/Hymns",component:function(){var e,t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(l.f)().search,c=new URLSearchParams(s).get("hymnal"),d=function(e){var t="";if(e)for(var n=0;n<e.length;n++)" "===e[n]?t+="%20":t+=e[n];return t}(c),m="https://crescendosw.github.io/hymnal/"+d+"/manifest.json";function h(e){if(e)switch(e.toString().length){case 1:return"00"+e;case 2:return"0"+e}console.log("Error: zeros appended improperly")}return Object(i.useEffect)((function(){fetch(m).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(){throw"Error: HTTP-status 404, bad request, could not fetch: "+m}))}),[]),e=function(e,t){for(var n=[],i=0;i<e.length;i++)e[i].title===t&&n.push(e[i]);return n}(a,"And Can It Be That I Should Gain").map((function(e,t){return Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/Player?hymnal=".concat(d,"&title=").concat(e.title,"&number=").concat(h(e.number)),children:e.title})},e.number)})),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:c}),Object(v.jsx)("ul",{children:e})]})}}),Object(v.jsx)(l.a,{exact:!0,path:"/Player",component:function(){function e(e){var t="";if(e)for(var n=0;n<e.length;n++)" "===e[n]?t+="%20":t+=e[n];return t}var t=Object(l.f)().search,n=new URLSearchParams(t).get("title"),i=new URLSearchParams(t).get("number"),a=new URLSearchParams(t).get("hymnal"),r=i+"%20-%20"+e(n)+".mid",s=function(e,t){return t+" - "+e+".pdf"}(n,i),o=function(t,n){return n+"%20-%20"+e(t)}(n,i),u=e(a),c="https://crescendosw.com/hymnal/"+u+"/"+o+"/"+r,d="https://crescendosw.com/hymnal/"+u+"/"+o+"/"+s;return Object(v.jsx)(f,{midiFileDirectory:c,pdfFileDirectory:d})}})]})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d14e94c7.chunk.js.map