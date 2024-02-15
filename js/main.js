const mySwiper = new Swiper ('.swiper', {
  
  loop: true, 
  slidesPerView: '3', 
  slidesPerGroup: 1,
  spaceBetween: 20, 

  breakpoints: {
    768: {
      slidesPerView: 4,
    }
  },
  speed: 1000, 
  // centeredSlides : true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

