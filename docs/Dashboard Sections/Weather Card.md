
## Overview

The Weather Card is a dashboard widget that displays the user's current weather conditions in a compact and visually engaging format. It combines real-time weather data with dynamic backgrounds, a live clock, and location information to provide an at-a-glance overview of the current environment.

---

## Purpose

The purpose of the Weather Card is to give users immediate access to important weather information without leaving the dashboard. It serves as a quick daily reference while also enhancing the overall visual experience through animated backgrounds that reflect current weather conditions.

---

## Responsibilities

- Fetch current weather data from the Weather API.
    
- Display the current temperature and weather condition.
    
- Show the user's location.
    
- Display the current time with a live updating clock.
    
- Change the background animation based on the current weather and time of day.
    
- Handle loading and error states when weather data cannot be retrieved.
    

---

## User Flow

1. The dashboard loads.
    
2. The Weather Card requests the user's current weather information.
    
3. Weather data is retrieved from the Weather API.
    
4. The appropriate animated background is selected based on the weather condition and whether it is day or night.
    
5. The card displays:
    
    - Current temperature
        
    - Weather condition
        
    - City and country
        
    - Current time
        
6. The clock updates continuously while the dashboard remains open.
    
7. Weather information is refreshed whenever the feature is rendered again. 
    

---

## Components

The Weather Card consists of the following UI components:

- Weather Card Container
    
- Weather Background
    
- Location Display
    
- Temperature Display
    
- Weather Condition Label
    
- Live Clock
    
- Weather Icon
    

---

## Data

The Weather Card uses the following data:

|Data|Description|
|---|---|
|Temperature|Current outdoor temperature|
|Weather Condition|Text description (Sunny, Cloudy, Rain, etc.)|
|Weather Code|Numeric weather code used to determine the background|
|Day/Night Status|Indicates whether it is currently day or night|
|Location|City and country|
|Local Time|Current local time for the selected location|

---

## Dependencies

### APIs

- WeatherAPI.com
    

### Components

- Weather Card
    
- Weather Background
    

### Utilities

- `getWeatherBackground()`
    

---

## Files

| File                         | Purpose                                                         |
| ---------------------------- | --------------------------------------------------------------- |
| `WeatherCard.js`             | Renders the Weather Card and updates the UI.                    |
| `weatherApi.js`              | Fetches weather data from WeatherAPI.                           |
| `weatherBackground.js`       | Maps weather conditions to the appropriate animated background. |
| `weather.css`                | Styles the Weather Card.                                        |
| `weather.card` and dashboard | Defines the Weather Card container.                             |
| `/assets/weatherbackground/` | Stores weather background videos or images.                     |

---

## Future Improvement

-  Add hourly weather forecast.
    
-  Display a 7-day forecast.
    
-  Allow users to search for a different location.
    
-  Cache weather data to reduce API requests.
    
-  Animate weather transitions more smoothly.
    
-  Display additional weather metrics (humidity, wind speed, UV index, feels like temperature).
    
-  Allow users to choose between Celsius and Fahrenheit.
    
-  Automatically refresh weather data at configurable intervals.


## Related Documentation 
- [[Weather API]] 
- [[Drawer Section Style]]