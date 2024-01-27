import{E as y,f as E}from"./assets/quote-f8d431be.js";import"./assets/vendor-0fffa566.js";const g=document.querySelector(".backdrop"),n=document.querySelector(".js-modal-container");document.querySelector(".close-btn");let w="64f389465ae26083f39b17a4",l="",a={},L=new y;async function p(e){return l=e,await(await L.getExerciseById(l)).json()}async function $(e){try{const t=await p(e),s=n.querySelector(".js-add-remove-btn");let i="",r="";t&&h(t,f())?(i="./img/sprite/sprite.svg#icon-remove-favorites",r="Remove from favorites"):(i="./img/sprite/sprite.svg#icon-add-favorites",r="Add to favorites"),n.innerHTML=`<div
        class="modal-ex-img-container"
        style="
          background: linear-gradient(
              0deg,
              rgba(27, 27, 27, 0.2) 0%,
              rgba(27, 27, 27, 0.2) 100%
            ),
            url(${t.gifUrl}),
            lightgray -7.072px -25.893px / 107.482% 121.729% no-repeat;
          background-size: cover;
        "
      ></div>

      <div class="modal-ex-text-info">
        <div class="modal-ex-name-rating-container">
          <h2 class="title-modal-exercise">${t.name}</h2>
          <div class="modal-ex-rating-container">
            <p class="mod-ex-rating">${t.rating}</p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
            <p class="mod-ex-rating-star">
              <svg
                class="modal-icon-star"
                width="18"
                height="18"
                aria-label="modal star icon"
              >
                <use
                  href="./img/sprite/sprite.svg#icon-modal-rating-star"
                ></use>
              </svg>
            </p>
          </div>
        </div>

        <div class="modal-ex-about-exercise-container">
          <ul class="about-exercse-list">
        <li>
          <h3 class="title-description">Target</h3>
          <p class="value-description">${t.target}</p>
        </li>
        <li>
          <h3 class="title-description">Body Part</h3>
          <p class="value-description">${t.bodyPart}</p>
        </li>
        <li>
          <h3 class="title-description">Equipment</h3>
          <p class="value-description">${t.equipment}</p>
        </li>
        <li>
          <h3 class="title-description">Popular</h3>
          <p class="value-description">${t.popularity}</p>
        </li>
        <li>
          <h3 class="title-description">Burned Calories</h3>
          <p class="value-description">${t.burnedCalories}/${t.time} min</p>
        </li>
          </ul>
        </div>

        <div class="modal-ex-description-text-container">
          <p class="description-text">
            ${t.description}
          </p>
        </div>

        <div class="ex-modal-btn-container">
          <ul class="button ex-modal-btn-list">
            <li class="ex-modal-btn-list-item">
              <button class="ex-modal-btn add-favorite js-add-remove-btn" type="button">
                ${r}
                <p class="btn-icon-add-remove-favorite">
                  <svg
                    class="modal-icon-favorite"
                    width="18"
                    height="18"
                    aria-label="modal favorite icon"
                  >
                    <use
                      href='${i}'
                    ></use>
                  </svg>
                </p>
              </button>
            </li>
            <li class="ex-modal-btn-list-item">
              <button class="ex-modal-btn rating-btn" type="button">
                Give a rating
              </button>
            </li>
          </ul>
        </div>
      </div>`}catch(t){console.error("Error fetching or creating markup:",t)}}$(w);function m(e){e.key==="Escape"&&(g.classList.remove("is-open"),window.removeEventListener("keydown",m))}window.addEventListener("keydown",m);function v(e){(e.target.classList.value==="modal-close-icon"||e.target.classList.value==="backdrop is-open")&&(g.classList.remove("is-open"),window.removeEventListener("click",v))}window.addEventListener("click",v);function f(){const e=localStorage.getItem("favoriteExercises");return e?JSON.parse(e):[]}function d(e){localStorage.setItem("favoriteExercises",JSON.stringify(e))}function h(e,t){return t.some(s=>s._id===e._id)}async function k(){try{a._id||(a=await p(l));const e=f();if(h(a,e)){const s=e.filter(i=>i._id!==a._id);d(s),u(!1),console.log("Exercise removed from favorites:",a)}else e.push(a),d(e),u(!0),console.log("Exercise added to favorites:",a)}catch(e){console.error("Error toggling favorites:",e)}}document.addEventListener("click",function(e){e.target.classList.contains("add-favorite")&&k()});function u(e){const t=e?"./img/sprite/sprite.svg#icon-remove-favorites":"./img/sprite/sprite.svg#icon-add-favorites",s=e?"Remove from favorites":"Add to favorites",i=n.querySelector(".js-add-remove-btn");console.log("isFavorite",e),i.innerHTML=`<button class="ex-modal-btn add-favorite" type="button">${s}<p class="btn-icon-add-remove-favorite js-add-remove-btn"><svg class="modal-icon-favorite" width="18" height="18" aria-label="modal favorite icon"><use href='${t}'></use></svg></p></button>`}const c=document.querySelector(".filters-box"),x=document.getElementById("cards-list"),S=c.querySelector(".filters-list-item"),B=S.dataset.filter,q=window.innerWidth;let o;M(q);const I=`https://energyflow.b.goit.study/api/filters?filter=${B}&page=1&limit=${o}`;function M(e){return e<768?o=8:(e>=768&&e<1024,o=12),o}async function A(){try{const t=await(await fetch(I)).json();t.results&&t.results.length>0?x.innerHTML=b(t.results):console.error("No exercises found.")}catch(e){console.error("Error fetching exercises:",e)}}function F(e){c.querySelectorAll(".filters-list-item").forEach(t=>{t.classList.remove("active_item")}),e.target.classList.add("active_item")}async function j(e){if(e.target.classList.contains("filters-list-item")){F(e);const s=`https://energyflow.b.goit.study/api/filters?filter=${e.target.dataset.filter}&page=1&limit=${o}`;try{const r=await(await fetch(s)).json();r.results&&r.results.length>0?x.innerHTML=b(r.results):console.error("No exercises found.")}catch(i){console.error("Error fetching exercises:",i)}}}function b(e){return e.reduce((t,s)=>t+`<li class="cards-list-item" style="background:linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ), url('${s.imgUrl}'),
    lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; background-size: cover;">
      <h3 class="card-title">${E(s.name)}</h3>
      <p class="card-subtitle">${s.filter}</p>
    </li>`,"")}document.addEventListener("DOMContentLoaded",A);c.addEventListener("click",j);
//# sourceMappingURL=commonHelpers2.js.map
