const hamburger = document.querySelector(".header__hamburger"),
  list = document.querySelector(".header__list"),
  closeElem = document.querySelector(".header__close");

hamburger.addEventListener("click", () => {
  list.classList.add("active");
  hamburger.classList.add("unactive");
  closeElem.classList.add("active");
});

closeElem.addEventListener("click", () => {
  list.classList.remove("active");
  hamburger.classList.remove("unactive");
  closeElem.classList.remove("active");
});
