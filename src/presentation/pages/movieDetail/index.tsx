import useGetMovieDetail from "../../../domain/hooks/movies/useGetMovieDetail";
import MovieCompanies from "./components/movieCompanies";
import MovieDescription from "./components/movieDescription";
import MovieGenders from "./components/movieGenders";
import MovieHeader from "./components/movieHeader";

function MovieDetail() {
    const { movie, isLoading } = useGetMovieDetail();
    const { title, overview, release_date, poster_path, genres, vote_average, backdrop_path, production_companies } = movie;
 
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className="flex flex-col justify-start items-start ">
            <MovieHeader {...{ backdrop_path, title }} />
            <MovieDescription  {...{ overview, poster_path, title, release_date, vote_average }} />
            <MovieGenders  {...{ genres }} />
            <MovieCompanies  {...{ production_companies }} />
        </section>
    )
}

export default MovieDetail
 