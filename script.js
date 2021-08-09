var playBlackJack = function() { // Main function
    var cardsOnHand = []; // array of cards as string data type
    var cardsOnHandNoSuit = []; // array will only contain card value, everything (not including) after -
    var cardPoints = 0; // sum of card(s) value as number data type
    var hitMe = true; // used for while loop towards the end of code
    
    var newDeck = function () {
      return ['C-ACE', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8', 'C-9', 'C-10', 'C-JACK', 'C-QUEEN', 'C-KING',
        'D-ACE', 'D-2', 'D-3', 'D-4', 'D-5', 'D-6', 'D-7', 'D-8', 'D-9', 'D-10', 'D-JACK', 'D-QUEEN', 'D-KING',
        'H-ACE', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8', 'H-9', 'H-10', 'H-JACK', 'H-QUEEN', 'H-KING',
        'S-ACE', 'S-2', 'S-3', 'S-4', 'S-5', 'S-6', 'S-7', 'S-8', 'S-9', 'S-10', 'S-JACK', 'S-QUEEN', 'S-KING'
      ];
    }
    var deck = newDeck(); // store the deck globally, deck is of array data type holds complete collection of cards
  
    var getCard = function() { // ARRAY CONTAINING PAIRS WITH SUITS. #1
      // TODO: the issue with this setup is cards that are dealt are not removed and can be dealt again
      // you can move the deck out of the function, and after you deal a card remove it from the deck.
  
      var randomCard = deck[Math.floor(Math.random() * deck.length)]; // Generate random card from deck array
      return randomCard;
    } 
  
    var removeSuit = function() { // removes suit and (-) from cardsOnHandArray and defines new Array. #5
      cardsOnHandNoSuit = [];
      // need to reset to [] every time
      for (var i = 0; i < cardsOnHand.length; i++) { // removes suit and - from card array and returns new array
        var noSuitCard = cardsOnHand[i].slice(2, cardsOnHand[i].length + 1);
        cardsOnHandNoSuit.push(noSuitCard);
      }
    }
  
    var cardInterpreter = function() { // convertes string value into number value. #6
      cardPoints = 0;
      // need to reset to 0 everytime
      for (var i = 0; i < cardsOnHandNoSuit.length; i++) {
        switch (cardsOnHandNoSuit[i]) {
          case "ACE":
            cardPoints += 11;
            break;
          case "2":
            cardPoints += 2;
            break;
          case "3":
            cardPoints += 3;
            break;
          case "4":
            cardPoints += 4;
            break;
          case "5":
            cardPoints += 5;
            break;
          case "6":
            cardPoints += 6;
            break;
          case "7":
            cardPoints += 7;
            break;
          case "8":
            cardPoints += 8;
            break;
          case "9":
            cardPoints += 9;
            break;
          case "10":
            cardPoints += 10;
            break;
          case "JACK":
            cardPoints += 10;
            break;
          case "QUEEN":
            cardPoints += 10;
            break;
          case "KING":
            cardPoints += 10;
            break;
        }
      }
    }
  
    var displayCards = function() { // displays user's deck of cards. #3
      alert(`Cards on hand: ${cardsOnHand}.`);
    }
  
    var hitPlayer = function() { // hit player with new card, on user request. 
      cardsOnHand.push(getCard());
    }
  
    var removeCard = function () { // remove card(s) that have been (hit) given by player. #4
      deck = deck.filter( function (card){
        return cardsOnHand.indexOf(card) == -1;
      });
    }
  
    var oneOrEleven = function () { // subtracts 10 if cardPoints over 21 when cards dealt. #7
      for (var i = 0; i < cardsOnHandNoSuit; i++) {
        if (cardsOnHandNoSuit[i] == "ACE" && cardPoints > 21) {
          cardPoints -= 10;
        }
      }
    }
  
    //////////// Functions above //////////
  
    for (var i = 0; i < 2; i++) { // step 2, hits player with first two cards.
      hitPlayer(); // call step 1
    }
  
    displayCards(); // call step 3
    removeCard(); // call step 4
    removeSuit(); // call step 5
    cardInterpreter(); // call step 6
    oneOrEleven(); // call step 7
  
    while (hitMe) {
      if (cardPoints < 21) { // step 8, gives user chance to get hit or stand.
        var hitOrStand = prompt("You're hand is under 21, would you like to stand or get hit.", "Type stand or hit.").toUpperCase();
  
        if (hitOrStand == "HIT") {
          hitPlayer();
          displayCards();
          removeCard();
          removeSuit();
          cardInterpreter();
          oneOrEleven();
          alert(`Current User Points: ${cardPoints}`);
        } else {
          hitMe = false;
        }
      } else if (cardPoints == 21) {
        alert("Black Jack! You Win!");
        break;
      } else {
        alert("Points over 21. You loose.");
        break;
      }
    }
  
    alert(`Game over. User points: ${cardPoints}`); // Main function alert
    cardPoints = 0; // Restarts points for next game
  }
  
  playBlackJack();