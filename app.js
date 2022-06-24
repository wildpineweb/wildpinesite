/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");
    var $html = $("html");

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible"

        getSidebarLinks.forEach((item, index) => {
            console.log(item);
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });
        getSidebar.style.width = "60%";
        $html.addClass("clicked");
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

/* Navigation Bar and Body */
var $navbarMenu = $(".navbar-menu");
var $sideNav = $(".side-nav");
var $sideNavA = $(".side-nav a");
var $activeMenu = $(".active-menu");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $DTspan = $(".DTspan");
var $body = $("body");
var $mobileWrapper = $(".mobile-wrapper");
var $hamburgerInner = $(".hamburger-inner");
var $mobileLogo = $("#mobile-logo");