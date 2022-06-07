const base = require('./.eslintrc-base');

// # https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
module.exports = {
    parser: base.parser,
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json"
    },
    env: base.env,
    globals: base.globals,
    settings: base.settings,
    plugins: base.plugins,
    extends: base.extends,
    rules: base.rules,
    ignorePatterns: base.ignorePatterns
};
