'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';


export default function MovieCard({ movie }: { movie: Movie }) {
const poster = movie.poster_path
? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
: '/fallback-poster.png';


return (
<Link href={`/movie/${movie.id}`} className="group">
<div className="min-w-[140px] md:min-w-[160px] lg:min-w-[180px]">
<div className="rounded-md overflow-hidden shadow-md">
<Image
src={poster}
alt={movie.title || movie.name || 'Poster'}
width={300}
height={450}
style={{ width: '100%', height: 'auto' }}
/>
</div>
<h4 className="mt-2 text-sm text-gray-200 line-clamp-2">{movie.title || movie.name}</h4>
</div>
</Link>
);
}