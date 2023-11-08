import { StatusCodes } from "http-status-codes";
import pino from "pino";

import userService from "../services/user.service.js";

const logger = pino();

const STATUS = {
  success: true,
  failure: false,
};


/**
 * getAllUsers - Retrieve all users
 * @param: req request
 * @param: res response
 * @returns: if users found, return status code OK,
 *  else return status code NOT_FOUND
 */
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers(); // call service to get all users

    if (users.length) {
      logger.info('Retrieving all users');
      return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: "No users found",
      }
    );
};



/**
 * getUser - Retrieve a user
 * @param: req request
 * @param: res response
 * @returns: if user found, return status code OK,
 * else return status code NOT_FOUND if user id is not found 
 */
const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
  
    if (user) {
      logger.info(`Retrieving user ID ${id}`);
      return res.status(StatusCodes.OK).send(
        {
          status: STATUS.success,
          user,
        }
      );
    }
  
    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: `User "${id}" is not found`,
      }
    );
};

/**
 * addUser - Adds a user
 * @param: req request
 * @param: res response
 * @returns: status code CREATED 
 */
const addUser = (req, res) => {
    const { body: user } = req; // get body of request
  
    const addedUser = userService.addUser(user); // call service to add user
  
    logger.info('User added successfully');

    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      user: addedUser,
    });
};

/**
 * updateUser - Update a user
 * @param: req request
 * @param: res response
 * @returns: updated user with status code OK,
 * else return status code NOT_FOUND if user id is not found
 */
const updateUser = (req, res) => {
    const { body: user } = req; // get body of request
  
    const id = parseInt(req.params.id, 10); // cast id to integer

    const updatedUser = userService.updateUser(id, user); // call service to update user
  

    if (updatedUser) {
      logger.info(`User ID ${id} updated successfully`);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: updatedUser,
        }); 

    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User "${id}" is not found`,
        }); 
    }
};

/**
 * removeUser - Remove a user
 * @param: req request
 * @param: res response
 * @returns: status code OK if user is found and deleted,
 * else return status code NOT_FOUND if user id is not found
 */
const removeUser = (req, res) => {
    const { params } = req;
  
    const id = parseInt(params.id);
    const user = userService.getUser(id); // check if user has been found
    

    // if found remove user
    if (user) {
      logger.info(`Removing user ID ${id}`);
      userService.removeUser(id);
  
      return res.status(StatusCodes.OK).send({
        status: STATUS.success,
        message: `User "${id}" is deleted`,
      }); 
      

    } else {
      return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: `User "${id}" has not been found`,
      });
    }
  
  }

export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    removeUser
};