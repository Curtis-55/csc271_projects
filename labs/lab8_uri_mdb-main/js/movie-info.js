/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var myMovieInfo = ["Interstellar","img/Interstellar_film_poster.jpg", 5, "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."]

var info = document.querySelector('div.movie-info');

var movieImage = info.querySelector('img.movie-image');
movieImage.src = myMovieInfo[1];
movieImage.alt = myMovieInfo[0];

var movieName = info.querySelector('h2.movie-name');
movieName.textContent = myMovieInfo[0];



var stars = "";

for (var i = 0; i < 5; i++) {   
    if (i < myMovieInfo[2]) {
        stars += "★";
    } else {
        stars += "☆";
    }
}


var movieRatingElement = info.querySelector('div.rating');
movieRatingElement.textContent = stars; 
    

var movieDescription = info.querySelector('p.description');
movieDescription.textContent = myMovieInfo[3];