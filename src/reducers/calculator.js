import * as actionTypes from "../utils/actionTypes";

const initialState = {
  inputValue: 0,
  resultValue: 0,
  operator: "",
  isCalculate: false,
  isShowResult: false,
  history: [],
};

const calculator = (state = initialState, action) => {
  const newHistory = [];

  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      if (state.operator === "=") {
        return {
          ...state,
          inputValue: action.number,
          isShowResult: false,
          history: [...newHistory, action.number],
        };
      } else {
        return {
          ...state,
          inputValue: state.inputValue * 10 + action.number,
          isShowResult: false,
          history: [...state.history, action.number],
        };
      }
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
              history: [...state.history, "+"],
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
              history: [...state.history, "+"],
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
              history: [...state.history, "+"],
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "+",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
              history: [...state.history, "+"],
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
          history: [...state.history, "+"],
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
              history: [...state.history, "-"],
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
              history: [...state.history, "-"],
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
              history: [...state.history, "-"],
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "-",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
              history: [...state.history, "-"],
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
          history: [...state.history, "-"],
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
              history: [...state.history, "×"],
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
              history: [...state.history, "×"],
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
              history: [...state.history, "×"],
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "*",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
              history: [...state.history, "×"],
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
          history: [...state.history, "×"],
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
              history: [...state.history, "÷"],
            };
          case "-":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue - state.inputValue,
              isShowResult: true,
              history: [...state.history, "÷"],
            };
          case "*":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue * state.inputValue,
              isShowResult: true,
              history: [...state.history, "÷"],
            };
          case "/":
            return {
              ...state,
              inputValue: 0,
              operator: "/",
              resultValue: state.resultValue / state.inputValue,
              isShowResult: true,
              history: [...state.history, "÷"],
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
          history: [...state.history, "÷"],
        };
      }
    case actionTypes.ALL_CLEAR:
      return {
        inputValue: 0,
        resultValue: 0,
        operator: "",
        isCalculate: false,
        isShowResult: false,
        history: [],
      };

    case actionTypes.EQUAL:
      let newResult;
      switch (state.operator) {
        case "+":
          newResult = state.resultValue + state.inputValue;
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: "=",
            resultValue: state.resultValue + state.inputValue,
            isCalculate: false,
            isShowResult: true,
            history: [...state.history, "=" + newResult],
          };
        case "-":
          newResult = state.resultValue - state.inputValue;
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: "=",
            resultValue: state.resultValue - state.inputValue,
            isCalculate: false,
            isShowResult: true,
            history: [...state.history, "=" + newResult],
          };
        case "*":
          newResult = state.resultValue * state.inputValue;
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: "=",
            resultValue: state.resultValue * state.inputValue,
            isCalculate: false,
            isShowResult: true,
            history: [...state.history, "=" + newResult],
          };
        case "/":
          newResult = state.resultValue / state.inputValue;
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: "=",
            resultValue: state.resultValue / state.inputValue,
            isCalculate: false,
            isShowResult: true,
            history: [...state.history, "=" + newResult],
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;
