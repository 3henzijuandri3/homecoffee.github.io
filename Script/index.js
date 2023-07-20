function main (){    

    const hamburger_menu = document.querySelector('.menu-mobile');
    let span_hamburger = [...document.querySelectorAll('.menu-mobile span')];
    const nav_mobile = document.querySelector('nav ul');

    hamburger_menu.addEventListener('click', function(){
        span_hamburger.forEach((sp) =>{
            sp.classList.toggle('clicked');
        });

        nav_mobile.classList.toggle('slide');
    });

    // Logic Click Button
    const nav_word = [...document.querySelectorAll("ul.navBar li a")];
    nav_word.forEach((a) => {
        a.addEventListener("click", (event) => {
            event.preventDefault();
            nav_mobile.classList.remove('slide');
            span_hamburger.forEach((sp) =>{
                sp.classList.remove('clicked');
            });
        });
    });

    const homeBtn = document.querySelector("li.home");
    homeBtn.addEventListener("click", () => {
        document.getElementById("landing").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });

    const aboutBtn = document.querySelector("li.about");
    aboutBtn.addEventListener("click", () => {
        document.getElementById("about").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });

    const discoverBtn = document.querySelector(".title-section button");
    discoverBtn.addEventListener("click", () => {
        document.getElementById("about").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });

    const reserveBtn = document.querySelector("li.reserve");
    reserveBtn.addEventListener("click", () => {
        document.getElementById("reserve").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });

    const ctcBtn = document.querySelector("li.contact");
    ctcBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });

    const menuBtn = document.querySelector("li.menu");
    menuBtn.addEventListener("click", () => {
        document.getElementById("menu").scrollIntoView()
        nav_mobile.classList.remove('slide');
        span_hamburger.forEach((sp) =>{
            sp.classList.remove('clicked');
        });
    });
    // ----------------------------------------------------



    // Logic untuk Scroll
    const navBar = document.querySelector(".sticky nav");

    window.addEventListener("scroll", () => {
        navBar.classList.toggle("scroll", window.scrollY > 0)
    });
    // -------------------------------------------------------




    // Logic Animation
    let about = document.querySelector("article.about");
    let reserve = document.querySelector("article.reserve");
    let menu = document.querySelector("article.menu");
    let screenHeight = window.innerHeight;
    let muncul_point = 130;

    function show_about(){
        let gambar_cafe = document.querySelector(".gambar-cafe");
        let about_text = document.querySelector(".penjelasan-cafe");

        about.style.animationPlayState = "running";
        gambar_cafe.style.animationPlayState = "running";
        about_text.style.animationPlayState = "running";
    };

    function show_reserve(){
        let reserve_map = document.querySelector(".img-maps");
        let reserve_text = document.querySelector(".info-location");

        reserve_map.style.animationPlayState = "running";
        reserve_text.style.animationPlayState = "running";
    };

    function show_menu(){
        let menu_card = [...document.getElementsByClassName("card")];
        let best_seller = document.querySelector(".judul-menu");
        let fnb = document.querySelector(".judul-fnb");
        let menu_container = document.querySelector(".menu-section-container");

        menu.style.animationPlayState = "running";
        best_seller.style.animationPlayState = "running";
        fnb.style.animationPlayState = "running";
        menu_container.style.animationPlayState = "running";

        menu_card.forEach((card) =>{
            card.style.animationPlayState = "running";
        });
    };

    window.addEventListener("scroll", () => {
        let aboutTop = about.getBoundingClientRect().top;
        let reserveTop = reserve.getBoundingClientRect().top;
        let menuTop = menu.getBoundingClientRect().top;


        if (aboutTop < screenHeight - muncul_point){
            show_about();

        } if (reserveTop < screenHeight - muncul_point){
            show_reserve();
        } if (menuTop < screenHeight - muncul_point){
            show_menu();
        };

    });
    // ----------------------------------------------------------------------
};

window.addEventListener("DOMContentLoaded", main);