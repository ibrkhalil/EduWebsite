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
         $(".defaultnav").animate(
         {
          backgroundColor: "#000",
           color: "#fff",
         },
         "1000"
         )}
     else {

      // $("nav").addClass("defaultnav");
    }
    // } else {
    // }
  });


  $('.demos').hover(function () {
      $('.menu').append(`<div class='showonhover'> 
        <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        </ul>
        <img src='./2014_12_16_01_57_IMG_3990.JPG'>
      </div>`);
      
    }, function () {
      // out
    }
  );
});
