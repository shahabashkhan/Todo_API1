
# Todo API

This repository contains a Todo API built with Express.js to manage tasks effectively.

### Features
CRUD Operations: Perform Create, Read, Update, and Delete operations for todos.
Authentication: Implement user registration and login functionalities.
RESTful API Endpoints: Manage todos through clear API endpoints.
Database Integration: PostgreSQL utilized for storing todo data.
Idempotent Requests: Certain API endpoints support idempotent requests.
Secure and Efficient Code: Follows best practices for security, efficiency, and maintainability.
In this application there is functionality of sending verification link to registerd email. this code is tested in local machine that why that functionality code is commented.


### Prerequisites
Node.js: Make sure Node.js is installed on your machine.
PostgreSQL: Install and configure PostgreSQL.


#### Getting Started
Clone the repository:
git clone https://github.com/Afzalkhann/Todo_API1.git

#### Install dependencies:

cd Todo_API1
npm install
Set up environment variables:


##### Create a .env file based on .env.example and add necessary configurations (DB credentials, etc.)
cp .env.example .env

### Start the application:
node index.js

or install nodemon using below command 
npm install nodemon

use is command to start the application
nodemon index.js

### API Documentation
Explore the API documentation by accessing **/api-docs** after starting the server.


### Running Tests**
Execute basic test cases for different endpoints using:

npm test

### Database Table details
##### table 1 : users
          CREATE TABLE users
          (
            user_id serial NOT NULL,
            name character varying(50) NOT NULL,
            email character varying(100) NOT NULL,
            createdat timestamp without time zone DEFAULT now(),
            token text,
            verified boolean,
            CONSTRAINT users_pkey PRIMARY KEY (user_id),
            CONSTRAINT users_email_key UNIQUE (email)
          )
          WITH (
            OIDS=FALSE
          );
          ALTER TABLE users
            OWNER TO postgres;

##### table 2: todos
        CREATE TABLE todos
        (
          todo_id serial NOT NULL,
          user_id integer,
          title character varying(100),
          description text,
          completed boolean DEFAULT false,
          createdat timestamp without time zone DEFAULT now(),
          updatedat timestamp without time zone DEFAULT now(),
          CONSTRAINT todos_pkey PRIMARY KEY (todo_id),
          CONSTRAINT todos_user_id_fkey FOREIGN KEY (user_id)
              REFERENCES users (user_id) MATCH SIMPLE
              ON UPDATE NO ACTION ON DELETE NO ACTION
        )
        WITH (
          OIDS=FALSE
        );
        ALTER TABLE todos
          OWNER TO postgres;
