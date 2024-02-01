// Test doubles
// - fakes
// - stubs
// - mocks

import { Copier, Destination, Source } from "./character-copy"

describe('character-copy', () => {
  describe('copy', () => {
    test.each([
      {char: 'a'},
      {char: 'b'},
      {char: '!'}
    ])('one character', ({char}) => {
      // Arrange
      const mockReadChar = jest.fn(() => char)
      const source: Source = {
        readChar: mockReadChar
      };

      const mockWriteChar = jest.fn();
      const destination: Destination = {
        writeChar: mockWriteChar
      }
      const sut = new Copier(source, destination)
      // Act
      sut.copy();
      // Assert
      expect(mockWriteChar).toBeCalledTimes(1)
      expect(mockWriteChar).toHaveBeenCalledWith(char)
    })
  })
})