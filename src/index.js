import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './component/App';
import rootReducer from './reducers';

//function  logger(obj, next, action)
// const logger = function({dispatch, getState}) {
//   return function (next) {
//     return function (action) {
//       //middleware Code
//       console.log('Action Type = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) =>{
  //logger code

  // if(typeof action !== 'function') {
  console.log('Action', action);
  
  next(action);

}

// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   //logger code


//   if(typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// } 

const store = createStore(rootReducer, applyMiddleware(logger, thunk));  //pass reducer as an argument
//  console.log('store', store);

 
//export const storeContext = createContext();

// class Provider extends React.Component {
//   render() {
//     const {store} = this.props;
//      return (
//        <storeContext.Provider value = {store}>
//          {/* pass the children */}
//          {this.props.children}
//        </storeContext.Provider>
//      )
//   }
// }


//   //dispatch is basically used to send actions..
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]


// });
// console.log('After State', store.getState());

ReactDOM.render(
  <Provider store = {store}>
   <App />
   </Provider>,
  document.getElementById('root')
);


