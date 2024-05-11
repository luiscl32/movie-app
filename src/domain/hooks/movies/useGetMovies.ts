
import { useEffect  } from "react";
import { getMoviesUseCase, getMovies } from "../../useCase/getMovies";
import { MoviesRepository } from "../../repository/moviesRepository";
import { moviesRepositoryImpl } from "../../../data/repository_impl/moviesRepositoryImpl";
import { moviesStore } from "../../store/moviesStore";
import useGetMoreMovies from "./useGetMoreMovies";



const moviesRepository: MoviesRepository =  new moviesRepositoryImpl();
function useGetMovies() {
    const { movies, isLoading, setMovies, setLoading } = moviesStore();
    const { page } = useGetMoreMovies();


    
    useEffect(() => { 
        setLoading(true);
        const moviesUseCase: getMoviesUseCase = new getMovies(moviesRepository);

        const fetchData = async () => {
            try {
                const prevMovies = moviesStore.getState().movies;
                const newMoviesData = await moviesUseCase.invoke(page);

                setMovies({
                    page: newMoviesData.page,
                    results: [...prevMovies.results, ...newMoviesData.results]
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }    
        fetchData();


    }, [page, setLoading, setMovies] );

    return { movies, isLoading };
}

export default useGetMovies;