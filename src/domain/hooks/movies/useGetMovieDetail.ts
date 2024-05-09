import { useEffect } from "react";
import { getMovieDetail, getMovieDetailUseCase } from "../../useCase/getMovieDetail";
import { MoviesRepository } from "../../repository/moviesRepository";
import { moviesRepositoryImpl } from "../../../data/repository_impl/moviesRepositoryImpl";
import { movieDetailStore } from "../../store/movieDetailStore";
import { useParams } from "react-router-dom";

const moviesRepository: MoviesRepository = new moviesRepositoryImpl();


function useGetMovieDetail() { 

    const { id } = useParams();
    const { movie, setMovie, setLoading, isLoading } = movieDetailStore();
    

    useEffect(() => {
        setLoading(true);
        const getMovieDetailUseCase: getMovieDetailUseCase = new getMovieDetail(moviesRepository);
        const fetchData = async () => {
            try {
                setMovie(await getMovieDetailUseCase.invoke(Number(id)));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    },[id, setMovie, setLoading])

    return {movie, isLoading}
  
}

export default useGetMovieDetail