export interface Movie {
id: number;
title: string;
name?: string; // for tv
poster_path?: string | null;
backdrop_path?: string | null;
overview?: string;
release_date?: string;
vote_average?: number;
}


export interface MovieListResponse {
page: number;
results: Movie[];
}