import { v4 as uuidv4 } from 'uuid';

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.payload, id: uuidv4() }];
    default:
      return statePart;
  }
};

export default listsReducer;
