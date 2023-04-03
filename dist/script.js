const buttonNav = document.querySelector("#buttonNav");
const navMobile = document.querySelector("#navMobile");

buttonNav.addEventListener("click", function () {
  navMobile.classList.toggle("top-20");
  navMobile.classList.toggle("top-[-400px]");
});
