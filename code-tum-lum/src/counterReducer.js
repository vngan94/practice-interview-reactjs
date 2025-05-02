const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action = () => {}) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...initialState, count: state.count + action.payload };
    case "DECREMENT":
      return { ...initialState, count: state.count - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
