import { IS_LOADING, LOADING_FAIL, SET_MOVIES } from '../constance';

const initialState = {
    isLoading: false
};

export const loading = (state = initialState, action ) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case IS_LOADING:
        case SET_MOVIES:
            return {
                ...state,
                isLoading: false
            };

    
        default:
            return state;
    }
}