var today = moment();
var saveBtn = $('.saveBtn')
var textArea = document.querySelectorAll('textarea').value;
var texty = document.getElementById('texty');

//Header Timestamp
$("#currentDay").text(today.format("dddd, MMMM Do"));

  //Compares Time to Each Row
$(function() {
    function makeHour(dt) {
      return dt.getHours() + (dt.getMinutes() / 60);
    }
    function textToDate(str) {
      var h = parseInt(str.slice(0, str.indexOf(":")));
      var m = parseInt(str.slice(str.indexOf(":") + 1, -2));
      var mer = str.slice(-2);
      if (mer == "PM") {
        h = h + 12;
      }
      var dt = new Date();
      dt.setHours(h, m);
      return dt;
    }
    function compHours(a, b) {
      var r = 0;
      if (a < b) {
        r = -1;
      }
      if (a > b) {
        r = 1;
      }
      return r;
    }
    function checkTime() {
      var then = textToDate($(".hour").text().trim());
      var now = new Date();
      var thenH = makeHour(then);
      var nowH = makeHour(now);
      console.log(then, now);
      var test = compHours(thenH, nowH);
      console.log(thenH, nowH, test);
      if (test == 0) {
        $(".hour").addClass("present");
      } else if (test == -1) {
        $(".hour").addClass("past");
      } else {
        $(".hour").addClass("future");
      }
    }
    checkTime();
  });

//Stores Input to local data on save button click
saveBtn.on("click", function(event) {
    event.preventDefault();
    localStorage.setItem("todo", texty.value);
});
//Retrieves local storage
function renderLastRegistered() {
    var textArea = localStorage.getItem("todo");
    texty.textContent = textArea;
}
renderLastRegistered()