// ------------------------------------global elements variable----------------------------
// nav elements
const barsIcon = document.querySelector(".fa-bars");
const navbar = document.getElementById("navbar");
const mobileList = document.getElementById("navbarSupportedContent");
const navLinks = document.querySelectorAll("li.nav-item.link");
// slider
const portfolioSlider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll("#portfolioModal img");
// nav and tabs zoom icons in portfolio
const allZoomIcons = document.querySelectorAll("#pills-all .fa-search-plus");
console.log(allZoomIcons);

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
// function tabsImagesEffect(zoomIcons, sliderImages) {
//   zoomIcons.forEach(tabTypeCallback);
//   function tabTypeCallback(zoomIcon) {
//     sliderImages.forEach(sliderCallback);
//     function sliderCallback(sliderImage) {
//       zoomIcon.addEventListener("click", (e) => {
//         // test here
//         let cardImage = zoomIcon.parentElement.parentElement.parentElement.previousElementSibling.querySelector("img");
//         if (cardImage.src === sliderImage.src) {
//           sliderImage.parentElement.parentElement.classList.add("active");
//         }
//         console.log(zoomIcon.parentElement.parentElement.parentElement.previousElementSibling.querySelector("img"), "cardImage");
        
//       });
//     }
//   }
// }

// clicking portfolio image to show slider
// (function portfolioImagesEffect() {
//   tabsImagesEffect(allZoomIcons, sliderImages);
// })();

// remove active class when closing the slider
// function removeActiveClass(sliderImages) {
//   sliderImages.forEach((sliderImage) => {
//     sliderImage.parentElement.parentElement.classList.remove("active");
//   });
// }

// closing slider effect
// (function sliderCloseEffect() {
//   portfolioSlider.addEventListener("transitionend", () => {
//     if (!portfolioSlider.classList.contains("show")) {
//       removeActiveClass(sliderImages);
//     }
//   });
// })();
