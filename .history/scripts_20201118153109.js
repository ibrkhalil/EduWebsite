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
      $(".stickytop").removeClass("invert");
      $('.nav').fadeIn('400');

    } else if (wiOf > 50 && wiOf < 200) {
      console.log('fire')
      $(".stickytop").addClass("invert");
      $(".stickytop").removeClass("invertback");
    }
    else if (wiOf >= 200)
    {
      $('.nav').fadeOut('400');
    }
    // if (wiOf > 50){
    // // $('.nav').fadeOut()

    // }
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
    },
    function () {
      setTimeout(() => {
        $(".showonhover :not(:hover)").fadeOut();
      }, 300);
    }
  );

  $(".demos2").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
      <div class="dd1">
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
          <li><img src="https://educationwp.thimpress.com/wp-content/uploads/2015/11/course-4-450x450.jpg"></li>
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
    },
    function () {
      setTimeout(() => {
        $(".showonhover :not(:hover)").fadeOut();
      }, 300);
    }
  );

});
