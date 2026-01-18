// Actions
const createActionName = (actionName) => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// Actions creators

export const updateSearchstring = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});

// Reducer

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
