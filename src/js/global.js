// main page
let mainStatistics = document.querySelector(".statistics"),
    mainShow = document.querySelector(".show #show"),
    mainHide = document.querySelector(".show #hide");

mainShow.onclick = () => {
    mainStatistics.classList.add("active");
    mainShow.style.display = 'none';
    mainHide.style.display = 'block';
}

mainHide.onclick = () => {
    mainStatistics.classList.remove("active");
    mainShow.style.display = 'block';
    mainHide.style.display = 'none';
}
