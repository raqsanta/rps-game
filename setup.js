
//setup
import {Player as Player} from './js/player.js'
import {Computer as Computer} from './js/computer.js'
import {Game as Game} from './game.js'

let player1 = new Player('jogador', null, 0, 0, 0)
let player2 = new Computer('computador', null, 0, 0, 0)

var app = new Game(player1, player2)

var rockButton = document.getElementById('rock')
var scissorsButton = document.getElementById('scissors')
var paperButton = document.getElementById('paper')

rockButton.addEventListener('click', ()=>{

    player1.drawHand('rock')
    player2.drawHand()

    app.handleMatch()

})

scissorsButton.addEventListener('click', ()=>{

    player1.drawHand('scissors')
    player2.drawHand()

    app.handleMatch()

})

paperButton.addEventListener('click', ()=>{

    player1.drawHand('paper')
    player2.drawHand()

    app.handleMatch()

})
