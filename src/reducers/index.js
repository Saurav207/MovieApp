import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITES, SET_SHOW_FAVOURITE} from '../actions/index';

const initialMovieState = {
  list: [], 
  favourites: []
}
export default function movies(state = initialMovieState, action) {
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

