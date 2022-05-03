1.Create a database of movies of your choice. Each movie object will have properties like ‘name, release date, poster (add url of a poster), IMDb rating, etc.

Create at least 9 movies object, push all of them as array items. Store the array in local storage with key 'movies'.

Whenever the user visits index.html, show the movies in 3*3 grid ( 3 columns, 3 rows ).


2.  Create ‘Sort by low rating to high, Sort by High rating to low` buttons. Give them "sort-lh" and "sort-hl" as HTML id's respectively.

    When a user clicks on any of the above buttons, he should be able to see to the movies in a sorted fashion depending on their IMDb ratings.


    document.querySelector('form').addEventListener('submit',function(){
event.preventDefault();
var names=document.getElementById('poke').value;
fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res)=>{
        res.json().then((res)=>{
           console.log(res);
        function displaySecond(res){
            var box=document.createElement("div");
            var id1=document.createElement('h3');
            id1.innerText=res.id;
            var name=document.createElement('h3');
            name.innerText=res.name;
            var weight=document.createElement('h3');
            weight.innerText=res.weight;
            var height=document.createElement('h3');
            height.innerText=res.height;
            box.append(name,id1,weight,height);
            document.querySelector("#container").append(box);
        }
        displaySecond(res);
var dummy=pokeData1;
//console.log(pokeData1,"kk")
        function searchMe(names){
              //  console.log(names);
                if(names==''){
                }else{
                    var searchData=dummy.filter(function(mv){
                    if(mv.name.includes(names)){
                        return true;
                    }else{
                        return false;
                    }
                });
                return searchData;
            }
        }
        var searchedData=searchMe(names);
        //displaySecond(searchedData)
    });
});
});









