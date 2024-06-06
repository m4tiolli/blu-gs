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

document.getElementsByClassName('button-user')[0].addEventListener('click', function () {
  const menu = document.getElementsByClassName("modal-user")[0]
  if (menu.classList.contains("modal-user-open")) {
    menu.classList.remove("modal-user-open")
  } else {
    menu.classList.add("modal-user-open")
  }
})