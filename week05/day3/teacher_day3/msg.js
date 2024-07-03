// References to buttons and message div
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const messageDiv = document.getElementById('message');

let intervalId;

// Function to show and hide the message
function showMessage() {
  // Show the message
  messageDiv.style.display = 'block';
  
  // Hide the message after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// Start showing the message every 5 seconds
startButton.addEventListener('click', () => {
  // Prevent multiple intervals if start is clicked again
  if (!intervalId) {
    showMessage(); // Show immediately
    intervalId = setInterval(showMessage, 10000);
  }
});

// Stop showing the message
stopButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    messageDiv.style.display = 'none'; // Ensure message is hidden immediately
  }
});