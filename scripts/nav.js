"use strict";
function toggle() {
    let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".icon");
    if (!(menu.className === "menu-toggle active" && nav.className.match("responsive"))) {
        menu.className = "menu-toggle active";
        nav.classList.add("responsive");
    } else {
        menu.className = "menu-toggle";
        nav.classList.remove("responsive");
    }
    nav.onmouseleave = function () {
        menu.className = "menu-toggle";
        nav.classList.remove("responsive");    }
}

window.addEventListener("scroll", function () {
    let scrll = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrll > 60) {
        document.querySelector('.nav').classList.add('wake');

    } else  {
        document.querySelector('.nav').classList.remove('wake');
    }
});

window.addEventListener("load", ()=>{
    let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".icon");
    let modal=document.querySelector('.modal-ad');
    let modalContent=document.querySelector('.modal-ad .content');
    let back=document.querySelector('.modal-nav .back');
    let modal_heading=document.querySelector('.modal-nav .heading');
    let academy_sections = document.querySelectorAll("#academy-sections >*");
    let sections=document.querySelectorAll(".academy-sections-container > div")
    let links = document.querySelectorAll(".nav a");

    let event_cards= document.querySelectorAll("#events .card");
    
    back.onclick = function(e) {
            modal.classList.remove("active");
            //let all = document.querySelectorAll('.modal-ad >*')
           // modalAd.removeChild(all[1]);
          }
    
    function Display(text){
        modal.classList.add('active');
        modal_heading.textContent=text;
        
    }
    function activeNavigation(){
        let address = window.location.href.split("/");
    address = address[address.length - 1];
    for (let p = 0; p < links.length; p++) {
        let link_con = links[p].innerText.toLowerCase();
        if (address.match(link_con)) {
            links[p].classList.add("active");
        }else if(address =="index.html"){
            links[0].classList.add("active");
        }
    }
}
    links.forEach((e, index)=>{
        
        e.onclick=function(){
            links.forEach(e=> e.classList.remove('active'))
            this.classList.add("active");
            menu.classList.remove("active");
            nav.classList.remove("responsive");
            contentNavigation(academy_sections[index-1], index-1)
        };
    })
    activeNavigation();
    function contentNavigation(elem, index){
        
       academy_sections.forEach(e => e.classList.remove("active"));
       elem.classList.add("active");
       sections.forEach(e=> e.classList.remove('active'));
       sections[index].classList.add("active");
       window.scrollTo(0, sections[index].parentElement.parentElement.offsetTop);
   }
   
    academy_sections.forEach((elem,index) => {
        elem.onclick = function () {
            contentNavigation(this, index)
        }
    });
    event_cards.forEach((card,index) => {
        card.onclick = function (event) {
            if(event.target.innerText ==="Catch Up"){
            Display(this.querySelector('h1').innerText);
            }
        }
    });
})