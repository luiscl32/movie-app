
export interface movies {
    page: number,
    results: Movie[],
}

export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    overview: string,
    original_language: string,
    original_title: string,
    genres: genre[],
    production_companies: companies[],
    backdrop_path: string
}

export interface genre {
    id: number,
    name: string
}

export interface companies {
    id: number,
    name: string,
    logo_path: string,
    origin_country: string
}