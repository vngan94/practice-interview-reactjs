const minus = () => ({
  type: "Minus",
});
const multiple = () => ({
  type: "Multiple",
});

const add = () => ({
  type: "Add",
});

const devide = () => ({
  type: "Devide",
});

const enterFirstNumber = (firstNumber) => ({
  type: "ENTER_FIRST_NUMBER",
  payload: firstNumber,
});
const enterSecondNumber = (secondNumber) => ({
  type: "ENTER_SECOND_NUMBER",
  payload: secondNumber,
});

export { minus, add, devide, multiple, enterFirstNumber, enterSecondNumber };
