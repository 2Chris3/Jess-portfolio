const root = document.querySelector('body');
const iframe = document.querySelector('iframe');
const btn = document.querySelector('button');
const emoji = document.querySelector('button > p');

const protein3d = 'https://my.spline.design/untitled-3d966995b79d1c17d9155e3d0ac76660/'
const ufo3d = 'https://my.spline.design/untitled-4116d117c51cd504ff8f867f15c7d651/';

function toggleTheme() {


    root.classList.toggle('light-theme');

    btn.classList.toggle('.btn-day');
    btn.classList.toggle('.btn-night');

    emoji.classList.toggle('sun');
    emoji.classList.toggle('moon');


    if (iframe.src.includes(ufo3d)) {
        iframe.src = protein3d;
        btn.innerHTML = '☀';
    } else {
        iframe.src = ufo3d;
        btn.innerHTML = '☽';
    }
}