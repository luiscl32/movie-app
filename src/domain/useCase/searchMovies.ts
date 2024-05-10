import { movies } from "../models/moviesModel";
import { MoviesRepository } from "../repository/moviesRepository";

export interface searchMoviesUseCase {
    invoke: (query: string | undefined) => Promise<movies>
}
export class searchMovies {
    constructor(private moviesRepository: MoviesRepository) {}
    async invoke(query: string | undefined): Promise<movies> {
        return await this.moviesRepository.searchMovies(query!)
    }
}
