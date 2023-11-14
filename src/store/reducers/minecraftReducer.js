import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    statusMessage: "",
    mobs: [],
};

const minecraftReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.GET_MOBS + ActionTypes.FETCHING:
            console.log(1);
            return state;
        case ActionTypes.GET_MOBS + ActionTypes.SUCCEED:
            console.log(2);
            return state;
        default:
            return state;
    }
};

export default minecraftReducer;