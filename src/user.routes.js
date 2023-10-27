import express, { response } from "express";
import { StatusCodes } from "http-status-codes";

import userService from './services/user.service.js';

// This is a Node.js file that creates an express server. 
// It defines a single endpoint "/hello-world" which returns a response with status code 200 (OK) and the message "Hello Ninjaa!".

// first endpoint
const router = express.Router();

const STATUS = {
  success: 'OK',
  failure: 'NOT OK'
};


router.get("/all", (req, res) => {
    const users = userService.getAllUsers(); // call service to get all users

    if (users.length) {
      return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: "No users found",
      }
    )
});

router.get("/:id", (req, res) => {
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
  )
});
  
// first request to create data
router.post("/", (req, res) => {
    const { body: user } = req; // get body of request
  
    const addedUser = userService.addUser(user); // call service to add user
  
    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      user: addedUser,
    }); 
  });

// second request to update data
router.put("/:id", (req, res) => {
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
  });

// third request to delete data
router.delete("/:id", (req, res) => {
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

});

export default router;