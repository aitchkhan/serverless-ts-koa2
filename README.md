## `koa2-ts-quickstart`
> Typescript fork of [koa2-kickstarter](https://github.com/umayr/koa2-kickstarter). Wondering why Typescript ? Read [this](http://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript) post on StackOverflow

### Setup

```bash

  # clone the repository
  λ git clone https://github.com/aitchkhan/koa2-ts-quickstart
  # change the current directory
  λ cd koa2-ts-quickstart
  # install all dependencies
  λ npm install
  #Create a file development.secret in src/conf folder and paste:
  MYSQL_ROOT_PASSWORD=whatevermypassword

  # run the project
  λ docker-compose up --build
```

### Structure

```bash
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── conf            # wraps configurations files
│   ├── controller      # contains all controllers in the application
│   ├── custom-typings      # contains all controllers in the application
│   ├── middleware      # folder with all middlewares
│   ├── route           # wraps all the routes and exports a single composed middleware
│   └── service         # contains all the service logic
└── test                # unit tests
```

**Suggestion:** Every folder name is _singular_ like `route`, `middleware` instead of `routes`, `middlewares`. If you want to add more folders as per your need, make sure they should be singular too (for e.g. `util`, `helper` etc) only for the sake of consistency.

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Jest](https://github.com/facebook/jest) For all tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [Typescript](https://github.com/Microsoft/TypeScript) Typed superset of Javascript. Supports ES6/ES7 features.
- [TSLint](https://github.com/palantir/tslint) Linting purposes.
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).
- [Docker](https://www.docker.com/) Well, :whale: :dark_sunglasses:  

And many more small packages.

### Scripts

- `npm start` - simply starts the server
- `npm run watch` - reload changes
- `npm test` - execute all unit tests
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - starts the server with hot-reloading

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`

### Docker

`Dockerfile` for the project has been packaged.
`docker-compose` for running both mysql volume container and node.js container as well.
