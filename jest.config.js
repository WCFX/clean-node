module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@util/(.*)': '<rootDir>/src/util/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
