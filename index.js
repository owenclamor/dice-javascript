var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var randomImage = "dice"+randomNumber1 + ".png";
var randomImage2 = "dice"+randomNumber2 + ".png";

var randomImageSource = "images/" + randomImage;
var randomImageSource2 = "images/" + randomImage2;

document.getElementsByClassName("img1")[0].setAttribute("src", randomImageSource)
document.getElementsByClassName("img2")[0].setAttribute("src", randomImageSource2)


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "It's a tie!"
}






