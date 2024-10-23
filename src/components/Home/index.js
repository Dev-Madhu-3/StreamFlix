import './index.css'
import Navbar from '../Navbar'
import MovieCard from '../MovieCard'

function Home() {

  useEffect(()=>{
    
  })

  return (
    // 685fff8bd9824a25a6727a6555b1354c
    <div className="home-container">
      <Navbar />
      <div className="responsive-container">
        <h1 className="home-heading">Popular movies</h1>
        <div className="home-popular-movies-container">
          <MovieCard />
        </div>
      </div>
    </div>
  )
}

export default Home
