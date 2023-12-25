module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // "semi": "off"
    },
    ignorePatterns: [
        "/*.js",
        "/*.json",
        "/*.lock",
        "/*.md",
        "src",
        "public/assets/scripts/bundle.js",
    ],

}
