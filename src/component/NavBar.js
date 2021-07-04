import React from 'react';
//import {data} from '../data';
import { connect } from 'react-redux';
import {addMovieToList, handleSearchMovie} from '../actions'




class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResult : true,
      searchText: ''
    };
    //console.log('hello constructor')
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResult: false,
      
    });
    // console.log("hello");
  }


  handleSearch = () => {
   const {searchText} = this.state;

   //fetching the API action is responsible for this 
   this.props.dispatch(handleSearchMovie(searchText));
  };
  
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

render() {

 
 const {result, showFavourite} = this.props.search;

  return (
    <div className="nav">
        <div className = "search-container">
          <input onChange={this.handleChange}/>
          <button id = "search-btn" onClick = {this.handleSearch}>Search</button>
          {showFavourite && (
          <div className = "search-results">
            <div className = "search-result">
              <img src = {result.Poster} alt = "search-pic" />

              <div className = "movie-info">
                <span>{result.Title}</span>
                <button onClick = {() => this.handleAddToMovies(result)}>
                  Add to Movies
                </button>
              </div>
            </div>
            </div>
          )}
        </div>
     </div>
  );
}
}
function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(NavBar);
