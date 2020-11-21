$(document).ready(function () {
  //Get Distance between div and start of page
  var d = $("footer").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if(wiOf > 100)
    {
      $('.nav').fadeOut('3000');
      $('selector').slideUp();
    }
    else
    {
      $('.nav').fadeIn();
    }
    // } else {
    // }
  });
});
