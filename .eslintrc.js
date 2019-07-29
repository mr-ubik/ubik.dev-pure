module.exports = {
    plugins: ["@typescript-eslint"],
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": "error",
    },
};
