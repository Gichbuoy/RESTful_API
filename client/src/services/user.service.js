import axios from 'axios';

const baseApiUrl = 'http://localhost:4000';

// create user
export const createUser = async (payload) => {
    const createUsersEndpoint = `${baseApiUrl}/v1/user`;

    const { data: apiResponse } = await axios.post(
        createUsersEndpoint,
        payload
    );
    return apiResponse;
};

export const EditUser = async (userId, payload ) => {
    const editUsersEndpoint = `${baseApiUrl}/v1/user/${userId}`;

    const { data: apiResponse } = await axios.put(editUsersEndpoint, payload);
    return apiResponse;
};


// retrieve user
export const retrieveUser = async (userId) => {
    const getUserEndpoint = `${baseApiUrl}/v1/user/${userId}`;

    const { data: apiResponse } = await axios.get(getUserEndpoint);

    return apiResponse;
};


// retrieve all users
export const retrieveAllUsers = async () => {
    const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`;

    const { data: apiResponse } = await axios.get(getAllUsersEndpoint);

    return apiResponse;
};

export const removeUser = async (userId) => {
    const removeUserEndpoint = `${baseApiUrl}/v1/user/${userId}`;

    const { data: apiResponse } = await axios.delete(removeUserEndpoint);
    
    return apiResponse;
};