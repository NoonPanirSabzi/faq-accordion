let activeQuestion = null;
let isAnyActive = false;
let i = 0;
let questions = [];

const questionWrappers = document.querySelectorAll(".q-wrapper");

questionWrappers.forEach((questionWrapper) => {
  obj = {
    index: i,
    quesion: questionWrapper.childNodes[1],
    answer: questionWrapper.childNodes[3],
    icon: questionWrapper.childNodes[1].childNodes[3],
  };
  questions.push(obj);
  i += 1;
});

questions.forEach((questionObj) => {
  questionObj.quesion.addEventListener("click", () => {
    if (isAnyActive == false) {
      questionObj.answer.classList.remove("hide");
      activeQuestion = questionObj.index;
      isAnyActive = true;
      // toggle icon
      questionObj.icon.src = "assets/images/icon-minus.svg";
    } else {
      if (questionObj.index == activeQuestion) {
        questionObj.answer.classList.add("hide");
        isAnyActive = false;
        activeQuestion = null;
        // toggle icon
        questionObj.icon.src = "assets/images/icon-plus.svg";
      } else {
        questions[activeQuestion].answer.classList.add("hide");
        // toggle icon for already open question
        questions[activeQuestion].icon.src = "assets/images/icon-plus.svg";
        // toggle icon for the question we want to open now
        questionObj.icon.src = "assets/images/icon-minus.svg";
        questionObj.answer.classList.remove("hide");
        activeQuestion = questionObj.index;
      }
    }
  });
});
