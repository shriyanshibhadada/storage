const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((state) => state._id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
