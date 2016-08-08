//LET Feature ES6 Features
var x = 0;

if(true){
  //only changes value inside block
  let x = 12;
  console.log(x);
}

console.log(x);

for(let i=0;i<3;i++){
  console.log(`for loop i = ${i}`);
}

function genCallBack () {
  let name = "Moon Ahmed";
  return function() {
    console.log(`Hello ${name}`)
  }
}
//console.log(name) name is not available here.
//to use callback
genCallBack()();
