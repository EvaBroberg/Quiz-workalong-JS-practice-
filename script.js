const correctAnswers = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    
    //check answers
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    
    //show result on the screen
    //takes x and y coordinates
    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        }else {
            output++;
        }
    }, 10);
});


//window object (global object)

//console.log('hello');

//calls function after set amount of time, second argument is the time
// setTimeout(() => {
//    alert('Helloo');
// }, 3000);


//counts non stop every 1s until you stop it
// let i = 0;
// const timer = setInterval(()=> {
//     console.log('hei');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);


