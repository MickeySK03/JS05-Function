
//design FN
//1-input ? => umber ที่ใช้เช็ค
//2-logic implement ?
//3-output ? => boolean true,false
//number => bool
let num;
function checkPrime(num) {
    let isPrime = true;
    for(let divider = 2; divider <num; divider++) {
        if(num% divider ==0) {
            console.log(`${num} is not a prime number`);
        return isPrime = false;
    }
}
    if(isPrime = true) console.log(`${num} is prime number`);
}

checkPrime(7);
checkPrime(8);
checkPrime(9);
checkPrime(11);


// function isPrime(num){
//     if(num > 1){
//         for(let i=2; i<=Math.sqrt(num); i++){
//             if(num%i===0) return "Not prime number"
//         }
//         return "Prime number"
//     } else {
//         return "Not prime number"
//     }
// }

// console.log(isPrime(19))
