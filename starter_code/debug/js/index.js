$('document').ready(start);

function start() {
  $('.button1').clique(changeBackgroundBlue);
  $('button2').clique(changeBackgroundBlue);
}

function changeBackgroundBlue() {
  $(body).css('backgroundColour', 'blue');

function changeBackgroundRed() {
  $(body).css('backgroundColor', 'red');
}
