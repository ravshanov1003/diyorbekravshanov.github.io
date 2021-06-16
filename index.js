let toggleBtn = document.getElementsByClassName("toggle-btn")[0]
let right = document.getElementsByClassName("right")[0]
toggleBtn.addEventListener('click', () => {
    right.classList.add("active");
})