'use strict';
const festivalHeader=document.querySelector('.header');
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#menu');
const compactHeader=matchMedia('(max-width: 800px)');
festivalHeader.classList.add('is-enhanced');
function closeMenu(returnFocus=false){const wasOpen=menu.classList.contains('open');menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');if(returnFocus&&wasOpen)menuButton.focus()}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu(true)});
document.addEventListener('click',e=>{if(!festivalHeader.contains(e.target))closeMenu()});
festivalHeader.addEventListener('focusout',e=>{if(e.relatedTarget&&!festivalHeader.contains(e.relatedTarget))closeMenu()});
compactHeader.addEventListener('change',()=>closeMenu());
let headerFrame=false,headerCondensed=false;
function updateHeader(){headerFrame=false;const y=window.scrollY;const next=headerCondensed?y>32:y>80;if(next!==headerCondensed){headerCondensed=next;festivalHeader.classList.toggle('is-scrolled',next)}}
addEventListener('scroll',()=>{if(!headerFrame){headerFrame=true;requestAnimationFrame(updateHeader)}},{passive:true});
updateHeader();
