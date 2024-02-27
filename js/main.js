const mySwiper = new Swiper ('.swiper', {
  
  loop: true, 
  slidesPerView: 1, 
  slidesPerGroup: 1,
  spaceBetween: 20, 

  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 3,
    },
    410: {
      slidesPerView: 2,
    },
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

// スライドメニュー
const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const menuPanel = document.querySelector('#menu-panel')
const menuItems = document.querySelectorAll('#menu-panel li')
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

const mask = document.querySelector('#mask');
const showKeyframes = {
  opacity: [0, 1],
  visibility: 'visible',
};
const hideKeyframes = {
  opacity: [1, 0],
  visibility: 'hidden',
};
const options = {
  duration: 800,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // リンクを一つずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 1000,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
  mask.animate(showKeyframes,options);
})

//メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
  mask.animate(hideKeyframes,options);
})

mask.addEventListener('click', () => {
  menuClose.click();
})