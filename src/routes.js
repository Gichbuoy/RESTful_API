import express from "express";
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

router.get("/ping", (req, res) => {
    res.status(StatusCodes.OK); // created
    res.send("Hello pirate!");
  });
  
// first request to create data
router.post("/add", (req, res) => {
    const { body: user } = req; // get body of request
  
    const addedUser = userService.addUser(user); // call service to add user
  
    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      message: addedUser,
    }); 
  });

// second request to get data
router.put("/update/:id", (req, res) => {
    const { body: user } = req; // get body of request
  
    const id = parseInt(req.params.id, 10); // cast id to integer

    const updatedUser = userService.updateUser(id, user); // call service to update user
  
    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: updatedUser,
        }); 
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User "${id}" is not found`,
        }); 
    }
  });

export default router;