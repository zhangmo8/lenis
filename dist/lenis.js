var t=require("tiny-emitter"),e=require("virtual-scroll");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/r(t),i=/*#__PURE__*/r(e);function n(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e,r){return Math.max(t,Math.min(e,r))}var h=["duration","easing"],p=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var r=this,o=void 0===e?{}:e,i=o.duration,n=void 0===i?1:i,s=o.easing,a=void 0===s?function(t){return t}:s,c=function(t,e){if(null==t)return{};var r,o,i={},n=Object.keys(t);for(o=0;o<n.length;o++)e.indexOf(r=n[o])>=0||(i[r]=t[r]);return i}(o,h);this.target=t,this.fromKeys=l({},c),this.toKeys=l({},c),this.keys=Object.keys(l({},c)),this.keys.forEach(function(e){r.fromKeys[e]=t[e]}),this.duration=n,this.easing=a,this.currentTime=0,this.isRunning=!0},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+.001*t,this.duration);var r=this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*r}),1===r&&(this.isRunning=!1)}},s(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}();module.exports=/*#__PURE__*/function(t){var e,r;function o(e){var r,o,n,s,l=void 0===e?{}:e,a=l.duration,h=void 0===a?1.2:a,d=l.easing,u=void 0===d?function(t){return 1===t?1:1-Math.pow(2,-10*t)}:d,f=l.smooth,v=void 0===f||f,g=l.direction,w=void 0===g?"vertical":g,y=l.wrapper,m=void 0===y?window:y,b=l.content,S=void 0===b?document.body:b;(s=t.call(this)||this).onWindowResize=function(){s.wrapperWidth=window.innerWidth,s.wrapperHeight=window.innerHeight},s.onWrapperResize=function(t){var e=t[0];if(e){var r=e.contentRect;s.wrapperWidth=r.width,s.wrapperHeight=r.height}},s.onContentResize=function(t){var e=t[0];if(e){var r=e.contentRect;s.contentWidth=r.width,s.contentHeight=r.height}},s.onVirtualScroll=function(t){var e=t.deltaY,r=t.originalEvent;!r.ctrlKey&&s.smooth&&(s.stopped?r.preventDefault():(s.smooth&&r.preventDefault(),s.targetScroll-=e,s.targetScroll=c(0,s.targetScroll,s.limit),s.scrollTo(s.targetScroll)))},s.onScroll=function(){s.isScrolling&&s.smooth||(s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.notify())},void 0!==arguments[0].lerp&&console.warn("Lenis: lerp option is deprecated, you must use duration and easing options instead. See documentation https://github.com/studio-freight/lenis"),window.lenisVersion="0.2.1",s.wrapperNode=m,s.contentNode=S,s.duration=h,s.easing=u,s.smooth=v,s.direction=w,s.animate=new p,s.wrapperNode.addEventListener("scroll",s.onScroll);var O=(null==(r=navigator)||null==(o=r.userAgentData)?void 0:o.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return s.virtualScroll=new i.default({el:s.wrapperNode,firefoxMultiplier:50,mouseMultiplier:O.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),s.virtualScroll.on(s.onVirtualScroll),s.wrapperNode===window?(s.wrapperNode.addEventListener("resize",s.onWindowResize),s.onWindowResize()):(s.wrapperHeight=s.wrapperNode.offsetHeight,s.wrapperWidth=s.wrapperNode.offsetWidth,s.wrapperObserver=new ResizeObserver(s.onWrapperResize),s.wrapperObserver.observe(s.wrapperNode)),s.contentHeight=s.contentNode.offsetHeight,s.contentWidth=s.contentNode.offsetWidth,s.contentObserver=new ResizeObserver(s.onContentResize),s.contentObserver.observe(s.contentNode),s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,a(e,r);var n=o.prototype;return n.start=function(){this.stopped=!1},n.stop=function(){this.stopped=!0},n.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},n.raf=function(t){var e=t-this.now;this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(e),Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.lastScroll=this.targetScroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},n.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},n.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},n.scrollTo=function(t,e){var r,o=void 0===e?{}:e,i=o.offset,n=o.immediate,s=void 0!==n&&n,l=o.duration,a=void 0===l?this.duration:l,c=o.easing,h=void 0===c?this.easing:c;r="number"==typeof t?t:0,this.targetScroll=r+=void 0===i?0:i,!this.smooth||s?this.setScroll(this.targetScroll):this.animate.to(this,{duration:a,easing:h,scroll:this.targetScroll})},s(o,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),o}(o.default);
//# sourceMappingURL=lenis.js.map