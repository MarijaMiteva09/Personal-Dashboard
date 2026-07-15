const API_KEY = "3a0f2c88cf494e2f9d5a7df39e27900c";

export async function getNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();

  return data.articles;
}
