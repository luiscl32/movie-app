import { useNavigate } from "react-router-dom";
import useGetMovies from "../../../../domain/hooks/movies/useGetMovies";
import { Movie } from "../../../../domain/models/moviesModel";
import MovieCard from "../../../components/movieCard";


function useNavigateToMovieDetail() {
    const navigate = useNavigate();
    const navigateToMovieDetail = (id: number) => navigate(`/movie/${id}`);
    return { navigateToMovieDetail }
}

function MovieList() {
    const { movies, isLoading } = useGetMovies();
    const { navigateToMovieDetail } = useNavigateToMovieDetail();

    

 
    return (
     <section className="grid grid-cols-6 gap-4" >
        {
                movies.results.map((movie: Movie) => (
                <>
                <MovieCard
                    onClick={() => navigateToMovieDetail(movie.id)}
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path}
                        />
                  {isLoading && <div>Loading...</div>}      
                </>
            ))
        
        }
    </section>
    )
}

export default MovieList