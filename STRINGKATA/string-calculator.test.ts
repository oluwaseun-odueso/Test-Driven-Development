// String Kata first step:
// 1. Create a single string calculator with a function: add(input: string): number

import { StringCalculator } from "./string-calculator";


xdescribe('string-calculator', () => {
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

   describe('new line as delimeter', () => {
      test('1, 2\\3', () => {
         // Arrange
         const sut = createSut();
         const input = '1,2\n3'
         const expected = 6

         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
      test('1\n2,3,4\\n50', () => {
         // Arrange
         const sut = createSut();
         const input = '1\n2,3,4\n50'
         const expected = 60

         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
   })

   describe('custom delimeter', () => {
      test('//;\n1;2', () => {
         // Arrange
         const sut = createSut();
         const input = '//;\n1;2'
         const expected = 3

         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      });
      test('//@\n21@52@11', () => {
         // Arrange
         const sut = createSut();
         const input = '//@\n21@52@11'
         const expected = 84

         // Act
         const acutal = sut.add(input)
   
         // Assert
         expect(acutal).toBe(expected)
      })
   })

   describe('throws on negative numbers', () => {
      describe('one negative number in input', () => {
         test.each([
            {input: "1,2,-3", expected: "negatives not allowed: -3"},
            {input: "15,-34,30", expected: "negatives not allowed: -34"},
            {input: "-100,2,4", expected: "negatives not allowed: -100"}
         ])('input: $input', ({input, expected}) => {
            // Arrange
            const sut = createSut();

            // Act/Assert
            expect(() => {
               sut.add(input)
            }).toThrow(expected)

         })
      })

      describe('two negative numbers in input', () => {
         test.each([
            {input: "1,-2,-3", expected: "negatives not allowed: -2,-3"},
            {input: "-15,-34,30", expected: "negatives not allowed: -15,-34"},
            {input: "-100,2,-4", expected: "negatives not allowed: -100,-4"}
         ])('input: $input', ({input, expected}) => {
            // Arrange
            const sut = createSut();

            // Act/Assert
            expect(() => {
               sut.add(input)
            }).toThrow(expected)

         })
      })

      describe('many negative numbers in input', () => {
         test.each([
            {input: "1,-2,-3,-8,-10", expected: "negatives not allowed: -2,-3,-8,-10"},
            {input: "-15,-34,30,-15,-60,-13", expected: "negatives not allowed: -15,-34,-15,-60,-13"},
            {input: "-100,2,-4,-5,25,-24", expected: "negatives not allowed: -100,-4,-5,-24"}
         ])('input: $input', ({input, expected}) => {
            // Arrange
            const sut = createSut();

            // Act/Assert
            expect(() => {
               sut.add(input)
            }).toThrow(expected)

         })
      })

      describe('large numbers > 1000 should be filtered out', () => {
         test.each([
            {input: "1,1001", expected: 1},
            {input: "1,2,1000", expected: 1003},
            {input: "15,34,78,5000", expected: 127}
         ])('input: $input', ({input, expected}) => {
            // Arrange
            const sut = createSut();

            // Act
            const actual = sut.add(input)
            // Asser
            expect(actual).toBe(expected)
         })
      })
   })

   test('learning join', () => {
      expect([-2,-3].join(",")).toBe("-2,-3")
   })

   function createSut () {
      return new StringCalculator()
   }
})