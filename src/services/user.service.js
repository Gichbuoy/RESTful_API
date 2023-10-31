import userDao from '../models/persistence/user.dao.js';


/**
 * getAllUsers - gets all users
 * 
 * @returns all users
 */
const getAllUsers = () => userDao.getAll(); // explicit return with arrow function



/**
 * getUser - gets a user from its ID
 * 
 * @param: {integer} userId
 * @returns: {?}
 */
const getUser = (userId) => userDao.get(userId); // explicit return with arrow function



/**
 * updateUser - updates a user by its ID
 * @param: {integer} userId
 * @param: {object} details 
 * @returns boolean
 */
const updateUser = (userId, details) => userDao.update(userId, details);



/**
 * addUser - adds a user
 * @param: {object} details
 * @returns 
 */
const addUser = (details) => userDao.insert(details);



/**
 * removeUser - removes a user by its ID
 * @param: {integer} userId
 * @returns 
 */
const removeUser = (userId) => userDao.remove(userId);

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser
}

