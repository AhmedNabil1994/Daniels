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
const modal = document.getElementById("portfolioModal");
const closeIcon = document.querySelector(".close-icon");
// progress and counter animation
const statsAnchor = document.querySelector('a[href="#stats"]');
const statNumbers = document.querySelectorAll(".stat-number");
const aboutAnchor = document.querySelector('a[href="#about"]');
const widthBars = document.querySelectorAll(".width-bar");

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

/* allZoomIcons.forEach((zoomIcon) => {
  zoomIcon.parentElement.addEventListener("click", (e) => {
    const src = e.target.dataset.src ?? e.target.children[0].dataset.src;
    sliderImages.forEach((sliderImage) => {
      if (sliderImage.dataset.src === src) {
        sliderImage.parentElement.parentElement.classList.add("active");
      } else {
        sliderImage.parentElement.parentElement.classList.remove("active");
      }
    });
  });
}); */

// test
allZoomIcons.forEach((zoomIcon) => {
  zoomIcon.parentElement.addEventListener("click", (e) => {
    console.log(e.target.dataset.src);
    sliderImages.forEach((sliderImage) => {
      if (sliderImage.dataset.src === e.target.dataset.src) {
        sliderImage.parentElement.parentElement.classList.add("active");
      } else {
        sliderImage.parentElement.parentElement.classList.remove("active");
      }
    });
  });
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

// ------------------------------------Progress Skils Animation----------------------------
document.addEventListener("DOMContentLoaded", function () {
  let barsAnimated = true;
  function animateBars() {
    widthBars.forEach((bar) => {
      const target = +bar.getAttribute("data-target");
      const inc = target / 5;
      let widthProperty = bar.style.width;
      (function updateBar() {
        let width = parseInt(widthProperty);
        if (width < target) {
          width = Math.ceil(width + inc);
          widthProperty = width + "%";
          bar.style.width = widthProperty;
          bar.querySelector("span").innerText = target + "%";
          setTimeout(updateBar, 50);
        } else {
          bar.style.width = target + "%";
        }
      })();
    });
  }
  document.addEventListener("scroll", function () {
    if (aboutAnchor.classList.contains("active") && barsAnimated) {
      animateBars();
      barsAnimated = false;
    }
  });
});
