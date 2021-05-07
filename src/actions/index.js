// {
//     type: 'ADD_MOVIES';
//       movies: [m1, m2, m3];
// }





//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE'; 
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';

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