// Test doubles
// - fakes
// - stubs
// - mocks

import { Copier, Destination, Source } from "./character-copy"

describe('character-copy', () => {
  describe('copy', () => {
    describe('no character before newline', () => {
      test('', () => {
        // Arrange
        const source = createSource([])

        const mockWriteChar = jest.fn();
        const destination: Destination = {
          writeChar: mockWriteChar
        }
        const sut = new Copier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(mockWriteChar).toBeCalledTimes(0)
      })
    })

    describe('one character with newline', () => {
      test.each([
        {char: 'a'},
        {char: 'b'},
        {char: '!'}
      ])('char: $char', ({char}) => {
        // Arrange
        const source = createSource([char])
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

    describe('multiple characters with newline', () => {
      test.each([
        {chars: ['a', 'b']},
        {chars: ['e', 'f', 'g']},
        {chars: ['!', '$', '&', '@', '4', 'y']}
      ])('chars: $chars', ({chars}) => {
        // Arrange
        const source = createSource(chars)

        const mockWriteChar = jest.fn();
        const destination: Destination = {
          writeChar: mockWriteChar
        }
        const sut = new Copier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(mockWriteChar).toBeCalledTimes(chars.length)
        chars.map(c => expect(mockWriteChar).toHaveBeenCalledWith(c))
      })
    })
  })
})

function createSource (chars: string[]) {
  const mockReadChar = jest.fn()
    mockReadChar.mockReturnValue('\n')
    chars.map(c => mockReadChar.mockReturnValueOnce(c))
    return {
      readChar: mockReadChar
    };
}