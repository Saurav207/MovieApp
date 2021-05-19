import React from 'react';
 import {data} from '../data';
import NavBar from './NavBar';
import Moviecard from './MovieCard';
import { addMovie, setShowFavourite } from '../actions/index';
import movies from '../reducers';

class  App extends React.Component {

  componentDidMount() {
   //make  API call
   //dispatch actions
   const {store} = this.props;
   store.subscribe(() => {
     console.log('updated');
     this.forceUpdate();
   });
   store.dispatch(addMovie(data));
   console.log('STATE', this.props.store.getState());
  }
   isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if(index !== -1) {
      //found the movie
      return true;
    }

    return false;
   }


   onChangeTab = (val) => {
      this.props.store.dispatch(setShowFavourite(val))
   }
  render() {
    const {movies, search} = this.props.store.getState();   //{ movie: {}, search: {} }
    const {list, favourites, showFavourite} = movies;  
    console.log('Render', this.props.store.getState());

    const displayMovie = showFavourite ? favourites : list;
  return (
    <div className="App">
    <NavBar dispatch={this.props.store.dispatch} search={search}/>
    <div className = "main">
      <div className = "tabs">
      <div className = {`tab  ${showFavourite ? '' : 'active-tabs'}`} onClick = {() => this.onChangeTab(false)}>Movies</div>
        <div className = {`tab  ${showFavourite ?  'active-tabs' : ''}`}onClick = {() => this.onChangeTab(true)}> Favorites</div>
        
        
      
      </div>

      <div className = "list">
        {displayMovie.map((movie, index) => (
          <Moviecard movie = {movie}
           key = {`movie- ${index}`}
            dispatch = {this.props.store.dispatch}
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

export default App;
