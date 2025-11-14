import Image from 'next/image';
import { Movie } from '@/types/movie';


export default function HeroBanner({ movie }: { movie: Movie | null }) {
if (!movie) return null;
const title = movie.title || movie.name || 'Unknown';
const backdrop = movie.backdrop_path
? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
: undefined;


return (
<section className="relative h-[56vh] md:h-[70vh] w-full">
{backdrop && (
<Image
src={backdrop}
alt={title}
fill
priority
style={{ objectFit: 'cover' }}
/>
)}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
<div className="absolute bottom-6 left-6 text-white max-w-2xl">
<h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
<p className="text-sm md:text-base line-clamp-3">{movie.overview}</p>
</div>
</section>
);
}