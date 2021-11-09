

const regArea = document.getElementById("register");
const logArea = document.getElementById("login");
const checkbox = document.getElementById("checkbox");
const regisbtn = document.getElementById("regisbtn");



     ////////////
///////REGISTER//////
     ////////////



//STORING REGISTRATION DATA
const user = {
    email: "",
    pass: ""
};

//FUNCTION THAT TAKES INPUTS DATA AND PUTS IT INTO THE USER OBJECT
function addToUser() {
    user.email = document.getElementById("Registeremail").value;
    user.pass = document.getElementById("Registerpassword").value;
    if (user.email !== "" && user.pass !== "" && checkbox.checked) {
        alert("Cadastro realizado com sucesso")
        regArea.style.display = "none";
        logArea.style.display = "block";
    }
    else {
        alert("Preencha todos os campos")
    }
};
regisbtn.addEventListener('click', addToUser)



      /////////////
/////////LOGIN/////////
      ////////////

const logbtn = document.getElementById("logbtn");
const loginuser = {
    loginEmail: "",
    loginPass: ""
};

function logUser() {
    loginuser.loginEmail = document.getElementById("loginemail").value;
    loginuser.loginPass = document.getElementById("loginpassword").value;

    if (loginuser.loginEmail === user.email && loginuser.loginPass === user.pass) {
        alert("Login realizado com sucesso!")
    }
    else if(loginuser.loginEmail === "" || loginuser.loginPass === ""){
        alert("Preencha todos os campos")
    }
    else {
        alert("Credencias incorretas")
    }
}
logbtn.addEventListener('click', logUser)


