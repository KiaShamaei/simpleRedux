import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux'
import {createStore} from 'redux'
import { Provider } from 'react-redux';


// //------store that is global state 
// //step 1 import {createStore} from 'redux'


// //action increment
// const Increment = ()=>{
//   return {type: "INCREMENT"}
// }
// const Decrement = ()=>{
//   return {type: "DECREMENT"}
// }


// //reducer check which action must happen base happen
// const counter = (state = 0 , action)=>{
//   switch(action.type){
//     case "INCREMENT" : 
//     return state + 1 ;
//     case "DECREMENT":
//     return state - 1;
//   }

// }
// let store = createStore(counter)
// //display in console 
// store.subscribe(()=>console.log(store.getState()))
// //test run 
// store.dispatch(Increment())
// store.dispatch(Decrement())

// //dispatch send action to reducer ======
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
