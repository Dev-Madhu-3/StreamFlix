import './index.css'

function MovieCard(props) {
  const {movieDetails} = props
  const {title, posterPath, voteAverage} = movieDetails
  return (
    <div className="movie-card-container">
      <img
        className="movie-card-image"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="movie poster"
      />
      <div className="movie-details">
        <h1 className="title">
          Name: <span className="title-span">{title}</span>
        </h1>
        <p className="rating">
          Rating:<span className="rating-span">{` ${voteAverage} / 10`}</span>{' '}
        </p>

        <button type="button" className="details-btn">
          More Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
