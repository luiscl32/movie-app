import MovieList from "./components/movieList";
import SearchMovie from "./components/searchMovie";

function Home() {
    return (
        <>
        <header className="flex justify-center" >
            <h1 className="font-bold font-sans text-3xl text-white" >Movie App</h1>
            </header>
            <div>
            <section className="flex flex-col gap-6 justify-center" >
                <h2 className="font-bold font-sans text-4xl mt-1 text-center text-white" >Welcome to movie app , search your favorite movie</h2>
            <SearchMovie/>
            <MovieList/> 
            </section>
            </div>
        </>
    );
}

export default Home;