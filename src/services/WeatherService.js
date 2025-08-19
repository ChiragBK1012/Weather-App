import axios from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city) {
    if (!city || city.trim() === "") {
        throw new Error("Please enter a city name");
    }

    try {
        const { data } = await axios.get(baseURL, {
            params: {
                q: city.trim(),
                appid: apiKey,
                units: "metric",
            },
        });

        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);

        if (error.response) {
            throw new Error(error.response.data.message || "City not found");
        } else if (error.request) {
            throw new Error("No response from weather server");
        } else {
            throw new Error("Something went wrong. Please try again.");
        }
    }
}
