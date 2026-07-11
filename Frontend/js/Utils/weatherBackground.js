export function getWeatherBackground(code, isDay) {
  if (isDay) {
    switch (code) {
      case 1000:
        return "js/Assets/weatherbackground/sun.png";

      case 1003:
      case 1006:
      case 1009:
      case 1114:
        return "js/Assets/weatherbackground/cloudy.png";

      case 1063:
      case 1183:
      case 1189:
        return "js/Assets/weatherbackground/rain.png";

      case 1210:
      case 1213:
      case 1219:
        return "js/Assets/weatherbackground/snow.png";

      default:
        return "js/Assets/weatherbackground/cloudy.png";
    }
  }

  switch (code) {
    case 1000:
    case 1003:
    case 1006:
    case 1009:
    case 1063:
    case 1183:
    case 1189:
    case 1210:
    case 1213:
    case 1219:
    default:
      return "js/Assets/weatherbackground/night.png";
  }
}
