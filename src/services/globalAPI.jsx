import axios from 'axios';

const baseUrl = "https://api.themoviedb.org/3/";
const ApiKey = "032bbb5653b9a6c32d7feb06d4d42378";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=032bbb5653b9a6c32d7feb06d4d42378';


const getTrendingMovies = axios.get(baseUrl+"trending/all/day?api_key="+ApiKey);

const getMovieByGenereId = (id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default {
    getTrendingMovies,
    getMovieByGenereId
};

