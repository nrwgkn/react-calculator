import * as actionTypes from "../utils/actionTypes";

const initialState = {
  inputValue: 0,
  resultValue: 0,
  operator: "",
  isCalculate: false,
  isShowResult: false,
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: action.number,
      };

    case actionTypes.PLUS:
      return {
        ...state,
        resultValue: state.resultValue + state.inputValue,
        operator: "+",
      };
    case actionTypes.MINUS:
      return {
        ...state,
        resultValue: state.resultValue - state.inputValue,
        operator: "-",
      };
    case actionTypes.MULTIPLY:
      return {
        ...state,
        resultValue: state.resultValue * state.inputValue,
        operator: "*",
      };
    case actionTypes.DIVIDE:
      return {
        ...state,
        resultValue: state.resultValue / state.inputValue,
        operator: "/",
      };

    default:
      return state;
  }
};

export default calculator;
