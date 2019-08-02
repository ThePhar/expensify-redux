# Expensify Redux ![Passing Build](https://img.shields.io/badge/build-passing-success) 

Expensify Redux is a simple to use web application that stores and displays your expenses. The back-end authentication and database management is handled using Firebase by Google.

Visit the full application here: **[Expensify Redux](https://phar-expensify-redux.herokuapp.com/)**

## Installation

Clone this repository and use `yarn install` to install all dependancies. Then, using `.env.test` as a template, create a `.env` file in the root directory and fill out the variables with your firebase configuration.

Use `yarn run-dev` to run the development server on your machine.

Use `yarn test` to run all the tests with Jest test runner.

Use `yarn build && yarn start` to build and start up a production-ready server.

## Technologies Used

This application was written for **React 16** with a variety of additional libraries to assist with production, including **Redux**, **React-Router**, **Firebase**, **React-Dates**, **Moment.js**, **Numeral.js**, **Tachyons**, and a production server using **Node.js** and **Express.js**.

To assist with testing this application's test environment was built using **Jest**, **Enzyme**, **React-Mock-Store**. 

See [package.json](https://github.com/ThePhar/expensify-redux/blob/master/package.json) for all the packages used in this project.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Inspiration

This application is based on the excellent React course by Andrew Mead at [Mead.io](https://mead.io). 

All code inside is my own, but the application does take inspiration from second project in that course, which also helped in learning many of these technologies.

## License
[MIT](https://choosealicense.com/licenses/mit/)