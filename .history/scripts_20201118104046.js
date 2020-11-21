$(document).ready(function () {
  //Get Distance between div and start of page
  var d = $("footer").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if (wiOf > 25) {
      $(".nav").slideUp("500");
      // $(".defaultnav").animate(
      //   {
      //     backgroundColor: "#fff",
      //     color: "#000",
      //   },
      //   "1000"
      // );
    } else if (wiOf < 25) {
      $(".nav").slideDown("500");
    } else {

      // $("nav").addClass("defaultnav");
    }
    // } else {
    // }
  });
});
