$(document).ready(start);

function start() {
  $('.grid-item').hover(addActiveClass, removeActiveClass);
}

function addActiveClass() {
  $(this).addClass('active');
}

function removeActiveClass() {
  $(this).removeClass('active');
}
