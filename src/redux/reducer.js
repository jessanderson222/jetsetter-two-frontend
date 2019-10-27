const initialState = {
  countries: []
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: [action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
