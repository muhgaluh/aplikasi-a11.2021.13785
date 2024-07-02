import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'Muh Galuh Surya Putra Kusuma',
    nim: 'A11.2021.13785'
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
