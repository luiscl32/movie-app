import useGetMovies from "../../../../domain/hooks/movies/useGetMovies";
import { Movie } from "../../../../domain/models/moviesModel";
import MovieCard from "../../../components/movieCard";

function MovieList() {
    const { movies, isLoading } = useGetMovies(1);

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
     <section className="grid grid-cols-4 gap-4" >
        {
            movies.results.map((movie: Movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path}
                />
            ))
        
        }
    </section>
    )
}

export default MovieList