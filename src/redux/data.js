import { SET_MOVIES, SET_SESSIONS, SET_ROOMS } from '../constance';

const initialState = {
    movies: [],
    genres: [],
    sessions: [],
    rooms: []
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach((elem) => {
                        if (elem && !acc.includes(elem.trim())) {
                            acc.push(elem.trim());
                        }
                    });
                }
                return acc;
            }, []);
            return {
                ...state,
                movies: action.payload,
                genres
            };

        case SET_SESSIONS:
            const sortedArray = action.payload.sort((a, b) => (new Date(a.date) - new Date(b.date)));

            const newArray = sortedArray.reduce((acc, item) => {
                if (!acc.length) {
                    acc.push([]);
                }

                const lastElem = acc[acc.length - 1];
                const lastElemDate = lastElem.length ? lastElem[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);

                if (lastElem.length && differentDates) {
                    return [...acc, [item]];
                }

                acc[acc.length - 1].push(item);

                return acc;
            }, []);
            return {
                ...state,
                sessions: newArray
            };
        case SET_ROOMS:

            return {
                ...state,
                rooms: action.payload
            }
        default:
            return state;
    }
}