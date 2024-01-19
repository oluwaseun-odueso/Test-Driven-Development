export function createAgeCalculator() {
   return function (birthDate: Date, targetDate: Date) {
      const completedYears = targetDate.getFullYear() - birthDate.getFullYear()
      if (hasNotHadBirthday(birthDate, targetDate)) {
         return completedYears - 1
      }
      return completedYears
   }
}

function hasNotHadBirthday(birthDate: Date, targetDate: Date) {
   return birthDate.getMonth() > targetDate.getMonth() || 
      (birthDate.getMonth() === targetDate.getMonth() && birthDate.getDate() > targetDate.getDate())
}
