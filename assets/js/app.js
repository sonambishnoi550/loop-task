let table = 7;
let result = "";
for (let i = 1; i <= 10; i++){
    result += table + "*" + i + "=" + table * i + "<br>";
}
document.getElementById("for loop").innerHTML = result;

let add = 2;
let answer = "";
let b = 1;
while (b <= 10) {
    answer += add + "+" + b + "=" + (add + b) + "<br>";
    b++;
}
document.getElementById("while loop").innerHTML = answer;

let subtract = 15;
let g = "";
let s = 3;
do {
    g += subtract + "-" + s + "=" + (subtract - s) + "<br>";
    s++;
} while (s <10);

document.getElementById("do while loop").innerHTML = g;