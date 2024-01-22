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
      return input.split(delimeter)
         .map(s => Number.parseInt(s))
         .reduce((n, total) => total + n)
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

