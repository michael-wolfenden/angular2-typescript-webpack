# angular2-typescript-webpack

Sample of using webpack to build a sample angular2 / typescript application

## Prerequisites

[TSD](https://github.com/DefinitelyTyped/tsd) is a package manager to search and install TypeScript definitions and is used by this project.

It is assumed that the tsd has been installed globally

    > npm install tsd -g

## Getting started

This will install all npm packages and typescript definitions

    > npm run initialize

## Development build

This will run a live reload server at http://localhost:8080/index.html

    > npm start

## Production build

This will package the application and output to /build

    > npm run production
