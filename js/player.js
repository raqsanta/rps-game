export class Player {

    constructor(nickname, handsign, wins, draws, defeats){
        this.nickname = nickname
        this.handsign = handsign
        this.wins = wins
        this.draws = draws
        this.defeats = defeats

        this.ROCK = {
            name: 'rock',
            weakness: 'paper',
            strength: 'scissors'
        }
        this.SCISSORS = {
            name: 'scissors',
            weakness: 'rock',
            strength: 'paper'
        }
        this.PAPER = {
            name: 'paper',
            weakness: 'scissors',
            strength: 'rock'
        }

    }

    drawHand(option){

        switch(option){
            case 'rock':
                this.handsign = this.ROCK
                break
            case 'scissors':
                this.handsign =  this.SCISSORS
                break
            case 'paper':
                this.handsign = this.PAPER
                break
            default:
                this.handsign = null
                break
        }

    }

}