let index = 0;
let display = document.getElementById('questionDisplay');
let score;

let questions = [
    {
        question : "What is the capital of Nigeria?",

        options : ["Lagos", "Ikeja", "Abuja"],

        answer : "Abuja",

        optionChose : ""
    },

    {
        question : "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",

        options : ["100", "144", "132"],

        answer : "132",

        optionChose : ""
    },

    {
        question : "The day after the day after tomorrow is four days before Monday. What day is it today?",

        options : ["Monday", "Friday", "Saturday"],

        answer : "Monday",

        optionChose : ""
    },

    {
        question : "Forest is to tree as tree is to ?",

        options : ["plant", "leaf", "branch"],

        answer : "leaf",

        optionChose : ""
    },

    {
        question : "___________ take place when you break down a function that takes multiple arguments into a series of functions that take part of the arguments?",

        options : ["function Breakdown", "None of the above", "Currying"],

        answer : "Currying",

        optionChose : ""
    },

    {
        question : "which of the following Nigerian Artist has 'Damola' in their names?",

        options : ["Davido", "Ayra Star", "Fireboy"],

        answer : "Fireboy",

        optionChose : ""
    },

    {
        question : "Which of the following product uses fruit as their trademark",

        options : ["Apple", "Samsung", "Tekno"],

        answer : "Apple",

        optionChose : ""
    },

];




function show(){

    // document.querySelector('#display')

    display.innerHTML = '';

    display.innerHTML += `<h2 class ="lead">${index+1}.${questions[index].question}</h2>`;
    questions[index].options.forEach((el)=>{
        display.innerHTML+= `<h2 class="fs-5 text-danger d-flex gap-2 py-2"><input ${questions[index].optionChose==el? 'checked' :''} type="radio" name="answer" onclick="submit('${el}')">${el}</input></h2>`
    })

    let btns=document.querySelectorAll('.controls');

    btns.forEach((el)=>el.addEventListener('click', myClick))

    // beg.style.show = 'none';
};


function start(){
    // document.querySelector('#headerWrapper').innerHTML = '';
    document.querySelector('#startWrappper').innerHTML = '';
    show();

};

// to next and previous the questions
function myClick(event){
    let forNext,forPrevious;
    event.target.innerHTML == 'Next'?forNext = questions[index+1]:'';
    forNext?index++:'';

    event.target.innerHTML == 'Previous'?forPrevious = questions[index-1]:'';
    forPrevious?index--:'';
    show();
}

// to select answer
function answer(p){
    questions[index].optionChose = p;
}

function submit(element){
 score = questions.filter((q) => q.optionChose == q.answer)
}

function showAnswer(){
    display.innerHTML = '';
    display.innerHTML += `Total score : ${score.length}/${questions.length}`
    display.innerHTML += `<h3>percentage: ${score.length / questions.length * 100}%</h3> <br><br>
    <button type="button" class="btn btn-primary" onclick="record()">preview </button><br>`

}




































// const quizForm = document.getElementById('quiz-form');
// const resultDiv = document.getElementById('result');
// const correctAnswers = ['c','b','c']

// quizForm.addEventListener('submit', e=>{
//     e.preventDefault();

//     let score =   0;
//     const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value];
//     userAnswers.forEach((answer,index) =>{
//         if (answer === correctAnswers[index]){
//             score += 1;
//         }
//     });
    
//     // resultDiv.innerHTML = `your score is ${score}/${correctAnswers.length}`;
// })
// function alert(){
//     alert(`your score is ${score}/${correctAnswers.length}`);
// }