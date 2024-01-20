export class StringCalculator {
   add(input: string) {
      if (input.length === 0) {
         return 0
      }
      return input.split(",")
         .map(s => Number.parseInt(s))
         .reduce((n, total) => total + n)
   }
}