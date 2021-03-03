window.addEventListener("scroll", function() {
    let nav = document.getElementById("nav-id");
    nav.classList.toggle("dark-media", window.scrollY > 20)
});
let items = $("#section .col-xl-4");
items.on("click", function() {
    $(this).find("p").slideToggle("500")
});
let date = new Date;
let year = date.getFullYear();
$("#year").text(year);
let loader = $(".loader");
window.addEventListener("load", function() {
    loader.addClass("loaderEnd");
});
