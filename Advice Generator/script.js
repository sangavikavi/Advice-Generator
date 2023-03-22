const adviceBtn = document.querySelector("#advice-btn");
const adviceOutput = document.querySelector("#advice-output");

adviceBtn.addEventListener("click", function() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      adviceOutput.innerHTML = advice;
    })
    .catch(error => console.error(error));
});
