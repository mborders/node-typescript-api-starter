# node-typescript-api-starter

## Commands

### Development Mode
* Builds, runs, and watches for file changes (reloads on change)
```
npm run dev
```

### TSLint
* Checks for TypeScript style errors (check `tslint.json` for rules)

### Build
* Builds output scripts to `dist/`
```
npm run build
```

### Run
* Builds and runs the compiled JS code in `dist/`
```
npm start
```

## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/controllers**      | Controllers define functions that respond to various HTTP requests                            |
| **src/models**           | Models define objects that will be returned by your controllers                               |
| **src**/App.ts           | Initializes the Express server and your REST API routes                                       |
| **src**/index.ts         | Creates an instance of App and starts the server                                              |
