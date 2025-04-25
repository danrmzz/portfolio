function showExperience(id) {
  var details = document.getElementsByClassName("experience-detail");
  for (var i = 0; i < details.length; i++) {
    details[i].classList.remove("active");
  }

  var items = document.getElementsByClassName("navbar-item");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }

  document.getElementById(id).classList.add("active");

  event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("selfbook").classList.add("active");
  document.querySelector(".navbar-item").classList.add("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const sectionId = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        // Adjust 100 to control when the animation starts
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

if (isMobileDevice()) {
  document.body.classList.add("black-background");

  // Change background attachment for body
  document.body.style.backgroundAttachment = "scroll";
  document.body.style.backgroundPosition = "center";

  // Change background attachment for body::before
  let bodyBefore = document.createElement("style");
  bodyBefore.innerHTML = `
        body::before {
            background-attachment: scroll !important;
            background-position: center !important;
        }
    `;
  document.head.appendChild(bodyBefore);
}
