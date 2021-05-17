module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '~/(.*)': '<rootDir>/src/$1',
    '@layout/(.*)': '<rootDir>/src/layout/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/components/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{tss,tsx}',
    '!**/node_modules/**',
    '!**/pages/**'
  ]
}
