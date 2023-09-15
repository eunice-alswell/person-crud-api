# Person CRUD API Documentation

This documentation provides comprehensive information about the simple REST API capable of CRUD operations on a "person" resource,
interfacing with MongoDB Atlas, including API endpoints, request/response formats, limitations, and deployment instructions.

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Request and Response Formats](#request-and-response-formats)
- [Limitations and Assumptions](#limitations-and-assumptions)
- [Setting Up Locally](#setting-up-locally)
- [Deployment](#deployment)

## API Endpoints

The API provides the following endpoints for CRUD operations on the "person" resource:

- **Create a Person**
  - Endpoint: `POST /api`
  - Description: Adds a new person to the database.
  - Request Format:
    ```json
    {
      "_id": 1
      "name": "John Doe",
      "age": 30
    }
    ```
  - Response Format:
    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "age": 30
    }
    ```

- **Read a Person by ID**
  - Endpoint: `GET /api/:user_id`
  - Description: Retrieves a person's details by their unique ID.
  - Response Format:
    ```json
    {
      "_id": "unique-id",
      "name": "John Doe",
      "age": 30
    }
    ```

- **Update a Person by ID**
  - Endpoint: `PUT /api/:user_id`
  - Description: Modifies the details of an existing person by their ID.
  - Request Format:
    ```json
    {
      "name": "Updated Name",
      "age": 35
    }
    ```
  - Response Format:
    ```json
    {
      "_id": "unique-id",
      "name": "Updated Name",
      "age": 35
    }
    ```

- **Delete a Person by ID**
  - Endpoint: `DELETE /api/:user_id`
  - Description: Removes a person from the database by their ID.
  - Response Format:
    ```json
    {
      "_id": "unique-id",
      "name": "John Doe",
      "age": 30
    }
    ```

## Limitations and Assumptions

- The API assumes that the provided data for creating and updating a person is in the correct format (JSON) and follows the expected structure.

## Setting Up Locally

To set up and run the API locally for development or testing purposes, follow these steps:

1. Clone the repository from GitHub:

   ```
   git clone https://github.com/eunice-alswell/person-crud-api
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the project root directory with the following content, replacing `<your-mongodb-uri>` with your MongoDB connection URI and <your-port-number> with your port number:

   ```
   DB=<your-mongodb-uri>
   PORT=<your-port-number>
   ```

5. Start the local development server:

   ```
   npm start
   ```

6. The API will be available at `http://localhost:<your-port-number>`.

## Testing API

This API has already been hosted and deployed on a web server using render.com. Below are ways the API can be tested for each CRUD operation:

1. **Create a New Person:**
   
   ```
   curl -X POST -H "Content-Type: application/json" -d '{"id": <unique id>, "name": "John Doe", "age": 30}' https://eunice-person-crud-api.onrender.com/api
   ```
2. **Read a Person by ID:**
   
   ```
   curl https://eunice-person-crud-api.onrender.com/api/user-id
   ```

3. **Update a Person by ID**
   
    ```
    curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name", "age": 35}' https://eunice-person-crud-api.onrender.com/api/user-id
    ```
   
4. **Delete a Person by ID:**
    
   ```
   curl https://eunice-person-crud-api.onrender.com/api/user-id

## Deployment

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
