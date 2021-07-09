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
var $darkToggle = $('.dark-toggle')
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
var $darkModeLogo = $(".dark-mode-logo");
var $darkButton = $(".dark-button");

/* Body Selections */
var $bodyP = $("body p");
var $bodyH2 = $("body h2");
var $bodyH3 = $("body h3");

/* Landing */
var $landingDark = $("#dark");
var $floatingBox = $(".floating-box");
var $whiteComb = $(".white-comb");
var $darkComb = $(".dark-comb");

/* Customer Service */
var $customerService = $("#customer-service");

/* Trust Us */
var $estimate = $(".estimate");
var $contentBack = $(".content-back");

/* Offer */
var $darkSVG = $(".dark-svg");
var $lightSVG = $(".light-svg");

/* Why Us */
var $whyUs = $("#why-us");

/* FAQ */
var $faq = $("#frequently-asked-questions");
var $faqH4 = $(".faq-group h4");
var $faqA = $(".faq-group a");
var $faqUL = $("ul li");

/* Spotlight */
var $spotlight = $("#spotlight");

/* Contact */
var $topH2 = $(".top h2");
var $topP = $(".top p");

/* Meet The Team */
var $meetTheTeam = $("#meet-the-team");
var $teamContent = $(".team-content");
var $teamContentP = $(".team-content p");

/* Footer */
var $footer = $("footer");

/* Attributes */
// var listItems = $(".roots ul li")
// for (let li in listItems) {
//     for (i = 0; i < li.length; i++) {
//         liChar = li.charAt(i);
//         let degAdd = 0;
//         $(liChar).css("transform", "rotate(" + (-5 + degAdd) + "deg)");
//         degAdd -= 2;
//     }
// }
// for (let i = 0; i < $(".roots ul").length; i++) {
//     let li = $(".roots li:nth-child(" + i + ")");
//     for (let i = 0; i < li.length; i++) {
//         let liChar = li.charAt(i);
//         let degAdd = 0;
//         $(liChar).css({"transform-origin": "top center", "transform": "rotate(" + (-5 + degAdd) + "deg)"});
//         degAdd -= 2;
//     }
// }

// -------------------------------------------
//             ABOUT PAGE
//--------------------------------------------

var $numberItemH4 = $('.number-item h4');
var $squareH2 = $('.square h2');

// -------------------------------------------
//             SERVICES PAGE
//--------------------------------------------

var $olBefore = $('ol li');

// -------------------------------------------
//             CONTACT PAGE
//--------------------------------------------

var $contactTopper = $('.contact-topper');
var $contactRightH4 = $('.contact-right h4');
var $contactRightA = $('.contact-right a');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {

    /* Navigation */
    $darkToggle.addClass("dark-mode");
    $DTspan.addClass("dark-mode");
    $body.addClass("dark-mode");
    $navbarMenu.addClass("dark-mode");
    $sideNavA.addClass("dark-mode");
    $activeMenu.addClass("dark-mode");
    $isActiveHamburger.addClass("dark-mode");
    $mobileWrapper.addClass("dark-mode");
    $hamburgerInner.addClass("dark-mode");
    $mobileLogo.addClass("dark-mode");
    $darkModeLogo.addClass("dark-mode");
    $sideNav.addClass("dark-mode");
    $darkButton.addClass("dark-mode");


    /* Body Styles */
    $bodyP.addClass("dark-mode");
    $bodyH2.addClass("dark-mode");
    $bodyH3.addClass("dark-mode");

    /* Landing */
    $landingDark.addClass("dark-mode");
    $floatingBox.addClass("dark-mode");
    $whiteComb.addClass("dark-mode");
    $darkComb.addClass("dark-mode");

    /* Service */
    $customerService.addClass("dark-mode");

    /* Estimate/Trust Us */
    $estimate.addClass("dark-mode");
    $contentBack.addClass("dark-mode");

    /* Offer */
    $darkSVG.addClass("dark-mode");
    $lightSVG.addClass("dark-mode");

    /* Why Us */
    $whyUs.addClass("dark-mode");

    /* FAQ */
    $faq.addClass("dark-mode");
    $faqH4.addClass("dark-mode");
    $faqA.addClass("dark-mode");
    $faqUL.addClass("dark-mode");

    /* Spotlight */
    $spotlight.addClass("dark-mode");

    /* Meet The Team */
    $meetTheTeam.addClass("dark-mode");
    $teamContent.addClass("dark-mode");
    $teamContentP.addClass("dark-mode");

    /* Footer */
    $footer.addClass("dark-mode");

    // -------------------------------------------
    //             SERVICES PAGE
    //--------------------------------------------

    $olBefore.addClass("dark-mode");

    // -------------------------------------------
    //             ABOUT PAGE
    //--------------------------------------------

    $numberItemH4.addClass("dark-mode");
    $squareH2.addClass("dark-mode");

    // -------------------------------------------
    //             CONTACT PAGE
    //--------------------------------------------

    $contactTopper.addClass("dark-mode");
    $contactRightH4.addClass("dark-mode");
    $contactRightA.addClass("dark-mode");

    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {

    /* Navigation */
    $darkToggle.removeClass("dark-mode");
    $DTspan.removeClass("dark-mode");
    $body.removeClass("dark-mode");
    $navbarMenu.removeClass("dark-mode");
    $sideNavA.removeClass("dark-mode");
    $activeMenu.removeClass("dark-mode");
    $isActiveHamburger.removeClass("dark-mode");
    $mobileWrapper.removeClass("dark-mode");
    $hamburgerInner.removeClass("dark-mode");
    $mobileLogo.removeClass("dark-mode");
    $darkModeLogo.removeClass("dark-mode");
    $sideNav.removeClass("dark-mode");
    $darkButton.removeClass("dark-mode");

    /* Body Styles */
    $bodyP.removeClass("dark-mode");
    $bodyH2.removeClass("dark-mode");
    $bodyH3.removeClass("dark-mode");

    /* Landing */
    $landingDark.removeClass("dark-mode");
    $floatingBox.removeClass("dark-mode");
    $whiteComb.removeClass("dark-mode");
    $darkComb.removeClass("dark-mode");

    /* Service */
    $customerService.removeClass("dark-mode");

    /* Estimate/Trust Us */
    $estimate.removeClass("dark-mode");
    $contentBack.removeClass("dark-mode");

    /* Offer */
    $darkSVG.removeClass("dark-mode");
    $lightSVG.removeClass("dark-mode");

    /* Why Us */
    $whyUs.removeClass("dark-mode");

    /* FAQ */
    $faq.removeClass("dark-mode");
    $faqH4.removeClass("dark-mode");
    $faqA.removeClass("dark-mode");
    $faqUL.removeClass("dark-mode");

    /* Spotlight */
    $spotlight.removeClass("dark-mode");

    /* Contact */
    $topH2.removeClass("dark-mode");
    $topP.removeClass("dark-mode");

    /* Meet The Team */
    $meetTheTeam.removeClass("dark-mode");
    $teamContent.removeClass("dark-mode");
    $teamContentP.removeClass("dark-mode");

    /* Footer */
    $footer.removeClass("dark-mode");

    // -------------------------------------------
    //             ABOUT PAGE
    //--------------------------------------------

    $numberItemH4.removeClass("dark-mode");
    $squareH2.removeClass("dark-mode");

    // -------------------------------------------
    //             SERVICES PAGE
    //--------------------------------------------

    $olBefore.removeClass("dark-mode");

    // -------------------------------------------
    //             CONTACT PAGE
    //--------------------------------------------

    $contactTopper.removeClass("dark-mode");
    $contactRightH4.removeClass("dark-mode");
    $contactRightA.removeClass("dark-mode");

    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})