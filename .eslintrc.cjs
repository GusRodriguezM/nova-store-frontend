module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.json', './tsconfig.node.json'],
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
