let vertical_menu = document.querySelector(".top_bar .vertical_menu"),
  hamburgerBtn = document.querySelector(".top_bar .container .hamburger"),
  backBtn = document.querySelector(".top_bar .vertical_menu .back"),
  menus = document.querySelectorAll(".top_bar .container .menu ul a li"),
  vertical_menus = document.querySelectorAll(".top_bar .vertical_menu .menu ul a li"),
  sections = document.querySelectorAll("section"),
  loginLink = document.getElementById("login"),
  contactLink = document.getElementById("contact"),
  active = 0;

hamburgerBtn.onclick = () => {
  vertical_menu.classList.add("active");
}   

backBtn.onclick = () => {
  vertical_menu.classList.remove("active");
}

setInterval(() => {
  menus.forEach((li, key) => {
    menus[key].onclick = () => {
        let LastactiveMenu = document.querySelector(".top_bar .container .menu ul a li.active");
        LastactiveMenu.classList.remove("active");
        menus[key].classList.add("active");

        let LastactiveSection = document.querySelector("section.active");
        LastactiveSection.classList.remove("active");
        sections[key].classList.add("active");

        let lastActiveVertMenu = document.querySelector(".top_bar .vertical_menu .menu ul a li.active");
        lastActiveVertMenu.classList.remove("active");
        vertical_menus[key].classList.add("active");

        key = active;
    }
  })
})

setInterval(() => {
  vertical_menus.forEach((el, key) => {
    vertical_menus[key].onclick = () => {
      let lastActiveVerMenu = document.querySelector(".top_bar .vertical_menu .menu ul a li.active");
      lastActiveVerMenu.classList.remove("active");
      vertical_menus[key].classList.add("active");

      let LastactiveSection = document.querySelector("section.active");
        LastactiveSection.classList.remove("active");
        sections[key].classList.add("active");

      let LastactiveHarMenu = document.querySelector(".top_bar .container .menu ul a li.active");
      LastactiveHarMenu.classList.remove("active");
      menus[key].classList.add("active");
    }
  })
})

loginLink.onclick = () => {
  sections[1].classList.add("active");
  let lastActiveSection = document.querySelector("section.active");
    lastActiveSection.classList.remove("active");

  let lastActiveClass = document.querySelector(".top_bar .container .menu ul a li.active");
  lastActiveClass.classList.remove("active");
  menus[1].classList.add("active");

  let lastActiveClassVer = document.querySelector(".top_bar .vertical_menu .menu ul a li.active");
  lastActiveClassVer.classList.remove("active");
  vertical_menus[1].classList.add("active");
}

contactLink.onclick = () => {
  sections[2].classList.add("active");
  let lastActiveSection = document.querySelector("section.active");
    lastActiveSection.classList.remove("active");

  let lastActiveClass = document.querySelector(".top_bar .container .menu ul a li.active");
  lastActiveClass.classList.remove("active");
  menus[2].classList.add("active");

  let lastActiveClassVer = document.querySelector(".top_bar .vertical_menu .menu ul a li.active");
  lastActiveClassVer.classList.remove("active");
  vertical_menus[2].classList.add("active");
}