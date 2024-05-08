## movie app practice

[] create a list of movies in a grid of 4 column
[] create a movie card , this contains title, image, qualification
[] create a movie detail page, with contains: title, description, actors and release date
[] create a search bar for search the movies
[] create a infinite scroll
[] add responsive to web and mobile (mobile first)


## Arquitectura clean
[data/infrastructure]
   api
   datasource
   repository

[domain]
   models
      movies
   repository
      moviesRepository
   useCase
      movies
         getAllMovies
         filterMovies
         getMovieDetail
[presentation]
   pages
      router
      home
         hooks
         styles
   components/ds
      button
      theme

      

