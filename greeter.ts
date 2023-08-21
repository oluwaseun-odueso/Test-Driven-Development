export function greeter() {
   return {
      helloWorld: function() {
         return "Hello world!"
      },
      helloPerson(name: string) {
         return `Hello ${name}!`
      }
   }
}