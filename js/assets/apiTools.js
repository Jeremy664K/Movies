import { TOKEN, URL } from "./api.js";

export async function getMovies(path, page, language) {
    const search = `${URL}/${path}?api_key=${TOKEN}&page=${page}&language=${language}`;
    
    const response = await fetch(search);
    const movies = await response.json(); 

    return movies;
}

export async function getVideoMovie(path, page, language) {
    const videos = await getMovies(path, page, language);
    return videos.results.find(({ site }) => site === "YouTube") || { key: "NakTu_VZxJ0" };
}

export function getGenres(genre_ids) {
    let genre = "";

    genre_ids.forEach((genreId, index) => {
        const genreAction = genres[genreId];
        if(index === genre_ids.length - 1) return genre += genreAction; 

        genre += ` 
            ${genreAction} 
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="4"/>
            </svg>
        `;
    });

    return genre;
}

export const titlesGroup = ["Populares en Movies", "Tendencias", "Películas emocionantes", "Agregados", "Mi lista"]; 

export const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime" ,
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};