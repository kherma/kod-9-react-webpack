import { v4 as uuidv4 } from 'uuid';

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: uuidv4() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
