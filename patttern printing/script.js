//pattern printing

let output = document.getElementById("output");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let output5 = document.getElementById("output5");
let output6 = document.getElementById("output6");

//output
var i, k, j;
for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    output.innerHTML = output.innerHTML + "* ";
  }

  output.innerHTML = output.innerHTML + "<br />";
}

//output1
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    output1.innerHTML = output1.innerHTML + "* ";
  }

  output1.innerHTML = output1.innerHTML + "<br />";
}

//outpu2
for (let i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    output2.innerHTML = output2.innerHTML + "&nbsp";
  }
  for (j = 1; j <= i; j++) {
    output2.innerHTML = output2.innerHTML + " *";
  }
  output2.innerHTML = output2.innerHTML + "<br/>";
}

//output3
for (let i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    output3.innerHTML = output3.innerHTML + "&nbsp";
  }
  for (j = 1; j <= i; j++) {
    output3.innerHTML = output3.innerHTML + "* &nbsp";
  }
  output3.innerHTML = output3.innerHTML + "<br/>";
}

//output4
for (let i = 5; i >= 1; i--) {
  for (k = 5; k > i; k--) {
    output4.innerHTML = output4.innerHTML + "&nbsp";
  }
  for (j = 1; j <= i; j++) {
    output4.innerHTML = output4.innerHTML + "* &nbsp"; // using non-breaking space for HTML
  }
  output4.innerHTML = output4.innerHTML + "<br/>";
}

//output5
const n = 5;
let str = "";

for (let i = 1; i <= n; i++) {
  let row = "";
  // Add leading spaces to align the stars
  for (let j = 1; j <= n - i; j++) {
    row += "&nbsp"; // using non-breaking space for HTML
  }
  // Add stars for each row
  for (let j = 1; j <= n; j++) {
    row += "*";
  }
  // Add this row to the pattern string with a line break
  str += row + "<br/>";
}
output5.innerHTML = str;

//output6
let strOpposite = "";

// Pattern 6: Inverted right-aligned rectangle of stars
for (let i = n; i >= 1; i--) {
  let row = "";
  // Add leading spaces
  for (let j = 1; j <= n - i; j++) {
    row += "&nbsp"; // non-breaking space for HTML
  }
  // Add stars for each row
  for (let j = 1; j <= n; j++) {
    row += "*";
  }
  // Add this row to the pattern string
  strOpposite += row + "<br/>";
}
output6.innerHTML = strOpposite;
