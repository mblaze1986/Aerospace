$(document).ready(function () {

  $('#burger').click(function (event) {
    $('#burger,#nav').toggleClass('active');
    $('#header').toggleClass('active');
    $('body').toggleClass('lock');
  });

});