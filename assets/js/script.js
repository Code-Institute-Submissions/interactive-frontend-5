//keeps track of what turn the user is on  
let playerTurn = 1;

//to pass the cards position to the descriptionClick(1)
let counter = 0;

//so that I can access cards info later by index 
let storeRandomCards = [];

//this is to retrive the card info from the array of objects
function descriptionClick(index) {
  const clickedCard = storeRandomCards[index]

  $(".btn-warning").removeClass("d-none")
  $(".game").addClass('col-lg-4');
  $(".col-12").removeClass("d-none");
  document.querySelector(".info").innerHTML = clickedCard.description;
  document.querySelector("#card-name").innerHTML = clickedCard.name;
  document.querySelector(".image").innerHTML = `<img src="${clickedCard.imgPath}" alt="front-card">`
}
 
//returns a random front-card image after the user clicks a back-card
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * cards.length);
    let randomCard = cards[randomNum]; // gets random card from the array 
    storeRandomCards.push(randomCard) 
    cards.splice(cards.indexOf(randomCard), 1) //removes the same card from the array

     return `<img onclick="descriptionClick(${counter})" src="${randomCard.imgPath}" alt="front-card">`
}  

//to get a random front-card displayed to a div when one of the back-cards are clicked 
$(document).ready(function() {
$("img.card-back").on({
  click: function(){
  $(this).fadeOut("slow"),
 //updates the div with a random front-card and changes the styling
 $("#" + playerTurn).html(getRandomCard()).removeClass("card-nr").next().removeClass("card-meaning").addClass("card-meaning2").parent().removeClass("card-container").addClass("card-container2")
    playerTurn++;
    counter++;
    }
  });
});

function backToReading() {
  $(".btn-warning").addClass("d-none")
  $(".game").removeClass("col-lg-4");
  $(".card-info").addClass("d-none");
  $(".card-image").addClass("d-none");
}

