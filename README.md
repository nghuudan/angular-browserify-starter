# Angular Browserify Starter
This is a starting point for creating single-page web applications with [AngularJS](https://angularjs.org) 1.5+ and [Browserify](http://browserify.org), which combines all your code and the required libraries into a single file bundle.

## Requirements
* [Node.js](https://nodejs.org)
* Basic knowledge of ES2015/ES6 (arrow functions, classes, and modules)

## Getting Started
1. Download and install [Node.js](https://nodejs.org)
2. Clone or fork this repository
3. In Terminal or Command Prompt, go to your clone directory
4. Enter `npm install` to install all the dependencies from NPM
5. Enter `npm run build` to build the file bundle for the application
6. Enter `npm start` to run the application in your default browser

## NPM Scripts
* `npm run build`: Creates a minified single file bundle and source map
* `npm run clean`: Deletes and creates the build directory
* `npm run esdoc`: Creates API documentation with [ESDoc](https://esdoc.org)
* `npm run watch`: Watches code and builds automatically (for development only)
* `npm start`: Runs the application in your default browser (for development only)
* `npm test`: Runs the [karma-jasmine](https://www.npmjs.com/package/karma-jasmine) unit tests

## API Documentation
* [ESDoc Example](https://nghuudan.github.io/angular-browserify-starter/)

## Directory Structure
* build/
	* app.bundle.js
* src/
	* components/
		* component-name/
			* name.component.js
			* name.controller.js
	* services/
		* model-name/
			* name.service.js
		* app.services.module.js
	* app.config.js
	* app.module.js
* test/
	* services/
		* model-name/
			* name.service.spec.js
	* app.module.spec.js
* index.html
* index.js
