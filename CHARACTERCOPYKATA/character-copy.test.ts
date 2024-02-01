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

        const destination: Destination = createDestination()
        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toBeCalledTimes(0)
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
        const destination: Destination = createDestination()

        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toBeCalledTimes(1)
        expect(destination.writeChar).toHaveBeenCalledWith(char)
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
        const destination = createDestination()

        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toBeCalledTimes(chars.length)
        chars.map(c => expect(destination.writeChar).toHaveBeenCalledWith(c))
      })
    })
  })
})

function createCopier (source: Source, destination: Destination) {
  return new Copier(source, destination)
}

function createDestination () {
  return {
    writeChar: jest.fn()
  };
}

function createSource (chars: string[]) {
  const mockReadChar = jest.fn()
    mockReadChar.mockReturnValue('\n')
    chars.map(c => mockReadChar.mockReturnValueOnce(c))
    return {
      readChar: mockReadChar
    };
}