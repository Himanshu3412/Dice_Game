
function play(){
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomImage = "dice" + randomNumber1 + ".png";

    var randomImageSource1 = "images/" + randomImage;

    var setLeftImage = document.querySelectorAll("img")[0];

    setLeftImage.setAttribute("src", randomImageSource1);



    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage = "dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomImage;

    var setRightImage = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🎉🚩Player 1 Wins!"
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🎉🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "😔Draw!😔"
    }
}