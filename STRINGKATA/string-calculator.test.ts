// String Kata first step:
// 1. Create a single string calculator with a function: add(input: string): number

import { StringCalculator } from "./string-calculator";


describe('string-calculator', () => {
   describe('add', () => {
      test('add given empty string should return 0', () => {
         // Arrange
         const input = ""
         const expected = 0;
         const sut = createSut();
   
         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
   })

   describe('single number', () => {
      test.each([
         {input: "5", expected: 5},
         {input: "20", expected: 20},
         {input: "300", expected: 300}
      ])('input: $input, expected: $expected', ({input, expected}) => {
         // Arrange
         const sut = createSut();
   
         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
   })

   describe('two numbers', () => {
      test.each([
         {input: "6,4", expected: 10},
         {input: "15, 23", expected: 38},
         {input: "511, 13", expected: 524}
      ])('input: $input', ({input, expected}) => {
         // Arrange
         const sut = createSut();
   
         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })

      // test('learning test', () => {
      //    expect("1,2,3".split(",")).toStrictEqual(["1","2","3"]);
      //    expect(["1","2","3"].map((s) => Number.parseInt(s))).toStrictEqual([1,2,3])
      //    expect([1,2,3].reduce((n, total) => total + n)).toBe(6)
      // })
   })
   
   describe('many numbers', () => {
      test.each([
         {input: "1, 8, 5", expected: 14},
         {input: "0, 45, 8", expected: 53},
         {input: "38, 94, 500", expected: 632}
      ])('input: $input, expected: $expected', ({input, expected}) => {
         // Arrange
         const sut = createSut();
   
         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
   })

   function createSut () {
      return new StringCalculator()
   }
})