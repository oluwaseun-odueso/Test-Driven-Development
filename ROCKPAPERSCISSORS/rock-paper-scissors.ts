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
         if (playerMove === Move.Scissors && opponentMove === Move.Paper) {
            return Outcome.PlayerWins
         }
         if (playerMove === Move.Rock && opponentMove === Move.Scissors) {
            return Outcome.PlayerWins
         }
         if (opponentMove === Move.Scissors) {
            return Outcome.PlayerLoses
         }
         if (opponentMove === Move.Paper) {
            return Outcome.PlayerLoses
         }
         if (playerMove === opponentMove) {
            return Outcome.Tie
         }

         return Outcome.PlayerWins
      }
   }
}