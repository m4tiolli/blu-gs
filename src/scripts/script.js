window.addEventListener('load', function () {
  const menu = document.getElementsByTagName("nav")[0]
  menu.classList.add("menu-mobile")
})
document.getElementsByClassName("button-burger")[0].addEventListener('click', function () {
  const menu = document.getElementsByTagName("nav")[0]
  if (menu.classList.contains("menu-mobile-open")) {
    menu.classList.remove("menu-mobile-open")
  } else {
    menu.classList.add("menu-mobile-open")
  }
})