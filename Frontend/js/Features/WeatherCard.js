import { getWeather } from "../api/weatherApi/weatherApi.js";
import { getWeatherAnimation } from "../Utils/weatherAnimations.js";

async function renderWeather() {
  const weatherCard = document.getElementById("weather-card");

  try {
    const data = await getWeather();

    const animation = getWeatherAnimation(
      data.current.condition.code,
      data.current.is_day,
    );

    weatherCard.innerHTML = `
    <div class="weather-animation">
        <dotlottie-player
            src="./js/Assets/weatheranimations/${animation}"
            autoplay
            loop
            background="transparent"
            style="width: 100%; height: 100%;">
        </dotlottie-player>
    </div>

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
  } catch (error) {
    console.error(error);

    weatherCard.innerHTML = `
      <p>Unable to load weather.</p>
    `;
  }
}

renderWeather();
