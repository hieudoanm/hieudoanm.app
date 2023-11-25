export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e.test.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  }
};
