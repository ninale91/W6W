$('document').ready(start);

function start() {
  $('#button-1').click(changeBackgroundBlue);
  $('#button-2').click(changeBackgroundRed);
}

function changeBackgroundBlue() {
  $('body').css('backgroundColor', 'blue');
}

function changeBackgroundRed() {
  $('body').css('backgroundColor', 'red');
}
