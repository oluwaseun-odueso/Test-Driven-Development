export class StringCalculator {
   add(input: string) {
      if (input.length === 0) {
         return 0
      }
      if (input.includes(",")) {
         const operands = input.split(",");
         let total = 0;
         for (const op of operands) {
            total += Number.parseInt(op)
         }
         return total
         // const op1 = input.split(",")[0];
         // const op2 = input.split(",")[1]
         // return Number.parseInt(op1) + Number.parseInt(op2)
      }
      return Number.parseInt(input)
   }
}