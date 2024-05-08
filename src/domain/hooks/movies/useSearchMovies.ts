
import { moviesRepositoryImpl } from "../../../data/repository_impl/moviesRepositoryImpl";
import { MoviesRepository } from "../../repository/moviesRepository";
import { searchMoviesUseCase, searchMovies } from "../../useCase/searchMovies";
import { useEffect } from "react";
import { moviesStore } from "../../store/moviesStore";

const moviesRepo: MoviesRepository = new moviesRepositoryImpl();

function useSearchMovies() {
    const {  setMovies, setLoading, query, setQuery } = moviesStore();
        useEffect(() => {
            setLoading(true);
            const searchMoviesUseCase: searchMoviesUseCase = new searchMovies(moviesRepo);
            const fetchData = async () => {
                try {
                    setMovies(await searchMoviesUseCase.invoke(query));
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }
            fetchData();  
        },[query, setMovies, setLoading] );
    return {  setQuery };
}

export default useSearchMovies