## Available Scripts

Please start the project with:

### `npm run dev`

Runs the app in the development mode `npm start` and `npm run server`.

##### User:

email: user@mail.com

password: Aa1234?!

#### Other scripts:

`npm start`

runs the development server

`npm run server`

Runs json-server-auth on port 4000: db.json

### Dependencies and Clarifications (more comments were added in the code):

- `concurrently`: to run both dev server and json-auth-server simmultaneuosly
- `cypress`: e2e testing
- `rimraf`: deletion of node_modules, equivalent to sudo rm -rf node_modules on unix. If linux containers are used, this dependency can be deleted. Most node problems are solved through deletion of package-lock.json and node_modules folder and having a way of deleting them in a fast fashion will speed up the development.
- `husky`: used for precommits so that code formatting rules are applied and unnecessary code reviews are done in Pull Requests (assuming git, code reviews and PRs will be incorporated as good practices)
- `prettier`: code formatting
- `material-ui`: components, centralized mui theme
- `roboto font`: desktop safe font
- `ajax`: api calls. Axios usage was decoupled and centralized if another dependency is chosen over axios making it easier to override.
- `formik and yup`: form validation and schemas. Type Validation was implemented with PropTypes.
- `react-router-dom`: routing
- `jwt-decode`: even though it is not used, it will come in handy when reading jwt, especially relevant data to the app such as user data and token expiration. Logout by inactivity and logout by token expiry was not implemented as they were not defined in the requirements (expiry time and what is inactivity -scroll, click, etc), but it is a must.
- `redux react-redux`: state management. There are different approaches to state management but redux is still the most commonly used for this purpose.
- `redux-thunk`: to handle asynchronous nature of api calls

The app was bootstrapped with create-react-app and jest works out of the box (unit and integration testing). e2e tests - 6 assertions -were created with cypress.io (under the hood uses mocha and chai, but it does not interfere with jest): the learning curve is not steep, it has good documentation and the possibility of storing video snapshots. `data-cy` attributes were not added to the solution, but it is the best way to go to target dom elements through data-.
