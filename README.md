## Recommended Directory Structure

The recommended directory structure for an Amplify project looks like:

```shell
App/      # → Root folder for the project
├── public/
└── src/         # → React App Entry
    └── ___tests___/
    └── assets/
        └── fonts/
        └── static/
        └── styles/
    └── components/
    └── graphql/
    └── helpers/
    └── pages/
    └── routers/
```

## Installing eslint and eslint-config-airbnb

ESLint is the one of the most widely-used linting tools in web development. It’s an invaluable tool for keeping the team’s code consistent by ensuring everyone is following the same style conventions.

This project comes with preconfigured `ESLint` and `Prettier` settings that increase productivity and ensure code consistensy. Only thing a developer will need to manually do is copy the `vscode` settings to their code editor's `settings.json` file.

#### What the config does

- Lints JavaScript based on the latest Airbnb standards
- Fixes issues and formatting errors with Prettier on every save
- Lints + Fixes React via eslint-config-airbnb

### Setup

- Install prettier plugin for VS Code Editor.

- VS Code user settings

  - After installing `Prettier`, on the VS Code menu head over to : `Code > Preferences > Settings`
  - On the top right corner of your editor click the `{}` to open the `settings.json` file for VS Code

- Add following lines to VS Code user settings

- ```bash

    "editor.formatOnSave": true,

  // turn it off for JS and JSX, we will do this via eslint

  "[javascript]": {
      "editor.formatOnSave": false
  },

  "[javascriptreact]": {
      "editor.formatOnSave": false
  },

  // tell the ESLint plugin to run on save

  "eslint.autoFixOnSave": true,

  // Optional BUT IMPORTANT: If you have the prettier extension enabled for other //languages like CSS and HTML, turn it off for JS since we are doing it through Eslint // already

  "prettier.disableLanguages": [
      "javascript",
      "javascriptreact"
  ],
  ```

```

```

Start Coding!
