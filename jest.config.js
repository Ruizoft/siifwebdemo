module.exports = {
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/src/setup-jest.ts",
    "testURL": "http://localhost/",
    "transform": {
      "^.+\\.(ts|html)$": "<rootDir>/node_modules/jest-preset-angular/preprocessor.js",
      "^.+\\.js$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-test))"
    ],
    "globals": {
      "ts-jest": {
        "tsConfigFile": "src/tsconfig.spec.json",
        "useBabelrc": true
      },
      "__TRANSFORM_HTML__": true
    },
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.ts",
      "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.ts"
    }
}