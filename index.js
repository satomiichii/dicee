let randomNumber1 = Math.ceil(Math.random() * 6);
let imgName1 = 'images/dice' + randomNumber1 + '.png'
document.querySelector('.img1').setAttribute('src', imgName1);

let randomNumber2 = Math.ceil(Math.random() * 6);
let imgName2 = 'images/dice' + randomNumber2 + '.png'
document.querySelector('.img2').setAttribute('src', imgName2);

let resultMessage = '';
if (randomNumber1 > randomNumber2) {
    resultMessage = '🚩 Player 1 Wins!'
} else if (randomNumber1 === randomNumber2) {
    resultMessage = 'Draw!'
} else {
    resultMessage = 'Player 2 Wins! 🚩'
}   

document.querySelector('h1').innerHTML = resultMessage;

