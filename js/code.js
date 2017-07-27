var questions = [{
        question: "1. What is the extension of JavaScript File ? ",
        option1: ".exe",
        option2: ".js",
        option3: ".css",
        option4: ".html",
    },
    {
        question: "2. Is JavaScript a case-sensitive language?",
        option1: "Yes ",
        option2: "No",
        option3: "May be",
        option4: "Don't Know",
    },
    {
        question: "3. Inside which HTML element do we put the JavaScript?",
        option1: "<scripting>",
        option2: "<js>",
        option3: "<link>",
        option4: "<script>",
    },
    {
        question: "4 .Javascript is _________ language.",
        option1: "Programming",
        option2: "Scripting",
        option3: "Application ",
        option4: "None of these",
    },
    {
        question: "5. Local Browser used for validations on the Web Pages uses __________.",
        option1: "Java",
        option2: "Css",
        option3: "HTML",
        option4: "JavaSCript",
    },
    {
        question: "6. JavaScript Code can be called by using _________.",
        option1: "Function / Method",
        option2: "Triggering Event",
        option3: "RMI",
        option4: "Preprocessor",
    },
    {
        question: "7. All modern browsers supports JS.",
        option1: "Yes",
        option2: "No",
        option3: "No one",
        option4: "May be ",
    },
    {
        question: "8. Where is the correct place to insert a JavaScript?",
        option1: "Both the <head> section and the <body> section are correct",
        option2: "The <body> section",
        option3: "The <head> section",
        option4: "None of these",
    },
    {
        question: "9. What is the correct syntax for referring to an external script called (xxx.js) ?",
        option1: "<script name >",
        option2: "<script href >",
        option3: "<script src >",
        option4: "<script cmd >",
    },
    {
        question: "10. How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        option4: "None of these",
    }
]

var correctAnswers = ["option2", "option1", "option4", "option2", "option4", "option1", "option1", "option1", "option3", "option1"];
var start = document.getElementById("startquiz");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var choice = quiz.getElementsByClassName("answer");
var scoresheet = document.getElementById("scoresheet");
var index = document.getElementById("index");
var answers = document.getElementsByClassName("answer");
var text = document.createElement("h2");
var pscore = document.createElement("h2");
var button = document.getElementById("btn");
var percentage = document.createElement("h2");
var index = 0,
    score = 0,
    total = 0,
    ans = 0;
var min = 2;
var sec = 59;
var interval;

function about() {
    document.getElementById("index").className = "hide";
    document.getElementById("abt").className = "show";
}

function startQuiz() {
    document.getElementById("index").className = "hide";
    document.getElementById("quiz").className = "show";
    document.getElementById("scoresheet").className = "hide";
    index = 0, score = 0, total = 0, ans = 0, min = 2, sec = 59;
    interval = setInterval(time, 1000);
    mainquiz();
}

function mainquiz() {
    document.getElementById("ques").innerHTML = questions[index].question;
    for (j = 0; j < choice.length; j++) {
        choice[j].checked = false;
    }
    next.disabled = "true";
    choice[0].nextSibling.textContent = questions[index].option1;
    choice[1].nextSibling.textContent = questions[index].option2;
    choice[2].nextSibling.textContent = questions[index].option3;
    choice[3].nextSibling.textContent = questions[index].option4;
}

function nextQuestion() {
    for (var i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            if (choice[i].value === correctAnswers[ans]) {
                score++;
            }
        }
    }
    index++;
    ans++;
    if (index === questions.length) {
        mainresult();
    }
    mainquiz();
}

function mainresult() {
    clearInterval(interval);
    quiz.className = "hide"
    total = (score / questions.length) * 100;
    if (total >= 60) {
        text.innerHTML = "Congratulations! You have Passed.";
        pscore.innerHTML = "Correct Answers: " + score + " Out Of " + correctAnswers.length;
        percentage.innerHTML = "Score: " + total + " %";
        scoresheet.appendChild(text);
        scoresheet.appendChild(pscore);
        scoresheet.appendChild(percentage);
        scoresheet.appendChild(button);
    } else {
        text.innerHTML = "Failed! Better Luck Next Time.";
        pscore.innerHTML = "Correct Answers: " + score + " Out Of " + correctAnswers.length;
        percentage.innerHTML = "Score: " + total + " %";
        scoresheet.appendChild(text);
        scoresheet.appendChild(pscore);
        scoresheet.appendChild(percentage);
        scoresheet.appendChild(button);
    }
    scoresheet.className = "show";
}

function enable() {
    next.disabled = false;
}

function time() {
    timer.innerHTML = min + ":" + sec;
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
        if (min < 0) {
            alert("Time's up.");
            mainresult();
        }
    }
}