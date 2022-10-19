module.exports = {
  testIgnorePatterns: ['/node_modules/', '/src/assets', 'src/index.tsx'],
  transform: {
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
  },
};
