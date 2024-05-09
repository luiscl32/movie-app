import { genre } from "../../../../domain/models/moviesModel"

interface MovieGendersProps {
    genres : genre[]
}
function MovieGenders({ genres }: MovieGendersProps) {
    return (
        <section className="flex justify-center" >
            <article className="flex flex-row justify-start items-center gap-1 text-white  w-full p-4" >
                <h4 className="font-bold font-sans text-xl" >Genres:</h4>
                <ul className="flex justify-start items-center gap-1  "  >
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <strong className="font-bold font-sans text-md text-white hover:text-blue-200 hover:cursor-pointer">{genre.name}</strong>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default MovieGenders