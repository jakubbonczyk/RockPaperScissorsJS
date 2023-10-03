const gameSummary = {
    counter: 0,
    wins: 0,
    lossses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function computerChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    }   else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
        return 'win';
    }   else {
        return 'loss';
    } 
}

function getWinner(winner) {
    document.querySelector('.numbers span').textContent = ++gameSummary.counter;

    if (winner === "win") {
        document.querySelector('h2').textContent = "You won!";
        document.querySelector('.wins span').textContent = ++gameSummary.wins;
    }   else if (winner === "draw") {
        document.querySelector('h2').textContent = "Draw!";
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
    }   else {document.querySelector('h2').textContent = "AI won :("
    document.querySelector('.losses span').textContent = ++gameSummary.lossses;
}

}

function getChoices(player, ai) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
}

function init() {
    if (!game.playerHand) {return alert("Choose your hand!");}
    game.aiHand = computerChoice();
    const choice = getChoices(game.playerHand, game.aiHand);
    const gameResult = checkResult(game.playerHand, game.aiHand);
    const winner = getWinner(gameResult);
}


function selectHand() {
    console.log(this.dataset.option);
    game.playerHand = this.dataset.option;
    hands.forEach((hand) => {
        hand.style.boxShadow = ``;
    })
        this.style.boxShadow = `0 0 0 4px purple`;
}

hands.forEach(hand => {
    hand.addEventListener("click", selectHand);
})

const startGame = document.querySelector('.start').addEventListener("click", init);