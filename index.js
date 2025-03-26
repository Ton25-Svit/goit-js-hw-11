import{a as p,S as d,i as a}from"./assets/vendor-DXaqCXe3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o){return p.get(`https://pixabay.com/api/?key=48639504-554e542bc8495b3a6c3499497&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>s.data)}const u=document.querySelector(".gallery");let m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const s=o.map(t=>`
      <li class="image">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" width="360" height="200">
          <div class="imageStats">
          <p><span>Likes</span>${t.likes}</p>
          <p><span>Views</span> ${t.views}</p>
          <p><span>Comments</span> ${t.comments}</p>
          <p><span>Downloads</span> ${t.downloads}</p>
          </div>
          </a>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),m.refresh()}function g(){u.innerHTML=""}const l=document.querySelector(".form"),h=document.querySelector(".inputText"),c=document.querySelector(".loader");l.addEventListener("submit",async o=>{o.preventDefault();const s=h.value.trim();if(!s){a.warning({title:"Warning",message:"Please enter a search query!"});return}g(),c.style.display="block";try{const t=await f(s);t.hits.length===0?a.error({title:"Error",message:"Sorry, no images found. Try another search."}):y(t.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}l.reset()});
//# sourceMappingURL=index.js.map
