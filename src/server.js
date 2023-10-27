import express from "express";

import userRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';

// This is a Node.js file that creates an express server. 
// It defines a single endpoint "/hello-world" which returns a response with status code 200 (OK) and the message "Hello Ninjaa!".

// first endpoint
const app = express();
const port = 3000;

app.use(express.json()); // to parse everything it receives as JSON

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
