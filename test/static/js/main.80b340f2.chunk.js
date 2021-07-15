(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n.n(i),s=n(26),r=n.n(s),c=n(13),l=n(9),o=n(8),u=n(2),d=n(4),h=n(3),m=n(6),j=n(5),b=n(27),p=n.n(b),g=n(28),y=n(30),O=(n(62),n(1)),f=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;Object(u.a)(this,n),(i=t.call(this,e)).initialTempo=void 0,i.initialTime=void 0,i.songLength=void 0,i.instrument=void 0,i.interval=void 0,i.nodes={},i.audioContext=void 0,i.midiPlayer=void 0,i.state={playing:!1,initialTempo:"LOADING",initialTime:"0:00",songLength:0,instrumentIsLoaded:!1,experiencingUserInputOnTimeSlider:!1},i._handleEvent=i._handleEvent.bind(Object(h.a)(i)),i._instrumentLoaded=i._instrumentLoaded.bind(Object(h.a)(i)),i._play=i._play.bind(Object(h.a)(i)),i._getTempoValue=i._getTempoValue.bind(Object(h.a)(i)),i._setNewTime=i._setNewTime.bind(Object(h.a)(i)),i._setNewTempo=i._setNewTempo.bind(Object(h.a)(i)),i._displayTempo=i._displayTempo.bind(Object(h.a)(i)),i._getButtonText=i._getButtonText.bind(Object(h.a)(i)),i._displayTime=i._displayTime.bind(Object(h.a)(i)),i.midiPlayer=new g.a.Player(i._handleEvent),i.audioContext=new y.a;var a=window.navigator.userAgent.includes("Mobile")?"acoustic_grand_piano-mp3.js":"acoustic_grand_piano-ogg.js";return p.a.instrument(i.audioContext,a).then(i._instrumentLoaded),i}return Object(d.a)(n,[{key:"_getTempoValue",value:function(){var e=Number(this.state.initialTempo),t=document.getElementById("tempo-slider");return Number(t.value)<.5?e=Number(this.state.initialTempo)*(1.5*Number(t.value)+.25):Number(t.value)>.5&&(e=Number(this.state.initialTempo)*(6*Number(t.value)-2)),e}},{key:"_setNewTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!1});var e=document.getElementById("time-slider");this.midiPlayer.isPlaying()?(this.midiPlayer.skipToPercent(Number(e.value)),this.midiPlayer.play()):this.midiPlayer.skipToPercent(Number(e.value))}},{key:"_displayTime",value:function(){this.setState({experiencingUserInputOnTimeSlider:!0});var e=document.getElementById("time-slider"),t=document.getElementById("time-output"),i=Number(e.value)/100*this.state.songLength;t.innerHTML=n._getTimeValue(i)}},{key:"_setNewTempo",value:function(){this.midiPlayer.setTempo(this._getTempoValue())}},{key:"_displayTempo",value:function(){document.getElementById("tempo-output").innerHTML=Math.round(this._getTempoValue()).toString()}},{key:"_getButtonText",value:function(){return this.state.instrumentIsLoaded?this.midiPlayer.isPlaying()?"pause":"play":"loading"}},{key:"_getCurrentPercent",value:function(){return Math.abs(100-this.midiPlayer.getSongPercentRemaining())}},{key:"_getTimeOutput",value:function(){var e=this._getCurrentPercent()/100*this.state.songLength;return this.state.instrumentIsLoaded?n._getTimeValue(e):"LOADING"}},{key:"_handleEvent",value:function(e){var t=100;if("Note on"===e.name){switch(e.channel){case 1:t=e.velocity*(n._getSopranoValue()/10);break;case 2:t=e.velocity*(n._getAltoValue()/10);break;case 3:t=e.velocity*(n._getTenorValue()/10);break;case 4:t=e.velocity*(n._getBassValue()/10)}var i=this.instrument.play(e.noteName,this.audioContext.currentTime,{gain:t});this.nodes[e.channel]&&this.nodes[e.channel].stop(),this.nodes[e.channel]=i}else"Note off"===e.name&&this.nodes[e.channel]&&(this.nodes[e.channel].stop(),delete this.nodes[e.channel])}},{key:"_play",value:function(){if(this.state.instrumentIsLoaded)return this.state.playing?(this.midiPlayer.pause(),void this.setState({playing:!1})):(this.setState({playing:!0}),void this.midiPlayer.play())}},{key:"_instrumentLoaded",value:function(e){var t=this;this.instrument=e;console.log(this.props.midiFilePath),fetch(this.props.midiFilePath).then((function(e){return e.arrayBuffer()})).then((function(e){return function(e){t.midiPlayer.loadArrayBuffer(e),t.setState({initialTempo:t.midiPlayer.getTempo().toString()}),t.setState({songLength:t.midiPlayer.getSongTime()}),t.setState({initialTime:"0:00"})}(e)})),this.setState({instrumentIsLoaded:!0})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{id:"slider-form",children:[Object(O.jsx)("label",{id:"soprano-label",children:"Soprano:"}),Object(O.jsx)("input",{type:"range",id:"soprano-slider",defaultValue:1,min:0,max:2,step:.01}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"alto-label",children:"Alto:"}),Object(O.jsx)("input",{type:"range",id:"alto-slider",defaultValue:1,min:0,max:2,step:.01}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"tenor-label",children:"Tenor:"}),Object(O.jsx)("input",{type:"range",id:"tenor-slider",defaultValue:1,min:0,max:2,step:.01}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"bass-label",children:"Bass:"}),Object(O.jsx)("input",{type:"range",id:"bass-slider",defaultValue:1,min:0,max:2,step:.01}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{id:"tempo-label",children:"Tempo:"}),Object(O.jsx)("input",{type:"range",id:" tempo-slider",defaultValue:.5,min:0,max:1,step:.01,onInput:this._displayTempo,onPointerUp:this._setNewTempo}),Object(O.jsx)("br",{})]}),Object(O.jsx)("label",{children:"Tempo: "}),Object(O.jsx)("output",{id:"tempo-output",children:this.state.initialTempo}),Object(O.jsxs)("div",{id:"bottom-div",children:[Object(O.jsxs)("div",{id:"time-slider-and-output-div",children:[Object(O.jsx)("output",{id:"time-output",children:this.state.initialTime}),Object(O.jsx)("input",{type:"range",id:"time-slider",onInput:this._displayTime,onMouseUp:this._setNewTime,onTouchEnd:this._setNewTime,defaultValue:0,min:0,max:100,step:.01}),Object(O.jsx)("br",{})]}),Object(O.jsx)("button",{id:"play-button",onClick:this._play,children:this._getButtonText()})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("time-slider"),n=document.getElementById("time-output");this.interval=window.setInterval((function(){e.state.instrumentIsLoaded&&e.midiPlayer.isPlaying()&&(e.state.experiencingUserInputOnTimeSlider||(t.value=e._getCurrentPercent().toString(),n.innerHTML=e._getTimeOutput()))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}],[{key:"_getSopranoValue",value:function(){var e=document.getElementById("soprano-slider").value;return Number(e)}},{key:"_getAltoValue",value:function(){var e=document.getElementById("alto-slider").value;return Number(e)}},{key:"_getTenorValue",value:function(){var e=document.getElementById("tenor-slider").value;return Number(e)}},{key:"_getBassValue",value:function(){var e=document.getElementById("bass-slider").value;return Number(e)}},{key:"_getTimeValue",value:function(e){var t,n=0;return e<10?t="0"+Math.trunc(e):e<60?(n=0,t=Math.trunc(e).toString()):e%60===0?(n=Number(Math.trunc(e/60)),t="00"):(n=Number(Math.trunc(e/60)),t=(e%60).toString()),n+":"+t}}]),n}(a.a.Component);n(64),n(69);r.a.render(Object(O.jsx)(c.a,{basename:"/",children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Sing Your Part"}),Object(O.jsxs)("ul",{id:"homepage-list",children:[Object(O.jsx)("li",{}),Object(O.jsx)(c.b,{to:"/songs",children:"Songs"}),Object(O.jsx)("li",{}),Object(O.jsx)(c.b,{to:"/this_week",children:"This Week"}),Object(O.jsx)("li",{}),Object(O.jsx)(c.b,{to:"/favorites",children:"Favorites"}),Object(O.jsx)("li",{}),Object(O.jsx)(c.b,{to:"/menu",children:"Menu"})]})]})}}),Object(O.jsx)(l.a,{exact:!0,path:"/songs",component:function(){var e,t=Object(i.useState)([]),n=Object(o.a)(t,2),a=n[0],s=n[1],r="../hymnals/manifest.json";Object(i.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(){throw"Error: HTTP-status 404, bad request, could not fetch: "+r}))}),[r]),e=a.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(c.b,{to:"/hymns?hymnal=".concat(e),children:e})},e)}));for(var l=0;l<a.length;l++);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{id:"songs-header",children:"Songs"}),Object(O.jsx)("ul",{id:"hymnal-list",children:e})]})}}),Object(O.jsx)(l.a,{exact:!0,path:"/hymns",component:function(){var e,t,n,a=Object(l.f)().search,s=new URLSearchParams(a).get("hymnal"),r=new URLSearchParams(a).get("church"),u=-1,d=Object(i.useState)([]),h=Object(o.a)(d,2),m=h[0],j=h[1];function b(e){if(e)switch(e.toString().length){case 1:return"00"+e;case 2:return"0"+e;case 3:return e.toString()}}function p(e){var t=b(e.number);return e.title.toUpperCase().includes("PSALM")?t+" - "+e.title:e.psalm?t+" - "+e.title+" - "+e.psalm:t+" - "+e.title}function g(){return++u}function y(e){return e.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(c.b,{to:"/player?hymnal=".concat(s,"&title=").concat(e.title,"&number=").concat(b(e.number),"&psalm=").concat(e.psalm),children:p(e)})},g())}))}function f(e){var t=e[0].hymnal,n=e.map((function(e){return Object(O.jsx)("tr",{children:Object(O.jsx)(c.b,{to:"/player?hymnal=".concat(e.hymnal,"&title=").concat(e.title,"&number=").concat(b(e.number),"&psalm=").concat(e.psalm),children:p(e)})},g())}));return Object(O.jsxs)("table",{className:"this-week-table",children:[Object(O.jsx)("thead",{children:Object(O.jsx)("b",{children:t})}),Object(O.jsx)("tbody",{children:n})]})}function x(e){for(var t=[],n=[],i=[],a=0;a<e.length;a++)t.includes(e[a].hymnal)||t.push(e[a].hymnal);for(var s=0;s<t.length;s++){for(var r=0;r<e.length;r++)t[s]===e[r].hymnal&&n.push(e[r]);i.push(f(n)),n=[]}return i}function v(){return s?"hymnal":"this_week"}return e="hymnal"===v()?"../hymnals/"+s+"/manifest.json":"../this_week/"+r+"/"+r+".json",Object(i.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(){throw"Error: HTTP-status 404, bad request, could not fetch: "+e}))}),[e]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{id:"hymns-header",children:(n=v(),"this_week"===n?r:s)}),Object(O.jsx)("input",{id:"song-search-bar",type:"text",placeholder:"Search Songs",onKeyUp:function(){!function(e){var t,n,i,a,s,r,c,l,o=document.getElementById("song-search-bar").value.toUpperCase();l="hymnal"===e?document.getElementById("hymn-list").getElementsByTagName("li"):document.getElementById("this-week-div").getElementsByTagName("tr");for(var u=0;u<l.length;u++)(c=(n=(t=l[u].getElementsByTagName("a")[0]).textContent||t.innerText).toUpperCase()).includes(o)?(a=n.slice(0,c.indexOf(o)),s=n.slice(c.indexOf(o),c.indexOf(o)+o.length),r=n.slice(c.indexOf(o)+o.length),i=a+s.bold()+r,t.innerHTML=i,l[u].style.display=""):l[u].style.display="none"}(v())},autoComplete:"off"}),Object(O.jsx)("div",{children:(t=v(),"this_week"===t?Object(O.jsx)("div",{id:"this-week-div",children:x(m)}):"hymnal"===t?Object(O.jsx)("ul",{id:"hymn-list",children:y(m)}):void 0)})]})}}),Object(O.jsx)(l.a,{exact:!0,path:"/player",component:function(){var e=Object(l.f)().search,t=new URLSearchParams(e).get("title"),n=new URLSearchParams(e).get("number"),i=new URLSearchParams(e).get("hymnal"),a=new URLSearchParams(e).get("psalm"),s=c(t,n,a,"mid"),r=c(t,n,a,"pdf");function c(e,t,n,i){return e?e.toUpperCase().includes("PSALM")?t+" - "+e+"."+i:n?t+" - "+e+" - "+n+"."+i:t+" - "+e+"."+i:"ERROR: No Title"}function o(e){return"../hymnals/"+i+"/"+e}return Object(O.jsx)(f,{midiFilePath:o(s),pdfFilePath:o(r)})}}),Object(O.jsx)(l.a,{exact:!0,path:"/this_week",component:function(){var e,t=Object(i.useState)([]),n=Object(o.a)(t,2),a=n[0],s=n[1],r="../this_week/manifest.json",l=-1;return Object(i.useEffect)((function(){fetch(r).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(){throw"Error: HTTP-status 404, bad request, could not fetch: "+r}))}),[r]),e=a.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(c.b,{to:"/hymns?church=".concat(e),children:e})},++l)})),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This Week"}),Object(O.jsx)("ul",{id:"churches-list",children:e})]})}}),Object(O.jsx)(l.a,{exact:!0,path:"/favorites",component:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Favorites"})})}}),Object(O.jsx)(l.a,{exact:!0,path:"/menu",component:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Menu"}),Object(O.jsxs)("ul",{id:"menu-list",children:[Object(O.jsx)("li",{children:Object(O.jsx)(c.b,{to:"/settings",children:"Settings"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://crescendosw.github.io/tutorial.htm",children:"Help"})})]})]})}}),Object(O.jsx)(l.a,{exact:!0,path:"/settings",component:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Settings"})})}})]})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.80b340f2.chunk.js.map