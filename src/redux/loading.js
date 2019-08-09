import { IS_LOADING, LOADING_FAIL, SET_MOVIES } from '../constance';

const initialState = {
    isLoading: false
};

export const loading = (state = initialState, action ) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case LOADING_FAIL:
        case SET_MOVIES:
            return {
                ...state,
                isLoading: false
            };

    
        default:
            return state;
    }
}