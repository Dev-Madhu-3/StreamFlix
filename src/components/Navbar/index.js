import './index.css'
import {Link} from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-links-container">
        <div className="navbar-logo">StreamFlix</div>
        <Link className="nav-item" to="/popular">
          <div>Popular</div>
        </Link>
        <Link className="nav-item" to="/toprated">
          <div>Top Rated</div>
        </Link>
        <Link className="nav-item" to="/upcoming">
          <div>Upcoming</div>
        </Link>
      </div>

      <form className="navbar-search-container">
        <input type="search" className="search-bar" />
        <button className="search-bar-button" type="submit">
          <RiSearchLine className="search-bar-icon" />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
