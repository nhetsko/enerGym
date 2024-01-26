var U=Object.defineProperty;var _=(s,t,e)=>t in s?U(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var L=(s,t,e)=>(_(s,typeof t!="symbol"?t+"":t,e),e),O=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var n=(s,t,e)=>(O(s,t,"read from private field"),e?e.call(s):t.get(s)),a=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},q=(s,t,e,r)=>(O(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e);/* empty css                      */import{A as N}from"./assets/vendor-0fffa566.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const w of i.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&r(w)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();var u;class E{constructor(t){a(this,u,void 0);q(this,u,t)}json(){return JSON.parse(n(this,u).data)}}u=new WeakMap;class j{constructor(t){L(this,"axiosInstance");const e={accept:"application/json","content-type":"application/json"};this.axiosInstance=new N({baseURL:t,headers:{...e}})}async get(t,e){const r=await this.axiosInstance.get(t,e);return new E(r)}async patch(t,e){const r=await this.axiosInstance.patch(t,e);return new E(r)}async post(t,e){const r=await this.axiosInstance.post(t,e);return new E(r)}}var d,c;class D{constructor(){a(this,d,"https://energyflow.b.goit.study/api/");a(this,c,new j(n(this,d)))}async get(t,e=""){return e?await n(this,c).get(t,e):await n(this,c).get(t)}async patch(t,e=""){return e?await n(this,c).patch(t,e):await n(this,c).patch(t)}async post(t,e=""){return e?await n(this,c).post(t,e):await n(this,c).post(t)}setPathParameters(t,e){let r=t;for(const o in e)r=r.replace(`{${o}}`,e[o]);return r}}d=new WeakMap,c=new WeakMap;var p,f,h,m,y,g;const I=class I extends D{constructor(){super(...arguments);a(this,p,"filters");a(this,f,"exercises");a(this,h,"exercises/{exerciseID}");a(this,m,"exercises/{exerciseID}/rating");a(this,y,"quote/");a(this,g,"subscription")}async init(){return new I}async getListExercises(e){return await this.get(n(this,p),{params:e})}async getListExercisesBySubspecies(e){return await this.get(n(this,f),{params:e})}async getQuote(){return await this.get(n(this,y))}async getExerciseById(e){return await this.get(this.setPathParameters(n(this,h),{exerciseID:e}))}async addRating(e,r){return await this.patch(this.setPathParameters(n(this,m),{exerciseID:e}),JSON.stringify(r))}async createSubscription(e){return await this.post(n(this,g),JSON.stringify(e))}};p=new WeakMap,f=new WeakMap,h=new WeakMap,m=new WeakMap,y=new WeakMap,g=new WeakMap;let S=I;document.querySelector(".js-modal-container");const R=document.querySelector(".backdrop");window.addEventListener("keydown",function(s){s.key==="Escape"&&R.classList.remove("is-open"),window.removeEventListener("keydown")});const T=document.querySelector(".js-menu"),B=document.querySelector(".js-open-menu"),M=document.querySelector(".js-close-menu"),b=()=>{const s=T.classList.toggle("is-open");document.body.style.overflow=s?"hidden":""};B.addEventListener("click",b);M.addEventListener("click",b);window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(T.classList.remove("is-open"),document.body.style.overflow="")});function $(s){return s.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}function J(s){return s===new Date().setHours(0,0,0,0)}function v(s){return new Date(s).setHours(0,0,0,0)}const x=document.querySelector(".filters-box"),P=document.getElementById("cards-list"),k=x.querySelector(".filters-list-item"),X=k.dataset.filter,F=`https://energyflow.b.goit.study/api/filters?filter=${X}&page=1&limit=8`;document.addEventListener("DOMContentLoaded",async()=>{try{const t=await(await fetch(F)).json();t.results&&t.results.length>0?A(P,t.results):console.error("No exercises found.")}catch(s){console.error("Error fetching exercises:",s)}});x.addEventListener("click",async s=>{if(s.target.classList.contains("filters-list-item")){x.querySelectorAll(".filters-list-item").forEach(r=>{r.classList.remove("active_item")}),s.target.classList.add("active_item");const e=`https://energyflow.b.goit.study/api/filters?filter=${s.target.dataset.filter}&page=1&limit=8`;try{const o=await(await fetch(e)).json();o.results&&o.results.length>0?A(P,o.results):console.error("No exercises found.")}catch(r){console.error("Error fetching exercises:",r)}}});function A(s,t){const e=t.reduce((r,o)=>r+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${o.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${$(o.name)}</h3>
      <p class="card-subtitle">${o.filter}</p>
    </li>`,"");s.innerHTML=e}const G=new S,C=G.init(),l={FAVORITE_EXERCISE:"favorite-exercise",QUOTE:"quote"};async function H(){const s=(await(await C).getQuote()).json();s.timeStamp=v(new Date),localStorage.setItem(l.QUOTE,JSON.stringify(s))}async function Q(){if(!localStorage.getItem(l.QUOTE))await H();else{const s=JSON.parse(localStorage.getItem(l.QUOTE)).timeStamp;if(!J(s)){const r=(await(await C).getQuote()).json();r.timeStamp=v(new Date),localStorage.setItem(l.QUOTE,JSON.stringify(r))}const{author:t,quote:e}=JSON.parse(localStorage.getItem(l.QUOTE));return{author:t,quote:e}}}async function W(){document.querySelector(".quote-info-content");const s=document.getElementById("quote-text"),t=document.querySelector(".quote-author");try{const{author:e,quote:r}=await Q();s.textContent=r,t.textContent=`${e}`}catch(e){console.error("Error fetching or updating the quote:",e)}}W();async function K(){document.querySelector(".favorites-info-container");const s=document.getElementById("favorites-text"),t=document.querySelector(".favorites-author");try{const{author:e,quote:r}=await Q();s.textContent=r,t.textContent=`${e}`}catch(e){console.error("Error fetching or updating the quote:",e)}}K();
//# sourceMappingURL=commonHelpers2.js.map
