//Template Strings
function greet (name="Moon Ahmed") {
  console.log("Hello " + name+"!");
  //use backtick keys ``
  console.log(`Hello ${name}!`);
}

greet();
greet("Barry Bonds");

console.log(`1+6=${1+6}`);

console.log(`Hey,

this kindof looks like an email!

- Moon Ahmed
`);

var person = {
  name: 'Joe Schmoe',
  age: 32
};

var defaults = {
  name: 'Anonymous',
  age: 0
}

function greetPerson (person=defaults){
  console.log(`Hi ${person.name}, your age is ${person.age}`);
}

greetPerson();

var dude = {
  name: 'Big Guy',
  age: 64
}
greetPerson(dude);
