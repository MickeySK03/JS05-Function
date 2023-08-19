function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi); // *undefined เพราะ no input parameter
  console.log(sayHi(10)); // **alert Hi 10 เพราะสำหรับjavascriptถ้ามีชื่อฟังก์ชั่นซ้ำกัน ฟังก์ชั่นก่อนหน้าจะถูกเขียนทับด้วยฟังก์ชั่นล่าสุด

function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); // ***alert Hi John
  console.log(sayHi()); // ****ในlog แสดงข้อความ who are you เพราะfunctionกำหนดว่าถ้าไม่มีค่าparameter ให้returnค่าwho are you