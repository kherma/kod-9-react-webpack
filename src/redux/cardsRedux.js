import { v4 as uuidv4 } from 'uuid';
import { strContains } from '../utils/strContains';

// Selectors

export const getFilteredCards = ({ cards, searchString }, columnId, favorite) =>
  cards.filter((card) =>
    favorite
      ? card.isFavorite
      : card.columnId === columnId && strContains(card.title, searchString)
  );

// Actions

const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

// Actions creators

export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const toggleCardFavorite = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});

// Reducer

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: uuidv4() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};

export default cardsReducer;
