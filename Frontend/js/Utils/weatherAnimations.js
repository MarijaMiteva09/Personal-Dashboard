export function getWeatherAnimation(code, isDay) {
  if (isDay) {
    switch (code) {
      case 1000:
        return "sunny.lottie";

      case 1003:
      case 1006:
      case 1009:
        return "cloudy.lottie";

      case 1114:
        return "windy.lottie";

      case 1063:
      case 1183:
      case 1189:
        return "rain.lottie";

      case 1210:
      case 1213:
      case 1219:
        return "snow.lottie";

      default:
        return "cloudy.lottie";
    }
  }

  switch (code) {
    case 1000:
      return "night.lottie";

    case 1003:
    case 1006:
    case 1009:
      return "night-cloudy.lottie";

    case 1063:
    case 1183:
    case 1189:
      return "night-rain.lottie";

    case 1210:
    case 1213:
    case 1219:
      return "night-snow.lottie";

    default:
      return "night.lottie";
  }
}
