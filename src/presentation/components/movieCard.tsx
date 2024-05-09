

type MovieCardProps = {
    title: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    onClick: () => void
}

function MovieCard({ title, poster_path, release_date, vote_average, onClick }: MovieCardProps) { 
    return (
        <section onClick={onClick} className="flex flex-col justify-evenly gap-1 rounded-lg shadow-md bg-slate-200 w-48 p-2 hover:bg-slate-400 
        hover:text-white cursor-pointer hover:ease-in hover:duration-300 active:bg-slate-600" >
            <img className="rounded-t-lg w-48 h-48 object-cover"  src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <h4 className="font-bold font-sans text-xl line-clamp-2 text-ellipsis" >{title}</h4>
            <strong className="font-bold font-sans text-xs" >{release_date}</strong>
            <p className="font-bold font-sans text-xs" >{vote_average}</p>
        </section>
    );
}

export default MovieCard;