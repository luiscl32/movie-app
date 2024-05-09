import { movies, Movie } from "../models/moviesModel";


export interface MoviesRepository {
    getMovies: (page: number) => Promise<movies>
    searchMovies: (query: string) => Promise<movies>
    getMovieDetail: (id: number) => Promise<Movie>
}