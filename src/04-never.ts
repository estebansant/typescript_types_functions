const withoutEnd = () => {
  while (true) {
    console.log('never stop learning...')
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string'){
    return true;
  } else if (Array.isArray(input)){
    return 'it is an array';
  } else{
    return fail('no match');
  }
}

console.log(example('hey'));
console.log(example([1,2,3,4]));
console.log(example(24)); //functions stops
console.log(example('Hey after fail'));
