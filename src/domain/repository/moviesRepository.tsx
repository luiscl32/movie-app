import { movies } from "../models/moviesModel";


export interface MoviesRepository {
    getMovies: (page: number) => Promise<movies>
    searchMovies: (query: string) => Promise<movies>
}