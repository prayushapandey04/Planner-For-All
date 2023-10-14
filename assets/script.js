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

function blockColor () {
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
  

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
      $('#time-block').each(function () {
        timeBlock = $(this).attr("id")
        if (currentHour === timeBlock) {
          $(this).removeClass("past")
          $(this).removeClass("future")
          $(this).addClass("present")
        } else {
          if (currentHour < timeBlock) {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
          } else {
            if (currentHour > timeBlock)
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
          }
        }
      })
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  