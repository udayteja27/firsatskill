import { fetchMovieById } from '@/lib/tmdb';
import Image from 'next/image';


export default async function MoviePage({ params }: { params: { id: string } }) {
const id = params.id;
const data = await fetchMovieById(id);


const title = data.title || data.name;
const poster = data.poster_path ? `https://image.tmdb.org/t/p/w780${data.poster_path}` : null;


return (
<div className="max-w-5xl mx-auto px-4 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1">
{poster ? (
<div className="rounded-md overflow-hidden shadow-xl">
<Image src={poster} alt={title} width={600} height={900} style={{ width: '100%', height: 'auto' }} />
</div>
) : (
<div className="bg-gray-800 h-96 rounded-md" />
)}
</div>
<div className="md:col-span-2">
<h1 className="text-3xl font-bold mb-2">{title}</h1>
<p className="text-sm text-gray-300 mb-4">{data.tagline}</p>
<p className="text-gray-200 mb-4">{data.overview}</p>


<div className="flex flex-wrap gap-3 text-sm">
<div>Release: {data.release_date}</div>
<div>Rating: {data.vote_average}</div>
{data.genres && (
<div>
Genres: {data.genres.map((g: any) => g.name).join(', ')}
</div>
)}
</div>
</div>
</div>
</div>
);
}