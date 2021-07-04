import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Moviecard from './MovieCard';
import { addMovie, setShowFavourite } from '../actions/index';


import {data as moviesList} from '../data';

class  App extends React.Component {

  componentDidMount() {
   //make  API call
   //dispatch actions
   this.props.dispatch(addMovie(moviesList));
  }
   isMovieFavourite = (movie) => {
    const {movies} = this.props;

    const index = movies.favourites.indexOf(movie);
    if(index !== -1) {
      //found the movie
      return true;
    }

    return false;
   }


   onChangeTab = (val) => {
      this.props.dispatch(setShowFavourite(val))
   }
  render() {
    const {movies, search} = this.props;   //{ movie: {}, search: {} }
    console.log('movies', movies);
    const {list, favourites = [], showFavourite = []} = movies;  
   

    const displayMovie = showFavourite ? favourites : list;


  return (
    <div className="App">
    <NavBar search={search}/>
    <div className = "main">
      <div className = "tabs">
      <div className = {`tab  ${showFavourite ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
        <div className = {`tab  ${showFavourite ?  'active-tabs' : ''}`}onClick = {() => this.onChangeTab(true)}> Favorites</div>
        
      </div>

      <div className = "list">
        {displayMovie.map((movie, index) => (
          <Moviecard movie = {movie}
          key={movie.imdbID}
            dispatch = {this.props.dispatch}
            isFavourite = {this.isMovieFavourite(movie)}
            />
        ))}
      </div>
      {displayMovie.length === 0 ? <div className = "no-movies">No movies to display</div> : null}
    </div>
    </div>
  );
  }
}
// class AppRapper extends React.Component {
//   render() {
//     return(
//       <storeContext.Consumer>
//         {(store) => <App store = {store} />}
//       </storeContext.Consumer>
//     )
//   }
// }
function callback(state) {
  return {
    movies: state.movies,
    search: state.search
  }
}
const connectedAppComponent = connect(callback)(App);
export default connectedAppComponent;
