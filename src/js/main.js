let navigation = document.querySelector(".navigation"),
    menuElements = document.querySelectorAll(".navigation .nav__menu ul li"),
    Hamburger = document.getElementById("hamburger"),
    topBar = document.querySelector("section.top__bar"),
    iframe = document.querySelector("iframe"),
    iframes = document.querySelectorAll(".for-iframes iframe"),
    forIframes = document.querySelector(".for-iframes"),
    BackIcon = document.querySelector(".navigation .nav__brand .back__item"),
    active = 0;

menuElements.forEach((li, key) => {
    menuElements[key].onclick = () => {
        let LastElActive = document.querySelector(".navigation .nav__menu ul li.active");
        LastElActive.classList.remove("active");
        menuElements[key].classList.add("active");

        let lastActiveIframe = document.querySelector(".for-iframes iframe.active");
        lastActiveIframe.classList.remove("active");
        iframes[key].classList.add("active");
        active = key;
    }
})

Hamburger.onclick = () => {
    navigation.classList.toggle("active");
    topBar.classList.toggle("active");
    forIframes.classList.toggle("active");
}

BackIcon.onclick = () => {
    navigation.classList.remove("active")
}

let editForm = document.querySelector(".edit"),
    editBtn = document.querySelector(".table-form .tables table tbody tr td:last-child");


editBtn.onclick = () => {
    editForm.classList.add("active")
}