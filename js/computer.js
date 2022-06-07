import { Player as Player } from './player.js'

export class Computer extends Player {

    drawHand() {

        let handList = [
            this.ROCK,
            this.SCISSORS,
            this.PAPER
        ]

        this.handsign = handList[Math.floor(Math.random() * (handList.length - 0) + 0)]

    }

}