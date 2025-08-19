import { Search } from "lucide-react";

export default function SearchBar({ city, setCity, onSearch, setWeather }) {
    function handleKeyDown(e) {
        if (e.key === "Enter") onSearch();
    }

    function handleClear() {
        setCity("");
        setWeather(null); // remove weather card
        localStorage.removeItem("city");
        localStorage.removeItem("weather");
    }

    return (
        <div className="card flex items-center gap-3 w-full max-w-xl mx-auto mt-8">
            {/* Search icon */}
            <Search className="text-brand w-5 h-5" />

            {/* Input with underline only */}
            <div className="relative w-full">
                <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter city..."
                    className="peer w-full bg-transparent 
                     text-zinc-800 dark:text-zinc-200 
                     placeholder-zinc-400 dark:placeholder-zinc-500 
                     outline-none border-none ring-0 focus:ring-0 focus:outline-none"
                />
                {/* Default underline (always visible) */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-300 dark:bg-zinc-700" />
                {/* Purple underline that animates on focus */}
                <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand 
                     transition-all duration-300 peer-focus:w-full"
                />
            </div>

            {/* Search Button */}
            <button
                onClick={onSearch}
                className="btn border border-transparent 
                   hover:border-brand 
                   active:border-white 
                   transition-all duration-200"
            >
                Search
            </button>

            {/* Clear Button (only shows if input has value) */}
            {city && (
                <button
                    onClick={handleClear}
                    className="btn border border-transparent 
                       hover:border-red-400 
                       active:border-white text-red-500
                       transition-all duration-200"
                >
                    Clear
                </button>
            )}
        </div>
    );
}
