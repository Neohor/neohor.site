$(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    1,
  );
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__span, .burger__overlay').toggleClass('active');
  });

  $('#phone').mask('+9999999999999');
});



var scrolled = false;
$(window).scroll(function () {
  if (!scrolled) {
    var st = $(this).scrollTop();
    if (st >= 500 && st <= 1100) {
      scrolled = true;
      $(function () {
        $({ numberValue: 0 }).animate(
          { numberValue: 722 },
          {
            duration: 3000,
            easing: 'linear',

            step: function (val) {
              $('#counter2').html(Math.ceil(val));
            },
          },
        );
      });

      $(function () {
        $({ numberValue: 0 }).animate(
          { numberValue: 836 },
          {
            duration: 3000,
            easing: 'linear',

            step: function (val) {
              $('#counter1').html(Math.ceil(val));
            },
          },
        );
      });
    }
  }
});

var but_submit = document.querySelector('.button-send');
but_submit.disabled = true;
but_submit.style.opacity = 0.2;

document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  var but_submit = document.querySelector('.button-send'); 

  for (var checkbox of checkboxes)
  {
      checkbox.addEventListener('change', function(event)
      {
          if (event.target.checked) {
              but_submit.disabled = false;
              but_submit.style.opacity = 1.0;
          }
          else {
              but_submit.disabled = true;
              but_submit.style.opacity = 0.2;
          }
      });
  }
}, false);

const swiper = new Swiper('.objects-content', {
  // Default parameters
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 3,
      grabCursor: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    }
  }
})