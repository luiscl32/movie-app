import axios from "axios";
import { movies } from "../../domain/models/moviesModel";
import { getMoviesUrl, searchMoviesUrl } from "../api/api";


async function searchMoviesService(query: string): Promise<movies> {
    const url = searchMoviesUrl(query);
    const defaultUrl = getMoviesUrl(1);     
    let res = { data: { page: 0 , results: [] } };
     if (query === '')  {
         res= await axios.get(defaultUrl);
         return res.data;
     }
    res = await axios.get(url);
    return res.data;
 }

 export default searchMoviesService