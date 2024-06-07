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
const addRule = (function (style) {
  const sheet = document.head.appendChild(style).sheet;
  let lastIndex = -1;

  return function (selector, css) {
    const propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
      return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
    }).join(";");

    if (lastIndex !== -1) {
      sheet.deleteRule(lastIndex);
    }

    lastIndex = sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
  };
})(document.createElement("style"));

let current = 1;
const updateCurrent = () => {
  const scrollY = window.scrollY;
  if (scrollY >= 0 && scrollY < 400) {
    current = 1;
  } else if (scrollY >= 400 && scrollY <= 950) {
    current = 2;
  } else if (scrollY >= 950) {
    current = 3
  } else {
    current = 0;
  }
  return current;
};

const updateRule = () => {
  if (current > 0) {
    addRule(`header nav ul li:nth-child(${current}):after`, {
      content: "''",
      display: 'block',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(133deg,rgba(30, 92, 230, 1) 49%,rgba(25, 59, 222, 1) 79%)',
      borderRadius: '10px',
      transition: 'width 0.2s ease-in',
      margin: 'auto',
    });
  }
};

window.addEventListener('scroll', function () {
  updateCurrent();
  updateRule();
});
