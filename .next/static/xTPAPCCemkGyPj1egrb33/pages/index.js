(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(238),{page:t.exports.default}})},238:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n.n(r),i=n(0),u=n.n(i),a=n(38);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var b=function(t){function e(){var t,n,r,o,i,u,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var f=arguments.length,s=new Array(f),p=0;p<f;p++)s[p]=arguments[p];return r=this,n=!(o=(t=l(e)).call.apply(t,[this].concat(s)))||"object"!==c(o)&&"function"!=typeof o?y(r):o,i=y(y(n)),a={name:"mik"},(u="state")in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a,n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i["Component"]),n=e,r=[{key:"render",value:function(){return u.a.createElement("div",null,this.state.name)}}],a=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(e){var n,r=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.store,e.isServer,e.pathname,e.query,n.subscribe(function(){r.setState({name:n.getState().login.login})});case 2:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){f(i,r,o,u,a,"next",t)}function a(t){f(i,r,o,u,a,"throw",t)}u(void 0)})});return function(t){return e.apply(this,arguments)}}()}],r&&s(n.prototype,r),a&&s(n,a),e}();e.default=Object(a.b)()(b)}},[[237,1,0]]]);