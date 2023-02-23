// Esteban => ['E', 's', 't', 'e', 'b', 'a', 'n'] => string => string[];
// ['E', 's', 't', 'e', 'b', 'a', 'n'] => Esteban => string[] => string;

// Overload on TS
export function parseString (input: string): string[];
export function parseString (input: string[]): string;

export function parseString (input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //returns a string
  } else {
    return input.split('') //returns a string[]
  }
}

const answerArray = parseString('Esteban');
answerArray.reverse();
// if (Array.isArray(answerArray)) {
//   answerArray.reverse();
// }
console.log('answerArray', 'Esteban =>', answerArray);

const answerString = parseString(['E', 's', 't', 'e', 'b', 'a', 'n']);
answerString.toLowerCase();
// if (typeof answerString === 'string') {
//   answerString.toLowerCase();
// }
console.log('answerString', "['E', 's', 't', 'e', 'b', 'a', 'n'] =>", answerString);

// Generic way of overloading
export function testFunctionOverload (input: string): string[];
export function testFunctionOverload (input: string[]): string;
export function testFunctionOverload (input: number): boolean;

export function testFunctionOverload (input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //returns a string
  } else if(typeof input === 'string') {
    return input.split('') //returns a string[]
  } else if(typeof input === 'number') {
    return true //returns a boolean
  }
}

const answerBoolean = testFunctionOverload(12);
console.group('answerBoolean', answerBoolean);
