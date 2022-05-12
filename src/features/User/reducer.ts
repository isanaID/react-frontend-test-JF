import {
    START_FECTCHING_USER,
    UPDATE_USER,
    FETCHING_USER_SUCCESS,
    ERROR_FETCHING_USER
} from "./constants";

import { AnyAction } from "redux";

const messageType = {
    type: '',
    message: ''
}

const userInitialState = {
    users: [],
    loading: false,
    error: messageType,
    success: messageType
}

const initialState = {
    ...userInitialState,
    action: "",
};

export default function reducer(state = initialState, action: AnyAction) {
    const _actions = {
        [START_FECTCHING_USER]: () => {
            return {
                ...state,
                loading: true,
                action: action.type
            }
        },
        [UPDATE_USER]: () => {
            return {
                ...state,
                users: action.payload,
                loading: false,
                action: action.type
            }
        },
        [FETCHING_USER_SUCCESS]: () => {
            return {
                ...state,
                success: action.payload,
                loading: false,
                action: action.type
            }
        },
        [ERROR_FETCHING_USER]: () => {
            return {
                ...state,
                error: action.payload,
                loading: false,
                action: action.type
            }
        },

        DEFAULT: () => state,
    }
    return (_actions[action.type] || _actions.DEFAULT)();
}
