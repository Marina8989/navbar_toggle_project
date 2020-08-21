const btn = document.querySelector('.btn');
const links = document.querySelector('.links');

btn.addEventListener('click', function() {
    links.classList.toggle('links');
});