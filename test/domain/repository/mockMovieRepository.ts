
import { MoviesRepository } from "../../../src/domain/repository/moviesRepository";

export     const mockMoviesRepository: MoviesRepository = {
        searchMovies: jest.fn(),
        getMovies: jest.fn(),
        getMovieDetail: jest.fn()
    }