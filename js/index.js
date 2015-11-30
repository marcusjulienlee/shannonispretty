$(document).ready(function() {
  $('h2.hidden').delay(1000).fadeIn(1000);
  $('.button-wrap.hidden').delay(2000).fadeIn(1000);
  $('#yes-btn').click(function() {
    $('.modal-wrap').toggleClass('open');
    $('.heart').delay(600).fadeIn(1000);
  });
  $('#no-btn').click(function() {
    $('.intro').effect('shake', {
      times: 5,
      distance: 50
    }, 1200);
  });
  $('.modal-wrap').click(function() {
    $('.modal-wrap').removeClass('open');
  });

});