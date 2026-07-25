let activeSwiper = null;
const mq = window.matchMedia('(max-width: 768px)');

function destroySwiper() {
    if (activeSwiper) {
        activeSwiper.destroy(true, true);
        activeSwiper = null;
    }
}

function initSwiper(groupEl) {
    destroySwiper();
    if (!mq.matches) return;

    activeSwiper = new Swiper(groupEl, {
        slidesPerView: 1,
        spaceBetween:0,
        pagination: {
            el: groupEl.querySelector('.swiper-pagination'),
            clickable: true
        }
    });
}

function activateGroup(target) {
    document.querySelectorAll('.head--btn').forEach(b =>
        b.classList.toggle('is-active', b.dataset.target === target)
    );
    document.querySelectorAll('.body--group').forEach(g =>
        g.classList.toggle('is-active', g.dataset.group === target)
    );

    const activeGroup = document.querySelector(`.body--group[data-group="${target}"]`);
    initSwiper(activeGroup);
}

document.querySelectorAll('.head--btn').forEach(btn => {
    btn.addEventListener('click', () => activateGroup(btn.dataset.target));
});

mq.addEventListener('change', () => {
    const activeGroup = document.querySelector('.body--group.is-active');
    initSwiper(activeGroup);
});

document.addEventListener('DOMContentLoaded', () => {
    const activeGroup = document.querySelector('.body--group.is-active');
    if (activeGroup) initSwiper(activeGroup);
});