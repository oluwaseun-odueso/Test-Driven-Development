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
         {input: 3},
         {input: 6},
         {input: 9}
      ])('$input', ({input}) => {
         // Arrange
         const expected = 'Fizz'
         const sut = createFizzBuzz()
         // Act
         const actual = sut.go(input)
         // Asser
         expect(actual).toBe(expected)
      })
   })

   describe('buzz', () => {
      test.each([
         {input: 5},
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
})