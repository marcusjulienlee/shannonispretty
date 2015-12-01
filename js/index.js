$(document).ready(function() {
  $('h2.hidden').delay(1000).fadeIn(1000);
  $('.button-wrap.hidden').delay(2000).fadeIn(1000);
  $('#yes-btn').click(function() {
    $('.modal-wrap').toggleClass('open');
    $('.heart').delay(600).fadeIn(1000);
  });

  var count = 0;
  $('#no-btn').click(function() {
    count = count + 1;
    if (count < 5) {
      $('.intro').effect('shake', {
        distance: 100,
        duration: 800,
      })
    } else {
      alert("fuck you dude");
    };
    if ( count == 3) {
      alert("How dare you deny Shannon's prettyness?!")
    }
  });
  
  $('.modal-wrap').click(function() {
    $('.modal-wrap').removeClass('open');
  });

});