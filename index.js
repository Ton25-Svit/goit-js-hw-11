import{S as p,i as l,a as u}from"./assets/vendor-DXaqCXe3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a=document.querySelector(".gallery");let d=new p(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){a.innerHTML="";let o="";s.forEach(t=>{o+=`
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
    `}),a.innerHTML=o,d.refresh()}const c=document.querySelector(".searchPhoto");function f(s){const o=c.inputText.value.trim();if(!o){l.error({color:"#EF4040",message:"Error, input field is empty",messageColor:"#FAFAFB",maxWidth:"432",iconColor:"#FAFAFB"});return}a.innerHTML='<span class="loader"></span>',setTimeout(()=>{u.get(`https://pixabay.com/api/?key=48639504-554e542bc8495b3a6c3499497&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(t.data.hits==0){l.error({color:"#EF4040",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FAFAFB",maxWidth:"432",iconColor:"#FAFAFB"}),a.innerHTML="";return}m(t.data.hits)}).catch(t=>{console.log(t)})},2e3)}c.addEventListener("submit",s=>{s.preventDefault(),f()});
//# sourceMappingURL=index.js.map
