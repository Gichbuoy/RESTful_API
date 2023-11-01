import express from "express";
import { expressYupMiddleware } from 'express-yup-middleware';

import userController from './controllers/user.controller.js';
import { getUser, addUser, updateUser, removeUser } from './user.schemas.js';
// This is a Node.js file that creates an express server. 
// It defines a single endpoint "/hello-world" which returns a response with status code 200 (OK) and the message "Hello Ninjaa!".

// first endpoint
const router = express.Router();


// request to get All users
router.get("/all", userController.getAllUsers);


// request to get user by id
router.get(
  "/:id",
  expressYupMiddleware({ schemaValidator: getUser }),
  userController.getUser
);
  

// request to create data
router.post(
  "/",
  expressYupMiddleware({
    schemaValidator: addUser,
  }),
  userController.addUser
);


// request to update data
router.put(
  "/:id",
  expressYupMiddleware({ schemaValidator: updateUser }),
  userController.updateUser
);


// request to delete data
router.delete(
  "/:id",
  expressYupMiddleware({ schemaValidator: removeUser }),
  userController.removeUser
);

export default router;