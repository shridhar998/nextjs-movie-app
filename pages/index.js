import Link from 'next/link';
import SearchBar from '@/components/searchBar';
import { useEffect, useState } from 'react';
import { fetchMovies,searchMovie } from '@/utils/api';
import MovieCard from '@/components/movieCard';

const movies = [
  // Dummy list of movies data (just for initial rendering no use now)
  {
    id: 1,
    title: 'Movie 1',
    releaseDate: '2023-01-01',
    posterURL: 'https://avatars.githubusercontent.com/u/83115648?v=4',
  },
  {
    id: 2,
    title: 'Movie 1',
    releaseDate: '2023-01-01',
    posterURL: 'https://avatars.githubusercontent.com/u/83115648?v=4',
  },
  {
    id: 3,
    title: 'Movie 1',
    releaseDate: '2023-01-01',
    posterURL: 'https://avatars.githubusercontent.com/u/83115648?v=4',
  },
  {
    id: 4,
    title: 'Movie 1',
    releaseDate: '2023-01-01',
    posterURL: 'https://avatars.githubusercontent.com/u/83115648?v=4',
  },
  {
    id: 5,
    title: 'Movie 1',
    releaseDate: '2023-01-01',
    posterURL: 'https://avatars.githubusercontent.com/u/83115648?v=4',
  },
];

const Home = () => {
  const [results,setResults] = useState([])
  const [loading,isLoading] = useState(true);
  const fetcher =async()=>{
    const data = await fetchMovies(isLoading);
    setResults(data);
  }
  
  useEffect(()=>{
    fetcher()
  },[])

  const handleSearch = async(query) => {
    // Implemented search logic here, e.g., make an API request with the query.

    console.log('Searching for:', query);
    isLoading(true)
    const searchedMovies = await searchMovie(query,isLoading);
    setResults(searchedMovies);
  };
  return (
    <div className="bg-gray-100 min-h-screen py-8 ">
      <div className="container p-8">
        <SearchBar onSearch={handleSearch} />
        <h1 className="text-4xl font-semibold text-center mt-4 text-gray-800 mb-6">Popular Movies</h1>
        {
          loading?
          (<div>Loading.....</div>):
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
                <MovieCard movie={movie}/>
            </Link>
          ))}
        </div>
        }
      </div>
    </div>
  );
};

export default Home;
