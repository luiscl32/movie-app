import axios from "axios";
import { movies } from "../../domain/models/moviesModel";
import { getMoviesUrl } from "../api/api";

 async function getMoviesService(page: number): Promise<movies>  { 
    try {
        const url = getMoviesUrl(page);
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        return  { page: 0 , results: [] };
    } 
}

export default getMoviesService;