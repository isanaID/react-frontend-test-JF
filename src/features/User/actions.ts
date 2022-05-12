import axios from "axios";

import {
    START_FECTCHING_USER,
    UPDATE_USER,
    FETCHING_USER_SUCCESS,
    ERROR_FETCHING_USER
} from "./constants";

export const getUser = () => {
    return (dispatch: any) => {
        dispatch(startFetchingUser());
        return axios.get(`https://randomuser.me/api/?results=10`).then( res => {
            dispatch(updateUser(res.data))
            dispatch(fetchingUserSuccess({
                message: "Success",
                type: FETCHING_USER_SUCCESS  
            }));
        }).catch( err => {
            dispatch(fetchingUserError({
                message: "Error",
                type: ERROR_FETCHING_USER
            }));
    });
    }
}

export const startFetchingUser = () => {
    return {
        type: START_FECTCHING_USER
    }
}

export const fetchingUserSuccess = (payload: any) => {
    return {
        type: FETCHING_USER_SUCCESS,
        payload
    }
}

export const fetchingUserError = (payload: any) => {
    return {
        type: ERROR_FETCHING_USER,
        payload
    }
}

export const updateUser = (payload: any) => {
    return {
        type: UPDATE_USER,
        payload
    }
}