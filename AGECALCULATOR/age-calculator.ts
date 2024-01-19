export function createAgeCalculator() {
   return function (birthDate: Date, targetDate: Date) {
      const differenceInYears = targetDate.getFullYear() - birthDate.getFullYear()
      if (birthDate.getMonth() > targetDate.getMonth() ||
      (birthDate.getMonth() == targetDate.getMonth() && birthDate.getDate() > targetDate.getDate())) {
         return differenceInYears - 1
      }
      // if (birthDate.getMonth() == targetDate.getMonth() && birthDate.getDate() > targetDate.getDate()) return differenceInYears - 1
      return differenceInYears
   }
}
