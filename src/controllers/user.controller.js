import { StatusCodes } from "http-status-codes";

import userService from "../services/user.service.js";

const STATUS = {
    success: 'OK',
    failure: 'NOT OK'
};

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers(); // call service to get all users

    if (users.length) {
      return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: "No users found",
      }
    );
};


const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
  
    if (user) {
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


const addUser = (req, res) => {
    const { body: user } = req; // get body of request
  
    const addedUser = userService.addUser(user); // call service to add user
  
    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      user: addedUser,
    });
};


const updateUser = (req, res) => {
    const { body: user } = req; // get body of request
  
    const id = parseInt(req.params.id, 10); // cast id to integer

    const updatedUser = userService.updateUser(id, user); // call service to update user
  
    if (updatedUser) {
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


const removeUser = (req, res) => {
    const { params } = req;
  
    const id = parseInt(params.id);
    const user = userService.getUser(id); // check if user has been found
    // if found remove user
    if (user) {
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