import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get("/ping", (req, res) => {
    res.status(StatusCodes.OK); // created
    res.send("Hello pirate!");
  });

export default router;