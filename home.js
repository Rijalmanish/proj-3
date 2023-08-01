// <!-- ==============================================
// our slider start here 
// ============================================== -->



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});








// ===============================================
// scroll to top
// ===============================================

const heroSection = document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="chevron-up-outline"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"});
};

scroollElement.addEventListener("click",scrollTop);




