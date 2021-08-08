import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        product-list: action.payload,
      };
    default:
      return state;
  }
};*/

window.store = store;
export default store;
