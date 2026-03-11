const cities = [
  { name: "Delhi", lat: 28.61, lon: 77.23 },
  { name: "London", lat: 51.50, lon: -0.12 },
  { name: "Tokyo", lat: 35.68, lon: 139.69 }
];

const container = document.getElementById("weather-container");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

function getWeatherEmoji(code) {
  if (code === 0) return "☀️ Clear";
  if (code <= 3) return "⛅ Partly Cloudy";
  if (code <= 48) return "🌫 Fog";
  if (code <= 67) return "🌧 Rain";
  if (code <= 77) return "❄️ Snow";
  if (code <= 99) return "⛈ Thunderstorm";
  return "🌡 Unknown";
}

async function fetchWeather(city) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("API Error");

  const data = await res.json();

  return {
    name: city.name,
    temp: data.current_weather.temperature,
    code: data.current_weather.weathercode
  };
}

async function loadWeather() {
  try {
    loader.style.display = "block";

    const promises = cities.map(city => fetchWeather(city));

    const results = await Promise.all(promises);

    loader.style.display = "none";

    results.forEach(city => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${city.name}</h2>
        <div class="emoji">${getWeatherEmoji(city.code).split(" ")[0]}</div>
        <div class="temp">${city.temp}°C</div>
        <div>${getWeatherEmoji(city.code).split(" ").slice(1).join(" ")}</div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    loader.style.display = "none";
    errorDiv.textContent = "❌ Failed to fetch weather data";
    console.error(error);
  }
}

loadWeather();