function sayHi(age) {
    if (age < 12) alert('Hi kid');
   
}
console.log(sayHi); // *undefined
console.log(sayHi(10)); // **Hi kid