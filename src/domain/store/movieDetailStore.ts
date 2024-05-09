import { create } from "zustand"
import { Movie } from "../models/moviesModel"

interface movieDetailStoreData {
    movie: Movie,
    isLoading: boolean,
    setMovie: (movie: Movie) => void,
    setLoading: (isLoading: boolean) => void
}
export const movieDetailStore = create<movieDetailStoreData>()((set) => ({
    movie: {
        id: 0,
        title: '',
        poster_path: '',
        release_date: '',
        vote_average: 0,
        overview: '',
        original_language: '',
        original_title: '',
        genres: [],
        production_companies: [],
        backdrop_path: ''
    },
    isLoading: false,
    setMovie: (movie: Movie) => set({ movie }),
    setLoading: (isLoading: boolean) => set({ isLoading }),
}))
