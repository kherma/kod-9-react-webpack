import { createStore } from 'redux';
import initialState from './initialState';
import { v4 as uuidv4 } from 'uuid';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchText }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchText)
  );

export const getAllColumns = (state) => state.columns;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: uuidv4() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: uuidv4() }],
      };
    case 'SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
