let span = document.querySelector(".up");



window.onscroll = function() {
    // Stats Increase Number
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

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