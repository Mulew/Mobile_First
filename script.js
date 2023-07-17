
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const close = document.querySelector("#close");
    const c = document.querySelector("#c");

    function show() {
        c.style.visibility = "hidden";
        items.style.display = 'block';
        items.style.top = '0';
        menu.style.visibility = "hidden";
    }

    function closee() {
        items.style.display = 'none';
        items.style.top = '-100px';
        menu.style.visibility = "visible";
    }

    menu.addEventListener('click', show);
    close.addEventListener("click", closee);

    const see = document.querySelector('#see_projects');
    const closess = document.querySelector('#popup_close_button');

    function look() {
        document.querySelector("#popup-container").style.display = "flex";
    }

    function clo() {
        document.querySelector("#popup-container").style.display = "none";
    }

    see.addEventListener("click", look);
    closess.addEventListener("click", clo);
});