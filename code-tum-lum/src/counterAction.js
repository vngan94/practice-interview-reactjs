const incrementCounter = () => ({
  payload: 3,
  type: "INCREMENT",
});

const decrementCounter = () => ({
  payload: 3,
  type: "DECREMENT",
});

export { incrementCounter, decrementCounter };
