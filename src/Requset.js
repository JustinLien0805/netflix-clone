const API_KEY = "106d8322605a7861b08a45336b8c5229";
const API_BASE = "https://api.themoviedb.org/3";
const request ={
    fetchTrending: `${API_BASE}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${API_BASE}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${API_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${API_BASE}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;