import axios from "axios";

const apiKey = '5eb8e035a7983f93226783b942b0723b';
const url = 'https://api.themoviedb.org/3';
const popular = `${url}/movie/popular?a${apiKey}&page=1`;

export const fetchMovies = async () =>{
    const {data} = axios.get(popular);
    const posterUrl = 'https://image.tmdb.org/t/p/w185/';
    const modifiedData = data['results'].map( (m) => ({
        id: m['id'],
        backPoster: posterUrl + m['backdrop_path'],
        popularity: m['popularith'],
        title: m['title'],
        poster: posterUrl + m['poster_path'],
        overview: m['overview'],
        rating: m['vote_average'],
    }))
    return modifiedData;
}