import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../services/WeatherService.js";
import { Loader2, Search, Sun } from "lucide-react";

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    // Guard so only the latest request can set state
    const latestReq = useRef(0);

    // Load saved city & weather, then fetch fresh (silent) on mount
    useEffect(() => {
        const savedCity = localStorage.getItem("city");
        const savedWeather = localStorage.getItem("weather");

        if (savedCity) setCity(savedCity);
        if (savedWeather) {
            try {
                setWeather(JSON.parse(savedWeather));
            } catch {}
        }
        if (savedCity) {
            handleSearch(savedCity, { silent: true });
        }
    }, []);

    // Auto refresh every 30 minutes (silent) for the current city
    useEffect(() => {
        if (!city) return;
        const id = setInterval(() => {
            handleSearch(city, { silent: true });
        }, 30 * 60 * 1000); // 30 mins
        return () => clearInterval(id);
    }, [city]);

    async function handleSearch(forcedCity, opts = {}) {
        const { silent = false } = opts;
        const searchCity = (forcedCity ?? city).trim();
        if (!searchCity) return;

        const reqId = ++latestReq.current; // mark this as newest request
        if (!silent) setLoading(true);

        try {
            const weatherData = await fetchWeather(searchCity);

            // If another search started after this one, ignore this result
            if (reqId !== latestReq.current) return;

            setWeather(weatherData);
            setCity(searchCity);

            // Persist fresh data
            localStorage.setItem("city", searchCity);
            localStorage.setItem("weather", JSON.stringify(weatherData));
        } catch (error) {
            if (reqId !== latestReq.current) return;
            setWeather(null);
            if (!silent) alert("❌ City not found. Please try again.");
        } finally {
            if (reqId !== latestReq.current) return;
            if (!silent) setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-6">
            {/* Navbar */}
            <Navbar />

            {/* Search Bar */}
            <div className="mt-10 w-full max-w-lg">
                <SearchBar
                    city={city}
                    setCity={setCity}
                    onSearch={() => handleSearch()}
                    setWeather={setWeather}
                />
            </div>

            {/* Weather Card Section */}
            <div className="mt-12 w-full max-w-md">
                {loading ? (
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-6 text-center shadow-md flex flex-col items-center gap-3 animate-pulse">
                        <Loader2 className="w-7 h-7 text-blue-500 animate-spin" />
                        <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
                            Fetching weather...
                        </p>
                    </div>
                ) : weather ? (
                    <WeatherCard weather={weather} />
                ) : (
                    <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-6 text-center shadow-sm flex flex-col items-center gap-2">
                        <Sun className="w-8 h-8 text-yellow-400" />
                        <p className="text-lg text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                            <Search className="w-4 h-4" /> Search for a city to
                            see the weather!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
