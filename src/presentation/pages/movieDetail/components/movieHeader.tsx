

interface MovieHeaderProps {
    backdrop_path: string,
    title: string,
}

function MovieHeaderProps({  backdrop_path, title }: MovieHeaderProps) {
    return (
        <section className="flex justify-center relative bg-black w-full h-{400px} ">
            <img className="w-full h-80 object-cover" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} />
            <div className="w-full h-80 bg-gradient-to-t from-black absolute" />
            <h1 className="font-bold font-sans text-4xl absolute mt-1 z-10 self-center text-white" >{title}</h1>
        </section>
    
    )
}

export default MovieHeaderProps