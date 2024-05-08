
type SearchBarProps = {
    onSearch: (query: string) => void
}


function SearchBar({onSearch}: SearchBarProps) {
    return (
            <input
                type="search"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search your favorite movie"
                className="w-full h-12 rounded-full border p-4 shadow-sm m-2"
            />
    )
}

export default SearchBar