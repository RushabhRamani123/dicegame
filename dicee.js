var randomnumber1 = Math.floor(Math.random() * 6) + 1;  
var imagename = "images/dice" + randomnumber1 + ".png"
var image1 = document.querySelectorAll("img")[0]; 
image1.setAttribute("src", imagename); 

var randomnumber2 = Math.floor(Math.random() * 6) + 1; 
var imagename2 = "images/dice" + randomnumber2 + ".png"
var image2 = document.querySelectorAll("img")[1]; 
image2.setAttribute("src", imagename2); 
if (randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player One Wins";
}
else if(randomnumber1 == randomnumber2)
{
    document.querySelector("h1").innerHTML = "Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player Two Wins";
}