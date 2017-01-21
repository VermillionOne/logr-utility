# logr-utility
Utility tool for project logs.

## Installation

Install the package into your project using the following command:
```
npm install --save-dev logr-utility
```

Require into your documents:
```
const logr = require('logr-utility');
```

Instead of `console.log()`, use `logr.debug()`.

The debug method accepts three arguments. The first is the title of what you are logging, the second is the object being logged, and the third, if using an API, is the status that coincides with the response. The following might be used if you are looking to log the object returned when getting a list of users.

```
logr.debug("/GET users", users, 200);
```

## Usage

Start server with DEBUG=true in order to enable debug mode.

Example:
```
DEBUG=true nodemon src/serverjs
```

To run unit Tests, use mocha
```
DEBUG=true mocha
```
