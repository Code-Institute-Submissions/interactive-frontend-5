/*-----------------The Tarot game & The cards descriptions-------------*/

//keeps track of what turn the user is on  
let playerTurn = 1;

//to pass the cards position to the descriptionClick(1)
let counter = 0;

//so that I can access cards info later by index 
let storeRandomCards = [];

//this is to retrive the card info from the array of objects by index
function descriptionClick(index) {
  const clickedCard = storeRandomCards[index]
  //when the user clicks on a card this gets displayed: 
  $(".btn-warning").removeClass("d-none")
  $(".game").addClass('col-lg-4');
  $(".col-12").removeClass("d-none");
  document.querySelector(".info").innerHTML = clickedCard.description; //gets the clicked card's descripton
  document.querySelector("#card-name").innerHTML = clickedCard.name;  //gets the clicked card's name
  document.querySelector(".image").innerHTML = `<img src="${clickedCard.imgPath}" alt="front-card">` //gets the clicked card's image
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

/*-----------------Back to Reading button-------------*/

//takes the user back to only display the reading 
function backToReading() {
  $(".btn-warning").addClass("d-none");
  $(".game").removeClass("col-lg-4");
  $(".card-info").addClass("d-none");
  $(".card-image").addClass("d-none");
}

/*-----------------Change Game button-------------*/

//when the user clicks on "The Diamond" link, the cards position are displayed like this:
$(document).ready(function() {
    $(".the-diamond").click(function(){
    $(".5, .8,  .10").addClass("d-none") 
  });
});

/*-----------------Contact button for pop-up Modal-------------*/

//pops-up the modal
function popModal() {
  $(".pop-bg").removeClass("d-none");
}

//closes the modal
function exit() {
  $(".pop-bg").addClass("d-none");
}

//gets the modal and its background
var popUp = document.querySelector(".pop-bg");

addEventListener("click", windowClick);

//closes the modal when user clicks outside
function windowClick(e) {
  if(e.target == popUp) { 
     $(".pop-bg").addClass("d-none");
    }
 }


 /*-----------------Send EmailJS-------------*/

 function sendEmail() {
    //a "Sending..." message when the user waits for the message to get loaded & sent
    $("#success").addClass("sent-message"); 
    $("#success").css("background-color", "orange").html("Sending...");

    emailjs.send("gmail", "template_TKAjL7PE", { 
    "from_name": document.querySelector("#name").value,
    "message_html": document.querySelector("#message").value,
    "from_email": document.querySelector("#email").value
})
    .then(
        function(response) {
            //conifirms that the user's message has been sent
           $("#success").css("background-color", "blue").html("Your message was sent successfully!");
           console.log("SUCCESS", response);
        },
        function(error) {
           $("#success").css("background-color", "blue").html("Failed to send message. Try again later!");
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


 /*-----------------Validation for the contact form for checking RegEx-------------*/

function checkRegEx() {
  
  //gets the user input from the form fields
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;

  var emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameRegex = /[a-z]/gmi;

  if (nameRegex.test(name)) {
    $("#valid-name").addClass("validation").css("background-color", "green").html("Correct name");
  } else {
    $("#valid-name").addClass("validation").css("background-color", "red").html("Wrong name");
  }

    if (emailRegex.test(email)) {
    $("#valid-email").addClass("validation").css("background-color", "green").html("Correct email");
  } else {
    $("#valid-email").addClass("validation").css("background-color", "red").html("Wrong email");
  }
      
  if (message.length > 10 ) {
    $("#valid-message").addClass("validation").css("background-color", "green").html("Correct message");
  } else {
    $("#valid-message").addClass("validation").css("background-color", "red").html("Wrong message");
  } 

  if (nameRegex.test(name) && emailRegex.test(email) && (message.length > 10)) {
    $("#success").removeClass("d-none");
    sendEmail(); 
  } else {
    $("#success").addClass("d-none");
  }  

}
