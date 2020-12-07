# Intro
Ternologic Project front-end.

[![NPM Version][npm-image]][npm-url]
[![React Version][react-image]][react-url]
[![Material-UI Version][material-ui-image]][material-ui-url]

# Before you Code
1. Clone the repo 
```
$ git clone git@github.com:malkaby/task_2020_12_06.git
```
2. Install npm dependencies
```
npm install
```
3. Install npm DEV dependencies
```
npm install -D
```

# Code styling and best practices
For this purpose we will use ESLint. We will follow JS standard style guide. 
>If you'll use Studio Visual Code **highly recommended** make sure to install ESLint extention.

Run following command to install ESLinter globally
```
$ npm install -g eslint
```
`.eslintrc.json` file contains all rules.

Then install vscode extention
# Codebase structure

```
src
  ├── api
  │   └── user.js
  ├── proxy
  │   └── user.js  
  ├── common
  │   ├── components
  │   │   ├── macro
  │   │   │   ├── Home.js
  │   │   │   └── Group.js
  │   │   └── micro
  │   │       ├── Input.js
  │   │       ├── Card.js
  │   │       ├── Table.js
  │   │       └── Button.js
  │   └── state
  │       ├── store.js  
  │       ├── actions.js
  │       └── reducers.js
  ├── features
  │   ├── feature-1
  │   │   ├── components
  │   │   │   └── ComponentA.js
  │   │   ├── state
  │   │   │   ├── store.js
  │   │   │   ├── actions.js
  │   │   │   └── reducers.js
  │   │   ├── App.js
  │   │   └── App.test.js
  │   └── feature-2
  │       ├── components
  │       │   └── ComponentB.js
  │       ├── state
  │       │   ├── store.js
  │       │   ├── actions.js
  │       │   └── reducers.js
  │       ├── App.js
  │       └── App.test.js
  ├── img
  │   ├── driver.svg
  │   └── cool.png
  ├── locale
  │   ├── ar.json
  │   └── en.json
  ├── ternologic-types
  │   └── index.d.ts   
  ├── utils
  │   ├── helpers.js
  │   ├── handlers.js
  │   └── hooks.js
  ├── styles
  │   ├── makes.js
  │   └── themes.js
  ├── App.js
  └── index.js
```

### Completed task should be:
- Error free.
- Properly commented.
- Props documented - adhere to JSDoc syntax [jsdoc][jsdoc].
- PropType checked - adhere to React type checking approach [PropTypes][react-typechecking].
- All exceptions properly handled.
- Unit tested (passed for all use cases).
- Compatible with major browsers.

### Notes
- Please don't install any dependency. Use only the ones defined in the package.json

[react-url]: https://reactjs.org/
[react-image]: https://badgen.net/badge/react/16.13/blue
[npm-url]: https://www.npmjs.com/
[npm-image]: https://badgen.net/badge/npm/6.14/red?icon=npm
[material-ui-url]: https://material-ui.com/
[material-ui-image]: https://badgen.net/badge/material-ui/4.11/cyan
[react-typechecking]: https://reactjs.org/docs/typechecking-with-proptypes.html
[jsdoc]: https://jsdoc.app/
