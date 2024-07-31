let randomnumber = math.floor(math.random()*100) + 1;

const guess = document.querysalector('.guwssws');
const lasresult = ducument.queryselector('.lastresult');
const loworhi = doucument.querysalector('.loworhi');

const gusssubmit = document.querySelector('.guesssubmit');
const guesssubmit = doucument.querySelector('.guesssubmit');

let guesscount = 1;
let resetbutton;

function checkgusses() {
const userguss= Number (gussfield.value);

if(guesscount === 1){
    guesses.textcontent = 'previous guesses:';
}

guesses.textcontent = `${gusses.textcontent} ${userguess}`;

    if(userguss === randomnumber){
        lasresult,textcontent = 'congratulaion! ypu got it right';
        lasresult.stylebackgroundcolor = 'green';
        loworhi.textcontent = '';
        setGameOver();
    }
    else if(guesscount === 10){
        lasresult.textcontent = '!!! Game over loster!!!';
        loworhi.textcontent = '';
        setGameOver();
    }
    else{
        lasresult.textcontent = 'wrong!';
        lasresult.stylebackgroundcolor = 'red';
        if (userguss < randomnumber) {
            loworhi.textcontent = 'last guess was to low';
        }
        else if (userguss > randomnumber) {
            loworhi.textcontent = 'last guess was to hight';
        }

    }

    guesscount++;
    gussfield.value = '';
    gussfield.Focus();
}

guesssubmit.addeventlistener('click',checkgusses);

function setGameOver() {
    gussfield.disabled = true;
    guesssubmit.disabled = true;
    resetbutton = document.createElement('button')
    resetbutton.textContent = 'start new Game';
    document.body.sppend(resetbutton)
    resetbutton.addEventListener('click',resetgame)
}

function resetgame(){
    guesscount = 1;
    const resetparas = document.querySelectorAll('.reultparas p ');

    for(const resetpara of resetparas){
        resetpara.textContent ='';
    }

    resetbutton.parentnode.removechild(resetbutton);
    gussfield.disabled = false;
    guesssubmit.disabled = false;
    guessfield.value = '';
    guessfield.Focus();
    lasresult.stylebackgroundcolor = 'white';
    let randomnumber = math.floor(math.random()*100) + 1;
}