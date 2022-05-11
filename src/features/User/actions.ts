import debounce from 'debounce-promise';

import {
    START_FECTCHING_USER,
    FETCHING_USER_SUCCESS,
    ERROR_FETCHING_USER,
    SET_PAGE,
    NEXT_PAGE,
    PREV_PAGE
} from "./constants";

import { getUser } from "../../api/user";

let debouncedGetUser = debounce(getUser, 500);

export const fetchUser = () => {
    return async (dispatch: any, getState: any) => {
        dispatch(startFetchingUser());

        let perPage: number = getState().User.perPage || 10;
        let currentPage: number = getState().User.currentPage || 1;
        let params: any = {
            limit: perPage,
            skip: (currentPage * perPage) - perPage
        };

        try {
            let { data: { data, count }} : any = await debouncedGetUser(params);
            dispatch(fetchingUserSuccess({data, count}));
        } catch (error) {
            dispatch(errorFetchingUser());
        }
    }
}

export const startFetchingUser = () => {
    return {
        type: START_FECTCHING_USER
    }
}

export const fetchingUserSuccess = (user: any) => {
    return {
        type: FETCHING_USER_SUCCESS,
        ...user
    }
}

export const errorFetchingUser = () => {
    return {
        type: ERROR_FETCHING_USER
    }
}

export const setPage = (number:number = 1) => {
    return {
        type: SET_PAGE,
        currentPage: number
    }
}

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}