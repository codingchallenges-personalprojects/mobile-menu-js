
document.querySelector('.ham').addEventListener('click', openNav);

function openNav() {
    document.querySelector('.nav-list-mobile').style.display = 'block';
};


document.querySelector('.icon-close').addEventListener('click', closeNav);

function closeNav() {
    document.querySelector('.nav-list-mobile').style.display = 'none';
};
