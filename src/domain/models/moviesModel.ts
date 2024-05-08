
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

}