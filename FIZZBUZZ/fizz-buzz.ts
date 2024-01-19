interface FizzBuzz {
   go(num: number): string
}


export function createFizzBuzz(): FizzBuzz {
   function isPrime(num: number): boolean {
      if (num === 1) return false;
      for (let factor = 2; factor <= Math.sqrt(num); factor += 1) {
         if (num % factor === 0) return false
      }
      if (num % 2 === 0 && num > 2) return false;
      if (num % 7 === 0 && num > 7) return false;
      if (num % 11 === 0 && num > 11) return false;
      if (num % 13 === 0 && num > 13) return false;
      return true;
   }
   return {
      go: function(num: number): string {
         if (num === 3) return "Fizzwhiz";
         if (num === 5) return "Buzzwhiz";
         if (num % 15 === 0) return 'Fizz-buzz'
         if (num % 5 === 0) return "Buzz"
         if (num % 3 === 0) return "Fizz"
         if (isPrime(num)) return "Whiz"
         return num.toString()
      }
   }
}