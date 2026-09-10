const swiper = new Swiper('.swiper', {
    // تنظیمات پایه
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    // اتوپلی
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // پیجینیشن (نقطه‌ها)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // دکمه‌های بعدی/قبلی
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // START TREE CARD SLIDER LOGIC
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.tree_card--head .head--btn');
    const sliders = document.querySelectorAll('.tree_card--body .tree_card_swiper');
    const swiperInstances = {};

    // مرحله الف) هر Swiper رو یک بار init می‌کنیم (حتی اونایی که مخفی‌ان)
    sliders.forEach(sliderEl => {
        const key = sliderEl.dataset.slider;
        swiperInstances[key] = new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: false,
            breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            },
            1080: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
            // بقیه تنظیمات Swiper دلخواهت اینجا
        });
    });

    // مرحله ب) کلیک روی دکمه‌ها
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // فعال‌سازی دکمه
            buttons.forEach(b => b.classList.remove('is-active-btn'));
            btn.classList.add('is-active-btn');

            // فعال‌سازی اسلایدر متناظر
            sliders.forEach(s => s.classList.remove('is-active'));
            const activeSlider = document.querySelector(`.swiper[data-slider="${target}"]`);
            activeSlider.classList.add('is-active');

            // چون Swiper موقع مخفی بودن (display:none) نمی‌تونه سایز درست بگیره،
            // بعد از نمایش دوباره باید update بشه
            if (swiperInstances[target]) {
                swiperInstances[target].update();
            }
        });
    });

});
// END TREE CARD SLIDER LOGIC