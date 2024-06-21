document.getElementById("startButton").addEventListener("click", function () {
  const secondsInput = document.getElementById("secondsInput");
  let seconds = parseInt(secondsInput.value);
  const countdownElement = document.getElementById("countdown");
  const interval = setInterval(function () {
    if (seconds > 0) {
      countdownElement.innerText = "Time remaining: " + seconds + " seconds";
      seconds--;
    } else {
      countdownElement.innerText = "Time's up!";
      clearInterval(interval);
    }
  }, 1000);
});
