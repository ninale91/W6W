$(document).ready(start);

var toDoArray = [];
var completedArray = [];

function start() {
 $("#entry").submit(writeToDo);
 $("body").on("click", ".todo-item", removeToDo);
 $("body").on("click", ".completed-item", addBackToToDo);
 $("#entry").on("reset",clearAllLists);
}

function writeToDo(event) {
 event.preventDefault();
 var itemEntry = $("#newEntry").val();
 if (itemEntry != "") {
   toDoArray.push(itemEntry);
   clearEntryInput();
   refreshToDoList();
 }
}

function refreshToDoList(){
 $("#toDoList").html("");
 $(toDoArray).each(writeNewEntry);
 $("#toDoTotal").text(toDoArray.length);
 checkToDoCompleted();
}

function refreshCompletedList() {
 $("#completedList").html("");
 $(completedArray).each(writeNewCompletedEntry);
 $("#completedTotal").text(completedArray.length);
}

function writeNewEntry(index, lineItemEntry) {
 var row = "<li class='todo-item' id='todo-" + index + "'> <input type='checkbox'>" + lineItemEntry + "</input></li>";
 $("#toDoList").append(row);
 scrollToBottom($("#toDoList").parent());
}

function scrollToBottom(element) {
 element.scrollTop(element[0].scrollHeight);
}

function writeNewCompletedEntry(index, lineItemEntry) {
 var row = "<li class='completed-item' id='done-" + index + "'> <input type='checkbox' checked>" + lineItemEntry + "</input></li>";
 $("#completedList").append(row);
 scrollToBottom($("#completedList").parent());
}

function clearEntryInput() {
 $("#newEntry").val("");
}

function removeToDo() {
 var id = $(this).attr("id");
 var positionToRemove = parseInt(id.split("-")[1]);
 var completedItem = toDoArray.splice(positionToRemove, 1);
 completedArray.push(completedItem);
 $(this).css("text-decoration","line-through").fadeOut("slow",refreshToDoList);
 refreshCompletedList();
}

function addBackToToDo() {
 var id = $(this).attr("id");
 var positionToRemove = parseInt(id.split("-")[1]);
 var addedBackItem = completedArray.splice(positionToRemove, 1);
 toDoArray.push(addedBackItem);
 $(this).css("text-decoration","line-through").fadeOut("slow",refreshCompletedList);
 refreshToDoList();
}

function checkToDoCompleted () {
  if(toDoArray.length == 0 && completedArray.length != 0) {
    $('#main').fireworks();
  }
}

function clearAllLists(event) {
 event.preventDefault();
 toDoArray = [];
 completedArray = [];
 $('#main').fireworks('destroy');
 clearEntryInput();
 refreshToDoList();
 refreshCompletedList();
}
