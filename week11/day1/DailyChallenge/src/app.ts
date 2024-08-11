function processInput(input: number | string | boolean): number | string | boolean {
  switch(typeof input){
    case "number":
      return input * input;
    case "string":
      return input.toUpperCase();
    case "boolean":
      return !input;
    default:
      return input;
  }
}

console.log(processInput(42));
console.log(processInput("Hello"));
console.log(processInput(true));
console.log(processInput(false));
console.log(processInput("world"));