(function() {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
  })
})();

//$( document ).ready(function() {
 // var hamburger = $('#hamburger-icon');
 // hamburger.click(function() {
    // hamburger.toggleClass('overlay');
    // return false;
 // });
//});

$(window).scroll(function(){
  workstripScroll();
});


function workstripScroll() {
  var wScroll = $(window).scrollTop();

$('.top-work').css('background-position','center -'+ wScroll +'.1px');


  var wScroll = $(window).scrollTop();

$('.top-work1').css('background-position','center '+ wScroll +'px');

}
