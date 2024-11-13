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
// test
const modal = document.getElementById("portfolioModal");
const closeIcon = document.querySelector(".close-icon");
const statsAnchor = document.querySelector('a[href="#stats"]');
const statNumbers = document.querySelectorAll(".stat-number");
console.log(statNumbers);

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
// allZoomIcons.forEach((zoomIcon) => {
//   sliderImages.forEach((sliderImage) => {
//     zoomIcon.addEventListener("click", (e) => sliderEffect(e, sliderImage));
//   });
// });

// function sliderEffect(e, sliderImage) {
//   const correspondingCardImage = e.target.closest(".card").querySelector("img");
//   if (correspondingCardImage.src === sliderImage.src) {
//     sliderImage.parentElement.parentElement.classList.add("active");
//   }
// }

// (function addActiveClass() {
// })();

allZoomIcons.forEach((zoomIcon) => {
  zoomIcon.addEventListener("click", (e) => {
    const currentImage = e.target.closest(".card").querySelector("img");
    sliderImages.forEach((sliderImage) => {
      console.log(sliderImage.dataset.src, "slider image src");
      console.log(currentImage.dataset.src, "current image src");
      if (sliderImage.dataset.src === currentImage.dataset.src) {
        sliderImage.parentElement.parentElement.classList.add("active");
        console.log("add active class fn");
      }
    });
  });
});




// remove active class when closing the slider
function removeActiveClass(sliderImages) {
  sliderImages.forEach((sliderImage) => {
    sliderImage.parentElement.parentElement.classList.remove("active");
  });
}

// closing slider effect
// (function sliderCloseEffect() {
// })();
portfolioSlider.addEventListener("transitionend", () => {
  console.log("transition happened");
  if (!portfolioSlider.classList.contains("show")) {
    console.log(
      !portfolioSlider.classList.contains("show"),
      "no show class status inside if"
    );
    removeActiveClass(sliderImages);
    console.log("remove active class fn");
  } else {
    console.log("give false value");
  }
});

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

// ------------------------------------Stats Counter Animation----------------------------
document.addEventListener("DOMContentLoaded", function () {
  let statsAnimated = true;
  function animateNumbers() {
    statNumbers.forEach((num) => {
      const target = +num.getAttribute("data-target");
      const inc = target / 100;
      (function updateNumber() {
        const current = +num.innerText;
        if (current < target) {
          num.innerText = Math.ceil(current + inc);
          setTimeout(updateNumber, 15);
        } else {
          num.innerText = target;
        }
      })();
    });
  }
  document.addEventListener("scroll", function () {
    if (statsAnchor.classList.contains("active") && statsAnimated) {
      animateNumbers();
      statsAnimated = false;
    }
  });
});