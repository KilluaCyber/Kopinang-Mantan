// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di kilik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
const soppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = () => {
  soppingCart.classList.toggle("active");
};
// tougle class active form search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// klik diluar sidebar untuk refresh
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const soppingbtn = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!soppingbtn.contains(e.target) && !soppingCart.contains(e.target)) {
    soppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik x modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
// klik diluar modal
const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
