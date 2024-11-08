// ------------------------------------global elements variable----------------------------
// nav elements
const navbar = document.getElementById("navbar");
const mobileList = document.getElementById("navbarSupportedContent");
const navLinks = document.querySelectorAll("li.nav-item.link");
// slider
const portfolioSlider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll("#portfolioModal img");
// nav and tabs zoom icons in portfolio
const allZoomIcons = document.querySelectorAll(".navs-tabs .fa-search-plus");

// ------------------------------------home typing animation----------------------------
(function typingAnimation() {
  let options = {
    strings: ["Larry Daniels", "Developer", "Designer"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 700,
    loop: true,
  };
  new Typed(".typing", options);
})();

// ------------------------------------portfolio sliders effect----------------------------
// general function of portfolio tabs images
function tabsImagesEffect(zoomIcons, sliderImages) {
  zoomIcons.forEach(zoomIcon => {
    sliderImages.forEach(sliderImage => {
      zoomIcon.addEventListener("click", (e) => {
        const correspondingCardImage = zoomIcon.parentElement.parentElement.parentElement.previousElementSibling.querySelector("img");
        if (correspondingCardImage.src === sliderImage.src) {
          sliderImage.parentElement.parentElement.classList.add("active");
        }
      });
    });
  });
}

// clicking portfolio image to show slider
(function portfolioImagesEffect() {
  tabsImagesEffect(allZoomIcons, sliderImages);
})();

// remove active class when closing the slider
function removeActiveClass(sliderImages) {
  sliderImages.forEach((sliderImage) => {
    sliderImage.parentElement.parentElement.classList.remove("active");
  });
}

// closing slider effect
(function sliderCloseEffect() {
  portfolioSlider.addEventListener("transitionend", () => {
    if (!portfolioSlider.classList.contains("show")) {
      removeActiveClass(sliderImages);
    }
  });
})();

// ------------------------------------mobile nav effect----------------------------
// nav link logic (clicking the link closes the menu and scroll)
(function navLinkEffect() {
  navLinks.forEach(callback);
  function callback(link) {
    link.addEventListener("click", () => {
      mobileList.classList.remove("show");
    });
  }
})();

// ------------------------------------navbar scrolling effect----------------------------
(function navbarScrolling() {
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight) {
        navbar.classList.add("navbar-scrolled");
        navbar.classList.add("fixed-top");
      } else {
        navbar.classList.remove("navbar-scrolled");
        navbar.classList.remove("fixed-top");
      }
    });
  });
})();

