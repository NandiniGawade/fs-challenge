module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/setupTests.ts'],
  testEnvironment: 'jsdom',
};
