// var title = "Elzero",descreption ="Elzero Web School",date = "25/10";
// var card =`<div><h3>Hello${title}</h3><p>${descreption}</p><span>${date}</span><div>`
// document.write(card);
// document.write(card);
// document.write(card);
// document.write(card);
//if condition challenge 38
var a =10;
a<10?console.log(10):a>=10&&a<=40?console.log("10 to 40"):a>40?console.log(">40"):console.log("unKnown");
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

// version1
if (st.toLowerCase()[st.toLocaleLowerCase().indexOf("w")] === "w") {
  console.log("Good")
}
//version2
if (
  st.slice(st.indexOf("W") - 1, st.indexOf("W") + 1)
    .toLowerCase()
    .trim() === "w"
) 
{ console.log("good");}
if (typeof Number(st) !== "string") {
  console.log("Good");
}

if (typeof Number(st) === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

//Array challenge 47 
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Variables zero and counter They change every time

console.log(my.slice(zero,++counter).reverse());
console.log(my.slice(++zero,--counter).sort());
console.log(my[--counter].slice(--zero,counter).concat(my[++zero].slice(counter)));
console.log(my[zero][++counter + zero].concat(my[counter][--zero].toUpperCase()));

