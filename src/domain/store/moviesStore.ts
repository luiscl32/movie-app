import { create } from "zustand";
import { movies } from "../models/moviesModel";

interface moviesStoreData {
    movies: movies,
    isLoading: boolean,
    setMovies: (movies: movies) => void,
    setLoading: (isLoading: boolean) => void,
    query: string,
    setQuery: (query: string) => void
}
export const moviesStore = create<moviesStoreData>()((set) => ({
    movies:{ page: 0, results: [] },
    isLoading: false,
    setMovies: (movies: movies) => set({ movies }),
    setLoading: (isLoading: boolean) => set({ isLoading }),
    query: '',
    setQuery: (query: string) => set({ query }),
}))