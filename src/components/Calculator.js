import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import Result from "./Result";

const Calculator = ({ calculator, actions }) => {
  const titleStyle = {
    color: "#8b646c",
    fontSize: "4rem",
    textAlign: "center",
    width: "300px",
  };

  return (
    <>
      <h1 style={titleStyle}>calculator</h1>
      <table className="p-calc">
        <thead className="p-calc__head">
          <tr>
            <td colSpan="4">
              <ul className="p-calc__history">
                {calculator.history.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <Result
                result={
                  calculator.isShowResult
                    ? calculator.resultValue
                    : calculator.inputValue
                }
                history={calculator.history}
              />
            </td>
          </tr>
        </thead>
        <tbody className="p-calc__body">
          <tr className="p-calc__row">
            <td>
              <NumberButton n={7} onClick={() => actions.onNumClick(7)} />
            </td>
            <td>
              <NumberButton n={8} onClick={() => actions.onNumClick(8)} />
            </td>
            <td>
              <NumberButton n={9} onClick={() => actions.onNumClick(9)} />
            </td>
            <td>
              <OperatorButton o={"÷"} onClick={() => actions.onDivideClick()} />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumberButton n={4} onClick={() => actions.onNumClick(4)} />
            </td>
            <td>
              <NumberButton n={5} onClick={() => actions.onNumClick(5)} />
            </td>
            <td>
              <NumberButton n={6} onClick={() => actions.onNumClick(6)} />
            </td>
            <td>
              <OperatorButton
                o={"×"}
                onClick={() => actions.onMultiplyClick()}
              />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumberButton n={1} onClick={() => actions.onNumClick(1)} />
            </td>
            <td>
              <NumberButton n={2} onClick={() => actions.onNumClick(2)} />
            </td>
            <td>
              <NumberButton n={3} onClick={() => actions.onNumClick(3)} />
            </td>
            <td>
              <OperatorButton o={"-"} onClick={() => actions.onMinusClick()} />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumberButton n={0} onClick={() => actions.onNumClick(0)} />
            </td>
            <td>
              <OperatorButton o={"AC"} onClick={() => actions.onClearClick()} />
            </td>
            <td>
              <OperatorButton o={"="} onClick={() => actions.onEqualClick()} />
            </td>
            <td>
              <OperatorButton o={"+"} onClick={() => actions.onPlusClick()} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calculator;
