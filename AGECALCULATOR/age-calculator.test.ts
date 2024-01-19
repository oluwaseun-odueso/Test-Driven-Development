// The stages of naming:
// Meaningless
// Accurate
// Precise/Specific
// Meaningful

import { createAgeCalculator } from "./age-calculator";

describe('agecalculator', () => {

   describe('already had birthday this year', () => {
      test.each([
         {birthDate: '1979/02/15', targetDate: '2000/03/21', expected: 21},
         {birthDate: '1950/01/31', targetDate: '2001/03/21', expected: 51},
         {birthDate: '2015/03/10', targetDate: '2022/03/21', expected: 7}
   
      ])('birth date: $birthDate, target date: $targetDate, expected: $expected', 
      ({birthDate, targetDate, expected}) => {
         // Arrange
         const sut = createAgeCalculator();
   
         // Act
         const actual = sut(new Date(birthDate), new Date(targetDate))
   
         // Assert
         expect(actual).toBe(expected)
      })
   })

   describe('has not had birthday this year', () => {
      describe('birthday in later month', () => {
         test.each([
            {birthDate: '2000/09/05', targetDate: '2024/06/30', expected: 23},
            {birthDate: '2006/06/16', targetDate: '2024/01/19', expected: 17},
            {birthDate: '2004/02/29', targetDate: '2005/03/01', expected: 1},
         ])('birth date: $birthDate, target date: $targetDate, expected: $expected', 
         ({birthDate, targetDate, expected}) => {
            // Arrange
            const sut = createAgeCalculator();
      
            // Act
            const actual = sut(new Date(birthDate), new Date(targetDate))
      
            // Assert
            expect(actual).toBe(expected)
         })
      })
      
      describe('birthday in same month', () => {
         test.each([
            {birthDate: '1998/06/30', targetDate: '2024/06/19', expected: 25},
            {birthDate: '1957/10/30', targetDate: '2024/10/19', expected: 66},
         ])('birth date: $birthDate, target date: $targetDate, expected: $expected', 
         ({birthDate, targetDate, expected}) => {
            // Arrange
            const sut = createAgeCalculator();
      
            // Act
            const actual = sut(new Date(birthDate), new Date(targetDate))
      
            // Assert
            expect(actual).toBe(expected)
         })
      })
   })
   
})
