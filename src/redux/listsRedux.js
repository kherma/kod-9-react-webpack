import { v4 as uuidv4 } from 'uuid';

// Selectors

export const getListById = ({ lists }, listId) =>
  lists.find(({ id }) => id === listId);
export const getAllLists = ({ lists }) => lists;

// Actions

const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// Actions creators

export const addList = (payload) => ({ type: ADD_LIST, payload });

// Reducer

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: uuidv4() }];
    default:
      return statePart;
  }
};

export default listsReducer;
