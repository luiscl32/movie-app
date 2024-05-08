

type MovieCardProps = {
    title: string,
    poster_path: string,
    release_date: string,
    vote_average: number
}

function MovieCard({ title, poster_path, release_date, vote_average, }: MovieCardProps) { 
    return (
        <section className="flex flex-col justify-evenly gap-1 rounded-lg shadow-md bg-white w-48 p-2" >
            <img className="rounded-t-lg w-48 h-48 object-cover"  src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <h4 className="font-bold font-sans text-xl" >{title}</h4>
            <strong className="font-bold font-sans text-xs" >{release_date}</strong>
            <p className="font-bold font-sans text-xs" >{vote_average}</p>
        </section>
    );
}

export default MovieCard;