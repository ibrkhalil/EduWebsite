$(document).ready(function () {
  //Get Distance between div and start of page
  var d = $("footer").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if (wiOf > 25) {
      $(".defaultnav").animate(
        {
          backgroundColor: "#fff",
          color: "#000",
        },
        "1000"
      );
    } else if (wiOf == 0) {
      $(".nav").slideDown("500");
    } else {
      $(".nav").slideUp("500");
      // $("nav").addClass("defaultnav");
    }
    // } else {
    // }
  });
});
