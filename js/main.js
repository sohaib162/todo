let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No
let span = document.querySelector(".up");



window.onscroll = function() {
    // Stats Increase Number
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
    if (window.scrollY >= statsSection.offsetTop - 110) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}



/****nav bar*****/
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropMenu = document.querySelector(".drop_menu");

toggleBtn.onclick = function() {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ?
        'fa-solid fa-xmark' :
        'fa-solid fa-bars'
}


/*******Pricing POPUP Form**********/
function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");

    function openPopup() {
        popupNode.classList.add("active");
    }

    function closePopup() {
        popupNode.classList.remove("active");
    }
    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);
document.querySelector("#open-popup1").addEventListener("click", popup);
document.querySelector("#open-popup2").addEventListener("click", popup);