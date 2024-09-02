/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  roots: ["static/react"],
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {"^(\\.{1,2}/.*)\\.js$": "$1"},
  setupFilesAfterEnv: ["<rootDir>/static/react/test/domMatcher.tsx"],
  testEnvironment: "jsdom",
  globals: {
    "IS_REACT_ACT_ENVIRONMENT": true
  },
  transform: {
    "^.+\\.tsx?$": ["ts-jest",{
      useESM: true,
    }],
  },
};
