import Image from "next/image";

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {" "}
      <div className="flex flex-col lg:flex-row">
        {" "}
        <div className="lg:w-1/3">
          {" "}
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={600}
          />{" "}
        </div>{" "}
        <div className="lg:w-2/3 p-4">
          {" "}
          <h1 className="text-3xl font-semibold mb-2">{movie.title}</h1>{" "}
          <p className="text-gray-600 text-sm">
            Release Date: {movie.release_date}
          </p>{" "}
          <p className="mt-4">{movie.overview}</p>{" "}
          <div className="mt-4">
            {" "}
            <p className="text-gray-600 text-sm">
              Runtime: {movie.runtime} minutes
            </p>{" "}
            <p className="text-gray-600 text-sm">
              Budget: &#xFF04;{movie.budget} 
            </p>{" "}
            <p className="text-gray-600 text-sm">
              Collection: &#xFF04;{movie.revenue} 
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MovieDetails;
