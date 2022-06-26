const menuBtn = document.querySelector('.menu__btn');
const hamburger = document.querySelector('.menu__btn_burger');
const navBar = document.querySelector('.nav__bar');
const navUl = document.querySelector('.nav__bar_ul');
const navLis = document.querySelectorAll('.nav__bar-item');

menuBtn.addEventListener('click', toggleMenu);

let showMenu = false;

function toggleMenu (){
if (!showMenu){
 hamburger.classList.add('open');
 navBar.classList.add('open');
 navUl.classList.add('open');
 navLis.forEach(item => (item.classList.add('open')));

 showMenu = true;
}
else{
 hamburger.classList.remove('open');
 navBar.classList.remove('open');
 navUl.classList.remove('open');
 navLis.forEach(li => (li.classList.remove('open')));

 showMenu = false;
}
}


// change header background on scroll

const header = document.querySelector('header');
const hero = document.querySelector('.hero__container');

const heroOptions = {
 rootMargin: "-600px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver (function(entries, heroObserver){
  entries.forEach (entry =>{
 if (!entry.isIntersecting){
  header.classList.add('header_background');
 }
else{
header.classList.remove('header_background');
}}

)}, 
heroOptions);

heroObserver.observe(hero);

// Testimonial slider

function scrollr(){
var right = document.querySelector('.testimonial_cardlist');
right.scrollBy(-230, 0);
}

function scrolll(){
  var left = document.querySelector('.testimonial_cardlist');
left.scrollBy(230, 0);

}

