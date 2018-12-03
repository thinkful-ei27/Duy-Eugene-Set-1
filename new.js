'use strict';
function yearOfBirth(age){
    if(age < 0){
        throw new Error("Age can not be negative");
    }
  return 2016 - age;
}

console.log(yearOfBirth(25));

function createGreeting(name, age) {
  if(typeof age !== "number"){
      throw new TypeError("Not a Number");
  }
  else if(typeof name !== 'string'){
      throw new TypeError("Not a String");
  }
  else{let year = yearOfBirth(age);
  return `Hi my name is ${name} and I was born in ${year}`;
 }
}
try {
const greeting1 = createGreeting('John', 29);
console.log(greeting1);
} 
catch (e){
    console.log("NOOO");
    console.log(e);
}
