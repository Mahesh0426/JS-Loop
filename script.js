let output = document.getElementById("output");
let output2 = document.getElementById("output2");

//LOOP
// for (start,end){
//
//    }
// for (initializer ; conditions; increment/decrement;){}

for (let i = 0; i <= 10; i++) {
  console.log(i);
  //   output.innerText = output.innerText + 1 ;
}

//WHILE
//  while(condition){block of code}
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
//DO WHILE LOOP
// do{}
// while();

// let a = 0;
// do {
//   console.log(j);
//   j++;
// } while (J <= 5);

//FOR  IN  | FOR OF
//FOR IN ------object iterables  key pairs
//obj deatructuring
const shyam = {
  name: "shyam",
  age: 25,
  addrerss: "sydney",
};
for (let key in shyam) {
  console.log(shyam[key]);
  //   console.log(key);
}

//FOR OF
let grocccery = ["apple", "milk", "chicken"];
for (let groccery_items of grocccery) {
  console.log(groccery_items);
}

let names = "mahesh";
for (let mynane of names) {
  console.log(mynane);
}

//PATTERN PROJECT
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     output.innerHTML = output.innerHTML + "*";
//   }

//   output.innerHTML = output.innerHTML + "<br />";
// }
for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    output.innerHTML = output.innerHTML + "*";
  }

  output.innerHTML = output.innerHTML + "<br />";
}
