function getCurrentTime() {
  const date = new Date();
  const options = { timeZoneName: 'short' };
  const localTime = date.toLocaleTimeString(undefined, options);

  document.getElementById('clock').innerText = localTime;

  setTimeout(getCurrentTime, 1000); // Update every second
}

getCurrentTime(); // Start the clock
