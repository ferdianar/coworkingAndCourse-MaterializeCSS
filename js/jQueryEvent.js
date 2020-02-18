$(document).ready(function()    {
        $('#send').click(function() {
            if (window.confirm('You type are correctly ?')) {
                window.alert('Thanks for Submitting');
            } 
        });
        $('#facebook').click(function() {
            if (window.confirm('Are you want to access it now ?'))   {
                window.open("https://www.facebook.com/ferdian.r.37");
            }
        });
        $('#instagram').click(function()    {
            if(window.confirm('Are you want to access it now ?'))   {
            window.open("https://www.instagram.com/ferdianarid/");
            }
        });
        $('#twitter').click(function()  {
            if(window.confirm('Are you want to access it now ?'))  {
                window.open("https://twitter.com/FerdianAhmadR2");
            }
        });
        $('#pinterest').click(function()    {
            if(window.confirm('Are you want to access it now ?'))   {
                window.open("https://id.pinterest.com/ferdianahmadrozikin018/");
            }
        });
});
/*
    if (window.confirm("Do you really want to leave?")) { 
  window.open("exit.html", "Thanks for Visiting!");
}*/