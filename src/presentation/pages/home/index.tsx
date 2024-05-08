import MovieList from "./components/movieList";
import SearchMovie from "./components/searchMovie";

function Home() {
    return (
        <>
        <header className="flex justify-center" >
            <h1 className="font-bold font-sans text-3xl" >Movie App</h1>
            </header>
            <div>
            <section className="flex justify-center" >
                <h2 className="font-bold font-sans text-xl mt-1" >Welcome to movie app , search your favorite movie</h2>
            </section>
            <SearchMovie/>
            <MovieList/> 
            </div>
        </>
    );
}

export default Home;