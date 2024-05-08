
import { useEffect } from "react";
import { getMoviesUseCase, getMovies } from "../../useCase/getMovies";
import { MoviesRepository } from "../../repository/moviesRepository";
import { moviesRepositoryImpl } from "../../../data/repository_impl/moviesRepositoryImpl";
import { moviesStore } from "../../store/moviesStore";

const moviesRepository: MoviesRepository =  new moviesRepositoryImpl();
function useGetMovies(page: number) {
    const { movies, isLoading, setMovies, setLoading } = moviesStore();

    useEffect(() => {
        setLoading(true);
        const moviesUseCase: getMoviesUseCase = new getMovies(moviesRepository);
        const fetchData = async () => {
            try {
                setMovies(await moviesUseCase.invoke(page));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();

    }, [page, setLoading, setMovies]);

    return { movies, isLoading };
}

export default useGetMovies;