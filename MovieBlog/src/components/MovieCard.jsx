import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({movie}) => {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.imdbID)

    function onFavoriteClick(e) {
        // console.log("Favorite clicked for movie:", movie.title);
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.imdbID)
        else addToFavorites(movie)

    }
    

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                  {favorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year} </p>
            
        </div>
    </div>
  )
}

export default MovieCard