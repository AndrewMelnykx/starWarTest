module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
  },
  maxWorkers: "50%",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@api/(.*)$": "<rootDir>/src/api/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@selectors/(.*)$": "<rootDir>/src/components/redux/selectors/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@header/(.*)$": "<rootDir>/src/components/header/$1",
    "^@card/(.*)$": "<rootDir>/src/components/exchange-card/$1",
    "^@variables$": "<rootDir>/src/helpers/_variables.scss",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",

    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(lodash-es|@babel|@testing-library)/)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  verbose: true,
};
