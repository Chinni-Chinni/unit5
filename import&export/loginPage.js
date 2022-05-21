import navbar from "./navbar.js";
 const navbarContainer = document.querySelector("#navbardiv");
 navbarContainer.innerHTML = navbar();

    document.querySelector("#loginBtn").addEventListener("click",logIn);


   let loginData = JSON.parse(localStorage.getItem("signupData")) || [];
   

    function logIn(){
     event.preventDefault()
    let Details = {
                 mail:document.querySelector("#loginmail").value,
                 password:document.querySelector("#loginPassword").value,


             }
             console.log(loginData)
             loginData.forEach(data => {
                 if(data.mail === Details.mail && data.password===Details.password){
                     alert("Login successfully!");
                     localStorage.setItem("logindata",JSON.stringify(Details));
                     window.location.href = "homePage.html";
                 }

                 
             });

         }