/*-----------------------THE DEFAULT TAROT GAME(THE CELTIC CROSS) & CARDS DESCRIPTIONS------------------*/

//to keep track of what turn the user is on  
let playerTurn = 1;

//to pass the cards position to the descriptionClick(1)
let counter = 0;

//so that I can access cards info later by index 
let storeRandomCards = [];

//this is to retrive the card info from the array of objects by index
function descriptionClick(index) {
  const clickedCard = storeRandomCards[index]
  $(".btn-warning").removeClass("d-none")//to show back to reading button
  $(".game").addClass('col-lg-4'); 
  $(".col-12").removeClass("d-none"); // adds new cols for card image and description 
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
 //to update the div with a random front-card and change the styling
 $("#" + playerTurn).html(getRandomCard()).removeClass("card-nr").next().removeClass("card-meaning").addClass("card-meaning2").parent().removeClass("card-container").addClass("card-container2")
    playerTurn++;
    counter++;
    }
  });
});

/*------------------------BACK TO READING BUTTON---------------------*/

//for taking the user back to only see the reading 
function backToReading() {
  $(".btn-warning").addClass("d-none");
  $(".game").removeClass("col-lg-4");
  $(".card-info").addClass("d-none");
  $(".card-image").addClass("d-none");
}

/*----------------------CHANGE GAME BUTTON---------------------*/

//to reset each game
function resetGame() {
    counter = 0
    playerTurn = 1
    storeRandomCards = [];
   $(".card-container2").addClass("card-container").removeClass("card-container2")
   $(".card-meaning2").addClass("card-meaning").removeClass("card-meaning2").prev().addClass("card-nr")
   $('img:hidden').show();
}


//To reset "The Celtic Cross" default game by reloading the page
$(document).ready(function() {
    $(".celtic-cross").click(function() {
        location.reload()  
    });
})

//"THE DIAMOND" GAME 
$(document).ready(function() {
    $(".the-diamond").click(function() {
    resetGame()
    $(".column").hide()//hides all card containers
    $(".diamond").show()//shows the cards containers for "The Diamond" game
    
    //to give new nr id to card containers 
    $('.card-nr').removeAttr('id')
    $(".diamond1").attr("id","1"); 
    $(".diamond2").attr("id","2");
    $(".diamond3").attr("id","3");
    $(".diamond4").attr("id","4");
    $(".diamond5").attr("id","5");
    
    //to give new meaning to card containers
    $("#1").html("1").next().html("1.THE THEME")
    $("#2").html("2").next().html("2.UNCONCIOUS INTERNAL INFLUENCE") 
    $("#3").html("3").next().html("3.CONCIOUS EXTERNAL INFLUENCE")
    $("#4").html("4").next().html("4.WHAT IS NEEDED FOR A SOLUTION")
    $("#5").html("5").next().html("5.THE SOLUTION: UNDERSTANDING")
  })
});

//"THE KEY" GAME
$(document).ready(function() {
    $(".the-key").click(function(){
    resetGame()
    $(".column").hide()//hides all card containers
    $(".key").show().children().removeClass("hidden-card")//shows the cards containers for "The Key" game
    $(".hidekey").addClass("hidden-card")

    //to give new nr id to card containers
    $('.card-nr').removeAttr('id')
    $(".key1").attr("id","1"); 
    $(".key2").attr("id","2");
    $(".key3").attr("id","3");
    $(".key4").attr("id","4");
    $(".key5").attr("id","5");
    $(".key6").attr("id","6");
    $(".key7").attr("id","7");
    $(".key8").attr("id","8");

    //to give new meaning to card containers
    $("#1").html("1").next().html("1.WHAT IS REPRESSED")
    $("#2").html("2").next().html("2.YING, YOUR FEMININE (PASSIVE) ASPECT") 
    $("#3").html("3").next().html("3.YANG, YOUR MASCULINE (ACTIVE) ASPECT")
    $("#4").html("4").next().html("4.MEDITATION")
    $("#5").html("5").next().html("5.INNER VISION REGARDING THE BODY")
    $("#6").html("6").next().html("6.INNER VISION REGARDING THE HEART")
    $("#7").html("7").next().html("7.INNER VISION REGARDING THE BEING")
    $("#8").html("8").next().html("8.AWARNESS (UNDERSTANDING)")
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


 /*-------------------------SEND EMAIL JS---------------------*/

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
  
  //to get the user input from the form fields
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
