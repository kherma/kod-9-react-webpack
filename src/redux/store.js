import { createStore } from 'redux';
import initialState from './initialState';
import { v4 as uuidv4 } from 'uuid';
import { strContains } from '../utils/strContains';

// Selectors

export const getFilteredCards = ({ cards, searchText }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchText)
  );

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) =>
  lists.find(({ id }) => id === listId);

// Actions creators

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const updateSearchstring = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

// Reducer

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
    case 'UPDATE_SEARCHSTRING':
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
