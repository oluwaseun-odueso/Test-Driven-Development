import { greeter } from "./greeter";

describe('greeter', () => {
   describe('helloWorld', () => {
      it('should return `Hello world!`', () => {
         // Arrange
         const expected = "Hello world!";
         const sut = greeter();
   
         // Act
         const actual = sut.helloWorld();
   
         // Assert
         expect(actual).toBe(expected)
      });
   })

   describe('helloPerson', () => {
      describe("empty name", () => {
         it('should return `Hello !`', () => {
            // Arrange
            const expected = "Hello !";
            const input = ""
      
            const sut = greeter();
      
            // Act
            const actual = sut.helloPerson(input);
      
            // Assert
            expect(actual).toBe(expected)
         })
      })

      describe("Given name", () => {
         it('should return `Hello `NAME`!`', () => {
            // Arrange
            const expected = "Hello Paul!";
            const input = "Paul"
      
            const sut = greeter();
      
            // Act
            const actual = sut.helloPerson(input);
      
            // Assert
            expect(actual).toBe(expected)
         })
      })
   })
})