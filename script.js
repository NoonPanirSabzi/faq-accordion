let activeQuestion = null;
let isAnyActive = false;
let i = 0;
let questions = [];

const questionWrappers = document.querySelectorAll(".q-wrapper");
// console.log(questionWrappers);

questionWrappers.forEach((questionWrapper) => {
  // to do : har answer, yek icon + open darad. mitavani icone close ra ham ezafe koni va dar ebteda hide koni
  // sepas vaghti yek answer unhide shod, icon haye oun ham jabeja shavand. reference be icon ha ra haminja
  // baid begiri va algorithm payin ra taghir dahi. ba tashakor!
 
  obj = {
    index: i,
    quesion: questionWrapper.childNodes[1],
    answer: questionWrapper.childNodes[3],
  };
  questions.push(obj);
  i += 1;
});

console.log(questions);


questions.forEach((questionObj) => {
  questionObj.quesion.addEventListener("click", () => {
    if (isAnyActive == false) {
      questionObj.answer.classList.remove("hide");
      activeQuestion = questionObj.index;
      isAnyActive = true;
    } else {
      if (questionObj.index == activeQuestion) {
        questionObj.answer.classList.add("hide");
        isAnyActive = false;
        activeQuestion = null;        
      } else {
        questions[activeQuestion].answer.classList.add("hide");
        questionObj.answer.classList.remove("hide");
        activeQuestion = questionObj.index;
      }
    }
  });
});
