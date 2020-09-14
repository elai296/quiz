const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
        scrollTo(0, 0);
        result.querySelector('span').textContent = `${score}%`;
        result.classList.remove('d-none');
    });
    console.log(score);
});

//window object(global object)

//console.log('hello');
//window.console.log('hello'); //same thing as above line, 

//console.log(document.querySelector('form'));
//console.log(window.document.querySelector('.form')); same thing as above line, document is an object in the window object

// alert('hello');
// window.alert('hello'); same thing as above line

// setTimeout(() => {
//     alert('hello, ninjas'); //it will wait 3 seconds then it will run the alert function
// }, 3000);