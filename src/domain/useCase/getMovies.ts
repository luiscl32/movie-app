import { movies } from "../models/moviesModel";
import { MoviesRepository } from "../repository/moviesRepository";

export interface getMoviesUseCase {
    invoke: (page: number) => Promise<movies>
}

export class getMovies implements getMoviesUseCase {
    constructor(private moviesRepository: MoviesRepository) {}
    async invoke(page: number): Promise<movies> {
        return await this.moviesRepository.getMovies(page)
    }
}