import './index.css'

function MovieCard() {
  return (
    <div className="movie-card-container">
      <img
        className="movie-card-image"
        src="https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
        alt="movie poster"
      />
      <div className="movie-details">
        <h2 className="title">{}</h2>
        <p className="description">{}</p>
        <span className="rating">⭐ {}/10</span>
      </div>
    </div>
  )
}

export default MovieCard
