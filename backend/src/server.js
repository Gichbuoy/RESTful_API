import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import userRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';

// This is a Node.js file that creates an express server. 

// first endpoint
const app = express();
const port = 4000;

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20, // 100 requests per minute
});

app.use(compression()); // Compress all HTTP responses
app.use(limiter); // Apply the rate limiting middleware to API calls
app.use(express.json()); // to parse everything it receives as JSON
app.use(helmet()); // to secure the app by setting various HTTP headers
app.use(cors());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
