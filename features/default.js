//FUNCTION DEFAULTS FEATURE ES2015
function sayHello (name = 'world') {

  console.log("Hello " + name + "!");
}
sayHello();
sayHello('Bob barker')
//Running Babel es2015 defaults for defaults in function args.
//babel-node default.js --presets es2015
//function expects user to take an object argument that sets
//default name
function greetUser(user = {name:'Anonymous'}){
  console.log("Hello "+ user.name + "!");
}
greetUser();
greetUser({name:"John"});
