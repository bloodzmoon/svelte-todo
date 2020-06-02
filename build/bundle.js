var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(c(n,e))}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e,o,r,s,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=i(n,e,o,c);t.p(r,u)}}function l(t){return null==t?"":t}function f(n){return n&&r(n.destroy)?n.destroy:t}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function v(){return m("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n){t.value=null==n?"":n}let w;function E(t){w=t}function k(){const t=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function _(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const A=[],j=[],C=[],O=[],L=Promise.resolve();let N=!1;function T(){N||(N=!0,L.then(q))}function S(t){C.push(t)}let D=!1;const R=new Set;function q(){if(!D){D=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];E(n),I(n.$$)}for(A.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];R.has(n)||(R.add(n),n())}C.length=0}while(A.length);for(;O.length;)O.pop()();N=!1,D=!1,R.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const V=new Set;let M;function z(){M={r:0,c:[],p:M}}function F(){M.r||o(M.c),M=M.p}function H(t,n){t&&t.i&&(V.delete(t),t.i(n))}function J(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),M.c.push(()=>{V.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function U(t){t&&t.c()}function B(t,e,s){const{fragment:c,on_mount:u,on_destroy:i,after_update:a}=t.$$;c&&c.m(e,s),S(()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(S)}function P(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(n,r,s,c,u,i,a=[-1]){const l=w;E(n);const f=r.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:a};let p=!1;if(d.ctx=s?s(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(A.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();r.intro&&H(n.$$.fragment),B(n,r.target,r.anchor),q()}E(l)}class G{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const K=[];function Q(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let o;const r=[];function c(t){if(s(n,t)&&(n=t,o)){const t=!K.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),K.push(e,n)}if(t){for(let t=0;t<K.length;t+=2)K[t][0](K[t+1]);K.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,u=t){const i=[s,u];return r.push(i),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Y(n,e,s){const u=!Array.isArray(n),i=u?[n]:n,a=e.length<2;return Q(s,n=>{let s=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(u?l[0]:l,n);a?n(o):d=r(o)?o:t},h=i.map((t,n)=>c(t,t=>{l[n]=t,f&=~(1<<n),s&&p()},()=>{f|=1<<n}));return s=!0,p(),function(){o(h),d()}})}function Z(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],u="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)"*"===(e=r[0])?(c.push("wild"),u+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),u+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(u+=(~o?"?":"")+"\\"+r.substring(s))):u+="/"+r;return{keys:c,pattern:new RegExp("^"+u+(n?"(?=$|/)":"/?$"),"i")}}function tt(t){let n,e;var o=t[0];if(o){var r=new o({});r.$on("routeEvent",t[10])}return{c(){r&&U(r.$$.fragment),n=v()},m(t,o){r&&B(r,t,o),p(t,n,o),e=!0},p(t,e){if(o!==(o=t[0])){if(r){z();const t=r;J(t.$$.fragment,1,0,()=>{P(t,1)}),F()}o?((r=new o({})).$on("routeEvent",t[10]),U(r.$$.fragment),H(r.$$.fragment,1),B(r,n.parentNode,n)):r=null}},i(t){e||(r&&H(r.$$.fragment,t),e=!0)},o(t){r&&J(r.$$.fragment,t),e=!1},d(t){t&&h(n),r&&P(r,t)}}}function nt(t){let n,e;var o=t[0];function r(t){return{props:{params:t[1]}}}if(o){var s=new o(r(t));s.$on("routeEvent",t[9])}return{c(){s&&U(s.$$.fragment),n=v()},m(t,o){s&&B(s,t,o),p(t,n,o),e=!0},p(t,e){const c={};if(2&e&&(c.params=t[1]),o!==(o=t[0])){if(s){z();const t=s;J(t.$$.fragment,1,0,()=>{P(t,1)}),F()}o?((s=new o(r(t))).$on("routeEvent",t[9]),U(s.$$.fragment),H(s.$$.fragment,1),B(s,n.parentNode,n)):s=null}else o&&s.$set(c)},i(t){e||(s&&H(s.$$.fragment,t),e=!0)},o(t){s&&J(s.$$.fragment,t),e=!1},d(t){t&&h(n),s&&P(s,t)}}}function et(t){let n,e,o,r;const s=[nt,tt],c=[];function u(t,n){return t[1]?0:1}return n=u(t),e=c[n]=s[n](t),{c(){e.c(),o=v()},m(t,e){c[n].m(t,e),p(t,o,e),r=!0},p(t,[r]){let i=n;n=u(t),n===i?c[n].p(t,r):(z(),J(c[i],1,1,()=>{c[i]=null}),F(),e=c[n],e||(e=c[n]=s[n](t),e.c()),H(e,1),e.m(o.parentNode,o))},i(t){r||(H(e),r=!0)},o(t){J(e),r=!1},d(t){c[n].d(t),t&&h(o)}}}function ot(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const rt=Q(null,(function(t){t(ot());const n=()=>{t(ot())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Y(rt,t=>t.location),Y(rt,t=>t.querystring);function st(t,n){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return ct(t,n||t.getAttribute("href")),{update(n){ct(t,n)}}}function ct(t,n){if(!n||n.length<1||"/"!=n.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+n)}function ut(n,e,o){let r,s=t;u(n,rt,t=>o(4,r=t)),n.$$.on_destroy.push(()=>s());let{routes:c={}}=e,{prefix:i=""}=e;class a{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:o}=Z(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.route,this.conditions=n.conditions||[],this.userData=n.userData):(this.component=n,this.conditions=[],this.userData=void 0),this._pattern=e,this._keys=o}match(t){i&&t.startsWith(i)&&(t=t.substr(i.length)||"/");const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;)e[this._keys[o]]=n[++o]||null;return e}checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!this.conditions[n](t))return!1;return!0}}const l=[];c instanceof Map?c.forEach((t,n)=>{l.push(new a(n,t))}):Object.keys(c).forEach(t=>{l.push(new a(t,c[t]))});let f=null,d=null;const p=k(),h=(t,n)=>{(T(),L).then(()=>{p(t,n)})};return n.$set=t=>{"routes"in t&&o(2,c=t.routes),"prefix"in t&&o(3,i=t.prefix)},n.$$.update=()=>{if(17&n.$$.dirty){o(0,f=null);let t=0;for(;!f&&t<l.length;){const n=l[t].match(r.location);if(n){const e={component:l[t].component,name:l[t].component.name,location:r.location,querystring:r.querystring,userData:l[t].userData};if(!l[t].checkConditions(e)){h("conditionsFailed",e);break}o(0,f=l[t].component),n&&"object"==typeof n&&Object.keys(n).length?o(1,d=n):o(1,d=null),h("routeLoaded",e)}t++}}},[f,d,c,i,r,a,l,p,h,function(t){_(n,t)},function(t){_(n,t)}]}class it extends G{constructor(t){super(),W(this,t,ut,et,s,{routes:2,prefix:3})}}const at=[];let lt;function ft(t){(t.className||"").split(" ").forEach(n=>{n&&(t.node.classList.remove(n),t.pattern.test(lt)&&t.node.classList.add(n))})}function dt(t,n){if(!(n=n&&("string"==typeof n||"object"==typeof n&&n instanceof RegExp)?{path:n}:n||{}).path&&t.hasAttribute("href")&&(n.path=t.getAttribute("href"),n.path&&n.path.length>1&&"#"==n.path.charAt(0)&&(n.path=n.path.substring(1))),n.className||(n.className="active"),!n.path||"string"==typeof n.path&&(n.path.length<1||"/"!=n.path.charAt(0)&&"*"!=n.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:e}="string"==typeof n.path?Z(n.path):{pattern:n.path},o={node:t,className:n.className,pattern:e};return at.push(o),ft(o),{destroy(){at.splice(at.indexOf(o),1)}}}rt.subscribe(t=>{lt=t.location+(t.querystring?"?"+t.querystring:""),at.map(ft)});var pt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),ht=new Uint8Array(16);function gt(){if(!pt)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return pt(ht)}for(var mt=[],$t=0;$t<256;++$t)mt.push(($t+256).toString(16).substr(1));function vt(t,n,e){"string"==typeof t&&(n="binary"===t?new Uint8Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||gt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){for(var r=e||0,s=0;s<16;++s)n[r+s]=o[s];return n}return function(t,n){var e=n||0,o=mt;return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}(o)}const yt=(()=>{const{subscribe:t,set:n,update:e}=X([]);return{subscribe:t,addTodo:t=>e(n=>[...n,{id:vt(),task:t,done:!1}]),delTodo:t=>e(n=>n.filter(n=>n.id!==t)),toggleTodo:t=>e(n=>n.map(n=>n.id===t?{...n,done:!n.done}:n)),useLocalStorage:()=>{const e=localStorage.getItem("svelte-todo");e&&n(JSON.parse(e)),t(t=>{localStorage.setItem("svelte-todo",JSON.stringify(t))})}}})();function bt(n){let e;return{c(){e=g("div"),e.innerHTML='<div class="bg svelte-1sobj9v"></div> \n  <div class="content svelte-1sobj9v"><h1 class=" title svelte-1sobj9v"><span class="em svelte-1sobj9v">S V E L T E</span>\n      / T O D O\n    </h1> \n    <p class="createdby svelte-1sobj9v">\n      Created by\n      <a class="name svelte-1sobj9v" href="https://github.com/bloodzmoon" target="_blank" rel="noopener noreferrer">\n        Thanyathon\n      </a></p></div>',b(e,"class","home-page svelte-1sobj9v")},m(t,n){p(t,e,n)},p:t,i:t,o:t,d(t){t&&h(e)}}}function xt(n){let e,o,r;return{c(){e=g("input"),b(e,"placeholder",n[1]),b(e,"class","input svelte-hzntw5")},m(t,s){p(t,e,s),x(e,n[0]),o||(r=y(e,"input",n[2]),o=!0)},p(t,[n]){2&n&&b(e,"placeholder",t[1]),1&n&&e.value!==t[0]&&x(e,t[0])},i:t,o:t,d(t){t&&h(e),o=!1,r()}}}function wt(t,n,e){let{placeholder:o}=n,{value:r}=n;return t.$set=t=>{"placeholder"in t&&e(1,o=t.placeholder),"value"in t&&e(0,r=t.value)},[r,o,function(){r=this.value,e(0,r)}]}class Et extends G{constructor(t){super(),W(this,t,wt,xt,s,{placeholder:1,value:0})}}function kt(t){let n,e;const o=t[1].default,r=function(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}(o,t,t[0],null);return{c(){n=g("button"),r&&r.c(),b(n,"class","button svelte-acnv9p")},m(t,o){p(t,n,o),r&&r.m(n,null),e=!0},p(t,[n]){r&&r.p&&1&n&&a(r,o,t,t[0],n,null,null)},i(t){e||(H(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){t&&h(n),r&&r.d(t)}}}function _t(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class At extends G{constructor(t){super(),W(this,t,_t,kt,s,{})}}function jt(t,n,e){const o=t.slice();return o[3]=n[e],o}function Ct(t){let n,e,r,s,c,u,i,a,f,v,x,w=t[3].task+"";return{c(){n=g("div"),e=m(w),r=$(),s=g("span"),c=m("DEL"),i=$(),b(s,"class","del svelte-lt2mds"),b(s,"data-value",u=t[3].id),b(n,"class",a=l(t[3].done?"todo-item done":"todo-item")+" svelte-lt2mds"),b(n,"data-value",f=t[3].id)},m(o,u){p(o,n,u),d(n,e),d(n,r),d(n,s),d(s,c),d(n,i),v||(x=[y(s,"click",t[1]),y(n,"click",t[2])],v=!0)},p(t,o){1&o&&w!==(w=t[3].task+"")&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(e,w),1&o&&u!==(u=t[3].id)&&b(s,"data-value",u),1&o&&a!==(a=l(t[3].done?"todo-item done":"todo-item")+" svelte-lt2mds")&&b(n,"class",a),1&o&&f!==(f=t[3].id)&&b(n,"data-value",f)},d(t){t&&h(n),v=!1,o(x)}}}function Ot(n){let e,o,r,s=n[0],c=[];for(let t=0;t<s.length;t+=1)c[t]=Ct(jt(n,s,t));return{c(){e=g("div"),o=g("h3"),o.textContent="TODO LIST",r=$();for(let t=0;t<c.length;t+=1)c[t].c();b(o,"class","todo-title svelte-lt2mds"),b(e,"class","todo-list svelte-lt2mds")},m(t,n){p(t,e,n),d(e,o),d(e,r);for(let t=0;t<c.length;t+=1)c[t].m(e,null)},p(t,[n]){if(1&n){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=jt(t,s,o);c[o]?c[o].p(r,n):(c[o]=Ct(r),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=s.length}},i:t,o:t,d(t){t&&h(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t)}}}function Lt(t,n,e){let o;u(t,yt,t=>e(0,o=t));return[o,t=>yt.delTodo(t.target.dataset.value),t=>yt.toggleTodo(t.target.dataset.value)]}class Nt extends G{constructor(t){super(),W(this,t,Lt,Ot,s,{})}}function Tt(t){let n;return{c(){n=m("ADD")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function St(t){let n,e,o,r,s,c,u,i;function a(n){t[2].call(null,n)}let l={placeholder:"Type something to add..."};void 0!==t[0]&&(l.value=t[0]);const f=new Et({props:l});j.push(()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(f,"value",a));const m=new At({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),v=new Nt({});return{c(){n=g("div"),e=g("form"),U(f.$$.fragment),r=$(),U(m.$$.fragment),s=$(),U(v.$$.fragment),b(n,"class","todo-page svelte-17kyyc9")},m(o,a){var l;p(o,n,a),d(n,e),B(f,e,null),d(e,r),B(m,e,null),d(n,s),B(v,n,null),c=!0,u||(i=y(e,"submit",(l=t[1],function(t){return t.preventDefault(),l.call(this,t)})),u=!0)},p(t,[n]){const e={};var r;!o&&1&n&&(o=!0,e.value=t[0],r=()=>o=!1,O.push(r)),f.$set(e);const s={};8&n&&(s.$$scope={dirty:n,ctx:t}),m.$set(s)},i(t){c||(H(f.$$.fragment,t),H(m.$$.fragment,t),H(v.$$.fragment,t),c=!0)},o(t){J(f.$$.fragment,t),J(m.$$.fragment,t),J(v.$$.fragment,t),c=!1},d(t){t&&h(n),P(f),P(m),P(v),u=!1,i()}}}function Dt(t,n,e){let o;return[o,()=>{yt.addTodo(o),e(0,o="")},function(t){o=t,e(0,o)}]}const Rt={"/":class extends G{constructor(t){super(),W(this,t,null,bt,s,{})}},"/todo":class extends G{constructor(t){super(),W(this,t,Dt,St,s,{})}}};function qt(n){let e,r,s,c,u,i,a,l,m,v,y,x,w;const E=new it({props:{routes:Rt}});return{c(){e=g("div"),r=g("nav"),s=g("a"),s.textContent="Home",i=$(),a=g("a"),a.textContent="Todo",v=$(),U(E.$$.fragment),b(s,"href","/"),b(a,"href","/todo"),b(r,"id","nav"),b(r,"class","svelte-1xh515c")},m(t,n){p(t,e,n),d(e,r),d(r,s),d(r,i),d(r,a),d(e,v),B(E,e,null),y=!0,x||(w=[f(c=st.call(null,s)),f(u=dt.call(null,s)),f(l=st.call(null,a)),f(m=dt.call(null,a))],x=!0)},p:t,i(t){y||(H(E.$$.fragment,t),y=!0)},o(t){J(E.$$.fragment,t),y=!1},d(t){t&&h(e),P(E),x=!1,o(w)}}}function It(t){return yt.useLocalStorage(),[]}return new class extends G{constructor(t){super(),W(this,t,It,qt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
