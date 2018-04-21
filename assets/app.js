
      // Initial array of movies
      // var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
      var movies = ["Music", "Fashion", "Big Hair", "Technology", "Toys", "Cars", "Movies", "Television"];
      




    //  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LOqV9Q2bK2qOXmKPsOpODpO8jEOu0FOr&q=80s&limit=25&offset=0&rating=G&lang=en";

      
      
      
      
      
      
      // Replace the following to render 10 gifs






      
      
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

        var movie = $(this).attr("data-name") + " 1980s";
        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LOqV9Q2bK2qOXmKPsOpODpO8jEOu0FOr&q=" + movie + "&limit=25&offset=0&rating=R&lang=en";


        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          // Creating a div to hold the movie
          var movieDiv = $("<div class='movie'>");

          // Storing the rating data
          var rating = response.data[0].rating;
          console.log(rating);

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          movieDiv.append(pOne);


        // Retrieving the URL for the image
        var imgURL = response.data[0].images.downsized_still.url;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        movieDiv.append(image);




          // Retrieving the URL for the image
          var imgURL = response.data[0].images.original.url;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          movieDiv.append(image);







          // Storing the release year
          // var released = response.Released;

          // Creating an element to hold the release year
          // var pTwo = $("<p>").text("Released: " + released);

          // Displaying the release year
          // movieDiv.append(pTwo);

          // Storing the plot
          // var plot = response.Plot;

          // Creating an element to hold the plot
          // var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          // movieDiv.append(pThree);

          // Retrieving the URL for the image
          // var imgURL = response.Poster;

          // Creating an element to hold the image
          // var image = $("<img>").attr("src", imgURL);

          // Appending the image
          // movieDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#movies-view").prepend(movieDiv);
        });

      }





      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("movie-btn");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding movie from the textbox to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".movie-btn", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    