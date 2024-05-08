import useSearchMovies from "../../../../domain/hooks/movies/useSearchMovies";
import SearchBar from "../../../components/searchBar";

function SearchMovie() {
    const { setQuery } = useSearchMovies();

    return  <SearchBar onSearch={setQuery} />
}

export default SearchMovie