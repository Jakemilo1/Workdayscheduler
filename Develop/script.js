$(function() {
  // Adding a click event listener on save button.
  $('.save-btn').on('click', function() {
    var text = $(this).siblings('textarea').val(); // get the value from the sibling textarea
    var time = $(this).parent().attr('id'); // get the id from the parent div (time-block)
    localStorage.setItem(time, text); // save the value in localStorage
  });

  // Adding time block coloring based on the current time.
  var currentHour = dayjs().hour(); // get current hour using Day.js
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]); // get the hour from the id

    // remove any old classes
    $(this).removeClass('past present future');

    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Retrieve user input from localStorage and set it to corresponding textarea
  $('.time-block').each(function() {
    var time = $(this).attr('id');
    var text = localStorage.getItem(time);
    $(this).children('textarea').val(text);
  });

  // Display the current date in the header
  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));
});

