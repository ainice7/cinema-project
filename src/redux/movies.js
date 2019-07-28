import { SET_MOVIES } from '../constance';

const initialState = {
    movies: []
};

export const movies = (state = initialState, action ) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
}