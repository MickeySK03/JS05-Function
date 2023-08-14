<<<<<<< HEAD
let userName = prompt("Enter username");
let passWord = prompt("Enter password");

function logIn(userName,passWord){
    if(userName==='admin'&&passWord==='P@ssw0rd'){
        alert("Login success");}
    else {
        alert("Invalid username or password");
    }
    
}

logIn(userName,passWord);
logIn('admin','P@ssw0rd');
=======
function login(username,password){
    if(username === "admin" && password == "P@ssw0rd") alert("Success")
    else alert("Fail")
}

login("admin", "P@ssw0rd")
>>>>>>> refs/remotes/origin/main
