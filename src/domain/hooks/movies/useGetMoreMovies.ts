import { useEffect } from "react";

import { moviesStore } from "../../store/moviesStore";

function useGetMoreMovies() {
    
    const { page, setPage, setLoading } = moviesStore();

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setLoading(true);
                setPage(page + 1);
            } else {
                setLoading(false);
            } 

        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [ page ,setPage, setLoading ]);

    return  { page }

}

export default useGetMoreMovies