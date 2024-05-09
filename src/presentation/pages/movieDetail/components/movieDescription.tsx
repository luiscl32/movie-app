interface MovieDescriptionProps {
    overview: string,
    poster_path: string,
    title: string,
    release_date: string
    vote_average: number
}


function MovieDescription({ overview, poster_path, title, release_date, vote_average }: MovieDescriptionProps) { 
    return (
        <section className="flex justify-center" >
            <article className="flex flex-row justify-evenly gap-4  w-full p-4" >
                <img className="rounded-lg w-48 h-72 object-cover" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <section className="flex flex-col justify-evenly  text-white" >
                    <h4 className="font-bold font-sans text-xl" >{title}</h4>
                    <strong className="font-bold font-sans text-xs" >{release_date}</strong>
                    <strong className="font-bold font-sans text-xs" >{vote_average}</strong>
                    <p className="font-bold font-sans text-xs" >{overview}</p>
                </section>
            </article>
        </section>    
    )
}

export default MovieDescription