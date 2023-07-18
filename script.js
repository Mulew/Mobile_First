
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
    const popuptitle=document.querySelector("#popup_title");
    const listitems=document.querySelector("#ul");
    const images=document.querySelector("#image");
    const paragraph=document.querySelector("#paragraph");
    const listofitems=["HTML","CSS","Bootstrap","JavaScript"];
    const p=" A daily selection of privately personalized readsno accounts or sign-ups required. has been the industrys standard";
    const liveimage=document.querySelector("#liveimage");
    const sourceimage=document.querySelector("#sourceimage");
    function look() {
        document.querySelector("#popup-container").style.display = "flex";
        document.getElementById("see_live").href="mob-first.html";
        document.getElementById("see_source").href="https://github.com/Mulew/Mobile_First";
        document.getElementById("see_live").href="mob-first.html";
        popuptitle.innerHTML="<h1>Javascript Project</h1>";
        document.getElementById("see_live").innerHTML="See Live";
        document.getElementById("see_source").innerHTML="See Source";
        document.getElementById("bod").style.background="rgba(0, 0, 0, 0.598)";
        
        for (let i = 0; i < listofitems.length; i++) {
            listitems.innerHTML+= "<li><a href='#'>" + listofitems[i] + "</a></li>";
        }
        images.src="images/img3.png";
        liveimage.src="images/img3.png";
        sourceimage.src="images/img3.png";
        paragraph.innerHTML="<p>"+ `${p}`+ "</p>";
        document.getElementById("popup_close_button").innerHTML="&times;";
    }

    function clo() {
        location.reload();//to load the page after the popup is closed
        document.querySelector("#popup-container").style.display = "none";
        document.getElementById("bod").style.filter="none";
    }
    see.addEventListener("click", look);
    closess.addEventListener("click", clo);
});




