## RESTFul Backend Node.js API with React Client

### Overview
- This project involves the development of a backend API using Node.js along with a frontend React client. The API provides: 
* **CRUD** (Create, Read, Update, Delete) functionality for users. 
* It also includes **CORS** (Cross-Origin Resource Sharing) to facilitate communication between the frontend and backend.


## Features
- User creation, addition, and deletion through API endpoints
- Comprehensive API documentation for easy integration with the frontend
- Unit tests to ensure the reliability and functionality of the API
- Integration with Insomnia, a user-friendly REST API client for testing API endpoints and development

* Communicate with your backend. HTTP and HTTP methods and codes.

* Validate the input data validation with [https://github.com/jquense/yup](yup) schema validation.

* Request some API endpoints easily


* Designed a flexible and solid API architecture.

* Secure and optimize the API professionally (with the packages).

* CORS[Cross-Origin-Resource-Sharing] on the API. 


* Calling the CRUD (Create-Read-Update-Delete) endpoints from the client.

* Document the API endpoints.


## Technologies Used
* Node.js
* React


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
This project is licensed under the [https://github.com/Gichbuoy/RESTful_API/blob/main/LICENSE](MIT) License

## Acknowledgements
I would like to acknowledge [https://github.com/wellingtonmwadali](Wellington-Mwadali) for working on the frontend part of this project.


## Project Folder Structure

 src
      ├── /server.js	# app entry point
      ├── /api			# controller layer: api routes
      ├── /config		# Application environment variables
      ├── /services		Encapsulates all busines logic
      ├── /models		# data access layer: database models	
      ├── /loaders		# Handles all startup processes
      ├── /routes		# Express routes that define API
      └── /test         # tests suites