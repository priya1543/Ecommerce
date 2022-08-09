let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.header .navbar');

menu.onclick=() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll=() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

var swiper=new Swiper(".home-slider",{
  loop:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});

var swiper=new Swiper(".reviewbox",{
  loop:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});


var swiper=new Swiper(".reviews-slider",{
  loop:true,
  spaceBetween:20,
  autoHeight:true,
  grabCursor:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var main_image=document.getElementById('mainimage');
var small_image=document.getElementsByClassName('smallimage');

small_image[0].onclick =function(){
  main_image.src=small_image[0].src;
}
small_image[1].onclick =function(){
  main_image.src=small_image[1].src;
}
small_image[2].onclick =function(){
  main_image.src=small_image[2].src;
}
small_image[3].onclick =function(){
  main_image.src=small_image[3].src;
}

















