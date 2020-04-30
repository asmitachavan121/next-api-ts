module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironment:"node",
    testPathIgnorePatterns:[
        "./trial.test.js",
        "./.next",
        "./pages/api/__tests__/home.test.js"
    ]
};