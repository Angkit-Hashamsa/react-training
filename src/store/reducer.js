import * as constant from "./constans";

export const reducer = (state, action) => {
  switch (action.type) {
    case constant.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.number,
        name: action.payload.name,
      };
    case constant.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.number,
        name: action.payload.name,
      };
    default:
      break;
  }
  return state;
};
