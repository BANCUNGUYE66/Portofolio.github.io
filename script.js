const humburger = document.querySelector('.humburger_menu');
const navBar = document.querySelector('.menu');

humburger.addEventListener('click', () => {
      humburger.classList.toggle('active');
      navBar.classList.toggle('active');
});


document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
    humburger.classList.remove('active');
    navBar.classList.remove('active');
}))