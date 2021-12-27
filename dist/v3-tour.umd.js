var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,n)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,__assign=(t,e)=>{for(var n in e||(e={}))__hasOwnProp.call(e,n)&&__defNormalProp(t,n,e[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))__propIsEnum.call(e,n)&&__defNormalProp(t,n,e[n]);return t};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).VueTour=e(t.Vue)}(this,(function(t){"use strict";const e={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},n={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},o={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},r="box-shadow 0s ease-in-out 0s",i={enableScrolling:!0,highlight:n.highlight,enabledButtons:n.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window",padding:10}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},s=39,a=37,c=27;const p={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>n},callbacks:{type:Object,default:()=>e}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return __assign(__assign({},n),this.options)},customCallbacks(){return __assign(__assign({},e),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let o=this.steps[t];if(void 0!==o.before)try{await o.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let o=this.steps[t];if(void 0!==o.before)try{await o.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){switch(this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t),t.keyCode){case s:this.isKeyEnabled("arrowRight")&&this.nextStep();break;case a:this.isKeyEnabled("arrowLeft")&&this.previousStep();break;case c:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},u={class:"v-tour"};p.render=function(e,n,o,r,i,s){const a=t.resolveComponent("v-step");return t.openBlock(),t.createBlock("div",u,[t.renderSlot(e.$slots,"default",{currentStep:i.currentStep,steps:o.steps,previousStep:s.previousStep,nextStep:s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,isFirst:s.isFirst,isLast:s.isLast,labels:s.customOptions.labels,enabledButtons:s.customOptions.enabledButtons,highlight:s.customOptions.highlight,debug:s.customOptions.debug},(()=>[o.steps[i.currentStep]?(t.openBlock(),t.createBlock(a,{step:o.steps[i.currentStep],key:i.currentStep,"previous-step":s.previousStep,"next-step":s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,"is-first":s.isFirst,"is-last":s.isLast,labels:s.customOptions.labels,"enabled-buttons":s.customOptions.enabledButtons,highlight:s.customOptions.highlight,"stop-on-fail":s.customOptions.stopOnTargetNotFound,debug:s.customOptions.debug,ionic:s.customOptions.ionic,onTargetNotFound:n[1]||(n[1]=t=>e.$emit("targetNotFound",t))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):t.createCommentVNode("",!0)]))])};var l="top",f="bottom",d="right",h="left",m="auto",g=[l,f,d,h],v="start",b="end",y="viewport",w="popper",O=g.reduce((function(t,e){return t.concat([e+"-"+v,e+"-"+b])}),[]),S=[].concat(g,[m]).reduce((function(t,e){return t.concat([e,e+"-"+v,e+"-"+b])}),[]),x=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(t){return t?(t.nodeName||"").toLowerCase():null}function _(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function E(t){return t instanceof _(t).Element||t instanceof Element}function B(t){return t instanceof _(t).HTMLElement||t instanceof HTMLElement}function j(t){return"undefined"!=typeof ShadowRoot&&(t instanceof _(t).ShadowRoot||t instanceof ShadowRoot)}var P={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];B(r)&&k(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});B(o)&&k(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function N(t){return t.split("-")[0]}function C(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function L(t){var e=C(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function T(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&j(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function D(t){return _(t).getComputedStyle(t)}function M(t){return["table","td","th"].indexOf(k(t))>=0}function A(t){return((E(t)?t.ownerDocument:t.document)||window.document).documentElement}function H(t){return"html"===k(t)?t:t.assignedSlot||t.parentNode||(j(t)?t.host:null)||A(t)}function F(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function R(t){return B(t)&&"fixed"!==D(t).position?t.offsetParent:null}function I(t){var e=_(t),n=R(t);if(n&&("ION-CONTENT"===n.tagName||"MAIN"===n.tagName)){var o=document.getElementsByClassName("ion-page");if(o.length){for(var r,i={},s=F(o);!(r=s()).done;){var a=r.value;i[e.getComputedStyle(a)["z-index"]]=a.querySelector("ion-content")}var c=i[Math.max.apply(Math,Object.keys(i))].shadowRoot;c&&(n=c.querySelector("main"))}}for(;n&&M(n)&&"static"===D(n).position;)n=R(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===D(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&B(t)&&"fixed"===D(t).position)return null;for(var n=H(t);B(n)&&["html","body"].indexOf(k(n))<0;){var o=D(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function q(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var W=Math.max,$=Math.min,K=Math.round;function U(t,e,n){return W(t,$(e,n))}function z(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Y(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.offsets,s=t.position,a=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,u=!0===p?function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1;return{x:K(K(e*o)/o)||0,y:K(K(n*o)/o)||0}}(i):"function"==typeof p?p(i):i,m=u.x,g=void 0===m?0:m,v=u.y,b=void 0===v?0:v,y=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),O=h,S=l,x=window;if(c){var k=I(n),E="clientHeight",B="clientWidth";k===_(n)&&"static"!==D(k=A(n)).position&&(E="scrollHeight",B="scrollWidth"),k=k,r===l&&(S=f,b-=k[E]-o.height,b*=a?1:-1),r===h&&(O=d,g-=k[B]-o.width,g*=a?1:-1)}var j,P=Object.assign({position:s},c&&X);return a?Object.assign({},P,((j={})[S]=w?"0":"",j[O]=y?"0":"",j.transform=(x.devicePixelRatio||1)<2?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",j)):Object.assign({},P,((e={})[S]=w?b+"px":"",e[O]=y?g+"px":"",e.transform="",e))}var J={passive:!0};var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function Z(t){return t.replace(/left|right|bottom|top/g,(function(t){return Q[t]}))}var tt={start:"end",end:"start"};function et(t){return t.replace(/start|end/g,(function(t){return tt[t]}))}function nt(t){var e=_(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ot(t){return C(A(t)).left+nt(t).scrollLeft}function rt(t){var e=D(t),n=e.overflow,o=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function it(t){return["html","body","#document"].indexOf(k(t))>=0?t.ownerDocument.body:B(t)&&rt(t)?t:it(H(t))}function st(t,e){var n;void 0===e&&(e=[]);var o=it(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=_(o),s=r?[i].concat(i.visualViewport||[],rt(o)?o:[]):o,a=e.concat(s);return r?a:a.concat(st(H(s)))}function at(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ct(t,e){return e===y?at(function(t){var e=_(t),n=A(t),o=e.visualViewport,r=n.clientWidth,i=n.clientHeight,s=0,a=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,a=o.offsetTop)),{width:r,height:i,x:s+ot(t),y:a}}(t)):B(e)?function(t){var e=C(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):at(function(t){var e,n=A(t),o=nt(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=W(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=W(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-o.scrollLeft+ot(t),c=-o.scrollTop;return"rtl"===D(r||n).direction&&(a+=W(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:a,y:c}}(A(t)))}function pt(t,e,n){var o="clippingParents"===e?function(t){var e=st(H(t)),n=["absolute","fixed"].indexOf(D(t).position)>=0&&B(t)?I(t):t;return E(n)?e.filter((function(t){return E(t)&&T(t,n)&&"body"!==k(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],s=r.reduce((function(e,n){var o=ct(t,n);return e.top=W(o.top,e.top),e.right=$(o.right,e.right),e.bottom=$(o.bottom,e.bottom),e.left=W(o.left,e.left),e}),ct(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(t){return t.split("-")[1]}function lt(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?N(r):null,s=r?ut(r):null,a=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case l:e={x:a,y:n.y-o.height};break;case f:e={x:a,y:n.y+n.height};break;case d:e={x:n.x+n.width,y:c};break;case h:e={x:n.x-o.width,y:c};break;default:e={x:n.x,y:n.y}}var p=i?q(i):null;if(null!=p){var u="y"===p?"height":"width";switch(s){case v:e[p]=e[p]-(n[u]/2-o[u]/2);break;case b:e[p]=e[p]+(n[u]/2-o[u]/2)}}return e}function ft(t,e){void 0===e&&(e={});var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,s=void 0===i?"clippingParents":i,a=n.rootBoundary,c=void 0===a?y:a,p=n.elementContext,u=void 0===p?w:p,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,b=void 0===v?0:v,O=z("number"!=typeof b?b:Y(b,g)),S=u===w?"reference":w,x=t.elements.reference,k=t.rects.popper,_=t.elements[m?S:u],B=pt(E(_)?_:_.contextElement||A(t.elements.popper),s,c),j=C(x),P=lt({reference:j,element:k,strategy:"absolute",placement:r}),N=at(Object.assign({},k,P)),L=u===w?N:j,T={top:B.top-L.top+O.top,bottom:L.bottom-B.bottom+O.bottom,left:B.left-L.left+O.left,right:L.right-B.right+O.right},D=t.modifiersData.offset;if(u===w&&D){var M=D[r];Object.keys(T).forEach((function(t){var e=[d,f].indexOf(t)>=0?1:-1,n=[l,f].indexOf(t)>=0?"y":"x";T[t]+=M[n]*e}))}return T}function dt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function ht(t){return[l,d,f,h].some((function(e){return t[e]>=0}))}function mt(t,e,n){void 0===n&&(n=!1);var o,r,i=A(e),s=C(t),a=B(e),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(a||!a&&!n)&&(("body"!==k(e)||rt(i))&&(c=(o=e)!==_(o)&&B(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:nt(o)),B(e)?((p=C(e)).x+=e.clientLeft,p.y+=e.clientTop):i&&(p.x=ot(i))),{x:s.left+c.scrollLeft-p.x,y:s.top+c.scrollTop-p.y,width:s.width,height:s.height}}function gt(t){var e=new Map,n=new Set,o=[];function r(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&r(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),o}var vt={placement:"bottom",modifiers:[],strategy:"absolute"};function bt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function yt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?vt:r;return function(t,e,n){void 0===n&&(n=i);var r,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},vt,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],p=!1,u={state:a,setOptions:function(n){l(),a.options=Object.assign({},i,a.options,n),a.scrollParents={reference:E(t)?st(t):t.contextElement?st(t.contextElement):[],popper:st(e)};var r,s,p=function(t){var e=gt(t);return x.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((r=[].concat(o,a.options.modifiers),s=r.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(s).map((function(t){return s[t]}))));return a.orderedModifiers=p.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect;if("function"==typeof r){var i=r({state:a,name:e,instance:u,options:o}),s=function(){};c.push(i||s)}})),u.update()},forceUpdate:function(){if(!p){var t=a.elements,e=t.reference,n=t.popper;if(bt(e,n)){a.rects={reference:mt(e,I(n),"fixed"===a.options.strategy),popper:L(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var r=a.orderedModifiers[o],i=r.fn,s=r.options,c=void 0===s?{}:s,l=r.name;"function"==typeof i&&(a=i({state:a,options:c,name:l,instance:u})||a)}else a.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){u.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(r())}))}))),s}),destroy:function(){l(),p=!0}};if(!bt(t,e))return u;function l(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!p&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var wt=yt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,s=o.resize,a=void 0===s||s,c=_(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach((function(t){t.addEventListener("scroll",n.update,J)})),a&&c.addEventListener("resize",n.update,J),function(){i&&p.forEach((function(t){t.removeEventListener("scroll",n.update,J)})),a&&c.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=lt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,c=void 0===a||a,p={placement:N(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,G(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,G(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},P,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,s=S.reduce((function(t,n){return t[n]=function(t,e,n){var o=N(t),r=[h,l].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*r,[h,d].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,i),t}),{}),a=s[e.placement],c=a.x,p=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,p=n.padding,u=n.boundary,b=n.rootBoundary,y=n.altBoundary,w=n.flipVariations,x=void 0===w||w,k=n.allowedAutoPlacements,_=e.options.placement,E=N(_),B=c||(E===_||!x?[Z(_)]:function(t){if(N(t)===m)return[];var e=Z(t);return[et(t),e,et(e)]}(_)),j=[_].concat(B).reduce((function(t,n){return t.concat(N(n)===m?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?S:c,u=ut(o),l=u?a?O:O.filter((function(t){return ut(t)===u})):g,f=l.filter((function(t){return p.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=ft(t,{placement:n,boundary:r,rootBoundary:i,padding:s})[N(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:u,rootBoundary:b,padding:p,flipVariations:x,allowedAutoPlacements:k}):n)}),[]),P=e.rects.reference,C=e.rects.popper,L=new Map,T=!0,D=j[0],M=0;M<j.length;M++){var A=j[M],H=N(A),F=ut(A)===v,V=[l,f].indexOf(H)>=0,R=V?"width":"height",I=ft(e,{placement:A,boundary:u,rootBoundary:b,altBoundary:y,padding:p}),q=V?F?d:h:F?f:l;P[R]>C[R]&&(q=Z(q));var W=Z(q),$=[];if(i&&$.push(I[H]<=0),a&&$.push(I[q]<=0,I[W]<=0),$.every((function(t){return t}))){D=A,T=!1;break}L.set(A,$)}if(T)for(var K=function(t){var e=j.find((function(e){var n=L.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return D=e,"break"},U=x?3:1;U>0;U--){if("break"===K(U))break}e.placement!==D&&(e.modifiersData[o]._skip=!0,e.placement=D,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,p=n.rootBoundary,u=n.altBoundary,m=n.padding,g=n.tether,b=void 0===g||g,y=n.tetherOffset,w=void 0===y?0:y,O=ft(e,{boundary:c,rootBoundary:p,padding:m,altBoundary:u}),S=N(e.placement),x=ut(e.placement),k=!x,_=q(S),E="x"===_?"y":"x",B=e.modifiersData.popperOffsets,j=e.rects.reference,P=e.rects.popper,C="function"==typeof w?w(Object.assign({},e.rects,{placement:e.placement})):w,T={x:0,y:0};if(B){if(i||a){var D="y"===_?l:h,M="y"===_?f:d,A="y"===_?"height":"width",H=B[_],F=B[_]+O[D],V=B[_]-O[M],R=b?-P[A]/2:0,K=x===v?j[A]:P[A],z=x===v?-P[A]:-j[A],Y=e.elements.arrow,X=b&&Y?L(Y):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[D],Q=G[M],Z=U(0,j[A],X[A]),tt=k?j[A]/2-R-Z-J-C:K-Z-J-C,et=k?-j[A]/2+R+Z+Q+C:z+Z+Q+C,nt=e.elements.arrow&&I(e.elements.arrow),ot=nt?"y"===_?nt.clientTop||0:nt.clientLeft||0:0,rt=e.modifiersData.offset?e.modifiersData.offset[e.placement][_]:0,it=B[_]+tt-rt-ot,st=B[_]+et-rt;if(i){var at=U(b?$(F,it):F,H,b?W(V,st):V);B[_]=at,T[_]=at-H}if(a){var ct="x"===_?l:h,pt="x"===_?f:d,lt=B[E],dt=lt+O[ct],ht=lt-O[pt],mt=U(b?$(dt,it):dt,lt,b?W(ht,st):ht);B[E]=mt,T[E]=mt-lt}}e.modifiersData[o]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=t.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=N(n.placement),c=q(a),p=[h,d].indexOf(a)>=0?"height":"width";if(i&&s){var u=function(t,e){return z("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Y(t,g))}(r.padding,n),m=L(i),v="y"===c?l:h,b="y"===c?f:d,y=n.rects.reference[p]+n.rects.reference[c]-s[c]-n.rects.popper[p],w=s[c]-n.rects.reference[c],O=I(i),S=O?"y"===c?O.clientHeight||0:O.clientWidth||0:0,x=y/2-w/2,k=u[v],_=S-m[p]-u[b],E=S/2-m[p]/2+x,B=U(k,E,_),j=c;n.modifiersData[o]=((e={})[j]=B,e.centerOffset=B-E,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&T(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,s=ft(e,{elementContext:"reference"}),a=ft(e,{altBoundary:!0}),c=dt(s,o),p=dt(a,r,i),u=ht(c),l=ht(p);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),Ot=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt=function(){var t=void 0,e=void 0,n=void 0,o=void 0,r=void 0,i=void 0,s=void 0,a=void 0,c=void 0,p=void 0,u=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){c||(c=n),u=r(p=n-c,e,s,a),window.scrollTo(0,u),p<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&i&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();c=!1}()}return function(c){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=p.duration||1e3,o=p.offset||0,l=p.callback,r=p.easing||Ot,i=p.a11y||!1,e=f(),void 0===c?"undefined":St(c)){case"number":t=void 0,i=!1,n=e+c;break;case"object":n=d(t=c);break;case"string":t=document.querySelector(c),n=d(t)}switch(s=n-e+o,St(p.duration)){case"number":a=p.duration;break;case"function":a=p.duration(s)}window.requestAnimationFrame(h)}}();function kt(t,e){var n,o;if(0===e.length)return t;for(n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function _t(t,e,n,o){var r,i=kt(kt(kt(t,n),(r=e,Object.prototype.toString.call(r))),typeof e);if(null===e)return kt(i,"null");if(void 0===e)return kt(i,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==o.indexOf(e))return kt(i,"[Circular]"+n);o.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,o){return _t(t,e[o],o,n)}),t)}(i,e,o);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return kt(s,String(e.valueOf()))}catch(a){return kt(s,"[valueOf exception]"+(a.stack||a.message))}}return kt(i,e.toString())}var Et=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(_t(0,t,"",[]).toString(16),8)};const Bt={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){return{hash:Et(this.step.target),targetElement:document.querySelector(this.step.target)}},computed:{params(){return __assign(__assign(__assign(__assign({},i),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),wt(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail&&this.stop())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):xt(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()){document.body.classList.add(o.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${r}`),this.targetElement.classList.add(o.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(o.targetRelative)}else document.body.classList.remove(o.active)},removeHighlight(){if(this.isHighlightEnabled()){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(o.targetHighlighted),this.targetElement.classList.remove(o.targetRelative),e.includes(r)&&setTimeout((()=>{t.style.transition=e.replace(`, ${r}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},getIonContent(){const t=document.getElementsByClassName("ion-page");if(t.length){const e={};for(const n of t){e[window.getComputedStyle(n)["z-index"]]=n.querySelector("ion-content")}return{el:e[Math.max(...Object.keys(e).map((t=>+t)))],pages:Object.keys(e).length}}},ionicScroll(t){const e=this.getOffset(t);this.getIonContent().el.scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},jt=t.withScopeId("data-v-73f99e6f");t.pushScopeId("data-v-73f99e6f");const Pt={key:0,class:"v-step__header"},Nt={class:"v-step__content"},Ct={key:1},Lt={class:"v-step__buttons"};t.popScopeId();const Tt=jt(((e,n,o,r,i,s)=>(t.openBlock(),t.createBlock("div",{class:[{"v-step--sticky":s.isSticky},"v-step"],id:"v-step-"+i.hash,ref:"v-step-"+i.hash},[t.renderSlot(e.$slots,"header",{},(()=>[o.step.header?(t.openBlock(),t.createBlock("div",Pt,[o.step.header.title?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.header.title},null,8,["innerHTML"])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)]),{},!0),t.renderSlot(e.$slots,"content",{},(()=>[t.createVNode("div",Nt,[o.step.content?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.content},null,8,["innerHTML"])):(t.openBlock(),t.createBlock("div",Ct,"This is a demo step! The id of this step is "+t.toDisplayString(i.hash)+" and it targets "+t.toDisplayString(o.step.target)+".",1))])]),{},!0),t.renderSlot(e.$slots,"actions",{},(()=>[t.createVNode("div",Lt,[!o.isLast&&s.isButtonEnabled("buttonSkip")?(t.openBlock(),t.createBlock("button",{key:0,onClick:n[1]||(n[1]=t.withModifiers(((...t)=>o.skip&&o.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},t.toDisplayString(o.labels.buttonSkip),1)):t.createCommentVNode("",!0),!o.isFirst&&s.isButtonEnabled("buttonPrevious")?(t.openBlock(),t.createBlock("button",{key:1,onClick:n[2]||(n[2]=t.withModifiers(((...t)=>o.previousStep&&o.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},t.toDisplayString(o.labels.buttonPrevious),1)):t.createCommentVNode("",!0),!o.isLast&&s.isButtonEnabled("buttonNext")?(t.openBlock(),t.createBlock("button",{key:2,onClick:n[3]||(n[3]=t.withModifiers(((...t)=>o.nextStep&&o.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},t.toDisplayString(o.labels.buttonNext),1)):t.createCommentVNode("",!0),o.isLast&&s.isButtonEnabled("buttonStop")?(t.openBlock(),t.createBlock("button",{key:3,onClick:n[4]||(n[4]=t.withModifiers(((...t)=>o.finish&&o.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},t.toDisplayString(o.labels.buttonStop),1)):t.createCommentVNode("",!0)])]),{},!0),t.createVNode("div",{class:["v-step__arrow",{"v-step__arrow--dark":o.step.header&&o.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));Bt.render=Tt,Bt.__scopeId="data-v-73f99e6f";return{install(t,e){t.component(p.name,p),t.component(Bt.name,Bt),t.config.globalProperties.$tours={}}}}));