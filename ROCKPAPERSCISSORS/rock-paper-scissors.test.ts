import { createRockPaperScissors, Move, Outcome } from "./rock-paper-scissors";

describe('rock-paper-scissors', () => {
   describe('play', () => {
      describe('player beats rock', () => {
         test('given player moves paper and opponent moves rock should return player wins', () => {
            // Arrange 
            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(Move.Paper, Move.Rock);
      
            // Assert
            expect(actual).toBe(Outcome.PlayerWins)
         })

         test('given player moves rock and opponent moves paper should return player loses', () => {
            // Arrange 
            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(Move.Rock, Move.Paper);
      
            // Assert
            expect(actual).toBe(Outcome.PlayerLoses)
         })
      })

      describe('Scissors beats paper', () => {
         test('given player moves paper and opponent moves scissors should return player loses', () => {
            // Arrange 
            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(Move.Paper, Move.Scissors);
      
            // Assert
            expect(actual).toBe(Outcome.PlayerLoses)
         })

         test('given player moves scissors and opponent moves paper should return player wins', () => {
            // Arrange 
            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(Move.Scissors, Move.Paper);
      
            // Assert
            expect(actual).toBe(Outcome.PlayerWins)
         })
      })

      // describe('Ties', () => {
      //    test('given player moves paper and opponent moves paper should return Tie', () => {
      //       // Arrange 
      //       const sut = createRockPaperScissors()
      
      //       // Act
      //       const actual = sut.play(Move.Paper, Move.Paper);
      
      //       // Assert
      //       expect(actual).toBe(Outcome.Tie)
      //    })
      // })

      describe('Rock beats scissors', () => {
         test('given player moves rock and opponent moves scissors should return Player wins', () => {
            // Arrange 
            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(Move.Rock, Move.Scissors);
      
            // Assert
            expect(actual).toBe(Outcome.PlayerWins)
         })
      })
   })
})

