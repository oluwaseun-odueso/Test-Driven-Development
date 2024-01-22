export class StringCalculator {
   add(input: string) {
      if (input.length === 0) {
         return 0
      }
      let delimeter: string | RegExp = /,|\n/;
      if (this.hasCustomDelimeter(input)){
         delimeter = this.extractCustomDelimeter(input);
         input = this.removeCustomDelimeterHeader(input);
      }
      const parsedNumbers = this.parseNumbers(input, delimeter)
      this.throwIfAnyNegativeNumbers(parsedNumbers)
      
      return this.sumTotal(parsedNumbers)
   }

   private sumTotal(parsedNumbers: number[]) {
      return parsedNumbers.reduce((n, total) => total + n);
   }

   private throwIfAnyNegativeNumbers (parsedNumbers: number[]) {
      const negativeNumbers = parsedNumbers.filter(n => n < 0)
      if (negativeNumbers.length > 0) {
         throw `negatives not allowed: ${negativeNumbers.join(",")}`
      }
   }

   private parseNumbers(input: string, delimeter: string | RegExp) {
      return input.split(delimeter)
         .map(s => Number.parseInt(s))
   }

   private removeCustomDelimeterHeader (input: string): string {
      return input.slice(3)
   }

   private extractCustomDelimeter (input: string): string | RegExp {
      return input[2]
   }

   private hasCustomDelimeter(input: string) {
      return input.startsWith("//")
   }
}

