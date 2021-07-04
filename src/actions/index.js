// {
//     type: 'ADD_MOVIES';
//       movies: [m1, m2, m3];
// }





//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE'; 
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'

//action creators
export function addMovie(movies) {
    return {
    type: ADD_MOVIES,
    movies: movies
}};

export function addFavourite(movie) {
    return {
    type: ADD_FAVOURITE,
    movie
}};

export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITES,
        movie
    }
}

 export function setShowFavourite(val) {
     return {
         type: SET_SHOW_FAVOURITE,
         val
     }
 }   
 export function addMovieToList(movie) {
     return {
         type: ADD_MOVIE_TO_LIST,
         movie
     }
 }
//if u get an action simply pass it to the reducers and if you get function just call to to the with  dispatch as the argument

 export function handleSearchMovie(searchText) {
     const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    
     return function(dispatch) {
        fetch(url)
        .then(response => response.json())
        .then((movie) => {
            console.log('movie data', movie);

            //dispatch an action
            dispatch(addSearchResult(movie))
        })
     }

     
 }

 export function addSearchResult(movie) {
     return {
        type: ADD_SEARCH_RESULT, 
        movie
     }
}
 