import axios from "axios";
import { getMovieDetailUrl } from "../api/api";
import { Movie } from "../../domain/models/moviesModel";

async function getMovieDetailService(id: number): Promise<Movie>  { 
    try {
        const url = getMovieDetailUrl(id);
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        return  {
            id: 0,
            title: '',
            poster_path: '',
            release_date: '',
            vote_average: 0,
            overview: '',
            original_language: '',
            original_title: '',
            genres: [],
            backdrop_path: '',
            production_companies: []
        };
    } 
}

export default getMovieDetailService