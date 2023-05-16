/* eslint-disable */


import Swiper from '../vendor/swiper';


const staffSliderElement = document.querySelector('.staff__slider');

function addTabindex() {
  const originalSlides = document.querySelectorAll('.staff__item:not(.swiper-slide-duplicate)');
  for (let i = 0; i < originalSlides.length; i++) {
    originalSlides[i].querySelector('.staff-card').setAttribute('tabindex', '0');
  }
}

const initSliders = () => {
  if (staffSliderElement) {
    const staffSlider = new Swiper('.staff__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      autoResize: false,
      loopedSlides: 0,
      maxBackfaceHiddenSlides: 0,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 30,
          centeredSlides: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // when window width is >= 1200px
        1200: {
          spaceBetween: 40,
          initialSlide: 0,
          centeredSlides: false,
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        // when window width is >= 1200px
        1280: {
          spaceBetween: 40,
          initialSlide: 0,
          centeredSlides: false,
          // slidesPerView: 4,
          // slidesPerGroup: 4,
        },
      },

      on: {
        init: () => {
          addTabindex();
          document.addEventListener('keydown', (evt) => {

            if (evt.shiftKey && evt.key === 'Tab') {
              const active = document.activeElement;
              if (active.parentElement.classList.contains('swiper-slide-active')) {
                const parentSlideIndex = active.parentElement.dataset.swiperSlideIndex;
                if (parentSlideIndex > 0) {
                  staffSlider.slidePrev(100, true);
                }
              }
            } else if (!evt.shiftKey && evt.key === 'Tab') {
              const active = document.activeElement;
              if (active.parentElement.classList.contains('swiper-slide-next')) {
                staffSlider.slideNext(100, true);
              }
            }
          });
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.staff__slider-button--next',
        prevEl: '.staff__slider-button--prev',
      },
    });
  }

  if (document.querySelector('.reviews__slider')) {
    const reviewsSlider = new Swiper('.reviews__slider', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 60,
      autoHeight: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }

  const notificationSpans = document.querySelectorAll('.swiper-notification');

  if (notificationSpans && notificationSpans.length) {
    notificationSpans.forEach((span) => {
      span.remove();
    });
  }
};

export { initSliders };


// const initSliders = () => {
//   if (staffSliderElement) {
//     (() =>
//       new Swiper('.staff__slider', {
//         direction: 'horizontal',
//         loop: true,
//         slidesPerView: 'auto',
//         spaceBetween: 30,
//         initialSlide: 2,
//         centeredSlides: true,
//         autoResize: false,
//         loopedSlides: 0,
//         maxBackfaceHiddenSlides: 0,
//         keyboard: {
//           enabled: true,
//           onlyInViewport: true,
//         },

//         breakpoints: {
//           768: {
//             spaceBetween: 30,
//             centeredSlides: false,
//           },

//           1200: {
//             spaceBetween: 40,
//             initialSlide: 0,
//             centeredSlides: false,
//           },
//         },

//         // Navigation arrows
//         navigation: {
//           nextEl: '.staff__slider-button--next',
//           prevEl: '.staff__slider-button--prev',
//         },
//       })
//     )();

//   }
// };


const initSliders2 = () => {
  if (document.querySelector('.reviews__slider')) {
    (() =>
      new Swiper('.reviews__slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 60,
        autoHeight: true,

        // Navigation arrows
        navigation: {
          nextEl: '.reviews__button--next',
          prevEl: '.reviews__button--prev',
        },
      })
    )();

  }
};

export { initSliders2 };
