import {combineReducers} from 'redux';
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE, } from '../actions/index';
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
     ...state, 
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


      default:
        return state;
  }
};

const initialSearchState = {
  result : {}
};
export function search(state = initialSearchState, action) {
  return state;
};

const initialRootReducer = {
  movie: initialMovieState,
  search: initialSearchState
};

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