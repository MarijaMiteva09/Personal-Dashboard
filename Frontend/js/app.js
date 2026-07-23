import { renderWeather } from "./Drawer/WeatherCard.js";
import { initializeDrawer } from "./Drawer/Drawer.js";
import { createNewsCard } from "./Drawer/NewsCard.js";
import { getNews } from "./api/newsApi/newsApi.js";
import { renderCalendarHeader, changeMonth } from "./Calendar/Calendar.js";

async function renderNews() {
  const newsList = document.getElementById("news-list");

  const articles = await getNews();

  articles.slice(0, 5).forEach((article) => {
    newsList.appendChild(
      createNewsCard({
        image: article.urlToImage,
        title: article.title,
        description: article.description,
        time: article.publishedAt,
      }),
    );
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  initializeDrawer();

  await renderWeather();

  await renderNews();

  renderCalendarHeader();

  document.getElementById("prev-month").addEventListener("click", () => {
    changeMonth(-1);
  });

  document.getElementById("next-month").addEventListener("click", () => {
    changeMonth(1);
  });
});
