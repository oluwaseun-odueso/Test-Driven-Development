// Test doubles
// - fakes
// - stubs
// - mocks

import { Copier, Destination, Source } from "./character-copy"

xdescribe('character-copy', () => {
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
        const destination = createDestination()

        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        expect(destination.writeChar).toBeCalledTimes(1)
        expect(destination.getWrittenChars()).toContain(char)
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
        chars.map(c => expect(destination.getWrittenChars()).toContain(c))
      })
    })

    describe('multiple characters are written in the correct order', () => {
      test.each([
        {chars: ['a', 'b', 'c', 'd', 'e']},
      ])('chars: $chars', ({chars}) => {
        // Arrange
        const source = createSource(chars)
        const destination = createDestination()

        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        // Checking order and many characters
        chars.map(c => expect(destination.getWrittenChars()).toContain(c))
        // expect(destination.getWrittenChars()).toStrictEqual(chars)
      })
    })

    describe('characters after newline are not written', () => {
      test.each([
        {chars: ['a', 'b', 'c', '\n', 'e'], expected: ['a', 'b', 'c']},
        {chars: ['d', 'b', 'ce', '\n', 'e'], expected: ['d', 'b', 'ce']},
      ])('chars: $chars', ({chars, expected}) => {
        // Arrange
        const source = createSource(chars)
        const destination = createDestination()

        const sut = createCopier(source, destination)
        // Act
        sut.copy();
        // Assert
        // Checking order and many characters
        expect(destination.getWrittenChars()).toStrictEqual(expected)
      })
    })
  })
})

function createCopier (source: Source, destination: Destination) {
  return new Copier(source, destination)
}

function createDestination () {
  const writtenChar: string[] = []
  return {
    writeChar: jest.fn((c) => writtenChar.push(c)),
    getWrittenChars: () => writtenChar
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