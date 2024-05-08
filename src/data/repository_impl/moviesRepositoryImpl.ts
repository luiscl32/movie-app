import { movies } from "../../domain/models/moviesModel";
import { MoviesRepository } from "../../domain/repository/moviesRepository";

import getMoviesService from "../services/getMoviesService";
import searchMoviesService from "../services/searchMoviesService";


export class moviesRepositoryImpl implements MoviesRepository {
    constructor() {
    }

    async getMovies(page: number): Promise<movies> {
        const response = await getMoviesService(page);
        return response
    }

    async searchMovies(query: string): Promise<movies> {
        const response = await searchMoviesService(query);
        return response
    }

}