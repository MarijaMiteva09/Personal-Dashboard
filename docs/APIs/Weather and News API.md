
# Weather API (`weatherApi.js`)

## Overview

The Weather API module is responsible for retrieving current weather information from **WeatherAPI**. It builds the request URL, sends the HTTP request, validates the response, and returns the weather data as a JavaScript object.

---

## API Key

```
const API_KEY = "...";
```

### Purpose

Stores the authentication key required to access the WeatherAPI service.

**Responsibilities**

- Authenticates every request.
- Keeps the key centralized.
- Avoids duplicating the key throughout the code.

> **Note:** In production, API keys should be stored in environment variables.

---

## `getWeather(city)`

### Purpose

Fetches the current weather forecast for the specified city.

### Parameters

|Name|Type|Default|Description|
|---|---|---|---|
|`city`|`string`|`"Skopje"`|The city for which weather data will be retrieved.|

### Returns

`Promise<Object>`

A Promise that resolves to the weather information returned by WeatherAPI.

### Workflow

1. Builds the WeatherAPI endpoint.
2. Sends an HTTP request using `fetch()`.
3. Waits for the server response.
4. Verifies that the request succeeded.
5. Converts the JSON response into a JavaScript object.
6. Returns the parsed weather data.

### Error Handling

If the request fails, the function throws an exception.

```
if (!response.ok) {
    throw new Error("Failed to fetch weather data");
}
```

---

# News API (`newsApi.js`)

## Overview

The News API module is responsible for retrieving the latest news articles from the configured news service. It abstracts the communication with the external API so that other parts of the application only need to request news data.

---

## API Key

```
const API_KEY = "...";
```

### Purpose

Stores the authentication key used to access the News API service.

**Responsibilities**

- Authenticates API requests.
- Keeps credentials centralized.
- Simplifies maintenance.

---

## `getNews()`

_(Or whatever your function is called.)_

### Purpose

Retrieves the latest news articles from the external news service.

### Parameters

If your function doesn't accept any parameters:

> This function does not require any parameters.

If it accepts a category, country, or search query, document those instead.

### Returns

`Promise<Object>`

A Promise that resolves to the news data returned by the News API.

### Workflow

1. Builds the News API endpoint.
2. Sends an HTTP request.
3. Waits for the response.
4. Validates the response status.
5. Parses the JSON response.
6. Returns the news articles.

### Error Handling

```
if (!response.ok) {
    throw new Error("Failed to fetch news data");
}
```

Throws an error when the request cannot be completed successfully.