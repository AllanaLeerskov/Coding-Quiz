var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".container");
var hElement = document.querySelector("#title");
var finishDiv = document.querySelector(".finish-quiz");
var initialInput = document.querySelector("#enterInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var finaPageEl = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#initials");
var firstPageEl = document.querySelector(".first-page");



// questions
var questions = [
    
    {
        title: "What is an if/else statement enclosed in?",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "What are variables used for in Javascript?",
        choices: ["Varying randomly", "Storing numbers, dates, or other values", "To confuse you", "None of the above"],
        answer: "Storing numbers, dates, or other values",
    },
    {
        title: "What is the correct JavaScript syntax to write "Hello World" ?",
        choices: ["System.out.println("Hello World")", "println ("Hello World")", "document.write("Hello World")", "response.write("Hello World")"],

        answer: "document.write("Hello World")",
    },
    {   
        title: "Using _______ statement is how you test for a specific condition.",
        choices: ["Select", "If", "Switch", "For"],
        answer: "If",
    }
]


 