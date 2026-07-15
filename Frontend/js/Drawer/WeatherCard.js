import { getWeather } from "../api/weatherApi/weatherApi.js";
import { getWeatherBackground } from "../Utils/weatherBackground.js";

let clockInterval;

export async function renderWeather() {
  const weatherCard = document.getElementById("weather-card");

  const data = await getWeather();

  const background = getWeatherBackground(
    data.current.condition.code,
    data.current.is_day,
  );

  weatherCard.innerHTML = `
    <div
      class="weather-background"
      style="background-image: url('${background}')"
    >
      <div class="weather-overlay">

        <div class="weather-top">

          <div class="weather-info">
            <p class="condition">
              ${data.current.condition.text}
            </p>

            <h1 class="temperature">
              ${Math.round(data.current.temp_c)}°
            </h1>
          </div>


          <div class="weather-time">

            <h2 id="clock"></h2>

            <p id="date"></p>

            <p class="location">
              ${data.location.name}
            </p>

          </div>


        </div>

      </div>
    </div>
  `;

  updateClock();

  if (clockInterval) {
    clearInterval(clockInterval);
  }

  clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  if (!clock || !date) return;

  const now = new Date();

  clock.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  date.textContent = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
