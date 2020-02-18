document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
});

// Or with jQuery

$(document).ready(function () {
    $('.sidenav').sidenav();
});

//dropdown trigger
$(".dropdown-trigger").dropdown();
$(".dropdown-trigger2").dropdown();

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    height: 631,
    indicators: false,
    interval: 3000,
    transition: 600
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
});