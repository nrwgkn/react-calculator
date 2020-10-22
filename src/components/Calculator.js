import React from "react";
import NumButton from "./NumButton";
import OperatorButton from "./OperatorButton";

const Calculator = () => {
  return (
    <>
      <h1>calculator</h1>
      <table className="p-calc">
        <thead className="p-calc__head">
          <tr>
            <td colSpan="4">result</td>
          </tr>
        </thead>
        <tbody className="p-calc__body">
          <tr className="p-calc__row">
            <td>
              <NumButton n={7} />
            </td>
            <td>
              <NumButton n={8} />
            </td>
            <td>
              <NumButton n={9} />
            </td>
            <td>
              <OperatorButton o={"÷"} />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumButton n={4} />
            </td>
            <td>
              <NumButton n={5} />
            </td>
            <td>
              <NumButton n={6} />
            </td>
            <td>
              <OperatorButton o={"×"} />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumButton n={1} />
            </td>
            <td>
              <NumButton n={2} />
            </td>
            <td>
              <NumButton n={3} />
            </td>
            <td>
              <OperatorButton o={"-"} />
            </td>
          </tr>
          <tr className="p-calc__row">
            <td>
              <NumButton n={0} />
            </td>
            <td>
              <OperatorButton o={"AC"} />
            </td>
            <td>
              <OperatorButton o={"="} />
            </td>
            <td>
              <OperatorButton o={"+"} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calculator;
