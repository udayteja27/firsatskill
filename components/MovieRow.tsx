'use client';
import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';


export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
return (
<section className="py-6">
<h3 className="text-white text-lg font-semibold mb-3">{categoryTitle}</h3>
<div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
{movies.map(m => (
<MovieCard key={m.id} movie={m} />
))}
</div>
</section>
);
}