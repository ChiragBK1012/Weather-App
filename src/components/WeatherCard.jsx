import { MapPin, Thermometer, Wind, Droplets } from "lucide-react";

export default function WeatherCard({ weather }) {
    if (!weather || !weather.main || !weather.sys) return null;

    return (
        <div
            className="group relative mt-10 max-w-lg mx-auto 
        rounded-2xl bg-white dark:bg-zinc-800 
        shadow-md dark:shadow-lg overflow-hidden
        transition-all duration-500"
        >
            {/* Outer animated border */}
            <span
                className="pointer-events-none absolute inset-0 rounded-2xl 
        border border-zinc-200 dark:border-zinc-700 
        before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-purple-500 
        before:scale-0 before:transition-transform before:duration-500 before:opacity-0 
        group-hover:before:scale-100 group-hover:before:opacity-100"
            ></span>

            <div className="relative p-6 z-10">
                {/* Location */}
                <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-600 dark:text-purple-400">
                    <MapPin className="w-5 h-5" /> {weather.name},{" "}
                    {weather.sys.country}
                </h2>

                {/* Animated divider */}
                <div className="relative my-4 h-[1px] bg-transparent">
                    <span className="absolute left-0 top-0 h-[1px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
                </div>

                {/* Temp */}
                <p className="text-5xl font-bold my-2 text-zinc-800 dark:text-zinc-100">
                    {Math.round(weather.main.temp)}°C
                </p>

                {/* Condition */}
                <p className="text-lg text-zinc-600 dark:text-zinc-300 italic mb-4">
                    {weather.weather?.[0]?.description}
                </p>

                {/* Animated divider */}
                <div className="relative my-4 h-[1px] bg-transparent">
                    <span className="absolute left-0 top-0 h-[1px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
                </div>

                {/* Extra Details */}
                <div className="grid grid-cols-3 gap-4 text-center relative">
                    {/* Vertical divider 1 */}
                    <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-transparent">
                        <span className="absolute left-0 top-0 w-[1px] h-0 bg-purple-500 transition-all duration-500 group-hover:h-full"></span>
                    </div>
                    {/* Vertical divider 2 */}
                    <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-transparent">
                        <span className="absolute left-0 top-0 w-[1px] h-0 bg-purple-500 transition-all duration-500 group-hover:h-full"></span>
                    </div>

                    {/* Feels Like */}
                    <div className="flex flex-col items-center">
                        <Thermometer className="w-6 h-6 text-red-500" />
                        <span className="text-zinc-800 dark:text-zinc-100">
                            {Math.round(weather.main.feels_like)}°C
                        </span>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Feels Like
                        </p>
                    </div>

                    {/* Wind */}
                    <div className="flex flex-col items-center">
                        <Wind className="w-6 h-6 text-blue-500" />
                        <span className="text-zinc-800 dark:text-zinc-100">
                            {weather.wind?.speed} m/s
                        </span>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Wind
                        </p>
                    </div>

                    {/* Humidity */}
                    <div className="flex flex-col items-center">
                        <Droplets className="w-6 h-6 text-teal-500" />
                        <span className="text-zinc-800 dark:text-zinc-100">
                            {weather.main.humidity}%
                        </span>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Humidity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
