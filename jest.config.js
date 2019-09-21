module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts}',
    '!node_modules/**',
    '!**/vendor/**',
    '!dist/**',
    '!coverage/**',
    '!jest.config.js',
    '!src/db/**'
  ]
};
