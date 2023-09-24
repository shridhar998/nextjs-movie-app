// pages/movie/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../utils/api'; // Import the API function
import MovieDetails from '@/components/movieDetails';

const MovieDetailsPage = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(router.query)
    if (id) {
      // Fetch movie details when 'id' is defined
      const fetchDetails = async () => {
        try {
          const movieDetails = await fetchMovieDetails(id);
          setMovie(movieDetails);
        } catch (error) {
          // Handle error
        }
      };

      fetchDetails();
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <MovieDetails movie={movie}/>
    </div>
  );
};

export default MovieDetailsPage;
