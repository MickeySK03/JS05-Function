// function soundOfBird() {    
//     console.log('เสียง นกกรงหัวจุกมันริก');
//     console.log('จุก');
//     console.log('กวิก กวิก กวิก');
// }
// soundOfBird();
// soundOfBird();
// soundOfBird();


// function isPrime() {
//     let n=11;
//     let isPrime = true; //flag
//     for(let divider = 2; divider <n; divider++) {
//         //divider 2,3,4,5,...,n-1
//         if(n% divider ==0) {
//         isPrime = false;
//         break;
// }
// }
// }
// if(isPrime = true) console.log(isPrime);




//review
//#1 function declration
function add(x,y) {
    return x+y;
}
//#2 FN Expression
const minus = function (x,y) {
    return x+y;
}
//#3 FN Express
    const mutiply = (x,y) => x*y;
    const log = console.log;

    log(add(5,2));

    //#######OBJECT########

    const user = {
        name: 'John',
        age: 33,
        isMarried:false,
        address:{
            village:'Lada Land',
            province:'Chiang Mai',
        },
    };

    //GET-DATA
    log(user.name);
    log(user('name'));

    let a = 'name';
    log(user.a); //วิ่งไปหาkey a =>undefined
    log(user[a]); //user['name] => John
    //Note: เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน[]

    //DELETE
    delete user.isMarried;
    log(user);
    delete user['age'];
    log(user);

    let b = 'address';
    delete user[b];
    log(user);

    //Update
    let x = 5;
    x = x + 2;
    x += 2;
    //container = value+2

    user.age = user.age + 1;
    user.age += 1;
    log(user.village);
    //container = value + 1
