import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { fetchPopular, fetchTopRated, fetchNowPlaying } from '@/lib/tmdb';
import { MovieListResponse } from '@/types/movie';


export default async function Home() {
// Server-side fetches
const [popularRes, topRes, nowRes] = await Promise.all([
fetchPopular(),
fetchTopRated(),
fetchNowPlaying(),
]);


const popular = (popularRes as MovieListResponse).results || [];
const topRated = (topRes as MovieListResponse).results || [];
const nowPlaying = (nowRes as MovieListResponse).results || [];


const heroMovie = popular[0] ?? topRated[0] ?? nowPlaying[0] ?? null;


return (
<div className="max-w-6xl mx-auto px-4">
<HeroBanner movie={heroMovie} />


<section className="mt-8">
<MovieRow movies={popular} categoryTitle="Popular" />
<MovieRow movies={topRated} categoryTitle="Top Rated" />
<MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
</section>
</div>
);
}