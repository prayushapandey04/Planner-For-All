var currentDate = $('#currentDay');
var timeBlock = $('#time-block');
var saveBttn = $('#saveBtn');
var currentHour = dayjs().format('HH');


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


function savePlan(event) {
  event.preventDefault();
  var parentElement = $(event.target).parent()[0].id
  var parentElementId = $(event.target).parent()
  var userInput = parentElement.children('textarea').value();
  localStorage.setItem(parentElementId, userInput);
}

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $(function () {
      saveBttn.on('click', function () {
    
        localStorage.getItem(userInput)
      });
  

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
  