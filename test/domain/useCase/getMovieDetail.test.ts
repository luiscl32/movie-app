import { getMovieDetail } from "../../../src/domain/useCase/getMovieDetail";
import { mockMovies } from "../mocks/mockMovies";
import { mockMoviesRepository } from "../repository/mockMovieRepository";

describe('getMovieDetail', () => {
    
    it('should get movie detail', async () => {
        (mockMoviesRepository.getMovieDetail as jest.Mock).mockResolvedValue(mockMovies.results[0]);
        const mockGetMovieDetailUseCase = new getMovieDetail(mockMoviesRepository);
        const id = 1;
        const result = await mockGetMovieDetailUseCase.invoke(id);
        expect(result).toEqual(mockMovies.results[0]);
    })

    it('should not get movie detail', async () => {
        (mockMoviesRepository.getMovieDetail as jest.Mock).mockResolvedValue({ page: 0, results: [] });
        const mockGetMovieDetailUseCase = new getMovieDetail(mockMoviesRepository);
        const id = 1;
        const result = await mockGetMovieDetailUseCase.invoke(id);
        expect(result).toEqual({ page: 0, results: [] });
    })
})