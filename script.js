/* Java Script file of Spelldice v1.0 (2021)

Credits :
HTML5/CSS3 -> Julien HUYNH          https://github.com/JulienHuynh
JavaScript/Electron JS -> Gianni HUYNH https://github.com/GianniHuynh

You can modify the entire code as you want to create your own version of Spelldice !

Just Spell it ! 

*/


//Variable used to count the rank of the dice drop
var rank = 0;




//Function to roll a 4-sided dice.
function spellDice4() {
  let result;
  let dice;
  result = Math.random() * (4 - 1) + 1;
  rank++;
  dice = "1D4 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 6-sided dice.
function spellDice6() {
  let result;
  let dice;
  result = Math.random() * (6 - 1) + 1;
  rank++;
  dice = "1D6 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 8-sided dice.
function spellDice8() {
  let result;
  let dice;
  result = Math.random() * (8 - 1) + 1;
  rank++;
  dice = "1D8 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 10-sided dice.
function spellDice10() {
  let result;
  let dice;
  result = Math.random() * (10 - 1) + 1;
  rank++;
  dice = "1D10 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 12-sided dice.
function spellDice12() {
  let result;
  let dice;
  result = Math.random() * (12 - 1) + 1;
  rank++;
  dice = "1D12 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 20-sided dice.
function spellDice20() {
  let result;
  let dice;
  result = Math.random() * (20 - 1) + 1;
  rank++;
  dice = "1D20 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a 100-sided dice.
function spellDice100() {
  let result;
  let dice;
  result = Math.random() * (100 - 1) + 1;
  rank++;
  dice = "1D100 : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}

//Function to roll a Custom-sided dice.

function spellDiceCustom() {
  let result;
  let dice;
  let userInput = document.getElementById("CustomD").value;
  parseInt(userInput);
  result = Math.random() * (userInput - 1) + 1;
  rank++;
  dice = "1D" + userInput + " : " + parseInt(result) + "       #" + rank;
  case6.innerHTML = case5.innerHTML;
  case5.innerHTML = case4.innerHTML;
  case4.innerHTML = case3.innerHTML;
  case3.innerHTML = case2.innerHTML;
  case2.innerHTML = case1.innerHTML;
  case1.innerHTML = dice;
}


