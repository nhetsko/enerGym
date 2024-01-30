import{i as B,r as V,a as z,E as h,f as C}from"./assets/quote-e74d49c2.js";import"./assets/vendor-0fffa566.js";const L=document.body,v=document.querySelector(".backdrop"),I=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let l;function j(e){l=e,e._id,v.classList.add("is-open"),L.style.overflow="hidden",window.addEventListener("keydown",y),window.addEventListener("click",b);let i;B(e._id)?i=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Remove from favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-remove-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `:i=`
      <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                Add to favorites
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='./sprite.svg#icon-add-favorites'
                    ></use>
                  </svg>
                </p>
              </button>
      `,I.innerHTML=`
    <div class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${e.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${e.name}</h2>
          

        <div class="modal-ex-rating-container rating">
          <div class="rating-value">${e.rating}</div>
          <div class="rating-body">
            <div id="rating-active" class="rating-active"></div>
              <div class="rating-items">
                 <input type="radio" class="rating-item" value="1" name="rating">
                 <input type="radio" class="rating-item" value="2" name="rating">
                 <input type="radio" class="rating-item" value="3" name="rating">
                 <input type="radio" class="rating-item" value="4" name="rating">
                 <input type="radio" class="rating-item" value="5" name="rating">
              </div>
          </div>
        </div>
          
          
         

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercise-list">
        <li>
          <h3 class="title-description">Target</h3>
          <p class="value-description">${e.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${e.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${e.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${e.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${e.burnedCalories}/${e.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${e.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              ${i}
            </li>
            <li class="ex-modal-btn-list-item">
              <button data-rating="${e._id}" class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`;let t,n;document.querySelector(".rating")&&o();function o(){w(),a()}function w(){t=document.querySelector("#rating-active"),n=document.querySelector(".rating-value")}function a(){const c=n.innerHTML/.05;t.style.width=`${c}%`}}function y(e){e.key==="Escape"&&(v.classList.remove("is-open"),window.removeEventListener("keydown",y),window.removeEventListener("click",b))}function b(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(v.classList.remove("is-open"),L.style.overflow="auto",window.removeEventListener("click",b),window.removeEventListener("keydown",y)),e.target.classList.value.includes("rating-btn")&&(v.classList.remove("is-open"),L.style.overflow="auto",window.removeEventListener("click",b),window.removeEventListener("keydown",y))}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&(console.log(l),B(l._id)?(V(l._id),console.log("Remove exercise from favorites:",l,l._id),M(!1)):(z(l),console.log("Exercise added to favorites:",l),M(!0)))});function M(e){const i=e?"./sprite.svg#icon-remove-favorites":"./sprite.svg#icon-add-favorites",t=e?"Remove from favorites":"Add to favorites",n=I.querySelector(".js-add-remove-btn");n.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${t}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${i}'></use></svg></p></button>`}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),i=document.getElementById("confirmationModal"),t=document.getElementById("modalSubscribeText");let n=new h,s;function o(a){const c=document.createElement("div");c.classList.add("error-message"),c.textContent=a,e.parentNode.insertBefore(c,e.nextSibling),setTimeout(function(){c.remove()},2e3)}e.addEventListener("submit",async function(a){a.preventDefault();const c=e.querySelector("input[name='footer-email']").value;if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(c)){o("Email format is incorrect");return}try{const q=(await n.createSubscription({email:c})).info();console.log(q),t.textContent=q.message,i.classList.add("is-open"),e.querySelector("input[name='footer-email']").value="",s=setTimeout(function(){i.classList.remove("is-open")},8e3)}catch(k){console.error("Error:",k)}}),document.querySelectorAll(".modal-subscribe-close-btn, .modal-subscribe-close-button").forEach(function(a){a.addEventListener("click",function(){i.classList.remove("is-open"),clearTimeout(s)})}),document.addEventListener("keydown",function(a){a.key==="Escape"&&i.classList.contains("is-open")&&(i.classList.remove("is-open"),clearTimeout(s))}),window.addEventListener("click",function(a){a.target===i&&(i.classList.remove("is-open"),clearTimeout(s))})});const R=new h,f=document.querySelector(".form"),m=document.getElementById("cards-list"),G=window.innerWidth;let J,Y,Z=1,K;const r={filter:J,name:Y,page:Z,limit:K};function Q(e){return e<1280?r.limit=8:r.limit=9,r.limit}Q(G);async function X(e,i){r.filter=e,r.name=i;const t=`https://energyflow.b.goit.study/api/exercises?${r.filter}=${r.name}&page=${r.page}&limit=${r.limit}`;try{const s=await(await fetch(t)).json();if(s.results){const o=s.results;m.innerHTML=H(o),_.insertAdjacentElement("beforeEnd",f)}}catch(n){console.log(n)}}function H(e){return e.reduce((i,t)=>i+`<li class="list-item animated-card" data-exerciseid="${t._id}">
          <div class="workout-and-icons">
            <div class="workout-container">
              <p class="workout-bubble">Workout</p>
              <div class="star-cont">
                <p class="rating-num">${t.rating}</p>
                <svg class="star-icon" width="18" height="18">
                  <use href="./sprite.svg#icon-modal-rating-star"></use>
                </svg>
              </div>
            </div>
            <div class="start-cont">
              <button class="arrow-btn" type="button">
                Start
                <svg class="arrow" width="14" height="14">
                  <use href="./sprite.svg#icon-exercises-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="training-title">
            <svg class="icon-man" width="24" height="24">
              <use href="./sprite.svg#icon-exercises-man"></use>
            </svg>
            <p class="training-name">${C(t.name)}</p>
          </div>
          <div class="indicators-cont">
            <p class="indicators">
              Burned calories:
              <span class="indicators-item">
                ${t.burnedCalories} / ${t.time} min
              </span>
            </p>
            <p class="indicators">
              Body part:
              <span class="indicators-item">${t.bodyPart}</span>
            </p>
            <p class="indicators">
              Target: <span class="indicators-item">${t.target}</span>
            </p>
          </div>
        </li>`,"")}function ee(){return'<div class="response-cont"><p class="response-describe">Unfortunately, <span class="describe">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p></div>'}f.addEventListener("submit",async e=>{e.preventDefault();const i={[r.filter]:r.name,page:1,limit:10},t=f.elements.delay.value.trim();i.keyword=t;const n=await(await R.getListExercisesBySubspecies(i)).json();t&&n.results.length>0?(m.innerHTML=H(n.results),P(),f.reset()):m.innerHTML=ee()});m.addEventListener("click",async e=>{if(e.target.classList.contains("arrow-btn")){const t=Array.from(m.children).filter(s=>s.dataset.exerciseid===e.target.closest(".list-item").dataset.exerciseid)[0].dataset.exerciseid;let n=await(await R.getExerciseById(t)).json();j(n)}});function F(e,i){return Array.from({length:e}).reduce((t,n,s)=>{const o=s+1;return t+`<li class="pagination-element ${o===i?"active_pag_item":""}" value="${o}">${o}</li>`},"")}const te=document.querySelector(".home-filters"),_=document.querySelector(".search-container"),T=document.querySelector(".filters-box"),$=document.getElementById("cards-list"),ie=T.querySelector(".filters-list-item"),ne=ie.dataset.filter,g=document.querySelector(".pagination-list"),se=window.innerWidth;let u=null,oe=1;ce(se);function ae(){te.scrollIntoView({behavior:"smooth",block:"start"})}let N=new h;const d={filter:ne,page:oe,limit:u};async function re(){let e=await N.init();try{const t=await(await e.getListExercises(d)).json();if(t.results&&t.results.length>0){$.innerHTML=W(t.results),g.innerHTML="";let n=F(t.totalPages,d.page);g.innerHTML=n}else console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}function ce(e){return e<768?u=8:(e>=768&&e<1024,u=12),u}async function le(e){const i=parseInt(e.target.getAttribute("value"));d.page=i,await U(e),ae()}function de(e){T.querySelectorAll(".filters-list-item").forEach(i=>{i.classList.remove("active_item")}),e.target.classList.add("active_item")}function P(){const e=document.querySelectorAll(".animated-card");e.forEach(i=>{i.style.opacity="0"}),e.forEach((i,t)=>{setTimeout(()=>{i.style.opacity="1"},t*100)})}async function U(e,i){if(i==="filter"||e.target.classList.contains("filters-list-item")){de(e);const n=e.target.dataset.filter;d.filter=n,d.page=1}let t=await N.init();try{const s=await(await t.getListExercises(d)).json();if(s.results&&s.results.length>0){$.innerHTML=W(s.results),_.innerHTML="",g.innerHTML="";let o=F(s.totalPages,d.page);g.innerHTML=o,P()}else console.error("No exercises found.")}catch(n){console.error("Error fetching exercises:",n)}}async function ue(e){const i=e.target.dataset.name,t=e.target.dataset.filter;if(i&&t){let n=t;t==="body parts"&&(n="bodypart"),await X(n,i)}}function W(e){return e.reduce((i,t)=>i+`<li class="cards-list-item animated-card" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${t.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${C(t.name)}</h3>
      <p class="card-subtitle" data-filter="${t.filter.toLowerCase()}" data-name="${t.name}">${t.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",re);T.addEventListener("click",e=>U(e,"filter"));$.addEventListener("click",ue);g.addEventListener("click",e=>le(e));const me=document.querySelector(".js-modal"),ge=document.querySelector(".js-close"),fe=document.querySelector(".mrating"),pe=document.querySelector(".rating-form");document.querySelector(".js-sbutton");const ve=document.querySelector(".message");function D(){me.classList.remove("is-open")}ge.addEventListener("click",D);let O,S;ye(fe);function ye(e){E(e),p(),e.classList.contains("rating-set")&&be(e)}function E(e){O=e.querySelector(".mrating-active"),S=e.querySelector(".mrating-value")}function p(e=S.innerHTML){const i=e/.05;O.style.width=`${i}%`}function be(e){const i=e.querySelectorAll(".mrating-item");for(let t=0;t<i.length;t+=1){const n=i[t];n.addEventListener("mouseenter",function(s){E(e),p(n.value)}),n.addEventListener("mouseleave",function(s){p()}),n.addEventListener("click",function(s){E(e);const o=t+1;S.innerHTML=o,p()})}}let he=new h;pe.addEventListener("click",we);async function we(e){if(e.preventDefault(),!e.target.tagName!=="BUTTON"&&e.target.tagName==="BUTTON"){if(+e.currentTarget.children[0].innerText.trim()<=0)return;const i=e.currentTarget.elements.ratbtn.dataset.exerciseId,t={};t.rate=+e.currentTarget.children[0].innerText.trim(),t.email=e.currentTarget.elements.email.value,t.review=e.currentTarget.elements.comment.value;try{const n=await he.addRating(i,t),s=n.info();s.status===200?(D(),j(n.json())):ve.textContent=s.message}catch(n){console.error(n)}}}const x=document.querySelector(".back-to-top");x.addEventListener("click",Le);window.onscroll=()=>{Ee()};function Le(){window.scrollTo({top:0,behavior:"smooth"})}function Ee(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.classList.remove("is-hidden"):x.classList.add("is-hidden")}const xe=document.querySelector(".icon-about-sport");let A=0;function Te(){A+=1,xe.style.transform=`rotate(${A}deg)`}setInterval(Te,10);
//# sourceMappingURL=commonHelpers2.js.map
