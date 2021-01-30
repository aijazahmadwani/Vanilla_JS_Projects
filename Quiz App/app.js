const quizData = [
  {
    question: "What is your name",
    a: "Aijaz",
    b: "Sam",
    c: "Haider",
    d: "Asif",
    correct: "a",
  },
  {
    question: "Best programming language ?",
    a: "Python",
    b: "Java",
    c: "C++",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "Present Year ",
    a: "2019",
    b: "2020",
    c: "2021",
    d: "2022",
    correct: "c",
  },
  {
    question: "HTML stands for ",
    a: "Hypertext Markup Langauge",
    b: "Cascating Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "a",
  },
];
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at  ${score}/${quizData.length} questions.</h2> 
        <button onClick="location.reload()">Reload</button>`;
    }
  }
});
