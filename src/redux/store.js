import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

// Selectors

export const getFilteredCards = ({ cards, searchString }, columnId, favorite) =>
  cards.filter((card) =>
    favorite
      ? card.isFavorite
      : card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) =>
  lists.find(({ id }) => id === listId);

export const getColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);

export const getAllLists = (state) => state.lists;

// Actions creators

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

export const updateSearchstring = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

// Reducer

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
