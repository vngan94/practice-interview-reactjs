import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  devide,
  enterFirstNumber,
  enterSecondNumber,
  minus,
  multiple,
} from "./calculatorAction";

function Calculator() {
  const result = useSelector((state) => state.calculator.calculatorResut);
  const firstNumber = useSelector((state) => state.calculator.firstNumber);
  const secondNumber = useSelector((state) => state.calculator.secondNumber);
  const dispatch = useDispatch();
  const handleAdd = useCallback(() => {
    dispatch(add());
  }, [dispatch]);
  const handleMinus = useCallback(() => {
    dispatch(minus());
  }, [dispatch]);
  const handleMultiple = useCallback(() => {
    dispatch(multiple());
  }, [dispatch]);
  const handleDevide = useCallback(() => {
    dispatch(devide());
  }, [dispatch]);
  const handleEnterFirstNumber = (event) => {
    const firstNumber = event.target.value;
    dispatch(enterFirstNumber(firstNumber));
  };
  const handleEnterSecondNumber = (event) => {
    const secondNumber = event.target.value;
    dispatch(enterSecondNumber(secondNumber));
  };
  return (
    <>
      <h1>My Calculator</h1>
      <div>
        <label>First number: </label>
        <input value={firstNumber} onChange={handleEnterFirstNumber} />
      </div>
      <div>
        <label>Second number: </label>
        <input value={secondNumber} onChange={handleEnterSecondNumber} />
      </div>
      <div>
        <h3>{result}</h3>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleMultiple}>Multiple</button>
        <button onClick={handleDevide}>Devide</button>
      </div>
    </>
  );
}

export default Calculator;
