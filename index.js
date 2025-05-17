import{a as d,S as f,i}from"./assets/vendor-DxEWe7lX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="11450328-c2e7c4daa2322168e3859ef5d",y="https://pixabay.com/api/";async function m(s){try{return(await d.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error(`Sorry, there are no images matching your search query. Please try again!
`,t),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img class="img" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".js-form"),S=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const t=S.value.trim();if(t){L(),b();try{const r=await m(t);if(r.hits.length===0){i.warning({title:"Oops!",message:`Sorry, there are no images matching your search query. Please try again!
`,position:"topRight"});return}g(r.hits)}catch{i.error({title:"Error",message:`Sorry, there are no images matching your search query. Please try again!
`,position:"topRight"})}finally{w()}}});
//# sourceMappingURL=index.js.map
