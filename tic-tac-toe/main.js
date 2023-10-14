const playingField = document.querySelectorAll('.playing-field');
const xUser = document.querySelector('.x-User');
const oUser = document.querySelector('.o-User');
const xoDraw = document.querySelector('.xo-draw');
let player = "x";

let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

const storedStat = JSON.parse(localStorage.getItem('stat'));
if (storedStat) {
    stat = storedStat;
    updateStat();
}

const winIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < playingField.length; i++) {
    playingField[i].addEventListener('click', playingFieldClick, false);
}

function playingFieldClick() {
    let data = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        return;
    }

    for (let i = 0; i < playingField.length; i++) {
        if (playingField[i].innerHTML === player) {
            data.push(parseInt(playingField[i].getAttribute("data-cell-index")));
        }
    }

    if (checkWin(data)) {
        stat[player] += 1;
        updateStat();
        setTimeout(function() {
            restart("Winner: " + player);
        }, 400);
    } else {
        let draw = true;
        for (let i = 0; i < playingField.length; i++) {
            if (playingField[i].innerHTML === '') {
                draw = false;
                break;
            }
        }
        if (draw) {
            stat.d += 1;
            updateStat();
            setTimeout(function() {
                restart("Draw");
            }, 400);
        }
    }

    player = player === "x" ? "o" : "x";
}

function checkWin(data) {
    for (let i = 0; i < winIndex.length; i++) {
        let win = true;
        for (let j = 0; j < winIndex[i].length; j++) {
            let id = winIndex[i][j];
            if (data.indexOf(id) === -1) {
                win = false;
                break;
            }
        }

        if (win) return true;
    }
    return false;
}

function restart(text) {
    alert(text);
    for (let i = 0; i < playingField.length; i++) {
        playingField[i].innerHTML = '';
    }

    localStorage.setItem('stat', JSON.stringify(stat));
    updateStat();
}

function updateStat() {
    document.querySelector('.result-game.x-winner').innerHTML = stat.x;
    document.querySelector('.result-game.o-winner').innerHTML = stat.o;
    document.querySelector('.result-game.xo-draw').innerHTML = stat.d;
}

updateStat();