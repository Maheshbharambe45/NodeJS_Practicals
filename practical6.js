//create display.js file
function displayMessage() {
  console.log("Welcome to Node.js");
  setTimeout(displayMessage, 1000);
}

displayMessage();
