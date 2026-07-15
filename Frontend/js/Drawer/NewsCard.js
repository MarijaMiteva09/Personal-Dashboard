export function createNewsCard(article) {
  const card = document.createElement("article");
  card.className = "news-card";

  card.innerHTML = `
        <img
            class="news-image"
            src="${article.image || "Assets/news/default-news.png"}"
            alt="${article.title}"
        />

        <div class="news-content">
            <h3>${article.title}</h3>

            <p>${article.description}</p>

            <span>${article.time}</span>
        </div>
    `;

  return card;
}
