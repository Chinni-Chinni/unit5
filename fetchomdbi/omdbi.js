

var container = document.querySelector("#container");

var url = "http://www.omdbapi.com/?i=tt3896198&apikey=76f620fb&s={movie}";
var DATA;

async function getData(){
    try{
        var res = await fetch(url);
        var data = await res.json();

        // console.log(data)
       
        displayData(data.Search)
        DATA = data.Search;

    }catch(err){
        console.log("err" + err);
    }
    function searchMe(searchvalue){
        if(searchvalue==undefined){
            return displayData("PLEASE");
        }
    
    }

}
getData();
// displayData(data.Search);
// Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
// Title: "The Lego Movie"
// Type: "movie"
// Year: "2014"
// imdbID: "tt1490017"

function displayData(data){
    // console.log(data);
    data.forEach(function(movie){
        
        var movieContainer = document.createElement("div");
        movieContainer.setAttribute("class","movieContainer");

        var img = document.createElement("img");
        img.src = movie.Poster;

        var title = document.createElement("h2");
        title.innerText = movie.Title;

        var type = document.createElement("p");
        type.innerText = movie.Type;

        var year = document.createElement("p");
        year.innerText = movie.imdbID;

        movieContainer.append(img,title,type,year);
        container.append(movieContainer);



    })


}




document.querySelector("#searchinput").addEventListener("change",function(){
    var searchedData = document.querySelector("#searchinput").value;
    searchedData = searchMe(searchedData) ;
    displayData(searchedData)
})