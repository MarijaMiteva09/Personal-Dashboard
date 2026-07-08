const API_KEY = "16113c7e37f941cda27182442260207";

export async function getWeather(city = "Skopje") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return await response.json();
}
