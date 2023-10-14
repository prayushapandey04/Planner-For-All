// Event was not occuring when page was loading so had to add .ready 

$(document).ready(function () {

// Starting by grabbing elements with variable

  var timeBlock = $('.time-block');
  var saveBttn = $('.saveBtn');
  var currentHour = dayjs().format('H');


// Saving what the user inputs into local storage

  function savePlan(event) {
    var parentElement = event.target.closest('.time-block');
    var idTimeBlock = parent.Element.id
    var userInput = parentElement.querySelector('textarea').value;
    localStorage.setItem(idTimeBlock, userInput);
    // To show that event is added to local storage
    showMessage('Event added to local storage');
  }

  function showMessage(message) {
    var message = document.createElement('div');
    message.textContent = message;
    var messageContainer = document.getElementById('message-container');
    messageContainer.appendChild(message);
    
    setTimeout(function () {
      message.remove();
    }, 3000);
  }
// Color of block based on past, present, future

  function blockColor() {
    for (var i = 0; i < timeBlock.length; i++) {
      var idTimeBlock = $(timeBlock[i]).data('hour');
      if (currentHour < idTimeBlock) {
        $(timeBlock[i]).removeClass('past present').addClass('future');
      } else if (currentHour == idTimeBlock) {
        $(timeBlock[i]).removeClass('past future').addClass('present');
      } else {
        $(timeBlock[i]).removeClass('present future').addClass('past');
      }
    }
  }
  
// Get the saved events from local storage

  function getEvents() {
    for (var i = 0; i < timeBlock.length; i++) {
      var idTimeBlock = $(timeBlock[i]).attr('id');
      var userInput = localStorage.getItem(idTimeBlock);
      if (userInput !== null) {
        timeBlock[i].querySelector('textarea').value = userInput;
      }
    }
  }

// Setting current date with dayjs

  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  document.getElementById('currentDay').textContent = currentDate;

// Calling the functions

  blockColor();
  getEvents();

// Adding Event Listener for each time user presses each save button

  for (var i = 0; i < saveBttn.length; i++) {
    saveBttn[i].addEventListener('click', savePlan);
  }
});

