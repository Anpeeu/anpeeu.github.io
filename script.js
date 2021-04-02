var wordArray = [];
var currentWord = 0;
var condition = false;

$(document).ready(function(){ 
    /* title letters*/
    var words = document.getElementsByClassName('h1');

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
        
    }
    changeWord();
    setInterval(changeWord,9000);

}) 




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeWord() {
    condition = !condition;
    letters =  wordArray[0];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML != " " && letters[i].innerHTML != "\n"){
            for (let j = 0; j < 2; j++) {
                if (condition == true) {
                    letters[i].innerHTML = CaesarCipher(letters[i].innerHTML,1);
                } else {
                    letters[i].innerHTML = CaesarCipher(letters[i].innerHTML,-1);
                } 
                await sleep(120);
            }
        }
    }
    console.log("Cambio "+condition);
}


 function CaesarCipher(str, num) {
    var charcode = 0;
    charcode = (str[0].charCodeAt()) + num;
    return String.fromCharCode(charcode);

}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}


