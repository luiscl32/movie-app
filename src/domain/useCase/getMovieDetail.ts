import { Movie } from "../models/moviesModel"
import { MoviesRepository } from "../repository/moviesRepository"


export interface getMovieDetailUseCase {
    invoke: (id: number) => Promise<Movie>
}
export class getMovieDetail implements getMovieDetailUseCase {
    constructor(private moviesRepository: MoviesRepository) {}
    async invoke(id: number): Promise<Movie> {
        return await this.moviesRepository.getMovieDetail(id)
    }
}