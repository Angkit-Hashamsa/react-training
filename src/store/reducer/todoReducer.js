import * as constant from "../constants";

const initialState = {
    todo: [["todo 1", "todo 2"]],
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
