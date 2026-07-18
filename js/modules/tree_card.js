document.querySelectorAll('.head--btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.head--btn').forEach(b => b.classList.remove('is-active'));
        document.querySelectorAll('.body--group').forEach(g => g.classList.remove('is-active'));

        btn.classList.add('is-active');
        const target = btn.dataset.target;
        document.querySelector(`.body--group[data-group="${target}"]`).classList.add('is-active');
    });
});