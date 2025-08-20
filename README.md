# 🌤️ Weatherly - Weather App

A sleek and minimal **Weather Web App** built with **Vite + React +
Tailwind CSS + Lucide Icons**.\
Check real-time weather details for any city using the **OpenWeatherMap
API**.

------------------------------------------------------------------------

## 🔍 How to Use

-   Enter a city name in the search bar.
-   View **temperature, humidity, and conditions** instantly.
-   Clear the search to reset the app.
-   All requests are powered by the **OpenWeatherMap API**.

------------------------------------------------------------------------

## 💡 Features

-   🌍 Search weather by city name  
-   🌡️ Displays temperature, humidity, and weather condition  
-   ⛅ Dynamic weather icons for better visualization  
-   ❌ Clear search to remove weather card and stored data  
-   💾 Stores searched weather data in **localStorage** (persists until cleared)  
-   🔄 Weather auto-refreshes every **30 minutes** if the tab is open  
-   🌙 Light/Dark mode support  
-   ⚡ Fast and responsive UI built with **React + Tailwind**  
-   🔑 Secure API handling with environment variables  

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Vite** – Fast React bundler
-   **React** – Component-based UI
-   **Tailwind CSS** – Utility-first styling
-   **Lucide Icons** – Weather icons
-   **OpenWeatherMap API** – Real-time weather data
-   **JavaScript (ES6+)** – App logic

------------------------------------------------------------------------

## 🚀 Getting Started

To run this project locally:

**1. Clone the repository**

``` bash
git clone https://github.com/ChiragBK1012/Weather-App.git
```

**2. Navigate into the project folder**

``` bash
cd weather-app
```

**3. Install dependencies**

``` bash
npm install
```

**4. Set up environment variables**

Create a `.env` file in the root and add your OpenWeather API key:

    VITE_OPENWEATHER_API_KEY=your_api_key_here

**5. Start the development server**

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📁 Project Structure

``` plaintext
weather-app/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # Reusable components (NavBar, SearchBar, WeatherCard)
│   ├── services/       # Weather API service
│   ├── pages/          # Main page (Home)
│   ├── App.jsx         # Main app component
│   ├── index.css       # Tailwind directives + global styles
│   └── main.jsx        # Entry point
├── index.html          # Root HTML file
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

------------------------------------------------------------------------

## 🌐 Live Demo

[🚀 View the App on
Netlify](https://weatherly-chiragproject.netlify.app)
<!-- Replace with your actual Netlify link -->

------------------------------------------------------------------------

## 📜 License

This project is licensed under the [MIT License](LICENSE).

------------------------------------------------------------------------

### ❤️ Thank you for checking out Weatherly!
