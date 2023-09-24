// utils/api.js
import axios from 'axios';

const API_BEARER_TOKEN  = process.env.BEARER_TOKEN;

const BASE_URL = 'http://api.themoviedb.org/3/discover/movie';

export async function fetchMovies(isLoading) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ API_BEARER_TOKEN
      },
      params:{
        language:'en-US',
        api_key:'7b8b74e1306a65b9250d0ad7c1e61755',
        sort_by:'popularity.desc',
        page:1
      }
    });
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  } finally{
    isLoading(false);
  }
}


export async function fetchMovieDetails(movie_id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ API_BEARER_TOKEN
      },
      params:{
        language:'en-US',
        api_key:'7b8b74e1306a65b9250d0ad7c1e61755'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}


export async function searchMovie(movie_name,isLoading) {
  const obj = {
    query:movie_name,
    include_adult:false,
    language:'en-US',
    page:1
  }
  const res = '?'+ new URLSearchParams(obj).toString();
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+ API_BEARER_TOKEN
      },
      params:{
        query:movie_name,
        include_adult:false,
        language:'en-US',
        page:1,
        api_key:'7b8b74e1306a65b9250d0ad7c1e61755'
      }
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }finally{
    isLoading(false);
  }
}


