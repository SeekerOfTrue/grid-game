
window.onload = function() {

const overlay = document.querySelector('.overlay');
const startBtn = document.querySelector('.title button');

startBtn.onclick = function() {
    box1.style.opacity = "1";
    box1.style.visibility = "visible";
};


// Box1 USA Independence
const box1 = document.querySelector('.box1');
const box1Btn = document.querySelector('.box1 button');
const box1Input = document.querySelector('.box1 input');

box1Btn.addEventListener('click', enterDate);

function enterDate(e) {
    e.preventDefault();
    if(box1Input.value == '1776-07-04') {
        box1.appendChild(overlay);
        box2.style.opacity = "1";
        box2.style.visibility = "visible";
    }
    else {
        alert('Wrong! Try again)');
    }  
};


// Box2 European counties
let france = document.getElementById('fr');
let ispain = document.getElementById('isp');
let austria = document.getElementById('au');
let guyana = document.getElementById('guy');
let irak = document.getElementById('ir');
let canada = document.getElementById('can');

const box2 = document.querySelector('.box2');
box2.addEventListener('change', getResult);

function getResult(){
    if(france.checked && ispain.checked && austria.checked && guyana.checked == false && irak.checked == false && canada.checked == false) {
        let overlay2 = overlay.cloneNode(true);
        box2.appendChild(overlay2);
        box3.style.opacity = "1";
        box3.style.visibility = "visible";
    }        
};

// Box3 Range inputs
const box3 = document.querySelector('.box3');
const rangeInputs = document.querySelectorAll('.box3 input[type=range]');
rangeInputs.forEach(input => input.addEventListener('input', selectRange));

function selectRange(){
    rangeValue = this.nextElementSibling;
    rangeValue.innerHTML = this.value;
    rangeInputsArray = [...rangeInputs];
    if (rangeInputsArray[0].value == "45" && rangeInputsArray[1].value == "12" && rangeInputsArray[2].value == "97"){
        rangeInputsArray.forEach(input => {
            input.setAttribute('disabled', 'disabled');
        })
            let overlay3 = overlay.cloneNode(true);
            box3.appendChild(overlay3);
            box4.style.opacity = "1";
            box4.style.visibility = "visible";
    }
};
   

// Box4 Rainbow
const box4 = document.querySelector('.box4');
const rainbow = [];
const secretCode = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple"];

const box4Btns= document.querySelectorAll('.box4 button');
box4Btns.forEach(box4Btn => box4Btn.addEventListener('click', collectColor));
box4Btns.forEach(box4Btn => box4Btn.addEventListener('transitionend', removeTransition));

function collectColor(){
    let color = this.dataset.color;
    rainbow.push(color);
    rainbow.splice(-secretCode.length - 1, rainbow.length - secretCode.length);
    this.classList.add('press');
    if(rainbow.join('').includes(secretCode.join(''))){
        let overlay4 = overlay.cloneNode(true);
        box4.appendChild(overlay4);
        box5.style.opacity = "1";
        box5.style.visibility = "visible";
    }
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('press');
};


// Box5 Clock
const box5 = document.querySelector('.box5');
const box5Sun = document.querySelector('.box5 .sun');
const box5Tooltip = document.querySelector('.box5 .tooltiptext');

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

const hourBtn = document.getElementById('hourBtn');
const minBtn = document.getElementById('minBtn');
const tryBtn = document.getElementById('tryBtn');

box5Sun.addEventListener('click', showTooltip);
hourBtn.addEventListener('click', hourRotate);
minBtn.addEventListener('click', minRotate);
tryBtn.addEventListener('click', tryTime);

let hourDegrees = 100;
let minDegrees = 100;

function hourRotate(){
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if(hourDegrees == 450) {
        hourDegrees = 90;
    };
    hourDegrees += 10;
};

function minRotate(){
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    if(minDegrees == 450) {
        minDegrees = 90;
    }
    minDegrees += 10;
};

function tryTime(){
    if(hourHand.style.transform == 'rotate(180deg)' && minHand.style.transform == 'rotate(270deg)'){
        let overlay5 = overlay.cloneNode(true);
        box5.appendChild(overlay5);
        box6.style.opacity = "1";
        box6.style.visibility = "visible";
    }
};

function showTooltip(){
    box5Tooltip.style.setProperty('visibility', 'visible');
    box5Tooltip.style.setProperty('opacity', '1');
    setTimeout(() => {
        box5Tooltip.style.setProperty('visibility', 'hidden');
        box5Tooltip.style.setProperty('opacity', '0');
    }, 3000);
}


// Box6 Move BOX
const box6 = document.querySelector('.box6');
let boxToMove = document.getElementById('boxToMove');
let leftMove = 0;
let topMove = 0;

document.addEventListener('keydown', moveBox);

function moveBox(e){

    if(leftMove < 240 && e.key == 'd' || e.key == 'D'){
        leftMove += 10;
        boxToMove.style.left = leftMove + 'px';
    }

    if(leftMove > 0 && e.key == 'a' || e.key == 'A'){
        leftMove -= 10;
        boxToMove.style.left = leftMove +'px';
    }

    if(topMove < 240 && e.key == 's' || e.key == 'S'){
        topMove += 10;
        boxToMove.style.top = topMove +'px';
    }
    if(topMove > 0 && e.key == 'w' || e.key == 'W'){
        topMove -= 10;
        boxToMove.style.top = topMove +'px'; 
    }

    if(boxToMove.style.top =='230px'&& boxToMove.style.left =='120px'){
        
        let overlay6 = overlay.cloneNode(true);
        box6.appendChild(overlay6);
        document.removeEventListener('keydown', moveBox);
        box7.style.opacity = "1";
        box7.style.visibility = "visible";
    }
};


// Box7 collect summ

const box7 = document.querySelector('.box7');
const box7Btn = document.querySelector('.box7 button');
const box7Span = document.querySelector('.box7 span');

let output = 0;
box7Span.innerHTML = output;
box7Btn.addEventListener('click', function(){
    output = 0;
    box7Span.innerHTML = output;
});

const blocks = document.querySelectorAll('.box7 .block');
blocks.forEach(block => block.addEventListener('mouseenter', collectNumber));

function collectNumber(){
   output += parseInt(this.dataset.value);
   box7Span.innerHTML = output;
   if(output == '457'){
    let overlay7 = overlay.cloneNode(true);
    box7.appendChild(overlay7);
    box8.style.opacity = "1";
    box8.style.visibility = "visible";
    }
};

// Box8 Rolle Dices
const box8 = document.querySelector('.box8');
const box8Btn = document.querySelector('.box8 button');

box8Btn.addEventListener('click', rollDice);

function rollDice(){
    const dice1 = document.querySelector('.box8 .dice1');
    const dice2 = document.querySelector('.box8 .dice2');
    const status = document.querySelector('.box8 .status');
    
    let dice1Number = Math.floor(Math.random() * 6) + 1;
    let dice2Number = Math.floor(Math.random() * 6) + 1;
    let diceTotal = dice1Number + dice2Number;
    dice1.innerHTML = dice1Number;
    dice2.innerHTML = dice2Number;
    status.innerHTML = `You rolled ${diceTotal}.`;

    dice1.classList.add("dice");
    dice2.classList.add("dice");

    if(dice1Number == dice2Number) {
        status.innerHTML = `DOUBLES! ${diceTotal}.`;
    };
    
    //white icon insted number

    if(dice1Number == 1) {dice1.innerHTML = '<i class="fas fa-dice-one"></i>';};
    if(dice2Number == 1) {dice2.innerHTML = '<i class="fas fa-dice-one"></i>';};

    if(dice1Number == 2) {dice1.innerHTML = '<i class="fas fa-dice-two"></i>';};
    if(dice2Number == 2) {dice2.innerHTML = '<i class="fas fa-dice-two"></i>';};

    if(dice1Number == 3) {dice1.innerHTML = '<i class="fas fa-dice-three"></i>';};
    if(dice2Number == 3) {dice2.innerHTML = '<i class="fas fa-dice-three"></i>';};

    if(dice1Number == 4) {dice1.innerHTML = '<i class="fas fa-dice-four"></i>';};
    if(dice2Number == 4) {dice2.innerHTML = '<i class="fas fa-dice-four"></i>';};

    if(dice1Number == 5) {dice1.innerHTML = '<i class="fas fa-dice-five"></i>';};
    if(dice2Number == 5) {dice2.innerHTML = '<i class="fas fa-dice-five"></i>';};

    if(dice1Number == 6) {dice1.innerHTML = '<i class="fas fa-dice-six"></i>';};
    if(dice2Number == 6) {dice2.innerHTML = '<i class="fas fa-dice-six"></i>';};


    if(diceTotal > 10) {
        status.innerHTML = `Nice one! ${diceTotal}.`;
        box8Btn.disabled = true;
        let overlay8 = overlay.cloneNode(true);
        box8.appendChild(overlay8);
        box9.style.opacity = "1";
        box9.style.visibility = "visible";
    };
};


// Box9 Secret code

const box9 = document.querySelector('.box9');
const box9Btn = document.querySelector('.box9 button');
const box9Input = document.querySelector('.box9 input');
const box9Spans = document.querySelectorAll('.box9 .codeBlock span');

box9Btn.addEventListener('click', trySecretCode);
document.addEventListener('keyup', pressRightKey);

box9Spans.forEach(span => span.addEventListener('transitionend', removeTransition));

function pressRightKey(e){
    const codeKey = document.querySelector(`.box9 .codeBlock span[data-key="${e.keyCode}"]`);
    if (!codeKey) return;
    codeKey.classList.add('press');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('press');
  }

function trySecretCode(e) {
   e.preventDefault();
   let userCode =  box9Input.value.toUpperCase();
   let secretCode = "SCRIPT";
   if(userCode == secretCode) {
   
    let overlay9 = overlay.cloneNode(true);
    box9.appendChild(overlay9);
    
    const overlaysImg = document.querySelectorAll('.overlay img');
    overlaysImg.forEach(img => {
        img.style.animation = "animateImg 2s infinite 2s";
        
    });
    
    setTimeout(() => {
        winOverlay.style.visibility = "visible";
        winOverlay.style.opacity = "1";
    }, 5000);
    
   }
   else {
    alert('Wrong! Try again)');
   }
}

// Win BOX
const boxs = document.querySelectorAll('.box');
const winOverlay = document.querySelector('.winOverlay');
const winBtn = document.querySelector('.winOverlay button');

winBtn.onclick = function() {
    winOverlay.style.visibility = "hidden";
    winOverlay.style.opacity = "0";
};

window.onclick = function(event) {
    if (event.target == winOverlay) {
        winOverlay.style.opacity = "0";
        winOverlay.style.visibility = "hidden";
    }
}

}
