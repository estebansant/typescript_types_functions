let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = false;
anyVar = 3;
anyVar = 'you';
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar; //Erros can jump with any, if anyVar has another type value


anyVar.doSomething();
anyVar.toupperCase(); //Does not detect the errors

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = false;
unknownVar = 3;
unknownVar = 'you';
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();
if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase();
};

if(typeof unknownVar === 'boolean'){
  let isNewV2: boolean = unknownVar;
};

const parse = (str: string): unknown => {
  return JSON.parse(str);
};


