import users from '../data/users.data.js';

const get = (userId) => {
    const findUser = users.find((user) => {
        if (users.id === userId);  {
            return user;
        } 
        return null;
    });
    return findUser;
}

const getAll = () => {
    return users;
};

const update = (newDetails) => {
    users.map((user, index) => {
        if (users.id === newDetails.id) {
            return users[index];
        }
    });
};

const insert = (details) => {
    const newUser = { ...details, id: users.length + 1 };
    users.push(newUser);

    return newUser;
}

const remove = (userId) => {
    const deleteUser = (user, index) => {
        /// if user exists, remove it
        if (user.id === userId) {
            // removes the array element of found user
            users.splice(index, 1);
            return true;
        }
        return false;
    };

    return users.find(deleteUser);
}


export default {
    get,
    getAll,
    update,
    insert,
    remove
}