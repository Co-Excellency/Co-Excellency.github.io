// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
navbarBurgerClick = function navbarBurgerClick(id) {
    if (id.getAttribute("class") === "navbar-burger") {
      id.setAttribute("class", "navbar-burger is-active");
      document.getElementById("navbar-menu").setAttribute("class", "navbar-menu is-active");
    } else {
      id.setAttribute("class", "navbar-burger");
      document.getElementById("navbar-menu").setAttribute("class", "navbar-menu");
    }
};