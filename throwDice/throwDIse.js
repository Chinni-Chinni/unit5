//SELECTING RANDOM NUMBER FROM 1 TO 6

var firstRandomNum = Math.floor(Math.random()*6)+1;
var secondRandomNum = Math.floor(Math.random()*6)+1;
var thirdRandomNum = Math.floor(Math.random()*6)+1;

//SETTING THE IMAGE
var firstDiceImage = 'dises/dice' + firstRandomNum + '.png';

var secondDiceImage = 'dises/dice' + secondRandomNum + '.png';

var thirdDiceImage = 'dises/dice' + thirdRandomNum + '.png';

//SETIING THE DICE TO THE IMAGE


document.querySelectorAll('img')[0].setAttribute("src",firstDiceImage);

document.querySelectorAll('img')[1].setAttribute("src",secondDiceImage);

document.querySelectorAll('img')[2].setAttribute("src",thirdDiceImage);


///CHECKING WHO IS WINNER OUT OF THREE MEMBERS

if(firstRandomNum>secondRandomNum && firstRandomNum>thirdRandomNum){
    document.querySelector('h1').innerText = "Winner is User1";

}else if(secondRandomNum>firstRandomNum && secondRandomNum > thirdRandomNum){
    document.querySelector("h1").innerText = "Winner is User2"
}
else if(thirdRandomNum>firstRandomNum && thirdRandomNum>secondRandomNum){
    document.querySelector("h1").innerText = "Winner is User3"
 }else if(thirdRandomNum===firstRandomNum){
    document.querySelector("h1").innerText="User1 and User3 are Winners";
}else if(firstRandomNum===secondRandomNum){
    document.querySelector("h1").innerText = "User1 and User2 are Winners";
}
else if(secondRandomNum===thirdRandomNum){
    document.querySelector("h1").innerText = "User2 and User3 are Winners";
}
