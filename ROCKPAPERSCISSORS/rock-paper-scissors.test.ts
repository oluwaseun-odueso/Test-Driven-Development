import { createRockPaperScissors } from "./rock-paper-scissors";

describe('rock-paper-scissors', () => {
   test('given player moves paper and opponent moves rock should return player wins', () => {
      // Arrange 
      const sut = createRockPaperScissors()

      // Act
      const actual = sut.play("Paper", "Rock");

      // Assert
      expect(actual).toBe("Player wins")
   })

   test('given player moves paper and opponent moves scissors should return player loses', () => {
      // Arrange 
      const sut = createRockPaperScissors()

      // Act
      const actual = sut.play("Paper", "Scissors");

      // Assert
      expect(actual).toBe("Player loses")
   })
})

// function createRockPaperScissors() {
//    throw new Error("Function not implemented.")
// }
