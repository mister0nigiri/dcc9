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



document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.company-nav ul li a');

  function setActiveLink() {
    var currentScroll = window.scrollY;

    navLinks.forEach(function(link) {
      var sectionId = link.getAttribute('href').substring(1);
      var section = document.getElementById(sectionId);

      if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function scrollToSection(event) {
    event.preventDefault();

    var targetId = this.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  setActiveLink();

  window.addEventListener('scroll', setActiveLink);

  navLinks.forEach(function(link) {
    link.addEventListener('click', scrollToSection);
  });
});