//shorthand
//1.ใช้ if แต่ห้ามใช้ else
function newCheckAge(age) {
    if (age > 18) {return true;} 
    {return confirm("Did parents allow you?");}}

console.log(newCheckAge(20));
console.log(newCheckAge(15));


//2.ใช้ ? แทน if #####Conditional (ternary) operator#######
function ternaryCheckAge(age) {
    return age>18 ? true:confirm("Did parents allow you?");}

console.log(ternaryCheckAge(20));
console.log(ternaryCheckAge(15));

//3.ใช้ || แทน if
function orCheckAge(age){
    age>18 || confirm("Did parents allow you?");
}
console.log(ternaryCheckAge(20));
console.log(ternaryCheckAge(15));