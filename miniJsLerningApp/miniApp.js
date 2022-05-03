
 var mainScop={
    scope:["Variable names can consist only of letters (a-z), numbers (0-9), dollar sign symbols ($), and underscores (_)",
        "Variable names cannot contain any whitespace characters (tabs or spaces)",
        "Numbers cannot begin the name of any variable",
        "There are several reserved keywords which cannot be used as the name of a variable",
        "Variable names are case sensitive"
    ]
}
   localStorage.setItem('scope',JSON.stringify(mainScop));

var mainHoist={
    hoist:[
        "Eliminates some silent JavaScript errors by changing them to explicit throw errors which will be spit out by the interpreter.",
        "Fixes mistakes that make it difficult for JavaScript engines to perform optimisations.",
        "Prohibits some syntax likely to be defined in future versions of JavaScript."
    ]
}
localStorage.setItem('hoisting',JSON.stringify(mainHoist));

var mainConstroctor={
    constroctor:[
        "The examples from the previous chapters are limited. They only create single objects.",
        "Sometimes we need a blueprint for creating many objects of the same type .",

        "The way to create an object type, is to use an object constructor function.",

        "In the example above, function Person() is an object constructor function.",

        "Objects of the same type are created by calling the constructor function with the new keyword:",
    ]
}
localStorage.setItem('constroctor',JSON.stringify(mainConstroctor));

var mainPrototype={
prototype: [
"it looks for toString in myObject",
"can't find it there, so looks in the prototype object of myObject for toString",
"finds it there, and calls it.",
]

}
localStorage.setItem('prototype',JSON.stringify(mainPrototype));

//Scope
document.querySelector('#scope').addEventListener('click',function(){
event.preventDefault();
document.querySelector('#container').innerHTML="";
var scope=JSON.parse(localStorage.getItem('scope'));
var data=scope.scope;
for(var i=0; i<data.length; i++){
var ul=document.createElement('ul');
var p=document.createElement('li');
var video=document.createElement('iframe');
video.setAttribute('class','videotag');
video.controls = true;

video.src="https://www.youtube.com/embed/bD-62OMzni0";
//<iframe width="560" height="315" src="https://www.youtube.com/embed/bD-62OMzni0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
p.innerText=data[i];
ul.append(p);
document.querySelector('#container').append(ul);
}
document.querySelector('#container').append(video);
});

//Hoisting
document.querySelector('#hoisting').addEventListener('click',function(){
event.preventDefault();
document.querySelector('#container').innerHTML="";
var hoisting=JSON.parse(localStorage.getItem('hoisting'));
var data=hoisting.hoist;
console.log()
for(var i=0; i<data.length; i++){
var ul=document.createElement('ul');
var p=document.createElement('li');
p.innerText=data[i];
var video=document.createElement('iframe');
video.setAttribute('class','videotag');
video.controls = true;
video.src="https://www.youtube.com/embed/Fnlnw8uY6jo";
ul.append(p);
document.querySelector('#container').append(ul);
}
document.querySelector('#container').append(video);

});

//Constroctor Function
document.querySelector('#constructor').addEventListener('click',function(){
event.preventDefault();
document.querySelector('#container').innerHTML="";
var text=JSON.parse(localStorage.getItem('constroctor'));
var data=text.constroctor;
console.log()
for(var i=0; i<data.length; i++){
var ul=document.createElement('ul');
var p=document.createElement('li');
p.innerText=data[i];
var video=document.createElement('iframe');
video.setAttribute('class','videotag');
video.controls = true;
video.src="https://www.youtube.com/embed/23AOrSN-wmI";
ul.append(p);
document.querySelector('#container').append(ul);
}
document.querySelector('#container').append(video);

});

document.querySelector('#prototype').addEventListener('click',function(){
event.preventDefault();
document.querySelector('#container').innerHTML="";
var text=JSON.parse(localStorage.getItem('prototype'));
var data=text.prototype;

for(var i=0; i<data.length; i++){
var ul=document.createElement('ul');
var p=document.createElement('li');
p.innerText=data[i];
var video=document.createElement('iframe');
video.setAttribute('class','videotag');
video.controls = true;
video.src="https://www.youtube.com/embed/fvmMxMGUEnQ";
ul.append(p);
document.querySelector('#container').append(ul);
}
document.querySelector('#container').append(video);

});
 