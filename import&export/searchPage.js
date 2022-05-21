
 import navbar from "./navbar.js";
 const navbarContainer = document.querySelector("#navbardiv");
 navbarContainer.innerHTML = navbar();



const container = document.querySelector("#container");
    
  const Searchmain = async()=>{
       try{
           let  data = await searchPage();
           if(!data){
               return false;
           }
           
       }catch(err){
       
           console.log(err);
       }
   }
   
   const searchPage = async ()=>{
    
    const searchedValue = document.querySelector("#search").value;
    
         try{
            
             
             const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`;
             const res = await fetch(url);
             const data = await res.json();
             displayFun(data);
         }catch(err){
           
            console.log(err);

         }

     }
    

    const displayFun = (meals)=>{
        
        document.querySelector("#container1").innerText = ""
        if(meals.meals==null){
            const erroDiv = document.createElement("div");
            const error = document.createElement("img");
            error.src = "https://img.myloview.com/stickers/no-food-no-drink-allowed-do-not-eat-drinking-eating-banned-prohibited-noticewarning-sign-vector-illustration-eps-700-236799696.jpg";
            erroDiv.append(error);
            document.querySelector("#container1").append(erroDiv);
        }
        document.querySelector("#container").innerText = "";
        console.log(meals)
        meals.meals.forEach(element => {
        const foodDiv = document.createElement("div");

        const strMeal = document.createElement("h2");
        strMeal.innerText = element.strMeal;

        const strMealThumb = document.createElement("img");
        strMealThumb.src = element.strMealThumb;

        const id = document.createElement("p");
        id.innerText = element.idMeal;

        foodDiv.append(strMealThumb,strMeal,id);
        document.querySelector("#container").append(foodDiv);

         
        });



    }
 
    function debounce(fun,delay){
        var timerId;
        
        return  function (e){
            if(timerId){
            clearTimeout(timerId)

        }
        timerId = setTimeout(function(){
            fun(e);

        },delay);
    }
    }

    const homePage = async ()=>{
        
             try{
                
                 
                 const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
                 const res = await fetch(url);
                 const data = await res.json();
                 console.log(data);
                 displayFun(data);
             }catch(err){
               
                console.log(err);
    
             }
    
         }
         homePage();

    document.querySelector("#search").addEventListener('input',debounce(Searchmain,1000));

