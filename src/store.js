import React from 'react';
import { createStore } from 'redux';

const data = {
  products: [
    {id: 1, name: 'shoes'}, {id: 2, name: 'spatula'}
  ]
}

const reducer = (state=data, action)=>{
  let state2;
  switch (action.type){
    case 'ADD_PRODUCT':
      state2 = Object.assign({}, state)
      state2.products.push(action)
      break;
    default:
      "";
  }
  return state2;
}

const store = createStore(reducer);

store.dispatch({type:'ADD_PRODUCT', product:"belt"});
console.log(store.getState());

export default store;
