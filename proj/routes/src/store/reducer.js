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
      if (state.count <= 0) {
        return {
          ...state,
          count: 0,
          name: action.payload.name,
        };
      }
      return {
        ...state,
        count: state.count - action.payload.number,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
