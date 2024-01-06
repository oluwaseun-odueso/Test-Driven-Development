import { createRockPaperScissors, Move, Outcome } from "./rock-paper-scissors";

describe('rock-paper-scissors', () => {
   describe('play', () => {
      describe('player beats rock', () => {
         test('given player moves paper and opponent moves rock should return player wins', () => {
            // Arrange 
            const playerMove = Move.Paper;
            const opponentMove = Move.Rock;
            const expected = Outcome.PlayerWins

            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(playerMove, opponentMove);
      
            // Assert
            expect(actual).toBe(expected)
         })

         test('given player moves rock and opponent moves paper should return player loses', () => {
            // Arrange 
            const playerMove = Move.Rock;
            const opponentMove = Move.Paper;
            const expected = Outcome.PlayerLoses

            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(playerMove, opponentMove);
      
            // Assert
            expect(actual).toBe(expected)
         })
      })

      describe('Scissors beats paper', () => {
         test('given player moves paper and opponent moves scissors should return player loses', () => {
            // Arrange 
            const playerMove = Move.Paper;
            const opponentMove = Move.Scissors;
            const expected = Outcome.PlayerLoses

            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(playerMove, opponentMove);
      
            // Assert
            expect(actual).toBe(expected)
         })

         test('given player moves scissors and opponent moves paper should return player wins', () => {
            // Arrange 
            const playerMove = Move.Scissors;
            const opponentMove = Move.Paper;
            const expected = Outcome.PlayerWins
            const sut = createRockPaperScissors()
            // Act
            const actual = sut.play(playerMove, opponentMove);
            // Assert
            expect(actual).toBe(expected)
         })
      })

      describe('Ties', () => {
         test('given player moves rock and opponent moves scissors should return Player wins', () => {
            // Arrange 
            const playerMove = Move.Paper;
            const opponentMove = Move.Paper;
            const expected = Outcome.Tie
            const sut = createRockPaperScissors()
            // Act
            const actual = sut.play(playerMove, opponentMove);
            // Assert
            expect(actual).toBe(expected)
         })

         test('given player moves rock and opponent moves scissors should return Player wins', () => {
            // Arrange 
            const playerMove = Move.Rock;
            const opponentMove = Move.Rock;
            const expected = Outcome.Tie
            const sut = createRockPaperScissors()
            // Act
            const actual = sut.play(playerMove, opponentMove);
            // Assert
            expect(actual).toBe(expected)
         })

         test('given player moves rock and opponent moves scissors should return Player wins', () => {
            // Arrange 
            const playerMove = Move.Scissors;
            const opponentMove = Move.Scissors;
            const expected = Outcome.Tie
            const sut = createRockPaperScissors()
            // Act
            const actual = sut.play(playerMove, opponentMove);
      
            // Assert
            expect(actual).toBe(expected)
         })
      })

      describe('Rock beats scissors', () => {
         test('given player moves rock and opponent moves scissors should return Player wins', () => {
            // Arrange 
            const playerMove = Move.Rock;
            const opponentMove = Move.Scissors;
            const expected = Outcome.PlayerWins

            const sut = createRockPaperScissors()
      
            // Act
            const actual = sut.play(playerMove, opponentMove);
      
            // Assert
            expect(actual).toBe(expected)
         })
      })
      
      test('given player moves scissors and opponent moves rock should return Player loses', () => {
         // Arrange 
         const playerMove = Move.Scissors;
         const opponentMove = Move.Rock;
         const expected = Outcome.PlayerLoses

         const sut = createRockPaperScissors()
   
         // Act
         const actual = sut.play(playerMove, opponentMove);
   
         // Assert
         expect(actual).toBe(expected)
      })
   })
})

