import React from 'react';
 import {data} from '../data';
import NavBar from './NavBar';
import Moviecard from './MovieCard';

class  App extends React.Component {

  componentDidMount() {
   //make  API call
   //dispatch actions
   const {store} = this.props;
   store.subscribe(() => {
     console.log('updated');
     this.forceUpdate();
   });
   store.dispatch({
     type: "ADD_MOVIES",
     movies: data
   });
   console.log('STATE', this.props.store.getState());


  }
  render() {
    const movies = this.props.store.getState();
    console.log('Render');
  return (
    <div className="App">
    <NavBar />
    <div className = "main">
      <div className = "tabs">Movies
        <div className = "tab"> Favorites
        
        </div>
      </div>

      <div className = "list">
        {data.map((movie, index) => (
          <Moviecard movie = {movie} key = {`movie- ${index}`}/>
        ))};
      </div>
    </div>
    </div>
  );
  }
}

export default App;
