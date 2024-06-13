let buttons = document.querySelectorAll(".game_button"); // get all buttons by class name used . return array
let reset_button = document.querySelector("#game_reset_button");// select item by id use # return single element
let headingText = document.querySelector("#heading");// select item by id use # return single element
let turnText = document.querySelector("#TurnText");// select item by id use # return single element

let turn0 = true; //   Used like boolen to check wich turn is ongoing
let gameCounter = 0;
const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8], [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
reset_button.addEventListener("click", () => {
    resteGame();
});
buttons.forEach((button) =>
    button.addEventListener("click", () => {
        console.log("Button click");
        if (turn0) {
            button.innerText = "0";
            turnText.innerText = " Player 1 Turn ";
            turn0 = false;
        }
        else {
            button.innerText = "X";
            turnText.innerText = " Player 0 Turn ";
            turn0 = true;
        }
        button.disabled = true;
        gameCounter++;
        checkWinner();
    }));


const disabledAllButton = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    })

}

const resteGame = () => {
    buttons.forEach((button) => {
        button.disabled = false;
        button.innerText = "";
    })
    headingText.innerText = "Tic Tac Toe Game";
    turn0 = true;
    turnText.innerText = " Player 0 Turn ";
    gameCounter = 0;
}



const showWinner = (player) => {
    headingText.innerText = "Player " + player + "  was winner.. ";
    disabledAllButton();
}

const showGameWasTie = () => {
    headingText.innerText = "Game Was Tie";
    turnText.innerText = "  :( ";

}



const checkWinner = () => {
    let isWin = false;
    for (pattern of winPatterns) {
        let val1 = buttons[pattern[0]].innerText;
        let val2 = buttons[pattern[1]].innerText;
        let val3 = buttons[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log(val1 + " Was Winner ");
                isWin = true;
                showWinner(val1);
            }
        }
        if (!isWin && gameCounter === 9) {
            showGameWasTie();
        }


    }
}