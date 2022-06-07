
export class Game {

    constructor(player, computer) {

        this.player1 = player
        this.player2 = computer

    }

    handleMatch() {

        let description

        if (this.player1.handsign.strength == this.player2.handsign.name) {

            description = this.player1.nickname+' usou '+
            this.player1.handsign.name+' e venceu contra o(a) '+
            this.player2.handsign.name+' de '+this.player2.nickname
            
            this.player1.wins ++
            this.player2.defeats++

        }
        else if (this.player2.handsign.strength == this.player1.handsign.name) {

            description = this.player2.nickname+' usou '+
            this.player2.handsign.name+' e venceu contra a '+
            this.player1.handsign.name+' de '+this.player1.nickname

            this.player1.defeats ++
            this.player2.wins++

        }
        else {

            description = this.player1.nickname+' usou '+
            this.player1.handsign.name+' contra o(a) '+
            this.player2.handsign.name+' de '+this.player2.nickname
            +' e ambos empataram'

            this.player1.draws ++
            this.player2.draws ++

        }

        this.renderGame(description)

    }

    renderGame(description) {

        document.getElementById('player-one').innerText = this.player1.nickname+': Vitórias '+
        this.player1.wins+' - Derrotas '+this.player1.defeats+' - Empates '+this.player1.draws

        document.getElementById('player-two').innerText = this.player2.nickname+': Vitórias '+
        this.player2.wins+' - Derrotas '+this.player2.defeats+' - Empates '+this.player2.draws

        document.getElementById('description').innerText = description

    }

}