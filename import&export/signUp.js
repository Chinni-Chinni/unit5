import navbar from "./navbar.js";
 const navbarContainer = document.querySelector("#navbardiv");
 navbarContainer.innerHTML = navbar();

    document.querySelector("#signBtn").addEventListener("click",signUp);

    let signUpLocalData;
    signUpLocalData = JSON.parse(localStorage.getItem("signupData")) || [];

    function signUp(){
     event.preventDefault()
    let signUpData = {
                 name:document.querySelector("#signName").value,
                 mail:document.querySelector("#signmail").value,
                 password:document.querySelector("#signPassword").value,


             }
             signUpLocalData.push(signUpData);
             localStorage.setItem("signupData",JSON.stringify(signUpLocalData));
             window.location.href = "loginPage.html";

         }
         


