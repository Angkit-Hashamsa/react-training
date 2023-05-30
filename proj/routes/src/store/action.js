import * as constants from "./constans";

export const increment = () => {
  return {
    type: constants.INCREMENT,
    payload: { name: "Increase", number: 3 },
  };
};

export const decrement = () => {
  return {
    type: constants.DECREMENT,
    payload: { name: "Decrease", number: 2 },
  };
};
