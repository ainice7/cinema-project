import { IS_LOADING, LOADING_FAIL, SET_MOVIES, SET_SESSIONS } from '../constance';

const initialState = {
    isLoading: false,
    loadingFail: false
};

export const loading = (state = initialState, action ) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_MOVIES:
        case SET_SESSIONS:
            return {
                ...state,
                isLoading: false 
            }
        case LOADING_FAIL:
            return {
                ...state,
                isLoading: false,
                loadingFail: true
            };
        default:
            return state;
    }
}