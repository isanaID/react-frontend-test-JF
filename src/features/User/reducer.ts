import {
    START_FECTCHING_USER,
    FETCHING_USER_SUCCESS,
    ERROR_FETCHING_USER,
    SET_PAGE,
    NEXT_PAGE,
    PREV_PAGE
} from "./constants";

const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error'
}

const initialState = {
    data: [],
    perPage: 10,
    currentPage: 1,
    status: statuslist.idle
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case START_FECTCHING_USER:
            return { ...state, status: statuslist.process, data:[] };
        case FETCHING_USER_SUCCESS:
            return { ...state, data:action.data, totalUsers: action.count, status: statuslist.success};
        case ERROR_FETCHING_USER:
            return { ...state, status: statuslist.error };
        case SET_PAGE:
            return { ...state, currentPage: action.currentPage };
        case NEXT_PAGE:
            return { ...state, currentPage: state.currentPage + 1 };
        case PREV_PAGE:
            return { ...state, currentPage: state.currentPage - 1 };
        default:
            return state;
    }
}
