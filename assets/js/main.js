"use strict";

$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    vertical: true
  });

  $(".toggle-btn").on('click', function() {
    $(this).toggleClass("toggleBtnActive");
    $(".header-nav ul").slideToggle();
  });
});