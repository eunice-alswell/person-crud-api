# Person CRUD API Project

This is a simple REST API that allows you to perform CRUD operations on a "person" resource. 
It is built using Node.js, Express, and MongoDB (Mongoose) and provides endpoints for creating, reading, updating, and deleting person records.
Also, it was tested using Postman.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [Requests and Responses](#requests-and-responses)
- [Sample Usage](#sample-usage)
- [Testing API](#testing-api)
- [Known Limitations](#known-limitations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the API, you need to have the following software installed on your system:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/) or Use the Cloud-based version MongoDB Atlas (https://www.mongodb.com/atlas/database)
- Git (optional, for cloning the repository)

### Installation

1. Clone this repository or download the source code:

   ```
   git clone https://github.com/yourusername/person-crud-api.git
   ```

2. Navigate to the project directory:

   ```
   cd person-crud-api
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

### Running the Server

To start the API server, run the following command:

```
npm start
```

By default, the server will run on port 3000. You can access the API at `http://localhost:3000`.

### API Endpoints

The following API endpoints are available:

- **Create a Person**
  - Endpoint: `POST /api`
  - Request Body: JSON
    ```json
    {
      "_id":"unique id",
      "name": "John Doe",
      "age": 30
    }
    ```
  - Response: JSON
    ```json
    {
      "_id": "unique-id",
      "name": "John Doe",
      "age": 30
    }
    ```

- **Read a Person by ID**
  - Endpoint: `GET /api/:user_id`
  - Response: JSON
    ```json
    {
      "name": "John Doe"
    }
    ```

- **Update a Person by ID**
  - Endpoint: `PUT /api/:user_id`
  - Request Body: JSON
    ```json
    {
      "name": "Updated Name"
    }
    ```
  - Response: JSON
    ```json
    {
      "_id": "unique-id",
      "name": "Updated Name"
    }
    ```

- **Delete a Person by ID**
  - Endpoint: `DELETE /api/:user_id`
  - Response: JSON
    ```json
    {
      "_id": "unique-id",
      "name": "John Doe",
      "age": 30
    }
    ```

## Requests and Responses

### Create a Person (POST /api)

**Request:**

```json
{
  "name": "John Doe"
}
```

**Response:**

```json
{
  "_id": "unique-id",
  "name": "John Doe",
  "age": 30
}
```

### Read a Person by ID (GET /api/:user_id)

**Response:**

```json
{
  "_id": "unique-id",
  "name": "John Doe",
  "age": 30
}
```

### Update a Person by ID (PUT /api/:user_id)

**Request:**

```json
{
  "name": "Updated Name"
}
```

**Response:**

```json
{
  "_id": "unique-id",
  "name": "Updated Name",
  "age": 35
}
```

### Delete a Person by ID (DELETE /api/:user_id)

**Response:**

```json
{
  "_id": "unique-id",
  "name": "John Doe",
  "age": 30
}
```

## Sample Usage

Here are some sample API usage scenarios:

1. **Create a New Person:**

   ```
   curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' http://localhost:3000/api
   ```


2. **Read a Person by ID:**

   ```
   curl http://localhost:3000/api/user-id
   ```
   
3. **Update a Person by ID

   ```
   curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:3000/api/user-id
   ```

4. **Delete a Person by ID:**

   ```
   curl -X DELETE http://localhost:3000/api/user-id
   ```
  
** NB: The *user_id* in the URL string must be the unique id given to any new person you create. Also. The *unique id* is of type number.**


## Testing API

This API has already been hosted and deployed on a web server using render.com. Below are ways the API can be tested for each CRUD operation:

1. **Create a New Person:**
   
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' https://eunice-person-crud-api.onrender.com/api
   ```
2. **Read a Person by ID:**
   
   ```
   curl https://eunice-person-crud-api.onrender.com/api/user-id
   ```

3. **Update a Person by ID**
   
    ```
    curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' https://eunice-person-crud-api.onrender.com/api/user-id
    ```
   
4. **Delete a Person by ID:**
    
   ```
   curl https://eunice-person-crud-api.onrender.com/api/user-id
   ```
   
## Known Limitations

- This API does not include authentication and authorization mechanisms. It is for demonstration purposes and should not be used in production without proper security measures.
- Error handling and validation are simplified for demonstration. In a production environment, you should implement robust error handling and validation.

## Deployment

To deploy this API to a production server, follow these general steps:

1. Set up a production-ready database (e.g., MongoDB Atlas).
2. Update the database connection string in your code to point to the production database.
3. Configure a production-ready web server (e.g., Nginx or Apache) to serve your Node.js application.
4. Use a process manager like PM2 to keep your Node.js application running in the background.
5. Set up domain and SSL certificates for secure access.

### **OR**
To deploy the API to a server or a hosting platform, follow the standard deployment procedures for your chosen platform. Ensure that you set environment variables for the MongoDB URI and port as needed.

For example, when deploying on Render.com, you can configure environment variables in the Render dashboard for your application.


## Entity Entity-Relationship (E-R) Diagram
```
       +---------------------+
       |      Database       |
       +---------------------+
               |
               |
    +----------+---------+
    |                    |
    v                    v
+-------+           +---------+
| Person|           |  Other  |
|-------|           |  Tables |
|       |           |         |
| + _id |<----------|         |
| + name|           |         |
| + age |           |         |
+-------+           +---------+
```

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are highly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
