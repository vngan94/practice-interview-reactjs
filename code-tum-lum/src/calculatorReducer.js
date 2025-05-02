const initialState = {
  firstNumber: 1,
  secondNumber: 2,
  calculatorResult: "",
};
const calculatorReducer = (state = initialState, action = () => {}) => {
  switch (action.type) {
    case "Minus":
      return {
        ...state,
        calculatorResut: state.firstNumber - state.secondNumber,
      };
    case "Add":
      return {
        ...state,
        calculatorResut: state.firstNumber + state.secondNumber,
      };
    case "Devide":
      return {
        ...state,
        calculatorResut: state.firstNumber / state.secondNumber,
      };
    case "Multiple":
      return {
        ...state,
        calculatorResut: state.firstNumber * state.secondNumber,
      };
    case "ENTER_FIRST_NUMBER":
      return {
        ...initialState,
        firstNumber: action.payload,
      };
    case "ENTER_SECOND_NUMBER":
      return {
        ...state,
        secondNumber: action.payload,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
