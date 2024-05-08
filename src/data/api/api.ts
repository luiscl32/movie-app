
const apiUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = '09d27547b867ff9e48927dcabccc221e';

export const getMoviesUrl  = (page: number) : string =>  `${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}`;
export const searchMoviesUrl  = (query: string) : string =>  `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`;