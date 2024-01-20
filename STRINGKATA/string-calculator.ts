export class StringCalculator {
   add(input: string) {
      if (input.length === 0) {
         return 0
      }
      if (input.includes(",")) {
         const op1 = input.split(",")[0];
         const op2 = input.split(",")[1]
         return Number.parseInt(op1) + Number.parseInt(op2)
      }
      return Number.parseInt(input)
   }
}