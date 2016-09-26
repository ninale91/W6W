$(document).ready(start);

var toDoArray= ['Buy thing'];
var completedArray= [];

function start() {
  $('#entry').submit(writeToDo);
  $('body').on('click', '.todo-item', removeToDo)
  $('body').on('click', '.completed-item', addBackToToDo);
  refreshToDoList();
}

function writeToDo(e) {
  e.preventDefault();
  var itemEntry = $('#newEntry').val();
  toDoArray.push(itemEntry)
  clearEntryInput();
  refreshToDoList();
  console.log(toDoArray);
}

function refreshToDoList(){
  $('#addToList').html('');
  $(toDoArray).each(writeNewEntry);
}

function refreshCompletedList() {
  $('#completed-list').html('');
  $(completedArray).each(writeNewCompletedEntry);
}

function writeNewEntry(index, lineItemEntry) {
  var row = "<li class='todo-item' id='TODO-"+index+"'>" + lineItemEntry + "</li>";
  $("#addToList").append(row);
}

function writeNewCompletedEntry(index, lineItemEntry) {
  var row = "<li class='completed-item' id='COMPLETED-"+index+"'>" + lineItemEntry + "</li>";
  $("#completed-list").append(row);
}

function clearEntryInput() {
 $("#newEntry").val("");
}

function removeToDo() {
  var id = $(this).attr('id')
  var positionToRemove = parseInt(id.split('-')[1])
  var completedItem = toDoArray.splice(positionToRemove, 1);
  completedArray.push(completedItem)
  refreshToDoList();
  refreshCompletedList();
}

function addBackToToDo() {
  var id = $(this).attr('id')
  var positionToRemove = parseInt(id.split('-')[1])
  var addedBackItem = completedArray.splice(positionToRemove, 1);
  toDoArray.push(addedBackItem)
  refreshToDoList();
  refreshCompletedList();
}
