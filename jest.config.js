module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // NOTE: ModulePathIgnorePatterns its a flag to exclude some files who i don't
  // want to show, bcz that files has an propose to exports default files. That's
  // why, I created the script below.
  modulePathIgnorePatterns: [
    'src/data/protocols/index.ts',
    'src/data/usecases/index.ts',
    'src/domain/models/index.ts',
    'src/domain/usecases/index.ts',
    'src/infra/criptography/index.ts',
    'src/presentation/controllers/index.ts',
    'src/presentation/errors/index.ts',
    'src/presentation/helpers/index.ts',
    'src/presentation/protocols/index.ts',
    'src/utils/index.ts',
  ],
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
