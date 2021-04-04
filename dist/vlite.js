!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlitejs=t():e.vlitejs=t()}(globalThis,(function(){return(()=>{var e={555:(e,t,s)=>{"use strict";var n;void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.initializePlugins=t.registerPlugin=t.getPluginInstance=void 0;const s={};function n(e){const t=[],n=Object.keys(s);return e.forEach((e=>{if(!n.includes(e))throw new Error(`vlitejs :: Unknown plugin "${e}".`);t.push({id:e,Plugin:s[e]})})),t}t.getPluginInstance=n,t.registerPlugin=function(e,t){if(void 0!==t){if(!Object.keys(s).includes(e))return void(s[e]=t);throw new Error(`vlitejs :: The plugin id "${e}" is already registered.`)}throw new Error(`vlitejs :: The plugin id "${e}" is undefined.`)},t.initializePlugins=function({plugins:e,provider:t,type:s,playerInstance:i}){n(e).forEach((({id:e,Plugin:n})=>{const r=new n({player:i});if(!r.providers.includes(t)||!r.types.includes(s))throw new Error(`vlitejs :: The "${e}" plugin is only compatible with providers:"${r.providers}" and types:"${r.types}"`);r.init()}))}}.apply(t,[s,t]))||(e.exports=n)},894:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};n=[s,t,s(360)],void 0===(i=function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s);class n extends s.default{init(){this.waitUntilVideoIsReady().then((()=>{this.addSpecificEvents(),super.onPlayerReady()}))}waitUntilVideoIsReady(){return new window.Promise(((e,t)=>{this.element.addEventListener("canplay",e,{once:!0})}))}addSpecificEvents(){this.element.addEventListener("timeupdate",super.onTimeUpdate.bind(this)),this.element.addEventListener("ended",super.onVideoEnded.bind(this)),this.element.addEventListener("playing",this.onPlaying.bind(this)),this.element.addEventListener("waiting",this.onWaiting.bind(this)),this.element.addEventListener("seeking",this.onSeeking.bind(this)),this.element.addEventListener("seeked",this.onSeeked.bind(this))}getInstance(){return this.element}getCurrentTime(){return new window.Promise((e=>e(this.element.currentTime)))}setCurrentTime(e){this.element.currentTime=e}getDuration(){return new window.Promise((e=>e(this.element.duration)))}methodPlay(){this.element.play()}methodPause(){this.element.pause()}methodSetVolume(e){this.element.volume=e}methodGetVolume(){return new window.Promise((e=>e(this.element.volume)))}methodMute(){this.element.muted=!0,this.element.setAttribute("muted","")}methodUnMute(){this.element.muted=!1,this.element.removeAttribute("muted")}onWaiting(){this.loading(!0)}onPlaying(){this.loading(!1)}onSeeking(){this.loading(!0)}onSeeked(){this.loading(!1)}removeSpecificEvents(){this.element.removeEventListener("timeupdate",this.onTimeUpdate),this.element.removeEventListener("playing",this.onPlaying),this.element.removeEventListener("waiting",this.onWaiting),this.element.removeEventListener("seeking",this.onSeeking),this.element.removeEventListener("seeked",this.onSeeked),this.element.removeEventListener("ended",this.onVideoEnded)}destroy(){this.removeSpecificEvents(),super.destroy()}}t.default=n}.apply(t,n))||(e.exports=i)},390:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};n=[s,t,s(894)],void 0===(i=function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),t.registerProvider=t.getProviderInstance=void 0;const n={html5:(s=r(s)).default};t.getProviderInstance=function(e){const t=n[e];if(t)return t;throw new Error(`vlitejs :: Unknown provider "${e}"`)},t.registerProvider=function(e,t){if(void 0!==t){if(!Object.keys(n).includes(e))return void(n[e]=t);throw new Error(`vlitejs :: The provider id "${e}" is already registered.`)}throw new Error(`vlitejs :: The provider id "${e}" is undefined.`)}}.apply(t,n))||(e.exports=i)},776:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};n=[s,t,s(363)],void 0===(i=function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),t.default=function(){return`<button class="v-bigPlay">${s.default}</button>`}}.apply(t,n))||(e.exports=i)},88:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};n=[s,t,s(158),s(341),s(364)],void 0===(i=function(e,t,s,n,i){Object.defineProperty(t,"__esModule",{value:!0}),n=r(n),i=r(i);t.default=class{constructor({container:e,options:t,type:s,playerInstance:n}){this.container=e,this.options=t,this.type=s,this.playerInstance=n,this.controlBar=null,this.progressBar=null,this.volumeButton=null,this.fullscreenButton=null,this.durationElement=null,this.player=this.container.querySelector(".vlite-js"),this.onInputProgressBar=this.onInputProgressBar.bind(this),this.onChangeProgressBar=this.onChangeProgressBar.bind(this),this.onClickOnControlBar=this.onClickOnControlBar.bind(this),this.togglePlayPause=this.togglePlayPause.bind(this),this.toggleVolume=this.toggleVolume.bind(this),this.toggleFullscreen=this.toggleFullscreen.bind(this)}init(){this.controlBar=this.container.querySelector(".v-controlBar"),this.controlBar&&(this.options.progressBar&&(this.progressBar=this.controlBar.querySelector(".v-progressBar")),this.options.volume&&(this.volumeButton=this.controlBar.querySelector(".v-volumeButton")),this.options.fullscreen&&(this.fullscreenButton=this.controlBar.querySelector(".v-fullscreenButton")),this.options.time&&(this.durationElement=this.controlBar.querySelector(".v-duration")),this.volumeButton&&this.volumeButton.setAttribute("aria-label",this.player.muted?"Unmute":"Mute")),this.addEvents()}onPlayerReady(){this.playerInstance.getDuration().then((e=>{this.progressBar&&this.progressBar.setAttribute("aria-valuemax",`${e}`),this.durationElement&&(this.durationElement.innerHTML=s.formatVideoTime(e))}))}addEvents(){this.progressBar&&(this.progressBar.addEventListener("input",this.onInputProgressBar),this.progressBar.addEventListener("change",this.onChangeProgressBar)),this.controlBar&&this.controlBar.addEventListener("click",this.onClickOnControlBar)}onInputProgressBar(e){this.playerInstance.progressBarIsMoving=!0;const t=e.target;t.style.setProperty("--value",`${t.value}%`),this.playerInstance.getCurrentTime().then((e=>t.setAttribute("aria-valuenow",`${e}`))),this.playerInstance.getDuration().then((t=>{const s=e.target;this.playerInstance.setCurrentTime(parseInt(s.value)*t/100)}))}onChangeProgressBar(){this.playerInstance.progressBarIsMoving=!1}onClickOnControlBar(e){const t=e.target,s=n.default({target:t,selectorString:".v-playPauseButton",nodeName:["button"]}),i=n.default({target:t,selectorString:".v-volumeButton",nodeName:["button"]}),r=n.default({target:t,selectorString:".v-fullscreenButton",nodeName:["button"]});s?this.togglePlayPause(e):i?this.toggleVolume(e):r&&this.toggleFullscreen(e)}togglePlayPause(e){e&&e.preventDefault(),this.container.classList.contains("v-paused")?this.playerInstance.play():this.playerInstance.pause()}toggleVolume(e){e.preventDefault(),this.volumeButton.classList.contains("v-pressed")?(this.playerInstance.unMute(),this.volumeButton.setAttribute("aria-label","Mute")):(this.playerInstance.mute(),this.volumeButton.setAttribute("aria-label","Unmute"))}toggleFullscreen(e){e.preventDefault(),this.playerInstance.isFullScreen?(this.playerInstance.exitFullscreen(),this.fullscreenButton.setAttribute("aria-label","Enter fullscreen")):(this.playerInstance.requestFullscreen(),this.fullscreenButton.setAttribute("aria-label","Exit fullscreen"))}getTemplate(){return`${i.default({options:this.options,isMuted:this.player.muted,type:this.type})}`}removeEvents(){this.progressBar&&(this.progressBar.removeEventListener("input",this.onInputProgressBar),this.progressBar.removeEventListener("change",this.onChangeProgressBar)),this.controlBar&&this.controlBar.removeEventListener("click",this.onClickOnControlBar)}destroy(){this.removeEvents(),this.controlBar&&this.controlBar.remove()}}}.apply(t,n))||(e.exports=i)},364:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};n=[s,t,s(169),s(951),s(418),s(569),s(804),s(299),s(158)],void 0===(i=function(e,t,s,n,i,o,l,a,u){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),n=r(n),i=r(i),o=r(o),l=r(l),a=r(a),t.default=function({options:e,isMuted:t,type:r}){return`<div class="v-controlBar v-style${u.capitalized(r)}">${e.playPause?`<button class="v-playPauseButton v-controlButton" aria-label="Play"><span class="v-controlButtonIcon v-iconPlay">${s.default}</span><span class="v-controlButtonIcon v-iconPause">${n.default}</span></button>`:""}${e.time?'<div class="v-time"><span class="v-currentTime">00:00</span>&nbsp;/&nbsp;<span class="v-duration"></span></div>':""}${e.progressBar?'<input type="range" class="v-progressBar" min="0" max="100" step="0.01" value="0" aria-label="Seek" aria-valuemin="0"} />':""}${e.volume?function({isMuted:e}){return`<button class="v-volumeButton v-controlButton${e?" v-pressed":""}"><span class="v-controlButtonIcon v-iconVolumeHigh">${i.default}</span><span class="v-controlButtonIcon v-iconVolumeMute">${o.default}</span></button>`}({isMuted:t}):""}${e.fullscreen?`<button class="v-fullscreenButton v-controlButton" aria-label="Enter fullscreen"><span class="v-controlButtonIcon v-iconFullscreen">${l.default}</span><span class="v-controlButtonIcon v-iconShrink">${a.default}</span></button>`:""}</div>`}}.apply(t,n))||(e.exports=i)},668:(e,t,s)=>{"use strict";var n;void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'\n\t\t<div class="v-loader">\n\t\t\t<div class="v-loaderContent">\n\t\t\t\t<div class="v-loaderBounce1"></div>\n\t\t\t\t<div class="v-loaderBounce2"></div>\n\t\t\t\t<div class="v-loaderBounce3"></div>\n\t\t\t</div>\n\t\t</div>\n\t'}}.apply(t,[s,t]))||(e.exports=n)},888:(e,t,s)=>{"use strict";var n;void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return'<div class="v-overlay"></div>'}}.apply(t,[s,t]))||(e.exports=n)},817:(e,t,s)=>{"use strict";var n;void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({posterUrl:e=""}){return`<div class="v-poster v-active"${e&&` style="background-image: url(${e})"`}></div>`}}.apply(t,[s,t]))||(e.exports=n)},158:(e,t,s)=>{"use strict";var n;void 0===(n=function(e,t){function s(){if(document.exitFullscreen instanceof Function)return"";return["webkit","moz","ms"].find((e=>document[e+"ExitFullscreen"]instanceof Function||document[`${e}CancelFullScreen`]instanceof Function))||""}Object.defineProperty(t,"__esModule",{value:!0}),t.getBrowserPrefix=t.checkSupportFullScreen=t.formatVideoTime=t.capitalized=void 0,t.capitalized=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},t.formatVideoTime=function(e){const t=1e3*e,s=t/1e3/60<<0,n=t/1e3%60<<0;let i="";return i+=s<10?"0":"",i+=s+":",i+=n<10?"0":"",i+=n,i},t.checkSupportFullScreen=function(){const e=s();return{requestFn:e?`${e}RequestFullScreen`:"requestFullscreen",cancelFn:e?`${e}ExitFullscreen`:"exitFullscreen",changeEvent:e?`${e}fullscreenchange`:"fullscreenchange",isFullScreen:e?`${e}FullscreenElement`:"fullscreenElement"}},t.getBrowserPrefix=s}.apply(t,[s,t]))||(e.exports=n)},360:(e,t,s)=>{"use strict";var n,i;n=[s,t,s(158)],void 0===(i=function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor({element:e,container:t,options:s,vliteInstance:n}){this.element=e,this.container=t,this.options=s,this.vliteInstance=n,this.progressBarIsMoving=!1,this.isFullScreen=!1,this.isPaused=null,this.delayAutoHide=3e3,this.controlBarElement=null,this.poster=null,this.bigPlayButton=null,this.playPauseButton=null,this.currentTimeElement=null,this.progressBar=null,this.volumeButton=null,this.fullscreenButton=null}init(){throw new Error('You have to implement the function "init".')}waitUntilVideoIsReady(){throw new Error('You have to implement the function "waitUntilVideoIsReady".')}getInstance(){throw new Error('You have to implement the function "getInstance".')}getCurrentTime(){throw new Error('You have to implement the function "getCurrentTime".')}setCurrentTime(e){throw new Error('You have to implement the function "setCurrentTime".')}getDuration(){throw new Error('You have to implement the function "getDuration".')}methodPlay(){throw new Error('You have to implement the function "methodPlay".')}methodPause(){throw new Error('You have to implement the function "methodPause".')}methodSetVolume(e){throw new Error('You have to implement the function "methodSetVolume".')}methodGetVolume(){throw new Error('You have to implement the function "methodGetVolume".')}methodMute(){throw new Error('You have to implement the function "methodMute".')}methodUnMute(){throw new Error('You have to implement the function "methodUnMute".')}onPlayerReady(){this.controlBarElement=this.container.querySelector(".v-controlBar"),this.controlBarElement&&(this.options.poster&&(this.poster=this.controlBarElement.querySelector(".v-poster")),this.options.bigPlay&&(this.bigPlayButton=this.controlBarElement.querySelector(".v-bigPlay")),this.options.playPause&&(this.playPauseButton=this.controlBarElement.querySelector(".v-playPauseButton")),this.options.time&&(this.currentTimeElement=this.controlBarElement.querySelector(".v-currentTime")),this.options.progressBar&&(this.progressBar=this.controlBarElement.querySelector(".v-progressBar")),this.options.volume&&(this.volumeButton=this.controlBarElement.querySelector(".v-volumeButton")),this.options.fullscreen&&(this.fullscreenButton=this.controlBarElement.querySelector(".v-fullscreenButton"))),this.options.autoplay&&(!this.element.muted&&this.mute(),this.play()),this.loading(!1),this.vliteInstance.controlBar.onPlayerReady(),this.vliteInstance.onReady instanceof Function&&this.vliteInstance.onReady.call(this,this)}loading(e){this.vliteInstance.loading(e)}onTimeUpdate(){this.options.time&&Promise.all([this.getCurrentTime(),this.getDuration()]).then((([e,t])=>{const n=Math.round(e);if(this.progressBar){const e=100*n/t;this.progressBarIsMoving||(this.progressBar.value=`${e}`),this.progressBar.style.setProperty("--value",`${e}%`)}this.currentTimeElement&&(this.currentTimeElement.innerHTML=s.formatVideoTime(n)),this.container.dispatchEvent(new CustomEvent("timeupdate"))}))}onVideoEnded(){this.options.loop?this.play():(this.container.classList.replace("v-playing","v-paused"),this.container.classList.add("v-firstStart")),this.options.poster&&this.poster&&this.poster.classList.add("v-active"),this.progressBar&&(this.progressBar.value="0",this.progressBar.style.setProperty("--value","0%"),this.progressBar.removeAttribute("aria-valuenow")),this.currentTimeElement&&(this.currentTimeElement.innerHTML="00:00"),this.container.dispatchEvent(new CustomEvent("ended"))}play(){this.container.classList.contains("v-firstStart")&&(this.container.classList.remove("v-firstStart"),"video"===this.vliteInstance.type&&this.poster&&this.poster.classList.remove("v-active")),this.methodPlay(),this.isPaused=!1,this.container.classList.replace("v-paused","v-playing"),"video"===this.vliteInstance.type&&this.container.focus(),this.playPauseButton&&this.playPauseButton.setAttribute("aria-label","Pause"),"video"===this.vliteInstance.type&&this.bigPlayButton&&this.bigPlayButton.setAttribute("aria-label","Pause"),this.afterPlayPause(),this.container.dispatchEvent(new CustomEvent("play"))}pause(){this.methodPause(),this.isPaused=!0,this.container.classList.replace("v-playing","v-paused"),this.playPauseButton&&this.playPauseButton.setAttribute("aria-label","Play"),"video"===this.vliteInstance.type&&this.bigPlayButton&&this.bigPlayButton.setAttribute("aria-label","Play"),this.afterPlayPause(),this.container.dispatchEvent(new CustomEvent("pause"))}afterPlayPause(){this.vliteInstance.autoHideGranted&&(this.vliteInstance.stopAutoHideTimer(),!this.isPaused&&this.vliteInstance.startAutoHideTimer())}setVolume(e){e>1?e=1:e<=0?(e=0,this.volumeButton&&this.volumeButton.classList.add("v-pressed")):this.volumeButton&&this.volumeButton.classList.remove("v-pressed"),this.methodSetVolume(e),this.container.dispatchEvent(new CustomEvent("volumechange"))}getVolume(){return new window.Promise((e=>{this.methodGetVolume().then((t=>{e(t)}))}))}mute(){this.methodMute(),this.volumeButton&&this.volumeButton.classList.add("v-pressed"),this.container.dispatchEvent(new CustomEvent("volumechange"))}unMute(){this.methodUnMute(),this.volumeButton&&this.volumeButton.classList.remove("v-pressed"),this.container.dispatchEvent(new CustomEvent("volumechange"))}seekTo(e){this.setCurrentTime(e),this.container.dispatchEvent(new CustomEvent("seeked"))}requestFullscreen(){const{requestFn:e}=this.vliteInstance.supportFullScreen;this.element[e]&&(this.container[e](),this.isFullScreen=!0,this.container.classList.add("v-fullscreenButton-display"),this.fullscreenButton&&this.fullscreenButton.classList.add("v-pressed"),this.container.dispatchEvent(new CustomEvent("enterfullscreen")))}exitFullscreen({escKey:e=!1}={}){const{cancelFn:t}=this.vliteInstance.supportFullScreen;document[t]&&(!e&&document[t](),this.isFullScreen=!1,this.container.classList.remove("v-fullscreenButton-display"),this.fullscreenButton&&this.fullscreenButton.classList.remove("v-pressed"),this.container.dispatchEvent(new CustomEvent("exitfullscreen")))}destroy(){this.pause(),this.options.controls&&this.controlBar&&this.controlBar.removeEvents(),this.container.remove()}}}.apply(t,n))||(e.exports=i)},229:(e,t,s)=>{"use strict";var n,i,r=function(e){return e&&e.__esModule?e:{default:e}};
/**
 * @license MIT
 * @name vlitejs
 * @version 4.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: vLitejs is a fast and lightweight Javascript library for customizing HTML5 and Youtube video players in Javascript with a minimalist theme
 * {@link https://yoriiis.github.io/vlitejs}
 * @copyright 2021 Joris DANIEL <https://yoriiis.github.io/vlitejs>
 **/n=[s,t,s(360),s(341),s(158),s(668),s(776),s(888),s(817),s(88),s(390),s(555)],void 0===(i=function(e,t,s,n,i,o,l,a,u,c,h,d){Object.defineProperty(t,"__esModule",{value:!0}),s=r(s),n=r(n),o=r(o),l=r(l),a=r(a),u=r(u),c=r(c);const p={audio:{autoplay:!1,controls:!0,playPause:!0,progressBar:!0,time:!0,volume:!0,loop:!1},video:{autoplay:!1,controls:!0,playPause:!0,progressBar:!0,time:!0,volume:!0,fullscreen:!0,poster:null,bigPlay:!0,autoHide:!1,playsinline:!0,loop:!1,muted:!1}};class v{constructor(e,{options:t,provider:s="html5",plugins:n=[],onReady:r}){if("string"==typeof e)this.element=document.querySelector(e);else{if(!(e instanceof HTMLVideoElement||e instanceof HTMLAudioElement))throw new TypeError("vlitejs :: The element or selector supplied is not valid.");this.element=e}this.plugins=n,this.onReady=r,this.isPaused=!0,this.delayAutoHide=3e3,this.type=this.element instanceof HTMLAudioElement?"audio":"video",this.supportFullScreen=i.checkSupportFullScreen(),this.element.hasAttribute("autoplay")?t.autoplay=!0:t.autoplay&&(this.element.setAttribute("autoplay",""),this.element.autoplay=!0),this.element.hasAttribute("playsinline")?t.playsinline=!0:t.playsinline&&(this.element.setAttribute("playsinline",""),this.element.setAttribute("webkit-playsinline","")),this.element.hasAttribute("muted")?t.muted=!0:t.muted&&(this.element.setAttribute("muted",""),this.element.muted=!0),this.element.hasAttribute("loop")?t.loop=!0:t.loop&&(this.element.setAttribute("loop",""),this.element.loop=!0),this.options=Object.assign(Object.assign({},p[this.type]),t),this.autoHideGranted="video"===this.type&&!!this.options.autoHide&&!!this.options.controls,this.onClickOnPlayer=this.onClickOnPlayer.bind(this),this.onDoubleClickOnPlayer=this.onDoubleClickOnPlayer.bind(this),this.onKeyup=this.onKeyup.bind(this),this.onMousemove=this.onMousemove.bind(this),this.onChangeFullScreen=this.onChangeFullScreen.bind(this);const o=h.getProviderInstance(s);this.wrapElement(),this.container=this.element.parentNode,this.playerInstance=new o({element:this.element,container:this.container,options:this.options,vliteInstance:this}),this.playerInstance.init(),this.controlBar=new c.default({container:this.container,options:this.options,type:this.type,playerInstance:this.playerInstance}),this.render(),this.addEvents(),d.initializePlugins({plugins:n,provider:s,type:this.type,playerInstance:this.playerInstance})}wrapElement(){const e=document.createElement("div");e.classList.add("v-vlite","v-firstStart","v-paused","v-loading",`v-style${i.capitalized(this.type)}`),e.setAttribute("tabindex","0");this.element.parentNode.insertBefore(e,this.element),e.appendChild(this.element)}render(){const e="audio"===this.type?this.renderAudioElement():this.renderVideoElement();this.container.insertAdjacentHTML("beforeend",e),this.options.controls&&this.controlBar.init()}renderVideoElement(){return`\n            ${a.default()}\n            ${o.default()}\n            ${this.options.poster?u.default({posterUrl:this.options.poster}):""}\n            ${this.options.bigPlay?l.default():""}\n            ${this.options.controls?this.controlBar.getTemplate():""}\n        `}renderAudioElement(){return this.controlBar.getTemplate()}addEvents(){this.container.addEventListener("click",this.onClickOnPlayer),this.container.addEventListener("dblclick",this.onDoubleClickOnPlayer),this.container.addEventListener("keyup",this.onKeyup),this.autoHideGranted&&this.container.addEventListener("mousemove",this.onMousemove),window.addEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen)}onClickOnPlayer(e){const t=e.target;n.default({target:t,selectorString:".v-poster, .v-overlay, .v-bigPlay",nodeName:["div","button"]})&&this.togglePlayPause(e)}onDoubleClickOnPlayer(e){const t=e.target;n.default({target:t,selectorString:".v-overlay",nodeName:["div"]})&&this.controlBar.toggleFullscreen(e)}onKeyup(e){this.autoHideGranted&&[9,32,37,39].includes(e.keyCode)&&(this.stopAutoHideTimer(),this.startAutoHideTimer()),32===e.keyCode?this.togglePlayPause(e):37===e.keyCode?this.fastForward("backward"):39===e.keyCode?this.fastForward("forward"):38===e.keyCode?this.increaseVolume():40===e.keyCode&&this.decreaseVolume()}onMousemove(){this.isPaused||(this.stopAutoHideTimer(),this.startAutoHideTimer())}onChangeFullScreen(e){!document[this.supportFullScreen.isFullScreen]&&this.playerInstance.isFullScreen&&this.playerInstance.exitFullscreen({escKey:!0})}togglePlayPause(e){e.preventDefault(),this.container.classList.contains("v-paused")?this.playerInstance.play():this.playerInstance.pause()}fastForward(e){this.playerInstance.getCurrentTime().then((t=>{this.playerInstance.seekTo("backward"===e?t-5:t+5)}))}increaseVolume(){this.playerInstance.getVolume().then((e=>{this.playerInstance.setVolume(e+.05)}))}decreaseVolume(){this.playerInstance.getVolume().then((e=>{this.playerInstance.setVolume(e-.05)}))}stopAutoHideTimer(){const e=this.container.querySelector(".v-controlBar");"video"===this.type&&e&&(e.classList.remove("hidden"),clearTimeout(this.timerAutoHide))}startAutoHideTimer(){const e=this.container.querySelector(".v-controlBar");"video"===this.type&&!this.isPaused&&e&&(this.timerAutoHide=window.setTimeout((()=>{e.classList.add("hidden")}),this.delayAutoHide))}loading(e){this.container.classList[e?"add":"remove"]("v-loading"),this.container.dispatchEvent(new CustomEvent("progress"))}removeEvents(){this.container.removeEventListener("click",this.onClickOnPlayer),this.container.removeEventListener("dblclick",this.onDoubleClickOnPlayer),this.container.removeEventListener("keyup",this.onKeyup),this.autoHideGranted&&this.container.removeEventListener("mousemove",this.onMousemove),window.removeEventListener(this.supportFullScreen.changeEvent,this.onChangeFullScreen)}destroy(){this.removeEvents(),this.playerInstance.destroy(),this.controlBar.destroy()}}v.Player=s.default,v.registerProvider=h.registerProvider,v.registerPlugin=d.registerPlugin,t.default=v}.apply(t,n))||(e.exports=i)},294:(e,t,s)=>{"use strict";s(792),s(776)},43:(e,t,s)=>{"use strict";s(564),s(88)},469:(e,t,s)=>{"use strict";s(176),s(668)},940:(e,t,s)=>{"use strict";s(47),s(888)},192:(e,t,s)=>{"use strict";s(115),s(817)},256:(e,t,s)=>{"use strict";s.r(t)},129:(e,t,s)=>{"use strict";s.r(t)},792:(e,t,s)=>{"use strict";s.r(t)},564:(e,t,s)=>{"use strict";s.r(t)},176:(e,t,s)=>{"use strict";s.r(t)},47:(e,t,s)=>{"use strict";s.r(t)},115:(e,t,s)=>{"use strict";s.r(t)},604:(e,t,s)=>{"use strict";s.r(t)},341:e=>{
/**
 * @license MIT
 * @name validateTarget
 * @version 2.0.0
 * @author: Yoriiis aka Joris DANIEL <joris.daniel@gmail.com>
 * @description: Easily validate target of an HTML element especially during event delegation
 * {@link https://github.com/yoriiis/validate-target}
 * @copyright 2020 Joris DANIEL
 **/
e.exports=function({target:e,selectorString:t,nodeName:s}){if("string"==typeof s&&(s=[s]),Array.isArray(s)&&s.length)return s.map((s=>e.nodeName.toLowerCase()===s&&e.matches(t))).includes(!0)}},363:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 010 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84z"/></svg>'},299:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z"/></svg>'},804:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"/></svg>'},951:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"/></svg>'},169:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 000-1.69L9.54 5.98A.998.998 0 008 6.82z"/></svg>'},418:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/></svg>'},569:e=>{"use strict";e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/></svg>'}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";var e=n;e.default=void 0;var t,i=(t=s(229))&&t.__esModule?t:{default:t};s(256),s(129),s(604),s(469),s(43),s(294),s(940),s(192);var r=i.default;e.default=r})(),n=n.default})()}));