$(document).ready(start);

function start() {
  $('#entry').submit(writeToDo);
  $('body').on('click', 'li', removeToDo)
}
var toDoArray= [];
var completedArray= [];

function writeToDo(e) {
  e.preventDefault();
  var itemEntry = $('#newEntry').val();
  writeNewEntry(itemEntry);
  clearEntryInput();
  console.log(toDoArray);
}

function writeNewEntry(lineItemEntry) {
  var row = "<li>" + lineItemEntry + "</li>";
  $("#addToList").append(row);
  toDoArray.push(lineItemEntry);
  toDoArray.length;
}

function clearEntryInput() {
 $("#newEntry").val("");
}

function removeToDo() {
  $(this).css("text-decoration" , "line-through");
}
