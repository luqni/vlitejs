!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlitejsVimeo=t():e.vlitejsVimeo=t()}(globalThis,(function(){return(()=>{"use strict";var e={414:(e,t,i)=>{var n;void 0===(n=function(e,t){if({value:!0},void 0===window.vlitejs)throw new Error('vlitejs :: The library "vlitejs" is not available.');let i=[];class n extends window.vlitejs.Player{init(){return this.waitUntilVideoIsReady().then((()=>(this.addSpecificEvents(),super.onPlayerReady(),this))).catch((()=>i.push(this)))}waitUntilVideoIsReady(){return new window.Promise(((e,t)=>{void 0!==window.Vimeo?this.initVimeoPlayer().then(e):t()}))}initVimeoPlayer(){return new window.Promise(((e,t)=>{this.instancePlayer=new window.Vimeo.Player(this.element.getAttribute("id"),{id:this.element.getAttribute("data-vimeo-id"),controls:!0}),this.element=this.instancePlayer.element,this.instancePlayer.ready().then(e)}))}addSpecificEvents(){this.options.controls&&(this.options.time&&this.instancePlayer.on("durationchange",this.onDurationChange.bind(this)),this.instancePlayer.on("timeupdate",this.onTimeUpdate.bind(this))),this.instancePlayer.on("ended",this.onVideoEnded.bind(this)),this.instancePlayer.on("playing",this.onPlaying.bind(this)),this.instancePlayer.on("waiting",this.onWaiting.bind(this)),this.instancePlayer.on("seeking",this.onSeeking.bind(this)),this.instancePlayer.on("seeked",this.onSeeked.bind(this))}getInstance(){return this.instancePlayer}getCurrentTime(){return new window.Promise((e=>{this.instancePlayer.getCurrentTime().then((t=>e(t)))}))}setCurrentTime(e){this.instancePlayer.setCurrentTime(e)}getDuration(){return new window.Promise((e=>{this.instancePlayer.getDuration().then((t=>e(t)))}))}methodPlay(){this.instancePlayer.play()}methodPause(){this.instancePlayer.pause()}methodMute(){this.instancePlayer.setVolume(0)}methodUnMute(){this.instancePlayer.setVolume(1)}onWaiting(){this.vliteInstance.loading(!0)}onPlaying(){this.vliteInstance.loading(!1)}onSeeking(){this.vliteInstance.loading(!0)}onSeeked(){this.vliteInstance.loading(!1)}removeSpecificEvents(){this.options.time&&this.instancePlayer.off("durationchange",this.onDurationChange),this.instancePlayer.off("timeupdate",this.onTimeUpdate),this.instancePlayer.off("playing",this.onPlaying),this.instancePlayer.off("waiting",this.onWaiting),this.instancePlayer.off("seeking",this.onSeeking),this.instancePlayer.off("seeked",this.onSeeked),this.instancePlayer.off("ended",this.onVideoEnded)}destroy(){this.removeSpecificEvents(),this.instancePlayer.destroy(),super.destroy()}}if(void 0===window.Vimeo){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="https://player.vimeo.com/api/player.js",e.onload=()=>{i.forEach((e=>{e.initVimeoPlayer().then((()=>{e.addSpecificEvents(),e.onPlayerReady()}))})),i=[]},document.getElementsByTagName("body")[0].appendChild(e)}t.default=n}.apply(t,[i,t]))||(e.exports=n)}},t={};var i=function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}(414);return i=i.default})()}));