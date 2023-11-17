function updateTimeDisplay() {
    const now = new
   
  Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2,
   
  '0');
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = formattedTime;
  }
  
  setInterval(updateTimeDisplay, 1000); // Update the display every second