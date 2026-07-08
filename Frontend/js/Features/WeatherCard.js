const weatherCard = document.getElementById("weather-card");

weatherCard.innerHTML = `
    <div class="weather-top">
        <span class="location">Skopje</span>
        <span class="weather-icon">☀️</span>
    </div>

    <div class="weather-current">
        <span class="temperature">24°</span>
        <span class="condition">Sunny</span>
    </div>

    <div class="weather-bottom">
        <div class="detail-row">
            <span>💧 52%</span>
            <span>🌬️ 8 km/h</span>
        </div>

        <div class="detail-row">
            <span>H: 27°</span>
            <span>L: 18°</span>
        </div>
    </div>
`;
