export const GET_API_REQUEST = "REQUEST";
export const GET_API_SUCCESS = "SUCCESS";
export const GET_API_FAILURE = "FAILURE";

export const getApiRequest = () => ({
    type: GET_API_REQUEST,
});

export const getApiSuccess = (data) => ({
    type: GET_API_SUCCESS,
    payload: data,
});

export const getApiFailure = (err) => ({
    type: GET_API_FAILURE,
    payload: err,
});