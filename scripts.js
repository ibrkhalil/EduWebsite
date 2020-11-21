$(document).ready(function () {
  // Get Distance between div and start of page
  var d = $("body").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if (wiOf == 0) {
      $(".stickytop").addClass("invertback");
      $(".stickme").removeClass("stickyside");

      $(".stickytop").removeClass("invert");
      $(".goup-off").fadeOut("goup-on");
      $(".nav").fadeIn("400");
    } else if (wiOf > 50 && wiOf < 200) {
      // console.log("fire");
      $(".stickytop").addClass("invert");
      $(".stickytop").removeClass("invertback");
    } else if (wiOf >= 200 && wiOf < 400) {
      $(".nav").slideUp("400");
    } else if (wiOf > 400) {
      $(".stickme").addClass("stickyside");
      console.log("fire");
      $(".goup-off").addClass("goup-on").fadeIn();
    }
    // if (wiOf > 50){
    // // $('.nav').fadeOut()

    // }
  });
  $("#backtotop").click(function () {
    console.log("goingtop");
    $("html, body").animate({ scrollTop: 0 }, 750);
    return false;
  });

  // DropDown
  $(".demos1").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
      <div class="dd1">
      <ul>
          <li><a href="#">Demo Main Demo</a></li>
          <li><a href="#">Demo Course Era</a></li>
          <li><a href="#">Demon Online School</a></li>
          <li><a href="#">Demon Online School</a></li>
          <li><a href="#">Demon Crypto</a></li>
      </ul>
      <ul>
          <li><a href="#">Demo Courses Hub</a></li>
          <li><a href="#">Demo Classic University</a></li>
          <li><a href="#">Demo Modern University</a></li>
          <li><a href="#">Demo Ivy League</a></li>
          <li><a href="#">Demo New Art</a></li>
      </ul>
      <ul>
          <li><a href="#">Demo New Edu</a></li>
          <li><a href="#">Demo Kindergarten</a></li>
          <li><a href="#">Demo One Instruction</a></li>
          <li><a href="#">Demo Kit Art</a></li>
          <li><a href="#">Demo One Instruction</a></li>
          <li></li>
      </ul>
      <ul>
          <li><a href="">Demo New Instructor</a></li>
          <li><a href="">Demo React</a></li>
          <li><a href="">Demo Edtech</a></li>
          <li><a href="">Demo Grad School</a></li>
          <li><a href="">Demo Tech Camp</a></li>
      </ul>
      </div>`);
      // $(".ddtrigger:hover").addClass("hover-dd");
    },
    function () {
      $(".showonhover :not(:hover)").remove();
      $(".ddtrigger").removeClass("hover-dd");
    }
  );

  $(".demos2").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
      <div class="dd2 makemeontop">
      <ul>
          <li><strong>About Courses</strong></li>
          <li><a href="#">Free Access Type</a></li>
          <li><a href="#">Other Free Type</a></li>
          <li><a href="#">Paid Type</a></li>
          <li><a href="#">Other Paid Type</a></li>
          <li><a href="#">Courses Achieve</a></li>
          <li><a href="#">Demo Accounts</a></li>
          <li><a href="#">Become an Instructor</a></li>
          <li><a href="#">Demon Online School</a></li>
          <li><a href="#">Instructor Profile</a></li>
      </ul>
      <ul>
          <li><img class='dd2img' src="https://educationwp.thimpress.com/wp-content/uploads/2015/11/course-4-450x450.jpg"/></li>
          <li><a href="#">LMS Interactive Content</a></li>
          <li class="greentext"><p>FREE</p></li>
          <li><a class='btn btn-small'>Demo Ivy League</a></li>
      </ul>
      <ul>
          <li><img src='https://educationwp.thimpress.com/wp-content/uploads/2016/02/megamenu.jpg'/></li>
          <li></li>
      </ul>

      </div>`);
      $(".ddtrigger:hover").addClass("hover-dd");
    },
    function () {
      $(".showonhover :not(:hover)").remove();
      $(".ddtrigger").removeClass("hover-dd");
    }
  );

  $(".demos3").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
      <div class="dd3">
      <ul>
          <li><a href="#">Memebership</a></li>
          <li><a href="#">Portofolio</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Sidebar Shop</a></li>
          <li><a href="#">404 Page</a></li>

      </ul>

      </div>`);
      $(".ddtrigger").addClass("hover-dd");
    },
    function () {
      $(".showonhover :not(:hover)").remove();
      $(".ddtrigger").removeClass("hover-dd");
    }
  );

  //DropDown hover indicator

  var menu = $(".menu");
  var indicator = $('<span class="indicator"></span>');
  menu.append(indicator);
  // position_indicator(menu.find("li.first-child"));
  setTimeout(function () {
    indicator.css("opacity", 1);
  }, 500);
  menu.find("li").mouseenter(function () {
    position_indicator($(this));
  });
  menu.find("li").mouseleave(function () {
    position_indicator(menu.find("li.active"));
  });

  function position_indicator(ele) {
    var left = ele.offset().left - 0;
    var width = ele.width();
    indicator.stop().animate({
      left: left,
      width: width,
    });
  }
});
