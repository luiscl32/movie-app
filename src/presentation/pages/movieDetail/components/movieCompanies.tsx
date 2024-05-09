import { companies } from "../../../../domain/models/moviesModel"

interface MovieCompaniesProps {
    production_companies: companies[]
}

function MovieCompanies({ production_companies }: MovieCompaniesProps) {
    return (
        <section className="flex justify-center" >
            <article className="flex flex-col justify-start items-start gap-1 text-white  w-full p-4" >
                <h4 className="font-bold font-sans text-xl" >Companies:</h4>
                <ul className="flex  justify-start items-center gap-2  "  >
                    {production_companies.map((company) => (
                        <li key={company.id}  >
                            <section className="flex flex-col gap-2 w-32 h-48 p-4 justify-center items-center bg-slate-400 rounded-lg hover:bg-slate-600 cursor-pointer ease-linear active: bg-slate-800 " >
                                <img className="rounded-lg w-24 h-24 object-contain" src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt={company.name} />
                                <strong className="font-bold font-sans text-xs text-center text-ellipsis line-clamp-2  text-white hover:text-blue-200 hover:cursor-pointer">{company.name}</strong>
                            </section>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default MovieCompanies