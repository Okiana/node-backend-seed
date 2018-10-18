# Node Backend Seed

This is a base project for back-end/microservice projects.

## Scripts

### Initial setup

In order to setup the application you need to run:

```bash
npm install
```

If you want to run the TypeScript build process, run:

```bash
npm run build
```

> Note: The build command is run every time you start your application, so no need to run it manually.

### Stating the application

If you just start your app, run:

```bash
npm run start
```

If you want to run a debug/watch mode, where your app reloads when changes to the code are made, run:

```bash
npm run start:watch
```

### Linting

In order to run the linting on the whole project, run:

```bash
npm run lint
```

This will run all the tslint rules found in the [stricter-tslint-config](https://www.npmjs.com/package/stricter-tslint-config).

### Testing

Testing is done via the [Jest framework](https://jestjs.io/). In order to run all the test with code coverage, run:

```bash
npm run test
```

If you want to continuously run the tests and watch for changes, run:

```bash
npm run test:watch
```

## Other

### Logs

The current application will log everything on the console and in the folder `/logs`. The logs are rolling and are based on a date/hour combination. Each hour a new log file is created and the old one is compressed and stored in the same folder.

### API Documentation

Swagger is used for the documentation of the Rest APIs. You need to write yaml files using the OpenAPI 3.0 standard in order to produce the end product. For now yaml files are only collected from the `/models` and `/controllers` folder.

In order to access the Swagger UI, navigate to `{host}:{port}/api-docs`.