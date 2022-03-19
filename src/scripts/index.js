const $subTitle = document.querySelector(".content-sub-title");
$subTitle.textContent = "<Great Code/>";

const $menu = document.querySelector(".menu");
const $containerCenter = document.querySelector(".container-center");

let active = true;

$menu.addEventListener("click", () => {
  $containerCenter.classList.toggle("active");
  active = !active;
});
