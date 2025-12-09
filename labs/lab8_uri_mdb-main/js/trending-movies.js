/* TO DO:

	
	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/


var favoriteMovies = [ 
	  "Interstellar",
	  "Django Unchained",
	  "Revenge of the Sith"
]

var moviePosters = [
	"img/Interstellar_film_poster.jpg"
	,"img/Django_Unchained_Poster.jpg"
	,"img/Revenge_of_the_Sith_poster.jpg"
	  
]

var movieLinks = [
	"interstellar.html",
	"django-unchained.html",
	"revenge-of-the-sith.html"
]

var movieRatings = [5,5,5]




var movieCards = document.querySelectorAll('div.movie-card');	

for (var i = 0; i < movieCards.length; i++) {
	
	var movieImage = movieCards[i].querySelector('img.movie-image');
	movieImage.src = moviePosters[i];
	movieImage.alt = favoriteMovies[i];
	
	var movieLink = movieCards[i].querySelector('a.movie-link');
	movieLink.href = movieLinks[i];
	movieLink.textContent = favoriteMovies[i];


	var stars = "";
	
	for (var j = 0; j < 5; j++) {
		if (j < movieRatings[i]) {
			stars += "★";
		} else {
			stars += "☆";
		}
	}	

	var movieRate = movieCards[i].querySelector('div.rating');
	movieRate.textContent = stars;

}


