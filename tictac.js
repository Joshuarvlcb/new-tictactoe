"use strict";
//What I need for the game

//placeMarker
//wins
//draws
//switch turns
// made the 9 boxes into a array
let positions = Array.from(document.getElementsByClassName("block"));
let currentPlayer = 'x';

let playerDisplay = document.getElementById('player');
const playerX = 'x'
const playerO = 'o'
let winsX = document.getElementById("x_wins");
let winsO = document.getElementById("o_wins");
console.log(positions);
//turn ++
//stop double clicks


let turn = 0

function reset() {
    for (let i = 0; i < positions.length; i++) {
        document.getElementsByClassName('block')[i].textContent = ''
            // document.getElementById(`block_${i}`).textContent = ' '
        turn = 0;
        playerDisplay.textContent = "Player X Starts";
        document.getElementById('turn').textContent = 'Turn: ';
        currentPlayer = 'x'


    }
    clickOutcome()
}

function clickOutcome(block) {
    //index is to see which box we clicked
    if (document.getElementById(block).textContent == '' && (playerDisplay.textContent != "Player X WON!!!!!" && playerDisplay.textContent != "Player O WON!!!!!")) {
        if (currentPlayer == 'x') {
            document.getElementById(block).textContent = 'x';
            // document.getElementById(block).classList.add('x')
            currentPlayer = "o";
            playerDisplay.textContent = "Player O";
            // turn = document.getElementById('turn').value = turn++
        } else {
            document.getElementById(block).textContent = 'o'
                // document.getElementById(block).classList.add("o");
            currentPlayer = "x";
            playerDisplay.textContent = 'Player X'
                // document.getElementById(block).onclick = "";
        }

        //draw
          // if (document.getElementById(block) ==! "") {
          //   // playerDisplay.textContent = "draw";
          //   alert("draw");
          

        turn++

        if (currentPlayer == 'X') {
            document.getElementById('turn').textContent = (`Turn: ${turn}`)
        } else {
            document.getElementById('turn').textContent = (`Turn: ${turn}`)

        }
        //draw
            
        if(document.getElementById('turn').textContent == 'Turn: 9'){
            playerDisplay.textContent = "Draw";

        }
WINNING_COMBOS();
    }
      
  }

let winXcount = 0;
let winOcount = 0;




function WINNING_COMBOS() {
    const block0 = document.getElementById("block_0");
    const block1 = document.getElementById("block_1");
    const block2 = document.getElementById("block_2");
    const block3 = document.getElementById("block_3");
    const block4 = document.getElementById("block_4");
    const block5 = document.getElementById("block_5");
    const block6 = document.getElementById("block_6");
    const block7 = document.getElementById("block_7");
    const block8 = document.getElementById("block_8");


  // if(block0 != ' ' && block1 != ' ' && block2 != ' ' && block3 != ' ' && block4 != ' ' && block5 != ' '&& block6 != ' ' &&block7 != ' ' &&block8 != ' '){
  //   playerDisplay.textContent = 'draw'
  // }




    if (
        block3.textContent == playerX &&
        block4.textContent == playerX &&
        block5.textContent == playerX
    ) {
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";
        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;

        document.getElementsByClassName("block").onclick = "";

    }
    
    if (
        block3.textContent == playerO &&
        block4.textContent == playerO &&
        block5.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;
    }
    if (
        block0.textContent == playerX &&
        block1.textContent == playerX &&
        block2.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";
        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;

        return;
    }
    if (
        block0.textContent == playerO &&
        block1.textContent == playerO &&
        block2.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;
    }
    if (
        block6.textContent == playerX &&
        block7.textContent == playerX &&
        block8.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block6.textContent == playerO &&
        block7.textContent == playerO &&
        block8.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;

    }
    if (
        block0.textContent == playerX &&
        block3.textContent == playerX &&
        block6.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block0.textContent == playerO &&
        block3.textContent == playerO &&
        block6.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;
    }
    if (
        block1.textContent == playerX &&
        block4.textContent == playerX &&
        block7.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block1.textContent == playerO &&
        block4.textContent == playerO &&
        block7.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;


    }
    if (
        block2.textContent == playerX &&
        block5.textContent == playerX &&
        block8.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block2.textContent == playerO &&
        block5.textContent == playerO &&
        block8.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;

    }
    if (
        block2.textContent == playerX &&
        block4.textContent == playerX &&
        block6.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block2.textContent == playerO &&
        block4.textContent == playerO &&
        block6.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;

    }
    if (
        block0.textContent == playerX &&
        block4.textContent == playerX &&
        block8.textContent == playerX
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player X WON!!!!!";

        winXcount++;

        x_wins.textContent = `X - ${winXcount}`;
    }
    if (
        block0.textContent == playerO &&
        block4.textContent == playerO &&
        block8.textContent == playerO
    ) {
        // winningBoxes(block3,block4,block5)
        console.log("it works");
        playerDisplay.textContent = "Player O WON!!!!!";

        winOcount++;

        o_wins.textContent = `O - ${winOcount}`;

    }

}