jQuery(document).ready(function ($) {
    function countdown() {
        var timeleft = 61;
        var downloadTimer = setInterval(function(){
          $("#countdown").text(--timeleft);
          if(timeleft <= 0){
            clearInterval(downloadTimer);
            $('#btnTrigger').click();
          }
        },1000);
    }

    countdown();
});
