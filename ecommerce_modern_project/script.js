
document.querySelector('#menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    const menubuttom = document.querySelector('#menu');

    menubuttom.addEventListener('click', () => {
        navbar.classList.toggle('show-menu');
    });
})