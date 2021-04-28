import React from 'react';
import {data} from '../data';
import NavBar from './NavBar';
import Moviecard from './MovieCard';

function App() {
  return (
    <div className="App">
    <NavBar />
    <div className = "main">
      <div className = "tabs">Movies
        <div className = "tab"> Favorites
        
        </div>
      </div>

      <div className = "list">
        {data.map(movie => (
          <Moviecard movie = {movie}/>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
