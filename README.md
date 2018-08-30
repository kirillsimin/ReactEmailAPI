# PHP/Laravel Email Service API

## Description

This software consumes the [RESTful API back-end email service](https://github.com/kirillsimin/LaravelEmailAPI), based on the [Uber coding challenge](https://github.com/uber/coding-challenge-tools) requirements. It's a ReactJS app with Bootstrap CSS theme and Font Awesome icons.

## Installation

* Pull down the repository
* Run `npm install` to install all dependencies
* Run `npm start` to start the local server

## Usage

This package is intended as a front-end service only. It consumes several endpoints provided by the back-end using Axios. Use `/api/register` or `/api/login` to authenticate. Once the app receives a JWT, the user is authenticated, and the token is sent as an Authorization header with all subsequent requests. The app uses POST `/api/emails` to send a new email, and GET `/api/emails` to view the list of successfully sent messages.  `/api/logout` is used to clear out the JWT and log the user out.

## Notes

Make sure you set up the local proxy to correctly consume the local API. Look for `proxy : /api : target` in `package.json`.

Some monitoring tools that might be useful in an actual production environment are [BugSnag](https://www.bugsnag.com), [Sentry](https://sentry.io/), and [HotJar](https://www.hotjar.com/).