import ActionTypes from "../actionTypes";

export const minecraftGetMobsAction = (payload) => ({
    type: ActionTypes.GET_MOBS + ActionTypes.FETCHING, 
    payload,
});
export const minecraftGetMobsSucced = (payload) => ({
    type: ActionTypes.GET_MOBS + ActionTypes.SUCCEED, 
    payload,
});
export const minecraftGetMobsFailed = (payload) => ({
    type: ActionTypes.GET_MOBS + ActionTypes.FAILED,
    payload,
});