# Movie Search Application

### Introduction

This document provides an overview of the Movie Search and Tracking Application, a React-based web application that allows users to search for movies using the OMDB API, view movie details, and track watched movies along with their ratings.

### Components Overview

The application consists of several components that work together to provide the desired functionality:

- **App Component:** The main component that manages the application state, handles API requests, and renders other components based on the state.

- **NavBar Component:** Renders the navigation bar with a logo and search input for movie search.

- **ErrorMessage Component:** Displays error messages if any API requests fail.

- **Loader Component:** Displays a loading indicator while fetching data from the API.

- **Search Component:** Renders an input field for users to search for movies.

- **Logo Component:** Displays the application logo and title.

- **NumResult Component:** Shows the number of search results found.

- **Main Component:** Acts as the main content area where other components are rendered based on the application state.

- **Container Component:** Wraps content in collapsible boxes with a toggle button.

- **MovieList Component:** Displays a list of movies based on the search results.

- **Movies Component:** Represents an individual movie item in the list with basic information like title, year, and poster.

- **MovieDetails Component:** Displays detailed information about a selected movie, including ratings, plot, cast, and director. Allows users to add the movie to their watched list and rate it.

- **WatchSummary Component:** Provides a summary of watched movies, including average ratings and runtime.

- **WatchedList Component:** Displays a list of watched movies with options to delete them.

- **WatchedMovies Component:** Represents an individual watched movie item with details such as rating, poster, and runtime.

### Features

- Search for movies using the OMDB API.
- View detailed information about each movie, including ratings and plot.
- Add movies to a watched list and rate them.
- View a summary of watched movies with average ratings and runtime.
- Delete watched movies from the list.

### Usage

- Enter a movie title in the search input and press Enter to search.
- Click on a movie to view detailed information.
- Rate the movie and add it to your watched list if desired.
- View your watched list and delete movies if needed.

### API Key

The application uses the OMDB API for movie data. Ensure you have a valid API key and replace the placeholder KEY variable in the code with your actual API key for proper functionality.
