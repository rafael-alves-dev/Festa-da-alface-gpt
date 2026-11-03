'use strict';
const cards=[...document.querySelectorAll('.photo-card')],filters=[...document.querySelectorAll('[data-filter]')],status=document.querySelector('.gallery-status');
let visible=PHOTOS.map((_,i)=>i),current=0,opener=null;
function filterPhotos(category){visible=[];cards.forEach((card,i)=>{card.hidden=category!=='Todas'&&card.dataset.category!==category;if(!card.hidden)visible.push(i)});filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));status.textContent=`${visible.length} fotografias · ${category}`}
filters.forEach(b=>b.addEventListener('click',()=>filterPhotos(b.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(a=>a.addEventListener('click',()=>filterPhotos(a.dataset.filterLink)));
filterPhotos('Todas');
const dialog=document.querySelector('#lightbox'),full=document.querySelector('#full-photo'),caption=document.querySelector('#photo-caption'),position=document.querySelector('#photo-position');
function renderPhoto(){const p=PHOTOS[current];full.src='assets/photos/'+p.file;full.alt=p.alt;full.width=p.width;full.height=p.height;caption.textContent=p.alt+' · '+p.file;position.textContent=`${visible.indexOf(current)+1} / ${visible.length} — ${p.category}`}
function movePhoto(step){current=visible[(visible.indexOf(current)+step+visible.length)%visible.length];renderPhoto()}
cards.forEach((card,i)=>card.addEventListener('click',()=>{current=i;opener=card;renderPhoto();dialog.showModal();document.body.classList.add('modal-open');document.querySelector('#close-photo').focus()}));
document.querySelector('#close-photo').addEventListener('click',()=>dialog.close());document.querySelector('#previous-photo').addEventListener('click',()=>movePhoto(-1));document.querySelector('#next-photo').addEventListener('click',()=>movePhoto(1));
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');full.removeAttribute('src');opener?.focus()});
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.addEventListener('keydown',e=>{if(dialog.open){if(e.key==='ArrowRight'){e.preventDefault();movePhoto(1)}if(e.key==='ArrowLeft'){e.preventDefault();movePhoto(-1)}}else if(e.key==='Escape'){closeMenu()}});
let startX=0,startY=0;full.addEventListener('touchstart',e=>{startX=e.changedTouches[0].screenX;startY=e.changedTouches[0].screenY},{passive:true});full.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-startX,dy=e.changedTouches[0].screenY-startY;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)movePhoto(dx<0?1:-1)},{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches&&'IntersectionObserver'in window){document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const layers=[...document.querySelectorAll('[data-parallax]')];let queued=false;
function parallax(){queued=false;layers.forEach(el=>{if(reduced.matches||innerWidth<850){el.style.transform='';return}const r=el.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight){const offset=Math.max(-35,Math.min(35,(r.top+r.height/2-innerHeight/2)*.07));el.style.transform=`translateY(${offset}px)`}})}
function schedule(){if(!queued){queued=true;requestAnimationFrame(parallax)}}addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',schedule);schedule();
