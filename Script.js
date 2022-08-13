
$(document).ready(function () {
    $("#enter").click(function () {
        $(".inner-div").show();
        $(".rule").hide();
    });
});




const quizQue = [
    {
        question: "Q1: The name Varanasi has its origin possibly from the names of which to rivers?",
        a: "Varuna and Assi",
        b: "Yamuna and Saraswati",
        c: " Varuna and Yamuna",
        d: " Saraswati and Brahmaputra",
        ans: "ans1"
    },
    {
        question: "Q2: Who founded the famous Banaras Hindu University?",
        a: "Dr. Ganganath Jha",
        b: "Pandit Jawaharlal Nehru",
        c: "Pandit Madan Mohan Malviya",
        d: "J. R. Ballentein",
        ans: "ans3"
    },
    {
        question: "Q3: Which is the internationally famous museum situated in Varanasi?",
        a: "Ramgarh Fort",
        b: "Jantar Mantar",
        c: "Bharat Kala Bhavan",
        d: "None of the Above",
        ans: "ans3"
    },
    {
        question: "Q4: Which is the famous temple in Varanasi dedicated to Lord Shiva?",
        a: "Kashi Vishwanath Temple",
        b: "Mrityunjay Mahadev Temple",
        c: "Kaal Bhairav Temple",
        d: ". Neelkanth Mahadev Temple",
        ans: "ans1"
    },
    {
        question: "Q5: What was the old name of Varanasi (Benaras)?",
        a: "Kashi",
        b: "Patliputra",
        c: "Magadh",
        d: "Tanjore",
        ans: "ans1"
    },
    {
        question: "Q6: Varanasi is situated on a holy river. What river is it?",
        a: "Indus",
        b: "Godavari",
        c: "Yamuna",
        d: "Ganges",
        ans: "ans4"
    },
    {
        question: "Q7: Varanasi is considered a holy place for Hindus, but it also has significant importance to Buddhism due to a place just 10 kilometres away. What place is this?",
        a: "Gyanpur",
        b: "Mirzapur",
        c: "Sarnath",
        d: "Mariahu",
        ans: "ans3"
    },
    {
        question: "Q8: Ganga Mahotsav Festival held in honour of",
        a: "Goddess Ganga",
        b: "Goddess yamuna",
        c: "Goddess Sita",
        d: "Goddess Durga",
        ans: "ans1"
    },
    {
        question: "Q9: Which famous Shehnai player has been associated with Varanasi?",
        a: "Bhaskar Nath",
        b: "Bismillah Khan",
        c: "Ravi Shankar",
        d: "Lalmani Misra",
        ans: "ans2"
    },
    {
        question: "Q10: Varanasi is considered to be the holiest of the Sapti Puri, or sacred cities. How many sacred Indian cities are there in the Hindu religion?",
        a: "One",
        b: "Seven",
        c: "Twelve",
        d: "Five",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let queCont = 0;
let score = 0;
let wrongScore = 0;


//For Load Question
const laodQue = () => {
    const queList = quizQue[queCont];

    question.innerHTML = queList.question;
    option1.innerHTML = queList.a;
    option2.innerHTML = queList.b;
    option3.innerHTML = queList.c;
    option4.innerHTML = queList.d;
}
laodQue();

//To Check Answer ID
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    });
    return answer;
};

//to Deselect ,Autoselected answer
const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

//Answer Comparision
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer === quizQue[queCont].ans) {
        score++;
    }
    else {
        wrongScore++;
    }
    queCont++;

    deselectAll();


    //For Score
    if (queCont < quizQue.length) {
        laodQue();
    }
    else {
        showScore.innerHTML = `
        <h3> You Scored ${score * 10 - wrongScore * 2.5}/${quizQue.length * 10} </h3>
        <h4> You have marked "${score}"questions correctly </h4>
        <h4> You have marked "${wrongScore}" questions incorrectly </h4>
        <button class = "btn" onclick = "location.reload()">Retry</button>
        `;
        $(".scoreArea").show();
        $("#submit").hide();
        $(".inner-div").hide();
    }
});