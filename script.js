
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
    const p=" I can help you build a product ,feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.";
    const apple1=document.getElementById("apple1");
    const apple2=document.getElementById("apple2");
    const def="images/img3.png";
    function look() {
        document.querySelector("#popup-container").style.display = "flex";
        document.getElementById("see_source").href="https://github.com/Mulew/Mobile_First";
        document.getElementById("see_live").href="mob-first.html";
        popuptitle.innerHTML="<h1>Javascript Project</h1>";
        document.getElementById("see_live").innerHTML="See Live"+"<img src='images/live.jpg'>";
        document.getElementById("see_source").innerHTML="See Source"+"<img src='images/git.png'>";
        /*const llive=document.getElementById("see_live");
        const imgg=document.createElement("img");
        imgg.setAttribute("src","images/apple4.jpg");
        imgg.setAttribute("width","20px");
        imgg.setAttribute("height","20px");
        imgg.setAttribute("border-radius","20px");
        imgg.setAttribute("margin-Left","20px");
        llive.appendChild(imgg);//adding image to see live button*/
        document.getElementById("apple3").src="images/apple3.jpg";
        apple1.src="images/apple4.jpg";
        apple2.src="images/apple2.jpg";
        apple1.addEventListener("mouseover",function(){
            document.getElementById("image").src="images/apple.jpg";
        });
        apple1.addEventListener("mouseout",function(){
            document.getElementById("image").src=def;
        });
        apple2.addEventListener("mouseover",function(){
            document.getElementById("image").src="images/apple2.jpg";
        });
        apple3.addEventListener("mouseover",function(){
            document.getElementById("image").src="images/apple3.jpg";
        });
        for (let i = 0; i < listofitems.length; i++) {
            listitems.innerHTML+= "<li><a href='#'>" + listofitems[i] + "</a></li>";
        }
        images.src="images/img3.png";
        paragraph.innerHTML="<p>"+ `${p}`+ "</p>";
        document.getElementById("popup_close_button").innerHTML="&times;";
        document.querySelectorAll("#bod").style.backgroundColor ="black";
        //document.querySelector("#popup-container").style.opacity = "1 !important";
    }

    function clo() {
        location.reload();//to load the page after the popup is closed
        document.querySelector("#popup-container").style.display = "none";
        document.getElementById("bod").style.filter="none";
    }
    see.addEventListener("click", look);
    closess.addEventListener("click", clo);
});




