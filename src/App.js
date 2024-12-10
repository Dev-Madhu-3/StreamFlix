import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TopratedMovies from './components/TopratedMovies'
import UpComingMovies from './components/UpComingMovies'
import SingleMoviePage from './components/SingleMoviePage'
import SearchedMovies from './components/SearchedMovies'
// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/toprated" component={TopratedMovies} />
    <Route exact path="/upcoming" component={UpComingMovies} />
    <Route exact path="/search" component={SearchedMovies} />
    <Route exact path="/:id" component={SingleMoviePage} />
  </Switch>
)

export default App
