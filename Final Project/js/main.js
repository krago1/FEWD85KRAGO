(function($) {

  $.ageCheck = function(options) {

    var settings = $.extend({
      minAge: 21,
      redirectTo: '',
      redirectOnFail: '',
      title: 'Age Verification',
      copy: 'This Website requires you to be [21] years or older to enter. Please enter your Date of Birth in the fields below in order to continue:'
    }, options);

    var _this = {
      month: '',
      day: '',
      year: '',
      age: '',
      errors: Array(),
      setValues: function() {
        var month = $('.ac-container .month').val();
        var day = $('.ac-container .day').val()
        _this.month = month;
        _this.day = day.replace(/^0+/, ''); //remove leading zero
        _this.year = $('.ac-container .year').val();
      },
      validate: function() {
        _this.errors = [];
        if (/^([0-9]|[12]\d|3[0-1])$/.test(_this.day) === false) {
          _this.errors.push('Day is invalid or empty');
        };
        if (/^(19|20)\d{2}$/.test(_this.year) === false) {
          _this.errors.push('Year is invalid or empty');
        };
        _this.clearErrors();
        _this.displayErrors();
        return _this.errors.length < 1;
      },
      clearErrors: function() {
        $('.errors').html('');
      },
      displayErrors: function() {
        var html = '<ul>';
        for (var i = 0; i < _this.errors.length; i++) {
          html += '<li><span>x</span>' + _this.errors[i] + '</li>';
        }
        html += '</ul>';
        setTimeout(function() {
          $('.ac-container .errors').html(html)
        }, 200);
      },
      reCenter: function(b) {
        b.css("top", Math.max(0, (($(window).height() - (b.outerHeight() + 150)) / 2) +
          $(window).scrollTop()) + "px");
        b.css("left", Math.max(0, (($(window).width() - b.outerWidth()) / 2) +
          $(window).scrollLeft()) + "px");
      },
      buildHtml: function() {

        var copy = settings.copy;
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var html = '';
        html += '<div class="ac-overlay"></div>';
        html += '<div class="ac-container">';
        html += '<h2>' + settings.title + '</h2>';
        html += '<p>' + copy.replace('[21]', '<strong>' + settings.minAge + '</strong>'); + '</p>';
        html += '<div class="errors"></div>';
        html += '<div class="fields"><select class="month">';
        for (var i = 0; i < months.length; i++) {
          html += '<option value="' + i + '">' + months[i] + '</option>'
        }
        html += '</select>';
        html += '<input class="day" maxlength="2" placeholder="01" />';
        html += '<input class="year" maxlength="4" placeholder="1989"/>';
        html += '<button>Submit</button></div></div>';

        $('body').append(html);

        $('.ac-overlay').animate({
          opacity: 0.8
        }, 500, function() {
          _this.reCenter($('.ac-container'));
          $('.ac-container').css({
            opacity: 1
          })
        });

        $(".ac-container .day, .ac-container .year").focus(function() {
          $(this).removeAttr('placeholder');
        });
      },
      setAge: function() {
        _this.age = '';
        var birthday = new Date(_this.year, _this.month, _this.day);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        _this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      },
      setSessionStorage: function(key, val) {
        try {
          sessionStorage.setItem(key, val);
          return true;
        } catch (e) {
          return false;
        }
      },
      handleSuccess: function() {
        var successMsg = '<h3>Success!</h3><p>You are now being redirected back to the site...</p>';
        $('.ac-container').html(successMsg);
        setTimeout(function() {
          $('.ac-container').animate({
            'top': '-350px'
          }, 200, function() {
            $('.ac-overlay').animate({
              'opacity': '0'
            }, 500, function() {
              if (settings.redirectTo != '') {
                window.location.replace(settings.redirectTo);
              } else {
                $('.ac-overlay, .ac-container').remove();
              }
            });
          });
        }, 2000);
      },
      handleUnderAge: function() {
        var underAgeMsg = '<h3>Sorry, you are not old enough to view this site...</h3>';
        $('.ac-container').html(underAgeMsg);
        if (settings.redirectOnFail != '') {
          setTimeout(function() {
            window.location.replace(settings.redirectOnFail);
          }, 2000);
        }
      }
    }; //end _this

    if (sessionStorage.getItem("ageVerified") == "true") {
      return false;
    }

    _this.buildHtml();

    $('.ac-container button').on('click', function() {
      _this.setValues();
      if (_this.validate() === true) {
        _this.setAge();

        if (_this.age >= settings.minAge) {
          if (!_this.setSessionStorage("ageVerified", "true")) {
            console.log('sessionStorage not supported by your browser');
          };
          _this.handleSuccess();
        } else {
          _this.handleUnderAge();
        }
      }
    });

    $(window).resize(function() {
      _this.reCenter($('.ac-container'));
      setTimeout(function() {
        _this.reCenter($('.ac-container'));
      }, 500);
    });
  };
}(jQuery));

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("header").removeClass("large").addClass("small");
  } else {
    $("header").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#logo").removeClass("large").addClass("large2");
  } else {
    $("#logo").removeClass("large2").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#logo2").removeClass("small2").addClass("small");
  } else {
    $("#logo2").removeClass("small").addClass("small2");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav").removeClass("large").addClass("small");
  } else {
    $("#nav").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-left1").removeClass("large").addClass("small");
  } else {
    $("#nav-left1").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-left2").removeClass("large").addClass("small");
  } else {
    $("#nav-left2").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-left3").removeClass("large").addClass("small");
  } else {
    $("#nav-left3").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-right1").removeClass("large").addClass("small");
  } else {
    $("#nav-right1").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-right2").removeClass("large").addClass("small");
  } else {
    $("#nav-right2").removeClass("small").addClass("large");
  }
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 50) {
    $("#nav-right3").removeClass("large").addClass("small");
  } else {
    $("#nav-right3").removeClass("small").addClass("large");
  }
});

$("#beer-name1").hover(function() {
  event.preventDefault();
  if ($('.beer-description-text2').is(":visible")) {
    $(".beer-description-text2").slideToggle();
  }
  if ($('.beer-description-text3').is(":visible")) {
    $(".beer-description-text3").slideToggle();
  }
  if ($('.beer-description-text4').is(":visible")) {
    $(".beer-description-text4").slideToggle();
  }
  $(".beer-description-text1").slideToggle();
  $("#beer-image").slideToggle();
});

$("#beer-name2").hover(function() {
  event.preventDefault();
  if ($('.beer-description-text1').is(":visible")) {
    $(".beer-description-text1").slideToggle();
  }
  if ($('.beer-description-text3').is(":visible")) {
    $(".beer-description-text3").slideToggle();
  }
  if ($('.beer-description-text4').is(":visible")) {
    $(".beer-description-text4").slideToggle();
  }
  $(".beer-description-text2").slideToggle();
  $("#beer-image").slideToggle();
});

$("#beer-name3").hover(function() {
  event.preventDefault();
  if ($('.beer-description-text2').is(":visible")) {
    $(".beer-description-text2").slideToggle();
  }
  if ($('.beer-description-text1').is(":visible")) {
    $(".beer-description-text1").slideToggle();
  }
  if ($('.beer-description-text4').is(":visible")) {
    $(".beer-description-text4").slideToggle();
  }
  $(".beer-description-text3").slideToggle();
  $("#beer-image").slideToggle();
});

$("#beer-name4").hover(function() {
  event.preventDefault();
  if ($('.beer-description-text2').is(":visible")) {
    $(".beer-description-text2").slideToggle();
  }
  if ($('.beer-description-text3').is(":visible")) {
    $(".beer-description-text3").slideToggle();
  }
  if ($('.beer-description-text1').is(":visible")) {
    $(".beer-description-text1").slideToggle();
  }
  $(".beer-description-text4").slideToggle();
  $("#beer-image").slideToggle();
});

$("#wine-name1").hover(function() {
  event.preventDefault();
  if ($('.wine-description-text2').is(":visible")) {
    $(".wine-description-text2").slideToggle();
  }
  if ($('.wine-description-text3').is(":visible")) {
    $(".wine-description-text3").slideToggle();
  }
  if ($('.wine-description-text4').is(":visible")) {
    $(".wine-description-text4").slideToggle();
  }
  $(".wine-description-text1").slideToggle();
  $("#wine-image").slideToggle();
});

$("#wine-name2").hover(function() {
  event.preventDefault();
  if ($('.wine-description-text1').is(":visible")) {
    $(".wine-description-text1").slideToggle();
  }
  if ($('.wine-description-text3').is(":visible")) {
    $(".wine-description-text3").slideToggle();
  }
  if ($('.wine-description-text4').is(":visible")) {
    $(".wine-description-text4").slideToggle();
  }
  $(".wine-description-text2").slideToggle();
  $("#wine-image").slideToggle();
});

$("#wine-name3").hover(function() {
  event.preventDefault();
  if ($('.wine-description-text2').is(":visible")) {
    $(".wine-description-text2").slideToggle();
  }
  if ($('.wine-description-text1').is(":visible")) {
    $(".wine-description-text1").slideToggle();
  }
  if ($('.wine-description-text4').is(":visible")) {
    $(".wine-description-text4").slideToggle();
  }
  $(".wine-description-text3").slideToggle();
  $("#wine-image").slideToggle();
});

$("#wine-name4").hover(function() {
  event.preventDefault();
  if ($('.wine-description-text2').is(":visible")) {
    $(".wine-description-text2").slideToggle();
  }
  if ($('.wine-description-text3').is(":visible")) {
    $(".wine-description-text3").slideToggle();
  }
  if ($('.wine-description-text1').is(":visible")) {
    $(".wine-description-text1").slideToggle();
  }
  $(".wine-description-text4").slideToggle();
  $("#wine-image").slideToggle();
});