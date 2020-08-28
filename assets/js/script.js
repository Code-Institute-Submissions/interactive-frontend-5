/*-----------------------THE TAROT GAME & CARDS DESCRIPTIONS------------------*/

//keeps track of what turn the user is on  
let playerTurn = 1;

//to pass the cards position to the descriptionClick(1)
let counter = 0;

//so that I can access cards info later by index 
let storeRandomCards = [];

//this is to retrive the card info from the array of objects by index
function descriptionClick(index) {
  const clickedCard = storeRandomCards[index]
  //when the user clicks on a card the description & its image gets displayed like this: 
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

/*------------------------BACK TO READING BUTTON---------------------*/

//takes the user back to only display the reading 
function backToReading() {
  $(".btn-warning").addClass("d-none");
  $(".game").removeClass("col-lg-4");
  $(".card-info").addClass("d-none");
  $(".card-image").addClass("d-none");
}

/*----------------------CHANGE GAME BUTTON---------------------*/

//"The Diamond" game. 
$(document).ready(function() {
    $(".the-diamond").click(function(){
    $(".column").hide()//hides all card containers so that each new game is reset
    $(".diamond").show()//shows the cards positions of the Diamond game

    $('.card-nr').removeAttr('id')
    
    /*$("#2").html("1").next().html("1.THE THEME")
    $("#1").html("2").next().html("2.UNCONCIOUS INTERNAL INFLUENCE") 
    $("#6").html("3").next().html("3.CONCIOUS EXTERNAL INFLUENCE")
    $("#3").html("4").next().html("4.WHAT IS NEEDED FOR A SOLUTION")
    $("#4").html("5").next().html("5.THE SOLUTION: UNDERSTANDING")*/

    $(".diamond1").attr("id","1");
    $(".diamond2").attr("id","2");
    $(".diamond3").attr("id","3");
    $(".diamond4").attr("id","4");
    $(".diamond5").attr("id","5");
  });
});

//"The Key game". 
$(document).ready(function() {
    $(".the-key").click(function(){
    $(".column").hide()
    $(".k").show()
    $(".key-hide").removeClass("hidden-card")
    $(".key-hide2").addClass("hidden-card")
  });
});

/*----------------------- CONTACT POP-UP MODAL------------------*/

//pops-up the modal and its background
function popModal() {
  $(".pop-bg").removeClass("d-none");
}

//closes the modal and its background
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


 /*-------------------------SEND EMAILJS---------------------*/

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


 /*-----------------VALIDATION CODE FOR CHECKING INPUT ON CONTACT MODAL-------------*/

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
