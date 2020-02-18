document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

//dropdown trigger
$(".dropdown-trigger").dropdown();
$(".dropdown-trigger2").dropdown();

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,   {
    height: 620,
    indicators: false,
    interval: 5000,
    transition: 600
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

//document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.datepicker');
//    var instances = M.Datepicker.init(elems, options);
//  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });