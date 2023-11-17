
const dateTimeDisplay = document.getElementById('dateTimeDisplay');

function updateDateTimeDisplay() {
  const now = new
 
Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  const formattedDateTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

  dateTimeDisplay.textContent = formattedDateTime;
}

setInterval(updateDateTimeDisplay, 1); // Update the display every millisecond