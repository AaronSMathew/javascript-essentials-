document.getElementById("submitAnswer").addEventListener("click", function () {
  const options = document.getElementsByName("answer");
  let selectedAnswer;
  for (const option of options) {
    if (option.checked) {
      selectedAnswer = option.value;
      break;
    }
  }

  const resultElement = document.getElementById("result");
  if (selectedAnswer === "Paris") {
    resultElement.innerText = "Correct! The capital of France is Paris.";
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = "Incorrect. Try again!";
    resultElement.style.color = "red";
  }
});
 