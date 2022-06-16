'use strict';
// document.querySelector('.message').textContent='Correct Number!';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let score=20;
let secretNumber = Math.trunc(Math.random()*20)+1;
let highscore=0
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    
    console.log(guess, typeof guess);
    if(!guess){
        document.querySelector('.message').textContent= '⛔️ No number!';
    }else if( guess === secretNumber){
        document.querySelector('.message').textContent= '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width= '30rem';
        highscore=score>highscore?score:highscore;
        document.querySelector('.highscore').textContent=highscore;

    }else if(guess> secretNumber){
        if(score>0){
            document.querySelector('.message').textContent='Too high!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='💥 You lost the game!';
        }
    }else if(guess< secretNumber){
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent=score;
    }

});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=0;

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})