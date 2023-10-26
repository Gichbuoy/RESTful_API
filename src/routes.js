import express from "express";
import { StatusCodes } from "http-status-codes";

// This is a Node.js file that creates an express server. 
// It defines a single endpoint "/hello-world" which returns a response with status code 200 (OK) and the message "Hello Ninjaa!".

// first endpoint
const router = express.Router();
const port = 3000;

const STATUS = {
  success: 'OK',
  failure: 'NOT OK'
};

router.get("/hello-world", (req, res) => {
    res.status(StatusCodes.OK); // created
    res.send("Hello Ninjaa!");
  });
  
  // first request to create data
  router.post("/add", (req, res) => {
    const data = [];  // array to store and update data
    const { body } = req; // get body of request
  
    // validate data received
    if (!body.name){
      return res.status(StatusCodes.BAD_REQUEST).send({
          status: STATUS.failure,
          message: 'Name is required'
        }); 
    }
  
    return res.status(StatusCodes.CREATED).send({
      status: STATUS.success,
      message: 'successfully created data',
    }); 
  });

export default router;