import * as constants from "../constants";

/**
 * actions from redux
 * @param {number} num
 * @returns {{type:number,payload:number}}
 */
export const increment = (num) => {
    return { type: constants.INCREMENT, payload: num };
};

/**
 * actions from redux
 * @param {number} num
 * @returns {{type:number,payload:number}}
 */
export const decrement = (num) => {
    return { type: constants.DECREMENT, payload: num };
};
