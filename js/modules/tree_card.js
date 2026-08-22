const swiper = new Swiper(".tree_card_swiper", {
    // فاصله بین اسلایدها
    spaceBetween: 20,

    // حالت موبایل (پیش‌فرض)
    slidesPerView: 1,

    // حلقه‌ای
    loop: true,

    // پخش خودکار
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // صفحه‌بندی
    pagination: {
        el: ".tree_card_pagination",
        clickable: true,
    },

    // ریسپانسیو
    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },
});

// function activateGroup(target) {
//     document.querySelectorAll('.head--btn').forEach(b =>
//         b.classList.toggle('is-active', b.dataset.target === target)
//     );
//     document.querySelectorAll('.body--group').forEach(g =>
//         g.classList.toggle('is-active', g.dataset.group === target)
//     );

//     const activeGroup = document.querySelector(`.body--group[data-group="${target}"]`);
//     initSwiper(activeGroup);
// }

// document.querySelectorAll('.head--btn').forEach(btn => {
//     btn.addEventListener('click', () => activateGroup(btn.dataset.target));
// });

// mq.addEventListener('change', () => {
//     const activeGroup = document.querySelector('.body--group.is-active');
//     initSwiper(activeGroup);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const activeGroup = document.querySelector('.body--group.is-active');
//     if (activeGroup) initSwiper(activeGroup);
// });