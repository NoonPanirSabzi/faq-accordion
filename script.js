const questions = [...document.querySelectorAll(".q-container")].map(
  (container) => ({
    container,
    question: container.querySelector(".question"),
    answer: container.querySelector(".answer"),
    icon: container.querySelector(".toggle-icon"),
  })
);

let activeQuestion = 0;

const toggleAnswer = (questionObj, show) => {
  if (show) {
    questionObj.answer.classList.remove("hide");
    questionObj.icon.src = "assets/images/icon-minus.svg";
  } else {
    questionObj.answer.classList.add("hide");
    questionObj.icon.src = "assets/images/icon-plus.svg";
  }
};

questions.forEach((q, index) => {
  q.question.addEventListener("click", () => {
    if (activeQuestion === index) {
      toggleAnswer(q, false);
      activeQuestion = null;
    } else {
      if (activeQuestion !== null) {
        toggleAnswer(questions[activeQuestion], false);
      }
      toggleAnswer(q, true);
      activeQuestion = index;
    }
  });
});
