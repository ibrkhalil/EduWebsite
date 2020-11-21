$(document).ready(function () {
  //Get Distance between div and start of page
  var d = $("footer").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if(wiOf > 10)
    {
      $('.nav').$(selector).css(propertyName, value);('1000');
    }
    else if (wiOf > 100)
    {
      $('.nav').slideUp('1000');
    }
    else
    {
      $('.nav').slideDown('1000');
      $('nav').addClass('defaultnav');
    }
    // } else {
    // }
  });
});
