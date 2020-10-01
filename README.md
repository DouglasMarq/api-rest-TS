# Api-Rest-TS

Ready-to-Code template

## Folder structure

### Typescript Back-end

- **server/src/index.ts**: _File that is used to start the node server_

## Prerequisites

- **[Node.js & npm](https://nodejs.org/en/download/)**: _Please be sure you have installed Node.js and npm module on your computer before running the application_
- **[MongoDB](https://www.mongodb.com/download-center)**: _Download & Install MongoDB, and make sure it's running on the default port (27017)._
- **[Typescript](https://www.typescriptlang.org/)**: _Is used to build back-end application._

## Usage

### Typescript

- Clone this project on your computer
- Be sure you have started MongoDB service before running the application
- Navigate on project folder
- Run `npm run start` on here to Transpile TS to JS and start the server.
- You can open now send a Post request to http://localhost:3000/api/users/create with username, password and email.

## Task List

- [x] Util folder to manage utilities.
- [x] Implement JWT.
- [x] Routes use JWT Validation.
- [x] Use Express Chain of Responsability on routes.
- [x] Refactor Routers to take full advantage of Chain of Responsability.
- [x] Refactor Inversify, so some classes constructors doesn't know eachother (@inject()).
- [x] Migrate Mongo Models locations (remove from api folder).
- [ ] Migrate from mongoose to typegoose.
- [ ] Create logger (Winston) for routes and etc.
- [ ] Refactor Mongo connector.
