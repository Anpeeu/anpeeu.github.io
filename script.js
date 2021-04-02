var wordArray = [];
var currentWord = 0;
condition = false;

$(document).ready(function(){ 
    /* title letters*/
    var words = document.getElementsByClassName('h1');

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
        
    }
    setInterval(changeWord,3000)

}) 



function changeWord() {
    condition = !condition;
    letters =  wordArray[0]
    for (let i=0; i< letters.length; i+=2) {
        if (letters[i].innerHTML != " " && letters[i].innerHTML != "\n")
        {
            if (condition == true) {
                console.log(letters[i].innerHTML);
                letters[i].innerHTML = CaesarCipher(letters[i].innerHTML,6);
            } else {
                letters[i].innerHTML = CaesarCipher(letters[i].innerHTML,-6);
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


