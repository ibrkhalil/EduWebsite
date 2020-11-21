$(document).ready(function () {
  //Get Distance between div and start of page
  var d = $("footer").offset().top;
  $(window).scroll(function () {
    // console.log(d)
    var wiOf = $(this).scrollTop();
    console.log(wiOf);
    // if (wiOf > 10) {
    if (wiOf > 25) {
    }
  });

  // DropDown
  $(".demos").hover(
    function () {
      $(".menu li:hover").append(`<div class='showonhover'> 
        <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact</a></li>
        </ul>
      </div>`);
    },
    function () {
      setTimeout(() => {
        $(".showonhover:not(:hover)").fadeOut();
      }, 300);
    }
  );
});
