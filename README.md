# GovTech Node.js API Asessment

Teachers need a system where they can perform administrative functions for their students. Teachers and students are identified by their email addresses.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

### Installing

A step by step series of examples that will help you get a development environment running

1. Clone the repository:

```bash
git clone https://github.com/koozy0/govtech-assignment.git
```

2. Install dependencies:

```bash
cd ${path-to-project}
npm install
```

3. Create `.env` file.

```bash
touch .env
```

4. Update the `.env` file with the database configurations, using `.env.example` as the template.

5. Create the database schema for local development (develop).

6. Migrate the table definitions:

```bash
npm run db:migrate
```

7. Seed the database:

```bash
npm run db:seed
```

8. Start the server:

```bash
npm run dev
```

9. Check that the development server is running by sending a GET request to `127.0.0.1:3000` where `3000` is the default port. You can change the default port by creating a `PORT` environment variable in the `.env`. You should see the following response:

```json
{
  "message": "Server works!"
}
```

## Running the tests

## Routes

### Main API routes

| Method | Route                         | Description                                                       |
| :----- | :---------------------------- | :---------------------------------------------------------------- |
| POST   | /api/register                 | Register one or more students to a specified teacher              |
| GET    | /api/commonstudents           | Retrieve students who are registered to all of the given teachers |
| POST   | /api/suspend                  | Suspend a specified student                                       |
| POST   | /api/retrievefornotifications | Retrieve a list of students who can receive a given notification  |

### Utility routes - Student

| Method | Route            | Description                                         |
| :----- | :--------------- | :-------------------------------------------------- |
| GET    | /api/student     | Retrieve all students                               |
| GET    | /api/student/:id | Retrieve a student with the given `id`              |
| POST   | /api/student     | Create a student                                    |
| PUT    | /api/student/:id | Update the details of a student with the given `id` |
| DELETE | /api/student/:id | Delete a student with the given `id`                |

### Utility routes - Teacher

| Method | Route            | Description                                         |
| :----- | :--------------- | :-------------------------------------------------- |
| GET    | /api/teacher     | Retrieve all teachers                               |
| GET    | /api/teacher/:id | Retrieve a teacher with the given `id`              |
| POST   | /api/teacher     | Create a teacher                                    |
| PUT    | /api/teacher/:id | Update the details of a teacher with the given `id` |
| DELETE | /api/teacher/:id | Delete a teacher with the given `id`                |

## Deployment

To be added.

## Built with

- [Node.js](https://nodejs.org/en/download/)
- [Express](https://expressjs.com/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [Knex.js](http://knexjs.org/)

## Authors

- [Koo Zheng Yu](https://github.com/koozy0)
