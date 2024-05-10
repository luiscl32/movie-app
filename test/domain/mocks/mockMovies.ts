import { Movie, movies } from "../../../src/domain/models/moviesModel";

const mockMovieList: Movie[] | [] = [
    {
        id: 1,
        title: 'godzilla',
        overview: 'godzilla',
        release_date: '11/12/2021',
        vote_average: 1,
        poster_path: 'godzilla',
        genres: [
            {
                id: 1,
                name: 'godzilla'
            }
        ],
        production_companies: [
            {
                id: 1,
                name: 'godzilla',
                logo_path: 'godzilla',
                origin_country: 'godzilla'
            }
        ],
        backdrop_path: 'godzilla',
        original_language: 'godzilla',
        original_title: 'godzilla'
    },
    {
        id: 2,
        title: 'pepe 2: the revenge',
        overview: 'godzilla 2: the revenge',
        release_date: '11/12/2020',
        vote_average: 1,
        poster_path: 'godzilla 2: the revenge',
        genres: [
            {
                id: 1,
                name: 'godzilla 2: the revenge'
            }
        ],
        production_companies: [
            {
                id: 1,
                name: 'godzilla 2: the revenge',
                logo_path: 'godzilla 2: the revenge',
                origin_country: 'godzilla 2: the revenge'
            }
        ],
        backdrop_path: 'godzilla 2: the revenge',
        original_language: 'godzilla 2: the revenge',
        original_title: 'godzilla 2: the revenge'
    }
]
export const mockMovies: movies =
    {
        page: 1,
        results: mockMovieList
    }
    
    
    