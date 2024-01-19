// Boundarues and Equivalence Partitions
// Triangulation Green Bar Pattern
// Test cases (.each)

import { createFizzBuzz } from "./fizz-buzz"

// Also remember:
// - 3 laws
// - red-green-refactor
// - Fake It Green Bar Pattern

describe('fizz-buzz', () => {
   describe('fizz', () => {
      test.each([
         {input: 6},
         {input: 9}
      ])('$input', ({input}) => {
         // Arrange
         const expected = 'Fizz'
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Assert
         expect(actual).toBe(expected)
      })
   })

   describe('buzz', () => {
      test.each([
         {input: 10},
         {input: 20}
      ])('$input', ({input}) => {
         // Arrange
         const expected = 'Buzz'
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('fizz-buzz', () => {
      test.each([
         {input: 15},
         {input: 45},
         {input: 75}
      ])('$input', ({input}) => {
         // Arrange
         const expected = 'Fizz-buzz'
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('number itself', () => {
      test.each([
         {input: 1, expected: "1"},
         {input: 4, expected: "4"},
         {input: 14, expected: "14"},
         {input: 169, expected: "169"}
      ])('$input', ({input, expected}) => {
         // Arrange
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('fizzwhiz', () => {
      test.each([
         {input: 3}
      ])('$input', ({input}) => {
         // Arrange
         const expected = "Fizzwhiz"
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('whiz', () => {
      test.each([
         {input: 2},
         {input: 7},
         {input: 11}
      ])('$input', ({input}) => {
         // Arrange
         const expected = "Whiz"
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('buzzwhiz', () => {
      test.each([
         {input: 5}
      ])('$input', ({input}) => {
         // Arrange
         const expected = "Buzzwhiz"
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })
})
