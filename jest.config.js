/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  roots: ["static/react"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
