import { movies } from "../models/moviesModel";
import { MoviesRepository } from "../repository/moviesRepository";

export interface searchMoviesUseCase {
    invoke: (query: string) => Promise<movies>
}
export class searchMovies {
    constructor(private moviesRepository: MoviesRepository) {}
    async invoke(query: string): Promise<movies> {
        return await this.moviesRepository.searchMovies(query)
    }
}
