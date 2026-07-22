# API Documentation

## Overview

The API layer is responsible for all communication between the Personal Dashboard and external services. It provides a single place for fetching, processing, and returning data needed by the application's features.

By separating API logic from the UI, the project becomes easier to maintain, test, and extend. UI components only request data from the API layer without needing to know how or where that data is retrieved.

## Responsibilities

The API layer is responsible for:

- Sending HTTP requests to external APIs.
- Handling asynchronous operations using `async`/`await`.
- Parsing JSON responses.
- Handling network and server errors.
- Returning clean, reusable data to the rest of the application.

## Structure

Each external service has its own module inside the `api/` directory.

Example:

api/
├── weatherApi/
│   └── weatherApi.js
├── newsApi/
│   └── newsApi.js
└── ...