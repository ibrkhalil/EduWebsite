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
      );
    } else {
      // $("nav").addClass("defaultnav");
    }
    // } else {
    // }
  });

  $(".demos").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
        <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact Us</a></li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        </ul>
      </div>`);
    },
    function () {
    if($('.showonhover').hover(function () {

        
      }, function () {
        setTimeout(() => {
          $(".menu li").remove();
        }, 300);
      }
    ));
     setTimeout(() => {
      // $(".showonhover").remove();
     }, 4000);
    }
  );
});
