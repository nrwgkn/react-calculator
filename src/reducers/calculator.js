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
        inputValue: state.inputValue * 10 + action.number,
        isShowResult: false,
      };
    case actionTypes.PLUS:
      if (state.isCalculate) {
        switch (state.operator) {
          case "+":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue + state.inputValue,
              isShowResult: true,
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
            };
          default:
            return state;
        }
      } else {
        return {
          ...state,
          inputValue: 0,
          resultValue: state.inputValue,
          operator: "+",
          isCalculate: true,
          isShowResult: true,
        };
      }
    case actionTypes.MINUS:
      if (state.isCalculate) {
        switch (state.operator) {
          case "+":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue + state.inputValue,
              isShowResult: true,
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
            };
          default:
            return state;
        }
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: "-",
          resultValue: state.inputValue,
          isCalculate: true,
          isShowResult: true,
        };
      }
    case actionTypes.MULTIPLY:
      if (state.isCalculate) {
        switch (state.operator) {
          case "+":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue + state.inputValue,
              isShowResult: true,
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
            };
          default:
            return state;
        }
      } else {
        return {
          ...state,
          inputValue: 0,
          resultValue: state.inputValue,
          operator: "*",
          isCalculate: true,
          isShowResult: true,
        };
      }
    case actionTypes.DIVIDE:
      if (state.isCalculate) {
        switch (state.operator) {
          case "+":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue + state.inputValue,
              isShowResult: true,
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
            };
          default:
            return state;
        }
      } else {
        return {
          ...state,
          inputValue: 0,
          resultValue: state.inputValue,
          operator: "/",
          isCalculate: true,
          isShowResult: true,
        };
      }
    case actionTypes.ALL_CLEAR:
      return {
        inputValue: 0,
        resultValue: 0,
        operator: "",
        isCalculate: false,
        isShowResult: false,
      };

    case actionTypes.EQUAL:
      switch (state.operator) {
        case "+":
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "+",
            resultValue: state.resultValue + state.inputValue,
            isCalculate: false,
            isShowResult: true,
          };
        case "-":
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "-",
            resultValue: state.resultValue - state.inputValue,
            isCalculate: false,
            isShowResult: true,
          };
        case "*":
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "+",
            resultValue: state.resultValue * state.inputValue,
            isCalculate: false,
            isShowResult: true,
          };
        case "/":
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "+",
            resultValue: state.resultValue / state.inputValue,
            isCalculate: false,
            isShowResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;
