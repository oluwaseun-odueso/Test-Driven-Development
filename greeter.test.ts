import { greeter } from "./greeter";

describe('greeter', () => {
   test('helloWorld given default should return `Hello world!`', () => {
      // Arrange
      const expected = "Hello world!";
      const sut = greeter();

      // Act
      const actual = sut.helloWorld();

      // Assert
      expect(actual).toBe(expected)
   })
})