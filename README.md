#### Installing eslint and eslint-config-airbnb

- Install eslint plugin for vscode

  `yarn add eslint -D`

- Install prettier plugin via vscode plugin.

- VS Code user settings

  - On the VS Code menu head over to : `Code > Preferences > Settings`
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
