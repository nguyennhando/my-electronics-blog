var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function k(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,k(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),k(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=k(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=k(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return k(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return k(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},j={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=j,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,A)}catch(e){A(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Symbol.for(`react.client.reference`);function ie(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ie(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ae=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},se=[],ce=-1;function M(e){return{current:e}}function le(e){0>ce||(e.current=se[ce],se[ce]=null,ce--)}function N(e,t){ce++,se[ce]=e.current,e.current=t}var ue=M(null),de=M(null),fe=M(null),pe=M(null);function me(e,t){switch(N(fe,t),N(de,e),N(ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Kd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(ue),N(ue,e)}function he(){le(ue),le(de),le(fe)}function ge(e){e.memoizedState!==null&&N(pe,e);var t=ue.current,n=Kd(t,e.type);t!==n&&(N(de,e),N(ue,n))}function _e(e){de.current===e&&(le(ue),le(de)),pe.current===e&&(le(pe),$f._currentValue=oe)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,P=t.unstable_UserBlockingPriority,F=t.unstable_NormalPriority,Ne=t.unstable_LowPriority,Pe=t.unstable_IdlePriority,Fe=t.log,Ie=t.unstable_setDisableYieldValue,Le=null,I=null;function Re(e){if(typeof Fe==`function`&&Ie(e),I&&typeof I.setStrictMode==`function`)try{I.setStrictMode(Le,e)}catch{}}var L=Math.clz32?Math.clz32:Ve,ze=Math.log,Be=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(ze(e)/Be|0)|0}var He=256,Ue=262144,We=4194304;function Ge(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ge(n))):i=Ge(o):i=Ge(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ge(n))):i=Ge(o)):i=Ge(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=We;return We<<=1,!(We&62914560)&&(We=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-L(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-L(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-L(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=j.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function at(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,R=`__reactResources$`+ot,pt=`__reactMarker$`+ot;function mt(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function ht(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hf(e);e!==null;){if(n=e[st])return n;e=hf(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[R];return t||=e[R]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return Te.call(Et,e)?!0:Te.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ae(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ct]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(Tu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=f({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=f({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(f({},Dn,{dataTransfer:0})),An=yn(f({},Sn,{relatedTarget:0})),jn=yn(f({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(f({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(f({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(f({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(f({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(f({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(f({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(f({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(f({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=kd(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){Sd(e,0)}function lr(e){if(Ft(_t(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(ln){var fr;if(ln){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,tn(e)),sn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=ln&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==It(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=kd(jr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};ln&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),St(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),ai(e)}function ri(e,t){return ti(e,null,null,t),ai(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-L(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ai(e){if(50<gu)throw gu=0,_u=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var oi={};function si(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,t,n,r){return new si(e,t,n,r)}function li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ui(e,t){var n=e.alternate;return n===null?(n=ci(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function di(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)li(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,ue.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=ci(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ci(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=ci(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=ci(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ci(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=ci(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=ci(6,e,null,t),e.lanes=n,e}function hi(e){var t=ci(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=ci(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,Ei=1,Di=``;function Oi(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function ki(e,t,n){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ti=e;var r=Ei;e=Di;var i=32-L(r)-1;r&=~(1<<i),n+=1;var a=32-L(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ei=1<<32-L(t)+i|n<<i|r,Di=a+e}else Ei=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Di=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null}function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Di,Ci[wi++]=Ti,Ei=t.id,Di=t.overflow,Ti=e}var Ni=null,Pi=null,z=!1,Fi=null,Ii=!1,Li=Error(i(519));function Ri(e){throw Wi(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Li}function zi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Y(bd[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Fd(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ri(e,!0)}function Bi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:Ni=Ni.return}}function Vi(e){if(e!==Ni)return!1;if(!z)return Bi(e),z=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||qd(e.type,e.memoizedProps)),n=!n),n&&Pi&&Ri(e),Bi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=mf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Pi=mf(e)}else t===27?(t=Pi,tf(e.type)?(e=pf,pf=null,Pi=e):Pi=t):Pi=Ni?ff(e.stateNode.nextSibling):null;return!0}function Hi(){Pi=Ni=null,z=!1}function Ui(){var e=Fi;return e!==null&&(nu===null?nu=e:nu.push.apply(nu,e),Fi=null),e}function Wi(e){Fi===null?Fi=[e]:Fi.push(e)}var Gi=M(null),Ki=null,qi=null;function Ji(e,t,n){N(Gi,t._currentValue),t._currentValue=n}function Yi(e){e._currentValue=Gi.current,le(Gi)}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Zi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Xi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Xi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Qi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&Zi(t,e,n,r),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Ki=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ta(e){return ra(Ki,e)}function na(e,t){return Ki===null&&ea(e),ra(e,t)}function ra(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qi===null){if(e===null)throw Error(i(308));qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qi=qi.next=t;return n}var ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},aa=t.unstable_scheduleCallback,oa=t.unstable_NormalPriority,sa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new ia,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&aa(oa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=md(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=A.S;A.S=function(e,t){au=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=M(null);function ya(){var e=va.current;return e===null?Hl.pooledCache:e}function ba(e,t){t===null?N(va,va.current):N(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:sa._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=Hl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ui(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=fi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case O:return t=Oa(t),f(e,t,n)}if(ae(t)||re(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===C)return f(e,na(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Oa(n),p(e,t,n,r)}if(ae(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===C)return p(e,t,na(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Oa(r),m(e,t,n,r,i)}if(ae(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===C)return m(e,t,n,na(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),z&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),z&&Oi(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Oa(o),b(e,r,o,c)}if(ae(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===C)return b(e,r,na(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=ci(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ai(e),ii(e,null,n),t}return ti(e,r,t,n),ai(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(G&p)===p:(r&p)===p){p!==0&&p===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ba=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Xl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=M(null),$a=M(0);function eo(e,t){e=Jl,N($a,e),N(Qa,t),Jl=e|t.baseLanes}function to(){N($a,Jl),N(Qa,Qa.current)}function no(){Jl=$a.current,le(Qa),le($a)}var ro=M(null),io=null;function ao(e){var t=e.alternate;N(B,B.current&1),N(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){N(B,B.current),N(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(N(B,B.current),N(ro,e),io===null&&(io=e)):co(e)}function co(){N(B,B.current),N(ro,ro.current)}function lo(e){le(ro),io===e&&(io=null),le(B)}var B=M(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lf(n)||uf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,V=null,H=null,po=null,mo=!1,ho=!1,go=!1,_o=0,vo=0,yo=null,bo=0;function xo(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return fo=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Bs:Vs,go=!1,a=n(r,i),go=!1,ho&&(a=To(t,n,r,i)),wo(e),a}function wo(e){A.H=zs;var t=H!==null&&H.next!==null;if(fo=0,po=H=V=null,mo=!1,vo=0,yo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&$i(e)&&(ic=!0))}function To(e,t,n,r){V=e;var a=0;do{if(ho&&(yo=null),vo=0,ho=!1,25<=a)throw Error(i(301));if(a+=1,po=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Hs,o=t(n,r)}while(ho);return o}function Eo(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function Do(){var e=_o!==0;return _o=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}fo=0,po=H=V=null,ho=!1,vo=_o=0,yo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return po===null?V.memoizedState=po=e:po=po.next=e,po}function jo(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=po===null?V.memoizedState:po.next;if(t!==null)po=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},po===null?V.memoizedState=po=e:po=po.next=e}return po}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=vo;return vo+=1,yo===null&&(yo=[]),e=Da(yo,e,t),t=V,(po===null?t.memoizedState:po.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ta(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),H,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((fo&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,Xl|=p;f=u.action,go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,Xl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(ic=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=V,a=jo(),o=z;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||po!==null&&po.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),Hl===null)throw Error(i(349));o||fo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=Mo(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Go(e){var t=ri(e,2);t!==null&&bu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),go){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,H,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(z){var n=Hl.formState;if(n!==null){a:{var r=V;if(z){if(Pi){b:{for(var i=Pi,a=Ii;i.nodeType!==8;){if(!a){i=null;break b}if(i=ff(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Pi=ff(i.nextSibling),r=i.data===`F!`;break a}}Ri(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,V,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,V,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),H,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Sa?wa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=H;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=Mo(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();V.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&So(r,H.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(V.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=Mo(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(U&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||fo&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=yu(),V.lanes|=e,Xl|=e,n)}function Ss(e,t,n,r){return Sr(n,t)?n:Qa.current===null?!(fo&42)||fo&1073741824&&!(G&261930)?(ic=!0,e.memoizedState=n):(e=yu(),V.lanes|=e,Xl|=e,t):(e=xs(e,n,r),Sr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};A.T=s,Fs(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ga(c,r),vu(e)):Ps(e,t,r,vu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},vu())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,oe,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},vu())}function Os(){return ta($f)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(bu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=vu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ni(e,t,n,r),n!==null&&(bu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,vu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),Hl===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return bu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&bu(t,e,2)}function Is(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ls(e,t){ho=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var zs={readContext:ta,use:Po,useCallback:xo,useContext:xo,useEffect:xo,useImperativeHandle:xo,useLayoutEffect:xo,useInsertionEffect:xo,useMemo:xo,useReducer:xo,useRef:xo,useState:xo,useDebugValue:xo,useDeferredValue:xo,useTransition:xo,useSyncExternalStore:xo,useId:xo,useHostTransitionStatus:xo,useFormState:xo,useActionState:xo,useOptimistic:xo,useMemoCache:xo,useCacheRefresh:xo};zs.useEffectEvent=xo;var Bs={readContext:ta,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:ta,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(go){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(go){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,V,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=Ao();if(z){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Hl===null)throw Error(i(349));G&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=Hl.identifierPrefix;if(z){var n=Di,r=Ei;n=(r&~(1<<32-L(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=_o++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,V)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),H.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ta,use:Po,useCallback:ys,useContext:ta,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return H===null?xs(n,e,t):Ss(n,H.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return H===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,H,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(bu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(bu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(bu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Xr(e)}function Ys(e){console.error(e)}function Xs(e){Xr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ua(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(cu===null?cu=new Set([this]):cu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Qi(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Mu():n.alternate===null&&Yl===0&&(Yl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),Mu(),!1}if(z)return t=ro.current,t===null?(r!==Li&&(t=Error(i(423),{cause:r}),Wi(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=$s(e.stateNode,r,a),Ka(e,a),Yl!==4&&(Yl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Li&&(e=Error(i(422),{cause:r}),Wi(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),tu===null?tu=[o]:tu.push(o),Yl!==4&&(Yl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(cu===null||!cu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ea(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&s&&Ai(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=ui(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&Qi(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ra(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(z){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=Pi)?(e=cf(e,Ii),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Ri(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||Qi(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=Hl,r!==null&&(s=tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),bu(r,e,s),rc;Mu(),t=pc(e,t,n)}else e=o.treeContext,Pi=ff(s.nextSibling),Ni=t,z=!0,Fi=null,Ii=!1,e!==null&&Mi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=ui(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ea(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(z&&r&&Ai(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ea(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(z&&r&&Ai(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ea(t),t.stateNode===null){var a=oi,o=n.contextType;typeof o==`object`&&o&&(a=ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?ta(o):oi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=oi,typeof u==`object`&&u&&(o=ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ba||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=oi,typeof l==`object`&&l&&(c=ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ba||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Hi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:xa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=$l),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(B.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(z){if(a?ao(t):co(t),(e=Pi)?(e=cf(e,Ii),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:Ei,overflow:Di},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Ni=t,Pi=null)):e=null,e===null)throw Ri(t);return uf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),uf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Wi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||Qi(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=Hl,s!==null&&(r=tt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),bu(s,e,r),rc;lf(c)||Mu(),t=Ec(e,t,n)}else lf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Pi=ff(c.nextSibling),Ni=t,z=!0,Fi=null,Ii=!1,e!==null&&Mi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ui(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=ui(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=xa():(l=sa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=ui(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ci(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ra(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=B.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,N(B,o),ac(e,t,r,n),r=z?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&$i(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Ji(t,sa,e.memoizedState.cache),Hi();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Qi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(B,B.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Ji(t,sa,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,z&&t.flags&1048576&&ki(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)li(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ie(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,sa,r),r!==o.cache&&Zi(t,[sa],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Wi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Pi=ff(e.firstChild),Ni=t,z=!0,Fi=null,Ii=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:z||(n=t.type,e=t.pendingProps,r=Wd(fe.current).createElement(n),r[st]=t,r[ct]=e,Rd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&z&&(r=t.stateNode=gf(t.type,t.pendingProps,fe.current),Ni=t,Ii=!0,a=Pi,tf(t.type)?(pf=a,Pi=ff(r.firstChild)):Pi=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&z&&((a=r=Pi)&&(r=of(r,t.type,t.pendingProps,Ii),r===null?a=!1:(t.stateNode=r,Ni=t,Pi=ff(r.firstChild),Ii=!1,a=!0)),a||Ri(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,qd(a,o)?r=null:s!==null&&qd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),$f._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&z&&((e=n=Pi)&&(n=sf(n,t.pendingProps,Ii),n===null?e=!1:(t.stateNode=n,Ni=t,Pi=null,e=!0)),e||Ri(t)),null;case 13:return Cc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ji(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=ta(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ea(t),r=ta(sa),e===null?(a=ya(),a===null&&(a=Hl,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Ji(t,sa,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ji(t,sa,r),r!==a.cache&&Zi(t,[sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,sa,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(ku())e.flags|=8192;else throw ka=Ta,Ca}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(ku())e.flags|=8192;else throw ka=Ta,Ca}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,eu|=t)}function Rc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function zc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zc(t),null;case 1:return zc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yi(sa),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ui())),zc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(zc(t),Fc(t,a,null,r,n)):(zc(t),Ic(t,o))):o?o===e.memoizedState?(zc(t),t.flags&=-16777217):(Pc(t),zc(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),zc(t),Fc(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}e=ue.current,Vi(t)?zi(t,e):(e=gf(a,r,n),t.stateNode=e,Pc(t))}return zc(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return zc(t),null}if(o=ue.current,Vi(t))zi(t,o);else{var s=Wd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[st]=t,o[ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Rd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return zc(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Fd(e.nodeValue,n)),e||Ri(t,!0)}else e=Wd(e).createTextNode(r),e[st]=t,t.stateNode=e}return zc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Vi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[st]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),e=!1}else n=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return zc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[st]=t}else Hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;zc(t),a=!1}else a=Ui(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),zc(t),null);case 4:return he(),e===null&&Td(t.stateNode.containerInfo),zc(t),null;case 10:return Yi(t.type),zc(t),null;case 19:if(le(B),r=t.memoizedState,r===null)return zc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(Yl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)di(n,e),n=n.sibling;return N(B,B.current&1|2),z&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>ou&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!z)return zc(t),null}else 2*Ae()-r.renderingStartTime>ou&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(zc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=B.current,N(B,a?n&1|2:n&1),z&&Oi(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(zc(t),t.subtreeFlags&6&&(t.flags|=8192)):zc(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yi(sa),zc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(sa),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(B),null;case 4:return he(),null;case 10:return Yi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&le(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yi(sa),null;case 25:return null;default:return null}}function Hc(e,t){switch(ji(t),t.tag){case 3:Yi(sa),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:le(B);break;case 10:Yi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&le(va);break;case 24:Yi(sa)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){J(e,e.return,t)}}}function Kc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;zd(r,e.type,n,t),r[ct]=t}catch(t){J(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tf(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Rd(t,r,n),t[st]=e,t[ct]=n}catch(t){J(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Hd=cp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},cp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)af(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:af(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Uc(5,n);break;case 1:if(Cl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),df(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?Tl(e,n,(n.subtreeFlags&8772)!=0):Cl(e,n),nl=i,rl=a}break;case 30:break;default:Cl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(I&&typeof I.onCommitFiberUnmount==`function`)try{I.onCommitFiberUnmount(Le,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=ul,i=dl;tf(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),_f(n.stateNode),ul=r,dl=i;break;case 5:rl||Jc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null)if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){J(n,t,e)}break;case 18:ul!==null&&(dl?(e=ul,nf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):nf(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),fl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,fl(e,t,n),rl=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){J(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){J(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(tf(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=yl;if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[st]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Rd(o,r,n),o[st]=e,yt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Rd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Rd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[st]=e,yt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Vf=null,a=yl,yl=bf(t.containerInfo),vl(t,e),yl=a,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){J(e,e.return,t)}il&&(il=!1,Sl(e));break;case 4:r=yl,yl=bf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(iu=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,vl(t,e),rl=d,nl=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?rf(m,!0):rf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),wl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),wl(t);break;case 27:_f(t.stateNode);case 26:case 5:Jc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Uc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),qc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Kf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=bf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Bl={getCacheForType:function(e){var t=ta(sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ta(sa).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,Hl=null,W=null,G=0,Ul=0,Wl=null,Gl=!1,Kl=!1,ql=!1,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=0,tu=null,nu=null,ru=!1,iu=0,au=0,ou=1/0,su=null,cu=null,lu=0,uu=null,du=null,fu=0,pu=0,mu=null,hu=null,gu=0,_u=null;function vu(){return U&2&&G!==0?G&-G:A.T===null?it():md()}function yu(){if($l===0)if(!(G&536870912)||z){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),$l=e}else $l=536870912;return e=ro.current,e!==null&&(e.flags|=32),$l}function bu(e,t,n){(e===Hl&&(Ul===2||Ul===9)||e.cancelPendingCommit!==null)&&(Du(e,0),wu(e,G,$l,!1)),Ze(e,n),(!(U&2)||e!==Hl)&&(e===Hl&&(!(U&2)&&(Zl|=n),Yl===4&&wu(e,G,$l,!1)),od(e))}function xu(e,t,n){if(U&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),a=r?Fu(e,t):Nu(e,t,!0),o=r;do{if(a===0){Kl&&!r&&wu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Cu(n)){a=Nu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=tu;var l=c.current.memoizedState.isDehydrated;if(l&&(Du(c,s).flags|=256),s=Nu(c,s,!1),s!==2){if(ql&&!l){c.errorRecoveryDisabledLanes|=o,Zl|=o,a=4;break a}o=nu,nu=a,o!==null&&(nu===null?nu=o:nu.push.apply(nu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Du(e,0),wu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:wu(r,t,$l,!Gl);break a;case 2:nu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=iu+300-Ae(),10<a)){if(wu(r,t,$l,!Gl),Ke(r,0,!0)!==0)break a;fu=t,r.timeoutHandle=Xd(Su.bind(null,r,n,nu,su,ru,t,$l,Zl,eu,Gl,o,`Throttled`,-0,0),a);break a}Su(r,n,nu,su,ru,t,$l,Zl,eu,Gl,o,null,-0,0)}}break}while(1);od(e)}function Su(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Pl(t,a,d);var m=(a&62914560)===a?iu-Ae():(a&4194048)===a?au-Ae():0;if(m=Jf(d,m),m!==null){fu=a,e.cancelPendingCommit=m(Hu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),wu(e,a,o,!l);return}}Hu(e,t,a,n,r,i,o,s,c)}function Cu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wu(e,t,n,r){t&=~Ql,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-L(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function Tu(){return U&6?!0:(sd(0,!1),!1)}function Eu(){if(W!==null){if(Ul===0)var e=W.return;else e=W,qi=Ki=null,ko(e),Ma=null,Na=0,e=W;for(;e!==null;)Hc(e.alternate,e),e=e.return;W=null}}function Du(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Zd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),fu=0,Eu(),Hl=e,W=n=ui(e.current,null),G=t,Ul=0,Wl=null,Gl=!1,Kl=qe(e,t),ql=!1,eu=$l=Ql=Zl=Xl=Yl=0,nu=tu=null,ru=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-L(r),a=1<<i;t|=e[i],r&=~a}return Jl=t,ei(),n}function Ou(e,t){V=null,A.H=zs,t===Sa||t===wa?(t=Aa(),Ul=3):t===Ca?(t=Aa(),Ul=4):Ul=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Wl=t,W===null&&(Yl=1,Zs(e,vi(t,e.current)))}function ku(){var e=ro.current;return e===null?!0:(G&4194048)===G?io===null:(G&62914560)===G||G&536870912?e===io:!1}function Au(){var e=A.H;return A.H=zs,e===null?zs:e}function ju(){var e=A.A;return A.A=Bl,e}function Mu(){Yl=4,Gl||(G&4194048)!==G&&ro.current!==null||(Kl=!0),!(Xl&134217727)&&!(Zl&134217727)||Hl===null||wu(Hl,G,$l,!1)}function Nu(e,t,n){var r=U;U|=2;var i=Au(),a=ju();(Hl!==e||G!==t)&&(su=null,Du(e,t)),t=!1;var o=Yl;a:do try{if(Ul!==0&&W!==null){var s=W,c=Wl;switch(Ul){case 8:Eu(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Ul;if(Ul=0,Wl=null,zu(e,s,c,l),n&&Kl){o=0;break a}break;default:l=Ul,Ul=0,Wl=null,zu(e,s,c,l)}}Pu(),o=Yl;break}catch(t){Ou(e,t)}while(1);return t&&e.shellSuspendCounter++,qi=Ki=null,U=r,A.H=i,A.A=a,W===null&&(Hl=null,G=0,ei()),o}function Pu(){for(;W!==null;)Lu(W)}function Fu(e,t){var n=U;U|=2;var r=Au(),a=ju();Hl!==e||G!==t?(su=null,ou=Ae()+500,Du(e,t)):Kl=qe(e,t);a:do try{if(Ul!==0&&W!==null){t=W;var o=Wl;b:switch(Ul){case 1:Ul=0,Wl=null,zu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Ul=0,Wl=null,Ru(t);break}t=function(){Ul!==2&&Ul!==9||Hl!==e||(Ul=7),od(e)},o.then(t,t);break a;case 3:Ul=7;break a;case 4:Ul=5;break a;case 7:Ea(o)?(Ul=0,Wl=null,Ru(t)):(Ul=0,Wl=null,zu(e,t,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var c=W;if(s?Gf(s):c.stateNode.complete){Ul=0,Wl=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,Bu(u))}break b}}Ul=0,Wl=null,zu(e,t,o,5);break;case 6:Ul=0,Wl=null,zu(e,t,o,6);break;case 8:Eu(),Yl=6;break a;default:throw Error(i(462))}}Iu();break}catch(t){Ou(e,t)}while(1);return qi=Ki=null,A.H=r,A.A=a,U=n,W===null?(Hl=null,G=0,ei(),Yl):0}function Iu(){for(;W!==null&&!Oe();)Lu(W)}function Lu(e){var t=Nc(e.alternate,e,Jl);e.memoizedProps=e.pendingProps,t===null?Bu(e):W=t}function Ru(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:ko(t);default:Hc(n,t),t=W=di(t,Jl),t=Nc(n,t,Jl)}e.memoizedProps=e.pendingProps,t===null?Bu(e):W=t}function zu(e,t,n,r){qi=Ki=null,ko(t),Ma=null,Na=0;var i=t.return;try{if(nc(e,i,t,n,G)){Yl=1,Zs(e,vi(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;Yl=1,Zs(e,vi(n,e.current)),W=null;return}t.flags&32768?(z||r===1?e=!0:Kl||G&536870912?e=!1:(Gl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vu(t,e)):Bu(t)}function Bu(e){var t=e;do{if(t.flags&32768){Vu(t,Gl);return}e=t.return;var n=Bc(t.alternate,t,Jl);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Yl===0&&(Yl=5)}function Vu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);Yl=6,W=null}function Hu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do q();while(lu!==0);if(U&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,Qe(e,n,o,s,c,l),e===Hl&&(W=Hl=null,G=0),du=t,uu=e,fu=n,pu=o,mu=a,hu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(F,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=A.T,A.T=null,a=j.p,j.p=2,s=U,U|=4;try{sl(e,t,n)}finally{U=s,j.p=a,A.T=r}}lu=1,Uu(),K(),Wu()}}function Uu(){if(lu===1){lu=0;var e=uu,t=du,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=U;U|=4;try{bl(t,e);var a=Ud,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!Hd,Ud=Hd=null}finally{U=i,j.p=r,A.T=n}}e.current=t,lu=2}}function K(){if(lu===2){lu=0;var e=uu,t=du,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=U;U|=4;try{cl(e,t.alternate,t)}finally{U=i,j.p=r,A.T=n}}lu=3}}function Wu(){if(lu===4||lu===3){lu=0,ke();var e=uu,t=du,n=fu,r=hu;t.subtreeFlags&10256||t.flags&10256?lu=5:(lu=0,du=uu=null,Gu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(cu=null),rt(n),t=t.stateNode,I&&typeof I.onCommitFiberRoot==`function`)try{I.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=A.T,i=j.p,j.p=2,A.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{A.T=t,j.p=i}}fu&3&&q(),od(e),i=e.pendingLanes,n&261930&&i&42?e===_u?gu++:(gu=0,_u=e):gu=0,sd(0,!1)}}function Gu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function q(){return Uu(),K(),Wu(),Ku()}function Ku(){if(lu!==5)return!1;var e=uu,t=pu;pu=0;var n=rt(fu),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=mu,mu=null;var o=uu,s=fu;if(lu=0,du=uu=null,fu=0,U&6)throw Error(i(331));var c=U;if(U|=4,Ll(o.current),kl(o,o.current,s,n),U=c,sd(0,!1),I&&typeof I.onPostCommitFiberRoot==`function`)try{I.onPostCommitFiberRoot(Le,o)}catch{}return!0}finally{j.p=a,A.T=r,Gu(e,t)}}function qu(e,t,n){t=vi(n,t),t=$s(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(Ze(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(cu===null||!cu.has(r))){e=vi(n,e),n=ec(2),r=Wa(t,n,2),r!==null&&(tc(n,r,t,e),Ze(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ql=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Hl===e&&(G&n)===n&&(Yl===4||Yl===3&&(G&62914560)===G&&300>Ae()-iu?!(U&2)&&Du(e,0):Ql|=n,eu===G&&(eu=0)),od(e)}function Xu(e,t){t===0&&(t=Ye()),e=ri(e,t),e!==null&&(Ze(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return Ee(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-L(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=G,a=Ke(r,r===Hl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,fd(r,a));r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Yd()&&(e=ad);for(var t=Ae(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}lu!==0&&lu!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-L(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Hl,n=G,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ul===2||Ul===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),rt(n)){case 2:case 8:n=P;break;case 32:n=F;break;case 268435456:n=Pe;break;default:n=F}return r=dd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(lu!==0&&lu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(q()&&e.callbackNode!==n)return null;var r=G;return r=Ke(e,e===Hl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(xu(e,r,t),ud(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(q())return null;xu(e,t,!0)}function pd(){$d(function(){U&6?Ee(Me,cd):ld()})}function md(){if(ad===0){var e=fa;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<Jr.length;vd++){var yd=Jr[vd];Yr(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var wd=`_reactListening`+Math.random().toString(36).slice(2);function Td(e){if(!e[wd]){e[wd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||Cd(t,!1,e),Cd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wd]||(t[wd]=!0,Cd(`selectionchange`,!1,t))}}function Ed(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case Br:case Vr:case Hr:l=jn;break;case Kr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Od(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[lt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ad,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&jd(s,c,l,d,!1),u!==null&&f!==null&&jd(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(ir(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=kd(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=kd(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function Od(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Od(e,i,a)),i=cn(e,t),i!=null&&r.push(Od(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ad(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Od(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Od(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function Pd(e){return(typeof e==`string`?e:``+e).replace(Md,`
`).replace(Nd,``)}function Fd(e,t){return t=Pd(t),Pd(e)===t}function Id(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Id(e,t,`name`,a.name,a,null),Id(e,t,`formEncType`,a.formEncType,a,null),Id(e,t,`formMethod`,a.formMethod,a,null),Id(e,t,`formTarget`,a.formTarget,a,null)):(Id(e,t,`encType`,a.encType,a,null),Id(e,t,`method`,a.method,a,null),Id(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Ld(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ct]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Rd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Id(e,t,o,s,n,null)}}a&&Id(e,t,`srcSet`,n.srcSet,n,null),r&&Id(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Id(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Id(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Id(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Id(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Y(bd[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Id(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Ld(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Id(e,t,c,r,n,null))}function zd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Id(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Id(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Id(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Id(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Id(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Id(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Id(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Id(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Id(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Id(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Ld(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Ld(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Id(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Id(e,t,f,p,r,m)}function Bd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Vd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Bd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Bd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Hd=null,Ud=null;function Wd(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Kd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function qd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=null;function Yd(){var e=window.event;return e&&e.type===`popstate`?e===Jd?!1:(Jd=e,!0):(Jd=null,!1)}var Xd=typeof setTimeout==`function`?setTimeout:void 0,Zd=typeof clearTimeout==`function`?clearTimeout:void 0,Qd=typeof Promise==`function`?Promise:void 0,$d=typeof queueMicrotask==`function`?queueMicrotask:Qd===void 0?Xd:function(e){return Qd.resolve(null).then(e).catch(ef)};function ef(e){setTimeout(function(){throw e})}function tf(e){return e===`head`}function nf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_f(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_f(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_f(e.ownerDocument.body);n=i}while(n);Pp(t)}function rf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function af(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:af(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function of(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=ff(e.nextSibling),e===null)break}return null}function sf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=ff(e.nextSibling),e===null))return null;return e}function cf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=ff(e.nextSibling),e===null))return null;return e}function lf(e){return e.data===`$?`||e.data===`$~`}function uf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function df(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function ff(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pf=null;function mf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return ff(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gf(e,t,n){switch(t=Wd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function _f(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var vf=new Map,yf=new Set;function bf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xf=j.d;j.d={f:Sf,r:Cf,D:Ef,C:Df,L:X,m:Of,X:kf,S:Z,M:Af};function Sf(){var e=xf.f(),t=Tu();return e||t}function Cf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):xf.r(e)}var wf=typeof document>`u`?null:document;function Tf(e,t,n){var r=wf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),yf.has(i)||(yf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Rd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Ef(e){xf.D(e),Tf(`dns-prefetch`,e,null)}function Df(e,t){xf.C(e,t),Tf(`preconnect`,e,t)}function X(e,t,n){xf.L(e,t,n);var r=wf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=Ff(e)}vf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Q(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Rd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Of(e,t){xf.m(e,t);var n=wf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!vf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),vf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Rd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Z(e,t,n){xf.S(e,t,n);var r=wf;if(r&&e){var i=vt(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Q(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);yt(c),Rd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){xf.X(e,t);var n=wf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0},t),(t=vf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){xf.M(e,t);var n=wf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=vf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=fe.current)?bf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Q(e)))&&!o._p&&(s.instance=o,s.state.loading=5),vf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+Rt(e)+`"`}function Q(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Rd(t,`link`,n),yt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Rt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Rd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Q(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Nf(n),(a=vf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Rd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,yt(a),a):(r=n,(a=vf.get(o))&&(r=f({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Rd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Q(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=vf.get(i))&&zf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Rd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Vd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ci(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function np(e){return e?(e=oi,e):oi}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(bu(n,e,t),Ga(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&bu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=vu();t=nt(t);var n=ri(e,t);n!==null&&bu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,dp(e,t,n,r)}finally{j.p=a,A.T=i}}function up(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,dp(e,t,n,r)}finally{j.p=a,A.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)Dd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ge(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-L(o);s.entanglements[1]|=c,o&=~c}od(a),!(U&6)&&(ou=Ae()+500,sd(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&bu(s,a,2),Tu(),ap(a,2)}if(a=fp(r),a===null&&Dd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}function fp(e){return e=tn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case P:return 8;case F:case Ne:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,at(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,at(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=gt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,vu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),Tu(),t[lt]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.6`)throw Error(i(527,Rp,`19.2.6`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Le=Bp.inject(zp),I=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[lt]=t.current,Td(e),new Ip(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),x=s(((e,t)=>{t.exports=b()})),S=u(y(),1),C=u(p(),1),w=x(),T={de:{title:`Datenschutzhinweis`,text:`Diese Website verwendet keine Tracking-Cookies, keine Werbe-Cookies und keine Analyse-Cookies. Es wird lediglich eine lokale Speicherung im Browser verwendet, um diese Datenschutzhinweis-Auswahl zu speichern. Weitere Informationen finden Sie in der Datenschutzerklärung.`,button:`Verstanden`},en:{title:`Privacy Notice`,text:`This website does not use tracking, advertising or analytics cookies. Browser storage is only used locally to remember this privacy notice selection. More information is available in the privacy policy.`,button:`Understood`},vi:{title:`Thông báo quyền riêng tư`,text:`Website này không sử dụng cookie theo dõi, quảng cáo hoặc phân tích. Bộ nhớ cục bộ của trình duyệt chỉ được dùng để lưu lựa chọn cho thông báo quyền riêng tư này. Bạn có thể xem thêm thông tin trong chính sách quyền riêng tư.`,button:`Đã hiểu`}};function E({language:e=`de`}){let t=T[e]||T.de,[n,r]=(0,C.useState)(()=>!localStorage.getItem(`privacy-notice`));return n?(0,w.jsx)(`div`,{className:`fixed bottom-4 left-4 right-4 z-50`,children:(0,w.jsx)(`div`,{className:`mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black/90 p-6 shadow-2xl backdrop-blur-xl`,children:(0,w.jsxs)(`div`,{className:`flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h3`,{className:`text-xl font-bold text-white`,children:t.title}),(0,w.jsx)(`p`,{className:`mt-2 text-sm leading-7 text-zinc-300`,children:t.text})]}),(0,w.jsx)(`div`,{className:`flex gap-3`,children:(0,w.jsx)(`button`,{type:`button`,onClick:()=>{localStorage.setItem(`privacy-notice`,`acknowledged`),r(!1)},className:`rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-105`,children:t.button})})]})})}):null}var D=(0,C.createContext)({});function O(e){let t=(0,C.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ee=typeof window<`u`?C.useLayoutEffect:C.useEffect,te=(0,C.createContext)(null);function ne(e,t){e.indexOf(t)===-1&&e.push(t)}function re(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var k=(e,t,n)=>n>t?t:n<e?e:n,ie={},ae=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function A(e){return typeof e==`object`&&!!e}var j=e=>/^0[^.\s]+$/u.test(e);function oe(e){let t;return()=>(t===void 0&&(t=e()),t)}var se=e=>e,ce=(e,t)=>n=>t(e(n)),M=(...e)=>e.reduce(ce),le=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},N=class{constructor(){this.subscriptions=[]}add(e){return ne(this.subscriptions,e),()=>re(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ue=e=>e*1e3,de=e=>e/1e3;function fe(e,t){return t?1e3/t*e:0}var pe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,me=1e-7,he=12;function ge(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=pe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>me&&++s<he);return o}function _e(e,t,n,r){if(e===t&&n===r)return se;let i=t=>ge(t,0,1,e,n);return e=>e===0||e===1?e:pe(i(e),t,r)}var ve=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ye=e=>t=>1-e(1-t),be=_e(.33,1.53,.69,.99),xe=ye(be),Se=ve(xe),Ce=e=>e>=1?1:(e*=2)<1?.5*xe(e):.5*(2-2**(-10*(e-1))),we=e=>1-Math.sin(Math.acos(e)),Te=ye(we),Ee=ve(we),De=_e(.42,0,1,1),Oe=_e(0,0,.58,1),ke=_e(.42,0,.58,1),Ae=e=>Array.isArray(e)&&typeof e[0]!=`number`,je=e=>Array.isArray(e)&&typeof e[0]==`number`,Me={linear:se,easeIn:De,easeInOut:ke,easeOut:Oe,circIn:we,circInOut:Ee,circOut:Te,backIn:xe,backInOut:Se,backOut:be,anticipate:Ce},P=e=>typeof e==`string`,F=e=>{if(je(e)){e.length;let[t,n,r,i]=e;return _e(t,n,r,i)}else if(P(e))return Me[e],`${e}`,Me[e];return e},Ne=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Pe={value:null,addProjectionMetrics:null};function Fe(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&Pe.value&&Pe.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ie=40;function Le(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ne.reduce((e,n)=>(e[n]=Fe(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ie.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ie),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ne.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ne.length;t++)o[Ne[t]].cancel(e)},state:i,steps:o}}var{schedule:I,cancel:Re,state:L,steps:ze}=Le(typeof requestAnimationFrame<`u`?requestAnimationFrame:se,!0),Be;function Ve(){Be=void 0}var He={now:()=>(Be===void 0&&He.set(L.isProcessing||ie.useManualTiming?L.timestamp:performance.now()),Be),set:e=>{Be=e,queueMicrotask(Ve)}},Ue={layout:0,mainThread:0,waapi:0},We=e=>t=>typeof t==`string`&&t.startsWith(e),Ge=We(`--`),Ke=We(`var(--`),qe=e=>Ke(e)?Je.test(e.split(`/*`)[0].trim()):!1,Je=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ye(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Xe={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ze={...Xe,transform:e=>k(0,1,e)},Qe={...Xe,default:1},$e=e=>Math.round(e*1e5)/1e5,et=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tt(e){return e==null}var nt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rt=(e,t)=>n=>!!(typeof n==`string`&&nt.test(n)&&n.startsWith(e)||t&&!tt(n)&&Object.prototype.hasOwnProperty.call(n,t)),it=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(et);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},at=e=>k(0,255,e),ot={...Xe,transform:e=>Math.round(at(e))},st={test:rt(`rgb`,`red`),parse:it(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+ot.transform(e)+`, `+ot.transform(t)+`, `+ot.transform(n)+`, `+$e(Ze.transform(r))+`)`};function ct(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var lt={test:rt(`#`),parse:ct,transform:st.transform},ut=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),dt=ut(`deg`),ft=ut(`%`),R=ut(`px`),pt=ut(`vh`),mt=ut(`vw`),ht={...ft,parse:e=>ft.parse(e)/100,transform:e=>ft.transform(e*100)},gt={test:rt(`hsl`,`hue`),parse:it(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ft.transform($e(t))+`, `+ft.transform($e(n))+`, `+$e(Ze.transform(r))+`)`},_t={test:e=>st.test(e)||lt.test(e)||gt.test(e),parse:e=>st.test(e)?st.parse(e):gt.test(e)?gt.parse(e):lt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?st.transform(e):gt.transform(e),getAnimatableNone:e=>{let t=_t.parse(e);return t.alpha=0,_t.transform(t)}},vt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yt(e){return isNaN(e)&&typeof e==`string`&&(e.match(et)?.length||0)+(e.match(vt)?.length||0)>0}var bt=`number`,xt=`color`,St=`var`,Ct=`var(`,wt="${}",Tt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Et(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Tt,e=>(_t.test(e)?(r.color.push(a),i.push(xt),n.push(_t.parse(e))):e.startsWith(Ct)?(r.var.push(a),i.push(St),n.push(e)):(r.number.push(a),i.push(bt),n.push(parseFloat(e))),++a,wt)).split(wt),indexes:r,types:i}}function Dt(e){return Et(e).values}function Ot({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===bt?i+=$e(r[a]):e===xt?i+=_t.transform(r[a]):i+=r[a]}return i}}function kt(e){return Ot(Et(e))}var At=e=>typeof e==`number`?0:_t.test(e)?_t.getAnimatableNone(e):e,jt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:At(e);function Mt(e){let t=Et(e);return Ot(t)(t.values.map((e,n)=>jt(e,t.split[n])))}var Nt={test:yt,parse:Dt,createTransformer:kt,getAnimatableNone:Mt};function Pt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ft({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Pt(s,r,e+1/3),a=Pt(s,r,e),o=Pt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function It(e,t){return n=>n>0?t:e}var Lt=(e,t,n)=>e+(t-e)*n,Rt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},zt=[lt,st,gt],Bt=e=>zt.find(t=>t.test(e));function Vt(e){let t=Bt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===gt&&(n=Ft(n)),n}var Ht=(e,t)=>{let n=Vt(e),r=Vt(t);if(!n||!r)return It(e,t);let i={...n};return e=>(i.red=Rt(n.red,r.red,e),i.green=Rt(n.green,r.green,e),i.blue=Rt(n.blue,r.blue,e),i.alpha=Lt(n.alpha,r.alpha,e),st.transform(i))},Ut=new Set([`none`,`hidden`]);function Wt(e,t){return Ut.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Gt(e,t){return n=>Lt(e,t,n)}function Kt(e){return typeof e==`number`?Gt:typeof e==`string`?qe(e)?It:_t.test(e)?Ht:Xt:Array.isArray(e)?qt:typeof e==`object`?_t.test(e)?Ht:Jt:It}function qt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Kt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Jt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Kt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Yt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Xt=(e,t)=>{let n=Nt.createTransformer(t),r=Et(e),i=Et(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ut.has(e)&&!i.values.length||Ut.has(t)&&!r.values.length?Wt(e,t):M(qt(Yt(r,i),i.values),n):(`${e}${t}`,It(e,t))};function Zt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?Lt(e,t,n):Kt(e)(e,t)}var Qt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>I.update(t,e),stop:()=>Re(t),now:()=>L.isProcessing?L.timestamp:He.now()}},$t=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},en=2e4;function tn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function nn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(tn(r),en);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:de(i)}}var rn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function an(e,t){return e*Math.sqrt(1-t*t)}var on=12;function sn(e,t,n){let r=n;for(let n=1;n<on;n++)r-=e(r)/t(r);return r}var cn=.001;function ln({duration:e=rn.duration,bounce:t=rn.bounce,velocity:n=rn.velocity,mass:r=rn.mass}){let i,a;rn.maxDuration;let o=1-t;o=k(rn.minDamping,rn.maxDamping,o),e=k(rn.minDuration,rn.maxDuration,de(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=an(t,o),c=Math.exp(-i);return cn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=an(t**2,o);return(-i(t)+cn>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-cn+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=sn(i,a,s);if(e=ue(e),isNaN(c))return{stiffness:rn.stiffness,damping:rn.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var un=[`duration`,`bounce`],dn=[`stiffness`,`damping`,`mass`];function fn(e,t){return t.some(t=>e[t]!==void 0)}function pn(e){let t={velocity:rn.velocity,stiffness:rn.stiffness,damping:rn.damping,mass:rn.mass,isResolvedFromDuration:!1,...e};if(!fn(e,dn)&&fn(e,un))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*k(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:rn.mass,stiffness:i,damping:a}}else{let n=ln({...e,velocity:0});t={...t,...n,mass:rn.mass},t.isResolvedFromDuration=!0}return t}function mn(e=rn.visualDuration,t=rn.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=pn({...n,velocity:-de(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=de(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?rn.restSpeed.granular:rn.restSpeed.default,i||=v?rn.restDelta.granular:rn.restDelta.default;let y,b,x,S,C,w;if(h<1)x=an(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>ue(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=ue(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=ue(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(tn(T),en),t=$t(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}mn.applyToOptions=e=>{let t=nn(e,100,mn);return e.ease=t.ease,e.duration=ue(t.duration),e.type=`keyframes`,e};var hn=5;function gn(e,t,n){let r=Math.max(t-hn,0);return fe(n-e(r),t-r)}function _n({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=mn({keyframes:[f.value,m(f.value)],velocity:gn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function vn(e,t,n){let r=[],i=n||ie.mix||Zt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=M(Array.isArray(t)?t[n]||se:t,a)),r.push(a)}return r}function yn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=vn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=le(e[r],e[r+1],n);return s[r](i)};return n?t=>l(k(e[0],e[a-1],t)):l}function bn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=le(0,t,r);e.push(Lt(n,1,i))}}function xn(e){let t=[0];return bn(t,e.length-1),t}function Sn(e,t){return e.map(e=>e*t)}function Cn(e,t){return e.map(()=>t||ke).splice(0,e.length-1)}function wn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Ae(r)?r.map(F):F(r),a={done:!1,value:t[0]},o=yn(Sn(n&&n.length===t.length?n:xn(t),e),t,{ease:Array.isArray(i)?i:Cn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Tn=e=>e!==null;function En(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Tn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Dn={decay:_n,inertia:_n,tween:wn,keyframes:wn,spring:mn};function On(e){typeof e.type==`string`&&(e.type=Dn[e.type])}var kn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},An=e=>e/100,jn=class extends kn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==He.now()&&this.tick(He.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Ue.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;On(e);let{type:t=wn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||wn;s!==wn&&typeof o[0]!=`number`&&(this.mixKeyframes=M(An,Zt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=tn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=k(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==_n&&(b.value=En(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return de(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+de(e)}get time(){return de(this.currentTime)}set time(e){e=ue(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return gn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(He.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=de(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Qt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(He.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Ue.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Mn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Nn=e=>e*180/Math.PI,Pn=e=>In(Nn(Math.atan2(e[1],e[0]))),Fn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Pn,rotateZ:Pn,skewX:e=>Nn(Math.atan(e[1])),skewY:e=>Nn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},In=e=>(e%=360,e<0&&(e+=360),e),Ln=Pn,Rn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),zn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Bn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Rn,scaleY:zn,scale:e=>(Rn(e)+zn(e))/2,rotateX:e=>In(Nn(Math.atan2(e[6],e[5]))),rotateY:e=>In(Nn(Math.atan2(-e[2],e[0]))),rotateZ:Ln,rotate:Ln,skewX:e=>Nn(Math.atan(e[4])),skewY:e=>Nn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Vn(e){return+!!e.includes(`scale`)}function Hn(e,t){if(!e||e===`none`)return Vn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Bn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Fn,i=t}if(!i)return Vn(t);let a=r[t],o=i[1].split(`,`).map(Wn);return typeof a==`function`?a(o):o[a]}var Un=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Hn(n,t)};function Wn(e){return parseFloat(e.trim())}var Gn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Kn=new Set(Gn),qn=e=>e===Xe||e===R,Jn=new Set([`x`,`y`,`z`]),Yn=Gn.filter(e=>!Jn.has(e));function Xn(e){let t=[];return Yn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Zn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Hn(t,`x`),y:(e,{transform:t})=>Hn(t,`y`)};Zn.translateX=Zn.x,Zn.translateY=Zn.y;var Qn=new Set,$n=!1,er=!1,tr=!1;function nr(){if(er){let e=Array.from(Qn).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Xn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}er=!1,$n=!1,Qn.forEach(e=>e.complete(tr)),Qn.clear()}function rr(){Qn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(er=!0)})}function ir(){tr=!0,rr(),nr(),tr=!1}var ar=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Qn.add(this),$n||($n=!0,I.read(rr),I.resolveKeyframes(nr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Mn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Qn.delete(this)}cancel(){this.state===`scheduled`&&(Qn.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},or=e=>e.startsWith(`--`);function sr(e,t,n){or(t)?e.style.setProperty(t,n):e.style[t]=n}var cr={};function lr(e,t){let n=oe(e);return()=>cr[t]??n()}var ur=lr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),dr=lr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),fr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,pr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function mr(e,t){if(e)return typeof e==`function`?dr()?$t(e,t):`ease-out`:je(e)?fr(e):Array.isArray(e)?e.map(e=>mr(e,t)||pr.easeOut):pr[e]}function hr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=mr(s,i);Array.isArray(d)&&(u.easing=d),Pe.value&&Ue.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Pe.value&&p.finished.finally(()=>{Ue.waapi--}),p}function gr(e){return typeof e==`function`&&`applyToOptions`in e}function _r({type:e,...t}){return gr(e)&&dr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var vr=class extends kn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=_r(e);this.animation=hr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=En(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),sr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return de(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+de(e)}get time(){return de(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ue(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ur()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),se):r(this)}},yr={anticipate:Ce,backInOut:Se,circInOut:Ee};function br(e){return e in yr}function xr(e){typeof e.ease==`string`&&br(e.ease)&&(e.ease=yr[e.ease])}var Sr=10,Cr=class extends vr{constructor(e){xr(e),On(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new jn({...a,autoplay:!1}),s=Math.max(Sr,He.now()-this.startTime),c=k(0,Sr,s-Sr),l=o.sample(s).value,{name:u}=this.options;i&&u&&sr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},wr=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Nt.test(e)||e===`0`)&&!e.startsWith(`url(`));function Tr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Er(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=wr(i,t),s=wr(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Tr(e)||(n===`spring`||gr(n))&&r}function Dr(e){e.duration=0,e.type=`keyframes`}var Or=new Set([`opacity`,`clipPath`,`filter`,`transform`]),kr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ar(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&kr.test(e[t]))return!0;return!1}var jr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Mr=oe(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Nr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Mr()&&n&&(Or.has(n)||jr.has(n)&&Ar(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Pr=40,Fr=class extends kn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=He.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||ar;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=He.now();let u=!0;Er(e,i,a,o)||(u=!1,(ie.instantAnimations||!s)&&l?.(En(e,n,t)),e[0]=e[e.length-1],Dr(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Pr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Nr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Cr({...d,element:p})}catch{m=new jn(d)}else m=new jn(d);m.finished.then(()=>{this.notifyFinished()}).catch(se),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ir()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Ir(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Lr=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Rr(e){let t=Lr.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function zr(e,t,n=1){`${e}`;let[r,i]=Rr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ae(e)?parseFloat(e):e}return qe(i)?zr(i,t,n+1):i}var Br={type:`spring`,stiffness:500,damping:25,restSpeed:10},Vr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Hr={type:`keyframes`,duration:.8},Ur={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Wr=(e,{keyframes:t})=>t.length>2?Hr:Kn.has(e)?e.startsWith(`scale`)?Vr(t[1]):Br:Ur;function Gr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Kr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Gr(n,e)}var qr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Jr(e){for(let t in e)if(!qr.has(t))return!0;return!1}var Yr=(e,t,n,r={},i,a)=>o=>{let s=Kr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ue(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Jr(s)||Object.assign(u,Wr(e,u)),u.duration&&=ue(u.duration),u.repeatDelay&&=ue(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Dr(u),u.delay===0&&(d=!0)),(ie.instantAnimations||ie.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Dr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=En(u.keyframes,s);if(e!==void 0){I.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new jn(u):new Fr(u)};function Xr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Zr(e,t,n,r){if(typeof t==`function`){let[i,a]=Xr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Xr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Qr(e,t,n){let r=e.getProps();return Zr(r,t,n===void 0?r.custom:n,e)}var $r=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Gn]),ei=30,ti=e=>!isNaN(parseFloat(e)),ni={current:void 0},ri=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=He.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=He.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ti(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new N);let n=this.events[e].add(t);return e===`change`?()=>{n(),I.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ni.current&&ni.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=He.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ei)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,ei);return fe(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ii(e,t){return new ri(e,t)}var ai=e=>Array.isArray(e);function oi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ii(n))}function si(e){return ai(e)?e[e.length-1]||0:e}function ci(e,t){let{transitionEnd:n={},transition:r={},...i}=Qr(e,t)||{};i={...i,...n};for(let t in i)oi(e,t,si(i[t]))}var li=e=>!!(e&&e.getVelocity);function ui(e){return!!(li(e)&&e.add)}function di(e,t){let n=e.getValue(`willChange`);if(ui(n))return n.add(t);if(!n&&ie.WillChange){let n=new ie.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function fi(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var pi=`data-`+fi(`framerAppearId`);function mi(e){return e.props[pi]}function hi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function gi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Gr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&hi(d,t))continue;let o={delay:n,...Kr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){I.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=mi(e);if(n){let e=window.MotionHandoffAnimation(n,t,I);e!==null&&(o.startTime=e,f=!0)}}di(e,t);let p=l??e.shouldReduceMotion;r.start(Yr(t,r,i,p&&$r.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>I.update(()=>{o&&ci(e,o)});u.length?Promise.all(u).then(t):t()}return u}function _i(e,t,n={}){let r=Qr(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(gi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return vi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function vi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(_i(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Ir(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function yi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>_i(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=_i(e,t,n);else{let i=typeof t==`function`?Qr(e,t,n.custom):t;r=Promise.all(gi(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var bi={test:e=>e===`auto`,parse:e=>e},xi=e=>t=>t.test(e),Si=[Xe,R,ft,dt,mt,pt,bi],Ci=e=>Si.find(xi(e));function wi(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||j(e)}var Ti=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ei(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(et)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ti.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Di=/\b([a-z-]*)\(.*?\)/gu,Oi={...Nt,getAnimatableNone:e=>{let t=e.match(Di);return t?t.map(Ei).join(` `):e}},ki={...Nt,getAnimatableNone:e=>{let t=Nt.parse(e);return Nt.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ai={...Xe,transform:Math.round},ji={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,inset:R,insetBlock:R,insetBlockStart:R,insetBlockEnd:R,insetInline:R,insetInlineStart:R,insetInlineEnd:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,paddingBlock:R,paddingBlockStart:R,paddingBlockEnd:R,paddingInline:R,paddingInlineStart:R,paddingInlineEnd:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,marginBlock:R,marginBlockStart:R,marginBlockEnd:R,marginInline:R,marginInlineStart:R,marginInlineEnd:R,fontSize:R,backgroundPositionX:R,backgroundPositionY:R,rotate:dt,rotateX:dt,rotateY:dt,rotateZ:dt,scale:Qe,scaleX:Qe,scaleY:Qe,scaleZ:Qe,skew:dt,skewX:dt,skewY:dt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:Ze,originX:ht,originY:ht,originZ:R,zIndex:Ai,fillOpacity:Ze,strokeOpacity:Ze,numOctaves:Ai},Mi={...ji,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:Oi,WebkitFilter:Oi,mask:ki,WebkitMask:ki},Ni=e=>Mi[e],Pi=new Set([Oi,ki]);function z(e,t){let n=Ni(e);return Pi.has(n)||(n=Nt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Fi=new Set([`auto`,`none`,`0`]);function Ii(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Fi.has(t)&&Et(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=z(n,i)}var Li=class extends ar{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),qe(r))){let i=zr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!$r.has(n)||e.length!==2)return;let[r,i]=e,a=Ci(r),o=Ci(i);if(Ye(r)!==Ye(i)&&Zn[n]){this.needsMeasurement=!0;return}if(a!==o)if(qn(a)&&qn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Zn[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||wi(e[t]))&&n.push(t);n.length&&Ii(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Zn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Ri(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var zi=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Bi(e){return A(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Vi,cancel:Hi}=Le(queueMicrotask,!1),Ui={x:!1,y:!1};function Wi(){return Ui.x||Ui.y}function Gi(e){return e===`x`||e===`y`?Ui[e]?null:(Ui[e]=!0,()=>{Ui[e]=!1}):Ui.x||Ui.y?null:(Ui.x=Ui.y=!0,()=>{Ui.x=Ui.y=!1})}function Ki(e,t){let n=Ri(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function qi(e){return!(e.pointerType===`touch`||Wi())}function Ji(e,t,n={}){let[r,i,a]=Ki(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!qi(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Yi=(e,t)=>t?e===t?!0:Yi(e,t.parentElement):!1,Xi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Zi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Qi(e){return Zi.has(e.tagName)||e.isContentEditable===!0}var $i=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function ea(e){return $i.has(e.tagName)||e.isContentEditable===!0}var ta=new WeakSet;function na(e){return t=>{t.key===`Enter`&&e(t)}}function ra(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var ia=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=na(()=>{if(ta.has(n))return;ra(n,`down`);let e=na(()=>{ra(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>ra(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function aa(e){return Xi(e)&&!Wi()}var oa=new WeakSet;function sa(e,t,n={}){let[r,i,a]=Ki(e,n),o=e=>{let r=e.currentTarget;if(!aa(e)||oa.has(e))return;ta.add(r),n.stopPropagation&&oa.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),ta.has(r)&&ta.delete(r),aa(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Yi(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Bi(e)&&(e.addEventListener(`focus`,e=>ia(e,i)),!Qi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function ca(e){return A(e)&&`ownerSVGElement`in e}var la=new WeakMap,ua,da=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ca(r)&&`getBBox`in r?r.getBBox()[t]:r[n],fa=da(`inline`,`width`,`offsetWidth`),pa=da(`block`,`height`,`offsetHeight`);function ma({target:e,borderBoxSize:t}){la.get(e)?.forEach(n=>{n(e,{get width(){return fa(e,t)},get height(){return pa(e,t)}})})}function ha(e){e.forEach(ma)}function ga(){typeof ResizeObserver>`u`||(ua=new ResizeObserver(ha))}function _a(e,t){ua||ga();let n=Ri(e);return n.forEach(e=>{let n=la.get(e);n||(n=new Set,la.set(e,n)),n.add(t),ua?.observe(e)}),()=>{n.forEach(e=>{let n=la.get(e);n?.delete(t),n?.size||ua?.unobserve(e)})}}var va=new Set,ya;function ba(){ya=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};va.forEach(t=>t(e))},window.addEventListener(`resize`,ya)}function xa(e){return va.add(e),ya||ba(),()=>{va.delete(e),!va.size&&typeof ya==`function`&&(window.removeEventListener(`resize`,ya),ya=void 0)}}function Sa(e,t){return typeof e==`function`?xa(e):_a(e,t)}function Ca(e){return ca(e)&&e.tagName===`svg`}var wa=[...Si,_t,Nt],Ta=e=>wa.find(xi(e)),Ea=()=>({translate:0,scale:1,origin:0,originPoint:0}),Da=()=>({x:Ea(),y:Ea()}),Oa=()=>({min:0,max:0}),ka=()=>({x:Oa(),y:Oa()}),Aa=new WeakMap;function ja(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ma(e){return typeof e==`string`||Array.isArray(e)}var Na=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Pa=[`initial`,...Na];function Fa(e){return ja(e.animate)||Pa.some(t=>Ma(e[t]))}function Ia(e){return!!(Fa(e)||e.variants)}function La(e,t,n){for(let r in t){let i=t[r],a=n[r];if(li(i))e.addValue(r,i);else if(li(a))e.addValue(r,ii(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,ii(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ra={current:null},za={current:!1},Ba=typeof window<`u`;function Va(){if(za.current=!0,Ba)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ra.current=e.matches;e.addEventListener(`change`,t),t()}else Ra.current=!1}var Ha=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Ua={};function Wa(e){Ua=e}function Ga(){return Ua}var Ka=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ar,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=He.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,I.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Fa(t),this.isVariantNode=Ia(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&li(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Aa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(za.current||Va(),this.shouldReduceMotion=Ra.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Re(this.notifyUpdate),Re(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Or.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new vr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ue(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Kn.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&I.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Ua){let t=Ua[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ka()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ha.length;t++){let n=Ha[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=La(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ii(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ae(n)||j(n))?n=parseFloat(n):!Ta(n)&&Nt.test(t)&&(n=z(e,t)),this.setBaseTarget(e,li(n)?n.get():n)),li(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Zr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!li(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new N),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Vi.render(this.render)}},qa=class extends Ka{constructor(){super(...arguments),this.KeyframeResolver=Li}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;li(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Ja=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Ya({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Xa({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Za(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Qa(e){return e===void 0||e===1}function $a({scale:e,scaleX:t,scaleY:n}){return!Qa(e)||!Qa(t)||!Qa(n)}function eo(e){return $a(e)||to(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function to(e){return no(e.x)||no(e.y)}function no(e){return e&&e!==`0%`}function ro(e,t,n){return n+t*(e-n)}function io(e,t,n,r,i){return i!==void 0&&(e=ro(e,i,r)),ro(e,n,r)+t}function ao(e,t=0,n=1,r,i){e.min=io(e.min,t,n,r,i),e.max=io(e.max,t,n,r,i)}function oo(e,{x:t,y:n}){ao(e.x,t.translate,t.scale,t.originPoint),ao(e.y,n.translate,n.scale,n.originPoint)}var so=.999999999999,co=1.0000000000001;function lo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(B(e.x,-a.scroll.offset.x),B(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,oo(e,o)),r&&eo(a.latestValues)&&V(e,a.latestValues,a.layout?.layoutBox))}t.x<co&&t.x>so&&(t.x=1),t.y<co&&t.y>so&&(t.y=1)}function B(e,t){e.min+=t,e.max+=t}function uo(e,t,n,r,i=.5){ao(e,t,n,Lt(e.min,e.max,i),r)}function fo(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function V(e,t,n){let r=n??e;uo(e.x,fo(t.x,r.x),t.scaleX,t.scale,t.originX),uo(e.y,fo(t.y,r.y),t.scaleY,t.scale,t.originY)}function H(e,t){return Ya(Za(e.getBoundingClientRect(),t))}function po(e,t,n){let r=H(e,n),{scroll:i}=t;return i&&(B(r.x,i.offset.x),B(r.y,i.offset.y)),r}var mo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ho=Gn.length;function go(e,t,n){let r=``,i=!0;for(let a=0;a<ho;a++){let o=Gn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=zi(s,ji[o]);if(!c){i=!1;let t=mo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function _o(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Kn.has(e)){o=!0;continue}else if(Ge(e)){i[e]=n;continue}else{let t=zi(n,ji[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=go(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function vo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function yo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var bo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(R.test(e))e=parseFloat(e);else return e;return`${yo(e,t.target.x)}% ${yo(e,t.target.y)}%`}},xo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Nt.parse(e);if(i.length>5)return r;let a=Nt.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=Lt(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},So={borderRadius:{...bo,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:xo};function Co(e,{layout:t,layoutId:n}){return Kn.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!So[e]||e===`opacity`)}function wo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(li(r[t])||i&&li(i[t])||Co(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function To(e){return window.getComputedStyle(e)}var Eo=class extends qa{constructor(){super(...arguments),this.type=`html`,this.renderInstance=vo}readValueFromInstance(e,t){if(Kn.has(t))return this.projection?.isProjecting?Vn(t):Un(e,t);{let n=To(e),r=(Ge(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return H(e,t)}build(e,t,n){_o(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return wo(e,t,n)}},Do={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Oo={offset:`strokeDashoffset`,array:`strokeDasharray`};function ko(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Do:Oo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ao=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function jo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(_o(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Ao)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ko(d,i,a,o,!1)}var Mo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),No=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Po(e,t,n,r){vo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Mo.has(n)?n:fi(n),t.attrs[n])}function Fo(e,t,n){let r=wo(e,t,n);for(let n in e)if(li(e[n])||li(t[n])){let t=Gn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Io=class extends qa{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=ka}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Kn.has(t)){let e=Ni(t);return e&&e.default||0}return t=Mo.has(t)?t:fi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Fo(e,t,n)}build(e,t,n){jo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Po(e,t,n,r)}mount(e){this.isSVGTag=No(e.tagName),super.mount(e)}},Lo=Pa.length;function Ro(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Ro(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Lo;n++){let r=Pa[n],i=e.props[r];(Ma(i)||i===!1)&&(t[r]=i)}return t}function zo(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Bo=[...Na].reverse(),Vo=Na.length;function Ho(e){return t=>Promise.all(t.map(({animation:t,options:n})=>yi(e,t,n)))}function Uo(e){let t=Ho(e),n=Ko(),r=!0,i=!1,a=t=>(n,r)=>{let i=Qr(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Ro(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Vo;t++){let p=Bo[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ma(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||ja(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Wo(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ai(t)&&ai(n)?!zo(t,n):t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Qr(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Ir(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Qr(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ko(),i=!0}}}function Wo(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!zo(t,e):!1}function Go(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ko(){return{animate:Go(!0),whileInView:Go(),whileHover:Go(),whileTap:Go(),whileDrag:Go(),whileFocus:Go(),exit:Go()}}function qo(e,t){e.min=t.min,e.max=t.max}function Jo(e,t){qo(e.x,t.x),qo(e.y,t.y)}function Yo(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Xo=1e-4,Zo=1-Xo,Qo=1+Xo,$o=.01,es=0-$o,ts=0+$o;function ns(e){return e.max-e.min}function rs(e,t,n){return Math.abs(e-t)<=n}function is(e,t,n,r=.5){e.origin=r,e.originPoint=Lt(t.min,t.max,e.origin),e.scale=ns(n)/ns(t),e.translate=Lt(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Zo&&e.scale<=Qo||isNaN(e.scale))&&(e.scale=1),(e.translate>=es&&e.translate<=ts||isNaN(e.translate))&&(e.translate=0)}function as(e,t,n,r){is(e.x,t.x,n.x,r?r.originX:void 0),is(e.y,t.y,n.y,r?r.originY:void 0)}function os(e,t,n,r=0){e.min=(r?Lt(n.min,n.max,r):n.min)+t.min,e.max=e.min+ns(t)}function ss(e,t,n,r){os(e.x,t.x,n.x,r?.x),os(e.y,t.y,n.y,r?.y)}function cs(e,t,n,r=0){let i=r?Lt(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ns(t)}function ls(e,t,n,r){cs(e.x,t.x,n.x,r?.x),cs(e.y,t.y,n.y,r?.y)}function us(e,t,n,r,i){return e-=t,e=ro(e,1/n,r),i!==void 0&&(e=ro(e,1/i,r)),e}function ds(e,t=0,n=1,r=.5,i,a=e,o=e){if(ft.test(t)&&(t=parseFloat(t),t=Lt(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=Lt(a.min,a.max,r);e===a&&(s-=t),e.min=us(e.min,t,n,s,i),e.max=us(e.max,t,n,s,i)}function fs(e,t,[n,r,i],a,o){ds(e,t[n],t[r],t[i],t.scale,a,o)}var ps=[`x`,`scaleX`,`originX`],ms=[`y`,`scaleY`,`originY`];function hs(e,t,n,r){fs(e.x,t,ps,n?n.x:void 0,r?r.x:void 0),fs(e.y,t,ms,n?n.y:void 0,r?r.y:void 0)}function gs(e){return e.translate===0&&e.scale===1}function _s(e){return gs(e.x)&&gs(e.y)}function vs(e,t){return e.min===t.min&&e.max===t.max}function ys(e,t){return vs(e.x,t.x)&&vs(e.y,t.y)}function bs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function xs(e,t){return bs(e.x,t.x)&&bs(e.y,t.y)}function Ss(e){return ns(e.x)/ns(e.y)}function Cs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ws(e){return[e(`x`),e(`y`)]}function Ts(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Es=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Ds=Es.length,Os=e=>typeof e==`string`?parseFloat(e):e,ks=e=>typeof e==`number`||R.test(e);function As(e,t,n,r,i,a){i?(e.opacity=Lt(0,n.opacity??1,Ms(r)),e.opacityExit=Lt(t.opacity??1,0,Ns(r))):a&&(e.opacity=Lt(t.opacity??1,n.opacity??1,r));for(let i=0;i<Ds;i++){let a=Es[i],o=js(t,a),s=js(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||ks(o)===ks(s)?(e[a]=Math.max(Lt(Os(o),Os(s),r),0),(ft.test(s)||ft.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=Lt(t.rotate||0,n.rotate||0,r))}function js(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Ms=Ps(0,.5,Te),Ns=Ps(.5,.95,se);function Ps(e,t,n){return r=>r<e?0:r>t?1:n(le(e,t,r))}function Fs(e,t,n){let r=li(e)?e:ii(e);return r.start(Yr(``,r,t,n)),r.animation}function Is(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Ls=(e,t)=>e.depth-t.depth,Rs=class{constructor(){this.children=[],this.isDirty=!1}add(e){ne(this.children,e),this.isDirty=!0}remove(e){re(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ls),this.isDirty=!1,this.children.forEach(e)}};function zs(e,t){let n=He.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Re(r),e(a-t))};return I.setup(r,!0),()=>Re(r)}function Bs(e){return li(e)?e.get():e}var Vs=class{constructor(){this.members=[]}add(e){ne(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(re(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(re(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Hs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Us={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Ws=[``,`X`,`Y`,`Z`],Gs=1e3,Ks=0;function qs(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Js(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=mi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,I,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Js(r)}function Ys({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ks++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pe.value&&(Us.nodes=Us.calculatedTargetDeltas=Us.calculatedProjections=0),this.nodes.forEach(Qs),this.nodes.forEach(sc),this.nodes.forEach(cc),this.nodes.forEach($s),Pe.addProjectionMetrics&&Pe.addProjectionMetrics(Us)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new N),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ca(t)&&!Ca(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;I.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=zs(i,250),Hs.hasAnimatedSinceResize&&(Hs.hasAnimatedSinceResize=!1,this.nodes.forEach(oc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||hc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!xs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Kr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||oc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Re(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Js(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(nc),this.nodes.forEach(tc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(rc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ic),this.nodes.forEach(ac),this.nodes.forEach(Xs),this.nodes.forEach(Zs)):this.nodes.forEach(rc),this.clearAllSnapshots();let e=He.now();L.delta=k(0,1e3/60,e-L.timestamp),L.timestamp=e,L.isProcessing=!0,ze.update.process(L),ze.preRender.process(L),ze.render.process(L),L.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ec),this.sharedNodes.forEach(uc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,I.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){I.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ns(this.snapshot.measuredBox.x)&&!ns(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=ka(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!_s(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||eo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),yc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return ka();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(xc))){let{scroll:e}=this.root;e&&(B(t.x,e.offset.x),B(t.y,e.offset.y))}return t}removeElementScroll(e){let t=ka();if(Jo(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Jo(t,e),B(t.x,i.offset.x),B(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||ka();Jo(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(B(r.x,-n.scroll.offset.x),B(r.y,-n.scroll.offset.y)),eo(n.latestValues)&&V(r,n.latestValues,n.layout?.layoutBox)}return eo(this.latestValues)&&V(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=ka();Jo(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!eo(n.latestValues))continue;let r;n.instance&&($a(n.latestValues)&&n.updateSnapshot(),r=ka(),Jo(r,n.measurePageBox())),hs(t,n.latestValues,n.snapshot?.layoutBox,r)}return eo(this.latestValues)&&hs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==L.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=L.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ka(),this.targetWithTransforms=ka()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ss(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Jo(this.target,this.layout.layoutBox),oo(this.target,this.targetDelta)):Jo(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Pe.value&&Us.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||$a(this.parent.latestValues)||to(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ka(),this.relativeTargetOrigin=ka(),ls(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Jo(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===L.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Jo(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;lo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=ka());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Yo(this.prevProjectionDelta.x,this.projectionDelta.x),Yo(this.prevProjectionDelta.y,this.projectionDelta.y)),as(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Cs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Pe.value&&Us.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Da(),this.projectionDelta=Da(),this.projectionDeltaWithTransform=Da()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Da();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=ka(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(mc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;dc(a.x,e.x,n),dc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ls(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),pc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&ys(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=ka(),Jo(d,this.relativeTarget)),s&&(this.animationValues=i,As(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Re(this.pendingAnimation),void 0),this.pendingAnimation=I.update(()=>{Hs.hasAnimatedSinceResize=!0,Ue.layout++,this.motionValue||=ii(0),this.motionValue.jump(0,!1),this.currentAnimation=Fs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Ue.layout--},onComplete:()=>{Ue.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Gs),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&bc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||ka();let t=ns(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=ns(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Jo(t,n),V(t,i),as(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Vs),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&qs(`z`,e,r,this.animationValues);for(let t=0;t<Ws.length;t++)qs(`rotate${Ws[t]}`,e,r,this.animationValues),qs(`skew${Ws[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Bs(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Bs(t?.pointerEvents)||``),this.hasProjected&&!eo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ts(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in So){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=So[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Bs(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(tc),this.root.sharedNodes.clear()}}}function Xs(e){e.updateLayout()}function Zs(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)ws(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ns(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;qo(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else bc(i,t.layoutBox,n)&&ws(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ns(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Da();as(o,n,t.layoutBox);let s=Da();a?as(s,e.applyTransform(r,!0),t.measuredBox):as(s,n,t.layoutBox);let c=!_s(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=ka();ls(s,t.layoutBox,i.layoutBox,o);let c=ka();ls(c,n,a.layoutBox,o),xs(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Qs(e){Pe.value&&Us.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function $s(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ec(e){e.clearSnapshot()}function tc(e){e.clearMeasurements()}function nc(e){e.isLayoutDirty=!0,e.updateLayout()}function rc(e){e.isLayoutDirty=!1}function ic(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function ac(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function oc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function sc(e){e.resolveTargetDelta()}function cc(e){e.calcProjection()}function lc(e){e.resetSkewAndRotation()}function uc(e){e.removeLeadSnapshot()}function dc(e,t,n){e.translate=Lt(t.translate,0,n),e.scale=Lt(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fc(e,t,n,r){e.min=Lt(t.min,n.min,r),e.max=Lt(t.max,n.max,r)}function pc(e,t,n,r){fc(e.x,t.x,n.x,r),fc(e.y,t.y,n.y,r)}function mc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var hc={duration:.45,ease:[.4,0,.1,1]},gc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_c=gc(`applewebkit/`)&&!gc(`chrome/`)?Math.round:se;function vc(e){e.min=_c(e.min),e.max=_c(e.max)}function yc(e){vc(e.x),vc(e.y)}function bc(e,t,n){return e===`position`||e===`preserve-aspect`&&!rs(Ss(t),Ss(n),.2)}function xc(e){return e!==e.root&&e.scroll?.wasRoot}var Sc=Ys({attachResizeListener:(e,t)=>Is(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Cc={current:void 0},wc=Ys({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cc.current){let e=new Sc({});e.mount(window),e.setOptions({layoutScroll:!0}),Cc.current=e}return Cc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Tc=(0,C.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Ec(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Dc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Ec(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Ec(e[t],null)}}}}function Oc(...e){return C.useCallback(Dc(...e),e)}var kc=class extends C.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Bi(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Bi(e)&&e.offsetWidth||0,r=Bi(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Ac({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,C.useId)(),s=(0,C.useRef)(null),c=(0,C.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,C.useContext)(Tc),u=Oc(s,e.props?.ref??e?.ref);return(0,C.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,w.jsx)(kc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:C.cloneElement(e,{ref:u})})}var jc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=O(Mc),d=(0,C.useId)(),f=!0,p=(0,C.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,C.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),C.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,w.jsx)(Ac,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,w.jsx)(te.Provider,{value:p,children:e})};function Mc(){return new Map}function Nc(e=!0){let t=(0,C.useContext)(te);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,C.useId)();(0,C.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,C.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Pc=e=>e.key||``;function Fc(e){let t=[];return C.Children.forEach(e,e=>{(0,C.isValidElement)(e)&&t.push(e)}),t}var Ic=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Nc(o),f=(0,C.useMemo)(()=>Fc(e),[e]),p=o&&!u?[]:f.map(Pc),m=(0,C.useRef)(!0),h=(0,C.useRef)(f),g=O(()=>new Map),_=(0,C.useRef)(new Set),[v,y]=(0,C.useState)(f),[b,x]=(0,C.useState)(f);ee(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Pc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Pc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Fc(e)),y(f),null}let{forceRender:T}=(0,C.useContext)(D);return(0,w.jsx)(w.Fragment,{children:b.map(e=>{let v=Pc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,w.jsx)(jc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(T?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Lc=(0,C.createContext)({strict:!1}),Rc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},zc=!1;function Bc(){if(zc)return;let e={};for(let t in Rc)e[t]={isEnabled:e=>Rc[t].some(t=>!!e[t])};Wa(e),zc=!0}function Vc(){return Bc(),Ga()}function Hc(e){let t=Vc();for(let n in e)t[n]={...t[n],...e[n]};Wa(t)}var Uc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Wc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Uc.has(e)}var Gc=c({default:()=>Kc}),Kc,qc=o((()=>{throw Kc={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Jc=e=>!Wc(e);function Yc(e){typeof e==`function`&&(Jc=t=>t.startsWith(`on`)?!Wc(t):e(t))}try{Yc((qc(),d(Gc)).default)}catch{}function Xc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||li(e[i])||(Jc(i)||n===!0&&Wc(i)||!t&&!Wc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Zc=(0,C.createContext)({});function Qc(e,t){if(Fa(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ma(t)?t:void 0,animate:Ma(n)?n:void 0}}return e.inherit===!1?{}:t}function $c(e){let{initial:t,animate:n}=Qc(e,(0,C.useContext)(Zc));return(0,C.useMemo)(()=>({initial:t,animate:n}),[el(t),el(n)])}function el(e){return Array.isArray(e)?e.join(` `):e}var tl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nl(e,t,n){for(let r in t)!li(t[r])&&!Co(r,n)&&(e[r]=t[r])}function rl({transformTemplate:e},t){return(0,C.useMemo)(()=>{let n=tl();return _o(n,t,e),Object.assign({},n.vars,n.style)},[t])}function il(e,t){let n=e.style||{},r={};return nl(r,n,e),Object.assign(r,rl(e,t)),r}function al(e,t){let n={},r=il(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var ol=()=>({...tl(),attrs:{}});function sl(e,t,n,r){let i=(0,C.useMemo)(()=>{let n=ol();return jo(n,t,No(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};nl(t,e.style,e),i.style={...t,...i.style}}return i}var cl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ll(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(cl.indexOf(e)>-1||/[A-Z]/u.test(e))}function ul(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??ll(e)?sl:al)(t,r,i,e),c=Xc(t,typeof e==`string`,a),l=e===C.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,C.useMemo)(()=>li(u)?u.get():u,[u]);return(0,C.createElement)(e,{...l,children:d})}function dl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:fl(n,r,i,e),renderState:t()}}function fl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Bs(a[e]);let{initial:o,animate:s}=e,c=Fa(e),l=Ia(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ja(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Zr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var pl=e=>(t,n)=>{let r=(0,C.useContext)(Zc),i=(0,C.useContext)(te),a=()=>dl(e,t,r,i);return n?a():O(a)},ml=pl({scrapeMotionValuesFromProps:wo,createRenderState:tl}),hl=pl({scrapeMotionValuesFromProps:Fo,createRenderState:ol}),gl=Symbol.for(`motionComponentSymbol`);function _l(e,t,n){let r=(0,C.useRef)(n);(0,C.useInsertionEffect)(()=>{r.current=n});let i=(0,C.useRef)(null);return(0,C.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var vl=(0,C.createContext)({});function yl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function bl(e,t,n,r,i,a){let{visualElement:o}=(0,C.useContext)(Zc),s=(0,C.useContext)(Lc),c=(0,C.useContext)(te),l=(0,C.useContext)(Tc),u=l.reducedMotion,d=l.skipAnimations,f=(0,C.useRef)(null),p=(0,C.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,C.useContext)(vl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&xl(f.current,n,i,h);let g=(0,C.useRef)(!1);(0,C.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[pi],v=(0,C.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return ee(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,C.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function xl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Sl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&yl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Sl(e){if(e)return e.options.allowProjection===!1?Sl(e.parent):e.projection}function Cl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Hc(r);let a=n?n===`svg`:ll(e),o=a?hl:ml;function s(n,s){let c,l={...(0,C.useContext)(Tc),...n,layoutId:wl(n)},{isStatic:u}=l,d=$c(n),f=o(n,u);if(!u&&typeof window<`u`){Tl(l,r);let t=El(l);c=t.MeasureLayout,d.visualElement=bl(e,f,l,i,t.ProjectionNode,a)}return(0,w.jsxs)(Zc.Provider,{value:d,children:[c&&d.visualElement?(0,w.jsx)(c,{visualElement:d.visualElement,...l}):null,ul(e,n,_l(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,C.forwardRef)(s);return c[gl]=e,c}function wl({layoutId:e}){let t=(0,C.useContext)(D).id;return t&&e!==void 0?t+`-`+e:e}function Tl(e,t){(0,C.useContext)(Lc).strict}function El(e){let{drag:t,layout:n}=Vc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Dl(e,t){if(typeof Proxy>`u`)return Cl;let n=new Map,r=(n,r)=>Cl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Cl(a,void 0,e,t)),n.get(a))})}var Ol=(e,t)=>t.isSVG??ll(e)?new Io(t):new Eo(t,{allowProjection:e!==C.Fragment}),kl=class extends Ja{constructor(e){super(e),e.animationState||=Uo(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ja(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Al=0,jl={animation:{Feature:kl},exit:{Feature:class extends Ja{constructor(){super(...arguments),this.id=Al++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Qr(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Ml(e){return{point:{x:e.pageX,y:e.pageY}}}var Nl=e=>t=>Xi(t)&&e(t,Ml(t));function Pl(e,t,n,r){return Is(e,t,Nl(n),r)}var Fl=({current:e})=>e?e.ownerDocument.defaultView:null,Il=(e,t)=>Math.abs(e-t);function Ll(e,t){let n=Il(e.x,t.x),r=Il(e.y,t.y);return Math.sqrt(n**2+r**2)}var Rl=new Set([`auto`,`scroll`]),zl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Bl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=U(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Ll(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=L;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Bl(t,this.transformPagePoint),I.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=U(e.type===`pointercancel`?this.lastMoveEventInfo:Bl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Xi(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Bl(Ml(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=L;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,U(s,this.history)),this.removeListeners=M(Pl(this.contextWindow,`pointermove`,this.handlePointerMove),Pl(this.contextWindow,`pointerup`,this.handlePointerUp),Pl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Rl.has(e.overflowX)||Rl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),I.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Re(this.updatePoint)}};function Bl(e,t){return t?{point:t(e.point)}:e}function Vl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function U({point:e},t){return{point:e,delta:Vl(e,W(t)),offset:Vl(e,Hl(t)),velocity:G(t,.1)}}function Hl(e){return e[0]}function W(e){return e[e.length-1]}function G(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=W(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ue(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ue(t)*2&&(r=e[1]);let a=de(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Ul(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Lt(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Lt(n,e,r.max):Math.min(e,n)),e}function Wl(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Gl(e,{top:t,left:n,bottom:r,right:i}){return{x:Wl(e.x,n,i),y:Wl(e.y,t,r)}}function Kl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ql(e,t){return{x:Kl(e.x,t.x),y:Kl(e.y,t.y)}}function Jl(e,t){let n=.5,r=ns(e),i=ns(t);return i>r?n=le(t.min,t.max-r,e.min):r>i&&(n=le(e.min,e.max-i,t.min)),k(0,1,n)}function Yl(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Xl=.35;function Zl(e=Xl){return e===!1?e=0:e===!0&&(e=Xl),{x:Ql(e,`left`,`right`),y:Ql(e,`top`,`bottom`)}}function Ql(e,t,n){return{min:$l(e,t),max:$l(e,n)}}function $l(e,t){return typeof e==`number`?e:e[t]||0}var eu=new WeakMap,tu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ka(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Ml(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gi(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ws(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ft.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ns(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&I.update(()=>i(e,t),!1,!0),di(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=au(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&I.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new zl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Fl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&I.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!iu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Ul(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&yl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Gl(n.layoutBox,e):this.constraints=!1,this.elastic=Zl(t),r!==this.constraints&&!yl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&ws(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Yl(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!yl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=po(n,r.root,this.visualElement.getTransformPagePoint()),a=ql(r.layout.layoutBox,i);if(t){let e=t(Xa(a));this.hasMutatedConstraints=!!e,e&&(a=Ya(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=ws(o=>{if(!iu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return di(this.visualElement,e),n.start(Yr(e,n,0,t,this.visualElement,!1))}stopAnimation(){ws(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ws(t=>{let{drag:n}=this.getProps();if(!iu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-Lt(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!yl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};ws(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Jl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),ws(t=>{if(!iu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Lt(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;eu.set(this.visualElement,this);let e=this.visualElement.current,t=Pl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ea(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();yl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=ru(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),I.read(r);let o=Is(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(ws(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Xl,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function nu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function ru(e,t,n){let r=Sa(e,nu(n)),i=Sa(t,nu(n));return()=>{r(),i()}}function iu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function au(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var ou=class extends Ja{constructor(e){super(e),this.removeGroupControls=se,this.removeListeners=se,this.controls=new tu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||se}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},su=e=>(t,n)=>{e&&I.update(()=>e(t,n),!1,!0)},cu=class extends Ja{constructor(){super(...arguments),this.removePointerDownListener=se}onPointerDown(e){this.session=new zl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:su(e),onStart:su(t),onMove:su(n),onEnd:(e,t)=>{delete this.session,r&&I.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Pl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},lu=!1,uu=class extends C.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),lu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Hs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),lu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||I.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Vi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;lu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function du(e){let[t,n]=Nc(),r=(0,C.useContext)(D);return(0,w.jsx)(uu,{...e,layoutGroup:r,switchLayoutGroup:(0,C.useContext)(vl),isPresent:t,safeToRemove:n})}var fu={pan:{Feature:cu},drag:{Feature:ou,ProjectionNode:wc,MeasureLayout:du}};function pu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&I.postRender(()=>i(t,Ml(t)))}var mu=class extends Ja{mount(){let{current:e}=this.node;e&&(this.unmount=Ji(e,(e,t)=>(pu(this.node,t,`Start`),e=>pu(this.node,e,`End`))))}unmount(){}},hu=class extends Ja{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=M(Is(this.node.current,`focus`,()=>this.onFocus()),Is(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function gu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&I.postRender(()=>i(t,Ml(t)))}var _u=class extends Ja{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=sa(e,(e,t)=>(gu(this.node,t,`Start`),(e,{success:t})=>gu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},vu=new WeakMap,yu=new WeakMap,bu=e=>{let t=vu.get(e.target);t&&t(e)},xu=e=>{e.forEach(bu)};function Su({root:e,...t}){let n=e||document;yu.has(n)||yu.set(n,{});let r=yu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(xu,{root:e,...t})),r[i]}function Cu(e,t,n){let r=Su(t);return vu.set(e,n),r.observe(e),()=>{vu.delete(e),r.unobserve(e)}}var wu={some:0,all:1},Tu=class extends Ja{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:wu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Cu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Eu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Eu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Du={inView:{Feature:Tu},tap:{Feature:_u},focus:{Feature:hu},hover:{Feature:mu}},Ou={layout:{ProjectionNode:wc,MeasureLayout:du}},ku=Dl({...jl,...Du,...fu,...Ou},Ol);function Au(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var ju=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Mu=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Nu={};function Pu(e,t){return((t||Nu).jsx?Mu:ju).test(e)}var Fu=/[ \t\n\f\r]/g;function Iu(e){return typeof e==`object`?e.type===`text`?Lu(e.value):!1:Lu(e)}function Lu(e){return e.replace(Fu,``)===``}var Ru=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};Ru.prototype.normal={},Ru.prototype.property={},Ru.prototype.space=void 0;function zu(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new Ru(n,r,t)}function Bu(e){return e.toLowerCase()}var Vu=class{constructor(e,t){this.attribute=t,this.property=e}};Vu.prototype.attribute=``,Vu.prototype.booleanish=!1,Vu.prototype.boolean=!1,Vu.prototype.commaOrSpaceSeparated=!1,Vu.prototype.commaSeparated=!1,Vu.prototype.defined=!1,Vu.prototype.mustUseProperty=!1,Vu.prototype.number=!1,Vu.prototype.overloadedBoolean=!1,Vu.prototype.property=``,Vu.prototype.spaceSeparated=!1,Vu.prototype.space=void 0;var Hu=c({boolean:()=>K,booleanish:()=>Wu,commaOrSpaceSeparated:()=>J,commaSeparated:()=>qu,number:()=>q,overloadedBoolean:()=>Gu,spaceSeparated:()=>Ku}),Uu=0,K=Ju(),Wu=Ju(),Gu=Ju(),q=Ju(),Ku=Ju(),qu=Ju(),J=Ju();function Ju(){return 2**++Uu}var Yu=Object.keys(Hu),Xu=class extends Vu{constructor(e,t,n,r){let i=-1;if(super(e,t),Zu(this,`space`,r),typeof n==`number`)for(;++i<Yu.length;){let e=Yu[i];Zu(this,Yu[i],(n&Hu[e])===Hu[e])}}};Xu.prototype.defined=!0;function Zu(e,t,n){n&&(e[t]=n)}function Qu(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new Xu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Bu(r)]=r,n[Bu(a.attribute)]=r}return new Ru(t,n,e.space)}var $u=Qu({properties:{ariaActiveDescendant:null,ariaAtomic:Wu,ariaAutoComplete:null,ariaBusy:Wu,ariaChecked:Wu,ariaColCount:q,ariaColIndex:q,ariaColSpan:q,ariaControls:Ku,ariaCurrent:null,ariaDescribedBy:Ku,ariaDetails:null,ariaDisabled:Wu,ariaDropEffect:Ku,ariaErrorMessage:null,ariaExpanded:Wu,ariaFlowTo:Ku,ariaGrabbed:Wu,ariaHasPopup:null,ariaHidden:Wu,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ku,ariaLevel:q,ariaLive:null,ariaModal:Wu,ariaMultiLine:Wu,ariaMultiSelectable:Wu,ariaOrientation:null,ariaOwns:Ku,ariaPlaceholder:null,ariaPosInSet:q,ariaPressed:Wu,ariaReadOnly:Wu,ariaRelevant:null,ariaRequired:Wu,ariaRoleDescription:Ku,ariaRowCount:q,ariaRowIndex:q,ariaRowSpan:q,ariaSelected:Wu,ariaSetSize:q,ariaSort:null,ariaValueMax:q,ariaValueMin:q,ariaValueNow:q,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ed(e,t){return t in e?e[t]:t}function td(e,t){return ed(e,t.toLowerCase())}var nd=Qu({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:qu,acceptCharset:Ku,accessKey:Ku,action:null,allow:null,allowFullScreen:K,allowPaymentRequest:K,allowUserMedia:K,alt:null,as:null,async:K,autoCapitalize:null,autoComplete:Ku,autoFocus:K,autoPlay:K,blocking:Ku,capture:null,charSet:null,checked:K,cite:null,className:Ku,cols:q,colSpan:null,content:null,contentEditable:Wu,controls:K,controlsList:Ku,coords:q|qu,crossOrigin:null,data:null,dateTime:null,decoding:null,default:K,defer:K,dir:null,dirName:null,disabled:K,download:Gu,draggable:Wu,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:K,formTarget:null,headers:Ku,height:q,hidden:Gu,high:q,href:null,hrefLang:null,htmlFor:Ku,httpEquiv:Ku,id:null,imageSizes:null,imageSrcSet:null,inert:K,inputMode:null,integrity:null,is:null,isMap:K,itemId:null,itemProp:Ku,itemRef:Ku,itemScope:K,itemType:Ku,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:K,low:q,manifest:null,max:null,maxLength:q,media:null,method:null,min:null,minLength:q,multiple:K,muted:K,name:null,nonce:null,noModule:K,noValidate:K,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:K,optimum:q,pattern:null,ping:Ku,placeholder:null,playsInline:K,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:K,referrerPolicy:null,rel:Ku,required:K,reversed:K,rows:q,rowSpan:q,sandbox:Ku,scope:null,scoped:K,seamless:K,selected:K,shadowRootClonable:K,shadowRootDelegatesFocus:K,shadowRootMode:null,shape:null,size:q,sizes:null,slot:null,span:q,spellCheck:Wu,src:null,srcDoc:null,srcLang:null,srcSet:null,start:q,step:null,style:null,tabIndex:q,target:null,title:null,translate:null,type:null,typeMustMatch:K,useMap:null,value:Wu,width:q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ku,axis:null,background:null,bgColor:null,border:q,borderColor:null,bottomMargin:q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:K,declare:K,event:null,face:null,frame:null,frameBorder:null,hSpace:q,leftMargin:q,link:null,longDesc:null,lowSrc:null,marginHeight:q,marginWidth:q,noResize:K,noHref:K,noShade:K,noWrap:K,object:null,profile:null,prompt:null,rev:null,rightMargin:q,rules:null,scheme:null,scrolling:Wu,standby:null,summary:null,text:null,topMargin:q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:K,disableRemotePlayback:K,prefix:null,property:null,results:q,security:null,unselectable:null},space:`html`,transform:td}),rd=Qu({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:J,accentHeight:q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:q,amplitude:q,arabicForm:null,ascent:q,attributeName:null,attributeType:null,azimuth:q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:q,by:null,calcMode:null,capHeight:q,className:Ku,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:q,diffuseConstant:q,direction:null,display:null,dur:null,divisor:q,dominantBaseline:null,download:K,dx:null,dy:null,edgeMode:null,editable:null,elevation:q,enableBackground:null,end:null,event:null,exponent:q,externalResourcesRequired:null,fill:null,fillOpacity:q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:qu,g2:qu,glyphName:qu,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:q,horizOriginX:q,horizOriginY:q,id:null,ideographic:q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:q,k:q,k1:q,k2:q,k3:q,k4:q,kernelMatrix:J,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:q,overlineThickness:q,paintOrder:null,panose1:null,path:null,pathLength:q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ku,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:q,pointsAtY:q,pointsAtZ:q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:J,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:J,rev:J,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:J,requiredFeatures:J,requiredFonts:J,requiredFormats:J,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:q,specularExponent:q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:q,strikethroughThickness:q,string:null,stroke:null,strokeDashArray:J,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:q,strokeOpacity:q,strokeWidth:null,style:null,surfaceScale:q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:J,tabIndex:q,tableValues:null,target:null,targetX:q,targetY:q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:J,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:q,underlineThickness:q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:q,values:null,vAlphabetic:q,vMathematical:q,vectorEffect:null,vHanging:q,vIdeographic:q,version:null,vertAdvY:q,vertOriginX:q,vertOriginY:q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ed}),id=Qu({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),ad=Qu({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:td}),od=Qu({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),sd={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},cd=/[A-Z]/g,ld=/-[a-z]/g,ud=/^data[-\w.:]+$/i;function dd(e,t){let n=Bu(t),r=t,i=Vu;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&ud.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(ld,pd);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ld.test(e)){let n=e.replace(cd,fd);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=Xu}return new i(r,t)}function fd(e){return`-`+e.toLowerCase()}function pd(e){return e.charAt(1).toUpperCase()}var md=zu([$u,nd,id,ad,od],`html`),hd=zu([$u,rd,id,ad,od],`svg`);function gd(e){return e.join(` `).trim()}var _d=s(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,d=`/`,f=`*`,p=``,m=`comment`,h=`declaration`;function g(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,g=1;function v(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(u);g=~n?e.length-n:g+e.length}function y(){var e={line:l,column:g};return function(t){return t.position=new b(e),C(),t}}function b(e){this.start=e,this.end={line:l,column:g},this.source=t.source}b.prototype.content=e;function x(n){var r=Error(t.source+`:`+l+`:`+g+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=g,r.source=e,!t.silent)throw r}function S(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function C(){S(i)}function w(e){var t;for(e||=[];t=T();)t!==!1&&e.push(t);return e}function T(){var t=y();if(!(d!=e.charAt(0)||f!=e.charAt(1))){for(var n=2;p!=e.charAt(n)&&(f!=e.charAt(n)||d!=e.charAt(n+1));)++n;if(n+=2,p===e.charAt(n-1))return x(`End of comment missing`);var r=e.slice(2,n-2);return g+=2,v(r),e=e.slice(n),g+=2,t({type:m,comment:r})}}function E(){var e=y(),t=S(a);if(t){if(T(),!S(o))return x(`property missing ':'`);var r=S(s),i=e({type:h,property:_(t[0].replace(n,p)),value:r?_(r[0].replace(n,p)):p});return S(c),i}}function D(){var e=[];w(e);for(var t;t=E();)t!==!1&&(e.push(t),w(e));return e}return C(),D()}function _(e){return e?e.replace(l,p):p}t.exports=g})),vd=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,`__esModule`,{value:!0}),e.default=r;var n=t(_d());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),yd=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),bd=s(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(vd()),r=yd();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),xd=Y(`end`),Sd=Y(`start`);function Y(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Cd(e){let t=Sd(e),n=xd(e);if(t&&n)return{start:t,end:n}}function wd(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Ed(e.position):`start`in e||`end`in e?Ed(e):`line`in e||`column`in e?Td(e):``}function Td(e){return Dd(e&&e.line)+`:`+Dd(e&&e.column)}function Ed(e){return Td(e&&e.start)+`-`+Td(e&&e.end)}function Dd(e){return e&&typeof e==`number`?e:1}var Od=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=wd(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Od.prototype.file=``,Od.prototype.name=``,Od.prototype.reason=``,Od.prototype.message=``,Od.prototype.stack=``,Od.prototype.column=void 0,Od.prototype.line=void 0,Od.prototype.ancestors=void 0,Od.prototype.cause=void 0,Od.prototype.fatal=void 0,Od.prototype.place=void 0,Od.prototype.ruleId=void 0,Od.prototype.source=void 0;var kd=u(bd(),1),Ad={}.hasOwnProperty,jd=new Map,Md=/[A-Z]/g,Nd=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Pd=new Set([`td`,`th`]),Fd=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Id(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=qd(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=Kd(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?hd:md,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Ld(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Ld(e,t,n){if(t.type===`element`)return Rd(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return zd(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return Vd(e,t,n);if(t.type===`mdxjsEsm`)return Bd(e,t);if(t.type===`root`)return Hd(e,t,n);if(t.type===`text`)return Ud(e,t)}function Rd(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=hd,e.schema=i),e.ancestors.push(t);let a=$d(e,t.tagName,!1),o=Jd(e,t),s=Xd(e,t);return Nd.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!Iu(e):!0})),Wd(e,o,a,t),Gd(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function zd(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ef(e,t.position)}function Bd(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ef(e,t.position)}function Vd(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=hd,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:$d(e,t.name,!0),o=Yd(e,t),s=Xd(e,t);return Wd(e,o,a,t),Gd(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function Hd(e,t,n){let r={};return Gd(r,Xd(e,t)),e.create(t,e.Fragment,r,n)}function Ud(e,t){return t.value}function Wd(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Gd(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Kd(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function qd(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Sd(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Jd(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Ad.call(t.properties,i)){let a=Zd(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Pd.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function Yd(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ef(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else ef(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function Xd(e,t){let n=[],r=-1,i=e.passKeys?new Map:jd;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Ld(e,a,o);s!==void 0&&n.push(s)}return n}function Zd(e,t,n){let r=dd(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Au(n):gd(n)),r.property===`style`){let t=typeof n==`object`?n:Qd(e,String(n));return e.stylePropertyNameCase===`css`&&(t=tf(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?sd[r.property]||r.property:r.attribute,n]}}function Qd(e,t){try{return(0,kd.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Od("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Fd+`#cannot-parse-style-attribute`,r}}function $d(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Pu(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Pu(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Ad.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ef(e)}function ef(e,t){let n=new Od("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Fd+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function tf(e){let t={},n;for(n in e)Ad.call(e,n)&&(t[nf(n)]=e[n]);return t}function nf(e){let t=e.replace(Md,rf);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function rf(e){return`-`+e.toLowerCase()}var af={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},of={};function sf(e,t){let n=t||of;return cf(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function cf(e,t,n){if(uf(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return lf(e.children,t,n)}return Array.isArray(e)?lf(e,t,n):``}function lf(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=cf(e[i],t,n);return r.join(``)}function uf(e){return!!(e&&typeof e==`object`)}var df=document.createElement(`i`);function ff(e){let t=`&`+e+`;`;df.innerHTML=t;let n=df.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}function pf(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function mf(e,t){return e.length>0?(pf(e,e.length,0,t),e):t}var hf={}.hasOwnProperty;function gf(e){let t={},n=-1;for(;++n<e.length;)_f(t,e[n]);return t}function _f(e,t){let n;for(n in t){let r=(hf.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){hf.call(r,a)||(r[a]=[]);let e=i[a];vf(r[a],Array.isArray(e)?e:e?[e]:[])}}}function vf(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);pf(e,0,0,r)}function yf(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function bf(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var xf=jf(/[A-Za-z]/),Sf=jf(/[\dA-Za-z]/),Cf=jf(/[#-'*+\--9=?A-Z^-~]/);function wf(e){return e!==null&&(e<32||e===127)}var Tf=jf(/\d/),Ef=jf(/[\dA-Fa-f]/),Df=jf(/[!-/:-@[-`{-~]/);function X(e){return e!==null&&e<-2}function Of(e){return e!==null&&(e<0||e===32)}function Z(e){return e===-2||e===-1||e===32}var kf=jf(/\p{P}|\p{S}/u),Af=jf(/\s/);function jf(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Mf(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Sf(e.charCodeAt(n+1))&&Sf(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function Q(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Z(r)?(e.enter(n),s(r)):t(r)}function s(r){return Z(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Nf={tokenize:Pf};function Pf(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),Q(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return X(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Ff={tokenize:Lf},If={tokenize:Rf};function Lf(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return pf(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(If,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(If,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return X(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;pf(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-- >r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Rf(e,t,n){return Q(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function zf(e){if(e===null||Of(e)||Af(e))return 1;if(kf(e))return 2}function Bf(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Vf={name:`attention`,resolveAll:Hf,tokenize:Uf};function Hf(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};Wf(d,-c),Wf(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=mf(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=mf(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=mf(l,Bf(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=mf(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=mf(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,pf(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function Uf(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=zf(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=zf(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function Wf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Gf={name:`autolink`,tokenize:Kf};function Kf(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return xf(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Sf(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Sf(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||wf(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Cf(t)?(e.consume(t),l):n(t)}function u(e){return Sf(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Sf(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var qf={partial:!0,tokenize:Jf};function Jf(e,t,n){return r;function r(t){return Z(t)?Q(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||X(e)?t(e):n(e)}}var Yf={continuation:{tokenize:Zf},exit:Qf,name:`blockQuote`,tokenize:Xf};function Xf(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Z(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function Zf(e,t,n){let r=this;return i;function i(t){return Z(t)?Q(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(Yf,t,n)(r)}}function Qf(e){e.exit(`blockQuote`)}var $f={name:`characterEscape`,tokenize:ep};function ep(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return Df(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var tp={name:`characterReference`,tokenize:np};function np(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Sf,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Ef,u):(e.enter(`characterReferenceValue`),a=7,o=Tf,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Sf&&!ff(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var rp={partial:!0,tokenize:op},ip={concrete:!0,name:`codeFenced`,tokenize:ap};function ap(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Z(t)?Q(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||X(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(rp,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||X(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Z(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),Q(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||X(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||X(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Z(t)?Q(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||X(t)?e.check(rp,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||X(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Z(t)?Q(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Z(t)?Q(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||X(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function op(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var sp={name:`codeIndented`,tokenize:lp},cp={partial:!0,tokenize:up};function lp(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),Q(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):X(t)?e.attempt(cp,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||X(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function up(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):X(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):Q(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):X(e)?i(e):n(e)}}var dp={name:`codeText`,previous:pp,resolve:fp,tokenize:mp};function fp(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function pp(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function mp(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):X(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||X(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var hp=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&gp(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),gp(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),gp(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);gp(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);gp(this.left,t.reverse())}}};function gp(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function _p(e){let t={},n=-1,r,i,a,o,s,c,l,u=new hp(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,vp(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return pf(e,0,1/0,u.slice(0)),!l}function vp(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var yp={resolve:xp,tokenize:Sp},bp={partial:!0,tokenize:Cp};function xp(e){return _p(e),e}function Sp(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):X(t)?e.check(bp,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Cp(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),Q(e,a,`linePrefix`)}function a(i){if(i===null||X(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function wp(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||wf(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||X(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||Of(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||wf(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Tp(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):X(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||X(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Z(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Ep(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):X(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),Q(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||X(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Dp(e,t){let n;return r;function r(i){return X(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Z(i)?Q(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Op={name:`definition`,tokenize:Ap},kp={partial:!0,tokenize:jp};function Ap(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Tp.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=bf(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return Of(t)?Dp(e,l)(t):l(t)}function l(t){return wp(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(kp,d,d)(t)}function d(t){return Z(t)?Q(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||X(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function jp(e,t,n){return r;function r(t){return Of(t)?Dp(e,i)(t):n(t)}function i(t){return Ep(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Z(t)?Q(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||X(e)?t(e):n(e)}}var Mp={name:`hardBreakEscape`,tokenize:Np};function Np(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return X(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Pp={name:`headingAtx`,resolve:Fp,tokenize:Ip};function Fp(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},pf(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Ip(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||Of(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||X(n)?(e.exit(`atxHeading`),t(n)):Z(n)?Q(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||Of(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var Lp=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Rp=[`pre`,`script`,`style`,`textarea`],zp={concrete:!0,name:`htmlFlow`,resolveTo:Hp,tokenize:Up},Bp={partial:!0,tokenize:Gp},Vp={partial:!0,tokenize:Wp};function Hp(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Up(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:A):xf(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):xf(a)?(e.consume(a),i=4,r.interrupt?t:A):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:A):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:O:m):n(i)}function h(t){return xf(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||Of(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Rp.includes(l)?(i=1,r.interrupt?t(s):O(s)):Lp.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):O(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Sf(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:O):n(i)}function v(t){return Z(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||xf(t)?(e.consume(t),b):Z(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Sf(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Z(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Z(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||X(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||Of(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Z(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),D):n(t)}function D(t){return t===null||X(t)?O(t):Z(t)?(e.consume(t),D):n(t)}function O(t){return t===45&&i===2?(e.consume(t),re):t===60&&i===1?(e.consume(t),k):t===62&&i===4?(e.consume(t),j):t===63&&i===3?(e.consume(t),A):t===93&&i===5?(e.consume(t),ae):X(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Bp,oe,ee)(t)):t===null||X(t)?(e.exit(`htmlFlowData`),ee(t)):(e.consume(t),O)}function ee(t){return e.check(Vp,te,oe)(t)}function te(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ne}function ne(t){return t===null||X(t)?ee(t):(e.enter(`htmlFlowData`),O(t))}function re(t){return t===45?(e.consume(t),A):O(t)}function k(t){return t===47?(e.consume(t),o=``,ie):O(t)}function ie(t){if(t===62){let n=o.toLowerCase();return Rp.includes(n)?(e.consume(t),j):O(t)}return xf(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),ie):O(t)}function ae(t){return t===93?(e.consume(t),A):O(t)}function A(t){return t===62?(e.consume(t),j):t===45&&i===2?(e.consume(t),A):O(t)}function j(t){return t===null||X(t)?(e.exit(`htmlFlowData`),oe(t)):(e.consume(t),j)}function oe(n){return e.exit(`htmlFlow`),t(n)}}function Wp(e,t,n){let r=this;return i;function i(t){return X(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function Gp(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(qf,t,n)}}var Kp={name:`htmlText`,tokenize:qp};function qp(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):xf(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):xf(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):X(t)?(o=d,k(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?re(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):X(t)?(o=h,k(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?re(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?re(t):X(t)?(o=v,k(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):X(t)?(o=y,k(t)):(e.consume(t),y)}function b(e){return e===62?re(e):y(e)}function x(t){return xf(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Sf(t)?(e.consume(t),S):C(t)}function C(t){return X(t)?(o=C,k(t)):Z(t)?(e.consume(t),C):re(t)}function w(t){return t===45||Sf(t)?(e.consume(t),w):t===47||t===62||Of(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),re):t===58||t===95||xf(t)?(e.consume(t),E):X(t)?(o=T,k(t)):Z(t)?(e.consume(t),T):re(t)}function E(t){return t===45||t===46||t===58||t===95||Sf(t)?(e.consume(t),E):D(t)}function D(t){return t===61?(e.consume(t),O):X(t)?(o=D,k(t)):Z(t)?(e.consume(t),D):T(t)}function O(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,ee):X(t)?(o=O,k(t)):Z(t)?(e.consume(t),O):(e.consume(t),te)}function ee(t){return t===i?(e.consume(t),i=void 0,ne):t===null?n(t):X(t)?(o=ee,k(t)):(e.consume(t),ee)}function te(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||Of(t)?T(t):(e.consume(t),te)}function ne(e){return e===47||e===62||Of(e)?T(e):n(e)}function re(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function k(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),ie}function ie(t){return Z(t)?Q(e,ae,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):ae(t)}function ae(t){return e.enter(`htmlTextData`),o(t)}}var Jp={name:`labelEnd`,resolveAll:Qp,resolveTo:$p,tokenize:em},Yp={tokenize:tm},Xp={tokenize:nm},Zp={tokenize:rm};function Qp(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&pf(e,0,e.length,n),e}function $p(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=mf(s,e.slice(a+1,a+r+3)),s=mf(s,[[`enter`,u,t]]),s=mf(s,Bf(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=mf(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=mf(s,e.slice(o+1)),s=mf(s,[[`exit`,c,t]]),pf(e,a,e.length,s),e}function em(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(bf(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(Yp,u,o?u:d)(t):t===91?e.attempt(Xp,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(Zp,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function tm(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return Of(t)?Dp(e,a)(t):a(t)}function a(t){return t===41?u(t):wp(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return Of(t)?Dp(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Ep(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return Of(t)?Dp(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function nm(e,t,n){let r=this;return i;function i(t){return Tp.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(bf(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function rm(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var im={name:`labelStartImage`,resolveAll:Jp.resolveAll,tokenize:am};function am(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var om={name:`labelStartLink`,resolveAll:Jp.resolveAll,tokenize:sm};function sm(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var cm={name:`lineEnding`,tokenize:lm};function lm(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),Q(e,t,`linePrefix`)}}var um={name:`thematicBreak`,tokenize:dm};function dm(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||X(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Z(t)?Q(e,s,`whitespace`)(t):s(t))}}var fm={continuation:{tokenize:gm},exit:vm,name:`list`,tokenize:hm},pm={partial:!0,tokenize:ym},mm={partial:!0,tokenize:_m};function hm(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Tf(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(um,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Tf(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(qf,r.interrupt?n:u,e.attempt(pm,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Z(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function gm(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(qf,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Z(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(mm,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(fm,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function _m(e,t,n){let r=this;return Q(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function vm(e){e.exit(this.containerState.type)}function ym(e,t,n){let r=this;return Q(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Z(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var bm={name:`setextUnderline`,resolveTo:xm,tokenize:Sm};function xm(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function Sm(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Z(t)?Q(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||X(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Cm={tokenize:wm};function wm(e){let t=this,n=e.attempt(qf,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(yp,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Tm={resolveAll:km()},Em=Om(`string`),Dm=Om(`text`);function Om(e){return{resolveAll:km(e===`text`?Am:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function km(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Am(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var jm=c({attentionMarkers:()=>zm,contentInitial:()=>Nm,disable:()=>Bm,document:()=>Mm,flow:()=>Fm,flowInitial:()=>Pm,insideSpan:()=>Rm,string:()=>Im,text:()=>Lm}),Mm={42:fm,43:fm,45:fm,48:fm,49:fm,50:fm,51:fm,52:fm,53:fm,54:fm,55:fm,56:fm,57:fm,62:Yf},Nm={91:Op},Pm={[-2]:sp,[-1]:sp,32:sp},Fm={35:Pp,42:um,45:[bm,um],60:zp,61:bm,95:um,96:ip,126:ip},Im={38:tp,92:$f},Lm={[-5]:cm,[-4]:cm,[-3]:cm,33:im,38:tp,42:Vf,60:[Gf,Kp],91:om,92:[Mp,$f],93:Jp,95:Vf,96:dp},Rm={null:[Vf,Tm]},zm={null:[42,95]},Bm={null:[]};function Vm(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=mf(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Bf(a,l.events,l),l.events):[]}function f(e,t){return Um(p(e),t)}function p(e){return Hm(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){X(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&pf(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Hm(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Um(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function Wm(e){let t={constructs:gf([jm,...(e||{}).extensions||[]]),content:n(Nf),defined:[],document:n(Ff),flow:n(Cm),lazy:{},string:n(Em),text:n(Dm)};return t;function n(e){return n;function n(n){return Vm(t,e,n)}}}function Gm(e){for(;!_p(e););return e}var Km=/[\0\t\n\r]/g;function qm(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(Km.lastIndex=u,c=Km.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var Jm=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ym(e){return e.replace(Jm,Xm)}function Xm(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return yf(n.slice(t?2:1),t?16:10)}return ff(n)||e}var Zm={}.hasOwnProperty;function Qm(e,t,n){return t&&typeof t==`object`&&(n=t,t=void 0),$m(n)(Gm(Wm(n).document().write(qm()(e,t,!0))))}function $m(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(xe),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(_e),blockQuote:a(fe),characterEscape:T,characterReference:T,codeFenced:a(pe),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(pe,o),codeText:a(me,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(he),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(ge),hardBreakEscape:a(ve),hardBreakTrailing:a(ve),htmlFlow:a(ye,o),htmlFlowData:T,htmlText:a(ye,o),htmlTextData:T,image:a(be),label:o,link:a(xe),listItem:a(Ce),listItemValue:f,listOrdered:a(Se,d),listUnordered:a(Se),paragraph:a(we),reference:se,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(_e),strong:a(Te),thematicBreak:a(De)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:de,autolinkProtocol:ue,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:M,characterReferenceMarkerNumeric:M,characterReferenceValue:le,characterReference:N,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(ne),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(O),hardBreakTrailing:c(O),htmlFlow:c(ee),htmlFlowData:E,htmlText:c(te),htmlTextData:E,image:c(k),label:ae,labelText:ie,lineEnding:D,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ce,resourceDestinationString:A,resourceTitleString:j,resource:oe,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};th(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];Zm.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||rh).call(a,void 0,e[0])}for(r.position={start:eh(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:eh(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:eh(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||rh).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+wd({start:e.start,end:e.end})+`): it’s not open`);n.position.end=eh(e.end)}function u(){return sf(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=bf(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ee(),n.position={start:eh(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=eh(e.end)}function D(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=eh(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function O(){this.data.atHardBreak=!0}function ee(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function k(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ie(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=Ym(t),n.identifier=bf(t).toLowerCase()}function ae(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function A(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function j(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function oe(){this.data.inReference=void 0}function se(){this.data.referenceType=`collapsed`}function ce(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=bf(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function M(e){this.data.characterReferenceType=e.type}function le(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=yf(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=ff(t);let i=this.stack[this.stack.length-1];i.value+=r}function N(e){let t=this.stack.pop();t.position.end=eh(e.end)}function ue(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function de(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function fe(){return{type:`blockquote`,children:[]}}function pe(){return{type:`code`,lang:null,meta:null,value:``}}function me(){return{type:`inlineCode`,value:``}}function he(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function ge(){return{type:`emphasis`,children:[]}}function _e(){return{type:`heading`,depth:0,children:[]}}function ve(){return{type:`break`}}function ye(){return{type:`html`,value:``}}function be(){return{type:`image`,title:null,url:``,alt:null}}function xe(){return{type:`link`,title:null,url:``,children:[]}}function Se(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function Ce(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function we(){return{type:`paragraph`,children:[]}}function Te(){return{type:`strong`,children:[]}}function Ee(){return{type:`text`,value:``}}function De(){return{type:`thematicBreak`}}}function eh(e){return{line:e.line,column:e.column,offset:e.offset}}function th(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?th(e,r):nh(e,r)}}function nh(e,t){let n;for(n in t)if(Zm.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function rh(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+wd({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wd({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+wd({start:t.start,end:t.end})+`) is still open`)}function ih(e){let t=this;t.parser=n;function n(n){return Qm(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function ah(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function oh(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function sh(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function ch(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lh(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function uh(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Mf(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function dh(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fh(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ph(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function mh(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ph(e,t);let i={src:Mf(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function hh(e,t){let n={src:Mf(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function gh(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function _h(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ph(e,t);let i={href:Mf(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function vh(e,t){let n={href:Mf(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function yh(e,t,n){let r=e.all(t),i=n?bh(n):xh(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function bh(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=xh(n[r])}return t}function xh(e){return e.spread??e.children.length>1}function Sh(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Ch(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function wh(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Th(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Eh(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Sd(t.children[1]),o=xd(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Dh(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Oh(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var kh=9,Ah=32;function jh(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Mh(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Mh(t.slice(i),i>0,!1)),a.join(``)}function Mh(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===kh||t===Ah;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===kh||t===Ah;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Nh(e,t){let n={type:`text`,value:jh(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Ph(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Fh={blockquote:ah,break:oh,code:sh,delete:ch,emphasis:lh,footnoteReference:uh,heading:dh,html:fh,imageReference:mh,image:hh,inlineCode:gh,linkReference:_h,link:vh,listItem:yh,list:Sh,paragraph:Ch,root:wh,strong:Th,table:Eh,tableCell:Oh,tableRow:Dh,text:Nh,thematicBreak:Ph,toml:Ih,yaml:Ih,definition:Ih,footnoteDefinition:Ih};function Ih(){}var Lh=typeof self==`object`?self:globalThis,Rh=(e,t)=>{switch(e){case`Function`:case`SharedWorker`:case`Worker`:case`eval`:case`setInterval`:case`setTimeout`:throw TypeError(`unable to deserialize `+e)}return new Lh[e](t)},zh=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(Rh(e,t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(Rh(a,o),i)};return r},Bh=e=>zh(new Map,e)(0),Vh=``,{toString:Hh}={},{keys:Uh}=Object,Wh=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Hh.call(e).slice(8,-1);switch(n){case`Array`:return[1,Vh];case`Object`:return[2,Vh];case`Date`:return[3,Vh];case`RegExp`:return[4,Vh];case`Map`:return[5,Vh];case`Set`:return[6,Vh];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},Gh=([e,t])=>e===0&&(t===`function`||t===`symbol`),Kh=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=Wh(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Uh(r))(e||!Gh(Wh(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(Gh(Wh(n))||Gh(Wh(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!Gh(Wh(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},qh=(e,{json:t,lossy:n}={})=>{let r=[];return Kh(!(t||n),!!t,new Map,r)(e),r},Jh=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Bh(qh(e,t)):structuredClone(e):(e,t)=>Bh(qh(e,t));function Yh(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function Xh(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function Zh(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||Yh,r=e.options.footnoteBackLabel||Xh,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Mf(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...Jh(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var Qh=(function(e){if(e==null)return rg;if(typeof e==`function`)return ng(e);if(typeof e==`object`)return Array.isArray(e)?$h(e):eg(e);if(typeof e==`string`)return tg(e);throw Error(`Expected function, string, or object as test`)});function $h(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Qh(e[n]);return ng(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function eg(e){let t=e;return ng(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function tg(e){return ng(t);function t(t){return t&&t.type===e}}function ng(e){return t;function t(t,n,r){return!!(ig(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function rg(){return!0}function ig(e){return typeof e==`object`&&!!e&&`type`in e}function ag(e){return e}var og=[];function sg(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=Qh(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,`name`,{value:`node (`+ag(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=og,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=cg(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function cg(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?og:[e]}function lg(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),sg(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var ug={}.hasOwnProperty,dg={};function fg(e,t){let n=t||dg,r=new Map,i=new Map,a={all:s,applyData:mg,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Fh,...n.handlers},one:o,options:n,patch:pg,wrap:gg};return lg(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(ug.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=Jh(n);return r.children=a.all(e),r}return Jh(e)}return(a.options.unknownHandler||hg)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=_g(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=_g(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function pg(e,t){e.position&&(t.position=Cd(e))}function mg(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,Jh(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function hg(e,t){let n=t.data||{},r=`value`in t&&!(ug.call(n,`hProperties`)||ug.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function gg(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function _g(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function vg(e,t){let n=fg(e,t),r=n.one(e,void 0),i=Zh(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function yg(e,t){return e&&`run`in e?async function(n,r){let i=vg(n,{file:r,...t});await e.run(i,r)}:function(n,r){return vg(n,{file:r,...e||t})}}function bg(e){if(e)throw e}var xg=s(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function Sg(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Cg(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?wg(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function wg(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Tg={basename:Eg,dirname:Dg,extname:Og,join:kg,sep:`/`};function Eg(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Mg(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Dg(e){if(Mg(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Og(e){Mg(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function kg(...e){let t=-1,n;for(;++t<e.length;)Mg(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Ag(n)}function Ag(e){Mg(e);let t=e.codePointAt(0)===47,n=jg(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function jg(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Mg(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Ng={cwd:Pg};function Pg(){return`/`}function Fg(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Ig(e){if(typeof e==`string`)e=new URL(e);else if(!Fg(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return Lg(e)}function Lg(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Rg=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],zg=class{constructor(e){let t;t=e?Fg(e)?{path:e}:typeof e==`string`||Ug(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Ng.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Rg.length;){let e=Rg[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Rg.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Tg.basename(this.path):void 0}set basename(e){Vg(e,`basename`),Bg(e,`basename`),this.path=Tg.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Tg.dirname(this.path):void 0}set dirname(e){Hg(this.basename,`dirname`),this.path=Tg.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Tg.extname(this.path):void 0}set extname(e){if(Bg(e,`extname`),Hg(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Tg.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Fg(e)&&(e=Ig(e)),Vg(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Tg.basename(this.path,this.extname):void 0}set stem(e){Vg(e,`stem`),Bg(e,`stem`),this.path=Tg.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Od(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Bg(e,t){if(e&&e.includes(Tg.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Tg.sep+"`")}function Vg(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Hg(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function Ug(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var Wg=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),Gg=u(xg(),1),Kg={}.hasOwnProperty,qg=new class e extends Wg{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Cg()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,Gg.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(Xg(`data`,this.frozen),this.namespace[e]=t,this):Kg.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Xg(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=$g(e),n=this.parser||this.Parser;return Jg(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),Jg(`process`,this.parser||this.Parser),Yg(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=$g(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);t_(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),Jg(`processSync`,this.parser||this.Parser),Yg(`processSync`,this.compiler||this.Compiler),this.process(e,r),Qg(`processSync`,`process`,t),n;function r(e,r){t=!0,bg(e),n=r}}run(e,t,n){Zg(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=$g(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),Qg(`runSync`,`run`,n),r;function i(e,t){bg(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=$g(t),r=this.compiler||this.Compiler;return Yg(`stringify`,r),Zg(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(Xg(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,Gg.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];Sg(o)&&Sg(r)&&(r=(0,Gg.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function Jg(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function Yg(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function Xg(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Zg(e){if(!Sg(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function Qg(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function $g(e){return e_(e)?e:new zg(e)}function e_(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function t_(e){return typeof e==`string`||n_(e)}function n_(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var r_=[],i_={allowDangerousHtml:!0},a_=/^(https?|ircs?|mailto|xmpp)$/i,o_=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`className`,id:`remove-classname`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function s_(e){let t=c_(e),n=l_(e);return u_(t.runSync(t.parse(n),n),e)}function c_(e){let t=e.rehypePlugins||r_,n=e.remarkPlugins||r_,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...i_}:i_;return qg().use(ih).use(n).use(yg,r).use(t)}function l_(e){let t=e.children||``,n=new zg;return typeof t==`string`?n.value=t:``+t,n}function u_(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||d_;for(let e of o_)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return lg(e,l),Id(e,{Fragment:w.Fragment,components:i,ignoreInvalidStyle:!0,jsx:w.jsx,jsxs:w.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in af)if(Object.hasOwn(af,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=af[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function d_(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||a_.test(e.slice(0,t))?e:``}var f_=Object.assign({"../content/de/3d-flaschenzug-in-autocad.md":`---
id: 3d-flaschenzug-in-autocad
slug: 3d-flaschenzug-in-autocad
translation_id: local-post-1779960596593
language: de
content_type: 
title: 3D-Flaschenzug in AutoCAD
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Flaschenzug-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Flaschenzug-1.webp
- /my-electronics-blog/images/posts/Flaschenzug-2.webp
- /my-electronics-blog/images/posts/Flaschenzug-3.webp
excerpt: In diesem Projekt wurde ein mechanischer Flaschenzug vollständig als 3D-Modell in AutoCAD konstruiert. Der Fokus lag auf der präzisen Modellierung der einzelnen Bauteile sowie der realistischen mechanischen Darstellung des Systems.
tags:
- AutoCAD
- 3D
- Konstruktion
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:29:56.593Z'
external_link: https://drive.google.com/drive/folders/1fN_hc6jaddMzTqEt0iIS4YxpiPdT8JFR?usp=drive_link
project_status: done
sort_order: 70
---

# 3D-Flaschenzug in AutoCAD

Dieses Projekt umfasst die Konstruktion eines Flaschenzugs als 3D-Modell in AutoCAD. Alle mechanischen Komponenten wurden einzeln modelliert und anschließend zu einer vollständigen Baugruppe zusammengefügt.

Das Modell beinhaltet unter anderem:

Haken
Umlenkrollen
Seitenplatten
Verbindungsbolzen
Hebel- und Führungselemente

Ziel des Projekts war die Verbesserung der Kenntnisse im Bereich 3D-CAD-Konstruktion sowie das Verständnis mechanischer Bewegungsabläufe und Bauteilverbindungen.

Besondere Schwerpunkte:

Präzise 3D-Modellierung in AutoCAD
Zusammenbau mechanischer Komponenten
Technische Darstellung eines Flaschenzugs
Visualisierung der Mechanik in verschiedenen Ansichten
Realistische Konstruktion der Bauteile

Das fertige Modell kann für technische Präsentationen, Lernzwecke oder als Grundlage für weitere mechanische Entwicklungen verwendet werden.
`,"../content/de/autocad-2d-kleine-dampfmaschine.md":`---
id: autocad-2d-kleine-dampfmaschine
slug: autocad-2d-kleine-dampfmaschine
translation_id: demo-2
language: de
content_type: 
title: AutoCAD 2D – Kleine Dampfmaschine
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Dampfmaschine-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Dampfmaschine-1.webp
- /my-electronics-blog/images/posts/Dampfmaschine-2.webp
- /my-electronics-blog/images/posts/Dampfmaschine-3.webp
- /my-electronics-blog/images/posts/Dampfmaschine-5.webp
excerpt: Entwicklung technischer 2D- und 3D-CAD-Modelle im Maschinenbau mit AutoCAD 2026, einschließlich einer Dampfmaschine.
tags:
- Autocad 2D
read_time: 6 Min.
published: true
created_at: '2026-05-08T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1GDWUKT5mLYHnSlSns5oKxpMZrkY9WENy
project_status: done
sort_order: 80
---

# AutoCAD 2D – Kleine Dampfmaschine

Dieses Projekt zeigt die vollständige 2D-Konstruktion einer kleinen Dampfmaschine im Bereich Maschinenbau mit AutoCAD 2026.

Enthalten sind:

* Grundplatte
* Fuß und Spiegel
* Lagerbock
* Kolbenstangenkopf
* Kurbelscheibe und Kurbelwelle
* Zylinder und Kolben
* Schwungrad
* Pendelachse
* Reling und Mittelsteg
* Normteile und Stückliste

Die technischen Zeichnungen enthalten:

* Maßangaben
* Schnittdarstellungen
* Materialangaben
* Einzelteilzeichnungen
* Zusammenbauzeichnung

Verwendete Materialien:

* Messing
* Stahllegierung
* Kupfer
* Glas

Ein weiteres Projekt ist die Entwicklung eines mechanischen Flaschenzugs mit Doppelrolle und Sicherheitsverschluss-Haken.
Die Konstruktion wurde als 3D-CAD-Modell entwickelt und dient zum Heben schwerer Lasten mit reduzierter Zugkraft.

Über den Button „Zum Projekt“ erhalten Sie Zugriff auf sämtliche Projektdateien, einschließlich der AutoCAD-Dateien im .dwg-Format.

Kurszeitraum:
19.01.2026 – 13.02.2026

Verwendete Software:
AutoCAD 2026

Projekt von:
NGUYEN NHAN DO
`,"../content/de/elektronik-test-reparatur.md":`---
id: elektronik-test-reparatur
slug: elektronik-test-reparatur
translation_id: demo-1
language: de
content_type: 
title: Elektronik • Test • Reparatur
category: Über mich
image_url: /my-electronics-blog/images/posts/Nguyen-main.webp
image_gallery:
[]
excerpt: Elektroingenieur mit großem Interesse an Elektrokonstruktion und Softwareentwicklung. Lernbereit, feinmotorisch und motiviert, meine praktischen Erfahrungen kontinuierlich zu erweitern.
tags:
- ESP32
- MQTT
- Smart Home
- Sensorik
read_time: 8 Min.
published: true
created_at: '2026-05-14T12:00:00Z'
external_link: 
project_status: done
sort_order: 10
---

# Elektronik • Test • Reparatur

Meine Schwerpunkte liegen in:
- Softwareentwicklung
- Automatisierungstechnik
- SPS-Programmierung (Siemens S7 / TIA Portal)
- Fehlersuche und Reparatur elektronischer Baugruppen

Zusätzlich erweitere ich meine Kenntnisse in:
- WinCC
- C++ / Qt
- EPLAN
- AutoCAD 2D/3D

Ich arbeite sorgfältig, feinmotorisch und bin sehr lernbereit. Obwohl ich noch nicht über sehr viel Berufserfahrung verfüge, eigne ich mir neue Technologien und technische Themen schnell an und entwickle mich kontinuierlich weiter.

Besonders interessiere ich mich für Prüffeldtechnik, Prototypenentwicklung, hardwarenahe Programmierung sowie die Analyse und Fehlerdiagnose elektronischer Systeme.
`,"../content/de/finanzverwaltung-mit-datenanalyse.md":`---
id: finanzverwaltung-mit-datenanalyse
slug: finanzverwaltung-mit-datenanalyse
translation_id: local-post-1779957810945
language: de
content_type: project
title: Finanzverwaltung mit Datenanalyse
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
- /my-electronics-blog/images/posts/finanzmanager-4.webp
excerpt: Die Software ermöglicht die Verwaltung persönlicher Einnahmen und Ausgaben, unterstützt CSV-Import und -Export sowie Echtzeit-Datenanalysen über eine moderne grafische Benutzeroberfläche. Über den Button „Zum Projekt“ am Ende der Seite erhalten Sie Zugriff auf den vollständigen Quellcode des Projekts „Finanzmanager“.
tags:
- C++
- Qt 6.9
read_time: 5 Min.
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

💰 GeldPilot – Persönliche Finanzverwaltung
GeldPilot ist eine moderne Desktop-Anwendung zur Verwaltung persönlicher Finanzen, entwickelt mit C++, Qt 6 und SQLite. Die Software ermöglicht die Verwaltung von Einnahmen und Ausgaben, den CSV-Import und -Export sowie die Analyse finanzieller Daten über eine benutzerfreundliche Oberfläche. Der vollständige Quellcode ist über den Button „Zum Projekt“ am Ende der Seite verfügbar.
✨ Hauptfunktionen
💵 Einnahmen- und Ausgabenverwaltung
Erfassen, bearbeiten und verwalten Sie Ihre finanziellen Transaktionen schnell und einfach.
📂 Kategorisierung von Transaktionen
Ordnen Sie Einnahmen und Ausgaben individuellen oder vordefinierten Kategorien zu.
📅 Flexible Filterung
Filtern Sie Daten nach Zeitraum oder Kategorie für eine gezielte Auswertung.
📊 Finanzanalyse & Statistiken
Automatische Berechnung von Einnahmen, Ausgaben und aktuellem Kontostand.
📈 Interaktive Diagramme
Visualisieren Sie Ihre Finanzdaten mit übersichtlichen Balkendiagrammen.
📄 CSV-Import & Export
Importieren und exportieren Sie Daten für Sicherung, Austausch oder Weiterverarbeitung.
🖨️ Professionelle Berichte
Erstellen und drucken Sie aussagekräftige Finanzberichte.

🛠️ Verwendete Technologien
    • 💻 Programmiersprache: C++17
    • 🎨 Framework: Qt 6.9
    • 🗄️ Datenbank: SQLite
    • 📊 Visualisierung: Qt Charts
    • ⚙️ Build-System: CMake

💡 Besondere Merkmale
✅ Intuitive und moderne Benutzeroberfläche
✅ Schnelle Such- und Filterfunktionen
✅ Lokale Datenspeicherung ohne Cloud-Abhängigkeit
✅ Echtzeit-Auswertungen und grafische Analysen
✅ Wartbare und erweiterbare Softwarearchitektur

🏗️ Projektarchitektur
Die Anwendung basiert auf einer klar strukturierten Architektur mit Qt Widgets für die Benutzeroberfläche, SQLite zur lokalen Datenspeicherung und Qt Charts zur Visualisierung finanzieller Kennzahlen. Die Trennung von GUI, Datenbanklogik und Analysemodulen sorgt für hohe Wartbarkeit und einfache Erweiterbarkeit.

📋 Projektdaten
👨‍💻 Entwickler: Nguyen Nhan Do
📦 Version: 1.0.0
🔧 Technologien: Qt 6.9 · MinGW-w64 · CMake

🎯 Ziel des Projekts
Mit GeldPilot behalten Nutzer ihre Finanzen jederzeit im Blick, analysieren Einnahmen und Ausgaben effizient und treffen fundierte finanzielle Entscheidungen für die Zukunft.
`,"../content/de/home-content.md":`---
type: home_content
language: de
hero_badge: Elektrokonstruktion · Prüftechnik · Software
hero_title: Technik. Dokumentation. Entwicklung.
hero_text: Diese Website habe ich selbst entwickelt, um technische Projekte, Lernfortschritte und praktische Erfahrungen im Bereich Elektronik, Embedded Systems, Messtechnik und technischer Softwareentwicklung zu dokumentieren.
transparency_title: Projektinformationen & Transparenz
transparency_text: Die auf dieser Website gezeigten Fotos von Laborumgebungen, technischen Arbeitsplätzen und elektronischen Geräten dienen ausschließlich der Veranschaulichung meiner technischen Interessen und praktischen Erfahrungen.
transparency_strong: Sie zeigen weder meinen tatsächlichen Arbeitsplatz noch interne Bereiche oder reale Arbeitsumgebungen eines Unternehmens.
feature_1_title: Elektronik & Embedded Systems
feature_1_text: Eigene Lernprojekte rund um Mikrocontroller, Sensorik und hardwarenahe Entwicklung zur praktischen Erweiterung meines technischen Wissens.
feature_2_title: Automatisierung & Steuerung
feature_2_text: Praktische Übungen und kleinere Projekte, um industrielle Abläufe, Steuerungstechnik und technische Prozesse besser zu verstehen.
feature_3_title: Technisches Lernen
feature_3_text: Dokumentation meines Lernwegs, technischer Erfahrungen und neuer Themen, mit denen ich mich kontinuierlich beschäftige.
feature_4_title: Eigene Entwicklung
feature_4_text: Diese Website dient als persönliche Plattform, um Projekte, Ideen und technische Fortschritte übersichtlich festzuhalten.
warning_one: Projekte mit der Kennzeichnung „Konzept“ befinden sich noch in der Ideen- bzw. Konzeptphase und wurden bisher noch nicht praktisch umgesetzt.
warning_two: Alle anderen Projekte können über „Beitrag lesen“ geöffnet werden. Am Ende der jeweiligen Projektseite befindet sich die Schaltfläche „Zum Projekt“ mit projektbezogenen Dateien.
collaboration_title: Zusammenarbeit an modernen Elektronikprojekten.
collaboration_text: Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.
---
`,"../content/de/konzept-eines-pwm-geregelten-dc-netzteils-mit-mess-und-schutzfunktionen.md":`---
id: konzept-eines-pwm-geregelten-dc-netzteils-mit-mess-und-schutzfunktionen
slug: konzept-eines-pwm-geregelten-dc-netzteils-mit-mess-und-schutzfunktionen
translation_id: local-post-1779960818567
language: de
content_type: 
title: Konzept eines PWM-geregelten DC-Netzteils mit Mess- und Schutzfunktionen
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery:
[]
excerpt: Lern- und Konzeptprojekt zur Entwicklung eines mikrocontrollerbasierten DC-Netzteils mit PWM-Regelung, Strombegrenzung und grundlegenden Schutzfunktionen.
tags:
- PWM
- Netzteil
- STM32
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:33:38.567Z'
external_link: 
project_status: idea
sort_order: 130
---

# Konzept eines PWM-geregelten DC-Netzteils mit Mess- und Schutzfunktionen

Lern- und Konzeptprojekt zur Entwicklung eines mikrocontrollerbasierten DC-Netzteils mit PWM-Regelung, Strombegrenzung und grundlegenden Schutzfunktionen

Dieses Projekt ist aktuell als Lern- und Konzeptprojekt geplant. Ziel ist nicht nur der Aufbau eines einfachen DC-Netzteils, sondern vor allem das praktische Verständnis von PWM-Regelung, Leistungselektronik und elektronischen Schutzschaltungen.

Geplant ist eine mikrocontrollerbasierte Lösung zur Regelung von Ausgangsspannung und Strom über PWM-Signale und MOSFET-Ansteuerung. Zusätzlich sollen grundlegende Mess- und Schutzfunktionen integriert werden, um das Verhalten des Systems unter unterschiedlichen Lastbedingungen besser analysieren zu können.

Geplante Funktionen:

Einstellbare Ausgangsspannung
Strombegrenzung
PWM-basierte Regelung
Spannungs- und Strommessung
Temperaturüberwachung
Kurzschluss- und Überstromschutz
Anzeige wichtiger Messwerte über Display

Mich interessiert bei diesem Projekt besonders, wie sich PWM-Frequenz, Laständerungen und Schaltverhalten auf Stabilität, Wirkungsgrad und Wärmeentwicklung auswirken.

Das Projekt befindet sich derzeit noch in der Konzept- und Lernphase. Zunächst sollen einzelne Funktionsblöcke wie PWM-Ansteuerung, Strommessung und Schutzschaltungen separat getestet werden, bevor später ein vollständiger Prototyp aufgebaut wird.

Mit diesem Projekt möchte ich mein Wissen in Embedded-Systemen, Leistungselektronik und praktischer Messtechnik weiter vertiefen.
`,"../content/de/konzeptprojekt-energieuberwachung-mit-esp8266-und-stromsensor.md":`---
id: konzeptprojekt-energieuberwachung-mit-esp8266-und-stromsensor
slug: konzeptprojekt-energieuberwachung-mit-esp8266-und-stromsensor
translation_id: local-post-1779960876705
language: de
content_type: 
title: Konzeptprojekt: Energieüberwachung mit ESP8266 und Stromsensor
category: Embedded Systems
image_url: /my-electronics-blog/images/posts/Energieüberwachung-main.webp
image_gallery:
[]
excerpt: Geplantes Lernprojekt zur einfachen Erfassung und Visualisierung von Stromverbrauchsdaten mit ESP8266 und Stromsensor über WLAN.
tags:
- ESP8266
- Energieüberwachung
- Sensorik
- Embedded Systems
- IoT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:34:36.705Z'
external_link: 
project_status: in_progress
sort_order: 120
---

# Konzeptprojekt: Energieüberwachung mit ESP8266 und Stromsensor

Geplantes Lernprojekt zur einfachen Erfassung und Visualisierung von Stromverbrauchsdaten mit ESP8266 und Stromsensor über WLAN.

Dieses Projekt befindet sich aktuell in der Konzept- und Lernphase.

Geplant ist die Entwicklung eines einfachen Systems zur Überwachung von Stromverbrauchsdaten mit ESP8266 und ACS712-Stromsensor.

Vorgesehene Hardware:
- ESP8266 Mikrocontroller
- ACS712 Stromsensor
- OLED Display
- WLAN-Kommunikation

Geplante Funktionen:
- Anzeige einfacher Messwerte
- WLAN-Datenübertragung
- Dashboard-Visualisierung
- Grundlagen der Energieverbrauchsanalyse

Das Projekt dient zur Vertiefung meiner Kenntnisse im Bereich Embedded Systems, Sensorik und IoT-Kommunikation.

Aktueller Status:
Konzeptprojekt / in Planung
`,"../content/de/konzeptprojekt-esp32-basierte-mqtt-sensoruberwachung-fur-smart-home-anwendungen.md":`---
id: konzeptprojekt-esp32-basierte-mqtt-sensoruberwachung-fur-smart-home-anwendungen
slug: konzeptprojekt-esp32-basierte-mqtt-sensoruberwachung-fur-smart-home-anwendungen
translation_id: local-post-1779960913660
language: de
content_type: 
title: Konzeptprojekt: ESP32-basierte MQTT-Sensorüberwachung für Smart-Home-Anwendungen
category: IoT
image_url: /my-electronics-blog/images/posts/SmartHome-main.webp
image_gallery:
[]
excerpt: Geplantes Lernprojekt zur Entwicklung einer einfachen IoT-Plattform auf Basis eines ESP32-Mikrocontrollers. Ziel des Projekts ist die Erfassung und Visualisierung verschiedener Sensordaten über WLAN und MQTT.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:13.660Z'
external_link: 
project_status: in_progress
sort_order: 110
---

# Konzeptprojekt: ESP32-basierte MQTT-Sensorüberwachung für Smart-Home-Anwendungen

Geplantes Lernprojekt zur Entwicklung einer einfachen IoT-Plattform auf Basis eines ESP32-Mikrocontrollers. Ziel des Projekts ist die Erfassung und Visualisierung verschiedener Sensordaten über WLAN und MQTT.

Dieses Projekt befindet sich aktuell in der Konzept- und Lernphase.

Geplant ist die Entwicklung einer einfachen IoT-Sensorplattform auf Basis eines ESP32-Mikrocontrollers zur Erfassung und Visualisierung verschiedener Sensordaten.

Vorgesehene Hardware:
- ESP32 Dev Board
- DHT22 Temperatur- und Feuchtigkeitssensor
- Relaismodul für einfache Schaltfunktionen
- MQTT Broker (z.B. Mosquitto)
- Dashboard zur Datenvisualisierung

Geplante Funktionen:
- WLAN-Kommunikation
- MQTT Publish/Subscribe
- Sensorüberwachung
- Dashboard-Visualisierung
- Erweiterung um zusätzliche Sensoren und Aktoren

Das Projekt dient zur Vertiefung meiner Kenntnisse im Bereich Embedded Systems, MQTT-Kommunikation und IoT-Anwendungen.

Aktueller Status:
Konzeptprojekt / in Planung
`,"../content/de/konzeptprojekt-esp32-basiertes-420ma-iot-gateway-mit-mqtt-und-rs485.md":`---
id: konzeptprojekt-esp32-basiertes-420ma-iot-gateway-mit-mqtt-und-rs485
slug: konzeptprojekt-esp32-basiertes-420ma-iot-gateway-mit-mqtt-und-rs485
translation_id: local-post-1779960691288
language: de
content_type: 
title: Konzeptprojekt: ESP32-basiertes 4–20mA IoT-Gateway mit MQTT und RS485
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery:
[]
excerpt: Geplantes Lern- und Entwicklungsprojekt zur Erfassung von 4–20mA-Sensorsignalen mit ESP32, ADS1115 und MQTT-Kommunikation. Ziel des Projekts ist die Entwicklung eines einfachen industriellen IoT-Prototyps zur Sensorüberwachung und Datenvisualisierung über Home Assistant.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:31:31.288Z'
external_link: 
project_status: idea
sort_order: 90
---

# Konzeptprojekt: ESP32-basiertes 4–20mA IoT-Gateway mit MQTT und RS485

Geplantes Lern- und Entwicklungsprojekt zur Erfassung von 4–20mA-Sensorsignalen mit ESP32, ADS1115 und MQTT-Kommunikation. Ziel des Projekts ist die Entwicklung eines einfachen industriellen IoT-Prototyps zur Sensorüberwachung und Datenvisualisierung über Home Assistant.

Dieses Projekt befindet sich aktuell in der Konzept- und Planungsphase.

Ziel ist die Entwicklung eines einfachen IoT-Gateways zur Verarbeitung industrieller 4–20mA-Sensorsignale mit ESP32.

Geplante Funktionen:
• Erfassung von 4–20mA-Sensorsignalen über ADS1115
• MQTT-Kommunikation für IoT-Anwendungen
• RS485 / Modbus-RTU-Unterstützung
• Visualisierung der Sensordaten über Home Assistant
• Spannungsversorgung für industrielle 12–24VDC-Umgebungen

Für die erste Entwicklungsphase ist ein schneller Prototyp mit ESP32-DevKit, ADS1115-Modul und MQTT-Anbindung vorgesehen. Nach erfolgreichem Funktionstest ist die Entwicklung einer eigenen PCB-Version mit KiCad geplant.

Geplante Technologien:
• ESP32-S3
• ADS1115
• MQTT
• RS485 / Modbus RTU
• Home Assistant
• KiCad

Aktueller Status:
Konzeptphase / Lernprojekt
`,"../content/de/konzeptprojekt-uberwachung-eines-dc-schaltnetzteils-mit-esp32-und-mqtt.md":`---
id: konzeptprojekt-uberwachung-eines-dc-schaltnetzteils-mit-esp32-und-mqtt
slug: konzeptprojekt-uberwachung-eines-dc-schaltnetzteils-mit-esp32-und-mqtt
translation_id: local-post-1779960950659
language: de
content_type: 
title: Konzeptprojekt: Überwachung eines DC-Schaltnetzteils mit ESP32 und MQTT
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/Schaltnetzteil-main.webp
image_gallery:
[]
excerpt: Geplantes Lernprojekt zur Überwachung von Spannungs-, Strom- und Temperaturwerten eines DC-Schaltnetzteils mit ESP32 und MQTT-Kommunikation.
tags:
- MQTT
- Schaltnetzteil
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:50.659Z'
external_link: 
project_status: idea
sort_order: 100
---

# Konzeptprojekt: Überwachung eines DC-Schaltnetzteils mit ESP32 und MQTT

Geplantes Lernprojekt zur Überwachung von Spannungs-, Strom- und Temperaturwerten eines DC-Schaltnetzteils mit ESP32 und MQTT-Kommunikation.

Dieses Projekt befindet sich aktuell in der Konzept- und Lernphase.

Geplant ist die Entwicklung eines einfachen Überwachungssystems für DC-Schaltnetzteile auf Basis eines ESP32-Mikrocontrollers.

Ziel des Projekts ist die Erfassung und Visualisierung von Spannungs-, Strom- und Temperaturwerten über WLAN und MQTT.

Vorgesehene Hardware:
- ESP32 Dev Board
- Stromsensor (ACS712 oder INA219)
- Temperatursensor
- OLED Display
- WLAN- und MQTT-Kommunikation

Geplante Funktionen:
- Spannungs- und Stromüberwachung
- Temperaturüberwachung
- MQTT-Datenübertragung
- Dashboard-Visualisierung
- Einfache Status- und Fehleranzeige

Das Projekt dient zur Vertiefung meiner Kenntnisse im Bereich Embedded Systems, Sensorik und industrieller Energieüberwachung.

Aktueller Status:
Konzeptprojekt / in Planung
`,"../content/de/personal-way.md":`---
type: personal_way
language: de
title: Nguyen Nhan Do - Technik lernen. Erfahrung sammeln. Mich weiterentwickeln.
image_1: /my-electronics-blog/images/about-1.webp
image_2: /my-electronics-blog/images/about-2.webp
---

Ich bin 2013 nach Deutschland gekommen – nicht, weil mein Leben in Vietnam schlecht war, sondern weil ich herausfinden wollte, wie weit ich mich persönlich und beruflich entwickeln kann, wenn ich meine Komfortzone verlasse und in einem völlig neuen Umfeld noch einmal von vorne beginne.

Die ersten Jahre in Deutschland waren für mich vor allem eine Zeit des Ankommens, Lernens und Anpassens. Neben Sprachkursen habe ich in verschiedenen Bereichen gearbeitet – unter anderem in der Gastronomie, im Management und später auch in der Selbstständigkeit.

Nach mehreren Jahren mit unterschiedlichen beruflichen Erfahrungen habe ich mich bewusst entschieden, wieder stärker in die technische Richtung zurückzukehren und mich langfristig im Bereich Elektronik, Messtechnik und Automatisierung weiterzuentwickeln.

In den vergangenen Jahren konnte ich praktische Erfahrungen in der Kalibrierung, Fehlersuche, Prüfung und Entwicklung elektronischer Systeme sammeln und gleichzeitig mein technisches Wissen kontinuierlich erweitern.

Darüber hinaus habe ich Weiterbildungen in SPS-Programmierung, C++/Qt, AutoCAD und EPLAN absolviert, um meine Kenntnisse gezielt auszubauen und neue technische Bereiche besser zu verstehen.

Dieser Blog dient vor allem dazu, meine technischen Projekte, Erfahrungen und Lernprozesse zu dokumentieren. Hier halte ich Wissen fest, sammle Ideen und dokumentiere meine fachliche Entwicklung im Laufe der Zeit.

Alle Inhalte basieren auf persönlichen Projekten, eigenständigem Lernen und öffentlich zugänglichem Wissen. Vertrauliche Informationen, interne Unterlagen oder Projekte von aktuellen bzw. ehemaligen Arbeitgebern werden selbstverständlich nicht veröffentlicht.
`,"../content/de/plc-programmierung-einer-industriellen-tauchanlage.md":`---
id: plc-programmierung-einer-industriellen-tauchanlage
slug: plc-programmierung-einer-industriellen-tauchanlage
translation_id: demo-3
language: de
content_type: 
title: PLC-Programmierung einer industriellen Tauchanlage
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Automatisierte Tauchanlage mit SPS-Steuerung. Automatischer Transport und Tauchprozess mit Siemens S7-300. Hand- und Automatikbetrieb im TIA Portal realisiert.
tags:
- SPS
- S7300
- TiaPortal
read_time: 5 Min.
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
---

# PLC-Programmierung einer industriellen Tauchanlage

Automatisierte Tauchanlage mit Siemens S7-300

Dieses Projekt umfasst die Entwicklung und Programmierung einer automatisierten Tauchanlage zur Steuerung eines industriellen Transport- und Tauchprozesses.
Die Anlage ermöglicht das automatische Verfahren, Heben und Senken eines Werkstückkorbs zwischen zwei Tauchbädern unter Berücksichtigung definierter Sicherheits- und Bewegungsbedingungen.

Die Steuerung wurde mit einer Siemens S7-300 CPU im TIA Portal realisiert.
Das Projekt beinhaltet sowohl einen Handbetrieb zur manuellen Steuerung der Achsen als auch einen vollautomatischen Ablauf mit sequenzieller Prozesssteuerung.

Im Automatikbetrieb fährt der Korb selbstständig zu den einzelnen Tauchstationen, führt definierte Tauch- und Abtropfzeiten aus und kehrt anschließend in die Ausgangsposition zurück.
Zusätzlich wurden Endlagensensoren, Sicherheitsabfragen, Statusanzeigen, Motorsteuerungen sowie eine Werkstückzählung mit Zeitstempel-Historie implementiert.

Die Softwarestruktur besteht aus mehreren Funktionsbausteinen für Betriebsarten, Ausgangssteuerung, Ablaufsteuerung, Teilehistorie und Diagnosefunktionen.
Zur Verbesserung der Übersichtlichkeit wurden symbolische Variablen, Datenbausteine sowie strukturierte Datentypen verwendet.

Das Projekt demonstriert praxisnah die Umsetzung industrieller Automatisierungstechnik mit SPS, Sensorik, Aktorik und Ablaufsteuerung im Siemens TIA Portal.

**Zum Projekte klicken, um die vollständige Dokumentation und Projektdateien im Detail anzusehen.**
`,"../content/de/technisches-portfolio-elektronik-blog.md":`---
id: technisches-portfolio-elektronik-blog
slug: technisches-portfolio-elektronik-blog
translation_id: technisches-portfolio-elektronik-blog
language: de
content_type: 
title: Technisches Portfolio & Elektronik-Blog
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/Portfolio-Blog-main.webp
image_gallery:
[]
excerpt: Entwicklung einer modernen persönlichen Portfolio- und Blog-Plattform zur Dokumentation technischer Projekte, Elektronikexperimente, Embedded-Systeme, Automatisierungstechnik und beruflicher Weiterentwicklung.
tags:
- React
- JavaScript
- Portfolio
- Blog
- Embedded Systems
- Elektronik
- Webentwicklung
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:30:47.159Z'
external_link: https://github.com/nguyennhando/my-electronics-blog
project_status: done
sort_order: 20
---

# Technisches Portfolio & Elektronik-Blog

## Projektübersicht

Diese Website wurde vollständig selbst entwickelt, um technische Projekte, Elektronikarbeiten, Lernfortschritte und berufliche Erfahrungen zentral zu dokumentieren.

Die Plattform dient als persönliches Portfolio sowie als technische Wissensdatenbank für Projekte aus den Bereichen:

- Elektronik
- Embedded Systems
- IoT
- Automatisierungstechnik
- Softwareentwicklung
- Messtechnik
- Technische Dokumentation

---

## Verwendete Technologien

### Frontend

- React
- JavaScript
- Framer Motion
- React Markdown
- Tailwind CSS

### UI-Komponenten

- Lucide React Icons
- Responsive Layout
- Animationen
- Lightbox Galerie
- Markdown Editor

---

## Hauptfunktionen

### Blog-System

- Technische Projektberichte
- Markdown-basierte Beiträge
- Kategorien und Tags
- Suchfunktion
- Pagination

### Portfolio-Bereich

- Projektübersicht
- Statusanzeige
- Bildergalerie
- Externe Projektlinks

### Eigener Markdown Editor

Die Website enthält einen integrierten Editor zur Erstellung neuer Beiträge.

Funktionen:

- Live Vorschau
- Automatische Slug-Erzeugung
- Markdown Export
- Direkte Speicherung von Beiträgen
- Verwaltung von Projekten

---

## Benutzeroberfläche

Besonderer Fokus wurde auf ein modernes technisches Design gelegt:

- Cyberpunk-inspiriertes Farbschema
- Dunkles UI Design
- Responsive Darstellung
- Flüssige Animationen
- Mobile Optimierung

---

## Ziel des Projekts

Das Ziel dieser Website ist die professionelle Präsentation technischer Fähigkeiten sowie die langfristige Dokumentation eigener Projekte und Lernfortschritte.

Die Plattform wird kontinuierlich erweitert und dient gleichzeitig als praktisches Webentwicklungsprojekt sowie als persönliche technische Wissenssammlung.

---

## Ergebnis

Mit diesem Projekt entstand eine vollständig eigenentwickelte Portfolio- und Blog-Plattform, die technische Dokumentation, Projektmanagement und moderne Webentwicklung miteinander kombiniert.
`,"../content/de/visualisierung-und-automatisierung-eines-industriellen-mischprozesses-mit-siemen.md":`---
id: visualisierung-und-automatisierung-eines-industriellen-mischprozesses-mit-siemen
slug: visualisierung-und-automatisierung-eines-industriellen-mischprozesses-mit-siemen
translation_id: local-post-1779960317991
language: de
content_type: 
title: Visualisierung und Automatisierung eines industriellen Mischprozesses mit Siemens WinCC
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Mischbehälter-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Mischbehälter-1.webp
- /my-electronics-blog/images/posts/Mischbehälter-2.webp
- /my-electronics-blog/images/posts/Mischbehälter-3.webp
excerpt: Dieses Projekt beschreibt die Entwicklung eines industriellen HMI-Systems zur Überwachung und Steuerung eines Mischbehälters mit Siemens SIMATIC WinCC Runtime Advanced. Die Anwendung ermöglicht die Visualisierung von Sensoren, Ventilen, Motoren und Temperaturwerten in Echtzeit sowie die Bedienung im Automatik- und Handbetrieb. Ziel des Projekts ist eine benutzerfreundliche, sichere und effiziente Prozesssteuerung für industrielle Mischprozesse.
tags:
- SPS
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:25:17.991Z'
external_link: https://drive.google.com/drive/folders/1Vrz5hK6aTVExshjDZIi92ecTgQaFo_kq
project_status: done
sort_order: 40
---

# Visualisierung und Automatisierung eines industriellen Mischprozesses mit Siemens WinCC

Dieses Projekt umfasst die Entwicklung eines modernen HMI-Visualisierungssystems zur Überwachung und Steuerung eines industriellen Mischbehälters mit Siemens SIMATIC WinCC Runtime Advanced und einer Siemens SPS S7-1200/1500.

Die Anwendung ermöglicht die Visualisierung von Sensoren, Ventilen, Motoren und Temperaturwerten in Echtzeit sowie die Bedienung im Automatik- und Handbetrieb. Ziel des Projekts ist eine benutzerfreundliche, sichere und effiziente Prozesssteuerung für industrielle Mischprozesse.

Das System wurde entwickelt, um industrielle Mischprozesse effizient, sicher und benutzerfreundlich zu steuern. Über die HMI-Oberfläche können verschiedene Prozessparameter in Echtzeit überwacht und bedient werden. Dazu gehören unter anderem Motoren, Ventile, Sensoren, Temperaturanzeigen sowie automatische und manuelle Betriebsarten.

Die Visualisierung ermöglicht dem Bediener eine klare Darstellung des gesamten Mischprozesses. Der aktuelle Anlagenstatus wird grafisch dargestellt, wodurch Materialfluss, Motoraktivitäten und Ventilstellungen jederzeit nachvollziehbar sind. Zusätzlich wurden Sicherheitsfunktionen wie Not-Halt, Statusmeldungen und Alarmanzeigen integriert, um einen sicheren Anlagenbetrieb zu gewährleisten.

Im Automatikbetrieb erfolgt die Prozesssteuerung schrittweise über definierte Ablaufsequenzen. Dabei werden Sensorwerte verarbeitet und Aktoren automatisch angesteuert. Im Handbetrieb können einzelne Komponenten manuell getestet und gesteuert werden, was insbesondere bei Wartung und Inbetriebnahme wichtig ist.

Das Projekt beinhaltet außerdem:

* Echtzeit-Kommunikation zwischen SPS und HMI
* Prozessvisualisierung und Anlagenüberwachung
* Temperaturüberwachung und Statusanzeigen
* Steuerung von Ventilen und Motoren
* Automatik- und Handbetrieb
* Fehler- und Alarmmanagement
* Benutzerfreundliche Bedienoberfläche

Ziel des Projekts ist die Entwicklung einer zuverlässigen und effizienten Lösung für industrielle Automatisierungsprozesse. Durch die Kombination aus Siemens SPS-Technologie und WinCC Runtime Advanced entsteht ein leistungsfähiges HMI-System zur Optimierung von Produktionsabläufen und zur Erhöhung der Betriebssicherheit.

Klicken Sie auf die Schaltfläche „Zum Projekt“, um die vollständige Projektdokumentation und weitere Details zum HMI-System anzuzeigen.
`,"../content/de/wincc-fischertechnikmodell-automatik-und-handbetrieb-mit-hmi.md":`---
id: wincc-fischertechnikmodell-automatik-und-handbetrieb-mit-hmi
slug: wincc-fischertechnikmodell-automatik-und-handbetrieb-mit-hmi
translation_id: local-post-1779960469574
language: de
content_type: 
title: WinCC Fischertechnikmodell – Automatik- und Handbetrieb mit HMI
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/FischerTechnik-main.webp
image_gallery:
- /my-electronics-blog/images/posts/FischerTechnik-1.webp
excerpt: Programmierung eines Fischertechnik-Pressenmodells mit Siemens CPU1512C, ET200SP und TP700 Comfort Panel. Implementiert werden Automatikbetrieb, Handbetrieb, Benutzerverwaltung, Rezepturverwaltung, Alarmmeldungen sowie eine vollständige HMI-Bedienoberfläche.
tags:
- WinCC
- SPS
- HMI
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:27:49.574Z'
external_link: https://drive.google.com/drive/folders/1XwbZqMA_neR7FqreJCQsHW4ddtIEpOKi?usp=drive_link
project_status: done
sort_order: 60
---

# WinCC Fischertechnikmodell – Automatik- und Handbetrieb mit HMI

Entwicklung einer SPS- und HMI-Steuerung für das Fischertechnik-Pressenmodell mit Siemens CPU1512C, ET200SP und TP700 Comfort Panel.

Programmierung eines Fischertechnik-Pressenmodells mit Siemens CPU1512C, ET200SP und TP700 Comfort Panel. Implementiert werden Automatikbetrieb, Handbetrieb, Benutzerverwaltung, Rezepturverwaltung, Alarmmeldungen sowie eine vollständige HMI-Bedienoberfläche.

Implementiert werden:

Automatikbetrieb
Handbetrieb / Einrichtbetrieb
Benutzerverwaltung
Alarm- und Meldesystem
Rezeptverwaltung
HMI-Visualisierung über WinCC

Die Kommunikation erfolgt über Profinet.
Das System befindet sich aktuell noch in der Fertigstellung und Optimierung. ⚙️
`,"../content/de/wissensbibliothek-technische-notizen-und-analysen.md":`---
id: wissensbibliothek-technische-notizen-und-analysen
slug: wissensbibliothek-technische-notizen-und-analysen
content_type: knowledge
title: Wissensbibliothek: Technische Notizen und Analysen
category: Grundlagen
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery: []
excerpt: Ein Einstieg in meine Sammlung aus Lernmaterialien, Schaltungsanalysen und technischen Untersuchungen.
tags:
- Elektronik
- Lernen
- Analyse
read_time: 3 Min.
published: true
created_at: '2026-05-31T12:00:00.000Z'
external_link: ''
project_status: done
sort_order: 1
---

# Technisches Wissen strukturiert festhalten

Dieser Bereich ergänzt die Projektübersicht um ausführlichere Lernnotizen, technische Analysen und eigene Untersuchungen. Während die Projektbeiträge konkrete Umsetzungen dokumentieren, stehen hier einzelne Themen und Zusammenhänge im Mittelpunkt.

## Geplante Inhalte

- Analysen elektronischer Schaltungen
- Grundlagen zu Bauteilen und Messverfahren
- Lernunterlagen zu Embedded Systems und Automatisierung
- Notizen aus eigenen Versuchen und Recherchen
- Weiterführende externe Quellen

## Aufbau der Beiträge

Die Beiträge sollen so strukturiert sein, dass wichtige Informationen schnell auffindbar bleiben. Kategorien, Schlagwörter und die Suchfunktion helfen dabei, auch bei einer größeren Sammlung gezielt zum passenden Thema zu gelangen.
`,"../content/en/3d-flaschenzug-in-autocad.md":`---
translation_id: local-post-1779960596593
language: en
slug: 3d-pulley-block-in-autocad
title: 3D Pulley Block in AutoCAD
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Flaschenzug-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Flaschenzug-1.webp
- /my-electronics-blog/images/posts/Flaschenzug-2.webp
- /my-electronics-blog/images/posts/Flaschenzug-3.webp
excerpt: A mechanical pulley block was fully designed as a 3D model in AutoCAD, with a focus on precise component modeling and realistic mechanical representation.
tags:
- AutoCAD
- 3D
- Design
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:29:56.593Z'
external_link: https://drive.google.com/drive/folders/1fN_hc6jaddMzTqEt0iIS4YxpiPdT8JFR?usp=drive_link
project_status: done
sort_order: 70
---

# 3D Pulley Block in AutoCAD

This project covers the design of a pulley block as a 3D model in AutoCAD. Every mechanical component was modeled individually and then assembled into a complete unit.

The model includes:

- Hook
- Pulleys
- Side plates
- Connecting pins
- Lever and guide elements

The goal was to improve my 3D CAD design skills and deepen my understanding of mechanical movement and component connections.

Key aspects:

- Precise 3D modeling in AutoCAD
- Assembly of mechanical components
- Technical representation of a pulley block
- Visualization of the mechanism from different perspectives
- Realistic component design

The finished model can be used for technical presentations, learning purposes or as a basis for further mechanical development.
`,"../content/en/3d-pulley-block-in-autocad.md":`---
id: 3d-pulley-block-in-autocad
slug: 3d-pulley-block-in-autocad
translation_id: local-post-1779960596593
language: en
content_type: 
title: 3D Pulley Block in AutoCAD
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Flaschenzug-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Flaschenzug-1.webp
- /my-electronics-blog/images/posts/Flaschenzug-2.webp
- /my-electronics-blog/images/posts/Flaschenzug-3.webp
excerpt: A mechanical pulley block was fully designed as a 3D model in AutoCAD, with a focus on precise component modeling and realistic mechanical representation.
tags:
- AutoCAD
- 3D
- Design
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:29:56.593Z'
external_link: https://drive.google.com/drive/folders/1fN_hc6jaddMzTqEt0iIS4YxpiPdT8JFR?usp=drive_link
project_status: done
sort_order: 70
---

# 3D Pulley Block in AutoCAD

This project covers the design of a pulley block as a 3D model in AutoCAD. Every mechanical component was modeled individually and then assembled into a complete unit.

The model includes:

- Hook
- Pulleys
- Side plates
- Connecting pins
- Lever and guide elements

The goal was to improve my 3D CAD design skills and deepen my understanding of mechanical movement and component connections.

Key aspects:

- Precise 3D modeling in AutoCAD
- Assembly of mechanical components
- Technical representation of a pulley block
- Visualization of the mechanism from different perspectives
- Realistic component design

The finished model can be used for technical presentations, learning purposes or as a basis for further mechanical development.
`,"../content/en/autocad-2d-kleine-dampfmaschine.md":`---
translation_id: demo-2
language: en
slug: autocad-2d-small-steam-engine
title: AutoCAD 2D - Small Steam Engine
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Dampfmaschine-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Dampfmaschine-1.webp
- /my-electronics-blog/images/posts/Dampfmaschine-2.webp
- /my-electronics-blog/images/posts/Dampfmaschine-3.webp
- /my-electronics-blog/images/posts/Dampfmaschine-5.webp
excerpt: Development of technical 2D and 3D CAD models in mechanical engineering with AutoCAD 2026, including a small steam engine.
tags:
- AutoCAD 2D
read_time: 6 Min.
published: true
created_at: '2026-05-08T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1GDWUKT5mLYHnSlSns5oKxpMZrkY9WENy
project_status: done
sort_order: 20
---

# AutoCAD 2D - Small Steam Engine

This project presents the complete 2D design of a small steam engine in the field of mechanical engineering using AutoCAD 2026.

The design includes:

- Base plate
- Foot and mirror plate
- Bearing block
- Piston rod head
- Crank disc and crankshaft
- Cylinder and piston
- Flywheel
- Pendulum shaft
- Railing and center bar
- Standard parts and bill of materials

The technical drawings contain dimensions, sectional views, material specifications, individual component drawings and an assembly drawing.

Materials used:

- Brass
- Steel alloy
- Copper
- Glass

Another project is the design of a mechanical pulley block with a double pulley and safety hook. It was developed as a 3D CAD model for lifting heavy loads with reduced pulling force.

The \`Open project\` button provides access to all project files, including the AutoCAD \`.dwg\` files.

Course period: 19 January 2026 - 13 February 2026  
Software: AutoCAD 2026  
Project by: NGUYEN NHAN DO
`,"../content/en/autocad-2d-small-steam-engine.md":`---
id: autocad-2d-small-steam-engine
slug: autocad-2d-small-steam-engine
translation_id: demo-2
language: en
content_type: 
title: AutoCAD 2D - Small Steam Engine
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Dampfmaschine-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Dampfmaschine-1.webp
- /my-electronics-blog/images/posts/Dampfmaschine-2.webp
- /my-electronics-blog/images/posts/Dampfmaschine-3.webp
- /my-electronics-blog/images/posts/Dampfmaschine-5.webp
excerpt: Development of technical 2D and 3D CAD models in mechanical engineering with AutoCAD 2026, including a small steam engine.
tags:
- AutoCAD 2D
read_time: 6 Min.
published: true
created_at: '2026-05-08T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1GDWUKT5mLYHnSlSns5oKxpMZrkY9WENy
project_status: done
sort_order: 80
---

# AutoCAD 2D - Small Steam Engine

This project presents the complete 2D design of a small steam engine in the field of mechanical engineering using AutoCAD 2026.

The design includes:

- Base plate
- Foot and mirror plate
- Bearing block
- Piston rod head
- Crank disc and crankshaft
- Cylinder and piston
- Flywheel
- Pendulum shaft
- Railing and center bar
- Standard parts and bill of materials

The technical drawings contain dimensions, sectional views, material specifications, individual component drawings and an assembly drawing.

Materials used:

- Brass
- Steel alloy
- Copper
- Glass

Another project is the design of a mechanical pulley block with a double pulley and safety hook. It was developed as a 3D CAD model for lifting heavy loads with reduced pulling force.

The \`Open project\` button provides access to all project files, including the AutoCAD \`.dwg\` files.

Course period: 19 January 2026 - 13 February 2026  
Software: AutoCAD 2026  
Project by: NGUYEN NHAN DO
`,"../content/en/concept-energy-monitoring-with-esp8266-and-current-sensor.md":`---
id: concept-energy-monitoring-with-esp8266-and-current-sensor
slug: concept-energy-monitoring-with-esp8266-and-current-sensor
translation_id: local-post-1779960876705
language: en
content_type: 
title: Concept Project: Energy Monitoring with ESP8266 and Current Sensor
category: Embedded Systems
image_url: /my-electronics-blog/images/posts/Energieüberwachung-main.webp
image_gallery:
[]
excerpt: Planned learning project for simple measurement and visualization of power-consumption data using an ESP8266 and a current sensor over Wi-Fi.
tags:
- ESP8266
- Energy monitoring
- Sensors
- Embedded Systems
- IoT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:34:36.705Z'
external_link: 
project_status: in_progress
sort_order: 120
---

# Concept Project: Energy Monitoring with ESP8266 and Current Sensor

This planned learning project explores the simple acquisition and visualization of power-consumption data using an ESP8266 and a current sensor over Wi-Fi.

The project is currently in the concept and learning phase. The planned system uses an ESP8266 with an ACS712 current sensor.

Planned hardware:

- ESP8266 microcontroller
- ACS712 current sensor
- OLED display
- Wi-Fi communication

Planned functions:

- Display of basic measured values
- Wi-Fi data transmission
- Dashboard visualization
- Fundamentals of energy-consumption analysis

The project is intended to deepen my knowledge of embedded systems, sensors and IoT communication.

Current status: concept project, in planning.
`,"../content/en/concept-esp32-420ma-iot-gateway-with-mqtt-and-rs485.md":`---
id: concept-esp32-420ma-iot-gateway-with-mqtt-and-rs485
slug: concept-esp32-420ma-iot-gateway-with-mqtt-and-rs485
translation_id: local-post-1779960691288
language: en
content_type: 
title: Concept Project: ESP32-Based 4-20 mA IoT Gateway with MQTT and RS485
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery:
[]
excerpt: Planned learning and development project for acquiring 4-20 mA sensor signals with ESP32, ADS1115 and MQTT communication as a simple industrial IoT prototype.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:31:31.288Z'
external_link: 
project_status: idea
sort_order: 90
---

# Concept Project: ESP32-Based 4-20 mA IoT Gateway with MQTT and RS485

This planned learning and development project focuses on acquiring 4-20 mA sensor signals with an ESP32, ADS1115 and MQTT communication. The goal is to create a simple industrial IoT prototype for sensor monitoring and data visualization through Home Assistant.

The project is currently in the concept and planning phase.

Planned functions:

- Acquisition of 4-20 mA sensor signals through ADS1115
- MQTT communication for IoT applications
- RS485 and Modbus RTU support
- Sensor-data visualization through Home Assistant
- Power supply for industrial 12-24 VDC environments

The first development phase uses a rapid prototype with ESP32 DevKit, ADS1115 module and MQTT connection. After successful functional testing, a custom PCB version is planned in KiCad.

Planned technologies:

- ESP32-S3
- ADS1115
- MQTT
- RS485 and Modbus RTU
- Home Assistant
- KiCad

Current status: concept phase, learning project.
`,"../content/en/concept-esp32-mqtt-sensor-monitoring-for-smart-home-applications.md":`---
id: concept-esp32-mqtt-sensor-monitoring-for-smart-home-applications
slug: concept-esp32-mqtt-sensor-monitoring-for-smart-home-applications
translation_id: local-post-1779960913660
language: en
content_type: 
title: Concept Project: ESP32-Based MQTT Sensor Monitoring for Smart Home Applications
category: IoT
image_url: /my-electronics-blog/images/posts/SmartHome-main.webp
image_gallery:
[]
excerpt: Planned learning project for a simple IoT platform based on an ESP32 microcontroller to collect and visualize sensor data over Wi-Fi and MQTT.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:13.660Z'
external_link: 
project_status: in_progress
sort_order: 110
---

# Concept Project: ESP32-Based MQTT Sensor Monitoring for Smart Home Applications

This planned learning project focuses on a simple IoT platform based on an ESP32 microcontroller. Its goal is to collect and visualize various sensor readings over Wi-Fi and MQTT.

The project is currently in the concept and learning phase.

Planned hardware:

- ESP32 development board
- DHT22 temperature and humidity sensor
- Relay module for basic switching functions
- MQTT broker such as Mosquitto
- Dashboard for data visualization

Planned functions:

- Wi-Fi communication
- MQTT publish and subscribe
- Sensor monitoring
- Dashboard visualization
- Expansion with additional sensors and actuators

The project is intended to deepen my knowledge of embedded systems, MQTT communication and IoT applications.

Current status: concept project, in planning.
`,"../content/en/concept-monitoring-a-dc-switching-power-supply-with-esp32-and-mqtt.md":`---
id: concept-monitoring-a-dc-switching-power-supply-with-esp32-and-mqtt
slug: concept-monitoring-a-dc-switching-power-supply-with-esp32-and-mqtt
translation_id: local-post-1779960950659
language: en
content_type: 
title: Concept Project: Monitoring a DC Switching Power Supply with ESP32 and MQTT
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/Schaltnetzteil-main.webp
image_gallery:
[]
excerpt: Planned learning project for monitoring voltage, current and temperature values of a DC switching power supply using ESP32 and MQTT communication.
tags:
- MQTT
- Switching power supply
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:50.659Z'
external_link: 
project_status: idea
sort_order: 100
---

# Concept Project: Monitoring a DC Switching Power Supply with ESP32 and MQTT

This planned learning project focuses on monitoring voltage, current and temperature values of a DC switching power supply using an ESP32 and MQTT communication.

The project is currently in the concept and learning phase. The aim is to develop a simple monitoring system based on an ESP32 microcontroller and visualize the measured values over Wi-Fi and MQTT.

Planned hardware:

- ESP32 development board
- ACS712 or INA219 current sensor
- Temperature sensor
- OLED display
- Wi-Fi and MQTT communication

Planned functions:

- Voltage and current monitoring
- Temperature monitoring
- MQTT data transmission
- Dashboard visualization
- Basic status and error display

The project is intended to deepen my knowledge of embedded systems, sensors and industrial energy monitoring.

Current status: concept project, in planning.
`,"../content/en/concept-pwm-controlled-dc-power-supply-with-measurement-and-protection.md":`---
id: concept-pwm-controlled-dc-power-supply-with-measurement-and-protection
slug: concept-pwm-controlled-dc-power-supply-with-measurement-and-protection
translation_id: local-post-1779960818567
language: en
content_type: 
title: Concept for a PWM-Controlled DC Power Supply with Measurement and Protection Functions
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery:
[]
excerpt: Learning and concept project for a microcontroller-based DC power supply with PWM control, current limiting and basic protection functions.
tags:
- PWM
- Power supply
- STM32
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:33:38.567Z'
external_link: 
project_status: idea
sort_order: 130
---

# Concept for a PWM-Controlled DC Power Supply with Measurement and Protection Functions

This is a learning and concept project for developing a microcontroller-based DC power supply with PWM control, current limiting and basic protection functions.

The goal is not merely to build a simple DC power supply, but to gain a practical understanding of PWM control, power electronics and electronic protection circuits.

The planned solution regulates output voltage and current through PWM signals and MOSFET control. Basic measurement and protection functions will be integrated to analyze system behavior under different load conditions.

Planned functions:

- Adjustable output voltage
- Current limiting
- PWM-based control
- Voltage and current measurement
- Temperature monitoring
- Short-circuit and overcurrent protection
- Display of important measured values

I am particularly interested in how PWM frequency, load changes and switching behavior affect stability, efficiency and heat generation.

The project is still in the concept and learning phase. Individual functional blocks such as PWM control, current measurement and protection circuits will be tested separately before a complete prototype is built.

With this project, I want to deepen my knowledge of embedded systems, power electronics and practical measurement technology.
`,"../content/en/electronics-testing-repair.md":`---
id: electronics-testing-repair
slug: electronics-testing-repair
translation_id: demo-1
language: en
content_type: 
title: Electronics - Testing - Repair
category: Über mich
image_url: /my-electronics-blog/images/posts/Nguyen-main.webp
image_gallery:
[]
excerpt: Electrical engineer with a strong interest in electrical design and software development. Eager to learn, dexterous and motivated to continuously expand my practical experience.
tags:
- ESP32
- MQTT
- Smart Home
- Sensors
read_time: 8 Min.
published: true
created_at: '2026-05-14T12:00:00Z'
external_link: 
project_status: done
sort_order: 10
---

# Electronics - Testing - Repair

My main areas of focus are:

- Software development
- Automation technology
- PLC programming with Siemens S7 and TIA Portal
- Troubleshooting and repair of electronic assemblies

I am also expanding my knowledge of:

- WinCC
- C++ and Qt
- EPLAN
- AutoCAD 2D and 3D

I work carefully, have good fine motor skills and am very eager to learn. Although I do not yet have extensive professional experience, I quickly familiarize myself with new technologies and technical topics and continue to develop my skills.

I am especially interested in test engineering, prototype development, hardware-oriented programming, and the analysis and diagnosis of electronic systems.
`,"../content/en/elektronik-test-reparatur.md":`---
translation_id: demo-1
language: en
slug: electronics-testing-repair
title: Electronics - Testing - Repair
category: Über mich
image_url: /my-electronics-blog/images/posts/Nguyen-main.webp
image_gallery: []
excerpt: Electrical engineer with a strong interest in electrical design and software development. Eager to learn, dexterous and motivated to continuously expand my practical experience.
tags:
- ESP32
- MQTT
- Smart Home
- Sensors
read_time: 8 Min.
published: true
created_at: '2026-05-14T12:00:00Z'
external_link: ''
project_status: done
sort_order: 10
---

# Electronics - Testing - Repair

My main areas of focus are:

- Software development
- Automation technology
- PLC programming with Siemens S7 and TIA Portal
- Troubleshooting and repair of electronic assemblies

I am also expanding my knowledge of:

- WinCC
- C++ and Qt
- EPLAN
- AutoCAD 2D and 3D

I work carefully, have good fine motor skills and am very eager to learn. Although I do not yet have extensive professional experience, I quickly familiarize myself with new technologies and technical topics and continue to develop my skills.

I am especially interested in test engineering, prototype development, hardware-oriented programming, and the analysis and diagnosis of electronic systems.
`,"../content/en/financial-management-with-data-analysis.md":`---
id: financial-management-with-data-analysis
slug: financial-management-with-data-analysis
translation_id: local-post-1779957810945
language: en
content_type: 
title: Financial Management with Data Analysis
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Personal income and expense management with CSV import and export, real-time data analysis and a modern graphical interface. The complete source code is available through the project link.
tags:
- C++
- Qt 6.9
read_time: 5 Min.
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Financial Management with Data Analysis

## GeldPilot - Personal Finance Management

GeldPilot is a modern desktop application for managing personal finances, developed with C++, Qt 6 and SQLite. It supports income and expense tracking, CSV import and export, and real-time data analysis through a modern graphical interface.

The \`Open project\` button at the end of the page provides access to the complete source code.

## Overview

GeldPilot is a user-friendly application for managing income and expenses. Its intuitive interface makes it possible to manage transactions, organize categories and create comprehensive financial reports.

## Main Features

- **Transaction management:** Add, edit and delete income and expenses
- **Categories:** Use predefined and custom categories
- **Period filters:** Filter flexibly by date and category
- **Financial overview:** Automatically calculate income, expenses and balance
- **Visualization:** Display finances with interactive bar charts
- **Import and export:** Exchange data through CSV files
- **Printing:** Generate professional reports with a company logo

## System Requirements

### Minimum Requirements

- Operating system: Windows 10 or 11, macOS 10.15+, or Linux Ubuntu 20.04+
- Memory: 4 GB RAM
- Disk space: 100 MB
- Screen resolution: 1024 x 768

### Recommended Requirements

- Memory: 8 GB RAM or more
- Screen resolution: 1920 x 1080 or higher

## Installation

### Precompiled Windows Version

1. Download the latest version from the Releases page.
2. Extract the archive to a folder of your choice.
3. Start \`GeldPilot.exe\`.

### Build from Source

Requirements:

- Qt 6.9 or newer
- CMake 3.16 or newer
- A C++17-compatible compiler:
  - Windows: MinGW-w64 or MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ or Clang 10+

Build steps:

\`\`\`bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
\`\`\`

Start the application:

\`\`\`bash
# Windows
./Release/GeldPilot.exe

# Linux or macOS
./GeldPilot
\`\`\`

## Getting Started

### Add Your First Transaction

1. Start GeldPilot.
2. Enter the date, amount and description.
3. Select a category, such as \`Salary\`.
4. Select the type: \`Income\` or \`Expense\`.
5. Click \`New Transaction\`.

### Filter Data

- Use the category dropdown menus.
- Set a start date and end date for a time-period filter.
- Click \`Filter\` to update the view.

### Create Reports

- Click \`Chart\` for a visual representation.
- Use \`Print\` for a professional report.
- Export data as CSV for further analysis.

## User Guide

### Transaction Management

To add a transaction, fill in all required fields:

- Date: transaction date
- Amount: monetary amount, always entered as a positive value
- Description: short description of the transaction
- Category: assigned category
- Type: \`Income\` or \`Expense\`

To edit a transaction:

1. Select a row in the table.
2. The data appears automatically in the input fields.
3. Make the required changes.
4. Click \`Save\`.

To delete transactions:

- Single transaction: select a row and click \`Delete\`.
- Multiple transactions: select several rows with \`Ctrl + Click\` and click \`Delete\`.

### Categories

Predefined categories:

- Leisure
- Salary
- Health
- Groceries
- Rent
- Other
- Transport
- Insurance
- Investment
- Communication
- Housing

### Filtering and Search

Filter by category:

- Select \`All Categories\` for an unfiltered view.
- Select a specific category for a filtered view.

Filter by time period:

1. Set the start date and end date.
2. Click \`Filter\`.

### Import and Export

CSV import:

1. Prepare a CSV file with the columns \`ID\`, \`Date\`, \`Amount\`, \`Description\`, \`Category\` and \`Type\`.
2. Click \`Import\`.
3. Select the CSV file.

CSV export:

1. Click \`Export\`.
2. Select a location and filename.
3. The current table view is exported.

### Charts and Reports

To display the financial chart, click \`Chart\`. The bar chart shows categories, total income, total expenses and balance with interactive color coding.

To print a report:

1. Open the chart.
2. Click \`Print\`.
3. Select the printer and settings.
4. The application creates a professional printout with a logo.

## Technical Details

### Architecture

- GUI framework: Qt 6.9
- Database: SQLite local file
- Charts: Qt Charts
- Build system: CMake
- Compiler on Windows: MinGW-w64

### Database Schema

Transactions table:

\`\`\`sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
\`\`\`

Categories table:

\`\`\`sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
\`\`\`

### Project Structure

\`\`\`text
geldpilot/
  src/
    main.cpp                 Application entry point
    mainwindow.cpp/h         Main window
    chartwindow.cpp/h        Chart window
    datenbankmanager.cpp/h   Database logic
    centerdelegate.h         UI styling
  ui/
    mainwindow.ui            Main-window UI
    chartwindow.ui           Chart UI
  resources/
    icons/                   Application icons
  CMakeLists.txt             Build configuration
  README.md                  Documentation
\`\`\`

## Development

Code style:

- C++17 standard
- Qt conventions
- Descriptive German variable names
- Extensive comments

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test thoroughly.
5. Create a pull request.

Known topics:

- Multiple selection for deletion is implemented.
- Database indexing for performance is implemented.
- Backup functionality is planned.

## Support

Need help?

- Documentation: read the complete README.
- Issues: report bugs on GitHub.
- E-mail: \`support@geldpilot.de\`

Frequently asked questions:

- **The database cannot be opened:** Make sure the application has write permission in the installation directory.
- **The chart is not displayed:** Check whether Qt Charts is installed.
- **Import fails:** Check the CSV format. It must be semicolon-separated.

## License

Copyright 2025 Nguyen Nhan Do. All rights reserved.  
Version: 1.0.0  
Developer: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Use GeldPilot to keep track of your finances and shape your financial future with confidence.
`,"../content/en/finanzverwaltung-mit-datenanalyse.md":`---
translation_id: local-post-1779957810945
language: en
slug: financial-management-with-data-analysis
title: Financial Management with Data Analysis
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Personal income and expense management with CSV import and export, real-time data analysis and a modern graphical interface. The complete source code is available through the project link.
tags:
- C++
- Qt 6.9
read_time: 5 Min.
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Financial Management with Data Analysis

## GeldPilot - Personal Finance Management

GeldPilot is a modern desktop application for managing personal finances, developed with C++, Qt 6 and SQLite. It supports income and expense tracking, CSV import and export, and real-time data analysis through a modern graphical interface.

The \`Open project\` button at the end of the page provides access to the complete source code.

## Overview

GeldPilot is a user-friendly application for managing income and expenses. Its intuitive interface makes it possible to manage transactions, organize categories and create comprehensive financial reports.

## Main Features

- **Transaction management:** Add, edit and delete income and expenses
- **Categories:** Use predefined and custom categories
- **Period filters:** Filter flexibly by date and category
- **Financial overview:** Automatically calculate income, expenses and balance
- **Visualization:** Display finances with interactive bar charts
- **Import and export:** Exchange data through CSV files
- **Printing:** Generate professional reports with a company logo

## System Requirements

### Minimum Requirements

- Operating system: Windows 10 or 11, macOS 10.15+, or Linux Ubuntu 20.04+
- Memory: 4 GB RAM
- Disk space: 100 MB
- Screen resolution: 1024 x 768

### Recommended Requirements

- Memory: 8 GB RAM or more
- Screen resolution: 1920 x 1080 or higher

## Installation

### Precompiled Windows Version

1. Download the latest version from the Releases page.
2. Extract the archive to a folder of your choice.
3. Start \`GeldPilot.exe\`.

### Build from Source

Requirements:

- Qt 6.9 or newer
- CMake 3.16 or newer
- A C++17-compatible compiler:
  - Windows: MinGW-w64 or MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ or Clang 10+

Build steps:

\`\`\`bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
\`\`\`

Start the application:

\`\`\`bash
# Windows
./Release/GeldPilot.exe

# Linux or macOS
./GeldPilot
\`\`\`

## Getting Started

### Add Your First Transaction

1. Start GeldPilot.
2. Enter the date, amount and description.
3. Select a category, such as \`Salary\`.
4. Select the type: \`Income\` or \`Expense\`.
5. Click \`New Transaction\`.

### Filter Data

- Use the category dropdown menus.
- Set a start date and end date for a time-period filter.
- Click \`Filter\` to update the view.

### Create Reports

- Click \`Chart\` for a visual representation.
- Use \`Print\` for a professional report.
- Export data as CSV for further analysis.

## User Guide

### Transaction Management

To add a transaction, fill in all required fields:

- Date: transaction date
- Amount: monetary amount, always entered as a positive value
- Description: short description of the transaction
- Category: assigned category
- Type: \`Income\` or \`Expense\`

To edit a transaction:

1. Select a row in the table.
2. The data appears automatically in the input fields.
3. Make the required changes.
4. Click \`Save\`.

To delete transactions:

- Single transaction: select a row and click \`Delete\`.
- Multiple transactions: select several rows with \`Ctrl + Click\` and click \`Delete\`.

### Categories

Predefined categories:

- Leisure
- Salary
- Health
- Groceries
- Rent
- Other
- Transport
- Insurance
- Investment
- Communication
- Housing

### Filtering and Search

Filter by category:

- Select \`All Categories\` for an unfiltered view.
- Select a specific category for a filtered view.

Filter by time period:

1. Set the start date and end date.
2. Click \`Filter\`.

### Import and Export

CSV import:

1. Prepare a CSV file with the columns \`ID\`, \`Date\`, \`Amount\`, \`Description\`, \`Category\` and \`Type\`.
2. Click \`Import\`.
3. Select the CSV file.

CSV export:

1. Click \`Export\`.
2. Select a location and filename.
3. The current table view is exported.

### Charts and Reports

To display the financial chart, click \`Chart\`. The bar chart shows categories, total income, total expenses and balance with interactive color coding.

To print a report:

1. Open the chart.
2. Click \`Print\`.
3. Select the printer and settings.
4. The application creates a professional printout with a logo.

## Technical Details

### Architecture

- GUI framework: Qt 6.9
- Database: SQLite local file
- Charts: Qt Charts
- Build system: CMake
- Compiler on Windows: MinGW-w64

### Database Schema

Transactions table:

\`\`\`sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
\`\`\`

Categories table:

\`\`\`sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
\`\`\`

### Project Structure

\`\`\`text
geldpilot/
  src/
    main.cpp                 Application entry point
    mainwindow.cpp/h         Main window
    chartwindow.cpp/h        Chart window
    datenbankmanager.cpp/h   Database logic
    centerdelegate.h         UI styling
  ui/
    mainwindow.ui            Main-window UI
    chartwindow.ui           Chart UI
  resources/
    icons/                   Application icons
  CMakeLists.txt             Build configuration
  README.md                  Documentation
\`\`\`

## Development

Code style:

- C++17 standard
- Qt conventions
- Descriptive German variable names
- Extensive comments

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test thoroughly.
5. Create a pull request.

Known topics:

- Multiple selection for deletion is implemented.
- Database indexing for performance is implemented.
- Backup functionality is planned.

## Support

Need help?

- Documentation: read the complete README.
- Issues: report bugs on GitHub.
- E-mail: \`support@geldpilot.de\`

Frequently asked questions:

- **The database cannot be opened:** Make sure the application has write permission in the installation directory.
- **The chart is not displayed:** Check whether Qt Charts is installed.
- **Import fails:** Check the CSV format. It must be semicolon-separated.

## License

Copyright 2025 Nguyen Nhan Do. All rights reserved.  
Version: 1.0.0  
Developer: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Use GeldPilot to keep track of your finances and shape your financial future with confidence.
`,"../content/en/home-content.md":`---
type: home_content
language: en
hero_badge: Electrical Design · Testing · Software
hero_title: Technology. Documentation. Development.
hero_text: I built this website to document technical projects, learning progress and practical experience in electronics, embedded systems, measurement technology and technical software development.
transparency_title: Project Information & Transparency
transparency_text: The photos of laboratory environments, technical workspaces and electronic devices shown on this website are solely intended to illustrate my technical interests and practical experience.
transparency_strong: They do not show my actual workplace, internal areas or real working environments of any company.
feature_1_title: Electronics & Embedded Systems
feature_1_text: Personal learning projects involving microcontrollers, sensors and hardware-oriented development to expand my technical knowledge through practice.
feature_2_title: Automation & Control
feature_2_text: Practical exercises and smaller projects to better understand industrial workflows, control technology and technical processes.
feature_3_title: Technical Learning
feature_3_text: Documentation of my learning journey, technical experience and new topics that I continuously explore.
feature_4_title: Personal Development
feature_4_text: This website is my personal platform for documenting projects, ideas and technical progress in a clear format.
warning_one: Projects marked as “Concept” are still in the idea or concept phase and have not yet been implemented in practice.
warning_two: All other projects can be opened via “Read article”. At the end of each project page, the “Open project” button provides project-related files.
collaboration_title: Collaboration on modern electronics projects.
collaboration_text: Are you looking for support with embedded systems, sensors, robotics or industrial automation? Contact me for technical collaboration or individual developments.
---
`,"../content/en/konzept-eines-pwm-geregelten-dc-netzteils-mit-mess-und-schutzfunktionen.md":`---
translation_id: local-post-1779960818567
language: en
slug: concept-pwm-controlled-dc-power-supply-with-measurement-and-protection
title: Concept for a PWM-Controlled DC Power Supply with Measurement and Protection Functions
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery: []
excerpt: Learning and concept project for a microcontroller-based DC power supply with PWM control, current limiting and basic protection functions.
tags:
- PWM
- Power supply
- STM32
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:33:38.567Z'
external_link: ''
project_status: idea
sort_order: 100
---

# Concept for a PWM-Controlled DC Power Supply with Measurement and Protection Functions

This is a learning and concept project for developing a microcontroller-based DC power supply with PWM control, current limiting and basic protection functions.

The goal is not merely to build a simple DC power supply, but to gain a practical understanding of PWM control, power electronics and electronic protection circuits.

The planned solution regulates output voltage and current through PWM signals and MOSFET control. Basic measurement and protection functions will be integrated to analyze system behavior under different load conditions.

Planned functions:

- Adjustable output voltage
- Current limiting
- PWM-based control
- Voltage and current measurement
- Temperature monitoring
- Short-circuit and overcurrent protection
- Display of important measured values

I am particularly interested in how PWM frequency, load changes and switching behavior affect stability, efficiency and heat generation.

The project is still in the concept and learning phase. Individual functional blocks such as PWM control, current measurement and protection circuits will be tested separately before a complete prototype is built.

With this project, I want to deepen my knowledge of embedded systems, power electronics and practical measurement technology.
`,"../content/en/konzeptprojekt-energieuberwachung-mit-esp8266-und-stromsensor.md":`---
translation_id: local-post-1779960876705
language: en
slug: concept-energy-monitoring-with-esp8266-and-current-sensor
title: 'Concept Project: Energy Monitoring with ESP8266 and Current Sensor'
category: Embedded Systems
image_url: /my-electronics-blog/images/posts/Energieüberwachung-main.webp
image_gallery: []
excerpt: Planned learning project for simple measurement and visualization of power-consumption data using an ESP8266 and a current sensor over Wi-Fi.
tags:
- ESP8266
- Energy monitoring
- Sensors
- Embedded Systems
- IoT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:34:36.705Z'
external_link: ''
project_status: in_progress
sort_order: 100
---

# Concept Project: Energy Monitoring with ESP8266 and Current Sensor

This planned learning project explores the simple acquisition and visualization of power-consumption data using an ESP8266 and a current sensor over Wi-Fi.

The project is currently in the concept and learning phase. The planned system uses an ESP8266 with an ACS712 current sensor.

Planned hardware:

- ESP8266 microcontroller
- ACS712 current sensor
- OLED display
- Wi-Fi communication

Planned functions:

- Display of basic measured values
- Wi-Fi data transmission
- Dashboard visualization
- Fundamentals of energy-consumption analysis

The project is intended to deepen my knowledge of embedded systems, sensors and IoT communication.

Current status: concept project, in planning.
`,"../content/en/konzeptprojekt-esp32-basierte-mqtt-sensoruberwachung-fur-smart-home-anwendungen.md":`---
translation_id: local-post-1779960913660
language: en
slug: concept-esp32-mqtt-sensor-monitoring-for-smart-home-applications
title: 'Concept Project: ESP32-Based MQTT Sensor Monitoring for Smart Home Applications'
category: IoT
image_url: /my-electronics-blog/images/posts/SmartHome-main.webp
image_gallery: []
excerpt: Planned learning project for a simple IoT platform based on an ESP32 microcontroller to collect and visualize sensor data over Wi-Fi and MQTT.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:13.660Z'
external_link: ''
project_status: in_progress
sort_order: 100
---

# Concept Project: ESP32-Based MQTT Sensor Monitoring for Smart Home Applications

This planned learning project focuses on a simple IoT platform based on an ESP32 microcontroller. Its goal is to collect and visualize various sensor readings over Wi-Fi and MQTT.

The project is currently in the concept and learning phase.

Planned hardware:

- ESP32 development board
- DHT22 temperature and humidity sensor
- Relay module for basic switching functions
- MQTT broker such as Mosquitto
- Dashboard for data visualization

Planned functions:

- Wi-Fi communication
- MQTT publish and subscribe
- Sensor monitoring
- Dashboard visualization
- Expansion with additional sensors and actuators

The project is intended to deepen my knowledge of embedded systems, MQTT communication and IoT applications.

Current status: concept project, in planning.
`,"../content/en/konzeptprojekt-esp32-basiertes-420ma-iot-gateway-mit-mqtt-und-rs485.md":`---
translation_id: local-post-1779960691288
language: en
slug: concept-esp32-420ma-iot-gateway-with-mqtt-and-rs485
title: 'Concept Project: ESP32-Based 4-20 mA IoT Gateway with MQTT and RS485'
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery: []
excerpt: Planned learning and development project for acquiring 4-20 mA sensor signals with ESP32, ADS1115 and MQTT communication as a simple industrial IoT prototype.
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:31:31.288Z'
external_link: ''
project_status: idea
sort_order: 90
---

# Concept Project: ESP32-Based 4-20 mA IoT Gateway with MQTT and RS485

This planned learning and development project focuses on acquiring 4-20 mA sensor signals with an ESP32, ADS1115 and MQTT communication. The goal is to create a simple industrial IoT prototype for sensor monitoring and data visualization through Home Assistant.

The project is currently in the concept and planning phase.

Planned functions:

- Acquisition of 4-20 mA sensor signals through ADS1115
- MQTT communication for IoT applications
- RS485 and Modbus RTU support
- Sensor-data visualization through Home Assistant
- Power supply for industrial 12-24 VDC environments

The first development phase uses a rapid prototype with ESP32 DevKit, ADS1115 module and MQTT connection. After successful functional testing, a custom PCB version is planned in KiCad.

Planned technologies:

- ESP32-S3
- ADS1115
- MQTT
- RS485 and Modbus RTU
- Home Assistant
- KiCad

Current status: concept phase, learning project.
`,"../content/en/konzeptprojekt-uberwachung-eines-dc-schaltnetzteils-mit-esp32-und-mqtt.md":`---
translation_id: local-post-1779960950659
language: en
slug: concept-monitoring-a-dc-switching-power-supply-with-esp32-and-mqtt
title: 'Concept Project: Monitoring a DC Switching Power Supply with ESP32 and MQTT'
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/Schaltnetzteil-main.webp
image_gallery: []
excerpt: Planned learning project for monitoring voltage, current and temperature values of a DC switching power supply using ESP32 and MQTT communication.
tags:
- MQTT
- Switching power supply
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:35:50.659Z'
external_link: ''
project_status: idea
sort_order: 100
---

# Concept Project: Monitoring a DC Switching Power Supply with ESP32 and MQTT

This planned learning project focuses on monitoring voltage, current and temperature values of a DC switching power supply using an ESP32 and MQTT communication.

The project is currently in the concept and learning phase. The aim is to develop a simple monitoring system based on an ESP32 microcontroller and visualize the measured values over Wi-Fi and MQTT.

Planned hardware:

- ESP32 development board
- ACS712 or INA219 current sensor
- Temperature sensor
- OLED display
- Wi-Fi and MQTT communication

Planned functions:

- Voltage and current monitoring
- Temperature monitoring
- MQTT data transmission
- Dashboard visualization
- Basic status and error display

The project is intended to deepen my knowledge of embedded systems, sensors and industrial energy monitoring.

Current status: concept project, in planning.
`,"../content/en/personal-way.md":`---
type: personal_way
language: en
title: Nguyen Nhan Do - Learning technology. Gaining experience. Continuing to grow.
image_1: /my-electronics-blog/images/about-1.webp
image_2: /my-electronics-blog/images/about-2.webp
---

I came to Germany in 2013 - not because my life in Vietnam was bad, but because I wanted to discover how far I could develop personally and professionally by leaving my comfort zone and starting again in a completely new environment.

My first years in Germany were mainly a time of arriving, learning and adapting. Alongside language courses, I worked in several fields, including hospitality, management and later self-employment.

After several years of varied professional experience, I consciously decided to return more strongly to technology and develop in electronics, measurement technology and automation over the long term.

In recent years, I have gained practical experience in calibration, troubleshooting, testing and the development of electronic systems while continuously expanding my technical knowledge.

I have also completed further training in PLC programming, C++/Qt, AutoCAD and EPLAN to deepen my knowledge and better understand new technical fields.

This blog primarily documents my technical projects, experience and learning processes. It is a place where I record knowledge, collect ideas and document my professional development over time.

All content is based on personal projects, independent learning and publicly accessible knowledge. Confidential information, internal documents or projects from current or former employers are not published.
`,"../content/en/plc-programmierung-einer-industriellen-tauchanlage.md":`---
translation_id: demo-3
language: en
slug: plc-programming-of-an-industrial-dipping-system
title: PLC Programming of an Industrial Dipping System
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Automated dipping system controlled by a Siemens S7-300 PLC, with automatic transport and dipping sequences plus manual and automatic operating modes in TIA Portal.
tags:
- PLC
- S7300
- TIA Portal
read_time: 5 Min.
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
---

# PLC Programming of an Industrial Dipping System

This project covers the development and programming of an automated dipping system for an industrial transport and dipping process using a Siemens S7-300.

The system automatically moves, lifts and lowers a workpiece basket between two dipping baths while respecting defined safety and motion conditions.

The control system was implemented with a Siemens S7-300 CPU in TIA Portal. The project includes a manual mode for controlling individual axes and a fully automatic mode with sequential process control.

In automatic mode, the basket independently moves to each dipping station, performs the configured dipping and drip-off times, and then returns to its starting position. Limit sensors, safety checks, status displays, motor controls and a workpiece counter with timestamp history were also implemented.

The software structure contains several function blocks for operating modes, output control, sequence control, part history and diagnostic functions. Symbolic variables, data blocks and structured data types improve readability.

The project demonstrates the practical implementation of industrial automation with PLCs, sensors, actuators and sequence control in Siemens TIA Portal.

**Click \`Open project\` to view the complete documentation and project files.**
`,"../content/en/plc-programming-of-an-industrial-dipping-system.md":`---
id: plc-programming-of-an-industrial-dipping-system
slug: plc-programming-of-an-industrial-dipping-system
translation_id: demo-3
language: en
content_type: 
title: PLC Programming of an Industrial Dipping System
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Automated dipping system controlled by a Siemens S7-300 PLC, with automatic transport and dipping sequences plus manual and automatic operating modes in TIA Portal.
tags:
- PLC
- S7300
- TIA Portal
read_time: 5 Min.
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
---

# PLC Programming of an Industrial Dipping System

This project covers the development and programming of an automated dipping system for an industrial transport and dipping process using a Siemens S7-300.

The system automatically moves, lifts and lowers a workpiece basket between two dipping baths while respecting defined safety and motion conditions.

The control system was implemented with a Siemens S7-300 CPU in TIA Portal. The project includes a manual mode for controlling individual axes and a fully automatic mode with sequential process control.

In automatic mode, the basket independently moves to each dipping station, performs the configured dipping and drip-off times, and then returns to its starting position. Limit sensors, safety checks, status displays, motor controls and a workpiece counter with timestamp history were also implemented.

The software structure contains several function blocks for operating modes, output control, sequence control, part history and diagnostic functions. Symbolic variables, data blocks and structured data types improve readability.

The project demonstrates the practical implementation of industrial automation with PLCs, sensors, actuators and sequence control in Siemens TIA Portal.

**Click \`Open project\` to view the complete documentation and project files.**
`,"../content/en/technical-portfolio-electronics-blog.md":`---
id: technical-portfolio-electronics-blog
slug: technical-portfolio-electronics-blog
translation_id: technisches-portfolio-elektronik-blog
language: en
content_type: 
title: Technical Portfolio & Electronics Blog
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/Portfolio-Blog-main.webp
image_gallery:
[]
excerpt: Development of a modern personal portfolio and blog platform for documenting technical projects, electronics experiments, embedded systems, automation and professional development.
tags:
- React
- JavaScript
- Portfolio
- Blog
- Embedded Systems
- Electronics
- Web Development
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:30:47.159Z'
external_link: https://github.com/nguyennhando/my-electronics-blog
project_status: done
sort_order: 20
---

# Technical Portfolio & Electronics Blog

## Project Overview

I developed this website from scratch to document technical projects, electronics work, learning progress and professional experience in one place.

The platform is both a personal portfolio and a technical knowledge base for:

- Electronics
- Embedded systems
- IoT
- Automation technology
- Software development
- Measurement technology
- Technical documentation

## Technologies Used

### Frontend

- React
- JavaScript
- Framer Motion
- React Markdown
- Tailwind CSS

### UI Components

- Lucide React icons
- Responsive layout
- Animations
- Lightbox gallery
- Markdown editor

## Main Functions

### Blog System

- Technical project reports
- Markdown-based articles
- Categories and tags
- Search
- Pagination

### Portfolio

- Project overview
- Status badges
- Image gallery
- External project links

### Custom Markdown Editor

The website includes an integrated editor for creating new articles with live preview, automatic slug generation, Markdown export, direct saving and project management.

## User Interface

The design focuses on a modern technical appearance with a dark UI, responsive presentation, fluid animations and mobile optimization.

## Goal and Result

The website presents technical skills professionally and documents my projects and learning progress over the long term. The result is a self-developed portfolio and blog platform that combines technical documentation, project management and modern web development.
`,"../content/en/technisches-portfolio-elektronik-blog.md":`---
translation_id: technisches-portfolio-elektronik-blog
language: en
slug: technical-portfolio-electronics-blog
title: Technical Portfolio & Electronics Blog
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/Portfolio-Blog-main.webp
image_gallery: []
excerpt: Development of a modern personal portfolio and blog platform for documenting technical projects, electronics experiments, embedded systems, automation and professional development.
tags:
- React
- JavaScript
- Portfolio
- Blog
- Embedded Systems
- Electronics
- Web Development
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:30:47.159Z'
external_link: https://github.com/nguyennhando/my-electronics-blog
project_status: done
sort_order: 80
---

# Technical Portfolio & Electronics Blog

## Project Overview

I developed this website from scratch to document technical projects, electronics work, learning progress and professional experience in one place.

The platform is both a personal portfolio and a technical knowledge base for:

- Electronics
- Embedded systems
- IoT
- Automation technology
- Software development
- Measurement technology
- Technical documentation

## Technologies Used

### Frontend

- React
- JavaScript
- Framer Motion
- React Markdown
- Tailwind CSS

### UI Components

- Lucide React icons
- Responsive layout
- Animations
- Lightbox gallery
- Markdown editor

## Main Functions

### Blog System

- Technical project reports
- Markdown-based articles
- Categories and tags
- Search
- Pagination

### Portfolio

- Project overview
- Status badges
- Image gallery
- External project links

### Custom Markdown Editor

The website includes an integrated editor for creating new articles with live preview, automatic slug generation, Markdown export, direct saving and project management.

## User Interface

The design focuses on a modern technical appearance with a dark UI, responsive presentation, fluid animations and mobile optimization.

## Goal and Result

The website presents technical skills professionally and documents my projects and learning progress over the long term. The result is a self-developed portfolio and blog platform that combines technical documentation, project management and modern web development.
`,"../content/en/visualisierung-und-automatisierung-eines-industriellen-mischprozesses-mit-siemen.md":`---
translation_id: local-post-1779960317991
language: en
slug: visualization-and-automation-of-an-industrial-mixing-process-with-siemens
title: Visualization and Automation of an Industrial Mixing Process with Siemens WinCC
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Mischbehälter-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Mischbehälter-1.webp
- /my-electronics-blog/images/posts/Mischbehälter-2.webp
- /my-electronics-blog/images/posts/Mischbehälter-3.webp
excerpt: Development of an industrial HMI system for monitoring and controlling a mixing tank with Siemens SIMATIC WinCC Runtime Advanced, including sensors, valves, motors and temperature values in real time.
tags:
- PLC
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:25:17.991Z'
external_link: https://drive.google.com/drive/folders/1Vrz5hK6aTVExshjDZIi92ecTgQaFo_kq
project_status: done
sort_order: 40
---

# Visualization and Automation of an Industrial Mixing Process with Siemens WinCC

This project covers the development of a modern HMI visualization system for monitoring and controlling an industrial mixing tank with Siemens SIMATIC WinCC Runtime Advanced and a Siemens S7-1200 or S7-1500 PLC.

The application visualizes sensors, valves, motors and temperature values in real time and supports automatic and manual operating modes. Its goal is user-friendly, safe and efficient control of industrial mixing processes.

The HMI allows the operator to monitor and control process parameters in real time. The complete mixing process is clearly represented, making material flow, motor activity and valve positions easy to understand. Safety functions such as emergency stop, status messages and alarm displays contribute to secure operation.

In automatic mode, the process runs step by step through defined sequences. Sensor values are processed and actuators are controlled automatically. In manual mode, individual components can be tested and controlled separately, which is especially useful during maintenance and commissioning.

The project includes:

- Real-time communication between PLC and HMI
- Process visualization and system monitoring
- Temperature monitoring and status displays
- Control of valves and motors
- Automatic and manual operation
- Error and alarm management
- User-friendly interface

Combining Siemens PLC technology with WinCC Runtime Advanced creates a powerful HMI system for optimizing production workflows and improving operational safety.

Click \`Open project\` to view the complete documentation and further details.
`,"../content/en/visualization-and-automation-of-an-industrial-mixing-process-with-siemens.md":`---
id: visualization-and-automation-of-an-industrial-mixing-process-with-siemens
slug: visualization-and-automation-of-an-industrial-mixing-process-with-siemens
translation_id: local-post-1779960317991
language: en
content_type: 
title: Visualization and Automation of an Industrial Mixing Process with Siemens WinCC
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Mischbehälter-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Mischbehälter-1.webp
- /my-electronics-blog/images/posts/Mischbehälter-2.webp
- /my-electronics-blog/images/posts/Mischbehälter-3.webp
excerpt: Development of an industrial HMI system for monitoring and controlling a mixing tank with Siemens SIMATIC WinCC Runtime Advanced, including sensors, valves, motors and temperature values in real time.
tags:
- PLC
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:25:17.991Z'
external_link: https://drive.google.com/drive/folders/1Vrz5hK6aTVExshjDZIi92ecTgQaFo_kq
project_status: done
sort_order: 40
---

# Visualization and Automation of an Industrial Mixing Process with Siemens WinCC

This project covers the development of a modern HMI visualization system for monitoring and controlling an industrial mixing tank with Siemens SIMATIC WinCC Runtime Advanced and a Siemens S7-1200 or S7-1500 PLC.

The application visualizes sensors, valves, motors and temperature values in real time and supports automatic and manual operating modes. Its goal is user-friendly, safe and efficient control of industrial mixing processes.

The HMI allows the operator to monitor and control process parameters in real time. The complete mixing process is clearly represented, making material flow, motor activity and valve positions easy to understand. Safety functions such as emergency stop, status messages and alarm displays contribute to secure operation.

In automatic mode, the process runs step by step through defined sequences. Sensor values are processed and actuators are controlled automatically. In manual mode, individual components can be tested and controlled separately, which is especially useful during maintenance and commissioning.

The project includes:

- Real-time communication between PLC and HMI
- Process visualization and system monitoring
- Temperature monitoring and status displays
- Control of valves and motors
- Automatic and manual operation
- Error and alarm management
- User-friendly interface

Combining Siemens PLC technology with WinCC Runtime Advanced creates a powerful HMI system for optimizing production workflows and improving operational safety.

Click \`Open project\` to view the complete documentation and further details.
`,"../content/en/wincc-fischertechnik-model-automatic-and-manual-operation-with-hmi.md":`---
id: wincc-fischertechnik-model-automatic-and-manual-operation-with-hmi
slug: wincc-fischertechnik-model-automatic-and-manual-operation-with-hmi
translation_id: local-post-1779960469574
language: en
content_type: 
title: WinCC Fischertechnik Model - Automatic and Manual Operation with HMI
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/FischerTechnik-main.webp
image_gallery:
- /my-electronics-blog/images/posts/FischerTechnik-1.webp
excerpt: PLC and HMI programming for a Fischertechnik press model with Siemens CPU1512C, ET200SP and TP700 Comfort Panel, including automatic operation, manual mode, users, recipes and alarms.
tags:
- WinCC
- PLC
- HMI
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:27:49.574Z'
external_link: https://drive.google.com/drive/folders/1XwbZqMA_neR7FqreJCQsHW4ddtIEpOKi?usp=drive_link
project_status: done
sort_order: 60
---

# WinCC Fischertechnik Model - Automatic and Manual Operation with HMI

This project develops a PLC and HMI control system for a Fischertechnik press model using a Siemens CPU1512C, ET200SP and TP700 Comfort Panel.

The implementation includes:

- Automatic operation
- Manual and setup mode
- User management
- Alarm and message system
- Recipe management
- HMI visualization with WinCC

Communication takes place over Profinet. The system is currently in the finalization and optimization phase.
`,"../content/en/wincc-fischertechnikmodell-automatik-und-handbetrieb-mit-hmi.md":`---
translation_id: local-post-1779960469574
language: en
slug: wincc-fischertechnik-model-automatic-and-manual-operation-with-hmi
title: WinCC Fischertechnik Model - Automatic and Manual Operation with HMI
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/FischerTechnik-main.webp
image_gallery:
- /my-electronics-blog/images/posts/FischerTechnik-1.webp
excerpt: PLC and HMI programming for a Fischertechnik press model with Siemens CPU1512C, ET200SP and TP700 Comfort Panel, including automatic operation, manual mode, users, recipes and alarms.
tags:
- WinCC
- PLC
- HMI
read_time: 5 Min.
published: true
created_at: '2026-05-28T09:27:49.574Z'
external_link: https://drive.google.com/drive/folders/1XwbZqMA_neR7FqreJCQsHW4ddtIEpOKi?usp=drive_link
project_status: done
sort_order: 60
---

# WinCC Fischertechnik Model - Automatic and Manual Operation with HMI

This project develops a PLC and HMI control system for a Fischertechnik press model using a Siemens CPU1512C, ET200SP and TP700 Comfort Panel.

The implementation includes:

- Automatic operation
- Manual and setup mode
- User management
- Alarm and message system
- Recipe management
- HMI visualization with WinCC

Communication takes place over Profinet. The system is currently in the finalization and optimization phase.
`,"../content/en/wissensbibliothek-technische-notizen-und-analysen.md":`---
translation_id: wissensbibliothek-technische-notizen-und-analysen
language: en
slug: knowledge-library-technical-notes-and-analyses
content_type: knowledge
title: 'Knowledge Library: Technical Notes and Analyses'
category: Grundlagen
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery: []
excerpt: An introduction to my collection of learning materials, circuit analyses and technical research.
tags:
- Electronics
- Learning
- Analysis
read_time: 3 Min.
published: true
created_at: '2026-05-31T12:00:00.000Z'
external_link: ''
project_status: done
sort_order: 1
---

# Structuring Technical Knowledge

This section supplements the project overview with more detailed learning notes, technical analyses and personal research. While project articles document concrete implementations, the knowledge library focuses on individual topics and connections.

## Planned Content

- Analyses of electronic circuits
- Fundamentals of components and measurement methods
- Learning materials about embedded systems and automation
- Notes from my own experiments and research
- Additional external sources

## Article Structure

Articles are structured so that important information remains easy to find. Categories, tags and search make it possible to reach the relevant topic quickly, even as the collection grows.
`,"../content/gallery-settings.md":`---
type: gallery_settings
---

[
  "/my-electronics-blog/images/galerie/galerie.webp",
  "/my-electronics-blog/images/galerie/Mischbehälter-main.webp",
  "/my-electronics-blog/images/galerie/Portfolio-Blog-main.webp",
  "/my-electronics-blog/images/galerie/finanzmanager-main.webp",
  "/my-electronics-blog/images/galerie/Flaschenzug-main.webp",
  "/my-electronics-blog/images/galerie/Tauchanlage-main.webp",
  "/my-electronics-blog/images/galerie/Dampfmaschine-main.webp",
  "/my-electronics-blog/images/galerie/nhan.webp"
]
`,"../content/site-settings.md":`---
type: site_settings
background_image: /my-electronics-blog/images/background.webp
---
`,"../content/vi/3d-flaschenzug-in-autocad.md":`---
translation_id: local-post-1779960596593
language: vi
slug: mo-hinh-3d-ro-roc-trong-autocad
title: Mô hình 3D ròng rọc trong AutoCAD
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Flaschenzug-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Flaschenzug-1.webp
- /my-electronics-blog/images/posts/Flaschenzug-2.webp
- /my-electronics-blog/images/posts/Flaschenzug-3.webp
excerpt: Một hệ thống ròng rọc cơ khí được thiết kế hoàn chỉnh dưới dạng mô hình 3D trong AutoCAD, tập trung vào độ chính xác của từng chi tiết và cách thể hiện cơ cấu thực tế.
tags:
- AutoCAD
- 3D
- Thiết kế
read_time: 5 phút
published: true
created_at: '2026-05-28T09:29:56.593Z'
external_link: https://drive.google.com/drive/folders/1fN_hc6jaddMzTqEt0iIS4YxpiPdT8JFR?usp=drive_link
project_status: done
sort_order: 70
---

# Mô hình 3D ròng rọc trong AutoCAD

Dự án này trình bày quá trình thiết kế một hệ thống ròng rọc dưới dạng mô hình 3D trong AutoCAD. Từng chi tiết cơ khí được dựng riêng rồi lắp ghép thành một cụm hoàn chỉnh.

Mô hình bao gồm:

- Móc treo
- Bánh ròng rọc
- Tấm bên
- Chốt liên kết
- Các chi tiết đòn bẩy và dẫn hướng

Mục tiêu của dự án là nâng cao kỹ năng thiết kế CAD 3D, đồng thời hiểu rõ hơn chuyển động cơ khí và cách liên kết các chi tiết.

Các trọng tâm:

- Dựng hình 3D chính xác trong AutoCAD
- Lắp ghép các chi tiết cơ khí
- Thể hiện kỹ thuật của hệ thống ròng rọc
- Quan sát cơ cấu từ nhiều góc nhìn
- Thiết kế chi tiết sát với thực tế

Mô hình hoàn thiện có thể dùng cho thuyết trình kỹ thuật, học tập hoặc làm nền tảng cho những phát triển cơ khí tiếp theo.
`,"../content/vi/autocad-2d-dong-co-hoi-nuoc-nho.md":`---
id: autocad-2d-dong-co-hoi-nuoc-nho
slug: autocad-2d-dong-co-hoi-nuoc-nho
translation_id: demo-2
language: vi
content_type: 
title: AutoCAD 2D - Động cơ hơi nước nhỏ
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Dampfmaschine-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Dampfmaschine-1.webp
- /my-electronics-blog/images/posts/Dampfmaschine-2.webp
- /my-electronics-blog/images/posts/Dampfmaschine-3.webp
- /my-electronics-blog/images/posts/Dampfmaschine-5.webp
excerpt: Phát triển mô hình CAD 2D và 3D trong lĩnh vực cơ khí bằng AutoCAD 2026, bao gồm một động cơ hơi nước nhỏ.
tags:
- AutoCAD 2D
read_time: 6 phút
published: true
created_at: '2026-05-08T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1GDWUKT5mLYHnSlSns5oKxpMZrkY9WENy
project_status: done
sort_order: 80
---

# AutoCAD 2D - Động cơ hơi nước nhỏ

Dự án trình bày bản thiết kế 2D hoàn chỉnh của một động cơ hơi nước nhỏ trong lĩnh vực cơ khí bằng AutoCAD 2026.

Thiết kế bao gồm:

- Tấm đế
- Chân đỡ và tấm gương
- Gối đỡ
- Đầu thanh piston
- Đĩa quay và trục khuỷu
- Xi lanh và piston
- Bánh đà
- Trục lắc
- Lan can và thanh giữa
- Chi tiết tiêu chuẩn và bảng kê vật liệu

Bản vẽ kỹ thuật có kích thước, mặt cắt, thông tin vật liệu, bản vẽ từng chi tiết và bản vẽ lắp.

Vật liệu sử dụng:

- Đồng thau
- Hợp kim thép
- Đồng
- Kính

Một dự án khác là thiết kế hệ thống ròng rọc cơ khí với bánh đôi và móc khóa an toàn. Mô hình CAD 3D này phục vụ việc nâng vật nặng với lực kéo nhỏ hơn.

Nút \`Mở dự án\` dẫn đến toàn bộ tệp dự án, bao gồm các tệp AutoCAD \`.dwg\`.

Thời gian khóa học: 19.01.2026 - 13.02.2026  
Phần mềm: AutoCAD 2026  
Người thực hiện: NGUYEN NHAN DO
`,"../content/vi/autocad-2d-kleine-dampfmaschine.md":`---
translation_id: demo-2
language: vi
slug: autocad-2d-dong-co-hoi-nuoc-nho
title: AutoCAD 2D - Động cơ hơi nước nhỏ
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Dampfmaschine-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Dampfmaschine-1.webp
- /my-electronics-blog/images/posts/Dampfmaschine-2.webp
- /my-electronics-blog/images/posts/Dampfmaschine-3.webp
- /my-electronics-blog/images/posts/Dampfmaschine-5.webp
excerpt: Phát triển mô hình CAD 2D và 3D trong lĩnh vực cơ khí bằng AutoCAD 2026, bao gồm một động cơ hơi nước nhỏ.
tags:
- AutoCAD 2D
read_time: 6 phút
published: true
created_at: '2026-05-08T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1GDWUKT5mLYHnSlSns5oKxpMZrkY9WENy
project_status: done
sort_order: 20
---

# AutoCAD 2D - Động cơ hơi nước nhỏ

Dự án trình bày bản thiết kế 2D hoàn chỉnh của một động cơ hơi nước nhỏ trong lĩnh vực cơ khí bằng AutoCAD 2026.

Thiết kế bao gồm:

- Tấm đế
- Chân đỡ và tấm gương
- Gối đỡ
- Đầu thanh piston
- Đĩa quay và trục khuỷu
- Xi lanh và piston
- Bánh đà
- Trục lắc
- Lan can và thanh giữa
- Chi tiết tiêu chuẩn và bảng kê vật liệu

Bản vẽ kỹ thuật có kích thước, mặt cắt, thông tin vật liệu, bản vẽ từng chi tiết và bản vẽ lắp.

Vật liệu sử dụng:

- Đồng thau
- Hợp kim thép
- Đồng
- Kính

Một dự án khác là thiết kế hệ thống ròng rọc cơ khí với bánh đôi và móc khóa an toàn. Mô hình CAD 3D này phục vụ việc nâng vật nặng với lực kéo nhỏ hơn.

Nút \`Mở dự án\` dẫn đến toàn bộ tệp dự án, bao gồm các tệp AutoCAD \`.dwg\`.

Thời gian khóa học: 19.01.2026 - 13.02.2026  
Phần mềm: AutoCAD 2026  
Người thực hiện: NGUYEN NHAN DO
`,"../content/vi/dien-tu-kiem-thu-sua-chua.md":`---
id: dien-tu-kiem-thu-sua-chua
slug: dien-tu-kiem-thu-sua-chua
translation_id: demo-1
language: vi
content_type: 
title: Điện tử - Kiểm thử - Sửa chữa
category: Über mich
image_url: /my-electronics-blog/images/posts/Nguyen-main.webp
image_gallery:
[]
excerpt: Kỹ sư điện với sự quan tâm lớn đến thiết kế điện và phát triển phần mềm. Ham học hỏi, khéo léo và có động lực liên tục mở rộng kinh nghiệm thực tế.
tags:
- ESP32
- MQTT
- Smart Home
- Cảm biến
read_time: 8 phút
published: true
created_at: '2026-05-14T12:00:00Z'
external_link: 
project_status: done
sort_order: 10
---

# Điện tử - Kiểm thử - Sửa chữa

Các lĩnh vực tôi tập trung gồm:

- Phát triển phần mềm
- Kỹ thuật tự động hóa
- Lập trình PLC với Siemens S7 và TIA Portal
- Tìm lỗi và sửa chữa bo mạch điện tử

Tôi cũng tiếp tục mở rộng kiến thức về:

- WinCC
- C++ và Qt
- EPLAN
- AutoCAD 2D và 3D

Tôi làm việc cẩn thận, có sự khéo léo trong thao tác và rất sẵn sàng học hỏi. Dù kinh nghiệm nghề nghiệp chưa quá dài, tôi có thể nhanh chóng làm quen với công nghệ mới và liên tục phát triển kỹ năng kỹ thuật.

Tôi đặc biệt quan tâm đến kỹ thuật kiểm thử, phát triển nguyên mẫu, lập trình gần phần cứng, cũng như phân tích và chẩn đoán lỗi trong hệ thống điện tử.
`,"../content/vi/elektronik-test-reparatur.md":`---
translation_id: demo-1
language: vi
slug: dien-tu-kiem-thu-sua-chua
title: Điện tử - Kiểm thử - Sửa chữa
category: Über mich
image_url: /my-electronics-blog/images/posts/Nguyen-main.webp
image_gallery: []
excerpt: Kỹ sư điện với sự quan tâm lớn đến thiết kế điện và phát triển phần mềm. Ham học hỏi, khéo léo và có động lực liên tục mở rộng kinh nghiệm thực tế.
tags:
- ESP32
- MQTT
- Smart Home
- Cảm biến
read_time: 8 phút
published: true
created_at: '2026-05-14T12:00:00Z'
external_link: ''
project_status: done
sort_order: 10
---

# Điện tử - Kiểm thử - Sửa chữa

Các lĩnh vực tôi tập trung gồm:

- Phát triển phần mềm
- Kỹ thuật tự động hóa
- Lập trình PLC với Siemens S7 và TIA Portal
- Tìm lỗi và sửa chữa bo mạch điện tử

Tôi cũng tiếp tục mở rộng kiến thức về:

- WinCC
- C++ và Qt
- EPLAN
- AutoCAD 2D và 3D

Tôi làm việc cẩn thận, có sự khéo léo trong thao tác và rất sẵn sàng học hỏi. Dù kinh nghiệm nghề nghiệp chưa quá dài, tôi có thể nhanh chóng làm quen với công nghệ mới và liên tục phát triển kỹ năng kỹ thuật.

Tôi đặc biệt quan tâm đến kỹ thuật kiểm thử, phát triển nguyên mẫu, lập trình gần phần cứng, cũng như phân tích và chẩn đoán lỗi trong hệ thống điện tử.
`,"../content/vi/finanzverwaltung-mit-datenanalyse.md":`---
translation_id: local-post-1779957810945
language: vi
slug: quan-ly-tai-chinh-voi-phan-tich-du-lieu
title: Quản lý tài chính với phân tích dữ liệu
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Quản lý thu nhập và chi tiêu cá nhân với nhập xuất CSV, phân tích dữ liệu theo thời gian thực và giao diện đồ họa hiện đại. Mã nguồn đầy đủ có trong liên kết dự án.
tags:
- C++
- Qt 6.9
read_time: 5 phút
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Quản lý tài chính với phân tích dữ liệu

## GeldPilot - Quản lý tài chính cá nhân

GeldPilot là ứng dụng desktop hiện đại để quản lý tài chính cá nhân, được phát triển bằng C++, Qt 6 và SQLite. Phần mềm hỗ trợ theo dõi thu nhập và chi tiêu, nhập xuất CSV và phân tích dữ liệu theo thời gian thực thông qua giao diện đồ họa hiện đại.

Nút \`Mở dự án\` ở cuối trang dẫn đến toàn bộ mã nguồn.

## Tổng quan

GeldPilot là ứng dụng thân thiện để quản lý thu nhập và chi tiêu. Giao diện trực quan cho phép quản lý giao dịch, tổ chức category và tạo báo cáo tài chính chi tiết.

## Tính năng chính

- **Quản lý giao dịch:** Thêm, sửa và xóa thu nhập hoặc chi tiêu
- **Phân loại:** Sử dụng category có sẵn và category tự tạo
- **Bộ lọc thời gian:** Lọc linh hoạt theo ngày và category
- **Tổng quan tài chính:** Tự động tính thu nhập, chi tiêu và số dư
- **Trực quan hóa:** Hiển thị tài chính bằng biểu đồ cột tương tác
- **Nhập và xuất:** Trao đổi dữ liệu bằng tệp CSV
- **In báo cáo:** Tạo báo cáo chuyên nghiệp với logo công ty

## Yêu cầu hệ thống

### Yêu cầu tối thiểu

- Hệ điều hành: Windows 10 hoặc 11, macOS 10.15+, hoặc Linux Ubuntu 20.04+
- Bộ nhớ: 4 GB RAM
- Dung lượng đĩa: 100 MB
- Độ phân giải màn hình: 1024 x 768

### Khuyến nghị

- Bộ nhớ: 8 GB RAM trở lên
- Độ phân giải màn hình: 1920 x 1080 trở lên

## Cài đặt

### Phiên bản Windows đã biên dịch

1. Tải phiên bản mới nhất từ trang Releases.
2. Giải nén vào thư mục mong muốn.
3. Chạy \`GeldPilot.exe\`.

### Biên dịch từ mã nguồn

Yêu cầu:

- Qt 6.9 trở lên
- CMake 3.16 trở lên
- Trình biên dịch tương thích C++17:
  - Windows: MinGW-w64 hoặc MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ hoặc Clang 10+

Các bước biên dịch:

\`\`\`bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
\`\`\`

Khởi chạy ứng dụng:

\`\`\`bash
# Windows
./Release/GeldPilot.exe

# Linux hoặc macOS
./GeldPilot
\`\`\`

## Bắt đầu sử dụng

### Thêm giao dịch đầu tiên

1. Khởi động GeldPilot.
2. Nhập ngày, số tiền và mô tả.
3. Chọn category, ví dụ \`Lương\`.
4. Chọn loại: \`Thu nhập\` hoặc \`Chi tiêu\`.
5. Nhấn \`Giao dịch mới\`.

### Lọc dữ liệu

- Sử dụng menu chọn category.
- Đặt ngày bắt đầu và ngày kết thúc.
- Nhấn \`Lọc\` để cập nhật danh sách.

### Tạo báo cáo

- Nhấn \`Biểu đồ\` để xem trực quan.
- Dùng \`In\` để tạo báo cáo chuyên nghiệp.
- Xuất dữ liệu CSV để phân tích thêm.

## Hướng dẫn sử dụng

### Quản lý giao dịch

Khi thêm giao dịch, điền đủ các trường bắt buộc:

- Ngày: ngày giao dịch
- Số tiền: luôn nhập giá trị dương
- Mô tả: mô tả ngắn
- Category: nhóm của giao dịch
- Loại: \`Thu nhập\` hoặc \`Chi tiêu\`

Để sửa giao dịch:

1. Chọn một hàng trong bảng.
2. Dữ liệu tự động xuất hiện trong ô nhập.
3. Thực hiện thay đổi.
4. Nhấn \`Lưu\`.

Để xóa:

- Một giao dịch: chọn hàng rồi nhấn \`Xóa\`.
- Nhiều giao dịch: chọn nhiều hàng bằng \`Ctrl + Click\` rồi nhấn \`Xóa\`.

### Category

Các category có sẵn:

- Giải trí
- Lương
- Sức khỏe
- Thực phẩm
- Tiền thuê nhà
- Khác
- Giao thông
- Bảo hiểm
- Đầu tư
- Liên lạc
- Nhà ở

### Lọc và tìm kiếm

Lọc theo category:

- Chọn \`Tất cả category\` để xem toàn bộ.
- Chọn một category cụ thể để lọc danh sách.

Lọc theo khoảng thời gian:

1. Đặt ngày bắt đầu và ngày kết thúc.
2. Nhấn \`Lọc\`.

### Nhập và xuất dữ liệu

Nhập CSV:

1. Chuẩn bị tệp CSV với các cột \`ID\`, \`Ngày\`, \`Số tiền\`, \`Mô tả\`, \`Category\` và \`Loại\`.
2. Nhấn \`Nhập\`.
3. Chọn tệp CSV.

Xuất CSV:

1. Nhấn \`Xuất\`.
2. Chọn vị trí lưu và tên tệp.
3. Danh sách hiện tại trong bảng được xuất ra.

### Biểu đồ và báo cáo

Nhấn \`Biểu đồ\` để xem biểu đồ cột. Biểu đồ hiển thị category, tổng thu nhập, tổng chi tiêu và số dư với mã màu tương tác.

Để in báo cáo:

1. Mở biểu đồ.
2. Nhấn \`In\`.
3. Chọn máy in và thiết lập.
4. Ứng dụng tạo bản in chuyên nghiệp kèm logo.

## Chi tiết kỹ thuật

### Kiến trúc

- Framework GUI: Qt 6.9
- Cơ sở dữ liệu: tệp SQLite cục bộ
- Biểu đồ: Qt Charts
- Hệ thống build: CMake
- Trình biên dịch trên Windows: MinGW-w64

### Schema cơ sở dữ liệu

Bảng giao dịch:

\`\`\`sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
\`\`\`

Bảng category:

\`\`\`sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
\`\`\`

### Cấu trúc dự án

\`\`\`text
geldpilot/
  src/
    main.cpp                 Điểm khởi đầu
    mainwindow.cpp/h         Cửa sổ chính
    chartwindow.cpp/h        Cửa sổ biểu đồ
    datenbankmanager.cpp/h   Logic cơ sở dữ liệu
    centerdelegate.h         Định dạng giao diện
  ui/
    mainwindow.ui            Giao diện cửa sổ chính
    chartwindow.ui           Giao diện biểu đồ
  resources/
    icons/                   Biểu tượng ứng dụng
  CMakeLists.txt             Cấu hình build
  README.md                  Tài liệu
\`\`\`

## Phát triển

Quy ước code:

- Chuẩn C++17
- Quy ước Qt
- Tên biến tiếng Đức có mô tả rõ ràng
- Chú thích đầy đủ

Để đóng góp:

1. Fork repository.
2. Tạo feature branch.
3. Thực hiện thay đổi.
4. Kiểm thử kỹ.
5. Tạo pull request.

Các nội dung đã biết:

- Đã triển khai chọn nhiều giao dịch để xóa.
- Đã lập chỉ mục cơ sở dữ liệu để cải thiện hiệu năng.
- Chức năng sao lưu đang được lên kế hoạch.

## Hỗ trợ

Khi cần trợ giúp:

- Tài liệu: đọc toàn bộ README.
- Issues: báo lỗi trên GitHub.
- E-mail: \`support@geldpilot.de\`

Câu hỏi thường gặp:

- **Không mở được cơ sở dữ liệu:** Kiểm tra quyền ghi trong thư mục cài đặt.
- **Không hiển thị biểu đồ:** Kiểm tra Qt Charts đã được cài đặt hay chưa.
- **Nhập dữ liệu thất bại:** Kiểm tra định dạng CSV. Các cột phải được phân tách bằng dấu chấm phẩy.

## Giấy phép

Bản quyền 2025 Nguyen Nhan Do. Bảo lưu mọi quyền.  
Phiên bản: 1.0.0  
Nhà phát triển: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Sử dụng GeldPilot để kiểm soát tài chính và chủ động xây dựng tương lai tài chính của bạn.
`,"../content/vi/home-content.md":`---
type: home_content
language: vi
hero_badge: Thiết kế điện · Kiểm thử · Phần mềm
hero_title: Kỹ thuật. Tài liệu. Phát triển.
hero_text: Tôi tự xây dựng website này để ghi lại các dự án kỹ thuật, quá trình học tập và kinh nghiệm thực tế trong lĩnh vực điện tử, hệ thống nhúng, đo lường và phát triển phần mềm kỹ thuật.
transparency_title: Thông tin dự án & Minh bạch
transparency_text: Các hình ảnh về phòng thí nghiệm, không gian làm việc kỹ thuật và thiết bị điện tử trên website này chỉ nhằm minh họa cho sở thích kỹ thuật và kinh nghiệm thực hành của tôi.
transparency_strong: Chúng không thể hiện nơi làm việc thực tế, khu vực nội bộ hay môi trường làm việc thật của bất kỳ doanh nghiệp nào.
feature_1_title: Điện tử & Hệ thống nhúng
feature_1_text: Các dự án học tập cá nhân về vi điều khiển, cảm biến và phát triển phần cứng nhằm mở rộng kiến thức kỹ thuật qua thực hành.
feature_2_title: Tự động hóa & Điều khiển
feature_2_text: Các bài thực hành và dự án nhỏ để hiểu rõ hơn quy trình công nghiệp, kỹ thuật điều khiển và các quá trình kỹ thuật.
feature_3_title: Học tập kỹ thuật
feature_3_text: Ghi lại hành trình học tập, kinh nghiệm kỹ thuật và những chủ đề mới mà tôi liên tục tìm hiểu.
feature_4_title: Phát triển cá nhân
feature_4_text: Website này là nền tảng cá nhân để lưu lại dự án, ý tưởng và tiến bộ kỹ thuật một cách rõ ràng.
warning_one: Các dự án có nhãn “Ý tưởng” vẫn đang ở giai đoạn ý tưởng hoặc khái niệm và chưa được triển khai thực tế.
warning_two: Các dự án khác có thể được mở bằng nút “Đọc bài viết”. Cuối mỗi trang dự án có nút “Mở dự án” với các tệp liên quan.
collaboration_title: Hợp tác trong các dự án điện tử hiện đại.
collaboration_text: Bạn cần hỗ trợ về hệ thống nhúng, cảm biến, robot hoặc tự động hóa công nghiệp? Hãy liên hệ với tôi để hợp tác kỹ thuật hoặc phát triển giải pháp riêng.
---
`,"../content/vi/konzept-eines-pwm-geregelten-dc-netzteils-mit-mess-und-schutzfunktionen.md":`---
translation_id: local-post-1779960818567
language: vi
slug: y-tuong-bo-nguon-dc-dieu-khien-pwm-co-do-luong-va-bao-ve
title: Ý tưởng bộ nguồn DC điều khiển PWM với chức năng đo lường và bảo vệ
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery: []
excerpt: Dự án học tập và ý tưởng phát triển bộ nguồn DC dùng vi điều khiển với điều khiển PWM, giới hạn dòng điện và các chức năng bảo vệ cơ bản.
tags:
- PWM
- Bộ nguồn
- STM32
read_time: 5 phút
published: true
created_at: '2026-05-28T09:33:38.567Z'
external_link: ''
project_status: idea
sort_order: 100
---

# Ý tưởng bộ nguồn DC điều khiển PWM với chức năng đo lường và bảo vệ

Đây là dự án học tập và ý tưởng phát triển bộ nguồn DC dùng vi điều khiển với điều khiển PWM, giới hạn dòng điện và các chức năng bảo vệ cơ bản.

Mục tiêu không chỉ là chế tạo một bộ nguồn DC đơn giản, mà còn hiểu thực tế về điều khiển PWM, điện tử công suất và mạch bảo vệ điện tử.

Giải pháp dự kiến điều chỉnh điện áp và dòng điện đầu ra thông qua tín hiệu PWM và điều khiển MOSFET. Các chức năng đo lường và bảo vệ cơ bản sẽ được tích hợp để phân tích hoạt động của hệ thống dưới nhiều điều kiện tải.

Chức năng dự kiến:

- Điều chỉnh điện áp đầu ra
- Giới hạn dòng điện
- Điều khiển dựa trên PWM
- Đo điện áp và dòng điện
- Giám sát nhiệt độ
- Bảo vệ ngắn mạch và quá dòng
- Hiển thị các giá trị đo quan trọng

Tôi đặc biệt quan tâm đến ảnh hưởng của tần số PWM, thay đổi tải và đặc tính đóng cắt đối với độ ổn định, hiệu suất và nhiệt lượng.

Dự án vẫn đang trong giai đoạn ý tưởng và học tập. Các khối chức năng như điều khiển PWM, đo dòng và mạch bảo vệ sẽ được thử riêng trước khi lắp ráp nguyên mẫu hoàn chỉnh.

Qua dự án này, tôi muốn đào sâu kiến thức về hệ thống nhúng, điện tử công suất và kỹ thuật đo lường thực tế.
`,"../content/vi/konzeptprojekt-energieuberwachung-mit-esp8266-und-stromsensor.md":`---
translation_id: local-post-1779960876705
language: vi
slug: y-tuong-giam-sat-nang-luong-voi-esp8266-va-cam-bien-dong
title: 'Dự án ý tưởng: Giám sát năng lượng với ESP8266 và cảm biến dòng điện'
category: Embedded Systems
image_url: /my-electronics-blog/images/posts/Energieüberwachung-main.webp
image_gallery: []
excerpt: Dự án học tập dự kiến nhằm thu thập và trực quan hóa đơn giản dữ liệu tiêu thụ điện bằng ESP8266 và cảm biến dòng điện qua Wi-Fi.
tags:
- ESP8266
- Giám sát năng lượng
- Cảm biến
- Embedded Systems
- IoT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:34:36.705Z'
external_link: ''
project_status: in_progress
sort_order: 100
---

# Dự án ý tưởng: Giám sát năng lượng với ESP8266 và cảm biến dòng điện

Đây là dự án học tập dự kiến nhằm thu thập và trực quan hóa đơn giản dữ liệu tiêu thụ điện bằng ESP8266 và cảm biến dòng điện qua Wi-Fi.

Dự án hiện đang trong giai đoạn ý tưởng và học tập. Hệ thống dự kiến sử dụng ESP8266 kết hợp cảm biến dòng ACS712.

Phần cứng dự kiến:

- Vi điều khiển ESP8266
- Cảm biến dòng ACS712
- Màn hình OLED
- Giao tiếp Wi-Fi

Chức năng dự kiến:

- Hiển thị các giá trị đo cơ bản
- Truyền dữ liệu qua Wi-Fi
- Trực quan hóa bằng dashboard
- Tìm hiểu nền tảng phân tích tiêu thụ năng lượng

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, cảm biến và giao tiếp IoT.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/konzeptprojekt-esp32-basierte-mqtt-sensoruberwachung-fur-smart-home-anwendungen.md":`---
translation_id: local-post-1779960913660
language: vi
slug: y-tuong-giam-sat-cam-bien-mqtt-voi-esp32-cho-smart-home
title: 'Dự án ý tưởng: Giám sát cảm biến MQTT bằng ESP32 cho ứng dụng Smart Home'
category: IoT
image_url: /my-electronics-blog/images/posts/SmartHome-main.webp
image_gallery: []
excerpt: Dự án học tập dự kiến phát triển nền tảng IoT đơn giản dựa trên ESP32 để thu thập và trực quan hóa dữ liệu cảm biến qua Wi-Fi và MQTT.
tags:
- ESP32
- MQTT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:35:13.660Z'
external_link: ''
project_status: in_progress
sort_order: 100
---

# Dự án ý tưởng: Giám sát cảm biến MQTT bằng ESP32 cho ứng dụng Smart Home

Dự án học tập này tập trung vào nền tảng IoT đơn giản dựa trên vi điều khiển ESP32. Mục tiêu là thu thập và trực quan hóa nhiều dữ liệu cảm biến qua Wi-Fi và MQTT.

Dự án hiện đang trong giai đoạn ý tưởng và học tập.

Phần cứng dự kiến:

- Bo mạch phát triển ESP32
- Cảm biến nhiệt độ và độ ẩm DHT22
- Mô-đun relay cho chức năng đóng cắt đơn giản
- MQTT broker như Mosquitto
- Dashboard hiển thị dữ liệu

Chức năng dự kiến:

- Giao tiếp Wi-Fi
- MQTT publish và subscribe
- Giám sát cảm biến
- Trực quan hóa bằng dashboard
- Mở rộng thêm cảm biến và cơ cấu chấp hành

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, giao tiếp MQTT và ứng dụng IoT.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/konzeptprojekt-esp32-basiertes-420ma-iot-gateway-mit-mqtt-und-rs485.md":`---
translation_id: local-post-1779960691288
language: vi
slug: y-tuong-iot-gateway-esp32-420ma-voi-mqtt-va-rs485
title: 'Dự án ý tưởng: IoT Gateway ESP32 cho tín hiệu 4-20 mA với MQTT và RS485'
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery: []
excerpt: Dự án học tập và phát triển nhằm thu nhận tín hiệu cảm biến 4-20 mA bằng ESP32, ADS1115 và MQTT để tạo một nguyên mẫu IoT công nghiệp đơn giản.
tags:
- ESP32
- MQTT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:31:31.288Z'
external_link: ''
project_status: idea
sort_order: 90
---

# Dự án ý tưởng: IoT Gateway ESP32 cho tín hiệu 4-20 mA với MQTT và RS485

Dự án học tập và phát triển này tập trung vào việc thu nhận tín hiệu cảm biến 4-20 mA bằng ESP32, ADS1115 và giao tiếp MQTT. Mục tiêu là xây dựng nguyên mẫu IoT công nghiệp đơn giản để giám sát cảm biến và trực quan hóa dữ liệu qua Home Assistant.

Dự án hiện đang trong giai đoạn ý tưởng và lập kế hoạch.

Chức năng dự kiến:

- Thu nhận tín hiệu cảm biến 4-20 mA qua ADS1115
- Giao tiếp MQTT cho ứng dụng IoT
- Hỗ trợ RS485 và Modbus RTU
- Hiển thị dữ liệu cảm biến qua Home Assistant
- Cấp nguồn cho môi trường công nghiệp 12-24 VDC

Giai đoạn đầu sử dụng nguyên mẫu nhanh với ESP32 DevKit, mô-đun ADS1115 và kết nối MQTT. Sau khi kiểm thử chức năng thành công, tôi dự kiến phát triển phiên bản PCB riêng bằng KiCad.

Công nghệ dự kiến:

- ESP32-S3
- ADS1115
- MQTT
- RS485 và Modbus RTU
- Home Assistant
- KiCad

Trạng thái hiện tại: giai đoạn ý tưởng, dự án học tập.
`,"../content/vi/konzeptprojekt-uberwachung-eines-dc-schaltnetzteils-mit-esp32-und-mqtt.md":`---
translation_id: local-post-1779960950659
language: vi
slug: y-tuong-giam-sat-bo-nguon-xung-dc-voi-esp32-va-mqtt
title: 'Dự án ý tưởng: Giám sát bộ nguồn xung DC với ESP32 và MQTT'
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/Schaltnetzteil-main.webp
image_gallery: []
excerpt: Dự án học tập dự kiến nhằm giám sát điện áp, dòng điện và nhiệt độ của bộ nguồn xung DC bằng ESP32 và giao tiếp MQTT.
tags:
- MQTT
- Bộ nguồn xung
read_time: 5 phút
published: true
created_at: '2026-05-28T09:35:50.659Z'
external_link: ''
project_status: idea
sort_order: 100
---

# Dự án ý tưởng: Giám sát bộ nguồn xung DC với ESP32 và MQTT

Dự án học tập dự kiến nhằm giám sát điện áp, dòng điện và nhiệt độ của bộ nguồn xung DC bằng ESP32 và giao tiếp MQTT.

Dự án hiện đang trong giai đoạn ý tưởng và học tập. Mục tiêu là phát triển hệ thống giám sát đơn giản dựa trên vi điều khiển ESP32, sau đó trực quan hóa các giá trị đo qua Wi-Fi và MQTT.

Phần cứng dự kiến:

- Bo mạch phát triển ESP32
- Cảm biến dòng ACS712 hoặc INA219
- Cảm biến nhiệt độ
- Màn hình OLED
- Giao tiếp Wi-Fi và MQTT

Chức năng dự kiến:

- Giám sát điện áp và dòng điện
- Giám sát nhiệt độ
- Truyền dữ liệu MQTT
- Trực quan hóa bằng dashboard
- Hiển thị trạng thái và lỗi cơ bản

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, cảm biến và giám sát năng lượng công nghiệp.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/lap-trinh-plc-cho-he-thong-nhung-cong-nghiep.md":`---
id: lap-trinh-plc-cho-he-thong-nhung-cong-nghiep
slug: lap-trinh-plc-cho-he-thong-nhung-cong-nghiep
translation_id: demo-3
language: vi
content_type: 
title: Lập trình PLC cho hệ thống nhúng công nghiệp
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Hệ thống nhúng tự động điều khiển bằng Siemens S7-300, gồm quá trình vận chuyển và nhúng tự động cùng chế độ vận hành thủ công và tự động trong TIA Portal.
tags:
- PLC
- S7300
- TIA Portal
read_time: 5 phút
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
---

# Lập trình PLC cho hệ thống nhúng công nghiệp

Dự án bao gồm phát triển và lập trình hệ thống nhúng tự động dùng cho quy trình vận chuyển và nhúng trong công nghiệp với Siemens S7-300.

Hệ thống tự động di chuyển, nâng và hạ giỏ chứa sản phẩm giữa hai bể nhúng trong khi tuân thủ các điều kiện an toàn và chuyển động đã xác định.

Bộ điều khiển được triển khai bằng CPU Siemens S7-300 trong TIA Portal. Dự án có chế độ thủ công để điều khiển từng trục và chế độ tự động hoàn toàn với chuỗi quy trình tuần tự.

Trong chế độ tự động, giỏ tự di chuyển đến từng trạm nhúng, thực hiện thời gian nhúng và chờ nhỏ giọt theo cấu hình rồi quay về vị trí ban đầu. Hệ thống cũng tích hợp cảm biến hành trình, kiểm tra an toàn, hiển thị trạng thái, điều khiển động cơ và bộ đếm sản phẩm với lịch sử dấu thời gian.

Cấu trúc phần mềm gồm nhiều khối chức năng cho chế độ vận hành, điều khiển đầu ra, điều khiển chuỗi, lịch sử sản phẩm và chẩn đoán. Biến ký hiệu, khối dữ liệu và kiểu dữ liệu có cấu trúc giúp chương trình rõ ràng hơn.

Dự án thể hiện việc triển khai thực tế tự động hóa công nghiệp với PLC, cảm biến, cơ cấu chấp hành và điều khiển tuần tự trong Siemens TIA Portal.

**Nhấn \`Mở dự án\` để xem tài liệu và tệp dự án đầy đủ.**
`,"../content/vi/mo-hinh-3d-ro-roc-trong-autocad.md":`---
id: mo-hinh-3d-ro-roc-trong-autocad
slug: mo-hinh-3d-ro-roc-trong-autocad
translation_id: local-post-1779960596593
language: vi
content_type: 
title: Mô hình 3D ròng rọc trong AutoCAD
category: Maschinenbau
image_url: /my-electronics-blog/images/posts/Flaschenzug-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Flaschenzug-1.webp
- /my-electronics-blog/images/posts/Flaschenzug-2.webp
- /my-electronics-blog/images/posts/Flaschenzug-3.webp
excerpt: Một hệ thống ròng rọc cơ khí được thiết kế hoàn chỉnh dưới dạng mô hình 3D trong AutoCAD, tập trung vào độ chính xác của từng chi tiết và cách thể hiện cơ cấu thực tế.
tags:
- AutoCAD
- 3D
- Thiết kế
read_time: 5 phút
published: true
created_at: '2026-05-28T09:29:56.593Z'
external_link: https://drive.google.com/drive/folders/1fN_hc6jaddMzTqEt0iIS4YxpiPdT8JFR?usp=drive_link
project_status: done
sort_order: 70
---

# Mô hình 3D ròng rọc trong AutoCAD

Dự án này trình bày quá trình thiết kế một hệ thống ròng rọc dưới dạng mô hình 3D trong AutoCAD. Từng chi tiết cơ khí được dựng riêng rồi lắp ghép thành một cụm hoàn chỉnh.

Mô hình bao gồm:

- Móc treo
- Bánh ròng rọc
- Tấm bên
- Chốt liên kết
- Các chi tiết đòn bẩy và dẫn hướng

Mục tiêu của dự án là nâng cao kỹ năng thiết kế CAD 3D, đồng thời hiểu rõ hơn chuyển động cơ khí và cách liên kết các chi tiết.

Các trọng tâm:

- Dựng hình 3D chính xác trong AutoCAD
- Lắp ghép các chi tiết cơ khí
- Thể hiện kỹ thuật của hệ thống ròng rọc
- Quan sát cơ cấu từ nhiều góc nhìn
- Thiết kế chi tiết sát với thực tế

Mô hình hoàn thiện có thể dùng cho thuyết trình kỹ thuật, học tập hoặc làm nền tảng cho những phát triển cơ khí tiếp theo.
`,"../content/vi/personal-way.md":`---
type: personal_way
language: vi
title: Đỗ Nguyễn Nhân - Học kỹ thuật. Tích lũy kinh nghiệm. Không ngừng phát triển.
image_1: /my-electronics-blog/images/about-1.webp
image_2: /my-electronics-blog/images/about-2.webp
---

Tôi đến Đức vào năm 2013 - không phải vì cuộc sống ở Việt Nam không tốt, mà vì tôi muốn tìm hiểu mình có thể phát triển xa đến đâu về mặt cá nhân và nghề nghiệp khi rời khỏi vùng an toàn và bắt đầu lại trong một môi trường hoàn toàn mới.

Những năm đầu tại Đức chủ yếu là khoảng thời gian làm quen, học hỏi và thích nghi. Bên cạnh các khóa học ngôn ngữ, tôi đã làm việc trong nhiều lĩnh vực khác nhau, bao gồm nhà hàng, quản lý và sau đó là tự kinh doanh.

Sau nhiều năm tích lũy kinh nghiệm nghề nghiệp đa dạng, tôi chủ động quyết định quay trở lại định hướng kỹ thuật rõ ràng hơn và phát triển lâu dài trong lĩnh vực điện tử, đo lường và tự động hóa.

Trong những năm gần đây, tôi đã tích lũy kinh nghiệm thực tế về hiệu chuẩn, tìm lỗi, kiểm thử và phát triển hệ thống điện tử, đồng thời liên tục mở rộng kiến thức kỹ thuật.

Tôi cũng đã hoàn thành các khóa đào tạo về lập trình PLC, C++/Qt, AutoCAD và EPLAN để nâng cao kiến thức và hiểu rõ hơn các lĩnh vực kỹ thuật mới.

Blog này chủ yếu dùng để ghi lại các dự án kỹ thuật, kinh nghiệm và quá trình học tập của tôi. Tại đây, tôi lưu giữ kiến thức, tập hợp ý tưởng và ghi lại sự phát triển chuyên môn theo thời gian.

Tất cả nội dung đều dựa trên dự án cá nhân, quá trình tự học và kiến thức công khai. Thông tin bảo mật, tài liệu nội bộ hoặc dự án của công ty hiện tại hay trước đây tất nhiên không được công bố.
`,"../content/vi/plc-programmierung-einer-industriellen-tauchanlage.md":`---
translation_id: demo-3
language: vi
slug: lap-trinh-plc-cho-he-thong-nhung-cong-nghiep
title: Lập trình PLC cho hệ thống nhúng công nghiệp
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Hệ thống nhúng tự động điều khiển bằng Siemens S7-300, gồm quá trình vận chuyển và nhúng tự động cùng chế độ vận hành thủ công và tự động trong TIA Portal.
tags:
- PLC
- S7300
- TIA Portal
read_time: 5 phút
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
---

# Lập trình PLC cho hệ thống nhúng công nghiệp

Dự án bao gồm phát triển và lập trình hệ thống nhúng tự động dùng cho quy trình vận chuyển và nhúng trong công nghiệp với Siemens S7-300.

Hệ thống tự động di chuyển, nâng và hạ giỏ chứa sản phẩm giữa hai bể nhúng trong khi tuân thủ các điều kiện an toàn và chuyển động đã xác định.

Bộ điều khiển được triển khai bằng CPU Siemens S7-300 trong TIA Portal. Dự án có chế độ thủ công để điều khiển từng trục và chế độ tự động hoàn toàn với chuỗi quy trình tuần tự.

Trong chế độ tự động, giỏ tự di chuyển đến từng trạm nhúng, thực hiện thời gian nhúng và chờ nhỏ giọt theo cấu hình rồi quay về vị trí ban đầu. Hệ thống cũng tích hợp cảm biến hành trình, kiểm tra an toàn, hiển thị trạng thái, điều khiển động cơ và bộ đếm sản phẩm với lịch sử dấu thời gian.

Cấu trúc phần mềm gồm nhiều khối chức năng cho chế độ vận hành, điều khiển đầu ra, điều khiển chuỗi, lịch sử sản phẩm và chẩn đoán. Biến ký hiệu, khối dữ liệu và kiểu dữ liệu có cấu trúc giúp chương trình rõ ràng hơn.

Dự án thể hiện việc triển khai thực tế tự động hóa công nghiệp với PLC, cảm biến, cơ cấu chấp hành và điều khiển tuần tự trong Siemens TIA Portal.

**Nhấn \`Mở dự án\` để xem tài liệu và tệp dự án đầy đủ.**
`,"../content/vi/portfolio-ky-thuat-va-blog-dien-tu.md":`---
id: portfolio-ky-thuat-va-blog-dien-tu
slug: portfolio-ky-thuat-va-blog-dien-tu
translation_id: technisches-portfolio-elektronik-blog
language: vi
content_type: 
title: Portfolio kỹ thuật & Blog điện tử
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/Portfolio-Blog-main.webp
image_gallery:
[]
excerpt: Phát triển nền tảng portfolio và blog cá nhân hiện đại để ghi lại dự án kỹ thuật, thử nghiệm điện tử, hệ thống nhúng, tự động hóa và quá trình phát triển nghề nghiệp.
tags:
- React
- JavaScript
- Portfolio
- Blog
- Embedded Systems
- Điện tử
- Phát triển web
read_time: 5 phút
published: true
created_at: '2026-05-28T09:30:47.159Z'
external_link: https://github.com/nguyennhando/my-electronics-blog
project_status: done
sort_order: 20
---

# Portfolio kỹ thuật & Blog điện tử

## Tổng quan dự án

Tôi tự phát triển toàn bộ website này để lưu trữ tập trung các dự án kỹ thuật, công việc điện tử, tiến trình học tập và kinh nghiệm nghề nghiệp.

Nền tảng vừa là portfolio cá nhân vừa là cơ sở kiến thức kỹ thuật cho:

- Điện tử
- Hệ thống nhúng
- IoT
- Kỹ thuật tự động hóa
- Phát triển phần mềm
- Kỹ thuật đo lường
- Tài liệu kỹ thuật

## Công nghệ sử dụng

### Frontend

- React
- JavaScript
- Framer Motion
- React Markdown
- Tailwind CSS

### Thành phần giao diện

- Biểu tượng Lucide React
- Bố cục responsive
- Hiệu ứng chuyển động
- Thư viện ảnh lightbox
- Trình soạn thảo Markdown

## Chức năng chính

### Hệ thống blog

- Báo cáo dự án kỹ thuật
- Bài viết dựa trên Markdown
- Category và tag
- Tìm kiếm
- Phân trang

### Khu vực portfolio

- Tổng quan dự án
- Hiển thị trạng thái
- Thư viện ảnh
- Liên kết dự án bên ngoài

### Trình soạn thảo Markdown riêng

Website có trình soạn thảo tích hợp để tạo bài viết mới với xem trước trực tiếp, tạo slug tự động, xuất Markdown, lưu trực tiếp và quản lý dự án.

## Giao diện người dùng

Thiết kế tập trung vào phong cách kỹ thuật hiện đại với giao diện tối, hiển thị responsive, hiệu ứng mượt và tối ưu cho điện thoại.

## Mục tiêu và kết quả

Website giúp trình bày kỹ năng kỹ thuật chuyên nghiệp và ghi lại dự án cũng như tiến trình học tập lâu dài. Kết quả là một nền tảng portfolio và blog tự phát triển, kết hợp tài liệu kỹ thuật, quản lý dự án và phát triển web hiện đại.
`,"../content/vi/quan-ly-tai-chinh-voi-phan-tich-du-lieu.md":`---
id: quan-ly-tai-chinh-voi-phan-tich-du-lieu
slug: quan-ly-tai-chinh-voi-phan-tich-du-lieu
translation_id: local-post-1779957810945
language: vi
content_type: 
title: Quản lý tài chính với phân tích dữ liệu
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Quản lý thu nhập và chi tiêu cá nhân với nhập xuất CSV, phân tích dữ liệu theo thời gian thực và giao diện đồ họa hiện đại. Mã nguồn đầy đủ có trong liên kết dự án.
tags:
- C++
- Qt 6.9
read_time: 5 phút
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Quản lý tài chính với phân tích dữ liệu

## GeldPilot - Quản lý tài chính cá nhân

GeldPilot là ứng dụng desktop hiện đại để quản lý tài chính cá nhân, được phát triển bằng C++, Qt 6 và SQLite. Phần mềm hỗ trợ theo dõi thu nhập và chi tiêu, nhập xuất CSV và phân tích dữ liệu theo thời gian thực thông qua giao diện đồ họa hiện đại.

Nút \`Mở dự án\` ở cuối trang dẫn đến toàn bộ mã nguồn.

## Tổng quan

GeldPilot là ứng dụng thân thiện để quản lý thu nhập và chi tiêu. Giao diện trực quan cho phép quản lý giao dịch, tổ chức category và tạo báo cáo tài chính chi tiết.

## Tính năng chính

- **Quản lý giao dịch:** Thêm, sửa và xóa thu nhập hoặc chi tiêu
- **Phân loại:** Sử dụng category có sẵn và category tự tạo
- **Bộ lọc thời gian:** Lọc linh hoạt theo ngày và category
- **Tổng quan tài chính:** Tự động tính thu nhập, chi tiêu và số dư
- **Trực quan hóa:** Hiển thị tài chính bằng biểu đồ cột tương tác
- **Nhập và xuất:** Trao đổi dữ liệu bằng tệp CSV
- **In báo cáo:** Tạo báo cáo chuyên nghiệp với logo công ty

## Yêu cầu hệ thống

### Yêu cầu tối thiểu

- Hệ điều hành: Windows 10 hoặc 11, macOS 10.15+, hoặc Linux Ubuntu 20.04+
- Bộ nhớ: 4 GB RAM
- Dung lượng đĩa: 100 MB
- Độ phân giải màn hình: 1024 x 768

### Khuyến nghị

- Bộ nhớ: 8 GB RAM trở lên
- Độ phân giải màn hình: 1920 x 1080 trở lên

## Cài đặt

### Phiên bản Windows đã biên dịch

1. Tải phiên bản mới nhất từ trang Releases.
2. Giải nén vào thư mục mong muốn.
3. Chạy \`GeldPilot.exe\`.

### Biên dịch từ mã nguồn

Yêu cầu:

- Qt 6.9 trở lên
- CMake 3.16 trở lên
- Trình biên dịch tương thích C++17:
  - Windows: MinGW-w64 hoặc MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ hoặc Clang 10+

Các bước biên dịch:

\`\`\`bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
\`\`\`

Khởi chạy ứng dụng:

\`\`\`bash
# Windows
./Release/GeldPilot.exe

# Linux hoặc macOS
./GeldPilot
\`\`\`

## Bắt đầu sử dụng

### Thêm giao dịch đầu tiên

1. Khởi động GeldPilot.
2. Nhập ngày, số tiền và mô tả.
3. Chọn category, ví dụ \`Lương\`.
4. Chọn loại: \`Thu nhập\` hoặc \`Chi tiêu\`.
5. Nhấn \`Giao dịch mới\`.

### Lọc dữ liệu

- Sử dụng menu chọn category.
- Đặt ngày bắt đầu và ngày kết thúc.
- Nhấn \`Lọc\` để cập nhật danh sách.

### Tạo báo cáo

- Nhấn \`Biểu đồ\` để xem trực quan.
- Dùng \`In\` để tạo báo cáo chuyên nghiệp.
- Xuất dữ liệu CSV để phân tích thêm.

## Hướng dẫn sử dụng

### Quản lý giao dịch

Khi thêm giao dịch, điền đủ các trường bắt buộc:

- Ngày: ngày giao dịch
- Số tiền: luôn nhập giá trị dương
- Mô tả: mô tả ngắn
- Category: nhóm của giao dịch
- Loại: \`Thu nhập\` hoặc \`Chi tiêu\`

Để sửa giao dịch:

1. Chọn một hàng trong bảng.
2. Dữ liệu tự động xuất hiện trong ô nhập.
3. Thực hiện thay đổi.
4. Nhấn \`Lưu\`.

Để xóa:

- Một giao dịch: chọn hàng rồi nhấn \`Xóa\`.
- Nhiều giao dịch: chọn nhiều hàng bằng \`Ctrl + Click\` rồi nhấn \`Xóa\`.

### Category

Các category có sẵn:

- Giải trí
- Lương
- Sức khỏe
- Thực phẩm
- Tiền thuê nhà
- Khác
- Giao thông
- Bảo hiểm
- Đầu tư
- Liên lạc
- Nhà ở

### Lọc và tìm kiếm

Lọc theo category:

- Chọn \`Tất cả category\` để xem toàn bộ.
- Chọn một category cụ thể để lọc danh sách.

Lọc theo khoảng thời gian:

1. Đặt ngày bắt đầu và ngày kết thúc.
2. Nhấn \`Lọc\`.

### Nhập và xuất dữ liệu

Nhập CSV:

1. Chuẩn bị tệp CSV với các cột \`ID\`, \`Ngày\`, \`Số tiền\`, \`Mô tả\`, \`Category\` và \`Loại\`.
2. Nhấn \`Nhập\`.
3. Chọn tệp CSV.

Xuất CSV:

1. Nhấn \`Xuất\`.
2. Chọn vị trí lưu và tên tệp.
3. Danh sách hiện tại trong bảng được xuất ra.

### Biểu đồ và báo cáo

Nhấn \`Biểu đồ\` để xem biểu đồ cột. Biểu đồ hiển thị category, tổng thu nhập, tổng chi tiêu và số dư với mã màu tương tác.

Để in báo cáo:

1. Mở biểu đồ.
2. Nhấn \`In\`.
3. Chọn máy in và thiết lập.
4. Ứng dụng tạo bản in chuyên nghiệp kèm logo.

## Chi tiết kỹ thuật

### Kiến trúc

- Framework GUI: Qt 6.9
- Cơ sở dữ liệu: tệp SQLite cục bộ
- Biểu đồ: Qt Charts
- Hệ thống build: CMake
- Trình biên dịch trên Windows: MinGW-w64

### Schema cơ sở dữ liệu

Bảng giao dịch:

\`\`\`sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
\`\`\`

Bảng category:

\`\`\`sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
\`\`\`

### Cấu trúc dự án

\`\`\`text
geldpilot/
  src/
    main.cpp                 Điểm khởi đầu
    mainwindow.cpp/h         Cửa sổ chính
    chartwindow.cpp/h        Cửa sổ biểu đồ
    datenbankmanager.cpp/h   Logic cơ sở dữ liệu
    centerdelegate.h         Định dạng giao diện
  ui/
    mainwindow.ui            Giao diện cửa sổ chính
    chartwindow.ui           Giao diện biểu đồ
  resources/
    icons/                   Biểu tượng ứng dụng
  CMakeLists.txt             Cấu hình build
  README.md                  Tài liệu
\`\`\`

## Phát triển

Quy ước code:

- Chuẩn C++17
- Quy ước Qt
- Tên biến tiếng Đức có mô tả rõ ràng
- Chú thích đầy đủ

Để đóng góp:

1. Fork repository.
2. Tạo feature branch.
3. Thực hiện thay đổi.
4. Kiểm thử kỹ.
5. Tạo pull request.

Các nội dung đã biết:

- Đã triển khai chọn nhiều giao dịch để xóa.
- Đã lập chỉ mục cơ sở dữ liệu để cải thiện hiệu năng.
- Chức năng sao lưu đang được lên kế hoạch.

## Hỗ trợ

Khi cần trợ giúp:

- Tài liệu: đọc toàn bộ README.
- Issues: báo lỗi trên GitHub.
- E-mail: \`support@geldpilot.de\`

Câu hỏi thường gặp:

- **Không mở được cơ sở dữ liệu:** Kiểm tra quyền ghi trong thư mục cài đặt.
- **Không hiển thị biểu đồ:** Kiểm tra Qt Charts đã được cài đặt hay chưa.
- **Nhập dữ liệu thất bại:** Kiểm tra định dạng CSV. Các cột phải được phân tách bằng dấu chấm phẩy.

## Giấy phép

Bản quyền 2025 Nguyen Nhan Do. Bảo lưu mọi quyền.  
Phiên bản: 1.0.0  
Nhà phát triển: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Sử dụng GeldPilot để kiểm soát tài chính và chủ động xây dựng tương lai tài chính của bạn.
`,"../content/vi/technisches-portfolio-elektronik-blog.md":`---
translation_id: technisches-portfolio-elektronik-blog
language: vi
slug: portfolio-ky-thuat-va-blog-dien-tu
title: Portfolio kỹ thuật & Blog điện tử
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/Portfolio-Blog-main.webp
image_gallery: []
excerpt: Phát triển nền tảng portfolio và blog cá nhân hiện đại để ghi lại dự án kỹ thuật, thử nghiệm điện tử, hệ thống nhúng, tự động hóa và quá trình phát triển nghề nghiệp.
tags:
- React
- JavaScript
- Portfolio
- Blog
- Embedded Systems
- Điện tử
- Phát triển web
read_time: 5 phút
published: true
created_at: '2026-05-28T09:30:47.159Z'
external_link: https://github.com/nguyennhando/my-electronics-blog
project_status: done
sort_order: 80
---

# Portfolio kỹ thuật & Blog điện tử

## Tổng quan dự án

Tôi tự phát triển toàn bộ website này để lưu trữ tập trung các dự án kỹ thuật, công việc điện tử, tiến trình học tập và kinh nghiệm nghề nghiệp.

Nền tảng vừa là portfolio cá nhân vừa là cơ sở kiến thức kỹ thuật cho:

- Điện tử
- Hệ thống nhúng
- IoT
- Kỹ thuật tự động hóa
- Phát triển phần mềm
- Kỹ thuật đo lường
- Tài liệu kỹ thuật

## Công nghệ sử dụng

### Frontend

- React
- JavaScript
- Framer Motion
- React Markdown
- Tailwind CSS

### Thành phần giao diện

- Biểu tượng Lucide React
- Bố cục responsive
- Hiệu ứng chuyển động
- Thư viện ảnh lightbox
- Trình soạn thảo Markdown

## Chức năng chính

### Hệ thống blog

- Báo cáo dự án kỹ thuật
- Bài viết dựa trên Markdown
- Category và tag
- Tìm kiếm
- Phân trang

### Khu vực portfolio

- Tổng quan dự án
- Hiển thị trạng thái
- Thư viện ảnh
- Liên kết dự án bên ngoài

### Trình soạn thảo Markdown riêng

Website có trình soạn thảo tích hợp để tạo bài viết mới với xem trước trực tiếp, tạo slug tự động, xuất Markdown, lưu trực tiếp và quản lý dự án.

## Giao diện người dùng

Thiết kế tập trung vào phong cách kỹ thuật hiện đại với giao diện tối, hiển thị responsive, hiệu ứng mượt và tối ưu cho điện thoại.

## Mục tiêu và kết quả

Website giúp trình bày kỹ năng kỹ thuật chuyên nghiệp và ghi lại dự án cũng như tiến trình học tập lâu dài. Kết quả là một nền tảng portfolio và blog tự phát triển, kết hợp tài liệu kỹ thuật, quản lý dự án và phát triển web hiện đại.
`,"../content/vi/truc-quan-hoa-va-tu-dong-hoa-quy-trinh-tron-cong-nghiep-voi-siemens.md":`---
id: truc-quan-hoa-va-tu-dong-hoa-quy-trinh-tron-cong-nghiep-voi-siemens
slug: truc-quan-hoa-va-tu-dong-hoa-quy-trinh-tron-cong-nghiep-voi-siemens
translation_id: local-post-1779960317991
language: vi
content_type: 
title: Trực quan hóa và tự động hóa quy trình trộn công nghiệp với Siemens WinCC
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Mischbehälter-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Mischbehälter-1.webp
- /my-electronics-blog/images/posts/Mischbehälter-2.webp
- /my-electronics-blog/images/posts/Mischbehälter-3.webp
excerpt: Phát triển hệ thống HMI công nghiệp để giám sát và điều khiển bồn trộn bằng Siemens SIMATIC WinCC Runtime Advanced, bao gồm cảm biến, van, động cơ và nhiệt độ theo thời gian thực.
tags:
- PLC
read_time: 5 phút
published: true
created_at: '2026-05-28T09:25:17.991Z'
external_link: https://drive.google.com/drive/folders/1Vrz5hK6aTVExshjDZIi92ecTgQaFo_kq
project_status: done
sort_order: 40
---

# Trực quan hóa và tự động hóa quy trình trộn công nghiệp với Siemens WinCC

Dự án bao gồm phát triển hệ thống trực quan hóa HMI hiện đại để giám sát và điều khiển bồn trộn công nghiệp bằng Siemens SIMATIC WinCC Runtime Advanced và PLC Siemens S7-1200 hoặc S7-1500.

Ứng dụng hiển thị cảm biến, van, động cơ và nhiệt độ theo thời gian thực, đồng thời hỗ trợ chế độ vận hành tự động và thủ công. Mục tiêu là điều khiển quy trình trộn công nghiệp một cách thân thiện, an toàn và hiệu quả.

Giao diện HMI cho phép người vận hành theo dõi và điều khiển các tham số quy trình theo thời gian thực. Toàn bộ quá trình trộn được thể hiện rõ ràng để dễ quan sát dòng vật liệu, hoạt động của động cơ và vị trí van. Các chức năng an toàn như dừng khẩn cấp, thông báo trạng thái và cảnh báo giúp vận hành hệ thống an toàn hơn.

Trong chế độ tự động, quy trình chạy từng bước theo chuỗi đã định nghĩa. Giá trị cảm biến được xử lý và cơ cấu chấp hành được điều khiển tự động. Trong chế độ thủ công, từng thành phần có thể được kiểm tra và điều khiển riêng, đặc biệt hữu ích khi bảo trì và chạy thử.

Dự án bao gồm:

- Giao tiếp thời gian thực giữa PLC và HMI
- Trực quan hóa quy trình và giám sát hệ thống
- Giám sát nhiệt độ và hiển thị trạng thái
- Điều khiển van và động cơ
- Chế độ tự động và thủ công
- Quản lý lỗi và cảnh báo
- Giao diện thân thiện với người dùng

Sự kết hợp giữa công nghệ PLC Siemens và WinCC Runtime Advanced tạo ra hệ thống HMI mạnh mẽ để tối ưu quy trình sản xuất và tăng độ an toàn vận hành.

Nhấn \`Mở dự án\` để xem tài liệu đầy đủ và thông tin chi tiết.
`,"../content/vi/visualisierung-und-automatisierung-eines-industriellen-mischprozesses-mit-siemen.md":`---
translation_id: local-post-1779960317991
language: vi
slug: truc-quan-hoa-va-tu-dong-hoa-quy-trinh-tron-cong-nghiep-voi-siemens
title: Trực quan hóa và tự động hóa quy trình trộn công nghiệp với Siemens WinCC
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Mischbehälter-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Mischbehälter-1.webp
- /my-electronics-blog/images/posts/Mischbehälter-2.webp
- /my-electronics-blog/images/posts/Mischbehälter-3.webp
excerpt: Phát triển hệ thống HMI công nghiệp để giám sát và điều khiển bồn trộn bằng Siemens SIMATIC WinCC Runtime Advanced, bao gồm cảm biến, van, động cơ và nhiệt độ theo thời gian thực.
tags:
- PLC
read_time: 5 phút
published: true
created_at: '2026-05-28T09:25:17.991Z'
external_link: https://drive.google.com/drive/folders/1Vrz5hK6aTVExshjDZIi92ecTgQaFo_kq
project_status: done
sort_order: 40
---

# Trực quan hóa và tự động hóa quy trình trộn công nghiệp với Siemens WinCC

Dự án bao gồm phát triển hệ thống trực quan hóa HMI hiện đại để giám sát và điều khiển bồn trộn công nghiệp bằng Siemens SIMATIC WinCC Runtime Advanced và PLC Siemens S7-1200 hoặc S7-1500.

Ứng dụng hiển thị cảm biến, van, động cơ và nhiệt độ theo thời gian thực, đồng thời hỗ trợ chế độ vận hành tự động và thủ công. Mục tiêu là điều khiển quy trình trộn công nghiệp một cách thân thiện, an toàn và hiệu quả.

Giao diện HMI cho phép người vận hành theo dõi và điều khiển các tham số quy trình theo thời gian thực. Toàn bộ quá trình trộn được thể hiện rõ ràng để dễ quan sát dòng vật liệu, hoạt động của động cơ và vị trí van. Các chức năng an toàn như dừng khẩn cấp, thông báo trạng thái và cảnh báo giúp vận hành hệ thống an toàn hơn.

Trong chế độ tự động, quy trình chạy từng bước theo chuỗi đã định nghĩa. Giá trị cảm biến được xử lý và cơ cấu chấp hành được điều khiển tự động. Trong chế độ thủ công, từng thành phần có thể được kiểm tra và điều khiển riêng, đặc biệt hữu ích khi bảo trì và chạy thử.

Dự án bao gồm:

- Giao tiếp thời gian thực giữa PLC và HMI
- Trực quan hóa quy trình và giám sát hệ thống
- Giám sát nhiệt độ và hiển thị trạng thái
- Điều khiển van và động cơ
- Chế độ tự động và thủ công
- Quản lý lỗi và cảnh báo
- Giao diện thân thiện với người dùng

Sự kết hợp giữa công nghệ PLC Siemens và WinCC Runtime Advanced tạo ra hệ thống HMI mạnh mẽ để tối ưu quy trình sản xuất và tăng độ an toàn vận hành.

Nhấn \`Mở dự án\` để xem tài liệu đầy đủ và thông tin chi tiết.
`,"../content/vi/wincc-fischertechnikmodell-automatik-und-handbetrieb-mit-hmi.md":`---
translation_id: local-post-1779960469574
language: vi
slug: wincc-mo-hinh-fischertechnik-van-hanh-tu-dong-va-thu-cong-voi-hmi
title: WinCC mô hình Fischertechnik - Vận hành tự động và thủ công với HMI
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/FischerTechnik-main.webp
image_gallery:
- /my-electronics-blog/images/posts/FischerTechnik-1.webp
excerpt: Lập trình PLC và HMI cho mô hình máy ép Fischertechnik với Siemens CPU1512C, ET200SP và TP700 Comfort Panel, bao gồm vận hành tự động, thủ công, người dùng, công thức và cảnh báo.
tags:
- WinCC
- PLC
- HMI
read_time: 5 phút
published: true
created_at: '2026-05-28T09:27:49.574Z'
external_link: https://drive.google.com/drive/folders/1XwbZqMA_neR7FqreJCQsHW4ddtIEpOKi?usp=drive_link
project_status: done
sort_order: 60
---

# WinCC mô hình Fischertechnik - Vận hành tự động và thủ công với HMI

Dự án phát triển hệ thống điều khiển PLC và HMI cho mô hình máy ép Fischertechnik bằng Siemens CPU1512C, ET200SP và TP700 Comfort Panel.

Các chức năng được triển khai:

- Chế độ vận hành tự động
- Chế độ thủ công và thiết lập
- Quản lý người dùng
- Hệ thống cảnh báo và thông báo
- Quản lý công thức
- Trực quan hóa HMI bằng WinCC

Giao tiếp được thực hiện qua Profinet. Hệ thống hiện đang trong giai đoạn hoàn thiện và tối ưu.
`,"../content/vi/wincc-mo-hinh-fischertechnik-van-hanh-tu-dong-va-thu-cong-voi-hmi.md":`---
id: wincc-mo-hinh-fischertechnik-van-hanh-tu-dong-va-thu-cong-voi-hmi
slug: wincc-mo-hinh-fischertechnik-van-hanh-tu-dong-va-thu-cong-voi-hmi
translation_id: local-post-1779960469574
language: vi
content_type: 
title: WinCC mô hình Fischertechnik - Vận hành tự động và thủ công với HMI
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/FischerTechnik-main.webp
image_gallery:
- /my-electronics-blog/images/posts/FischerTechnik-1.webp
excerpt: Lập trình PLC và HMI cho mô hình máy ép Fischertechnik với Siemens CPU1512C, ET200SP và TP700 Comfort Panel, bao gồm vận hành tự động, thủ công, người dùng, công thức và cảnh báo.
tags:
- WinCC
- PLC
- HMI
read_time: 5 phút
published: true
created_at: '2026-05-28T09:27:49.574Z'
external_link: https://drive.google.com/drive/folders/1XwbZqMA_neR7FqreJCQsHW4ddtIEpOKi?usp=drive_link
project_status: done
sort_order: 60
---

# WinCC mô hình Fischertechnik - Vận hành tự động và thủ công với HMI

Dự án phát triển hệ thống điều khiển PLC và HMI cho mô hình máy ép Fischertechnik bằng Siemens CPU1512C, ET200SP và TP700 Comfort Panel.

Các chức năng được triển khai:

- Chế độ vận hành tự động
- Chế độ thủ công và thiết lập
- Quản lý người dùng
- Hệ thống cảnh báo và thông báo
- Quản lý công thức
- Trực quan hóa HMI bằng WinCC

Giao tiếp được thực hiện qua Profinet. Hệ thống hiện đang trong giai đoạn hoàn thiện và tối ưu.
`,"../content/vi/wissensbibliothek-technische-notizen-und-analysen.md":`---
translation_id: wissensbibliothek-technische-notizen-und-analysen
language: vi
slug: thu-vien-kien-thuc-ghi-chu-va-phan-tich-ky-thuat
content_type: knowledge
title: 'Thư viện kiến thức: Ghi chú và phân tích kỹ thuật'
category: Grundlagen
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery: []
excerpt: Phần giới thiệu bộ sưu tập tài liệu học tập, phân tích mạch và nghiên cứu kỹ thuật của tôi.
tags:
- Điện tử
- Học tập
- Phân tích
read_time: 3 phút
published: true
created_at: '2026-05-31T12:00:00.000Z'
external_link: ''
project_status: done
sort_order: 1
---

# Lưu trữ kiến thức kỹ thuật có hệ thống

Khu vực này bổ sung cho danh sách dự án bằng các ghi chú học tập chi tiết hơn, phân tích kỹ thuật và nghiên cứu cá nhân. Trong khi bài viết dự án ghi lại những triển khai cụ thể, thư viện kiến thức tập trung vào từng chủ đề và mối liên hệ.

## Nội dung dự kiến

- Phân tích mạch điện tử
- Kiến thức nền tảng về linh kiện và phương pháp đo
- Tài liệu học tập về hệ thống nhúng và tự động hóa
- Ghi chú từ thử nghiệm và nghiên cứu cá nhân
- Nguồn tham khảo bên ngoài

## Cấu trúc bài viết

Bài viết được tổ chức để thông tin quan trọng luôn dễ tìm. Category, tag và chức năng tìm kiếm giúp nhanh chóng đi đến chủ đề phù hợp ngay cả khi thư viện ngày càng lớn.
`,"../content/vi/y-tuong-bo-nguon-dc-dieu-khien-pwm-co-do-luong-va-bao-ve.md":`---
id: y-tuong-bo-nguon-dc-dieu-khien-pwm-co-do-luong-va-bao-ve
slug: y-tuong-bo-nguon-dc-dieu-khien-pwm-co-do-luong-va-bao-ve
translation_id: local-post-1779960818567
language: vi
content_type: 
title: Ý tưởng bộ nguồn DC điều khiển PWM với chức năng đo lường và bảo vệ
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/DC-Netzteil-main.webp
image_gallery:
[]
excerpt: Dự án học tập và ý tưởng phát triển bộ nguồn DC dùng vi điều khiển với điều khiển PWM, giới hạn dòng điện và các chức năng bảo vệ cơ bản.
tags:
- PWM
- Bộ nguồn
- STM32
read_time: 5 phút
published: true
created_at: '2026-05-28T09:33:38.567Z'
external_link: 
project_status: idea
sort_order: 130
---

# Ý tưởng bộ nguồn DC điều khiển PWM với chức năng đo lường và bảo vệ

Đây là dự án học tập và ý tưởng phát triển bộ nguồn DC dùng vi điều khiển với điều khiển PWM, giới hạn dòng điện và các chức năng bảo vệ cơ bản.

Mục tiêu không chỉ là chế tạo một bộ nguồn DC đơn giản, mà còn hiểu thực tế về điều khiển PWM, điện tử công suất và mạch bảo vệ điện tử.

Giải pháp dự kiến điều chỉnh điện áp và dòng điện đầu ra thông qua tín hiệu PWM và điều khiển MOSFET. Các chức năng đo lường và bảo vệ cơ bản sẽ được tích hợp để phân tích hoạt động của hệ thống dưới nhiều điều kiện tải.

Chức năng dự kiến:

- Điều chỉnh điện áp đầu ra
- Giới hạn dòng điện
- Điều khiển dựa trên PWM
- Đo điện áp và dòng điện
- Giám sát nhiệt độ
- Bảo vệ ngắn mạch và quá dòng
- Hiển thị các giá trị đo quan trọng

Tôi đặc biệt quan tâm đến ảnh hưởng của tần số PWM, thay đổi tải và đặc tính đóng cắt đối với độ ổn định, hiệu suất và nhiệt lượng.

Dự án vẫn đang trong giai đoạn ý tưởng và học tập. Các khối chức năng như điều khiển PWM, đo dòng và mạch bảo vệ sẽ được thử riêng trước khi lắp ráp nguyên mẫu hoàn chỉnh.

Qua dự án này, tôi muốn đào sâu kiến thức về hệ thống nhúng, điện tử công suất và kỹ thuật đo lường thực tế.
`,"../content/vi/y-tuong-giam-sat-bo-nguon-xung-dc-voi-esp32-va-mqtt.md":`---
id: y-tuong-giam-sat-bo-nguon-xung-dc-voi-esp32-va-mqtt
slug: y-tuong-giam-sat-bo-nguon-xung-dc-voi-esp32-va-mqtt
translation_id: local-post-1779960950659
language: vi
content_type: 
title: Dự án ý tưởng: Giám sát bộ nguồn xung DC với ESP32 và MQTT
category: Elektrotechnik
image_url: /my-electronics-blog/images/posts/Schaltnetzteil-main.webp
image_gallery:
[]
excerpt: Dự án học tập dự kiến nhằm giám sát điện áp, dòng điện và nhiệt độ của bộ nguồn xung DC bằng ESP32 và giao tiếp MQTT.
tags:
- MQTT
- Bộ nguồn xung
read_time: 5 phút
published: true
created_at: '2026-05-28T09:35:50.659Z'
external_link: 
project_status: idea
sort_order: 100
---

# Dự án ý tưởng: Giám sát bộ nguồn xung DC với ESP32 và MQTT

Dự án học tập dự kiến nhằm giám sát điện áp, dòng điện và nhiệt độ của bộ nguồn xung DC bằng ESP32 và giao tiếp MQTT.

Dự án hiện đang trong giai đoạn ý tưởng và học tập. Mục tiêu là phát triển hệ thống giám sát đơn giản dựa trên vi điều khiển ESP32, sau đó trực quan hóa các giá trị đo qua Wi-Fi và MQTT.

Phần cứng dự kiến:

- Bo mạch phát triển ESP32
- Cảm biến dòng ACS712 hoặc INA219
- Cảm biến nhiệt độ
- Màn hình OLED
- Giao tiếp Wi-Fi và MQTT

Chức năng dự kiến:

- Giám sát điện áp và dòng điện
- Giám sát nhiệt độ
- Truyền dữ liệu MQTT
- Trực quan hóa bằng dashboard
- Hiển thị trạng thái và lỗi cơ bản

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, cảm biến và giám sát năng lượng công nghiệp.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/y-tuong-giam-sat-cam-bien-mqtt-voi-esp32-cho-smart-home.md":`---
id: y-tuong-giam-sat-cam-bien-mqtt-voi-esp32-cho-smart-home
slug: y-tuong-giam-sat-cam-bien-mqtt-voi-esp32-cho-smart-home
translation_id: local-post-1779960913660
language: vi
content_type: 
title: Dự án ý tưởng: Giám sát cảm biến MQTT bằng ESP32 cho ứng dụng Smart Home
category: IoT
image_url: /my-electronics-blog/images/posts/SmartHome-main.webp
image_gallery:
[]
excerpt: Dự án học tập dự kiến phát triển nền tảng IoT đơn giản dựa trên ESP32 để thu thập và trực quan hóa dữ liệu cảm biến qua Wi-Fi và MQTT.
tags:
- ESP32
- MQTT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:35:13.660Z'
external_link: 
project_status: in_progress
sort_order: 110
---

# Dự án ý tưởng: Giám sát cảm biến MQTT bằng ESP32 cho ứng dụng Smart Home

Dự án học tập này tập trung vào nền tảng IoT đơn giản dựa trên vi điều khiển ESP32. Mục tiêu là thu thập và trực quan hóa nhiều dữ liệu cảm biến qua Wi-Fi và MQTT.

Dự án hiện đang trong giai đoạn ý tưởng và học tập.

Phần cứng dự kiến:

- Bo mạch phát triển ESP32
- Cảm biến nhiệt độ và độ ẩm DHT22
- Mô-đun relay cho chức năng đóng cắt đơn giản
- MQTT broker như Mosquitto
- Dashboard hiển thị dữ liệu

Chức năng dự kiến:

- Giao tiếp Wi-Fi
- MQTT publish và subscribe
- Giám sát cảm biến
- Trực quan hóa bằng dashboard
- Mở rộng thêm cảm biến và cơ cấu chấp hành

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, giao tiếp MQTT và ứng dụng IoT.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/y-tuong-giam-sat-nang-luong-voi-esp8266-va-cam-bien-dong.md":`---
id: y-tuong-giam-sat-nang-luong-voi-esp8266-va-cam-bien-dong
slug: y-tuong-giam-sat-nang-luong-voi-esp8266-va-cam-bien-dong
translation_id: local-post-1779960876705
language: vi
content_type: 
title: Dự án ý tưởng: Giám sát năng lượng với ESP8266 và cảm biến dòng điện
category: Embedded Systems
image_url: /my-electronics-blog/images/posts/Energieüberwachung-main.webp
image_gallery:
[]
excerpt: Dự án học tập dự kiến nhằm thu thập và trực quan hóa đơn giản dữ liệu tiêu thụ điện bằng ESP8266 và cảm biến dòng điện qua Wi-Fi.
tags:
- ESP8266
- Giám sát năng lượng
- Cảm biến
- Embedded Systems
- IoT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:34:36.705Z'
external_link: 
project_status: in_progress
sort_order: 120
---

# Dự án ý tưởng: Giám sát năng lượng với ESP8266 và cảm biến dòng điện

Đây là dự án học tập dự kiến nhằm thu thập và trực quan hóa đơn giản dữ liệu tiêu thụ điện bằng ESP8266 và cảm biến dòng điện qua Wi-Fi.

Dự án hiện đang trong giai đoạn ý tưởng và học tập. Hệ thống dự kiến sử dụng ESP8266 kết hợp cảm biến dòng ACS712.

Phần cứng dự kiến:

- Vi điều khiển ESP8266
- Cảm biến dòng ACS712
- Màn hình OLED
- Giao tiếp Wi-Fi

Chức năng dự kiến:

- Hiển thị các giá trị đo cơ bản
- Truyền dữ liệu qua Wi-Fi
- Trực quan hóa bằng dashboard
- Tìm hiểu nền tảng phân tích tiêu thụ năng lượng

Dự án giúp tôi đào sâu kiến thức về hệ thống nhúng, cảm biến và giao tiếp IoT.

Trạng thái hiện tại: dự án ý tưởng, đang lên kế hoạch.
`,"../content/vi/y-tuong-iot-gateway-esp32-420ma-voi-mqtt-va-rs485.md":`---
id: y-tuong-iot-gateway-esp32-420ma-voi-mqtt-va-rs485
slug: y-tuong-iot-gateway-esp32-420ma-voi-mqtt-va-rs485
translation_id: local-post-1779960691288
language: vi
content_type: 
title: Dự án ý tưởng: IoT Gateway ESP32 cho tín hiệu 4-20 mA với MQTT và RS485
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery:
[]
excerpt: Dự án học tập và phát triển nhằm thu nhận tín hiệu cảm biến 4-20 mA bằng ESP32, ADS1115 và MQTT để tạo một nguyên mẫu IoT công nghiệp đơn giản.
tags:
- ESP32
- MQTT
read_time: 5 phút
published: true
created_at: '2026-05-28T09:31:31.288Z'
external_link: 
project_status: idea
sort_order: 90
---

# Dự án ý tưởng: IoT Gateway ESP32 cho tín hiệu 4-20 mA với MQTT và RS485

Dự án học tập và phát triển này tập trung vào việc thu nhận tín hiệu cảm biến 4-20 mA bằng ESP32, ADS1115 và giao tiếp MQTT. Mục tiêu là xây dựng nguyên mẫu IoT công nghiệp đơn giản để giám sát cảm biến và trực quan hóa dữ liệu qua Home Assistant.

Dự án hiện đang trong giai đoạn ý tưởng và lập kế hoạch.

Chức năng dự kiến:

- Thu nhận tín hiệu cảm biến 4-20 mA qua ADS1115
- Giao tiếp MQTT cho ứng dụng IoT
- Hỗ trợ RS485 và Modbus RTU
- Hiển thị dữ liệu cảm biến qua Home Assistant
- Cấp nguồn cho môi trường công nghiệp 12-24 VDC

Giai đoạn đầu sử dụng nguyên mẫu nhanh với ESP32 DevKit, mô-đun ADS1115 và kết nối MQTT. Sau khi kiểm thử chức năng thành công, tôi dự kiến phát triển phiên bản PCB riêng bằng KiCad.

Công nghệ dự kiến:

- ESP32-S3
- ADS1115
- MQTT
- RS485 và Modbus RTU
- Home Assistant
- KiCad

Trạng thái hiện tại: giai đoạn ý tưởng, dự án học tập.
`,"../content/voice-transcriber-privacy-policy.md":`---
id: voice-transcriber-privacy-policy
slug: voice-transcriber-privacy-policy
translation_id: voice-transcriber-privacy-policy
language: en
content_type: project
title: Voice Transcriber Privacy Policy
category: Software
image_url: 
image_gallery:
[]
excerpt: Privacy policy for Voice Transcriber desktop application.
tags:
- Legal
read_time: 5 Min.
published: true
created_at: '2026-06-12T21:50:19.939Z'
external_link: 
project_status: done
sort_order: 100
---

# Privacy Policy

Last updated: June 2026

Voice Transcriber is an offline desktop application for audio and video transcription.

## Data Collection

Voice Transcriber does not collect, store, transmit, or share personal data.

## Audio and Video Files

All audio and video processing is performed locally on the user's device.

Files selected by the user are never uploaded to external servers.

## User Accounts

Voice Transcriber does not require user registration or user accounts.

## Analytics

Voice Transcriber does not use analytics, tracking technologies, or advertising services.

## Third-Party Services

The application does not transmit user content to third-party services.

## Contact

Developer: Nguyen Nhan Do

Email: nguyennhan.do@outlook.de
`}),p_=e=>Array.isArray(e)?e:e?String(e).split(`,`).map(e=>e.trim()).filter(Boolean):[],m_=e=>{let t=String(e||``).trim();return t===`true`?!0:t===`false`?!1:t===`null`?null:t===``?``:t.replace(/^["']|["']$/g,``)},h_=e=>{let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};let n={},r=t[1].split(/\r?\n/),i=null;for(let e of r){if(!e.trim())continue;let t=e.match(/^\s*-\s+(.*)$/);if(t&&i){Array.isArray(n[i])||(n[i]=[]),n[i].push(m_(t[1]));continue}if(/^\s+/.test(e)&&i&&!Array.isArray(n[i])){n[i]=`${n[i]||``} ${m_(e)}`.trim();continue}let r=e.indexOf(`:`);if(r===-1)continue;let a=e.slice(0,r).trim(),o=e.slice(r+1).trim();i=a,o===``?n[a]=``:o===`[]`?n[a]=[]:n[a]=m_(o)}return{data:n,content:t[2].trim()}},g_=Object.entries(f_).map(([e,t])=>{let{data:n,content:r}=h_(t),i=n.slug||e.split(`/`).pop().replace(/\.md$/,``),a=e.match(/\/content\/(de|en|vi)\//)?.[1],o=n.language||a||`de`,s=n.translation_id||n.id||i;return{...n,id:s,slug:i,language:o,translation_id:s,source_path:e.replace(`../content/`,``),content:r,image_gallery:p_(n.image_gallery),tags:p_(n.tags),published:n.published!==!1,external_link:n.external_link||null,created_at:n.created_at||new Date().toISOString(),sort_order:Number.isFinite(Number(n.sort_order))?Number(n.sort_order):100}}),__=g_.filter(e=>e.type===`personal_way`),v_=__.find(e=>e.language===`de`)||__[0],y_=g_.filter(e=>e.type===`home_content`),b_=g_.find(e=>e.type===`site_settings`),x_=g_.find(e=>e.type===`gallery_settings`),S_=(e,t=`de`)=>e.find(e=>e.language===t)||e.find(e=>e.language===`de`)||e[0],C_=(e=`de`)=>S_(__,e),w_=(e=`de`)=>S_(y_,e),T_=(()=>{if(!x_?.content)return[];try{let e=JSON.parse(x_.content);return Array.isArray(e)?e.filter(e=>typeof e==`string`&&e.trim()):[]}catch{return[]}})(),E_=g_.filter(e=>![`personal_way`,`home_content`,`site_settings`,`gallery_settings`].includes(e.type)).sort((e,t)=>{let n=Number.isFinite(Number(e.sort_order))?Number(e.sort_order):100,r=Number.isFinite(Number(t.sort_order))?Number(t.sort_order):100;return n===r?new Date(t.created_at||0)-new Date(e.created_at||0):n-r}),D_=(e,t)=>[...new Set(e.filter(e=>e.translation_id===t).map(e=>e.language))],O_=(e=`de`)=>{let t=E_.filter(e=>e.published!==!1);return[...new Set(t.map(e=>e.translation_id))].map(n=>{let r=t.filter(e=>e.translation_id===n),i=r.find(t=>t.language===e)||r.find(e=>e.language===`de`)||r[0];return{...i,id:n,available_languages:D_(t,n),requested_language:e,is_translation_fallback:i.language!==e}}).sort((e,t)=>{let n=Number.isFinite(Number(e.sort_order))?Number(e.sort_order):100,r=Number.isFinite(Number(t.sort_order))?Number(t.sort_order):100;return n===r?new Date(t.created_at||0)-new Date(e.created_at||0):n-r})},k_=e=>D_(E_,e);O_(`de`).filter(e=>e.content_type===`knowledge`),O_(`de`).filter(e=>e.content_type!==`knowledge`);var A_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),j_=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),M_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),N_=e=>{let t=M_(e);return t.charAt(0).toUpperCase()+t.slice(1)},P_={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},F_=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},I_=(0,C.createContext)({}),L_=()=>(0,C.useContext)(I_),R_=(0,C.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=L_()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,C.createElement)(`svg`,{ref:c,...P_,width:t??l??P_.width,height:t??l??P_.height,stroke:e??f,strokeWidth:m,className:A_(`lucide`,p,i),...!a&&!F_(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,C.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),$=(e,t)=>{let n=(0,C.forwardRef)(({className:n,...r},i)=>(0,C.createElement)(R_,{ref:i,iconNode:t,className:A_(`lucide-${j_(N_(e))}`,`lucide-${e}`,n),...r}));return n.displayName=N_(e),n},z_=$(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),B_=$(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),V_=$(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),H_=$(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),U_=$(`calendar-days`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M16 18h.01`,key:`kzsmim`}]]),W_=$(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),G_=$(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),K_=$(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),q_=$(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),J_=$(`circuit-board`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M11 9h4a2 2 0 0 0 2-2V3`,key:`1ve2rv`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`M7 21v-4a2 2 0 0 1 2-2h4`,key:`1fwkro`}],[`circle`,{cx:`15`,cy:`15`,r:`2`,key:`3i40o0`}]]),Y_=$(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),X_=$(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),Z_=$(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),Q_=$(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),$_=$(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),ev=$(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),tv=$(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),nv=$(`gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),rv=$(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),iv=$(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),av=$(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),ov=$(`key-round`,[[`path`,{d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,key:`1s6t7t`}],[`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`w0ekpg`}]]),sv=$(`library`,[[`path`,{d:`m16 6 4 14`,key:`ji33uf`}],[`path`,{d:`M12 6v14`,key:`1n7gus`}],[`path`,{d:`M8 8v12`,key:`1gg7y9`}],[`path`,{d:`M4 4v16`,key:`6qkkli`}]]),cv=$(`lock-keyhole`,[[`circle`,{cx:`12`,cy:`16`,r:`1`,key:`1au0dj`}],[`rect`,{x:`3`,y:`10`,width:`18`,height:`12`,rx:`2`,key:`6s8ecr`}],[`path`,{d:`M7 10V7a5 5 0 0 1 10 0v3`,key:`1pqi11`}]]),lv=$(`log-in`,[[`path`,{d:`m10 17 5-5-5-5`,key:`1bsop3`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,key:`u53s6r`}]]),uv=$(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),dv=$(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),fv=$(`monitor-smartphone`,[[`path`,{d:`M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8`,key:`10dyio`}],[`path`,{d:`M10 19v-3.96 3.15`,key:`1irgej`}],[`path`,{d:`M7 19h5`,key:`qswx4l`}],[`rect`,{width:`6`,height:`10`,x:`16`,y:`12`,rx:`2`,key:`1egngj`}]]),pv=$(`pencil`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]),mv=$(`radio-tower`,[[`path`,{d:`M4.9 16.1C1 12.2 1 5.8 4.9 1.9`,key:`s0qx1y`}],[`path`,{d:`M7.8 4.7a6.14 6.14 0 0 0-.8 7.5`,key:`1idnkw`}],[`circle`,{cx:`12`,cy:`9`,r:`2`,key:`1092wv`}],[`path`,{d:`M16.2 4.8c2 2 2.26 5.11.8 7.47`,key:`ojru2q`}],[`path`,{d:`M19.1 1.9a9.96 9.96 0 0 1 0 14.1`,key:`rhi7fg`}],[`path`,{d:`M9.5 18h5`,key:`mfy3pd`}],[`path`,{d:`m8 22 4-11 4 11`,key:`25yftu`}]]),hv=$(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),gv=$(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),_v=$(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),vv=$(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),yv=$(`workflow`,[[`rect`,{width:`8`,height:`8`,x:`3`,y:`3`,rx:`2`,key:`by2w9f`}],[`path`,{d:`M7 11v4a2 2 0 0 0 2 2h4`,key:`xkn7yn`}],[`rect`,{width:`8`,height:`8`,x:`13`,y:`13`,rx:`2`,key:`1cgmvn`}]]),bv=$(`wrench`,[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]),xv=$(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Sv=5e3,Cv=[`de`,`en`,`vi`],wv={de:{tagline:`Technik · Entwicklung · Lernen`,gallery:`Galerie`,contact:`Kontakt`,knowledge:`Wissen & Forschung`,projects:`Projekte`,discover:`Projekte entdecken`,openProject:`Projekt öffnen`,readPost:`Beitrag lesen`,search:`Suchen...`,all:`Alle`,noPosts:`Keine Beiträge gefunden.`,technicalBlog:`Technik Blog`,blogTitle:`Elektronikprojekte & Dokumentationen`,projectImages:`Projektbilder`,enlarge:`Vergrößern`,image:`Bild`,previous:`← Vorherige`,next:`Nächste →`,page:`Seite`,of:`von`,location:`Standort`,focus:`Schwerpunkt`,knowledgeLibrary:`Wissensbibliothek`,knowledgeTitle:`Wissen, Lernmaterialien & Forschung`,knowledgeIntro:`Technische Notizen, Schaltungsanalysen, Lernunterlagen und eigene Untersuchungen - strukturiert gesammelt und gut durchsuchbar.`,knowledgeNotice:`Hinweis zur Wissensbibliothek`,knowledgeSearch:`Analyse, Bauteil oder Thema suchen...`,allTopics:`Alle Themen`,selectedPost:`Ausgewählter Beitrag`,archive:`Archiv`,morePosts:`Weitere Beiträge`,posts:`Beiträge`,backKnowledge:`Zurück zur Wissensbibliothek`,externalSource:`Externe Quelle öffnen`,backBlog:`Zurück zum Blog`,heroTitle:`Technik. Dokumentation. Entwicklung.`,heroText:`Diese Website habe ich selbst entwickelt, um technische Projekte, Lernfortschritte und praktische Erfahrungen im Bereich Elektronik, Embedded Systems, Messtechnik und technischer Softwareentwicklung zu dokumentieren.`,transparency:`Transparenz`,transparencyTitle:`Projektinformationen & Transparenz`,transparencyText:`Die auf dieser Website gezeigten Fotos von Laborumgebungen, technischen Arbeitsplätzen und elektronischen Geräten dienen ausschließlich der Veranschaulichung meiner technischen Interessen und praktischen Erfahrungen.`,transparencyStrong:`Sie zeigen weder meinen tatsächlichen Arbeitsplatz noch interne Bereiche oder reale Arbeitsumgebungen eines Unternehmens.`,personalWay:`Persönlicher Weg`,importantNotice:`Wichtiger Hinweis`,importantTitle:`Wichtiger Hinweis zu meinen Projekten`,warningOne:`Projekte mit der Kennzeichnung „Konzept“ befinden sich noch in der Ideen- bzw. Konzeptphase und wurden bisher noch nicht praktisch umgesetzt.`,warningTwo:`Alle anderen Projekte können über „Beitrag lesen“ geöffnet werden. Am Ende der jeweiligen Projektseite befindet sich die Schaltfläche „Zum Projekt“ mit projektbezogenen Dateien.`,collaborationTitle:`Zusammenarbeit an modernen Elektronikprojekten.`,collaborationText:`Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.`,privacy:`Datenschutz`,legalNotice:`Impressum`,back:`Zurück`,country:`Deutschland`,knowledgeNoticeParagraphs:[`Viele Grundlagen und technische Informationen in diesem Bereich sind bereits in Fachbüchern, Dokumentationen oder anderen Quellen verfügbar.`,`Der Schwerpunkt dieser Wissensbibliothek liegt daher nicht nur auf der Sammlung von Lernmaterialien. Ich möchte vor allem Themen genauer analysieren, die aus meiner Sicht an anderen Stellen nicht immer verständlich oder ausreichend nachvollziehbar erklärt werden.`,`Die Beiträge spiegeln meinen persönlichen Lernprozess und mein aktuelles technisches Verständnis wider. Sie sollen Zusammenhänge Schritt für Schritt greifbarer machen und zugleich als Grundlage für weitere Untersuchungen dienen.`],noKnowledge:`Noch keine passenden Beiträge`,noKnowledgeText:`Neue Lernnotizen und Analysen werden hier nach und nach ergänzt.`,footer:`© 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.`,conceptProject:`Konzeptprojekt – noch nicht umgesetzt`,noProjectLink:`Kein Projektlink hinterlegt`,heroBadge:`Elektrokonstruktion · Prüftechnik · Software`,docs:`Dokumente`,sourceCode:`Quellcode`,focusValue:`IoT · Automatisierung`,tools:`Werkzeuge`,toolsValue:`SPS · AutoCAD · EPLAN · C++ · Qt`,translationFallbackShort:`Deutsch`,translationFallback:`Dieser Beitrag ist noch nicht in der gewählten Sprache verfügbar. Die deutsche Version wird angezeigt.`},en:{tagline:`Technology · Development · Learning`,gallery:`Gallery`,contact:`Contact`,knowledge:`Knowledge & Research`,projects:`Projects`,discover:`Explore projects`,openProject:`Open project`,readPost:`Read article`,search:`Search...`,all:`All`,noPosts:`No articles found.`,technicalBlog:`Technical Blog`,blogTitle:`Electronics Projects & Documentation`,projectImages:`Gallery Images`,enlarge:`Enlarge`,image:`Image`,previous:`← Previous`,next:`Next →`,page:`Page`,of:`of`,location:`Location`,focus:`Focus`,knowledgeLibrary:`Knowledge Library`,knowledgeTitle:`Knowledge, Learning Materials & Research`,knowledgeIntro:`Technical notes, circuit analyses, learning materials and personal research - structured and easy to search.`,knowledgeNotice:`About this knowledge library`,knowledgeSearch:`Search for an analysis, component or topic...`,allTopics:`All topics`,selectedPost:`Featured article`,archive:`Archive`,morePosts:`More articles`,posts:`articles`,backKnowledge:`Back to the knowledge library`,externalSource:`Open external source`,backBlog:`Back to the blog`,heroTitle:`Technology. Documentation. Development.`,heroText:`I built this website to document technical projects, learning progress and practical experience in electronics, embedded systems, measurement technology and technical software development.`,transparency:`Transparency`,transparencyTitle:`Project Information & Transparency`,transparencyText:`The photos of laboratory environments, technical workspaces and electronic devices shown on this website are solely intended to illustrate my technical interests and practical experience.`,transparencyStrong:`They do not show my actual workplace, internal areas or real working environments of any company.`,personalWay:`Personal Journey`,importantNotice:`Important Notice`,importantTitle:`Important notice about my projects`,warningOne:`Projects marked as “Concept” are still in the idea or concept phase and have not yet been implemented in practice.`,warningTwo:`All other projects can be opened via “Read article”. At the end of each project page, the “Open project” button provides project-related files.`,collaborationTitle:`Collaboration on modern electronics projects.`,collaborationText:`Are you looking for support with embedded systems, sensors, robotics or industrial automation? Contact me for technical collaboration or individual developments.`,privacy:`Privacy`,legalNotice:`Legal Notice`,back:`Back`,country:`Germany`,knowledgeNoticeParagraphs:[`Many fundamentals and technical details in this section are already available in textbooks, documentation or other sources.`,`The focus of this knowledge library is therefore not merely collecting learning material. I especially want to analyse topics that, from my perspective, are not always explained clearly or comprehensibly elsewhere.`,`The articles reflect my personal learning process and my current technical understanding. They aim to make connections easier to grasp step by step and provide a basis for further investigation.`],noKnowledge:`No matching articles yet`,noKnowledgeText:`New learning notes and analyses will gradually be added here.`,footer:`© 2026 ElektronikLab — Modern electronics and automation projects.`,conceptProject:`Concept project – not yet implemented`,noProjectLink:`No project link provided`,heroBadge:`Electrical Design · Testing · Software`,docs:`Documents`,sourceCode:`Source Code`,focusValue:`IoT · Automation`,tools:`Tools`,toolsValue:`PLC · AutoCAD · EPLAN · C++ · Qt`,translationFallbackShort:`German version`,translationFallback:`This article is not yet available in the selected language. The German version is shown.`},vi:{tagline:`Kỹ thuật · Phát triển · Học hỏi`,gallery:`Thư viện ảnh`,contact:`Liên hệ`,knowledge:`Kiến thức & Nghiên cứu`,projects:`Dự án`,discover:`Khám phá dự án`,openProject:`Mở dự án`,readPost:`Đọc bài viết`,search:`Tìm kiếm...`,all:`Tất cả`,noPosts:`Không tìm thấy bài viết.`,technicalBlog:`Blog Kỹ thuật`,blogTitle:`Dự án Điện tử & Tài liệu`,projectImages:`Hình ảnh`,enlarge:`Phóng to`,image:`Ảnh`,previous:`← Trước`,next:`Tiếp →`,page:`Trang`,of:`trên`,location:`Vị trí`,focus:`Trọng tâm`,knowledgeLibrary:`Thư viện Kiến thức`,knowledgeTitle:`Kiến thức, Tài liệu học tập & Nghiên cứu`,knowledgeIntro:`Ghi chú kỹ thuật, phân tích mạch, tài liệu học tập và nghiên cứu cá nhân - được sắp xếp rõ ràng và dễ tìm kiếm.`,knowledgeNotice:`Lưu ý về thư viện kiến thức`,knowledgeSearch:`Tìm phân tích, linh kiện hoặc chủ đề...`,allTopics:`Tất cả chủ đề`,selectedPost:`Bài viết nổi bật`,archive:`Lưu trữ`,morePosts:`Các bài viết khác`,posts:`bài viết`,backKnowledge:`Quay lại thư viện kiến thức`,externalSource:`Mở nguồn bên ngoài`,backBlog:`Quay lại blog`,heroTitle:`Kỹ thuật. Tài liệu. Phát triển.`,heroText:`Tôi tự xây dựng website này để ghi lại các dự án kỹ thuật, quá trình học tập và kinh nghiệm thực tế trong lĩnh vực điện tử, hệ thống nhúng, đo lường và phát triển phần mềm kỹ thuật.`,transparency:`Minh bạch`,transparencyTitle:`Thông tin dự án & Minh bạch`,transparencyText:`Các hình ảnh về phòng thí nghiệm, không gian làm việc kỹ thuật và thiết bị điện tử trên website này chỉ nhằm minh họa cho sở thích kỹ thuật và kinh nghiệm thực hành của tôi.`,transparencyStrong:`Chúng không thể hiện nơi làm việc thực tế, khu vực nội bộ hay môi trường làm việc thật của bất kỳ doanh nghiệp nào.`,personalWay:`Hành trình cá nhân`,importantNotice:`Lưu ý quan trọng`,importantTitle:`Lưu ý quan trọng về các dự án của tôi`,warningOne:`Các dự án có nhãn “Ý tưởng” vẫn đang ở giai đoạn ý tưởng hoặc khái niệm và chưa được triển khai thực tế.`,warningTwo:`Các dự án khác có thể được mở bằng nút “Đọc bài viết”. Cuối mỗi trang dự án có nút “Mở dự án” với các tệp liên quan.`,collaborationTitle:`Hợp tác trong các dự án điện tử hiện đại.`,collaborationText:`Bạn cần hỗ trợ về hệ thống nhúng, cảm biến, robot hoặc tự động hóa công nghiệp? Hãy liên hệ với tôi để hợp tác kỹ thuật hoặc phát triển giải pháp riêng.`,privacy:`Quyền riêng tư`,legalNotice:`Thông tin pháp lý`,back:`Quay lại`,country:`Đức`,knowledgeNoticeParagraphs:[`Nhiều kiến thức nền tảng và thông tin kỹ thuật trong khu vực này đã có trong sách chuyên ngành, tài liệu hoặc các nguồn khác.`,`Vì vậy, trọng tâm của thư viện kiến thức không chỉ là tập hợp tài liệu học tập. Tôi muốn phân tích kỹ hơn những chủ đề mà theo góc nhìn của mình chưa được giải thích thật sự rõ ràng hoặc dễ hiểu ở những nơi khác.`,`Các bài viết phản ánh quá trình học tập và hiểu biết kỹ thuật hiện tại của tôi. Mục tiêu là làm rõ các mối liên hệ từng bước và tạo nền tảng cho những nghiên cứu tiếp theo.`],noKnowledge:`Chưa có bài viết phù hợp`,noKnowledgeText:`Các ghi chú học tập và phân tích mới sẽ được bổ sung dần tại đây.`,footer:`© 2026 ElektronikLab — Các dự án điện tử và tự động hóa hiện đại.`,conceptProject:`Dự án ý tưởng – chưa được triển khai`,noProjectLink:`Chưa có liên kết dự án`,heroBadge:`Thiết kế điện · Kiểm thử · Phần mềm`,docs:`Tài liệu`,sourceCode:`Mã nguồn`,focusValue:`IoT · Tự động hóa`,tools:`Công cụ`,toolsValue:`PLC · AutoCAD · EPLAN · C++ · Qt`,translationFallbackShort:`Bản tiếng Đức`,translationFallback:`Bài viết này chưa có bản dịch theo ngôn ngữ đã chọn. Website đang hiển thị bản tiếng Đức.`}},Tv=e=>{let t=wv[e]||wv.de,n=w_(e);return n?{...t,heroBadge:n.hero_badge,heroTitle:n.hero_title,heroText:n.hero_text,transparencyTitle:n.transparency_title,transparencyText:n.transparency_text,transparencyStrong:n.transparency_strong,warningOne:n.warning_one,warningTwo:n.warning_two,collaborationTitle:n.collaboration_title,collaborationText:n.collaboration_text}:t},Ev=[`/my-electronics-blog/images/galerie/Dampfmaschine-main.webp`,`/my-electronics-blog/images/galerie/finanzmanager-main.webp`,`/my-electronics-blog/images/galerie/Mischbehälter-main.webp`,`/my-electronics-blog/images/galerie/Flaschenzug-main.webp`,`/my-electronics-blog/images/galerie/Tauchanlage-main.webp`],Dv=`electronics-blog-admin-auth-v1`,Ov=`electronics-blog-admin-session-v1`,kv=`electronics-blog-github-token-v1`,Av=`nguyennhando`,jv=`my-electronics-blog`,Mv=`main`,Nv=e=>Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``),Pv=()=>{let e=new Uint8Array(16);return window.crypto.getRandomValues(e),Nv(e)},Fv=()=>{let e=new Uint8Array(9);return window.crypto.getRandomValues(e),`ADMIN-${Nv(e).toUpperCase().match(/.{1,6}/g).join(`-`)}`},Iv=async(e,t)=>{let n=new TextEncoder().encode(`${t}:${e}`),r=await window.crypto.subtle.digest(`SHA-256`,n);return Nv(new Uint8Array(r))},Lv=()=>{try{return JSON.parse(window.localStorage.getItem(Dv)||`null`)}catch{return null}},Rv=e=>{window.localStorage.setItem(Dv,JSON.stringify(e))},zv=e=>{e?window.localStorage.setItem(Ov,`active`):window.localStorage.removeItem(Ov)},Bv=e=>{let t=new TextEncoder().encode(e),n=``,r=32768;for(let e=0;e<t.length;e+=r)n+=String.fromCharCode(...t.subarray(e,e+r));return btoa(n)},Vv=e=>e.split(`/`).map(encodeURIComponent).join(`/`),Hv=e=>`src/content/${e.directory?`${e.directory}/`:``}${e.filename}`,Uv={de:{title:`Admin Login`,intro:`Nur Admins dürfen sich anmelden. Wenn Sie kein Admin sind, kehren Sie bitte zur Startseite zurück.`,notice:`Diese Anmeldung wird lokal in Ihrem Browser gespeichert. Auf GitHub Pages kann der Admin-Editor die Oberfläche öffnen, aber ohne Backend keine Dateien automatisch nach GitHub schreiben.`,backBlog:`Zurück zum Blog`,recoveryCode:`Wiederherstellungscode`,saveRecovery:`Bitte speichern Sie diesen Code, falls Sie Ihr Passwort vergessen.`,enterAdmin:`Admin öffnen`,firstSetup:`Ersteinrichtung`,forgotPassword:`Passwort vergessen`,adminAuth:`Admin-Prüfung`,createPasswordTitle:`Admin-Passwort erstellen`,resetPasswordTitle:`Wiederherstellungscode eingeben und Passwort neu setzen`,loginTitle:`Passwort eingeben, um den Editor zu oeffnen`,password:`Passwort`,recoveryCodeLabel:`Wiederherstellungscode`,newPassword:`Neues Passwort`,confirmPassword:`Passwort wiederholen`,createPassword:`Passwort erstellen`,resetPassword:`Passwort neu setzen`,login:`Anmelden`,backLogin:`Zurück zur Anmeldung`,forgot:`Passwort vergessen`,resetLocal:`Lokale Konfiguration loeschen`,passwordTooShort:`Das Passwort muss mindestens 8 Zeichen lang sein.`,confirmMismatch:`Die Passwortbestätigung stimmt nicht überein.`,setupDone:`Admin-Passwort erstellt. Bitte speichern Sie den Wiederherstellungscode unten.`,wrongPassword:`Falsches Passwort. Nur Admins duerfen sich anmelden.`,newPasswordTooShort:`Das neue Passwort muss mindestens 8 Zeichen lang sein.`,wrongRecovery:`Der Wiederherstellungscode ist nicht korrekt.`,passwordChanged:`Passwort geändert. Bitte speichern Sie den neuen Wiederherstellungscode.`,localReset:`Admin-Konfiguration in diesem Browser gelöscht. Bitte erstellen Sie ein neues Passwort.`},en:{title:`Admin Login`,intro:`Only admins are allowed to sign in. If you are not an admin, please return to the home page.`,notice:`This login is stored locally in your browser. On GitHub Pages, the admin editor can open the interface, but cannot automatically write files to GitHub without a backend.`,backBlog:`Back to Blog`,recoveryCode:`Recovery Code`,saveRecovery:`Please save this code in case you forget your password.`,enterAdmin:`Open admin`,firstSetup:`First setup`,forgotPassword:`Forgot password`,adminAuth:`Admin authentication`,createPasswordTitle:`Create an admin password`,resetPasswordTitle:`Enter your recovery code to reset the password`,loginTitle:`Enter your password to open the editor`,password:`Password`,recoveryCodeLabel:`Recovery code`,newPassword:`New password`,confirmPassword:`Confirm password`,createPassword:`Create password`,resetPassword:`Reset password`,login:`Sign in`,backLogin:`Back to sign in`,forgot:`Forgot password`,resetLocal:`Clear local setup`,passwordTooShort:`Password must be at least 8 characters.`,confirmMismatch:`Password confirmation does not match.`,setupDone:`Admin password created. Please save the recovery code below.`,wrongPassword:`Wrong password. Only admins are allowed to sign in.`,newPasswordTooShort:`New password must be at least 8 characters.`,wrongRecovery:`The recovery code is not correct.`,passwordChanged:`Password changed. Please save the new recovery code.`,localReset:`Admin setup was cleared in this browser. Please create a new password.`},vi:{title:`Đăng nhập Admin`,intro:`Chỉ admin mới được quyền đăng nhập. Nếu bạn không phải admin, vui lòng quay lại trang chủ.`,notice:`Đăng nhập này được lưu cục bộ trên trình duyệt. Trên GitHub Pages, admin editor có thể mở giao diện nhưng chưa thể tự động ghi file lên GitHub nếu chưa có backend.`,backBlog:`Quay lại Blog`,recoveryCode:`Mã khôi phục`,saveRecovery:`Hãy lưu mã này để dùng khi quên mật khẩu.`,enterAdmin:`Vào admin`,firstSetup:`Thiết lập lần đầu`,forgotPassword:`Quên mật khẩu`,adminAuth:`Xác thực admin`,createPasswordTitle:`Tạo mật khẩu admin`,resetPasswordTitle:`Nhập mã khôi phục để đặt lại mật khẩu`,loginTitle:`Nhập mật khẩu để vào editor`,password:`Mật khẩu`,recoveryCodeLabel:`Mã khôi phục`,newPassword:`Mật khẩu mới`,confirmPassword:`Nhập lại mật khẩu`,createPassword:`Tạo mật khẩu`,resetPassword:`Đặt lại mật khẩu`,login:`Đăng nhập`,backLogin:`Quay lại đăng nhập`,forgot:`Quên mật khẩu`,resetLocal:`Xóa cấu hình local`,passwordTooShort:`Mật khẩu cần ít nhất 8 ký tự.`,confirmMismatch:`Mật khẩu xác nhận không khớp.`,setupDone:`Đã tạo mật khẩu admin. Hãy lưu mã khôi phục bên dưới.`,wrongPassword:`Sai mật khẩu. Chỉ admin mới được quyền đăng nhập.`,newPasswordTooShort:`Mật khẩu mới cần ít nhất 8 ký tự.`,wrongRecovery:`Mã khôi phục không đúng.`,passwordChanged:`Đã đổi mật khẩu. Hãy lưu mã khôi phục mới.`,localReset:`Đã xóa cấu hình admin trên trình duyệt này. Hãy tạo mật khẩu mới.`}},Wv=e=>{if(!e)return[];if(Array.isArray(e))return e.filter(Boolean);if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t.filter(Boolean):[]}catch{return e.split(`
`).map(e=>e.trim()).filter(Boolean)}return[]},Gv=e=>[`idea`,`in_progress`,`done`].includes(e)?e:`done`,Kv=(e,t=`de`)=>({de:{idea:`Idee`,in_progress:`In Arbeit`,done:`Umgesetzt`},en:{idea:`Concept`,in_progress:`In progress`,done:`Completed`},vi:{idea:`Ý tưởng`,in_progress:`Đang thực hiện`,done:`Hoàn thành`}})[t]?.[Gv(e)]||Gv(e),qv=e=>({idea:`border-zinc-500/30 bg-zinc-500/15 text-zinc-300`,in_progress:`border-yellow-400/30 bg-yellow-400/10 text-yellow-300`,done:`border-emerald-400/30 bg-emerald-400/10 text-emerald-300`})[Gv(e)],Jv=e=>Gv(e?.project_status)===`idea`,Yv=(e,t=`de`)=>e?new Intl.DateTimeFormat({de:`de-DE`,en:`en-US`,vi:`vi-VN`}[t]||`de-DE`,{day:`2-digit`,month:`long`,year:`numeric`}).format(new Date(e)):{de:`Kein Datum`,en:`No date`,vi:`Không có ngày`}[t],Xv=e=>({IoT:mv,Robotik:H_,Messtechnik:nv,"Über mich":rv,"Karriere & Weiterbildung":_v,"WinCC & HMI":fv,"Technische Erfahrungen":bv})[e]||Z_,Zv=(e,t=`de`)=>({en:{Elektrotechnik:`Electrical Engineering`,Maschinenbau:`Mechanical Engineering`,"Über mich":`About Me`,Softwareentwicklung:`Software Development`,"SPS-Programmierung":`PLC Programming`,Grundlagen:`Fundamentals`,Robotik:`Robotics`,Messtechnik:`Measurement Technology`,"Karriere & Weiterbildung":`Career & Continuing Education`,"Technische Erfahrungen":`Technical Experience`},vi:{Elektrotechnik:`Kỹ thuật điện`,Maschinenbau:`Cơ khí`,"Über mich":`Về tôi`,Softwareentwicklung:`Phát triển phần mềm`,"SPS-Programmierung":`Lập trình PLC`,Grundlagen:`Kiến thức nền tảng`,Robotik:`Robot`,Messtechnik:`Kỹ thuật đo lường`,"Karriere & Weiterbildung":`Sự nghiệp & Đào tạo nâng cao`,"Technische Erfahrungen":`Kinh nghiệm kỹ thuật`}})[t]?.[e]||e,Qv=e=>String(e||``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``),$v=e=>String(e||``).replace(/\s+/g,` `).trim(),ey=e=>e.length?e.map(e=>`- ${$v(e)}`).join(`
`):`[]`,ty=e=>`---
id: ${$v(e.slug)}
slug: ${$v(e.slug)}
translation_id: ${$v(e.translation_id||e.slug)}
language: ${$v(e.language||`de`)}
content_type: ${$v(e.content_type)}
title: ${$v(e.title)}
category: ${$v(e.category)}
image_url: ${$v(e.image_url)}
image_gallery:
${ey(e.image_gallery)}
excerpt: ${$v(e.excerpt)}
tags:
${ey(e.tags)}
read_time: ${$v(e.read_time)}
published: ${e.published}
created_at: '${e.created_at}'
external_link: ${$v(e.external_link)}
project_status: ${e.project_status}
sort_order: ${Number(e.sort_order)||100}
---

${e.content.trim()}
`,ny=e=>`---
type: personal_way
language: ${$v(e.language||`de`)}
title: ${$v(e.title)}
image_1: ${$v(e.image_1)}
image_2: ${$v(e.image_2)}
---

${e.content.trim()}
`,ry=[[`hero_badge`,`Hero: Badge`],[`hero_title`,`Hero: Titel`],[`hero_text`,`Hero: Text`],[`transparency_title`,`Transparenz: Titel`],[`transparency_text`,`Transparenz: Text`],[`transparency_strong`,`Transparenz: Hervorgehobener Text`],[`feature_1_title`,`Karte 1: Titel`],[`feature_1_text`,`Karte 1: Text`],[`feature_2_title`,`Karte 2: Titel`],[`feature_2_text`,`Karte 2: Text`],[`feature_3_title`,`Karte 3: Titel`],[`feature_3_text`,`Karte 3: Text`],[`feature_4_title`,`Karte 4: Titel`],[`feature_4_text`,`Karte 4: Text`],[`warning_one`,`Projekt-Hinweis: Absatz 1`],[`warning_two`,`Projekt-Hinweis: Absatz 2`],[`collaboration_title`,`Zusammenarbeit: Titel`],[`collaboration_text`,`Zusammenarbeit: Text`]],iy=e=>`---
type: home_content
language: ${$v(e.language||`de`)}
${ry.map(([t])=>`${t}: ${$v(e[t])}`).join(`
`)}
---
`,ay=e=>`---
type: site_settings
background_image: ${$v(e.background_image)}
---
`,oy=e=>`---
type: gallery_settings
---

${JSON.stringify(e,null,2)}
`,sy=(e,t)=>{let n=new Blob([t],{type:`text/markdown;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(r)},cy=()=>({source_path:``,content_type:`project`,translation_id:``,language:`de`,title:``,slug:``,category:`IoT`,image_url:``,image_gallery:``,excerpt:``,tags:``,read_time:`5 Min.`,published:!0,created_at:new Date().toISOString(),external_link:``,project_status:`done`,sort_order:100,content:`# Neuer Beitrag

Projektbeschreibung...`}),ly=e=>({source_path:e.source_path||``,content_type:e.content_type||`project`,translation_id:e.translation_id||e.slug||``,language:e.language||`de`,title:e.title||``,slug:e.slug||``,category:e.category||`IoT`,image_url:e.image_url||``,image_gallery:Wv(e.image_gallery).join(`
`),excerpt:e.excerpt||``,tags:Array.isArray(e.tags)?e.tags.join(`, `):``,read_time:e.read_time||`5 Min.`,published:e.published!==!1,created_at:e.created_at||new Date().toISOString(),external_link:e.external_link||``,project_status:Gv(e.project_status),sort_order:Number.isFinite(Number(e.sort_order))?Number(e.sort_order):100,content:e.content||``}),uy={de:[{icon:Z_,title:`Elektronik & Embedded Systems`,text:`Eigene Lernprojekte rund um Mikrocontroller, Sensorik und hardwarenahe Entwicklung zur praktischen Erweiterung meines technischen Wissens.`},{icon:yv,title:`Automatisierung & Steuerung`,text:`Praktische Übungen und kleinere Projekte, um industrielle Abläufe, Steuerungstechnik und technische Prozesse besser zu verstehen.`},{icon:_v,title:`Technisches Lernen`,text:`Dokumentation meines Lernwegs, technischer Erfahrungen und neuer Themen, mit denen ich mich kontinuierlich beschäftige.`},{icon:fv,title:`Eigene Entwicklung`,text:`Diese Website dient als persönliche Plattform, um Projekte, Ideen und technische Fortschritte übersichtlich festzuhalten.`}],en:[{icon:Z_,title:`Electronics & Embedded Systems`,text:`Personal learning projects involving microcontrollers, sensors and hardware-oriented development to expand my technical knowledge through practice.`},{icon:yv,title:`Automation & Control`,text:`Practical exercises and smaller projects to better understand industrial workflows, control technology and technical processes.`},{icon:_v,title:`Technical Learning`,text:`Documentation of my learning journey, technical experience and new topics that I continuously explore.`},{icon:fv,title:`Personal Development`,text:`This website is my personal platform for documenting projects, ideas and technical progress in a clear format.`}],vi:[{icon:Z_,title:`Điện tử & Hệ thống nhúng`,text:`Các dự án học tập cá nhân về vi điều khiển, cảm biến và phát triển gần phần cứng nhằm mở rộng kiến thức kỹ thuật qua thực hành.`},{icon:yv,title:`Tự động hóa & Điều khiển`,text:`Các bài thực hành và dự án nhỏ để hiểu rõ hơn quy trình công nghiệp, kỹ thuật điều khiển và các quá trình kỹ thuật.`},{icon:_v,title:`Học tập kỹ thuật`,text:`Ghi lại hành trình học tập, kinh nghiệm kỹ thuật và những chủ đề mới mà tôi liên tục tìm hiểu.`},{icon:fv,title:`Phát triển cá nhân`,text:`Website này là nền tảng cá nhân để lưu lại dự án, ý tưởng và tiến bộ kỹ thuật một cách rõ ràng.`}]},dy={en:{title:`Nguyen Nhan Do - Learning technology. Gaining experience. Continuing to grow.`,content:`I came to Germany in 2013 - not because my life in Vietnam was bad, but because I wanted to discover how far I could develop personally and professionally by leaving my comfort zone and starting again in a completely new environment.

My first years in Germany were mainly a time of arriving, learning and adapting. Alongside language courses, I worked in several fields, including hospitality, management and later self-employment.

After several years of varied professional experience, I consciously decided to return more strongly to technology and develop in electronics, measurement technology and automation over the long term.

In recent years, I have gained practical experience in calibration, troubleshooting, testing and the development of electronic systems while continuously expanding my technical knowledge.

I have also completed further training in PLC programming, C++/Qt, AutoCAD and EPLAN to deepen my knowledge and better understand new technical fields.

This blog primarily documents my technical projects, experience and learning processes. It is a place where I record knowledge, collect ideas and document my professional development over time.

All content is based on personal projects, independent learning and publicly accessible knowledge. Confidential information, internal documents or projects from current or former employers are not published.`},vi:{title:`Nguyen Nhan Do - Học kỹ thuật. Tích lũy kinh nghiệm. Không ngừng phát triển.`,content:`Tôi đến Đức vào năm 2013 - không phải vì cuộc sống ở Việt Nam không tốt, mà vì tôi muốn tìm hiểu mình có thể phát triển xa đến đâu về mặt cá nhân và nghề nghiệp khi rời khỏi vùng an toàn và bắt đầu lại trong một môi trường hoàn toàn mới.

Những năm đầu tại Đức chủ yếu là khoảng thời gian làm quen, học hỏi và thích nghi. Bên cạnh các khóa học ngôn ngữ, tôi đã làm việc trong nhiều lĩnh vực khác nhau, bao gồm nhà hàng, quản lý và sau đó là tự kinh doanh.

Sau nhiều năm tích lũy kinh nghiệm nghề nghiệp đa dạng, tôi chủ động quyết định quay trở lại định hướng kỹ thuật rõ ràng hơn và phát triển lâu dài trong lĩnh vực điện tử, đo lường và tự động hóa.

Trong những năm gần đây, tôi đã tích lũy kinh nghiệm thực tế về hiệu chuẩn, tìm lỗi, kiểm thử và phát triển hệ thống điện tử, đồng thời liên tục mở rộng kiến thức kỹ thuật.

Tôi cũng đã hoàn thành các khóa đào tạo về lập trình PLC, C++/Qt, AutoCAD và EPLAN để nâng cao kiến thức và hiểu rõ hơn các lĩnh vực kỹ thuật mới.

Blog này chủ yếu dùng để ghi lại các dự án kỹ thuật, kinh nghiệm và quá trình học tập của tôi. Tại đây, tôi lưu giữ kiến thức, tập hợp ý tưởng và ghi lại sự phát triển chuyên môn theo thời gian.

Tất cả nội dung đều dựa trên dự án cá nhân, quá trình tự học và kiến thức công khai. Thông tin bảo mật, tài liệu nội bộ hoặc dự án của công ty hiện tại hay trước đây tất nhiên không được công bố.`}},fy=e=>C_(e)||{...v_,...dy[e]||{}},py=[Z_,yv,_v,fv],my=e=>{let t=w_(e);return t?py.map((e,n)=>({icon:e,title:t[`feature_${n+1}_title`],text:t[`feature_${n+1}_text`]})):uy[e]||uy.de};function hy({children:e,gradient:t=`from-cyan-400 via-cyan-500 to-cyan-400`,className:n=``,innerClassName:r=``,padding:i=`p-[1.5px]`,rounded:a=`rounded-[2rem]`,stretch:o=!1}){return(0,w.jsxs)(`div`,{className:`relative ${a} ${i} ${o?`flex flex-col`:``} ${n}`,children:[(0,w.jsx)(`div`,{className:`absolute inset-0 ${a} bg-gradient-to-r ${t} opacity-70`}),(0,w.jsx)(`div`,{className:`relative ${a} ${o?`flex-1`:``} ${r}`,children:e})]})}function gy(){return(0,w.jsxs)(`div`,{className:`fixed inset-0 -z-10 overflow-hidden bg-[#07111f]`,children:[(0,w.jsx)(`img`,{src:b_.background_image,alt:``,className:`absolute inset-0 h-full w-full object-cover opacity-70`}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50`})]})}function _y({images:e,index:t,onClose:n}){let[r,i]=(0,C.useState)(t);(0,C.useEffect)(()=>{let e=e=>{e.key===`Escape`&&n()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]);let a=typeof e[r]==`object`?e[r].image_url:e[r];return(0,w.jsx)(`div`,{className:`fixed inset-0 z-[200] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md`,onClick:n,children:(0,w.jsxs)(ku.div,{initial:{opacity:0,scale:.88},animate:{opacity:1,scale:1},transition:{duration:.25},className:`relative max-h-[90vh] w-full max-w-5xl`,onClick:e=>e.stopPropagation(),children:[(0,w.jsx)(`img`,{src:a,alt:`Bild`,className:`max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl`}),e.length>1&&(0,w.jsxs)(`div`,{className:`absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3`,children:[(0,w.jsx)(`button`,{onClick:()=>i(t=>(t-1+e.length)%e.length),className:`flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80`,children:(0,w.jsx)(G_,{className:`h-5 w-5`})}),(0,w.jsxs)(`span`,{className:`flex items-center text-white/60 text-sm`,children:[r+1,` / `,e.length]}),(0,w.jsx)(`button`,{onClick:()=>i(t=>(t+1)%e.length),className:`flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80`,children:(0,w.jsx)(K_,{className:`h-5 w-5`})})]}),(0,w.jsx)(`button`,{onClick:n,className:`absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-xl transition hover:bg-cyan-300`,children:(0,w.jsx)(xv,{className:`h-5 w-5 stroke-[3]`})})]})})}function vy({language:e=`de`,onLanguageChange:t=()=>{},onAuthenticated:n,onBack:r}){let[i,a]=(0,C.useState)(()=>Lv()),[o,s]=(0,C.useState)(()=>Lv()?`login`:`setup`),[c,l]=(0,C.useState)(``),[u,d]=(0,C.useState)(``),[f,p]=(0,C.useState)(``),[m,h]=(0,C.useState)(``),[g,_]=(0,C.useState)(``),[v,y]=(0,C.useState)(``),b=o===`setup`,x=o===`forgot`,S=Uv[e]||Uv.de,T=()=>{l(``),d(``),p(``),h(``),y(``)},E=()=>{zv(!0),n()},D=async e=>{let t=Pv(),n=Fv(),r={salt:t,passwordHash:await Iv(e,t),recoveryHash:await Iv(n,t),updatedAt:new Date().toISOString()};Rv(r),a(r),_(n)};return(0,w.jsxs)(`div`,{className:`min-h-screen overflow-x-hidden text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsx)(`main`,{className:`mx-auto flex min-h-screen max-w-5xl items-center px-4 py-24 sm:px-5`,children:(0,w.jsxs)(`section`,{className:`w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/95 shadow-2xl shadow-black/30 backdrop-blur-xl`,children:[(0,w.jsx)(`div`,{className:`flex justify-end border-b border-white/10 px-6 py-4 sm:px-8`,children:(0,w.jsx)(`div`,{className:`flex rounded-full border border-white/10 bg-white/5 p-1`,children:Cv.map(n=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:`rounded-full px-3 py-1.5 text-xs font-black uppercase transition ${e===n?`bg-cyan-400 text-black`:`text-zinc-400 hover:text-white`}`,children:n},n))})}),(0,w.jsxs)(`div`,{className:`grid gap-0 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,w.jsxs)(`div`,{className:`border-b border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:border-b-0 lg:border-r`,children:[(0,w.jsx)(`div`,{className:`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200`,children:(0,w.jsx)(cv,{className:`h-6 w-6`})}),(0,w.jsx)(`h1`,{className:`mt-5 text-2xl font-black sm:text-4xl`,children:S.title}),(0,w.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-zinc-300`,children:S.intro}),(0,w.jsx)(`p`,{className:`mt-4 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 p-4 text-sm leading-6 text-yellow-100`,children:S.notice}),(0,w.jsxs)(`button`,{type:`button`,onClick:r,className:`mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white`,children:[(0,w.jsx)(z_,{className:`h-4 w-4`}),` `,S.backBlog]})]}),(0,w.jsx)(`div`,{className:`p-6 sm:p-8`,children:g?(0,w.jsxs)(`div`,{className:`space-y-5`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-bold uppercase text-cyan-300`,children:S.recoveryCode}),(0,w.jsx)(`h2`,{className:`mt-2 text-xl font-black`,children:S.saveRecovery})]}),(0,w.jsx)(`div`,{className:`rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 font-mono text-sm font-bold text-emerald-100 sm:text-base`,children:g}),(0,w.jsxs)(`button`,{type:`button`,onClick:E,className:`inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white`,children:[(0,w.jsx)(lv,{className:`h-4 w-4`}),` `,S.enterAdmin]})]}):(0,w.jsxs)(`form`,{onSubmit:b?async e=>{if(e.preventDefault(),u.length<8){y(S.passwordTooShort);return}if(u!==f){y(S.confirmMismatch);return}await D(u),T(),y(S.setupDone)}:x?async e=>{if(e.preventDefault(),!i){s(`setup`);return}if(u.length<8){y(S.newPasswordTooShort);return}if(u!==f){y(S.confirmMismatch);return}if(await Iv(m.trim(),i.salt)!==i.recoveryHash){y(S.wrongRecovery);return}await D(u),T(),s(`login`),y(S.passwordChanged)}:async e=>{if(e.preventDefault(),!i){s(`setup`);return}if(await Iv(c,i.salt)!==i.passwordHash){y(S.wrongPassword);return}E()},className:`space-y-5`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-bold uppercase text-cyan-300`,children:b?S.firstSetup:x?S.forgotPassword:S.adminAuth}),(0,w.jsx)(`h2`,{className:`mt-2 text-xl font-black`,children:b?S.createPasswordTitle:x?S.resetPasswordTitle:S.loginTitle})]}),!b&&!x&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:`mb-2 block text-xs font-bold uppercase text-zinc-400`,children:S.password}),(0,w.jsx)(`input`,{type:`password`,value:c,onChange:e=>l(e.target.value),className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`,autoFocus:!0})]}),(b||x)&&(0,w.jsxs)(w.Fragment,{children:[x&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:`mb-2 block text-xs font-bold uppercase text-zinc-400`,children:S.recoveryCodeLabel}),(0,w.jsx)(`input`,{value:m,onChange:e=>h(e.target.value),className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`,placeholder:`ADMIN-XXXXXX-XXXXXX-XXXXXX`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:`mb-2 block text-xs font-bold uppercase text-zinc-400`,children:S.newPassword}),(0,w.jsx)(`input`,{type:`password`,value:u,onChange:e=>d(e.target.value),className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:`mb-2 block text-xs font-bold uppercase text-zinc-400`,children:S.confirmPassword}),(0,w.jsx)(`input`,{type:`password`,value:f,onChange:e=>p(e.target.value),className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`})]})]}),v&&(0,w.jsx)(`p`,{className:`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200`,children:v}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,w.jsxs)(`button`,{type:`submit`,className:`inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white`,children:[x?(0,w.jsx)(ov,{className:`h-4 w-4`}):(0,w.jsx)(lv,{className:`h-4 w-4`}),b?S.createPassword:x?S.resetPassword:S.login]}),!b&&(0,w.jsx)(`button`,{type:`button`,onClick:()=>{T(),s(x?`login`:`forgot`)},className:`rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white`,children:x?S.backLogin:S.forgot}),x&&(0,w.jsx)(`button`,{type:`button`,onClick:()=>{window.localStorage.removeItem(Dv),zv(!1),a(null),_(``),T(),s(`setup`),y(S.localReset)},className:`rounded-xl border border-red-300/20 px-5 py-3 text-sm font-bold text-red-100 transition hover:bg-red-300/10`,children:S.resetLocal})]})]})})]})]})})]})}function yy({onClose:e}){let[t,n]=(0,C.useState)(``),[r,i]=(0,C.useState)(``),[a,o]=(0,C.useState)(``),[s,c]=(0,C.useState)(``),[l,u]=(0,C.useState)(``);return(0,w.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm`,children:(0,w.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault();let s=Lv();if(!s){u(`Chua co cau hinh admin.`);return}if(r.length<8){u(`Mat khau moi can it nhat 8 ky tu.`);return}if(r!==a){u(`Mat khau xac nhan khong khop.`);return}if(await Iv(t,s.salt)!==s.passwordHash){u(`Mat khau hien tai khong dung.`);return}let l=Pv(),d=Fv();Rv({salt:l,passwordHash:await Iv(r,l),recoveryHash:await Iv(d,l),updatedAt:new Date().toISOString()}),n(``),i(``),o(``),c(d),u(`Da doi mat khau. Hay luu ma khoi phuc moi.`)},className:`w-full max-w-lg rounded-2xl border border-white/10 bg-[#07111f] p-6 text-white shadow-2xl`,children:[(0,w.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-bold uppercase text-cyan-300`,children:`Admin`}),(0,w.jsx)(`h2`,{className:`mt-1 text-xl font-black`,children:`Doi mat khau`})]}),(0,w.jsx)(`button`,{type:`button`,onClick:e,className:`rounded-xl border border-white/10 p-2 text-zinc-300 hover:bg-white/10`,children:(0,w.jsx)(xv,{className:`h-4 w-4`})})]}),(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4`,children:[(0,w.jsx)(`input`,{type:`password`,value:t,onChange:e=>n(e.target.value),placeholder:`Mat khau hien tai`,className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`}),(0,w.jsx)(`input`,{type:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`Mat khau moi`,className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`}),(0,w.jsx)(`input`,{type:`password`,value:a,onChange:e=>o(e.target.value),placeholder:`Nhap lai mat khau moi`,className:`w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4`}),s&&(0,w.jsx)(`div`,{className:`rounded-xl border border-emerald-300/25 bg-emerald-300/10 p-3 font-mono text-sm font-bold text-emerald-100`,children:s}),l&&(0,w.jsx)(`p`,{className:`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200`,children:l}),(0,w.jsxs)(`button`,{type:`submit`,className:`inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white`,children:[(0,w.jsx)(hv,{className:`h-4 w-4`}),` Luu mat khau moi`]})]})]})})}function by({onNavigate:e,currentPage:t,language:n=`de`,onLanguageChange:r=()=>{},onAdminAccess:i=null,isAdminAuthenticated:a=!1}){let[o,s]=(0,C.useState)(!1),c=Tv(n),l=n=>{s(!1),t===`home`?document.getElementById(n)?.scrollIntoView({behavior:`smooth`}):(e(`home`),setTimeout(()=>document.getElementById(n)?.scrollIntoView({behavior:`smooth`}),100))},u=()=>{s(!1),e(`home`),window.scrollTo({top:0,behavior:`smooth`})},d=()=>{s(!1),e(`knowledge`),window.scrollTo({top:0,behavior:`smooth`})};return(0,w.jsxs)(`header`,{className:`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl`,children:[(0,w.jsxs)(`nav`,{className:`mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:u,className:`flex items-center gap-3 text-left`,children:[(0,w.jsx)(`div`,{className:`flex h-12 w-12 overflow-hidden rounded-2xl sm:h-14 sm:w-14`,children:(0,w.jsx)(`img`,{src:`/my-electronics-blog/images/logo.webp`,alt:`Logo`,className:`h-full w-full scale-110 object-contain brightness-110 contrast-110`})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{className:`text-base font-black text-white sm:text-xl`,children:`Nguyen Nhan Do`}),(0,w.jsx)(`p`,{className:`text-[10px] leading-tight text-zinc-400 sm:text-xs`,children:c.tagline})]})]}),(0,w.jsxs)(`div`,{className:`hidden items-center gap-8 md:flex`,children:[[[`blog`,`Blog`],[`projekte`,c.gallery],[`kontakt`,c.contact]].map(([e,t])=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>l(e),className:`text-sm text-zinc-300 transition hover:text-cyan-300`,children:t},e)),(0,w.jsxs)(`button`,{type:`button`,onClick:d,className:`inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-300/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-slate-200/60 hover:bg-slate-300/20`,children:[(0,w.jsx)(V_,{className:`h-4 w-4`}),` `,c.knowledge]}),(0,w.jsx)(`div`,{className:`flex rounded-full border border-white/10 bg-white/5 p-1`,children:Cv.map(e=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>r(e),className:`rounded-full px-2 py-1 text-[11px] font-black uppercase transition ${n===e?`bg-cyan-400 text-black`:`text-zinc-400 hover:text-white`}`,children:e},e))}),i&&(0,w.jsxs)(`button`,{type:`button`,onClick:()=>{s(!1),i()},className:`inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20`,children:[(0,w.jsx)(lv,{className:`h-4 w-4`}),` `,a?`Admin`:`Login`]})]}),(0,w.jsx)(`button`,{type:`button`,className:`rounded-xl border border-white/10 p-2 text-white hover:bg-white/10 md:hidden`,onClick:()=>s(e=>!e),children:o?(0,w.jsx)(xv,{className:`h-6 w-6`}):(0,w.jsx)(dv,{className:`h-6 w-6`})})]}),o&&(0,w.jsx)(`div`,{className:`border-t border-white/10 bg-[#050816]/95 px-5 py-4 text-white md:hidden`,children:(0,w.jsxs)(`div`,{className:`grid gap-2`,children:[[[`blog`,`Blog`],[`projekte`,c.projects],[`kontakt`,c.contact]].map(([e,t])=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>l(e),className:`rounded-xl px-3 py-2 text-left text-zinc-200 hover:bg-white/10 hover:text-cyan-300`,children:t},e)),(0,w.jsxs)(`button`,{type:`button`,onClick:d,className:`mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-300/30 bg-slate-300/10 px-3 py-2 text-left font-bold text-slate-200`,children:[(0,w.jsx)(V_,{className:`h-4 w-4`}),` `,c.knowledge]}),i&&(0,w.jsxs)(`button`,{type:`button`,onClick:()=>{s(!1),i()},className:`mt-2 inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-left font-bold text-cyan-100`,children:[(0,w.jsx)(lv,{className:`h-4 w-4`}),` `,a?`Admin`:`Login`]}),(0,w.jsx)(`div`,{className:`mt-2 flex w-fit rounded-xl border border-white/10 bg-white/5 p-1`,children:Cv.map(e=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>r(e),className:`rounded-lg px-3 py-1.5 text-xs font-black uppercase transition ${n===e?`bg-cyan-400 text-black`:`text-zinc-400`}`,children:e},e))})]})})]})}var xy={hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:.05}},exit:{transition:{staggerChildren:.04,staggerDirection:-1}}},Sy={hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-14,transition:{duration:.25,ease:`easeIn`}}},Cy={hidden:{opacity:0,x:48,scale:.96},visible:{opacity:1,x:0,scale:1,transition:{duration:.55,ease:[.22,1,.36,1],delay:.15}},exit:{opacity:0,x:-32,scale:.97,transition:{duration:.28,ease:`easeIn`}}};function wy({slides:e,onDiscover:t,onOpenPost:n,language:r}){let[i,a]=(0,C.useState)(0),o=(0,C.useRef)(null),s=Tv(r),c=(0,C.useCallback)(()=>{clearInterval(o.current),o.current=setInterval(()=>a(t=>(t+1)%e.length),Sv)},[e.length]);(0,C.useEffect)(()=>(c(),()=>clearInterval(o.current)),[c]);let l=e=>{a(e),c()};if(!e.length)return null;let u=e[i];return(0,w.jsxs)(`section`,{className:`relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24`,children:[(0,w.jsxs)(`div`,{className:`relative z-10`,children:[(0,w.jsxs)(`div`,{className:`mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-sm`,children:[(0,w.jsx)(J_,{className:`h-4 w-4 text-cyan-400`}),(0,w.jsx)(`span`,{className:`text-sm font-medium text-cyan-300`,children:s.heroBadge})]}),(0,w.jsx)(`h2`,{className:`max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl`,children:s.heroTitle}),(0,w.jsx)(`p`,{className:`mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9`,children:s.heroText}),(0,w.jsx)(`div`,{className:`mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4`,children:(0,w.jsxs)(`button`,{type:`button`,onClick:t,className:`inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base`,children:[s.discover,` `,(0,w.jsx)(B_,{className:`h-5 w-5`})]})}),(0,w.jsxs)(`div`,{className:`mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4`,children:[(0,w.jsxs)(`a`,{href:`https://drive.google.com/drive/folders/1y6MZUhoZJCIou-SL9BHbkA-CjpXxKGz5?usp=sharing`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-w-0 items-center justify-center gap-2 rounded-2xl border border-zinc-600/40 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 px-3 py-4 text-center text-sm font-bold text-zinc-100 shadow-xl shadow-black/40 transition hover:border-zinc-400/50 sm:gap-3 sm:px-6 sm:text-base`,children:[(0,w.jsx)($_,{className:`h-5 w-5`}),` `,s.docs]}),(0,w.jsxs)(`a`,{href:`https://github.com/nguyennhando?tab=repositories`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-3 py-4 text-center text-sm font-bold text-black shadow-xl shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300 sm:gap-3 sm:px-6 sm:text-base`,children:[(0,w.jsx)(X_,{className:`h-5 w-5`}),` `,s.sourceCode]})]})]}),(0,w.jsxs)(`div`,{className:`relative flex flex-col items-center`,children:[(0,w.jsx)(ku.div,{animate:{scale:[1,1.12,1],opacity:[.6,.85,.6],transition:{duration:4,repeat:1/0}},className:`pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-400/10 blur-3xl`}),(0,w.jsx)(`div`,{className:`relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-cyan-500/10 lg:max-w-none`,children:(0,w.jsxs)(`div`,{className:`relative overflow-hidden rounded-[1.95rem] bg-[#080d1f]`,style:{height:`720px`},children:[(0,w.jsx)(Ic,{mode:`wait`,children:(0,w.jsxs)(ku.div,{variants:Cy,initial:`hidden`,animate:`visible`,exit:`exit`,whileHover:{scale:1.015},onClick:()=>n&&u.id&&n(u.id),onMouseEnter:()=>clearInterval(o.current),onMouseLeave:c,className:`flex flex-col h-full cursor-pointer`,children:[(0,w.jsxs)(`div`,{className:`relative h-[360px] lg:h-[420px] shrink-0 overflow-hidden`,children:[(0,w.jsx)(ku.img,{src:u.image,alt:u.title,className:`h-full w-full object-cover`,initial:{scale:1.06},animate:{scale:1},transition:{duration:.7}}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#080d1f]/60 via-transparent to-transparent`}),(0,w.jsxs)(`div`,{className:`absolute left-4 top-4 flex items-center gap-2`,children:[(0,w.jsx)(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black shadow-lg`,children:Zv(u.category,r)}),(0,w.jsx)(`span`,{className:`rounded-full bg-black/40 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm`,children:u.readTime})]})]}),(0,w.jsx)(Ic,{mode:`wait`,children:(0,w.jsxs)(ku.div,{variants:xy,initial:`hidden`,animate:`visible`,exit:`exit`,className:`flex-1 overflow-hidden p-5 sm:p-6`,children:[(0,w.jsx)(ku.h3,{variants:Sy,className:`text-xl font-black leading-tight text-white sm:text-2xl lg:text-xl xl:text-2xl`,children:u.title}),(0,w.jsx)(ku.p,{variants:Sy,className:`mt-3 line-clamp-2 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7`,children:u.text}),(0,w.jsx)(ku.div,{variants:Sy,className:`mt-4 flex flex-wrap gap-2`,children:(u.tags||[]).slice(0,3).map(e=>(0,w.jsxs)(`span`,{className:`rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-300`,children:[`#`,e]},e))}),(0,w.jsxs)(ku.div,{variants:Sy,className:`mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300`,children:[s.openProject,` `,(0,w.jsx)(B_,{className:`h-4 w-4`})]})]},`text-${i}`)})]},i)}),(0,w.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 flex gap-[3px] px-5 pb-5`,children:e.map((e,t)=>(0,w.jsxs)(`button`,{type:`button`,onClick:()=>l(t),className:`relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10`,children:[t===i&&(0,w.jsx)(ku.span,{className:`absolute inset-y-0 left-0 rounded-full bg-cyan-400`,initial:{width:`0%`},animate:{width:`100%`},transition:{duration:Sv/1e3,ease:`linear`}},i),t<i&&(0,w.jsx)(`span`,{className:`absolute inset-0 rounded-full bg-cyan-400/40`})]},t))})]})}),(0,w.jsxs)(`div`,{className:`mt-4 flex gap-3`,children:[(0,w.jsx)(`button`,{type:`button`,onClick:()=>l((i-1+e.length)%e.length),className:`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300`,children:(0,w.jsx)(G_,{className:`h-5 w-5`})}),(0,w.jsxs)(`span`,{className:`flex items-center gap-1 text-xs text-zinc-600`,children:[(0,w.jsx)(`span`,{className:`font-bold text-zinc-400`,children:i+1}),`/`,e.length]}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>l((i+1)%e.length),className:`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300`,children:(0,w.jsx)(K_,{className:`h-5 w-5`})})]})]})]})}function Ty({post:e,onBack:t,language:n}){let[r,i]=(0,C.useState)(null),a=[e.image_url,...Wv(e.image_gallery)],o=Tv(n);return(0,C.useEffect)(()=>{window.scrollTo({top:0})},[e.id]),(0,w.jsxs)(`div`,{className:`min-h-screen text-white`,style:{backgroundImage:`linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)`,backgroundSize:`60px 60px`},children:[(0,w.jsx)(gy,{}),(0,w.jsxs)(`main`,{className:`mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5`,children:[(0,w.jsxs)(ku.button,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},type:`button`,onClick:t,className:`mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300`,children:[(0,w.jsx)(z_,{className:`h-4 w-4`}),` `,o.backBlog]}),(0,w.jsx)(ku.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,w.jsxs)(hy,{gradient:Jv(e)?`from-zinc-600 via-zinc-500 to-zinc-600`:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[2rem]`,innerClassName:`overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl`,children:[(0,w.jsxs)(`div`,{className:`relative`,children:[(0,w.jsx)(`img`,{src:e.image_url,alt:e.title,onClick:()=>i(0),className:`h-64 w-full cursor-zoom-in object-cover sm:h-80 lg:h-[420px] ${Jv(e)?`grayscale opacity-70`:``}`}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent`}),(0,w.jsxs)(`div`,{className:`absolute bottom-4 left-4 flex flex-wrap gap-2`,children:[(0,w.jsx)(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black`,children:Zv(e.category,n)}),(0,w.jsx)(`span`,{className:`rounded-full border px-3 py-1.5 text-xs font-bold ${qv(e.project_status)}`,children:Kv(e.project_status,n)})]})]}),(0,w.jsxs)(`div`,{className:`p-5 sm:p-8 lg:p-10`,children:[e.is_translation_fallback&&(0,w.jsx)(`p`,{className:`mb-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-4 py-3 text-sm leading-6 text-yellow-100`,children:o.translationFallback}),(0,w.jsxs)(`div`,{className:`mb-5 flex flex-wrap gap-3 text-xs text-zinc-400`,children:[(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(U_,{className:`h-3.5 w-3.5`}),Yv(e.created_at,n)]}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(Y_,{className:`h-3.5 w-3.5`}),e.read_time||`5 Min.`]})]}),(0,w.jsx)(`h1`,{className:`text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-5 text-base font-semibold leading-8 text-cyan-100/90 sm:text-lg`,children:e.excerpt}),(0,w.jsx)(`div`,{className:`mt-6 text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9`,children:(0,w.jsx)(s_,{components:{h1:({children:e})=>(0,w.jsx)(`h2`,{className:`mb-4 mt-8 text-2xl font-black text-white sm:text-3xl`,children:e}),h2:({children:e})=>(0,w.jsx)(`h3`,{className:`mb-3 mt-7 text-xl font-black text-cyan-100 sm:text-2xl`,children:e}),h3:({children:e})=>(0,w.jsx)(`h4`,{className:`mb-2 mt-6 text-lg font-bold text-white`,children:e}),p:({children:e})=>(0,w.jsx)(`p`,{className:`mb-4 leading-8 sm:leading-9`,children:e}),ul:({children:e})=>(0,w.jsx)(`ul`,{className:`mb-5 ml-6 list-disc space-y-2`,children:e}),ol:({children:e})=>(0,w.jsx)(`ol`,{className:`mb-5 ml-6 list-decimal space-y-2`,children:e}),li:({children:e})=>(0,w.jsx)(`li`,{className:`pl-1`,children:e}),strong:({children:e})=>(0,w.jsx)(`strong`,{className:`font-black text-white`,children:e}),a:({children:e,href:t})=>(0,w.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,className:`font-bold text-cyan-300 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-200`,children:e}),code:({children:e})=>(0,w.jsx)(`code`,{className:`rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-cyan-200`,children:e}),pre:({children:e})=>(0,w.jsx)(`pre`,{className:`mb-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-zinc-100`,children:e})},children:e.content})}),Wv(e.image_gallery).length>0&&(0,w.jsxs)(`div`,{className:`mt-8`,children:[(0,w.jsx)(`p`,{className:`mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300`,children:o.projectImages}),(0,w.jsx)(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3`,children:Wv(e.image_gallery).map((e,t)=>(0,w.jsx)(`img`,{src:e,alt:`${o.image} ${t+1}`,onClick:()=>i(t+1),className:`h-36 w-full cursor-zoom-in rounded-2xl object-cover transition hover:brightness-110`},e))})]}),!!(Array.isArray(e.tags)?e.tags:[]).length&&(0,w.jsx)(`div`,{className:`mt-6 flex flex-wrap gap-2`,children:e.tags.map(e=>(0,w.jsxs)(`span`,{className:`rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-300`,children:[`#`,e]},e))}),(0,w.jsxs)(`div`,{className:`mt-8 flex flex-col gap-3 sm:flex-row`,children:[e.external_link&&!Jv(e)?(0,w.jsxs)(`a`,{href:e.external_link,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300`,children:[o.openProject,` `,(0,w.jsx)($_,{className:`h-5 w-5`})]}):(0,w.jsx)(`span`,{className:`inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-zinc-400`,children:Jv(e)?o.conceptProject:o.noProjectLink}),(0,w.jsxs)(`button`,{type:`button`,onClick:t,className:`inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-bold text-zinc-200 transition hover:bg-white/10`,children:[(0,w.jsx)(z_,{className:`h-5 w-5`}),` `,o.backBlog]})]})]})]})})]}),r!==null&&(0,w.jsx)(_y,{images:a,index:r,onClose:()=>i(null)})]})}function Ey({posts:e,onOpenPost:t,getPostUrl:n,language:r}){let i=Tv(r),[a,o]=(0,C.useState)(``),[s,c]=(0,C.useState)(`__all__`),[l,u]=(0,C.useState)(1),d=(0,C.useMemo)(()=>[...new Set(e.map(e=>e.category))],[e]),f=(0,C.useMemo)(()=>e.filter(e=>{let t=s===`__all__`||e.category===s,n=`${e.title} ${e.excerpt} ${(e.tags||[]).join(` `)}`.toLowerCase();return t&&n.includes(a.toLowerCase())}),[e,a,s]),p=f[0],m=f.slice(1),h=Math.max(1,Math.ceil(m.length/10)),g=m.slice((l-1)*10,l*10);return(0,C.useEffect)(()=>{window.scrollTo({top:0})},[]),(0,C.useEffect)(()=>{u(1)},[a,s]),(0,w.jsxs)(`div`,{className:`min-h-screen text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsxs)(`main`,{className:`mx-auto max-w-7xl px-4 pb-20 pt-[120px] sm:px-5`,children:[(0,w.jsxs)(`section`,{className:`relative overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[#0b1023]/95 px-5 py-8 shadow-2xl shadow-slate-950/30 sm:px-8 sm:py-10`,children:[(0,w.jsx)(`div`,{className:`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-300/15 blur-3xl`}),(0,w.jsxs)(`div`,{className:`relative max-w-3xl`,children:[(0,w.jsxs)(`div`,{className:`inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-slate-200`,children:[(0,w.jsx)(sv,{className:`h-4 w-4`}),` `,i.knowledgeLibrary]}),(0,w.jsx)(`h1`,{className:`mt-5 text-3xl font-black leading-tight sm:text-5xl`,children:i.knowledgeTitle}),(0,w.jsx)(`p`,{className:`mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base`,children:i.knowledgeIntro})]})]}),(0,w.jsx)(`section`,{className:`mt-5 rounded-2xl border border-slate-300/20 bg-slate-300/[0.07] p-5 sm:p-6`,children:(0,w.jsxs)(`div`,{className:`flex flex-col gap-4 sm:flex-row sm:items-start`,children:[(0,w.jsx)(`div`,{className:`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300/25 bg-slate-300/10 text-slate-200`,children:(0,w.jsx)(V_,{className:`h-5 w-5`})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h2`,{className:`font-black text-slate-100`,children:i.knowledgeNotice}),(0,w.jsx)(`div`,{className:`mt-3 space-y-3 text-sm leading-7 text-zinc-300`,children:i.knowledgeNoticeParagraphs.map(e=>(0,w.jsx)(`p`,{children:e},e))})]})]})}),(0,w.jsxs)(`section`,{className:`mt-8 grid gap-3 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 sm:grid-cols-[1fr_auto]`,children:[(0,w.jsxs)(`div`,{className:`relative`,children:[(0,w.jsx)(gv,{className:`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500`}),(0,w.jsx)(`input`,{value:a,onChange:e=>o(e.target.value),placeholder:i.knowledgeSearch,className:`w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm outline-none ring-slate-300/30 placeholder:text-zinc-500 focus:ring-4`})]}),(0,w.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),className:`rounded-xl border border-white/10 bg-[#050816] px-5 py-3 text-sm outline-none ring-slate-300/30 focus:ring-4`,children:[(0,w.jsx)(`option`,{value:`__all__`,children:i.allTopics}),d.map(e=>(0,w.jsx)(`option`,{value:e,children:Zv(e,r)},e))]})]}),p?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`section`,{className:`mt-8`,children:[(0,w.jsx)(`p`,{className:`mb-3 text-xs font-black uppercase tracking-widest text-slate-300`,children:i.selectedPost}),(0,w.jsxs)(`a`,{href:n(p.id),onClick:e=>{e.button===0&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&(e.preventDefault(),t(p.id))},className:`group grid w-full overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[#0b1023]/95 text-left transition hover:border-slate-200/60 lg:grid-cols-[0.42fr_0.58fr]`,children:[(0,w.jsx)(`div`,{className:`h-56 overflow-hidden bg-slate-950/30 lg:h-auto`,children:p.image_url?(0,w.jsx)(`img`,{src:p.image_url,alt:``,className:`h-full w-full object-cover transition duration-500 group-hover:scale-105`}):(0,w.jsx)(`div`,{className:`flex h-full items-center justify-center`,children:(0,w.jsx)(tv,{className:`h-14 w-14 text-slate-300/60`})})}),(0,w.jsxs)(`div`,{className:`p-5 sm:p-7`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-xs text-zinc-400`,children:[(0,w.jsx)(`span`,{className:`rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950`,children:Zv(p.category,r)}),p.is_translation_fallback&&(0,w.jsx)(`span`,{className:`rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 font-bold text-yellow-200`,children:i.translationFallbackShort}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(Y_,{className:`h-3.5 w-3.5`}),` `,p.read_time||`5 Min.`]})]}),(0,w.jsx)(`h2`,{className:`mt-4 text-2xl font-black leading-tight sm:text-3xl`,children:p.title}),(0,w.jsx)(`p`,{className:`mt-3 line-clamp-3 text-sm leading-7 text-zinc-400 sm:text-base`,children:p.excerpt}),(0,w.jsxs)(`span`,{className:`mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-200`,children:[i.readPost,` `,(0,w.jsx)(B_,{className:`h-4 w-4`})]})]})]})]}),m.length>0&&(0,w.jsxs)(`section`,{className:`mt-10`,children:[(0,w.jsxs)(`div`,{className:`mb-4 flex items-end justify-between gap-4`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-black uppercase tracking-widest text-slate-300`,children:i.archive}),(0,w.jsx)(`h2`,{className:`mt-2 text-2xl font-black`,children:i.morePosts})]}),(0,w.jsxs)(`span`,{className:`text-sm text-zinc-500`,children:[f.length,` `,i.posts]})]}),(0,w.jsx)(`div`,{className:`grid gap-3`,children:g.map(e=>(0,w.jsxs)(`a`,{href:n(e.id),onClick:n=>{n.button===0&&!n.metaKey&&!n.ctrlKey&&!n.shiftKey&&!n.altKey&&(n.preventDefault(),t(e.id))},className:`group grid gap-4 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 text-left transition hover:border-slate-300/50 sm:grid-cols-[140px_1fr_auto] sm:items-center`,children:[(0,w.jsx)(`div`,{className:`hidden h-24 overflow-hidden rounded-xl bg-slate-950/30 sm:block`,children:e.image_url?(0,w.jsx)(`img`,{src:e.image_url,alt:``,className:`h-full w-full object-cover transition group-hover:scale-105`}):(0,w.jsx)(`div`,{className:`flex h-full items-center justify-center`,children:(0,w.jsx)(iv,{className:`h-8 w-8 text-slate-300/60`})})}),(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-xs text-zinc-500`,children:[(0,w.jsx)(`span`,{className:`font-bold text-slate-300`,children:Zv(e.category,r)}),(0,w.jsx)(`span`,{children:Yv(e.created_at,r)}),(0,w.jsx)(`span`,{children:e.read_time||`5 Min.`})]}),e.is_translation_fallback&&(0,w.jsx)(`span`,{className:`mt-2 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-2.5 py-1 text-xs font-bold text-yellow-200`,children:i.translationFallbackShort}),(0,w.jsx)(`h3`,{className:`mt-2 text-lg font-black leading-tight group-hover:text-slate-200`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-2 line-clamp-2 text-sm leading-6 text-zinc-400`,children:e.excerpt})]}),(0,w.jsx)(B_,{className:`hidden h-5 w-5 text-slate-300 sm:block`})]},e.id))}),h>1&&(0,w.jsx)(`div`,{className:`mt-6 flex justify-center gap-2`,children:Array.from({length:h},(e,t)=>t+1).map(e=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>u(e),className:`h-10 w-10 rounded-xl text-sm font-black ${l===e?`bg-slate-200 text-slate-950`:`border border-white/10 bg-white/5 text-zinc-300`}`,children:e},e))})]})]}):(0,w.jsxs)(`section`,{className:`mt-8 rounded-2xl border border-dashed border-slate-300/30 bg-slate-300/5 px-5 py-16 text-center`,children:[(0,w.jsx)(V_,{className:`mx-auto h-10 w-10 text-slate-300`}),(0,w.jsx)(`h2`,{className:`mt-4 text-xl font-black`,children:i.noKnowledge}),(0,w.jsx)(`p`,{className:`mt-2 text-sm text-zinc-400`,children:i.noKnowledgeText})]})]})]})}function Dy({post:e,onBack:t,language:n}){let r=Tv(n);return(0,C.useEffect)(()=>{window.scrollTo({top:0})},[e.id]),(0,w.jsxs)(`div`,{className:`min-h-screen text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsxs)(`main`,{className:`mx-auto max-w-4xl px-4 pb-20 pt-[110px] sm:px-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:t,className:`mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/25 bg-slate-300/10 px-5 py-2.5 text-sm font-bold text-slate-200 transition hover:bg-slate-300/20`,children:[(0,w.jsx)(z_,{className:`h-4 w-4`}),` `,r.backKnowledge]}),(0,w.jsxs)(`article`,{className:`overflow-hidden rounded-[2rem] border border-slate-300/20 bg-[#07111f]/95 shadow-2xl shadow-slate-950/20`,children:[e.image_url&&(0,w.jsx)(`img`,{src:e.image_url,alt:e.title,className:`h-56 w-full object-cover sm:h-80`}),(0,w.jsxs)(`div`,{className:`p-5 sm:p-8 lg:p-10`,children:[e.is_translation_fallback&&(0,w.jsx)(`p`,{className:`mb-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-4 py-3 text-sm leading-6 text-yellow-100`,children:r.translationFallback}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-3 text-xs text-zinc-400`,children:[(0,w.jsx)(`span`,{className:`rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950`,children:Zv(e.category,n)}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(U_,{className:`h-3.5 w-3.5`}),` `,Yv(e.created_at,n)]}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(Y_,{className:`h-3.5 w-3.5`}),` `,e.read_time||`5 Min.`]})]}),(0,w.jsx)(`h1`,{className:`mt-5 text-3xl font-black leading-tight sm:text-5xl`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-5 text-base font-semibold leading-8 text-slate-100/90 sm:text-lg`,children:e.excerpt}),(0,w.jsx)(`div`,{className:`mt-7 text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9`,children:(0,w.jsx)(s_,{components:{h1:({children:e})=>(0,w.jsx)(`h2`,{className:`mb-4 mt-9 text-2xl font-black text-white sm:text-3xl`,children:e}),h2:({children:e})=>(0,w.jsx)(`h3`,{className:`mb-3 mt-8 text-xl font-black text-slate-200 sm:text-2xl`,children:e}),h3:({children:e})=>(0,w.jsx)(`h4`,{className:`mb-2 mt-6 text-lg font-bold text-white`,children:e}),p:({children:e})=>(0,w.jsx)(`p`,{className:`mb-4`,children:e}),ul:({children:e})=>(0,w.jsx)(`ul`,{className:`mb-5 ml-6 list-disc space-y-2`,children:e}),ol:({children:e})=>(0,w.jsx)(`ol`,{className:`mb-5 ml-6 list-decimal space-y-2`,children:e}),strong:({children:e})=>(0,w.jsx)(`strong`,{className:`font-black text-white`,children:e}),a:({children:e,href:t})=>(0,w.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,className:`font-bold text-slate-300 underline underline-offset-4 hover:text-slate-200`,children:e}),code:({children:e})=>(0,w.jsx)(`code`,{className:`rounded-md border border-slate-300/20 bg-black/30 px-1.5 py-0.5 text-slate-200`,children:e})},children:e.content})}),e.external_link&&(0,w.jsxs)(`a`,{href:e.external_link,target:`_blank`,rel:`noopener noreferrer`,className:`mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 font-black text-slate-950 transition hover:bg-white`,children:[r.externalSource,` `,(0,w.jsx)($_,{className:`h-4 w-4`})]})]})]})]})]})}function Oy({onLogout:e=()=>{}}){let[t,n]=(0,C.useState)(cy),[r,i]=(0,C.useState)(``),[a,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)(null),[l,u]=(0,C.useState)(``),[d,f]=(0,C.useState)(()=>window.localStorage.getItem(kv)||``),[p,m]=(0,C.useState)(()=>!window.localStorage.getItem(kv)),[h,g]=(0,C.useState)(!1),[_,v]=(0,C.useState)(()=>w_(`de`)),[y,b]=(0,C.useState)(!1),[x,S]=(0,C.useState)(v_),[T,E]=(0,C.useState)(!1),[D,O]=(0,C.useState)(b_),[ee,te]=(0,C.useState)(!1),[ne,re]=(0,C.useState)((T_.length?T_:Ev).join(`
`)),[k,ie]=(0,C.useState)(!1),[ae,A]=(0,C.useState)(!1),[j,oe]=(0,C.useState)(`de`),[se,ce]=(0,C.useState)(()=>O_(`de`).filter(e=>e.content_type!==`knowledge`).map(e=>e.translation_id)),M=(e,t)=>{n(n=>{let r={...n,[e]:t};return e===`title`&&!a&&(r.slug=Qv(t)),r})},le=()=>{let e=t.slug||Qv(t.title);if(!e||!t.title.trim()||!t.excerpt.trim()||!t.content.trim())return window.alert(`Titel, Slug, Kurzbeschreibung und Inhalt sind Pflichtfelder.`),null;let n=ty({...t,slug:e,translation_id:t.translation_id||e,image_gallery:t.image_gallery.split(`
`).map(e=>e.trim()).filter(Boolean),tags:t.tags.split(`,`).map(e=>e.trim()).filter(Boolean)});return{filename:`${e}.md`,directory:t.language,markdown:n}},N=()=>{let e=le();e&&sy(e.filename,e.markdown)},ue=()=>{let e=d.trim();if(!e){window.localStorage.removeItem(kv),u(`GitHub token wurde entfernt.`);return}window.localStorage.setItem(kv,e),m(!1),u(`GitHub token wurde lokal im Browser gespeichert.`)},de=async(e,t)=>{try{let n=await e.json();return`${t} (${e.status}): ${n.message||`Keine Details von GitHub.`}`}catch{return`${t} (${e.status}).`}},fe=async()=>{let e=d.trim()||window.localStorage.getItem(kv);if(!e){m(!0),u(`Bitte zuerst einen GitHub token eintragen.`);return}try{let t=await fetch(`https://api.github.com/repos/${Av}/${jv}`,{headers:{Accept:`application/vnd.github+json`,Authorization:`Bearer ${e}`,"X-GitHub-Api-Version":`2022-11-28`}});if(!t.ok)throw Error(await de(t,`Token-Test fehlgeschlagen`));u(`Token funktioniert. GitHub API ist erreichbar.`)}catch(e){u(e instanceof TypeError?`GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen, oder MD exportieren verwenden.`:e.message)}},pe=async(e,t)=>{let n=d.trim()||window.localStorage.getItem(kv);if(!n){m(!0),u(`Bitte zuerst einen GitHub token eintragen.`);return}try{for(let r of e){let e=Hv(r),i=Vv(e),a=`https://api.github.com/repos/${Av}/${jv}/contents/${i}?ref=${Mv}`,o={Accept:`application/vnd.github+json`,Authorization:`Bearer ${n}`,"X-GitHub-Api-Version":`2022-11-28`},s=null,c=await fetch(a,{headers:o});if(c.ok)s=(await c.json()).sha;else if(c.status!==404)throw Error(await de(c,`GitHub konnte ${e} nicht lesen`));let l=await fetch(`https://api.github.com/repos/${Av}/${jv}/contents/${i}`,{method:`PUT`,headers:{...o,"Content-Type":`application/json`},body:JSON.stringify({branch:Mv,message:t||`Update ${e}`,content:Bv(r.markdown),...s?{sha:s}:{}})});if(!l.ok)throw Error(await de(l,`GitHub konnte ${e} nicht speichern`))}u(`${e.length} Datei(en) wurden auf GitHub gespeichert. GitHub Pages danach kurz neu laden.`)}catch(e){u(e instanceof TypeError?`GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen, oder MD exportieren verwenden.`:e.message||`GitHub speichern ist fehlgeschlagen.`)}},me=async e=>{await pe([e],`Update ${Hv(e)}`)},he=(e,t)=>{ce(n=>{let r=n.indexOf(e),i=r+t;if(r<0||i<0||i>=n.length)return n;let a=[...n];return[a[r],a[i]]=[a[i],a[r]],a})},ge=async()=>{try{let e=new Map(se.map((e,t)=>[e,(t+1)*10]));await pe(E_.filter(t=>t.content_type!==`knowledge`&&e.has(t.translation_id)).map(t=>({filename:`${t.slug}.md`,directory:t.language,markdown:ty({...t,sort_order:e.get(t.translation_id)})})),`Update project card order`)}catch(e){e.name!==`AbortError`&&window.alert(`Die Reihenfolge konnte nicht gespeichert werden.`)}},_e=async()=>{let e=le();e&&await me(e)},ve=e=>{v({...y_.find(t=>t.language===e)||w_(e),language:e})},ye=()=>({filename:`home-content.md`,directory:_.language,markdown:iy(_)}),be=async()=>{await me(ye())},xe=()=>{let e=ye();sy(e.filename,e.markdown)},Se=e=>{S({...__.find(t=>t.language===e)||C_(e),language:e})},Ce=()=>!x.title.trim()||!x.content.trim()?(window.alert(`Titel und Inhalt sind Pflichtfelder.`),null):{filename:`personal-way.md`,directory:x.language,markdown:ny(x)},we=async()=>{let e=Ce();e&&await me(e)},Te=()=>{let e=Ce();e&&sy(e.filename,e.markdown)},Ee=()=>({filename:`site-settings.md`,markdown:ay(D)}),De=async()=>{await me(Ee())},Oe=()=>{let e=Ee();sy(e.filename,e.markdown)},ke=()=>({filename:`gallery-settings.md`,markdown:oy(ne.split(`
`).map(e=>e.trim()).filter(Boolean))}),Ae=async()=>{await me(ke())},je=()=>{let e=ke();sy(e.filename,e.markdown)},Me=e=>{if(i(e),!e){n(cy()),o(!1);return}let t=E_.find(t=>t.source_path===e);t&&(n(ly(t)),o(!0))},P=`w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:ring-4`,F=`mb-2 block text-xs font-bold uppercase text-zinc-400`,Ne=Xv(t.category),Pe=t.tags.split(`,`).map(e=>e.trim()).filter(Boolean),Fe=t.content_type!==`knowledge`&&Jv(t),Ie=k_(t.translation_id||t.slug),Le=se.map(e=>{let t=E_.filter(t=>t.translation_id===e&&t.content_type!==`knowledge`);return t.find(e=>e.language===j)||t.find(e=>e.language===`de`)||t[0]}).filter(Boolean);return(0,w.jsxs)(`div`,{className:`min-h-screen text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsx)(`header`,{className:`sticky top-0 z-30 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl`,children:(0,w.jsxs)(`div`,{className:`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,w.jsx)(ev,{className:`h-6 w-6 text-cyan-300`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{className:`font-black`,children:`Markdown-Beitrag erstellen`}),(0,w.jsx)(`p`,{className:`text-xs text-zinc-500`,children:`ElektronikLab`})]})]}),(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-end gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>A(!0),className:`inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10`,children:[(0,w.jsx)(ov,{className:`h-4 w-4`}),` Passwort`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:e,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(uv,{className:`h-4 w-4`}),` Logout`]}),(0,w.jsxs)(`a`,{href:`/my-electronics-blog/`,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(z_,{className:`h-4 w-4`}),` Blog`]})]})]})}),ae&&(0,w.jsx)(yy,{onClose:()=>A(!1)}),(0,w.jsxs)(`main`,{className:`mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-5 lg:grid-cols-[1.05fr_0.95fr]`,children:[(0,w.jsxs)(`section`,{className:`space-y-5`,children:[(0,w.jsxs)(`div`,{className:`rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>m(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-sky-300`,children:`GitHub`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Direkt auf GitHub speichern`})]}),(0,w.jsx)(X_,{className:`h-5 w-5 text-sky-300`})]}),p&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`p`,{className:`text-sm leading-6 text-zinc-300`,children:[`Tragen Sie einen GitHub fine-grained token mit `,(0,w.jsx)(`span`,{className:`font-bold text-white`,children:`Contents: Read and write`}),` fuer `,(0,w.jsx)(`span`,{className:`font-bold text-white`,children:`nguyennhando/my-electronics-blog`}),` ein. Der Token wird nur lokal in diesem Browser gespeichert.`]}),(0,w.jsxs)(`div`,{className:`grid gap-3 sm:grid-cols-[1fr_auto_auto]`,children:[(0,w.jsx)(`input`,{type:`password`,value:d,onChange:e=>f(e.target.value),className:P,placeholder:`github_pat_...`}),(0,w.jsxs)(`button`,{type:`button`,onClick:ue,className:`inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-black text-black transition hover:bg-sky-300`,children:[(0,w.jsx)(hv,{className:`h-4 w-4`}),` Token speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:fe,className:`inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300/30 px-4 py-3 text-sm font-bold text-sky-100 transition hover:bg-sky-300/10`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Token testen`]})]})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>E(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-emerald-300`,children:`Website`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Website-Hintergrund bearbeiten`})]}),(0,w.jsx)(av,{className:`h-5 w-5 text-emerald-300`})]}),T&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Hintergrundbild`}),(0,w.jsx)(`input`,{className:P,value:D.background_image,onChange:e=>O(t=>({...t,background_image:e.target.value})),placeholder:`/my-electronics-blog/images/background.webp`})]}),(0,w.jsxs)(`div`,{className:`relative h-44 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]`,children:[D.background_image?(0,w.jsx)(`img`,{src:D.background_image,alt:``,className:`h-full w-full object-cover opacity-60`}):(0,w.jsx)(`div`,{className:`flex h-full items-center justify-center text-sm text-zinc-500`,children:`Standard-Hintergrund ohne Bild`}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-900/30 to-fuchsia-600/20`})]}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:De,className:`inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-black text-black transition hover:bg-emerald-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Auf GitHub speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:Oe,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(Q_,{className:`h-4 w-4`}),` MD exportieren`]})]})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>te(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-cyan-300`,children:`Startseite`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Projektgalerie bearbeiten`})]}),(0,w.jsx)(av,{className:`h-5 w-5 text-cyan-300`})]}),ee&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`div`,{className:`rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{className:`font-black text-cyan-200`,children:`So fügen Sie neue Galeriebilder hinzu`}),(0,w.jsxs)(`ol`,{className:`mt-2 ml-5 list-decimal space-y-1`,children:[(0,w.jsxs)(`li`,{children:[`Kopieren Sie die Bilddatei in den Ordner `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`public/images/galerie`}),`.`]}),(0,w.jsxs)(`li`,{children:[`Tragen Sie den Bildpfad ein, zum Beispiel `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`/my-electronics-blog/images/galerie/dateiname.webp`}),`.`]}),(0,w.jsx)(`li`,{children:`Verwenden Sie pro Zeile genau einen Bildpfad.`}),(0,w.jsx)(`li`,{children:`Die erste Zeile ist das große Hauptbild. Die zweite und dritte Zeile sind die kleinen Bilder auf der rechten Seite.`}),(0,w.jsxs)(`li`,{children:[`Speichern Sie die Datei anschließend im Ordner `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`src/content`}),`.`]})]}),(0,w.jsx)(`p`,{className:`mt-3 text-xs text-zinc-400`,children:`Die Bildposition innerhalb des Rahmens wird automatisch zentriert.`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Galeriebilder, ein Pfad pro Zeile`}),(0,w.jsx)(`textarea`,{className:`${P} min-h-[220px] font-mono leading-6`,value:ne,onChange:e=>re(e.target.value),placeholder:`/my-electronics-blog/images/galerie/bild.webp`}),(0,w.jsx)(`p`,{className:`mt-2 text-xs leading-5 text-zinc-500`,children:`Die Galerie ist frei zusammengestellt. Die Bilder müssen keinem bestimmten Projekt zugeordnet sein.`})]}),(0,w.jsx)(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3`,children:ne.split(`
`).map(e=>e.trim()).filter(Boolean).slice(0,6).map(e=>(0,w.jsx)(`img`,{src:e,alt:``,className:`h-28 w-full rounded-xl object-cover`},e))}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:Ae,className:`inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black transition hover:bg-cyan-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Auf GitHub speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:je,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(Q_,{className:`h-4 w-4`}),` MD exportieren`]})]})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>ie(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-orange-300`,children:`Blog`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Reihenfolge der Projektkarten bearbeiten`})]}),(0,w.jsx)(q_,{className:`h-5 w-5 text-orange-300`})]}),k&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`div`,{className:`rounded-xl border border-orange-400/20 bg-orange-400/[0.07] p-4 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{className:`font-black text-orange-200`,children:`Projektkarten visuell sortieren`}),(0,w.jsx)(`p`,{className:`mt-2`,children:`Verschieben Sie Karten mit den Pfeilen nach oben oder unten. Beim Speichern wird die Reihenfolge automatisch für alle Sprachversionen übernommen.`}),(0,w.jsx)(`p`,{className:`mt-2 text-xs text-zinc-400`,children:`Mit „Reihenfolge speichern“ wird die neue Sortierung direkt auf GitHub gespeichert.`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Vorschau-Sprache`}),(0,w.jsxs)(`select`,{className:P,value:j,onChange:e=>oe(e.target.value),children:[(0,w.jsx)(`option`,{value:`de`,children:`DE - Deutsch`}),(0,w.jsx)(`option`,{value:`en`,children:`EN - English`}),(0,w.jsx)(`option`,{value:`vi`,children:`VI - Tiếng Việt`})]})]}),(0,w.jsx)(`div`,{className:`grid gap-3`,children:Le.map((e,t)=>(0,w.jsxs)(`div`,{className:`flex items-center gap-3 rounded-xl border border-white/10 bg-[#07111f]/95 p-3`,children:[(0,w.jsx)(`span`,{className:`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-black text-orange-200`,children:t+1}),e.image_url&&(0,w.jsx)(`img`,{src:e.image_url,alt:``,className:`h-14 w-20 shrink-0 rounded-lg object-cover`}),(0,w.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,w.jsx)(`p`,{className:`truncate font-black text-white`,children:e.title}),(0,w.jsxs)(`p`,{className:`mt-1 text-xs text-zinc-500`,children:[Zv(e.category,j),` · `,Kv(e.project_status,j)]})]}),(0,w.jsxs)(`div`,{className:`flex shrink-0 flex-col gap-1`,children:[(0,w.jsx)(`button`,{type:`button`,disabled:t===0,onClick:()=>he(e.translation_id,-1),className:`rounded-lg border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30`,"aria-label":`Nach oben verschieben`,children:(0,w.jsx)(q_,{className:`h-4 w-4`})}),(0,w.jsx)(`button`,{type:`button`,disabled:t===Le.length-1,onClick:()=>he(e.translation_id,1),className:`rounded-lg border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30`,"aria-label":`Nach unten verschieben`,children:(0,w.jsx)(W_,{className:`h-4 w-4`})})]})]},e.translation_id))}),(0,w.jsxs)(`button`,{type:`button`,onClick:ge,className:`inline-flex w-fit items-center gap-2 rounded-xl bg-orange-400 px-4 py-2 text-sm font-black text-black transition hover:bg-orange-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Reihenfolge speichern`]}),l&&(0,w.jsx)(`p`,{className:`text-xs font-bold text-emerald-300`,children:l})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>g(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-blue-300`,children:`Startseite`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Startseiten-Inhalte bearbeiten`})]}),(0,w.jsx)(pv,{className:`h-5 w-5 text-blue-300`})]}),h&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`div`,{className:`rounded-xl border border-blue-400/20 bg-blue-400/[0.07] p-4 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{className:`font-black text-blue-200`,children:`Speicherort der Markdown-Datei`}),(0,w.jsx)(`p`,{className:`mt-2`,children:`Speichern Sie die Datei abhängig von der ausgewählten Sprache unter:`}),(0,w.jsxs)(`ul`,{className:`mt-2 ml-5 list-disc space-y-1`,children:[(0,w.jsxs)(`li`,{children:[`Deutsch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-blue-100`,children:`src/content/de/home-content.md`})]}),(0,w.jsxs)(`li`,{children:[`Englisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-blue-100`,children:`src/content/en/home-content.md`})]}),(0,w.jsxs)(`li`,{children:[`Vietnamesisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-blue-100`,children:`src/content/vi/home-content.md`})]})]}),(0,w.jsxs)(`p`,{className:`mt-3 text-xs text-zinc-400`,children:[`Mit „Auf GitHub speichern“ wird diese Datei direkt in den passenden Sprachordner unter `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-blue-100`,children:`src/content`}),` geschrieben.`]}),(0,w.jsx)(`p`,{className:`mt-2 text-xs text-zinc-400`,children:`Nach dem Speichern lädt GitHub Pages die Änderung nach kurzer Zeit neu.`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Sprache`}),(0,w.jsxs)(`select`,{className:P,value:_.language,onChange:e=>ve(e.target.value),children:[(0,w.jsx)(`option`,{value:`de`,children:`DE - Deutsch`}),(0,w.jsx)(`option`,{value:`en`,children:`EN - English`}),(0,w.jsx)(`option`,{value:`vi`,children:`VI - Tiếng Việt`})]})]}),ry.map(([e,t])=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:t}),(0,w.jsx)(`textarea`,{className:`${P} min-h-[88px] leading-6`,value:_[e]||``,onChange:t=>v(n=>({...n,[e]:t.target.value}))})]},e)),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:be,className:`inline-flex items-center gap-2 rounded-xl bg-blue-400 px-4 py-2 text-sm font-black text-black transition hover:bg-blue-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Auf GitHub speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:xe,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(Q_,{className:`h-4 w-4`}),` MD exportieren`]})]}),l&&(0,w.jsx)(`p`,{className:`text-xs font-bold text-emerald-300`,children:l}),(0,w.jsxs)(`div`,{className:`border-t border-white/10 pt-5`,children:[(0,w.jsx)(`p`,{className:`mb-3 text-xs font-bold uppercase text-zinc-500`,children:`Live-Vorschau`}),(0,w.jsxs)(`div`,{className:`space-y-4 rounded-xl border border-white/10 bg-[#07111f]/95 p-4`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-widest text-cyan-300`,children:_.hero_badge}),(0,w.jsx)(`h2`,{className:`mt-2 text-2xl font-black leading-tight`,children:_.hero_title}),(0,w.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-zinc-300`,children:_.hero_text})]}),(0,w.jsxs)(`div`,{className:`rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3`,children:[(0,w.jsx)(`h3`,{className:`font-black text-yellow-200`,children:_.transparency_title}),(0,w.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-zinc-300`,children:_.transparency_text}),(0,w.jsx)(`p`,{className:`mt-2 text-sm font-semibold leading-6 text-yellow-200`,children:_.transparency_strong})]}),(0,w.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:py.map((e,t)=>(0,w.jsxs)(`div`,{className:`rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3`,children:[(0,w.jsx)(e,{className:`h-5 w-5 text-cyan-300`}),(0,w.jsx)(`h3`,{className:`mt-2 font-black`,children:_[`feature_${t+1}_title`]}),(0,w.jsx)(`p`,{className:`mt-1 text-sm leading-6 text-zinc-400`,children:_[`feature_${t+1}_text`]})]},t))}),(0,w.jsxs)(`div`,{className:`rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{children:_.warning_one}),(0,w.jsx)(`p`,{className:`mt-2`,children:_.warning_two})]}),(0,w.jsxs)(`div`,{className:`rounded-xl bg-cyan-300 p-3 text-black`,children:[(0,w.jsx)(`h3`,{className:`font-black`,children:_.collaboration_title}),(0,w.jsx)(`p`,{className:`mt-1 text-sm leading-6 text-black/75`,children:_.collaboration_text})]})]})]})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/5 p-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>b(e=>!e),className:`flex w-full items-center justify-between gap-3 text-left`,children:[(0,w.jsxs)(`span`,{children:[(0,w.jsx)(`span`,{className:`block text-xs font-bold uppercase text-fuchsia-300`,children:`Startseite`}),(0,w.jsx)(`span`,{className:`mt-1 block font-black`,children:`Persönlicher Weg bearbeiten`})]}),(0,w.jsx)(pv,{className:`h-5 w-5 text-fuchsia-300`})]}),y&&(0,w.jsxs)(`div`,{className:`mt-5 grid gap-4 border-t border-white/10 pt-5`,children:[(0,w.jsxs)(`div`,{className:`rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/[0.07] p-4 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{className:`font-black text-fuchsia-200`,children:`Speicherort der Markdown-Datei`}),(0,w.jsx)(`p`,{className:`mt-2`,children:`Speichern Sie die Datei abhängig von der ausgewählten Sprache unter:`}),(0,w.jsxs)(`ul`,{className:`mt-2 ml-5 list-disc space-y-1`,children:[(0,w.jsxs)(`li`,{children:[`Deutsch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100`,children:`src/content/de/personal-way.md`})]}),(0,w.jsxs)(`li`,{children:[`Englisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100`,children:`src/content/en/personal-way.md`})]}),(0,w.jsxs)(`li`,{children:[`Vietnamesisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100`,children:`src/content/vi/personal-way.md`})]})]}),(0,w.jsxs)(`p`,{className:`mt-3 text-xs text-zinc-400`,children:[`Mit „Auf GitHub speichern“ wird diese Datei direkt in den passenden Sprachordner unter `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100`,children:`src/content`}),` geschrieben.`]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Sprache`}),(0,w.jsxs)(`select`,{className:P,value:x.language||`de`,onChange:e=>Se(e.target.value),children:[(0,w.jsx)(`option`,{value:`de`,children:`DE - Deutsch`}),(0,w.jsx)(`option`,{value:`en`,children:`EN - English`}),(0,w.jsx)(`option`,{value:`vi`,children:`VI - Tiếng Việt`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Titel *`}),(0,w.jsx)(`input`,{className:P,value:x.title,onChange:e=>S(t=>({...t,title:e.target.value}))})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Bild 1`}),(0,w.jsx)(`input`,{className:P,value:x.image_1,onChange:e=>S(t=>({...t,image_1:e.target.value}))})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Bild 2`}),(0,w.jsx)(`input`,{className:P,value:x.image_2,onChange:e=>S(t=>({...t,image_2:e.target.value}))})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Markdown-Inhalt *`}),(0,w.jsx)(`textarea`,{className:`${P} min-h-[320px] font-mono leading-6`,value:x.content,onChange:e=>S(t=>({...t,content:e.target.value}))})]}),(0,w.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:we,className:`inline-flex items-center gap-2 rounded-xl bg-fuchsia-400 px-4 py-2 text-sm font-black text-black transition hover:bg-fuchsia-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Auf GitHub speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:Te,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(Q_,{className:`h-4 w-4`}),` MD exportieren`]})]}),(0,w.jsxs)(`div`,{className:`border-t border-white/10 pt-5`,children:[(0,w.jsx)(`p`,{className:`mb-3 text-xs font-bold uppercase text-zinc-500`,children:`Vorschau`}),(0,w.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,w.jsxs)(`div`,{className:`grid gap-3`,children:[(0,w.jsx)(`img`,{src:x.image_1,alt:``,className:`h-40 w-full rounded-xl object-cover`}),(0,w.jsx)(`img`,{src:x.image_2,alt:``,className:`h-40 w-full rounded-xl object-cover`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-xs font-bold uppercase text-cyan-300`,children:`Persönlicher Weg`}),(0,w.jsx)(`h2`,{className:`mt-2 text-xl font-black leading-tight`,children:x.title}),(0,w.jsx)(`div`,{className:`prose prose-invert mt-4 max-w-none text-sm leading-6 prose-p:my-3 prose-p:text-zinc-300`,children:(0,w.jsx)(s_,{children:x.content})})]})]})]})]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5`,children:[(0,w.jsx)(`label`,{className:F,children:`Beitrag laden oder neu erstellen`}),(0,w.jsxs)(`select`,{className:P,value:r,onChange:e=>Me(e.target.value),children:[(0,w.jsx)(`option`,{value:``,children:`Neuer Beitrag`}),E_.map(e=>(0,w.jsxs)(`option`,{value:e.source_path,children:[`[`,e.language.toUpperCase(),`] `,e.content_type===`knowledge`?`[Wissen]`:`[Projekt]`,` `,e.title]},e.source_path))]})]}),(0,w.jsxs)(`div`,{className:`grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-2`,children:[(0,w.jsxs)(`div`,{className:`sm:col-span-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 text-sm leading-6 text-zinc-300`,children:[(0,w.jsx)(`p`,{className:`font-black text-cyan-200`,children:`Mehrsprachige Beiträge speichern`}),(0,w.jsxs)(`p`,{className:`mt-2`,children:[`Verwenden Sie für alle Sprachversionen desselben Beitrags dieselbe `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`translation_id`}),`. Wählen Sie beim Speichern genau den Ordner `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`src/content`}),`, nicht einen Sprachordner. Der Editor legt die Datei automatisch unter `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`de`}),`, `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`en`}),` oder `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`vi`}),` ab.`]}),(0,w.jsx)(`p`,{className:`mt-3 font-bold text-cyan-100`,children:`Speicherort abhängig von Sprache und Slug:`}),(0,w.jsxs)(`ul`,{className:`mt-2 ml-5 list-disc space-y-1`,children:[(0,w.jsxs)(`li`,{children:[`Deutsch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`src/content/de/slug.md`})]}),(0,w.jsxs)(`li`,{children:[`Englisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`src/content/en/slug.md`})]}),(0,w.jsxs)(`li`,{children:[`Vietnamesisch: `,(0,w.jsx)(`code`,{className:`rounded bg-black/30 px-1.5 py-0.5 text-cyan-100`,children:`src/content/vi/slug.md`})]})]}),(0,w.jsx)(`p`,{className:`mt-3 text-xs text-zinc-400`,children:`Bei „MD exportieren“ wird nur die Datei heruntergeladen. Verschieben Sie sie anschließend manuell in den passenden Sprachordner.`})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:`Inhaltstyp`}),(0,w.jsxs)(`select`,{className:P,value:t.content_type,onChange:e=>M(`content_type`,e.target.value),children:[(0,w.jsx)(`option`,{value:`project`,children:`Projektbeitrag für den Blog`}),(0,w.jsx)(`option`,{value:`knowledge`,children:`Wissen, Lernmaterial oder Forschung`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Sprache`}),(0,w.jsxs)(`select`,{className:P,value:t.language,onChange:e=>M(`language`,e.target.value),children:[(0,w.jsx)(`option`,{value:`de`,children:`DE - Deutsch`}),(0,w.jsx)(`option`,{value:`en`,children:`EN - English`}),(0,w.jsx)(`option`,{value:`vi`,children:`VI - Tiếng Việt`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Translation ID`}),(0,w.jsx)(`input`,{className:P,value:t.translation_id,onChange:e=>M(`translation_id`,Qv(e.target.value)),placeholder:`gemeinsame-beitrags-id`}),(0,w.jsxs)(`p`,{className:`mt-2 text-xs leading-5 text-zinc-500`,children:[`Vorhanden: `,Ie.length?Ie.map(e=>e.toUpperCase()).join(`, `):`noch keine Sprachversion`]})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:`Titel *`}),(0,w.jsx)(`input`,{className:P,value:t.title,onChange:e=>M(`title`,e.target.value),placeholder:`Titel des Projekts`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Slug *`}),(0,w.jsx)(`input`,{className:P,value:t.slug,onChange:e=>{o(!0),M(`slug`,Qv(e.target.value))},placeholder:`projekt-name`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Kategorie`}),(0,w.jsx)(`input`,{className:P,value:t.category,onChange:e=>M(`category`,e.target.value)})]}),t.content_type!==`knowledge`&&(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Status`}),(0,w.jsxs)(`select`,{className:P,value:t.project_status,onChange:e=>M(`project_status`,e.target.value),children:[(0,w.jsx)(`option`,{value:`idea`,children:`Idee`}),(0,w.jsx)(`option`,{value:`in_progress`,children:`In Arbeit`}),(0,w.jsx)(`option`,{value:`done`,children:`Umgesetzt`})]})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Reihenfolge`}),(0,w.jsx)(`input`,{className:P,type:`number`,value:t.sort_order,onChange:e=>M(`sort_order`,e.target.value)})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:`Kurzbeschreibung *`}),(0,w.jsx)(`textarea`,{className:P,rows:3,value:t.excerpt,onChange:e=>M(`excerpt`,e.target.value)})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:`Hauptbild`}),(0,w.jsx)(`input`,{className:P,value:t.image_url,onChange:e=>M(`image_url`,e.target.value),placeholder:`/my-electronics-blog/images/posts/bild.webp`})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:`Galeriebilder, ein Pfad pro Zeile`}),(0,w.jsx)(`textarea`,{className:P,rows:3,value:t.image_gallery,onChange:e=>M(`image_gallery`,e.target.value)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Tags, durch Komma getrennt`}),(0,w.jsx)(`input`,{className:P,value:t.tags,onChange:e=>M(`tags`,e.target.value),placeholder:`ESP32, MQTT, IoT`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`label`,{className:F,children:`Lesezeit`}),(0,w.jsx)(`input`,{className:P,value:t.read_time,onChange:e=>M(`read_time`,e.target.value)})]}),(0,w.jsxs)(`div`,{className:`sm:col-span-2`,children:[(0,w.jsx)(`label`,{className:F,children:t.content_type===`knowledge`?`Externe Quelle oder weiterführender Link`:`Externer Projektlink`}),(0,w.jsx)(`input`,{className:P,value:t.external_link,onChange:e=>M(`external_link`,e.target.value),placeholder:`https://...`})]}),(0,w.jsxs)(`label`,{className:`flex items-center gap-3 text-sm font-bold text-zinc-300`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:t.published,onChange:e=>M(`published`,e.target.checked)}),`Veröffentlicht`]})]}),(0,w.jsxs)(`div`,{className:`rounded-2xl border border-white/10 bg-black/20 p-5`,children:[(0,w.jsx)(`label`,{className:F,children:`Markdown-Inhalt *`}),(0,w.jsx)(`textarea`,{className:`${P} min-h-[420px] font-mono leading-6`,value:t.content,onChange:e=>M(`content`,e.target.value)})]})]}),(0,w.jsx)(`aside`,{className:`lg:sticky lg:top-[90px] lg:self-start`,children:(0,w.jsxs)(`div`,{className:`space-y-5 rounded-2xl border border-white/10 bg-[#07111f]/95 p-5`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,w.jsx)(`h2`,{className:`font-black text-cyan-300`,children:`Vorschau`}),(0,w.jsxs)(`div`,{className:`flex flex-wrap justify-end gap-2`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:_e,className:`inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black transition hover:bg-cyan-300`,children:[(0,w.jsx)(X_,{className:`h-4 w-4`}),` Auf GitHub speichern`]}),(0,w.jsxs)(`button`,{type:`button`,onClick:N,className:`inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10`,children:[(0,w.jsx)(Q_,{className:`h-4 w-4`}),` MD exportieren`]})]})]}),l&&(0,w.jsx)(`p`,{className:`text-xs font-bold text-emerald-300`,children:l}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`mb-3 text-xs font-bold uppercase text-zinc-500`,children:`Blog-Karte`}),(0,w.jsxs)(hy,{gradient:Fe?`from-zinc-600 via-zinc-500 to-zinc-600`:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[1.4rem] sm:rounded-[2rem]`,className:`flex`,innerClassName:`flex flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl`,children:[(0,w.jsx)(`div`,{className:`h-44 w-full shrink-0 bg-black/30 sm:h-56`,children:t.image_url?(0,w.jsx)(`img`,{src:t.image_url,alt:``,className:`h-full w-full object-cover ${Fe?`grayscale opacity-70`:``}`}):(0,w.jsx)(`div`,{className:`flex h-full items-center justify-center text-sm text-zinc-600`,children:`Kein Hauptbild`})}),(0,w.jsxs)(`div`,{className:`flex flex-1 flex-col p-4 sm:p-6`,children:[(0,w.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400`,children:[(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black`,children:[(0,C.createElement)(Ne,{className:`h-3.5 w-3.5`}),` `,t.category||`Kategorie`]}),t.content_type!==`knowledge`&&(0,w.jsx)(`span`,{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${qv(t.project_status)}`,children:Kv(t.project_status)}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(U_,{className:`h-3.5 w-3.5`}),` `,Yv(t.created_at)]})]}),(0,w.jsx)(`h3`,{className:`text-lg font-black leading-tight sm:text-2xl`,children:t.title||`Titel des Beitrags`}),(0,w.jsx)(`p`,{className:`mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7`,children:t.excerpt||`Kurzbeschreibung des Projekts`}),(0,w.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:Pe.map(e=>(0,w.jsxs)(`span`,{className:`rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400`,children:[`#`,e]},e))}),(0,w.jsx)(`div`,{className:`mt-auto pt-6`,children:(0,w.jsx)(`span`,{className:`block rounded-2xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-black sm:text-base`,children:`Beitrag lesen`})})]})]})]}),(0,w.jsxs)(`div`,{className:`border-t border-white/10 pt-5`,children:[(0,w.jsx)(`p`,{className:`mb-3 text-xs font-bold uppercase text-zinc-500`,children:`Markdown-Inhalt`}),(0,w.jsx)(`div`,{className:`prose prose-invert max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-li:text-zinc-300`,children:(0,w.jsx)(s_,{children:t.content})})]})]})})]})]})}function ky({posts:e,galleryImages:t,onOpenPost:n,getPostUrl:r,onGoImpressum:i,onGoDatenschutz:a,language:o}){let s=Tv(o),c=fy(o),[l,u]=(0,C.useState)(``),[d,f]=(0,C.useState)(`__all__`),[p,m]=(0,C.useState)(1),[h,g]=(0,C.useState)(null),[_,v]=(0,C.useState)(null),[y,b]=(0,C.useState)(0),x=t.map((e,t)=>({image:e,index:t})).filter(({index:e})=>e!==y).slice(0,2),S=(0,C.useMemo)(()=>[...e].sort((e,t)=>{let n=isFinite(Number(e.sort_order))?Number(e.sort_order):100,r=isFinite(Number(t.sort_order))?Number(t.sort_order):100;return n===r?new Date(t.created_at||0)-new Date(e.created_at||0):n-r}).slice(0,6).map(e=>({id:e.id,image:e.image_url,category:e.category,readTime:e.read_time||`5 Min.`,title:e.title,text:e.excerpt,tags:Array.isArray(e.tags)?e.tags:[]})),[e]),T=(0,C.useMemo)(()=>[...new Set(e.map(e=>e.category))],[e]),E=(0,C.useMemo)(()=>{let t=l.toLowerCase();return e.filter(e=>{let n=Array.isArray(e.tags)?e.tags:[];return(d===`__all__`||e.category===d)&&(e.title.toLowerCase().includes(t)||e.excerpt.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)||n.some(e=>e.toLowerCase().includes(t)))}).sort((e,t)=>{let n=isFinite(Number(e.sort_order))?Number(e.sort_order):100,r=isFinite(Number(t.sort_order))?Number(t.sort_order):100;return n===r?new Date(t.created_at||0)-new Date(e.created_at||0):n-r})},[e,l,d]),D=Math.max(1,Math.ceil(E.length/15)),O=E.slice((p-1)*15,p*15);return(0,w.jsxs)(`div`,{className:`min-h-screen overflow-x-hidden text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsxs)(`main`,{className:`pt-[90px]`,children:[(0,w.jsx)(wy,{slides:S,onDiscover:()=>document.getElementById(`blog`)?.scrollIntoView({behavior:`smooth`}),onOpenPost:n,language:o}),(0,w.jsx)(`section`,{className:`mx-auto max-w-7xl px-4 pt-5 pb-2 sm:px-5`,children:(0,w.jsx)(`div`,{className:`relative overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 p-[2px]`,children:(0,w.jsx)(`div`,{className:`relative rounded-[1.9rem] bg-[#07111f]/95 p-5 sm:p-6 backdrop-blur-xl`,children:(0,w.jsxs)(`div`,{className:`flex flex-col gap-5 sm:flex-row sm:items-start`,children:[(0,w.jsx)(`div`,{className:`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-300`,children:(0,w.jsx)(vv,{className:`h-9 w-9 stroke-[2.5]`})}),(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,w.jsx)(`span`,{className:`rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-yellow-300`,children:s.transparency}),(0,w.jsx)(`h2`,{className:`text-2xl font-black text-white sm:text-3xl`,children:s.transparencyTitle})]}),(0,w.jsxs)(`p`,{className:`mt-5 text-sm leading-7 text-zinc-300 sm:text-base`,children:[s.transparencyText,(0,w.jsx)(`span`,{className:`mt-4 block font-semibold text-yellow-200`,children:s.transparencyStrong})]})]})]})})})}),(0,w.jsx)(`section`,{className:`mx-auto max-w-7xl px-4 py-6 sm:px-5`,children:(0,w.jsx)(hy,{gradient:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[2rem]`,innerClassName:`overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl`,children:(0,w.jsxs)(`div`,{className:`grid items-stretch gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-8`,children:[(0,w.jsxs)(`div`,{className:`grid min-h-full gap-4 lg:grid-rows-2`,children:[(0,w.jsx)(`img`,{src:c.image_1,alt:`Nguyen Nhan Do`,className:`h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]`}),(0,w.jsx)(`img`,{src:c.image_2,alt:`Elektronik`,className:`h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col justify-center`,children:[(0,w.jsx)(`p`,{className:`text-sm font-bold uppercase tracking-widest text-cyan-300`,children:s.personalWay}),(0,w.jsx)(`h2`,{className:`mt-3 text-2xl font-black leading-tight sm:text-4xl`,children:c.title}),(0,w.jsx)(`div`,{className:`prose prose-invert mt-5 max-w-none text-sm leading-7 text-zinc-300 prose-p:my-4 prose-p:text-zinc-300 sm:text-base sm:leading-8`,children:(0,w.jsx)(s_,{children:c.content})})]})]})})}),(0,w.jsx)(`section`,{className:`mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10`,children:(0,w.jsx)(`div`,{className:`grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5`,children:my(o).map(e=>{let t=e.icon;return(0,w.jsx)(ku.div,{whileHover:{y:-5},className:`group flex flex-col`,children:(0,w.jsxs)(hy,{gradient:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[1.4rem] sm:rounded-[2rem]`,className:`flex-1`,stretch:!0,innerClassName:`rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 p-4 sm:p-5 backdrop-blur-xl transition group-hover:bg-[#07111f] shadow-xl shadow-blue-500/20`,children:[(0,w.jsx)(`div`,{className:`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 sm:h-14 sm:w-14`,children:(0,w.jsx)(t,{className:`h-7 w-7`})}),(0,w.jsx)(`h3`,{className:`text-lg font-black sm:text-xl`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-2 text-sm leading-5 text-zinc-400 sm:text-[15px] sm:leading-6`,children:e.text})]})},e.title)})})}),(0,w.jsx)(`section`,{className:`mx-auto w-full max-w-7xl px-4 py-6 sm:px-5`,children:(0,w.jsx)(`div`,{className:`w-full rounded-[2rem] p-[1.5px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400`,children:(0,w.jsx)(`div`,{className:`overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl`,children:(0,w.jsxs)(`div`,{className:`grid lg:grid-cols-[0.28fr_0.72fr]`,children:[(0,w.jsxs)(`div`,{className:`relative h-28 sm:h-32 lg:h-auto`,children:[(0,w.jsx)(`img`,{src:`/my-electronics-blog/images/project-warning.webp`,alt:`Hinweis`,className:`h-full w-full object-cover`}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-black/40 to-transparent`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col justify-center p-4 sm:p-5`,children:[(0,w.jsxs)(`div`,{className:`inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-sm font-bold text-yellow-300`,children:[(0,w.jsx)(vv,{className:`h-4 w-4`}),` `,s.importantNotice]}),(0,w.jsx)(`h2`,{className:`mt-3 text-2xl font-black text-white sm:text-3xl`,children:s.importantTitle}),(0,w.jsxs)(`div`,{className:`mt-3 space-y-2 text-sm leading-6 text-zinc-300 sm:text-base sm:leading-6`,children:[(0,w.jsxs)(`p`,{children:[(0,w.jsxs)(`span`,{className:`font-bold text-yellow-300`,children:[s.importantNotice,`:`]}),` `,s.warningOne]}),(0,w.jsx)(`p`,{children:s.warningTwo})]})]})]})})})}),(0,w.jsxs)(`section`,{id:`blog`,className:`mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16`,children:[(0,w.jsxs)(`div`,{className:`mb-7 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-sm font-bold uppercase tracking-widest text-cyan-300`,children:s.technicalBlog}),(0,w.jsx)(`h2`,{className:`mt-2 text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl`,children:s.blogTitle})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-3 sm:flex-row`,children:[(0,w.jsxs)(`div`,{className:`relative`,children:[(0,w.jsx)(gv,{className:`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500`}),(0,w.jsx)(`input`,{value:l,onChange:e=>{u(e.target.value),m(1)},placeholder:s.search,className:`w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 text-sm outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-72`})]}),(0,w.jsxs)(`select`,{value:d,onChange:e=>{f(e.target.value),m(1)},className:`rounded-2xl border border-white/10 bg-[#050816] px-5 py-3 outline-none ring-cyan-400/30 focus:ring-4`,children:[(0,w.jsx)(`option`,{value:`__all__`,children:s.all}),T.map(e=>(0,w.jsx)(`option`,{value:e,children:Zv(e,o)},e))]})]})]}),E.length===0&&(0,w.jsx)(`div`,{className:`py-20 text-center text-zinc-500`,children:s.noPosts}),(0,w.jsx)(`div`,{className:`grid gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6`,children:O.map(e=>{let t=Xv(e.category),i=Jv(e);return(0,w.jsx)(ku.div,{whileHover:i?void 0:{y:-5},className:`group flex min-[620px]:h-full`,children:(0,w.jsxs)(hy,{gradient:i?`from-zinc-600 via-zinc-500 to-zinc-600`:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[1.4rem] sm:rounded-[2rem]`,className:`flex flex-1`,innerClassName:`flex flex-1 flex-col overflow-hidden rounded-[1.35rem] bg-[#07111f]/95 backdrop-blur-xl sm:rounded-[1.95rem]`,children:[(0,w.jsx)(`img`,{src:e.image_url,alt:e.title,onClick:()=>g({images:[e.image_url,...Wv(e.image_gallery)],index:0}),className:`h-44 w-full shrink-0 cursor-zoom-in object-cover transition duration-300 hover:brightness-110 sm:h-56 ${i?`grayscale opacity-70`:``}`}),(0,w.jsxs)(`div`,{className:`flex flex-1 flex-col p-4 sm:p-6`,children:[(0,w.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400`,children:[(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black`,children:[(0,w.jsx)(t,{className:`h-3.5 w-3.5`}),` `,Zv(e.category,o)]}),(0,w.jsx)(`span`,{className:`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${qv(e.project_status)}`,children:Kv(e.project_status,o)}),e.is_translation_fallback&&(0,w.jsx)(`span`,{className:`inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 font-bold text-yellow-200`,children:s.translationFallbackShort}),(0,w.jsxs)(`span`,{className:`inline-flex items-center gap-1`,children:[(0,w.jsx)(U_,{className:`h-3.5 w-3.5`}),` `,Yv(e.created_at,o)]})]}),(0,w.jsx)(`h3`,{className:`text-lg font-black leading-tight sm:text-2xl`,children:e.title}),(0,w.jsx)(`p`,{className:`mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7`,children:e.excerpt}),(0,w.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:(e.tags||[]).map(e=>(0,w.jsxs)(`span`,{className:`rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400`,children:[`#`,e]},e))}),(0,w.jsx)(`div`,{className:`flex gap-2 pt-6 sm:mt-auto sm:gap-3`,children:(0,w.jsx)(`a`,{href:r(e.id),onClick:t=>{t.button===0&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey&&(t.preventDefault(),n(e.id))},className:`flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300 sm:px-5 sm:text-base`,children:s.readPost})})]})]})},e.id)})}),D>1&&(0,w.jsxs)(`div`,{className:`mt-10 flex flex-col items-center justify-center gap-4`,children:[(0,w.jsxs)(`div`,{className:`text-sm font-semibold text-zinc-400`,children:[s.page,` `,p,` `,s.of,` `,D]}),(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,w.jsx)(`button`,{type:`button`,disabled:p===1,onClick:()=>{m(e=>Math.max(e-1,1)),document.getElementById(`blog`)?.scrollIntoView({behavior:`smooth`})},className:`rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40`,children:s.previous}),Array.from({length:D},(e,t)=>t+1).map(e=>(0,w.jsx)(`button`,{type:`button`,onClick:()=>{m(e),document.getElementById(`blog`)?.scrollIntoView({behavior:`smooth`})},className:`h-10 min-w-10 rounded-xl px-3 text-sm font-black transition ${p===e?`bg-cyan-400 text-black`:`border border-white/10 text-zinc-300 hover:bg-white/10`}`,children:e},e)),(0,w.jsx)(`button`,{type:`button`,disabled:p===D,onClick:()=>{m(e=>Math.min(e+1,D)),document.getElementById(`blog`)?.scrollIntoView({behavior:`smooth`})},className:`rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40`,children:s.next})]})]})]}),(0,w.jsxs)(`section`,{id:`projekte`,className:`mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24`,children:[(0,w.jsx)(`div`,{className:`mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end`,children:(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-sm font-bold uppercase tracking-[0.25em] text-cyan-300`,children:s.gallery}),(0,w.jsx)(`h2`,{className:`mt-3 text-4xl font-black sm:text-5xl`,children:s.projectImages})]})}),t.length>0&&(0,w.jsxs)(`div`,{className:`rounded-[2rem] border border-white/10 bg-[#07111f]/90 p-3 shadow-2xl shadow-cyan-950/20 sm:p-4`,children:[(0,w.jsxs)(`div`,{className:`grid gap-3 lg:h-[430px] lg:grid-cols-[1.85fr_1fr]`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:()=>v({images:t,index:y}),className:`group relative block h-[260px] w-full overflow-hidden rounded-[1.55rem] text-left sm:h-[380px] lg:h-full`,children:[(0,w.jsx)(`img`,{src:t[y]||t[0],alt:`Galeriebild`,className:`h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110`}),(0,w.jsxs)(`div`,{className:`absolute bottom-4 left-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5`,children:[(0,w.jsx)(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-black`,children:s.gallery}),(0,w.jsxs)(`span`,{className:`rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-bold text-zinc-200 backdrop-blur`,children:[s.image,` `,y+1,` / `,t.length]})]}),(0,w.jsx)(`span`,{className:`absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-bold text-zinc-200 backdrop-blur sm:bottom-5 sm:right-5`,children:s.enlarge})]}),(0,w.jsx)(`div`,{className:`hidden min-h-0 gap-3 lg:grid lg:grid-rows-2`,children:x.map(({image:e,index:t})=>(0,w.jsxs)(`button`,{type:`button`,onClick:()=>b(t),className:`group relative min-h-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30 transition hover:border-cyan-400/50`,children:[(0,w.jsx)(`img`,{src:e,alt:`Galeriebild ${t+1}`,className:`h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110`}),(0,w.jsxs)(`span`,{className:`absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-xs font-bold text-zinc-200 backdrop-blur`,children:[s.image,` `,t+1]})]},`${e}-${t}`))})]}),(0,w.jsx)(`div`,{className:`mt-5 flex gap-3 overflow-x-auto border-t border-white/10 pt-4 pb-1`,children:t.map((e,t)=>(0,w.jsxs)(`button`,{type:`button`,onClick:()=>b(t),className:`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-24 sm:w-36 ${y===t?`border-cyan-300 shadow-lg shadow-cyan-500/20`:`border-white/10 opacity-70 hover:border-cyan-400/50 hover:opacity-100`}`,children:[(0,w.jsx)(`img`,{src:e,alt:`Galeriebild ${t+1}`,className:`h-full w-full object-cover`}),(0,w.jsx)(`span`,{className:`absolute bottom-1 right-1 rounded bg-black/65 px-1.5 py-0.5 text-[10px] font-bold text-zinc-200`,children:t+1})]},`${e}-${t}`))})]})]}),(0,w.jsx)(`section`,{id:`kontakt`,className:`mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-24`,children:(0,w.jsx)(`div`,{className:`rounded-[1.5rem] bg-cyan-400 p-4 text-black shadow-2xl shadow-cyan-500/30 sm:rounded-[2.5rem] sm:p-8 lg:p-12`,children:(0,w.jsxs)(`div`,{className:`grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-sm font-black uppercase tracking-widest`,children:s.contact}),(0,w.jsx)(`h2`,{className:`mt-3 text-[1.85rem] font-black leading-tight sm:text-5xl lg:text-6xl`,children:s.collaborationTitle}),(0,w.jsx)(`p`,{className:`mt-4 max-w-2xl text-[15px] leading-7 text-black/80 sm:text-lg`,children:s.collaborationText})]}),(0,w.jsx)(`div`,{className:`rounded-[1.25rem] sm:rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 to-cyan-400/60`,children:(0,w.jsx)(`div`,{className:`rounded-[1.2rem] sm:rounded-[1.95rem] bg-[#050816] p-3 sm:p-8 text-white`,children:(0,w.jsx)(`div`,{className:`grid gap-5`,children:[{icon:X_,label:`GitHub`,value:`github.com/nguyennhando`},{icon:rv,label:s.location,value:s.country},{icon:J_,label:s.focus,value:s.focusValue},{icon:bv,label:s.tools,value:s.toolsValue}].map(({icon:e,label:t,value:n})=>(0,w.jsxs)(`div`,{className:`flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4`,children:[(0,w.jsx)(e,{className:`h-6 w-6 text-cyan-300`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`text-sm text-zinc-400`,children:t}),(0,w.jsx)(`p`,{className:`break-all text-sm font-bold sm:text-base`,children:n})]})]},t))})})})]})})})]}),(0,w.jsxs)(`footer`,{className:`border-t border-cyan-500/10 bg-black py-10 text-center text-zinc-400`,children:[(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-6 text-sm`,children:[(0,w.jsx)(`button`,{type:`button`,onClick:i,className:`transition hover:text-cyan-400`,children:s.legalNotice}),(0,w.jsx)(`button`,{type:`button`,onClick:a,className:`transition hover:text-cyan-400`,children:s.privacy})]}),(0,w.jsx)(`p`,{className:`mt-4 text-xs text-zinc-500`,children:s.footer})]}),h&&(0,w.jsx)(_y,{images:h.images,index:h.index,onClose:()=>g(null)}),_&&(0,w.jsx)(_y,{images:_.images,index:_.index,onClose:()=>v(null)})]})}function Ay({title:e,children:t,onBack:n,onNavigate:r,language:i,onLanguageChange:a}){let o=Tv(i);return(0,w.jsxs)(`div`,{className:`min-h-screen overflow-x-hidden text-white`,children:[(0,w.jsx)(gy,{}),(0,w.jsx)(by,{onNavigate:r,currentPage:`legal`,language:i,onLanguageChange:a}),(0,w.jsxs)(`main`,{className:`mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5`,children:[(0,w.jsxs)(`button`,{type:`button`,onClick:n,className:`mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300`,children:[(0,w.jsx)(z_,{className:`h-4 w-4`}),` `,o.back]}),(0,w.jsxs)(hy,{gradient:`from-cyan-400 via-cyan-500 to-cyan-400`,rounded:`rounded-[2rem]`,innerClassName:`rounded-[1.95rem] bg-[#07111f]/95 p-6 sm:p-10 backdrop-blur-xl`,children:[(0,w.jsx)(`h1`,{className:`text-3xl font-black text-white sm:text-5xl`,children:e}),(0,w.jsx)(`div`,{className:`mt-8 space-y-5 text-sm leading-8 text-zinc-300 sm:text-base`,children:t})]})]})]})}function jy({onBack:e,onNavigate:t,language:n,onLanguageChange:r}){if(n!==`de`){let i=n===`vi`?{title:`Thông tin pháp lý`,sections:[[`Thông tin theo § 5 DDG`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Đức`],[`Liên hệ`,`E-Mail: donguyennhan.de@gmail.com`],[`Chịu trách nhiệm về nội dung theo § 18 khoản 2 MStV`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Đức`],[`Lưu ý về nội dung`,`Website này là portfolio cá nhân và blog kỹ thuật. Nội dung được sử dụng để ghi lại các dự án riêng, thử nghiệm kỹ thuật, nghiên cứu, quá trình học tập và trao đổi chuyên môn. Website không cung cấp hoặc bán hàng hóa hay dịch vụ.`],[`Trách nhiệm đối với nội dung`,`Nội dung website được xây dựng cẩn thận nhất có thể. Tuy nhiên, tôi không thể đảm bảo tính chính xác, đầy đủ và cập nhật của toàn bộ nội dung.`],[`Trách nhiệm đối với liên kết`,`Website có chứa liên kết đến các website bên ngoài của bên thứ ba. Tôi không kiểm soát nội dung của các trang đó. Đơn vị vận hành từng website chịu trách nhiệm về nội dung được liên kết.`],[`Bản quyền`,`Nội dung và tác phẩm được công bố trên website tuân theo luật bản quyền Đức. Mọi hình thức sử dụng ngoài phạm vi luật bản quyền cần có sự đồng ý trước bằng văn bản của tác giả hoặc chủ sở hữu quyền.`]]}:{title:`Legal Notice`,sections:[[`Information pursuant to § 5 DDG`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Germany`],[`Contact`,`E-Mail: donguyennhan.de@gmail.com`],[`Responsible for content pursuant to § 18 para. 2 MStV`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Germany`],[`Content notice`,`This website is a personal portfolio and technical blog. Its content documents private projects, technical experiments, research, continuing education and professional exchange. No goods or services are offered or sold through this website.`],[`Liability for content`,`The content of this website has been prepared with the greatest possible care. However, no guarantee can be given for its accuracy, completeness or timeliness.`],[`Liability for links`,`This website contains links to external third-party websites. I have no control over their content. The respective operators are solely responsible for the content of linked pages.`],[`Copyright`,`The content and works published on this website are subject to German copyright law. Any use beyond the limits of copyright law requires prior written consent from the respective author or rights holder.`]]};return(0,w.jsx)(Ay,{title:i.title,onBack:e,onNavigate:t,language:n,onLanguageChange:r,children:i.sections.map(([e,t])=>(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:e}),(0,w.jsx)(`p`,{className:`whitespace-pre-line`,children:t})]},e))})}return(0,w.jsxs)(Ay,{title:`Impressum`,onBack:e,onNavigate:t,language:n,onLanguageChange:r,children:[(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Angaben gemäß § 5 DDG`}),(0,w.jsxs)(`p`,{children:[`Nguyen Nhan Do`,(0,w.jsx)(`br`,{}),`Hugo-Sinzheimerstr. 15`,(0,w.jsx)(`br`,{}),`60437 Frankfurt am Main`,(0,w.jsx)(`br`,{}),`Deutschland`]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Kontakt`}),(0,w.jsxs)(`p`,{children:[`E-Mail:`,` `,(0,w.jsx)(`a`,{href:`mailto:donguyennhan.de@gmail.com`,className:`text-cyan-400 underline hover:text-cyan-300`,children:`donguyennhan.de@gmail.com`})]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV`}),(0,w.jsxs)(`p`,{children:[`Nguyen Nhan Do`,(0,w.jsx)(`br`,{}),`Hugo-Sinzheimerstr. 15`,(0,w.jsx)(`br`,{}),`60437 Frankfurt am Main`,(0,w.jsx)(`br`,{}),`Deutschland`]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Hinweis zum Inhalt`}),(0,w.jsx)(`p`,{children:`Diese Website ist ein persönliches Portfolio sowie ein technischer Blog. Die Inhalte dienen der Dokumentation privater Projekte, technischer Experimente, Forschung, Weiterbildung und dem fachlichen Austausch.`}),(0,w.jsx)(`p`,{className:`mt-3`,children:`Es werden über diese Website keine Waren oder Dienstleistungen angeboten oder verkauft.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Haftung für Inhalte`}),(0,w.jsx)(`p`,{children:`Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Haftung für Links`}),(0,w.jsx)(`p`,{children:`Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`Urheberrecht`}),(0,w.jsx)(`p`,{children:`Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Rechteinhabers.`})]})]})}function My({onBack:e,onNavigate:t,language:n,onLanguageChange:r}){return n===`de`?(0,w.jsxs)(Ay,{title:`Datenschutz`,onBack:e,onNavigate:t,language:n,onLanguageChange:r,children:[(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`1. Verantwortlicher`}),(0,w.jsxs)(`p`,{children:[`Nguyen Nhan Do`,(0,w.jsx)(`br`,{}),`Hugo-Sinzheimerstr. 15`,(0,w.jsx)(`br`,{}),`60437 Frankfurt am Main`,(0,w.jsx)(`br`,{}),`Deutschland`,(0,w.jsx)(`br`,{}),`E-Mail:`,` `,(0,w.jsx)(`a`,{href:`mailto:donguyennhan.de@gmail.com`,className:`text-cyan-400 underline hover:text-cyan-300`,children:`donguyennhan.de@gmail.com`})]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`2. Allgemeine Hinweise`}),(0,w.jsx)(`p`,{children:`Diese Website ist ein persönliches Portfolio sowie ein technischer Blog. Es werden keine Waren oder Dienstleistungen über diese Website angeboten oder verkauft. Es werden keine Nutzerkonten, kein Newsletter und kein Kontaktformular betrieben.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`3. Hosting über GitHub Pages`}),(0,w.jsx)(`p`,{children:`Diese Website wird über GitHub Pages gehostet, einen Dienst der GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Beim Besuch dieser Website können durch GitHub technische Daten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browserinformationen, Betriebssysteminformationen sowie die aufgerufenen Seiten.`}),(0,w.jsx)(`p`,{className:`mt-3`,children:`Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der technischen Bereitstellung, Stabilität und Sicherheit dieser Website.`}),(0,w.jsxs)(`p`,{className:`mt-3`,children:[`Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in der Datenschutzerklärung von GitHub:`,` `,(0,w.jsx)(`a`,{href:`https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement`,target:`_blank`,rel:`noopener noreferrer`,className:`text-cyan-400 underline hover:text-cyan-300`,children:`GitHub Privacy Statement`}),`.`]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`4. Cookies und lokale Speicherung`}),(0,w.jsx)(`p`,{children:`Diese Website verwendet keine Tracking-Cookies, keine Werbe-Cookies und keine Analyse-Cookies.`}),(0,w.jsx)(`p`,{className:`mt-3`,children:`Soweit localStorage verwendet wird, dient dies ausschließlich der lokalen Speicherung technischer oder funktionaler Einstellungen im Browser, beispielsweise zur Speicherung dieses Datenschutzhinweises oder anderer technisch notwendiger Benutzereinstellungen. Diese Daten werden nicht zu Werbezwecken verwendet und nicht an Dritte übermittelt.`}),(0,w.jsx)(`p`,{className:`mt-3`,children:`Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der nutzerfreundlichen und technisch sinnvollen Bereitstellung der Website.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`5. Keine Analyse-Tools`}),(0,w.jsx)(`p`,{children:`Auf dieser Website werden keine Analyse-Tools wie Google Analytics, Meta Pixel, Hotjar oder vergleichbare Tracking-Dienste eingesetzt.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`6. Kontaktaufnahme per E-Mail`}),(0,w.jsx)(`p`,{children:`Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet. Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Pflicht dazu besteht.`}),(0,w.jsx)(`p`,{className:`mt-3`,children:`Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage mit vorvertraglichen oder vertraglichen Maßnahmen zusammenhängt. In allen anderen Fällen ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der Bearbeitung und Beantwortung Ihrer Anfrage.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`7. Externe Links`}),(0,w.jsx)(`p`,{children:`Diese Website enthält Links zu externen Websites, insbesondere zu GitHub, Google Drive oder anderen technischen Ressourcen. Wenn Sie einen externen Link anklicken, verlassen Sie diese Website. Für die Datenverarbeitung auf den verlinkten Websites sind ausschließlich die jeweiligen Anbieter verantwortlich.`})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`8. Ihre Rechte`}),(0,w.jsx)(`p`,{children:`Sie haben nach der DSGVO das Recht auf Auskunft nach Art. 15 DSGVO, Berichtigung nach Art. 16 DSGVO, Löschung nach Art. 17 DSGVO, Einschränkung der Verarbeitung nach Art. 18 DSGVO, Datenübertragbarkeit nach Art. 20 DSGVO sowie Widerspruch gegen die Verarbeitung nach Art. 21 DSGVO.`}),(0,w.jsxs)(`p`,{className:`mt-3`,children:[`Zur Ausübung Ihrer Rechte können Sie mich jederzeit per E-Mail kontaktieren:`,` `,(0,w.jsx)(`a`,{href:`mailto:donguyennhan.de@gmail.com`,className:`text-cyan-400 underline hover:text-cyan-300`,children:`donguyennhan.de@gmail.com`}),`.`]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`9. Beschwerderecht bei der Aufsichtsbehörde`}),(0,w.jsx)(`p`,{children:`Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.`}),(0,w.jsxs)(`p`,{className:`mt-3`,children:[`Zuständige Aufsichtsbehörde:`,(0,w.jsx)(`br`,{}),`Der Hessische Beauftragte für Datenschutz und Informationsfreiheit`,(0,w.jsx)(`br`,{}),`Postfach 3163`,(0,w.jsx)(`br`,{}),`65021 Wiesbaden`,(0,w.jsx)(`br`,{}),`Deutschland`,(0,w.jsx)(`br`,{}),`Website:`,` `,(0,w.jsx)(`a`,{href:`https://datenschutz.hessen.de`,target:`_blank`,rel:`noopener noreferrer`,className:`text-cyan-400 underline hover:text-cyan-300`,children:`datenschutz.hessen.de`})]})]}),(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:`10. Aktualität dieser Erklärung`}),(0,w.jsx)(`p`,{children:`Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.`})]})]}):(0,w.jsx)(Ay,{title:n===`vi`?`Quyền riêng tư`:`Privacy Policy`,onBack:e,onNavigate:t,language:n,onLanguageChange:r,children:(n===`vi`?[[`1. Đơn vị chịu trách nhiệm`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Đức
E-Mail: donguyennhan.de@gmail.com`],[`2. Thông tin chung`,`Website này là portfolio cá nhân và blog kỹ thuật. Website không bán hàng hóa hoặc dịch vụ, không có tài khoản người dùng, newsletter hay biểu mẫu liên hệ.`],[`3. Hosting qua GitHub Pages`,`Website được host bằng GitHub Pages, một dịch vụ của GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Khi truy cập, GitHub có thể xử lý dữ liệu kỹ thuật như địa chỉ IP, thời gian truy cập, thông tin trình duyệt, hệ điều hành và các trang đã mở. Việc xử lý nhằm cung cấp website ổn định và an toàn theo Điều 6 khoản 1 điểm f GDPR.`],[`4. Cookie và lưu trữ cục bộ`,`Website không sử dụng cookie theo dõi, quảng cáo hoặc phân tích. localStorage chỉ được dùng để lưu cục bộ các thiết lập kỹ thuật hoặc chức năng, ví dụ lựa chọn thông báo quyền riêng tư và ngôn ngữ. Dữ liệu không được dùng cho quảng cáo hoặc chuyển cho bên thứ ba.`],[`5. Không sử dụng công cụ phân tích`,`Website không sử dụng Google Analytics, Meta Pixel, Hotjar hoặc các dịch vụ theo dõi tương tự.`],[`6. Liên hệ qua e-mail`,`Nếu bạn liên hệ qua e-mail, dữ liệu gửi kèm chỉ được xử lý để trả lời yêu cầu. Dữ liệu không được chuyển cho bên thứ ba trừ khi pháp luật yêu cầu.`],[`7. Liên kết bên ngoài`,`Website chứa liên kết đến GitHub, Google Drive và các tài nguyên kỹ thuật khác. Khi mở liên kết ngoài, bạn rời website này. Nhà cung cấp tương ứng chịu trách nhiệm về việc xử lý dữ liệu trên website của họ.`],[`8. Quyền của bạn`,`Theo GDPR, bạn có quyền được cung cấp thông tin, chỉnh sửa, xóa, hạn chế xử lý, chuyển dữ liệu và phản đối việc xử lý. Bạn có thể liên hệ qua e-mail: donguyennhan.de@gmail.com.`],[`9. Quyền khiếu nại`,`Bạn có quyền khiếu nại với cơ quan giám sát bảo vệ dữ liệu nếu cho rằng dữ liệu cá nhân của mình bị xử lý trái với GDPR. Cơ quan phụ trách: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden, Đức.`],[`10. Cập nhật tuyên bố này`,`Tuyên bố quyền riêng tư có thể được điều chỉnh khi website, các dịch vụ được sử dụng hoặc yêu cầu pháp lý thay đổi.`]]:[[`1. Controller`,`Nguyen Nhan Do
Hugo-Sinzheimerstr. 15
60437 Frankfurt am Main
Germany
E-Mail: donguyennhan.de@gmail.com`],[`2. General information`,`This website is a personal portfolio and technical blog. No goods or services are offered or sold. There are no user accounts, newsletter or contact form.`],[`3. Hosting via GitHub Pages`,`This website is hosted through GitHub Pages, a service provided by GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. When visiting the website, GitHub may process technical data such as IP address, access time, browser information, operating system information and requested pages. Processing is necessary to provide the website securely and reliably under Art. 6 para. 1 lit. f GDPR.`],[`4. Cookies and local storage`,`This website does not use tracking, advertising or analytics cookies. localStorage is only used locally for technical or functional settings, such as remembering the privacy notice and selected language. This data is not used for advertising or transferred to third parties.`],[`5. No analytics tools`,`This website does not use Google Analytics, Meta Pixel, Hotjar or comparable tracking services.`],[`6. Contact by e-mail`,`If you contact me by e-mail, the transmitted data will only be processed to respond to your request. It will not be passed to third parties unless required by law.`],[`7. External links`,`This website contains links to GitHub, Google Drive and other technical resources. When opening an external link, you leave this website. The respective provider is responsible for data processing on the linked website.`],[`8. Your rights`,`Under the GDPR, you have the right to access, rectification, erasure, restriction of processing, data portability and objection. You can contact me by e-mail: donguyennhan.de@gmail.com.`],[`9. Right to lodge a complaint`,`You have the right to lodge a complaint with a data protection supervisory authority if you believe that your personal data has been processed in breach of the GDPR. Competent authority: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden, Germany.`],[`10. Updates to this statement`,`This privacy statement may be updated if the website, the services used or legal requirements change.`]]).map(([e,t])=>(0,w.jsxs)(`section`,{children:[(0,w.jsx)(`p`,{className:`font-bold text-white`,children:e}),(0,w.jsx)(`p`,{className:`whitespace-pre-line`,children:t})]},e))})}function Ny(){let e=new URLSearchParams(window.location.search).get(`admin`)===`1`,t=e,[n,r]=(0,C.useState)(!1),[i,a]=(0,C.useState)(()=>window.localStorage.getItem(Ov)===`active`),[o,s]=(0,C.useState)(`home`),[c,l]=(0,C.useState)(null),[u,d]=(0,C.useState)(()=>{let e=window.localStorage.getItem(`site-language`);return Cv.includes(e)?e:`de`});(0,C.useEffect)(()=>{window.localStorage.setItem(`site-language`,u),document.documentElement.lang=u},[u]);let f=(0,C.useMemo)(()=>O_(u),[u]),p=(0,C.useMemo)(()=>f.filter(e=>e.content_type!==`knowledge`),[f]),m=(0,C.useMemo)(()=>f.filter(e=>e.content_type===`knowledge`),[f]),h=T_.length?T_:Ev,g=(0,C.useMemo)(()=>p.find(e=>String(e.id)===String(c))||null,[p,c]),_=(0,C.useMemo)(()=>m.find(e=>String(e.id)===String(c))||null,[m,c]),v=(0,C.useCallback)((e,t=null)=>{let n=new URLSearchParams;e===`post`&&t?n.set(`post`,t):e===`knowledge-post`&&t?n.set(`knowledge`,t):e===`knowledge`?n.set(`page`,`knowledge`):e===`impressum`?n.set(`page`,`impressum`):e===`datenschutz`&&n.set(`page`,`datenschutz`);let r=n.toString();return r?`${window.location.pathname}?${r}`:window.location.pathname},[]),y=(0,C.useCallback)(()=>{let e=new URLSearchParams(window.location.search),t=e.get(`post`),n=e.get(`knowledge`),r=e.get(`page`);return t?{page:`post`,currentPostId:t}:n?{page:`knowledge-post`,currentPostId:n}:r===`knowledge`?{page:`knowledge`,currentPostId:null}:r===`impressum`?{page:`impressum`,currentPostId:null}:r===`datenschutz`?{page:`datenschutz`,currentPostId:null}:{page:`home`,currentPostId:null}},[]);(0,C.useEffect)(()=>{if(e)return;let t=y();s(t.page),l(t.currentPostId),window.history.replaceState({},``,v(t.page,t.currentPostId));let n=()=>{let e=y();s(e.page),l(e.currentPostId)};return window.addEventListener(`popstate`,n),()=>window.removeEventListener(`popstate`,n)},[v,e,y]);let b=(0,C.useCallback)((e,t=null,n=!1)=>{s(e),l(t);let r=v(e,t);n?window.history.replaceState({},``,r):window.history.pushState({},``,r)},[v]),x=(0,C.useCallback)(e=>`?post=${encodeURIComponent(e)}`,[]),S=(0,C.useCallback)(e=>`?knowledge=${encodeURIComponent(e)}`,[]),T=(0,C.useCallback)(e=>b(`post`,e),[b]),D=(0,C.useCallback)(e=>b(`knowledge-post`,e),[b]),O=(0,C.useCallback)(e=>b(e,null),[b]),ee=(0,C.useCallback)(()=>b(`home`,null),[b]),te=(0,C.useCallback)(()=>b(`impressum`,null),[b]),ne=(0,C.useCallback)(()=>b(`datenschutz`,null),[b]),re=(0,C.useCallback)(()=>{if(i){window.location.assign(`${window.location.pathname}?admin=1`);return}r(!0)},[i]),k=(0,C.useCallback)(()=>{a(!0),window.location.assign(`${window.location.pathname}?admin=1`)},[]),ie=(0,C.useCallback)(()=>{zv(!1),a(!1),window.location.assign(window.location.pathname)},[]),ae=(0,C.useCallback)(()=>{r(!1),e&&window.location.assign(window.location.pathname)},[e]);return t?i?(0,w.jsx)(Oy,{onLogout:ie}):(0,w.jsx)(vy,{language:u,onLanguageChange:d,onAuthenticated:k,onBack:ae}):n?(0,w.jsx)(vy,{language:u,onLanguageChange:d,onAuthenticated:k,onBack:ae}):o===`impressum`?(0,w.jsx)(jy,{onBack:ee,onNavigate:s,language:u,onLanguageChange:d}):o===`datenschutz`?(0,w.jsx)(My,{onBack:ee,onNavigate:s,language:u,onLanguageChange:d}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(E,{language:u}),(0,w.jsx)(by,{onNavigate:O,currentPage:o,language:u,onLanguageChange:d,onAdminAccess:re,isAdminAuthenticated:i}),o===`post`&&g?(0,w.jsx)(Ty,{post:g,onBack:ee,language:u}):o===`knowledge-post`&&_?(0,w.jsx)(Dy,{post:_,onBack:()=>O(`knowledge`),language:u}):o===`knowledge`?(0,w.jsx)(Ey,{posts:m,onOpenPost:D,getPostUrl:S,language:u}):(0,w.jsx)(ky,{posts:p,galleryImages:h,onOpenPost:T,getPostUrl:x,onGoImpressum:te,onGoDatenschutz:ne,language:u})]})}S.createRoot(document.getElementById(`root`)).render((0,w.jsx)(C.StrictMode,{children:(0,w.jsx)(Ny,{})}));