export class StringCalculator {
   add(input: string) {
      if (input.length === 0) {
         return 0
      }
      let delimeter: string | RegExp = /,|\n/;
      if (input.startsWith("//")){
         delimeter = input[2];
         input = input.slice(3);
      }
      return input.split(delimeter)
         .map(s => Number.parseInt(s))
         .reduce((n, total) => total + n)
   }
}