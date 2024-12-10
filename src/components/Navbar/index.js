import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'
import {useState} from 'react'

function Navbar(props) {
  const [searchInput, setSearchInput] = useState('')
  const onInputChange = event => {
    setSearchInput(event.target.value)
  }
  const onSearch = event => {
    const {history} = props
    const {replace} = history
    event.preventDefault()
    replace(`search?Q=${searchInput}`)
  }

  return (
    <nav className="navbar-container">
      <div className="navbar-logo-links-container">
        <div className="navbar-logo">StreamFlix</div>
        <Link className="nav-item" to="/">
          <div>Popular</div>
        </Link>
        <Link className="nav-item" to="/toprated">
          <div>Top Rated</div>
        </Link>
        <Link className="nav-item" to="/upcoming">
          <div>Upcoming</div>
        </Link>
      </div>

      <form className="navbar-search-container" onSubmit={onSearch}>
        <input
          type="search"
          value={searchInput}
          onChange={onInputChange}
          placeholder="Search"
          className="search-bar"
        />
        <button className="search-bar-button" type="submit">
          <RiSearchLine className="search-bar-icon" />
        </button>
      </form>
    </nav>
  )
}

export default withRouter(Navbar)
