const API_KEY = ""
const BASE_URL = "http://www.omdbapi.com/"


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=Avengers`);
  const data = await response.json();
  console.log(data.Search);
  return data.Search;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search;
  } else {
    console.error("Search error:", data.Error);
    return [];
  }
};
