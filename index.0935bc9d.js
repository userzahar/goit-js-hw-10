var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,c=a||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=i.test(t);return a||r.test(t)?u(t.slice(2),a?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,a,f,c=0,l=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,a=setTimeout(T,e),l?b(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||g&&t-c>=r}function T(){var t=d();if(j(t))return w(t);a=setTimeout(T,function(t){var n=e-(t-f);return g?m(n,r-(t-c)):n}(t))}function w(t){return a=void 0,y&&o?b(t):(o=i=void 0,u)}function O(){var t=d(),n=j(t);if(o=arguments,i=this,f=t,n){if(void 0===a)return h(f);if(g)return a=setTimeout(T,e),b(f)}return void 0===a&&(a=setTimeout(T,e)),u}return e=v(e)||0,p(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(v(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?u:w(d())},O};const g=document.getElementById("search-box"),y=document.querySelector(".country-list");g.addEventListener("input",e((function(t){n=t.target.value.trim(),(e=n,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`)).then((t=>t.json())).then((t=>{t.length>10?console.log("Too many matches found. Please enter a more specific name."):(console.log(t),function(t){const e=t.map((t=>`<li class='country-list'><img src =${t.flags.svg} width='30' heigth='20'></img>${t.name.common}</li>`)).join("");y.innerHTML=e,t.map((t=>console.log(t.flags.svg)))}(t))})).catch((t=>console.log("пиши нормально")));var e;var n}),300));
//# sourceMappingURL=index.0935bc9d.js.map