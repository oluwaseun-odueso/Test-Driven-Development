export enum Move {
   Paper, 
   Rock, 
   Scissors
}

export enum Outcome {
   PlayerWins, 
   PlayerLoses,
   Tie
}

interface RockPaperScissors {
   play(playerMove: Move, p2Move: Move): Outcome
}

export function createRockPaperScissors(): RockPaperScissors {
   return {
      play(playerMove: Move, opponentMove: Move) {
         if (playerMove === opponentMove) {
            return Outcome.Tie
         }
         
         if (opponentMove === Move.Scissors) {
            if (playerMove === Move.Rock) {
               return Outcome.PlayerWins
            }
            return Outcome.PlayerLoses
         }

         if (opponentMove === Move.Paper) {
            if (playerMove === Move.Scissors) {
               return Outcome.PlayerWins
            }
            return Outcome.PlayerLoses
         }

         if (playerMove === Move.Scissors && opponentMove === Move.Rock) {
            return Outcome.PlayerLoses
         }

         return Outcome.PlayerWins
      }
   }
}