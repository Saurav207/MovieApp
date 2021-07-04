import {combineReducers} from 'redux';
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT} from '../actions/index';
// import { combineReducers } from 'redux';

const initialMovieState = {
  list: [], 
  favourites: [],
  showFavourite: false
}
export  function movies(state = initialMovieState, action) {
  //  if(action.type === ADD_MOVIES)
  //    return {
  //     ...state,
  //     list: action.movies 
  //    };

  //    return state;
  switch (action.type) {
    case ADD_MOVIES: 
    return {
     ...state,   //old state which is coming as a parameter
     list: action.movies
    }

    case ADD_FAVOURITE:
      return {
       ...state,
       favourites: [action.movie, ...state.favourites]
      }
      case REMOVE_FAVOURITES: 
     
        const filterArray = state.favourites.filter(
          movie => movie.Title !== action.movie.Title);
           return {
             ...state,
             favourites : filterArray
           }


      case SET_SHOW_FAVOURITE:
         return {
           ...state,
           showFavourite: action.val
         }

         case ADD_MOVIE_TO_LIST: 
         return {
           ...state,
           list: [action.movie, ...state.list]
         }


      default:
        return state;
  }
};

const initialSearchState = {
  result : {},
  showFavourite: false
};
export function search(state = initialSearchState, action) {

  switch(action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showFavourite: true
      }
      case ADD_MOVIE_TO_LIST: 
      return {
        ...state,
        showFavourite: false
      }
  default:
  return state;
}
}

// const initialRootReducer = {
//   movie: initialMovieState,
//   search: initialSearchState
// };

// export default function rootReducer(state = initialRootReducer, action) {
//   return {
//     movies: movies(state.movies, action),  //this is my movie reducer and here I pass state.moviesbecause state contain both things movies and search as well 
//     search: search(state.search, action)    //this is my search reducer 
//   }
// }

export default combineReducers({
  movies: movies,
  search: search
})