import { getMovies } from "../../../src/domain/useCase/getMovies";
import { mockMovies } from "../mocks/mockMovies";
import { mockMoviesRepository } from "../repository/mockMovieRepository";


describe('getMovie', () => {
    
    it('should get a list of movies', async () => {
        (mockMoviesRepository.getMovies as jest.Mock).mockResolvedValue(mockMovies);
        const mockGetMoviesUseCase = new getMovies(mockMoviesRepository);
        const page = 1;
        const result = await mockGetMoviesUseCase.invoke(page);
        expect(result).toEqual(mockMovies);
    })

    it('should not get a list of movies', async () => {
        (mockMoviesRepository.getMovies as jest.Mock).mockResolvedValue({ page: 0, results: [] });
        const mockGetMoviesUseCase = new getMovies(mockMoviesRepository);
        const page = 1;
        const result = await mockGetMoviesUseCase.invoke(page);
        expect(result).toEqual({ page: 0, results: [] });
    })
})