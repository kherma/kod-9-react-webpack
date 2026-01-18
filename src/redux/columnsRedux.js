import { v4 as uuidv4 } from 'uuid';

// Selectors

export const getColumnsByList = ({ columns }, id) =>
  columns.filter(({ listId }) => listId === id);

// Actions
const createActionName = (actionName) => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// Actions creators

export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });

// Reducer

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: uuidv4() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
