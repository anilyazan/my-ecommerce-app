// redux/reducers.js
import { combineReducers } from 'redux';

const initialState = {
  products: [],
  cart: [],
  // Diğer state değerleri buraya eklenebilir
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  // Diğer reducer'lar burada eklenebilir
});

export default rootReducer;
