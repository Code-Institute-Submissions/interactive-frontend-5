let frontCard = [ 
    '<img src="assets/images/Abundance-name.jpg" alt="card-front">',
    '<img src="assets/images/Adventure-name.jpg" alt="card-front">',
    '<img src="assets/images/Aloneness-name.jpg" alt="card-front">',
    '<img src="assets/images/Awareness-name.jpg" alt="card-front">',
    '<img src="assets/images/BeyondIllusion-name.jpg" alt="card-front">',
    '<img src="assets/images/Breakthrough-name.jpg" alt="card-front">',
    '<img src="assets/images/Celebration-name.jpg" alt="card-front">',
    '<img src="assets/images/Change-name.jpg" alt="card-front">',
    '<img src="assets/images/ClingingToThePast-name.jpg" alt="card-front">',
    '<img src="assets/images/Comparison-name.jpg" alt="card-front">',
    '<img src="assets/images/Completion-name.jpg" alt="card-front">',
    '<img src="assets/images/Compromise-name.jpg" alt="card-front">',
    '<img src="assets/images/Conditioning-name.jpg" alt="card-front">',
    '<img src="assets/images/Consciousness-name.jpg" alt="card-front">',
    '<img src="assets/images/Control-name.jpg" alt="card-front">',
    '<img src="assets/images/Courage-name.jpg" alt="card-front">',
    '<img src="assets/images/Creativity-name.jpg" alt="card-front">',
    '<img src="assets/images/Exhaustion-name.jpg" alt="card-front">',
    '<img src="assets/images/Existence-name.jpg" alt="card-front">',
    '<img src="assets/images/Experiencing-name.jpg" alt="card-front">',
    '<img src="assets/images/Fighting-name.jpg" alt="card-front">',
    '<img src="assets/images/Flowering-name.jpg" alt="card-front">',
    '<img src="assets/images/Friendliness-name.jpg" alt="card-front">',
    '<img src="assets/images/GoingWithTheFlow-name.jpg" alt="card-front">',
    '<img src="assets/images/Guidance-name.jpg" alt="card-front">',
    '<img src="assets/images/Guilt-name.jpg" alt="card-front">',
    '<img src="assets/images/Harmony-name.jpg" alt="card-front">',
    '<img src="assets/images/Healing-name.jpg" alt="card-front">',
    '<img src="assets/images/Ice-olation-name.jpg" alt="card-front">',
    '<img src="assets/images/InnerVoice-name.jpg" alt="card-front">',
    '<img src="assets/images/Innocence-name.jpg" alt="card-front">',
    '<img src="assets/images/Integration-name.jpg" alt="card-front">',
    '<img src="assets/images/Intensity-name.jpg" alt="card-front">',
    '<img src="assets/images/Laziness-name.jpg" alt="card-front">',
    '<img src="assets/images/LettingGo-name.jpg" alt="card-front">',
    '<img src="assets/images/Maturity-name.jpg" alt="card-front">',
    '<img src="assets/images/Mind-name.jpg" alt="card-front">',
    '<img src="assets/images/MomentToMoment-name.jpg" alt="card-front">',
    '<img src="assets/images/Morality-name.jpg" alt="card-front">',
    '<img src="assets/images/NewVision-name.jpg" alt="card-front">',
    '<img src="assets/images/No-Thingness-name.jpg" alt="card-front">',
    '<img src="assets/images/Ordinariness-name.jpg" alt="card-front">',
    '<img src="assets/images/Participation-name.jpg" alt="card-front">',
    '<img src="assets/images/PastLives-name.jpg" alt="card-front">',
    '<img src="assets/images/Patience-name.jpg"  alt="card-front">',
    '<img src="assets/images/Playfulness-name.jpg" alt="card-front">',
    '<img src="assets/images/Politics-name.jpg" alt="card-front">',
    '<img src="assets/images/Possibilities-name.jpg"  alt="card-front">',
    '<img src="assets/images/Postponement-name.jpg" alt="card-front">',
    '<img src="assets/images/Projections-name.jpg" alt="card-front">',
    '<img src="assets/images/Rebirth-name.jpg"  alt="card-front">',
    '<img src="assets/images/Receptivity-name.jpg" alt="card-front">', 
    '<img src="assets/images/Ripeness-name.jpg" alt="card-front">',
    '<img src="assets/images/Schizophrenia-name.jpg" alt="card-front">',
    '<img src="assets/images/Sharing-name.jpg" alt="card-front">',
    '<img src="assets/images/Silence-name.jpg" alt="card-front">',
    '<img src="assets/images/SlowingDown-name.jpg" alt="card-front">',
    '<img src="assets/images/Sorrow-name.jpg" alt="card-front">',
    '<img src="assets/images/Stress-name.jpg" alt="card-front">',
    '<img src="assets/images/Success-name.jpg" alt="card-front">',
    '<img src="assets/images/Suppression-name.jpg" alt="card-front">',
    '<img src="assets/images/TheBurden-name.jpg" alt="card-front">',
    '<img src="assets/images/TheCreator-name.jpg" alt="card-front">',
    '<img src="assets/images/TheDream-name.jpg" alt="card-front">', 
    '<img src="assets/images/TheFool-name.jpg" alt="card-front">', 
    '<img src="assets/images/TheLovers-name.jpg" alt="card-front">',
    '<img src="assets/images/TheMaster-name.jpg" alt="card-front">', 
    '<img src="assets/images/TheMiser-name.jpg" alt="card-front">',
    '<img src="assets/images/TheOutsider-name.jpg" alt="card-front">', 
    '<img src="assets/images/TheRebel-name.jpg" alt="card-front">', 
    '<img src="assets/images/TheSource-name.jpg" alt="card-front">',
    '<img src="assets/images/Thunderbolt-name.jpg" alt="card-front">',
    '<img src="assets/images/Totality-name.jpg" alt="card-front">',
    '<img src="assets/images/Transformation-name.jpg" alt="card-front">',
    '<img src="assets/images/Traveling-name.jpg" alt="card-front">',
    '<img src="assets/images/Trust-name.jpg" alt="card-front">',
    '<img src="assets/images/TurningIn-name.jpg" alt="card-front">',
    '<img src="assets/images/Understanding-name.jpg" alt="card-front">',
    '<img src="assets/images/WeAreTheWorld-name.jpg" alt="card-front">'
    ];

//returns a random front-card image from frontCard array and then removes it
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * frontCard.length);
    let randomCard = frontCard[randomNum]; // gets random card from the array
    frontCard.splice(frontCard.indexOf(frontCard[randomNum]), 1) //removes the same card from the array
    return randomCard;
}
    
//keeps track of what turn the user is on when a card is clicked 
let playerTurn = 1;

//updates the div with a random front-card image after a back-card image is clicked
$(document).ready(function() {
    $("img.card-back").on({
    click: function(){
        $(this).fadeOut("slow"),
    $("#" + playerTurn).html(getRandomCard()).removeClass("card-nr").next().removeClass("card-meaning").addClass("card-meaning2").parent().removeClass("card-container").addClass("card-container2")
        playerTurn++;
    }
  });
});
   

//keeps track of what turn the user is on  
let playerTurn = 1;

//to pass the cards position to the descriptionClick(1)
let counter = 0;

//so that I can access cards info later by index 
let storeRandomCards = [];

//this is to retrive the card info from the object array 
function descriptionClick(index) {
  const clickedCard = storeRandomCards[index]
  console.log(clickedCard.name)
  console.log(clickedCard.description)
  console.log(clickedCard.imgPath)
  document.querySelector("#info").innerHTML = clickedCard.description;
  document.querySelector("#image").innerHTML = `<img src="${clickedCard.imgPath}">`
}
 
//returns a random front-card image after the user clicks a back-card
 function getRandomCard() {
    let randomNum = Math.floor(Math.random() * cards.length);
    let randomCard = cards[randomNum]; // gets random card from the array 
    storeRandomCards.push(randomCard) 
    cards.splice(cards.indexOf(randomCard), 1) //removes the same card from the array

     return `<img onclick="descriptionClick(${counter})" src="${randomCard.imgPath}" />`
}  

//to get a random front-card displayed to a div when one of the back-cards are clicked 
$(document).ready(function() {
$("img.back").on({
  click: function(){
  $(this).fadeOut("slow"),
 //updates the div with a random front-card and changes the styling
 $("#" + playerTurn).html(getRandomCard()).removeClass("card-nr").next().removeClass("card-meaning").addClass("card-meaning2")
    playerTurn++;
    counter++;
    }
  });
});
  