interface FizzBuzz {
   go(num: number): string
}

export function createFizzBuzz(): FizzBuzz {
   return {
      go: function(num: number): string {
         if (num % 3 === 0 && num % 5 === 0) return 'Fizz-buzz'
         if (num % 5 === 0) return "Buzz"
         return 'Fizz'
      }
   }
}