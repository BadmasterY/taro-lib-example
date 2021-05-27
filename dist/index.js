!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@tarojs/components")):"function"==typeof define&&define.amd?define(["exports","react","@tarojs/components"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TaroLibExample={},e.React,e.components)}(this,(function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(t),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var i={exports:{}};
/*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var u=typeof o;if("string"===u||"number"===u)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===u)if(o.toString===Object.prototype.toString)for(var s in o)t.call(o,s)&&o[s]&&e.push(s);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(i);var s=i.exports;var a=function(e){return(e+1)%1e6};function f(){return function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return i}(t.useReducer(a,0),2)[1]}var c={List:function(e){var t=e.dataSource,n=e.classStr,u=e.itemKey,i=e.renderItem,a={},f=t.map((function(e,t){return function(e,t){var r;if(i)return(r="function"==typeof u?u(e):"string"==typeof u?e[u]:e.key)||(r="list-"+t),a[t]=r,i(e,t)}(e,t)})),c=o.default.Children.map(f,(function(e,t){return e&&(e.key=a[t]),e}));return o.default.createElement(r.View,{className:s("list",n)},c)}},l={useUpdate:f,useList:function(e){var r=t.useRef(e),n=f(),o=t.useMemo((function(){return{set:function(e){r.current=e,n()},push:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0!==e.length){var n=r.current.slice();o.set(n.concat(e)),n=null}},updateAt:function(e,t){var n=r.current.slice();n[e]=t,o.set(n),n=null},removeAt:function(e){var t=r.current.slice();t.splice(e,1),o.set(t),t=null},clear:function(){o.set([])},reset:function(){o.set(e.slice())}}}),[r]);return[r.current,o]}},p={test:function(){console.log("test utils!")}},d=u(u(u({},c),l),p);e.Components=c,e.Hooks=l,e.Utils=p,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
