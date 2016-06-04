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

      $("#beer-images1").click(function() {
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
      });

      $("#beer-images2").click(function() {
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
      });

      $("#beer-images3").click(function() {
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
      });

      $("#beer-images4").click(function() {
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
      });

      $("#wine-images1").click(function() {
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
      });

      $("#wine-images2").click(function() {
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
      });

      $("#wine-images3").click(function() {
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
      });

      $("#wine-images4").click(function() {
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
      });