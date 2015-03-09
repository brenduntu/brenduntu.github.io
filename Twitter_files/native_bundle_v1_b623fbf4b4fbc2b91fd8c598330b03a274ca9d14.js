/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! matches.js v1.0.3 - Nicolas Gallagher - MIT license */

/*! delegate.js v1.0.2 - Nicolas Gallagher - MIT license */

/*!
 * xdm.js – Nicolas Gallagher – MIT License
 * easyXDM – Copyright(c) 2009-2011, Øyvind Sean Kinsey, oyvind@kinsey.no – MIT License
 */

!function(){var e,t,n;!function(o){function r(e,t){return w.call(e,t)}function a(e,t){var n,o,r,a,i,c,s,l,u,d,f=t&&t.split("/"),m=v.map,p=m&&m["*"]||{};if(e&&"."===e.charAt(0))if(t){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),l=0;l<e.length;l+=1)if(d=e[l],"."===d)e.splice(l,1),l-=1;else if(".."===d){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((f||p)&&m){for(n=e.split("/"),l=n.length;l>0;l-=1){if(o=n.slice(0,l).join("/"),f)for(u=f.length;u>0;u-=1)if(r=m[f.slice(0,u).join("/")],r&&(r=r[o])){a=r,i=l;break}if(a)break;!c&&p&&p[o]&&(c=p[o],s=l)}!a&&c&&(a=c,i=s),a&&(n.splice(0,i,a),e=n.join("/"))}return e}function i(e,t){return function(){return m.apply(o,_.call(arguments,0).concat([e,t]))}}function c(e){return function(t){return a(t,e)}}function s(e){return function(t){h[e]=t}}function l(e){if(r(E,e)){var t=E[e];delete E[e],y[e]=!0,f.apply(o,t)}if(!r(h,e)&&!r(y,e))throw new Error("No "+e);return h[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function d(e){return function(){return v&&v.config&&v.config[e]||{}}}var f,m,p,g,h={},E={},v={},y={},w=Object.prototype.hasOwnProperty,_=[].slice;p=function(e,t){var n,o=u(e),r=o[0];return e=o[1],r&&(r=a(r,t),n=l(r)),r?e=n&&n.normalize?n.normalize(e,c(t)):a(e,t):(e=a(e,t),o=u(e),r=o[0],e=o[1],r&&(n=l(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return i(e)},exports:function(e){var t=h[e];return"undefined"!=typeof t?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:d(e)}}},f=function(e,t,n,a){var c,u,d,f,m,v,w=[];if(a=a||e,"function"==typeof n){for(t=!t.length&&n.length?["require","exports","module"]:t,m=0;m<t.length;m+=1)if(f=p(t[m],a),u=f.f,"require"===u)w[m]=g.require(e);else if("exports"===u)w[m]=g.exports(e),v=!0;else if("module"===u)c=w[m]=g.module(e);else if(r(h,u)||r(E,u)||r(y,u))w[m]=l(u);else{if(!f.p)throw new Error(e+" missing "+u);f.p.load(f.n,i(a,!0),s(u),{}),w[m]=h[u]}d=n.apply(h[e],w),e&&(c&&c.exports!==o&&c.exports!==h[e]?h[e]=c.exports:d===o&&v||(h[e]=d))}else e&&(h[e]=n)},e=t=m=function(e,t,n,r,a){return"string"==typeof e?g[e]?g[e](t):l(p(e,t).f):(e.splice||(v=e,t.splice?(e=t,t=n,n=null):e=o),t=t||function(){},"function"==typeof n&&(n=r,r=a),r?f(o,e,t,n):setTimeout(function(){f(o,e,t,n)},4),m)},m.config=function(e){return v=e,v.deps&&m(v.deps,v.callback),m},n=function(e,t,n){t.splice||(n=t,t=[]),r(h,e)||r(E,e)||(E[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("almondLib",function(){}),function(e){function t(e,t){var n,o,i=e.parentNode;if(i||a||(i=document.createDocumentFragment(),i.appendChild(e)),r)return r.call(e,t);for(n=i.querySelectorAll(t),o=n.length;o--;)if(n[o]===e)return!0;return!1}var o=Element.prototype,r=o.matches||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,a=function(){return r?r.call(document.createElement("a"),"a"):!1}();"object"==typeof exports?module.exports=t:"function"==typeof n&&n.amd?n("matches",[],function(){return t}):e.matches=t}(this),function(e){function o(e){function t(e){if(!o(e))throw new Error("delegate(): The argument must be an Element or Document Node");return r=e,t}function n(t,n,o){for(;n&&n!==t;){if(e(n,o))return n;n=n.parentElement}return null}function o(e){return e&&e.nodeName&&(3===e.nodeType||9===e.nodeType)?!0:!1}var r;return t.on=function(e,o,a,i,c){function s(i){(i.delegateTarget=n(r,i.target,o))&&(c===!0&&t(r).off(e,s),a.call(r,i))}return a._delegateWrapper=s,r.addEventListener(e,s,i||!1),a},t.once=function(e,n,o,r){t.on(e,n,o,r,!0)},t.off=function(e,t,n){t._delegateWrapper&&(t=t._delegateWrapper),r.removeEventListener(e,t,n||!1)},t}"object"==typeof exports?module.exports=o(t("matches")):"function"==typeof n&&n.amd?n("delegate",["matches"],o):e.delegate=o(e.matches)}(this),n("common/throttle",["require","exports","module"],function(e,t,n){n.exports=function(e,t){var n,o,r,a,i=0,c=function(){i=new Date,r=null,a=e.apply(n,o)};return function(){var s=new Date,l=t-(s-i);return n=this,o=arguments,0>=l?(clearTimeout(r),r=null,i=s,a=e.apply(n,o)):r||(r=setTimeout(c,l)),a}}}),function(e){function t(e){return"[object Array]"===Object.prototype.toString.call(e)}function o(e){return"undefined"==typeof e}function r(t){return e.xdm=O,w=t,w&&(b="xdm_"+w.replace(".","_")+"_"),_}function a(e){if(!e)throw new Error("url is undefined or empty");if(/^file/.test(e))throw new Error("The file:// protocol is not supported");var t=e.toLowerCase().match(E);if(t){var n=t[2],o=t[3],r=t[4]||"";return("http:"===n&&":80"===r||"https:"===n&&":443"===r)&&(r=""),n+"//"+o+r}return e}function i(e){if(!e)throw new Error("url is undefined or empty");if(e=e.replace(y,"$1/"),!e.match(/^(http||https):\/\//)){var t="/"===e.substring(0,1)?"":location.pathname;"/"!==t.substring(t.length-1)&&(t=t.substring(0,t.lastIndexOf("/")+1)),e=location.protocol+"//"+location.host+t+e}for(;v.test(e);)e=e.replace(v,"");return e}function c(e,t){if(!t)throw new Error("parameters is undefined or null");var n=e.indexOf("#"),o=[];for(var r in t)t.hasOwnProperty(r)&&o.push(r+"="+encodeURIComponent(t[r]));return e+(-1===n?"#":"&")+o.join("&")}function s(e,t,n){var o;for(var r in t)t.hasOwnProperty(r)&&(r in e?(o=t[r],"object"==typeof o?s(e[r],o,n):n||(e[r]=t[r])):e[r]=t[r]);return e}function l(e){var t=p.cloneNode(!1);if(s(e.props,{frameBorder:0,allowTRansparency:!0,scrolling:"no",width:"100%",src:c(e.remote,{xdm_e:a(location.href),xdm_c:e.channel,xdm_p:1}),name:b+e.channel+"_provider",style:{margin:0,padding:0,border:0}}),t.id=e.props.name,delete e.props.name,!e.container)throw new Error('xdm.Rpc() configuration object missing a DOM "container" property');return s(t,e.props),e.container.appendChild(t),e.onLoad&&C(t,"load",e.onLoad),e.html&&(t.contentWindow.document.open(),t.contentWindow.document.write(e.html),t.contentWindow.document.close()),e.iframe=t,t}function u(e,t){"string"==typeof e&&(e=[e]);for(var n,o=e.length;o--;)if(n=e[o],n=new RegExp("^"===n.substr(0,1)?n:"^"+n.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),n.test(t))return!0;return!1}function d(e){var t;if(e.isHost=e.isHost||o(T.xdm_p),e.props=e.props||{},e.isHost)e.remote=i(e.remote),e.channel=e.channel||"default"+g++;else if(e.channel=T.xdm_c.replace(/["'<>\\]/g,""),e.remote=T.xdm_e.replace(/["'<>\\]/g,""),e.acl&&!u(e.acl,e.remote))throw new Error("Access denied for "+e.remote);return t=[new _.stack.PostMessageTransport(e)],t.push(new _.stack.QueueBehavior(!0)),t}function f(e){var t,n,o=e.length,r={incoming:function(e,t){this.up.incoming(e,t)},outgoing:function(e,t){this.down.outgoing(e,t)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}};for(n=0;o>n;n++)t=e[n],s(t,r,!0),0!==n&&(t.down=e[n-1]),n!==o-1&&(t.up=e[n+1]);return t}function m(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}var p=document.createElement("IFRAME"),g=Math.floor(1e4*Math.random()),h=Function.prototype,E=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,v=/[\-\w]+\/\.\.\//,y=/([^:])\/\//g,w="",_={},O=e.xdm,b="xdm_",T=function(e){e=e.substring(1,e.length).split("&");for(var t,n={},o=e.length;o--;)t=e[o].split("="),n[t[0]]=decodeURIComponent(t[1]);return n}(location.hash),C=function(){return e.addEventListener?function(e,t,n){e.addEventListener(t,n,!1)}:function(e,t,n){e.attachEvent("on"+t,n)}}(),N=function(){return e.removeEventListener?function(e,t,n){e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent("on"+t,n)}}();s(_,{version:"1.0.0",query:T,stack:{},noConflict:r}),_.Rpc=function(e,t){var n;if(t.local)for(var o in t.local)t.local.hasOwnProperty(o)&&(n=t.local[o],"function"==typeof n&&(t.local[o]={method:n}));var r=f(d(e).concat([new _.stack.RpcBehavior(this,t),{callback:function(t){e.onReady&&e.onReady(t)}}]));this.origin=a(e.remote),this.destroy=function(){r.destroy()},r.init(),this.iframe=e.iframe},_.stack.PostMessageTransport=function(t){function n(e){var n=a(e.origin),r="string"==typeof e.data;n===c&&r&&e.data.substring(0,t.channel.length+1)===t.channel+" "&&o.up.incoming(e.data.substring(t.channel.length+1),n)}var o,r,i,c;return o={outgoing:function(e,n,o){i.postMessage(t.channel+" "+e,n||c),o&&o()},destroy:function(){N(e,"message",n),r&&(i=null,r.parentNode.removeChild(r),r=null)},init:function(){if(c=a(t.remote),t.isHost){var s=function(a){a.data===t.channel+"-ready"&&(i="postMessage"in r.contentWindow?r.contentWindow:r.contentWindow.document,N(e,"message",s),C(e,"message",n),setTimeout(function(){o.up.callback(!0)},0))};C(e,"message",s),r=l(t)}else C(e,"message",n),i="postMessage"in e.parent?e.parent:e.parent.document,i.postMessage(t.channel+"-ready",c),setTimeout(function(){o.up.callback(!0)},0)}}},_.stack.QueueBehavior=function(e){function t(){var i;return e===!0&&0===r.length?void m(n):void(a||0===r.length||o||(a=!0,i=r.shift(),n.down.outgoing(i.data,i.origin,function(e){a=!1,i.callback&&setTimeout(function(){i.callback(e)},0),t()})))}var n,o,r=[],a=!0;return n={init:function(){n.down.init()},callback:function(e){a=!1;var o=n.up;t(),o.callback(e)},incoming:function(e,t){n.up.incoming(e,t)},outgoing:function(e,n,o){r.push({data:e,origin:n,callback:o}),t()},destroy:function(){o=!0,n.down.destroy()}}},_.stack.RpcBehavior=function(e,n){function r(e){e.jsonrpc="2.0",c.down.outgoing(JSON.stringify(e))}function a(e,t){var n=Array.prototype.slice;return function(){var o,a=arguments.length,i={method:t};a>0&&"function"==typeof arguments[a-1]?(a>1&&"function"==typeof arguments[a-2]?(o={success:arguments[a-2],error:arguments[a-1]},i.params=n.call(arguments,0,a-2)):(o={success:arguments[a-1]},i.params=n.call(arguments,0,a-1)),l[""+ ++s]=o,i.id=s):i.params=n.call(arguments,0),e.namedParams&&1===i.params.length&&(i.params=i.params[0]),r(i)}}function i(e,n,a,i){if(!a)return void(n&&r({id:n,error:{code:-32601,message:"Procedure not found."}}));var c,s;n?(c=function(e){c=h,r({id:n,result:e})},s=function(e,t){s=h;var o={id:n,error:{code:-32099,message:e}};t&&(o.error.data=t),r(o)}):c=s=h,t(i)||(i=[i]);try{var l=a.method.apply(a.scope,i.concat([c,s]));o(l)||c(l)}catch(u){s(u.message)}}var c,s=0,l={};return c={incoming:function(e){var t,o=JSON.parse(e);o.method?n.handle?n.handle(o,r):i(o.method,o.id,n.local[o.method],o.params):(t=l[o.id],o.error&&t.error?t.error(o.error):t.success&&t.success(o.result),delete l[o.id])},init:function(){if(n.remote)for(var t in n.remote)n.remote.hasOwnProperty(t)&&(e[t]=a(n.remote[t],t));c.down.init()},destroy:function(){for(var t in n.remote)n.remote.hasOwnProperty(t)&&e.hasOwnProperty(t)&&delete e[t];c.down.destroy()}}},"object"==typeof exports?module.exports=_:"function"==typeof provide?provide(_):"function"==typeof n&&n.amd?n("xdm",[],function(){return _}):e.xdm=_}(window),n("unification/logger",["require","exports","module"],function(e,t,n){function o(e){return function(){if(window.DEBUG){var t=Array.prototype.slice.apply(arguments);t.unshift(e),console.log.apply(console,t)}}}n.exports=o}),n("common/utils",["require","exports","module","unification/logger"],function(e,t,n){var o=e("unification/logger")("[UTILS]"),r={getConfigFromJsonIn:function(e){var t,n=document.getElementById(e),r=null;if(!n)return o(["Element with id",e,"not found"].join(" ")),r;t=n.innerHTML;try{r=JSON.parse(t)}catch(a){o(["Error while parsing json in element",e].join(" "),a)}return r},isEmpty:function(e){return!r.isDefined(e)||"string"==typeof e&&0===e.length},isDefined:function(e){return"undefined"!=typeof e&&null!==e},isObject:function(e){return r.isDefined(e)&&"object"==typeof e},toArray:function(e){return Array.prototype.slice.call(e,0)},escapeHtml:function(e){var t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML},decodeHtml:function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0].nodeValue},trigger:function(e,t){var n=new Event(t);e.dispatchEvent(n)},getFollowElements:function(e){var t,n=e&&e.target;if(n){for(;!n.dataset.userId&&n.parentElement;)n=n.parentElement;return t=n.dataset.userId,r.fetchTargetElement("data-user-id",t)}return[]},fetchTargetElement:function(e,t){var n="*["+e+'="'+t+'"]';return r.toArray(document.querySelectorAll(n))},createUrl:function(e,t){var n=e;n+=-1!==n.indexOf("?")?"&":"?";for(var o in t)n=n+encodeURIComponent(o)+"="+encodeURIComponent(t[o])+"&";return n.substr(0,n.length-1)},getTarget:function(e){return e.target}};n.exports=r}),n("../native/js/interface",["require","exports","module","delegate","common/throttle","xdm","common/utils"],function(e,t,n){{var o=e("delegate"),r=e("common/throttle"),a=e("xdm");e("common/utils")}n.exports=function(e){var t={defaultScribe:{DEFAULT_SCRIBE_ELEMENT:"platform_card"},scribeActionNames:{IMPRESSION:"impression",OPEN_LINK:"open_link",OPEN_PHOTO:"click",CARD_CLICK:"card_click"},configElementId:"config",selectors:{CARD_CLICK:".js-cardClick",COMPOSE_TWEET:".js-statusComposeTweet",CONTAINER:"div#Container",OPEN_LEADGEN_CONFIRM_DIALOG:".js-openLeadGenConfirmDialog",OPEN_LINK:".js-openLink",OPEN_PHOTO:".js-openPhoto",OPEN_PROFILE:".js-openProfile",OPEN_GALLERY:".js-openGallery"},dataAttrs:{CARD_URL:"data-card-url",EARNED:"data-earned",IMPRESSION_ID:"data-impression-id",OPEN_LINK:"data-open-link",P_E_NAME:"data-pe-name",SCREEN_NAME:"data-screen-name",TWEET_TEXT:"data-tweet-text",USER_ID:"data-user-id"},config:null,host:null,hostMethods:null,throttleHandleResize:null,rpcHelpers:{ready:{onReady:function(){t.host.localMethodNames(function(e){t.hostMethods=e,t.handleOnReady(t.hostMethods)})}},methods:{local:{localMethodNames:function(){return{callVideoPlayerMethod:!0}},callVideoPlayerMethod:function(){t.callVideoPlayerMethod.apply(t,arguments)}},remote:{callMethodByName:{},followAdvertiser:{},localMethodNames:{},openLeadGenConfirmDialog:{},openLinkNoScribe:{},openPhotoNoScribe:{},openProfile:{},resizeCard:{},scribe:{},statusComposeTweet:{},unfollowAdvertiser:{}}}},teardown:function(){window.removeEventListener("load",t.handleResize,!1),window.removeEventListener("resize",t.throttleHandleResize,!1),o(document).off("click",t.handleStatusComposeTweet),o(document).off("click",t.handleOpenLeadGenConfirmDialog),o(document).off("click",t.handleOpenLink),o(document).off("click",t.handleOpenPhoto),o(document).off("click",t.handleOpenProfile),o(document).off("click",t.handleCardClick),t.host.destroy&&t.host.destroy()},handleOnReady:function(e){e&&(e.statusComposeTweet&&o(document).on("click",t.selectors.COMPOSE_TWEET,t.handleStatusComposeTweet),e.openLeadGenConfirmDialog&&o(document).on("click",t.selectors.OPEN_LEADGEN_CONFIRM_DIALOG,t.handleOpenLeadGenConfirmDialog),e.openLinkNoScribe&&o(document).on("click",t.selectors.OPEN_LINK,t.handleOpenLink),e.openPhotoNoScribe&&o(document).on("click",t.selectors.OPEN_PHOTO,t.handleOpenPhoto),e.openProfile&&o(document).on("click",t.selectors.OPEN_PROFILE,t.handleOpenProfile),e.scribe&&o(document).on("click",t.selectors.CARD_CLICK,t.handleCardClick),e.resizeCard&&(t.handleResize(),window.addEventListener("load",t.handleResize,!1),window.addEventListener("resize",t.throttleHandleResize,!1)))},handlePromotedEngagement:function(e){var n=t._getPromotedEventName(e.delegateTarget);if(n){var o=t._getImpressionId(),r=!!t._getEarned();t.host.logEvent({event:n,impression_id:o,is_earned:r},!0)}},handleStatusComposeTweet:function(e){t._isSimpleClick(e)&&(t.host.statusComposeTweet({tweetText:e.delegateTarget.getAttribute(t.dataAttrs.TWEET_TEXT),scribeData:t.config.scribeData}),e.preventDefault())},handleOpenLeadGenConfirmDialog:function(e){t.host.openLeadGenConfirmDialog({}),t.handleScribe(t.scribeActionNames.IMPRESSION),e.preventDefault()},handleOpenLink:function(e){var n=e.delegateTarget,o=t._getClosestDataAttribute(n,t.dataAttrs.OPEN_LINK);"a"!==n.nodeName.toLowerCase()&&o&&window.open(o,"_blank"),t.host.openLinkNoScribe({url:n.getAttribute("href"),scribeData:t.config.scribeData}),t.handleScribe(t.scribeActionNames.OPEN_LINK)},handleOpenPhoto:function(e){var n,o,r,a={photos:[]};if(document.querySelector(t.selectors.OPEN_GALLERY))for(r=document.querySelectorAll(t.selectors.OPEN_PHOTO),n=0;o=r[n];n++)a.photos[n]={imageUrl:o.getAttribute("href"),wasClicked:o===e.delegateTarget};else a.photos.push({imageUrl:e.delegateTarget.getAttribute("href"),wasClicked:!0});a.scribeData=t.config.scribeData,t._isSimpleClick(e)&&(t.host.openPhotoNoScribe(a),t.handleScribe(t.scribeActionNames.OPEN_PHOTO),e.preventDefault())},handleOpenProfile:function(e){t._isSimpleClick(e)&&(t.host.openProfile({userId:e.delegateTarget.getAttribute(t.dataAttrs.USER_ID),userScreenName:e.delegateTarget.getAttribute(t.dataAttrs.SCREEN_NAME),scribeData:t.config.scribeData}),e.preventDefault())},handleCardClick:function(){t.handleScribe(t.scribeActionNames.CARD_CLICK)},handleResize:function(){var e=document.documentElement,n=document.getElementById("Container"),o=560,r=n.offsetHeight,a=n.offsetWidth;"function"==typeof t.host.resizeCard&&t.host.resizeCard({height:r+"px"}),320>a&&""!==e.className?e.className="":a>=320&&o>a?e.className="mq-medium":a>=o&&(e.className="mq-medium mq-wide")},handleScribe:function(e,n){var o=n||t.defaultScribe.DEFAULT_SCRIBE_ELEMENT,e=e,r={customScribe:{element:o,action:e},scribeData:t.config.scribeData};this.host.scribe(r)},attachVideoInterface:function(e){t.videoInterface=e},callVideoPlayerMethod:function(){return t.videoInterface?t.videoInterface.callMethodByName.apply(t.videoInterface,arguments):null},callVideoHostMethod:function(){return t.hostMethods&&t.hostMethods.callMethodByName?t.host.callMethodByName.apply(t.host,arguments):void 0},_getConfiguration:function(e){var t={},n=document.getElementById(e);if(n)try{t=window.CONFIG=JSON.parse(n.textContent||n.innerText)}catch(o){t.scribeData="error"}else t.scribeData="error";return t},_isSimpleClick:function(e){return!(e.shiftKey||e.ctrlKey||e.metaKey||e.altKey||e.which>1)},_getPromotedEventName:function(e){return t._getClosestDataAttribute(e,t.dataAttrs.P_E_NAME)},_getImpressionId:function(){return document.querySelector(t.selectors.CONTAINER).getAttribute(t.dataAttrs.IMPRESSION_ID)},_getEarned:function(){return document.querySelector(t.selectors.CONTAINER).getAttribute(t.dataAttrs.EARNED)},_getClosestDataAttribute:function(e,n){var o;return o=e&&"html"!==e.parentElement.nodeName.toLowerCase()?e.getAttribute(n)||t._getClosestDataAttribute(e.parentElement,n):!1}};t.config=t._getConfiguration(t.configElementId);try{t.host=e||new a.Rpc(t.rpcHelpers.ready,t.rpcHelpers.methods)}catch(n){console.log("Fail to set up xdm: "+n.toString())}return t.throttleHandleResize=r(t.handleResize,75),t}}),n("common/xhrhelper",["require","exports","module"],function(e,t,n){n.exports=function(){var e={httpMethodTypes:{GET:"get",POST:"post",PUT:"put",DELETE:"delete"},sendRequest:function(e,t,n){var o=new XMLHttpRequest;o.addEventListener("load",n.onSuccess,!0),o.addEventListener("error",n.onFailure,!0),o.addEventListener("abort",n.onFailure,!0),"boolean"==typeof n.withCredentials&&(o.withCredentials=n.withCredentials),o.open(e,t,"boolean"==typeof n.async?n.async:!0);for(var r in n.headers)n.headers.hasOwnProperty(r)&&o.setRequestHeader(r,n.headers[r]);n.body?o.send(n.body):o.send()},get:function(t,n){e.sendRequest(e.httpMethodTypes.GET,t,n)},post:function(t,n){e.sendRequest(e.httpMethodTypes.POST,t,n)}};return e}}),n("../native/js/form-handler",["require","exports","module","delegate","common/xhrhelper"],function(e,t,n){var o=e("delegate"),r=e("common/xhrhelper");n.exports=function(){var e={xhrHelper:new r,selectors:{FORM:".js-form",CALL_TO_ACTION:".js-submitForm",ROOT_TOGGLE_ELEMENT:".hasToggleElements",CARD_IFRAME:".js-macaw-cards-iframe-container iframe",SUCCESS_MESSAGE:".PromotionCardFull--SuccessMessage"},classes:{SUCCESS_ELEMENTS:"successElements",ERROR_ELEMENTS:"errorElements"},resizeEvent:null,resizeEventObject:null,init:function(){o(document).on("click",e.selectors.CALL_TO_ACTION,e.submitForm),document.createEvent?(e.resizeEvent=document.createEvent("Event"),e.resizeEvent.initEvent("resize",!0,!0)):document.createEventObject&&(e.resizeEventObject=document.createEventObject("Event"),e.resizeEventObject.eventType="resize")},teardown:function(){o(document).off("click",e.submitForm)},submitForm:function(t){t.preventDefault();var n=document.querySelector(e.selectors.FORM);if(n){var o=e.getFormData(n);e.xhrHelper.sendRequest(e.xhrHelper.httpMethodTypes.POST,n.action,{onSuccess:e.handleSuccessResponse,onFailure:e.handleErrorResponse,body:o,headers:null,withCredentials:!0})}},getFormData:function(e){var t,n,o=new FormData,r=e.querySelectorAll("input");for(t=0;n=r[t];t++)o.append(n.name,n.value);return o},handleSuccessResponse:function(t){try{var n=JSON.parse(t.target.responseText).data;if(n.display){document.querySelector(e.selectors.SUCCESS_MESSAGE).innerHTML=n.display;var o=document.querySelectorAll(e.selectors.SUCCESS_MESSAGE+" a");for(i=0;el=o[i];i++)e.toggleClassOn(el,"js-openLink"),el.setAttribute("data-pe-name","card_url_click")}}catch(r){}e.handleResponse(e.classes.SUCCESS_ELEMENTS,e.classes.ERROR_ELEMENTS)},handleErrorResponse:function(){e.handleResponse(e.classes.ERROR_ELEMENTS,null)},handleResponse:function(t,n){var o=document.querySelector(e.selectors.ROOT_TOGGLE_ELEMENT);o&&(t&&e.toggleClassOn(o,t),n&&e.toggleClassOff(o,n),e.resizeIframe())},toggleClassOff:function(t,n){t.className=t.className.replace(e.getClassStringRegEx(n),"")},toggleClassOn:function(t,n){t.className.match(e.getClassStringRegEx(n))||(t.className+=" "+n)},getClassStringRegEx:function(e){return new RegExp("(?:^|\\s)"+e+"(?!\\S)","g")},resizeIframe:function(){e.resizeEvent?window.dispatchEvent(e.resizeEvent):e.resizeEventObject&&window.fireEvent("on"+e.resizeEventObject.eventType,e.resizeEventObject)}};return e.init(),e}}),n("common/video-interface-manager",["require","exports","module","delegate","xdm","common/utils"],function(e,t,n){function o(){var e=u.getConfigFromJsonIn("video-config"),t="";return"undefined"!=typeof e&&null!==e&&(t=u.createUrl(e.video_player_url,e.params)),t}function r(){return document.querySelectorAll(".VideoContainer")}function a(){var e=document.getElementById("ExternalIframeContainer");return e&&e.className.match(/\bAmplifyContainer\b/)?e:void 0}function i(e,t,n){var o=new l.Rpc({remote:t,container:e,isHost:!0},{local:{callVideoHostMethod:function(t){return"requestPlayerConfig"===t?JSON.parse(e.getAttribute("data-player-config")):void n.callVideoHostMethod.apply(n,arguments)}}});return o.iframe.setAttribute("allowfullscreen",""),o}function c(e){for(var t,n,a,c,s=r(),l=0;l<s.length;l++)t=s[l],n={vmap_url:t.getAttribute("data-src"),image_src:t.getAttribute("data-thumbnail"),content_id:t.getAttribute("data-content-id"),type:t.getAttribute("data-type")},c=u.createUrl(o(),n),a=i(t,c,e),e.attachVideoInterface(a)}function s(e){var t,n,o=a();o&&(t=o.getAttribute("data-player-url"),n=i(o,t,e),e.attachVideoInterface(n))}var l=(e("delegate"),e("xdm")),u=e("common/utils"),d={init:function(e){c(e),s(e)},isSupported:function(){var e=r(),t=a();return e.length>0||"undefined"!=typeof t}};n.exports=d}),n("classic/flex-embed",["require","exports","module"],function(e,t,n){n.exports=function(){var e,t,n=document.getElementById("ExternalIframeContainer");n&&(e=n.getAttribute("data-iframe-height"),t=n.getAttribute("data-iframe-width"),n.style.paddingBottom=100*e/t+"%")}}),n("../native/js/api-request",["require","exports","module","common/xhrhelper"],function(e,t,n){var o=e("common/xhrhelper");n.exports=function(e,t){var n=new o,r=function(){this.status>=200&&this.status<=299?e(this):t(this)},a=function(){t(this)},i={getRequest:function(e,t,o){n.get(e,{onSuccess:r,onFailure:a,body:t,withCredentials:o})},postRequest:function(e,t,o){n.post(e,{onSuccess:r,onFailure:a,body:t,withCredentials:o})}};return i}}),n("../native/js/card-data-broker",["require","exports","module","./api-request"],function(e,t,n){var o=e("./api-request");n.exports=function(e){var t,n=function(){var t="/i/cards/api/v1",n=window.location.host,o=window.location.protocol;return void 0!==e.tweetId&&void 0!=e.cardName&&void 0!==e.token&&void 0!==e.forward?o+"//"+n+t+"?tweetid="+e.tweetId+"&cardname="+e.cardName+"&authenticity_token="+e.token+"&forward="+e.forward.toString():void console.log("Missing tweetId/cardName/token/forward in card config: "+e)},r=n(),a={_onDataUpdate:null,register:function(e){a._onDataUpdate=e},unregister:function(){a._onDataUpdate=null},doRead:function(e){if(r){var n=JSON.stringify(e);return t.getRequest(r,n,!0),0}},doWrite:function(e){if(r){var n=JSON.stringify(e);return t.postRequest(r,n,!0),0}},cancel:function(){},cancelAll:function(){}},i=function(t){null!==a._onDataUpdate&&a._onDataUpdate(e.original,JSON.parse(t.response),0)},c=function(e){console.log("Request failed. "+e.responseText)};return t=new o(i,c),a}}),n("../native/js/card-helper",["require","exports","module"],function(e,t,n){n.exports=function(){var e={showElement:function(t){var n=e.queryElement(t);n&&(n.style.display="block")},hideElement:function(t){var n=e.queryElement(t);n&&(n.style.display="none")},setContent:function(t,n){var o=e.queryElement(t);o&&(o.innerHTML=n)},queryElement:function(e){var t=document.querySelector(e);return t||console.log('Element with selector "'+e+'" is not found.'),t}};return e}}),n("../native/js/card-page-controller",["require","exports","module"],function(e,t,n){n.exports=function(){var e={_currentPage:null,_loadPage:function(e){e&&"function"==typeof e.load&&e.load()},_unloadPage:function(e){e&&"function"==typeof e.unload&&e.unload()},init:function(t){e._loadPage(t),e._currentPage=t},switchToPage:function(t){return t!==e.currentPage?(e._unloadPage(e._currentPage),e._loadPage(t),e._currentPage=t,e._currentPage):void 0},getCurrentPage:function(){return e._currentPage}};return e}}),n("../native/js/voting-2-choices/voting-2-choices",["require","exports","module","delegate","../card-data-broker","../card-helper","../card-page-controller"],function(e,t,n){var o=e("delegate"),r=e("../card-data-broker"),a=e("../card-helper"),i=e("../card-page-controller");n.exports=function(e){var t={VOTING_OPTIONS:"div.Voting2ChoicesCard-Options",VOTING_RESULTS:"div.Voting2ChoicesCard-Results",RESULTS_OUTPUT:".ResultOutput",COUNT_1:'span[name="Voting2ChoicesCard-Results-count1"]',COUNT_2:'span[name="Voting2ChoicesCard-Results-count2"]',EVENT_DATA:'button[name="js-form-vote"]',OPTION_DATA:'input[name="js-form-option"]:checked',API_REQUEST:".js-apiRequest"},n={DATA_EVENT:"data-event",DATA_VOTE:"data-vote"},c={REQUEST:"click"},s=new a,l=new i,u={load:function(){s.showElement(t.VOTING_RESULTS)},unload:function(){s.hideElement(t.VOTING_RESULTS)},onDataUpdate:function(e,n){s.setContent(t.COUNT_1,n.choice1votes),s.setContent(t.COUNT_2,n.choice2votes)}},d={load:function(){s.showElement(t.VOTING_OPTIONS)},unload:function(){s.hideElement(t.VOTING_OPTIONS)},onDataUpdate:function(e,t){t.resultsAvailable&&(l.switchToPage(u),u.onDataUpdate(e,t))}};cardDatabroker=new r(e);var f=function(e,t,n){l.getCurrentPage().onDataUpdate(e,t,n)};o(document).on(c.REQUEST,t.API_REQUEST,function(){var e=s.queryElement(t.EVENT_DATA),o=e&&e.getAttribute(n.DATA_EVENT),r=s.queryElement(t.OPTION_DATA),a=r&&r.getAttribute(n.DATA_VOTE);if(o&&a){l.switchToPage(u);var i=s.queryElement(".Results-"+a);null!==i&&i.setAttribute("class","selected-result"),cardDatabroker.doWrite({vote:a,event:o})}});var m={load:function(){l.init(d),cardDatabroker.register(f)},unload:function(){cardDatabroker.cancelAll(),cardDatabroker.unregister()}};return m}}),e.config({baseUrl:"/lib/js",paths:{delegate:"../bower_components/delegate.js/delegate",matches:"../bower_components/matches.js/matches",xdm:"../bower_components/xdm.js/xdm"}}),t(["../native/js/interface","../native/js/form-handler","common/video-interface-manager","classic/flex-embed","../native/js/voting-2-choices/voting-2-choices"],function(e,n,o,r){var a=(new n,new e),i=document.getElementById("data-card-config");if(i){var c,s=i.textContent||i.innerText;try{var l=JSON.parse(s);if(l&&"string"==typeof l.cardClassPath){c=t(l.cardClassPath);var u=new c(l,a);u.load()}else console.log("Missing or wrong class path: "+l.cardClassPath)}catch(d){console.log("Illegal card config found: "+s+". Error message: "+d.toString())}}o.isSupported()&&o.init(a),r()}),n("main-native",function(){})}();