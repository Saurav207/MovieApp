import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import movies from './reducers';


const store = createStore(movies);  //pass reducer as an argument
 console.log('store', store);
// console.log('before State', store.getState());


//   //dispatch is basically used to send actions..
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]


// });
// console.log('After State', store.getState());

ReactDOM.render(
   <App store = {store} />,
  document.getElementById('root')
);


