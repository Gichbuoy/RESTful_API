import userDao from '../models/persistence/user.dao.js';

const getUser = (userId) => {
    return userDao.get(userId);
};

const getAllUsers = () => {
    return userDao.getAll();
};

const updateUser = (userId, details) => {
    return userDao.update(userId, details);
};

const addUser = (details) => {
    return userDao.insert(details);
};

const removeUser = (userId) => {
    return userDao.remove(userId);
};

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser
}

