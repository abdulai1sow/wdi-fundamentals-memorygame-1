# wdi-fundamentals-memorygame
WDI Fundamentals Memory Game


Instructions
Open the memory_game folder in Sublime and open the main.js file. You'll be writing code to work through the following steps in Sublime Text.
In your main.js file, create an array to store the four cards.
Create an array cards.
The array should hold four strings - one for each of our cards.
The strings should be "queen", "queen", "king", and "king".
After creating the cards array, you can delete the variables you created in the last unit's project.
Next we'll want to create an empty array. This will eventually hold the cards that are in play.
Create an array cardsInPlay.
Set its value to an empty array []

Instructions
Next up, you'll create a variable to represent the first card that the user flipped.
Create a variable cardOne.
Store the first item in the cards array in the variable cardOne.
HINT: Use the array name, square brackets, and the index number to retrieve this card from the array.
Now we'll want to add this first card to the cardsInPlay array.
Use the push() method to add cardOne to the end of the cardsInPlay array.
Here's an example of the push() method if you need a syntax refresher:
ghosts.push('clyde');



Instructions
For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly.
Use console.log() to display the card that the user flipped
The message that is displayed in the console should say "User flipped queen".
After saving the changes you made to main.js, open the index.html file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console in Chrome and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your main.js file.
Now create a variable to represent the second card that the user flipped.
Create a variable cardTwo.
Store the third item in the cards array in the variable cardTwo.
Now we'll want to add this second card to the cardsInPlay array.
Use the push() method to add cardTwo to the end of the cardsInPlay array.


Instructions
Use console.log() to display the card that the user flipped
The message that is displayed in the console should say "User flipped king".
After saving the changes you made to main.js, open the index.html file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your main.jsfile.
Next we'll add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards.
Write an if statement that checks to see if the length of the cardsInPlay array is 2.
For the condition, you can use the length property to find out how many items are in the cardsInPlay array and then use the === operator to see if the length is equal to 2.
Instructions
Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.
Inside of the if statement you created in the last step, create an if...else statement that checks for equality between the two cards in the cardsInPlay array.
For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
HINT: You'll want to use the === operator here.
If values are equal, execute an alert with the message "You found a match!"
alert("You found a match!");


If values are not equal, execute an alert with the message "Sorry, try again."
After saving your main.js file, open the index.html file in Sublime Text, right click, and open the project in Chrome. The alert "Sorry, try again." should pop up.
Test out storing different cards in the cardOne and cardTwovariables to make sure that everything is up and running!


Deliverable




Pushing Code Up to the Repository
In order to back up your code and track your work, you'll want to commit the changes you've made to the project's repository. You'll have to open up the terminal and cd into the correct folder that holds the cloned repository for this assignment. Once you're there, complete these three steps:
Stage your code.
git add -A
Create a version of your staged code.
git commit -m 'created game logic'
Push your code to the GitHub repository.
git push origin master
