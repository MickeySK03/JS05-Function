<<<<<<< HEAD

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
        isPrime = false;
        break;
    }
}
    if(isPrime) console.log(num);
}

checkPrime(7);
checkPrime(8);
=======
function isPrime(num){
    if(num > 1){
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return "Not prime number"
        }
        return "Prime number"
    } else {
        return "Not prime number"
    }
}

console.log(isPrime(19))
>>>>>>> refs/remotes/origin/main
