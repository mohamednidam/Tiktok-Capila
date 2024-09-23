$('.owl-carousel').owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,autoplayTimeout:3000,autoplayHoverPause:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!1},1000:{items:2,nav:!0,loop:!0}}})
let currentIndex=0;let autoSlideInterval;function changeSlide(direction){const slides=document.querySelector('.slides');const totalSlides=document.querySelectorAll('.slide').length;currentIndex+=direction;if(currentIndex<0){currentIndex=totalSlides-1}else if(currentIndex>=totalSlides){currentIndex=0}
slides.style.transform=`translateX(${-currentIndex * 100}%)`}
function startAutoSlide(){autoSlideInterval=setInterval(()=>{changeSlide(1)},3000)}
function stopAutoSlide(){clearInterval(autoSlideInterval)}
document.querySelector('.slider-container').addEventListener('mouseover',stopAutoSlide);document.querySelector('.slider-container').addEventListener('mouseout',startAutoSlide);window.onload=startAutoSlide