import * as yup from 'yup';

// user schemas validation
// only export the object with the schema


const MIN_LENGTH = {
    name: 3,
    city: 2,
    country: 3
};

const MAX_LENGTH = {
    name: 15,
    city: 15,
    email: 30,
    country: 20
};

export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            }),
        },
    },
}


export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email().max(MAX_LENGTH.email),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country)
            }),
        },
    },
};

export const updateUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            }),
        },
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email(),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string()
            }),
        },
    },
};

export const removeUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required(),
            }),
        },
    },
};

