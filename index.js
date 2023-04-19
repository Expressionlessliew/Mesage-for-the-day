const dayContainer = document.getElementById("day");
const messageContainer = document.getElementById("message");

// --------------------------------------------

let message;
let day;



function messages() {
  switch (new Date( ).getDay()) {
    case 0:
      day = "Sunday";
      message =
        "Do not waste a single Sunday. If you don’t waste Sundays, you will be less likely to waste Mondays, Tuesdays, and Wednesdays.";
      break;
    case 6:
      day = "Saturday";
      message = "Good days are coming. I meant Saturday and Sunday.";
      break;
    case 1:
      day = "Monday";
      message =
        "So. Monday. We meet again. We will never be friends — but maybe we can move past our mutual enmity toward a more-positive partnership.";
      break;
    case 2:
      day = "Tuesday";
      message = "The key to a happy Tuesday is forgetting about the broken images of Monday and focusing on a new beginning.";
      break;
    case 3:
      day = "Wednesday";
      message = "Wednesday lets me move forward to the second half of the week. Happy Wednesday!";
      break;
    case 4:
      day = "Thursday";
      message = "On Thursday, I can smell the weekend";
      break;
    case 5:
      day = "Friday";
      message = "Hands up if you’re ready to do something you’ll regret this weekend. Go forth! You have my blessing.";
      break;
  }
  messageContainer.innerHTML = message;
  dayContainer.innerHTML = day;
}

setInterval(messages, 1000);
