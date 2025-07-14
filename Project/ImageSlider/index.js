// Link for the code (https://swiperjs.com/get-started)
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },

//   Responsive brekpoints
  breakpoints: {
    0: {
        sliderPerView: 1
    },
    768: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    },
  }
});
