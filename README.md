
# Assignment-SDT

This is a Node.js-based project for managing tasks and user authentication.

## Features
- **Task Management:** Create, read, update, and delete tasks.
- **User Authentication:** Secure user registration and login with token-based authentication.
- **API Versioning:** Organized routes under `/api/v1`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rabi-anando-sarkar/Assignment-SDT.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Assignment-SDT
   ```

3. Install the required packages:
   ```bash
   npm install
   ```

## Running the Project

To start the development server, use:
   ```bash
   npm run dev
   ```

## API Endpoints

### Task Management

#### POST: Create a Task
**URL:** `http://localhost:8000/api/v1/todos/tasks`  
**Body:**
```json
{
    "title" : "test one",
    "description" : "this is a demo testing for task one"
}
```

#### PUT: Update a Task
**URL:** `http://localhost:8000/api/v1/todos/tasks/675d7536f2eba9dfeb667753`  
**Body:**
```json
{
    "status": "in-progress"
}
```

#### DELETE: Delete a Task
**URL:** `http://localhost:8000/api/v1/todos/tasks/675d7536f2eba9dfeb667753`  
**Body:**
```json
{
    "status": "in-progress"
}
```

#### GET: Read a Task
**URL:** `http://localhost:8000/api/v1/todos/tasks/675d7536f2eba9dfeb667753`

### User Authentication

#### POST: Register a User
**URL:** `http://localhost:8000/api/v1/users/register`  
**Body:**
```json
{
    "username" : "user two",
    "password" : "1234qwerty"
}
```

#### POST: Login a User
**URL:** `http://localhost:8000/api/v1/users/login`  
**Body:**
```json
{
    "username" : "user two",
    "password" : "1234qwerty"
}
```

## Dependencies

```json
"dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.4"
}
```
