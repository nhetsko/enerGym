var R=Object.defineProperty;var q=(s,e,t)=>e in s?R(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var v=(s,e,t)=>(q(s,typeof e!="symbol"?e+"":e,t),t),L=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var o=(s,e,t)=>(L(s,e,"read from private field"),t?t.call(s):e.get(s)),i=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},T=(s,e,t,r)=>(L(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);import{A as J}from"./vendor-ebddff4e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const C=document.querySelector(".js-menu"),Q=document.querySelector(".js-open-menu"),U=document.querySelector(".js-close-menu"),N=()=>{const s=C.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};Q.addEventListener("click",N);U.addEventListener("click",N);window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(C.classList.remove("is-open"),document.body.style.overflow="")});document.addEventListener("DOMContentLoaded",()=>{const s=window.location.pathname,e=s==="/"||s==="/enerGym/"?"index.html":s.split("/").pop(),t=r=>{document.querySelectorAll(r).forEach(a=>{const d=a.getAttribute("href");if(d.includes(e)){const b=d.includes("index.html")?"active-home":"active-favorites";a.classList.add(b)}})};["header-menu-link","mobile-menu-link"].forEach(r=>t(`.${r}`))});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".hero-text");s&&(s.style.display="none",setTimeout(function(){s.style.display="block"},500))});var u;class y{constructor(e){i(this,u,void 0);T(this,u,e)}json(){return JSON.parse(o(this,u).data)}info(){return{status:JSON.parse(o(this,u).status),message:JSON.parse(o(this,u).data).message,data:JSON.parse(o(this,u).data)}}}u=new WeakMap;class D{constructor(e){v(this,"axiosInstance");const t={accept:"application/json","content-type":"application/json"};this.axiosInstance=new J({baseURL:e,headers:{...t}})}async get(e,t){const r=await this.axiosInstance.get(e,t);return new y(r)}async patch(e,t){const r=await this.axiosInstance.patch(e,t);return new y(r)}async post(e,t){const r=await this.axiosInstance.post(e,t);return new y(r)}}var f,c;class F{constructor(){i(this,f,"https://energyflow.b.goit.study/api/");i(this,c,new D(o(this,f)))}async get(e,t=""){return t?await o(this,c).get(e,t):await o(this,c).get(e)}async patch(e,t=""){return t?await o(this,c).patch(e,t):await o(this,c).patch(e)}async post(e,t=""){return t?await o(this,c).post(e,t):await o(this,c).post(e)}setPathParameters(e,t){let r=e;for(const n in t)r=r.replace(`{${n}}`,t[n]);return r}}f=new WeakMap,c=new WeakMap;var h,p,m,g,S,E;const x=class x extends F{constructor(){super(...arguments);i(this,h,"filters");i(this,p,"exercises");i(this,m,"exercises/{exerciseID}");i(this,g,"exercises/{exerciseID}/rating");i(this,S,"quote/");i(this,E,"subscription")}async init(){return new x}async getListExercises(t){return await this.get(o(this,h),{params:t})}async getListExercisesBySubspecies(t){return await this.get(o(this,p),{params:t})}async getQuote(){return await this.get(o(this,S))}async getExerciseById(t){return await this.get(this.setPathParameters(o(this,m),{exerciseID:t}))}async addRating(t,r){return await this.patch(this.setPathParameters(o(this,g),{exerciseID:t}),JSON.stringify(r))}async createSubscription(t){return await this.post(o(this,E),JSON.stringify(t))}};h=new WeakMap,p=new WeakMap,m=new WeakMap,g=new WeakMap,S=new WeakMap,E=new WeakMap;let I=x;function H(s){return s.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function M(s){return s===new Date().setHours(0,0,0,0)}function P(s){return new Date(s).setHours(0,0,0,0)}const j=new I,_=j.init(),l={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};function $(s,e=l.FAVORITE_EXERCISE){if(!localStorage.getItem(e))localStorage.setItem(e,JSON.stringify([s]));else{const t=JSON.parse(localStorage.getItem(e));t.push(s),localStorage.setItem(e,JSON.stringify(t))}}function z(s,e=l.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return;let t=O(e);if(t.length>0){let r=t.filter(n=>n._id!==s);localStorage.setItem(e,JSON.stringify(r)),r.length===0&&localStorage.removeItem(e)}}function Y(s=l.FAVORITE_EXERCISE){return O(s)}function Z(s,e=l.FAVORITE_EXERCISE){if(!localStorage.getItem(e))return!1;let t=O(e);return t.length>0?t.filter(n=>n._id===s).length>0:!1}async function X(){const s=(await(await _).getQuote()).json();s.timeStamp=P(new Date),localStorage.setItem(l.QUOTE,JSON.stringify(s))}async function B(){if(!localStorage.getItem(l.QUOTE))await X();else{const s=JSON.parse(localStorage.getItem(l.QUOTE)).timeStamp;if(!M(s)){const r=(await(await _).getQuote()).json();r.timeStamp=P(new Date),localStorage.setItem(l.QUOTE,JSON.stringify(r))}const{author:e,quote:t}=JSON.parse(localStorage.getItem(l.QUOTE));return{author:e,quote:t}}}function O(s){try{return JSON.parse(localStorage.getItem(s))}catch{console.error("Parsing Error")}}const w=document.querySelector(".quote-info-content");async function G(){const{author:s,quote:e}=await B();await A(e,"favorites-text"),await A(s,"favorites-author")}function A(s,e){return new Promise(t=>{let r=0;const n=document.createElement(e==="favorites-text"?"p":"h3");n.id=e,e==="favorites-text"?n.classList.add("quote-text"):n.classList.add("quote-author"),w.appendChild(n);function a(){r<s.length?(n.textContent+=s.charAt(r),r++,setTimeout(a,40)):t()}a()})}const V=new IntersectionObserver((s,e)=>{s.forEach(t=>{t.isIntersecting&&(G(),e.unobserve(t.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",()=>{w&&V.observe(w)});export{I as E,$ as a,H as f,Y as g,Z as i,z as r};
//# sourceMappingURL=quote-73a36469.js.map
