import {
    GET_API_FAILURE,
    GET_API_REQUEST,
    GET_API_SUCCESS,
} from "./actions";

const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}

const initialState = {
    records: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false
};

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true
            };
        case GET_API_SUCCESS:
            return {
                ...state,
                records: action.payload,
                request: STATUSES.SUCCESS,
                loading: false
            };
        case GET_API_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
            return state;
    }
};