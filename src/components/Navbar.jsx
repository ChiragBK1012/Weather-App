import { useEffect, useState } from "react";
import { Sun, Moon, CloudSun } from "lucide-react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
                {/* Brand with icon */}
                <div className="flex items-center gap-2">
                    <CloudSun className="w-8 h-8 text-brand" />
                    <h1 className="text-3xl font-bold text-brand">Weatherly</h1>
                </div>

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                    className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 
                     bg-zinc-300 dark:bg-zinc-700"
                >
                    <span
                        className={`absolute left-1 inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                            darkMode ? "translate-x-6" : "translate-x-0"
                        }`}
                    >
                        {darkMode ? (
                            <Sun className="w-3 h-3 text-red-500" />
                        ) : (
                            <Moon className="w-3 h-3 text-zinc-600" />
                        )}
                    </span>
                </button>
            </div>
        </nav>
    );
}
