# Api-Rest-TS
Ready-to-Code template

## Folder structure

### Typescript Back-end
+ **server/src/index.ts**: *File that is used to start the node server*


## Prerequisites

+ **[Node.js & npm](https://nodejs.org/en/download/)**: *Please be sure you have installed Node.js and npm module on your computer before running the application*
+ **[MongoDB](https://www.mongodb.com/download-center)**: *Download & Install MongoDB, and make sure it's running on the default port (27017).*
+ **[Typescript](https://www.typescriptlang.org/)**: *Is used to build back-end React application.*


## Usage

### Typescript
+ Clone this project on your computer
+ Be sure you have started MongoDB service before running the application
+ Navigate on project folder
+ Run ```npm run start``` on here to Transpile TS to JS and start the server.
+ You can open now send a Post request to http://localhost:3000/api/createRoute with username, password and email.


## Task List
* [ ] Util folder to manage utilities.
* [ ] Implement JWT.
* [ ] Use Express Chain of Responsability on routes.
* [ ] Refactor Routers to take full advantage of Chain of Responsability.
* [ ] Refactor Inversify, so some classes constructors doesn't know eachother (@inject()).
* [ ] Migrate Mongo Models locations (remove from api folder).
* [ ] Migrate from mongoose to typegoose.
* [ ] Create logger (Winston) for routes and etc.
