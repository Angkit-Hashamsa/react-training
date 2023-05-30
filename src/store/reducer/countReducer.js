import * as constant from "../constants";

const initialState = {
    count: 0,
    name: "hello",
    coutYTpe: "one tow",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.INCREMENT:
            return { ...state, count: state.count + action.payload };

        case constant.DECREMENT:
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

export default reducer;
