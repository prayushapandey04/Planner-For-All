// Starting by grabbing elements with variable

var currentDate = $('#currentDay');
var timeBlock = $('.time-block');
var saveBttn = $('.saveBtn');
var currentHour = dayjs().format('H');


// Saving what the user inputs into local storage

function savePlan(event) {
  var parentElement = event.target.closest('.time-block');
  var idTimeBlock = parent.Element.$('id');
  var userInput = parentElement.querySelector('textarea').value;
  localStorage.setItem(idTimeBlock, userInput);
}

// Color of block based on past, present, future

function blockColor() {
  for (var i = 0; i < timeBlock.length; i++) {
    var idTimeBlock = $(timeBlock[i]).data('hour');
    if (currentHour < idTimeBlock) {
      $(this).removeClass('past present').addClass('future');
    } else if (currentHour == idTimeBlock) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('present future').addClass('past');
    }
  }
}
  
// Get the saved events from local storage

function getEvents() {
  for (var i = 0; i < timeBlock.length; i++) {
    var idTimeBlock = $(timeBlock[i]).id;
    var userInput = localStorage.getItem(idTimeBlock);
    if (userInput !== null) {
      timeBlock[i].querySelector('textarea').value = userInput;
    }
  }
}