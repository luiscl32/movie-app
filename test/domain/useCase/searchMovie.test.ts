import { searchMovies } from "../../../src/domain/useCase/searchMovies";
import { mockMovies } from "../mocks/mockMovies";
import { mockMoviesRepository } from "../repository/mockMovieRepository";


describe('searchMovies', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })
    
    it('search a movie', async () => { 
        (mockMoviesRepository.searchMovies as jest.Mock).mockResolvedValue(mockMovies);
        const mockSearchMoviesUseCase = new searchMovies(mockMoviesRepository);
        const query = 'pepe 2';
        const result = await mockSearchMoviesUseCase.invoke(query);
        
        expect(result).toEqual(mockMovies);
        expect(mockMoviesRepository.searchMovies).toHaveBeenCalledWith(query);
    })
    
    it('search a movie that does not exist', async () => {
        (mockMoviesRepository.searchMovies as jest.Mock).mockResolvedValue({ page: 0, results: [] });
        const mockSearchMoviesUseCase = new searchMovies(mockMoviesRepository);
        const query = 'superman 3';
        const result = await mockSearchMoviesUseCase.invoke(query);
        expect(result).toEqual({ page: 0, results: [] });
        expect(mockMoviesRepository.searchMovies).toHaveBeenCalledWith(query);
    })

    it('query is empty', async () => {
        (mockMoviesRepository.searchMovies as jest.Mock).mockResolvedValue(mockMovies);
        const mockSearchMoviesUseCase = new searchMovies(mockMoviesRepository);
        const query = '';
        const result = await mockSearchMoviesUseCase.invoke(query);
        expect(result).toEqual(mockMovies);
        expect(mockMoviesRepository.searchMovies).toHaveBeenCalledWith(query);  
    })

    it('query is undefined', async () => {
        (mockMoviesRepository.searchMovies as jest.Mock).mockResolvedValue(mockMovies);
        const mockSearchMoviesUseCase = new searchMovies(mockMoviesRepository);
        const query = undefined;
        const result = await mockSearchMoviesUseCase.invoke(query);
        expect(result).toEqual(mockMovies);
        expect(mockMoviesRepository.searchMovies).toHaveBeenCalledWith(query);
    })
})

