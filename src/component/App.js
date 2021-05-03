import React from 'react';
 import {data} from '../data';
import NavBar from './NavBar';
import Moviecard from './MovieCard';
import { addMovie } from '../actions/index';
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
  render() {
    const {list} = this.props.store.getState();  //{ list: [], favourites: [] }
    console.log('Render', this.props.store.getState());
  return (
    <div className="App">
    <NavBar />
    <div className = "main">
      <div className = "tabs">Movies
        <div className = "tab"> Favorites
        
        </div>
      </div>

      <div className = "list">
        {list.map((movie, index) => (
          <Moviecard movie = {movie} key = {`movie- ${index}`}/>
        ))};
      </div>
    </div>
    </div>
  );
  }
}

export default App;
