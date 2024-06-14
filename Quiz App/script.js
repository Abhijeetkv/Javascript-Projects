const questions = [
    {
        question: "what is the output of the following code?   console.log(typeof null); ",
        answers: [
            {text: "null" ,
             correct: false},

            {text: "object" ,
             correct: true},

            {text: "undefined",
             correct: false},

            {text: "string",
             correct: false},
        ]
    },

    {
        question: "Which method converts a JSON string into a javascript object?",
        answers: [
            {text: "JSON.parse() ",
             correct: true},

            {text: "JSON.stringify()"
             , correct: false},

            {text:" JSON.object()",
             correct: false},

            {text: "JSON.convert()",
             correct: false},
        ]
    },

    {
        question: "Which of the following is Popup box in JavaScript? ",
        answers: [
            {text: "Alert ",
             correct: false},

            {text: "Confirm"
             , correct: false},

            {text:" Prompt",
             correct: false},

            {text: "All of the above",
             correct: true},
        ]
    },

    {
        question: "How to check the number of elements inside the HTML form?",
        answers: [
            {text: "document.form.elements.count ",
             correct: false},

            {text: "document.form.elements.length"
             , correct: true},

            {text:" document.form.count",
             correct: false},

            {text: "document.form.length",
             correct: false},
        ]
    },

    {
        question: "Which of the following is not a loop in Javascript?",
        answers: [
            {text: "for ",
             correct: false},

            {text: "while"
             , correct: false},

            {text:" foreach",
             correct: false},

            {text: "forwhile",
             correct: true},
        ]
    },

    {
        question: "How can you detect the client's browser name?",
        answers: [
            {text: "navigator.appName ",
             correct: true},

            {text: "browser.name"
             , correct: false},

            {text:" client.navName",
             correct: false},

            {text: "window.browser",
             correct: false},
        ]
    },

    {
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        answers: [
            {text: "getElementById() ",
             correct: false},

            {text: "getElementsByClassName()"
             , correct: false},

            {text:" querySelector()",
             correct: false},

            {text: "All of the above",
             correct: true},
        ]
    },

    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answers: [
            {text: " == ",
             correct: false},

            {text: " === "
             , correct: true},

            {text:" !== ",
             correct: false},

            {text: "!= ",
             correct: false},
        ]
    },

    {
        question: "How do you add an element at the beginning of an array in JavaScript??",
        answers: [
            {text: "push() ",
             correct: false},

            {text: "pop()"
             , correct: false},

            {text:" unshift()",
             correct: true},

            {text: "shift()",
             correct: false},
        ]
    },

    {
        question: "How can you convert a string to a number in JavaScript?",
        answers: [
            {text: "Number() ",
             correct: false},

            {text: "parseInt()"
             , correct: false},

            {text:" parseFloat()",
             correct: false},

            {text: "All of the above",
             correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const ansButtons = document.getElementById("ansButton");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =    `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();