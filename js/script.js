function ibg() {

    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

jQuery("document").ready(function($) {

    var nav = $('.header');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 136) {
            nav.addClass("header__active");
        } else {
            nav.removeClass("header__active");
        }
    });

});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    /*daysSpan.innerHTML = t.days;*/
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 01 * 150 * 60 * 1000);

//var deadline = new Date(Date.parse(new Date()) + 01 * МИНУТЫ * 60 * 1000);

initializeClock('countdown', deadline);
initializeClock('countdown-b3', deadline);
initializeClock('countdown-footer', deadline);


