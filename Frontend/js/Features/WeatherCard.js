import { getWeather } from "../api/weatherApi/weatherApi.js";

async function renderWeather() {
  const weatherCard = document.getElementById("weather-card");

  const data = await getWeather();

  weatherCard.innerHTML = `
    <div class="weather-animation"></div>

    <div class="weather-overlay">

        <div class="weather-location">
            ${data.location.name}
        </div>

        <div class="weather-content">

            <div class="weather-info">

                <div class="temperature">
                    ${Math.round(data.current.temp_c)}°
                </div>

                <div class="high-low">
                    <span>H ${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°</span>
                    <span>L ${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°</span>
                </div>

                <div class="weather-details">
                    <span>💧 ${data.current.humidity}%</span>
                    <span>🌬️ ${Math.round(data.current.wind_kph)} km/h</span>
                </div>

            </div>

        </div>

    </div>
`;
}

renderWeather();
