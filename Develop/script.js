var today = moment();
var saveBtn = $('.saveBtn')
var textArea = document.querySelectorAll('textarea').value;
var texty9 = document.getElementById('texty9');
var texty10 = document.getElementById('texty10');
var texty11 = document.getElementById('texty11');
var texty12 = document.getElementById('texty12');
var texty13 = document.getElementById('texty13');
var texty14 = document.getElementById('texty14');
var texty15 = document.getElementById('texty15');

//Header Timestamp
$("#currentDay").text(today.format("dddd, MMMM Do"));

  //Compares Time to Each Row
  function timeFunction() {
    var hour = moment().format('k');
    console.log(hour);
    $("tr").each(function() {
        //Converts ID to interger for comparison
      var timeBlockID = parseInt($(this).attr("id"));
      if (timeBlockID < hour) {
        // Updates class to past if the ID is less than the current value
        $(this).addClass("past");
        // Updates class to present if id is equal to time value
      } else if (timeBlockID == hour) {
        $(this).removeClass("past").addClass("present");
        // Updates class to future otherwise
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
//saves all input on button click
  $(".saveBtn").on("click", function() {
    localStorage.setItem("todo9", texty9.value);localStorage.setItem("todo10", texty10.value);
    localStorage.setItem("todo11", texty11.value);localStorage.setItem("todo12", texty12.value);
    localStorage.setItem("todo13", texty13.value);localStorage.setItem("todo14", texty14.value);
    localStorage.setItem("todo15", texty15.value);
});
// Loads in stored data from localstorage
function renderLastRegistered() {
    var textArea9 = localStorage.getItem("todo9");
    var textArea10 = localStorage.getItem("todo10");
    var textArea11 = localStorage.getItem("todo11");
    var textArea12 = localStorage.getItem("todo12");
    var textArea13 = localStorage.getItem("todo13");
    var textArea14 = localStorage.getItem("todo14");
    var textArea15 = localStorage.getItem("todo15");
    texty9.textContent = textArea9;
    texty10.textContent = textArea10;
    texty11.textContent = textArea11;
    texty12.textContent = textArea12;
    texty13.textContent = textArea13;
    texty14.textContent = textArea14;
    texty15.textContent = textArea15;
}

// Starts on page load
timeFunction();
renderLastRegistered();