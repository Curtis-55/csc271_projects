/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/


var usernames = [
	"Movieman123",
	"MovieLover42",
	"Filmguy14"
]

var reviewDates = [
	"2024-10-01",
	"2024-10-05",
	"2024-10-10"
]

var reviews = [
	"Amazing movie with stunning visuals and a thought-provoking plot.",
	"A masterpiece of storytelling and cinematography. A must-watch!",
	"An epic journey through space and time that captivates from start to finish."
]

var ratings = [5, 4, 5]	


var movieCards = document.querySelectorAll('div.movie-card');	

for (var i = 0; i < movieCards.length; i++) {
	
	var reviewRatingElement = movieCards[i].querySelector('div.review-rating');
	var stars = "";
	
	for (var j = 0; j < 5; j++) {
		if (j < ratings[i]) {
			stars += "★";	
		} else {
			stars += "☆";
		}
	}

	reviewRatingElement.textContent = stars;
	reviewRatingElement.setAttribute('data-rating', ratings[i]);
	




/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

});



