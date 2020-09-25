/*-----------------------THE DEFAULT TAROT GAME(THE CELTIC CROSS) & CARDS DESCRIPTIONS------------------*/

//copies the cards array in data.js
let cardsCopy = [].concat(cards);

//to keep track of what turn the user is on
let playerTurn = 1;

//to pass the cards position to the descriptionClick(counter)
let counter = 0;

//so that I can access cards info later by index
let storeRandomCards = [];

//for checking when the user clicks the "All Cards" link to later put back the 
//click event on the back cards. Because when clicking the "All Cards" link
//the click event gets removed on the back cards. 
let selectedGame;

//when clicking the front cards to view description
function descriptionClick(index) { //this is to retrive the card info from the cards array by index
    const clickedCard = storeRandomCards[index];
    $(".btn-light").removeClass("d-none"); //to show back to reading button
    $(".game").addClass("col-xl-4");
    $(".col-12").removeClass("d-none"); // adds new cols for card image and description
    //for making the other empty card-containers & their meanings smaller 
    $(".card-container").addClass("card-container2");
    $(".card-meaning").addClass("card-meaning2");
    document.querySelector(".info").innerHTML = clickedCard.description;
    document.querySelector("#card-name").innerHTML = clickedCard.name;
    document.querySelector(".image").innerHTML = `<img src="${clickedCard.imgPath}" alt="front-card">`;
}

//for selecting a random card from the array
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * cardsCopy.length);
  let randomCard = cardsCopy[randomNum]; // gets random card from the array
  storeRandomCards.push(randomCard); //so the selected cards info can be accessed later with the descriptionClick(counter)
  cardsCopy.splice(cardsCopy.indexOf(randomCard), 1); //removes the same card from the array

  return `<img onclick="descriptionClick(${counter})" src="${randomCard.imgPath}" alt="front-card">`;
}

//for playing a sound when cards are selected
let mySound = document.getElementById("bounce");

function playSound() {
  mySound.play();
}

function clickBackCards() { 
  //when one of the back-cards are clicked
  $("img.card-back").on({
    click: function () {
        $(this).fadeOut("slow"),
        //to update the div with a random front-card and change the styling
        $("#" + playerTurn).html(getRandomCard()).css({"border": "4px solid black", "background": "black"});
            playerTurn++;
            counter++;
        playSound();
        }
    });
}

$(document).ready(function () {
    clickBackCards()
 });


/*------------------------BACK TO READING BUTTON---------------------*/

//for taking the user back to only see the reading
function backToReading() {
    $(".btn-light").addClass("d-none"); 
    $(".game").removeClass("col-xl-4");
    $(".card-info").addClass("d-none"); 
    $(".image").addClass("d-none");
    $(".card-container").removeClass("card-container2");
    $(".card-meaning").removeClass("card-meaning2");
}

/*----------------------CHANGE SPREAD BUTTON---------------------*/

//to reset each game/spread
function resetGame() {
    cardsCopy = [].concat(cards);
    counter = 0;
    playerTurn = 1;
    storeRandomCards = [];

    $("img:hidden").show(); // to put back the hidden back cards
    //to remove Back to Reading button, big card image & card info
    $(".btn-light").addClass("d-none"); 
    $(".game").removeClass("col-xl-4");
    $(".image, .card-info").addClass("d-none"); 
    //to restore card container, meaning size & styling
    $(".mirror2").addClass("hidden-card");
    $(".mirror-p2").addClass("hidden-card");
    $(".card-container").css({"background": "", "border": ""}); 
    $(".card-container").removeClass("card-container2");
    $(".card-meaning").removeClass("card-meaning2");
    $("#about").html("").css({"background":"", "box-shadow":""}); //to restore bg on about text

    if (selectedGame == "All Cards") {  //to put back the click event on the back cards that got removed when clicking the "All Cards" link
        clickBackCards();
    }
}

//To reset "The Celtic Cross" default game/spread by reloading the page
$(document).ready(function () {
  $(".celtic-cross").click(function () {
    location.reload();
  });
});

//"THE DIAMOND" SPREAD
$(document).ready(function () {
  $(".the-diamond").click(function () {
    resetGame();
    selectedGame = "The Diamond"
    $(".card-container, .card-meaning").hide(); 
    $(".diamond").removeClass("hidden-card").show(); //shows the card containers for "The Diamond" game
    
    //to give new nr id to card containers
    $(".card-nr").removeAttr("id");
    $(".diamond1").attr("id", "1");
    $(".diamond2").attr("id", "2");
    $(".diamond3").attr("id", "3");
    $(".diamond4").attr("id", "4");
    $(".diamond5").attr("id", "5");

    //to give new meaning & nr to card containers
    $("#1").html("1");
    $(".diamond-p1").html("1.THE THEME");
    $("#2").html("2");
    $(".diamond-p2").html("2.UNCONCIOUS INTERNAL INFLUENCE");
    $("#3").html("3"); 
    $(".diamond-p3").html("3.CONCIOUS EXTERNAL INFLUENCE");
    $("#4").html("4"); 
    $(".diamond-p4").html("4.WHAT IS NEEDED FOR A SOLUTION");
    $("#5").html("5"); 
    $(".diamond-p5").html("5.THE SOLUTION: UNDERSTANDING");

    //to change text on About card spread
    $("#about").html("'The Diamond' spread can be helpful in bringing more clarity to a specific issue.")
  });
});

//"THE KEY" SPREAD
$(document).ready(function () {
  $(".the-key").click(function () {
    resetGame();
    selectedGame = "The Key"
    $(".key-dnone").removeClass("d-none");
    $(".card-container, .card-meaning").hide(); 
    $(".key").removeClass("hidden-card").show(); //shows the card containers & meanings for "The Key" 
    $(".keyhide").show();

    //to give new nr id to card containers
    $(".card-nr").removeAttr("id");
    $(".key1").attr("id", "1");
    $(".key2").attr("id", "2");
    $(".key3").attr("id", "3");
    $(".key4").attr("id", "4");
    $(".key5").attr("id", "5");
    $(".key6").attr("id", "6");
    $(".key7").attr("id", "7");
    $(".key8").attr("id", "8");

    //to give new meaning & nr to card containers
    $("#1").html("1");
    $(".key-p1").html("1.WHAT IS REPRESSED");
    $("#2").html("2");
    $(".key-p2").html("2.YING, YOUR FEMININE (PASSIVE) ASPECT");
    $("#3").html("3"); 
    $(".key-p3").html("3.YANG, YOUR MASCULINE (ACTIVE) ASPECT");
    $("#4").html("4"); 
    $(".key-p4").html("4.MEDITATION");
    $("#5").html("5"); 
    $(".key-p5").html("5.INNER VISION REGARDING THE BODY");
     $("#6").html("6"); 
    $(".key-p6").html("6.INNER VISION REGARDING THE HEART");
     $("#7").html("7"); 
    $(".key-p7").html("7.INNER VISION REGARDING THE BEING");
     $("#8").html("8"); 
    $(".key-p8").html("8.AWARNESS (UNDERSTANDING)");

     //to change text on About card spread
    $("#about").html("'The Key' spread can open the door to insights regarding hidden, unconscious aspects of a particular issue. It may also be used as a general reading for an insight into your interiority here and now.")
  });
});

//"THE MIRROR" SPREAD
$(document).ready(function () {
  $(".the-mirror").click(function () {
    resetGame();
    selectedGame = "The Mirror"
    $(".column").removeClass("d-none");
    $(".card-container, .card-meaning").hide(); 
    $(".mirror").removeClass("hidden-card").show(); //shows the card containers & meanings for "The Key" 
    $(".mirrorhide").show().addClass("hidden-card");
    $(".mirror-text").removeClass("hidden-card");

    //to give new nr id to card containers
    $(".card-nr").removeAttr("id");
    $(".mirror1").attr("id", "1");
    $(".mirror2").attr("id", "2");
    $(".mirror3").attr("id", "3");
    $(".mirror4").attr("id", "4");
    $(".mirror5").attr("id", "5");
    $(".mirror6").attr("id", "6");
    $(".mirror7").attr("id", "7");
    $(".mirror8").attr("id", "8");
    $(".mirror9").attr("id", "9");
    $(".mirror10").attr("id", "10");
    $(".mirror11").attr("id", "11");
    $(".mirror12").attr("id", "12");

    //to give new meaning & nr to card containers
    $("#1").html("1");
    $(".mirror-p1").html("1.THE BODY");
    $("#2").html("2");
    $(".mirror-p2").html("2.THE HEART");
    $("#3").html("3"); 
    $(".mirror-p3").html("3.THE MIND");
    $("#4").html("4"); 
    $(".mirror-p4").html("4.THE BODY");
    $("#5").html("5"); 
    $(".mirror-p5").html("5.THE HEART");
    $("#6").html("6"); 
    $(".mirror-p6").html("6.THE MIND");
    $("#7").html("7"); 
    $(".mirror-p7").html("7.MELTING & MERGING");
    $("#8").html("8"); 
    $(".mirror-p8").html("8.ALCHEMY OF TOGETHERNESS");
    $("#9").html("9"); 
    $(".mirror-p9").html("9.THE BLESSINGS");
    $("#10").html("10"); 
    $(".mirror-p10").html("10.DISSOLVE & UNITE");
    $("#11").html("11"); 
    $(".mirror-p11").html("11.ALCHEMY OF UNION");
    $("#12").html("12"); 
    $(".mirror-p12").html("12.THE BLESSINGS");
    $(".mirror-text").addClass("mirror-text2");
    $(".text1").html("Internal dynamics");
    $(".text2").html("You now");
    $(".text3").html("Your partner now");
     //to change text on About card speard
    $("#about").html("'The Mirror' spread is a more in depth approach to gaining insights into your relating with the other, whether the boss, the lover, the friend, the sister, the parent…. It offers an understanding of the life processes of each individual, as well as insights into what is happening between you.")
  });
});

//ALL CARDS
//this is to retrive the card info on the front cards from the cards array
function handleClick(index) { //My mentor created this function for getting card info by index, & I added more code to it 
    const selectedCard = cards[index]
    $(".col-12").removeClass("d-none"); // adds new cols for card image and description
    document.querySelector(".info").innerHTML = selectedCard.description;
    document.querySelector("#card-name").innerHTML = selectedCard.name;
    document.querySelector(".image").innerHTML = `<img src="${selectedCard.imgPath}" alt="front-card">`;
}

$(document).ready(function () {
  $(".all-cards").click(function () {
    resetGame();
    selectedGame = "All Cards"
    $("img.card-back").hide(); //hides all back-cards
    $(".card-container, .card-meaning").hide(); 
    $(".front-card:hidden").show()//shows all front cards
    $("#about").html("").css({"background":"transparent", "box-shadow":"none"});

     const div = document.querySelector('.back-cards')

    //My mentor created this loop for me & and I added more code to it
    //This is to display the front cards in the "All Cards" 
    for (const [index, card] of cards.entries()) {
        div.innerHTML += `<img class="front-card" onclick="handleClick(${index})" src="${card.imgPath}"/>`
        $("img.front-card").css('height','100');
        $("img.front-card").css('width','70');
        $("img.front-card").css('padding','4px');
    }
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
  $("#form")[0].reset();
  $(".clear").empty();
}

//gets the modal and its background
var popUp = document.querySelector(".pop-bg");

addEventListener("click", windowClick);

//closes the modal when user clicks outside
function windowClick(e) {
  if (e.target == popUp) {
    $(".pop-bg").addClass("d-none");
    $("#form")[0].reset();
    $(".clear").empty();
  }
}

/*-------------------------SEND EMAIL JS---------------------*/

function sendEmail() {
  //a "Sending..." message when the user waits for the message to get loaded & sent
  $("#success").addClass("sent-message");
  $("#success").css("background-color", "orange").html("Sending...");

  emailjs
    .send("gmail", "template_TKAjL7PE", {
      from_name: document.querySelector("#name").value,
      message_html: document.querySelector("#message").value,
      from_email: document.querySelector("#email").value,
    })
    .then(
      function (response) {
        //a conformation message that the user's message has been sent
        $("#success")
          .css("background-color", "blue")
          .html("Your message was sent successfully!");
        console.log("SUCCESS", response);
      },
      function (error) {
        $("#success")
          .css("background-color", "blue")
          .html("Failed to send message. Try again later!");
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}

/*-----------------VALIDATION CODE FOR CHECKING INPUT ON CONTACT MODAL-------------*/

function checkRegEx() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameRegex = /[a-z]/gim;

  if (nameRegex.test(name)) {
    $("#valid-name")
      .addClass("validation")
      .css("background-color", "green")
      .html("Correct name");
  } else {
    $("#valid-name")
      .addClass("validation")
      .css("background-color", "red")
      .html("Wrong name");
  }

  if (emailRegex.test(email)) {
    $("#valid-email")
      .addClass("validation")
      .css("background-color", "green")
      .html("Correct email");
  } else {
    $("#valid-email")
      .addClass("validation")
      .css("background-color", "red")
      .html("Wrong email");
  }

  if (message.length > 10) {
    $("#valid-message")
      .addClass("validation")
      .css("background-color", "green")
      .html("Correct message");
  } else {
    $("#valid-message")
      .addClass("validation")
      .css("background-color", "red")
      .html("Wrong message");
  }

  if (nameRegex.test(name) && emailRegex.test(email) && message.length > 10) {
    $("#success").removeClass("d-none");
    sendEmail();
  } else {
    $("#success").addClass("d-none");
  }
}

