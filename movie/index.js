var images = [
    "https://archive.gulte.com/content/2020/03/photos/movies/30-Rojullo-Preminchatam-Ela-Latest-Stills/30-Rojullo-Preminchatam-Ela-Latest-Stills.jpg",
    "https://imgcdn.ragalahari.com/jan2022/designs/ranga-ranga-vaibhavanga-posters/ranga-ranga-vaibhavanga-posters1t.jpg",
    "https://i1.behindwoods.com/telugu-movies/chal-mohan-ranga/thumbnails/related-section-image-chal-mohan-ranga-6.jpg",
];

var container = document.querySelector("#container");

function start(){
    var count = 0;
    setInterval(function(){
        container.innerHTML = null;
        if(count===images.length){
            count = 0;
        }
        var box = document.createElement("div");
        box.setAttribute("id","box");
        var img = document.createElement("img");
        img.src = images[count];
        box.append(img)
        container.append(box);
        count++;
    },1500)
    
}

start();