## RESTFul Backend Node.js API with React Client

### Overview
- This project involves the development of a backend API using Node.js along with a frontend React client. The API provides: 
* **CRUD** (Create, Read, Update, Delete) functionality for users. 
* It also includes **CORS** (Cross-Origin Resource Sharing) to facilitate communication between the frontend and backend.


## Features
- User creation, editting, getting and deletion through API endpoints
- Comprehensive API documentation for easy integration with the frontend
- Unit tests to ensure the reliability and functionality of the API
- Integration with Insomnia, a user-friendly REST API client for testing API endpoints and development

* Communicate with your backend. HTTP and HTTP methods and codes.

* Validate the input data validation with [yup](https://github.com/jquense/yup) schema validation. (yup schema validator validates input received from body of API)

* [Helmet](https://github.com/helmetjs/helmet) package to improve the security of API by setting HTTP response headers.

Here is a sample Express app that usees Helmet.
```
import express from "express";
import helmet from "helmet";

const app = express();

// Use Helmet!
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000);
```

* Request some API endpoints easily


* Designed a flexible and solid API architecture.

* Secure and optimize the API professionally (with the packages).

* CORS[Cross-Origin-Resource-Sharing] on the API. 


* Calling the CRUD (Create-Read-Update-Delete) endpoints from the client.

* Using API documentation generator [JSDoc](https://github.com/jsdoc/jsdoc) to add documentation to functions. 


## Technologies Used
* Node.js
* React

# Backend 
## Getting Started
- To get started with the project, follow the steps below to install the necessary dependencies:
- Ensure that you have [prerequisites such as Node.js or npm] installed on your machine.

- Clone or download the project repository to your local machine. You can use the following command to clone the repository:
```
git clone https://github.com/Gichbuoy/RESTful_API.git
```
- Open a terminal or command prompt and navigate to the project directory:
```
cd RESTful_API
```

- Run the following command to install the project dependencies:
```
npm install
```

- start the application
```
npm start
```

## Architectural pattern
- We used the Model-View-Controller (MVC) framework as an architectural/design pattern that separates an application into three main logical components Model, View, and Controller.
- It's an architecural pattern on which to build software.
- Each architectural component is built to handle specific development aspects of an application
- It separates data models from UI.

![MVC Architectural pattern](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/mvc.jpg)
1. Controller - API routes and endpoints
2. Model - For business logic of the data
3. View - html view for GUI.


## API Good Practices Implemented
1. **Rate Limiter** - Improves quality of your service and server.

Ensure your API can provide optimal service for its users, while also ensuring their safety.
 Installation
```
npm install express-rate-limit
```

Use
```
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20, // 100 requests per minute
});

app.use(limiter);
```

2. **Compression** - Compresses and minimizes requests of APIs.
Compresses the size of every requet sent, this saves time rendering everything for our client, and it's faster.
```
npm install compression
```

3. **Logging package** - Logs for server incase something bad happens.

Installation
```
npm install pino
```

Use
```
const logger = pino();

logger.info('log information');
```


- First post request

![post request](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/post1.png)

- Second post request

![second post request](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/post2.png)

- Third post request

![third post request](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/post3.png)

- Put request

![update request](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/put.png)

- get all request

![get all request](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/getall.png)

- Delete request

![delete](https://github.com/Gichbuoy/RESTful_API/blob/main/screenshot/delete.png)



## Frontend Integration

## Contributing
Contributions to the project are welcome! If you would like to contribute, please follow these guidelines:

* Fork the repository and clone it locally.

* Create a new branch for your feature or bug fix.

* Make your changes and test thoroughly.

* Commit your changes with clear and descriptive commit messages.

* Push your branch to your forked repository.

* Create a pull request with a detailed description of your changes.

## License
This project is licensed under the [MIT](https://github.com/Gichbuoy/RESTful_API/blob/main/LICENSE) License

## Acknowledgements
I would like to acknowledge [Wellington-Mwadali](https://github.com/wellingtonmwadali) for working on the frontend part of this project.

