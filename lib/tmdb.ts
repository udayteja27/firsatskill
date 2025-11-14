const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;


if (!API_KEY) {
console.warn('TMDB_API_KEY is not set - server fetches will fail');
}


async function fetchFromTMDB(path: string) {
const url = `${BASE}${path}${path.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
const res = await fetch(url, { next: { revalidate: 60 * 5 } });
if (!res.ok) {
const text = await res.text();
throw new Error(`TMDB fetch failed: ${res.status} ${text}`);
}
return res.json();
}


export async function fetchPopular() {
return fetchFromTMDB('/movie/popular');
}


export async function fetchTopRated() {
return fetchFromTMDB('/movie/top_rated');
}


export async function fetchNowPlaying() {
return fetchFromTMDB('/movie/now_playing');
}


export async function fetchMovieById(id: string) {
return fetchFromTMDB(`/movie/${id}`);
}