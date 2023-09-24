import Image from "next/image"
const IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const MovieCard = ({movie}) =>{
    return(
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
          <Image src={`${IMAGE_URL}`+`${movie.poster_path}`}
            alt={movie.title}
            className=" object-cover" 
            width={175} 
            height={175}
            loading="lazy" 
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
            <p className="text-gray-600 text-sm">Release Date: {movie.release_date}</p>
          </div>
        </div>
    )
}

export default MovieCard;