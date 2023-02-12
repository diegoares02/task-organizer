module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js", "!src/**/*.css"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
    },
  },
};
